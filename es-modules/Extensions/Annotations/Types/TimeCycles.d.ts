import type { ControlPointOptionsObject } from '../ControlPointOptions';
import CrookedLine from './CrookedLine.js';
declare namespace TimeCycles {
    /**
     * Options for the time cycles annotation type.
     *
     * @sample highcharts/annotations-advanced/time-cycles/
     *         Time Cycles annotation
     *
     * @extends      annotations.types.crookedLine
     * @product      highstock
     * @exclude      labelOptions
     * @optionparent annotations.types.timeCycles
     */
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        type: string;
        controlPointOptions: ControlPointOptionsObject[];
    }
}
export default TimeCycles;
