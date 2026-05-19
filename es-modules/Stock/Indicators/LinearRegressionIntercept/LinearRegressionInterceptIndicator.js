/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Kamil Kulig
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../../Core/Series/SeriesRegistry.js';
const { linearregression: LinearRegressionIndicator } = SeriesRegistry.seriesTypes;
import { extend, merge } from '../../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * The Linear Regression Intercept series type.
 *
 * @internal
 * @class
 * @name Highcharts.seriesTypes.linearRegressionIntercept
 *
 * @augments Highcharts.Series
 */
class LinearRegressionInterceptIndicator extends LinearRegressionIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getEndPointY(lineParameters) {
        return lineParameters.intercept;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-intercept
 *         Linear regression intercept indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/regressions
 * @optionparent plotOptions.linearregressionintercept
 */
LinearRegressionInterceptIndicator.defaultOptions = merge(LinearRegressionIndicator.defaultOptions);
extend(LinearRegressionInterceptIndicator.prototype, {
    nameBase: 'Linear Regression Intercept Indicator'
});
SeriesRegistry.registerSeriesType('linearregressionintercept', LinearRegressionInterceptIndicator);
// Keep for backwards compatibility
SeriesRegistry.registerSeriesType('linearRegressionIntercept', LinearRegressionInterceptIndicator);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default LinearRegressionInterceptIndicator;
/* *
 *
 *  API Options
 *
 * */
/**
 * A linear regression intercept series. If the
 * [type](#series.linearregressionintercept.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionintercept
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionintercept
 */
''; // To include the above in the js output
