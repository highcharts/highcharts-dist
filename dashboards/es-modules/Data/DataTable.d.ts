import type DataEvent from './DataEvent';
import type DataModifier from './Modifiers/DataModifier';
import type DataTableOptions from './DataTableOptions';
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * @private
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
declare class DataTable implements DataEvent.Emitter {
    /**
     * Null state for a row record. In some cases, a row in a table may not
     * contain any data or may be invalid. In these cases, a null state can be
     * used to indicate that the row record is empty or invalid.
     *
     * @name Highcharts.DataTable.NULL
     * @type {Highcharts.DataTableRowObject}
     *
     * @see {@link Highcharts.DataTable.isNull} for a null test.
     *
     * @example
     * table.setRows([DataTable.NULL, DataTable.NULL], 10);
     */
    static readonly NULL: DataTable.RowObject;
    /**
     * Semantic version string of the DataTable class.
     * @internal
     */
    static readonly version: string;
    /**
     * Tests whether a row contains only `null` values or is equal to
     * DataTable.NULL. If all columns have `null` values, the function returns
     * `true`. Otherwise, it returns `false` to indicate that the row contains
     * at least one non-null value.
     *
     * @function Highcharts.DataTable.isNull
     *
     * @param {Highcharts.DataTableRow|Highcharts.DataTableRowObject} row
     * Row to test.
     *
     * @return {boolean}
     * Returns `true`, if the row contains only null, otherwise `false`.
     *
     * @example
     * if (DataTable.isNull(row)) {
     *   // handle null row
     * }
     */
    static isNull(row: (DataTable.Row | DataTable.RowObject)): boolean;
    /**
     * Constructs an instance of the DataTable class.
     *
     * @param {Highcharts.DataTableOptions} [options]
     * Options to initialize the new DataTable instance.
     */
    constructor(options?: DataTableOptions);
    readonly aliases: DataTable.ColumnAliases;
    readonly autoId: boolean;
    private columns;
    readonly id: string;
    modified: DataTable;
    private modifier?;
    private rowCount;
    private versionTag;
    /**
     * Returns a clone of this table. The cloned table is completely independent
     * of the original, and any changes made to the clone will not affect
     * the original table.
     *
     * @function Highcharts.DataTable#clone
     *
     * @param {boolean} [skipColumns]
     * Whether to clone columns or not.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Clone of this data table.
     *
     * @emits #cloneTable
     * @emits #afterCloneTable
     */
    clone(skipColumns?: boolean, eventDetail?: DataEvent.Detail): DataTable;
    /**
     * Deletes a column alias and returns the original column name. If the alias
     * is not found, the method returns `undefined`. Deleting an alias does not
     * affect the data in the table, only the way columns are accessed.
     *
     * @function Highcharts.DataTable#deleteColumnAlias
     *
     * @param {string} alias
     * The alias to delete.
     *
     * @return {string|undefined}
     * Returns the original column name, if found.
     */
    deleteColumnAlias(alias: string): (string | undefined);
    /**
     * Deletes columns from the table.
     *
     * @function Highcharts.DataTable#deleteColumns
     *
     * @param {Array<string>} [columnNames]
     * Names (no alias) of columns to delete. If no array is provided, all
     * columns will be deleted.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTableColumnCollection|undefined}
     * Returns the deleted columns, if found.
     *
     * @emits #deleteColumns
     * @emits #afterDeleteColumns
     */
    deleteColumns(columnNames?: Array<string>, eventDetail?: DataEvent.Detail): (DataTable.ColumnCollection | undefined);
    /**
     * Deletes rows in this table.
     *
     * @function Highcharts.DataTable#deleteRows
     *
     * @param {number} [rowIndex]
     * Index to start delete of rows. If not specified, all rows will be
     * deleted.
     *
     * @param {number} [rowCount=1]
     * Number of rows to delete.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Array<Highcharts.DataTableRow>}
     * Returns the deleted rows, if found.
     *
     * @emits #deleteRows
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex?: number, rowCount?: number, eventDetail?: DataEvent.Detail): Array<DataTable.Row>;
    /**
     * Emits an event on this table to all registered callbacks of the given
     * event.
     * @private
     *
     * @param {DataTable.Event} e
     * Event object with event information.
     */
    emit<E extends DataEvent>(e: E): void;
    /**
     * Fetches a single cell value.
     *
     * @function Highcharts.DataTable#getCell
     *
     * @param {string} columnNameOrAlias
     * Column name or alias of the cell to retrieve.
     *
     * @param {number} rowIndex
     * Row index of the cell to retrieve.
     *
     * @return {Highcharts.DataTableCellType|undefined}
     * Returns the cell value or `undefined`.
     */
    getCell(columnNameOrAlias: string, rowIndex: number): (DataTable.CellType | undefined);
    /**
     * Fetches a cell value for the given row as a boolean.
     *
     * @function Highcharts.DataTable#getCellAsBoolean
     *
     * @param {string} columnNameOrAlias
     * Column name or alias to fetch.
     *
     * @param {number} rowIndex
     * Row index to fetch.
     *
     * @return {boolean}
     * Returns the cell value of the row as a boolean.
     */
    getCellAsBoolean(columnNameOrAlias: string, rowIndex: number): boolean;
    getCellAsNumber(columnNameOrAlias: string, rowIndex: number, useNaN: true): number;
    getCellAsNumber(columnNameOrAlias: string, rowIndex: number, useNaN?: false): (number | null);
    /**
     * Fetches a cell value for the given row as a string.
     *
     * @function Highcharts.DataTable#getCellAsString
     *
     * @param {string} columnNameOrAlias
     * Column name or alias to fetch.
     *
     * @param {number} rowIndex
     * Row index to fetch.
     *
     * @return {string}
     * Returns the cell value of the row as a string.
     */
    getCellAsString(columnNameOrAlias: string, rowIndex: number): string;
    getColumn(columnNameOrAlias: string, asReference?: boolean): (DataTable.Column | undefined);
    getColumn(columnNameOrAlias: string, asReference: true): (DataTable.Column | undefined);
    getColumnAsNumbers(columnNameOrAlias: string, useNaN: true): Array<number>;
    getColumnAsNumbers(columnNameOrAlias: string, useNaN?: false): Array<(number | null)>;
    /**
     * Fetches all column names.
     *
     * @function Highcharts.DataTable#getColumnNames
     *
     * @return {Array<string>}
     * Returns all column names.
     */
    getColumnNames(): Array<string>;
    getColumns(columnNamesOrAliases?: Array<string>, asReference?: boolean): DataTable.ColumnCollection;
    getColumns(columnNamesOrAliases: (Array<string> | undefined), asReference: true): Record<string, DataTable.Column>;
    /**
     * Retrieves the modifier for the table.
     * @private
     *
     * @return {Highcharts.DataModifier|undefined}
     * Returns the modifier or `undefined`.
     */
    getModifier(): (DataModifier | undefined);
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRows}.
     *
     * @function Highcharts.DataTable#getRow
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnNamesOrAliases]
     * Column names or aliases in order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex: number, columnNamesOrAliases?: Array<string>): (DataTable.Row | undefined);
    /**
     * Returns the number of rows in this table.
     *
     * @function Highcharts.DataTable#getRowCount
     *
     * @return {number}
     * Number of rows in this table.
     */
    getRowCount(): number;
    /**
     * Retrieves the index of the first row matching a specific cell value.
     *
     * @function Highcharts.DataTable#getRowIndexBy
     *
     * @param {string} columnNameOrAlias
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @param {number} [rowIndexOffset]
     * Index offset to start searching.
     *
     * @return {number|undefined}
     * Index of the first row matching the cell value.
     */
    getRowIndexBy(columnNameOrAlias: string, cellValue: DataTable.CellType, rowIndexOffset?: number): (number | undefined);
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRowObjects}.
     *
     * @function Highcharts.DataTable#getRowObject
     *
     * @param {number} rowIndex
     * Row index.
     *
     * @param {Array<string>} [columnNamesOrAliases]
     * Column names or aliases and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns the row values, or `undefined` if not found.
     */
    getRowObject(rowIndex: number, columnNamesOrAliases?: Array<string>): (DataTable.RowObject | undefined);
    /**
     * Fetches all or a number of rows.
     *
     * @function Highcharts.DataTable#getRowObjects
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnNamesOrAliases]
     * Column names or aliases and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns retrieved rows.
     */
    getRowObjects(rowIndex?: number, rowCount?: number, columnNamesOrAliases?: Array<string>): (Array<DataTable.RowObject>);
    /**
     * Fetches all or a number of rows.
     *
     * @function Highcharts.DataTable#getRows
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnNamesOrAliases]
     * Column names or aliases and their order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns retrieved rows.
     */
    getRows(rowIndex?: number, rowCount?: number, columnNamesOrAliases?: Array<string>): (Array<DataTable.Row>);
    /**
     * Returns the unique version tag of the current state of the table.
     *
     * @function Highcharts.DataTable#getVersionTag
     *
     * @return {string}
     * Unique version tag.
     */
    getVersionTag(): string;
    /**
     * Checks for given column names or aliases.
     *
     * @function Highcharts.DataTable#hasColumns
     *
     * @param {Array<string>} columnNamesOrAliases
     * Column names of aliases to check.
     *
     * @return {boolean}
     * Returns `true` if all columns have been found, otherwise `false`.
     */
    hasColumns(columnNamesOrAliases: Array<string>): boolean;
    /**
     * Searches for a specific cell value.
     *
     * @function Highcharts.DataTable#hasRowWith
     *
     * @param {string} columnNameOrAlias
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @return {boolean}
     * True, if a row has been found, otherwise false.
     */
    hasRowWith(columnNameOrAlias: string, cellValue: DataTable.CellType): boolean;
    /**
     * Registers a callback for a specific event.
     *
     * @function Highcharts.DataTable#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataTable>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on<E extends DataEvent>(type: E['type'], callback: DataEvent.Callback<this, E>): Function;
    /**
     * Renames a column of cell values.
     *
     * @function Highcharts.DataTable#renameColumn
     *
     * @param {string} columnName
     * Name of the column to be renamed.
     *
     * @param {string} newColumnName
     * New name of the column. An existing column with the same name will be
     * replaced.
     *
     * @return {boolean}
     * Returns `true` if successful, `false` if the column was not found.
     */
    renameColumn(columnName: string, newColumnName: string): boolean;
    /**
     * Sets a cell value based on the row index and column name or alias.  Will
     * insert a new column, if not found.
     *
     * @function Highcharts.DataTable#setCell
     *
     * @param {string} columnNameOrAlias
     * Column name or alias to set.
     *
     * @param {number|undefined} rowIndex
     * Row index to set.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to set.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setCell
     * @emits #afterSetCell
     */
    setCell(columnNameOrAlias: string, rowIndex: number, cellValue: DataTable.CellType, eventDetail?: DataEvent.Detail): void;
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @function Highcharts.DataTable#setColumn
     *
     * @param {string} columnNameOrAlias
     * Column name or alias to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex=0]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumn(columnNameOrAlias: string, column?: DataTable.Column, rowIndex?: number, eventDetail?: DataEvent.Detail): void;
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found.
     *
     * @function Highcharts.DataTable#setColumns
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names or aliases.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Keep undefined to reset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns: DataTable.ColumnCollection, rowIndex?: number, eventDetail?: DataEvent.Detail): void;
    /**
     * Sets or unsets the modifier for the table.
     * @private
     *
     * @param {Highcharts.DataModifier} [modifier]
     * Modifier to set, or `undefined` to unset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Resolves to this table if successfull, or rejects on failure.
     *
     * @emits #setModifier
     * @emits #afterSetModifier
     */
    setModifier(modifier?: DataModifier, eventDetail?: DataEvent.Detail): Promise<this>;
    /**
     * Sets cell values of a row. Will insert a new row, if no index was
     * provided, or if the index is higher than the total number of table rows.
     *
     * Note: This function is just a simplified wrap of
     * {@link Highcharts.DataTable#setRows}.
     *
     * @function Highcharts.DataTable#setRow
     *
     * @param {Highcharts.DataTableRow|Highcharts.DataTableRowObject} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefind` to add as a new row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    setRow(row: (DataTable.Row | DataTable.RowObject), rowIndex?: number, eventDetail?: DataEvent.Detail): void;
    /**
     * Sets cell values for multiple rows. Will insert new rows, if no index was
     * was provided, or if the index is higher than the total number of table
     * rows.
     *
     * @function Highcharts.DataTable#setRows
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Row values to set.
     *
     * @param {number} [rowIndex]
     * Index of the first row to set. Leave `undefind` to add as new rows.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    setRows(rows: Array<(DataTable.Row | DataTable.RowObject)>, rowIndex?: number, eventDetail?: DataEvent.Detail): void;
}
/**
 * Additionally it provides necessary types for events.
 */
declare namespace DataTable {
    /**
     * Event object for cell-related events.
     */
    interface CellEvent extends DataEvent {
        readonly type: ('setCell' | 'afterSetCell');
        readonly cellValue: CellType;
        readonly columnName: string;
        readonly rowIndex: number;
    }
    /**
     * Possible value types for a table cell.
     */
    type CellType = (boolean | number | null | string | undefined);
    /**
     * Event object for clone-related events.
     */
    interface CloneEvent extends DataEvent {
        readonly type: ('cloneTable' | 'afterCloneTable');
        readonly tableClone?: DataTable;
    }
    /**
     * Array of table cells in vertical expansion.
     */
    interface Column extends Array<DataTable.CellType> {
        [index: number]: CellType;
    }
    /**
     * Map of column alias to column name.
     */
    type ColumnAliases = Record<string, string>;
    /**
     * Collection of columns, where the key is the column name (or alias) and
     * the value is an array of column values.
     */
    interface ColumnCollection {
        [columnNameOrAlias: string]: Column;
    }
    /**
     * Event object for column-related events.
     */
    interface ColumnEvent extends DataEvent {
        readonly type: ('deleteColumns' | 'afterDeleteColumns' | 'setColumns' | 'afterSetColumns');
        readonly columns?: ColumnCollection;
        readonly columnNames: Array<string>;
        readonly rowIndex?: number;
    }
    /**
     * All information objects of DataTable events.
     */
    type Event = (CellEvent | CloneEvent | ColumnEvent | SetModifierEvent | RowEvent);
    /**
     * Event object for modifier-related events.
     */
    interface ModifierEvent extends DataEvent {
        readonly type: ('setModifier' | 'afterSetModifier');
        readonly modifier: (DataModifier | undefined);
    }
    /**
     * Array of table cells in horizontal expansion. Index of the array is the
     * index of the column names.
     */
    interface Row extends Array<CellType> {
        [index: number]: CellType;
    }
    /**
     * Event object for row-related events.
     */
    interface RowEvent extends DataEvent {
        readonly type: ('deleteRows' | 'afterDeleteRows' | 'setRows' | 'afterSetRows');
        readonly rowCount: number;
        readonly rowIndex: number;
        readonly rows?: Array<(Row | RowObject)>;
    }
    /**
     * Object of row values, where the keys are the column names.
     */
    interface RowObject extends Record<string, CellType> {
        [column: string]: CellType;
    }
    /**
    * Event object for the setModifier events.
    */
    interface SetModifierEvent extends DataEvent {
        readonly type: ('setModifier' | 'afterSetModifier' | 'setModifierError');
        readonly error?: unknown;
        readonly modifier?: DataModifier;
        readonly modified?: DataTable;
    }
}
export default DataTable;
