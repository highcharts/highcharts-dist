import type PyramidPoint from './PyramidPoint';
import type PyramidSeriesOptions from './PyramidSeriesOptions';
import FunnelSeries from '../Funnel/FunnelSeries.js';
/**
 * Pyramid series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pyramid
 *
 * @augments Highcharts.Series
 */
declare class PyramidSeries extends FunnelSeries {
    /**
     * A pyramid series is a special type of funnel, without neck and reversed
     * by default.
     *
     * @sample highcharts/demo/pyramid/
     *         Pyramid chart
     *
     * @extends      plotOptions.funnel
     * @product      highcharts
     * @requires     modules/funnel
     * @optionparent plotOptions.pyramid
     */
    static defaultOptions: PyramidSeriesOptions;
    data: Array<PyramidPoint>;
    options: PyramidSeriesOptions;
    points: Array<PyramidPoint>;
}
interface PyramidSeries {
    pointClass: typeof PyramidPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pyramid: typeof PyramidSeries;
    }
}
export default PyramidSeries;
