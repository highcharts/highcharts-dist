import type Axis from './Axis.js';
import type PositionObject from '../Renderer/PositionObject';
import type TickBase from './TickBase';
import type SVGElement from '../Renderer/SVG/SVGElement';
/**
 * The Tick class.
 *
 * @class
 * @name Highcharts.Tick
 *
 * @param {Highcharts.Axis} axis
 * The axis of the tick.
 *
 * @param {number} pos
 * The position of the tick on the axis in terms of axis values.
 *
 * @param {string} [type]
 * The type of tick, either 'minor' or an empty string
 *
 * @param {boolean} [noLabel=false]
 * Whether to disable the label or not. Defaults to false.
 *
 * @param {Object} [parameters]
 * Optional parameters for the tick.
 */
declare class Tick {
    constructor(axis: Axis, pos: number, type?: string, noLabel?: boolean, parameters?: Tick.ParametersObject);
    /**
     * The related axis of the tick.
     * @name Highcharts.Tick#axis
     * @type {Highcharts.Axis}
     */
    axis: Axis;
    /**
     * The rendered grid line of the tick.
     * @name Highcharts.Tick#gridLine
     * @type {Highcharts.SVGElement|undefined}
     */
    gridLine?: SVGElement;
    boundary?: string;
    /**
     * True if the tick is the first one on the axis.
     * @name Highcharts.Tick#isFirst
     * @readonly
     * @type {boolean|undefined}
     */
    isFirst?: boolean;
    /**
     * True if the tick is the last one on the axis.
     * @name Highcharts.Tick#isLast
     * @readonly
     * @type {boolean|undefined}
     */
    isLast?: boolean;
    /**
     * The rendered text label of the tick.
     * @name Highcharts.Tick#label
     * @type {Highcharts.SVGElement|undefined}
     */
    label?: SVGElement;
    /**
     * The rendered mark of the tick.
     * @name Highcharts.Tick#mark
     * @type {Highcharts.SVGElement|undefined}
     */
    mark?: SVGElement;
    /**
     * The logical position of the tick on the axis in terms of axis values.
     * @name Highcharts.Tick#pos
     * @type {number}
     */
    pos: number;
    /**
     * The mark offset of the tick on the axis. Usually `undefined`, numeric
     * for grid axes.
     * @name Highcharts.Tick#tickmarkOffset
     * @type {number|undefined}
     */
    tickmarkOffset?: number;
    /**
     * The tick type, which can be `"minor"`, or an empty string.
     * @name Highcharts.Tick#type
     * @type {string}
     */
    type: string;
}
interface Tick extends TickBase {
}
declare namespace Tick {
    interface ParametersObject {
        category?: string;
        options?: AnyRecord;
        tickmarkOffset?: number;
    }
    interface LabelObject extends PositionObject {
        opacity?: number;
    }
}
export default Tick;
