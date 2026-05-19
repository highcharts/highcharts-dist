import type { GaugeSeriesOptions } from './GaugeSeriesOptions';
import type { PointOptions, PointShortOptions } from '../../Core/Series/PointOptions';
import type RadialAxis from '../../Core/Axis/RadialAxis';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import GaugePoint from './GaugePoint.js';
declare const Series: typeof import("../../Core/Series/Series").default;
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        angular?: boolean;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        fixedBox?: boolean;
        forceDL?: boolean;
    }
}
/**
 *
 * The `gauge` series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.map
 *
 * @augments Highcharts.Series
 */
declare class GaugeSeries extends Series {
    /**
     * Gauges are circular plots displaying one or more values with a dial
     * pointing to values along the perimeter.
     *
     * @sample highcharts/demo/gauge-speedometer/
     *         Gauge chart
     *
     * @extends      plotOptions.line
     * @excluding    animationLimit, boostThreshold, colorAxis, colorKey,
     *               connectEnds, connectNulls, cropThreshold, dashStyle,
     *               dragDrop, findNearestPointBy, getExtremesFromAll, marker,
     *               negativeColor, pointPlacement, shadow, softThreshold,
     *               stacking, states, step, threshold, turboThreshold, xAxis,
     *               zoneAxis, zones, dataSorting, boostBlending
     * @product      highcharts
     * @requires     highcharts-more
     * @optionparent plotOptions.gauge
     */
    static defaultOptions: GaugeSeriesOptions;
    data: Array<GaugePoint>;
    points: Array<GaugePoint>;
    options: GaugeSeriesOptions;
    yAxis: RadialAxis.AxisComposition;
    pivot?: SVGElement;
    /**
     * Calculate paths etc
     * @private
     */
    translate(): void;
    /**
     * Draw the points where each point is one needle
     * @private
     */
    drawPoints(): void;
    /**
     * Animate the arrow up from startAngle
     * @private
     */
    animate(init?: boolean): void;
    /**
     * Extend the basic setData method by running processData and generatePoints
     * immediately, in order to access the points from the legend.
     * @private
     */
    setData(data: Array<(PointOptions | PointShortOptions)>, redraw?: boolean): void;
    /**
     * Define hasData function for non-cartesian series.
     * Returns true if the series has points at all.
     * @private
     */
    hasData(): boolean;
}
interface GaugeSeries {
    angular: boolean;
    directTouch: boolean;
    drawGraph(): void;
    fixedBox: boolean;
    forceDL: boolean;
    noSharedTooltip: boolean;
    pointClass: typeof GaugePoint;
}
/**
 * @private
 */
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        gauge: typeof GaugeSeries;
    }
}
export default GaugeSeries;
