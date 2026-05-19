import type { ControlPointOptionsObject } from '../ControlPointOptions';
import CrookedLine from './CrookedLine.js';
declare namespace Tunnel {
    /**
     * Options for the tunnel annotation type.
     *
     * @extends annotations.types.crookedLine
     * @sample highcharts/annotations-advanced/tunnel/
     *         Tunnel
     * @product highstock
     * @optionparent annotations.types.tunnel
     */
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        /**
         * The height of the annotation in terms of yAxis.
         */
        height: number;
        /**
         * Options for the control point which controls
         * the annotation's height.
         *
         * @extends annotations.types.crookedLine.controlPointOptions
         * @excluding positioner, events
         */
        heightControlPoint: ControlPointOptionsObject;
    }
}
export default Tunnel;
