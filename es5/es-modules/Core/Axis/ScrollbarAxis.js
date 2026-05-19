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
import { addEvent, correctFloat, defined, pick, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ScrollbarAxis;
(function (ScrollbarAxis) {
    /* *
     *
     *  Variables
     *
     * */
    var Scrollbar;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Attaches to axis events to create scrollbars if enabled.
     *
     * @internal
     *
     * @param {Highcharts.Axis} AxisClass
     * Axis class to extend.
     *
     * @param {Highcharts.Scrollbar} ScrollbarClass
     * Scrollbar class to use.
     */
    function compose(AxisClass, ScrollbarClass) {
        if (pushUnique(composed, 'Axis.Scrollbar')) {
            Scrollbar = ScrollbarClass;
            addEvent(AxisClass, 'afterGetOffset', onAxisAfterGetOffset);
            addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            addEvent(AxisClass, 'afterRender', onAxisAfterRender);
        }
    }
    ScrollbarAxis.compose = compose;
    /** @internal */
    function getExtremes(axis) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var axisMin = pick((_a = axis.options) === null || _a === void 0 ? void 0 : _a.min, axis.min);
        var axisMax = pick((_b = axis.options) === null || _b === void 0 ? void 0 : _b.max, axis.max);
        return {
            axisMin: axisMin,
            axisMax: axisMax,
            scrollMin: defined(axis.dataMin) ?
                Math.min(axisMin, (_c = axis.min) !== null && _c !== void 0 ? _c : Infinity, axis.dataMin, (_d = axis.threshold) !== null && _d !== void 0 ? _d : Infinity) : axisMin,
            scrollMax: (_f = (_e = axis.treeGrid) === null || _e === void 0 ? void 0 : _e.adjustedMax) !== null && _f !== void 0 ? _f : (defined(axis.dataMax) ?
                Math.max(axisMax, (_g = axis.max) !== null && _g !== void 0 ? _g : -Infinity, axis.dataMax, (_h = axis.threshold) !== null && _h !== void 0 ? _h : -Infinity) :
                axisMax)
        };
    }
    /**
     * Make space for a scrollbar.
     * @internal
     */
    function onAxisAfterGetOffset() {
        var axis = this, scrollbar = axis.scrollbar, opposite = scrollbar && !scrollbar.options.opposite, index = axis.horiz ? 2 : opposite ? 3 : 1;
        if (scrollbar) {
            // Reset scrollbars offsets
            axis.chart.scrollbarsOffsets = [0, 0];
            axis.chart.axisOffset[index] +=
                scrollbar.size + (scrollbar.options.margin || 0);
        }
    }
    /**
     * Wrap axis initialization and create scrollbar if enabled.
     * @internal
     */
    function onAxisAfterInit() {
        var _a, _b;
        var axis = this;
        if ((_b = (_a = axis.options) === null || _a === void 0 ? void 0 : _a.scrollbar) === null || _b === void 0 ? void 0 : _b.enabled) {
            // Predefined options:
            axis.options.scrollbar.vertical = !axis.horiz;
            axis.options.startOnTick = axis.options.endOnTick = false;
            axis.scrollbar = new Scrollbar(axis.chart.renderer, axis.options.scrollbar, axis.chart);
            addEvent(axis.scrollbar, 'changed', function (e) {
                var _a = getExtremes(axis), axisMin = _a.axisMin, axisMax = _a.axisMax, unitedMin = _a.scrollMin, unitedMax = _a.scrollMax, minPX = axis.toPixels(unitedMin), maxPX = axis.toPixels(unitedMax), rangePX = maxPX - minPX;
                var to, from;
                // #12834, scroll when show/hide series, wrong extremes
                if (!defined(axisMin) || !defined(axisMax)) {
                    return;
                }
                if ((axis.horiz && !axis.reversed) ||
                    (!axis.horiz && axis.reversed)) {
                    to = Math.min(unitedMax, axis.toValue(minPX + rangePX * this.to));
                    from = Math.max(unitedMin, axis.toValue(minPX + rangePX * this.from));
                }
                else {
                    // Y-values in browser are reversed, but this also
                    // applies for reversed horizontal axis:
                    to = Math.min(unitedMax, axis.toValue(minPX + rangePX * (1 - this.from)));
                    from = Math.max(unitedMin, axis.toValue(minPX + rangePX * (1 - this.to)));
                }
                if (this.shouldUpdateExtremes(e.DOMType)) {
                    // #17977, set animation to undefined instead of true
                    var animate = e.DOMType === 'mousemove' ||
                        e.DOMType === 'touchmove' ? false : void 0;
                    axis.setExtremes(correctFloat(from), correctFloat(to), true, animate, e);
                }
                else {
                    // When live redraw is disabled, don't change extremes
                    // Only change the position of the scrollbar thumb
                    this.setRange(this.from, this.to);
                }
            });
        }
    }
    /**
     * Wrap rendering axis, and update scrollbar if one is created.
     * @internal
     */
    function onAxisAfterRender() {
        var axis = this, _a = getExtremes(axis), scrollMin = _a.scrollMin, scrollMax = _a.scrollMax, scrollbar = axis.scrollbar, offset = (axis.axisTitleMargin || 0) + (axis.titleOffset || 0), scrollbarsOffsets = axis.chart.scrollbarsOffsets, axisMargin = axis.options.margin || 0;
        var offsetsIndex, from, to;
        if (scrollbar && scrollbarsOffsets) {
            if (axis.horiz) {
                // Reserve space for labels/title
                if (!axis.opposite) {
                    scrollbarsOffsets[1] += offset;
                }
                scrollbar.position(axis.left, (axis.top +
                    axis.height +
                    2 +
                    scrollbarsOffsets[1] -
                    (axis.opposite ? axisMargin : 0)), axis.width, axis.height);
                // Next scrollbar should reserve space for margin (if set)
                if (!axis.opposite) {
                    scrollbarsOffsets[1] += axisMargin;
                }
                offsetsIndex = 1;
            }
            else {
                // Reserve space for labels/title
                if (axis.opposite) {
                    scrollbarsOffsets[0] += offset;
                }
                var xPosition = void 0;
                if (!scrollbar.options.opposite) {
                    xPosition = axis.opposite ? 0 : axisMargin;
                }
                else {
                    xPosition = axis.left +
                        axis.width +
                        2 +
                        scrollbarsOffsets[0] -
                        (axis.opposite ? 0 : axisMargin);
                }
                scrollbar.position(xPosition, axis.top, axis.width, axis.height);
                // Next scrollbar should reserve space for margin (if set)
                if (axis.opposite) {
                    scrollbarsOffsets[0] += axisMargin;
                }
                offsetsIndex = 0;
            }
            scrollbarsOffsets[offsetsIndex] += scrollbar.size +
                (scrollbar.options.margin || 0);
            if (isNaN(scrollMin) ||
                isNaN(scrollMax) ||
                !defined(axis.min) ||
                !defined(axis.max) ||
                (defined(axis.dataMin) && // #23335
                    axis.dataMin === axis.dataMax // #10733
                )) {
                // Default action: when data extremes are the same or there is
                // not extremes on the axis, but scrollbar exists, make it
                // full size
                scrollbar.setRange(0, 1);
            }
            else if (axis.min === axis.max) { // #20359
                // When the extremes are the same, set the scrollbar to a point
                // within the extremes range. Utilize pointRange to perform the
                // calculations. (#20359)
                var interval = axis.pointRange / (axis.dataMax +
                    1);
                from = interval * axis.min;
                to = interval * (axis.max + 1);
                scrollbar.setRange(from, to);
            }
            else {
                from = (axis.toPixels(axis.min) - axis.toPixels(scrollMin)) /
                    (axis.toPixels(scrollMax) - axis.toPixels(scrollMin));
                to = (axis.toPixels(axis.max) - axis.toPixels(scrollMin)) /
                    (axis.toPixels(scrollMax) - axis.toPixels(scrollMin));
                if ((axis.horiz && !axis.reversed) ||
                    (!axis.horiz && axis.reversed)) {
                    scrollbar.setRange(from, to);
                }
                else {
                    // Inverse vertical axis
                    scrollbar.setRange(1 - to, 1 - from);
                }
            }
        }
    }
})(ScrollbarAxis || (ScrollbarAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ScrollbarAxis;
