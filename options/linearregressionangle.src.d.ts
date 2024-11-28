/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the initial
     * animation when a series is displayed for the `dataLabels`. The animation
     * can also be set as a configuration object. Please note that this option
     * only applies to the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface PlotLinearregressionangleDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) Options for the series data sorting.
     */
    interface PlotLinearregressionangleDataSortingOptions {
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
     * (Highstock) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotLinearregressionangleOnPointConnectorOptions {
        /**
         * (Highstock) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highstock) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highstock) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highstock) Options allowing to set a position and an offset of the
     * series in the _Series on point_ feature.
     */
    interface PlotLinearregressionangleOnPointPositionOptions {
        /**
         * (Highstock) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highstock) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highstock) X position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highstock) Y position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highstock) Parameters used in calculation of regression series' points.
     */
    interface PlotLinearregressionangleParamsOptions {
        /**
         * (Highstock) The point index which indicator calculations will base.
         * For example using OHLC data, index=2 means the indicator will be
         * calculated using Low values.
         */
        index?: number;
        /**
         * (Highstock) The base period for indicator calculations. This is the
         * number of data points which are taken into account for the indicator
         * calculations.
         */
        period?: number;
        /**
         * (Highstock) Unit (in milliseconds) for the x axis distances used to
         * compute the regression line parameters (slope & intercept) for every
         * range. In Highcharts Stock the x axis values are always represented
         * in milliseconds which may cause that distances between points are
         * "big" integer numbers.
         *
         * Highcharts Stock's linear regression algorithm (least squares method)
         * will utilize these "big" integers for finding the slope and the
         * intercept of the regression line for each period. In consequence,
         * this value may be a very "small" decimal number that's hard to
         * interpret by a human.
         *
         * For instance: `xAxisUnit` equaled to `86400000` ms (1 day) forces the
         * algorithm to treat `86400000` as `1` while computing the slope and
         * the intercept. This may enhance the legibility of the indicator's
         * values.
         *
         * Default value is the closest distance between two data points.
         *
         * In `v9.0.2`, the default value has been changed from `undefined` to
         * `null`.
         */
        xAxisUnit?: (number|null);
    }
    /**
     * (Highstock) A linear regression intercept series. If the type option is
     * not specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `linearregressionangle` series are defined in
     * plotOptions.linearregressionangle.
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
     * You have to extend the `SeriesLinearregressionangleOptions` via an
     * interface to allow custom properties: ``` declare interface
     * SeriesLinearregressionangleOptions { customProperty: string; }
     *
     */
    interface SeriesLinearregressionangleOptions extends Highcharts.PlotLinearregressionangleOptions, Highcharts.SeriesOptions {
        /**
         * Not available
         */
        dataParser?: undefined;
        /**
         * Not available
         */
        dataURL?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "linearregressionangle";
    }
}
