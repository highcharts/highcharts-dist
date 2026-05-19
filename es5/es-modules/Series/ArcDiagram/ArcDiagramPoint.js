/* *
 *
 *  Arc diagram module
 *
 *  (c) 2018-2026 Highsoft AS
 *  Author: Torstein Hønsi
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
import NodesComposition from '../NodesComposition.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend } from '../../Shared/Utilities.js';
var SankeyPoint = SeriesRegistry.seriesTypes.sankey.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
/** @internal */
var ArcDiagramPoint = /** @class */ (function (_super) {
    __extends(ArcDiagramPoint, _super);
    function ArcDiagramPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    ArcDiagramPoint.prototype.isValid = function () {
        // No null points here
        return true;
    };
    return ArcDiagramPoint;
}(SankeyPoint));
extend(ArcDiagramPoint.prototype, {
    setState: NodesComposition.setNodeState
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ArcDiagramPoint;
