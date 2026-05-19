import type DataLabelOptions from '../../Core/Series/DataLabelOptions';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type SunburstPointOptions from './SunburstPointOptions';
import type { SunburstSeriesLevelOptions, SunburstSeriesOptions } from './SunburstSeriesOptions';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
import CU from '../CenteredUtilities.js';
declare const TreemapSeries: typeof import("../Treemap/TreemapSeries").default;
import SunburstPoint from './SunburstPoint.js';
import SunburstUtilities from './SunburstUtilities.js';
import SunburstNode from './SunburstNode.js';
declare class SunburstSeries extends TreemapSeries {
    static defaultOptions: SunburstSeriesOptions;
    center: Array<number>;
    data: Array<SunburstPoint>;
    mapOptionsToLevel: Record<string, SunburstSeriesLevelOptions>;
    nodeMap: Record<string, SunburstNode>;
    options: SunburstSeriesOptions;
    points: Array<SunburstPoint>;
    shapeRoot?: SunburstNode.NodeValuesObject;
    startAndEndRadians: CU.RadianAngles;
    tree: SunburstNode;
    alignDataLabel(point: SunburstPoint, dataLabel: SVGLabel, labelOptions: DataLabelOptions): void;
    /**
     * Animate the slices in. Similar to the animation of polar charts.
     * @private
     */
    animate(init?: boolean): void;
    drawPoints(): void;
    /**
     * The layout algorithm for the levels.
     * @private
     */
    layoutAlgorithm(parent: SunburstNode.NodeValuesObject, children: Array<SunburstNode>, options: (SunburstSeriesOptions | SunburstSeriesLevelOptions)): Array<SunburstNode.NodeValuesObject>;
    setRootNode(id: string, redraw?: boolean, eventArguments?: SunburstSeries.SetRootNodeObject): void;
    /**
     * Set the shape arguments on the nodes. Recursive from root down.
     * @private
     */
    setShapeArgs(parent: SunburstNode, parentValues: SunburstNode.NodeValuesObject, mapOptionsToLevel: Record<string, SunburstSeriesLevelOptions>): void;
    translate(this: SunburstSeries): void;
}
interface SunburstSeries {
    getCenter: typeof CU['getCenter'];
    pointClass: typeof SunburstPoint;
    utils: typeof SunburstUtilities;
    NodeClass: typeof SunburstNode;
}
declare namespace SunburstSeries {
    interface AnimationParams {
        center: PositionObject;
        idPreviousRoot?: string;
        idRoot: string;
        innerR: number;
        point: SunburstPoint;
        radians: CU.RadianAngles;
        shapeExisting: SunburstNode.NodeValuesObject;
        shapePreviousRoot?: SunburstNode.NodeValuesObject;
        shapeRoot?: SunburstNode.NodeValuesObject;
        visible: boolean;
    }
    interface DlOptionsParams {
        level: SunburstSeriesLevelOptions;
        optionsPoint: SunburstPointOptions;
        point: SunburstPoint;
        shapeArgs: SunburstNode.NodeValuesObject;
    }
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
        sunburst: typeof SunburstSeries;
    }
}
export default SunburstSeries;
