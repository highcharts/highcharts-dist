import type { DataConnectorTypes } from './DataConnectorType';
import type { DataConnectorOptions, MetaColumn, Metadata } from './DataConnectorOptions';
import type DataEvent from '../DataEvent';
import type { DataModifierTypeOptions } from '../Modifiers/DataModifierType';
import DataConverter from '../Converters/DataConverter.js';
import DataTable from '../DataTable.js';
/**
 * Abstract class providing an interface for managing a DataConnector.
 *
 * @private
 */
declare abstract class DataConnector implements DataEvent.Emitter {
    /**
     * Constructor for the connector class.
     *
     * @param {DataConnector.UserOptions} [options]
     * Options to use in the connector.
     */
    constructor(options?: DataConnector.UserOptions);
    /**
     * The DataConverter responsible for handling conversion of provided data to
     * a DataConnector.
     */
    abstract readonly converter: DataConverter;
    /**
     * Metadata to describe the connector and the content of columns.
     */
    readonly metadata: Metadata;
    private _polling?;
    /**
     * Poll timer ID, if active.
     */
    get polling(): boolean;
    /**
     * Table managed by this DataConnector instance.
     */
    readonly table: DataTable;
    /**
     * Method for adding metadata for a single column.
     *
     * @param {string} name
     * The name of the column to be described.
     *
     * @param {DataConnector.MetaColumn} columnMeta
     * The metadata to apply to the column.
     */
    describeColumn(name: string, columnMeta: MetaColumn): void;
    /**
     * Method for applying columns meta information to the whole DataConnector.
     *
     * @param {Highcharts.Dictionary<DataConnector.MetaColumn>} columns
     * Pairs of column names and MetaColumn objects.
     */
    describeColumns(columns: Record<string, MetaColumn>): void;
    /**
     * Emits an event on the connector to all registered callbacks of this
     * event.
     *
     * @param {DataConnector.Event} [e]
     * Event object containing additional event information.
     */
    emit<E extends DataEvent>(e: E): void;
    /**
     * Returns the order of columns.
     *
     * @param {boolean} [usePresentationState]
     * Whether to use the column order of the presentation state of the table.
     *
     * @return {Array<string>|undefined}
     * Order of columns.
     */
    getColumnOrder(usePresentationState?: boolean): (Array<string> | undefined);
    /**
     * Retrieves the columns of the the dataTable,
     * applies column order from meta.
     *
     * @param {boolean} [usePresentationOrder]
     * Whether to use the column order of the presentation state of the table.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * An object with the properties `columnNames` and `columnValues`
     */
    getSortedColumns(usePresentationOrder?: boolean): DataTable.ColumnCollection;
    /**
     * The default load method, which fires the `afterLoad` event
     *
     * @return {Promise<DataConnector>}
     * The loaded connector.
     *
     * @emits DataConnector#afterLoad
     */
    load(): Promise<this>;
    /**
     * Registers a callback for a specific connector event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for the connector callback.
     *
     * @return {Function}
     * Function to unregister callback from the connector event.
     */
    on<E extends DataEvent>(type: E['type'], callback: DataEvent.Callback<this, E>): Function;
    /**
     * The default save method, which fires the `afterSave` event.
     *
     * @return {Promise<DataConnector>}
     * The saved connector.
     *
     * @emits DataConnector#afterSave
     * @emits DataConnector#saveError
     */
    save(): Promise<this>;
    /**
     * Sets the index and order of columns.
     *
     * @param {Array<string>} columnNames
     * Order of columns.
     */
    setColumnOrder(columnNames: Array<string>): void;
    setModifierOptions(modifierOptions?: DataModifierTypeOptions): Promise<this>;
    /**
     * Starts polling new data after the specific time span in milliseconds.
     *
     * @param {number} refreshTime
     * Refresh time in milliseconds between polls.
     */
    startPolling(refreshTime?: number): void;
    /**
     * Stops polling data.
     */
    stopPolling(): void;
    /**
     * Retrieves metadata from a single column.
     *
     * @param {string} name
     * The identifier for the column that should be described
     *
     * @return {DataConnector.MetaColumn|undefined}
     * Returns a MetaColumn object if found.
     */
    whatIs(name: string): (MetaColumn | undefined);
}
declare namespace DataConnector {
    /**
     * The event object that is provided on errors within DataConnector.
     */
    interface ErrorEvent extends Event {
        type: ('loadError');
        error: (string | Error);
    }
    /**
     * The default event object for a DataConnector.
     */
    interface Event extends DataEvent {
        readonly table: DataTable;
    }
    /**
     * The event object that is provided on load events within DataConnector.
     */
    interface LoadEvent extends Event {
        type: ('load' | 'afterLoad');
    }
    /**
     * Option of the DataConnector.
     */
    type UserOptions = Partial<DataConnectorOptions>;
    /**
     * Registry as a record object with connector names and their class.
     */
    const types: DataConnectorTypes;
    /**
     * Adds a connector class to the registry. The connector has to provide the
     * `DataConnector.options` property and the `DataConnector.load` method to
     * modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the connector class.
     *
     * @param {DataConnectorType} DataConnectorClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a connector registered with this key.
     */
    function registerType<T extends keyof DataConnectorTypes>(key: T, DataConnectorClass: DataConnectorTypes[T]): boolean;
}
export default DataConnector;
