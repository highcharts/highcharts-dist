/* *
 *
 *  Networkgraph series
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import { setAnimation } from '../Core/Animation/AnimationUtilities.js';
import H from '../Core/Globals.js';
const { composed } = H;
import { addEvent, fireEvent, pushUnique } from '../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const integrations = {};
const layouts = {};
/* *
 *
 *  Functions
 *
 * */
/**
 * @internal
 */
function compose(ChartClass) {
    if (pushUnique(composed, 'GraphLayout')) {
        addEvent(ChartClass, 'afterPrint', onChartAfterPrint);
        addEvent(ChartClass, 'beforePrint', onChartBeforePrint);
        addEvent(ChartClass, 'predraw', onChartPredraw);
        addEvent(ChartClass, 'render', onChartRender);
    }
}
/**
 * Re-enable simulation after print.
 * @internal
 */
function onChartAfterPrint() {
    if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach((layout) => {
            // Return to default simulation
            layout.updateSimulation();
        });
        this.redraw();
    }
}
/**
 * Disable simulation before print if enabled.
 * @internal
 */
function onChartBeforePrint() {
    if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach((layout) => {
            layout.updateSimulation(false);
        });
        this.redraw();
    }
}
/**
 * Clear previous layouts.
 * @internal
 */
function onChartPredraw() {
    if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach((layout) => {
            layout.stop();
        });
    }
}
/**
 * @internal
 */
function onChartRender() {
    let systemsStable, afterRender = false;
    const layoutStep = (layout) => {
        if (layout.maxIterations-- &&
            isFinite(layout.temperature) &&
            !layout.isStable() &&
            !layout.enableSimulation) {
            // Hook similar to build-in addEvent, but instead of
            // creating whole events logic, use just a function.
            // It's faster which is important for rAF code.
            // Used e.g. in packed-bubble series for bubble radius
            // calculations
            if (layout.beforeStep) {
                layout.beforeStep();
            }
            layout.step();
            systemsStable = false;
            afterRender = true;
        }
    };
    // Don't restart layout when chart is panned
    if (this.graphLayoutsLookup && (!this.pointer?.hasDragged ||
        this.graphLayoutsLookup.some((layout) => layout.nodes.some((node) => !!node.inDragMode)))) {
        setAnimation(false, this);
        // Start simulation
        this.graphLayoutsLookup.forEach((layout) => layout.start());
        // Just one sync step, to run different layouts similar to
        // async mode.
        while (!systemsStable) {
            systemsStable = true;
            this.graphLayoutsLookup.forEach(layoutStep);
        }
        if (afterRender) {
            this.series.forEach((series) => {
                if (series && series.layout) {
                    series.render();
                    fireEvent(series, 'afterSimulation');
                }
            });
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const GraphLayoutComposition = {
    compose,
    integrations,
    layouts
};
export default GraphLayoutComposition;
