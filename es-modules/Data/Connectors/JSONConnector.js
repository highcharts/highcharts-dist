/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Pawel Lysy
 *  - Kamil Kubik
 *
 * */
'use strict';
import DataConnector from './DataConnector.js';
import JSONConverter from '../Converters/JSONConverter.js';
import U from '../../Core/Utilities.js';
const { merge, fireEvent } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a DataConnector from JSON structure
 *
 * @private
 */
class JSONConnector extends DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of JSONConnector.
     *
     * @param {Partial<JSONConnectorOptions>} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = merge(JSONConnector.defaultOptions, options);
        super(mergedOptions);
        this.options = mergedOptions;
        if (mergedOptions.enablePolling) {
            this.startPolling(Math.max(mergedOptions.dataRefreshRate || 0, 1) * 1000);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Overrides the DataConnector method. Emits an event on the connector to
     * all registered callbacks of this event.
     *
     * @param {JSONConnector.Event} e
     * Event object containing additional event information.
     */
    emit(e) {
        fireEvent(this, e.type, e);
    }
    /**
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this;
        const options = connector.options;
        const { data, dataUrl, dataTables } = options;
        connector.emit({
            type: 'load',
            detail: eventDetail,
            data
        });
        return Promise
            .resolve(dataUrl ?
            fetch(dataUrl, {
                signal: connector?.pollingController?.signal
            }).then((response) => response.json())['catch']((error) => {
                connector.emit({
                    type: 'loadError',
                    detail: eventDetail,
                    error
                });
                console.warn(`Unable to fetch data from ${dataUrl}.`); // eslint-disable-line no-console
            }) :
            data || [])
            .then(async (data) => {
            if (data) {
                this.initConverters(data, (key) => {
                    const tableOptions = dataTables?.find((dataTable) => dataTable.key === key);
                    // The data table options takes precedence over the
                    // connector options.
                    const { columnIds = options.columnIds, firstRowAsNames = options.firstRowAsNames, orientation = options.orientation, beforeParse = options.beforeParse } = tableOptions || {};
                    const converterOptions = {
                        data,
                        columnIds,
                        firstRowAsNames,
                        orientation,
                        beforeParse
                    };
                    return new JSONConverter(converterOptions);
                }, (converter, data) => converter.parse({ data }));
            }
            return connector.applyTableModifiers().then(() => data ?? []);
        })
            .then((data) => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                data
            });
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
JSONConnector.defaultOptions = {
    type: 'JSON',
    id: 'json-connector',
    data: [],
    enablePolling: false,
    dataRefreshRate: 0,
    firstRowAsNames: true,
    orientation: 'rows'
};
/* *
 *
 *  Registry
 *
 * */
DataConnector.registerType('JSON', JSONConnector);
/* *
 *
 *  Default Export
 *
 * */
export default JSONConnector;
