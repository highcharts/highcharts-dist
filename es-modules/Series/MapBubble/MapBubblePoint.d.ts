import BubblePoint from '../Bubble/BubblePoint.js';
declare const mapPointProto: import("../Map/MapPoint.js").default;
declare module '../../Core/Series/KDPointSearchObjectBase' {
    interface KDPointSearchObjectBase {
        plotX?: number;
        plotY?: number;
    }
}
declare class MapBubblePoint extends BubblePoint {
    isValid(): boolean;
}
interface MapBubblePoint {
    getProjectedBounds: typeof mapPointProto.getProjectedBounds;
}
export default MapBubblePoint;
