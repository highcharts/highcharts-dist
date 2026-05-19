import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer';
declare module '../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** Shared by Series/PointAndFigure and Series/Contour. */
        cross: SymbolFunction;
    }
}
declare namespace CrossSymbol {
    /**
     * Register the shared `cross` symbol on a renderer class.
     *
     * @private
     */
    function compose(SVGRendererClass: typeof SVGRenderer): void;
}
export default CrossSymbol;
