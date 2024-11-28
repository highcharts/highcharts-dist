/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts, Highstock) Point accessibility options for a series.
     */
    interface PlotArearangeAccessibilityPointOptions {
        /**
         * (Highcharts, Highstock) Date format to use for points on datetime
         * axes when describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Highcharts, Highstock) Formatter function to determine the date/time
         * format used with points on datetime axes when describing them to
         * screen reader users. Receives one argument, `point`, referring to the
         * point to describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts, Highstock) Whether or not to describe points with the
         * value `null` to assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Highcharts, Highstock) A format string to use instead of the default
         * for point descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Highcharts, Highstock) Formatter function to use instead of the
         * default for point descriptions. Same as
         * `accessibility.point.descriptionFormatter`, but applies to a series
         * instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts, Highstock) Decimals to use for the values in the point
         * descriptions. Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Highcharts, Highstock) Format to use for describing the values of
         * data points to assistive technology - including screen readers. The
         * point context is available as `{point}`.
         *
         * Other available context variables include `{index}`, `{value}`, and
         * `{xDescription}`.
         *
         * Additionally, the series name, annotation info, and description added
         * in `point.accessibility.description` is added by default if relevant.
         * To override this, use the accessibility.point.descriptionFormatter
         * option.
         */
        valueDescriptionFormat?: string;
        /**
         * (Highcharts, Highstock) Prefix to add to the values in the point
         * descriptions. Uses tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Highcharts, Highstock) Suffix to add to the values in the point
         * descriptions. Uses tooltip.valueSuffix if not defined.
         */
        valueSuffix?: string;
    }
    /**
     * (Highcharts, Highstock) Options for the series data sorting.
     */
    interface PlotArearangeDataSortingOptions {
        /**
         * (Highcharts, Highstock) Enable or disable data sorting for the
         * series. Use xAxis.reversed to change the sorting order.
         */
        enabled?: boolean;
        /**
         * (Highcharts, Highstock) Whether to allow matching points by name in
         * an update. If this option is disabled, points will be matched by
         * order.
         */
        matchByName?: boolean;
        /**
         * (Highcharts, Highstock) Determines what data value should be used to
         * sort by.
         */
        sortKey?: string;
    }
    /**
     * (Highcharts, Highstock) Options for the connector in the _Series on
     * point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotArearangeOnPointConnectorOptions {
        /**
         * (Highcharts, Highstock) A name for the dash style to use for the
         * connector.
         */
        dashstyle?: string;
        /**
         * (Highcharts, Highstock) Color of the connector line. By default it's
         * the series' color.
         */
        stroke?: string;
        /**
         * (Highcharts, Highstock) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highcharts, Highstock) Options allowing to set a position and an offset
     * of the series in the _Series on point_ feature.
     */
    interface PlotArearangeOnPointPositionOptions {
        /**
         * (Highcharts, Highstock) Series center offset from the original x
         * position. If defined, the connector line is drawn connecting original
         * position with new position.
         */
        offsetX?: number;
        /**
         * (Highcharts, Highstock) Series center offset from the original y
         * position. If defined, the connector line is drawn from original
         * position to a new position.
         */
        offsetY?: number;
        /**
         * (Highcharts, Highstock) X position of the series center. By default,
         * the series is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highcharts, Highstock) Y position of the series center. By default,
         * the series is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highcharts, Highstock) Enable or disable the initial animation when a
     * series is displayed for the `dataLabels`. The animation can also be set
     * as a configuration object. Please note that this option only applies to
     * the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface SeriesArearangeDataDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock) The animation delay time in milliseconds. Set
         * to `0` to render the data labels immediately. As `undefined` inherits
         * defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) A `arearange` series. If the type option is not
     * specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `arearange` series are defined in
     * plotOptions.arearange.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     *
     * **TypeScript:**
     *
     * - the type option must always be set.
     *
     * - when accessing an array of series, the combined set of all series types
     * is represented by Highcharts.SeriesOptionsType . Narrowing down to the
     * specific type can be done by checking the `type` property. (see online
     * documentation for example)
     *
     * You have to extend the `SeriesArearangeOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesArearangeOptions {
     * customProperty: string; }
     *
     */
    interface SeriesArearangeOptions extends Highcharts.PlotArearangeOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts, Highstock) An array of data points for the series. For
         * the `arearange` series type, points can be given in the following
         * ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values
         * correspond to `x,low,high`. If the first value is a string, it is
         * applied as the name of the point, and the `x` value is inferred. The
         * `x` value can also be omitted, in which case the inner arrays should
         * be of length 2\. Then the `x` value is automatically calculated,
         * either starting at 0 and incremented by 1, or from `pointStart` and
         * `pointInterval` given in the series options. (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<([(number|string), number]|[(number|string), number, number]|Highcharts.PointOptionsObject)>;
        /**
         * Not available
         */
        dataParser?: undefined;
        /**
         * Not available
         */
        dataURL?: undefined;
        /**
         * Not available
         */
        stack?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "arearange";
    }
}
