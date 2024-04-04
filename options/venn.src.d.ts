/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface PlotVennClusterEventsOptions {
        /**
         * (Highcharts, Highmaps) Fires when the cluster point is clicked and
         * `drillToCluster` is enabled. One parameter, `event`, is passed to the
         * function. The default action is to zoom to the cluster points range.
         * This can be prevented by calling `event.preventDefault()`.
         */
        drillToCluster?: Highcharts.MarkerClusterDrillCallbackFunction;
    }
    /**
     * (Highcharts, Highmaps) Options for marker clusters, the concept of
     * sampling the data values into larger blocks in order to ease readability
     * and increase performance of the JavaScript charts.
     *
     * Note: marker clusters module is not working with `boost` and
     * `draggable-points` modules.
     *
     * The marker clusters feature requires the marker-clusters.js file to be
     * loaded, found in the modules directory of the download package, or online
     * at code.highcharts.com/modules/marker-clusters.js.
     */
    interface PlotVennClusterOptions {
        /**
         * (Highcharts, Highmaps) When set to `false` prevent cluster
         * overlapping - this option works only when `layoutAlgorithm.type =
         * "grid"`.
         */
        allowOverlap?: boolean;
        /**
         * (Highcharts, Highmaps) Options for the cluster marker animation.
         */
        animation?: (boolean|Partial<Highcharts.AnimationOptionsObject>);
        /**
         * (Highcharts, Highmaps) Options for the cluster data labels.
         */
        dataLabels?: Highcharts.DataLabelsOptions;
        /**
         * (Highcharts, Highmaps) Zoom the plot area to the cluster points range
         * when a cluster is clicked.
         */
        drillToCluster?: boolean;
        /**
         * (Highcharts, Highmaps) Whether to enable the marker-clusters module.
         */
        enabled?: boolean;
        events?: Highcharts.PlotVennClusterEventsOptions;
        /**
         * (Highcharts, Highmaps) Options for layout algorithm. Inside there are
         * options to change the type of the algorithm, gridSize, distance or
         * iterations.
         */
        layoutAlgorithm?: Highcharts.PlotVennClusterLayoutAlgorithmOptions;
        /**
         * (Highcharts, Highmaps) Options for the cluster marker.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highcharts, Highmaps) The minimum amount of points to be combined
         * into a cluster. This value has to be greater or equal to 2.
         */
        minimumClusterSize?: number;
        states?: Highcharts.PlotVennClusterStatesOptions;
        /**
         * (Highcharts, Highmaps) An array defining zones within marker
         * clusters.
         *
         * In styled mode, the color zones are styled with the
         * `.highcharts-cluster-zone-{n}` class, or custom classed from the
         * `className` option.
         */
        zones?: Array<Highcharts.PlotVennClusterZonesOptions>;
    }
    interface PlotVennClusterStatesOptions {
        hover?: Highcharts.PlotVennClusterStatesHoverOptions;
    }
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
    interface PlotVennDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotVennOnPointConnectorOptions {
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
    interface PlotVennOnPointPositionOptions {
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
     * (Highcharts, Highstock, Gantt) Enable or disable the initial animation
     * when a series is displayed for the `dataLabels`. The animation can also
     * be set as a configuration object. Please note that this option only
     * applies to the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface SeriesVennDataDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
}
