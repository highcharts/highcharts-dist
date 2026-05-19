/* *
 *
 *  Solid angular gauge module
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { optionsToObject } from '../../Extensions/BorderRadius.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var _a = SeriesRegistry.seriesTypes, GaugeSeries = _a.gauge, PieSeries = _a.pie;
import SolidGaugeAxis from '../../Core/Axis/SolidGaugeAxis.js';
import SolidGaugeSeriesDefaults from './SolidGaugeSeriesDefaults.js';
import { clamp, extend, isNumber, merge, pick, relativeLength } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * SolidGauge series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.solidgauge
 *
 * @augments Highcharts.Series
 */
var SolidGaugeSeries = /** @class */ (function (_super) {
    __extends(SolidGaugeSeries, _super);
    function SolidGaugeSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    // Extend the translate function to extend the Y axis with the necessary
    // decoration (#5895).
    SolidGaugeSeries.prototype.translate = function () {
        var axis = this.yAxis;
        SolidGaugeAxis.init(axis);
        // Prepare data classes
        if (!axis.dataClasses && axis.options.dataClasses) {
            axis.initDataClasses(axis.options);
        }
        axis.initStops();
        // Generate points and inherit data label position
        GaugeSeries.prototype.translate.call(this);
    };
    // Draw the points where each point is one needle.
    SolidGaugeSeries.prototype.drawPoints = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var series = this, yAxis = series.yAxis, center = yAxis.center, options = series.options, renderer = series.chart.renderer, overshoot = options.overshoot, rounded = options.rounded, borderRadius = optionsToObject(rounded ? '50%' : ((_a = options.borderRadius) !== null && _a !== void 0 ? _a : yAxis.pane.options.borderRadius)).radius, overshootVal = isNumber(overshoot) ?
            overshoot / 180 * Math.PI :
            0;
        var thresholdAngleRad;
        // Handle the threshold option
        if (isNumber(options.threshold)) {
            thresholdAngleRad = yAxis.startAngleRad + yAxis.translate(options.threshold, void 0, void 0, void 0, true);
        }
        this.thresholdAngleRad = pick(thresholdAngleRad, yAxis.startAngleRad);
        for (var _i = 0, _h = series.points; _i < _h.length; _i++) {
            var point = _h[_i];
            // #10630 null point should not be draw
            if (!point.isNull) { // Condition like in pie chart
                var paneInnerSize = yAxis.pane.options.innerSize, radius = ((relativeLength((_c = (_b = point.options.radius) !== null && _b !== void 0 ? _b : options.radius) !== null && _c !== void 0 ? _c : '100%', center[2] / 2))), innerRadius = Math.min((relativeLength((_f = (_e = (_d = point.options.innerRadius) !== null && _d !== void 0 ? _d : options.innerRadius) !== null && _e !== void 0 ? _e : (isNumber(paneInnerSize) ?
                    paneInnerSize / 2 :
                    paneInnerSize)) !== null && _f !== void 0 ? _f : 0, center[2] / 2)), radius), axisMinAngle = Math.min(yAxis.startAngleRad, yAxis.endAngleRad), axisMaxAngle = Math.max(yAxis.startAngleRad, yAxis.endAngleRad), attribs = {};
                var graphic = point.graphic, rotation = (yAxis.startAngleRad +
                    yAxis.translate(point.y, void 0, void 0, void 0, true)), shapeArgs = void 0, d = void 0, toColor = yAxis.toColor(point.y, point), className = point.getClassName();
                if (toColor === 'none') { // #3708
                    toColor = point.color || series.color || 'none';
                }
                if (toColor !== 'none') {
                    point.color = toColor;
                }
                // Handle overshoot and clipping to axis max/min
                rotation = clamp(rotation, axisMinAngle - overshootVal, axisMaxAngle + overshootVal);
                // Handle the wrap option
                if (options.wrap === false) {
                    rotation = clamp(rotation, axisMinAngle, axisMaxAngle);
                }
                var angleOfRounding = rounded ?
                    ((radius - innerRadius) / 2) / radius :
                    0, start = Math.min(rotation, series.thresholdAngleRad) -
                    angleOfRounding;
                var end = Math.max(rotation, series.thresholdAngleRad) +
                    angleOfRounding;
                if (end - start > 2 * Math.PI) {
                    end = start + 2 * Math.PI;
                }
                point.shapeArgs = shapeArgs = {
                    x: center[0],
                    y: center[1],
                    r: radius,
                    innerR: innerRadius,
                    start: start,
                    end: end,
                    borderRadius: borderRadius
                };
                point.startR = radius; // For PieSeries.animate
                if (toColor !== 'none') {
                    attribs.fill = toColor;
                }
                if (graphic) {
                    d = shapeArgs.d;
                    graphic.animate(extend(attribs, shapeArgs));
                    if (d) {
                        shapeArgs.d = d; // Animate alters it
                    }
                }
                else {
                    attribs['sweep-flag'] = 0;
                    point.graphic = graphic = renderer.arc(shapeArgs)
                        .attr(attribs)
                        .add(series.group);
                }
                if (!renderer.styledMode) {
                    if (options.linecap !== 'square') {
                        graphic.attr({
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round'
                        });
                    }
                    graphic.attr({
                        stroke: options.borderColor || 'none',
                        'stroke-width': options.borderWidth || 0
                    });
                }
                else if ((_g = series.yAxis) === null || _g === void 0 ? void 0 : _g.stops) {
                    className = className
                        .replace(/highcharts-color-\d/gm, '')
                        .trim();
                }
                if (graphic) {
                    graphic.addClass(className);
                }
                // Positions for the tooltip
                var midRadius = innerRadius + (radius - innerRadius) * 0.5;
                point.tooltipPos = [
                    center[0] + Math.cos(rotation) * midRadius,
                    center[1] + Math.sin(rotation) * midRadius
                ];
            }
        }
    };
    // Extend the pie slice animation by animating from start angle and up.
    SolidGaugeSeries.prototype.animate = function (init) {
        if (!init) {
            this.startAngleRad = this.thresholdAngleRad;
            PieSeries.prototype.animate.call(this, init);
        }
    };
    /* *
     *
     *  Static Properties
     *
     * */
    SolidGaugeSeries.defaultOptions = merge(GaugeSeries.defaultOptions, SolidGaugeSeriesDefaults);
    return SolidGaugeSeries;
}(GaugeSeries));
SeriesRegistry.registerSeriesType('solidgauge', SolidGaugeSeries);
/* *
 *
 *  Default Export
 *
 * */
export default SolidGaugeSeries;
