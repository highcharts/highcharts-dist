import type StackingAxis from './StackingAxis';
import type { StackLabelOptions } from './StackingOptions';
import type SVGLabel from '../../Renderer/SVG/SVGLabel';
export interface AlignOptions {
    verticalAlign: 'top' | 'middle' | 'bottom';
    align: 'left' | 'center' | 'right';
    x?: number;
    y?: number;
}
/**
 * Use StackItem instead.
 * @deprecated
 */
export type StackItemObject = StackItem;
/**
 * The class for stacks. Each stack, on a specific X value and either negative
 * or positive, has its own stack item.
 */
declare class StackItem {
    /**
     * Alignment settings
     * @name Highcharts.StackItemObject#alignOptions
     * @type {Highcharts.AlignObject}
     */
    alignOptions: AlignOptions;
    /**
     * Related axis
     * @name Highcharts.StackItemObject#axis
     * @type {Highcharts.Axis}
     */
    axis: StackingAxis;
    /**
     * Cumulative value of the stacked data points
     * @name Highcharts.StackItemObject#cumulative
     * @type {number}
     */
    cumulative: number | null;
    /**
     * True if on the negative side
     * @name Highcharts.StackItemObject#isNegative
     * @type {boolean}
     */
    isNegative: boolean;
    /**
     * Related SVG element
     * @name Highcharts.StackItemObject#label
     * @type {Highcharts.SVGElement}
     */
    label?: SVGLabel;
    /**
     * Related stack options
     * @name Highcharts.StackItemObject#options
     * @type {Highcharts.YAxisStackLabelsOptions}
     */
    options: StackLabelOptions;
    /**
     * Total value of the stacked data points
     * @name Highcharts.StackItemObject#total
     * @type {number}
     */
    total: number | null;
    /**
     * Shared x value of the stack
     * @name Highcharts.StackItemObject#x
     * @type {number}
     */
    x: number;
}
export default StackItem;
