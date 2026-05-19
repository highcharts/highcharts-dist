import type { DataEventDetail } from '../DataEvent';
import type CSVConverterOptions from './CSVConverterOptions';
import DataConverter from './DataConverter.js';
import type { ColumnCollection as DataTableColumnCollection } from '../DataTable.js';
/**
 * Handles parsing and transforming CSV to a table.
 *
 * @private
 */
declare class CSVConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: CSVConverterOptions;
    /**
     * Constructs an instance of the CSV parser.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the CSV parser.
     */
    constructor(options?: Partial<CSVConverterOptions>);
    private headers;
    private dataTypes;
    private guessedItemDelimiter?;
    private guessedDecimalPoint?;
    /**
     * Options for the DataConverter.
     */
    readonly options: CSVConverterOptions;
    /**
     * Parses the CSV string into a DataTable column collection.
     * Handles line and item delimiters, optional header row, and
     * applies pre-processing if a beforeParse callback is provided.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the parser.
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     * @return {DataTableColumnCollection}
     * The parsed column collection.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     */
    parse(options: Partial<CSVConverterOptions>, eventDetail?: DataEventDetail): DataTableColumnCollection;
    /**
     * Parses a single CSV row string into columns, handling delimiters,
     * quoted values, data type inference, and column range selection.
     */
    private parseCSVRow;
    /**
     * Internal method that guesses the delimiter from the first
     * 13 lines of the CSV
     * @param {string[]} lines
     * The CSV, split into lines
     */
    private guessDelimiter;
}
declare module './DataConverterType' {
    interface DataConverterTypes {
        CSV: typeof CSVConverter;
    }
}
export default CSVConverter;
