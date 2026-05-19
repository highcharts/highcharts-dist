import type DumbbellSeries from './DumbbellSeries.js';
import type DumbbellPointOptions from './DumbbellPointOptions';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import AreaRangePoint from '../AreaRange/AreaRangePoint.js';
declare class DumbbellPoint extends AreaRangePoint {
    series: DumbbellSeries;
    options: DumbbellPointOptions;
    connector?: SVGElement;
    pointWidth: number;
    /**
     * Set the point's state extended by have influence on the connector
     * (between low and high value).
     *
     * @private
     */
    setState(): void;
    destroy(): void;
}
interface DumbbellPoint {
    pointSetState: typeof AreaRangePoint.prototype.setState;
}
export default DumbbellPoint;
