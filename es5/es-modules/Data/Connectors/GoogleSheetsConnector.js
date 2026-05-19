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
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Jomar Hønsi
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
import DataConnector from './DataConnector.js';
import GoogleSheetsConverter from '../Converters/GoogleSheetsConverter.js';
import { fireEvent, merge, pick } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests Google's response for error.
 * @private
 */
function isGoogleError(json) {
    return (typeof json === 'object' && json &&
        typeof json.error === 'object' && json.error &&
        typeof json.error.code === 'number' &&
        typeof json.error.message === 'string' &&
        typeof json.error.status === 'string');
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @todo implement save, requires oauth2
 */
var GoogleSheetsConnector = /** @class */ (function (_super) {
    __extends(GoogleSheetsConnector, _super);
    /* *
 *
 *  Constructor
 *
 * */
    /**
 * Constructs an instance of GoogleSheetsConnector
 *
 * @param {Partial<GoogleSheetsConnectorOptions>} [options]
 * Options for the connector and converter.
 */
    function GoogleSheetsConnector(options) {
        var _this = this;
        var mergedOptions = merge(GoogleSheetsConnector.defaultOptions, options);
        _this = _super.call(this, mergedOptions) || this;
        _this.options = mergedOptions;
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
    GoogleSheetsConnector.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
 * Loads data from a Google Spreadsheet.
 *
 * @param {DataEventDetail} [eventDetail]
 * Custom information for pending events.
 *
 * @return {Promise<this>}
 * Same connector instance with modified table.
 */
    GoogleSheetsConnector.prototype.load = function (eventDetail) {
        var _this = this;
        var _a;
        var connector = this;
        var options = connector.options;
        var dataRefreshRate = options.dataRefreshRate, enablePolling = options.enablePolling, googleAPIKey = options.googleAPIKey, googleSpreadsheetKey = options.googleSpreadsheetKey, dataTables = options.dataTables;
        var url = buildFetchURL(googleAPIKey, googleSpreadsheetKey, options);
        connector.emit({
            type: 'load',
            detail: eventDetail,
            url: url
        });
        if (!URL.canParse(url)) {
            throw new Error('Invalid URL: ' + url);
        }
        return fetch(url, { signal: (_a = connector === null || connector === void 0 ? void 0 : connector.pollingController) === null || _a === void 0 ? void 0 : _a.signal })
            .then(function (response) { return (response.json()); })
            .then(function (json) {
            if (isGoogleError(json)) {
                throw new Error(json.error.message);
            }
            _this.initConverters(json, function (key) {
                var tableOptions = dataTables === null || dataTables === void 0 ? void 0 : dataTables.find(function (dataTable) { return dataTable.key === key; });
                // The data table options takes precedence over the
                // connector options.
                var _a = tableOptions || {}, _b = _a.firstRowAsNames, firstRowAsNames = _b === void 0 ? options.firstRowAsNames : _b, _c = _a.beforeParse, beforeParse = _c === void 0 ? options.beforeParse : _c;
                var converterOptions = {
                    firstRowAsNames: firstRowAsNames,
                    beforeParse: beforeParse
                };
                return new GoogleSheetsConverter(converterOptions);
            }, function (converter, data) {
                return converter.parse({ json: data });
            });
            return connector.applyTableModifiers();
        })
            .then(function () {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                url: url
            });
            // Polling
            if (enablePolling) {
                setTimeout(function () { return connector.load(); }, Math.max(dataRefreshRate || 0, 1) * 1000);
            }
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
    GoogleSheetsConnector.defaultOptions = {
        id: 'google-sheets-connector',
        type: 'GoogleSheets',
        googleAPIKey: '',
        googleSpreadsheetKey: '',
        enablePolling: false,
        dataRefreshRate: 2,
        firstRowAsNames: true
    };
    return GoogleSheetsConnector;
}(DataConnector));
/* *
 *
 *  Constants
 *
 * */
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/* *
 *
 *  Functions
 *
 * */
/**
 * Creates GoogleSheets API v4 URL.
 * @private
 */
export function buildFetchURL(apiKey, sheetKey, options) {
    if (options === void 0) { options = {}; }
    var url = new URL("https://sheets.googleapis.com/v4/spreadsheets/".concat(sheetKey, "/values/"));
    var range = options.onlyColumnIds ?
        'A1:Z1' : buildQueryRange(options);
    url.pathname += range;
    var searchParams = url.searchParams;
    searchParams.set('alt', 'json');
    if (!options.onlyColumnIds) {
        searchParams.set('dateTimeRenderOption', 'FORMATTED_STRING');
        searchParams.set('majorDimension', 'COLUMNS');
        searchParams.set('valueRenderOption', 'UNFORMATTED_VALUE');
    }
    searchParams.set('prettyPrint', 'false');
    searchParams.set('key', apiKey);
    return url.href;
}
/**
 * Creates sheets range.
 * @private
 */
export function buildQueryRange(options) {
    if (options === void 0) { options = {}; }
    var endColumn = options.endColumn, endRow = options.endRow, googleSpreadsheetRange = options.googleSpreadsheetRange, startColumn = options.startColumn, startRow = options.startRow;
    return googleSpreadsheetRange || ((alphabet[startColumn || 0] || 'A') +
        (Math.max((startRow || 0), 0) + 1) +
        ':' +
        (alphabet[pick(endColumn, 25)] || 'Z') +
        (endRow ?
            Math.max(endRow, 0) :
            'Z'));
}
/* *
 *
 *  Registry
 *
 * */
DataConnector.registerType('GoogleSheets', GoogleSheetsConnector);
/* *
 *
 *  Default Export
 *
 * */
export default GoogleSheetsConnector;
