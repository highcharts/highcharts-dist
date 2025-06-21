/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * Callback function that returns the corresponding Date object to a match.
     */
    type DataDateFormatCallbackFunction = (match: Array<number>) => number;
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
    /**
     * Structure for alternative date formats to parse.
     */
    interface DataDateFormatObject {
        alternative?: string;
        parser: DataDateFormatCallbackFunction;
        regex: RegExp;
    }
    /**
     * The Data class
     */
    class Data {
        /**
         * Reorganize rows into columns.
         */
        static rowsToColumns(): void;
        /**
         * The Data class
         */
        constructor(dataOptions: DataOptions, chartOptions?: Options, chart?: Chart);
        /**
         * A collection of available date formats, extendable from the outside
         * to support custom date formats.
         */
        dateFormats: Dictionary<DataDateFormatObject>;
        /**
         * If a complete callback function is provided in the options, interpret
         * the columns into a Highcharts options object.
         *
         * The function requires that the context has the `valueCount` property
         * set.
         */
        complete(): void;
        /**
         * Fetch or refetch live data
         *
         * @return The URLs that were tried can be found in the options
         */
        fetchLiveData(): boolean;
        /**
         * Get the column distribution. For example, a line series takes a
         * single column for Y values. A range series takes two columns for low
         * and high values respectively, and an OHLC series takes four columns.
         */
        getColumnDistribution(): void;
        /**
         * Get the parsed data in a form that we can apply directly to the
         * `series.data` config. Array positions can be mapped using the
         * `series.keys` option.
         *
         * @return Data rows
         */
        getData(): (Array<Array<DataValueType>>|undefined);
        /**
         * Parse a single column. Set properties like .isDatetime and
         * .isNumeric.
         *
         * @param column
         *        Column to parse
         *
         * @param col
         *        Column index
         */
        parseColumn(column: Array<DataValueType>, col: number): void;
        /**
         * Parse a CSV input string
         */
        parseCSV(): void;
        /**
         * A hook for working directly on the parsed columns
         */
        parsed(): void;
        /**
         * Parse a date and return it as a number. Overridable through
         * `options.parseDate`.
         */
        parseDate(): void;
        /**
         * Parse a Google spreadsheet.
         *
         * @return Always returns false, because it is an intermediate fetch.
         */
        parseGoogleSpreadsheet(): boolean;
        /**
         * Parse a HTML table
         */
        parseTable(): void;
        /**
         * Parse numeric cells in to number types and date types in to true
         * dates.
         */
        parseTypes(): void;
        /**
         * Trim a string from whitespaces.
         *
         * @param str
         *        String to trim
         *
         * @param inside
         *        Remove all spaces between numbers.
         *
         * @return Trimed string
         */
        trim(str: string, inside?: boolean): string;
        /**
         * Updates the chart with new data options.
         *
         * @param options
         *        The new data options.
         *
         * @param redraw
         *        Whether to redraw the chart after the new options are set.
         */
        update(options: DataOptions, redraw?: boolean): void;
    }
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
    function hasURLOption(): void;
}
export default _Highcharts;
