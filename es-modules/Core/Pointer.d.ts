import type Axis from './Axis/Axis';
import type { DOMElementType } from './Renderer/DOMElementType';
import type Point from './Series/Point';
import type { PointerEvent } from './PointerEvent';
import type Series from './Series/Series';
declare module './Chart/ChartBase' {
    interface ChartBase {
        cancelClick?: boolean;
        hoverPoint?: Point;
        hoverPoints?: Array<Point>;
        hoverSeries?: Series;
        mouseDownX?: number;
        mouseDownY?: number;
        mouseIsDown?: (boolean | string);
        pointer?: Pointer;
    }
}
/**
 * The mouse and touch tracker object. Each {@link Chart} item has one
 * associated Pointer item that can be accessed from the  {@link Chart.pointer}
 * property.
 *
 * @class
 * @name Highcharts.Pointer
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.Options} options
 * The root options object. The pointer uses options from the chart and tooltip
 * structures.
 */
declare class Pointer {
    /**
     * Destroys the Pointer object and disconnects DOM events.
     *
     * @function Highcharts.Pointer#destroy
     */
    destroy(): void;
    /**
     * Finds the closest point to a set of coordinates, using the k-d-tree
     * algorithm.
     *
     * @function Highcharts.Pointer#findNearestKDPoint
     *
     * @param {Array<Highcharts.Series>} series
     * All the series to search in.
     *
     * @param {boolean|undefined} shared
     * Whether it is a shared tooltip or not.
     *
     * @param {Highcharts.PointerEventObject} e
     * The pointer event object, containing chart coordinates of the pointer.
     *
     * @return {Highcharts.Point|undefined}
     * The point closest to given coordinates.
     */
    findNearestKDPoint(series: Array<Series>, shared: (boolean | undefined), e: PointerEvent): (Point | undefined);
    /**
     * Return the cached chartPosition if it is available on the Pointer,
     * otherwise find it. Running offset is quite expensive, so it should be
     * avoided when we know the chart hasn't moved.
     *
     * @function Highcharts.Pointer#getChartPosition
     *
     * @return {Highcharts.ChartPositionObject}
     * The offset of the chart container within the page
     */
    getChartPosition(): Pointer.ChartPositionObject;
    /**
     * Get the click position in terms of axis values.
     *
     * @function Highcharts.Pointer#getCoordinates
     *
     * @param {Highcharts.PointerEventObject} e
     * Pointer event, extended with `chartX` and `chartY` properties.
     *
     * @return {Highcharts.PointerAxisCoordinatesObject}
     * Axis coordinates.
     */
    getCoordinates(e: PointerEvent): Pointer.AxesCoordinatesObject;
    /**
     * Utility to detect whether an element has, or has a parent with, a
     * specific class name. Used on detection of tracker objects and on deciding
     * whether hovering the tooltip should cause the active series to mouse out.
     *
     * @function Highcharts.Pointer#inClass
     *
     * @param {Highcharts.SVGDOMElement|Highcharts.HTMLDOMElement} element
     * The element to investigate.
     *
     * @param {string} className
     * The class name to look for.
     *
     * @return {boolean|undefined}
     * True if either the element or one of its parents has the given class
     * name.
     */
    inClass(element: DOMElementType, className: string): (boolean | undefined);
    /**
     * Takes a browser event object and extends it with custom Highcharts
     * properties `chartX` and `chartY` in order to work on the internal
     * coordinate system.
     *
     * On map charts, the properties `lon` and `lat` are added to the event
     * object given that the chart has projection information.
     *
     * @function Highcharts.Pointer#normalize
     *
     * @param {global.MouseEvent|global.PointerEvent|global.TouchEvent} e
     * Event object in standard browsers.
     *
     * @param {Highcharts.OffsetObject} [chartPosition]
     * Additional chart offset.
     *
     * @return {Highcharts.PointerEventObject}
     * A browser event with extended properties `chartX` and `chartY`.
     */
    normalize<T extends PointerEvent>(e: (T | MouseEvent | PointerEvent | TouchEvent), chartPosition?: Pointer.ChartPositionObject): T;
}
declare namespace Pointer {
    /**
     * Chart position and scale.
     */
    interface ChartPositionObject {
        /**
         * Left offset of the chart container.
         */
        left: number;
        /**
         * Horizontal scale of the chart container.
         */
        scaleX: number;
        /**
         * Vertical scale of the chart container.
         */
        scaleY: number;
        /**
         * Top offset of the chart container.
         */
        top: number;
    }
    /**
     * One position in relation to an axis.
     */
    interface AxisCoordinateObject {
        /**
         * Related axis.
         */
        axis: Axis;
        /**
         * Axis value.
         */
        value: number;
    }
    /**
     * Positions in terms of axis values.
     */
    interface AxesCoordinatesObject {
        /**
         * Positions on the x-axis.
         */
        xAxis: Array<AxisCoordinateObject>;
        /**
         * Positions on the y-axis.
         */
        yAxis: Array<AxisCoordinateObject>;
    }
    /**
     * Axis-specific data of a selection.
     */
    interface SelectDataObject {
        /**
         * The selected Axis.
         */
        axis: Axis;
        /**
         * The maximum axis value, either automatic or set manually.
         */
        max: number;
        /**
         * The minimum axis value, either automatic or set manually.
         */
        min: number;
    }
    /**
     * Object for select events.
     * The primary axes are `xAxis[0]` and `yAxis[0]`. Remember the unit of a
     * datetime axis is milliseconds since 1970-01-01 00:00:00.
     */
    interface SelectEventObject {
        /**
         * The related browser event.
         */
        originalEvent: Event;
        /**
         * Prevent default action.
         */
        preventDefault: Event['preventDefault'];
        /**
         * Indicates a reset event to restore default state.
         */
        resetSelection?: boolean;
        /**
         * Arrays containing the axes of each dimension and each axis' min and
         * max values.
         */
        xAxis: Array<SelectDataObject>;
        /**
         * Arrays containing the axes of each dimension and each axis' min and
         * max values.
         */
        yAxis: Array<SelectDataObject>;
    }
}
export default Pointer;
