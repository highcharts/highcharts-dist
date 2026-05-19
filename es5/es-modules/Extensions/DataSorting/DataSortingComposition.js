/* *
 *
 *  (c) 2025-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import { addEvent, defined, extend, getNestedProperty, wrap } from '../../Shared/Utilities.js';
/* *
 *
 *  Variables
 *
 * */
/* *
 *
 *  Functions
 *
 * */
/**
 * Internal function to sort series data
 *
 * @internal
 */
function sortData(series, data) {
    var options = series.options, _a = (options.dataSorting || {}).sortKey, sortKey = _a === void 0 ? 'y' : _a, getPointOptionsObject = function (series, pointOptions) {
        return (defined(pointOptions) &&
            series.pointClass.prototype.optionsToObject.call({
                series: series
            }, pointOptions)) || {};
    };
    data.forEach(function (pointOptions, i) {
        data[i] = getPointOptionsObject(series, pointOptions);
        data[i].index = i;
    });
    // Sorting
    var sortedData = data.concat().sort(function (a, b) {
        var aValue = getNestedProperty(sortKey, a);
        var bValue = getNestedProperty(sortKey, b);
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    });
    // Set x value depending on the position in the array
    sortedData.forEach(function (point, i) {
        point.x = i;
    });
    // Set the same x for linked series points if they don't have their
    // own sorting
    if (series.linkedSeries) {
        series.linkedSeries.forEach(function (linkedSeries) {
            var _a;
            var options = linkedSeries.options, seriesData = options.data;
            if (!((_a = options.dataSorting) === null || _a === void 0 ? void 0 : _a.enabled) &&
                seriesData) {
                seriesData.forEach(function (pointOptions, i) {
                    seriesData[i] = getPointOptionsObject(linkedSeries, pointOptions);
                    if (data[i]) {
                        seriesData[i].x = data[i].x;
                        seriesData[i].index = i;
                    }
                });
                linkedSeries.setData(seriesData, false);
            }
        });
    }
    return data;
}
/**
 * Sort and return chart series in order depending on the number of linked
 * series.
 */
function getSeriesOrderByLinks(chart) {
    return chart.series.concat().sort(function (a, b) {
        if (a.linkedSeries.length || b.linkedSeries.length) {
            return b.linkedSeries.length - a.linkedSeries.length;
        }
        return 0;
    });
}
/**
 * Set data for all series with enabled sorting.
 */
function setSortedData(chart) {
    getSeriesOrderByLinks(chart).forEach(function (series) {
        // We need to set data for series with sorting after series init
        if (!series.points && !series.data && series.enabledDataSorting) {
            series.setData(series.options.data, false);
        }
    });
}
/**
 * Set properties for a series if data sorting is enabled.
 */
function setDataSortingProperties(series) {
    var _a;
    var _b;
    extend(series, {
        requireSorting: false,
        sorted: false,
        enabledDataSorting: true,
        allowDG: false
    });
    // To allow unsorted data for column series.
    (_a = (_b = series.options).pointRange) !== null && _a !== void 0 ? _a : (_b.pointRange = 1);
}
/**
 * @private
 */
function compose(ChartClass, SeriesClass) {
    wrap(SeriesClass.prototype, 'setData', function (proceed, data) {
        var _a;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if ((_a = this.options.dataSorting) === null || _a === void 0 ? void 0 : _a.enabled) {
            // Not ready until we have linked series. Instead, call
            // `setData` again on `beforeRender`.
            if (!this.chart.hasInitializedLinkedSeries) {
                return this;
            }
            if (Array.isArray(data)) {
                data = sortData(this, data);
            }
        }
        return proceed.apply(this, [data].concat(args));
    });
    addEvent(ChartClass, 'beforeRender', function () {
        setSortedData(this);
    });
    addEvent(ChartClass, 'afterLinkSeries', function () {
        this.series.forEach(function (series) {
            var _a;
            if ((_a = series.linkedParent) === null || _a === void 0 ? void 0 : _a.enabledDataSorting) {
                setDataSortingProperties(series);
            }
        });
        this.hasInitializedLinkedSeries = true;
    });
    addEvent(ChartClass, 'afterAddSeries', function (_a) {
        var series = _a.series;
        if (series.enabledDataSorting) {
            // We need to call `setData` after `linkSeries`
            series.setData(series.options.data, false);
        }
    });
    // Set data for series with sorting enabled if it isn't set yet
    // (#19715, #20318)
    addEvent(SeriesClass, 'afterUpdate', function () {
        setSortedData(this.chart);
    });
    addEvent(SeriesClass, 'afterInit', function () {
        var _a;
        if ((_a = this.options.dataSorting) === null || _a === void 0 ? void 0 : _a.enabled) {
            setDataSortingProperties(this);
        }
    });
}
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Options for series data sorting.
 *
 * @since     8.0.0
 * @product   highcharts highstock
 * @requires  modules/data-sorting
 * @apioption plotOptions.series.dataSorting
 */
/**
 * Enable or disable data sorting for the series. Use [xAxis.reversed](
 * #xAxis.reversed) to change the sorting order.
 *
 * @sample {highcharts} highcharts/datasorting/animation/
 *         Data sorting in scatter-3d
 * @sample {highcharts} highcharts/datasorting/labels-animation/
 *         Axis labels animation
 * @sample {highcharts} highcharts/datasorting/dependent-sorting/
 *         Dependent series sorting
 * @sample {highcharts} highcharts/datasorting/independent-sorting/
 *         Independent series sorting
 *
 * @type      {boolean}
 * @since     8.0.0
 * @apioption plotOptions.series.dataSorting.enabled
 */
/**
 * Whether to allow matching points by name in an update. If this option
 * is disabled, points will be matched by order.
 *
 * @sample {highcharts} highcharts/datasorting/match-by-name/
 *         Enabled match by name
 *
 * @type      {boolean}
 * @since     8.0.0
 * @apioption plotOptions.series.dataSorting.matchByName
 */
/**
 * Determines what data value should be used to sort by.
 *
 * @sample {highcharts} highcharts/datasorting/sort-key/
 *         Sort key as `z` value
 *
 * @type      {string}
 * @since     8.0.0
 * @default   y
 * @apioption plotOptions.series.dataSorting.sortKey
 */
/* *
 *
 *  Default Export
 *
 * */
var DataSortingComposition = {
    compose: compose
};
export default DataSortingComposition;
