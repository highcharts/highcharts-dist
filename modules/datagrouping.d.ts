/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface Axis {
        /**
         * (Highstock) Check the groupPixelWidth and apply the grouping if
         * needed. Fired only after processing the data.
         */
        applyGrouping(): void;
        /**
         * (Highstock) Highcharts Stock only. Force data grouping on all the
         * axis' series.
         *
         * @param dataGrouping
         *        A `dataGrouping` configuration. Use `false` to disable data
         *        grouping dynamically.
         *
         * @param redraw
         *        Whether to redraw the chart or wait for a later call to
         *        Chart#redraw.
         */
        setDataGrouping(dataGrouping?: (boolean|DataGroupingOptionsObject), redraw?: boolean): void;
    }
    /**
     * (Highstock) Highcharts Stock only.
     */
    interface DataGroupingInfoObject {
        length: number;
        options?: SeriesOptionsType;
        start: number;
    }
    /**
     * (Highstock) Highcharts Stock only.
     */
    interface DataGroupingResultObject {
        groupedXData: Array<number>;
        groupedYData: (Array<(number|null|undefined)>|Array<Array<(number|null|undefined)>>);
        groupMap: Array<DataGroupingInfoObject>;
    }
    interface DataTableOptions {
        columns?: DataTableColumnCollection;
        id?: string;
    }
    interface Point {
        /**
         * (Highstock) Highcharts Stock only. If a point object is created by
         * data grouping, it doesn't reflect actual points in the raw data. In
         * this case, the `dataGroup` property holds information that points
         * back to the raw data.
         *
         * - `dataGroup.start` is the index of the first raw data point in the
         * group.
         *
         * - `dataGroup.length` is the amount of points in the group.
         */
        dataGroup?: DataGroupingInfoObject;
    }
    interface Series {
        /**
         * (Highstock) Highcharts Stock only. Takes parallel arrays of x and y
         * data and groups the data into intervals defined by groupPositions, a
         * collection of starting x values for each group.
         *
         * @param table
         *        The series data table.
         *
         * @param groupPositions
         *        Group positions.
         *
         * @param approximation
         *        Approximation to use.
         *
         * @return Mapped groups.
         */
        groupData(table: DataTable, groupPositions: Array<number>, approximation?: (string|Function)): DataGroupingResultObject;
    }
}
export default _Highcharts;
