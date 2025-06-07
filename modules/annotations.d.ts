/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface Chart {
        /**
         * Add an annotation to the chart after render time.
         *
         * @param options
         *        The annotation options for the new, detailed annotation.
         *
         * @return The newly generated annotation.
         */
        addAnnotation(options: AnnotationsOptions, redraw?: boolean): Annotation;
        /**
         * Remove an annotation from the chart.
         *
         * @param idOrAnnotation
         *        The annotation's id or direct annotation object.
         */
        removeAnnotation(idOrAnnotation: (number|string|Annotation)): void;
    }
    interface Point {
        mock?: boolean;
    }
}
export default _Highcharts;
