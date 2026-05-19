import type Chart from '../../Core/Chart/Chart';
import type PackedBubblePoint from './PackedBubblePoint';
import type PackedBubbleSeries from './PackedBubbleSeries';
import type Point from '../../Core/Series/Point';
import type { PointMarkerOptions } from '../../Core/Series/PointOptions';
import type Series from '../../Core/Series/Series';
import ReingoldFruchtermanLayout from '../Networkgraph/ReingoldFruchtermanLayout.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        allDataPoints?: Array<PackedBubbleSeries.Data>;
        allParentNodes: Array<PackedBubblePoint>;
        getSelectedParentNodes(): Array<PackedBubblePoint>;
    }
}
declare class PackedBubbleLayout extends ReingoldFruchtermanLayout {
    static compose(ChartClass: typeof Chart): void;
    enableSimulation?: boolean;
    index: number;
    nodes: Array<Point>;
    options: PackedBubbleLayout.Options;
    series: Array<Series>;
    beforeStep(): void;
    isStable(): boolean;
    setCircularPositions(): void;
    repulsiveForces(): void;
    resolveSplitSeries(node: PackedBubblePoint): boolean;
    applyLimitBox(node: PackedBubblePoint, box: Record<string, number>): void;
}
declare namespace PackedBubbleLayout {
    /**
     * @optionparent series.packedbubble.layoutAlgorithm
     */
    interface Options extends ReingoldFruchtermanLayout.Options {
        /**
         * Type of the algorithm used when positioning bubbles.
         *
         * @apioption series.packedbubble.layoutAlgorithm.type
         */
        /**
         * The distance between two bubbles, when the algorithm starts to
         * treat two bubbles as overlapping. The `bubblePadding` is also the
         * expected distance between all the bubbles on simulation end.
         */
        bubblePadding?: number;
        /**
         * In case of split series, this option allows user to drag and
         * drop points between series, for changing point related series.
         *
         * @sample highcharts/demo/packed-bubble-project-status/
         *         Example of drag'n drop bubbles for bubble kanban
         */
        dragBetweenSeries?: boolean;
        enableSimulation?: boolean;
        friction?: number;
        gravitationalConstant?: number;
        /**
         * Initial layout algorithm for positioning nodes. Can be one of
         * the built-in options ("circle", "random") or a function where
         * positions should be set on each node (`this.nodes`) as
         * `node.plotX` and `node.plotY`.
         *
         * @sample highcharts/series-networkgraph/initial-positions/
         *         Initial positions with callback
         *
         * @type {"circle"|"random"|Function}
         *
         * @apioption series.packedbubble.layoutAlgorithm.initialPositions
         */
        /**
         *
         * @sample highcharts/series-packedbubble/initial-radius/
         *         Initial radius set to 200
         *
         * @extends plotOptions.networkgraph.layoutAlgorithm.initialPositionRadius
         *
         * @excluding states
         */
        initialPositionRadius?: number;
        /**
         * Integration type. Integration determines how forces are applied
         * on particles. The `packedbubble` integration is based on
         * the networkgraph `verlet` integration, where the new position
         * is based on a previous position without velocity:
         * `newPosition += previousPosition - newPosition`.
         *
         * @sample highcharts/series-networkgraph/forces/
         *
         * @apioption series.packedbubble.layoutAlgorithm.integration
         */
        marker?: PointMarkerOptions;
        maxIterations?: number;
        /**
         * Max speed that node can get in one iteration. In terms of
         * simulation, it's a maximum translation (in pixels) that a node
         * can move (in both, x and y, dimensions). While `friction` is
         * applied on all nodes, max speed is applied only for nodes that
         * move very fast, for example small or disconnected ones.
         *
         * @see [layoutAlgorithm.integration](#series.networkgraph.layoutAlgorithm.integration)
         *
         * @see [layoutAlgorithm.friction](#series.networkgraph.layoutAlgorithm.friction)
         */
        maxSpeed?: number;
        /**
         * Whether bubbles should interact with their parentNode to keep
         * them inside.
         */
        parentNodeLimit?: boolean;
        /**
         * Layout algorithm options for parent nodes.
         *
         * @extends plotOptions.networkgraph.layoutAlgorithm
         *
         * @excluding approximation, attractiveForce, enableSimulation,
         *            repulsiveForce, theta
         */
        parentNodeOptions?: Options;
        /**
         * Whether series should interact with each other or not. When
         * `parentNodeLimit` is set to true, thi option should be set to
         * false to avoid sticking points in wrong series parentNode.
         */
        seriesInteraction?: boolean;
        /**
         * Whether to split series into individual groups or to mix all
         * series together.
         *
         * @since 7.1.0
         *
         * @default false
         */
        splitSeries?: boolean;
    }
}
export default PackedBubbleLayout;
