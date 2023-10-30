import type Chart from './Chart/Chart';
import type Position3DObject from './Renderer/Position3DObject';
import type PositionObject from './Renderer/PositionObject';
declare module './Chart/ChartLike' {
    interface ChartLike {
        scale3d?: number;
    }
}
/**
 * Transforms a given array of points according to the angles in chart.options.
 *
 * @private
 * @function Highcharts.perspective
 *
 * @param {Array<Highcharts.Position3DObject>} points
 * The array of points
 *
 * @param {Highcharts.Chart} chart
 * The chart
 *
 * @param {boolean} [insidePlotArea]
 * Whether to verify that the points are inside the plotArea
 *
 * @param {boolean} [useInvertedPersp]
 * Whether to use inverted perspective in calculations
 *
 * @return {Array<Highcharts.Position3DObject>}
 * An array of transformed points
 *
 * @requires highcharts-3d
 */
declare function perspective(points: Array<Position3DObject>, chart: Chart, insidePlotArea?: boolean, useInvertedPersp?: boolean): Array<Position3DObject>;
/**
 * Perspective3D function is available in global Highcharts scope because is
 * needed also outside of perspective() function (#8042).
 * @private
 * @function Highcharts.perspective3D
 *
 * @param {Highcharts.Position3DObject} coordinate
 * 3D position
 *
 * @param {Highcharts.Position3DObject} origin
 * 3D root position
 *
 * @param {number} distance
 * Perspective distance
 *
 * @return {Highcharts.PositionObject}
 * Perspective 3D Position
 *
 * @requires highcharts-3d
 */
declare function perspective3D(coordinate: Position3DObject, origin: Position3DObject, distance: number): PositionObject;
/**
 * Calculate a distance from camera to points - made for calculating zIndex of
 * scatter points.
 *
 * @private
 * @function Highcharts.pointCameraDistance
 *
 * @param {Highcharts.Dictionary<number>} coordinates
 * Coordinates of the specific point
 *
 * @param {Highcharts.Chart} chart
 * Related chart
 *
 * @return {number}
 * Distance from camera to point
 *
 * @requires highcharts-3d
 */
declare function pointCameraDistance(coordinates: Record<string, number>, chart: Chart): number;
/**
 * Calculate area of a 2D polygon using Shoelace algorithm
 * https://en.wikipedia.org/wiki/Shoelace_formula
 *
 * @private
 * @function Highcharts.shapeArea
 *
 * @param {Array<Highcharts.PositionObject>} vertexes
 * 2D Polygon
 *
 * @return {number}
 * Calculated area
 *
 * @requires highcharts-3d
 */
declare function shapeArea(vertexes: Array<PositionObject>): number;
/**
 * Calculate area of a 3D polygon after perspective projection
 *
 * @private
 * @function Highcharts.shapeArea3d
 *
 * @param {Array<Highcharts.Position3DObject>} vertexes
 * 3D Polygon
 *
 * @param {Highcharts.Chart} chart
 * Related chart
 *
 * @param {boolean} [insidePlotArea]
 * Whether to verify that the points are inside the plotArea
 *
 * @return {number}
 * Calculated area
 *
 * @requires highcharts-3d
 */
declare function shapeArea3D(vertexes: Array<Position3DObject>, chart: Chart, insidePlotArea?: boolean): number;
declare const Math3D: {
    perspective: typeof perspective;
    perspective3D: typeof perspective3D;
    pointCameraDistance: typeof pointCameraDistance;
    shapeArea: typeof shapeArea;
    shapeArea3D: typeof shapeArea3D;
};
export default Math3D;
