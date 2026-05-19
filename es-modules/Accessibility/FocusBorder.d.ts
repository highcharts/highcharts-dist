import type Accessibility from './Accessibility';
import type { DOMElementType } from '../Core/Renderer/DOMElementType';
import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import Chart from '../Core/Chart/Chart.js';
import SVGElement from '../Core/Renderer/SVG/SVGElement.js';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        focusElement?: SVGElement;
        /** @requires modules/accessibility */
        renderFocusBorder(): void;
        /** @requires modules/accessibility */
        setFocusToElement(svgElement: SVGElement, focusElement?: DOMElementType): void;
    }
}
declare module '../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        focusBorder?: SVGElement;
        /** @requires modules/accessibility */
        addFocusBorder(margin: number, attribs: SVGAttributes): void;
        /** @requires modules/accessibility */
        removeFocusBorder(): void;
    }
}
declare namespace FocusBorderComposition {
    interface ChartComposition extends Accessibility.ChartComposition {
        focusElement?: SVGElement;
        renderFocusBorder(): void;
        setFocusToElement(svgElement: SVGElement, focusElement?: DOMElementType): void;
    }
    interface SVGElementComposition extends SVGElement {
        focusBorder?: SVGElement;
        addFocusBorder(margin: number, attribs: SVGAttributes): void;
        removeFocusBorder(): void;
    }
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart, SVGElementClass: typeof SVGElement): void;
}
export default FocusBorderComposition;
