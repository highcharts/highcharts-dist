import type Chart from '../Core/Chart/Chart';
import type Point from '../Core/Series/Point';
import type PointerEvent from '../Core/PointerEvent';
import type ReingoldFruchtermanLayout from './Networkgraph/ReingoldFruchtermanLayout';
import type Series from '../Core/Series/Series';
import type SeriesOptions from '../Core/Series/SeriesOptions';
export interface DragNodesChart extends Chart {
    graphLayoutsLookup: Array<ReingoldFruchtermanLayout>;
    hoverPoint: DragNodesPoint;
}
export interface DragNodesPoint extends Point {
    fixedPosition?: Record<string, number>;
    hasDragged?: boolean;
    inDragMode?: boolean;
    series: DragNodesSeries;
}
export interface DragNodesSeries extends Series {
    chart: DragNodesChart;
    data: Array<DragNodesPoint>;
    hasDraggableNodes?: boolean;
    layout: ReingoldFruchtermanLayout;
    options: DragNodesSeriesOptions;
    points: Array<DragNodesPoint>;
    onMouseDown(this: DragNodesSeries, point: Point, event: Event): void;
    onMouseMove(this: DragNodesSeries, point: DragNodesPoint, event: PointerEvent): void;
    onMouseUp(this: DragNodesSeries, point: DragNodesPoint, event?: PointerEvent): void;
    redrawHalo(point: DragNodesPoint): void;
}
export interface DragNodesSeriesOptions extends SeriesOptions {
    draggable?: boolean;
    fixedDraggable?: boolean;
}
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart): void;
/**
 * Mouse down action, initializing drag&drop mode.
 *
 * @private
 * @param {Highcharts.Point} point
 *        The point that event occurred.
 * @param {Highcharts.PointerEventObject} event
 *        Browser event, before normalization.
 */
declare function onMouseDown(this: DragNodesSeries, point: DragNodesPoint, event: PointerEvent): void;
/**
 * Mouse move action during drag&drop.
 *
 * @private
 *
 * @param {Highcharts.Point} point
 *        The point that event occurred.
 * @param {global.Event} event
 *        Browser event, before normalization.
 */
declare function onMouseMove(this: DragNodesSeries, point: DragNodesPoint, event: PointerEvent): void;
/**
 * Mouse up action, finalizing drag&drop.
 *
 * @private
 * @param {Highcharts.Point} point
 *        The point that event occurred.
 */
declare function onMouseUp(this: DragNodesSeries, point: DragNodesPoint): void;
/**
 * Redraw halo on mousemove during the drag&drop action.
 *
 * @private
 * @param {Highcharts.Point} point
 *        The point that should show halo.
 */
declare function redrawHalo(this: DragNodesSeries, point: DragNodesPoint): void;
declare const DragNodesComposition: {
    compose: typeof compose;
    onMouseDown: typeof onMouseDown;
    onMouseMove: typeof onMouseMove;
    onMouseUp: typeof onMouseUp;
    redrawHalo: typeof redrawHalo;
};
export default DragNodesComposition;
