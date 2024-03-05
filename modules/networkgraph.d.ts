/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts" {
    /**
     * Callback that fires after the end of Networkgraph series simulation when
     * the layout is stable.
     *
     * @param this
     *        The series where the event occurred.
     *
     * @param event
     *        The event that occurred.
     */
    type NetworkgraphAfterSimulationCallbackFunction = (this: Series, event: Event) => void;
}
export default factory;
export let Highcharts: typeof _Highcharts;
