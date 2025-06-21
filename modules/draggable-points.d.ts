/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * Point hover event. We use a short timeout due to issues with coordinating
     * point mouseover/out events on dragHandles and points.
     *
     * Particularly arearange series are finicky since the markers are not
     * individual points. This logic should preferably be improved in the
     * future.
     *
     * Notice that the mouseOut event below must have a shorter timeout to
     * ensure event order.
     */
    function onPointMouseOver(): void;
}
export default _Highcharts;
