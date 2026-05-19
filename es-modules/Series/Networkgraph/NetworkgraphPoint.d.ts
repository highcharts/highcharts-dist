import type { DragNodesPoint } from '../DragNodesComposition';
import type NetworkgraphPointOptions from './NetworkgraphPointOptions';
import type NetworkgraphSeries from './NetworkgraphSeries';
import type { PointShortOptions } from '../../Core/Series/PointOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import NodesComposition from '../NodesComposition.js';
declare const Point: typeof import("../../Core/Series/Point").default;
declare class NetworkgraphPoint extends Point implements DragNodesPoint {
    dispX?: number;
    dispY?: number;
    fixedPosition: DragNodesPoint['fixedPosition'];
    prevX?: number;
    prevY?: number;
    /**
     * Destroy point. If it's a node, remove all links coming out of this
     * node. Then remove point from the layout.
     * @private
     */
    destroy(): void;
    /**
     * Return degree of a node. If node has no connections, it still has
     * deg=1.
     * @private
     */
    getDegree(): number;
    /**
     * Get presentational attributes of link connecting two nodes.
     * @private
     */
    getLinkAttributes(): SVGAttributes;
    /**
     * Get link path connecting two nodes.
     * @private
     * @return {Array<Highcharts.SVGPathArray>}
     *         Path: `['M', x, y, 'L', x, y]`
     */
    getLinkPath(): SVGPath;
    /**
     * Get mass fraction applied on two nodes connected to each other. By
     * default, when mass is equal to `1`, mass fraction for both nodes
     * equal to 0.5.
     * @private
     * @return {Highcharts.Dictionary<number>}
     *         For example `{ fromNode: 0.5, toNode: 0.5 }`
     */
    getMass(): Record<string, number>;
    /**
     * Basic `point.init()` and additional styles applied when
     * `series.draggable` is enabled.
     * @private
     */
    constructor(series: NetworkgraphSeries, options: (NetworkgraphPointOptions | PointShortOptions), x?: number);
    /**
     * @private
     */
    isValid(): boolean;
    /**
     * Redraw link's path.
     * @private
     */
    redrawLink(): void;
    /**
     * Common method for removing points and nodes in networkgraph. To
     * remove `link`, use `series.data[index].remove()`. To remove `node`
     * with all connections, use `series.nodes[index].remove()`.
     * @private
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or wait for an explicit call. When
     *        doing more operations on the chart, for example running
     *        `point.remove()` in a loop, it is best practice to set
     *        `redraw` to false and call `chart.redraw()` after.
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=false]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     */
    remove(redraw?: boolean, animation?: boolean): void;
    /**
     * Render link and add it to the DOM.
     * @private
     */
    renderLink(): void;
}
interface NetworkgraphPoint extends NodesComposition.PointComposition {
    className: NodesComposition.PointComposition['className'];
    degree: number;
    formatPrefix: NodesComposition.PointComposition['formatPrefix'];
    from: NodesComposition.PointComposition['from'];
    fromNode: NetworkgraphPoint;
    isNode: NodesComposition.PointComposition['isNode'];
    linksFrom: Array<NetworkgraphPoint>;
    linksTo: Array<NetworkgraphPoint>;
    mass: NodesComposition.PointComposition['mass'];
    options: NetworkgraphPointOptions;
    radius: number;
    series: NetworkgraphSeries;
    to: NodesComposition.PointComposition['to'];
    toNode: NetworkgraphPoint;
    getPointsCollection(): Array<NetworkgraphPoint>;
    getSum: NodesComposition.PointComposition['getSum'];
    hasShape: NodesComposition.PointComposition['hasShape'];
    offset: NodesComposition.PointComposition['offset'];
    setNodeState: NodesComposition.PointComposition['setState'];
}
export default NetworkgraphPoint;
