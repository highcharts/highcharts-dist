import type BBoxObject from '../BBoxObject';
import type CSSObject from '../CSSObject';
import type { DOMElementType, HTMLDOMElement } from '../DOMElementType';
import type HTMLRenderer from './HTMLRenderer';
import type SVGRenderer from '../SVG/SVGRenderer.js';
import SVGElement from '../SVG/SVGElement.js';
declare module '../SVG/SVGElementLike' {
    interface SVGElementLike {
        /** @requires Core/Renderer/HTML/HTMLElement */
        appendChild: HTMLDOMElement['appendChild'];
        element: DOMElementType;
        parentGroup?: (HTMLElement | SVGElement);
        renderer: (HTMLRenderer | SVGRenderer);
        style: (CSSObject & CSSStyleDeclaration);
        xCorr: number;
        yCorr: number;
        afterSetters(): void;
        /** @requires Core/Renderer/HTML/HTMLElement */
        getSpanCorrection(width: number, baseline: number, alignCorrection: number): void;
        /** @requires Core/Renderer/HTML/HTMLElement */
        htmlCss(styles: CSSObject): HTMLElement;
        /** @requires Core/Renderer/HTML/HTMLElement */
        htmlGetBBox(): BBoxObject;
        /** @requires Core/Renderer/HTML/HTMLElement */
        htmlUpdateTransform(): void;
        /** @requires Core/Renderer/HTML/HTMLElement */
        setSpanRotation(rotation: number, alignCorrection: number, baseline: number): void;
        textSetter(value: string): void;
        translateXSetter(value: any, key: string): void;
        translateYSetter(value: any, key: string): void;
    }
}
declare class HTMLElement extends SVGElement {
    /**
     * Modifies SVGElement to support HTML elements.
     * @private
     */
    static compose<T extends typeof SVGElement>(SVGElementClass: T): (T & typeof HTMLElement);
    div?: HTMLDOMElement;
    parentGroup?: HTMLElement;
    /**
     * Get the correction in X and Y positioning as the element is rotated.
     * @private
     */
    getSpanCorrection(width: number, baseline: number, alignCorrection: number): void;
    /**
     * Apply CSS to HTML elements. This is used in text within SVG rendering.
     * @private
     */
    htmlCss(styles: CSSObject): HTMLElement;
    /**
     * useHTML method for calculating the bounding box based on offsets.
     */
    htmlGetBBox(): BBoxObject;
    /**
     * @private
     */
    htmlUpdateTransform(): void;
    /**
     * Set the rotation of an individual HTML span.
     * @private
     */
    setSpanRotation(rotation: number, alignCorrection: number, baseline: number): void;
}
interface HTMLElement {
    element: HTMLDOMElement;
    renderer: HTMLRenderer;
}
export default HTMLElement;
