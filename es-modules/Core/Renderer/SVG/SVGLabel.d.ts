import type SVGRenderer from './SVGRenderer';
import SVGElement from './SVGElement.js';
/**
 * SVG label to render text.
 *
 * @class
 * @name Highcharts.SVGLabel
 * @augments Highcharts.SVGElement
 */
declare class SVGLabel extends SVGElement {
    constructor(renderer: SVGRenderer, str: string, x: number, y?: number, shape?: string, // @todo (SymbolKey|string),
    anchorX?: number, anchorY?: number, useHTML?: boolean, baseline?: boolean, className?: string);
    private updateBackground;
}
export default SVGLabel;
