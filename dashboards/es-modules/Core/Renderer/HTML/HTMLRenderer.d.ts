import type HTMLElement from './HTMLElement';
import SVGRenderer from '../SVG/SVGRenderer.js';
declare module '../SVG/SVGRendererLike' {
    interface SVGRendererLike {
        /** @requires Core/Renderer/HTML/HTMLRenderer */
        html(str: string, x: number, y: number): HTMLElement;
    }
}
declare class HTMLRenderer extends SVGRenderer {
    /** @private */
    static compose<T extends typeof SVGRenderer>(SVGRendererClass: T): (T & typeof HTMLRenderer);
    /**
     * Create HTML text node. This is used by the SVG renderer through the
     * useHTML option.
     *
     * @private
     * @function Highcharts.SVGRenderer#html
     *
     * @param {string} str
     * The text of (subset) HTML to draw.
     *
     * @param {number} x
     * The x position of the text's lower left corner.
     *
     * @param {number} y
     * The y position of the text's lower left corner.
     *
     * @return {Highcharts.HTMLDOMElement}
     * HTML element.
     */
    html(str: string, x: number, y: number): HTMLElement;
}
export default HTMLRenderer;
