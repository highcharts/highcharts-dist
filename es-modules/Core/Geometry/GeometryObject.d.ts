import type PositionObject from '../Renderer/PositionObject';
export interface GeometryObject extends PositionObject {
    angle?: number;
    r?: number;
    indexes?: [number, number];
}
export default GeometryObject;
