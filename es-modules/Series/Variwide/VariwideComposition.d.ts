import type Axis from '../../Core/Axis/Axis';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type Tick from '../../Core/Axis/Tick';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        variwide?: boolean;
        zData?: Array<number>;
    }
}
declare module '../../Core/Axis/TickBase' {
    interface TickBase {
        postTranslate(xy: PositionObject, xOrY: keyof PositionObject, index: number): void;
    }
}
/**
 * @private
 */
declare function compose(AxisClass: typeof Axis, TickClass: typeof Tick): void;
declare const VariwideComposition: {
    compose: typeof compose;
};
export default VariwideComposition;
