import type { DataEventDetail } from '../DataEvent';
import type DataConnector from '../Connectors/DataConnector';
import type HTMLTableConverterOptions from './HTMLTableConverterOptions';
import DataConverter from './DataConverter.js';
import type { ColumnCollection as DataTableColumnCollection } from '../DataTable.js';
/**
 * Handles parsing and transformation of an HTML table to a table.
 *
 * @private
 */
declare class HTMLTableConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: HTMLTableConverterOptions;
    /**
     * Constructs an instance of the HTMLTableConverter.
     *
     * @param {Partial<HTMLTableConverterOptions>} [options]
     * Options for the HTMLTableConverter.
     */
    constructor(options?: Partial<HTMLTableConverterOptions>);
    private headers;
    /**
     * Options for the DataConverter.
     */
    readonly options: HTMLTableConverterOptions;
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
    export(connector: DataConnector, options?: Partial<HTMLTableConverterOptions>): string;
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
     * @param {Partial<HTMLTableConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     * @emits HTMLTableParser#parseError
     */
    parse(options: Partial<HTMLTableConverterOptions>, eventDetail?: DataEventDetail): DataTableColumnCollection;
}
declare module './DataConverterType' {
    interface DataConverterTypes {
        HTMLTable: typeof HTMLTableConverter;
    }
}
export default HTMLTableConverter;
