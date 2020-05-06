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
    interface AjaxSettingsObject {
        data: (string|Dictionary<any>);
        dataType: ("json"|"octet"|"text"|"xml");
        error: Function;
        headers: Dictionary<string>;
        success: Function;
        type: ("DELETE"|"GET"|"POST"|"UPDATE");
        url: string;
    }
    interface Chart {
        /**
         * Generates a data URL of CSV for local download in the browser. This
         * is the default action for a click on the 'Download CSV' button.
         *
         * See Highcharts.Chart#getCSV to get the CSV data itself.
         */
        downloadCSV(): void;
        /**
         * Generates a data URL of an XLS document for local download in the
         * browser. This is the default action for a click on the 'Download XLS'
         * button.
         *
         * See Highcharts.Chart#getTable to get the table data itself.
         */
        downloadXLS(): void;
        /**
         * Export-data module required. Returns the current chart data as a CSV
         * string.
         *
         * @param useLocalDecimalPoint
         *        Whether to use the local decimal point as detected from the
         *        browser. This makes it easier to export data to Excel in the
         *        same locale as the user is.
         *
         * @return CSV representation of the data
         */
        getCSV(useLocalDecimalPoint?: boolean): string;
        /**
         * Export-data module required. Returns a two-dimensional array
         * containing the current chart data.
         *
         * @param multiLevelHeaders
         *        Use multilevel headers for the rows by default. Adds an extra
         *        row with top level headers. If a custom columnHeaderFormatter
         *        is defined, this can override the behavior.
         *
         * @return The current chart data
         *
         * @fires Highcharts.Chart#exportData
         */
        getDataRows(multiLevelHeaders?: boolean): Array<Array<(number|string)>>;
        /**
         * Export-data module required. Build a HTML table with the chart's
         * current data.
         *
         * @param useLocalDecimalPoint
         *        Whether to use the local decimal point as detected from the
         *        browser. This makes it easier to export data to Excel in the
         *        same locale as the user is.
         *
         * @return HTML representation of the data.
         *
         * @fires Highcharts.Chart#afterGetTable
         */
        getTable(useLocalDecimalPoint?: boolean): string;
        /**
         * Export-data module required. View the data in a table below the
         * chart.
         *
         * @fires Highcharts.Chart#afterViewData
         */
        viewData(): void;
    }
    /**
     * Perform an Ajax call.
     *
     * @param attr
     *        The Ajax settings to use.
     *
     * @return Returns false, if error occured.
     */
    function ajax(attr: Partial<AjaxSettingsObject>): (false|undefined);
    /**
     * Get a JSON resource over XHR, also supporting CORS without preflight.
     *
     * @param url
     *        The URL to load.
     *
     * @param success
     *        The success callback. For error handling, use the
     *        `Highcharts.ajax` function instead.
     */
    function getJSON(url: string, success: Function): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;
