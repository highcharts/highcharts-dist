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
     * Callback that fires after the end of Networkgraph series simulation when
     * the layout is stable.
     *
     * @param this
     *        The series where the event occured.
     *
     * @param event
     *        The event that occured.
     */
    type NetworkgraphAfterSimulationCallbackFunction = (this: Series, event: Event) => void;
}
export default factory;
export let Highcharts: typeof _Highcharts;
