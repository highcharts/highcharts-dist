import type PositionObject from '../../Core/Renderer/PositionObject';
import type TreemapNode from './TreemapNode';
declare class TreemapAlgorithmGroup {
    constructor(h: number, w: number, d: number, p: TreemapAlgorithmGroup.PlotObject);
    direction: number;
    elArr: Array<number>;
    height: number;
    lH: number;
    lP: TreemapAlgorithmGroup.LPObject;
    lW: number;
    nH: number;
    nW: number;
    plot: TreemapAlgorithmGroup.PlotObject;
    startDirection: number;
    total: number;
    width: number;
    addElement(el: number): void;
    reset(): void;
}
declare namespace TreemapAlgorithmGroup {
    interface LPObject {
        lH: number;
        lR: number;
        lW: number;
        nH: number;
        nR: number;
        nW: number;
        total: number;
        aspectRatio(w: number, h: number): number;
    }
    interface PlotObject extends PositionObject {
        parent: TreemapNode.NodeValuesObject;
    }
}
export default TreemapAlgorithmGroup;
