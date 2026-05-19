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
import Chart from '../Chart/Chart.js';
import F from '../Templating.js';
var format = F.format;
import D from '../Defaults.js';
var getOptions = D.getOptions;
import NavigatorDefaults from '../../Stock/Navigator/NavigatorDefaults.js';
import RangeSelectorDefaults from '../../Stock/RangeSelector/RangeSelectorDefaults.js';
import ScrollbarDefaults from '../../Stock/Scrollbar/ScrollbarDefaults.js';
import StockUtilities from '../../Stock/Utilities/StockUtilities.js';
var setFixedRange = StockUtilities.setFixedRange;
import { addEvent, clamp, crisp, defined, extend, find, isNumber, isString, merge, pick, splat } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Get stock-specific default axis options.
 *
 * @internal
 * @function getDefaultAxisOptions
 */
function getDefaultAxisOptions(coll, options, defaultOptions) {
    var _a, _b;
    if (coll === 'xAxis') {
        return {
            minPadding: 0,
            maxPadding: 0,
            overscroll: 0,
            ordinal: true
        };
    }
    if (coll === 'yAxis') {
        return {
            labels: {
                y: -2
            },
            opposite: (_b = (_a = defaultOptions.opposite) !== null && _a !== void 0 ? _a : options.opposite) !== null && _b !== void 0 ? _b : true,
            showLastLabel: !!(
            // #6104, show last label by default for category axes
            options.categories ||
                options.type === 'category'),
            title: {
                text: void 0
            }
        };
    }
    return {};
}
/**
 * Get stock-specific forced axis options.
 *
 * @internal
 * @function getForcedAxisOptions
 */
function getForcedAxisOptions(type, chartOptions) {
    var _a;
    if (type === 'xAxis') {
        // Always disable startOnTick:true on the main axis when the navigator
        // is enabled (#1090)
        var navigatorEnabled = pick((_a = chartOptions.navigator) === null || _a === void 0 ? void 0 : _a.enabled, NavigatorDefaults.enabled, true);
        var axisOptions = {
            type: 'datetime',
            categories: void 0
        };
        if (navigatorEnabled) {
            axisOptions.startOnTick = false;
            axisOptions.endOnTick = false;
        }
        return axisOptions;
    }
    return {};
}
/* *
 *
 *  Class
 *
 * */
/**
 * Stock-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/stock
 *
 * @class
 * @name Highcharts.StockChart
 * @extends Highcharts.Chart
 */
var StockChart = /** @class */ (function (_super) {
    __extends(StockChart, _super);
    function StockChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.StockChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function|true} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded. Set to `true` to return a promise that
     *        resolves when the chart is ready.
     *
     * @emits Highcharts.StockChart#event:init
     * @emits Highcharts.StockChart#event:afterInit
     */
    StockChart.prototype.init = function (userOptions, callback) {
        var _a, _b;
        var defaultOptions = getOptions(), xAxisOptions = userOptions.xAxis, yAxisOptions = userOptions.yAxis, 
        // Always disable startOnTick:true on the main axis when the
        // navigator is enabled (#1090)
        navigatorEnabled = pick((_a = userOptions.navigator) === null || _a === void 0 ? void 0 : _a.enabled, NavigatorDefaults.enabled, true);
        // Avoid doing these twice
        userOptions.xAxis = userOptions.yAxis = void 0;
        var options = merge({
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                zooming: {
                    pinchType: 'x',
                    mouseWheel: {
                        type: 'x'
                    }
                }
            },
            navigator: {
                enabled: navigatorEnabled
            },
            scrollbar: {
                // #4988 - check if setOptions was called
                enabled: pick(ScrollbarDefaults.enabled, true)
            },
            rangeSelector: {
                // #4988 - check if setOptions was called
                enabled: pick(RangeSelectorDefaults.rangeSelector.enabled, true)
            },
            title: {
                text: null
            },
            tooltip: {
                split: pick((_b = defaultOptions.tooltip) === null || _b === void 0 ? void 0 : _b.split, true),
                crosshairs: true
            },
            legend: {
                enabled: false
            }
        }, userOptions, // User's options
        {
            isStock: true // Internal flag
        });
        userOptions.xAxis = xAxisOptions;
        userOptions.yAxis = yAxisOptions;
        // Apply X axis options to both single and multi y axes
        options.xAxis = splat(userOptions.xAxis || {}).map(function (xAxisOptions) { return merge(getDefaultAxisOptions('xAxis', xAxisOptions, defaultOptions.xAxis), 
        // #7690
        xAxisOptions, // User options
        getForcedAxisOptions('xAxis', userOptions)); });
        // Apply Y axis options to both single and multi y axes
        options.yAxis = splat(userOptions.yAxis || {}).map(function (yAxisOptions) { return merge(getDefaultAxisOptions('yAxis', yAxisOptions, defaultOptions.yAxis), 
        // #7690
        yAxisOptions // User options
        ); });
        _super.prototype.init.call(this, options, callback);
    };
    /**
     * Factory for creating different axis types.
     * Extended to add stock defaults.
     *
     * @internal
     * @function Highcharts.StockChart#createAxis
     * @param {string} coll
     * An axis type.
     * @param {Chart.CreateAxisOptionsObject} options
     * The axis creation options.
     */
    StockChart.prototype.createAxis = function (coll, options) {
        options.axis = merge(getDefaultAxisOptions(coll, options.axis, getOptions()[coll]), options.axis, getForcedAxisOptions(coll, this.userOptions));
        return _super.prototype.createAxis.call(this, coll, options);
    };
    return StockChart;
}(Chart));
addEvent(Chart, 'update', function (e) {
    var chart = this, options = e.options;
    // Use case: enabling scrollbar from a disabled state.
    // Scrollbar needs to be initialized from a controller, Navigator in this
    // case (#6615)
    if ('scrollbar' in options && chart.navigator) {
        merge(true, chart.options.scrollbar, options.scrollbar);
        chart.navigator.update({ enabled: !!chart.navigator.navigatorEnabled });
        delete options.scrollbar;
    }
});
/* *
 *
 *  Composition
 *
 * */
/** @internal */
(function (StockChart) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Composes the chart with the stock-specific functionality.
     *
     * @internal
     *
     * @param {Highcharts.Class<Highcharts.Chart>} ChartClass
     * The chart class to compose.
     *
     * @param {Highcharts.Class<Highcharts.Axis>} AxisClass
     * The axis class to compose.
     *
     * @param {Highcharts.Class<Highcharts.Series>} SeriesClass
     * The series class to compose.
     *
     * @param {Highcharts.Class<Highcharts.SVGRenderer>} SVGRendererClass
     * The SVG renderer class to compose.
     */
    function compose(ChartClass, AxisClass, SeriesClass, SVGRendererClass) {
        var seriesProto = SeriesClass.prototype;
        if (!seriesProto.forceCropping) {
            addEvent(AxisClass, 'afterDrawCrosshair', onAxisAfterDrawCrosshair);
            addEvent(AxisClass, 'afterHideCrosshair', onAxisAfterHideCrosshair);
            addEvent(AxisClass, 'autoLabelAlign', onAxisAutoLabelAlign);
            addEvent(AxisClass, 'destroy', onAxisDestroy);
            addEvent(AxisClass, 'getPlotLinePath', onAxisGetPlotLinePath);
            ChartClass.prototype.setFixedRange = setFixedRange;
            seriesProto.forceCropping = seriesForceCropping;
            addEvent(SeriesClass, 'setOptions', onSeriesSetOptions);
            SVGRendererClass.prototype.crispPolyLine = svgRendererCrispPolyLine;
        }
    }
    StockChart.compose = compose;
    /**
     * Extend crosshairs to also draw the label.
     * @internal
     */
    function onAxisAfterDrawCrosshair(event) {
        var _a, _b, _c, _d;
        var axis = this;
        // Check if the label has to be drawn
        if (!(((_b = (_a = axis.crosshair) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.enabled) &&
            axis.cross &&
            isNumber(axis.min) &&
            isNumber(axis.max))) {
            return;
        }
        var chart = axis.chart, log = axis.logarithmic, options = axis.crosshair.label, // The label's options
        horiz = axis.horiz, // Axis orientation
        opposite = axis.opposite, // Axis position
        left = axis.left, // Left position
        top = axis.top, // Top position
        width = axis.width, tickInside = axis.options.tickPosition === 'inside', snap = axis.crosshair.snap !== false, e = event.e || ((_c = axis.cross) === null || _c === void 0 ? void 0 : _c.e), point = event.point;
        var crossLabel = axis.crossLabel, // The svgElement
        posx, posy, formatOption = options.format, formatFormat = '', limit, offset = 0, 
        // Use last available event (#5287)
        min = axis.min, max = axis.max;
        if (log) {
            min = log.lin2log(axis.min);
            max = log.lin2log(axis.max);
        }
        var align = (horiz ? 'center' : opposite ?
            (axis.labelAlign === 'right' ? 'right' : 'left') :
            (axis.labelAlign === 'left' ? 'left' : 'center'));
        // If the label does not exist yet, create it.
        if (!crossLabel) {
            crossLabel = axis.crossLabel = chart.renderer
                .label('', 0, void 0, options.shape || 'callout')
                .addClass('highcharts-crosshair-label highcharts-color-' + ((point === null || point === void 0 ? void 0 : point.series) ?
                point.series.colorIndex :
                axis.series[0] && this.series[0].colorIndex))
                .attr({
                align: options.align || align,
                padding: pick(options.padding, 8),
                r: pick(options.borderRadius, 3),
                zIndex: 2
            })
                .add(axis.labelGroup);
            // Presentational
            if (!chart.styledMode) {
                crossLabel
                    .attr({
                    fill: options.backgroundColor ||
                        ((_d = point === null || point === void 0 ? void 0 : point.series) === null || _d === void 0 ? void 0 : _d.color) || // #14888
                        'var(--highcharts-neutral-color-60)',
                    stroke: options.borderColor || '',
                    'stroke-width': options.borderWidth || 0
                })
                    .css(extend({
                    color: 'var(--highcharts-background-color)',
                    fontWeight: 'normal',
                    fontSize: '0.7em',
                    textAlign: 'center'
                }, options.style || {}));
            }
        }
        if (horiz) {
            posx = snap ? (point.plotX || 0) + left : e.chartX;
            posy = top + (opposite ? 0 : axis.height);
        }
        else {
            posx = left + axis.offset + (opposite ? width : 0);
            posy = snap ? (point.plotY || 0) + top : e.chartY;
        }
        if (!formatOption && !options.formatter) {
            if (axis.dateTime) {
                formatFormat = '%b %d, %Y';
            }
            formatOption =
                '{value' + (formatFormat ? ':' + formatFormat : '') + '}';
        }
        // Show the label
        var value = snap ?
            (axis.isXAxis ? point.x : point.y) :
            axis.toValue(horiz ? e.chartX : e.chartY);
        // Crosshair should be rendered within Axis range (#7219) and the point
        // of currentPriceIndicator should be inside the plot area (#14879).
        var isInside = (point === null || point === void 0 ? void 0 : point.series) ?
            point.series.isPointInside(point) :
            (isNumber(value) && value > min && value < max);
        var text = '';
        if (formatOption) {
            text = format(formatOption, { value: value }, chart);
        }
        else if (options.formatter && isNumber(value)) {
            text = options.formatter.call(axis, value, axis);
        }
        crossLabel.attr({
            text: text,
            x: posx,
            y: posy,
            visibility: isInside ? 'inherit' : 'hidden'
        });
        var crossBox = crossLabel.getBBox();
        // Now it is placed we can correct its position
        if (isNumber(crossLabel.x) && !horiz && !opposite) {
            posx = crossLabel.x - (crossBox.width / 2);
        }
        if (isNumber(crossLabel.y)) {
            if (horiz) {
                if ((tickInside && !opposite) || (!tickInside && opposite)) {
                    posy = crossLabel.y - crossBox.height;
                }
            }
            else {
                posy = crossLabel.y - (crossBox.height / 2);
            }
        }
        // Check the edges
        if (horiz) {
            limit = {
                left: left,
                right: left + axis.width
            };
        }
        else {
            limit = {
                left: axis.labelAlign === 'left' ? left : 0,
                right: axis.labelAlign === 'right' ?
                    left + axis.width :
                    chart.chartWidth
            };
        }
        var translateX = crossLabel.translateX || 0;
        // Left edge
        if (translateX < limit.left) {
            offset = limit.left - translateX;
        }
        // Right edge
        if (translateX + crossBox.width >= limit.right) {
            offset = -(translateX + crossBox.width - limit.right);
        }
        // Show the crosslabel
        crossLabel.attr({
            x: Math.max(0, posx + offset),
            y: Math.max(0, posy),
            // First set x and y, then anchorX and anchorY, when box is actually
            // calculated, #5702
            anchorX: horiz ?
                posx :
                (axis.opposite ? 0 : chart.chartWidth),
            anchorY: horiz ?
                (axis.opposite ? chart.chartHeight : 0) :
                posy + crossBox.height / 2
        });
    }
    /**
     * Wrapper to hide the label.
     * @internal
     */
    function onAxisAfterHideCrosshair() {
        var axis = this;
        if (axis.crossLabel) {
            axis.crossLabel = axis.crossLabel.hide();
        }
    }
    /**
     * Override the automatic label alignment so that the first Y axis' labels
     * are drawn on top of the grid line, and subsequent axes are drawn outside.
     * @internal
     */
    function onAxisAutoLabelAlign(e) {
        var axis = this, chart = axis.chart, options = axis.options, panes = chart._labelPanes = chart._labelPanes || {}, labelOptions = options.labels;
        if (chart.options.isStock && axis.coll === 'yAxis') {
            var key = options.top + ',' + options.height;
            // Do it only for the first Y axis of each pane
            if (!panes[key] && labelOptions.enabled) {
                if (labelOptions.distance === 15 && // Default
                    axis.side === 1) {
                    labelOptions.distance = 0;
                }
                if (typeof labelOptions.align === 'undefined') {
                    labelOptions.align = 'right';
                }
                panes[key] = axis;
                e.align = 'right';
                e.preventDefault();
            }
        }
    }
    /**
     * Clear axis from label panes. (#6071)
     * @internal
     */
    function onAxisDestroy() {
        var axis = this, chart = axis.chart, key = (axis.options &&
            (axis.options.top + ',' + axis.options.height));
        if (key && chart._labelPanes && chart._labelPanes[key] === axis) {
            delete chart._labelPanes[key];
        }
    }
    /**
     * Override getPlotLinePath to allow for multipane charts.
     * @internal
     */
    function onAxisGetPlotLinePath(e) {
        var axis = this, axisOptions = axis.options, series = (axis.isLinked && !axis.series && axis.linkedParent ?
            axis.linkedParent.series :
            axis.series), chart = axis.chart, horiz = axis.horiz, renderer = chart.renderer, result = [], _a = e.acrossPanes, acrossPanes = _a === void 0 ? true : _a, force = e.force, translatedValue = e.translatedValue, value = e.value, allPerpendicularAxes = (axis.isXAxis ? chart.yAxis : chart.xAxis) || [], crossingPosName = horiz ? 'top' : 'left', crossingLenName = horiz ? 'height' : 'width', hasCrossingBounds = defined(axisOptions[crossingPosName]) ||
            defined(axisOptions[crossingLenName]), 
        /**
         * Return the other axis based on either the axis option or on
         * related series.
         * @internal
         */
        getAxis = function (coll) {
            var otherColl = coll === 'xAxis' ? 'yAxis' : 'xAxis', opt = axisOptions[otherColl];
            if (acrossPanes && !axisOptions.isInternal) {
                return allPerpendicularAxes.filter(function (a) {
                    return !a.options.isInternal;
                });
            }
            // Other axis indexed by number
            if (isNumber(opt)) {
                return [chart[otherColl][opt]];
            }
            // Other axis indexed by id (like navigator)
            if (isString(opt)) {
                return [chart.get(opt)];
            }
            // Auto detect based on existing series
            return series.map(function (s) { return s[otherColl]; });
        };
        /**
         * Push a segment to the result SVGPath array
         */
        function pushSegment(pos, crossingPos1, crossingPos2) {
            result.push(['M', horiz ? pos : crossingPos1, horiz ? crossingPos1 : pos], ['L', horiz ? pos : crossingPos2, horiz ? crossingPos2 : pos]);
        }
        var axes = [], // #3416 need a default array
        uniqueAxes, transVal;
        if ((chart.options.isStock || hasCrossingBounds) &&
            // Ignore in case of colorAxis or zAxis. #3360, #3524, #6720
            (axis.coll === 'xAxis' || axis.coll === 'yAxis')) {
            e.preventDefault();
            // Get the related axes based on series
            axes = getAxis(axis.coll);
            // Get the related axes based options.*Axis setting #2810
            for (var _i = 0, allPerpendicularAxes_1 = allPerpendicularAxes; _i < allPerpendicularAxes_1.length; _i++) {
                var A = allPerpendicularAxes_1[_i];
                if (!A.options.isInternal) {
                    var a = (A.isXAxis ? 'yAxis' : 'xAxis'), relatedAxis = (defined(A.options[a]) &&
                        chart[a][A.options[a]]);
                    if (axis === relatedAxis) {
                        axes.push(A);
                    }
                }
            }
            // Remove duplicates in the axes array. If there are no axes in the
            // axes array, we are adding an axis without data, so we need to
            // populate this with grid lines (#2796).
            uniqueAxes = axes.length ?
                [] :
                [axis.isXAxis ? chart.yAxis[0] : chart.xAxis[0]]; // #3742
            var _loop_1 = function (axis2) {
                if (uniqueAxes.indexOf(axis2) === -1 &&
                    // Do not draw on axis which overlap completely. #5424
                    !find(uniqueAxes, function (unique) { return (unique.pos === axis2.pos &&
                        unique.len === axis2.len); })) {
                    uniqueAxes.push(axis2);
                }
            };
            for (var _b = 0, axes_1 = axes; _b < axes_1.length; _b++) {
                var axis2 = axes_1[_b];
                _loop_1(axis2);
            }
            transVal = pick(translatedValue, axis.translate(value || 0, void 0, void 0, e.old));
            if (isNumber(transVal)) {
                var skip = void 0, pos = horiz ?
                    transVal + axis.pos :
                    axis.pos + axis.len - transVal;
                // Outside plot area
                if (force !== 'pass' &&
                    (pos < axis.pos || pos > axis.pos + axis.len)) {
                    if (force) {
                        pos = clamp(pos, axis.pos, axis.pos + axis.len);
                    }
                    else {
                        skip = true;
                    }
                }
                if (!skip) {
                    if (
                    // If the perpendicular position is set explicitly on
                    // the axis, use it. For example, if `top` and `height`
                    // options are set on a horizontal x-axis, the grid
                    // lines should conform to that position.
                    hasCrossingBounds &&
                        // In parallel coordinates, the axis height/width is 0,
                        // so we need to skip that, #24442.
                        axis[crossingLenName] > 0 &&
                        !acrossPanes) {
                        pushSegment(pos, axis[crossingPosName], axis[crossingPosName] + axis[crossingLenName]);
                    }
                    else {
                        for (var _c = 0, uniqueAxes_1 = uniqueAxes; _c < uniqueAxes_1.length; _c++) {
                            var perpendicularAxis = uniqueAxes_1[_c];
                            pushSegment(pos, perpendicularAxis.pos, perpendicularAxis.pos + perpendicularAxis.len);
                        }
                    }
                }
            }
            e.path = result.length > 0 ?
                renderer.crispPolyLine(result, e.lineWidth || 1) :
                // #3557 getPlotLinePath in regular Highcharts also returns null
                void 0;
        }
    }
    /**
     * Handle som Stock-specific series defaults, override the plotOptions
     * before series options are handled.
     * @internal
     */
    function onSeriesSetOptions(e) {
        var series = this;
        if (series.chart.options.isStock) {
            var overrides = void 0;
            if (series.is('column') || series.is('columnrange')) {
                overrides = {
                    borderWidth: 0,
                    shadow: false
                };
            }
            else if (!series.is('scatter') && !series.is('sma')) {
                overrides = {
                    marker: {
                        enabled: false,
                        radius: 2
                    }
                };
            }
            if (overrides) {
                e.plotOptions[series.type] = merge(e.plotOptions[series.type], overrides);
            }
        }
    }
    /**
     * Based on the data grouping options decides whether
     * the data should be cropped while processing.
     *
     * @ignore
     * @function Highcharts.Series#forceCropping
     */
    function seriesForceCropping() {
        var series = this, chart = series.chart, options = series.options, dataGroupingOptions = options.dataGrouping, groupingEnabled = (series.allowDG !== false &&
            dataGroupingOptions &&
            pick(dataGroupingOptions.enabled, chart.options.isStock));
        return groupingEnabled;
    }
    /* eslint-disable jsdoc/check-param-names */
    /**
     * Factory function for creating new stock charts. Creates a new
     * {@link Highcharts.StockChart|StockChart} object with different default
     * options than the basic Chart.
     *
     * @example
     * let chart = Highcharts.stockChart('container', {
     *     series: [{
     *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     *         pointInterval: 24 * 60 * 60 * 1000
     *     }]
     * });
     *
     * @function Highcharts.stockChart
     *
     * @param {string|Highcharts.HTMLDOMElement} [renderTo]
     *        The DOM element to render to, or its id.
     *
     * @param {Highcharts.Options} options
     *        The chart options structure as described in the
     *        [options reference](https://api.highcharts.com/highstock).
     *
     * @param {Highcharts.ChartCallbackFunction} [callback]
     *        A function to execute when the chart object is finished
     *        rendering and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        [chart.events.load](https://api.highcharts.com/highstock/chart.events.load)
     *        handler is equivalent.
     *
     * @return {Highcharts.StockChart}
     *         The chart object.
     */
    function stockChart(a, b, c) {
        var chart = new StockChart(a, b, c);
        return chart.promise || chart;
    }
    StockChart.stockChart = stockChart;
    /* eslint-enable jsdoc/check-param-names */
    /**
     * Function to crisp a line with multiple segments
     *
     * @internal
     * @function Highcharts.SVGRenderer#crispPolyLine
     */
    function svgRendererCrispPolyLine(points, width) {
        // Points format: [['M', 0, 0], ['L', 100, 0]]
        // normalize to a crisp line
        for (var i = 0; i < points.length; i = i + 2) {
            var start = points[i], end = points[i + 1];
            if (defined(start[1]) && start[1] === end[1]) {
                start[1] = end[1] = crisp(start[1], width);
            }
            if (defined(start[2]) && start[2] === end[2]) {
                start[2] = end[2] = crisp(start[2], width);
            }
        }
        return points;
    }
})(StockChart || (StockChart = {}));
/* *
 *
 *  Default Export
 *
 * */
export default StockChart;
