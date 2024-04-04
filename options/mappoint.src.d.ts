/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface PlotMappointClusterEventsOptions {
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
    interface PlotMappointClusterOptions {
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
        events?: Highcharts.PlotMappointClusterEventsOptions;
        /**
         * (Highcharts, Highmaps) Options for layout algorithm. Inside there are
         * options to change the type of the algorithm, gridSize, distance or
         * iterations.
         */
        layoutAlgorithm?: Highcharts.PlotMappointClusterLayoutAlgorithmOptions;
        /**
         * (Highcharts, Highmaps) Options for the cluster marker.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highcharts, Highmaps) The minimum amount of points to be combined
         * into a cluster. This value has to be greater or equal to 2.
         */
        minimumClusterSize?: number;
        states?: Highcharts.PlotMappointClusterStatesOptions;
        /**
         * (Highcharts, Highmaps) An array defining zones within marker
         * clusters.
         *
         * In styled mode, the color zones are styled with the
         * `.highcharts-cluster-zone-{n}` class, or custom classed from the
         * `className` option.
         */
        zones?: Array<Highcharts.PlotMappointClusterZonesOptions>;
    }
    interface PlotMappointClusterStatesOptions {
        hover?: Highcharts.PlotMappointClusterStatesHoverOptions;
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
    interface PlotMappointDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highmaps) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotMappointOnPointConnectorOptions {
        /**
         * (Highmaps) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highmaps) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highmaps) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highmaps) Options allowing to set a position and an offset of the series
     * in the _Series on point_ feature.
     */
    interface PlotMappointOnPointPositionOptions {
        /**
         * (Highmaps) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highmaps) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highmaps) X position of the series center. By default, the series is
         * displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highmaps) Y position of the series center. By default, the series is
         * displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highmaps) An array of data points for the series. For the `mappoint`
     * series type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will
     * be interpreted as `y` options. The `x` values will be automatically
     * calculated, either starting at 0 and incremented by 1, or from
     * `pointStart` and `pointInterval` given in the series options. If the axis
     * has categories, these will be used. Example: (see online documentation
     * for example)
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond
     * to `[hc-key, value]`. Example: (see online documentation for example)
     *
     * 3. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. If the total
     * number of data points exceeds the series' turboThreshold, this option is
     * not available. (see online documentation for example)
     */
    interface SeriesMappointDataOptions {
        /**
         * (Highmaps) Individual color for the point. By default the color is
         * either used to denote the value, or pulled from the global `colors`
         * array.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highmaps) Individual data label for each point. The options are the
         * same as the ones for plotOptions.series.dataLabels.
         */
        dataLabels?: Highcharts.DataLabelsOptions;
        /**
         * (Highmaps) The `id` of a series in the drilldown.series array to use
         * for a drilldown for this point.
         */
        drilldown?: string;
        /**
         * (Highmaps) Individual point events
         */
        events?: Highcharts.PointEventsOptionsObject;
        /**
         * (Highmaps) The geometry of a point.
         *
         * To achieve a better separation between the structure and the data, it
         * is recommended to use `mapData` to define the geometry instead of
         * defining it on the data points themselves.
         *
         * The geometry object is compatible to that of a `feature` in geoJSON,
         * so features of geoJSON can be passed directly into the `data`,
         * optionally after first filtering and processing it.
         */
        geometry?: (object|Highcharts.SeriesMappointDataGeometryOptions);
        /**
         * (Highmaps) An id for the point. This can be used after render time to
         * get a pointer to the point object through `chart.get()`.
         */
        id?: string;
        /**
         * (Highmaps) The latitude of the point. Must be combined with the `lon`
         * option to work. Overrides `x` and `y` values.
         */
        lat?: number;
        /**
         * (Highmaps) The longitude of the point. Must be combined with the
         * `lon` option to work. Overrides `x` and `y` values.
         */
        lon?: number;
        /**
         * (Highmaps) The name of the point as shown in the legend, tooltip,
         * dataLabel etc.
         */
        name?: string;
        /**
         * (Highmaps) The x coordinate of the point in terms of projected units.
         */
        x?: number;
        /**
         * (Highmaps) The x coordinate of the point in terms of projected units.
         */
        y?: (number|null);
    }
}
