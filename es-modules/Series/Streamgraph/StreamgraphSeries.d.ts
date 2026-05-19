import type StreamgraphPoint from './StreamgraphPoint';
import type StreamgraphSeriesOptions from './StreamgraphSeriesOptions';
declare const AreaSplineSeries: typeof import("../AreaSpline/AreaSplineSeries").default;
/**
 * Streamgraph series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.streamgraph
 *
 * @augments Highcharts.Series
 */
declare class StreamgraphSeries extends AreaSplineSeries {
    static defaultOptions: StreamgraphSeriesOptions;
    data: Array<StreamgraphPoint>;
    points: Array<StreamgraphPoint>;
    options: StreamgraphSeriesOptions;
    streamStacker(pointExtremes: Array<number>, stack: Record<string, number>, i: number): void;
}
interface StreamgraphSeries {
    negStacks: boolean;
    pointClass: typeof StreamgraphPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        streamgraph: typeof StreamgraphSeries;
    }
}
export default StreamgraphSeries;
