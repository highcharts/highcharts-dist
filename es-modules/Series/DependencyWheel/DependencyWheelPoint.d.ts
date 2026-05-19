import type DependencyWheelPointOptions from './DependencyWheelPointOptions';
import type DependencyWheelSeries from './DependencyWheelSeries';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
declare const SankeyPoint: typeof import("../Sankey/SankeyPoint").default;
declare class DependencyWheelPoint extends SankeyPoint {
    angle: number;
    fromNode: DependencyWheelPoint;
    index: number;
    linksFrom: Array<DependencyWheelPoint>;
    linksTo: Array<DependencyWheelPoint>;
    options: DependencyWheelPointOptions;
    series: DependencyWheelSeries;
    shapeArgs: SVGAttributes;
    toNode: DependencyWheelPoint;
    /**
     * Return a text path that the data label uses.
     * @private
     */
    getDataLabelPath(label: SVGLabel): SVGElement;
    isValid(): boolean;
}
export default DependencyWheelPoint;
