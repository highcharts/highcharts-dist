import type DataEvent from '../DataEvent';
import type DataConnector from '../Connectors/DataConnector';
import DataConverter from './DataConverter.js';
import DataTable from '../DataTable.js';
/**
 * Handles parsing and transformation of an HTML table to a table.
 *
 * @private
 */
declare class HTMLTableConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: HTMLTableConverter.Options;
    /**
     * Constructs an instance of the HTMLTableConverter.
     *
     * @param {HTMLTableConverter.UserOptions} [options]
     * Options for the HTMLTableConverter.
     */
    constructor(options?: HTMLTableConverter.UserOptions);
    private columns;
    private headers;
    /**
     * Options for the DataConverter.
     */
    readonly options: HTMLTableConverter.Options;
    tableElement?: HTMLElement;
    tableElementID?: string;
    /**
     * Exports the dataconnector as an HTML string, using the options
     * provided on import unless other options are provided.
     *
     * @param {DataConnector} connector
     * Connector instance to export from.
     *
     * @param {HTMLTableConnector.ExportOptions} [options]
     * Options that override default or existing export options.
     *
     * @return {string}
     * HTML from the current dataTable.
     */
    export(connector: DataConnector, options?: HTMLTableConverter.Options): string;
    /**
     * Get table cell markup from row data.
     */
    private getCellHTMLFromValue;
    /**
     * Get table header markup from row data.
     */
    private getTableHeaderHTML;
    /**
     * Initiates the parsing of the HTML table
     *
     * @param {HTMLTableConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     * @emits HTMLTableParser#parseError
     */
    parse(options: HTMLTableConverter.UserOptions, eventDetail?: DataEvent.Detail): void;
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed HTML table
     */
    getTable(): DataTable;
}
declare namespace HTMLTableConverter {
    /**
     * Options for the parser compatible with ClassJSON
     */
    interface Options extends DataConverter.Options {
        decimalPoint?: string;
        exportIDColumn?: boolean;
        tableCaption?: string;
        tableElement?: (HTMLElement | null);
        useLocalDecimalPoint?: boolean;
        useMultiLevelHeaders?: boolean;
        useRowspanHeaders?: boolean;
        usePresentationOrder?: boolean;
    }
    /**
     * Available options of the HTMLTableConverter.
     */
    type UserOptions = Partial<Options>;
}
export default HTMLTableConverter;
