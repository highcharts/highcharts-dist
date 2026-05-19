/* *
 *
 *  Experimental Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygård
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var ColumnPoint = SeriesRegistry.seriesTypes.column.prototype.pointClass;
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
var WordcloudPoint = /** @class */ (function (_super) {
    __extends(WordcloudPoint, _super);
    function WordcloudPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    WordcloudPoint.prototype.isValid = function () {
        return true;
    };
    return WordcloudPoint;
}(ColumnPoint));
extend(WordcloudPoint.prototype, {
    weight: 1
});
/* *
 *
 *  Default Export
 *
 * */
export default WordcloudPoint;
