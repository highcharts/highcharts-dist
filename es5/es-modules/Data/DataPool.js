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
 *  - Sophie Bremer
 *
 * */
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import DataConnector from './Connectors/DataConnector.js';
import { addEvent, fireEvent, merge } from '../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Data pool to load connectors on-demand.
 *
 * @class
 * @name Data.DataPool
 *
 * @param {DataPoolOptions} options
 * Pool options with all connectors.
 */
var DataPool = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function DataPool(options) {
        this.options = merge(DataPool.defaultOptions, options);
        this.connectors = {};
        this.waiting = {};
    }
    /* *
     *
     *  Methods
     *
     * */
    /**
     * Emits an event on this data pool to all registered callbacks of the given
     * event.
     *
     * @param {DataTableEvent} e
     * Event object with event information.
     */
    DataPool.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
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
    DataPool.prototype.getConnector = function (connectorId) {
        var _this = this;
        var connector = this.connectors[connectorId];
        // Already loaded
        if (connector === null || connector === void 0 ? void 0 : connector.loaded) {
            return Promise.resolve(connector);
        }
        var waitingList = this.waiting[connectorId];
        // Start loading
        if (!waitingList) {
            waitingList = this.waiting[connectorId] = [];
            var connectorOptions = this.getConnectorOptions(connectorId);
            if (!connectorOptions) {
                throw new Error("Connector '".concat(connectorId, "' not found."));
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this
                .loadConnector(connectorOptions)
                .then(function (connector) {
                delete _this.waiting[connectorId];
                for (var i = 0, iEnd = waitingList.length; i < iEnd; ++i) {
                    waitingList[i][0](connector);
                }
            })['catch'](function (error) {
                delete _this.waiting[connectorId];
                for (var i = 0, iEnd = waitingList.length; i < iEnd; ++i) {
                    waitingList[i][1](error);
                }
            });
        }
        // Add request to waiting list
        return new Promise(function (resolve, reject) {
            waitingList.push([resolve, reject]);
        });
    };
    /**
     * Returns the IDs of all connectors.
     *
     * @private
     *
     * @return {Array<string>}
     * Names of all connectors.
     */
    DataPool.prototype.getConnectorIds = function () {
        var connectors = this.options.connectors, connectorIds = [];
        for (var i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            connectorIds.push(connectors[i].id);
        }
        return connectorIds;
    };
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
    DataPool.prototype.getConnectorOptions = function (connectorId) {
        var connectors = this.options.connectors;
        for (var i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            if (connectors[i].id === connectorId) {
                return connectors[i];
            }
        }
    };
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
    DataPool.prototype.isNewConnector = function (connectorId) {
        return !this.connectors[connectorId];
    };
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
    DataPool.prototype.loadConnector = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.emit({
                type: 'load',
                options: options
            });
            var ConnectorClass = DataConnector.types[options.type];
            if (!ConnectorClass) {
                throw new Error("Connector type not found. (".concat(options.type, ")"));
            }
            var connector = _this.connectors[options.id] =
                new ConnectorClass(options);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connector
                .load()
                .then(function (_a) {
                var converter = _a.converter;
                connector.converter = converter;
                connector.loaded = true;
                _this.emit({
                    type: 'afterLoad',
                    options: options
                });
                resolve(connector);
            })['catch'](reject);
        });
    };
    /**
     * Cancels all data connectors pending requests.
     */
    DataPool.prototype.cancelPendingRequests = function () {
        var connectors = this.connectors;
        for (var _i = 0, _a = Object.keys(connectors); _i < _a.length; _i++) {
            var connectorKey = _a[_i];
            connectors[connectorKey].stopPolling();
        }
    };
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
    DataPool.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /**
     * Sets connector options under the specified `options.id`.
     *
     * @param {object} options
     * Connector options to set.
     *
     * @param {boolean} [update]
     * Whether to update the existing connector with the new options and reload
     * it (`true`) or replace it with a new connector instance (`false`).
     */
    DataPool.prototype.setConnectorOptions = function (options, update) {
        return __awaiter(this, void 0, void 0, function () {
            var connectorsOptions, connectorsInstances, i, iEnd, existingConnector;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectorsOptions = this.options.connectors;
                        connectorsInstances = this.connectors;
                        this.emit({
                            type: 'setConnectorOptions',
                            options: options
                        });
                        for (i = 0, iEnd = connectorsOptions.length; i < iEnd; ++i) {
                            if (connectorsOptions[i].id === options.id) {
                                connectorsOptions.splice(i, 1);
                                break;
                            }
                        }
                        existingConnector = connectorsInstances[options.id];
                        if (!existingConnector) return [3 /*break*/, 3];
                        if (!update) return [3 /*break*/, 2];
                        return [4 /*yield*/, existingConnector.update(options, true)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        existingConnector.stopPolling();
                        existingConnector = void 0;
                        delete connectorsInstances[options.id];
                        _a.label = 3;
                    case 3:
                        if (!existingConnector) {
                            connectorsOptions.push(options);
                        }
                        this.emit({
                            type: 'afterSetConnectorOptions',
                            options: options
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /* *
     *
     *  Static Properties
     *
     * */
    DataPool.defaultOptions = {
        connectors: []
    };
    return DataPool;
}());
/* *
 *
 *  Default Export
 *
 * */
export default DataPool;
