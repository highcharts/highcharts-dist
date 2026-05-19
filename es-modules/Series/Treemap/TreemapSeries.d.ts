import type Chart from '../../Core/Chart/Chart';
import type ColorAxisComposition from '../../Core/Axis/Color/ColorAxisComposition';
import type ColorType from '../../Core/Color/ColorType';
import type DataExtremesObject from '../../Core/Series/DataExtremesObject';
import type DataLabelOptions from '../../Core/Series/DataLabelOptions';
import type { DeepPartial } from '../../Shared/Types';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
import type { TreemapSeriesLevelOptions, TreemapSeriesOptions } from './TreemapSeriesOptions';
import ColorMapComposition from '../ColorMapComposition.js';
import Series from '../../Core/Series/Series.js';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
import TreemapAlgorithmGroup from './TreemapAlgorithmGroup.js';
import TreemapNode from './TreemapNode.js';
import TreemapPoint from './TreemapPoint.js';
import TreemapUtilities from './TreemapUtilities.js';
import TU from '../TreeUtilities.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.treemap
 *
 * @augments Highcharts.Series
 */
declare class TreemapSeries extends ScatterSeries {
    static defaultOptions: TreemapSeriesOptions;
    static compose(SeriesClass: typeof Series): void;
    axisRatio: number;
    colorValueData?: Array<number>;
    colorAxis?: ColorAxisComposition.SeriesComposition['colorAxis'];
    data: Array<TreemapPoint>;
    drillUpButton?: SVGElement;
    idPreviousRoot?: string;
    mapOptionsToLevel: Record<string, TreemapSeriesLevelOptions>;
    nodeMap: Record<string, TreemapNode>;
    nodeList: TreemapNode[];
    options: TreemapSeriesOptions;
    parentList?: TreemapSeries.ListOfParentsObject;
    points: Array<TreemapPoint>;
    private hadOutsideDataLabels?;
    private hasOutsideDataLabels?;
    rootNode: string;
    private simulation;
    tree: TreemapNode;
    level?: number;
    algorithmCalcPoints(directionChange: boolean, last: boolean, group: TreemapAlgorithmGroup, childrenArea: Array<unknown>): void;
    algorithmFill(directionChange: boolean, parent: TreemapNode.NodeValuesObject, children: Array<TreemapNode>): Array<TreemapNode.NodeValuesObject>;
    algorithmLowAspectRatio(directionChange: boolean, parent: TreemapNode.NodeValuesObject, children: Array<TreemapNode>): Array<TreemapNode.NodeValuesObject>;
    /**
     * Over the alignment method by setting z index.
     * @private
     */
    alignDataLabel(point: TreemapPoint, dataLabel: SVGLabel, labelOptions: DataLabelOptions): void;
    applyTreeGrouping(): void;
    /**
     * Recursive function which calculates the area for all children of a
     * node.
     *
     * @private
     * @function Highcharts.Series#calculateChildrenAreas
     *
     * @param {Object} parent
     * The node which is parent to the children.
     *
     * @param {Object} area
     * The rectangular area of the parent.
     */
    calculateChildrenAreas(parent: TreemapNode, area: TreemapNode.NodeValuesObject): void;
    /**
     * Create level list.
     * @private
     */
    createList(e: any): any;
    /**
     * Extend drawDataLabels with logic to handle custom options related to
     * the treemap series:
     *
     * - Points which is not a leaf node, has dataLabels disabled by
     *   default.
     *
     * - Options set on series.levels is merged in.
     *
     * - Width of the dataLabel is set to match the width of the point
     *   shape.
     *
     * @private
     */
    drawDataLabels(): void;
    /**
     * Override drawPoints
     * @private
     */
    drawPoints(points?: Array<TreemapPoint>): void;
    /**
     * Finds the drill id for a parent node. Returns false if point should
     * not have a click event.
     * @private
     */
    drillToByGroup(point: TreemapPoint): (boolean | string);
    /**
     * Finds the drill id for a leaf node. Returns false if point should not
     * have a click event
     * @private
     */
    drillToByLeaf(point: TreemapPoint): (boolean | string);
    /**
     * @todo remove this function at a suitable version.
     * @private
     */
    drillToNode(id: string, redraw?: boolean): void;
    drillUp(): void;
    getExtremes(): DataExtremesObject;
    /**
     * Creates an object map from parent id to children index.
     *
     * @private
     * @function Highcharts.Series#getListOfParents
     *
     * @param {Highcharts.SeriesTreemapDataOptions} [data]
     *        List of points set in options.
     *
     * @param {Array<string>} [existingIds]
     *        List of all point ids.
     *
     * @return {Object}
     *         Map from parent id to children index in data.
     */
    getListOfParents(data: Array<TreemapPoint>, existingIds: Array<string>): TreemapSeries.ListOfParentsObject;
    /**
     * Creates a tree structured object from the series points.
     * @private
     */
    getTree(): this['tree'];
    buildTree(id: string, index: number, level: number, list: Record<string, number[]>, parent?: string): this['tree'];
    /**
     * Define hasData function for non-cartesian series. Returns true if the
     * series has points at all.
     * @private
     */
    hasData(): boolean;
    init(chart: Chart, options: DeepPartial<TreemapSeriesOptions>): void;
    /**
     * Add drilling on the suitable points.
     * @private
     */
    onClickDrillToNode(event: {
        point: TreemapPoint;
    }): void;
    /**
     * Get presentational attributes
     * @private
     */
    pointAttribs(point?: TreemapPoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Set the node's color recursively, from the parent down.
     * @private
     */
    setColorRecursive(node: TreemapNode, parentColor?: ColorType, colorIndex?: number, index?: number, siblings?: number): void;
    setPointValues(): void;
    /**
     * Sets a new root node for the series.
     *
     * @private
     * @function Highcharts.Series#setRootNode
     *
     * @param {string} id
     * The id of the new root node.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart or not.
     *
     * @param {Object} [eventArguments]
     * Arguments to be accessed in event handler.
     *
     * @param {string} [eventArguments.newRootId]
     * Id of the new root.
     *
     * @param {string} [eventArguments.previousRootId]
     * Id of the previous root.
     *
     * @param {boolean} [eventArguments.redraw]
     * Whether to redraw the chart after.
     *
     * @param {Object} [eventArguments.series]
     * The series to update the root of.
     *
     * @param {string} [eventArguments.trigger]
     * The action which triggered the event. Undefined if the setRootNode is
     * called directly.
     *
     * @emits Highcharts.Series#event:setRootNode
     */
    setRootNode(id: string, redraw?: boolean, eventArguments?: TreemapSeries.SetRootNodeObject): void;
    /**
     * Workaround for `inactive` state. Since `series.opacity` option is
     * already reserved, don't use that state at all by disabling
     * `inactiveOtherPoints` and not inheriting states by points.
     * @private
     */
    setState(state: StatesOptionsKey): void;
    setTreeValues(tree: TreemapNode): TreemapNode;
    sliceAndDice(parent: TreemapNode.NodeValuesObject, children: Array<TreemapNode>): Array<TreemapNode.NodeValuesObject>;
    squarified(parent: TreemapNode.NodeValuesObject, children: Array<TreemapNode>): Array<TreemapNode.NodeValuesObject>;
    strip(parent: TreemapNode.NodeValuesObject, children: Array<TreemapNode>): Array<TreemapNode.NodeValuesObject>;
    stripes(parent: TreemapNode.NodeValuesObject, children: Array<TreemapNode>): Array<TreemapNode.NodeValuesObject>;
    translate(tree?: this['tree']): void;
}
interface TreemapSeries extends ColorMapComposition.SeriesComposition, TU.Series {
    colorAttribs: ColorMapComposition.SeriesComposition['colorAttribs'];
    colorKey: string;
    directTouch: boolean;
    getExtremesFromAll: boolean;
    optionalAxis: string;
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof TreemapPoint;
    NodeClass: typeof TreemapNode;
    trackerGroups: Array<string>;
    utils: {
        recursive: typeof TreemapUtilities.recursive;
    };
}
declare namespace TreemapSeries {
    interface AreaObject {
        direction: number;
    }
    type ListOfParentsObject = Record<string, Array<number>>;
    interface SetRootNodeObject {
        newRootId?: string;
        previousRootId?: string;
        redraw?: boolean;
        series?: object;
        trigger?: string;
    }
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        treemap: typeof TreemapSeries;
    }
}
export default TreemapSeries;
