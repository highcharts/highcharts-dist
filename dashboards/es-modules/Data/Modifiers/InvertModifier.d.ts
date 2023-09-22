import type DataEvent from '../DataEvent';
import type InvertModifierOptions from './InvertModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/**
 * Inverts columns and rows in a table.
 *
 * @private
 */
declare class InvertModifier extends DataModifier {
    /**
     * Default options for the invert modifier.
     */
    static readonly defaultOptions: InvertModifierOptions;
    /**
     * Constructs an instance of the invert modifier.
     *
     * @param {Partial<InvertModifier.Options>} [options]
     * Options to configure the invert modifier.
     */
    constructor(options?: Partial<InvertModifierOptions>);
    /**
     * Options of the invert modifier.
     */
    options: InvertModifierOptions;
    /**
     * Applies partial modifications of a cell change to the property `modified`
     * of the given modified table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {string} columnName
     * Column name of changed cell.
     *
     * @param {number|undefined} rowIndex
     * Row index of changed cell.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Changed cell value.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyCell<T extends DataTable>(table: T, columnName: string, rowIndex: number, cellValue: DataTable.CellType, eventDetail?: DataEvent.Detail): T;
    /**
     * Applies partial modifications of column changes to the property
     * `modified` of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Changed columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex=0]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyColumns<T extends DataTable>(table: T, columns: DataTable.ColumnCollection, rowIndex: number, eventDetail?: DataEvent.Detail): T;
    /**
     * Applies partial modifications of row changes to the property `modified`
     * of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Changed rows.
     *
     * @param {number} [rowIndex]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyRows<T extends DataTable>(table: T, rows: Array<(DataTable.Row | DataTable.RowObject)>, rowIndex: number, eventDetail?: DataEvent.Detail): T;
    /**
     * Inverts rows and columns in the table.
     *
     * @param {DataTable} table
     * Table to invert.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with inverted `modified` property as a reference.
     */
    modifyTable<T extends DataTable>(table: T, eventDetail?: DataEvent.Detail): T;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Invert: typeof InvertModifier;
    }
}
export default InvertModifier;
