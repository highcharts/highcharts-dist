import type FlowMapPointOptions from './FlowMapPointOptions';
import type FlowMapSeries from './FlowMapSeries';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type ColorMapComposition from '../ColorMapComposition.js';
declare const MapLinePoint: typeof import("../MapLine/MapLinePoint").default;
declare class FlowMapPoint extends MapLinePoint {
    fromPos?: PositionObject;
    toPos?: PositionObject;
    options: FlowMapPointOptions;
    series: FlowMapSeries;
    /**
     * @private
     */
    isValid(): boolean;
}
interface FlowMapPoint {
    isValid: ColorMapComposition.PointComposition['isValid'];
}
export default FlowMapPoint;
