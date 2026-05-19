import type TreegraphPointOptions from './TreegraphPointOptions';
import type TreegraphNode from './TreegraphNode';
import type TreegraphLink from './TreegraphLink';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type { CollapseButtonOptions } from './TreegraphSeriesOptions';
declare const TreemapPoint: typeof import("../Treemap/TreemapPoint").default;
import TreegraphSeries from './TreegraphSeries';
/**
 * @private
 * @class
 */
declare class TreegraphPoint extends TreemapPoint {
    collapseButton?: SVGElement;
    collapseButtonOptions?: CollapseButtonOptions;
    collapsed?: boolean;
    dataLabelOnHidden: boolean;
    isLink: boolean;
    level?: number;
    linkToParent?: TreegraphLink;
    node: TreegraphNode;
    options: TreegraphPointOptions;
    series: TreegraphSeries;
    draw(): void;
    renderCollapseButton(): void;
    toggleCollapse(state?: boolean): void;
    destroy(): void;
    getCollapseBtnPosition(btnOptions: CollapseButtonOptions): {
        x: number;
        y: number;
    };
    setState: (state?: import("../../Core/Series/StatesOptions").StatesOptionsKey, move?: boolean) => void;
}
export default TreegraphPoint;
