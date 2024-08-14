/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotWordcloudOnPointConnectorOptions {
        /**
         * (Highcharts) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highcharts) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highcharts) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highcharts) Options allowing to set a position and an offset of the
     * series in the _Series on point_ feature.
     */
    interface PlotWordcloudOnPointPositionOptions {
        /**
         * (Highcharts) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highcharts) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highcharts) X position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highcharts) Y position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highcharts) Rotation options for the words in the wordcloud.
     */
    interface PlotWordcloudRotationOptions {
        /**
         * (Highcharts) The smallest degree of rotation for a word.
         */
        from?: number;
        /**
         * (Highcharts) The number of possible orientations for a word, within
         * the range of `rotation.from` and `rotation.to`. Must be a number
         * larger than 0.
         */
        orientations?: number;
        /**
         * (Highcharts) The largest degree of rotation for a word.
         */
        to?: number;
    }
    /**
     * (Highcharts) A `wordcloud` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `wordcloud` series are defined in
     * plotOptions.wordcloud.
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
     * You have to extend the `SeriesWordcloudOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesWordcloudOptions {
     * customProperty: string; }
     *
     */
    interface SeriesWordcloudOptions extends Highcharts.PlotWordcloudOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An array of data points for the series. For the
         * `wordcloud` series type, points can be given in the following ways:
         *
         * 1. An array of arrays with 2 values. In this case, the values
         * correspond to `name,weight`. (see online documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<([string, number]|Highcharts.PointOptionsObject)>;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "wordcloud";
    }
}
