import * as globals from "../globals";
import * as Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    /**
     * Builds the tree of categories and calculates its positions.
     *
     * @param e
     *        Event object
     *
     * @param target
     *        The chart instance which the event was fired on.
     *
     * @param axes
     *        The axes of the chart.
     */
    function onBeforeRender(e: object, target: object, axes: Array<object>): void;
}
export default factory;
