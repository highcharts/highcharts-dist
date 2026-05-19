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
 * The Linear Regression Angle series type.
 *
 * @internal
 * @class
 * @name Highcharts.seriesTypes.linearRegressionAngle
 *
 * @augments Highcharts.Series
 */
var LinearRegressionAngleIndicator = /** @class */ (function (_super) {
    __extends(LinearRegressionAngleIndicator, _super);
    function LinearRegressionAngleIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Convert a slope of a line to angle (in degrees) between
     * the line and x axis
     * @internal
     * @param {number} slope of the straight line function
     * @return {number} angle in degrees
     */
    LinearRegressionAngleIndicator.prototype.slopeToAngle = function (slope) {
        return Math.atan(slope) * (180 / Math.PI); // Rad to deg
    };
    LinearRegressionAngleIndicator.prototype.getEndPointY = function (lineParameters) {
        return this.slopeToAngle(lineParameters.slope);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Linear regression angle indicator. This series requires `linkedTo`
     * option to be set.
     *
     * @sample {highstock} stock/indicators/linear-regression-angle
     *         Linear regression angle indicator
     *
     * @extends      plotOptions.linearregression
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/regressions
     * @optionparent plotOptions.linearregressionangle
     */
    LinearRegressionAngleIndicator.defaultOptions = merge(LinearRegressionIndicator.defaultOptions, {
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                '{series.name}: <b>{point.y}°</b><br/>'
        }
    });
    return LinearRegressionAngleIndicator;
}(LinearRegressionIndicator));
extend(LinearRegressionAngleIndicator.prototype, {
    nameBase: 'Linear Regression Angle Indicator'
});
SeriesRegistry.registerSeriesType('linearregressionangle', LinearRegressionAngleIndicator);
// Keep for backwards compatibility
SeriesRegistry.registerSeriesType('linearRegressionAngle', LinearRegressionAngleIndicator);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default LinearRegressionAngleIndicator;
/**
 * A linear regression angle series. If the
 * [type](#series.linearregressionangle.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionangle
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionangle
 */
''; // To include the above in the js output
