import type { AnnotationOptions } from './AnnotationOptions';
import type Chart from '../../Core/Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import Annotation from './Annotation.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Add an annotation to the chart after render time.
         *
         * @sample highcharts/annotations/add-annotation/
         *         Add annotation
         *
         * @function Highcharts.Chart#addAnnotation
         *
         * @param  {Highcharts.AnnotationsOptions} options
         *         The annotation options for the new, detailed annotation.
         *
         * @param {boolean} [redraw]
         *
         * @return {Highcharts.Annotation}
         *         The newly generated annotation.
         *
         * @requires modules/annotations
         */
        addAnnotation(options: DeepPartial<AnnotationOptions>, redraw?: boolean): Annotation;
        /**
         * Remove an annotation from the chart.
         *
         * @function Highcharts.Chart#removeAnnotation
         *
         * @param {number|string|Highcharts.Annotation} idOrAnnotation
         *        The annotation's id or direct annotation object.
         */
        removeAnnotation(idOrAnnotation: (number | string | Annotation)): void;
    }
}
declare class AnnotationChart extends Chart {
}
export default AnnotationChart;
