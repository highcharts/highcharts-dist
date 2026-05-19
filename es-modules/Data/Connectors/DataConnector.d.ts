import type { DataConnectorTypes } from './DataConnectorType';
import type { DataConnectorOptions, MetaColumn, Metadata } from './DataConnectorOptions';
import type { DataEvent, DataEventCallback, DataEventEmitter } from '../DataEvent';
import type DataConverterType from '../Converters/DataConverterType';
import DataConverter from '../Converters/DataConverter.js';
import DataTable, { type ColumnCollection as DataTableColumnCollection } from '../DataTable.js';
import { DeepPartial } from '../../Shared/Types';
/**
 * Abstract class providing an interface for managing a DataConnector.
 */
declare abstract class DataConnector implements DataEventEmitter<Event> {
    /**
     * Registry as a record object with connector names and their class.
     */
    static types: DataConnectorTypes;
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
    static registerType<T extends keyof DataConnectorTypes>(key: T, DataConnectorClass: DataConnectorTypes[T]): boolean;
    /**
     * The DataConverter responsible for handling conversion of provided data to
     * a DataConnector.
     */
    converter?: DataConverter;
    /**
     * Metadata to describe the connector and the content of columns.
     */
    readonly metadata: Metadata;
    /**
     * Tables managed by this DataConnector instance.
     */
    readonly dataTables: Record<string, DataTable>;
    /**
     * The options of the connector.
     */
    readonly options: DataConnectorOptions;
    /**
     * ID of the polling timeout.
     */
    private _polling?;
    /**
     * Whether the connector is currently polling for new data.
     */
    get polling(): boolean;
    /**
     * The polling controller used to abort the request when data polling stops.
     * It gets assigned when data polling starts.
     */
    pollingController?: AbortController;
    /**
     * Constructor for the connector class.
     *
     * @param {DataConnectorOptions} [options]
     * Options to use in the connector.
     */
    constructor(options: DataConnectorOptions);
    /**
     * Returns a single data table instance based on the provided key.
     * Otherwise, returns the first data table.
     *
     * @param {string} [key]
     * The data table key.
     *
     * @return {DataTable}
     * The data table instance.
     */
    getTable(key?: string): DataTable;
    /**
     * Method for adding metadata for a single column.
     *
     * @param {string} name
     * The name of the column to be described.
     *
     * @param {MetaColumn} columnMeta
     * The metadata to apply to the column.
     */
    describeColumn(name: string, columnMeta: MetaColumn): void;
    /**
     * Method for applying columns meta information to the whole DataConnector.
     *
     * @param {Record<string, MetaColumn>} columns
     * Pairs of column names and MetaColumn objects.
     */
    describeColumns(columns: Record<string, MetaColumn>): void;
    /**
     * Returns the order of columns.
     *
     * @return {string[] | undefined}
     * Order of columns.
     */
    getColumnOrder(): (string[] | undefined);
    /**
     * Retrieves the columns of the dataTable,
     * applies column order from meta.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * An object with the properties `columnIds` and `columnValues`
     */
    getSortedColumns(): DataTableColumnCollection;
    /**
     * Sets the index and order of columns.
     *
     * @param {Array<string>} columnIds
     * Order of columns.
     */
    setColumnOrder(columnIds: Array<string>): void;
    /**
     * Updates the connector with new options.
     *
     * @param {object} newOptions
     * The new options to be applied to the connector.
     *
     * @param {boolean} [reload=true]
     * Whether to reload the connector after applying the new options.
     */
    update(newOptions: DeepPartial<typeof this.options>, reload?: boolean): Promise<void>;
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
     * Applies the data modifiers to the data tables according to the
     * connector data tables options.
     */
    applyTableModifiers(): Promise<this>;
    /**
     * Starts polling new data after the specific time span in milliseconds.
     *
     * @param {number} refreshTime
     * Refresh time in milliseconds between polls.
     */
    startPolling(refreshTime?: number): void;
    /**
     * Stops polling data. Shouldn't be performed if polling is already stopped.
     */
    stopPolling(): void;
    /**
     * Emits an event on the connector to all registered callbacks of this
     * event.
     *
     * @param {Event} e
     * Event object containing additional event information.
     */
    emit(e: Event): void;
    /**
     * Registers a callback for a specific connector event.
     *
     * @param {string} type
     * Event type.
     *
     * @param {Function} callback
     * Function to register for the connector callback.
     *
     * @return {Function}
     * Function to unregister callback from the connector event.
     */
    on<T extends Event['type']>(type: T, callback: DataEventCallback<this, Extract<Event, {
        type: T;
    }>>): Function;
    /**
     * Iterates over the dataTables and initiates the corresponding converters.
     * Updates the dataTables and assigns the first converter.
     *
     * @param {T}[data]
     * Data specific to the corresponding converter.
     *
     * @param {CreateConverterFunction}[createConverter]
     * Creates a specific converter combining the dataTable options.
     *
     * @param {ParseDataFunction<T>}[parseData]
     * Runs the converter parse method with the specific data type.
     */
    initConverters<T>(data: T, createConverter: CreateConverterFunction, parseData: ParseDataFunction<T>): void;
}
/**
 * The event type that is provided on events within DataConnector.
 */
export interface Event extends DataEvent {
    readonly type: ('loadError' | 'load' | 'afterLoad' | 'beforeUpdate' | 'afterUpdate');
    readonly error?: string | Error;
}
/**
 * Creates a specific converter combining the dataTable options.
 */
export interface CreateConverterFunction {
    (key: string): DataConverterType;
}
/**
 * Runs the converter parse method with the specific data type.
 */
export interface ParseDataFunction<T> {
    (converter: DataConverterType, data: T): DataTableColumnCollection;
}
export default DataConnector;
