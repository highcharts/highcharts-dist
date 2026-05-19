import type FunnelSeriesOptions from './FunnelSeriesOptions';
/**
 * Funnel charts are a type of chart often used to visualize stages in a
 * sales project, where the top are the initial stages with the most
 * clients. It requires that the modules/funnel.js file is loaded.
 *
 * @sample highcharts/demo/funnel/
 *         Funnel demo
 *
 * @extends      plotOptions.pie
 * @excluding    innerSize,size,dataSorting
 * @product      highcharts
 * @requires     modules/funnel
 * @optionparent plotOptions.funnel
 */
declare const FunnelSeriesDefaults: FunnelSeriesOptions;
export default FunnelSeriesDefaults;
