import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Series/Flags */
        circlepin: SymbolFunction;
        /** @requires Series/Flags */
        flag: SymbolFunction;
        /** @requires Series/Flags */
        'flag-icon': SymbolFunction;
        /** @requires Series/Flags */
        squarepin: SymbolFunction;
    }
}
declare namespace FlagsSymbols {
    /**
     * @private
     */
    function compose(SVGRendererClass: typeof SVGRenderer): void;
}
export default FlagsSymbols;
