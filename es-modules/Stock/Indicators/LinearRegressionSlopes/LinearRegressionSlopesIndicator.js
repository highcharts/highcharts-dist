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
 * The Linear Regression Slope series type.
 *
 * @internal
 * @class
 * @name Highcharts.seriesTypes.linearRegressionSlope
 *
 * @augments Highcharts.Series
 */
class LinearRegressionSlopesIndicator extends LinearRegressionIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getEndPointY(lineParameters) {
        return lineParameters.slope;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Linear regression slope indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-slope
 *         Linear regression slope indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/regressions
 * @optionparent plotOptions.linearregressionslope
 */
LinearRegressionSlopesIndicator.defaultOptions = merge(LinearRegressionIndicator.defaultOptions);
extend(LinearRegressionSlopesIndicator.prototype, {
    nameBase: 'Linear Regression Slope Indicator'
});
SeriesRegistry.registerSeriesType('linearregressionslope', LinearRegressionSlopesIndicator);
// Keep for backwards compatibility
SeriesRegistry.registerSeriesType('linearRegressionSlope', LinearRegressionSlopesIndicator);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default LinearRegressionSlopesIndicator;
/* *
 *
 *  API Options
 *
 * */
/**
 * A linear regression slope series. If the
 * [type](#series.linearregressionslope.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionslope
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionslope
 */
''; // To include the above in the js output
