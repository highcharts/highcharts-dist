import type { PointOptions, PointShortOptions } from '../../Core/Series/PointOptions';
import type { SeriesTypeOptions } from '../../Core/Series/SeriesType';
import DataTableCore from '../../Data/DataTableCore.js';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        /**
         * Highcharts Stock only. If a point object is created by data
         * grouping, it doesn't reflect actual points in the raw
         * data. In this case, the `dataGroup` property holds
         * information that points back to the raw data.
         *
         * - `dataGroup.start` is the index of the first raw data
         *   point in the group.
         *
         * - `dataGroup.length` is the amount of points in the
         *   group.
         *
         * @sample stock/members/point-datagroup
         *         Click to inspect raw data points
         *
         * @product highstock
         *
         * @name Highcharts.Point#dataGroup
         * @type {Highcharts.DataGroupingInfoObject|undefined}
         */
        dataGroup?: DataGroupingInfoObject;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        /**
         * Highcharts Stock only. Takes parallel arrays of x and y data and
         * groups the data into intervals defined by groupPositions, a
         * collection of starting x values for each group.
         *
         * @product highstock
         *
         * @function Highcharts.Series#groupData
         * @param {Highcharts.DataTable} table
         *        The series data table.
         * @param {Array<number>} groupPositions
         *        Group positions.
         * @param {string|Function} [approximation]
         *        Approximation to use.
         * @return {Highcharts.DataGroupingResultObject}
         *         Mapped groups.
         */
        groupData(table: DataTableCore, groupPositions: Array<number>, approximation: (string | Function)): DataGroupingResultObject;
    }
}
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingInfoObject
 */
export interface DataGroupingInfoObject {
    /**
     * @name Highcharts.DataGroupingInfoObject#length
     * @type {number}
     */
    length?: number;
    /**
     * @name Highcharts.DataGroupingInfoObject#options
     * @type {Highcharts.SeriesOptionsType|undefined}
     */
    options?: (PointOptions | PointShortOptions | SeriesTypeOptions);
    /**
     * @name Highcharts.DataGroupingInfoObject#start
     * @type {number}
     */
    start?: number;
}
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingResultObject
 */
export interface DataGroupingResultObject {
    /**
     * @name Highcharts.DataGroupingResultObject#modified
     * @type {Highcharts.DataTable}
     */
    modified: DataTableCore;
    /**
     * @name Highcharts.DataGroupingResultObject#groupMap
     * @type {Array<Highcharts.DataGroupingInfoObject>}
     */
    groupMap: Array<DataGroupingInfoObject>;
}
