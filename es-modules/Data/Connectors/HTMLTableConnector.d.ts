import type { DataEventDetail } from '../DataEvent';
import type HTMLTableConnectorOptions from './HTMLTableConnectorOptions';
import type HTMLTableConverterOptions from '../Converters/HTMLTableConverterOptions';
import DataConnector, { type Event as DataConnectorEvent } from './DataConnector.js';
import HTMLTableConverter from '../Converters/HTMLTableConverter.js';
/**
 * Class that handles creating a data connector from an HTML table.
 *
 * @private
 */
declare class HTMLTableConnector extends DataConnector {
    protected static readonly defaultOptions: HTMLTableConnectorOptions;
    /**
     * Constructs an instance of HTMLTableConnector.
     *
     * @param {CombinedHTMLTableConnectorOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options?: CombinedHTMLTableConnectorOptions);
    /**
     * Options for the HTMLTable dataconnector
     * @todo this should not include parsing options
     */
    readonly options: HTMLTableConnectorOptions;
    /**
     * The attached parser, which can be replaced in the constructor
     */
    converter: HTMLTableConverter;
    /**
     * The table element to create the connector from. Is either supplied
     * directly or is fetched by an ID.
     */
    tableElement?: HTMLElement;
    tableID?: string;
    /**
     * Initiates creating the dataconnector from the HTML table
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits HTMLTableConnector#load
     * @emits HTMLTableConnector#afterLoad
     * @emits HTMLTableConnector#loadError
     */
    load(eventDetail?: DataEventDetail): Promise<this>;
}
/**
 * Type for event object fired from HTMLTableConnector
 */
export interface Event extends DataConnectorEvent {
}
/**
 * Options for exporting the connector as an HTML table
 */
export interface ExportOptions {
    decimalPoint?: string | null;
    exportIDColumn?: boolean;
    tableCaption?: string;
    useLocalDecimalPoint?: boolean;
    useMultiLevelHeaders?: boolean;
    useRowspanHeaders?: boolean;
}
/**
 * Options of the HTMLTable connector and converter.
 */
export type CombinedHTMLTableConnectorOptions = Partial<HTMLTableConnectorOptions> & HTMLTableConverterOptions;
declare module './DataConnectorType' {
    interface DataConnectorTypes {
        HTMLTable: typeof HTMLTableConnector;
    }
}
export default HTMLTableConnector;
