import type TiledWebMapSeriesOptions from './TiledWebMapSeriesOptions';
/**
 * A tiledwebmap series allows user to display dynamically joined individual
 * images (tiles) and join them together to create a map.
 *
 * @sample maps/series-tiledwebmap/simple-demo-norway
 *         Simple demo of data for Norway on TiledWebMap
 * @sample maps/series-tiledwebmap/only-twm
 *         OpenStreetMap demo
 *
 * @extends      plotOptions.map
 * @excluding    affectsMapView, allAreas, allowPointSelect, animation,
 * animationLimit, boostBlending, boostThreshold, borderColor, borderWidth,
 * clip, color, colorAxis, colorByPoint, colorIndex, colorKey, colors,
 * cursor, dashStyle, dataLabels, dataParser, dataURL, dragDrop,
 * enableMouseTracking, findNearestPointBy, joinBy, keys, marker,
 * negativeColor, nullColor, nullInteraction, onPoint, point,
 * pointDescriptionFormatter, selected, shadow, showCheckbox,
 * sonification, stickyTracking, tooltip, type
 * @product      highmaps
 * @requires     modules/tiledwebmap
 * @optionparent plotOptions.tiledwebmap
 */
declare const TiledWebMapSeriesDefaults: TiledWebMapSeriesOptions;
export default TiledWebMapSeriesDefaults;
