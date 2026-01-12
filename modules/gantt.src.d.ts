/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface Point {
        /**
         * The ending X value of the range point.
         */
        x2?: number;
        /**
         * Utility to get the position of the marker, based on the path angle
         * and the marker's radius.
         *
         * @param radians
         *        The angle in radians from the point center to another vector.
         *
         * @param markerRadius
         *        The radius of the marker, to calculate the additional distance
         *        to the center of the marker.
         *
         * @param anchor
         *        The anchor point of the path and marker as an object with x/y
         *        properties.
         *
         * @return The marker vector as an object with x/y properties.
         */
        getMarkerVector(radians: number, markerRadius: number, anchor: object): object;
        /**
         * Get coordinates of anchor point for pathfinder connection.
         *
         * @param markerOptions
         *        Connection options for position on point.
         *
         * @return An object with x/y properties for the position. Coordinates
         *         are in plot values, not relative to point.
         */
        getPathfinderAnchorPoint(markerOptions: ConnectorsMarkerOptions): PositionObject;
        /**
         * Utility to get the angle from one point to another.
         *
         * @param v1
         *        The first vector, as an object with x/y properties.
         *
         * @param v2
         *        The second vector, as an object with x/y properties.
         *
         * @return The angle in degrees
         */
        getRadiansToVector(v1: PositionObject, v2: PositionObject): number;
    }
    interface PointOptionsObject {
        /**
         * The ending X value of the range point.
         */
        x2?: number;
    }
    interface SymbolOptions {}
    /**
     * Gantt-optimized chart. Use Chart for common charts.
     */
    class GanttChart extends Chart {
        /**
         * Initializes the chart. The constructor's arguments are passed on
         * directly.
         *
         * @param userOptions
         *        Custom options.
         *
         * @param callback
         *        Function to run when the chart has loaded and all external
         *        images are loaded.
         *
         * @fires Highcharts.GanttChart#init
         * @fires Highcharts.GanttChart#afterInit
         */
        init(userOptions: Options, callback?: Function): void;
    }
    /**
     * The factory function for creating new gantt charts. Creates a new
     * GanttChart object with different default options than the basic Chart.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and all external images
     *        are loaded. Defining a chart.events.load handler is equivalent.
     *
     * @return Returns the Chart object.
     */
    function ganttChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): GanttChart;
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @param path
     *        Path to be rotated.
     *
     * @param vertical
     *        If vertical scrollbar, swap x-y values.
     *
     * @return Rotated path.
     */
    function swapXY(path: SVGPathArray, vertical?: boolean): SVGPathArray;
    /**
     * Callout shape used for default tooltips.
     *
     * @param cx
     *        Center X
     *
     * @param cy
     *        Center Y
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function callout(cx: number, cy: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Circle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function circle(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Diamond symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function diamond(x: number, y: number, w: number, h: number): SVGPathArray;
    function getCurvedPath(): void;
    function getOrthogonalPath(): void;
    function getStraightPath(): void;
    /**
     * Rect symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function rect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Triangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function triangle(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Inverted triangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function triangleDown(x: number, y: number, w: number, h: number): SVGPathArray;
}
export default _Highcharts;
