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
import A from '../Core/Animation/AnimationUtilities.js';
var setAnimation = A.setAnimation;
import H from '../Core/Globals.js';
var composed = H.composed;
import { addEvent, pushUnique } from '../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
var integrations = {};
var layouts = {};
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
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
 * @private
 */
function onChartAfterPrint() {
    if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach(function (layout) {
            // Return to default simulation
            layout.updateSimulation();
        });
        this.redraw();
    }
}
/**
 * Disable simulation before print if enabled.
 * @private
 */
function onChartBeforePrint() {
    if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach(function (layout) {
            layout.updateSimulation(false);
        });
        this.redraw();
    }
}
/**
 * Clear previous layouts.
 * @private
 */
function onChartPredraw() {
    if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach(function (layout) {
            layout.stop();
        });
    }
}
/**
 * @private
 */
function onChartRender() {
    var _a;
    var systemsStable, afterRender = false;
    var layoutStep = function (layout) {
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
    // Don't animate layout when series is dragged
    if (this.graphLayoutsLookup && !((_a = this.pointer) === null || _a === void 0 ? void 0 : _a.hasDragged)) {
        setAnimation(false, this);
        // Start simulation
        this.graphLayoutsLookup.forEach(function (layout) { return layout.start(); });
        // Just one sync step, to run different layouts similar to
        // async mode.
        while (!systemsStable) {
            systemsStable = true;
            this.graphLayoutsLookup.forEach(layoutStep);
        }
        if (afterRender) {
            this.series.forEach(function (series) {
                if (series && series.layout) {
                    series.render();
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
var GraphLayoutComposition = {
    compose: compose,
    integrations: integrations,
    layouts: layouts
};
export default GraphLayoutComposition;
