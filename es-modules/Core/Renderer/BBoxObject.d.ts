import type PositionObject from './PositionObject';
import type SizeObject from './SizeObject';
/**
 * Bounding box of an element.
 */
export interface BBoxObject extends PositionObject, SizeObject {
    /**
     * Height of the bounding box.
     */
    height: number;
    /**
     * Width of the bounding box.
     */
    width: number;
    /**
     * Horizontal position of the bounding box.
     */
    x: number;
    /**
     * Vertical position of the bounding box.
     */
    y: number;
    /**
     * The polygon of the bounding box, used for more accurate collision
     * detection.
     */
    polygon?: Array<[number, number]>;
}
export default BBoxObject;
