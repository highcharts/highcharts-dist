import type ColorMapComposition from '../ColorMapComposition';
import type { DrawPointParams } from '../DrawPointUtilities';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type TreemapNode from './TreemapNode';
import type TreemapPointOptions from './TreemapPointOptions';
import type TreemapSeries from './TreemapSeries';
declare const PiePoint: typeof import("../Pie/PiePoint").default, ScatterPoint: typeof import("../Scatter/ScatterPoint").default;
declare class TreemapPoint extends ScatterPoint {
    drillId?: (boolean | string);
    isGroup?: boolean;
    imageUrl?: string;
    groupedPointsAmount: number;
    name: string;
    node: TreemapNode;
    options: TreemapPointOptions;
    parent?: string;
    simulatedValue?: number;
    series: TreemapSeries;
    shapeType: 'arc' | 'circle' | 'image' | 'path' | 'rect' | 'text';
    sortIndex?: number;
    value: (number | null);
    draw(params: DrawPointParams): void;
    getClassName(): string;
    /**
     * A tree point is valid if it has han id too, assume it may be a parent
     * item.
     *
     * @private
     * @function Highcharts.Point#isValid
     */
    isValid(): boolean;
    setState(state: StatesOptionsKey): void;
    shouldDraw(): boolean;
}
interface TreemapPoint extends ColorMapComposition.PointComposition {
    setVisible: typeof PiePoint.prototype.setVisible;
}
export default TreemapPoint;
