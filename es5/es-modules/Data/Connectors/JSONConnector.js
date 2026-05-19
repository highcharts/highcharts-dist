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
 *  - Paweł Lysy
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
import DataConnector from './DataConnector.js';
import JSONConverter from '../Converters/JSONConverter.js';
import { fireEvent, merge } from '../../Shared/Utilities.js';
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
var JSONConnector = /** @class */ (function (_super) {
    __extends(JSONConnector, _super);
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
    function JSONConnector(options) {
        var _this = this;
        var mergedOptions = merge(JSONConnector.defaultOptions, options);
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
    JSONConnector.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    JSONConnector.prototype.load = function (eventDetail) {
        var _this = this;
        var _a;
        var connector = this;
        var options = connector.options;
        var data = options.data, dataUrl = options.dataUrl, dataTables = options.dataTables;
        connector.emit({
            type: 'load',
            detail: eventDetail,
            data: data
        });
        return Promise
            .resolve(dataUrl ?
            fetch(dataUrl, {
                signal: (_a = connector === null || connector === void 0 ? void 0 : connector.pollingController) === null || _a === void 0 ? void 0 : _a.signal
            }).then(function (response) { return response.json(); })['catch'](function (error) {
                connector.emit({
                    type: 'loadError',
                    detail: eventDetail,
                    error: error
                });
                console.warn("Unable to fetch data from ".concat(dataUrl, ".")); // eslint-disable-line no-console
            }) :
            data || [])
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (data) {
                    this.initConverters(data, function (key) {
                        var tableOptions = dataTables === null || dataTables === void 0 ? void 0 : dataTables.find(function (dataTable) { return dataTable.key === key; });
                        // The data table options takes precedence over the
                        // connector options.
                        var _a = tableOptions || {}, _b = _a.columnIds, columnIds = _b === void 0 ? options.columnIds : _b, _c = _a.firstRowAsNames, firstRowAsNames = _c === void 0 ? options.firstRowAsNames : _c, _d = _a.orientation, orientation = _d === void 0 ? options.orientation : _d, _e = _a.beforeParse, beforeParse = _e === void 0 ? options.beforeParse : _e;
                        var converterOptions = {
                            data: data,
                            columnIds: columnIds,
                            firstRowAsNames: firstRowAsNames,
                            orientation: orientation,
                            beforeParse: beforeParse
                        };
                        return new JSONConverter(converterOptions);
                    }, function (converter, data) {
                        return converter.parse({ data: data });
                    });
                }
                return [2 /*return*/, connector.applyTableModifiers().then(function () { return data !== null && data !== void 0 ? data : []; })];
            });
        }); })
            .then(function (data) {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                data: data
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
    JSONConnector.defaultOptions = {
        type: 'JSON',
        id: 'json-connector',
        data: [],
        enablePolling: false,
        dataRefreshRate: 0,
        firstRowAsNames: true,
        orientation: 'rows'
    };
    return JSONConnector;
}(DataConnector));
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
