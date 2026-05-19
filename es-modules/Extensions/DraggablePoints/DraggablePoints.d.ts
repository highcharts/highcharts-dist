import type { DragDropOptions } from './DragDropOptions';
import type { DragDropPositionObject } from './DraggableChart';
import type Point from '../../Core/Series/Point';
declare module '../../Core/Series/PointOptions' {
    interface PointOptions {
        /**
         * Point specific options for the draggable-points module. Overrides
         * options on `series.dragDrop`.
         *
         * @declare   Highcharts.SeriesLineDataDragDropOptions
         * @extends   plotOptions.series.dragDrop
         * @since     6.2.0
         * @requires  modules/draggable-points
         * @apioption series.line.data.dragDrop
         */
        dragDrop?: DragDropOptions;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * @sample {highcharts|highstock}
         *         highcharts/dragdrop/resize-column
         *         Draggable column and line series
         * @sample {highcharts|highstock}
         *         highcharts/dragdrop/bar-series
         *         Draggable bar
         * @sample {highcharts|highstock}
         *         highcharts/dragdrop/drag-bubble
         *         Draggable bubbles
         * @sample {highcharts|highstock}
         *         highcharts/dragdrop/drag-xrange
         *         Draggable X range series
         * @sample {highcharts|highstock}
         *         highcharts/dragdrop/undraggable-points
         *         Dragging disabled for specific points
         * @sample {highmaps}
         *         maps/series/draggable-mappoint
         *         Draggable Map Point series
         *
         * @declare      Highcharts.SeriesDragDropOptionsObject
         * @since        6.2.0
         * @requires     modules/draggable-points
         * @optionparent plotOptions.series.dragDrop
         */
        dragDrop?: DragDropOptions;
    }
}
/**
 * Function callback to execute while series points are dragged. Return false to
 * stop the default drag action.
 *
 * @callback Highcharts.PointDragCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        Point where the event occurred.
 *
 * @param {Highcharts.PointDragEventObject} event
 *        Event arguments.
 */
export interface PointDragCallbackFunction {
    (this: Point, event: PointDragEventObject): void;
}
/**
 * Contains information about a points new values.
 *
 * @interface Highcharts.PointDragDropObject
 */
export interface PointDragDropObject {
    /**
     * New values.
     * @name Highcharts.PointDragDropObject#newValues
     * @type {Highcharts.Dictionary<number>}
     */
    newValues: Record<string, number>;
    /**
     * Updated point.
     * @name Highcharts.PointDragDropObject#point
     * @type {Highcharts.Point}
     */
    point: Point;
}
/**
 * Contains common information for a drag event on series points.
 *
 * @interface Highcharts.PointDragEventObject
 */
export interface PointDragEventObject {
    /**
     * New point after drag if only a single one.
     * @name Highcharts.PointDragEventObject#newPoint
     * @type {Highcharts.PointDragDropObject|undefined}
     */
    newPoint?: PointDragDropObject;
    /**
     * New point id after drag if only a single one.
     * @name Highcharts.PointDragEventObject#newPointId
     * @type {string|undefined}
     */
    newPointId?: string;
    /**
     * New points during drag.
     * @name Highcharts.PointDragEventObject#newPoints
     * @type {Highcharts.Dictionary<Highcharts.PointDragDropObject>}
     */
    newPoints: Record<string, PointDragDropObject>;
    /**
     * Original data.
     * @name Highcharts.PointDragEventObject#origin
     * @type {Highcharts.DragDropPositionObject}
     */
    origin: DragDropPositionObject;
    /**
     * Prevent default drag action.
     * @name Highcharts.PointDragEventObject#preventDefault
     * @type {Function}
     */
    preventDefault: Function;
    /**
     * Target point that caused the event.
     * @name Highcharts.PointDragEventObject#target
     * @type {Highcharts.Point}
     */
    target: Point;
    /**
     * Event type.
     * @name Highcharts.PointDragEventObject#type
     * @type {"drag"}
     */
    type: 'drag';
}
/**
 * Contains common information for a drag event on series point.
 *
 * @interface Highcharts.PointDragStartEventObject
 * @extends global.MouseEvent
 */
export interface PointDragStartEventObject extends MouseEvent {
    /**
     * Data property being dragged.
     * @name Highcharts.PointDragStartEventObject#updateProp
     * @type {string|undefined}
     */
    updateProp?: string;
}
/**
 * Function callback to execute when a series point is dragged.
 *
 * @callback Highcharts.PointDragStartCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        Point where the event occurred.
 *
 * @param {Highcharts.PointDragStartEventObject} event
 *        Event arguments.
 */
export interface PointDragStartCallbackFunction {
    (this: Point, event: PointDragStartEventObject): void;
}
/**
 * Function callback to execute when series points are dropped.
 *
 * @callback Highcharts.PointDropCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        Point where the event occurred.
 *
 * @param {Highcharts.PointDropEventObject} event
 *        Event arguments.
 */
export interface PointDropCallbackFunction {
    (this: Point, event: PointDropEventObject): void;
}
/**
 * Contains common information for a drop event on series points.
 *
 * @interface Highcharts.PointDropEventObject
 */
export interface PointDropEventObject {
    /**
     * New point after drop if only a single one.
     * @name Highcharts.PointDropEventObject#newPoint
     * @type {Highcharts.PointDragDropObject|undefined}
     */
    newPoint?: PointDragDropObject;
    /**
     * New point id after drop if only a single one.
     * @name Highcharts.PointDropEventObject#newPointId
     * @type {string|undefined}
     */
    newPointId?: string;
    /**
     * New points after drop.
     * @name Highcharts.PointDropEventObject#newPoints
     * @type {Highcharts.Dictionary<Highcharts.PointDragDropObject>}
     */
    newPoints: Record<string, PointDragDropObject>;
    /**
     * Number of new points.
     * @name Highcharts.PointDropEventObject#numNewPoints
     * @type {number}
     */
    numNewPoints: number;
    /**
     * Original data.
     * @name Highcharts.PointDropEventObject#origin
     * @type {Highcharts.DragDropPositionObject}
     */
    origin: DragDropPositionObject;
    /**
     * Prevent default drop action.
     * @name Highcharts.PointDropEventObject#preventDefault
     * @type {Function}
     */
    preventDefault: Function;
    /**
     * Target point that caused the event.
     * @name Highcharts.PointDropEventObject#target
     * @type {Highcharts.Point}
     */
    target: Point;
    /**
     * Event type.
     * @name Highcharts.PointDropEventObject#type
     * @type {"drop"}
     */
    type: 'drop';
}
