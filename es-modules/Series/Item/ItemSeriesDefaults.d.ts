import type ItemSeriesOptions from './ItemSeriesOptions';
/**
 * An item chart is an infographic chart where a number of items are laid
 * out in either a rectangular or circular pattern. It can be used to
 * visualize counts within a group, or for the circular pattern, typically
 * a parliament.
 *
 * The circular layout has much in common with a pie chart. Many of the item
 * series options, like `center`, `size` and data label positioning, are
 * inherited from the pie series and don't apply for rectangular layouts.
 *
 * @sample       highcharts/demo/parliament-chart
 *               Parliament chart (circular item chart)
 * @sample       highcharts/series-item/rectangular
 *               Rectangular item chart
 * @sample       highcharts/series-item/symbols
 *               Infographic with symbols
 *
 * @extends      plotOptions.pie
 * @since        7.1.0
 * @product      highcharts
 * @excluding    borderColor, borderWidth, depth, linecap, shadow,
 *               slicedOffset
 * @requires     modules/item-series
 * @optionparent plotOptions.item
 */
declare const ItemSeriesDefaults: ItemSeriesOptions;
export default ItemSeriesDefaults;
