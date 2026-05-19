import type Point from './Series/Point';
import type Pointer from './Pointer';
/**
 * A native browser mouse or touch event, extended with position information
 * relative to the `Highcharts.Chart.container`.
 */
export interface PointerEvent extends globalThis.PointerEvent {
    accumulate?: boolean;
    chartX: number;
    chartY: number;
    DOMType?: string;
    lat?: number;
    lon?: number;
    point?: Point;
    touches?: Array<Touch>;
    trigger?: string;
    xAxis?: Array<Pointer.AxisCoordinateObject>;
    yAxis?: Array<Pointer.AxisCoordinateObject>;
}
export default PointerEvent;
