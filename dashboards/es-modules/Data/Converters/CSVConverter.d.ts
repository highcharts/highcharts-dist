import type DataEvent from '../DataEvent';
import type DataConnector from '../Connectors/DataConnector';
import DataConverter from './DataConverter.js';
import DataTable from '../DataTable.js';
/**
 * Handles parsing and transforming CSV to a table.
 *
 * @private
 */
declare class CSVConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: CSVConverter.Options;
    /**
     * Constructs an instance of the CSV parser.
     *
     * @param {CSVConverter.UserOptions} [options]
     * Options for the CSV parser.
     */
    constructor(options?: CSVConverter.UserOptions);
    private columns;
    private headers;
    private dataTypes;
    private guessedItemDelimiter?;
    private guessedDecimalPoint?;
    /**
     * Options for the DataConverter.
     */
    readonly options: CSVConverter.Options;
    /**
     * Creates a CSV string from the datatable on the connector instance.
     *
     * @param {DataConnector} connector
     * Connector instance to export from.
     *
     * @param {CSVConverter.Options} [options]
     * Options used for the export.
     *
     * @return {string}
     * CSV string from the connector table.
     */
    export(connector: DataConnector, options?: CSVConverter.Options): string;
    /**
     * Initiates parsing of CSV
     *
     * @param {CSVConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     */
    parse(options: CSVConverter.UserOptions, eventDetail?: DataEvent.Detail): void;
    /**
     * Internal method that parses a single CSV row
     */
    private parseCSVRow;
    /**
     * Internal method that guesses the delimiter from the first
     * 13 lines of the CSV
     * @param {Array<string>} lines
     * The CSV, split into lines
     */
    private guessDelimiter;
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed CSV.
     */
    getTable(): DataTable;
}
declare namespace CSVConverter {
    /**
     * Interface for the BeforeParse callback function
     */
    interface DataBeforeParseCallbackFunction {
        (csv: string): string;
    }
    /**
     * Options for the CSV parser that are compatible with ClassJSON
     */
    interface Options extends DataConverter.Options {
        csv?: string;
        decimalPoint?: string;
        itemDelimiter?: string;
        lineDelimiter: string;
        useLocalDecimalPoint?: boolean;
        usePresentationOrder?: boolean;
    }
    /**
     * Options that are not compatible with ClassJSON
     */
    interface SpecialOptions {
        beforeParse?: DataBeforeParseCallbackFunction;
        decimalRegex?: RegExp;
    }
    /**
     * Avaliable options of the CSVConverter.
     */
    type UserOptions = Partial<(Options & SpecialOptions)>;
}
export default CSVConverter;
