import type ColorString from '../../../Core/Color/ColorString';
import CrookedLine from './CrookedLine';
import Tunnel from './Tunnel.js';
declare namespace Fibonacci {
    /**
     * Options for the fibonacci annotation type.
     *
     * @sample highcharts/annotations-advanced/fibonacci/
     *         Fibonacci
     *
     * @extends      annotations.types.crookedLine
     * @product      highstock
     * @optionparent annotations.types.fibonacci
     */
    interface Options extends Tunnel.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends Tunnel.TypeOptions {
        /**
         * An array of background colors:
         * Defaults to:
         * ```
         * [
         * 'rgba(130, 170, 255, 0.4)',
         * 'rgba(139, 191, 216, 0.4)',
         * 'rgba(150, 216, 192, 0.4)',
         * 'rgba(156, 229, 161, 0.4)',
         * 'rgba(162, 241, 130, 0.4)',
         * 'rgba(169, 255, 101, 0.4)'
         * ]
         * ```
         */
        backgroundColors: Array<ColorString>;
        /**
         * The height of the fibonacci in terms of yAxis.
         */
        height: Tunnel.TypeOptions['height'];
        /**
         * An array with options for the labels.
         *
         * @type      {Array<*>}
         * @extends   annotations.types.crookedLine.labelOptions
         * @apioption annotations.types.fibonacci.typeOptions.labels
         */
        labels: Array<CrookedLine.Options['labelOptions']>;
        /**
         * The color of line.
         */
        lineColor: ColorString;
        /**
         * An array of colors for the lines.
         */
        lineColors: Array<ColorString>;
        /**
         * Whether the annotation levels should be reversed. By default
         * they start from 0 and go to 1.
         *
         * @sample highcharts/annotations-advanced/fibonacci-reversed/
         *         Fibonacci annotation reversed
         *
         * @type {boolean}
         * @apioption annotations.types.fibonacci.typeOptions.reversed
         */
        reversed: boolean;
    }
}
export default Fibonacci;
