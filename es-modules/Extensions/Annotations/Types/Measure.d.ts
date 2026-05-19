import type { AnnotationDraggableValue, AnnotationOptions, AnnotationShapeOptionsOptions, AnnotationTypeOptions } from '../AnnotationOptions';
import type CSSObject from '../../../Core/Renderer/CSSObject';
import type DashStyleValue from '../../../Core/Renderer/DashStyleValue';
import type Templating from '../../../Core/Templating';
interface Measure {
    average: number;
    bins: number;
    min: number;
    max: number;
}
declare namespace Measure {
    /**
     * Options for the measure annotation type.
     *
     * @extends annotations.types.crookedLine
     * @excluding labels, labelOptions, shapes, shapeOptions
     * @sample highcharts/annotations-advanced/measure/
     *         Measure
     * @product highstock
     * @optionparent annotations.types.measure
     */
    interface MeasureOptions extends AnnotationOptions {
        typeOptions: MeasureTypeOptions;
    }
    interface MeasureTypeCrosshairOptions {
        /**
         * The dash or dot style of the crosshair's line. For possible
         * values, see
         * [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).
         *
         * @type    {Highcharts.DashStyleValue}
         * @default Dash
         */
        dashStyle: DashStyleValue;
        /**
         * Enable or disable the horizontal crosshair.
         *
         */
        enabled: boolean;
        /**
         * The marker-end defines the arrowhead that will be drawn
         * at the final vertex of the given crosshair's path.
         *
         * @type       {string}
         * @default    arrow
         */
        markerEnd: string;
        /**
         * The Z index of the crosshair in annotation.
         */
        zIndex: number;
    }
    interface MeasureTypeLabelOptions {
        /**
         * Enable or disable the label text (min, max, average,
         * bins values).
         *
         * Defaults to true.
         */
        enabled: boolean;
        /**
         * Formatter function for the label text.
         *
         * Since v12.6.0, the callback also receives `ctx` as the first
         * argument, so that arrow functions can access the same context as
         * regular functions using `this`.
         *
         * Available data are:
         *
         * <table>
         *
         * <tbody>
         *
         * <tr>
         *
         * <td>`this.min`</td>
         *
         * <td>The minimum value of the points in the selected
         * range.</td>
         *
         * </tr>
         *
         * <tr>
         *
         * <td>`this.max`</td>
         *
         * <td>The maximum value of the points in the selected
         * range.</td>
         *
         * </tr>
         *
         * <tr>
         *
         * <td>`this.average`</td>
         *
         * <td>The average value of the points in the selected
         * range.</td>
         *
         * </tr>
         *
         * <tr>
         *
         * <td>`this.bins`</td>
         *
         * <td>The amount of the points in the selected range.</td>
         *
         * </tr>
         *
         * </table>
         *
         * @type {Function}
         *
         */
        formatter?: Templating.FormatterCallback<Measure>;
        /**
         * CSS styles for the measure label.
         *
         * @type    {Highcharts.CSSObject}
         * @default {"color": "#666666", "fontSize": "11px"}
         */
        style: CSSObject;
    }
    interface MeasureTypeOptions extends AnnotationTypeOptions {
        background: AnnotationShapeOptionsOptions;
        /**
         * Configure a crosshair that is horizontally placed in middle of
         * rectangle.
         *
         */
        crosshairX: MeasureTypeCrosshairOptions;
        /**
         * Configure a crosshair that is vertically placed in middle of
         * rectangle.
         */
        crosshairY: MeasureTypeCrosshairOptions;
        label: MeasureTypeLabelOptions;
        /**
         * Decides in what dimensions the user can resize by dragging the
         * mouse. Can be one of x, y or xy.
         */
        selectType: AnnotationDraggableValue;
        /**
         * This number defines which xAxis the point is connected to.
         * It refers to either the axis id or the index of the axis
         * in the xAxis array.
         */
        xAxis: number;
        /**
         * This number defines which yAxis the point is connected to.
         * It refers to either the axis id or the index of the axis
         * in the yAxis array.
         */
        yAxis: number;
    }
}
export default Measure;
