import type BBoxObject from '../../Core/Renderer/BBoxObject';
/**
 * Current drag and drop position.
 *
 * @interface Highcharts.DragDropPositionObject
 */
export interface DragDropPositionObject {
    /**
     * Chart x position
     * @name Highcharts.DragDropPositionObject#chartX
     * @type {number}
     */
    chartX: number;
    /**
     * Chart y position
     * @name Highcharts.DragDropPositionObject#chartY
     * @type {number}
     */
    chartY: number;
    /**
     * Drag and drop guide box.
     * @name Highcharts.DragDropPositionObject#guideBox
     * @type {Highcharts.BBoxObject|undefined}
     */
    guideBox?: BBoxObject;
    /**
     * Updated point data.
     * @name Highcharts.DragDropPositionObject#points
     * @type {Highcharts.Dictionary<Highcharts.Dictionary<number>>}
     */
    points: Record<string, Record<string, number>>;
    /**
     * Delta of previous x position.
     * @name Highcharts.DragDropPositionObject#prevdX
     * @type {number|undefined}
     */
    prevdX?: number;
    /**
     * Delta of previous y position.
     * @name Highcharts.DragDropPositionObject#prevdY
     * @type {number|undefined}
     */
    prevdY?: number;
}
