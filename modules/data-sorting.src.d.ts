/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * Sort and return chart series in order depending on the number of linked
     * series.
     */
    function getSeriesOrderByLinks(): void;
    /**
     * Set properties for a series if data sorting is enabled.
     */
    function setDataSortingProperties(): void;
    /**
     * Set data for all series with enabled sorting.
     */
    function setSortedData(): void;
}
export default _Highcharts;
