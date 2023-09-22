import type DataEvent from '../DataEvent';
import type HTMLTableConnectorOptions from './HTMLTableConnectorOptions';
import type Types from '../../Shared/Types';
import DataConnector from './DataConnector.js';
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
     * @param {HTMLTableConnector.UserOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options?: HTMLTableConnector.UserOptions);
    /**
     * Options for the HTMLTable dataconnector
     * @todo this should not include parsing options
     */
    readonly options: HTMLTableConnectorOptions;
    /**
     * The attached parser, which can be replaced in the constructor
     */
    readonly converter: HTMLTableConverter;
    /**
     * The table element to create the connector from. Is either supplied
     * directly or is fetched by an ID.
     */
    tableElement?: HTMLElement;
    tableID?: string;
    /**
     * Initiates creating the dataconnector from the HTML table
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits HTMLTableConnector#load
     * @emits HTMLTableConnector#afterLoad
     * @emits HTMLTableConnector#loadError
     */
    load(eventDetail?: DataEvent.Detail): Promise<this>;
}
/**
 * Types for class-specific options and events
 */
declare namespace HTMLTableConnector {
    /**
     * Type for event object fired from HTMLTableConnector
     */
    type Event = (ErrorEvent | LoadEvent);
    /**
     * Provided event object on errors within HTMLTableConnector
     */
    type ErrorEvent = DataConnector.ErrorEvent;
    /**
     * Options for exporting the connector as an HTML table
     */
    interface ExportOptions {
        decimalPoint?: string | null;
        exportIDColumn?: boolean;
        tableCaption?: string;
        useLocalDecimalPoint?: boolean;
        useMultiLevelHeaders?: boolean;
        useRowspanHeaders?: boolean;
        usePresentationOrder?: boolean;
    }
    /**
     * Provided event object on load events within HTMLTableConnector
     */
    interface LoadEvent extends DataConnector.LoadEvent {
        tableElement?: (HTMLElement | null);
    }
    /**
     * Available options for constructor and converter of the
     * HTMLTableConnector.
     */
    type UserOptions = (Types.DeepPartial<HTMLTableConnectorOptions> & HTMLTableConverter.UserOptions);
}
declare module './DataConnectorType' {
    interface DataConnectorTypes {
        HTMLTable: typeof HTMLTableConnector;
    }
}
export default HTMLTableConnector;
