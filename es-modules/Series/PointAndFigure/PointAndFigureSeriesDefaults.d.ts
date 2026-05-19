import type PointAndFigureSeriesOptions from './PointAndFigureSeriesOptions';
/**
 * The Point and Figure series represents changes in stock price movements,
 * without focusing on the time and volume. Each data point is created when the
 * `boxSize` criteria is met. Opposite column of points gets created only when
 * the `reversalAmount` threshold is met.
 *
 * @sample stock/demo/pointandfigure/
 *         Point and Figure series
 *
 * @extends      plotOptions.scatter
 * @product      highstock
 * @excluding    boostBlending, boostThreshold, compare, compareBase,
 *               compareStart, cumulative, cumulativeStart, dataGrouping,
 *               dataGrouping, dragDrop
 * @requires     modules/pointandfigure
 * @optionparent plotOptions.pointandfigure
 */
declare const PointAndFigureSeriesDefaults: PointAndFigureSeriesOptions;
export default PointAndFigureSeriesDefaults;
