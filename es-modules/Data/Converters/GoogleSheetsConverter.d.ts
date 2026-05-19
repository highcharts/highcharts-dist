import type { DataEventDetail } from '../DataEvent';
import type GoogleSheetsConverterOptions from './GoogleSheetsConverterOptions';
import DataConverter from './DataConverter.js';
import type { ColumnCollection as DataTableColumnCollection } from '../DataTable.js';
/**
 * Handles parsing and transformation of an Google Sheets to a table.
 *
 * @private
 */
declare class GoogleSheetsConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: GoogleSheetsConverterOptions;
    /**
     * Constructs an instance of the GoogleSheetsConverter.
     *
     * @param {Partial<GoogleSheetsConverterOptions>} [options]
     * Options for the GoogleSheetsConverter.
     */
    constructor(options?: Partial<GoogleSheetsConverterOptions>);
    private header;
    /**
     * Options for the DataConverter.
     */
    readonly options: GoogleSheetsConverterOptions;
    /**
     * Initiates the parsing of the Google Sheet
     *
     * @param {Partial<GoogleSheetsConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    parse(options: Partial<GoogleSheetsConverterOptions>, eventDetail?: DataEventDetail): DataTableColumnCollection;
}
declare module './DataConverterType' {
    interface DataConverterTypes {
        GoogleSheets: typeof GoogleSheetsConverter;
    }
}
export default GoogleSheetsConverter;
