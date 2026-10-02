/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Andrzej Bułeczka
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import H from '../Core/Globals.js';
import { addEvent, crisp, pushUnique } from '../Shared/Utilities.js';
const { composed } = H;
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var FinancialSymbols;
(function (FinancialSymbols) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Wick and body in one path, so the candle fills and strokes as one
     * point. The up candle stands right of the down one, and closes above it.
     * @internal
     */
    function candle(x, y, w, h, up) {
        // Even body width keeps 1px borders crisp around half-pixel centers
        const halfWidth = Math.round(w * 0.2), cx = crisp(x + w * (up ? 0.8 : 0.2), 1), y1 = crisp(y + h * (up ? 0.25 : 0.45), 1), y2 = crisp(y + h * (up ? 0.65 : 0.8), 1);
        return [
            ['M', cx, y], ['L', cx, y1],
            ['M', cx - halfWidth, y1], ['L', cx + halfWidth, y1],
            ['L', cx + halfWidth, y2], ['L', cx - halfWidth, y2], ['Z'],
            ['M', cx, y2], ['L', cx, y + h]
        ];
    }
    /** @internal */
    function compose(LegendClass, SVGRendererClass) {
        if (pushUnique(composed, 'Series.FinancialSymbols')) {
            const symbols = SVGRendererClass.prototype.symbols;
            // The wrappers drop the symbol options, which would bind to `up`
            symbols.candlestick = (x, y, w, h) => candle(x, y, w, h);
            symbols.ohlc = (x, y, w, h) => stem(x, y, w, h, true);
            // HLC has no up point, so both stems belong to one symbol
            symbols.hlc = (x, y, w, h) => [
                ...stem(x, y, w, h),
                ...stem(x, y, w, h, false, true)
            ];
            // The legend itself colors the down glyph
            addEvent(LegendClass, 'afterColorizeItem', function (e) {
                const { item, visible } = e, symbol = item.legendSymbolUp;
                if (symbol && !this.chart.styledMode) {
                    const attribs = item.legendSymbolAttribs(), hidden = visible ?
                        void 0 :
                        this.itemHiddenStyle?.color;
                    if (hidden) {
                        if (attribs.fill) {
                            attribs.fill = hidden;
                        }
                        attribs.stroke = hidden;
                    }
                    symbol.attr(attribs);
                }
            });
        }
    }
    FinancialSymbols.compose = compose;
    /**
     * A stem with a close tick to the right; OHLC adds an open tick to the
     * left.
     * @internal
     */
    function stem(x, y, w, h, isOhlc, up) {
        const x1 = crisp(x + w * 0.25, 1), x2 = crisp(x + w * 0.75, 1), tick = (x2 - x1 - 1) / 2, downClose = crisp(y + h * 0.7, 1), cx = up ? x2 : x1, close = up ? crisp(y + h * 0.4, 1) : downClose, top = up ? Math.round(y + h * 0.15) : y, bottom = up ? Math.round(y + h * 0.9) : y + h, path = [
            ['M', cx, top], ['L', cx, bottom],
            ['M', cx, close], ['L', cx + tick, close]
        ];
        if (isOhlc) {
            // The up open need not meet the down close
            const open = up ? downClose - 1 : crisp(y + h * 0.2, 1);
            path.push(['M', cx - tick, open], ['L', cx, open]);
        }
        return path;
    }
    /**
     * The up glyphs, keyed by legend symbol. HLC has no open value, so no up
     * point and no glyph here.
     * @internal
     */
    FinancialSymbols.upPaths = {
        candlestick: (x, y, w, h) => candle(x, y, w, h, true),
        ohlc: (x, y, w, h) => stem(x, y, w, h, true, true)
    };
})(FinancialSymbols || (FinancialSymbols = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default FinancialSymbols;
