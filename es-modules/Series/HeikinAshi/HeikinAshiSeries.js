/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import H from '../../Core/Globals.js';
const { composed } = H;
import HeikinAshiPoint from './HeikinAshiPoint.js';
import HeikinAshiSeriesDefaults from './HeikinAshiSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { candlestick: CandlestickSeries } = SeriesRegistry.seriesTypes;
import { addEvent, merge, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * After processing and grouping the data, calculate how the heikinashi data
 * set should look like.
 * @private
 */
function onAxisPostProcessData() {
    const series = this.series;
    series.forEach((series) => {
        if (series.is('heikinashi')) {
            const heikinashiSeries = series;
            heikinashiSeries.heikinashiData.length = 0;
            heikinashiSeries.getHeikinashiData();
        }
    });
}
/**
 * Assign heikinashi data into the points.
 * @private
 * @todo move to HeikinAshiPoint class
 */
function onHeikinAshiSeriesAfterTranslate() {
    const series = this, points = series.points, heikinashiData = series.heikinashiData, cropStart = series.cropStart || 0;
    // Modify points.
    for (let i = 0; i < points.length; i++) {
        const point = points[i], heikinashiDataPoint = heikinashiData[i + cropStart];
        point.open = heikinashiDataPoint[0];
        point.high = heikinashiDataPoint[1];
        point.low = heikinashiDataPoint[2];
        point.close = heikinashiDataPoint[3];
    }
}
/**
 * Force to recalculate the heikinashi data set after updating data.
 * @private
 */
function onHeikinAshiSeriesUpdatedData() {
    if (this.heikinashiData.length) {
        this.heikinashiData.length = 0;
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Heikin Ashi series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.heikinashi
 *
 * @augments Highcharts.Series
 */
class HeikinAshiSeries extends CandlestickSeries {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.heikinashiData = [];
    }
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass, AxisClass) {
        CandlestickSeries.compose(SeriesClass);
        if (pushUnique(composed, 'HeikinAshi')) {
            addEvent(AxisClass, 'postProcessData', onAxisPostProcessData);
            addEvent(HeikinAshiSeries, 'afterTranslate', onHeikinAshiSeriesAfterTranslate);
            addEvent(HeikinAshiSeries, 'updatedData', onHeikinAshiSeriesUpdatedData);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Calculate data set for the heikinashi series before creating the points.
     * @private
     */
    getHeikinashiData() {
        const series = this, table = series.allGroupedTable || series.dataTable, dataLength = table.rowCount, heikinashiData = series.heikinashiData;
        if (!heikinashiData.length && dataLength) {
            // Modify the first point.
            this.modifyFirstPointValue(table.getRow(0, this.pointArrayMap));
            // Modify other points.
            for (let i = 1; i < dataLength; i++) {
                this.modifyDataPoint(table.getRow(i, this.pointArrayMap), heikinashiData[i - 1]);
            }
        }
        series.heikinashiData = heikinashiData;
    }
    /**
     * @private
     */
    init() {
        super.init.apply(this, arguments);
        this.heikinashiData = [];
    }
    /**
     * Calculate and modify the first data point value.
     * @private
     * @param {Array<(number)>} dataPoint
     *        Current data point.
     */
    modifyFirstPointValue(dataPoint) {
        const open = (dataPoint[0] +
            dataPoint[1] +
            dataPoint[2] +
            dataPoint[3]) / 4, close = (dataPoint[0] + dataPoint[3]) / 2;
        this.heikinashiData.push([open, dataPoint[1], dataPoint[2], close]);
    }
    /**
     * Calculate and modify the data point's value.
     * @private
     * @param {Array<(number)>} dataPoint
     *        Current data point.
     * @param {Array<(number)>} previousDataPoint
     *        Previous data point.
     */
    modifyDataPoint(dataPoint, previousDataPoint) {
        const newOpen = (previousDataPoint[0] + previousDataPoint[3]) / 2, newClose = (dataPoint[0] +
            dataPoint[1] +
            dataPoint[2] +
            dataPoint[3]) / 4, newHigh = Math.max(dataPoint[1], newClose, newOpen), newLow = Math.min(dataPoint[2], newClose, newOpen);
        // Add new points to the array in order to properly calculate extremes.
        this.heikinashiData.push([newOpen, newHigh, newLow, newClose]);
    }
}
HeikinAshiSeries.defaultOptions = merge(CandlestickSeries.defaultOptions, HeikinAshiSeriesDefaults);
/* *
 *
 *  Class Prototype
 *
 * */
HeikinAshiSeries.prototype.pointClass = HeikinAshiPoint;
SeriesRegistry.registerSeriesType('heikinashi', HeikinAshiSeries);
/* *
 *
 *  Default Export
 *
 * */
export default HeikinAshiSeries;
