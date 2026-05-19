import type { PointShortOptions, PointOptions } from '../../Core/Series/PointOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type TimelineDataLabelOptions from './TimelineDataLabelOptions';
import type TimelinePointOptions from './TimelinePointOptions';
import type TimelineSeries from './TimelineSeries';
import Point from '../../Core/Series/Point.js';
declare const LinePoint: typeof import("../Line/LinePoint").default;
declare class TimelinePoint extends LinePoint {
    label?: string;
    options: TimelinePointOptions;
    series: TimelineSeries;
    userDLOptions?: TimelineDataLabelOptions;
    alignConnector(): void;
    drawConnector(): void;
    getConnectorPath(): SVGPath;
    constructor(series: TimelineSeries, options: TimelinePointOptions);
    isValid(): boolean;
    setState(): void;
    setVisible(visible: boolean, redraw?: boolean): void;
    applyOptions(options: (PointOptions | PointShortOptions), x?: number, isMock?: boolean): Point;
}
export default TimelinePoint;
