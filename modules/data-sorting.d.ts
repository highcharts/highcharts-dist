/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
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
