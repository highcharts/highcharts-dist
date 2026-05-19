/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Christer Vasseng, Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import G from '../Core/Globals.js';
var win = G.win;
import { discardElement, objectEach } from '../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Perform an Ajax call.
 *
 * @function Highcharts.ajax
 *
 * @param {Highcharts.AjaxSettingsObject} settings
 * The Ajax settings to use.
 *
 * @return {false | undefined}
 * Returns false, if error occurred.
 */
export function ajax(settings) {
    var _a;
    var headers = {
        json: 'application/json',
        xml: 'application/xml',
        text: 'text/plain',
        octet: 'application/octet-stream'
    }, r = new XMLHttpRequest();
    /**
     * Private error handler.
     * @internal
     * @param {XMLHttpRequest} xhr
     * Internal request object.
     * @param {string | Error} err
     * Occurred error.
     */
    function handleError(xhr, err) {
        if (settings.error) {
            settings.error(xhr, err);
        }
        else {
            // @todo Maybe emit a highcharts error event here
        }
    }
    if (!settings.url) {
        return false;
    }
    r.open((settings.type || 'get').toUpperCase(), settings.url, true);
    if (!((_a = settings.headers) === null || _a === void 0 ? void 0 : _a['Content-Type'])) {
        r.setRequestHeader('Content-Type', headers[settings.dataType || 'json'] || headers.text);
    }
    objectEach(settings.headers, function (val, key) {
        r.setRequestHeader(key, val);
    });
    if (settings.responseType) {
        r.responseType = settings.responseType;
    }
    // @todo lacking timeout handling
    r.onreadystatechange = function () {
        var _a;
        var res;
        if (r.readyState === 4) {
            if (r.status === 200) {
                if (settings.responseType !== 'blob') {
                    res = r.responseText;
                    if (settings.dataType === 'json') {
                        try {
                            res = JSON.parse(res);
                        }
                        catch (e) {
                            if (e instanceof Error) {
                                return handleError(r, e);
                            }
                        }
                    }
                }
                return (_a = settings.success) === null || _a === void 0 ? void 0 : _a.call(settings, res, r);
            }
            handleError(r, r.responseText);
        }
    };
    if (settings.data && typeof settings.data !== 'string') {
        settings.data = JSON.stringify(settings.data);
    }
    r.send(settings.data);
}
/**
 * Get a JSON resource over XHR, also supporting CORS without preflight.
 *
 * @function Highcharts.getJSON
 *
 * @param {string} url
 * The URL to load.
 * @param {Function} success
 * The success callback. For error handling, use the `Highcharts.ajax` function
 * instead.
 */
function getJSON(url, success) {
    HttpUtilities.ajax({
        url: url,
        success: success,
        dataType: 'json',
        headers: {
            // Override the Content-Type to avoid preflight problems with CORS
            // in the Highcharts demos
            'Content-Type': 'text/plain'
        }
    });
}
/**
 * The post utility.
 *
 * @internal
 * @function Highcharts.post
 *
 * @param {string} url
 * Post URL.
 *
 * @param {Object} data
 * Post data.
 *
 * @param {RequestInit} [fetchOptions]
 * Additional attributes for the post request.
 */
function post(url, data, fetchOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, response, text, link;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new win.FormData();
                    // Add the data to the form
                    objectEach(data, function (value, name) {
                        formData.append(name, value);
                    });
                    formData.append('b64', 'true');
                    return [4 /*yield*/, win.fetch(url, __assign({ method: 'POST', body: formData }, fetchOptions))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    text = _a.sent();
                    link = document.createElement('a');
                    link.href = "data:".concat(data.type, ";base64,").concat(text);
                    link.download = data.filename;
                    link.click();
                    // Remove the link
                    discardElement(link);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Utility functions for Ajax.
 * @class
 * @name Highcharts.HttpUtilities
 */
var HttpUtilities = {
    ajax: ajax,
    getJSON: getJSON
};
HttpUtilities.post = post;
export default HttpUtilities;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @interface Highcharts.AjaxSettingsObject
 */ /**
* The payload to send.
*
* @name Highcharts.AjaxSettingsObject#data
* @type {string | Highcharts.Dictionary<any> | undefined}
*/ /**
* The data type expected.
*
* @name Highcharts.AjaxSettingsObject#dataType
* @type {"json" | "xml" | "text" | "octet" | undefined}
*/ /**
* Function to call on error.
*
* @name Highcharts.AjaxSettingsObject#error
* @type {Function | undefined}
*/ /**
* The headers; keyed on header name.
*
* @name Highcharts.AjaxSettingsObject#headers
* @type {Highcharts.Dictionary<string> | undefined}
*/ /**
* Function to call on success.
*
* @name Highcharts.AjaxSettingsObject#success
* @type {Function | undefined}
*/ /**
* The HTTP method to use. For example GET or POST.
*
* @name Highcharts.AjaxSettingsObject#type
* @type {string | undefined}
*/ /**
* The URL to call.
*
* @name Highcharts.AjaxSettingsObject#url
* @type {string}
*/
(''); // Keeps doclets above in JS file
