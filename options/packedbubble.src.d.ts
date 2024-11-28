/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * (Highcharts) Point accessibility options for a series.
     */
    interface PlotPackedbubbleAccessibilityPointOptions {
        /**
         * (Highcharts) Date format to use for points on datetime axes when
         * describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Highcharts) Formatter function to determine the date/time format
         * used with points on datetime axes when describing them to screen
         * reader users. Receives one argument, `point`, referring to the point
         * to describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts) Whether or not to describe points with the value `null`
         * to assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Highcharts) A format string to use instead of the default for point
         * descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Highcharts) Formatter function to use instead of the default for
         * point descriptions. Same as
         * `accessibility.point.descriptionFormatter`, but applies to a series
         * instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts) Decimals to use for the values in the point
         * descriptions. Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Highcharts) Format to use for describing the values of data points
         * to assistive technology - including screen readers. The point context
         * is available as `{point}`.
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
         * (Highcharts) Prefix to add to the values in the point descriptions.
         * Uses tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Highcharts) Suffix to add to the values in the point descriptions.
         * Uses tooltip.valueSuffix if not defined.
         */
        valueSuffix?: string;
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Styles for the label. The
     * default `color` setting is `"contrast"`, which is a pseudo color that
     * Highcharts picks up and applies the maximum contrast to the underlying
     * point item, for example the bar in a bar chart.
     *
     * The `textOutline` is a pseudo property that applies an outline of the
     * given width with the given color, which by default is the maximum
     * contrast to the text. So a bright text color will result in a black text
     * outline for maximum readability on a mixed background. In some cases,
     * especially with grayscale text, the text outline doesn't work well, in
     * which cases it can be disabled by setting it to `"none"`. When `useHTML`
     * is true, the `textOutline` will not be picked up. In this, case, the same
     * effect can be acheived through the `text-shadow` CSS property.
     *
     * For some series types, where each point has an extent, like for example
     * tree maps, the data label may overflow the point. There are two
     * strategies for handling overflow. By default, the text will wrap to
     * multiple lines. The other strategy is to set `style.textOverflow` to
     * `ellipsis`, which will keep the text on one line plus it will break
     * inside long words.
     */
    interface PlotPackedbubbleDataLabelsStyleOptions {
        transition?: string;
    }
    /**
     * (Highcharts) Options for layout algorithm when simulation is enabled.
     * Inside there are options to change the speed, padding, initial bubbles
     * positions and more.
     */
    interface PlotPackedbubbleLayoutAlgorithmOptions {
        /**
         * (Highcharts) The distance between two bubbles, when the algorithm
         * starts to treat two bubbles as overlapping. The `bubblePadding` is
         * also the expected distance between all the bubbles on simulation end.
         */
        bubblePadding?: number;
        /**
         * (Highcharts) In case of split series, this option allows user to drag
         * and drop points between series, for changing point related series.
         */
        dragBetweenSeries?: boolean;
        /**
         * (Highcharts) Experimental. Enables live simulation of the algorithm
         * implementation. All nodes are animated as the forces applies on them.
         */
        enableSimulation?: boolean;
        /**
         * (Highcharts) Friction applied on forces to prevent nodes rushing to
         * fast to the desired positions.
         */
        friction?: number;
        /**
         * (Highcharts) Gravitational const used in the barycenter force of the
         * algorithm.
         */
        gravitationalConstant?: number;
        /**
         * (Highcharts) When `initialPositions` are set to 'circle',
         * `initialPositionRadius` is a distance from the center of circle, in
         * which nodes are created.
         */
        initialPositionRadius?: number;
        /**
         * (Highcharts) Initial layout algorithm for positioning nodes. Can be
         * one of the built-in options ("circle", "random") or a function where
         * positions should be set on each node (`this.nodes`) as `node.plotX`
         * and `node.plotY`.
         */
        initialPositions?: ("circle"|"random"|Function);
        /**
         * (Highcharts) Integration type. Available options are `'euler'` and
         * `'verlet'`. Integration determines how forces are applied on
         * particles. In Euler integration, force is applied direct as
         * `newPosition += velocity;`. In Verlet integration, new position is
         * based on a previous position without velocity: `newPosition +=
         * previousPosition - newPosition`.
         *
         * Note that different integrations give different results as forces are
         * different.
         *
         * In Highcharts v7.0.x only `'euler'` integration was supported.
         */
        integration?: Highcharts.OptionsIntegrationValue;
        /**
         * (Highcharts) Ideal length (px) of the link between two nodes. When
         * not defined, length is calculated as: `Math.pow(availableWidth *
         * availableHeight / nodesLength, 0.4);`
         *
         * Note: Because of the algorithm specification, length of each link
         * might be not exactly as specified.
         */
        linkLength?: number;
        /**
         * (Highcharts) Max number of iterations before algorithm will stop. In
         * general, algorithm should find positions sooner, but when rendering
         * huge number of nodes, it is recommended to increase this value as
         * finding perfect graph positions can require more time.
         */
        maxIterations?: number;
        /**
         * (Highcharts) Max speed that node can get in one iteration. In terms
         * of simulation, it's a maximum translation (in pixels) that a node can
         * move (in both, x and y, dimensions). While `friction` is applied on
         * all nodes, max speed is applied only for nodes that move very fast,
         * for example small or disconnected ones.
         */
        maxSpeed?: number;
        /**
         * (Highcharts) Whether bubbles should interact with their parentNode to
         * keep them inside.
         */
        parentNodeLimit?: boolean;
        /**
         * (Highcharts) Layout algorithm options for parent nodes.
         */
        parentNodeOptions?: Highcharts.PlotPackedbubbleLayoutAlgorithmParentNodeOptions;
        /**
         * (Highcharts) Whether series should interact with each other or not.
         * When `parentNodeLimit` is set to true, thi option should be set to
         * false to avoid sticking points in wrong series parentNode.
         */
        seriesInteraction?: boolean;
        /**
         * (Highcharts) Whether to split series into individual groups or to mix
         * all series together.
         */
        splitSeries?: boolean;
        /**
         * (Highcharts) Type of the algorithm used when positioning nodes.
         */
        type?: "reingold-fruchterman";
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotPackedbubbleOnPointConnectorOptions {
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
    interface PlotPackedbubbleOnPointPositionOptions {
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
     * (Highcharts) Series options for parent nodes.
     */
    interface PlotPackedbubbleParentNodeOptions {
        /**
         * (Highcharts) Allow this series' parent nodes to be selected by
         * clicking on the graph.
         */
        allowPointSelect?: boolean;
    }
    /**
     * (Highcharts) Enable or disable the initial animation when a series is
     * displayed for the `dataLabels`. The animation can also be set as a
     * configuration object. Please note that this option only applies to the
     * initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface SeriesPackedbubbleDataDataLabelsAnimationOptions {
        /**
         * (Highcharts) The animation delay time in milliseconds. Set to `0` to
         * render the data labels immediately. As `undefined` inherits defer
         * time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) A `packedbubble` series. If the type option is not
     * specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `packedbubble` series are defined in
     * plotOptions.packedbubble.
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
     * You have to extend the `SeriesPackedbubbleOptions` via an interface to
     * allow custom properties: ``` declare interface SeriesPackedbubbleOptions
     * { customProperty: string; }
     *
     */
    interface SeriesPackedbubbleOptions extends Highcharts.PlotPackedbubbleOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An array of data points for the series. For the
         * `packedbubble` series type, points can be given in the following
         * ways:
         *
         * 1. An array of `values`. (see online documentation for example)
         *
         * 2. An array of objects with named values. The objects are point
         * configuration objects as seen below. If the total number of data
         * points exceeds the series' turboThreshold, this option is not
         * available. (see online documentation for example)
         */
        data?: (Highcharts.PointOptionsObject|Array<(object|any[])>);
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
        type: "packedbubble";
    }
}
