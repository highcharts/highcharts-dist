/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import H from '../Globals.js';
const { composed } = H;
import StackItem from './Stacking/StackItem.js';
import U from '../Utilities.js';
const { addEvent, objectEach, pushUnique } = U;
/* *
 *
 *  Namespace
 *
 * */
/** @internal */
var WaterfallAxis;
(function (WaterfallAxis) {
    /* *
     *
     *  Interfaces
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(AxisClass, ChartClass) {
        if (pushUnique(composed, 'Axis.Waterfall')) {
            addEvent(AxisClass, 'init', onAxisInit);
            addEvent(AxisClass, 'afterBuildStacks', onAxisAfterBuildStacks);
            addEvent(AxisClass, 'afterRender', onAxisAfterRender);
            addEvent(ChartClass, 'beforeRedraw', onChartBeforeRedraw);
        }
    }
    WaterfallAxis.compose = compose;
    /** @internal */
    function onAxisAfterBuildStacks() {
        const axis = this, stacks = axis.waterfall?.stacks;
        if (stacks) {
            stacks.changed = false;
            delete stacks.alreadyChanged;
        }
    }
    /** @internal */
    function onAxisAfterRender() {
        const axis = this, stackLabelOptions = axis.options.stackLabels;
        if (stackLabelOptions?.enabled &&
            axis.waterfall?.stacks) {
            axis.waterfall.renderStackTotals();
        }
    }
    /** @internal */
    function onAxisInit() {
        const axis = this;
        if (!axis.waterfall) {
            axis.waterfall = new Composition(axis);
        }
    }
    /** @internal */
    function onChartBeforeRedraw() {
        const axes = this.axes, series = this.series;
        for (const serie of series) {
            if (serie.options.stacking) {
                for (const axis of axes) {
                    if (!axis.isXAxis && axis.waterfall) {
                        axis.waterfall.stacks.changed = true;
                    }
                }
                break;
            }
        }
    }
    /* *
     *
     *  Classes
     *
     * */
    /** @internal */
    class Composition {
        /* *
         *
         *  Constructors
         *
         * */
        constructor(axis) {
            this.axis = axis;
            this.stacks = {
                changed: false
            };
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Calls StackItem.prototype.render function that creates and renders
         * stack total label for each waterfall stack item.
         *
         * @internal
         * @function Highcharts.Axis#renderWaterfallStackTotals
         */
        renderStackTotals() {
            const yAxis = this.axis, waterfallStacks = yAxis.waterfall?.stacks, stackTotalGroup = yAxis.stacking?.stackTotalGroup, dummyStackItem = new StackItem(yAxis, yAxis.options.stackLabels || {}, false, 0, void 0);
            this.dummyStackItem = dummyStackItem;
            // Render each waterfall stack total
            if (stackTotalGroup) {
                objectEach(waterfallStacks, (type) => {
                    objectEach(type, (stackItem, key) => {
                        dummyStackItem.total = stackItem.stackTotal;
                        dummyStackItem.x = +key;
                        if (stackItem.label) {
                            dummyStackItem.label = stackItem.label;
                        }
                        StackItem.prototype.render.call(dummyStackItem, stackTotalGroup);
                        stackItem.label = dummyStackItem.label;
                        delete dummyStackItem.label;
                    });
                });
            }
            dummyStackItem.total = null;
        }
    }
    WaterfallAxis.Composition = Composition;
})(WaterfallAxis || (WaterfallAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default WaterfallAxis;
