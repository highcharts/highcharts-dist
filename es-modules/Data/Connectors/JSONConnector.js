/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Pawel Lysy
 *
 * */
'use strict';
import DataConnector from './DataConnector.js';
import U from '../../Core/Utilities.js';
import JSONConverter from '../Converters/JSONConverter.js';
const { merge } = U;
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
     * @param {JSONConnector.UserOptions} [options]
     * Options for the connector and converter.
     *
     * @param {Array<DataTable>} [dataTables]
     * Multiple connector data tables options.
     */
    constructor(options, dataTables) {
        const mergedOptions = merge(JSONConnector.defaultOptions, options);
        super(mergedOptions, dataTables);
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
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this, tables = connector.dataTables, { data, dataUrl, dataModifier } = connector.options;
        connector.emit({
            type: 'load',
            data,
            detail: eventDetail,
            tables
        });
        return Promise
            .resolve(dataUrl ?
            fetch(dataUrl, {
                signal: connector?.pollingController?.signal
            }).then((response) => response.json())['catch']((error) => {
                connector.emit({
                    type: 'loadError',
                    detail: eventDetail,
                    error,
                    tables
                });
                console.warn(`Unable to fetch data from ${dataUrl}.`); // eslint-disable-line no-console
            }) :
            data || [])
            .then((data) => {
            if (data) {
                this.initConverters(data, (key, table) => {
                    const options = this.options;
                    // Takes over the connector default options.
                    const dataTableOptions = {
                        dataTableKey: key,
                        columnNames: table.columnNames ??
                            options.columnNames,
                        firstRowAsNames: table.firstRowAsNames ??
                            options.firstRowAsNames,
                        orientation: table.orientation ??
                            options.orientation,
                        beforeParse: table.beforeParse ??
                            options.beforeParse
                    };
                    return new JSONConverter(merge(this.options, dataTableOptions));
                }, (converter, data) => {
                    converter.parse({ data });
                });
            }
            return connector.setModifierOptions(dataModifier)
                .then(() => data);
        })
            .then((data) => {
            connector.emit({
                type: 'afterLoad',
                data,
                detail: eventDetail,
                tables
            });
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error,
                tables
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
    data: [],
    enablePolling: false,
    dataRefreshRate: 0,
    firstRowAsNames: true,
    orientation: 'rows'
};
DataConnector.registerType('JSON', JSONConnector);
/* *
 *
 *  Default Export
 *
 * */
export default JSONConnector;
