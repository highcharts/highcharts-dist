/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Christer Vasseng
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */
'use strict';
import CSVConverter from '../Converters/CSVConverter.js';
import DataConnector from './DataConnector.js';
import U from '../../Core/Utilities.js';
const { merge, fireEvent } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a DataConnector from CSV
 *
 * @private
 */
class CSVConnector extends DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of CSVConnector.
     *
     * @param {Partial<CSVConnectorOptions>} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = merge(CSVConnector.defaultOptions, options);
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
     * @param {CSVConnector.Event} e
     * Event object containing additional event information.
     */
    emit(e) {
        fireEvent(this, e.type, e);
    }
    /**
     * Initiates the loading of the CSV source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVConnector#load
     * @emits CSVConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this;
        const options = connector.options;
        const { csv, csvURL, dataTables, decimalPoint } = options;
        connector.emit({
            type: 'load',
            csv
        });
        return Promise
            .resolve(csvURL ?
            fetch(csvURL, {
                signal: connector?.pollingController?.signal
            }).then((response) => response.text()) :
            csv || '')
            .then((csv) => {
            if (csv) {
                this.initConverters(csv, (key) => {
                    const tableOptions = dataTables?.find((dataTable) => dataTable.key === key);
                    // The data table options takes precedence over the
                    // connector options.
                    const { firstRowAsNames = options.firstRowAsNames, beforeParse = options.beforeParse } = tableOptions || {};
                    const converterOptions = {
                        decimalPoint,
                        firstRowAsNames,
                        beforeParse
                    };
                    return new CSVConverter(merge(options, converterOptions));
                }, (converter, data) => converter.parse({ csv: data }));
            }
            return connector.applyTableModifiers().then(() => csv);
        })
            .then((csv) => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                csv
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
CSVConnector.defaultOptions = {
    id: 'csv-connector',
    type: 'CSV',
    csv: '',
    csvURL: '',
    enablePolling: false,
    dataRefreshRate: 1,
    firstRowAsNames: true
};
/* *
 *
 *  Registry
 *
 * */
DataConnector.registerType('CSV', CSVConnector);
/* *
 *
 *  Default Export
 *
 * */
export default CSVConnector;
