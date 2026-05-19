import type Chart from './Chart/Chart.js';
import type GlobalOptions from './Options';
declare module './Options' {
    interface Options {
        /**
         * Allows setting a set of rules to apply for different screen or chart
         * sizes. Each rule specifies additional chart options.
         *
         * @sample {highstock} stock/demo/responsive/
         *         Stock chart
         * @sample highcharts/responsive/axis/
         *         Axis
         * @sample highcharts/responsive/legend/
         *         Legend
         * @sample highcharts/responsive/classname/
         *         Class name
         *
         * @since     5.0.0
         */
        responsive?: Responsive.Options;
    }
}
declare namespace Responsive {
    interface CallbackFunction {
        (this: Chart, ctx?: Chart): boolean;
    }
    interface Options {
        /**
         * A set of rules for responsive settings. The rules are executed from
         * the top down.
         *
         * @sample {highcharts} highcharts/responsive/axis/
         *         Axis changes
         * @sample {highstock} highcharts/responsive/axis/
         *         Axis changes
         * @sample {highmaps} highcharts/responsive/axis/
         *         Axis changes
         *
         * @since     5.0.0
         */
        rules?: Array<RuleOptions>;
    }
    interface RuleConditionOptions {
        /**
         * A callback function to gain complete control on when the responsive
         * rule applies. Return `true` if it applies. This opens for checking
         * against other metrics than the chart size, for example the document
         * size or other elements. Since v12.6.0, the callback also receives
         * `ctx` as the first argument, so that arrow functions can access the
         * same context as regular functions using `this`.
         *
         * @since     5.0.0
         * @context   Highcharts.Chart
         */
        callback?: CallbackFunction;
        /**
         * The responsive rule applies if the chart height is less than this.
         *
         * @since     5.0.0
         */
        maxHeight?: number;
        /**
         * The responsive rule applies if the chart width is less than this.
         *
         * @sample highcharts/responsive/axis/
         *         Max width is 500
         *
         * @since     5.0.0
         */
        maxWidth?: number;
        /**
         * The responsive rule applies if the chart height is greater than this.
         *
         * @default   0
         * @since     5.0.0
         */
        minHeight?: number;
        /**
         * The responsive rule applies if the chart width is greater than this.
         *
         * @default   0
         * @since     5.0.0
         */
        minWidth?: number;
    }
    interface RuleOptions {
        /**
         * A full set of chart options to apply as overrides to the general
         * chart options. The chart options are applied when the given rule
         * is active.
         *
         * A special case is configuration objects that take arrays, for example
         * [xAxis](#xAxis), [yAxis](#yAxis) or [series](#series). For these
         * collections, an `id` option is used to map the new option set to
         * an existing object. If an existing object of the same id is not
         * found, the item of the same index updated. So for example, setting
         * `chartOptions` with two series items without an `id`, will cause the
         * existing chart's two series to be updated with respective options.
         *
         * @sample {highstock} stock/demo/responsive/
         *         Stock chart
         * @sample highcharts/responsive/axis/
         *         Axis
         * @sample highcharts/responsive/legend/
         *         Legend
         * @sample highcharts/responsive/classname/
         *         Class name
         *
         * @since     5.0.0
         */
        chartOptions?: GlobalOptions;
        /**
         * Under which conditions the rule applies.
         *
         * @since     5.0.0
         */
        condition: RuleConditionOptions;
    }
}
export default Responsive;
