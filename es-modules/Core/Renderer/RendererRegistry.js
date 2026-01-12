/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import H from '../Globals.js';
/* *
 *
 *  Namespace
 *
 * */
/** @internal */
var RendererRegistry;
(function (RendererRegistry) {
    /* *
     *
     *  Constants
     *
     * */
    RendererRegistry.rendererTypes = {};
    /* *
     *
     *  Variables
     *
     * */
    let defaultRenderer;
    /* *
     *
     *  Functions
     *
     * */
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
    function getRendererType(rendererType = defaultRenderer) {
        return (RendererRegistry.rendererTypes[rendererType] || RendererRegistry.rendererTypes[defaultRenderer]);
    }
    RendererRegistry.getRendererType = getRendererType;
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
    function registerRendererType(rendererType, rendererClass, setAsDefault) {
        RendererRegistry.rendererTypes[rendererType] = rendererClass;
        if (!defaultRenderer || setAsDefault) {
            defaultRenderer = rendererType;
            H.Renderer = rendererClass; // Compatibility
        }
    }
    RendererRegistry.registerRendererType = registerRendererType;
})(RendererRegistry || (RendererRegistry = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default RendererRegistry;
