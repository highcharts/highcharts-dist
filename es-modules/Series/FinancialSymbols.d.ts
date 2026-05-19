import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer';
declare module '../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        hlc: SymbolFunction;
        ohlc: SymbolFunction;
        candlestick: SymbolFunction;
    }
}
declare namespace FinancialSymbols {
    function compose(SVGRendererClass: typeof SVGRenderer): void;
}
export default FinancialSymbols;
