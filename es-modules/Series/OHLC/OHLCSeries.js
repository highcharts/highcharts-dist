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
import FinancialSymbols from '../FinancialSymbols.js';
import H from '../../Core/Globals.js';
const { composed } = H;
import OHLCPoint from './OHLCPoint.js';
import OHLCSeriesDefaults from './OHLCSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { hlc: HLCSeries } = SeriesRegistry.seriesTypes;
import { addEvent, crisp, extend, merge, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function onSeriesAfterSetOptions(e) {
    const options = e.options, dataGrouping = options.dataGrouping;
    if (dataGrouping &&
        !dataGrouping.approximation &&
        options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        dataGrouping.approximation = 'ohlc';
    }
}
/**
 * Add useOhlcData option
 * @private
 */
function onSeriesInit(eventOptions) {
    // eslint-disable-next-line no-invalid-this
    const series = this, options = eventOptions.options;
    if (options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        extend(series, {
            pointValKey: OHLCSeries.prototype.pointValKey,
            // Keys: ohlcProto.keys, // @todo potentially nonsense
            pointArrayMap: OHLCSeries.prototype.pointArrayMap,
            toYData: OHLCSeries.prototype.toYData
        });
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ohlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ohlc
 *
 * @augments Highcharts.Series
 */
class OHLCSeries extends HLCSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    static compose(SeriesClass, ..._args) {
        if (pushUnique(composed, 'OHLCSeries')) {
            addEvent(SeriesClass, 'afterSetOptions', onSeriesAfterSetOptions);
            addEvent(SeriesClass, 'init', onSeriesInit);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Pair the legend symbol, the down point, with an element for the up one.
     * `FinancialSymbols` colors both (#24567).
     *
     * @internal
     * @function Highcharts.seriesTypes.ohlc#drawLegendSymbol
     */
    drawLegendSymbol(legend, item) {
        super.drawLegendSymbol(legend, item);
        const { group, symbol } = item.legendItem || {}, upPath = FinancialSymbols.upPaths[symbol?.symbolName || ''];
        if (symbol && upPath) {
            const { x = 0, y = 0, width = 0, height = 0 } = symbol;
            symbol.addClass('highcharts-point-down');
            this.legendSymbolUp = this.chart.renderer
                .path(upPath(x, y, width, height))
                .addClass('highcharts-point highcharts-point-up')
                .attr({ zIndex: 3 })
                .add(group);
        }
    }
    /** @internal */
    getPointPath(point) {
        const path = super.getPointPath(point), strokeWidth = this.borderWidth, crispX = crisp(point.plotX || 0, strokeWidth), halfWidth = Math.round(point.shapeArgs.width / 2);
        if (point.open !== null) {
            const plotOpen = crisp(point.plotOpen, strokeWidth);
            path.push(['M', crispX, plotOpen], ['L', crispX - halfWidth, plotOpen]);
            super.extendStem(path, strokeWidth / 2, plotOpen);
        }
        return path;
    }
    /**
     * Colors of the up glyph, as `pointAttribs` gives them to an up point.
     * `pointAttribs` needs a point, which breaks on zoned series.
     *
     * @internal
     * @function Highcharts.seriesTypes.ohlc#legendSymbolAttribs
     */
    legendSymbolAttribs() {
        const { legendSymbolColor, lineWidth, upColor } = this.options;
        return {
            stroke: upColor || legendSymbolColor || this.color,
            'stroke-width': lineWidth
        };
    }
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point, state) {
        const attribs = super.pointAttribs.call(this, point, state), options = this.options;
        delete attribs.fill;
        if (!point?.options.color &&
            options.upColor &&
            (point?.open || 0) < (point?.close || 0)) {
            attribs.stroke = options.upColor;
        }
        return attribs;
    }
    /** @internal */
    toYData(point) {
        // Return a plain array for speedy calculation
        return [point.open, point.high, point.low, point.close];
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/** @internal */
OHLCSeries.defaultOptions = merge(HLCSeries.defaultOptions, OHLCSeriesDefaults);
extend(OHLCSeries.prototype, {
    pointClass: OHLCPoint,
    pointArrayMap: ['open', 'high', 'low', 'close']
});
SeriesRegistry.registerSeriesType('ohlc', OHLCSeries);
/* *
 *
 *  Default Export
 *
 * */
export default OHLCSeries;
