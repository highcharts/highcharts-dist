import type { DataEventCallback, DataEventEmitter } from './DataEvent';
import type DataConnectorType from './Connectors/DataConnectorType';
import type { DataConnectorTypeOptions } from './Connectors/DataConnectorType';
import type DataPoolOptions from './DataPoolOptions';
/**
 * Data pool to load connectors on-demand.
 *
 * @class
 * @name Data.DataPool
 *
 * @param {DataPoolOptions} options
 * Pool options with all connectors.
 */
declare class DataPool implements DataEventEmitter<Event> {
    protected static readonly defaultOptions: DataPoolOptions;
    /**
     * Internal dictionary with the connectors and their IDs.
     */
    protected readonly connectors: Record<string, DataConnectorType>;
    /**
     * Pool options with all connectors.
     */
    readonly options: DataPoolOptions;
    /**
     * Internal dictionary with the promise resolves waiting for connectors to
     * be done loading.
     */
    protected readonly waiting: Record<string, [Function, Function][]>;
    constructor(options?: DataPoolOptions);
    /**
     * Emits an event on this data pool to all registered callbacks of the given
     * event.
     *
     * @param {DataTableEvent} e
     * Event object with event information.
     */
    emit(e: Event): void;
    /**
     * Loads the connector.
     *
     * @function Data.DataPool#getConnector
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {Promise<Data.DataConnectorType>}
     * Returns the connector.
     */
    getConnector(connectorId: string): Promise<DataConnectorType>;
    /**
     * Returns the IDs of all connectors.
     *
     * @private
     *
     * @return {Array<string>}
     * Names of all connectors.
     */
    getConnectorIds(): Array<string>;
    /**
     * Loads the options of the connector.
     *
     * @private
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {DataConnectorTypeOptions | undefined}
     * Returns the options of the connector, or `undefined` if not found.
     */
    protected getConnectorOptions(connectorId: string): DataConnectorTypeOptions | undefined;
    /**
     * Tests whether the connector has never been requested.
     *
     * @param {string} connectorId
     * Name of the connector.
     *
     * @return {boolean}
     * Returns `true`, if the connector has never been requested, otherwise
     * `false`.
     */
    isNewConnector(connectorId: string): boolean;
    /**
     * Instantiates the connector class for the given options and loads its
     * data.
     *
     * @private
     *
     * @param {Data.DataPoolConnectorOptions} options
     * Options of connector.
     *
     * @return {Promise<Data.DataConnectorType>}
     * Returns the connector.
     */
    protected loadConnector(options: DataConnectorTypeOptions): Promise<DataConnectorType>;
    /**
     * Cancels all data connectors pending requests.
     */
    cancelPendingRequests(): void;
    /**
     * Registers a callback for a specific event.
     *
     * @function Highcharts.DataPool#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataPool>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on<T extends Event['type']>(type: T, callback: DataEventCallback<this, Extract<Event, {
        type: T;
    }>>): Function;
    setConnectorOptions(options: DataConnectorTypeOptions, update?: boolean): void;
    setConnectorOptions(options: DataConnectorTypeOptions, update: true): Promise<void>;
}
export interface Event {
    type: ('load' | 'afterLoad' | 'setConnectorOptions' | 'afterSetConnectorOptions');
    options: DataConnectorTypeOptions;
}
export default DataPool;
