import type { DataEventDetail } from '../DataEvent';
import type JSONConnectorOptions from './JSONConnectorOptions';
import type { JSONData } from '../Converters/JSONConverterOptions';
import DataConnector, { type Event as DataConnectorEvent } from './DataConnector.js';
import JSONConverter from '../Converters/JSONConverter.js';
/**
 * Class that handles creating a DataConnector from JSON structure
 *
 * @private
 */
declare class JSONConnector extends DataConnector {
    protected static readonly defaultOptions: JSONConnectorOptions;
    /**
     * Constructs an instance of JSONConnector.
     *
     * @param {Partial<JSONConnectorOptions>} [options]
     * Options for the connector and converter.
     */
    constructor(options?: Partial<JSONConnectorOptions>);
    /**
     * Options related to the handling of the JSON DataConnector,
     * i.e. source, fetching, polling
     */
    readonly options: JSONConnectorOptions;
    /**
     * The attached parser that converts the data format to the table.
     */
    converter?: JSONConverter;
    /**
     * Overrides the DataConnector method. Emits an event on the connector to
     * all registered callbacks of this event.
     *
     * @param {Event} e
     * Event object containing additional event information.
     */
    emit(e: Event): void;
    /**
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    load(eventDetail?: DataEventDetail): Promise<this>;
}
/**
 * Event objects fired from JSONConnector events.
 */
export interface Event extends DataConnectorEvent {
    readonly data?: JSONData;
}
declare module './DataConnectorType' {
    interface DataConnectorTypes {
        JSON: typeof JSONConnector;
    }
}
export default JSONConnector;
