import type PositionObject from './PositionObject';
/**
 * Object containing properties for the 3D position of an element.
 */
export interface Position3DObject extends PositionObject {
    /**
     * The Z position.
     */
    z: number;
}
export default Position3DObject;
