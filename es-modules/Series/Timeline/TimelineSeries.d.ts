import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type RangeSelector from '../../Stock/RangeSelector/RangeSelector';
import type TimelineDataLabelOptions from './TimelineDataLabelOptions';
import type TimelinePointOptions from './TimelinePointOptions';
import type TimelineSeriesOptions from './TimelineSeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
declare const LineSeries: typeof import("../Line/LineSeries").default;
import TimelinePoint from './TimelinePoint.js';
/**
 * The timeline series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.timeline
 *
 * @augments Highcharts.Series
 */
declare class TimelineSeries extends LineSeries {
    static defaultOptions: TimelineSeriesOptions;
    data: Array<TimelinePoint>;
    options: TimelineSeriesOptions;
    points: Array<TimelinePoint>;
    userOptions: TimelineSeriesOptions;
    visibilityMap: Array<(boolean | TimelinePoint | TimelinePointOptions)>;
    visiblePointsCount?: number;
    alignDataLabel(point: TimelinePoint, dataLabel: SVGLabel, _options: TimelineDataLabelOptions, _alignTo: BBoxObject): void;
    bindAxes(): void;
    distributeDL(): void;
    generatePoints(): void;
    getVisibilityMap(): Array<(boolean | TimelinePoint | TimelinePointOptions)>;
    getXExtremes(xData: Array<number>): RangeSelector.RangeObject;
    init(): void;
    markerAttribs(point: TimelinePoint, state?: StatesOptionsKey): SVGAttributes;
}
interface TimelineSeries {
    pointClass: typeof TimelinePoint;
    trackerGroups: Array<string>;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        timeline: typeof TimelineSeries;
    }
}
export default TimelineSeries;
