import type TreegraphSeriesOptions from './TreegraphSeriesOptions.js';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel.js';
declare const TreemapSeries: typeof import("../Treemap/TreemapSeries.js").default;
import TreegraphNode from './TreegraphNode.js';
import TreegraphPoint from './TreegraphPoint.js';
import TreegraphLink from './TreegraphLink.js';
import TreegraphLayout from './TreegraphLayout.js';
import { TreegraphSeriesLevelOptions } from './TreegraphSeriesOptions.js';
import TreemapPoint from '../Treemap/TreemapPoint.js';
interface LayoutModifiers {
    ax: number;
    bx: number;
    ay: number;
    by: number;
}
/**
 * The Treegraph series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.treegraph
 *
 * @augments Highcharts.Series
 */
declare class TreegraphSeries extends TreemapSeries {
    static defaultOptions: TreegraphSeriesOptions;
    data: Array<TreegraphPoint>;
    options: TreegraphSeriesOptions;
    points: Array<TreegraphPoint>;
    layoutModifier: LayoutModifiers;
    nodeMap: Record<string, TreegraphNode>;
    tree: TreegraphNode;
    nodeList: Array<TreegraphNode>;
    layoutAlgorithm: TreegraphLayout;
    links: Array<TreegraphLink>;
    mapOptionsToLevel: Record<string, TreegraphSeriesLevelOptions>;
    init(): void;
    /**
     * Calculate `a` and `b` parameters of linear transformation, where
     * `finalPosition = a * calculatedPosition + b`.
     *
     * @return {LayoutModifiers} `a` and `b` parameter for x and y direction.
     */
    private getLayoutModifiers;
    private getLinks;
    buildTree(id: string, index: number, level: number, list: Record<string, number[]>, parent?: string): this['tree'];
    markerAttribs(): SVGAttributes;
    setCollapsedStatus(node: TreegraphNode, visibility: boolean): void;
    drawTracker(): void;
    /**
     * Run pre-translation by generating the nodeColumns.
     * @private
     */
    translate(): void;
    translateLink(link: TreegraphLink): void;
    /**
     * Private method responsible for adjusting the dataLabel options for each
     * node-point individually.
     */
    drawNodeLabels(points: Array<TreegraphPoint>): void;
    /**
     * Override alignDataLabel so that position is always calculated and the
     * label is faded in and out instead of hidden/shown when collapsing and
     * expanding nodes.
     */
    alignDataLabel(point: TreemapPoint, dataLabel: SVGLabel): void;
    /**
     * Treegraph has two separate collections of nodes and lines,
     * render dataLabels for both sets.
     */
    drawDataLabels(): void;
    destroy(): void;
    /**
     * Return the presentational attributes.
     * @private
     */
    pointAttribs(point?: TreegraphPoint, state?: StatesOptionsKey): SVGAttributes;
    drawPoints(): void;
    /**
     * Run translation operations for one node.
     * @private
     */
    translateNode(point: TreegraphPoint): void;
}
interface TreegraphSeries {
    inverted?: boolean;
    pointClass: typeof TreegraphPoint;
    NodeClass: typeof TreegraphNode;
    LinkClass: typeof TreegraphLink;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        treegraph: typeof TreegraphSeries;
    }
}
export default TreegraphSeries;
