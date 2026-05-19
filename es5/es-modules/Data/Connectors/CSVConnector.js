/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import CSVConverter from '../Converters/CSVConverter.js';
import DataConnector from './DataConnector.js';
import { fireEvent, merge } from '../../Shared/Utilities.js';
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
var CSVConnector = /** @class */ (function (_super) {
    __extends(CSVConnector, _super);
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
    function CSVConnector(options) {
        var _this = this;
        var mergedOptions = merge(CSVConnector.defaultOptions, options);
        _this = _super.call(this, mergedOptions) || this;
        _this.options = mergedOptions;
        if (mergedOptions.enablePolling) {
            _this.startPolling(Math.max(mergedOptions.dataRefreshRate || 0, 1) * 1000);
        }
        return _this;
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
     * @param {Event} e
     * Event object containing additional event information.
     */
    CSVConnector.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
     * Initiates the loading of the CSV source to the connector
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVConnector#load
     * @emits CSVConnector#afterLoad
     */
    CSVConnector.prototype.load = function (eventDetail) {
        var _this = this;
        var _a;
        var connector = this;
        var options = connector.options;
        var csv = options.csv, csvURL = options.csvURL, dataTables = options.dataTables, decimalPoint = options.decimalPoint;
        connector.emit({
            type: 'load',
            csv: csv
        });
        return Promise
            .resolve(csvURL ?
            fetch(csvURL, {
                signal: (_a = connector === null || connector === void 0 ? void 0 : connector.pollingController) === null || _a === void 0 ? void 0 : _a.signal
            }).then(function (response) { return response.text(); }) :
            csv || '')
            .then(function (csv) {
            if (csv) {
                _this.initConverters(csv, function (key) {
                    var tableOptions = dataTables === null || dataTables === void 0 ? void 0 : dataTables.find(function (dataTable) { return dataTable.key === key; });
                    // The data table options takes precedence over the
                    // connector options.
                    var _a = tableOptions || {}, _b = _a.firstRowAsNames, firstRowAsNames = _b === void 0 ? options.firstRowAsNames : _b, _c = _a.beforeParse, beforeParse = _c === void 0 ? options.beforeParse : _c;
                    var converterOptions = {
                        decimalPoint: decimalPoint,
                        firstRowAsNames: firstRowAsNames,
                        beforeParse: beforeParse
                    };
                    return new CSVConverter(merge(options, converterOptions));
                }, function (converter, data) {
                    return converter.parse({ csv: data });
                });
            }
            return connector.applyTableModifiers().then(function () { return csv; });
        })
            .then(function (csv) {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                csv: csv
            });
            return connector;
        })['catch'](function (error) {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error: error
            });
            throw error;
        });
    };
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
    return CSVConnector;
}(DataConnector));
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
