import type { AnnotationOptions } from './AnnotationOptions';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import AnnotationChart from './AnnotationChart.js';
import ControlTarget from './ControlTarget.js';
import EventEmitter from './EventEmitter.js';
declare module '../../Core/Options' {
    interface DefaultOptions {
        annotations?: AnnotationOptions;
    }
    interface Options {
        /**
         * A collection of annotations to add to the chart. The basic annotation
         * allows adding custom labels or shapes. The items can be tied to
         * points, axis coordinates or chart pixel coordinates.
         *
         * General options for all annotations can be set using the
         * `Highcharts.setOptions` function. In this case only single objects
         * are supported, because it alters the defaults for all items. For
         * initialization in the chart constructors however, arrays of
         * annotations are supported.
         *
         * See more in the [general docs](https://www.highcharts.com/docs/advanced-chart-features/annotations).
         *
         * @sample highcharts/annotations/basic/ Basic annotations
         * @sample highcharts/demo/annotations/ Annotated chart
         * @sample highcharts/css/annotations Styled mode
         * @sample highcharts/annotations-advanced/controllable
         *         Controllable items
         * @sample {highstock} stock/annotations/fibonacci-retracements
         *         Custom annotation, Fibonacci retracement
         * @sample highcharts/annotations/shape/
         *         Themed crooked line annotation
         *
         * @type         {Array<*>}
         * @since        6.0.0
         * @requires     modules/annotations
         * @optionparent annotations
         */
        annotations?: (AnnotationOptions | Array<AnnotationOptions>);
    }
}
/**
 * An annotation class which serves as a container for items like labels or
 * shapes. Created items are positioned on the chart either by linking them to
 * existing points or created mock points.
 *
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.Annotation
 *
 * @param {Highcharts.Chart} chart
 *        A chart instance
 * @param {Highcharts.AnnotationsOptions} userOptions
 *        The annotation options
 */
declare class Annotation extends EventEmitter implements ControlTarget {
    constructor(chart: AnnotationChart, userOptions: AnnotationOptions);
    /**
     * The chart that the annotation belongs to.
     *
     * @name Highcharts.Annotation#chart
     * @type {Highcharts.Chart}
     */
    chart: AnnotationChart;
    /**
     * The group svg element.
     *
     * @name Highcharts.Annotation#group
     * @type {Highcharts.SVGElement}
     */
    group: SVGElement;
    /**
     * The group svg element of the annotation's labels.
     *
     * @name Highcharts.Annotation#labelsGroup
     * @type {Highcharts.SVGElement}
     */
    labelsGroup: SVGElement;
    /**
     * The options for the annotations.
     *
     * @name Highcharts.Annotation#options
     * @type {Highcharts.AnnotationsOptions}
     */
    options: AnnotationOptions;
    /**
     * The group svg element of the annotation's shapes.
     *
     * @name Highcharts.Annotation#shapesGroup
     * @type {Highcharts.SVGElement}
     */
    shapesGroup: SVGElement;
    /**
     * The user options for the annotations.
     *
     * @name Highcharts.Annotation#userOptions
     * @type {Highcharts.AnnotationsOptions}
     */
    userOptions: AnnotationOptions;
    /**
     * Updates an annotation.
     *
     * @function Highcharts.Annotation#update
     *
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        New user options for the annotation.
     * @param {boolean} [redraw]
     *        Whether to redraw the chart's annotations.
     */
    update(userOptions: AnnotationOptions, redraw?: boolean): void;
}
export default Annotation;
