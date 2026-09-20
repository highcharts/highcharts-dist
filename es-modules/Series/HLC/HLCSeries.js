/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Lysy
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import HLCPoint from './HLCPoint.js';
import HLCSeriesDefaults from './HLCSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { column: ColumnSeries } = SeriesRegistry.seriesTypes;
import FinancialSymbols from '../FinancialSymbols.js';
import D from '../../Core/Defaults.js';
import { crisp, extend, merge } from '../../Shared/Utilities.js';
const { defaultOptions } = D;
/* *
 *
 *  Class
 *
 * */
/**
 * The hlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.hlc
 *
 * @augments Highcharts.Series
 */
class HLCSeries extends ColumnSeries {
    /* *
     *
     *  Static Properties
     *
     * */
    static compose(_SeriesClass, SVGRendererClass) {
        FinancialSymbols.compose(SVGRendererClass);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the path if close is not between high and low.
     *
     * @param {SVGPath} path the path array of the point
     * @param {number} halfStrokeWidth
     * @param {number} value value of the point to which the stem should be extended
     */
    extendStem(path, halfStrokeWidth, value) {
        const start = path[0];
        const end = path[1];
        // We don't need to worry about crisp - close value
        // is already crisped and halfStrokeWidth should remove it.
        if (typeof start[2] === 'number') {
            start[2] = Math.max(value + halfStrokeWidth, start[2]);
        }
        if (typeof end[2] === 'number') {
            end[2] = Math.min(value - halfStrokeWidth, end[2]);
        }
    }
    /**
     * Function to create SVGPath of the point based on the plot positions of
     * this point.
     * @private
     */
    getPointPath(point) {
        // Crisp vector coordinates
        const series = point.series, strokeWidth = series.borderWidth, 
        // #2596:
        crispX = crisp(point.plotX || 0, strokeWidth), halfWidth = Math.round(point.shapeArgs.width / 2);
        // The vertical stem
        const path = [
            ['M', crispX, Math.round(point.yBottom)],
            ['L', crispX, Math.round(point.plotHigh)]
        ];
        // Close
        if (point.close !== null) {
            const plotClose = crisp(point.plotClose, strokeWidth);
            path.push(['M', crispX, plotClose], ['L', crispX + halfWidth, plotClose]);
            series.extendStem(path, strokeWidth / 2, plotClose);
        }
        return path;
    }
    /**
     * @private
     * @function Highcharts.seriesTypes.hlc#init
     */
    init() {
        super.init.apply(this, arguments);
        this.options.stacking = void 0; // #8817
    }
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point, state) {
        const attribs = super.pointAttribs.call(this, point, state);
        if (point) {
            delete attribs.fill;
        }
        return attribs;
    }
    toYData(point) {
        // Return a plain array for speedy calculation
        return [point.high, point.low, point.close];
    }
    /**
     * Translate data points from raw values x and y to plotX and plotY
     *
     * @private
     * @function Highcharts.seriesTypes.hlc#translate
     */
    translate() {
        const series = this, yAxis = series.yAxis, names = (this.pointArrayMap && this.pointArrayMap.slice()) || [], translated = names.map((name) => `plot${name.charAt(0).toUpperCase() + name.slice(1)}`), lineWidth = series.options.lineWidth ?? 1;
        translated.push('yBottom');
        names.push('low');
        super.translate.apply(series);
        series.borderWidth = lineWidth;
        // Do the translation
        series.points.concat(series.condemnedPoints).forEach((point) => {
            names.forEach(function (name, i) {
                let value = point[name];
                if (value !== null) {
                    if (series.dataModify) {
                        value = series.dataModify.modifyValue(value);
                    }
                    point[translated[i]] =
                        yAxis.toPixels(value, true);
                }
            });
            // The data label box
            const { x = 0, y = 0, width = 0, height = 0 } = point.shapeArgs || {};
            point.dlBox = { x, y, width, height };
            // The new shape args overwrite those of ColumnSeries
            point.shapeType = 'path';
            point.shapeArgs = { d: series.getPointPath(point) };
            // Align the tooltip to the high value to avoid covering the point
            point.tooltipPos[1] =
                point.plotHigh + yAxis.pos - series.chart.plotTop;
        });
    }
}
HLCSeries.defaultOptions = merge(ColumnSeries.defaultOptions, HLCSeriesDefaults);
extend(HLCSeries.prototype, {
    pointClass: HLCPoint,
    animate: null, // Disable animation
    directTouch: false,
    keysAffectYAxis: ['low', 'high'],
    pointArrayMap: ['high', 'low', 'close'],
    pointAttrToOptions: {
        stroke: 'color',
        'stroke-width': 'lineWidth'
    },
    pointValKey: 'close'
});
// Extend default lang options with OHLC terms
const HLCDefaultLangOptions = {
    stockOpen: 'Open',
    stockHigh: 'High',
    stockLow: 'Low',
    stockClose: 'Close'
};
extend(defaultOptions.lang, HLCDefaultLangOptions);
SeriesRegistry.registerSeriesType('hlc', HLCSeries);
/* *
 *
 *  Default Export
 *
 * */
export default HLCSeries;
