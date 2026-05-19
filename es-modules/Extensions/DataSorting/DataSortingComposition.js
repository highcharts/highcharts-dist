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
    const options = series.options, { sortKey = 'y' } = options.dataSorting || {}, getPointOptionsObject = function (series, pointOptions) {
        return (defined(pointOptions) &&
            series.pointClass.prototype.optionsToObject.call({
                series: series
            }, pointOptions)) || {};
    };
    data.forEach((pointOptions, i) => {
        data[i] = getPointOptionsObject(series, pointOptions);
        data[i].index = i;
    });
    // Sorting
    const sortedData = data.concat().sort((a, b) => {
        const aValue = getNestedProperty(sortKey, a);
        const bValue = getNestedProperty(sortKey, b);
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    });
    // Set x value depending on the position in the array
    sortedData.forEach((point, i) => {
        point.x = i;
    });
    // Set the same x for linked series points if they don't have their
    // own sorting
    if (series.linkedSeries) {
        series.linkedSeries.forEach((linkedSeries) => {
            const options = linkedSeries.options, seriesData = options.data;
            if (!options.dataSorting?.enabled &&
                seriesData) {
                seriesData.forEach((pointOptions, i) => {
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
    return chart.series.concat().sort((a, b) => {
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
    getSeriesOrderByLinks(chart).forEach((series) => {
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
    extend(series, {
        requireSorting: false,
        sorted: false,
        enabledDataSorting: true,
        allowDG: false
    });
    // To allow unsorted data for column series.
    (_a = series.options).pointRange ?? (_a.pointRange = 1);
}
/**
 * @private
 */
function compose(ChartClass, SeriesClass) {
    wrap(SeriesClass.prototype, 'setData', function (proceed, data, ...args) {
        if (this.options.dataSorting?.enabled) {
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
        this.series.forEach((series) => {
            if (series.linkedParent?.enabledDataSorting) {
                setDataSortingProperties(series);
            }
        });
        this.hasInitializedLinkedSeries = true;
    });
    addEvent(ChartClass, 'afterAddSeries', function ({ series }) {
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
        if (this.options.dataSorting?.enabled) {
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
const DataSortingComposition = {
    compose
};
export default DataSortingComposition;
