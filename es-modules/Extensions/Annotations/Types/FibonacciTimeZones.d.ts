import type { ControlPointOptionsObject } from '../ControlPointOptions';
import CrookedLine from './CrookedLine.js';
declare namespace FibonacciTimeZones {
    /**
     * Options for the fibonacci time zones annotation type.
     *
     * @sample highcharts/annotations-advanced/fibonacci-time-zones/
     *         Fibonacci Time Zones
     *
     * @extends      annotations.types.crookedLine
     * @since        9.3.0
     * @product      highstock
     * @optionparent annotations.types.fibonacciTimeZones
     */
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        type: string;
        controlPointOptions: ControlPointOptionsObject;
    }
}
export default FibonacciTimeZones;
