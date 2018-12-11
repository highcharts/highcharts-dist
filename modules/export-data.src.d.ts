import * as globals from "../globals";
import * as Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    interface AjaxSettings {
        data: object;
        dataType: ("json"|"octet"|"text"|"xml");
        error: () => void;
        headers: object;
        success: () => void;
        type: ("delete"|"get"|"post"|"update");
        url: string;
    }
    interface Chart {
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
        getCSV(useLocalDecimalPoint: boolean): string;
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
         */
        getDataRows(multiLevelHeaders: boolean): Array<Array<(number|string)>>;
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
         */
        getTable(useLocalDecimalPoint: boolean): string;
        /**
         * Experimental function to send a chart's config to the Cloud for
         * editing.
         *
         * Limitations
         *
         * - All functions (formatters and callbacks) are removed since they're
         * not JSON.
         */
        openInCloud(): void;
        /**
         * Export-data module required. View the data in a table below the
         * chart.
         */
        viewData(): void;
    }
    /**
     * Perform an Ajax call.
     *
     * @param attr
     *        The Ajax settings to use.
     */
    function ajax(attr: AjaxSettings): void;
    /**
     * HTML encode some characters vulnerable for XSS.
     *
     * @param html
     *        The input string
     *
     * @return The excaped string
     */
    function htmlencode(html: string): string;
}
export default factory;
