import type Chart from '../Core/Chart/Chart';
import type Point from '../Core/Series/Point';
import type RFLayout from './Networkgraph/ReingoldFruchtermanLayout';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        graphLayoutsLookup?: Array<GraphLayoutType>;
    }
}
declare module '../Core/Series/PointBase' {
    interface PointBase {
        dispX?: number;
        dispY?: number;
        fromNode?: Point;
        linksFrom?: Array<Point>;
        linksTo?: Array<Point>;
        mass?: number;
        prevX?: number;
        prevY?: number;
        toNode?: Point;
    }
}
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        forces?: Array<string>;
    }
}
export interface GraphIntegrationObject {
    [name: string]: Function;
    barycenter: Function;
    getK: Function;
    integrate: Function;
    repulsive: Function;
    repulsiveForceFunction: Function;
}
export type GraphLayoutType = RFLayout;
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart): void;
declare const GraphLayoutComposition: {
    compose: typeof compose;
    integrations: Record<string, GraphIntegrationObject>;
    layouts: Record<string, typeof RFLayout>;
};
export default GraphLayoutComposition;
