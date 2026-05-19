import type AreaSplineRangeSeries from './AreaSplineRange/AreaSplineRangeSeries';
import type Axis from '../Core/Axis/Axis';
import type Chart from '../Core/Chart/Chart';
import type ChartOptions from '../Core/Chart/ChartOptions';
import type ColumnSeries from './Column/ColumnSeries';
import type LineSeries from './Line/LineSeries';
import type Point from '../Core/Series/Point';
import type Pointer from '../Core/Pointer';
import type { PointerEvent } from '../Core/PointerEvent';
import type SplineSeries from './Spline/SplineSeries';
import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import type Tick from '../Core/Axis/Tick';
import Series from '../Core/Series/Series.js';
import RadialAxis from '../Core/Axis/RadialAxis.js';
declare module '../Core/Axis/AxisBase' {
    interface AxisBase {
        center?: Array<number>;
    }
}
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        polar: ChartOptions['polar'];
    }
}
declare module '../Core/Chart/ChartOptions' {
    interface ChartOptions {
        polar?: boolean;
    }
}
declare module '../Core/Series/PointBase' {
    interface PointBase {
        rectPlotX?: PolarPoint['rectPlotX'];
        rectPlotY?: PolarPoint['rectPlotY'];
        ttBelow?: boolean;
    }
}
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        hasClipCircleSetter?: boolean;
        /** @requires Series/Polar */
        polar?: PolarAdditions;
    }
}
declare module '../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * Polar charts only. Whether to connect the ends of a line series
         * plot across the extremes.
         *
         * @sample {highcharts} highcharts/plotoptions/line-connectends-false/
         *         Do not connect
         *
         * @since   2.3.0
         * @product highcharts
         */
        connectEnds?: boolean;
    }
}
interface PolarChart extends Chart {
    axes: Array<RadialAxis.AxisComposition>;
    series: Array<PolarSeriesComposition>;
}
interface PolarPoint extends Point {
    plotX: number;
    plotY: number;
    polarPlotX: number;
    polarPlotY: number;
    rectPlotX: number;
    rectPlotY: number;
    series: PolarSeriesComposition;
}
export declare class PolarSeriesComposition extends Series {
    chart: PolarChart;
    clipCircle: SVGElement;
    connectEnds?: boolean;
    data: Array<PolarPoint>;
    group: SVGElement;
    hasClipCircleSetter?: boolean;
    kdByAngle?: boolean;
    points: Array<PolarPoint>;
    polar: PolarAdditions;
    startAngleRad: number;
    thresholdAngleRad: number | undefined;
    translatedThreshold?: number;
    animate(init?: boolean): void;
    searchPoint: (PolarSeriesComposition['kdByAngle'] extends true ? typeof searchPointByAngleOrInverted : Series['searchPoint']);
    xAxis: RadialAxis.AxisComposition;
    yAxis: RadialAxis.AxisComposition;
    translate(): void;
}
/**
 * Search a k-d tree by the point angle (used for shared tooltips in polar) or
 * the inverted point.
 * charts
 * @private
 */
declare function searchPointByAngleOrInverted(this: Series, e: PointerEvent): (Point | undefined);
/**
 * Extensions for polar charts. Additionally, much of the geometry required
 * for polar charts is gathered in RadialAxes.js.
 * @private
 */
declare class PolarAdditions {
    static compose(AxisClass: typeof Axis, ChartClass: typeof Chart, PointerClass: typeof Pointer, SeriesClass: typeof Series, TickClass: typeof Tick, PointClass: typeof Point, AreaSplineRangeSeriesClass: typeof AreaSplineRangeSeries, ColumnSeriesClass: typeof ColumnSeries, LineSeriesClass: typeof LineSeries, SplineSeriesClass: typeof SplineSeries): void;
    constructor(series: PolarSeriesComposition);
    series: PolarSeriesComposition;
    arc(low: number | undefined, high: number, start: number, end: number): SVGAttributes;
    /**
     * Translate a point's plotX and plotY from the internal angle and radius
     * measures to true plotX, plotY coordinates
     * @private
     */
    toXY(point: PolarPoint): void;
}
export default PolarAdditions;
