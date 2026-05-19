import type BulletSeriesOptions from './BulletSeriesOptions';
/**
 * A bullet graph is a variation of a bar graph. The bullet graph features
 * a single measure, compares it to a target, and displays it in the context
 * of qualitative ranges of performance that could be set using
 * [plotBands](#yAxis.plotBands) on [yAxis](#yAxis).
 *
 * @sample {highcharts} highcharts/demo/bullet-graph/
 *         Bullet graph
 *
 * @extends      plotOptions.column
 * @since        6.0.0
 * @product      highcharts
 * @excluding    allAreas, boostThreshold, colorAxis, compare, compareBase,
 *               dataSorting, boostBlending
 * @requires     modules/bullet
 * @optionparent plotOptions.bullet
 */
declare const BulletSeriesDefaults: BulletSeriesOptions;
export default BulletSeriesDefaults;
