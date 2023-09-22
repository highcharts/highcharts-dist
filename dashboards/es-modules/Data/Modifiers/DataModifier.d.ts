import type DataEvent from '../DataEvent';
import type DataModifierOptions from './DataModifierOptions';
import type DataTable from '../DataTable';
import type { DataModifierTypes } from './DataModifierType';
/**
 * Abstract class to provide an interface for modifying a table.
 *
 * @private
 */
declare abstract class DataModifier implements DataEvent.Emitter {
    /**
     * Modifier options.
     */
    abstract readonly options: DataModifierOptions;
    /**
     * Runs a timed execution of the modifier on the given datatable.
     * Can be configured to run multiple times.
     *
     * @param {DataTable} dataTable
     * The datatable to execute
     *
     * @param {DataModifier.BenchmarkOptions} options
     * Options. Currently supports `iterations` for number of iterations.
     *
     * @return {Array<number>}
     * An array of times in milliseconds
     *
     */
    benchmark(dataTable: DataTable, options?: DataModifier.BenchmarkOptions): Array<number>;
    /**
     * Emits an event on the modifier to all registered callbacks of this event.
     *
     * @param {DataModifier.Event} [e]
     * Event object containing additonal event information.
     */
    emit<E extends DataEvent>(e: E): void;
    /**
     * Returns a modified copy of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    modify<T extends DataTable>(table: T, eventDetail?: DataEvent.Detail): Promise<T>;
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
     * Applies modifications of row changes to the property `modified` of the
     * given table.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    abstract modifyTable<T extends DataTable>(table: T, eventDetail?: DataEvent.Detail): T;
    /**
     * Registers a callback for a specific modifier event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    on<E extends DataEvent>(type: E['type'], callback: DataEvent.Callback<this, E>): Function;
}
/**
 * Additionally provided types for modifier events and options.
 * @private
 */
declare namespace DataModifier {
    /**
     * Benchmark options.
     */
    interface BenchmarkOptions {
        iterations: number;
    }
    /**
     * Registry as a record object with modifier names and their class
     * constructor.
     */
    const types: DataModifierTypes;
    /**
     * Adds a modifier class to the registry. The modifier class has to provide
     * the `DataModifier.options` property and the `DataModifier.modifyTable`
     * method to modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the modifier class.
     *
     * @param {DataModifierType} DataModifierClass
     * Modifier class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a modifier registered with this key.
     */
    function registerType<T extends keyof DataModifierTypes>(key: T, DataModifierClass: DataModifierTypes[T]): boolean;
}
export default DataModifier;
