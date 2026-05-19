import type AxisOptions from '../AxisOptions';
import type ColorType from '../../Color/ColorType';
declare module '../AxisOptions' {
    interface AxisBreakOptions {
        showPoints?: boolean;
        maxOffset?: number;
    }
    interface AxisLabelOptions {
        levels?: number;
        /**
         * The symbol for the collapse and expand icon in a
         * treegrid.
         *
         * @product gantt
         */
        symbol?: TreeGridAxisLabelIconOptions;
    }
}
export interface TreeGridAxisLabelIconOptions {
    height?: number;
    lineColor?: ColorType;
    lineWidth?: number;
    padding?: number;
    type?: number;
    width?: number;
    x?: number;
    y?: number;
}
export default AxisOptions;
