import type BubblePointType from '../Bubble/BubblePoint';
import type { DragNodesPoint } from '../DragNodesComposition';
import type NetworkgraphPoint from '../Networkgraph/NetworkgraphPoint';
import type PackedBubblePointOptions from './PackedBubblePointOptions';
import type PackedBubbleSeries from './PackedBubbleSeries';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
declare const BubblePoint: typeof BubblePointType;
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        degree?: number;
    }
}
declare class PackedBubblePoint extends BubblePoint implements DragNodesPoint {
    collisionNmb?: number;
    dataLabelOnNull?: boolean;
    degree: number;
    dispX?: number;
    dispY?: number;
    fixedPosition: DragNodesPoint['fixedPosition'];
    isParentNode?: boolean;
    mass: number;
    neighbors?: number;
    prevX?: number;
    prevY?: number;
    radius: number;
    removed?: boolean;
    options: PackedBubblePointOptions;
    series: PackedBubbleSeries;
    seriesIndex?: number;
    value?: (number | null);
    /**
     * Destroy point.
     * Then remove point from the layout.
     * @private
     */
    destroy(): void;
    firePointEvent(): void;
    select(): void;
    setState(state?: StatesOptionsKey, move?: boolean): void;
}
interface PackedBubblePoint extends NetworkgraphPoint {
    className: BubblePointType['className'];
    fromNode: NetworkgraphPoint;
    linksFrom: Array<NetworkgraphPoint>;
    linksTo: Array<NetworkgraphPoint>;
    toNode: NetworkgraphPoint;
    isValid: NetworkgraphPoint['isValid'];
    remove: BubblePointType['remove'];
}
export default PackedBubblePoint;
