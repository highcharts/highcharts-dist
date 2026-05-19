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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import A from '../Animation/AnimationUtilities.js';
var animObject = A.animObject, setAnimation = A.setAnimation;
import DataTableCore from '../../Data/DataTableCore.js';
import D from '../Defaults.js';
var defaultOptions = D.defaultOptions;
import F from '../Foundation.js';
var registerEventOptions = F.registerEventOptions;
import H from '../Globals.js';
var svg = H.svg, win = H.win;
import LegendSymbol from '../Legend/LegendSymbol.js';
import Point from './Point.js';
import SeriesDefaults from './SeriesDefaults.js';
import SeriesRegistry from './SeriesRegistry.js';
var seriesTypes = SeriesRegistry.seriesTypes;
import SVGElement from '../Renderer/SVG/SVGElement.js';
import T from '../Templating.js';
var format = T.format;
import { addEvent, arrayMax, arrayMin, clamp, correctFloat, crisp, defined, destroyObjectProperties, diffObjects, erase, extend, fireEvent, getClosestDistance, internalClearTimeout, isArray, isNumber, isString, merge, objectEach, pick, pushUnique, removeEvent, syncTimeout } from '../../Shared/Utilities.js';
import { error, insertItem } from '../Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * This is the base series prototype that all other series types inherit from.
 * A new series is initialized either through the
 * [series](https://api.highcharts.com/highcharts/series)
 * option structure, or after the chart is initialized, through
 * {@link Highcharts.Chart#addSeries}.
 *
 * The object can be accessed in a number of ways. All series and point event
 * handlers give a reference to the `series` object. The chart object has a
 * {@link Highcharts.Chart#series|series} property that is a collection of all
 * the chart's series. The point objects and axis objects also have the same
 * reference.
 *
 * Another way to reference the series programmatically is by `id`. Add an id
 * in the series configuration options, and get the series object by
 * {@link Highcharts.Chart#get}.
 *
 * Configuration options for the series are given in three levels. Options for
 * all series in a chart are given in the
 * [plotOptions.series](https://api.highcharts.com/highcharts/plotOptions.series)
 * object. Then options for all series of a specific type
 * are given in the plotOptions of that type, for example `plotOptions.line`.
 * Next, options for one single series are given in the series array, or as
 * arguments to `chart.addSeries`.
 *
 * The data in the series is stored in various arrays.
 *
 * - First, `series.options.data` contains all the original config options for
 *   each point whether added by options or methods like `series.addPoint`.
 *
 * - The `series.dataTable` refers to an instance of [DataTableCore](https://api.highcharts.com/class-reference/Highcharts.Data)
 *   or `DataTable` that contains the data in a tabular format. Individual
 *   columns can be read from `series.getColumn()`.
 *
 * - Next, `series.data` contains those values converted to points, but in case
 *   the series data length exceeds the `cropThreshold`, or if the data is
 *   grouped, `series.data` doesn't contain all the points. It only contains the
 *   points that have been created on demand.
 *
 * - Then there's `series.points` that contains all currently visible point
 *   objects. In case of cropping, the cropped-away points are not part of this
 *   array. The `series.points` array starts at `series.cropStart` compared to
 *   `series.data` and `series.options.data`. If however the series data is
 *   grouped, these can't be correlated one to one.
 *
 * @class
 * @name Highcharts.Series
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.SeriesOptionsType|object} options
 * The series options.
 */
var Series = /** @class */ (function () {
    function Series() {
        /* *
         *
         *  Static Properties
         *
         * */
        /** @internal */
        this.zoneAxis = 'y';
        // eslint-enable valid-jsdoc
    }
    /* *
     *
     *  API JSDoc doclet copies for uninitialized properties
     *
     * */
    /**
     * Read only. The chart that the series belongs to.
     *
     * @name Highcharts.Series#chart
     * @type {Highcharts.Chart}
     */
    /**
     * Series color as used by the legend and some series types.
     * @name Highcharts.Series#color
     * @type {Highcharts.ColorType|undefined}
     */
    /**
     * Read only. An array containing those values converted to points.
     * In case the series data length exceeds the `cropThreshold`, or if
     * the data is grouped, `series.data` doesn't contain all the
     * points. Also, in case a series is hidden, the `data` array may be
     * empty. In case of cropping, the `data` array may contain `undefined`
     * values, instead of points. To access raw values,
     * `series.options.data` will always be up to date. `Series.data` only
     * contains the points that have been created on demand. To modify the
     * data, use
     * {@link Highcharts.Series#setData} or
     * {@link Highcharts.Point#update}.
     *
     * @see Series.points
     *
     * @name Highcharts.Series#data
     * @type {Array<Highcharts.Point>}
     */
    /**
     * Contains the maximum value of the series' data point. Some series
     * types like `networkgraph` do not support this property as they
     * lack a `y`-value.
     * @name Highcharts.Series#dataMax
     * @type {number|undefined}
     * @readonly
     */
    /**
     * Contains the minimum value of the series' data point. Some series
     * types like `networkgraph` do not support this property as they
     * lack a `y`-value.
     * @name Highcharts.Series#dataMin
     * @type {number|undefined}
     * @readonly
     */
    /**
     * Contains the series' index in the `Chart.series` array.
     *
     * @name Highcharts.Series#index
     * @type {number}
     * @readonly
     */
    /**
     * The parent series of the current series, if the current
     * series has a [linkedTo](https://api.highcharts.com/highcharts/series.line.linkedTo)
     * setting.
     *
     * @name Highcharts.Series#linkedParent
     * @type {Highcharts.Series}
     * @readonly
     */
    /**
     * All child series that are linked to the current series through the
     * [linkedTo](https://api.highcharts.com/highcharts/series.line.linkedTo)
     * option.
     *
     * @name Highcharts.Series#linkedSeries
     * @type {Array<Highcharts.Series>}
     * @readonly
     */
    /**
     * The series name as given in the options. Defaults to
     * "Series {n}".
     *
     * @name Highcharts.Series#name
     * @type {string}
     */
    /**
     * Read only. The series' current options. To update, use
     * {@link Series#update}.
     *
     * @name Highcharts.Series#options
     * @type {Highcharts.SeriesOptionsType}
     */
    /**
     * An array containing all currently visible point objects. In case
     * of cropping, the cropped-away points are not part of this array.
     * The `series.points` array starts at `series.cropStart` compared
     * to `series.data` and `series.options.data`. If however the series
     * data is grouped, these can't be correlated one to one. To modify
     * the data, use {@link Highcharts.Series#setData} or
     * {@link Highcharts.Point#update}.
     *
     * @name Highcharts.Series#points
     * @type {Array<Highcharts.Point>}
     */
    /**
     * Read only. The series' selected state as set by {@link
     * Highcharts.Series#select}.
     *
     * @name Highcharts.Series#selected
     * @type {boolean}
     */
    /**
     * Read only. The series' type, like "line", "area", "column" etc.
     * The type in the series options anc can be altered using
     * {@link Series#update}.
     *
     * @name Highcharts.Series#type
     * @type {string}
     */
    /**
     * Read only. The series' visibility state as set by
     * {@link Series#show}, {@link Series#hide}, or in the initial
     * configuration. True by default.
     *
     * @name Highcharts.Series#visible
     * @type {boolean}
     * @default true
     */
    /**
     * Read only. The unique xAxis object associated
     * with the series.
     *
     * @name Highcharts.Series#xAxis
     * @type {Highcharts.Axis}
     */
    /**
     * Read only. The unique yAxis object associated
     * with the series.
     *
     * @name Highcharts.Series#yAxis
     * @type {Highcharts.Axis}
     */
    /**
     * Contains series options by the user without defaults.
     * @name Highcharts.Series#userOptions
     * @type {Highcharts.SeriesOptionsType}
     */
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    Series.prototype.init = function (chart, userOptions) {
        var _a, _b, _c, _d;
        fireEvent(this, 'init', { options: userOptions });
        var series = this, chartSeries = chart.series;
        // The 'eventsToUnbind' property moved from prototype into the
        // Series init to avoid reference to the same array between
        // the different series and charts. #12959, #13937
        this.eventsToUnbind = [];
        this.condemnedPoints || (this.condemnedPoints = []);
        /**
         * Read only. The chart that the series belongs to.
         *
         * @name Highcharts.Series#chart
         * @type {Highcharts.Chart}
         */
        series.chart = chart;
        /**
         * Read only. The series' type, like "line", "area", "column" etc.
         * The type in the series options anc can be altered using
         * {@link Series#update}.
         *
         * @name Highcharts.Series#type
         * @type {string}
         */
        /**
         * Read only. The series' current options. To update, use
         * {@link Series#update}.
         *
         * @name Highcharts.Series#options
         * @type {Highcharts.SeriesOptionsType}
         */
        series.options = series.setOptions(userOptions);
        var options = series.options, visible = options.visible !== false;
        // Create the data table
        (_a = this.dataTable) !== null && _a !== void 0 ? _a : (this.dataTable = ((_b = options.dataTable) === null || _b === void 0 ? void 0 : _b.isDataTable) ?
            options.dataTable :
            new DataTableCore(options.dataTable));
        /**
         * All child series that are linked to the current series through the
         * [linkedTo](https://api.highcharts.com/highcharts/series.line.linkedTo)
         * option.
         *
         * @name Highcharts.Series#linkedSeries
         * @type {Array<Highcharts.Series>}
         * @readonly
         */
        series.linkedSeries = [];
        // Bind the axes
        series.bindAxes();
        extend(series, {
            /**
             * The series name as given in the options. Defaults to
             * "Series {n}".
             *
             * @name Highcharts.Series#name
             * @type {string}
             */
            name: options.name,
            state: '',
            /**
             * Read only. The series' visibility state as set by {@link
             * Series#show}, {@link Series#hide}, or in the initial
             * configuration.
             *
             * @name Highcharts.Series#visible
             * @type {boolean}
             */
            visible: visible, // True by default
            /**
             * Read only. The series' selected state as set by {@link
             * Highcharts.Series#select}.
             *
             * @name Highcharts.Series#selected
             * @type {boolean}
             */
            selected: options.selected === true // False by default
        });
        registerEventOptions(this, options);
        var events = options.events;
        if ((events === null || events === void 0 ? void 0 : events.click) ||
            ((_d = (_c = options.point) === null || _c === void 0 ? void 0 : _c.events) === null || _d === void 0 ? void 0 : _d.click) ||
            options.allowPointSelect) {
            chart.runTrackerClick = true;
        }
        series.getColor();
        series.getSymbol();
        // Mark cartesian
        if (series.isCartesian) {
            chart.hasCartesianSeries = true;
        }
        // Get the index and register the series in the chart. The index is
        // one more than the current latest series index (#5960).
        var lastSeries;
        if (chartSeries.length) {
            lastSeries = chartSeries[chartSeries.length - 1];
        }
        series._i = pick(lastSeries === null || lastSeries === void 0 ? void 0 : lastSeries._i, -1) + 1;
        series.opacity = series.options.opacity;
        // Insert the series and re-order all series above the insertion
        // point.
        chart.orderItems('series', insertItem(this, chartSeries));
        if (!series.points && !series.data) {
            series.setData(options.data, false);
        }
        fireEvent(this, 'afterInit');
    };
    /**
     * Check whether the series item is itself or inherits from a certain
     * series type.
     *
     * @function Highcharts.Series#is
     * @param {string} type The type of series to check for, can be either
     *        featured or custom series types. For example `column`, `pie`,
     *        `ohlc` etc.
     *
     * @return {boolean}
     *        True if this item is or inherits from the given type.
     */
    // TODO: Runtime checks `instanceof`, so this also confirms inheritance.
    // The type guard currently narrows to the requested type only. Aligning
    // typing 1:1 with runtime should be easier after pending TS cleanups.
    Series.prototype.is = function (type) {
        return seriesTypes[type] && this instanceof seriesTypes[type];
    };
    /**
     * Set the xAxis and yAxis properties of cartesian series, and register
     * the series in the `axis.series` array.
     *
     * @internal
     * @function Highcharts.Series#bindAxes
     */
    Series.prototype.bindAxes = function () {
        var series = this, seriesOptions = series.options, chart = series.chart;
        var axisOptions;
        fireEvent(this, 'bindAxes', null, function () {
            // Repeat for xAxis and yAxis
            (series.axisTypes || []).forEach(function (coll) {
                // Loop through the chart's axis objects
                (chart[coll] || []).forEach(function (axis) {
                    axisOptions = axis.options;
                    // Apply if the series xAxis or yAxis option matches
                    // the number of the axis, or if undefined, use the
                    // first axis
                    if (pick(seriesOptions[coll], 0) === axis.index ||
                        (typeof seriesOptions[coll] !==
                            'undefined' &&
                            seriesOptions[coll] === axisOptions.id)) {
                        // Register this series in the axis.series lookup
                        insertItem(series, axis.series);
                        // Set this series.xAxis or series.yAxis reference
                        series[coll] = axis;
                        // Mark dirty for redraw
                        axis.isDirty = true;
                    }
                });
                // The series needs an X and an Y axis
                if (!series[coll] &&
                    series.optionalAxis !== coll) {
                    error(18, true, chart);
                }
            });
        });
        fireEvent(this, 'afterBindAxes');
    };
    /**
     * Define hasData functions for series. These return true if there
     * are data points on this series within the plot area.
     *
     * @internal
     * @function Highcharts.Series#hasData
     */
    Series.prototype.hasData = function () {
        return ((this.visible &&
            typeof this.dataMax !== 'undefined' &&
            typeof this.dataMin !== 'undefined') || ( // #3703
        this.visible &&
            this.dataTable.rowCount > 0 // #9758
        ));
    };
    /**
     * Determine whether the marker in a series has changed.
     *
     * @internal
     * @function Highcharts.Series#hasMarkerChanged
     */
    Series.prototype.hasMarkerChanged = function (options, oldOptions) {
        var marker = options.marker, oldMarker = oldOptions.marker || {};
        return marker && ((oldMarker.enabled && !marker.enabled) ||
            oldMarker.symbol !== marker.symbol || // #10870, #15946
            oldMarker.height !== marker.height || // #16274
            oldMarker.width !== marker.width // #16274
        );
    };
    /**
     * Return an auto incremented x value based on the pointStart and
     * pointInterval options. This is only used if an x value is not given
     * for the point that calls autoIncrement.
     *
     * @internal
     * @function Highcharts.Series#autoIncrement
     */
    Series.prototype.autoIncrement = function (x) {
        var _a, _b;
        var options = this.options, _c = this.options, pointIntervalUnit = _c.pointIntervalUnit, relativeXValue = _c.relativeXValue, time = this.chart.time, xIncrement = (_b = (_a = this.xIncrement) !== null && _a !== void 0 ? _a : time.parse(options.pointStart)) !== null && _b !== void 0 ? _b : 0;
        var pointInterval;
        this.pointInterval = pointInterval = pick(this.pointInterval, options.pointInterval, 1);
        if (relativeXValue && isNumber(x)) {
            pointInterval *= x;
        }
        // Added code for pointInterval strings
        if (pointIntervalUnit) {
            var d = time.toParts(xIncrement);
            if (pointIntervalUnit === 'day') {
                d[2] += pointInterval;
            }
            else if (pointIntervalUnit === 'month') {
                d[1] += pointInterval;
            }
            else if (pointIntervalUnit === 'year') {
                d[0] += pointInterval;
            }
            pointInterval = time.makeTime.apply(time, d) - xIncrement;
        }
        if (relativeXValue && isNumber(x)) {
            return xIncrement + pointInterval;
        }
        this.xIncrement = xIncrement + pointInterval;
        return xIncrement;
    };
    /**
     * Set the series options by merging from the options tree. Called
     * internally on initializing and updating series. This function will
     * not redraw the series. For API usage, use {@link Series#update}.
     *
     * @internal
     * @function Highcharts.Series#setOptions
     * @param {Highcharts.SeriesOptionsType} itemOptions
     * The series options.
     * @emits Highcharts.Series#event:afterSetOptions
     */
    Series.prototype.setOptions = function (itemOptions) {
        var _a, _b;
        var chart = this.chart, chartOptions = chart.options, plotOptions = chartOptions.plotOptions, userOptions = chart.userOptions || {}, seriesUserOptions = merge(itemOptions), styledMode = chart.styledMode, e = {
            plotOptions: plotOptions,
            userOptions: seriesUserOptions
        };
        var zone;
        fireEvent(this, 'setOptions', e);
        // These may be modified by the event
        var typeOptions = e.plotOptions[this.type], userPlotOptions = (userOptions.plotOptions || {}), userPlotOptionsSeries = userPlotOptions.series || {}, defaultPlotOptionsType = (defaultOptions.plotOptions[this.type] || {}), userPlotOptionsType = userPlotOptions[this.type] || {};
        // Merge in multiple data label options from the plot option. (#21928)
        typeOptions.dataLabels = this.mergeArrays(defaultPlotOptionsType.dataLabels, typeOptions.dataLabels);
        // Use copy to prevent undetected changes (#9762)
        this.userOptions = e.userOptions;
        var options = merge(typeOptions, plotOptions.series, 
        // #3881, chart instance plotOptions[type] should trump
        // plotOptions.series
        userPlotOptionsType, seriesUserOptions);
        // The tooltip options are merged between global and series specific
        // options. Importance in ascending order:
        // globals: (1)tooltip, (2)plotOptions.series,
        // (3)plotOptions[this.type]
        // init userOptions with possible later updates: 4-6 like 1-3 and
        // (7)this series options
        this.tooltipOptions = merge(defaultOptions.tooltip, // 1
        (_a = defaultOptions.plotOptions.series) === null || _a === void 0 ? void 0 : _a.tooltip, // 2
        defaultPlotOptionsType === null || defaultPlotOptionsType === void 0 ? void 0 : defaultPlotOptionsType.tooltip, // 3
        chart.userOptions.tooltip, // 4
        (_b = userPlotOptions.series) === null || _b === void 0 ? void 0 : _b.tooltip, // 5
        userPlotOptionsType.tooltip, // 6
        seriesUserOptions.tooltip // 7
        );
        // When shared tooltip, stickyTracking is true by default,
        // unless user says otherwise.
        this.stickyTracking = pick(seriesUserOptions.stickyTracking, userPlotOptionsType.stickyTracking, userPlotOptionsSeries.stickyTracking, (this.tooltipOptions.shared && !this.noSharedTooltip ?
            true :
            options.stickyTracking));
        // Delete marker object if not allowed (#1125)
        if (typeOptions.marker === null) {
            delete options.marker;
        }
        // Handle color zones
        var negativeColor = options.negativeColor, negativeFillColor = options.negativeFillColor, _c = options.zoneAxis, zoneAxis = _c === void 0 ? 'y' : _c, zones = options.zones, 
        // #20440, create deep copy of zones options
        zonesCopy = this.zones = (zones || []).map(function (z) { return (__assign({}, z)); });
        this.zoneAxis = zoneAxis;
        if ((negativeColor || negativeFillColor) &&
            !zones) {
            zone = {
                value: options[zoneAxis + 'Threshold'] ||
                    options.threshold ||
                    0,
                className: 'highcharts-negative'
            };
            if (!styledMode) {
                // Styled mode allows boolean
                if (typeof negativeColor !== 'boolean') {
                    zone.color = negativeColor;
                }
                zone.fillColor = negativeFillColor;
            }
            zonesCopy.push(zone);
        }
        // Push one extra zone for the rest
        if (zonesCopy.length &&
            defined(zonesCopy[zonesCopy.length - 1].value)) {
            zonesCopy.push(styledMode ? {} : {
                color: this.color,
                fillColor: this.fillColor
            });
        }
        fireEvent(this, 'afterSetOptions', { options: options });
        return options;
    };
    /**
     * Return the name for the series. Looks for a `name` in the options. If not
     * found, looks for a column name in the data mapping. If not found, returns
     * a default name based on the series type and index in `Series {n}`"
     * format. This method can be simply overridden as series name format can
     * vary (e.g. technical indicators).
     *
     * @function Highcharts.Series#getName
     *
     * @return {string} The series name.
     */
    Series.prototype.getName = function () {
        var _a = this, chart = _a.chart, options = _a.options, dataMapping = options.dataMapping, name = options.name, valueMapping = (dataMapping === null || dataMapping === void 0 ? void 0 : dataMapping.y) || (dataMapping === null || dataMapping === void 0 ? void 0 : dataMapping.value), columnKey = isString(valueMapping) ?
            valueMapping : valueMapping === null || valueMapping === void 0 ? void 0 : valueMapping.column;
        // #4119
        return name !== null && name !== void 0 ? name : (isString(columnKey) ?
            columnKey :
            format(chart.options.lang.seriesName, this, chart));
    };
    /**
     * Set series-specific properties for color and symbol. Called internally
     * from Series.update().
     *
     * @internal
     * @function Highcharts.Series#getCyclic
     *
     * @param {'color'|'symbol'} prop
     *        The property to set, either `color` or `symbol`.
     * @param {*} [value]
     *        The value to set. If not given, the next available value is used.
     * @param {Highcharts.Dictionary<*>} [defaults]
     *        The default values.
     */
    Series.prototype.getCyclic = function (prop, value, defaults) {
        var chart = this.chart, indexName = "".concat(prop, "Index"), counterName = "".concat(prop, "Counter"), len = (
        // Symbol count
        (defaults === null || defaults === void 0 ? void 0 : defaults.length) ||
            // Color count
            chart.options.chart.colorCount);
        var i, setting;
        if (!value) {
            // Pick up either the colorIndex option, or the series.colorIndex
            // after Series.update()
            setting = pick(prop === 'color' ? this.options.colorIndex : void 0, this[indexName]);
            if (defined(setting)) { // After Series.update()
                i = setting;
            }
            else {
                // #6138
                if (!chart.series.length) {
                    chart[counterName] = 0;
                }
                i = chart[counterName] % len;
                chart[counterName] += 1;
            }
            if (defaults) {
                value = defaults[i];
            }
        }
        // Set the colorIndex
        if (typeof i !== 'undefined') {
            this[indexName] = i;
        }
        this[prop] = value;
    };
    /**
     * Get the series' color based on either the options or pulled from
     * global options.
     *
     * @internal
     * @function Highcharts.Series#getColor
     */
    Series.prototype.getColor = function () {
        var _a;
        var chart = this.chart;
        if (chart.styledMode) {
            this.getCyclic('color');
        }
        else if (this.options.colorByPoint) {
            this.color = 'var(--highcharts-neutral-color-20)';
        }
        else {
            this.getCyclic('color', this.options.color ||
                ((_a = defaultOptions.plotOptions[this.type]) === null || _a === void 0 ? void 0 : _a.color), chart.options.colors);
        }
    };
    /**
     * Get all points' instances created for this series.
     *
     * @internal
     * @function Highcharts.Series#getPointsCollection
     */
    Series.prototype.getPointsCollection = function () {
        return (this.hasGroupedData ? this.points : this.data) || [];
    };
    /**
     * Get the series' symbol based on either the options or pulled from
     * global options.
     *
     * @internal
     * @function Highcharts.Series#getSymbol
     */
    Series.prototype.getSymbol = function () {
        var seriesMarkerOption = this.options.marker;
        this.getCyclic('symbol', seriesMarkerOption.symbol, this.chart.options.symbols);
    };
    /**
     * Shorthand to get one of the series' data columns from `Series.dataTable`.
     *
     * @internal
     * @function Highcharts.Series#getColumn
     */
    Series.prototype.getColumn = function (columnId, modified, matchLength) {
        var _this = this;
        var _a, _b, _c;
        var table = modified ? this.dataTable.getModified() : this.dataTable, rowCount = table.rowCount, usingModified = this.dataTable !== table, column = table.getColumn(columnId, true);
        // When there is no x column in the data set, generate an internal x
        // column for the series. The `xColumn` array is cached and reused, but
        // cleared on series update.
        if (columnId === 'x' && !usingModified) {
            // Return cached xColumn if it exists
            if (this.xColumn) {
                return this.xColumn;
            }
            var nameColumn = table.getColumn('name', true), options = this.options, 
            // Check for empty or non-numeric x values. A for loop is faster
            // than Array.prototype.some, and covers empty slots. Cache the
            // result for faster subsequent checks.
            isNumbers = function (arr) {
                if (_this.xColumnIsNumbers !== void 0) {
                    return _this.xColumnIsNumbers;
                }
                for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
                    var x = arr_1[_a];
                    if (typeof x !== 'number') {
                        return (_this.xColumnIsNumbers = false);
                    }
                }
                return (_this.xColumnIsNumbers = true);
            };
            // Reset the counter
            this.xIncrement = null;
            // Under these conditions, we need to generate the x data
            if (!column ||
                ((_a = this.xAxis) === null || _a === void 0 ? void 0 : _a.hasNames) ||
                options.relativeXValue ||
                // X column exists in the data table, but has gaps or strings
                (column.length < (options.turboThreshold || Infinity) &&
                    !this.boosted &&
                    !isNumbers(column))) {
                var xColumn = [];
                for (var i = 0; i < rowCount; i++) {
                    var xOption = column === null || column === void 0 ? void 0 : column[i];
                    if (!defined(xOption)) {
                        // When x values are missing, make sure we
                        // auto-increment from the last point, not from zero.
                        // Otherwise date-axes would be extended from
                        // 1970-01-01.
                        (_b = this.xIncrement) !== null && _b !== void 0 ? _b : (this.xIncrement = (_c = xColumn[xColumn.length - 1]) !== null && _c !== void 0 ? _c : null);
                    }
                    xColumn.push(this.getX(xOption, nameColumn === null || nameColumn === void 0 ? void 0 : nameColumn[i]));
                }
                return (this.xColumn = xColumn);
            }
        }
        return column || Array(matchLength ? rowCount : 0);
    };
    /**
     * Get the x value for a given point.
     *
     * @internal
     */
    Series.prototype.getX = function (xOption, name) {
        var _a;
        if (((_a = this.xAxis) === null || _a === void 0 ? void 0 : _a.hasNames) &&
            this.dataTable.getColumn('name', true) &&
            defined(name)) {
            return this.xAxis.nameToX({ name: name, series: this }, xOption);
        }
        if (typeof xOption === 'undefined' ||
            (isNumber(xOption) && this.options.relativeXValue)) {
            return this.autoIncrement(xOption);
        }
        // If x is a string, try to parse it to a datetime
        if (typeof xOption === 'string') {
            xOption = this.chart.time.parse(xOption);
            if (isNumber(xOption)) {
                return xOption;
            }
        }
        return xOption;
    };
    /**
     * Internal function called from setData. If the point count is the same
     * as it was, or if there are overlapping X values, just run
     * Point.update which is cheaper, allows animation, and keeps references
     * to points. This also allows adding or removing points if the X-es
     * don't match.
     *
     * @internal
     * @function Highcharts.Series#matchPoints
     */
    Series.prototype.matchPoints = function (oldXColumn, oldIdColumn, oldNameColumn) {
        var _a;
        var _b = this, dataTable = _b.dataTable, options = _b.options, requireSorting = _b.requireSorting, dataSorting = options.dataSorting, oldData = this.data, rowsToAdd = [], rowsToUpdate = [], equalLength = dataTable.rowCount === oldData.length;
        var hasUpdatedByKey, i, point, lastIndex = 0, succeeded = true;
        this.xIncrement = null;
        delete this.xColumn;
        var newXColumn = dataTable.getColumn('x'), newIdColumn = dataTable.getColumn('id'), newNameColumn = (dataSorting === null || dataSorting === void 0 ? void 0 : dataSorting.matchByName) ?
            dataTable.getColumn('name') : void 0;
        // Iterate the new data
        for (i = 0; i < dataTable.rowCount; i++) {
            var x = newXColumn === null || newXColumn === void 0 ? void 0 : newXColumn[i], id = newIdColumn === null || newIdColumn === void 0 ? void 0 : newIdColumn[i], name_1 = newNameColumn === null || newNameColumn === void 0 ? void 0 : newNameColumn[i], _c = id && oldIdColumn ?
                [id, oldIdColumn] :
                name_1 && oldNameColumn ?
                    [name_1, oldNameColumn] :
                    defined(x) && oldXColumn ?
                        [x, oldXColumn] :
                        [], needle = _c[0], haystack = _c[1];
            var pointIndex = -1;
            // We have a needle and a haystack to search for matching points
            if (haystack) {
                pointIndex = haystack.indexOf(needle, lastIndex);
                // Matching X not found or used already due to non-unique x
                // values (#8995), add point (but later)
                if (pointIndex === -1) {
                    var optionsX = newXColumn === null || newXColumn === void 0 ? void 0 : newXColumn[i];
                    var newIndex = (_a = oldXColumn === null || oldXColumn === void 0 ? void 0 : oldXColumn.length) !== null && _a !== void 0 ? _a : dataTable.rowCount;
                    while (newIndex &&
                        oldXColumn &&
                        typeof optionsX === 'number' &&
                        oldXColumn[newIndex - 1] > optionsX) {
                        newIndex--;
                    }
                    rowsToAdd.push({ newIndex: newIndex, oldIndex: i });
                    // Matching X found, update
                }
                else if (oldData[pointIndex] /* &&
                pOptions === oldData[pointIndex]?.options*/) {
                    rowsToUpdate.push({
                        newIndex: pointIndex,
                        oldIndex: i
                    });
                    // Mark it touched, below we will remove all points that
                    // are not touched.
                    oldData[pointIndex].touched = true;
                    // Speed optimize by only searching after last known
                    // index. Performs ~20% better on large data sets.
                    if (requireSorting) {
                        lastIndex = pointIndex + 1;
                    }
                    // Point exists, no changes, don't remove it
                } /*/ else if (oldData[pointIndex]) {
                    oldData[pointIndex].touched = true;
                }*/
                // If the length is equal and some of the nodes had a
                // match in the same position, we don't want to remove
                // non-matches.
                if (!equalLength ||
                    i !== pointIndex ||
                    (dataSorting === null || dataSorting === void 0 ? void 0 : dataSorting.enabled) ||
                    this.hasDerivedData) {
                    hasUpdatedByKey = true;
                }
            }
            else {
                // Gather all points that are not matched
                rowsToAdd.push({ newIndex: i, oldIndex: i });
            }
        }
        // Remove points that don't exist in the updated data set
        if (hasUpdatedByKey) {
            // Update matching points
            rowsToUpdate.forEach(function (row) {
                oldData[row.newIndex].applyOptions(dataTable.getRowObject(row.oldIndex));
            });
            // Add new points
            rowsToAdd.sort(function (a, b) { return b.newIndex - a.newIndex; });
            rowsToAdd.forEach(function (data) {
                // Splice in an undefined item, `generatePoints` will pick it
                // up and create the point
                oldData.splice(data.newIndex, 0, void 0);
            });
            // Remove points not touched
            i = oldData.length;
            while (i--) {
                point = oldData[i];
                if (point && !point.touched) {
                    point.destroy();
                    oldData.splice(i, 1);
                }
            }
            this.isDirtyData = this.isDirty = true;
            // If we did not find keys (ids or x-values), and the length is the
            // same, update one-to-one
        }
        else if (equalLength && !(dataSorting === null || dataSorting === void 0 ? void 0 : dataSorting.enabled)) {
            var _loop_1 = function () {
                if (!oldData[i].destroyed && !oldData[i].condemned) {
                    var pOptions_1 = dataTable.getRowObject(i);
                    if (pOptions_1) {
                        Object.keys(pOptions_1).forEach(function (key) {
                            if (!defined(pOptions_1[key]) /* ||
                            pOptions[key] === oldData[i].options[key]*/) {
                                delete pOptions_1[key];
                            }
                        });
                        if (Object.keys(pOptions_1).length) {
                            oldData[i].update(pOptions_1, false, void 0, false);
                        }
                    }
                }
            };
            for (i = 0; i < dataTable.rowCount; i++) {
                _loop_1();
            }
            // Did not succeed in updating data
        }
        else {
            succeeded = false;
        }
        oldData.forEach(function (point) {
            if (point) {
                point.touched = false;
            }
        });
        if (!succeeded) {
            return false;
        }
        var xData = this.getColumn('x');
        if (this.xIncrement === null &&
            xData.length) {
            this.xIncrement = arrayMax(xData);
            this.autoIncrement();
        }
        return true;
    };
    Series.prototype.getDataColumnKeys = function () {
        return this.dataColumnKeys || __spreadArray(['x'], (this.pointArrayMap || ['y']), true);
    };
    /**
     * Apply a new set of data to the series and optionally redraw it. The new
     * data array is passed by reference (except in case of `updatePoints`), and
     * may later be mutated when updating the chart data.
     *
     * Note the difference in behavior when setting the same amount of points,
     * or a different amount of points, as handled by the `updatePoints`
     * parameter.
     *
     * @sample highcharts/members/series-setdata/
     *         Set new data from a button
     * @sample highcharts/members/series-setdata-pie/
     *         Set data in a pie
     * @sample stock/members/series-setdata/
     *         Set new data in Highcharts Stock
     * @sample maps/members/series-setdata/
     *         Set new data in Highmaps
     *
     * @function Highcharts.Series#setData
     *
     * @param {Array<Highcharts.PointOptionsType>|Highcharts.DataTableOptionsObject|Highcharts.DataTable|undefined} data
     *        Takes an array of data in the same format as described under
     *        `series.{type}.data` for the given series type, for example a line
     *        series would take data in the form described under
     *        [series.line.data](https://api.highcharts.com/highcharts/series.line.data).
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the series is altered. If doing
     *        more operations on the chart, it is a good idea to set redraw to
     *        false and call {@link Chart#redraw} after.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        When the updated data is the same length as the existing data,
     *        points will be updated by default, and animation visualizes how
     *        the points are changed. Set false to disable animation, or a
     *        configuration object to set duration or easing.
     *
     * @param {boolean} [updatePoints=true]
     *        When this is true, points will be updated instead of replaced
     *        whenever possible. This occurs a) when the updated data is the
     *        same length as the existing data, b) when points are matched by
     *        their id's, or c) when points can be matched by X values. This
     *        allows updating with animation and performs better. In this case,
     *        the original array is not passed by reference. Set `false` to
     *        prevent.
     */
    Series.prototype.setData = function (data, redraw, animation, updatePoints) {
        var _a;
        if (redraw === void 0) { redraw = true; }
        var series = this, table = this.dataTable, oldData = series.points, oldDataLength = (oldData === null || oldData === void 0 ? void 0 : oldData.length) || 0, oldXColumn = table.getColumn('x'), oldIdColumn = table.getColumn('id'), oldNameColumn = table.getColumn('name'), options = series.options, chart = series.chart, xAxis = series.xAxis;
        var updatedData, i, copiedData;
        if (!chart.options.chart.allowMutatingData) { // #4259
            // Remove old reference
            if (options.data) {
                delete series.options.data;
            }
            if (series.userOptions.data) {
                delete series.userOptions.data;
            }
            copiedData = merge(true, data);
        }
        data = copiedData || data;
        // Reset properties
        series.xIncrement = null;
        delete series.xColumn;
        delete series.xColumnIsNumbers;
        if (table !== options.dataTable) {
            delete table.columns.x;
        }
        series.colorCounter = 0; // For series with colorByPoint (#1547)
        // Array passed as option
        if (isArray(data)) {
            this.setDataFromArray(data);
            // Data table passed as option, either on series or chart
        }
        else {
            this.setDataFromTable(data);
        }
        if (updatePoints !== false &&
            oldDataLength &&
            !series.cropped &&
            !series.hasGroupedData &&
            series.visible &&
            // Soft updating has no benefit in boost, and causes JS error
            // (#8355)
            !series.boosted) {
            updatedData = this.matchPoints(oldXColumn, oldIdColumn, oldNameColumn);
        }
        if (!updatedData) {
            // Forgetting to cast strings to numbers is a common caveat when
            // handling CSV or JSON
            if (isString(this.getColumn('y')[0])) {
                error(14, true, chart);
            }
            series.data = [];
            // Destroy old points
            i = oldDataLength;
            while (i--) {
                (_a = oldData[i]) === null || _a === void 0 ? void 0 : _a.destroy();
            }
            // Reset minRange (#878)
            if (xAxis) {
                xAxis.minRange = xAxis.userMinRange;
            }
            // Redraw
            series.isDirty = chart.isDirtyBox = true;
            series.isDirtyData = !!oldData;
            animation = false;
        }
        if (isArray(data)) {
            series.options.data = series.userOptions.data = data;
        }
        // Typically for pie series, points need to be processed and generated
        // prior to rendering the legend
        if (options.legendType === 'point') {
            this.processData();
            this.generatePoints();
        }
        if (redraw) {
            chart.redraw(animation);
        }
    };
    /**
     * Internal function to set data from an array of point options - objects,
     * arrays or numbers. This corresponds to the `data` series option. Called
     * from the official `setData` method.
     *
     * @param {Array<Highcharts.PointOptionsType>} data
     *        The data array
     * @internal
     */
    Series.prototype.setDataFromArray = function (data) {
        var _a;
        var _b;
        var dataLength = data.length, _c = this.options, keys = _c.keys, turboThreshold = _c.turboThreshold, _d = this, _e = _d.pointValKey, pointValKey = _e === void 0 ? 'y' : _e, _f = _d.pointArrayMap, pointArrayMap = _f === void 0 ? [] : _f, valueCount = pointArrayMap.length, table = this.dataTable, dataColumnKeys = this.getDataColumnKeys();
        // In turbo mode, look for one- or twodimensional arrays of numbers. The
        // first and the last valid value are tested, and we assume that all the
        // rest are defined the same way. Although the 'for' loops are similar,
        // they are repeated inside each if-else conditional for max
        // performance.
        var runTurbo = turboThreshold && dataLength > turboThreshold, indexOfX = 0, indexOfY = 1;
        if (runTurbo) {
            var firstPoint = this.getFirstValidPoint(data), lastPoint = this.getFirstValidPoint(data, dataLength - 1, -1), isShortArray = function (a) {
                return Boolean(isArray(a) && (keys || isNumber(a[0])));
            };
            // Assume all points are numbers
            if (isNumber(firstPoint) && isNumber(lastPoint)) {
                table.setColumn(pointValKey, data);
                // Assume all points are arrays when first point is
            }
            else if (isShortArray(firstPoint) &&
                isShortArray(lastPoint)) {
                if (valueCount) { // [x, low, high] or [x, o, h, l, c]
                    // When autoX is 1, the x is skipped: [low, high]. When
                    // autoX is 0, the x is included: [x, low, high]
                    var autoX = firstPoint.length === valueCount, colArray_1 = new Array(firstPoint.length)
                        .fill(0).map(function () { return []; });
                    for (var _g = 0, _h = data; _g < _h.length; _g++) {
                        var pt = _h[_g];
                        for (var j = 0; j <= valueCount; j++) {
                            (_b = colArray_1[j]) === null || _b === void 0 ? void 0 : _b.push(pt[j]);
                        }
                    }
                    table.setColumns((autoX ? pointArrayMap : dataColumnKeys).reduce(function (columns, columnId, i) {
                        columns[columnId] = colArray_1[i];
                        return columns;
                    }, {}));
                }
                else { // [x, y]
                    if (keys) {
                        indexOfX = keys.indexOf('x');
                        indexOfY = keys.indexOf('y');
                        indexOfX = indexOfX >= 0 ? indexOfX : 0;
                        indexOfY = indexOfY >= 0 ? indexOfY : 1;
                    }
                    if (firstPoint.length === 1) {
                        indexOfY = 0;
                    }
                    var xData = [], valueData = [];
                    if (indexOfX === indexOfY) {
                        for (var _j = 0, data_1 = data; _j < data_1.length; _j++) {
                            var pt = data_1[_j];
                            valueData.push(pt[indexOfY]);
                        }
                        table.setColumn(pointValKey, valueData);
                    }
                    else {
                        for (var _k = 0, data_2 = data; _k < data_2.length; _k++) {
                            var pt = data_2[_k];
                            xData.push(pt[indexOfX]);
                            valueData.push(pt[indexOfY]);
                        }
                        table.setColumns((_a = {
                                x: xData
                            },
                            _a[pointValKey] = valueData,
                            _a));
                    }
                }
            }
            else {
                // Highcharts expects configs to be numbers or arrays in turbo
                // mode
                runTurbo = false;
            }
        }
        if (!runTurbo) {
            var columns = {};
            for (var i = 0; i < dataLength; i++) {
                var ptOptions = this.pointClass.prototype
                    .optionsToObject
                    .call({ series: this }, data[i]);
                for (var _l = 0, _m = Object.keys(ptOptions); _l < _m.length; _l++) {
                    var key = _m[_l];
                    columns[key] || (columns[key] = new Array(dataLength));
                    columns[key][i] = ptOptions[key];
                }
            }
            // Empty data, clear table
            if (dataLength) {
                table.setColumns(columns);
            }
            else {
                table.deleteRows(0, table.rowCount);
            }
        }
    };
    /**
     * Internal function to set data from a data table, either an instance or
     * options object. This corresponds to the `data` series option. Called
     * from the official `setData` method.
     *
     * @param {Highcharts.DataTableOptionsObject|Highcharts.DataTable} data
     *        The data array
     * @internal
     */
    Series.prototype.setDataFromTable = function (data) {
        var _this = this;
        var _a = this, chart = _a.chart, options = _a.options, table = _a.dataTable, seriesDataTable = chart.getDataTable(options), dataTables = data ? [data] : (
        // Use either dataTable from series options or from the chart
        seriesDataTable.length ?
            seriesDataTable :
            chart.dataTable), dataColumnKeys = this.getDataColumnKeys(), mapping = options.dataMapping, keys = dataColumnKeys.slice();
        // Extend the data column keys with the keys from the column assignment
        if (mapping) {
            Object.keys(mapping).forEach(function (key) {
                pushUnique(keys, key);
            });
            this.dataColumnKeys = keys;
        }
        dataTables.forEach(function (dataTable, dtIndex) {
            // Resolve the data mapping
            var columns = keys
                .reduce(function (targetColumns, key) {
                var mappingItem = mapping === null || mapping === void 0 ? void 0 : mapping[key], srcColumns = dataTable.columns || {}, dtId = dataTable.id, column = isString(mappingItem) ?
                    // String definition points directly to a column id
                    // on the first data table
                    (dtIndex === 0 && srcColumns[mappingItem]) :
                    // Object definition, check for matching data table
                    // and column id/index
                    (((mappingItem === null || mappingItem === void 0 ? void 0 : mappingItem.dataTable) || 0) === dtIndex ||
                        (dtId && (mappingItem === null || mappingItem === void 0 ? void 0 : mappingItem.dataTable) === dtId)) &&
                        (isNumber(mappingItem === null || mappingItem === void 0 ? void 0 : mappingItem.column) ?
                            Object.values(srcColumns)[mappingItem.column] :
                            srcColumns[(mappingItem === null || mappingItem === void 0 ? void 0 : mappingItem.column) || key]);
                if (column) {
                    targetColumns[key] = column;
                }
                return targetColumns;
            }, {});
            // If a DataTable is passed and no column assignment is set, use it
            // directly
            if (mapping || dataTable) {
                // Set the columns
                table.setColumns(columns);
            }
            // If a DataTable is passed directly by reference, bind events to
            // keep the series updated
            if (dataTable.isDataTable) {
                _this.bindDataTableEvents(dataTable, columns);
            }
        });
    };
    /**
     * Bind data table events to keep the series updated when changes occur to
     * the data table.
     *
     * @internal
     */
    Series.prototype.bindDataTableEvents = function (dataTable, columns) {
        var _this = this;
        if (this.hasBoundDataTableEvents) {
            return;
        }
        var _a = this, chart = _a.chart, eventsToUnbind = _a.eventsToUnbind, queueRedraw = function () {
            clearTimeout(chart.redrawTimeout);
            chart.redrawTimeout = setTimeout(function () { return chart.renderer && chart.redraw(); }, 0);
        };
        eventsToUnbind.push(addEvent(dataTable, 'afterSetRows', function (e) {
            var rowIndex = e.rowIndex;
            if (isNumber(rowIndex)) {
                var row = DataTableCore.prototype.getRowObject.call({ columns: columns }, rowIndex), point = _this.data[rowIndex];
                if (row) {
                    if (_this.currentDataGrouping) {
                        // Set data with immediate redraw because it
                        // destroys points
                        _this.setData();
                    }
                    else {
                        if (point) {
                            point.update(row, false);
                        }
                        else {
                            _this.addPoint(row, false);
                        }
                        queueRedraw();
                    }
                }
            }
        }));
        eventsToUnbind.push(addEvent(dataTable, 'afterDeleteRows', function (e) {
            var rowCount = e.rowCount, rowIndex = e.rowIndex;
            if (isNumber(rowIndex)) {
                for (var i = rowIndex + rowCount - 1; i >= rowIndex; i--) {
                    _this.removePoint(i, false);
                }
                queueRedraw();
            }
        }));
        eventsToUnbind.push(addEvent(dataTable, 'afterSetColumns', function (e) {
            _this.setData(e.target);
        }));
        this.hasBoundDataTableEvents = true;
    };
    /**
     * Internal function to process the data by cropping away unused data
     * points if the series is longer than the crop threshold. This saves
     * computing time for large series.
     *
     * @internal
     * @function Highcharts.Series#getProcessedData
     * @param {boolean} [forceExtremesFromAll]
     * Force getting extremes of a total series data range.
     */
    Series.prototype.getProcessedData = function (forceExtremesFromAll) {
        var series = this, table = series.dataTable, isCartesian = series.isCartesian, options = series.options, xAxis = series.xAxis, cropThreshold = options.cropThreshold, getExtremesFromAll = forceExtremesFromAll ||
            // X-range series etc, #21003
            series.getExtremesFromAll, logarithmic = xAxis === null || xAxis === void 0 ? void 0 : xAxis.logarithmic, dataLength = table.rowCount;
        var croppedData, cropped, cropStart = 0, xExtremes, min, max, xData = series.getColumn('x'), modified = table, updatingNames = false;
        if (xAxis) {
            // Corrected for log axis (#3053)
            xExtremes = xAxis.getExtremes();
            min = xExtremes.min;
            max = xExtremes.max;
            updatingNames = !!(xAxis.categories && !xAxis.names.length);
            // Optionally filter out points outside the plot area
            if (isCartesian &&
                series.sorted &&
                !getExtremesFromAll &&
                (!cropThreshold ||
                    dataLength > cropThreshold ||
                    series.forceCrop)) {
                // It's outside current extremes
                if (xData[dataLength - 1] < min ||
                    xData[0] > max) {
                    modified = new DataTableCore();
                    // Only crop if it's actually spilling out
                }
                else if (
                // Don't understand why this condition is needed
                series.getColumn(series.pointValKey || 'y').length && (xData[0] < min ||
                    xData[dataLength - 1] > max)) {
                    croppedData = this.cropData(table, min, max);
                    modified = croppedData.modified;
                    cropStart = croppedData.start;
                    cropped = true;
                }
            }
        }
        // Find the closest distance between processed points
        xData = this.getColumn('x', true);
        var closestPointRange = getClosestDistance([
            logarithmic ?
                xData.map(logarithmic.log2lin) :
                xData
        ], 
        // Unsorted data is not supported by the line tooltip, as well as
        // data grouping and navigation in Stock charts (#725) and width
        // calculation of columns (#1900). Avoid warning during the
        // premature processing pass in updateNames (#16104).
        function () { return (series.requireSorting &&
            !updatingNames &&
            error(15, false, series.chart)); });
        return {
            modified: modified,
            cropped: cropped,
            cropStart: cropStart,
            closestPointRange: closestPointRange
        };
    };
    /**
     * Internal function to apply processed data.
     * In Highcharts Stock, this function is extended to provide data grouping.
     *
     * @internal
     * @function Highcharts.Series#processData
     * @param {boolean} [force]
     * Force data grouping.
     */
    Series.prototype.processData = function (force) {
        var series = this, xAxis = series.xAxis, table = series.dataTable;
        // If the series data or axes haven't changed, don't go through
        // this. Return false to pass the message on to override methods
        // like in data grouping.
        if (series.isCartesian &&
            !series.isDirty &&
            !xAxis.isDirty &&
            !series.yAxis.isDirty &&
            !force) {
            return false;
        }
        var processedData = series.getProcessedData();
        // Record the properties
        table.modified = processedData.modified;
        series.cropped = processedData.cropped; // Undefined or true
        series.cropStart = processedData.cropStart;
        series.closestPointRange = (series.basePointRange = processedData.closestPointRange);
        fireEvent(series, 'afterProcessData');
    };
    /**
     * Iterate over xData and crop values between min and max. Returns
     * object containing crop start/end cropped xData with corresponding
     * part of yData, dataMin and dataMax within the cropped range.
     *
     * @internal
     * @function Highcharts.Series#cropData
     */
    Series.prototype.cropData = function (table, min, max) {
        var xData = table === this.dataTable ?
            this.getColumn('x') :
            table.getColumn('x', true), dataLength = xData.length;
        var i, j, start = 0, end = dataLength;
        // Iterate up to find slice start
        for (i = 0; i < dataLength; i++) {
            if (xData[i] >= min) {
                start = Math.max(0, i - 1);
                break;
            }
        }
        // Proceed to find slice end
        for (j = i; j < dataLength; j++) {
            if (xData[j] > max) {
                end = j + 1;
                break;
            }
        }
        // Slice all the columns and return a copy
        var columns = Object.keys(table.columns)
            .reduce(function (columns, key) {
            columns[key] = (table.getColumn(key, true) || []).slice(start, end);
            return columns;
        }, {});
        // Add cropped x data to modified table
        columns.x = xData.slice(start, end);
        return {
            modified: new DataTableCore({ columns: columns }),
            start: start,
            end: end
        };
    };
    /**
     * Generate the data point after the data has been processed by cropping
     * away unused points and optionally grouped in Highcharts Stock.
     *
     * @internal
     * @function Highcharts.Series#generatePoints
     */
    Series.prototype.generatePoints = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var series = this, options = series.options, dataOptions = series.hasProcessedDataTable ? void 0 : options.data, table = series.dataTable.getModified(), xData = series.getColumn('x', true), PointClass = series.pointClass, processedDataLength = table.rowCount, cropStart = series.cropStart || 0, hasGroupedData = series.hasGroupedData, keys = options.keys, points = [], groupCropStartIndex = (((_a = options.dataGrouping) === null || _a === void 0 ? void 0 : _a.groupAll) ?
            cropStart :
            0), 
        // Create a configuration object out of a data row
        dataColumnKeys = this.getDataColumnKeys();
        var dataLength, cursor, point, i, data = series.data, pOptions;
        if (!data && !hasGroupedData) {
            var arr = [];
            arr.length = (dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.length) || 0;
            data = series.data = arr;
        }
        if (keys && hasGroupedData) {
            // Grouped data has already applied keys (#6590)
            series.options.keys = false;
        }
        for (i = 0; i < processedDataLength; i++) {
            cursor = cropStart + i;
            if (!hasGroupedData) {
                point = data[cursor];
                pOptions = dataOptions ?
                    // We could use table.getRowObject(i) here, but that would
                    // be less performant
                    dataOptions[cursor] :
                    table.getRowObject(i);
                // #970
                if (!point && pOptions !== void 0) {
                    data[cursor] = point = new PointClass(series, pOptions, xData[i]);
                }
                else if (point) {
                    // Point properties for convenient access in tooltip and
                    // data labels might need to be updated.
                    point.category = (_d = (_c = (_b = series.xAxis) === null || _b === void 0 ? void 0 : _b.categories) === null || _c === void 0 ? void 0 : _c[point.x]) !== null && _d !== void 0 ? _d : point.x;
                    point.key = (_e = point.name) !== null && _e !== void 0 ? _e : point.category;
                }
            }
            else {
                // Splat the y data in case of ohlc data array
                point = new PointClass(series, table.getRowObject(i, dataColumnKeys));
                point.dataGroup = (_f = series.groupMap) === null || _f === void 0 ? void 0 : _f[groupCropStartIndex + i];
                if ((_g = point.dataGroup) === null || _g === void 0 ? void 0 : _g.options) {
                    point.options = point.dataGroup.options;
                    extend(point, point.dataGroup.options);
                    // Collision of props and options (#9770)
                    delete point.dataLabels;
                    // Update key in case name changed
                    point.key = (_h = point.name) !== null && _h !== void 0 ? _h : point.category;
                }
            }
            if (point) { // #6279
                // For faster access in Point.update
                point.index = hasGroupedData ?
                    (groupCropStartIndex + i) : cursor;
                points[i] = point;
            }
        }
        // Restore keys options (#6590)
        series.options.keys = keys;
        // Hide cropped-away points - this only runs when the number of
        // points is above cropThreshold, or when switching view from
        // non-grouped data to grouped data (#637)
        if (data &&
            (processedDataLength !== (dataLength = data.length) ||
                hasGroupedData)) {
            for (i = 0; i < dataLength; i++) {
                // When has grouped data, clear all points
                if (i === cropStart && !hasGroupedData) {
                    i += processedDataLength;
                }
                if (data[i]) {
                    data[i].destroyElements();
                    data[i].plotX = void 0; // #1003
                }
            }
        }
        series.data = data;
        series.points = points;
        fireEvent(this, 'afterGeneratePoints');
    };
    /**
     * Get current X extremes for the visible data.
     *
     * @internal
     * @function Highcharts.Series#getXExtremes
     * @param {Array<number>} xData
     * The data to inspect. Defaults to the current data within the visible
     * range.
     */
    Series.prototype.getXExtremes = function (xData) {
        return {
            min: arrayMin(xData),
            max: arrayMax(xData)
        };
    };
    /**
     * Calculate Y extremes for the visible data. The result is returned
     * as an object with `dataMin` and `dataMax` properties.
     *
     * @internal
     * @function Highcharts.Series#getExtremes
     * @param {Array<number>} [yData]
     * The data to inspect. Defaults to the current data within the visible
     * range.
     * @param {boolean} [forceExtremesFromAll]
     * Force getting extremes of a total series data range.
     */
    Series.prototype.getExtremes = function (yData, forceExtremesFromAll) {
        var _a;
        var _b = this, xAxis = _b.xAxis, yAxis = _b.yAxis, getExtremesFromAll = forceExtremesFromAll ||
            this.getExtremesFromAll ||
            this.options.getExtremesFromAll, // #4599, #21003
        table = getExtremesFromAll && this.cropped ?
            this.dataTable :
            this.dataTable.getModified(), rowCount = table.rowCount, customData = yData || this.stackedYData, yAxisData = customData ?
            [customData] :
            ((_a = (this.keysAffectYAxis || this.pointArrayMap || ['y'])) === null || _a === void 0 ? void 0 : _a.map(function (key) { return table.getColumn(key, true) || []; })) || [], xData = this.getColumn('x', true), activeYData = [], 
        // Handle X outside the viewed area. This does not work with
        // non-sorted data like scatter (#7639).
        shoulder = this.requireSorting && !this.is('column') ?
            1 : 0, 
        // #2117, need to compensate for log X axis
        positiveValuesOnly = yAxis ? yAxis.positiveValuesOnly : false, doAll = getExtremesFromAll ||
            this.cropped ||
            !xAxis; // For colorAxis support
        var xExtremes, x, i, xMin = 0, xMax = 0;
        if (xAxis) {
            xExtremes = xAxis.getExtremes();
            xMin = xExtremes.min;
            xMax = xExtremes.max;
        }
        for (i = 0; i < rowCount; i++) {
            x = xData[i];
            // Check if it is within the selected x axis range
            if (doAll ||
                ((xData[i + shoulder] || x) >= xMin &&
                    (xData[i - shoulder] || x) <= xMax)) {
                for (var _c = 0, yAxisData_1 = yAxisData; _c < yAxisData_1.length; _c++) {
                    var values = yAxisData_1[_c];
                    var val = values[i];
                    // For points within the visible range, including the
                    // first point outside the visible range (#7061),
                    // consider y extremes.
                    if (isNumber(val) &&
                        (val > 0 || !positiveValuesOnly)) {
                        activeYData.push(val);
                    }
                }
            }
        }
        var dataExtremes = {
            activeYData: activeYData, // Needed for Stock Cumulative Sum
            dataMin: arrayMin(activeYData),
            dataMax: arrayMax(activeYData)
        };
        fireEvent(this, 'afterGetExtremes', { dataExtremes: dataExtremes });
        return dataExtremes;
    };
    /**
     * Set the current data extremes as `dataMin` and `dataMax` on the
     * Series item. Use this only when the series properties should be
     * updated.
     *
     * @internal
     * @function Highcharts.Series#applyExtremes
     */
    Series.prototype.applyExtremes = function () {
        var dataExtremes = this.getExtremes();
        this.dataMin = dataExtremes.dataMin;
        this.dataMax = dataExtremes.dataMax;
        return dataExtremes;
    };
    /**
     * Find and return the first non nullish point in the data
     *
     * @internal
     * @function Highcharts.Series.getFirstValidPoint
     * @param {Array<Highcharts.PointOptionsType>} data
     *        Array of options for points
     * @param {number} [start=0]
     *        Index to start searching from
     * @param {number} [increment=1]
     *        Index increment, set -1 to search backwards
     */
    Series.prototype.getFirstValidPoint = function (data, start, increment) {
        if (start === void 0) { start = 0; }
        if (increment === void 0) { increment = 1; }
        var dataLength = data.length;
        var i = start;
        while (i >= 0 && i < dataLength) {
            if (defined(data[i])) {
                return data[i];
            }
            i += increment;
        }
    };
    /**
     * Translate data points from raw data values to chart specific
     * positioning data needed later in the `drawPoints` and `drawGraph`
     * functions. This function can be overridden in plugins and custom
     * series type implementations.
     *
     * @function Highcharts.Series#translate
     *
     * @emits Highcharts.Series#events:translate
     */
    Series.prototype.translate = function () {
        var _a;
        this.generatePoints();
        var series = this, options = series.options, xAxis = series.xAxis, yAxis = series.yAxis, stacking = options.stacking, threshold = options.threshold, _b = series.chart, hasRendered = _b.hasRendered, polar = _b.polar, points = series.points.concat(series.condemnedPoints), dataLength = points.length, pointPlacement = series.pointPlacementToXValue(), // #7860
        dynamicallyPlaced = Boolean(pointPlacement), stackThreshold = options.startFromThreshold ? threshold : 0, nullYSubstitute = ((options === null || options === void 0 ? void 0 : options.nullInteraction) &&
            yAxis.len);
        var i, plotX, lastPlotX, stackIndicator, closestPointRangePx = Number.MAX_VALUE;
        /**
         * Plotted coordinates need to be within a limited range. Drawing
         * too far outside the viewport causes various rendering issues
         * (#3201, #3923, #7555).
         * @internal
         */
        function limitedRange(val) {
            return clamp(val, -1e9, 1e9);
        }
        var getPlotX = function (x, old) {
            var plotX = xAxis.translate(x, false, false, old, true, pointPlacement);
            return isNumber(plotX) ? correctFloat(limitedRange(plotX)) : void 0;
        };
        var getPlotY = function (yValue, point, old) {
            // Set the plotY value, reset it for redraws #3201, #18422
            if (isNumber(yValue) && point.plotX !== void 0) {
                var plotY = yAxis.translate(yValue, false, true, old, true);
                return isNumber(plotY) ? limitedRange(plotY) : void 0;
            }
            if (!isNumber(yValue) && nullYSubstitute) {
                return nullYSubstitute;
            }
        };
        // Translate each point
        for (i = 0; i < dataLength; i++) {
            var point = points[i], xValue = point.x;
            var stackItem = void 0, stackValues = void 0, yValue = point.y, lowValue = point.low;
            var stacks = stacking && ((_a = yAxis.stacking) === null || _a === void 0 ? void 0 : _a.stacks[(series.negStacks &&
                yValue <
                    (stackThreshold ? 0 : threshold) ?
                '-' :
                '') + series.stackKey]);
            point.plotX = plotX = getPlotX(xValue);
            // Calculate the bottom y value for stacked series
            if (stacking &&
                series.visible &&
                stacks &&
                stacks[xValue]) {
                stackIndicator = series.getStackIndicator(stackIndicator, xValue, series.index);
                if (!point.isNull && stackIndicator.key) {
                    stackItem = stacks[xValue];
                    stackValues = stackItem.points[stackIndicator.key];
                }
                if (stackItem && isArray(stackValues)) {
                    lowValue = stackValues[0];
                    yValue = stackValues[1];
                    if (lowValue === stackThreshold &&
                        stackIndicator.key === stacks[xValue].base) {
                        lowValue = pick(isNumber(threshold) ? threshold : yAxis.min);
                    }
                    // #1200, #1232
                    if (yAxis.positiveValuesOnly &&
                        defined(lowValue) &&
                        lowValue <= 0) {
                        lowValue = void 0;
                    }
                    point.total = point.stackTotal = pick(stackItem.total);
                    point.percentage = defined(point.y) && stackItem.total ?
                        (point.y / stackItem.total * 100) : void 0;
                    point.stackY = yValue;
                    // In case of variwide series (where widths of points are
                    // different in most cases), stack labels are positioned
                    // wrongly, so the call of the setOffset is omitted here and
                    // labels are correctly positioned later, at the end of the
                    // variwide's translate function (#10962)
                    if (!series.irregularWidths) {
                        stackItem.setOffset(series.pointXOffset || 0, series.barW || 0, void 0, void 0, void 0, series.xAxis);
                    }
                }
            }
            // Set translated yBottom or remove it
            point.yBottom = defined(lowValue) ?
                limitedRange(yAxis.translate(lowValue, false, true, false, true)) :
                void 0;
            // General hook, used for Highcharts Stock compare and cumulative
            if (series.dataModify) {
                yValue = series.dataModify.modifyValue(yValue, i);
            }
            point.plotY = getPlotY(yValue, point);
            // Set the starting point of point entrance animation
            point.origin = hasRendered && !point.graphic && !polar ? {
                x: getPlotX(xValue, true),
                y: getPlotY(yValue, point, true)
            } : void 0;
            point.isInside = this.isPointInside(point);
            // Set client related positions for mouse tracking
            point.clientX = dynamicallyPlaced ?
                correctFloat(xAxis.translate(xValue, false, false, false, true, pointPlacement)) :
                plotX; // #1514, #5383, #5518
            // Negative points #19028
            point.negative = (point.y || 0) < (threshold || 0);
            // Determine auto enabling of markers (#3635, #5099)
            if (!point.isNull && point.visible !== false && isNumber(plotX)) {
                if (isNumber(lastPlotX)) {
                    closestPointRangePx = Math.min(closestPointRangePx, Math.abs((plotX) - lastPlotX));
                }
                lastPlotX = plotX;
            }
            // Find point zone
            point.zone = this.zones.length ? point.getZone() : void 0;
        }
        series.closestPointRangePx = closestPointRangePx;
        fireEvent(this, 'afterTranslate');
    };
    /**
     * Return the series points with null points filtered out.
     *
     * @function Highcharts.Series#getValidPoints
     *
     * @param {Array<Highcharts.Point>} [points]
     * The points to inspect, defaults to {@link Series.points}.
     *
     * @param {boolean} [insideOnly=false]
     * Whether to inspect only the points that are inside the visible view.
     *
     * @param {boolean} [allowNull=false]
     * Whether to allow null points to pass as valid points.
     *
     * @return {Array<Highcharts.Point>}
     * The valid points.
     */
    Series.prototype.getValidPoints = function (points, insideOnly, allowNull) {
        var chart = this.chart;
        // #3916, #5029, #5085
        return (points || this.points || []).filter(function (point) {
            var plotX = point.plotX, plotY = point.plotY, 
            // Undefined plotY is treated as null when negative values
            // in log axis (#18422)
            asNull = !allowNull && (point.isNull || !isNumber(plotY));
            if (asNull || (insideOnly && !chart.isInsidePlot(plotX, plotY, { inverted: chart.inverted }))) {
                return false;
            }
            return point.visible !== false;
        });
    };
    /**
     * Get the shared clip key, creating it if it doesn't exist.
     *
     * @internal
     * @function Highcharts.Series#getSharedClipKey
     */
    Series.prototype.getSharedClipKey = function () {
        this.sharedClipKey = (this.options.xAxis || 0) + ',' +
            (this.options.yAxis || 0);
        return this.sharedClipKey;
    };
    /**
     * Set the clipping for the series. For animated series the clip is later
     * modified.
     *
     * @internal
     * @function Highcharts.Series#setClip
     */
    Series.prototype.setClip = function () {
        var _a;
        var _b = this, chart = _b.chart, group = _b.group, markerGroup = _b.markerGroup, options = _b.options, plotClipGroup = _b.plotClipGroup, sharedClips = chart.sharedClips, renderer = chart.renderer, clipBox = chart.getClipBox(this), clip = (_a = options.clip) !== null && _a !== void 0 ? _a : true, sharedClipKey = this.getSharedClipKey(); // #4526
        var clipRect = sharedClips[sharedClipKey];
        // If a clipping rectangle for the same set of axes does not exist,
        // create it
        if (!clipRect) {
            sharedClips[sharedClipKey] = clipRect = renderer.clipRect(clipBox);
            // When setting chart size, or when the series is rendered again before
            // starting animating, in compliance to a responsive rule
        }
        else {
            clipRect.animate(clipBox);
        }
        // When clip is false, reset to no clip after animation
        group === null || group === void 0 ? void 0 : group.clip(clip ? clipRect : void 0);
        // Unclip temporary animation clip
        markerGroup === null || markerGroup === void 0 ? void 0 : markerGroup.clip();
        // Apply plotBorderRadius clipping
        plotClipGroup === null || plotClipGroup === void 0 ? void 0 : plotClipGroup.clip(
        // Navigator y-axis is not clippable
        clip && this.yAxis.clippable ?
            chart.plotClipInner :
            void 0);
    };
    /**
     * Animate in the series. Called internally twice. First with the `init`
     * parameter set to true, which sets up the initial state of the
     * animation. Then when ready, it is called with the `init` parameter
     * undefined, in order to perform the actual animation.
     *
     * @function Highcharts.Series#animate
     *
     * @param {boolean} [init]
     * Initialize the animation.
     */
    Series.prototype.animate = function (init) {
        var _a = this, chart = _a.chart, group = _a.group, markerGroup = _a.markerGroup, inverted = chart.inverted, animation = animObject(this.options.animation), 
        // The key for temporary animation clips
        animationClipKey = [
            this.getSharedClipKey(),
            animation.duration,
            animation.easing,
            animation.defer
        ].join(',');
        var animationClipRect = chart.sharedClips[animationClipKey], markerAnimationClipRect = chart.sharedClips[animationClipKey + 'm'];
        // Initialize the animation. Set up the clipping rectangle.
        if (init && group) {
            var clipBox = chart.getClipBox(this);
            // Create temporary animation clips
            if (!animationClipRect) {
                clipBox.width = 0;
                if (inverted) {
                    clipBox.x = chart.plotHeight;
                }
                animationClipRect = chart.renderer.clipRect(clipBox);
                chart.sharedClips[animationClipKey] = animationClipRect;
                // The marker clip box. The number 99 is a safe margin to avoid
                // markers being clipped during animation.
                var markerClipBox = {
                    x: inverted ? -99 : -99,
                    y: inverted ? -99 : -99,
                    width: inverted ? chart.plotWidth + 199 : 99,
                    height: inverted ? 99 : chart.plotHeight + 199
                };
                markerAnimationClipRect = chart.renderer.clipRect(markerClipBox);
                chart.sharedClips[animationClipKey + 'm'] = markerAnimationClipRect;
            }
            else {
                // When height changes during animation, typically due to
                // responsive settings
                animationClipRect.attr('height', clipBox.height);
            }
            group.clip(animationClipRect);
            markerGroup === null || markerGroup === void 0 ? void 0 : markerGroup.clip(markerAnimationClipRect);
            // Run the animation
        }
        else if (animationClipRect &&
            // Only first series in this pane
            !animationClipRect.hasClass('highcharts-animating')) {
            var finalBox = chart.getClipBox(this), step_1 = animation.step;
            // Only do this when there are actually markers, or we have multiple
            // series (#20473)
            if ((markerGroup === null || markerGroup === void 0 ? void 0 : markerGroup.element.childNodes.length) ||
                chart.series.length > 1) {
                // To provide as smooth animation as possible, update the marker
                // group clipping in steps of the main group animation
                animation.step = function (val, fx) {
                    if (step_1) {
                        step_1.apply(fx, arguments);
                    }
                    if (fx.prop === 'width' &&
                        (markerAnimationClipRect === null || markerAnimationClipRect === void 0 ? void 0 : markerAnimationClipRect.element)) {
                        markerAnimationClipRect.attr(inverted ? 'height' : 'width', val + 99);
                    }
                };
            }
            animationClipRect
                .addClass('highcharts-animating')
                .animate(finalBox, animation);
        }
    };
    /**
     * This runs after animation to land on the final plot clipping.
     *
     * @internal
     * @function Highcharts.Series#afterAnimate
     *
     * @emits Highcharts.Series#event:afterAnimate
     */
    Series.prototype.afterAnimate = function () {
        var _this = this;
        this.setClip();
        // Destroy temporary clip rectangles that are no longer in use
        objectEach(this.chart.sharedClips, function (clip, key, sharedClips) {
            if (clip && !_this.chart.container.querySelector("[clip-path=\"url(#".concat(clip.id, ")\"]"))) {
                clip.destroy();
                delete sharedClips[key];
            }
        });
        this.finishedAnimating = true;
        fireEvent(this, 'afterAnimate');
    };
    /**
     * Draw the markers for line-like series types, and columns or other
     * graphical representation for {@link Highcharts.Point} objects for other
     * series types. The resulting element is typically stored as
     * {@link Highcharts.Point#graphic}, and is created on the first call and
     * updated and moved on subsequent calls.
     *
     * @function Highcharts.Series#drawPoints
     */
    Series.prototype.drawPoints = function (points) {
        points || (points = this.points.concat(this.condemnedPoints));
        var series = this, chart = series.chart, styledMode = chart.styledMode, colorAxis = series.colorAxis, options = series.options, seriesMarkerOptions = options.marker, nullInteraction = options.nullInteraction, markerGroup = series[series.specialGroup || 'markerGroup'], xAxis = series.xAxis, globallyEnabled = pick(seriesMarkerOptions.enabled, !xAxis || xAxis.isRadial ? true : null, 
        // Use larger or equal as radius is null in bubbles (#6321)
        series.closestPointRangePx >= (seriesMarkerOptions.enabledThreshold *
            seriesMarkerOptions.radius));
        var i, point, graphic, verb, pointMarkerOptions, hasPointMarker, markerAttribs;
        if (seriesMarkerOptions.enabled !== false ||
            series._hasPointMarkers) {
            for (i = 0; i < points.length; i++) {
                point = points[i];
                graphic = point.graphic;
                verb = graphic ? 'animate' : 'attr';
                pointMarkerOptions = point.marker || {};
                hasPointMarker = !!point.marker;
                var isNull = point.isNull, shouldDrawMarker = ((globallyEnabled &&
                    !defined(pointMarkerOptions.enabled)) || pointMarkerOptions.enabled) &&
                    (!isNull || nullInteraction) &&
                    point.visible !== false;
                // Only draw the point if y is defined
                if (shouldDrawMarker) {
                    // Shortcuts
                    var symbol = pick(pointMarkerOptions.symbol, series.symbol, 'rect');
                    markerAttribs = series.markerAttribs(point, (point.selected && 'select'));
                    var isInside = point.isInside !== false;
                    if (!graphic &&
                        isInside &&
                        ((markerAttribs.width || 0) > 0 || point.hasImage)) {
                        point.graphic = graphic = chart.renderer
                            .symbol(symbol, markerAttribs.x, markerAttribs.y, markerAttribs.width, markerAttribs.height, hasPointMarker ?
                            pointMarkerOptions :
                            seriesMarkerOptions)
                            .add(markerGroup);
                        // New points fade in from old axis position
                        if (point.origin) {
                            var attr = point.getOrigin(point.origin, markerAttribs);
                            if (!styledMode) {
                                attr.opacity = 0;
                            }
                            graphic.attr(attr);
                            verb = 'animate';
                        }
                    }
                    if (graphic) {
                        // Updating pre-existing point
                        if (verb === 'animate') {
                            graphic === null || graphic === void 0 ? void 0 : graphic.animate(markerAttribs);
                        }
                        // Presentational attributes
                        var pointAttr = series.pointAttribs(point, ((styledMode || !point.selected) ?
                            void 0 :
                            'select'));
                        if (!styledMode) {
                            graphic[verb](pointAttr);
                        }
                        else if (colorAxis) { // #14114
                            graphic['css']({
                                fill: pointAttr.fill
                            });
                        }
                        graphic.addClass(point.getClassName(), true);
                    }
                }
                else if (graphic) {
                    point.graphic = graphic.destroy(); // #1269
                }
            }
        }
    };
    /**
     * Get non-presentational attributes for a point. Used internally for
     * both styled mode and classic. Can be overridden for different series
     * types.
     *
     * @see Series#pointAttribs
     *
     * @function Highcharts.Series#markerAttribs
     *
     * @param {Highcharts.Point} point
     * The Point to inspect.
     *
     * @param {string} [state]
     * The state, can be either `hover`, `select` or undefined.
     *
     * @return {Highcharts.SVGAttributes}
     * A hash containing those attributes that are not settable from CSS.
     */
    Series.prototype.markerAttribs = function (point, state) {
        var _a, _b;
        var seriesOptions = this.options, seriesMarkerOptions = seriesOptions.marker, pointMarkerOptions = point.marker || {}, symbol = (pointMarkerOptions.symbol ||
            seriesMarkerOptions.symbol), attribs = {};
        var seriesStateOptions, pointStateOptions, radius = pick(pointMarkerOptions.radius, seriesMarkerOptions === null || seriesMarkerOptions === void 0 ? void 0 : seriesMarkerOptions.radius);
        // Handle hover and select states
        if (state) {
            seriesStateOptions = (_a = seriesMarkerOptions === null || seriesMarkerOptions === void 0 ? void 0 : seriesMarkerOptions.states) === null || _a === void 0 ? void 0 : _a[state];
            pointStateOptions = (_b = pointMarkerOptions.states) === null || _b === void 0 ? void 0 : _b[state];
            radius = pick(pointStateOptions === null || pointStateOptions === void 0 ? void 0 : pointStateOptions.radius, seriesStateOptions === null || seriesStateOptions === void 0 ? void 0 : seriesStateOptions.radius, radius && radius + ((seriesStateOptions === null || seriesStateOptions === void 0 ? void 0 : seriesStateOptions.radiusPlus) ||
                0));
        }
        point.hasImage = symbol && symbol.indexOf('url') === 0;
        if (point.hasImage) {
            radius = 0; // And subsequently width and height is not set
        }
        var pos = point.pos();
        if (isNumber(radius) && pos) {
            if (seriesOptions.crisp) {
                pos[0] = crisp(pos[0], point.hasImage ?
                    0 :
                    symbol === 'rect' ?
                        // Rectangle symbols need crisp edges, others don't
                        (seriesMarkerOptions === null || seriesMarkerOptions === void 0 ? void 0 : seriesMarkerOptions.lineWidth) || 0 :
                        1);
            }
            attribs.x = pos[0] - radius;
            attribs.y = pos[1] - radius;
        }
        if (radius) {
            attribs.width = attribs.height = 2 * radius;
        }
        return attribs;
    };
    /**
     * Internal function to get presentational attributes for each point.
     * Unlike {@link Series#markerAttribs}, this function should return
     * those attributes that can also be set in CSS. In styled mode,
     * `pointAttribs` won't be called.
     *
     * @internal
     * @function Highcharts.Series#pointAttribs
     *
     * @param {Highcharts.Point} [point]
     * The point instance to inspect.
     *
     * @param {string} [state]
     * The point state, can be either `hover`, `select` or 'normal'. If
     * undefined, normal state is assumed.
     *
     * @return {Highcharts.SVGAttributes}
     * The presentational attributes to be set on the point.
     */
    Series.prototype.pointAttribs = function (point, state) {
        var _a;
        var options = this.options, seriesMarkerOptions = options.marker, pointOptions = point === null || point === void 0 ? void 0 : point.options, pointMarkerOptions = (pointOptions === null || pointOptions === void 0 ? void 0 : pointOptions.marker) || {}, pointColorOption = pointOptions === null || pointOptions === void 0 ? void 0 : pointOptions.color, pointColor = point === null || point === void 0 ? void 0 : point.color, zoneColor = (_a = point === null || point === void 0 ? void 0 : point.zone) === null || _a === void 0 ? void 0 : _a.color;
        var seriesStateOptions, pointStateOptions, color = this.color, fill, stroke, strokeWidth = pick(pointMarkerOptions.lineWidth, seriesMarkerOptions.lineWidth), opacity = ((point === null || point === void 0 ? void 0 : point.isNull) && options.nullInteraction) ? 0 : 1;
        color = (pointColorOption ||
            zoneColor ||
            pointColor ||
            color);
        fill = (pointMarkerOptions.fillColor ||
            seriesMarkerOptions.fillColor ||
            color);
        stroke = (pointMarkerOptions.lineColor ||
            seriesMarkerOptions.lineColor ||
            color);
        // Handle hover and select states
        state = state || 'normal';
        if (state) {
            seriesStateOptions = (seriesMarkerOptions.states[state] || {});
            pointStateOptions = (pointMarkerOptions.states &&
                pointMarkerOptions.states[state]) || {};
            strokeWidth = pick(pointStateOptions.lineWidth, seriesStateOptions.lineWidth, strokeWidth + pick(pointStateOptions.lineWidthPlus, seriesStateOptions.lineWidthPlus, 0));
            fill = (pointStateOptions.fillColor ||
                seriesStateOptions.fillColor ||
                fill);
            stroke = (pointStateOptions.lineColor ||
                seriesStateOptions.lineColor ||
                stroke);
            opacity = pick(pointStateOptions.opacity, seriesStateOptions.opacity, opacity);
        }
        return {
            'stroke': stroke,
            'stroke-width': strokeWidth,
            'fill': fill,
            'opacity': (point === null || point === void 0 ? void 0 : point.condemned) || (point === null || point === void 0 ? void 0 : point.isInside) === false ?
                0 : opacity
        };
    };
    /**
     * Clear DOM objects and free up memory.
     *
     * @internal
     * @function Highcharts.Series#destroy
     *
     * @emits Highcharts.Series#event:destroy
     */
    Series.prototype.destroy = function (keepEventsForUpdate) {
        var _a, _b;
        var series = this, chart = series.chart, issue134 = /AppleWebKit\/533/.test(win.navigator.userAgent), data = series.data || [];
        var destroy, i, axis;
        // Add event hook
        fireEvent(series, 'destroy', { keepEventsForUpdate: keepEventsForUpdate });
        // Remove events
        this.removeEvents(keepEventsForUpdate);
        // Erase from axes
        (series.axisTypes || []).forEach(function (AXIS) {
            axis = series[AXIS];
            if (axis === null || axis === void 0 ? void 0 : axis.series) {
                erase(axis.series, series);
                axis.isDirty = axis.forceRedraw = true;
            }
        });
        // Remove legend items
        if (series.legendItem) {
            series.chart.legend.destroyItem(series);
        }
        // Destroy all points with their elements
        i = data.length;
        while (i--) {
            (_b = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        for (var _c = 0, _d = series.zones; _c < _d.length; _c++) {
            var zone = _d[_c];
            // Destroy SVGElement's but preserve primitive props (#20426)
            destroyObjectProperties(zone, void 0, true);
        }
        // Clear the animation timeout if we are destroying the series
        // during initial animation
        internalClearTimeout(series.animationTimeout);
        // Destroy all SVGElements associated to the series
        objectEach(series, function (val, prop) {
            // Survive provides a hook for not destroying
            if (val instanceof SVGElement && !val.survive) {
                // Issue 134 workaround
                destroy = issue134 && prop === 'group' ?
                    'hide' :
                    'destroy';
                val[destroy]();
            }
        });
        // Remove from hoverSeries
        if (chart.hoverSeries === series) {
            chart.hoverSeries = void 0;
        }
        erase(chart.series, series);
        chart.orderItems('series');
        // Clear all members
        objectEach(series, function (val, prop) {
            if (!keepEventsForUpdate || prop !== 'hcEvents') {
                delete series[prop];
            }
        });
    };
    /**
     * Clip the graphs into zones for colors and styling.
     *
     * @internal
     * @function Highcharts.Series#applyZones
     */
    Series.prototype.applyZones = function () {
        var series = this, area = series.area, chart = series.chart, graph = series.graph, zones = series.zones, points = series.points, xAxis = series.xAxis, yAxis = series.yAxis, zoneAxis = series.zoneAxis, inverted = chart.inverted, renderer = chart.renderer, axis = this["".concat(zoneAxis, "Axis")], _a = axis || {}, isXAxis = _a.isXAxis, _b = _a.len, len = _b === void 0 ? 0 : _b, _c = _a.minPointOffset, minPointOffset = _c === void 0 ? 0 : _c, halfWidth = ((graph === null || graph === void 0 ? void 0 : graph.strokeWidth()) || 0) / 2 + 1, 
        // Avoid points that are so close to the threshold that the graph
        // line would be split
        avoidClose = function (zone, plotX, plotY) {
            if (plotX === void 0) { plotX = 0; }
            if (plotY === void 0) { plotY = 0; }
            if (inverted) {
                plotY = len - plotY;
            }
            var _a = zone.translated, translated = _a === void 0 ? 0 : _a, lineClip = zone.lineClip, distance = plotY - translated;
            lineClip === null || lineClip === void 0 ? void 0 : lineClip.push([
                'L',
                plotX,
                Math.abs(distance) < halfWidth ?
                    plotY - halfWidth * (distance <= 0 ? -1 : 1) :
                    translated
            ]);
        };
        if (zones.length &&
            (graph || area) &&
            axis &&
            isNumber(axis.min)) {
            var axisMax_1 = axis.getExtremes().max + minPointOffset, 
            // Invert the x and y coordinates of inverted charts
            invertPath_1 = function (path) {
                path.forEach(function (segment, i) {
                    if (segment[0] === 'M' || segment[0] === 'L') {
                        path[i] = [
                            segment[0],
                            isXAxis ? len - segment[1] : segment[1],
                            isXAxis ? segment[2] : len - segment[2]
                        ];
                    }
                });
            };
            // Reset
            zones.forEach(function (zone) {
                zone.lineClip = [];
                zone.translated = clamp(axis.toPixels(pick(zone.value, axisMax_1), true) || 0, 0, len);
            });
            // The use of the Color Threshold assumes there are no gaps so it is
            // safe to hide the original graph and area unless it is not
            // waterfall series, then use showLine property to set lines between
            // columns to be visible (#7862)
            if (graph && !this.showLine) {
                graph.hide();
            }
            if (area) {
                area.hide();
            }
            // Prepare for adaptive clips, avoiding segments close to the
            // threshold (#19709)
            if (zoneAxis === 'y' &&
                // Overheat protection
                points.length < xAxis.len) {
                for (var _d = 0, points_1 = points; _d < points_1.length; _d++) {
                    var point = points_1[_d];
                    var plotX = point.plotX, plotY = point.plotY, zone = point.zone, zoneBelow = zone && zones[zones.indexOf(zone) - 1];
                    // Close to upper boundary
                    if (zone) {
                        avoidClose(zone, plotX, plotY);
                    }
                    // Close to lower boundary
                    if (zoneBelow) {
                        avoidClose(zoneBelow, plotX, plotY);
                    }
                }
            }
            // Compute and apply the clips
            var lastLineClip_1 = [], 
            // Starting point of the first zone. Offset for category axis
            // (#22188).
            lastTranslated_1 = axis.toPixels(axis.getExtremes().min - minPointOffset, true);
            zones.forEach(function (zone) {
                var _a, _b;
                var lineClip = zone.lineClip || [], translated = Math.round(zone.translated || 0);
                if (xAxis.reversed) {
                    lineClip.reverse();
                }
                var clip = zone.clip, simpleClip = zone.simpleClip, x1 = 0, y1 = 0, x2 = xAxis.len, y2 = yAxis.len;
                if (isXAxis) {
                    x1 = translated;
                    x2 = lastTranslated_1;
                }
                else {
                    y1 = translated;
                    y2 = lastTranslated_1;
                }
                // Adaptive clips
                var simplePath = [
                    ['M', x1, y1],
                    ['L', x2, y1],
                    ['L', x2, y2],
                    ['L', x1, y2],
                    ['Z']
                ], adaptivePath = __spreadArray(__spreadArray(__spreadArray(__spreadArray([
                    simplePath[0]
                ], lineClip, true), [
                    simplePath[1],
                    simplePath[2]
                ], false), lastLineClip_1, true), [
                    simplePath[3],
                    simplePath[4]
                ], false);
                lastLineClip_1 = lineClip.reverse();
                lastTranslated_1 = translated;
                if (inverted) {
                    invertPath_1(adaptivePath);
                    if (area) {
                        invertPath_1(simplePath);
                    }
                }
                /* Debug clip paths
                zone.path?.destroy();
                zone.path = chart.renderer.path(adaptivePath)
                    .attr({
                        stroke: zone.color || this.color || 'gray',
                        'stroke-width': 1,
                        'dashstyle': 'Dash'
                    })
                    .add(series.group);
                // */
                if (clip) {
                    clip.animate({ d: adaptivePath });
                    simpleClip === null || simpleClip === void 0 ? void 0 : simpleClip.animate({ d: simplePath });
                }
                else {
                    clip = zone.clip = renderer.path(adaptivePath);
                    if (area) {
                        simpleClip = zone.simpleClip = renderer.path(simplePath);
                    }
                }
                // When no data, graph zone is not applied and after setData
                // clip was ignored. As a result, it should be applied each
                // time.
                if (graph) {
                    (_a = zone.graph) === null || _a === void 0 ? void 0 : _a.clip(clip);
                }
                if (area) {
                    (_b = zone.area) === null || _b === void 0 ? void 0 : _b.clip(simpleClip);
                }
            });
        }
        else if (series.visible) {
            // If zones were removed, restore graph and area
            if (graph) {
                graph.show();
            }
            if (area) {
                area.show();
            }
        }
    };
    /**
     * General abstraction for creating plot groups like series.group,
     * series.dataLabelsGroup and series.markerGroup. On subsequent calls,
     * the group will only be adjusted to the updated plot size.
     *
     * @internal
     * @function Highcharts.Series#plotGroup
     */
    Series.prototype.plotGroup = function (prop, name, visibility, zIndex, parent) {
        var group = this[prop];
        var isNew = !group, attrs = {
            visibility: visibility,
            zIndex: zIndex || 0.1 // Pointer logic uses this
        };
        // Avoid setting undefined opacity, or in styled mode
        if (defined(this.opacity) &&
            !this.chart.styledMode && this.state !== 'inactive' // #13719
        ) {
            attrs.opacity = this.opacity;
        }
        // Generate it on first call
        if (!group) {
            this[prop] = group = this.chart.renderer
                .g()
                .add(parent);
        }
        // Add the class names, and replace existing ones as response to
        // Series.update (#6660)
        group.addClass(('highcharts-' + name +
            ' highcharts-series-' + this.index +
            ' highcharts-' + this.type + '-series ' +
            (defined(this.colorIndex) ?
                'highcharts-color-' + this.colorIndex + ' ' :
                '') +
            (this.options.className || '') +
            (group.hasClass('highcharts-tracker') ?
                ' highcharts-tracker' :
                '')), true);
        // Place it on first and subsequent (redraw) calls
        group.attr(attrs)[isNew ? 'attr' : 'animate'](this.getPlotBox(name));
        return group;
    };
    /**
     * Get the translation and scale for the plot area of this series.
     *
     * @function Highcharts.Series#getPlotBox
     */
    Series.prototype.getPlotBox = function (name) {
        var horAxis = this.xAxis, vertAxis = this.yAxis;
        var chart = this.chart, inverted = (chart.inverted &&
            !chart.polar &&
            horAxis &&
            this.invertible &&
            name === 'series');
        // Swap axes for inverted (#2339)
        if (chart.inverted) {
            horAxis = vertAxis;
            vertAxis = this.xAxis;
        }
        var params = {
            scale: 1,
            translateX: horAxis ? horAxis.left : chart.plotLeft,
            translateY: vertAxis ? vertAxis.top : chart.plotTop,
            name: name
        };
        fireEvent(this, 'getPlotBox', params);
        var scale = params.scale, translateX = params.translateX, translateY = params.translateY;
        return {
            translateX: translateX,
            translateY: translateY,
            rotation: inverted ? 90 : 0,
            rotationOriginX: inverted ?
                scale * (horAxis.len - vertAxis.len) / 2 :
                0,
            rotationOriginY: inverted ?
                scale * (horAxis.len + vertAxis.len) / 2 :
                0,
            scaleX: inverted ? -scale : scale, // #1623
            scaleY: scale
        };
    };
    /**
     * Removes the event handlers attached previously with addEvents.
     * @internal
     * @function Highcharts.Series#removeEvents
     */
    Series.prototype.removeEvents = function (keepEventsForUpdate) {
        var eventsToUnbind = this.eventsToUnbind;
        if (!keepEventsForUpdate) {
            // Remove all events
            removeEvent(this);
        }
        if (eventsToUnbind.length) {
            // Remove only internal events for proper update. #12355 solves
            // problem with multiple destroy events
            eventsToUnbind.forEach(function (unbind) {
                unbind();
            });
            eventsToUnbind.length = 0;
        }
    };
    /**
     * Render the graph and markers. Called internally when first rendering
     * and later when redrawing the chart. This function can be extended in
     * plugins, but normally shouldn't be called directly.
     *
     * @function Highcharts.Series#render
     *
     * @emits Highcharts.Series#event:afterRender
     */
    Series.prototype.render = function () {
        var _a, _b, _c, _d, _e;
        var series = this, chart = series.chart, options = series.options, hasRendered = series.hasRendered, animOptions = animObject(options.animation), visibility = series.visible ?
            'inherit' : 'hidden', // #2597
        zIndex = options.zIndex, chartSeriesGroup = chart.seriesGroup;
        var animDuration = series.finishedAnimating ?
            0 : animOptions.duration;
        fireEvent(this, 'render');
        // If we have a plot border radius, create a separate parent group where
        // the clip is later applied. This is necessary to handle multi-pane
        // layouts and entrance animation.
        if (chart.plotClipInner) {
            series.plotClipGroup = chart.renderer.g().add(chartSeriesGroup);
        }
        // The group
        series.plotGroup('group', 'series', visibility, zIndex, series.plotClipGroup || chartSeriesGroup);
        series.markerGroup = series.plotGroup('markerGroup', 'markers', visibility, zIndex, chartSeriesGroup);
        // Initial clipping, applies to columns etc. (#3839).
        if (options.clip !== false) {
            series.setClip();
        }
        // Initialize the animation
        if (animDuration) {
            (_a = series.animate) === null || _a === void 0 ? void 0 : _a.call(series, true);
        }
        // Draw the graph if any
        if (series.drawGraph) {
            series.drawGraph();
            series.applyZones();
        }
        // Draw the points
        if (series.visible) {
            series.drawPoints();
        }
        // Draw the data labels
        (_b = series.drawDataLabels) === null || _b === void 0 ? void 0 : _b.call(series);
        // In pie charts, slices are added to the DOM, but actual rendering
        // is postponed until labels reserved their space
        (_c = series.redrawPoints) === null || _c === void 0 ? void 0 : _c.call(series);
        // Draw the mouse tracking area
        if (options.enableMouseTracking) {
            (_d = series.drawTracker) === null || _d === void 0 ? void 0 : _d.call(series);
        }
        // Run the animation
        if (animDuration) {
            (_e = series.animate) === null || _e === void 0 ? void 0 : _e.call(series);
        }
        // Call the afterAnimate function on animation complete (but don't
        // overwrite the animation.complete option which should be available
        // to the user).
        if (!hasRendered) {
            // Additional time if defer is defined before afterAnimate
            // will be triggered
            if (animDuration && animOptions.defer) {
                animDuration += animOptions.defer;
            }
            series.animationTimeout = syncTimeout(function () {
                series.afterAnimate();
            }, animDuration || 0);
        }
        // Means data is in accordance with what you see
        series.isDirty = false;
        // (See #322) series.isDirty = series.isDirtyData = false; // means
        // data is in accordance with what you see
        series.hasRendered = true;
        fireEvent(series, 'afterRender');
    };
    /**
     * Redraw the series. This function is called internally from
     * `chart.redraw` and normally shouldn't be called directly.
     *
     * @internal
     * @function Highcharts.Series#redraw
     */
    Series.prototype.redraw = function () {
        // Cache it here as it is set to false in render, but used after
        var wasDirty = this.isDirty || this.isDirtyData;
        this.translate();
        this.render();
        if (wasDirty) { // #3868, #3945
            delete this.kdTree;
        }
        this.condemnedPoints.length = 0;
    };
    /**
     * Whether to reserve space for the series, either because it is visible or
     * because the `chart.ignoreHiddenSeries` option is false.
     *
     * @internal
     */
    Series.prototype.reserveSpace = function () {
        return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
    };
    /**
     * Find the nearest point from a pointer event. This applies to series that
     * use k-d-trees to get the nearest point. Native pointer events must be
     * normalized using `Pointer.normalize`, that adds `chartX` and `chartY`
     * properties.
     *
     * @sample highcharts/demo/synchronized-charts
     *         Synchronized charts with tooltips
     *
     * @function Highcharts.Series#searchPoint
     *
     * @param {Highcharts.PointerEvent} e
     *        The normalized pointer event
     * @param {boolean} [compareX=false]
     *        Search only by the X value, not Y
     *
     * @return {Point|undefined}
     *        The closest point to the pointer event
     */
    Series.prototype.searchPoint = function (e, compareX) {
        var _a = this, xAxis = _a.xAxis, yAxis = _a.yAxis, inverted = this.chart.inverted;
        return this.searchKDTree({
            clientX: inverted ?
                xAxis.len - e.chartY + xAxis.pos :
                e.chartX - xAxis.pos,
            plotY: inverted ?
                yAxis.len - e.chartX + yAxis.pos :
                e.chartY - yAxis.pos
        }, compareX, e);
    };
    /**
     * Build the k-d-tree that is used by mouse and touch interaction to get
     * the closest point. Line-like series typically have a one-dimensional
     * tree where points are searched along the X axis, while scatter-like
     * series typically search in two dimensions, X and Y.
     *
     * @internal
     * @function Highcharts.Series#buildKDTree
     */
    Series.prototype.buildKDTree = function (e) {
        // Prevent multiple k-d-trees from being built simultaneously
        // (#6235)
        this.buildingKdTree = true;
        var series = this, seriesOptions = series.options, dimensions = seriesOptions.findNearestPointBy
            .indexOf('y') > -1 ? 2 : 1;
        /**
         * Internal function
         * @internal
         */
        function kdtree(points, depth, dimensions) {
            var length = points === null || points === void 0 ? void 0 : points.length;
            var axis, median;
            if (length) {
                // Alternate between the axis
                axis = series.kdAxisArray[depth % dimensions];
                // Sort point array
                points.sort(function (a, b) { return (a[axis] || 0) - (b[axis] || 0); });
                median = Math.floor(length / 2);
                // Build and return node
                return {
                    point: points[median],
                    left: kdtree(points.slice(0, median), depth + 1, dimensions),
                    right: kdtree(points.slice(median + 1), depth + 1, dimensions)
                };
            }
        }
        /**
         * Start the recursive build process with a clone of the points
         * array and null points filtered out. (#3873)
         * @internal
         */
        function startRecursive() {
            series.kdTree = kdtree(series.getValidPoints(void 0, 
            // For line-type series restrict to plot area, but
            // column-type series not (#3916, #4511)
            !series.directTouch, seriesOptions === null || seriesOptions === void 0 ? void 0 : seriesOptions.nullInteraction), dimensions, dimensions);
            series.buildingKdTree = false;
        }
        delete series.kdTree;
        // For testing tooltips, don't build async. Also if touchstart, we may
        // be dealing with click events on mobile, so don't delay (#6817).
        syncTimeout(startRecursive, seriesOptions.kdNow || (e === null || e === void 0 ? void 0 : e.type) === 'touchstart' ? 0 : 1);
    };
    /**
     * Search the k-d-tree for the point closest to the given point.
     *
     * @internal
     * @function Highcharts.Series#searchKDTree
     *
     * @param {Highcharts.KDPointSearchObject} point
     *        The point to search for.
     * @param {boolean} [compareX=false]
     *        Search only by the X value, not Y.
     * @param {Highcharts.PointerEvent} [e]
     *        The normalized pointer event.
     * @param {Function} [suppliedPointEvaluator]
     *        A custom point evaluator function.
     * @param {Function} [suppliedBSideCheckEvaluator]
     *        A custom b-side check evaluator function.
     *
     * @return {Highcharts.Point|undefined}
     *         The closest point found.
     */
    Series.prototype.searchKDTree = function (point, compareX, e, suppliedPointEvaluator, suppliedBSideCheckEvaluator) {
        var series = this, _a = this.kdAxisArray, kdX = _a[0], kdY = _a[1], kdComparer = compareX ? 'distX' : 'dist', kdDimensions = (series.options.findNearestPointBy || '')
            .indexOf('y') > -1 ? 2 : 1, useRadius = !!series.isBubble, pointEvaluator = suppliedPointEvaluator || (function (p1, p2, comparisonProp) {
            var p1Val = p1[comparisonProp] || 0, p2Val = p2[comparisonProp] || 0;
            return [
                ((p1Val === p2Val && p1.index > p2.index) ||
                    p1Val < p2Val) ?
                    p1 :
                    p2,
                false
            ];
        }), bSideCheckEvaluator = suppliedBSideCheckEvaluator || (function (a, b) { return a < b; });
        /**
         * Set the one and two dimensional distance on the point object.
         * @internal
         */
        function setDistance(p1, p2) {
            var _a;
            var p1kdX = p1[kdX], p2kdX = p2[kdX], x = (defined(p1kdX) && defined(p2kdX)) ? p1kdX - p2kdX : null, p1kdY = p1[kdY], p2kdY = p2[kdY], y = (defined(p1kdY) && defined(p2kdY)) ? p1kdY - p2kdY : 0, radius = useRadius ? (((_a = p2.marker) === null || _a === void 0 ? void 0 : _a.radius) || 0) : 0;
            p2.dist = Math.sqrt(((x && x * x) || 0) + y * y) - radius;
            p2.distX = defined(x) ? (Math.abs(x) - radius) : Number.MAX_VALUE;
        }
        /**
         * Search the kd-tree.
         *
         * @internal
         * @function doSearch
         *
         * @param {Highcharts.KDPointSearchObject} search
         *        The point to search for.
         * @param {Highcharts.KDNode} tree
         *        The kd-tree structure to search.
         * @param {number} depth
         *        The depth in the tree.
         * @param {number} dimensions
         *        The dimensions in the tree.
         *
         * @return {Highcharts.Point}
         *         The closest point found.
         */
        function doSearch(search, tree, depth, dimensions) {
            var _a;
            var _b;
            var point = tree.point, axis = series.kdAxisArray[depth % dimensions];
            var ret = point, flip = false;
            setDistance(search, point);
            // Pick side based on distance to splitting point
            var tdist = (search[axis] || 0) - (point[axis] || 0) +
                (useRadius ? (((_b = point.marker) === null || _b === void 0 ? void 0 : _b.radius) || 0) : 0), sideA = tdist < 0 ? 'left' : 'right', sideB = tdist < 0 ? 'right' : 'left';
            // End of tree
            if (tree[sideA]) {
                _a = pointEvaluator(point, doSearch(search, tree[sideA], depth + 1, dimensions), kdComparer), ret = _a[0], flip = _a[1];
            }
            if (tree[sideB]) {
                var sqrtTDist = Math.sqrt(tdist * tdist), retDist = ret[kdComparer];
                // Compare distance to current best to splitting point to decide
                // whether to check side B or no
                if (bSideCheckEvaluator(sqrtTDist, retDist, flip)) {
                    ret = pointEvaluator(ret, doSearch(search, tree[sideB], depth + 1, dimensions), kdComparer)[0];
                }
            }
            return ret;
        }
        if (!this.kdTree && !this.buildingKdTree) {
            this.buildKDTree(e);
        }
        if (this.kdTree) {
            return doSearch(point, this.kdTree, kdDimensions, kdDimensions);
        }
    };
    /**
     * Return the value of pointPlacement relative to the point's x value.
     *
     * @internal
     * @function Highcharts.Series#pointPlacementToXValue
     */
    Series.prototype.pointPlacementToXValue = function () {
        var _a = this, options = _a.options, xAxis = _a.xAxis;
        var factor = options.pointPlacement;
        // Point placement is relative to each series pointRange (#5889)
        if (factor === 'between') {
            factor = xAxis.reversed ? -0.5 : 0.5; // #11955
        }
        return isNumber(factor) ?
            factor * (options.pointRange || xAxis.pointRange) :
            0;
    };
    /**
     * Check whether a point is inside the plot area.
     *
     * @internal
     * @function Highcharts.Series#isPointInside
     *
     * @param {Highcharts.Dictionary<number>|Highcharts.Point} point
     * A point-like object with `plotX` and `plotY` properties.
     *
     * @return {boolean}
     * True if the point is inside the plot area.
     */
    Series.prototype.isPointInside = function (point) {
        var _a = this, chart = _a.chart, xAxis = _a.xAxis, yAxis = _a.yAxis, _b = point.plotX, plotX = _b === void 0 ? -1 : _b, _c = point.plotY, plotY = _c === void 0 ? -1 : _c, isInside = (plotY >= 0 &&
            plotY <= (yAxis ? yAxis.len : chart.plotHeight) &&
            plotX >= 0 &&
            plotX <= (xAxis ? xAxis.len : chart.plotWidth));
        return isInside;
    };
    /**
     * Draw the tracker object that sits above all data labels and markers to
     * track mouse events on the graph or points. For the line type charts
     * the tracker uses the same graphPath, but with a greater stroke width
     * for better control.
     * @internal
     */
    Series.prototype.drawTracker = function () {
        var _a;
        var series = this, options = series.options, trackByArea = options.trackByArea, trackerPath = [].concat((trackByArea ? series.areaPath : series.graphPath) || []), chart = series.chart, pointer = chart.pointer, renderer = chart.renderer, snap = ((_a = chart.options.tooltip) === null || _a === void 0 ? void 0 : _a.snap) || 0, onMouseOver = function () {
            if (options.enableMouseTracking &&
                chart.hoverSeries !== series) {
                series.onMouseOver();
            }
        }, 
        /*
         * Empirical lowest possible opacities for TRACKER_FILL for an
         * element to stay invisible but clickable
         * IE9: 0.00000000001 (unlimited)
         * IE10: 0.0001 (exporting only)
         * FF: 0.00000000001 (unlimited)
         * Chrome: 0.000001
         * Safari: 0.000001
         * Opera: 0.00000000001 (unlimited)
         */
        TRACKER_FILL = 'rgba(192,192,192,' + (svg ? 0.0001 : 0.002) + ')';
        var tracker = series.tracker;
        // Draw the tracker
        if (tracker) {
            tracker.attr({ d: trackerPath });
        }
        else if (series.graph) { // Create
            series.tracker = tracker = renderer.path(trackerPath)
                .attr({
                visibility: series.visible ? 'inherit' : 'hidden',
                zIndex: 2
            })
                .addClass(trackByArea ?
                'highcharts-tracker-area' :
                'highcharts-tracker-line')
                .add(series.group);
            if (!chart.styledMode) {
                tracker.attr({
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round', // #1225
                    stroke: TRACKER_FILL,
                    fill: trackByArea ? TRACKER_FILL : 'none',
                    'stroke-width': series.graph.strokeWidth() +
                        (trackByArea ? 0 : 2 * snap)
                });
            }
            // The tracker is added to the series group, which is clipped, but
            // is covered by the marker group. So the marker group also needs to
            // capture events.
            __spreadArray([
                series.tracker,
                series.markerGroup
            ], (series.dataLabelsGroups || []), true).forEach(function (tracker) {
                if (tracker) {
                    tracker.addClass('highcharts-tracker')
                        .on('mouseover', onMouseOver)
                        .on('mouseout', function (e) {
                        pointer === null || pointer === void 0 ? void 0 : pointer.onTrackerMouseOut(e);
                    });
                    if (options.cursor && !chart.styledMode) {
                        tracker.css({ cursor: options.cursor });
                    }
                    tracker.on('touchstart', onMouseOver);
                }
            });
        }
        fireEvent(this, 'afterDrawTracker');
    };
    /**
     * Add a point to the series after render time. The point can be added at
     * the end, or by giving it an X value, to the start or in the middle of the
     * series.
     *
     * Alternatively, when the chart is using data table for the data, a point
     * can be added by running `dataTable.setRow`.
     *
     * @sample highcharts/members/series-addpoint-append/
     *         Append point
     * @sample highcharts/members/series-addpoint-append-and-shift/
     *         Append and shift
     * @sample highcharts/datatable/live-chart/
     *         Append and shift with data table
     * @sample highcharts/members/series-addpoint-x-and-y/
     *         Both X and Y values given
     * @sample highcharts/members/series-addpoint-pie/
     *         Append pie slice
     * @sample stock/members/series-addpoint/
     *         Append 100 points in Highcharts Stock
     * @sample stock/members/series-addpoint-shift/
     *         Append and shift in Highcharts Stock
     * @sample maps/members/series-addpoint/
     *         Add a point in Highmaps
     *
     * @function Highcharts.Series#addPoint
     *
     * @param {Highcharts.PointOptionsType} options
     *        The point options. If options is a single number, a point with
     *        that y value is appended to the series. If it is an array, it will
     *        be interpreted as x and y values respectively. If it is an
     *        object, advanced options as outlined under `series.data` are
     *        applied.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the point is added. When adding
     *        more than one point, it is highly recommended that the redraw
     *        option be set to false, and instead {@link Chart#redraw} is
     *        explicitly called after the adding of points is finished.
     *        Otherwise, the chart will redraw after adding each point.
     *
     * @param {boolean} [shift=false]
     *        If true, a point is shifted off the start of the series as one is
     *        appended to the end.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     *
     * @param {boolean} [withEvent=true]
     *        Used internally, whether to fire the series `addPoint` event.
     *
     * @emits Highcharts.Series#event:addPoint
     */
    Series.prototype.addPoint = function (options, redraw, shift, animation, withEvent) {
        var _a;
        var series = this, seriesOptions = series.options, chart = series.chart, data = series.data, table = series.dataTable, xAxis = series.xAxis, names = (xAxis === null || xAxis === void 0 ? void 0 : xAxis.hasNames) && xAxis.names, dataOptions = seriesOptions.data, xData = series.getColumn('x');
        var isInTheMiddle, i;
        // Optional redraw, defaults to true
        redraw = pick(redraw, true);
        // Get options and push the point to xData, yData and series.options. In
        // series.generatePoints the Point instance will be created on demand
        // and pushed to the series.data array.
        var _b = series.pointClass.prototype, applyOptions = _b.applyOptions, optionsToObject = _b.optionsToObject, point = { series: series }, pointOptions = optionsToObject.call(point, options);
        applyOptions.call(point, pointOptions, void 0, false);
        var x = point.x;
        // Get the insertion point
        i = xData.length;
        if (series.requireSorting && x < xData[i - 1]) {
            isInTheMiddle = true;
            while (i && xData[i - 1] > x) {
                i--;
            }
        }
        // Insert the row at the given index
        table.setRow(pointOptions, i, true);
        (_a = this.xColumn) === null || _a === void 0 ? void 0 : _a.splice(i, 0, this.getX(x));
        if (names && point.name) {
            names[x] = point.name;
        }
        dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.splice(i, 0, options);
        if (isInTheMiddle ||
            // When hasProcessedData is true we need to splice an empty slot
            // into series.data, otherwise generatePoints won't pick it up.
            series.hasProcessedDataTable) {
            series.data.splice(i, 0, null);
            series.processData();
        }
        // Generate points to be added to the legend (#1329)
        if (seriesOptions.legendType === 'point') {
            series.generatePoints();
        }
        // Shift the first point off the parallel arrays
        if (shift) {
            if (data[0] && !!data[0].remove) {
                data[0].remove(false);
            }
            else {
                [
                    data,
                    dataOptions,
                    this.xColumn
                ].filter(defined).forEach(function (coll) {
                    coll.shift();
                });
                table.deleteRows(0);
            }
        }
        // Fire event
        if (withEvent !== false) {
            fireEvent(series, 'addPoint', { point: point });
        }
        // Redraw
        series.isDirty = true;
        series.isDirtyData = true;
        if (redraw) {
            chart.redraw(animation); // Animation is set anyway on redraw, #5665
        }
    };
    /**
     * Remove a point from the series. Unlike the
     * {@link Highcharts.Point#remove} method, this can also be done on a point
     * that is not instantiated because it is outside the view or subject to
     * Highcharts Stock data grouping.
     *
     * @sample highcharts/members/series-removepoint/
     *         Remove cropped point
     *
     * @function Highcharts.Series#removePoint
     *
     * @param {number} i
     *        The index of the point in the {@link Highcharts.Series.data|data}
     *        array.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the point is added. When
     *        removing more than one point, it is highly recommended that the
     *        `redraw` option be set to `false`, and instead {@link
     *        Highcharts.Chart#redraw} is explicitly called after the adding of
     *        points is finished.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether and optionally how the series should be animated.
     *
     * @emits Highcharts.Point#event:remove
     */
    Series.prototype.removePoint = function (i, redraw, animation) {
        var series = this, chart = series.chart, data = series.data, points = series.points, table = series.dataTable, point = data[i], remove = function () {
            // Splice out the point's data from all parallel arrays
            [
                // #4935
                (points === null || points === void 0 ? void 0 : points.length) === data.length ? points : void 0,
                data,
                series.options.data,
                series.xColumn
            ].filter(defined).forEach(function (coll) {
                coll.splice(i, 1);
            });
            table.deleteRows(i);
            // Reset modified data (shouldn't this happen automagically?)
            table.modified = table;
            point === null || point === void 0 ? void 0 : point.destroy();
            // Redraw
            series.isDirty = true;
            series.isDirtyData = true;
            if (redraw) {
                chart.redraw();
            }
        };
        setAnimation(animation, chart);
        redraw = pick(redraw, true);
        // Fire the event with a default handler of removing the point
        if (point) {
            point.firePointEvent('remove', null, remove);
        }
        else {
            remove();
        }
    };
    /**
     * Remove a series and optionally redraw the chart.
     *
     * @sample highcharts/members/series-remove/
     *         Remove first series from a button
     *
     * @function Highcharts.Series#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or wait for an explicit call to
     *        {@link Highcharts.Chart#redraw}.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     *
     * @param {boolean} [withEvent=true]
     *        Used internally, whether to fire the series `remove` event.
     *
     * @emits Highcharts.Series#event:remove
     */
    Series.prototype.remove = function (redraw, animation, withEvent, keepEvents) {
        var series = this, chart = series.chart;
        /**
         * Remove the series.
         *
         * @internal
         */
        function remove() {
            // Destroy elements
            series.destroy(keepEvents);
            // Redraw
            chart.isDirtyLegend = chart.isDirtyBox = true;
            chart.linkSeries(keepEvents);
            if (pick(redraw, true)) {
                chart.redraw(animation);
            }
        }
        // Fire the event with a default handler of removing the point
        if (withEvent !== false) {
            fireEvent(series, 'remove', null, remove);
        }
        else {
            remove();
        }
    };
    /**
     * Update the series with a new set of options. For a clean and precise
     * handling of new options, all methods and elements from the series are
     * removed, and it is initialized from scratch. Therefore, this method is
     * more performance expensive than some other utility methods like {@link
     * Series#setData} or {@link Series#setVisible}.
     *
     * Note that `Series.update` may mutate the passed `data` options.
     *
     * @sample highcharts/members/series-update/
     *         Updating series options
     * @sample maps/members/series-update/
     *         Update series options in Highmaps
     *
     * @function Highcharts.Series#update
     *
     * @param {Highcharts.SeriesOptionsType} options
     *        New options that will be merged with the series' existing options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the series is altered. If doing
     *        more operations on the chart, it is a good idea to set redraw to
     *        false and call {@link Chart#redraw} after.
     *
     * @emits Highcharts.Series#event:update
     * @emits Highcharts.Series#event:afterUpdate
     */
    Series.prototype.update = function (options, redraw) {
        var _a, _b, _c;
        options = diffObjects(options, this.userOptions);
        fireEvent(this, 'update', { options: options });
        var series = this, chart = series.chart, 
        // Must use user options when changing type because series.options
        // is merged in with type specific plotOptions
        oldOptions = series.userOptions, initialType = series.initialType || series.type, plotOptions = chart.options.plotOptions, initialSeriesProto = seriesTypes[initialType].prototype, groups = [
            'dataLabelsGroup',
            'dataLabelsGroups',
            'dataLabelsParentGroups',
            'group',
            'markerGroup',
            'transformGroup'
        ], optionsToCheck = [
            'dataGrouping',
            'pointStart',
            'pointInterval',
            'pointIntervalUnit',
            'keys'
        ], 
        // Animation must be enabled when calling update before the initial
        // animation has first run. This happens when calling update
        // directly after chart initialization, or when applying responsive
        // rules (#6912).
        animation = series.finishedAnimating && { animation: false }, kinds = {}, dataOptions = options.data || options.dataTable;
        var seriesOptions, n, keepProps = Series.keepProps.slice(), newType = (options.type ||
            oldOptions.type ||
            chart.options.chart.type);
        var keepPoints = !(
        // Indicators etc recalculate the data. It should be
        // possible to omit this.
        this.hasDerivedData ||
            // New type requires new point classes
            (newType && newType !== this.type) ||
            // New options affecting how the data points are built
            typeof options.keys !== 'undefined' ||
            typeof options.pointStart !== 'undefined' ||
            typeof options.pointInterval !== 'undefined' ||
            typeof options.relativeXValue !== 'undefined' ||
            options.joinBy ||
            options.mapData || // #11636
            // Changes to data grouping requires new points in new group
            optionsToCheck.some(function (option) { return series.hasOptionChanged(option); }));
        newType = newType || initialType;
        if (keepPoints) {
            keepProps.push.apply(keepProps, Series.keepPropsForPoints);
            if (options.visible !== false) {
                keepProps.push('area', 'graph');
            }
            series.parallelArrays.forEach(function (key) {
                keepProps.push(key + 'Data');
            });
            if (dataOptions) {
                // `setData` uses `dataSorting` options so we need to update
                // them earlier
                if (options.dataSorting) {
                    extend(series.options.dataSorting, options.dataSorting);
                }
                this.setData(dataOptions, false);
            }
        }
        else {
            this.dataTable.modified = this.dataTable;
        }
        // Merge in multiple data label options (#23560)
        if (options.dataLabels && oldOptions.dataLabels) {
            options.dataLabels = this.mergeArrays(oldOptions.dataLabels, options.dataLabels);
        }
        // Do the merge, with some forced options
        options = merge(oldOptions, {
            // When oldOptions.index is null it should't be cleared.
            // Otherwise navigator series will have wrong indexes (#10193).
            index: oldOptions.index === void 0 ?
                series.index : oldOptions.index,
            pointStart: 
            // When updating from blank (#7933)
            (_b = (_a = plotOptions === null || plotOptions === void 0 ? void 0 : plotOptions.series) === null || _a === void 0 ? void 0 : _a.pointStart) !== null && _b !== void 0 ? _b : oldOptions.pointStart
        }, !keepPoints && { data: series.options.data }, options, animation);
        // Merge does not merge arrays, but replaces them. Since points were
        // updated, `series.options.data` has correct merged options, use it:
        if (keepPoints && options.data) {
            options.data = series.options.data;
        }
        // Make sure preserved properties are not destroyed (#3094)
        keepProps = groups.concat(keepProps);
        keepProps.forEach(function (prop) {
            keepProps[prop] = series[prop];
            delete series[prop];
        });
        var casting = false;
        if (seriesTypes[newType]) {
            casting = newType !== series.type;
            // Destroy the series and delete all properties, it will be
            // reinserted within the `init` call below
            series.remove(false, false, false, true);
            if (casting) {
                // #20264: Re-detect a certain chart properties from new series
                chart.propFromSeries();
                // Modern browsers including IE11
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(series, seriesTypes[newType].prototype);
                    // Legacy (IE < 11)
                }
                else {
                    var ownEvents = Object.hasOwnProperty.call(series, 'hcEvents') && series.hcEvents;
                    for (n in initialSeriesProto) { // eslint-disable-line guard-for-in
                        series[n] = void 0;
                    }
                    // Reinsert all methods and properties from the new type
                    // prototype (#2270, #3719).
                    extend(series, seriesTypes[newType].prototype);
                    // The events are tied to the prototype chain, don't copy if
                    // they're not the series' own
                    if (ownEvents) {
                        series.hcEvents = ownEvents;
                    }
                    else {
                        delete series.hcEvents;
                    }
                }
            }
        }
        else {
            error(17, true, chart, { missingModuleFor: newType });
        }
        // Re-register groups (#3094) and other preserved properties
        keepProps.forEach(function (prop) {
            series[prop] = keepProps[prop];
        });
        series.init(chart, options);
        // Remove particular elements of the points. Check `series.options`
        // because we need to consider the options being set on plotOptions as
        // well.
        if (keepPoints && this.points) {
            seriesOptions = series.options;
            // What kind of elements to destroy
            if (seriesOptions.visible === false) {
                kinds.graphic = 1;
                kinds.dataLabel = 1;
            }
            else {
                // If the marker got disabled or changed its symbol, width or
                // height - destroy
                if (this.hasMarkerChanged(seriesOptions, oldOptions)) {
                    kinds.graphic = 1;
                }
                if (!((_c = series.hasDataLabels) === null || _c === void 0 ? void 0 : _c.call(series))) {
                    kinds.dataLabel = 1;
                }
            }
            for (var _d = 0, _e = this.points; _d < _e.length; _d++) {
                var point = _e[_d];
                if (point === null || point === void 0 ? void 0 : point.series) {
                    point.resolveColor();
                    // Destroy elements in order to recreate based on updated
                    // series options.
                    if (Object.keys(kinds).length) {
                        point.destroyElements(kinds);
                    }
                    if (seriesOptions.showInLegend === false &&
                        point.legendItem) {
                        chart.legend.destroyItem(point);
                    }
                }
            }
        }
        series.initialType = initialType;
        chart.linkSeries(); // Links are lost in series.remove (#3028)
        // #15383: Fire updatedData if the type has changed to keep linked
        // series such as indicators updated
        if (casting && series.linkedSeries.length) {
            series.isDirtyData = true;
        }
        fireEvent(this, 'afterUpdate');
        if (pick(redraw, true)) {
            chart.redraw(keepPoints ? void 0 : false);
        }
    };
    /**
     * Used from within series.update
     * @internal
     */
    Series.prototype.setName = function (name) {
        this.name = this.options.name = this.userOptions.name = name;
        this.chart.isDirtyLegend = true;
    };
    /**
     * Check if the option has changed.
     * @internal
     */
    Series.prototype.hasOptionChanged = function (optionName) {
        var _a, _b;
        var chart = this.chart, option = this.options[optionName], plotOptions = chart.options.plotOptions, oldOption = this.userOptions[optionName], plotOptionsOption = pick((_a = plotOptions === null || plotOptions === void 0 ? void 0 : plotOptions[this.type]) === null || _a === void 0 ? void 0 : _a[optionName], (_b = plotOptions === null || plotOptions === void 0 ? void 0 : plotOptions.series) === null || _b === void 0 ? void 0 : _b[optionName]);
        // Check if `plotOptions` are defined already, #19203
        if (oldOption && !defined(plotOptionsOption)) {
            return option !== oldOption;
        }
        return option !== pick(plotOptionsOption, option);
    };
    /**
     * Runs on mouse over the series graphical items.
     *
     * @function Highcharts.Series#onMouseOver
     * @emits Highcharts.Series#event:mouseOver
     */
    Series.prototype.onMouseOver = function () {
        var series = this, chart = series.chart, hoverSeries = chart.hoverSeries, pointer = chart.pointer;
        pointer === null || pointer === void 0 ? void 0 : pointer.setHoverChartIndex();
        // Set normal state to previous series
        if (hoverSeries && hoverSeries !== series) {
            hoverSeries.onMouseOut();
        }
        // Trigger the event
        fireEvent(series, 'mouseOver');
        // Hover this
        series.setState('hover');
        /**
         * Contains the original hovered series.
         *
         * @name Highcharts.Chart#hoverSeries
         * @type {Highcharts.Series|null}
         */
        chart.hoverSeries = series;
    };
    /**
     * Runs on mouse out of the series graphical items.
     *
     * @function Highcharts.Series#onMouseOut
     *
     * @emits Highcharts.Series#event:mouseOut
     */
    Series.prototype.onMouseOut = function () {
        // Trigger the event only if listeners exist
        var series = this, chart = series.chart, tooltip = chart.tooltip, hoverPoint = chart.hoverPoint;
        // #182, set to null before the mouseOut event fires
        chart.hoverSeries = null;
        // Trigger mouse out on the point, which must be in this series
        if (hoverPoint) {
            hoverPoint.onMouseOut();
        }
        // Fire the mouse out event
        fireEvent(series, 'mouseOut');
        // Hide the tooltip
        if (tooltip &&
            !series.stickyTracking &&
            (!tooltip.shared || series.noSharedTooltip)) {
            tooltip.hide();
        }
        // Reset all inactive states
        chart.series.forEach(function (s) {
            s.setState('', true);
        });
    };
    /**
     * Set the state of the series. Called internally on mouse interaction
     * operations, but it can also be called directly to visually
     * highlight a series.
     *
     * @function Highcharts.Series#setState
     *
     * @param {Highcharts.SeriesStateValue|""} [state]
     *        The new state, can be either `'hover'`, `'inactive'`, `'select'`,
     *        or `''` (an empty string), `'normal'` or `undefined` to set to
     *        normal state.
     * @param {boolean} [inherit]
     *        Determines if state should be inherited by points too.
     */
    Series.prototype.setState = function (state, inherit) {
        var _a, _b;
        var series = this, graph = series.graph, options = series.options, inactiveOtherPoints = options.inactiveOtherPoints, stateOptions = options.states, 
        // By default a quick animation to hover/inactive,
        // slower to un-hover
        stateAnimation = pick((_a = stateOptions === null || stateOptions === void 0 ? void 0 : stateOptions[state || 'normal']) === null || _a === void 0 ? void 0 : _a.animation, series.chart.options.chart.animation);
        var lineWidth = options.lineWidth, opacity = options.opacity;
        state = state || '';
        if (series.state !== state) {
            // Toggle class names
            __spreadArray([
                series.group,
                series.markerGroup
            ], (series.dataLabelsGroups || []), true).forEach(function (group) {
                if (group) {
                    // Old state
                    if (series.state) {
                        group.removeClass('highcharts-series-' + series.state);
                    }
                    // New state
                    if (state) {
                        group.addClass('highcharts-series-' + state);
                    }
                }
            });
            series.state = state;
            if (!series.chart.styledMode) {
                if (((_b = stateOptions[state]) === null || _b === void 0 ? void 0 : _b.enabled) === false) {
                    return;
                }
                if (state) {
                    lineWidth = (stateOptions[state].lineWidth ||
                        lineWidth + (stateOptions[state].lineWidthPlus || 0)); // #4035
                    opacity = pick(stateOptions[state].opacity, opacity);
                }
                if (graph && !graph.dashstyle && isNumber(lineWidth)) {
                    // Animate the graph stroke-width
                    for (var _c = 0, _d = __spreadArray([
                        graph
                    ], this.zones.map(function (zone) { return zone.graph; }), true); _c < _d.length; _c++) {
                        var graphElement = _d[_c];
                        graphElement === null || graphElement === void 0 ? void 0 : graphElement.animate({
                            'stroke-width': lineWidth
                        }, stateAnimation);
                    }
                }
                // For some types (pie, networkgraph, sankey) opacity is
                // resolved on a point level
                if (!inactiveOtherPoints) {
                    __spreadArray(__spreadArray([
                        series.group,
                        series.markerGroup
                    ], (series.dataLabelsGroups || []), true), [
                        series.labelBySeries
                    ], false).forEach(function (group) {
                        group === null || group === void 0 ? void 0 : group.animate({ opacity: opacity }, stateAnimation);
                    });
                }
            }
        }
        // Don't loop over points on a series that doesn't apply inactive state
        // to siblings markers (e.g. line, column)
        if (inherit && inactiveOtherPoints && series.points) {
            series.setAllPointsToState(state || void 0);
        }
    };
    /**
     * Set the state for all points in the series.
     *
     * @function Highcharts.Series#setAllPointsToState
     *
     * @internal
     *
     * @param {string} [state]
     *        Can be either `hover` or undefined to set to normal state.
     */
    Series.prototype.setAllPointsToState = function (state) {
        this.points.forEach(function (point) {
            if (point.setState) {
                point.setState(state);
            }
        });
    };
    /**
     * Show or hide the series.
     *
     * @function Highcharts.Series#setVisible
     *
     * @param {boolean} [visible]
     * True to show the series, false to hide. If undefined, the visibility is
     * toggled.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart after the series is altered. If doing more
     * operations on the chart, it is a good idea to set redraw to false and
     * call {@link Chart#redraw|chart.redraw()} after.
     *
     * @emits Highcharts.Series#event:hide
     * @emits Highcharts.Series#event:show
     */
    Series.prototype.setVisible = function (visible, redraw) {
        var _a, _b;
        var series = this, chart = series.chart, ignoreHiddenSeries = chart.options.chart.ignoreHiddenSeries, oldVisibility = series.visible;
        // If called without an argument, toggle visibility
        series.visible =
            visible =
                series.options.visible =
                    series.userOptions.visible =
                        typeof visible === 'undefined' ? !oldVisibility : visible; // #5618
        var showOrHide = visible ? 'show' : 'hide';
        [
            'group',
            'markerGroup',
            'tracker',
            'tt'
        ].forEach(function (key) {
            var _a;
            (_a = series[key]) === null || _a === void 0 ? void 0 : _a[showOrHide]();
        });
        (_a = series.dataLabelsGroups) === null || _a === void 0 ? void 0 : _a.forEach(function (g) {
            g === null || g === void 0 ? void 0 : g[showOrHide]();
        });
        // Hide tooltip (#1361)
        if (chart.hoverSeries === series ||
            ((_b = chart.hoverPoint) === null || _b === void 0 ? void 0 : _b.series) === series) {
            series.onMouseOut();
        }
        if (series.legendItem) {
            chart.legend.colorizeItem(series, visible);
        }
        // Rescale or adapt to resized chart
        series.isDirty = true;
        // In a stack, all other series are affected
        if (series.options.stacking) {
            chart.series.forEach(function (otherSeries) {
                if (otherSeries.options.stacking && otherSeries.visible) {
                    otherSeries.isDirty = true;
                }
            });
        }
        // Show or hide linked series
        series.linkedSeries.forEach(function (otherSeries) {
            otherSeries.setVisible(visible, false);
        });
        if (ignoreHiddenSeries) {
            chart.isDirtyBox = true;
        }
        fireEvent(series, showOrHide);
        if (redraw !== false) {
            chart.redraw();
        }
    };
    /**
     * Show the series if hidden.
     *
     * @sample highcharts/members/series-hide/
     *         Toggle visibility from a button
     *
     * @function Highcharts.Series#show
     * @emits Highcharts.Series#event:show
     */
    Series.prototype.show = function () {
        this.setVisible(true);
    };
    /**
     * Hide the series if visible. If the
     * [chart.ignoreHiddenSeries](https://api.highcharts.com/highcharts/chart.ignoreHiddenSeries)
     * option is true, the chart is redrawn without this series.
     *
     * @sample highcharts/members/series-hide/
     *         Toggle visibility from a button
     *
     * @function Highcharts.Series#hide
     * @emits Highcharts.Series#event:hide
     */
    Series.prototype.hide = function () {
        this.setVisible(false);
    };
    /**
     * Select or unselect the series. This means its
     * {@link Highcharts.Series.selected|selected}
     * property is set, the checkbox in the legend is toggled and when selected,
     * the series is returned by the {@link Highcharts.Chart#getSelectedSeries}
     * function.
     *
     * @sample highcharts/members/series-select/
     *         Select a series from a button
     *
     * @function Highcharts.Series#select
     *
     * @param {boolean} [selected]
     * True to select the series, false to unselect. If undefined, the selection
     * state is toggled.
     *
     * @emits Highcharts.Series#event:select
     * @emits Highcharts.Series#event:unselect
     */
    Series.prototype.select = function (selected) {
        var series = this;
        series.selected =
            selected =
                this.options.selected = (typeof selected === 'undefined' ?
                    !series.selected :
                    selected);
        if (series.checkbox) {
            series.checkbox.checked = selected;
        }
        fireEvent(series, selected ? 'select' : 'unselect');
    };
    /**
     * Checks if a tooltip should be shown for a given point.
     *
     * @internal
     */
    Series.prototype.shouldShowTooltip = function (plotX, plotY, options) {
        if (options === void 0) { options = {}; }
        options.series = this;
        options.visiblePlotOnly = true;
        return this.chart.isInsidePlot(plotX, plotY, options);
    };
    /**
     * Draws the legend symbol based on the legendSymbol user option.
     *
     * @internal
     */
    Series.prototype.drawLegendSymbol = function (legend, item) {
        var _a, _b;
        var renderer = this.chart.renderer, legendSymbol = this.options.legendSymbol || 'rectangle', legendItem = item.legendItem || {}, options = legend.options, symbolHeight = legend.symbolHeight, symbolWidth = legend.symbolWidth, squareSymbol = options.squareSymbol, adjustedSymbolWidth = squareSymbol ? symbolHeight : symbolWidth, x = squareSymbol ? (symbolWidth - symbolHeight) / 2 : 0, y = (legend.baseline || 0) - symbolHeight + 1, w = adjustedSymbolWidth, h = symbolHeight, r = (_a = options.symbolRadius) !== null && _a !== void 0 ? _a : symbolHeight;
        var symbol = legendSymbol === 'rectangle' ?
            // For the rectangle, use a true `rect` element because it renders
            // sharper than a symbol with `path` and arcs
            renderer.rect(x, y, w, h, r) :
            (renderer.symbols[legendSymbol] &&
                renderer.symbol(legendSymbol, x, y, w, h, { r: r }));
        // Rectangle or SVGRenderer symbol
        if (symbol) {
            legendItem.symbol = symbol
                .addClass('highcharts-point')
                .attr({
                zIndex: 3
            })
                .add(legendItem.group);
            // Symbol function defined in LegendSymbol
        }
        else {
            (_b = LegendSymbol[legendSymbol]) === null || _b === void 0 ? void 0 : _b.call(this, legend, item);
        }
    };
    /** @internal */
    Series.defaultOptions = SeriesDefaults;
    /**
     * Registry of all available series types.
     *
     * @name Highcharts.Series.types
     * @type {Highcharts.Dictionary<typeof_Highcharts.Series>}
     */
    Series.types = SeriesRegistry.seriesTypes;
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Registers a series class to be accessible via `Series.types`.
     *
     * @function Highcharts.Series.registerType
     *
     * @param {string} seriesType
     * The series type as an identifier string in lower case.
     *
     * @param {Function} SeriesClass
     * The series class as a class pattern or a constructor function with
     * prototype.
     */
    Series.registerType = SeriesRegistry.registerSeriesType;
    /**
     * Properties to keep after update.
     *
     * @internal
     */
    Series.keepProps = [
        'colorIndex',
        'eventOptions',
        'navigatorSeries',
        'symbolIndex',
        'baseSeries'
    ];
    /**
     * Properties to keep after update if the point instances should be
     * preserved.
     *
     * @internal
     */
    Series.keepPropsForPoints = [
        'data',
        'isDirtyData',
        // GeoHeatMap interpolation
        'isDirtyCanvas',
        'points',
        'condemnedPoints',
        'dataTable',
        'hasProcessedDataTable', // #17057
        'xIncrement',
        'cropped',
        '_hasPointMarkers',
        'hasDataLabels',
        // Networkgraph (#14397)
        'nodes',
        'layout',
        // Treemap
        'level',
        // Map specific, consider moving it to series-specific preserve-
        // properties (#10617)
        'mapMap',
        'mapData',
        'minY',
        'maxY',
        'minX',
        'maxX',
        'transformGroups' // #18857
    ];
    return Series;
}());
extend(Series.prototype, {
    axisTypes: ['xAxis', 'yAxis'],
    coll: 'series',
    colorCounter: 0,
    directTouch: false,
    invertible: true,
    isCartesian: true,
    kdAxisArray: ['clientX', 'plotY'],
    // Each point's x and y values are stored in this.xData and this.yData:
    parallelArrays: ['x', 'y'],
    pointClass: Point,
    requireSorting: true,
    // Requires the data to be sorted:
    sorted: true
});
/* *
 *
 *  Registry
 *
 * */
SeriesRegistry.series = Series;
/* *
 *
 *  Default Export
 *
 * */
export default Series;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * This is a placeholder type of the possible series options for
 * [Highcharts](../highcharts/series), [Highcharts Stock](../highstock/series),
 * [Highmaps](../highmaps/series), and [Gantt](../gantt/series).
 *
 * In TypeScript is this dynamically generated to reference all possible types
 * of series options.
 *
 * @ignore-declaration
 * @typedef {Highcharts.SeriesOptions|Highcharts.Dictionary<*>} Highcharts.SeriesOptionsType
 */
/**
 * Options for `dataMapping`. The data mapping options allow you to define
 * how data from a data table should be mapped to series points. The object
 * keys refer to the point property that should be mapped, and the values refer
 * to the `dataTable` and `column` that should be used for the mapping.
 *
 * Values can be either a string pointing directly to a column in the first
 * data table, or an object with `dataTable` and `column` properties to specify
 * the mapping in more detail.
 *
 * @example
 * Highcharts.chart('container', {
 *     dataTable: {
 *         columns: {
 *             Year: [2020, 2021, 2022, 2023],
 *             Cost: [11, 13, 12, 14],
 *             Revenue: [12, 15, 14, 18]
 *         }
 *     },
 *     plotOptions: {
 *         series: {
 *             // Mapping to a shared column goes in plotOptions
 *             dataMapping: {
 *                 x: 'Year'
 *             }
 *         }
 *     },
 *     series: [{
 *         dataMapping: {
 *             y: 'Cost'
 *         }
 *     }, {
 *         dataMapping: {
 *             y: 'Revenue'
 *         }
 *     }]
 * });
 *
 * @interface Highcharts.DataMappingOptionsObject
 * @since next
 */
/**
 * Function callback when a series has been animated.
 *
 * @callback Highcharts.SeriesAfterAnimateCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occurred.
 *
 * @param {Highcharts.SeriesAfterAnimateEventObject} event
 *        Event arguments.
 *
 * @param {Highcharts.Series} [ctx]
 *        Since v12.6.0, the series context passed as an extra argument for
 *        arrow functions.
 */
/**
 * Event information regarding completed animation of a series.
 *
 * @interface Highcharts.SeriesAfterAnimateEventObject
 */ /**
* Animated series.
* @name Highcharts.SeriesAfterAnimateEventObject#target
* @type {Highcharts.Series}
*/ /**
* Event type.
* @name Highcharts.SeriesAfterAnimateEventObject#type
* @type {"afterAnimate"}
*/
/**
 * Function callback when the checkbox next to the series' name in the legend is
 * clicked.
 *
 * @callback Highcharts.SeriesCheckboxClickCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occurred.
 *
 * @param {Highcharts.SeriesCheckboxClickEventObject} event
 *        Event arguments.
 */
/**
 * Event information regarding check of a series box.
 *
 * @interface Highcharts.SeriesCheckboxClickEventObject
 */ /**
* Whether the box has been checked.
* @name Highcharts.SeriesCheckboxClickEventObject#checked
* @type {boolean}
*/ /**
* Related series.
* @name Highcharts.SeriesCheckboxClickEventObject#item
* @type {Highcharts.Series}
*/ /**
* Related series.
* @name Highcharts.SeriesCheckboxClickEventObject#target
* @type {Highcharts.Series}
*/ /**
* Event type.
* @name Highcharts.SeriesCheckboxClickEventObject#type
* @type {"checkboxClick"}
*/
/**
 * Function callback when a series is clicked. Return false to cancel toggle
 * actions.
 *
 * @callback Highcharts.SeriesClickCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occurred.
 *
 * @param {Highcharts.SeriesClickEventObject} event
 *        Event arguments.
 *
 * @param {Highcharts.Series} [ctx]
 *        Since v12.6.0, the series context passed as an extra argument for
 *        arrow functions.
 */
/**
 * Common information for a click event on a series.
 *
 * @interface Highcharts.SeriesClickEventObject
 * @extends global.Event
 */ /**
* Nearest point on the graph.
* @name Highcharts.SeriesClickEventObject#point
* @type {Highcharts.Point}
*/
/**
 * Gets fired when the series is hidden after chart generation time, either by
 * clicking the legend item or by calling `.hide()`.
 *
 * @callback Highcharts.SeriesHideCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occurred.
 *
 * @param {global.Event} event
 *        The event that occurred.
 *
 * @param {Highcharts.Series} [ctx]
 *        Since v12.6.0, the series context passed as an extra argument for
 *        arrow functions.
 */
/**
 * The SVG value used for the `stroke-linecap` and `stroke-linejoin` of a line
 * graph.
 *
 * @typedef {"butt"|"round"|"square"|string} Highcharts.SeriesLinecapValue
 */
/**
 * Gets fired when the mouse leaves the graph.
 *
 * @callback Highcharts.SeriesMouseOutCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        Series where the event occurred.
 *
 * @param {global.PointerEvent} event
 *        Event that occurred.
 *
 * @param {Highcharts.Series} [ctx]
 *        Since v12.6.0, the series context passed as an extra argument for
 *        arrow functions.
 */
/**
 * Gets fired when the mouse enters the graph.
 *
 * @callback Highcharts.SeriesMouseOverCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        Series where the event occurred.
 *
 * @param {global.PointerEvent} event
 *        Event that occurred.
 *
 * @param {Highcharts.Series} [ctx]
 *        Since v12.6.0, the series context passed as an extra argument for
 *        arrow functions.
 */
/**
 * Translation and scale for the plot area of a series.
 *
 * @interface Highcharts.SeriesPlotBoxObject
 */ /**
* @name Highcharts.SeriesPlotBoxObject#scaleX
* @type {number}
*/ /**
* @name Highcharts.SeriesPlotBoxObject#scaleY
* @type {number}
*/ /**
* @name Highcharts.SeriesPlotBoxObject#translateX
* @type {number}
*/ /**
* @name Highcharts.SeriesPlotBoxObject#translateY
* @type {number}
*/
/**
 * Gets fired when the series is shown after chart generation time, either by
 * clicking the legend item or by calling `.show()`.
 *
 * @callback Highcharts.SeriesShowCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        Series where the event occurred.
 *
 * @param {global.Event} event
 *        Event that occurred.
 *
 * @param {Highcharts.Series} [ctx]
 *        Since v12.6.0, the series context passed as an extra argument for
 *        arrow functions.
 */
/**
 * Possible key values for the series state options.
 *
 * @typedef {"hover"|"inactive"|"normal"|"select"} Highcharts.SeriesStateValue
 */
''; // Detach doclets above
/* *
 *
 *  API Options
 *
 * */
/**
 * Series options for specific data and the data itself. In TypeScript you
 * have to cast the series options to specific series types, to get all
 * possible options for a series.
 *
 * ```ts
 * // TypeScript example
 * Highcharts.chart('container', {
 *     series: [{
 *         color: '#06C',
 *         data: [[0, 1], [2, 3]]
 *     } as Highcharts.SeriesLineOptions ]
 * });
 * ```
 *
 * @type      {Array<*>}
 * @apioption series
 */
/**
 * An id for the series. This can be used after render time to get a pointer
 * to the series object through `chart.get()`.
 *
 * @sample {highcharts} highcharts/plotoptions/series-id/
 *         Get series by id
 *
 * @basic
 * @type      {string}
 * @since     1.2.0
 * @apioption series.id
 */
/**
 * The index of the series in the chart, affecting the internal index in the
 * `chart.series` array, the visible Z index as well as the order in the
 * legend.
 *
 * @basic
 * @type      {number}
 * @since     2.3.0
 * @apioption series.index
 */
/**
 * The sequential index of the series in the legend.
 *
 * @see [legend.reversed](#legend.reversed),
 *      [yAxis.reversedStacks](#yAxis.reversedStacks)
 *
 * @sample {highcharts|highstock} highcharts/series/legendindex/
 *         Legend in opposite order
 *
 * @type      {number}
 * @apioption series.legendIndex
 */
/**
 * The name of the series as shown in the legend, tooltip etc. If a `dataTable`
 * and `dataMapping` are used, the name defaults to the id of the primary data
 * table column. Otherwise, it defaults to "Series {n}", where n is the index of
 * the series, starting at 1.
 *
 * @sample {highcharts} highcharts/series/name/
 *         Series name
 * @sample {highmaps} maps/demo/category-map/
 *         Series name
 *
 * @basic
 * @type      {string}
 * @apioption series.name
 */
/**
 * The type of series, for example `line` or `column`. By default, the
 * series type is inherited from [chart.type](#chart.type), so unless the
 * chart is a combination of series types, there is no need to set it on the
 * series level.
 *
 * @sample {highcharts} highcharts/series/type/
 *         Line and column in the same chart
 * @sample highcharts/series/type-dynamic/
 *         Dynamic types with button selector
 * @sample {highmaps} maps/demo/mapline-mappoint/
 *         Multiple types in the same map
 *
 * @basic
 * @type      {string}
 * @apioption series.type
 */
/**
 * When using dual or multiple x axes, this number defines which xAxis the
 * particular series is connected to. It refers to either the
 * {@link #xAxis.id|axis id}
 * or the index of the axis in the xAxis array, with 0 being the first.
 *
 * @type      {number|string}
 * @default   0
 * @product   highcharts highstock
 * @apioption series.xAxis
 */
/**
 * When using dual or multiple y axes, this number defines which yAxis the
 * particular series is connected to. It refers to either the
 * {@link #yAxis.id|axis id}
 * or the index of the axis in the yAxis array, with 0 being the first.
 *
 * @sample {highcharts} highcharts/series/yaxis/
 *         Apply the column series to the secondary Y axis
 *
 * @type      {number|string}
 * @default   0
 * @product   highcharts highstock
 * @apioption series.yAxis
 */
/**
 * Define the visual z index of the series.
 *
 * @sample {highcharts} highcharts/plotoptions/series-zindex-default/
 *         With no z index, the series defined last are on top
 * @sample {highcharts} highcharts/plotoptions/series-zindex/
 *         With a z index, the series with the highest z index is on top
 * @sample {highstock} highcharts/plotoptions/series-zindex-default/
 *         With no z index, the series defined last are on top
 * @sample {highstock} highcharts/plotoptions/series-zindex/
 *         With a z index, the series with the highest z index is on top
 *
 * @type      {number}
 * @product   highcharts highstock
 * @apioption series.zIndex
 */
/**
 * Contains the point's index in the `Series.points` array.
 *
 * @name Highcharts.Point#index
 * @type {number}
 * @readonly
 */
/**
 * The translated X value for the point in terms of pixels. Relative
 * to the X axis position if the series has one, otherwise relative
 * to the plot area. Depending on the series type this value might
 * not be defined.
 *
 * In an inverted chart the x-axis is going from the bottom to the
 * top so the `plotX` value is the number of pixels from the bottom
 * of the axis.
 *
 * @see Highcharts.Point#pos
 * @name Highcharts.Point#plotX
 * @type {number|undefined}
 */
/**
 * The translated Y value for the point in terms of pixels. Relative
 * to the Y axis position if the series has one, otherwise relative
 * to the plot area. Depending on the series type this value might
 * not be defined.
 *
 * In an inverted chart the y-axis is going from right to left
 * so the `plotY` value is the number of pixels from the right
 * of the `yAxis`.
 *
 * @see Highcharts.Point#pos
 * @name Highcharts.Point#plotY
 * @type {number|undefined}
 */
''; // Include precedent doclets in transpiled
