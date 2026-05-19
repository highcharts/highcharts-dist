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
import Axis from '../Axis.js';
import ColorAxisBase from './ColorAxisBase.js';
import ColorAxisComposition from './ColorAxisComposition.js';
import ColorAxisDefaults from './ColorAxisDefaults.js';
import D from '../../Defaults.js';
var defaultOptions = D.defaultOptions;
import SeriesRegistry from '../../Series/SeriesRegistry.js';
var Series = SeriesRegistry.series;
import { defined, extend, fireEvent, isArray, isNumber, merge, pick, relativeLength } from '../../../Shared/Utilities.js';
defaultOptions.colorAxis = merge(defaultOptions.xAxis, ColorAxisDefaults);
/* *
 *
 *  Class
 *
 * */
/**
 * The ColorAxis object for inclusion in gradient legends.
 *
 * @class
 * @name Highcharts.ColorAxis
 * @augments Highcharts.Axis
 *
 * @param {Highcharts.Chart} chart
 * The related chart of the color axis.
 *
 * @param {Highcharts.ColorAxisOptions} userOptions
 * The color axis options for initialization.
 */
var ColorAxis = /** @class */ (function (_super) {
    __extends(ColorAxis, _super);
    /* *
     *
     *  Constructors
     *
     * */
    /** @internal */
    function ColorAxis(chart, userOptions) {
        var _this = _super.call(this, chart, userOptions) || this;
        /** @internal */
        _this.clippable = false;
        /** @internal */
        _this.coll = 'colorAxis';
        /** @internal */
        _this.visible = true;
        _this.init(chart, userOptions);
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    ColorAxis.compose = function (ChartClass, FxClass, LegendClass, SeriesClass) {
        ColorAxisComposition.compose(ColorAxis, ChartClass, FxClass, LegendClass, SeriesClass);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the color axis.
     *
     * @function Highcharts.ColorAxis#init
     *
     * @param {Highcharts.Chart} chart
     * The related chart of the color axis.
     *
     * @param {Highcharts.ColorAxisOptions} userOptions
     * The color axis options for initialization.
     */
    ColorAxis.prototype.init = function (chart, userOptions) {
        var axis = this;
        var legend = chart.options.legend || {}, horiz = userOptions.layout ?
            userOptions.layout !== 'vertical' :
            legend.layout !== 'vertical';
        axis.side = userOptions.side || horiz ? 2 : 1;
        axis.reversed = userOptions.reversed;
        axis.opposite = !horiz;
        _super.prototype.init.call(this, chart, userOptions, 'colorAxis');
        // `super.init` saves the extended user options, now replace it with the
        // originals
        this.userOptions = userOptions;
        if (isArray(chart.userOptions.colorAxis)) {
            chart.userOptions.colorAxis[this.index] = userOptions;
        }
        // Prepare data classes
        if (userOptions.dataClasses) {
            axis.initDataClasses(userOptions);
        }
        axis.initStops();
        // Override original axis properties
        axis.horiz = horiz;
        axis.zoomEnabled = false;
    };
    /**
     * Returns true if the series has points at all.
     *
     * @function Highcharts.ColorAxis#hasData
     *
     * @return {boolean}
     * True, if the series has points, otherwise false.
     */
    ColorAxis.prototype.hasData = function () {
        return !!(this.tickPositions || []).length;
    };
    /**
     * Override so that ticks are not added in data class axes (#6914)
     * @internal
     */
    ColorAxis.prototype.setTickPositions = function () {
        if (!this.dataClasses) {
            return _super.prototype.setTickPositions.call(this);
        }
    };
    /**
     * Extend the setOptions method to process title, extreme colors and
     * color stops.
     * @internal
     */
    ColorAxis.prototype.setOptions = function (userOptions) {
        var legend = this.chart.options.legend || {}, theme = defaultOptions.colorAxis, layout = userOptions.layout || legend.layout || theme.layout, horiz = layout !== 'vertical';
        var sideSpecific = horiz ? { title: { rotation: 0 } } :
            {
                title: {
                    rotation: 90,
                    margin: 10
                }
            };
        var options = merge(sideSpecific, theme, userOptions, 
        // Forced options
        {
            showEmpty: false,
            visible: this.chart.options.legend.enabled &&
                userOptions.visible !== false
        });
        _super.prototype.setOptions.call(this, options);
        this.options.crosshair = this.options.marker;
    };
    /** @internal */
    ColorAxis.prototype.setAxisSize = function () {
        var _a;
        var axis = this, chart = axis.chart, symbol = (_a = axis.legendItem) === null || _a === void 0 ? void 0 : _a.symbol;
        var _b = axis.getSize(), width = _b.width, height = _b.height;
        if (symbol) {
            this.left = +symbol.attr('x');
            this.top = +symbol.attr('y');
            this.width = width = +symbol.attr('width');
            this.height = height = +symbol.attr('height');
            this.right = chart.chartWidth - this.left - width;
            this.bottom = chart.chartHeight - this.top - height;
            this.pos = this.horiz ? this.left : this.top;
        }
        // Fake length for disabled legend to avoid tick issues
        // and such (#5205)
        this.len = (this.horiz ? width : height) ||
            ColorAxis.defaultLegendLength;
    };
    /**
     * Override the getOffset method to add the whole axis groups inside the
     * legend.
     * @internal
     */
    ColorAxis.prototype.getOffset = function () {
        var _a;
        var axis = this, chart = axis.chart, group = (_a = axis.legendItem) === null || _a === void 0 ? void 0 : _a.group, sideOffset = chart.axisOffset[axis.side], clipOffset = chart.clipOffset, legend = chart.legend;
        if (group) {
            // Hook for the getOffset method to add groups to this parent group
            axis.axisParent = group;
            // Call the base
            _super.prototype.getOffset.call(this);
            // Adds `maxLabelLength` needed for label padding corrections done
            // by `render()` and `getMargins()` (#15551).
            legend.allItems.forEach(function (item) {
                if (item instanceof ColorAxis) {
                    item.drawLegendSymbol(legend, item);
                }
            });
            legend.render();
            chart.getMargins(true);
            // First time only
            if (!axis.added) {
                axis.added = true;
            }
            axis.labelLeft = 0;
            axis.labelRight = axis.width;
            // Reset it to avoid color axis reserving space
            chart.axisOffset[axis.side] = sideOffset;
            chart.clipOffset = clipOffset;
        }
    };
    /**
     * Create the color gradient.
     * @internal
     */
    ColorAxis.prototype.setLegendColor = function () {
        var axis = this;
        var horiz = axis.horiz;
        var reversed = axis.reversed;
        var one = reversed ? 1 : 0;
        var zero = reversed ? 0 : 1;
        var grad = horiz ? [one, 0, zero, 0] : [0, zero, 0, one]; // #3190
        axis.legendColor = {
            linearGradient: {
                x1: grad[0],
                y1: grad[1],
                x2: grad[2],
                y2: grad[3]
            },
            stops: axis.stops
        };
    };
    /**
     * The color axis appears inside the legend and has its own legend symbol.
     * @internal
     */
    ColorAxis.prototype.drawLegendSymbol = function (legend, item) {
        var _a, _b, _c, _d, _e;
        var axis = this, legendItem = item.legendItem || {}, padding = legend.padding, legendOptions = legend.options, labelOptions = axis.options.labels, itemDistance = pick(legendOptions.itemDistance, 10), horiz = axis.horiz, _f = axis.getSize(), width = _f.width, height = _f.height, labelPadding = pick(
        // @todo: This option is not documented, nor implemented when
        // vertical
        legendOptions.labelPadding, horiz ? 16 : 30);
        this.setLegendColor();
        var titleHeight = 0;
        var titleWidth = 0;
        if (((_a = axis.options.title) === null || _a === void 0 ? void 0 : _a.text) && !axis.axisTitle) {
            if (!axis.axisGroup) {
                axis.axisParent = legendItem.group;
                axis.createGroups();
            }
            // --- THE SVG TRANSFORM FIX ---
            // Provide mock dimensions so getTitlePosition returns valid numbers
            // on Pass 1. This ensures the rotation transform succeeds, allowing
            // getBBox() to read the true ROTATED dimensions!
            var tempLen = axis.len, tempTop = axis.top, tempLeft = axis.left, tempWidth = axis.width;
            axis.len = horiz ? width : height;
            axis.top = 0;
            axis.left = 0;
            axis.width = width;
            axis.addTitle(true);
            // Restore the original undefined values
            // (setAxisSize will overwrite them later)
            axis.len = tempLen;
            axis.top = tempTop;
            axis.left = tempLeft;
            axis.width = tempWidth;
            // -----------------------------
        }
        if (axis.axisTitle) {
            var titleBBox = axis.axisTitle.getBBox();
            titleHeight = titleBBox.height;
            titleWidth = titleBBox.width;
        }
        var titleOptions = axis.options.title || {};
        var titleMargin = axis.axisTitle ? ((_b = titleOptions.margin) !== null && _b !== void 0 ? _b : 0) : 0;
        var yShift = horiz ? (titleHeight + titleMargin) : 0;
        // Create the gradient
        if (!legendItem.symbol) {
            legendItem.symbol = this.chart.renderer.symbol('roundedRect')
                .attr({
                r: (_c = legendOptions.symbolRadius) !== null && _c !== void 0 ? _c : 3,
                zIndex: 1
            }).add(legendItem.group);
        }
        legendItem.symbol.attr({
            x: 0,
            y: (legend.baseline || 0) - 11 + yShift,
            width: width,
            height: height
        });
        // Set how much space this legend item takes up
        if (horiz) {
            legendItem.labelWidth = Math.max(width + padding + itemDistance, titleWidth || 0);
            legendItem.labelHeight = height + padding + labelPadding +
                titleHeight + titleMargin;
        }
        else {
            legendItem.labelWidth = width + padding +
                ((_e = (_d = labelOptions.x) !== null && _d !== void 0 ? _d : labelOptions.distance) !== null && _e !== void 0 ? _e : 0) +
                (this.maxLabelLength || 0) +
                (titleWidth || 0) + titleMargin;
            legendItem.labelHeight = Math.max(height + padding, titleHeight || 0);
        }
    };
    /**
     * Override the title position to place it above the color bar
     * for horizontal layouts, or outside the labels for vertical layouts.
     * @internal
     */
    ColorAxis.prototype.getTitlePosition = function (axisTitle) {
        var _a, _b, _c, _d;
        // Pass the argument down to the base class
        var pos = _super.prototype.getTitlePosition.call(this, axisTitle), titleMargin = (_b = (_a = this.options.title) === null || _a === void 0 ? void 0 : _a.margin) !== null && _b !== void 0 ? _b : 0;
        if (this.horiz && axisTitle) {
            pos.y = this.top - titleMargin;
        }
        else if (!this.horiz && axisTitle) {
            var labelOptions = this.options.labels || {}, labelDistance = (_d = (_c = labelOptions.x) !== null && _c !== void 0 ? _c : labelOptions.distance) !== null && _d !== void 0 ? _d : 0;
            pos.x = this.left + this.width + labelDistance +
                (this.maxLabelLength || 0) + titleMargin;
        }
        return pos;
    };
    /**
     * Fool the legend.
     * @internal
     */
    ColorAxis.prototype.setState = function (state) {
        this.series.forEach(function (series) {
            series.setState(state);
        });
    };
    /** @internal */
    ColorAxis.prototype.setVisible = function () {
    };
    /** @internal */
    ColorAxis.prototype.getSeriesExtremes = function () {
        var axis = this;
        var series = axis.series;
        var colorValArray, colorKey, calculatedExtremes, cSeries, i = series.length;
        this.dataMin = Infinity;
        this.dataMax = -Infinity;
        while (i--) { // X, y, value, other
            cSeries = series[i];
            colorKey = cSeries.colorKey = pick(cSeries.options.colorKey, cSeries.colorKey, cSeries.pointValKey, cSeries.zoneAxis, 'y');
            calculatedExtremes = cSeries[colorKey + 'Min'] &&
                cSeries[colorKey + 'Max'];
            // Find the first column that has values
            for (var _i = 0, _a = [colorKey, 'value', 'y']; _i < _a.length; _i++) {
                var key = _a[_i];
                colorValArray = cSeries.getColumn(key);
                if (colorValArray.length) {
                    break;
                }
            }
            // If color key extremes are already calculated, use them.
            if (calculatedExtremes) {
                cSeries.minColorValue = cSeries[colorKey + 'Min'];
                cSeries.maxColorValue = cSeries[colorKey + 'Max'];
            }
            else {
                var cExtremes = Series.prototype.getExtremes.call(cSeries, colorValArray);
                cSeries.minColorValue = cExtremes.dataMin;
                cSeries.maxColorValue = cExtremes.dataMax;
            }
            if (defined(cSeries.minColorValue) &&
                defined(cSeries.maxColorValue)) {
                this.dataMin =
                    Math.min(this.dataMin, cSeries.minColorValue);
                this.dataMax =
                    Math.max(this.dataMax, cSeries.maxColorValue);
            }
            if (!calculatedExtremes) {
                Series.prototype.applyExtremes.call(cSeries);
            }
        }
    };
    /**
     * Internal function to draw a crosshair.
     *
     * @function Highcharts.ColorAxis#drawCrosshair
     *
     * @param {Highcharts.PointerEventObject} [e]
     *        The event arguments from the modified pointer event, extended with
     *        `chartX` and `chartY`
     *
     * @param {Highcharts.Point} [point]
     *        The Point object if the crosshair snaps to points.
     *
     * @emits Highcharts.ColorAxis#event:afterDrawCrosshair
     * @emits Highcharts.ColorAxis#event:drawCrosshair
     */
    ColorAxis.prototype.drawCrosshair = function (e, point) {
        var axis = this, legendItem = axis.legendItem || {}, plotX = point === null || point === void 0 ? void 0 : point.plotX, plotY = point === null || point === void 0 ? void 0 : point.plotY, axisPos = axis.pos, axisLen = axis.len;
        var crossPos;
        if (point) {
            crossPos = axis.toPixels(point.getNestedProperty(point.series.colorKey));
            if (crossPos < axisPos) {
                crossPos = axisPos - 2;
            }
            else if (crossPos > axisPos + axisLen) {
                crossPos = axisPos + axisLen + 2;
            }
            point.plotX = crossPos;
            point.plotY = axis.len - crossPos;
            _super.prototype.drawCrosshair.call(this, e, point);
            point.plotX = plotX;
            point.plotY = plotY;
            if (axis.cross &&
                !axis.cross.addedToColorAxis &&
                legendItem.group) {
                axis.cross
                    .addClass('highcharts-coloraxis-marker')
                    .add(legendItem.group);
                axis.cross.addedToColorAxis = true;
                if (!axis.chart.styledMode &&
                    typeof axis.crosshair === 'object') {
                    axis.cross.attr({
                        fill: axis.crosshair.color
                    });
                }
            }
        }
    };
    /** @internal */
    ColorAxis.prototype.getPlotLinePath = function (options) {
        var axis = this, left = axis.left, pos = options.translatedValue, top = axis.top;
        // Crosshairs only
        return isNumber(pos) ? // `pos` can be 0 (#3969)
            (axis.horiz ? [
                ['M', pos - 4, top - 6],
                ['L', pos + 4, top - 6],
                ['L', pos, top],
                ['Z']
            ] : [
                ['M', left, pos],
                ['L', left - 6, pos + 6],
                ['L', left - 6, pos - 6],
                ['Z']
            ]) :
            _super.prototype.getPlotLinePath.call(this, options);
    };
    /**
     * Updates a color axis instance with a new set of options. The options are
     * merged with the existing options, so only new or altered options need to
     * be specified.
     *
     * @function Highcharts.ColorAxis#update
     *
     * @param {Highcharts.ColorAxisOptions} newOptions
     * The new options that will be merged in with existing options on the color
     * axis.
     *
     * @param {boolean} [redraw]
     * Whether to redraw the chart after the color axis is altered. If doing
     * more operations on the chart, it is a good idea to set redraw to `false`
     * and call {@link Highcharts.Chart#redraw} after.
     */
    ColorAxis.prototype.update = function (newOptions, redraw) {
        var _a;
        var axis = this, chart = axis.chart, legend = chart.legend;
        this.series.forEach(function (series) {
            // Needed for Axis.update when choropleth colors change
            series.isDirtyData = true;
        });
        // When updating data classes, destroy old items and make sure new
        // ones are created (#3207)
        if (newOptions.dataClasses && legend.allItems || axis.dataClasses) {
            axis.destroyItems();
        }
        _super.prototype.update.call(this, newOptions, redraw);
        if ((_a = axis.legendItem) === null || _a === void 0 ? void 0 : _a.label) {
            axis.setLegendColor();
            legend.colorizeItem(this, true);
        }
    };
    /**
     * Destroy color axis legend items.
     * @internal
     */
    ColorAxis.prototype.destroyItems = function () {
        var axis = this, chart = axis.chart, legendItem = axis.legendItem || {};
        if (legendItem.label) {
            chart.legend.destroyItem(axis);
        }
        else if (legendItem.labels) {
            for (var _i = 0, _a = legendItem.labels; _i < _a.length; _i++) {
                var item = _a[_i];
                chart.legend.destroyItem(item);
            }
        }
        chart.isDirtyLegend = true;
    };
    /**
     * Removing the whole axis (#14283)
     * @internal
     */
    ColorAxis.prototype.destroy = function () {
        this.chart.isDirtyLegend = true;
        this.destroyItems();
        _super.prototype.destroy.apply(this, [].slice.call(arguments));
    };
    /**
     * Removes the color axis and the related legend item.
     *
     * @function Highcharts.ColorAxis#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart following the remove.
     */
    ColorAxis.prototype.remove = function (redraw) {
        this.destroyItems();
        _super.prototype.remove.call(this, redraw);
    };
    /**
     * Get the legend item symbols for data classes.
     * @internal
     */
    ColorAxis.prototype.getDataClassLegendSymbols = function () {
        var axis = this, chart = axis.chart, legendItems = (axis.legendItem &&
            axis.legendItem.labels ||
            []), legendOptions = chart.options.legend, valueDecimals = pick(legendOptions.valueDecimals, -1), valueSuffix = pick(legendOptions.valueSuffix, '');
        var getPointsInDataClass = function (i) {
            return axis.series.reduce(function (points, s) {
                points.push.apply(points, s.points.filter(function (point) {
                    return point.dataClass === i;
                }));
                return points;
            }, []);
        };
        var name;
        if (!legendItems.length) {
            axis.dataClasses.forEach(function (dataClass, i) {
                var from = dataClass.from, to = dataClass.to, numberFormatter = chart.numberFormatter;
                var vis = true;
                // Assemble the default name. This can be overridden
                // by legend.options.labelFormatter
                name = '';
                if (typeof from === 'undefined') {
                    name = '< ';
                }
                else if (typeof to === 'undefined') {
                    name = '> ';
                }
                if (typeof from !== 'undefined') {
                    name += numberFormatter(from, valueDecimals) + valueSuffix;
                }
                if (typeof from !== 'undefined' && typeof to !== 'undefined') {
                    name += ' - ';
                }
                if (typeof to !== 'undefined') {
                    name += numberFormatter(to, valueDecimals) + valueSuffix;
                }
                // Add a mock object to the legend items
                legendItems.push(extend({
                    chart: chart,
                    name: name,
                    options: {},
                    drawLegendSymbol: Series.prototype.drawLegendSymbol,
                    visible: true,
                    isDataClass: true,
                    // Override setState to set either normal or inactive
                    // state to all points in this data class
                    setState: function (state) {
                        for (var _i = 0, _a = getPointsInDataClass(i); _i < _a.length; _i++) {
                            var point = _a[_i];
                            point.setState(state);
                        }
                    },
                    // Override setState to show or hide all points in this
                    // data class
                    setVisible: function () {
                        this.visible = vis = axis.visible = !vis;
                        var affectedSeries = [];
                        for (var _i = 0, _a = getPointsInDataClass(i); _i < _a.length; _i++) {
                            var point = _a[_i];
                            point.setVisible(vis);
                            point.hiddenInDataClass = !vis; // #20441
                            if (affectedSeries.indexOf(point.series) === -1) {
                                affectedSeries.push(point.series);
                            }
                        }
                        chart.legend.colorizeItem(this, vis);
                        affectedSeries.forEach(function (series) {
                            fireEvent(series, 'afterDataClassLegendClick');
                        });
                    }
                }, dataClass));
            });
        }
        return legendItems;
    };
    /**
     * Get size of color axis symbol.
     * @internal
     */
    ColorAxis.prototype.getSize = function () {
        var axis = this, chart = axis.chart, horiz = axis.horiz, _a = axis.options, colorAxisHeight = _a.height, colorAxisWidth = _a.width, legendOptions = chart.options.legend, width = pick(defined(colorAxisWidth) ?
            relativeLength(colorAxisWidth, chart.chartWidth) : void 0, legendOptions === null || legendOptions === void 0 ? void 0 : legendOptions.symbolWidth, horiz ? ColorAxis.defaultLegendLength : 12), height = pick(defined(colorAxisHeight) ?
            relativeLength(colorAxisHeight, chart.chartHeight) : void 0, legendOptions === null || legendOptions === void 0 ? void 0 : legendOptions.symbolHeight, horiz ? 12 : ColorAxis.defaultLegendLength);
        return {
            width: width,
            height: height
        };
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /** @internal */
    ColorAxis.defaultLegendLength = 200;
    /** @internal */
    ColorAxis.keepProps = [
        'legendItem'
    ];
    return ColorAxis;
}(Axis));
extend(ColorAxis.prototype, ColorAxisBase);
/* *
 *
 *  Registry
 *
 * */
// Properties to preserve after destroy, for Axis.update (#5881, #6025).
Array.prototype.push.apply(Axis.keepProps, ColorAxis.keepProps);
/* *
 *
 *  Default Export
 *
 * */
export default ColorAxis;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Color axis types
 *
 * @typedef {"linear"|"logarithmic"} Highcharts.ColorAxisTypeValue
 */
''; // Detach doclet above
