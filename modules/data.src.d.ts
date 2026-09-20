/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface AjaxSettingsObject {
        /**
         * The payload to send.
         */
        data?: (string|Dictionary<any>);
        /**
         * The data type expected.
         */
        dataType?: ("json"|"octet"|"text"|"xml");
        /**
         * Function to call on error.
         */
        error?: Function;
        /**
         * The headers; keyed on header name.
         */
        headers?: Dictionary<string>;
        /**
         * Function to call on success.
         */
        success?: Function;
        /**
         * The HTTP method to use. For example GET or POST.
         */
        type?: string;
        /**
         * The URL to call.
         */
        url: string;
    }
    interface Chart {
        /**
         * The data parser for this chart.
         */
        data?: Data;
    }
    interface DataTableOptionsObject {
        columns?: DataTableColumnCollection;
        id?: string;
    }
    /**
     * Utility functions for Ajax.
     */
    class HttpUtilities {}
    /**
     * Perform an Ajax call.
     *
     * @param settings
     *        The Ajax settings to use.
     *
     * @return Returns false, if error occurred.
     */
    function ajax(settings: AjaxSettingsObject): (false|undefined);
    /**
     * Creates a data object to parse data for a chart.
     */
    function data(): void;
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
    /**
     * Form the `values` field after range settings, unless the
     * googleSpreadsheetRange option is set.
     */
    function getRange(): void;
}
export default _Highcharts;
