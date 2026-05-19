import type ColorString from '../Core/Color/ColorString';
import type { PlotLineLabelOptions, PlotLineOptions } from '../Core/Axis/PlotLineOrBand/PlotLineOptions';
import type Time from '../Core/Time';
declare module '../Core/Axis/AxisOptions' {
    interface AxisOptions {
        /**
         * Show an indicator on the axis for the current date and time. Can be a
         * boolean or a configuration object similar to
         * [xAxis.plotLines](#xAxis.plotLines).
         *
         * @sample gantt/current-date-indicator/demo
         *         Current date indicator enabled
         * @sample gantt/current-date-indicator/object-config
         *         Current date indicator with custom options
         *
         * @default true
         * @product gantt
         */
        currentDateIndicator?: (boolean | CurrentDateIndicatorOptions);
    }
}
interface CurrentDateIndicatorLabelOptions extends PlotLineLabelOptions {
    /**
     * Format of the label. This options is passed as the first argument to
     * [dateFormat](/class-reference/Highcharts.Time#dateFormat) function.
     *
     * @default '%[abdYHM]'
     */
    format?: Time.DateTimeFormat;
    /** @default 0 */
    rotation?: PlotLineLabelOptions['rotation'];
}
interface CurrentDateIndicatorOptions extends PlotLineOptions {
    /** @default ${palette.highlightColor20} */
    color?: ColorString;
    label?: CurrentDateIndicatorLabelOptions;
    /** @default 2 */
    width?: PlotLineOptions['width'];
    /**
     * Internally overridden later to 'highcharts-current-date-indicator'.
     */
    className?: undefined;
    /**
     * Internally overridden later to the current timestamp.
     */
    value?: undefined;
}
export {};
