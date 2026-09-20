/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
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
export default _Highcharts;
