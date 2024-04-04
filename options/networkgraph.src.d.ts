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
    interface PlotNetworkgraphDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    interface PlotNetworkgraphLayoutAlgorithmOptions {
        /**
         * (Highcharts) Approximation used to calculate repulsive forces
         * affecting nodes. By default, when calculating net force, nodes are
         * compared against each other, which gives O(N^2) complexity. Using
         * Barnes-Hut approximation, we decrease this to O(N log N), but the
         * resulting graph will have different layout. Barnes-Hut approximation
         * divides space into rectangles via quad tree, where forces exerted on
         * nodes are calculated directly for nearby cells, and for all others,
         * cells are treated as a separate node with center of mass.
         */
        approximation?: Highcharts.OptionsApproximationValue;
        /**
         * (Highcharts) Attraction force applied on a node which is conected to
         * another node by a link. Passed are two arguments:
         *
         * - `d` - which is current distance between two nodes
         *
         * - `k` - which is desired distance between two nodes
         *
         * In `verlet` integration, defaults to: `function (d, k) { return (k -
         * d) / d; }`
         */
        attractiveForce?: Function;
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
         * one of built-in options ("circle", "random") or a function where
         * positions should be set on each node (`this.nodes`) as `node.plotX`
         * and `node.plotY`
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
         * (Highcharts) Verlet integration only. Max speed that node can get in
         * one iteration. In terms of simulation, it's a maximum translation (in
         * pixels) that node can move (in both, x and y, dimensions). While
         * `friction` is applied on all nodes, max speed is applied only for
         * nodes that move very fast, for example small or disconnected ones.
         */
        maxSpeed?: number;
        /**
         * (Highcharts) Repulsive force applied on a node. Passed are two
         * arguments:
         *
         * - `d` - which is current distance between two nodes
         *
         * - `k` - which is desired distance between two nodes
         *
         * In `verlet` integration, defaults to: `function (d, k) { return (k -
         * d) / d * (k > d ? 1 : 0) }`
         */
        repulsiveForce?: Function;
        /**
         * (Highcharts) Barnes-Hut approximation only. Deteremines when distance
         * between cell and node is small enough to calculate forces. Value of
         * `theta` is compared directly with quotient `s / d`, where `s` is the
         * size of the cell, and `d` is distance between center of cell's mass
         * and currently compared node.
         */
        theta?: number;
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
    interface PlotNetworkgraphOnPointConnectorOptions {
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
    interface PlotNetworkgraphOnPointPositionOptions {
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
     * (Highcharts) A collection of options for the individual nodes. The nodes
     * in a networkgraph diagram are auto-generated instances of
     * `Highcharts.Point`, but options can be applied here and linked by the
     * `id`.
     */
    interface SeriesNetworkgraphNodesOptions {
        /**
         * (Highcharts) The color of the auto generated node.
         */
        color?: Highcharts.ColorString;
        /**
         * (Highcharts) The color index of the auto generated node, especially
         * for use in styled mode.
         */
        colorIndex?: number;
        /**
         * (Highcharts) Individual data label for each node. The options are the
         * same as the ones for series.networkgraph.dataLabels.
         */
        dataLabels?: (Highcharts.SeriesNetworkgraphDataLabelsOptionsObject|Array<Highcharts.SeriesNetworkgraphDataLabelsOptionsObject>);
        /**
         * (Highcharts) The id of the auto-generated node, referring to the
         * `from` or `to` setting of the link.
         */
        id?: string;
        /**
         * (Highcharts) Options for the node markers.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highcharts) Mass of the node. By default, each node has mass equal
         * to it's marker radius . Mass is used to determine how two connected
         * nodes should affect each other:
         *
         * Attractive force is multiplied by the ratio of two connected nodes;
         * if a big node has weights twice as the small one, then the small one
         * will move towards the big one twice faster than the big one to the
         * small one .
         */
        mass?: number;
        /**
         * (Highcharts) The name to display for the node in data labels and
         * tooltips. Use this when the name is different from the `id`. Where
         * the id must be unique for each node, this is not necessary for the
         * name.
         */
        name?: string;
    }
}
