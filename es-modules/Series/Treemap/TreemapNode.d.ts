import type TreemapSeries from './TreemapSeries';
import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type TreemapPoint from './TreemapPoint';
declare class TreemapNode {
    childrenTotal: number;
    ignore?: boolean;
    isLeaf?: boolean;
    isGroup?: boolean;
    levelDynamic?: number;
    name?: string;
    parent?: string;
    parentNode?: TreemapNode;
    pointValues?: TreemapNode.NodeValuesObject;
    sortIndex?: number;
    values?: TreemapNode.NodeValuesObject;
    visible: boolean;
    zIndex?: number;
    init(id: string, i: number, children: Array<TreemapNode>, height: number, level: number, series: TreemapSeries, parent?: string): TreemapNode;
}
interface TreemapNode {
    height: number;
    i: number;
    id: string;
    children: Array<TreemapNode>;
    level: number;
    series: TreemapSeries;
    val: number;
    point: TreemapPoint;
}
declare namespace TreemapNode {
    interface NodeValuesObject extends BBoxObject {
        direction: number;
        val: number;
    }
}
export default TreemapNode;
