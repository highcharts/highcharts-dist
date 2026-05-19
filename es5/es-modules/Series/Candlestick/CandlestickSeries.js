/* *
 *
 *  (c) 2010-2026 Highsoft AS
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
import CandlestickSeriesDefaults from './CandlestickSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var _a = SeriesRegistry.seriesTypes, ColumnSeries = _a.column, OHLCSeries = _a.ohlc;
import { crisp, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * The candlestick series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.candlestick
 *
 * @augments Highcharts.seriesTypes.ohlc
 */
var CandlestickSeries = /** @class */ (function (_super) {
    __extends(CandlestickSeries, _super);
    function CandlestickSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Postprocess mapping between options and SVG attributes
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#pointAttribs
     */
    CandlestickSeries.prototype.pointAttribs = function (point, state) {
        var attribs = ColumnSeries.prototype.pointAttribs.call(this, point, state), options = this.options, isUp = ((point === null || point === void 0 ? void 0 : point.open) || 0) < ((point === null || point === void 0 ? void 0 : point.close) || 0), stroke = options.lineColor || this.color, color = (point === null || point === void 0 ? void 0 : point.color) || this.color; // (#14826)
        attribs['stroke-width'] = options.lineWidth;
        attribs.fill = (point === null || point === void 0 ? void 0 : point.options.color) ||
            (isUp ? (options.upColor || color) : color);
        attribs.stroke = (point === null || point === void 0 ? void 0 : point.options.lineColor) ||
            (isUp ? (options.upLineColor || stroke) : stroke);
        // Select or hover states
        if (state) {
            var stateOptions = options.states[state];
            attribs.fill = stateOptions.color || attribs.fill;
            attribs.stroke = stateOptions.lineColor || attribs.stroke;
            attribs['stroke-width'] =
                stateOptions.lineWidth || attribs['stroke-width'];
        }
        return attribs;
    };
    /**
     * Create the SVGPath of the point based on the plot positions
     * @private
     */
    CandlestickSeries.prototype.getPointPath = function (point) {
        // Crisp vector coordinates
        var strokeWidth = this.borderWidth, 
        // #2596:
        crispX = crisp(point.plotX || 0, strokeWidth), plotOpen = point.plotOpen, plotClose = point.plotClose, topBoxFloat = Math.min(plotOpen, plotClose), bottomBoxFloat = Math.max(plotOpen, plotClose), halfWidth = Math.round(point.shapeArgs.width / 2), reversedYAxis = this.yAxis.reversed, hasTopWhisker = reversedYAxis ?
            bottomBoxFloat !== point.yBottom :
            Math.round(topBoxFloat) !==
                Math.round(point.plotHigh || 0), hasBottomWhisker = reversedYAxis ?
            Math.round(topBoxFloat) !==
                Math.round(point.plotHigh || 0) :
            bottomBoxFloat !== point.yBottom, topBox = crisp(topBoxFloat, strokeWidth), bottomBox = crisp(bottomBoxFloat, strokeWidth);
        // Create the path. Due to a bug in Chrome 49, the path is
        // first instantiated with no values, then the values
        // pushed. For unknown reasons, instantiating the path array
        // with all the values would lead to a crash when updating
        // frequently (#5193).
        var path = [];
        path.push(['M', crispX - halfWidth, bottomBox], ['L', crispX - halfWidth, topBox], ['L', crispX + halfWidth, topBox], ['L', crispX + halfWidth, bottomBox], ['Z'], // Ensure a nice rectangle #2602
        ['M', crispX, topBox], [
            'L',
            // #460, #2094
            crispX,
            hasTopWhisker ?
                Math.round(reversedYAxis ?
                    point.yBottom :
                    point.plotHigh) :
                topBox
        ], ['M', crispX, bottomBox], [
            'L',
            // #460, #2094
            crispX,
            hasBottomWhisker ?
                Math.round(reversedYAxis ?
                    point.plotHigh :
                    point.yBottom) :
                bottomBox
        ]);
        return path;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    CandlestickSeries.defaultOptions = merge(OHLCSeries.defaultOptions, { tooltip: OHLCSeries.defaultOptions.tooltip }, CandlestickSeriesDefaults);
    return CandlestickSeries;
}(OHLCSeries));
SeriesRegistry.registerSeriesType('candlestick', CandlestickSeries);
/* *
 *
 *  Default Export
 *
 * */
export default CandlestickSeries;
