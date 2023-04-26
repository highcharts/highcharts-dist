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
    /**
     * The ColorAxis object for inclusion in gradient legends.
     */
    class ColorAxis extends Axis {
        /**
         * The ColorAxis object for inclusion in gradient legends.
         *
         * @param chart
         *        The related chart of the color axis.
         *
         * @param userOptions
         *        The color axis options for initialization.
         */
        constructor(chart: Chart, userOptions: ColorAxisOptions);
        /**
         * Internal function to draw a crosshair.
         *
         * @param e
         *        The event arguments from the modified pointer event, extended
         *        with `chartX` and `chartY`
         *
         * @param point
         *        The Point object if the crosshair snaps to points.
         *
         * @fires Highcharts.ColorAxis#afterDrawCrosshair
         * @fires Highcharts.ColorAxis#drawCrosshair
         */
        drawCrosshair(e?: PointerEventObject, point?: Point): void;
        /**
         * Returns true if the series has points at all.
         *
         * @return True, if the series has points, otherwise false.
         */
        hasData(): boolean;
        /**
         * Initializes the color axis.
         *
         * @param chart
         *        The related chart of the color axis.
         *
         * @param userOptions
         *        The color axis options for initialization.
         */
        init(chart: Chart, userOptions: ColorAxisOptions): void;
        /**
         * Removes the color axis and the related legend item.
         *
         * @param redraw
         *        Whether to redraw the chart following the remove.
         */
        remove(redraw?: boolean): void;
        /**
         * Updates a color axis instance with a new set of options. The options
         * are merged with the existing options, so only new or altered options
         * need to be specified.
         *
         * @param newOptions
         *        The new options that will be merged in with existing options
         *        on the color axis.
         *
         * @param redraw
         *        Whether to redraw the chart after the color axis is altered.
         *        If doing more operations on the chart, it is a good idea to
         *        set redraw to `false` and call Highcharts.Chart#redraw after.
         */
        update(newOptions: ColorAxisOptions, redraw?: boolean): void;
    }
}
export default factory;
export let Highcharts: typeof _Highcharts;
