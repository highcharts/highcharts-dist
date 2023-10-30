import type DataEvent from '../DataEvent';
import type SortModifierOptions from './SortModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/** @private */
interface SortRowReference {
    index: number;
    row: DataTable.Row;
}
/**
 * Sort table rows according to values of a column.
 *
 * @private
 */
declare class SortModifier extends DataModifier {
    /**
     * Default options to group table rows.
     */
    static readonly defaultOptions: SortModifierOptions;
    private static ascending;
    private static descending;
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeDataModifier.Options>} [options]
     * Options to configure the range modifier.
     */
    constructor(options?: Partial<SortModifierOptions>);
    options: SortModifierOptions;
    /**
     * Returns index and row for sort reference.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table with rows to reference.
     *
     * @return {Array<SortModifier.RowReference>}
     * Array of row references.
     */
    protected getRowReferences(table: DataTable): Array<SortRowReference>;
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
     * Sorts rows in the table.
     *
     * @param {DataTable} table
     * Table to sort in.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference.
     */
    modifyTable<T extends DataTable>(table: T, eventDetail?: DataEvent.Detail): T;
}
/**
 * Additionally provided types for modifier events and options.
 * @private
 */
declare namespace SortModifier {
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Sort: typeof SortModifier;
    }
}
export default SortModifier;
