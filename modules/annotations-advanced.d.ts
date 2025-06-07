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
        /**
         * Indicates if this is a mock point for an annotation.
         */
        mock?: boolean;
    }
    /**
     * Function which generates the path of the halfcircle.
     *
     * @param pixelInterval
     *        diameter of the circle in pixels
     *
     * @param numberOfCircles
     *        number of cricles
     *
     * @param startX
     *        x position of the first circle
     *
     * @param y
     *        y position of the bottom of the timeCycles
     *
     * @return path
     */
    function getCirclePath(pixelInterval: number, numberOfCircles: number, startX: number, y: number): string;
    /**
     * Function to create start of the path.
     *
     * @param x
     *        x position of the TimeCycles
     *
     * @param y
     *        y position of the TimeCycles
     *
     * @return path
     */
    function getStartingPath(x: number, y: number): string;
}
export default _Highcharts;
