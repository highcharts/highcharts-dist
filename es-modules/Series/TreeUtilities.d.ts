import type CorePoint from '../Core/Series/Point';
import type CorePointOptions from '../Core/Series/PointOptions';
import type SankeySeries from '../Series/Sankey/SankeySeries';
import type TreegraphSeries from '../Series/Treegraph/TreegraphSeries';
import type CoreSeries from '../Core/Series/Series';
import type ColorType from '../Core/Color/ColorType';
/**
 * @private
 */
declare function getColor(node: TreeUtilities.NodeObject, options: TreeUtilities.GetColorOptions): TreeUtilities.ColorObject;
/**
 * Creates a map from level number to its given options.
 *
 * @private
 *
 * @param {Object} params
 * Object containing parameters.
 * - `defaults` Object containing default options. The default options are
 *   merged with the userOptions to get the final options for a specific
 *   level.
 * - `from` The lowest level number.
 * - `levels` User options from series.levels.
 * - `to` The highest level number.
 *
 * @return {Highcharts.Dictionary<object>|null}
 * Returns a map from level number to its given options.
 */
declare function getLevelOptions<T extends TreeUtilities.Series>(params: any): (T['mapOptionsToLevel']);
/**
 * @private
 * @todo Combine buildTree and buildNode with setTreeValues
 * @todo Remove logic from Treemap and make it utilize this mixin.
 */
declare function setTreeValues<T extends TreeUtilities.Series>(tree: T['tree'], options: TreeUtilities.SetTreeValuesOptions<T>): T['tree'];
/**
 * Update the rootId property on the series. Also makes sure that it is
 * accessible to exporting.
 *
 * @private
 *
 * @param {Object} series
 * The series to operate on.
 *
 * @return {string}
 * Returns the resulting rootId after update.
 */
declare function updateRootId(series: any): string;
/**
 * Get the node width, which relies on the plot width and the nodeDistance
 * option.
 *
 * @private
 */
declare function getNodeWidth(series: SankeySeries | TreegraphSeries, columnCount: number): number;
declare namespace TreeUtilities {
    interface ColorObject {
        color: ColorType;
        colorIndex: number;
    }
    interface GetColorOptions {
        colorIndex?: number;
        colors?: Array<ColorType>;
        index?: number;
        mapOptionsToLevel?: any;
        parentColor?: ColorType;
        parentColorIndex?: number;
        series: CoreSeries;
        siblings?: number;
    }
    interface NodeObject {
        children: Array<NodeObject>;
        childrenTotal?: number;
        i: number;
        id: string;
        isLeaf?: boolean;
        levelDynamic?: number;
        level: number;
        name?: string;
        val: number;
        visible: boolean;
    }
    interface Point extends CorePoint {
        options: PointOptions;
    }
    interface PointOptions extends CorePointOptions {
        value?: (number | null);
    }
    interface Series extends CoreSeries {
        mapOptionsToLevel: any;
        points: Array<Point>;
        tree: NodeObject;
    }
    interface SetTreeValuesBeforeCallbackFunction<T extends Series> {
        (node: T['tree'], options: SetTreeValuesOptions<T>): T['tree'];
    }
    interface SetTreeValuesOptions<T extends Series> {
        before?: SetTreeValuesBeforeCallbackFunction<T>;
        idRoot: string;
        index?: number;
        levelIsConstant?: boolean;
        mapIdToNode: Record<string, NodeObject>;
        points: T['points'];
        series: T;
        siblings?: number;
        visible?: boolean;
    }
}
declare const TreeUtilities: {
    getColor: typeof getColor;
    getLevelOptions: typeof getLevelOptions;
    getNodeWidth: typeof getNodeWidth;
    setTreeValues: typeof setTreeValues;
    updateRootId: typeof updateRootId;
};
export default TreeUtilities;
