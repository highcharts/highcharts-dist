import type { HTMLDOMElement } from '../DOMElementType';
import type SVGRenderer from '../SVG/SVGRenderer.js';
import SVGElement from '../SVG/SVGElement.js';
declare module '../SVG/SVGRendererBase' {
    interface SVGRendererBase {
        /** @requires Core/Renderer/HTML/HTMLElement */
        html(str: string, x: number, y: number): HTMLElement;
    }
}
declare class HTMLElement extends SVGElement {
    foreignObject: SVGElement;
    parentGroup?: SVGElement;
    xCorr?: number;
    yCorr?: number;
    constructor(renderer: SVGRenderer, nodeName: 'div');
}
interface HTMLElement {
    element: HTMLDOMElement;
}
export default HTMLElement;
