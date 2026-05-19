import type Chart from '../../Core/Chart/Chart';
import type { DragNodesSeries } from '../DragNodesComposition';
import type NetworkgraphChart from './NetworkgraphChart';
import type NetworkgraphSeriesOptions from './NetworkgraphSeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import NetworkgraphPoint from './NetworkgraphPoint.js';
import NodesComposition from '../NodesComposition.js';
import ReingoldFruchtermanLayout from './ReingoldFruchtermanLayout.js';
declare const Series: typeof import("../../Core/Series/Series").default;
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        layout?: ReingoldFruchtermanLayout;
    }
}
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.networkgraph
 *
 * @extends Highcharts.Series
 */
declare class NetworkgraphSeries extends Series {
    static defaultOptions: import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../../Core/Series/Series").default> & NetworkgraphSeriesOptions;
    static compose(ChartClass: typeof Chart): void;
    data: Array<NetworkgraphPoint>;
    nodes: Array<NetworkgraphPoint>;
    options: NetworkgraphSeriesOptions;
    points: Array<NetworkgraphPoint>;
    deferDataLabels: boolean;
    /**
     * Defer the layout.
     * Each series first registers all nodes and links, then layout
     * calculates all nodes positions and calls `series.render()` in every
     * simulation step.
     *
     * Note:
     * Animation is done through `requestAnimationFrame` directly, without
     * `Highcharts.animate()` use.
     * @private
     */
    deferLayout(): void;
    /**
     * @private
     */
    destroy(): void;
    /**
     * Extend generatePoints by adding the nodes, which are Point objects
     * but pushed to the this.nodes array.
     * @private
     */
    generatePoints(): void;
    /**
     * In networkgraph, series.points refers to links,
     * but series.nodes refers to actual points.
     * @private
     */
    getPointsCollection(): Array<NetworkgraphPoint>;
    /**
     * Set index for each node. Required for proper `node.update()`.
     * Note that links are indexed out of the box in `generatePoints()`.
     *
     * @private
     */
    indexateNodes(): void;
    /**
     * Extend init with base event, which should stop simulation during
     * update. After data is updated, `chart.render` resumes the simulation.
     * @private
     */
    init(chart: NetworkgraphChart, options: Partial<NetworkgraphSeriesOptions>): NetworkgraphSeries;
    /**
     * Extend the default marker attribs by using a non-rounded X position,
     * otherwise the nodes will jump from pixel to pixel which looks a bit
     * jaggy when approaching equilibrium.
     * @private
     */
    markerAttribs(point: NetworkgraphPoint, state?: StatesOptionsKey): SVGAttributes;
}
interface NetworkgraphSeries extends DragNodesSeries, NodesComposition.SeriesComposition {
    pointClass: typeof NetworkgraphPoint;
    chart: NetworkgraphChart;
    data: Array<NetworkgraphPoint>;
    directTouch: boolean;
    /**
     * Array of internal forces. Each force should be later defined in
     * integrations.js.
     * @private
     */
    forces: Array<string>;
    hasDraggableNodes: boolean;
    isCartesian: boolean;
    layout: ReingoldFruchtermanLayout;
    nodeLookup: NodesComposition.SeriesComposition['nodeLookup'];
    nodes: Array<NetworkgraphPoint>;
    noSharedTooltip: boolean;
    pointArrayMap: Array<string>;
    requireSorting: boolean;
    trackerGroups: Array<string>;
    createNode: NodesComposition.SeriesComposition['createNode'];
    drawGraph?(): void;
    drawDataLabels(): void;
    pointAttribs(point?: NetworkgraphPoint, state?: StatesOptionsKey): SVGAttributes;
    render(): void;
    setState(state: StatesOptionsKey, inherit?: boolean): void;
    translate(): void;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        networkgraph: typeof NetworkgraphSeries;
    }
}
export default NetworkgraphSeries;
