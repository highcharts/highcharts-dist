import type ColorType from '../../Core/Color/ColorType';
import type CSSObject from '../../Core/Renderer/CSSObject';
import type FlagsPointOptions from './FlagsPointOptions';
import type FlagsSeries from './FlagsSeries';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
declare class FlagsPoint extends ColumnPoint {
    _y?: number;
    anchorX?: number;
    options: FlagsPointOptions;
    series: FlagsSeries;
    fillColor?: ColorType;
    lineWidth?: number;
    raised?: boolean;
    stackIndex?: number;
    style?: CSSObject;
    ttBelow?: boolean;
    unbindMouseOver?: Function;
    /**
     * @private
     */
    isValid(): boolean;
    /**
     * @private
     */
    hasNewShapeType(): (boolean | undefined);
}
export default FlagsPoint;
