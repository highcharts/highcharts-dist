import type AxisBase from './AxisBase';
/**
 * Helper interface for axis compositions to add optional composition members
 * to all axis instances.
 *
 * Use the `declare module 'Types'` pattern to overload the interface in this
 * definition file.
 */
export interface AxisComposition extends AxisBase {
}
export default AxisComposition;
