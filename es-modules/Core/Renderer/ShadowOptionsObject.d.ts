import type ColorString from '../Color/ColorString';
/**
 * The shadow options.
 */
export interface ShadowOptionsObject {
    /**
     * The color of the shadow.
     */
    color: ColorString;
    /**
     * The units for the filter effect. Can be `userSpaceOnUse` or `objectBoundingBox`.
     */
    filterUnits?: string;
    /**
     * The horizontal offset of the shadow.
     */
    offsetX: number;
    /**
     * The vertical offset of the shadow.
     */
    offsetY: number;
    /**
     * The opacity of the shadow.
     */
    opacity: number;
    /**
     * The blur radius of the shadow.
     */
    width: number;
}
export default ShadowOptionsObject;
