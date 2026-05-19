import type { DateFormatObject } from '../Data/Converters/DataConverter';
import type Options from '../Core/Options';
import Chart from '../Core/Chart/Chart.js';
import DataTableCore from '../Data/DataTableCore.js';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * The data parser for this chart.
         *
         * @requires modules/data
         */
        data?: Data;
    }
}
declare module '../Core/Options' {
    interface Options {
        /**
         * The Data module provides a simplified interface for adding data to
         * a chart from sources like CVS, HTML tables or grid views. See also
         * the [tutorial article on the Data module](
         * https://www.highcharts.com/docs/working-with-data/data-module).
         *
         * It requires the `modules/data.js` file to be loaded.
         *
         * Please note that the default way of adding data in Highcharts,
         * without the need of a module, is through the
         * [series._type_.data](#series.line.data) option.
         *
         * @sample {highcharts} highcharts/demo/column-parsed/
         *         HTML table
         * @sample {highcharts} highcharts/data/csv/
         *         CSV
         *
         * @since    4.0
         * @requires modules/data
         */
        data?: DataOptions;
    }
}
/**
 * Possible types for a data item in a column or row.
 */
type DataValueType = (number | string | null);
/**
 * Callback function to modify the CSV before parsing it by the data module.
 *
 * @callback Highcharts.DataBeforeParseCallbackFunction
 *
 * @param {string} csv
 *        The CSV to modify.
 *
 * @param {Highcharts.Data} ctx
 *        The Data instance.
 *
 * @return {string}
 *         The CSV to parse.
 */
interface DataBeforeParseCallbackFunction {
    (csv: string, ctx: Data): string;
}
interface DataColumnsArray extends Array<DataValueType> {
    isDatetime?: boolean;
    isNumeric?: boolean;
    mixed?: boolean;
    name?: string;
}
/**
 * Callback function that gets called after parsing data.
 *
 * @param {Highcharts.Options} chartOptions
 *        The chart options that were used.
 */
interface DataCompleteCallbackFunction {
    (chartOptions: Partial<Options>): void;
}
interface DataOptions {
    /**
     * A callback function to modify the CSV before parsing it. Returns the
     * modified string.
     *
     * @sample {highcharts} highcharts/demo/line-csv/
     *         Modify CSV before parse
     *
     * @since 6.1
     */
    beforeParse?: DataBeforeParseCallbackFunction;
    /**
     * A two-dimensional array representing the input data on tabular form.
     * This input can be used when the data is already parsed, for example
     * from a grid view component. Each cell can be a string or number.
     * If not switchRowsAndColumns is set, the columns are interpreted as
     * series.
     *
     * @see [data.rows](#data.rows)
     *
     * @sample {highcharts} highcharts/data/columns/
     *         Columns
     *
     * @since 4.0
     */
    columns?: Array<DataColumnsArray>;
    /**
     * A URL to a remote JSON dataset, structured as a column array.
     * Will be fetched when the chart is created using Ajax.
     *
     * @sample highcharts/demo/livedata-columns
     *         Columns with live polling
     */
    columnsURL?: string;
    /**
     * An array option that specifies the data type for each column in the
     * series loaded within the data module.
     *
     * Possible values: `"string"`, `"number"`, `"float"`, `"date"`.
     *
     * @sample {highcharts|highstock} highcharts/data/column-types/
     *         X-axis categories based on CSV data
     * @sample {highmaps} highcharts/data/column-types-map/
     *         Map chart created with fips from CSV
     *
     * @since 11.3.0
     */
    columnTypes?: Array<'string' | 'number' | 'float' | 'date'>;
    /**
     * The callback that is evaluated when the data is finished loading,
     * optionally from an external source, and parsed. The first argument
     * passed is a finished chart options object, containing the series.
     * These options can be extended with additional options and passed
     * directly to the chart constructor.
     *
     * @see [data.parsed](#data.parsed)
     *
     * @sample {highcharts} highcharts/data/complete/
     *         Modify data on complete
     *
     * @since 4.0
     */
    complete?: DataCompleteCallbackFunction;
    /**
     * A comma delimited string to be parsed. Related options are [startRow](
     * #data.startRow), [endRow](#data.endRow), [startColumn](#data.startColumn)
     * and [endColumn](#data.endColumn) to delimit what part of the table
     * is used. The [lineDelimiter](#data.lineDelimiter) and [itemDelimiter](
     * #data.itemDelimiter) options define the CSV delimiter formats.
     *
     * The built-in CSV parser doesn't support all flavours of CSV, so in
     * some cases it may be necessary to use an external CSV parser. See
     * [this example](https://jsfiddle.net/highcharts/u59176h4/) of parsing
     * CSV through the MIT licensed [Papa Parse](http://papaparse.com/)
     * library.
     *
     * @sample {highcharts} highcharts/data/csv/
     *         Data from CSV
     *
     * @since 4.0
     */
    csv?: string;
    /**
     * An URL to a remote CSV dataset. Will be fetched when the chart is created
     * using Ajax.
     *
     * @sample highcharts/demo/livedata-columns
     *         Categorized bar chart with CSV and live polling
     * @sample highcharts/data/livedata-csv
     *         Time based line chart with CSV and live polling
     */
    csvURL?: string;
    /**
     * Sets the refresh rate for data polling when importing remote dataset by
     * setting [data.csvURL](data.csvURL), [data.rowsURL](data.rowsURL),
     * [data.columnsURL](data.columnsURL), or
     * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
     *
     * Note that polling must be enabled by setting
     * [data.enablePolling](data.enablePolling) to true.
     *
     * The value is the number of seconds between pollings.
     * It cannot be set to less than 1 second.
     *
     * @sample highcharts/demo/live-data
     *         Live data with user set refresh rate
     *
     * @default 1
     */
    dataRefreshRate?: number;
    /**
     * Which of the predefined date formats in Date.prototype.dateFormats
     * to use to parse date values. Defaults to a best guess based on what
     * format gives valid and ordered dates.
     *
     * Valid options include: `YYYY/mm/dd`, `dd/mm/YYYY`, `mm/dd/YYYY`,
     * `dd/mm/YY`, `mm/dd/YY`.
     *
     * @see [data.parseDate](#data.parseDate)
     *
     * @sample {highcharts} highcharts/data/dateformat-auto/
     *         Best guess date format
     *
     * @since 4.0
     */
    dateFormat?: string;
    /**
     * The decimal point used for parsing numbers in the CSV.
     *
     * If both this and data.delimiter is set to `undefined`, the parser will
     * attempt to deduce the decimal point automatically.
     *
     * @sample {highcharts} highcharts/data/delimiters/
     *         Comma as decimal point
     *
     * @default '.'
     * @since   4.1.0
     */
    decimalPoint?: string;
    /**
     * Enables automatic refetching of remote datasets every _n_ seconds
     * (defined by setting [data.dataRefreshRate](data.dataRefreshRate)).
     *
     * Only works when either [data.csvURL](data.csvURL),
     * [data.rowsURL](data.rowsURL), [data.columnsURL](data.columnsURL), or
     * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
     *
     * @sample highcharts/demo/live-data
     *         Live data
     * @sample highcharts/demo/livedata-columns
     *         Categorized bar chart with CSV and live polling
     *
     * @default false
     */
    enablePolling?: boolean;
    /**
     * In tabular input data, the last column (indexed by 0) to use. Defaults
     * to the last column containing data.
     *
     * @sample {highcharts} highcharts/data/start-end/
     *         Limited data
     *
     * @since 4.0
     */
    endColumn?: number;
    /**
     * In tabular input data, the last row (indexed by 0) to use. Defaults
     * to the last row containing data.
     *
     * @sample {highcharts} highcharts/data/start-end/
     *         Limited data
     *
     * @since 4.0.4
     */
    endRow?: number;
    /**
     * Whether to use the first row in the data set as series names.
     *
     * @sample {highcharts} highcharts/data/start-end/
     *         Don't get series names from the CSV
     * @sample {highstock} highcharts/data/start-end/
     *         Don't get series names from the CSV
     *
     * @default true
     * @since   4.1.0
     * @product highcharts highstock gantt
     */
    firstRowAsNames?: boolean;
    /**
     * The Google Spreadsheet API key required for access generated at
     * [API Services / Credentials](https://console.cloud.google.com/apis/credentials).
     * See a comprehensive tutorial for setting up the key at the
     * [Hands-On Data Visualization](https://handsondataviz.org/google-sheets-api-key.html)
     * book website.
     *
     * @sample {highcharts} highcharts/data/google-spreadsheet/
     *         Load a Google Spreadsheet
     *
     * @since 9.2.2
     */
    googleAPIKey?: string;
    /**
     * The key or `spreadsheetId` value for a Google Spreadsheet to load. See
     * [developers.google.com](https://developers.google.com/sheets/api/guides/concepts)
     * for how to find the `spreadsheetId`.
     *
     * In order for Google Sheets to load, a valid [googleAPIKey](
     * #data.googleAPIKey) must also be given.
     *
     * @sample {highcharts} highcharts/data/google-spreadsheet/
     *         Load a Google Spreadsheet
     *
     * @since 4.0
     */
    googleSpreadsheetKey?: string;
    /**
     * The Google Spreadsheet `range` to use in combination with
     * [googleSpreadsheetKey](#data.googleSpreadsheetKey). See
     * [developers.google.com](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get)
     * for details.
     *
     * If given, it takes precedence over `startColumn`, `endColumn`, `startRow`
     * and `endRow`.
     *
     * ```js
     * googleSpreadsheetRange: 'Fruit Consumption' // Load a named worksheet
     * googleSpreadsheetRange: 'A:Z' // Load columns A to Z
     * ```
     *
     * @sample {highcharts} highcharts/data/google-spreadsheet/
     *         Load a Google Spreadsheet
     *
     * @since 9.2.2
     */
    googleSpreadsheetRange?: string;
    /**
     * Item or cell delimiter for parsing CSV. Defaults to the tab character
     * `\t` if a tab character is found in the CSV string, if not it defaults
     * to `,`.
     *
     * If this is set to false or undefined, the parser will attempt to deduce
     * the delimiter automatically.
     *
     * @sample {highcharts} highcharts/data/delimiters/
     *         Delimiters
     *
     * @since 4.0
     */
    itemDelimiter?: string;
    /**
     * Line delimiter for parsing CSV.
     *
     * @sample {highcharts} highcharts/data/delimiters/
     *         Delimiters
     *
     * @default '\n'
     * @since   4.0
     */
    lineDelimiter?: string;
    /**
     * A callback function to access the parsed columns, the two-dimensional
     * input data array directly, before they are interpreted into series
     * data and categories. Return `false` to stop completion, or call
     * `this.complete()` to continue async.
     *
     * @see [data.complete](#data.complete)
     *
     * @sample {highcharts} highcharts/data/parsed/
     *         Modify data after parse
     *
     * @since 4.0
     */
    parsed?: DataParsedCallbackFunction;
    /**
     * A callback function to parse string representations of dates into
     * JavaScript timestamps. Should return an integer timestamp on success.
     *
     * @see [dateFormat](#data.dateFormat)
     *
     * @since 4.0
     */
    parseDate?: DataParseDateCallbackFunction | false;
    /**
     * The same as the columns input option, but defining rows instead of
     * columns.
     *
     * @see [data.columns](#data.columns)
     *
     * @sample {highcharts} highcharts/data/rows/
     *         Data in rows
     *
     * @since 4.0
     */
    rows?: Array<DataColumnsArray>;
    /**
     * A URL to a remote JSON dataset, structured as a row array.
     * Will be fetched when the chart is created using Ajax.
     *
     * @sample highcharts/data/livedata-rows
     *         Rows with live polling
     */
    rowsURL?: string;
    /**
     * An array containing dictionaries for each series. A dictionary exists of
     * Point property names as the key and the CSV column index as the value.
     *
     * @sample {highcharts} highcharts/data/seriesmapping-label/
     *         Label from data set
     *
     * @since 4.0.4
     */
    seriesMapping?: Array<Record<string, number>>;
    /**
     * In tabular input data, the first column (indexed by 0) to use.
     *
     * @sample {highcharts} highcharts/data/start-end/
     *         Limited data
     *
     * @default 0
     * @since   4.0
     */
    startColumn?: number;
    /**
     * In tabular input data, the first row (indexed by 0) to use.
     *
     * @sample {highcharts} highcharts/data/start-end/
     *         Limited data
     *
     * @default 0
     * @since   4.0
     */
    startRow?: number;
    /**
     * Switch rows and columns of the input data, so that `this.columns`
     * effectively becomes the rows of the data set, and the rows are
     * interpreted as series.
     *
     * @sample {highcharts} highcharts/data/switchrowsandcolumns/
     *         Switch rows and columns
     *
     * @default false
     * @since   4.0
     */
    switchRowsAndColumns?: boolean;
    /**
     * An HTML table or the id of such to be parsed as input data. Related
     * options are `startRow`, `endRow`, `startColumn` and `endColumn` to
     * delimit what part of the table is used.
     *
     * @sample {highcharts} highcharts/demo/column-parsed/
     *         Parsed table
     *
     * @since 4.0
     */
    table?: (string | HTMLTableElement);
}
/**
 * Callback function to parse string representations of dates into
 * JavaScript timestamps (milliseconds since 1.1.1970).
 *
 * @param {string} dateValue
 *
 * @return {number}
 *         Timestamp (milliseconds since 1.1.1970) as integer for Date class.
 */
interface DataParseDateCallbackFunction {
    (dateValue: string): number;
}
/**
 * Callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories.
 *
 * @param {Array<Array<Highcharts.DataValueType>>} columns
 *        The parsed columns by the data module.
 * @param {Highcharts.Data} ctx
 *        The Data object instance.
 *
 * @return {boolean|undefined}
 *         Return `false` to stop completion, or call `this.complete()` to
 *         continue async.
 */
interface DataParsedCallbackFunction {
    (columns: Array<DataColumnsArray>, ctx: Data): (boolean | undefined);
}
/**
 * The Data class
 *
 * @requires modules/data
 *
 * @class
 * @name Highcharts.Data
 *
 * @param {Highcharts.DataOptions} dataOptions
 *
 * @param {Highcharts.Options} [chartOptions]
 *
 * @param {Highcharts.Chart} [chart]
 */
declare class Data {
    /**
     * Creates a data object to parse data for a chart.
     *
     * @function Highcharts.data
     */
    static data(dataOptions: DataOptions, chartOptions: Partial<Options> | undefined, chart: Chart): Data;
    /**
     * Reorganize rows into columns.
     *
     * @function Highcharts.Data.rowsToColumns
     */
    static rowsToColumns(rows: (Array<DataColumnsArray> | undefined)): (Array<DataColumnsArray> | undefined);
    constructor(dataOptions: DataOptions, chartOptions: Partial<Options> | undefined, chart: Chart);
    /**
     * The final parsed columns.
     */
    columns?: Array<DataColumnsArray>;
    /**
     * Parse a CSV input string
     *
     * @function Highcharts.Data#parseCSV
     */
    parseCSV(inOptions?: DataOptions): NonNullable<Data['columns']>;
    /**
     * Parse a HTML table
     *
     * @function Highcharts.Data#parseTable
     */
    parseTable(): Array<DataColumnsArray>;
    /**
     * Fetch or refetch live data
     *
     * @function Highcharts.Data#fetchLiveData
     *
     * @return {boolean}
     *         The URLs that were tried can be found in the options
     */
    fetchLiveData(): boolean;
    /**
     * Parse a Google spreadsheet.
     *
     * @function Highcharts.Data#parseGoogleSpreadsheet
     *
     * @return {boolean}
     *         Always returns false, because it is an intermediate fetch.
     */
    parseGoogleSpreadsheet(): boolean;
    /**
     * Trim a string from whitespaces.
     *
     * @function Highcharts.Data#trim
     *
     * @param {string} str
     *        String to trim
     *
     * @param {boolean} [inside=false]
     *        Remove all spaces between numbers.
     *
     * @return {string}
     *         Trimmed string
     */
    trim(str: string, inside?: boolean): string;
    /**
     * Parse numeric cells in to number types and date types in to true dates.
     *
     * @function Highcharts.Data#parseTypes
     */
    parseTypes(): void;
    /**
     * Parse a single column. Set properties like .isDatetime and .isNumeric.
     *
     * @function Highcharts.Data#parseColumn
     *
     * @param {Array<Highcharts.DataValueType>} column
     *        Column to parse
     *
     * @param {number} col
     *        Column index
     */
    parseColumn(column: NonNullable<Data['columns']>[number], col: number): void;
    /**
     * A collection of available date formats, extendable from the outside to
     * support custom date formats.
     *
     * @name Highcharts.Data#dateFormats
     * @type {Highcharts.Dictionary<Highcharts.DataDateFormatObject>}
     */
    dateFormats: Record<string, DateFormatObject>;
    /**
     * Parse a date and return it as a number. Overridable through
     * `options.parseDate`.
     *
     * @function Highcharts.Data#parseDate
     */
    parseDate(val: string): number;
    /**
     * Get the parsed data in a form that we can apply directly to the
     * `series.data` config. Array positions can be mapped using the
     * `series.keys` option.
     *
     * @example
     * const data = Highcharts.data({
     *   csv: document.getElementById('data').innerHTML
     * }).getData();
     *
     * @function Highcharts.Data#getData
     *
     * @return {Array<Array<DataValueType>>|undefined} Data rows
     */
    getData(): (Array<DataColumnsArray> | undefined);
    /**
     * Return a DataTable with the parsed data
     *
     * @example
     * const csv = await fetch(
     *   'https://www.example.com/sample-data.csv'
     * ).then(result => result.text());
     * const dataTable = new Highcharts.Data({ csv }).getDataTable();
     *
     * @sample highcharts/data/getdatatable
     *
     * @function Highcharts.Data#getDataTable
     *
     * @since next
     * @return {Highcharts.DataTable} DataTable with the parsed data
     */
    getDataTable(): DataTableCore;
    /**
     * A hook for working directly on the parsed columns
     *
     * @function Highcharts.Data#parsed
     */
    parsed(): (boolean | undefined);
    /**
     * Updates the chart with new data options.
     *
     * @function Highcharts.Data#update
     *
     * @param {Highcharts.DataOptions} options
     *        The new data options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the new options are set.
     */
    update(options: DataOptions, redraw?: boolean): void;
}
export default Data;
