import type { DataEventCallback, DataEventDetail, DataEventEmitter } from '../DataEvent';
import type DataModifierEvent from './DataModifierEvent';
import type DataModifierOptions from './DataModifierOptions';
import type DataTable from '../DataTable';
import type { DataModifierTypes } from './DataModifierType';
/**
 * Abstract class to provide an interface for modifying a table.
 */
declare abstract class DataModifier implements DataEventEmitter<DataModifierEvent> {
    /**
     * Registry as a record object with modifier names and their class
     * constructor.
     */
    static types: DataModifierTypes;
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
    static registerType<T extends keyof DataModifierTypes>(key: T, DataModifierClass: DataModifierTypes[T]): boolean;
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
     * @param {BenchmarkOptions} options
     * Options. Currently supports `iterations` for number of iterations.
     *
     * @return {Array<number>}
     * An array of times in milliseconds
     *
     */
    benchmark(dataTable: DataTable, options?: BenchmarkOptions): Array<number>;
    /**
     * Emits an event on the modifier to all registered callbacks of this event.
     *
     * @param {DataModifierEvent} [e]
     * Event object containing additional event information.
     */
    emit<E extends DataModifierEvent>(e: E): void;
    /**
     * Modifies the given table and sets its `modified` property as a reference
     * to the modified table. If `modified` property does not exist on the
     * original table, it's always created.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    modify(table: DataTable, eventDetail?: DataEventDetail): Promise<DataTable>;
    /**
     * Creates a modified copy of the given table and sets its `modified`
     * property as a reference to the modified table. If `modified` property
     * does not exist, the original table is changed.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    abstract modifyTable(table: DataTable, eventDetail?: DataEventDetail): DataTable;
    /**
     * Registers a callback for a specific modifier event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventCallback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    on<T extends DataModifierEvent['type']>(type: T, callback: DataEventCallback<this, Extract<DataModifierEvent, {
        type: T;
    }>>): Function;
}
/**
 * Additionally provided types for modifier events and options.
 */
export interface BenchmarkOptions {
    iterations: number;
}
export default DataModifier;
