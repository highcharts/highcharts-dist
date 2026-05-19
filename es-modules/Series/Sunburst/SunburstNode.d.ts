import type SunburstSeriesOptions from './SunburstSeriesOptions.js';
import type ColorType from '../../Core/Color/ColorType.js';
import type SunburstSeries from './SunburstSeries.js';
import type CU from '../CenteredUtilities.js';
import type TU from '../TreeUtilities.js';
import TreemapNode from '../Treemap/TreemapNode.js';
declare class SunburstNode extends TreemapNode {
    color?: ColorType;
    colorIndex?: number;
    shapeArgs?: SunburstNode.NodeValuesObject;
    sliced?: boolean;
    values?: SunburstNode.NodeValuesObject;
}
interface SunburstNode {
    series: SunburstSeries;
    children: Array<SunburstNode>;
}
declare namespace SunburstNode {
    interface NodeValuesObject extends CU.RadianAngles, TreemapNode.NodeValuesObject, TU.SetTreeValuesOptions<SunburstSeries> {
        color: ColorType;
        mapOptionsToLevel: SunburstSeriesOptions['levels'];
        borderRadius?: number | string;
        index: number;
        innerR: number;
        r: number;
        radius: number;
        siblings: number;
    }
}
export default SunburstNode;
