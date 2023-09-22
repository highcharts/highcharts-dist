import type DataEvent from './DataEvent';
import type { DataPoolOptions, DataPoolConnectorOptions } from './DataPoolOptions.js';
import type DataTable from './DataTable.js';
import DataConnector from './Connectors/DataConnector.js';
/**
 * Data pool to load connectors on-demand.
 *
 * @class
 * @name Data.DataPool
 *
 * @param {Data.DataPoolOptions} options
 * Pool options with all connectors.
 */
declare class DataPool implements DataEvent.Emitter {
    /**
     * Semantic version string of the DataPool class.
     * @internal
     */
    static readonly version: string;
    constructor(options?: (DataPoolOptions | undefined));
    /**
     * Internal dictionary with the connectors and their names.
     * @private
     */
    protected readonly connectors: Record<string, DataConnector>;
    /**
     * Pool options with all connectors.
     *
     * @name Data.DataPool#options
     * @type {Data.DataPoolOptions}
     */
    readonly options: DataPoolOptions;
    /**
     * Internal dictionary with the promise resolves waiting for connectors to
     * be done loading.
     * @private
     */
    protected readonly waiting: Record<string, Array<[Function, Function]>>;
    /**
     * Emits an event on this data pool to all registered callbacks of the given
     * event.
     * @private
     *
     * @param {DataTable.Event} e
     * Event object with event information.
     */
    emit<E extends DataEvent>(e: E): void;
    /**
     * Loads the connector.
     *
     * @function Data.DataPool#getConnector
     *
     * @param {string} name
     * Name of the connector.
     *
     * @return {Promise<Data.DataConnector>}
     * Returns the connector.
     */
    getConnector(name: string): Promise<DataConnector>;
    /**
     * Returns the names of all connectors.
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
     * @param {string} id
     * Name of the connector.
     *
     * @return {DataPoolConnectorOptions|undefined}
     * Returns the options of the connector, or `undefined` if not found.
     */
    protected getConnectorOptions(id: string): (DataPoolConnectorOptions | undefined);
    /**
     * Loads the connector table.
     *
     * @function Data.DataPool#getConnectorTable
     *
     * @param {string} connectorId
     * Name of the connector.
     *
     * @return {Promise<Data.DataTable>}
     * Returns the connector table.
     */
    getConnectorTable(connectorId: string): Promise<DataTable>;
    /**
     * Creates and loads the connector.
     *
     * @private
     *
     * @param {Data.DataPoolConnectorOptions} options
     * Options of connector.
     *
     * @return {Promise<Data.DataConnector>}
     * Returns the connector.
     */
    protected loadConnector(options: DataPoolConnectorOptions): Promise<DataConnector>;
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
    on<E extends DataEvent>(type: E['type'], callback: DataEvent.Callback<this, E>): Function;
    /**
     * Sets connector options with a specific name.
     *
     * @param {Data.DataPoolConnectorOptions} options
     * Connector options to set.
     */
    setConnectorOptions(options: DataPoolConnectorOptions): void;
}
declare namespace DataPool {
    interface Event {
        type: ('load' | 'afterLoad' | 'setConnectorOptions' | 'afterSetConnectorOptions');
        options: DataPoolConnectorOptions;
    }
}
export default DataPool;
