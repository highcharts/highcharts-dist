import type DataEvent from '../DataEvent';
import DataConverter from './DataConverter.js';
import DataTable from '../DataTable.js';
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
declare class JSONConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: JSONConverter.Options;
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {JSONConverter.UserOptions} [options]
     * Options for the JSON parser.
     */
    constructor(options?: JSONConverter.UserOptions);
    private columns;
    private headers;
    private dataTypes;
    /**
     * Options for the DataConverter.
     */
    readonly options: JSONConverter.Options;
    private table;
    /**
     * Initiates parsing of JSON structure.
     *
     * @param {JSONConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    parse(options: JSONConverter.UserOptions, eventDetail?: DataEvent.Detail): void;
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed CSV.
     */
    getTable(): DataTable;
}
declare namespace JSONConverter {
    /**
     * Interface for the BeforeParse callback function
     */
    interface DataBeforeParseCallbackFunction {
        (data: Data): Data;
    }
    /**
     * Options for the JSON parser that are compatible with ClassJSON
     */
    interface Options extends DataConverter.Options {
        columnNames?: Array<string>;
        data: Data;
        orientation: 'columns' | 'rows';
    }
    type Data = Array<Array<number | string> | Record<string, number | string>>;
    /**
     * Options that are not compatible with ClassJSON
     */
    interface SpecialOptions {
        beforeParse?: DataBeforeParseCallbackFunction;
    }
    /**
     * Available options of the JSONConverter.
     */
    type UserOptions = Partial<(Options & SpecialOptions)>;
}
export default JSONConverter;
