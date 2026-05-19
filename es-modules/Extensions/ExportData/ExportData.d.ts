import type { EventCallback } from '../../Core/Callback';
import AST from '../../Core/Renderer/HTML/AST.js';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Deprecated. Use
         * [Exporting.downloadCSV](https://api.highcharts.com/class-reference/Highcharts.Exporting#downloadCSV)
         * instead.
         *
         * @deprecated 12.2.0
         */
        downloadCSV(): void;
        /**
         * Deprecated. Use
         * [Exporting.downloadXLS](https://api.highcharts.com/class-reference/Highcharts.Exporting#downloadXLS)
         * instead.
         *
         * @deprecated 12.2.0
         */
        downloadXLS(): void;
        /**
         * Deprecated. Use
         * [Exporting.getCSV](https://api.highcharts.com/class-reference/Highcharts.Exporting#getCSV)
         * instead.
         *
         * @deprecated 12.2.0
         */
        getCSV(useLocalDecimalPoint?: boolean): (string | undefined);
        /**
         * Deprecated. Use
         * [Exporting.getDataRows](https://api.highcharts.com/class-reference/Highcharts.Exporting#getDataRows)
         * instead.
         *
         * @deprecated 12.2.0
         */
        getDataRows(multiLevelHeaders?: boolean): (Array<Array<(number | string)>> | undefined);
        /**
         * Deprecated. Use
         * [Exporting.getTable](https://api.highcharts.com/class-reference/Highcharts.Exporting#getTable)
         * instead.
         *
         * @deprecated 12.2.0
         */
        getTable(useLocalDecimalPoint?: boolean): (string | undefined);
        /**
         * Deprecated. Use
         * [Exporting.getTableAST](https://api.highcharts.com/class-reference/Highcharts.Exporting#getTableAST)
         * instead.
         *
         * @deprecated 12.2.0
         */
        getTableAST(useLocalDecimalPoint?: boolean): (AST.Node | undefined);
        /**
         * Deprecated. Use
         * [Exporting.hideData](https://api.highcharts.com/class-reference/Highcharts.Exporting#hideData)
         * instead.
         *
         * @deprecated 12.2.0
         */
        hideData(): void;
        /**
         * Deprecated. Use
         * [Exporting.toggleDataTable](https://api.highcharts.com/class-reference/Highcharts.Exporting#toggleDataTable)
         * instead.
         *
         * @deprecated 12.2.0
         */
        toggleDataTable(show?: boolean): void;
        /**
         * Deprecated. Use
         * [Exporting.viewData](https://api.highcharts.com/class-reference/Highcharts.Exporting#viewData)
         * instead.
         *
         * @deprecated 12.2.0
         */
        viewData(): void;
    }
}
declare module '../../Extensions/Exporting/ExportingBase' {
    interface ExportingBase {
        /**
         * Generates a data URL of CSV for local download in the browser. This
         * is the default action for a click on the 'Download CSV' button.
         *
         * See {@link Highcharts.Exporting#getCSV} to get the CSV data itself.
         *
         * @function Highcharts.Exporting#downloadCSV
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        downloadCSV(): void;
        /**
         * Generates a data URL of an XLS document for local download in the
         * browser. This is the default action for a click on the 'Download XLS'
         * button.
         *
         * See {@link Highcharts.Exporting#getTable} to get the table data
         * itself.
         *
         * @function Highcharts.Exporting#downloadXLS
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        downloadXLS(): void;
        /**
         * Returns the current chart data as a CSV string.
         *
         * @function Highcharts.Exporting#getCSV
         *
         * @param {boolean} [useLocalDecimalPoint]
         * Whether to use the local decimal point as detected from the browser.
         * This makes it easier to export data to Excel in the same locale as
         * the user is.
         *
         * @return {string}
         * CSV representation of the data.
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        getCSV(useLocalDecimalPoint?: boolean): string;
        /**
         * Returns a two-dimensional array containing the current chart data.
         *
         * @function Highcharts.Exporting#getDataRows
         *
         * @param {boolean} [multiLevelHeaders]
         * Use multilevel headers for the rows by default. Adds an extra row
         * with top level headers. If a custom columnHeaderFormatter is defined,
         * this can override the behavior.
         *
         * @return {Array<Array<(number | string)>>}
         * The current chart data
         *
         * @emits Highcharts.Chart#event:exportData
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        getDataRows(multiLevelHeaders?: boolean): Array<Array<(number | string)>>;
        /**
         * Build a HTML table with the chart's current data.
         *
         * @sample highcharts/export-data/viewdata/
         * View the data from the export menu
         *
         * @function Highcharts.Exporting#getTable
         *
         * @param {boolean} [useLocalDecimalPoint]
         * Whether to use the local decimal point as detected from the browser.
         * This makes it easier to export data to Excel in the same locale as
         * the user is.
         *
         * @return {string}
         * HTML representation of the data.
         *
         * @emits Highcharts.Chart#event:afterGetTable
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        getTable(useLocalDecimalPoint?: boolean): string;
        /**
         * Hide the data table when visible.
         *
         * @function Highcharts.Exporting#hideData
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        hideData(): void;
        /**
         * View the data in a table below the chart.
         *
         * @function Highcharts.Exporting#viewData
         *
         * @emits Highcharts.Chart#event:afterViewData
         *
         * @requires modules/exporting
         * @requires modules/export-data
         */
        viewData(): void;
    }
}
declare module '../../Core/Chart/ChartOptions' {
    interface ChartEventsOptions {
        /**
         * Callback that fires while exporting data. This allows the
         * modification of data rows before processed into the final format.
         *
         * @type      {Highcharts.ExportDataCallbackFunction}
         * @since     7.2.0
         * @context   Highcharts.Chart
         * @requires  modules/exporting
         * @requires  modules/export-data
         * @apioption chart.events.exportData
         */
        exportData?: ExportDataCallbackFunction;
    }
}
/**
 * Function callback to execute while data rows are processed for exporting.
 * This allows the modification of data rows before processed into the final
 * format.
 *
 * @callback Highcharts.ExportDataCallbackFunction
 * @extends Highcharts.EventCallbackFunction<Highcharts.Chart>
 *
 * @param {Highcharts.Chart} this
 * Chart context where the event occurred.
 *
 * @param {Highcharts.ExportDataEventObject} event
 * Event object with data rows that can be modified.
 */
export interface ExportDataCallbackFunction extends EventCallback<Chart> {
    (this: Chart, event: ExportDataEventObject): void;
}
/**
 * Contains information about the export data event.
 *
 * @interface Highcharts.ExportDataEventObject
 */
export interface ExportDataEventObject {
    /**
     * Contains the data rows for the current export task and can be modified.
     * @name Highcharts.ExportDataEventObject#dataRows
     * @type {Array<Array<string>>}
     */
    dataRows: Array<Array<string>>;
}
