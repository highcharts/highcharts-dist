import type DataEvent from '../DataEvent';
import DataConverter from './DataConverter.js';
import DataTable from '../DataTable.js';
/**
 * Handles parsing and transformation of an Google Sheets to a table.
 *
 * @private
 */
declare class GoogleSheetsConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: GoogleSheetsConverter.Options;
    /**
     * Constructs an instance of the GoogleSheetsConverter.
     *
     * @param {GoogleSheetsConverter.UserOptions} [options]
     * Options for the GoogleSheetsConverter.
     */
    constructor(options?: GoogleSheetsConverter.UserOptions);
    private columns;
    private header;
    /**
     * Options for the DataConverter.
     */
    readonly options: GoogleSheetsConverter.Options;
    /**
     * Initiates the parsing of the Google Sheet
     *
     * @param {GoogleSheetsConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    parse(options: GoogleSheetsConverter.UserOptions, eventDetail?: DataEvent.Detail): (boolean | undefined);
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed Google Sheet
     */
    getTable(): DataTable;
}
declare namespace GoogleSheetsConverter {
    /**
     * Options of the GoogleSheetsConverter.
     */
    interface Options extends DataConverter.Options {
        json?: GoogleSpreadsheetJSON;
    }
    /**
     * Google's spreadsheet format.
     */
    interface GoogleSpreadsheetJSON {
        majorDimension: ('COLUMNS' | 'ROWS');
        values: Array<Array<(boolean | null | number | string | undefined)>>;
    }
    /**
     * Available options of the GoogleSheetsConverter.
     */
    type UserOptions = Partial<Options>;
}
export default GoogleSheetsConverter;
