import type Chart from '../../Core/Chart/Chart';
import type { GraphIntegrationObject } from '../GraphLayoutComposition';
import type NetworkgraphPoint from './NetworkgraphPoint';
import type Point from '../../Core/Series/Point';
import type Series from '../../Core/Series/Series';
import QuadTree from './QuadTree.js';
import QuadTreeNode from './QuadTreeNode.js';
/**
 * Reingold-Fruchterman algorithm from
 * "Graph Drawing by Force-directed Placement" paper.
 * @private
 */
declare class ReingoldFruchtermanLayout {
    static compose(ChartClass: typeof Chart): void;
    approximation?: string;
    attractiveForce: Function;
    barycenter?: Record<string, number>;
    box: Record<string, number>;
    currentStep: number;
    diffTemperature?: number;
    enableSimulation?: boolean;
    forcedStop?: boolean;
    forces?: Array<string>;
    chart?: Chart;
    initialRendering: boolean;
    integration: GraphIntegrationObject;
    k?: number;
    links: Array<Point>;
    maxIterations?: number;
    nodes: Array<Point>;
    options: ReingoldFruchtermanLayout.Options;
    prevSystemTemperature?: number;
    quadTree: QuadTree;
    repulsiveForce: Function;
    series: Array<Series>;
    simulation: (false | number);
    startTemperature?: number;
    systemTemperature?: number;
    temperature?: number;
    beforeStep?(): void;
    init(options: ReingoldFruchtermanLayout.Options): void;
    updateSimulation(enable?: boolean): void;
    start(): void;
    step(): void;
    stop(): void;
    setArea(x: number, y: number, w: number, h: number): void;
    setK(): void;
    addElementsToCollection<T, C extends T>(elements: Array<C>, collection: Array<T>): void;
    removeElementFromCollection<T>(element: T, collection: Array<T>): void;
    clear(): void;
    resetSimulation(): void;
    restartSimulation(): void;
    setMaxIterations(maxIterations?: number): void;
    setTemperature(): void;
    setDiffTemperature(): void;
    setInitialRendering(enable: boolean): void;
    createQuadTree(): void;
    initPositions(): void;
    setCircularPositions(): void;
    setRandomPositions(): void;
    force(name: string, ...args: Array<unknown>): void;
    barycenterForces(): void;
    getBarycenter(): Record<string, number>;
    barnesHutApproximation(node: Point, quadNode: QuadTreeNode): (boolean | undefined);
    repulsiveForces(): void;
    attractiveForces(): void;
    applyLimits(): void;
    /**
     * External box that nodes should fall. When hitting an edge, node
     * should stop or bounce.
     * @private
     */
    applyLimitBox(node: Point, box: Record<string, number>): void;
    /**
     * From "A comparison of simulated annealing cooling strategies" by
     * Nourani and Andresen work.
     * @private
     */
    coolDown(temperature: number, temperatureStep: number, currentStep: number): number;
    isStable(): boolean;
    getSystemTemperature(): number;
    vectorLength(vector: Record<string, number>): number;
    getDistR(nodeA: NetworkgraphPoint, nodeB: (NetworkgraphPoint | QuadTreeNode)): number;
    getDistXY(nodeA: Point, nodeB: (Point | QuadTreeNode)): Record<string, number>;
}
declare namespace ReingoldFruchtermanLayout {
    /**
     * @optionparent series.networkgraph.layoutAlgorithm
     */
    interface Options {
        /**
         * Approximation used to calculate repulsive forces affecting nodes.
         * By default, when calculating net force, nodes are compared
         * against each other, which gives O(N^2) complexity. Using
         * Barnes-Hut approximation, we decrease this to O(N log N), but the
         * resulting graph will have different layout. Barnes-Hut
         * approximation divides space into rectangles via quad tree, where
         * forces exerted on nodes are calculated directly for nearby cells,
         * and for all others, cells are treated as a separate node with
         * center of mass.
         *
         * @see [layoutAlgorithm.theta](#series.networkgraph.layoutAlgorithm.theta)
         *
         * @sample highcharts/series-networkgraph/barnes-hut-approximation/
         *         A graph with Barnes-Hut approximation
         *
         * @since 7.1.0
         */
        approximation?: ('barnes-hut' | 'none');
        /**
         * Attraction force applied on a node which is connected to another
         * node by a link. Passed are two arguments:
         * - `d` - which is current distance between two nodes
         * - `k` - which is desired distance between two nodes
         *
         * In `verlet` integration, defaults to:
         * `function (d, k) { return (k - d) / d; }`
         *
         * @see [layoutAlgorithm.integration](#series.networkgraph.layoutAlgorithm.integration)
         *
         * @sample highcharts/series-networkgraph/forces/
         *         Custom forces with Euler integration
         *
         * @sample highcharts/series-networkgraph/cuboids/
         *         Custom forces with Verlet integration
         *
         * @default function (d, k) { return k * k / d; }
         */
        attractiveForce?: Function;
        /**
         * Experimental. Enables live simulation of the algorithm
         * implementation. All nodes are animated as the forces applies on
         * them.
         *
         * @sample highcharts/demo/network-graph/
         *         Live simulation enabled
         */
        enableSimulation?: boolean;
        /**
         * Friction applied on forces to prevent nodes rushing to fast to
         * the desired positions.
         */
        friction?: number;
        /**
         * Gravitational const used in the barycenter force of the
         * algorithm.
         *
         * @sample highcharts/series-networkgraph/forces/
         *         Custom forces with Euler integration
         */
        gravitationalConstant?: number;
        /**
         * When `initialPositions` are set to 'circle',
         * `initialPositionRadius` is a distance from the center of circle,
         * in which nodes are created.
         *
         * @default 1
         *
         * @since 7.1.0
         */
        initialPositionRadius?: number;
        /**
         * Initial layout algorithm for positioning nodes. Can be one of
         * built-in options ("circle", "random") or a function where
         * positions should be set on each node (`this.nodes`) as
         * `node.plotX` and `node.plotY`
         *
         * @sample highcharts/series-networkgraph/initial-positions/
         *         Initial positions with callback
         */
        initialPositions?: ('circle' | 'random' | Function);
        /**
         * Integration type. Available options are `'euler'` and `'verlet'`.
         * Integration determines how forces are applied on particles. In
         * Euler integration, force is applied direct as
         * `newPosition += velocity;`.
         * In Verlet integration, new position is based on a previous
         * position without velocity:
         * `newPosition += previousPosition - newPosition`.
         *
         * Note that different integrations give different results as forces
         * are different.
         *
         * In Highcharts v7.0.x only `'euler'` integration was supported.
         *
         * @sample highcharts/series-networkgraph/integration-comparison/
         *         Comparison of Verlet and Euler integrations
         *
         * @validvalue ["euler","verlet"]
         *
         * @since 7.1.0
         */
        integration?: string;
        /**
         * Ideal length (px) of the link between two nodes. When not
         * defined, length is calculated as:
         * `Math.pow(availableWidth * availableHeight / nodesLength, 0.4);`
         *
         * Note: Because of the algorithm specification, length of each link
         * might be not exactly as specified.
         *
         * @sample highcharts/series-networkgraph/styled-links/
         *         Numerical values
         */
        linkLength?: number;
        /**
         * Max number of iterations before algorithm will stop. In general,
         * algorithm should find positions sooner, but when rendering huge
         * number of nodes, it is recommended to increase this value as
         * finding perfect graph positions can require more time.
         */
        maxIterations?: number;
        /**
         * Verlet integration only.
         * Max speed that node can get in one iteration. In terms of
         * simulation, it's a maximum translation (in pixels) that node can
         * move (in both, x and y, dimensions). While `friction` is applied
         * on all nodes, max speed is applied only for nodes that move very
         * fast, for example small or disconnected ones.
         *
         * @see [layoutAlgorithm.integration](#series.networkgraph.layoutAlgorithm.integration)
         *
         * @see [layoutAlgorithm.friction](#series.networkgraph.layoutAlgorithm.friction)
         *
         * @since 7.1.0
         */
        maxSpeed?: number;
        /**
         * Repulsive force applied on a node. Passed are two arguments:
         * - `d` - which is current distance between two nodes
         * - `k` - which is desired distance between two nodes
         *
         * In `verlet` integration, defaults to:
         * `function (d, k) { return (k - d) / d * (k > d ? 1 : 0) }`
         *
         * @see [layoutAlgorithm.integration](#series.networkgraph.layoutAlgorithm.integration)
         *
         * @sample highcharts/series-networkgraph/forces/
         *         Custom forces with Euler integration
         *
         * @sample highcharts/series-networkgraph/cuboids/
         *         Custom forces with Verlet integration
         *
         * @default function (d, k) { return k * k / d; }
         */
        repulsiveForce?: Function;
        /**
         * Barnes-Hut approximation only.
         * Determines when distance between cell and node is small enough
         * to calculate forces. Value of `theta` is compared directly with
         * quotient `s / d`, where `s` is the size of the cell, and `d` is
         * distance between center of cell's mass and currently compared
         * node.
         *
         * @see [layoutAlgorithm.approximation](#series.networkgraph.layoutAlgorithm.approximation)
         *
         * @since 7.1.0
         */
        theta?: number;
        /**
         * Type of the algorithm used when positioning nodes.
         *
         * @validvalue ["reingold-fruchterman"]
         */
        type?: string;
    }
}
export default ReingoldFruchtermanLayout;
