import type { PlotOptionsOf } from '../../Core/Series/SeriesOptions';
import type ScatterSeries from './ScatterSeries';
/**
 * A scatter plot uses cartesian coordinates to display values for two
 * variables for a set of data.
 *
 * @sample {highcharts} highcharts/demo/scatter/
 *         Scatter plot
 *
 * @extends      plotOptions.line
 * @excluding    cropThreshold, legendSymbolColor, pointPlacement, shadow,
 *               useOhlcData
 * @product      highcharts highstock
 * @optionparent plotOptions.scatter
 */
declare const ScatterSeriesDefaults: PlotOptionsOf<ScatterSeries>;
export default ScatterSeriesDefaults;
