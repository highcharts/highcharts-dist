import type GaugePointOptions from './GaugePointOptions';
import type GaugeSeries from './GaugeSeries';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
declare const Point: typeof import("../../Core/Series/Point").default;
declare class GaugePoint extends Point {
    dial?: SVGElement;
    options: GaugePointOptions;
    series: GaugeSeries;
    shapeArgs: SVGAttributes;
    /**
     * Don't do any hover colors or anything
     * @private
     */
    setState(state?: StatesOptionsKey): void;
}
export default GaugePoint;
