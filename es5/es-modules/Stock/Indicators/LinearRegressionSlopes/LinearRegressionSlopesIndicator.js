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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import SeriesRegistry from '../../../Core/Series/SeriesRegistry.js';
var LinearRegressionIndicator = SeriesRegistry.seriesTypes.linearregression;
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
var LinearRegressionSlopesIndicator = /** @class */ (function (_super) {
    __extends(LinearRegressionSlopesIndicator, _super);
    function LinearRegressionSlopesIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    LinearRegressionSlopesIndicator.prototype.getEndPointY = function (lineParameters) {
        return lineParameters.slope;
    };
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
    return LinearRegressionSlopesIndicator;
}(LinearRegressionIndicator));
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
