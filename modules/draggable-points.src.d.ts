/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    interface PointEventsOptionsObject {
        /**
         * Callback that fires while dragging a point. The mouse event is passed
         * in as parameter. The original data can be accessed from `e.origin`,
         * and the new point values can be accessed from `e.newPoints`. If there
         * is only a single point being updated, it can be accessed from
         * `e.newPoint` for simplicity, and its ID can be accessed from
         * `e.newPointId`. The this context is the point being dragged. To stop
         * the default drag action, return `false`.
         */
        drag: PointDragCallbackFunction;
        /**
         * Point specific options for the draggable-points module.
         */
        dragDrop: (SeriesLineDataDragDropOptions|SeriesXrangeDataDragDropOptions);
        /**
         * Callback that fires when starting to drag a point. The mouse event
         * object is passed in as an argument. If a drag handle is used,
         * `e.updateProp` is set to the data property being dragged. The `this`
         * context is the point.
         */
        dragStart: PointDragStartCallbackFunction;
        /**
         * Callback that fires when the point is dropped. The parameters passed
         * are the same as for drag. To stop the default drop action, return
         * `false`.
         */
        drop: PointDropCallbackFunction;
    }
    interface PointOptionsObject {}
}
export default factory;
export let Highcharts: typeof _Highcharts;
