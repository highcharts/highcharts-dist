import type TilemapSeriesOptions from './TilemapSeriesOptions';
/**
 * A tilemap series is a type of heatmap where the tile shapes are
 * configurable.
 *
 * @sample highcharts/demo/honeycomb-usa/
 *         Honeycomb tilemap, USA
 * @sample maps/plotoptions/honeycomb-brazil/
 *         Honeycomb tilemap, Brazil
 * @sample maps/plotoptions/honeycomb-china/
 *         Honeycomb tilemap, China
 * @sample maps/plotoptions/honeycomb-europe/
 *         Honeycomb tilemap, Europe
 * @sample maps/demo/circlemap-africa/
 *         Circlemap tilemap, Africa
 * @sample maps/demo/diamondmap
 *         Diamondmap tilemap
 *
 * @extends      plotOptions.heatmap
 * @since        6.0.0
 * @excluding    jitter, joinBy, shadow, allAreas, mapData, marker, data,
 *               dataSorting, boostThreshold, boostBlending
 * @product      highcharts highmaps
 * @requires     modules/tilemap
 * @optionparent plotOptions.tilemap
 */
declare const TilemapSeriesDefaults: TilemapSeriesOptions;
export default TilemapSeriesDefaults;
