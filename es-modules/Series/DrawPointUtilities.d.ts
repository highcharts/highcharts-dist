import type CSSObject from '../Core/Renderer/CSSObject';
import type Point from '../Core/Series/Point';
import type ShadowOptionsObject from '../Core/Renderer/ShadowOptionsObject';
import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer';
export interface DrawPointParams {
    animatableAttribs: SVGAttributes;
    attribs: SVGAttributes;
    css?: CSSObject;
    group: SVGElement;
    onComplete?: Function;
    imageUrl?: string;
    isNew?: boolean;
    renderer: SVGRenderer;
    shadow?: (boolean | Partial<ShadowOptionsObject>);
    shapeArgs?: SVGAttributes;
    shapeType: 'arc' | 'circle' | 'image' | 'path' | 'rect' | 'text';
}
/**
 * Handles the drawing of a component.
 * Can be used for any type of component that reserves the graphic property,
 * and provides a shouldDraw on its context.
 *
 * @private
 *
 * @todo add type checking.
 * @todo export this function to enable usage
 */
declare function draw(point: Point, params: DrawPointParams): void;
declare const DrawPointUtilities: {
    draw: typeof draw;
};
export default DrawPointUtilities;
