/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import H from '../Globals.js';
var composed = H.composed;
import StackItem from './Stacking/StackItem.js';
import { addEvent, objectEach, pushUnique } from '../../Shared/Utilities.js';
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
        var _a;
        var axis = this, stacks = (_a = axis.waterfall) === null || _a === void 0 ? void 0 : _a.stacks;
        if (stacks) {
            stacks.changed = false;
            delete stacks.alreadyChanged;
        }
    }
    /** @internal */
    function onAxisAfterRender() {
        var _a;
        var axis = this, stackLabelOptions = axis.options.stackLabels;
        if ((stackLabelOptions === null || stackLabelOptions === void 0 ? void 0 : stackLabelOptions.enabled) &&
            ((_a = axis.waterfall) === null || _a === void 0 ? void 0 : _a.stacks)) {
            axis.waterfall.renderStackTotals();
        }
    }
    /** @internal */
    function onAxisInit() {
        var axis = this;
        if (!axis.waterfall) {
            axis.waterfall = new Composition(axis);
        }
    }
    /** @internal */
    function onChartBeforeRedraw() {
        var axes = this.axes, series = this.series;
        for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
            var s = series_1[_i];
            if (s.options.stacking) {
                for (var _a = 0, axes_1 = axes; _a < axes_1.length; _a++) {
                    var axis = axes_1[_a];
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
    var Composition = /** @class */ (function () {
        /* *
         *
         *  Constructors
         *
         * */
        function Composition(axis) {
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
        Composition.prototype.renderStackTotals = function () {
            var _a, _b;
            var yAxis = this.axis, waterfallStacks = (_a = yAxis.waterfall) === null || _a === void 0 ? void 0 : _a.stacks, stackTotalGroup = (_b = yAxis.stacking) === null || _b === void 0 ? void 0 : _b.stackTotalGroup, dummyStackItem = new StackItem(yAxis, yAxis.options.stackLabels || {}, false, 0, void 0);
            this.dummyStackItem = dummyStackItem;
            // Render each waterfall stack total
            if (stackTotalGroup) {
                objectEach(waterfallStacks, function (type) {
                    objectEach(type, function (stackItem, key) {
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
        };
        return Composition;
    }());
    WaterfallAxis.Composition = Composition;
})(WaterfallAxis || (WaterfallAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default WaterfallAxis;
