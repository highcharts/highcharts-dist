import type ColumnSeries from './ColumnSeries';
import type { PlotOptionsOf } from '../../Core/Series/SeriesOptions';
/**
 * Column series display one column per value along an X axis.
 *
 * @sample {highcharts} highcharts/demo/column-basic/
 *         Column chart
 * @sample {highstock} stock/demo/column/
 *         Column chart
 *
 * @extends      plotOptions.line
 * @excluding    connectEnds, connectNulls, gapSize, gapUnit, linecap,
 *               lineWidth, marker, step, useOhlcData
 * @product      highcharts highstock
 * @optionparent plotOptions.column
 */
declare const ColumnSeriesDefaults: PlotOptionsOf<ColumnSeries>;
export default ColumnSeriesDefaults;
