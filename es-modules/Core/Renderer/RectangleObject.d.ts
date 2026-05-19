import type BBoxObject from './BBoxObject';
/**
 * A rectangle.
 */
export interface RectangleObject extends BBoxObject {
    /**
     * The stroke width of the rectangle.
     */
    strokeWidth?: number;
}
export default RectangleObject;
