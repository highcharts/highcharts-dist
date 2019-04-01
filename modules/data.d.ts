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
    /**
     * Callback function that returns the correspondig Date object to a match.
     */
    type DataDateFormatCallbackFunction = (match: Array<number>) => Date;
    interface AjaxSettings {
        /**
         * The payload to send.
         */
        data: object;
        /**
         * The data type expected.
         */
        dataType: ("json"|"octet"|"text"|"xml");
        /**
         * Function to call on error.
         */
        error: Function;
        /**
         * The headers; keyed on header name.
         */
        headers: object;
        /**
         * Function to call on success.
         */
        success: Function;
        /**
         * The verb to use.
         */
        type: ("delete"|"get"|"post"|"update");
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
         */
        complete(): void;
        /**
         * Fetch or refetch live data
         *
         * @return The first URL that was tried.
         */
        fetchLiveData(): string;
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
        getData(): Array<Array<any>>;
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
        parseColumn(column: Array<any>, col: number): void;
        /**
         * Parse a CSV input string
         */
        parseCSV(inOptions: DataOptions): Array<Array<any>>;
        /**
         * A hook for working directly on the parsed columns
         */
        parsed(): any;
        /**
         * Parse a date and return it as a number. Overridable through
         * `options.parseDate`.
         */
        parseDate(val: string): Date;
        /**
         * Parse a Google spreadsheet.
         *
         * @return Always returns false, because it is an intermediate fetch.
         */
        parseGoogleSpreadsheet(): boolean;
        /**
         * Parse a HTML table
         */
        parseTable(): Array<Array<any>>;
        /**
         * Parse numeric cells in to number types and date types in to true
         * dates.
         */
        parseTypes(): void;
        /**
         * Reorganize rows into columns.
         */
        rowsToColumns(rows: Array<Array<any>>): Array<Array<any>>;
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
         */
        update(options: DataOptions, redraw?: boolean): void;
    }
    /**
     * Perform an Ajax call.
     *
     * @param attr
     *        The Ajax settings to use.
     */
    function ajax(attr: AjaxSettings): void;
    /**
     * Creates a data object to parse data for a chart.
     */
    function data(dataOptions: DataOptions, chartOptions?: Options, chart?: Chart): Data;
}
export default factory;
export let Highcharts: typeof _Highcharts;
