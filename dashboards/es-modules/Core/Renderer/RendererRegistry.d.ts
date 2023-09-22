import type SVGRenderer from './SVG/SVGRenderer';
declare namespace RendererRegistry {
    const rendererTypes: Record<string, typeof SVGRenderer>;
    /**
     * Gets a registered renderer class. If no renderer type is provided or the
     * requested renderer was not founded, the default renderer is returned.
     *
     * @param {string} [rendererType]
     * Renderer type or the default renderer.
     *
     * @return {Highcharts.Class<Highcharts.SVGRenderer>}
     * Returns the requested renderer class or the default renderer class.
     */
    function getRendererType(rendererType?: string): typeof SVGRenderer;
    /**
     * Register a renderer class.
     *
     * @param {string} rendererType
     * Renderer type to register.
     *
     * @param {Highcharts.Class<Highcharts.SVGRenderer>} rendererClass
     * Returns the requested renderer class or the default renderer class.
     *
     * @param {boolean} setAsDefault
     * Sets the renderer class as the default renderer.
     */
    function registerRendererType(rendererType: string, rendererClass: typeof SVGRenderer, setAsDefault?: boolean): void;
}
export default RendererRegistry;
