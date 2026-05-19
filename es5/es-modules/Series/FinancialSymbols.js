'use strict';
import H from '../Core/Globals.js';
import { pushUnique } from '../Shared/Utilities.js';
var composed = H.composed;
/* *
 * Composition
 * */
var FinancialSymbols;
(function (FinancialSymbols) {
    function compose(SVGRendererClass) {
        if (pushUnique(composed, 'Series.FinancialSymbols')) {
            var symbols_1 = SVGRendererClass.prototype.symbols;
            var hlcPath_1 = function (x, y, w, h, isOhlc) {
                var cx = Math.round(x + w / 2), 
                // Up bar: close is higher up (smaller Y) than open
                closeY = Math.round(y + h * (isOhlc ? 0.3 : 0.5)), path = [
                    ['M', cx, y], ['L', cx, y + h], // Stem
                    ['M', cx, closeY], ['L', x + w, closeY] // Close tick
                ];
                if (isOhlc) {
                    // Up bar: open is lower down (larger Y)
                    var openY = Math.round(y + h * 0.7);
                    path.push(['M', x, openY], ['L', cx, openY]);
                }
                return path;
            };
            symbols_1.hlc = function (x, y, w, h) { return hlcPath_1(x, y, w, h); };
            symbols_1.ohlc = function (x, y, w, h) { return hlcPath_1(x, y, w, h, true); };
            symbols_1.candlestick = function (x, y, w, h) {
                var cx = Math.round(x + w / 2), top = Math.round(y + h * 0.25), bottom = Math.round(y + h * 0.75), 
                // 1. Explicitly type the base array as SVGPath
                path = [
                    ['M', cx, y], ['L', cx, top], // Top wick
                    ['M', cx, bottom], ['L', cx, y + h] // Bottom wick
                ];
                // 2. Push the rect path segments directly into it
                if (symbols_1.rect) {
                    path.push.apply(path, symbols_1.rect(x, top, w, bottom - top));
                }
                return path;
            };
        }
    }
    FinancialSymbols.compose = compose;
})(FinancialSymbols || (FinancialSymbols = {}));
export default FinancialSymbols;
