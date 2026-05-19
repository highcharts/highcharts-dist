import type { DataEventDetail } from '../DataEvent';
import type JSONConverterOptions from './JSONConverterOptions';
import DataConverter from './DataConverter.js';
import type { ColumnCollection as DataTableColumnCollection } from '../DataTable.js';
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
declare class JSONConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: JSONConverterOptions;
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {Partial<JSONConverterOptions>} [options]
     * Options for the JSON parser.
     */
    constructor(options?: Partial<JSONConverterOptions>);
    private headerColumnIds;
    private headers;
    /**
     * Options for the DataConverter.
     */
    readonly options: JSONConverterOptions;
    /**
     * Initiates parsing of JSON structure.
     *
     * @param {Partial<JSONConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    parse(options: Partial<JSONConverterOptions>, eventDetail?: DataEventDetail): DataTableColumnCollection;
    /**
     * Helper for parsing data in 'columns' orientation.
     *
     * @param {DataTableBasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {void}
     */
    private parseColumnsOrientation;
    /**
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {DataTableBasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {DataTableBasicColumn[]}
     * Parsed columns.
     */
    private parseRowsOrientation;
    /**
     * Extracts a row from an object, using columnIds if provided.
     *
     * @param {Record<string, string|number>} [rowObj]
     * Set of props.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Array<string | number>}
     * Row converted to array.
     */
    private convertItemToRow;
}
declare module './DataConverterType' {
    interface DataConverterTypes {
        JSON: typeof JSONConverter;
    }
}
export default JSONConverter;
