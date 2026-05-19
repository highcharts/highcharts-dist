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
 *  - Wojciech Chmiel
 *  - Gøran Slettemark
 *  - Dawid Draguła
 *  - Kamil Kubik
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
import DataModifier from '../Modifiers/DataModifier.js';
import DataTable from '../DataTable.js';
import { addEvent, fireEvent, merge, pick } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class providing an interface for managing a DataConnector.
 */
var DataConnector = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructor for the connector class.
     *
     * @param {DataConnectorOptions} [options]
     * Options to use in the connector.
     */
    function DataConnector(options) {
        /**
         * Tables managed by this DataConnector instance.
         */
        this.dataTables = {};
        /**
         * Helper flag for detecting whether the data connector is loaded.
         * @internal
         */
        this.loaded = false;
        this.metadata = options.metadata || { columns: {} };
        this.options = options;
        // Create a data table for each defined in the dataTables user options.
        var dataTables = options === null || options === void 0 ? void 0 : options.dataTables;
        var dataTableIndex = 0;
        if (options.options) {
            // eslint-disable-next-line no-console
            console.error('The `DataConnectorOptions.options` property was removed in Dashboards v4.0.0. Check how to upgrade your connector to use the new options structure here: https://api.highcharts.com/dashboards/#interfaces/Data_DataTableOptions.DataTableOptions');
        }
        if (dataTables && (dataTables === null || dataTables === void 0 ? void 0 : dataTables.length) > 0) {
            for (var i = 0, iEnd = dataTables.length; i < iEnd; ++i) {
                var dataTable = dataTables[i];
                var key = dataTable === null || dataTable === void 0 ? void 0 : dataTable.key;
                this.dataTables[key !== null && key !== void 0 ? key : dataTableIndex] =
                    new DataTable(dataTable);
                if (!key) {
                    dataTableIndex++;
                }
            }
        }
        else {
            // If user options dataTables is not defined, generate a default
            // table.
            this.dataTables[0] = new DataTable({
                id: options.id // Required by DataTableCore
            });
        }
    }
    /**
     * Adds a connector class to the registry. The connector has to provide the
     * `DataConnector.options` property and the `DataConnector.load` method to
     * modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the connector class.
     *
     * @param {DataConnectorType} DataConnectorClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a connector registered with this key.
     */
    DataConnector.registerType = function (key, DataConnectorClass) {
        return (!!key &&
            !DataConnector.types[key] &&
            !!(DataConnector.types[key] = DataConnectorClass));
    };
    Object.defineProperty(DataConnector.prototype, "polling", {
        /**
         * Whether the connector is currently polling for new data.
         */
        get: function () {
            return !!this._polling;
        },
        enumerable: false,
        configurable: true
    });
    /* *
     *
     *  Methods
     *
     * */
    /**
     * Returns a single data table instance based on the provided key.
     * Otherwise, returns the first data table.
     *
     * @param {string} [key]
     * The data table key.
     *
     * @return {DataTable}
     * The data table instance.
     */
    DataConnector.prototype.getTable = function (key) {
        if (key) {
            return this.dataTables[key];
        }
        return Object.values(this.dataTables)[0];
    };
    /**
     * Method for adding metadata for a single column.
     *
     * @param {string} name
     * The name of the column to be described.
     *
     * @param {MetaColumn} columnMeta
     * The metadata to apply to the column.
     */
    DataConnector.prototype.describeColumn = function (name, columnMeta) {
        var connector = this;
        var columns = connector.metadata.columns;
        columns[name] = merge(columns[name] || {}, columnMeta);
    };
    /**
     * Method for applying columns meta information to the whole DataConnector.
     *
     * @param {Record<string, MetaColumn>} columns
     * Pairs of column names and MetaColumn objects.
     */
    DataConnector.prototype.describeColumns = function (columns) {
        var connector = this;
        var columnIds = Object.keys(columns);
        var columnId;
        while (typeof (columnId = columnIds.pop()) === 'string') {
            connector.describeColumn(columnId, columns[columnId]);
        }
    };
    /**
     * Returns the order of columns.
     *
     * @return {string[] | undefined}
     * Order of columns.
     */
    DataConnector.prototype.getColumnOrder = function () {
        var connector = this, columns = connector.metadata.columns, names = Object.keys(columns || {});
        if (names.length) {
            return names.sort(function (a, b) { return (pick(columns[a].index, 0) - pick(columns[b].index, 0)); });
        }
    };
    /**
     * Retrieves the columns of the dataTable,
     * applies column order from meta.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * An object with the properties `columnIds` and `columnValues`
     */
    DataConnector.prototype.getSortedColumns = function () {
        return this.getTable().getColumns(this.getColumnOrder());
    };
    /**
     * Sets the index and order of columns.
     *
     * @param {Array<string>} columnIds
     * Order of columns.
     */
    DataConnector.prototype.setColumnOrder = function (columnIds) {
        var connector = this;
        for (var i = 0, iEnd = columnIds.length; i < iEnd; ++i) {
            connector.describeColumn(columnIds[i], { index: i });
        }
    };
    /**
     * Updates the connector with new options.
     *
     * @param {object} newOptions
     * The new options to be applied to the connector.
     *
     * @param {boolean} [reload=true]
     * Whether to reload the connector after applying the new options.
     */
    DataConnector.prototype.update = function (newOptions_1) {
        return __awaiter(this, arguments, void 0, function (newOptions, reload) {
            var options;
            if (reload === void 0) { reload = true; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.emit({ type: 'beforeUpdate' });
                        merge(true, this.options, newOptions);
                        options = this.options;
                        if ('enablePolling' in newOptions || 'dataRefreshRate' in newOptions) {
                            if ('enablePolling' in options && options.enablePolling) {
                                this.stopPolling();
                                this.startPolling(('dataRefreshRate' in options &&
                                    typeof options.dataRefreshRate === 'number') ? Math.max(options.dataRefreshRate, 1) * 1000 : 1000);
                            }
                            else {
                                this.stopPolling();
                            }
                        }
                        if (!reload) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.emit({ type: 'afterUpdate' });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The default load method, which fires the `afterLoad` event
     *
     * @return {Promise<DataConnector>}
     * The loaded connector.
     *
     * @emits DataConnector#afterLoad
     */
    DataConnector.prototype.load = function () {
        this.emit({ type: 'afterLoad' });
        return Promise.resolve(this);
    };
    /**
     * Applies the data modifiers to the data tables according to the
     * connector data tables options.
     */
    DataConnector.prototype.applyTableModifiers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tableOptionsArray, _loop_1, this_1, _i, _a, _b, key, table;
            var _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        tableOptionsArray = (_c = this.options) === null || _c === void 0 ? void 0 : _c.dataTables;
                        _loop_1 = function (key, table) {
                            var dataModifierOptions, ModifierClass;
                            return __generator(this, function (_h) {
                                switch (_h.label) {
                                    case 0:
                                        dataModifierOptions = (_e = (_d = tableOptionsArray === null || tableOptionsArray === void 0 ? void 0 : tableOptionsArray.find(function (dataTable) { return dataTable.key === key; })) === null || _d === void 0 ? void 0 : _d.dataModifier) !== null && _e !== void 0 ? _e : (_f = this_1.options) === null || _f === void 0 ? void 0 : _f.dataModifier;
                                        if (!dataModifierOptions) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        ModifierClass = (dataModifierOptions &&
                                            DataModifier.types[dataModifierOptions.type]);
                                        return [4 /*yield*/, table.setModifier(ModifierClass ?
                                                new ModifierClass(dataModifierOptions) :
                                                void 0)];
                                    case 1:
                                        _h.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = Object.entries(this.dataTables);
                        _g.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        _b = _a[_i], key = _b[0], table = _b[1];
                        return [5 /*yield**/, _loop_1(key, table)];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Starts polling new data after the specific time span in milliseconds.
     *
     * @param {number} refreshTime
     * Refresh time in milliseconds between polls.
     */
    DataConnector.prototype.startPolling = function (refreshTime) {
        if (refreshTime === void 0) { refreshTime = 1000; }
        var connector = this;
        // Assign a new abort controller.
        this.pollingController = new AbortController();
        // Clear the polling timeout.
        window.clearTimeout(connector._polling);
        connector._polling = window.setTimeout(
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        function () { return connector
            .load()['catch'](function (error) { return connector.emit({
            type: 'loadError',
            error: error
        }); })
            .then(function () {
            if (connector._polling) {
                connector.startPolling(refreshTime);
            }
        }); }, refreshTime);
    };
    /**
     * Stops polling data. Shouldn't be performed if polling is already stopped.
     */
    DataConnector.prototype.stopPolling = function () {
        var _a;
        var connector = this;
        if (!connector.polling) {
            return;
        }
        // Abort the existing request.
        (_a = connector === null || connector === void 0 ? void 0 : connector.pollingController) === null || _a === void 0 ? void 0 : _a.abort();
        // Clear the polling timeout.
        window.clearTimeout(connector._polling);
        delete connector._polling;
    };
    /**
     * Emits an event on the connector to all registered callbacks of this
     * event.
     *
     * @param {Event} e
     * Event object containing additional event information.
     */
    DataConnector.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
     * Registers a callback for a specific connector event.
     *
     * @param {string} type
     * Event type.
     *
     * @param {Function} callback
     * Function to register for the connector callback.
     *
     * @return {Function}
     * Function to unregister callback from the connector event.
     */
    DataConnector.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /**
     * Iterates over the dataTables and initiates the corresponding converters.
     * Updates the dataTables and assigns the first converter.
     *
     * @param {T}[data]
     * Data specific to the corresponding converter.
     *
     * @param {CreateConverterFunction}[createConverter]
     * Creates a specific converter combining the dataTable options.
     *
     * @param {ParseDataFunction<T>}[parseData]
     * Runs the converter parse method with the specific data type.
     */
    DataConnector.prototype.initConverters = function (data, createConverter, parseData) {
        var index = 0;
        for (var _i = 0, _a = Object.entries(this.dataTables); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], table = _b[1];
            // Create a proper converter and parse its data.
            var converter = createConverter(key);
            var columns = parseData(converter, data);
            // Update the dataTable.
            table.deleteColumns();
            table.setColumns(columns);
            // Assign the first converter.
            if (index === 0) {
                this.converter = converter;
            }
            index++;
        }
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Registry as a record object with connector names and their class.
     */
    DataConnector.types = {};
    return DataConnector;
}());
/* *
 *
 *  Default Export
 *
 * */
export default DataConnector;
