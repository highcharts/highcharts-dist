import type SunburstPointOptions from './SunburstPointOptions';
import type SunburstSeries from './SunburstSeries';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
declare const Point: typeof import("../../Core/Series/Point").default, TreemapPoint: typeof import("../Treemap/TreemapPoint").default;
import SunburstNode from './SunburstNode';
declare class SunburstPoint extends TreemapPoint {
    dataLabelPath?: SVGElement;
    innerArcLength?: number;
    outerArcLength?: number;
    node: SunburstNode;
    options: SunburstPointOptions;
    series: SunburstSeries;
    shapeExisting: SunburstNode.NodeValuesObject;
    sliced?: boolean;
    shapeType: ('arc' | 'circle' | 'path' | 'rect' | 'text');
    getDataLabelPath(label: SVGElement): SVGElement;
    isValid(): boolean;
}
interface SunburstPoint {
    setState: typeof Point.prototype.setState;
    setVisible: typeof TreemapPoint.prototype.setVisible;
}
export default SunburstPoint;
