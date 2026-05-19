import type Axis from '../../Core/Axis/Axis';
import type BubbleSeriesType from '../Bubble/BubbleSeries';
import type Chart from '../../Core/Chart/Chart';
import type { DragNodesPoint, DragNodesSeries } from '../DragNodesComposition';
import type Legend from '../../Core/Legend/Legend';
import type NetworkgraphSeries from '../Networkgraph/NetworkgraphSeries';
import type PackedBubbleChart from './PackedBubbleChart';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type PackedBubblePointOptions from './PackedBubblePointOptions';
import type PackedBubbleSeriesOptions from './PackedBubbleSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import DragNodesComposition from '../DragNodesComposition.js';
import PackedBubblePoint from './PackedBubblePoint.js';
import PackedBubbleLayout from './PackedBubbleLayout.js';
declare const BubbleSeries: typeof BubbleSeriesType;
import SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.packedbubble
 *
 * @extends Highcharts.Series
 */
declare class PackedBubbleSeries extends BubbleSeries {
    static defaultOptions: PackedBubbleSeriesOptions;
    static compose(AxisClass: typeof Axis, ChartClass: typeof Chart, LegendClass: typeof Legend): void;
    chart: PackedBubbleChart;
    data: Array<PackedBubblePoint>;
    hoverPoint?: PackedBubblePoint;
    layout: PackedBubbleLayout;
    options: PackedBubbleSeriesOptions;
    parentNode?: PackedBubblePoint;
    parentNodeLayout?: PackedBubbleLayout;
    parentNodesGroup?: SVGElement;
    parentNodeMass: number;
    parentNodeRadius?: number;
    points: Array<PackedBubblePoint>;
    xData: Array<number>;
    deferDataLabels: boolean;
    /**
     * Create a single array of all points from all series
     * @private
     */
    accumulateAllPoints(): Array<PackedBubbleSeries.Data>;
    /**
     * Adding the basic layout to series points.
     * @private
     */
    addLayout(): void;
    /**
     * Function responsible for adding series layout, used for parent nodes.
     * @private
     */
    addSeriesLayout(): void;
    /**
     * The function responsible for calculating the parent node radius
     * based on the total surface of inside-bubbles and the group BBox
     * @private
     */
    calculateParentRadius(): void;
    /**
     * Calculate min and max bubble value for radius calculation.
     * @private
     */
    calculateZExtremes(): Array<number>;
    /**
     * Check if two bubbles overlaps.
     * @private
     */
    checkOverlap(bubble1: Array<number>, bubble2: Array<number>): boolean;
    /**
     * Creating parent nodes for split series, in which all the bubbles
     * are rendered.
     * @private
     */
    createParentNodes(): void;
    /**
     * Function responsible for adding all the layouts to the chart.
     * @private
     */
    deferLayout(): void;
    destroy(): void;
    /**
     * Packedbubble has two separate collections of nodes if split, render
     * dataLabels for both sets:
     * @private
     */
    drawDataLabels(): void;
    /**
     * Create Background/Parent Nodes for split series.
     * @private
     */
    drawGraph(): void;
    drawTracker(): void;
    /**
     * Calculate radius of bubbles in series.
     * @private
     */
    getPointRadius(): void;
    init(): PackedBubbleSeries;
    /**
     * Mouse up action, finalizing drag&drop.
     * @private
     */
    onMouseUp(dnPoint: DragNodesPoint): void;
    /**
     * This is the main function responsible
     * for positioning all of the bubbles
     * allDataPoints - bubble array, in format [pixel x value,
     * pixel y value, radius,
     * related series index, related point index]
     * @private
     * @param {Array<Highcharts.PackedBubbleData>} allDataPoints All points from all series
     * @return {Array<Highcharts.PackedBubbleData>} Positions of all bubbles
     */
    placeBubbles(allDataPoints: Array<PackedBubbleSeries.Data>): Array<PackedBubbleSeries.Data>;
    /**
     * Function that checks for a parentMarker and sets the correct opacity.
     * @private
     * @param {Highcharts.Pack} point
     * Candidate point for opacity correction.
     * @param {string} [state]
     * The point state, can be either `hover`, `select` or 'normal'. If
     * undefined, normal state is assumed.
     *
     * @return {Highcharts.SVGAttributes}
     * The presentational attributes to be set on the point.
     */
    pointAttribs(point?: PackedBubblePoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Function that is adding one bubble based on positions and sizes of
     * two other bubbles, lastBubble is the last added bubble, newOrigin is
     * the bubble for positioning new bubbles. nextBubble is the currently
     * added bubble for which we are calculating positions
     * @private
     * @param {Array<number>} lastBubble The closest last bubble
     * @param {Array<number>} newOrigin New bubble
     * @param {Array<number>} nextBubble The closest next bubble
     * @return {Array<number>} Bubble with correct positions
     */
    positionBubble(lastBubble: Array<number>, newOrigin: Array<number>, nextBubble: Array<number>): Array<number>;
    render(): void;
    /**
     * The function responsible for resizing the bubble radius.
     * In shortcut: it is taking the initially
     * calculated positions of bubbles. Then it is calculating the min max
     * of both dimensions, creating something in shape of bBox.
     * The comparison of bBox and the size of plotArea
     * (later it may be also the size set by customer) is giving the
     * value how to recalculate the radius so it will match the size
     * @private
     */
    resizeRadius(): void;
    /**
     * The function responsible for calculating series bubble' s bBox.
     * Needed because of exporting failure when useSimulation
     * is set to false
     * @private
     */
    seriesBox(): (Array<number> | null);
    /**
     * Needed because of z-indexing issue if point is added in series.group
     * @private
     */
    setVisible(): void;
    /**
     * Extend the base translate method to handle bubble size,
     * and correct positioning them.
     * @private
     */
    translate(): void;
}
interface PackedBubbleSeries extends DragNodesSeries, NetworkgraphSeries {
    pointClass: typeof PackedBubblePoint;
    bubblePadding: BubbleSeriesType['bubblePadding'];
    /**
     * Array of internal forces. Each force should be later defined in
     * integrations.js.
     * @private
     */
    forces: Array<string>;
    /**
     * An internal option used for allowing nodes dragging.
     * @private
     */
    hasDraggableNodes: boolean;
    isBubble: BubbleSeriesType['isBubble'];
    isCartesian: boolean;
    maxPxSize: BubbleSeriesType['maxPxSize'];
    minPxSize: BubbleSeriesType['minPxSize'];
    nodes: NetworkgraphSeries['nodes'];
    noSharedTooltip: boolean;
    pointArrayMap: Array<string>;
    pointValKey: string;
    radii: BubbleSeriesType['radii'];
    specialGroup: BubbleSeriesType['specialGroup'];
    trackerGroups: Array<string>;
    yData: BubbleSeriesType['yData'];
    zData: BubbleSeriesType['zData'];
    zoneAxis: BubbleSeriesType['zoneAxis'];
    getPointsCollection(): Array<PackedBubblePoint>;
    indexateNodes: NetworkgraphSeries['indexateNodes'];
    markerAttribs: BubbleSeriesType['markerAttribs'];
    onMouseDown: typeof DragNodesComposition.onMouseDown;
    onMouseMove: typeof DragNodesComposition.onMouseMove;
    redrawHalo: typeof DragNodesComposition.redrawHalo;
    setState: BubbleSeriesType['setState'];
}
declare namespace PackedBubbleSeries {
    type Data = [
        (number | null),
        (number | null),
        (number | null),
        number,
        number,
        PackedBubblePointOptions
    ];
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        packedbubble: typeof PackedBubbleSeries;
    }
}
export default PackedBubbleSeries;
