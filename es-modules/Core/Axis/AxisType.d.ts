import type Axis from './Axis';
/**
 * All possible axis types.
 */
export type AxisType = AxisTypeRegistry[keyof AxisTypeRegistry];
/**
 * All possible axis options.
 */
export type AxisTypeOptions = AxisType['options'];
/**
 * Helper interface to add axis types to `AxisType`.
 *
 * Use the `declare module 'Types'` pattern to overload the interface in this
 * definition file.
 */
export interface AxisTypeRegistry {
    Axis: Axis;
}
export default AxisType;
