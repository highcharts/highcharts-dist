import type JSON from './JSON';
/**
 * Callback function for Ajax errors.
 *
 * @callback Highcharts.AjaxErrorCallbackFunction
 *
 * @param {XMLHttpRequest} request
 * The XHR object.
 *
 * @param {string|Error} error
 * The error message.
 */
export interface AjaxErrorCallbackFunction {
    (request: XMLHttpRequest, error: (string | Error)): void;
}
export interface AjaxSettingsObject {
    /**
     * The payload to send.
     */
    data?: (string | JSON.Type | JSON.Builder | JSON);
    /**
     * The data type expected.
     */
    dataType?: string;
    /**
     * Function to call on error.
     */
    error?: AjaxErrorCallbackFunction;
    /**
     * The headers; keyed on header name.
     */
    headers?: Record<string, string>;
    /**
     * The response type.
     */
    responseType?: ('arraybuffer' | 'blob' | 'document' | 'json' | 'text');
    /**
     * Function to call on success.
     */
    success?: AjaxSuccessCallbackFunction;
    /**
     * The HTTP method to use. For example GET or POST.
     */
    type?: ('get' | 'post' | 'update' | 'delete');
    /**
     * The URL to call.
     */
    url: string;
}
/**
 * Callback function for Ajax success.
 *
 * @callback Highcharts.AjaxSuccessCallbackFunction
 *
 * @param {string|Highcharts.JSONType} response
 * The response from the Ajax call.
 *
 * @param {XMLHttpRequest} xhr
 * The XHR object.
 */
export interface AjaxSuccessCallbackFunction {
    (response: (string | JSON.Type), xhr: XMLHttpRequest): void;
}
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
export declare function ajax(settings: AjaxSettingsObject): (false | undefined);
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
declare function getJSON(url: string, success: AjaxSuccessCallbackFunction): void;
interface HttpUtilities {
    ajax: typeof ajax;
    getJSON: typeof getJSON;
}
/**
 * Utility functions for Ajax.
 * @class
 * @name Highcharts.HttpUtilities
 */
declare const HttpUtilities: HttpUtilities;
export default HttpUtilities;
