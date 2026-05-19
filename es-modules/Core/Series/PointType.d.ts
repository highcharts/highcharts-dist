import type Point from './Point';
/**
 * All possible series point types.
 */
export type PointType = PointTypeRegistry[keyof PointTypeRegistry]['prototype'];
/**
 * All possible options of series types.
 */
export type PointTypeOptions = PointType['options'];
/**
 * Helper interface to add series point types to `PointType`.
 *
 * Use the `declare module './PointType'` pattern to overload the interface in
 * this definition file.
 */
export interface PointTypeRegistry {
    [key: string]: typeof Point;
}
export default PointType;
