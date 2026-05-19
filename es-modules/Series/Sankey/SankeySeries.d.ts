import type Chart from '../../Core/Chart/Chart';
import type SankeyDataLabelOptions from './SankeyDataLabelOptions';
import type SankeyPointOptions from './SankeyPointOptions';
import type { SankeySeriesLevelOptions, SankeySeriesOptions } from './SankeySeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import NodesComposition from '../NodesComposition.js';
import SankeyPoint from './SankeyPoint.js';
import SankeyColumnComposition from './SankeyColumnComposition.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.sankey
 *
 * @augments Highcharts.Series
 */
declare class SankeySeries extends ColumnSeries {
    static defaultOptions: import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../../Core/Series/Series").default> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Column/ColumnSeries").default> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<SankeySeries>;
    /**
     * @private
     */
    protected static getDLOptions(params: {
        optionsPoint: SankeyPointOptions;
        level: SankeySeriesLevelOptions;
    }): SankeyDataLabelOptions;
    colDistance: number;
    data: Array<SankeyPoint>;
    group: SVGElement;
    mapOptionsToLevel?: (Record<string, SankeySeriesLevelOptions> | null);
    nodeColumns?: Array<SankeyColumnComposition.ArrayComposition<SankeyPoint>>;
    nodeLookup: Record<string, SankeyPoint>;
    nodePadding: number;
    nodes: Array<SankeyPoint>;
    nodeWidth: number;
    options: SankeySeriesOptions;
    points: Array<SankeyPoint>;
    translationFactor: number;
    /**
     * Create node columns by analyzing the nodes and the relations between
     * incoming and outgoing links.
     * @private
     */
    createNodeColumns(): Array<SankeyColumnComposition.ArrayComposition<SankeyPoint>>;
    /**
     * Order the nodes, starting with the root node(s). (#9818)
     * @private
     */
    order(node: SankeyPoint, level: number, visited?: Set<SankeyPoint>): void;
    /**
     * Extend generatePoints by adding the nodes, which are Point objects
     * but pushed to the this.nodes array.
     * @private
     */
    generatePoints(): void;
    /**
     * Overridable function to get node padding, overridden in dependency
     * wheel series type.
     * @private
     */
    getNodePadding(): number;
    /**
     * Define hasData function for non-cartesian series.
     * @private
     * @return {boolean}
     *         Returns true if the series has points at all.
     */
    hasData(): boolean;
    /**
     * Return the presentational attributes.
     * @private
     */
    pointAttribs(point?: SankeyPoint, state?: StatesOptionsKey): SVGAttributes;
    drawTracker(): void;
    drawPoints(): void;
    drawDataLabels(): void;
    /**
     * Run pre-translation by generating the nodeColumns.
     * @private
     */
    translate(): void;
    /**
     * Run translation operations for one link.
     * @private
     */
    translateLink(point: SankeyPoint): void;
    /**
     * Run translation operations for one node.
     * @private
     */
    translateNode(node: SankeyPoint, column: SankeyColumnComposition.ArrayComposition<SankeyPoint>): void;
}
interface SankeySeries extends NodesComposition.SeriesComposition {
    animate(init?: boolean): void;
    createNode(id: string): SankeyPoint;
    destroy: NodesComposition.SeriesComposition['destroy'];
    forceDL: boolean;
    init(chart: Chart, options: SankeySeriesOptions): void;
    invertible: boolean;
    isCartesian: boolean;
    noSharedTooltip: boolean;
    orderNodes: boolean;
    pointArrayMap: Array<string>;
    pointClass: typeof SankeyPoint;
    remove: typeof ColumnSeries.prototype.remove;
    setData: NodesComposition.SeriesComposition['setData'];
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        sankey: typeof SankeySeries;
    }
}
export default SankeySeries;
