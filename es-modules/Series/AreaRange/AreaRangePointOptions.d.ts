import type AreaPointOptions from '../Area/AreaPointOptions';
export interface AreaRangePointOptions extends AreaPointOptions {
    /**
     * The high or maximum value for each data point.
     *
     * @type {number}
     *
     * @product highcharts highstock
     */
    high?: number;
    /**
     * The low or minimum value for each data point.
     *
     * @type {number}
     *
     * @product highcharts highstock
     *
     * @apioption series.arearange.data.low
     */
    low?: number;
}
export default AreaRangePointOptions;
