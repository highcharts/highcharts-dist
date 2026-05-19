// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/offline-exporting
 * @requires highcharts
 * @requires highcharts/modules/exporting
 *
 * Client side exporting module
 *
 * (c) 2015-2026 Highsoft AS
 * Author: Torstein Hønsi / Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["AST"], root["_Highcharts"]["Chart"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/offline-exporting", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["AST"],amd1["Chart"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/offline-exporting"] = factory(root["_Highcharts"], root["_Highcharts"]["AST"], root["_Highcharts"]["Chart"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["AST"], root["Highcharts"]["Chart"]);
})(typeof window === 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__660__, __WEBPACK_EXTERNAL_MODULE__960__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 660:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__660__;

/***/ }),

/***/ 944:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ }),

/***/ 960:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__960__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ offline_exporting_src; }
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es5/es-modules/Shared/DownloadURL.js
/* *
 *
 *  (c) 2015-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Mixin for downloading content in the browser
 *
 * */

/* *
 *
 *  Imports
 *
 * */


var isSafari = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isSafari, win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win, doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win.document;
/* *
 *
 *  Constants
 *
 * */
var domurl = win.URL || win.webkitURL || win;
/* *
 *
 *  Functions
 *
 * */
/**
 * Convert base64 dataURL to Blob if supported, otherwise returns undefined.
 *
 * @internal
 * @function Highcharts.dataURLtoBlob
 *
 * @param {string} dataURL
 * URL to convert.
 *
 * @return {string | undefined}
 * Blob.
 */
function dataURLtoBlob(dataURL) {
    var parts = dataURL
            .replace(/filename=.*;/, '')
            .match(/data:([^;]*)(;base64)?,([A-Z+\d\/]+)/i);
    if (parts &&
        parts.length > 3 &&
        (win.atob) &&
        win.ArrayBuffer &&
        win.Uint8Array &&
        win.Blob &&
        (domurl.createObjectURL)) {
        // Try to convert data URL to Blob
        var binStr = win.atob(parts[3]),
            buf = new win.ArrayBuffer(binStr.length),
            binary = new win.Uint8Array(buf);
        for (var i = 0; i < binary.length; ++i) {
            binary[i] = binStr.charCodeAt(i);
        }
        return domurl
            .createObjectURL(new win.Blob([binary], { 'type': parts[1] }));
    }
}
/**
 * Download a data URL in the browser. Can also take a blob as first param.
 *
 * @internal
 * @function Highcharts.downloadURL
 *
 * @param {string | global.URL} dataURL
 * The dataURL/Blob to download.
 * @param {string} filename
 * The name of the resulting file (w/extension).
 */
function downloadURL(dataURL, filename) {
    var nav = win.navigator,
        a = doc.createElement('a');
    // IE specific blob implementation
    // Don't use for normal dataURLs
    if (typeof dataURL !== 'string' &&
        !(dataURL instanceof String) &&
        nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(dataURL, filename);
        return;
    }
    dataURL = '' + dataURL;
    if (nav.userAgent.length > 1000 /* RegexLimits.shortLimit */) {
        throw new Error('Input too long');
    }
    var // Some browsers have limitations for data URL lengths. Try to convert
        // to Blob or fall back. Edge always needs that blob.
        isOldEdgeBrowser = /Edge\/\d+/.test(nav.userAgent), 
        // Safari on iOS needs Blob in order to download PDF
        safariBlob = (isSafari &&
            typeof dataURL === 'string' &&
            dataURL.indexOf('data:application/pdf') === 0);
    if (safariBlob || isOldEdgeBrowser || dataURL.length > 2000000) {
        dataURL = dataURLtoBlob(dataURL) || '';
        if (!dataURL) {
            throw new Error('Failed to convert to blob');
        }
    }
    // Try HTML5 download attr if supported
    if (typeof a.download !== 'undefined') {
        a.href = dataURL;
        a.download = filename; // HTML5 download attribute
        doc.body.appendChild(a);
        a.click();
        doc.body.removeChild(a);
    }
    else {
        // No download attr, just opening data URI
        try {
            if (!win.open(dataURL, 'chart')) {
                throw new Error('Failed to open window');
            }
        }
        catch (_a) {
            // If window.open failed, try location.href
            win.location.href = dataURL;
        }
    }
}
/**
 * Asynchronously downloads a script from a provided location.
 *
 * @internal
 * @function Highcharts.getScript
 *
 * @param {string} scriptLocation
 * The location for the script to fetch.
 */
function getScript(scriptLocation) {
    return new Promise(function (resolve, reject) {
        var head = doc.getElementsByTagName('head')[0], script = doc.createElement('script');
        // Set type and location for the script
        script.type = 'text/javascript';
        script.src = scriptLocation;
        // Resolve in case of a successful script fetching
        script.onload = function () {
            resolve();
        };
        // Reject in case of fail
        script.onerror = function () {
            var msg = "Error loading script ".concat(scriptLocation);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(msg);
            reject(new Error(msg));
        };
        // Append the newly created script
        head.appendChild(script);
    });
}
/**
 * Get a blob object from content, if blob is supported.
 *
 * @internal
 * @function Highcharts.getBlobFromContent
 *
 * @param {string} content
 * The content to create the blob from.
 * @param {string} type
 * The type of the content.
 *
 * @return {string | undefined}
 * The blob object, or undefined if not supported.
 *
 * @requires modules/exporting
 * @requires modules/export-data
 */
function getBlobFromContent(content, type) {
    var nav = win.navigator,
        domurl = win.URL || win.webkitURL || win;
    try {
        // MS specific
        if ((nav.msSaveOrOpenBlob) && win.MSBlobBuilder) {
            var blob = new win.MSBlobBuilder();
            blob.append(content);
            return blob.getBlob('image/svg+xml');
        }
        return domurl.createObjectURL(new win.Blob(['\uFEFF' + content], // #7084
        { type: type }));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        // Ignore
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var DownloadURL = {
    dataURLtoBlob: dataURLtoBlob,
    downloadURL: downloadURL,
    getBlobFromContent: getBlobFromContent,
    getScript: getScript
};
/** @internal */
/* harmony default export */ var Shared_DownloadURL = (DownloadURL);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","AST"],"commonjs":["highcharts","AST"],"commonjs2":["highcharts","AST"],"root":["Highcharts","AST"]}
var highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_ = __webpack_require__(660);
var highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default = /*#__PURE__*/__webpack_require__.n(highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Chart"],"commonjs":["highcharts","Chart"],"commonjs2":["highcharts","Chart"],"root":["Highcharts","Chart"]}
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_ = __webpack_require__(960);
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default = /*#__PURE__*/__webpack_require__.n(highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_);
;// ./code/es5/es-modules/Extensions/OfflineExporting/OfflineExportingDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * @optionparent exporting
 * @internal
 */
var exporting = {};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var OfflineExportingDefaults = {
    exporting: exporting
};
/** @internal */
/* harmony default export */ var OfflineExporting_OfflineExportingDefaults = (OfflineExportingDefaults);

;// ./code/es5/es-modules/Shared/Utilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var Utilities_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, Utilities_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;
/**
 * Add an event listener.
 *
 * @function Highcharts.addEvent<T>
 *
 * @param  {Highcharts.Class<T>|T} el
 *         The element or object to add a listener to. It can be a
 *         {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
 *
 * @param  {string} type
 *         The event type.
 *
 * @param  {Highcharts.EventCallbackFunction<T>|Function} fn
 *         The function callback to execute when the event is fired.
 *
 * @param  {Highcharts.EventOptionsObject} [options]
 *         Options for adding the event.
 *
 * @sample highcharts/members/addevent
 *         Use a general `render` event to draw shapes on a chart
 *
 * @return {Function}
 *         A callback function to remove the added event.
 */
function addEvent(el, type, fn, options) {
    if (options === void 0) { options = {}; }
    // Add hcEvents to either the prototype (in case we're running addEvent on a
    // class) or the instance. If hasOwnProperty('hcEvents') is false, it is
    // inherited down the prototype chain, in which case we need to set the
    // property on this instance (which may itself be a prototype).
    var owner = typeof el === 'function' && el.prototype || el;
    if (!Object.hasOwnProperty.call(owner, 'hcEvents')) {
        owner.hcEvents = {};
    }
    var events = owner.hcEvents;
    // Allow click events added to points, otherwise they will be prevented by
    // the TouchPointer.pinch function after a pinch zoom operation (#7091).
    if ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).Point && // Without H a dependency loop occurs
        el instanceof (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).Point &&
        el.series &&
        el.series.chart) {
        el.series.chart.runTrackerClick = true;
    }
    // Handle DOM events
    // If the browser supports passive events, add it to improve performance
    // on touch events (#11353).
    var addEventListener = el.addEventListener;
    if (addEventListener) {
        addEventListener.call(el, type, fn, (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).supportsPassiveEvents ? {
            passive: options.passive === void 0 ?
                type.indexOf('touch') !== -1 : options.passive,
            capture: false
        } : false);
    }
    if (!events[type]) {
        events[type] = [];
    }
    var eventObject = {
            fn: fn,
            order: typeof options.order === 'number' ? options.order : Infinity
        };
    events[type].push(eventObject);
    // Order the calls
    events[type].sort(function (a, b) { return a.order - b.order; });
    // Return a function that can be called to remove this event.
    return function () {
        removeEvent(el, type, fn);
    };
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.min` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMin
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The lowest number.
 */
function arrayMin(data) {
    var i = data.length,
        min = data[0];
    while (i--) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.max` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMax
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The highest number.
 */
function arrayMax(data) {
    var i = data.length,
        max = data[0];
    while (i--) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
/**
 * Set or get an attribute or an object of attributes.
 *
 * To use as a setter, pass a key and a value, or let the second argument be a
 * collection of keys and values. When using a collection, passing a value of
 * `null` or `undefined` will remove the attribute.
 *
 * To use as a getter, pass only a string as the second argument.
 *
 * @function Highcharts.attr
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} elem
 *        The DOM element to receive the attribute(s).
 *
 * @param {string|Highcharts.HTMLAttributes|Highcharts.SVGAttributes} [keyOrAttribs]
 *        The property or an object of key-value pairs.
 *
 * @param {number|string} [value]
 *        The value if a single property is set.
 *
 * @return {string|null|undefined}
 *         When used as a getter, return the value.
 */
function attr(elem, keyOrAttribs, value) {
    var isGetter = isString(keyOrAttribs) && !defined(value);
    var ret;
    var attrSingle = function (value,
        key) {
            // Set the value
            if (defined(value)) {
                elem.setAttribute(key,
        value);
            // Get the value
        }
        else if (isGetter) {
            ret = elem.getAttribute(key);
            // IE7 and below cannot get class through getAttribute (#7850)
            if (!ret && key === 'class') {
                ret = elem.getAttribute(key + 'Name');
            }
            // Remove the value
        }
        else {
            elem.removeAttribute(key);
        }
    };
    // If keyOrAttribs is a string
    if (isString(keyOrAttribs)) {
        attrSingle(value, keyOrAttribs);
        // Else if keyOrAttribs is defined, it is a hash of key/value pairs
    }
    else {
        objectEach(keyOrAttribs, attrSingle);
    }
    return ret;
}
/**
 * Constrain a value to within a lower and upper threshold.
 *
 * @internal
 * @param {number} value The initial value
 * @param {number} min The lower threshold
 * @param {number} max The upper threshold
 * @return {number} Returns a number value within min and max.
 */
function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
}
/**
 * Fix JS round off float errors.
 *
 * @function Highcharts.correctFloat
 *
 * @param {number} num
 *        A float number to fix.
 *
 * @param {number} [prec=14]
 *        The precision.
 *
 * @return {number}
 *         The corrected float number.
 */
function correctFloat(num, prec) {
    // When the number is higher than 1e14 use the number (#16275)
    return num > 1e14 ? num : parseFloat(num.toPrecision(prec || 14));
}
/**
 * Utility function to create an HTML element with attributes and styles.
 *
 * @function Highcharts.createElement
 *
 * @param {string} tag
 *        The HTML tag.
 *
 * @param {Highcharts.HTMLAttributes} [attribs]
 *        Attributes as an object of key-value pairs.
 *
 * @param {Highcharts.CSSObject} [styles]
 *        Styles as an object of key-value pairs.
 *
 * @param {Highcharts.HTMLDOMElement} [parent]
 *        The parent HTML object.
 *
 * @param {boolean} [nopad=false]
 *        If true, remove all padding, border and margin.
 *
 * @return {Highcharts.HTMLDOMElement}
 *         The created DOM element.
 */
function createElement(tag, attribs, styles, parent, nopad) {
    var el = Utilities_doc.createElement(tag);
    if (attribs) {
        extend(el, attribs);
    }
    if (nopad) {
        css(el, { padding: '0', border: 'none', margin: '0' });
    }
    if (styles) {
        css(el, styles);
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}
/**
 * Utility for crisping a line position to the nearest full pixel depending on
 * the line width.
 *
 * @internal
 * @param {number} value       The raw pixel position
 * @param {number} lineWidth   The line width
 * @param {boolean} [inverted] Whether the containing group is inverted.
 *                             Crisping round numbers on the y-scale need to go
 *                             to the other side because the coordinate system
 *                             is flipped (scaleY is -1)
 * @return {number}            The pixel position to use for a crisp display
 */
function crisp(value, lineWidth, inverted) {
    if (lineWidth === void 0) { lineWidth = 0; }
    var mod = lineWidth % 2 / 2,
        inverter = inverted ? -1 : 1;
    return (Math.round(value * inverter - mod) + mod) * inverter;
}
/**
 * Set CSS on a given element.
 *
 * @function Highcharts.css
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} el
 *        An HTML DOM element.
 *
 * @param {Highcharts.CSSObject} styles
 *        Style object with camel case property names.
 *
 * @return {void}
 */
function css(el, styles) {
    extend(el.style, styles);
}
/**
 * Check if an object is null or undefined.
 *
 * @function Highcharts.defined
 *
 * @param {*} obj
 *        The object to check.
 *
 * @return {boolean}
 *         False if the object is null or undefined, otherwise true.
 */
function defined(obj) {
    return typeof obj !== 'undefined' && obj !== null;
}
/**
 * Utility method that destroys any SVGElement instances that are properties on
 * the given object. It loops all properties and invokes destroy if there is a
 * destroy method. The property is then delete.
 *
 * @function Highcharts.destroyObjectProperties
 *
 * @param {*} obj
 *        The object to destroy properties on.
 *
 * @param {*} [except]
 *        Exception, do not destroy this property, only delete it.
 */
function destroyObjectProperties(obj, except, destructablesOnly) {
    objectEach(obj, function (val, n) {
        // If the object is non-null and destroy is defined
        if (val !== except && (val === null || val === void 0 ? void 0 : val.destroy)) {
            // Invoke the destroy
            val.destroy();
        }
        // Delete the property from the object
        if ((val === null || val === void 0 ? void 0 : val.destroy) || !destructablesOnly) {
            delete obj[n];
        }
    });
}
/**
 * Discard a HTML element
 *
 * @function Highcharts.discardElement
 *
 * @param {Highcharts.HTMLDOMElement} element
 *        The HTML node to discard.
 */
function discardElement(element) {
    var _a;
    (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
}
// eslint-disable-next-line valid-jsdoc
/**
 * Return the deep difference between two objects. It can either return the new
 * properties, or optionally return the old values of new properties.
 * @internal
 */
function diffObjects(newer, older, keepOlder, collectionsWithUpdate) {
    var ret = {};
    /**
     * Recurse over a set of options and its current values, and store the
     * current values in the ret object.
     */
    function diff(newer, older, ret, depth) {
        var keeper = keepOlder ? older : newer;
        objectEach(newer, function (newerVal, key) {
            if (!depth &&
                collectionsWithUpdate &&
                collectionsWithUpdate.indexOf(key) > -1 &&
                older[key]) {
                newerVal = splat(newerVal);
                ret[key] = [];
                // Iterate over collections like series, xAxis or yAxis and map
                // the items by index.
                for (var i = 0; i < Math.max(newerVal.length, older[key].length); i++) {
                    // Item exists in current data (#6347)
                    if (older[key][i]) {
                        // If the item is missing from the new data, we need to
                        // save the whole config structure. Like when
                        // responsively updating from a dual axis layout to a
                        // single axis and back (#13544).
                        if (newerVal[i] === void 0) {
                            ret[key][i] = older[key][i];
                            // Otherwise, proceed
                        }
                        else {
                            ret[key][i] = {};
                            diff(newerVal[i], older[key][i], ret[key][i], depth + 1);
                        }
                    }
                }
            }
            else if (isObject(newerVal, true) &&
                !newerVal.nodeType // #10044
            ) {
                ret[key] = isArray(newerVal) ? [] : {};
                diff(newerVal, older[key] || {}, ret[key], depth + 1);
                // Delete empty nested objects
                if (Object.keys(ret[key]).length === 0 &&
                    // Except colorAxis which is a special case where the empty
                    // object means it is enabled. Which is unfortunate and we
                    // should try to find a better way.
                    !(key === 'colorAxis' && depth === 0)) {
                    delete ret[key];
                }
            }
            else if (newer[key] !== older[key] ||
                // If the newer key is explicitly undefined, keep it (#10525)
                (key in newer && !(key in older))) {
                if (key !== '__proto__' && key !== 'constructor') {
                    ret[key] = keeper[key];
                }
            }
        });
    }
    diff(newer, older, ret, 0);
    return ret;
}
/**
 * Remove the last occurrence of an item from an array.
 *
 * @function Highcharts.erase
 *
 * @param {Array<*>} arr
 *        The array.
 *
 * @param {*} item
 *        The item to remove.
 *
 * @return {void}
 */
function erase(arr, item) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
}
/**
 * Utility function to extend an object with the members of another.
 *
 * @function Highcharts.extend<T>
 *
 * @param {T|undefined} a
 *        The object to be extended.
 *
 * @param {Partial<T>} b
 *        The object to add to the first one.
 *
 * @return {T}
 *         Object a, the original object.
 */
function extend(a, b) {
    var n;
    if (!a) {
        a = {};
    }
    for (n in b) { // eslint-disable-line guard-for-in
        a[n] = b[n];
    }
    return a;
}
// eslint-disable-next-line valid-jsdoc
/**
 * Extend a prototyped class by new members.
 *
 * @deprecated
 * @function Highcharts.extendClass<T>
 *
 * @param {Highcharts.Class<T>} parent
 *        The parent prototype to inherit.
 *
 * @param {Highcharts.Dictionary<*>} members
 *        A collection of prototype members to add or override compared to the
 *        parent prototype.
 *
 * @return {Highcharts.Class<T>}
 *         A new prototype.
 */
function extendClass(parent, members) {
    var obj = (function () { });
    obj.prototype = new parent(); // eslint-disable-line new-cap
    extend(obj.prototype, members);
    return obj;
}
/**
 * Fire an event that was registered with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.fireEvent<T>
 *
 * @param {T} el
 *        The object to fire the event on. It can be a {@link HTMLDOMElement},
 *        an {@link SVGElement} or any other object.
 *
 * @param {string} type
 *        The type of event.
 *
 * @param {Highcharts.Dictionary<*>|Event} [eventArguments]
 *        Custom event arguments that are passed on as an argument to the event
 *        handler.
 *
 * @param {Highcharts.EventCallbackFunction<T>|Function} [defaultFunction]
 *        The default function to execute if the other listeners haven't
 *        returned false.
 *
 * @return {void}
 */
function fireEvent(el, type, eventArguments, defaultFunction) {
    eventArguments = eventArguments || {};
    if ((Utilities_doc === null || Utilities_doc === void 0 ? void 0 : Utilities_doc.createEvent) &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== H))) {
        var e = Utilities_doc.createEvent('Events');
        e.initEvent(type, true, true);
        eventArguments = extend(e, eventArguments);
        if (el.dispatchEvent) {
            el.dispatchEvent(eventArguments);
        }
        else {
            el.fireEvent(type, eventArguments);
        }
    }
    else if (el.hcEvents) {
        if (!eventArguments.target) {
            // We're running a custom event
            extend(eventArguments, {
                // Attach a simple preventDefault function to skip
                // default handler if called. The built-in
                // defaultPrevented property is not overwritable (#5112)
                preventDefault: function () {
                    eventArguments.defaultPrevented = true;
                },
                // Setting target to native events fails with clicking
                // the zoom-out button in Chrome.
                target: el,
                // If the type is not set, we're running a custom event
                // (#2297). If it is set, we're running a browser event.
                type: type
            });
        }
        var events = [];
        var object = el;
        var multilevel = false;
        // Recurse up the inheritance chain and collect hcEvents set as own
        // objects on the prototypes.
        while (object.hcEvents) {
            if (Object.hasOwnProperty.call(object, 'hcEvents') &&
                object.hcEvents[type]) {
                if (events.length) {
                    multilevel = true;
                }
                events.unshift.apply(events, object.hcEvents[type]);
            }
            object = Object.getPrototypeOf(object);
        }
        // For performance reasons, only sort the event handlers in case we are
        // dealing with multiple levels in the prototype chain. Otherwise, the
        // events are already sorted in the addEvent function.
        if (multilevel) {
            // Order the calls
            events.sort(function (a, b) { return a.order - b.order; });
        }
        // Call the collected event handlers
        events.forEach(function (obj) {
            // If the event handler returns false, prevent the default handler
            // from executing
            if (obj.fn.call(el, eventArguments, el) === false) {
                eventArguments.preventDefault();
            }
        });
    }
    // Run the default if not prevented
    if (defaultFunction && !eventArguments.defaultPrevented) {
        defaultFunction.call(el, eventArguments);
    }
}
/**
 * Convenience function to get the align factor, used several places for
 * computing positions
 * @internal
 */
var getAlignFactor = function (align) {
    if (align === void 0) { align = ''; }
    return ({
        center: 0.5,
        right: 1,
        middle: 0.5,
        bottom: 1
    }[align] || 0);
};
/**
 * Find the closest distance between two values of a two-dimensional array
 * @internal
 * @function Highcharts.getClosestDistance
 *
 * @param {Array<Array<number>>} arrays
 *          An array of arrays of numbers
 *
 * @return {number | undefined}
 *          The closest distance between values
 */
function getClosestDistance(arrays, onError) {
    var allowNegative = !onError;
    var closest,
        loopLength,
        distance,
        i;
    arrays.forEach(function (xData) {
        if (xData.length > 1) {
            loopLength = xData.length - 1;
            for (i = loopLength; i > 0; i--) {
                distance = xData[i] - xData[i - 1];
                if (distance < 0 && !allowNegative) {
                    onError === null || onError === void 0 ? void 0 : onError();
                    // Only one call
                    onError = void 0;
                }
                else if (distance && (typeof closest === 'undefined' || distance < closest)) {
                    closest = distance;
                }
            }
        }
    });
    return closest;
}
/**
 * Get the magnitude of a number.
 *
 * @function Highcharts.getMagnitude
 *
 * @param {number} num
 *        The number.
 *
 * @return {number}
 *         The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
 */
function getMagnitude(num) {
    return Math.pow(10, Math.floor(Math.log(num) / Math.LN10));
}
/**
 * Returns the value of a property path on a given object.
 *
 * @internal
 * @function getNestedProperty
 *
 * @param {string} path
 * Path to the property, for example `custom.myValue`.
 *
 * @param {unknown} parent
 * Instance containing the property on the specific path.
 *
 * @return {unknown}
 * The unknown property value.
 */
function getNestedProperty(path, parent) {
    var pathElements = path.split('.');
    while (pathElements.length && defined(parent)) {
        var pathElement = pathElements.shift();
        // Filter on the key
        if (typeof pathElement === 'undefined' ||
            pathElement === '__proto__') {
            return; // Undefined
        }
        if (pathElement === 'this') {
            var thisProp = void 0;
            if (isObject(parent)) {
                thisProp = parent['@this'];
            }
            return thisProp !== null && thisProp !== void 0 ? thisProp : parent;
        }
        var child = parent[pathElement.replace(/[\\'"]/g, '')];
        // Filter on the child
        if (!defined(child) ||
            typeof child === 'function' ||
            typeof child.nodeType === 'number' ||
            child === Utilities_win) {
            return; // Undefined
        }
        // Else, proceed
        parent = child;
    }
    return parent;
}
/**
 * Get the computed CSS value for given element and property, only for numerical
 * properties. For width and height, the dimension of the inner box (excluding
 * padding) is returned. Used for fitting the chart within the container.
 *
 * @function Highcharts.getStyle
 *
 * @param {Highcharts.HTMLDOMElement} el
 * An HTML element.
 *
 * @param {string} prop
 * The property name.
 *
 * @param {boolean} [toInt=true]
 * Parse to integer.
 *
 * @return {number|string|undefined}
 * The style value.
 */
function getStyle(el, prop, toInt) {
    var _a;
    var style;
    // For width and height, return the actual inner pixel size (#4913)
    if (prop === 'width') {
        var offsetWidth = Math.min(el.offsetWidth,
            el.scrollWidth);
        // In flex boxes, we need to use getBoundingClientRect and floor it,
        // because scrollWidth doesn't support subpixel precision (#6427) ...
        var boundingClientRectWidth = (_a = el.getBoundingClientRect) === null || _a === void 0 ? void 0 : _a.call(el).width;
        // ...unless if the containing div or its parents are transform-scaled
        // down, in which case the boundingClientRect can't be used as it is
        // also scaled down (#9871, #10498).
        if (boundingClientRectWidth < offsetWidth &&
            boundingClientRectWidth >= offsetWidth - 1) {
            offsetWidth = Math.floor(boundingClientRectWidth);
        }
        return Math.max(0, // #8377
        (offsetWidth -
            (getStyle(el, 'padding-left', true) || 0) -
            (getStyle(el, 'padding-right', true) || 0)));
    }
    if (prop === 'height') {
        return Math.max(0, // #8377
        (Math.min(el.offsetHeight, el.scrollHeight) -
            (getStyle(el, 'padding-top', true) || 0) -
            (getStyle(el, 'padding-bottom', true) || 0)));
    }
    // Otherwise, get the computed style
    var css = Utilities_win.getComputedStyle(el,
        void 0); // eslint-disable-line no-undefined
        if (css) {
            style = css.getPropertyValue(prop);
        if (pick(toInt, prop !== 'opacity')) {
            style = pInt(style);
        }
    }
    return style;
}
/**
 * Return the value of the first element in the array that satisfies the
 * provided testing function.
 *
 * @function Highcharts.find<T>
 *
 * @param {Array<T>} arr
 *        The array to test.
 *
 * @param {Function} callback
 *        The callback function. The function receives the item as the first
 *        argument. Return `true` if this item satisfies the condition.
 *
 * @return {T|undefined}
 *         The value of the element.
 */
var find = Array.prototype.find ?
    function (arr, callback) {
        return arr.find(callback);
    } :
    // Legacy implementation. PhantomJS, IE <= 11 etc. #7223.
    function (arr, callback) {
        var i;
        var length = arr.length;
        for (i = 0; i < length; i++) {
            if (callback(arr[i], i)) { // eslint-disable-line node/callback-return
                return arr[i];
            }
        }
    };
/**
 * Internal clear timeout. The function checks that the `id` was not removed
 * (e.g. by `chart.destroy()`). For the details see
 * [issue #7901](https://github.com/highcharts/highcharts/issues/7901).
 *
 * @internal
 *
 * @function Highcharts.clearTimeout
 *
 * @param {number|undefined} id
 * Id of a timeout.
 */
function internalClearTimeout(id) {
    if (defined(id)) {
        clearTimeout(id);
    }
}
/**
 * Utility function to check if an Object is a HTML Element.
 *
 * @function Highcharts.isDOMElement
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a HTML Element.
 */
function isDOMElement(obj) {
    return isObject(obj) && typeof obj.nodeType === 'number';
}
/**
 * Utility function to check if an Object is a class.
 *
 * @function Highcharts.isClass
 *
 * @param {object|undefined} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a class.
 */
function isClass(obj) {
    var c = obj === null || obj === void 0 ? void 0 : obj.constructor;
    return !!(isObject(obj, true) &&
        !isDOMElement(obj) &&
        ((c === null || c === void 0 ? void 0 : c.name) && c.name !== 'Object'));
}
/**
 * Utility function to check if an item is a number and it is finite (not NaN,
 * Infinity or -Infinity).
 *
 * @function Highcharts.isNumber
 *
 * @param {*} n
 *        The item to check.
 *
 * @return {boolean}
 *         True if the item is a finite number
 */
function isNumber(n) {
    return typeof n === 'number' && !isNaN(n) && n < Infinity && n > -Infinity;
}
/**
 * Utility function to check for string type.
 *
 * @function Highcharts.isString
 *
 * @param {*} s
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a string.
 */
function isString(s) {
    return typeof s === 'string';
}
/**
 * Utility function to check if an item is an array.
 *
 * @function Highcharts.isArray
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is an array.
 */
function isArray(obj) {
    var str = Object.prototype.toString.call(obj);
    return str === '[object Array]' || str === '[object Array Iterator]';
}
/**
 * Utility function to check if object is a function.
 *
 * @function Highcharts.isFunction
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a function.
 */
function isFunction(obj) {
    return typeof obj === 'function';
}
/**
 * Utility function to check if an item is of type object.
 *
 * @function Highcharts.isObject
 *
 * @param {*} obj
 *        The item to check.
 *
 * @param {boolean} [strict=false]
 *        Also checks that the object is not an array.
 *
 * @return {boolean}
 *         True if the argument is an object.
 */
function isObject(obj, strict) {
    return (!!obj &&
        typeof obj === 'object' &&
        (!strict || !isArray(obj))); // eslint-disable-line @typescript-eslint/no-explicit-any
}
/**
 * Utility function to deep merge two or more objects and return a third object.
 * If the first argument is true, the contents of the second object is copied
 * into the first object. The merge function can also be used with a single
 * object argument to create a deep copy of an object.
 *
 * @function Highcharts.merge<T>
 *
 * @param {true | T} extendOrSource
 *        Whether to extend the left-side object,
 *        or the first object to merge as a deep copy.
 *
 * @param {...Array<object|undefined>} [sources]
 *        Object(s) to merge into the previous one.
 *
 * @return {T}
 *         The merged object. If the first argument is true, the return is the
 *         same as the second argument.
 */
function merge(extendOrSource) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var i,
        args = __spreadArray([extendOrSource],
        sources,
        true),
        ret = {};
    var doCopy = function (copy,
        original) {
            // An object is replacing a primitive
            if (typeof copy !== 'object') {
                copy = {};
        }
        objectEach(original, function (value, key) {
            // Prototype pollution (#14883)
            if (key === '__proto__' || key === 'constructor') {
                return;
            }
            // Copy the contents of objects, but not arrays or DOM nodes
            if (isObject(value, true) &&
                !isClass(value) &&
                !isDOMElement(value)) {
                copy[key] = doCopy(copy[key] || {}, value);
                // Primitives and arrays are copied over directly
            }
            else {
                copy[key] = original[key];
            }
        });
        return copy;
    };
    // If first argument is true, copy into the existing object. Used in
    // setOptions.
    if (extendOrSource === true) {
        ret = args[1];
        args = Array.prototype.slice.call(args, 2);
    }
    // For each argument, extend the return
    var len = args.length;
    for (i = 0; i < len; i++) {
        ret = doCopy(ret, args[i]);
    }
    return ret;
}
/**
 * Take an interval and normalize it to multiples of round numbers.
 *
 * @deprecated
 * @function Highcharts.normalizeTickInterval
 *
 * @param {number} interval
 *        The raw, un-rounded interval.
 *
 * @param {Array<*>} [multiples]
 *        Allowed multiples.
 *
 * @param {number} [magnitude]
 *        The magnitude of the number.
 *
 * @param {boolean} [allowDecimals]
 *        Whether to allow decimals.
 *
 * @param {boolean} [hasTickAmount]
 *        If it has tickAmount, avoid landing on tick intervals lower than
 *        original.
 *
 * @return {number}
 *         The normalized interval.
 *
 * @todo
 * Move this function to the Axis prototype. It is here only for historical
 * reasons.
 */
function normalizeTickInterval(interval, multiples, magnitude, allowDecimals, hasTickAmount) {
    var i,
        retInterval = interval;
    // Round to a tenfold of 1, 2, 2.5 or 5
    magnitude = pick(magnitude, getMagnitude(interval));
    var normalized = interval / magnitude;
    // Multiples for a linear scale
    if (!multiples) {
        multiples = hasTickAmount ?
            // Finer grained ticks when the tick amount is hard set, including
            // when alignTicks is true on multiple axes (#4580).
            [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] :
            // Else, let ticks fall on rounder numbers
            [1, 2, 2.5, 5, 10];
        // The allowDecimals option
        if (allowDecimals === false) {
            if (magnitude === 1) {
                multiples = multiples.filter(function (num) {
                    return num % 1 === 0;
                });
            }
            else if (magnitude <= 0.1) {
                multiples = [1 / magnitude];
            }
        }
    }
    // Normalize the interval to the nearest multiple
    for (i = 0; i < multiples.length; i++) {
        retInterval = multiples[i];
        // Only allow tick amounts smaller than natural
        if ((hasTickAmount &&
            retInterval * magnitude >= interval) ||
            (!hasTickAmount &&
                (normalized <=
                    (multiples[i] +
                        (multiples[i + 1] || multiples[i])) / 2))) {
            break;
        }
    }
    // Multiply back to the correct magnitude. Correct floats to appropriate
    // precision (#6085).
    retInterval = correctFloat(retInterval * magnitude, -Math.round(Math.log(0.001) / Math.LN10));
    return retInterval;
}
/**
 * Iterate over object key pairs in an object.
 *
 * @function Highcharts.objectEach<T>
 *
 * @param {*} obj
 *        The object to iterate over.
 *
 * @param {Highcharts.ObjectEachCallbackFunction<T>} fn
 *        The iterator callback. It passes three arguments:
 *        * value - The property value.
 *        * key - The property key.
 *        * obj - The object that objectEach is being applied to.
 *
 * @param {T} [ctx]
 *        The context.
 */
function objectEach(obj, fn, ctx) {
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            fn.call(ctx || obj[key], obj[key], key, obj);
        }
    }
}
/**
 * Get the element's offset position, corrected for `overflow: auto`.
 *
 * @function Highcharts.offset
 *
 * @param {global.Element} el
 *        The DOM element.
 *
 * @return {Highcharts.OffsetObject}
 *         An object containing `left` and `top` properties for the position in
 *         the page.
 */
function offset(el) {
    var docElem = Utilities_doc.documentElement,
        box = (el.parentElement || el.parentNode) ?
            el.getBoundingClientRect() :
            { top: 0,
        left: 0,
        width: 0,
        height: 0 };
    return {
        top: box.top + (Utilities_win.pageYOffset || docElem.scrollTop) -
            (docElem.clientTop || 0),
        left: box.left + (Utilities_win.pageXOffset || docElem.scrollLeft) -
            (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
    };
}
/**
 * Left-pad a string to a given length by adding a character repetitively.
 *
 * @function Highcharts.pad
 *
 * @param {number} number
 *        The input string or number.
 *
 * @param {number} [length]
 *        The desired string length.
 *
 * @param {string} [padder=0]
 *        The character to pad with.
 *
 * @return {string}
 *         The padded string.
 */
function pad(number, length, padder) {
    return new Array((length || 2) +
        1 -
        String(number)
            .replace('-', '')
            .length).join(padder || '0') + number;
}
/* eslint-disable jsdoc/check-param-names */
/**
 * Return the first value that is not null or undefined.
 *
 * @function Highcharts.pick<T>
 *
 * @param {...Array<T|null|undefined>} items
 *        Variable number of arguments to inspect.
 *
 * @return {T}
 *         The value of the first argument that is not null or undefined.
 */
function pick() {
    var args = arguments;
    var length = args.length;
    for (var i = 0; i < length; i++) {
        var arg = args[i];
        if (typeof arg !== 'undefined' && arg !== null) {
            return arg;
        }
    }
}
/* eslint-enable jsdoc/check-param-names */
/**
 * Shortcut for parseInt
 *
 * @internal
 * @function Highcharts.pInt
 *
 * @param {*} s
 *        any
 *
 * @param {number} [mag]
 *        Magnitude
 *
 * @return {number}
 *         number
 */
function pInt(s, mag) {
    return parseInt(s, mag || 10);
}
/**
 * Adds an item to an array, if it is not present in the array.
 *
 * @internal
 *
 * @function Highcharts.pushUnique
 *
 * @param {Array<unknown>} array
 * The array to add the item to.
 *
 * @param {unknown} item
 * The item to add.
 *
 * @return {boolean}
 * Returns true, if the item was not present and has been added.
 */
function pushUnique(array, item) {
    return array.indexOf(item) < 0 && !!array.push(item);
}
/**
 * Return a length based on either the integer value, or a percentage of a base.
 *
 * @function Highcharts.relativeLength
 *
 * @param {Highcharts.RelativeSize} value
 *        A percentage string or a number.
 *
 * @param {number} base
 *        The full length that represents 100%.
 *
 * @param {number} [offset=0]
 *        A pixel offset to apply for percentage values. Used internally in
 *        axis positioning.
 *
 * @return {number}
 *         The computed length.
 */
function relativeLength(value, base, offset) {
    return (/%$/).test(value) ?
        (base * parseFloat(value) / 100) + (offset || 0) :
        parseFloat(value);
}
/**
 * Replaces text in a string with a given replacement in a loop to catch nested
 * matches after previous replacements.
 *
 * @internal
 *
 * @function Highcharts.replaceNested
 *
 * @param {string} text
 * Text to search and modify.
 *
 * @param {...Array<(RegExp|string)>} replacements
 * One or multiple tuples with search pattern (`[0]: (string|RegExp)`) and
 * replacement (`[1]: string`) for matching text.
 *
 * @return {string}
 * Text with replacements.
 */
function replaceNested(text) {
    var replacements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        replacements[_i - 1] = arguments[_i];
    }
    var previous,
        replacement;
    do {
        previous = text;
        for (var _a = 0, replacements_1 = replacements; _a < replacements_1.length; _a++) {
            replacement = replacements_1[_a];
            text = text.replace(replacement[0], replacement[1]);
        }
    } while (text !== previous);
    return text;
}
/**
 * Remove an event that was added with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.removeEvent<T>
 *
 * @param {Highcharts.Class<T>|T} el
 *        The element to remove events on.
 *
 * @param {string} [type]
 *        The type of events to remove. If undefined, all events are removed
 *        from the element.
 *
 * @param {Highcharts.EventCallbackFunction<T>} [fn]
 *        The specific callback to remove. If undefined, all events that match
 *        the element and optionally the type are removed.
 *
 * @return {void}
 */
function removeEvent(el, type, fn) {
    /** @internal */
    function removeOneEvent(type, fn) {
        var removeEventListener = el.removeEventListener;
        if (removeEventListener) {
            removeEventListener.call(el, type, fn, false);
        }
    }
    /** @internal */
    function removeAllEvents(eventCollection) {
        var types,
            len;
        if (!el.nodeName) {
            return; // Break on non-DOM events
        }
        if (type) {
            types = {};
            types[type] = true;
        }
        else {
            types = eventCollection;
        }
        objectEach(types, function (_val, n) {
            if (eventCollection[n]) {
                len = eventCollection[n].length;
                while (len--) {
                    removeOneEvent(n, eventCollection[n][len].fn);
                }
            }
        });
    }
    var owner = typeof el === 'function' && el.prototype || el;
    if (Object.hasOwnProperty.call(owner, 'hcEvents')) {
        var events = owner.hcEvents;
        if (type) {
            var typeEvents = (events[type] || []);
            if (fn) {
                events[type] = typeEvents.filter(function (obj) {
                    return fn !== obj.fn;
                });
                removeOneEvent(type, fn);
            }
            else {
                removeAllEvents(events);
                events[type] = [];
            }
        }
        else {
            removeAllEvents(events);
            delete owner.hcEvents;
        }
    }
}
/**
 * Check if an element is an array, and if not, make it into an array.
 *
 * @function Highcharts.splat
 *
 * @param {*} obj
 *        The object to splat.
 *
 * @return {Array}
 *         The produced or original array.
 */
function splat(obj) {
    return isArray(obj) ? obj : [obj];
}
/**
 * Sort an object array and keep the order of equal items. The ECMAScript
 * standard does not specify the behavior when items are equal.
 *
 * @function Highcharts.stableSort
 *
 * @param {Array<*>} arr
 *        The array to sort.
 *
 * @param {Function} sortFunction
 *        The function to sort it with, like with regular Array.prototype.sort.
 */
function stableSort(arr, sortFunction) {
    // @todo It seems like Chrome since v70 sorts in a stable way internally,
    // plus all other browsers do it, so over time we may be able to remove this
    // function
    var length = arr.length;
    var sortValue,
        i;
    // Add index to each item
    for (i = 0; i < length; i++) {
        arr[i].safeI = i; // Stable sort index
    }
    arr.sort(function (a, b) {
        sortValue = sortFunction(a, b);
        return sortValue === 0 ? a.safeI - b.safeI : sortValue;
    });
    // Remove index from items
    for (i = 0; i < length; i++) {
        delete arr[i].safeI; // Stable sort index
    }
}
/**
 * Set a timeout if the delay is given, otherwise perform the function
 * synchronously.
 *
 * @function Highcharts.syncTimeout
 *
 * @param {Function} fn
 *        The function callback.
 *
 * @param {number} delay
 *        Delay in milliseconds.
 *
 * @param {*} [context]
 *        An optional context to send to the function callback.
 *
 * @return {number}
 *         An identifier for the timeout that can later be cleared with
 *         Highcharts.clearTimeout. Returns -1 if there is no timeout.
 */
function syncTimeout(fn, delay, context) {
    if (delay > 0) {
        return setTimeout(fn, delay, context);
    }
    fn.call(0, context);
    return -1;
}
/**
 * @internal
 */
function ucfirst(s) {
    return ((isString(s) ?
        s.substring(0, 1).toUpperCase() + s.substring(1) :
        String(s)));
}
/**
 * Wrap a method with extended functionality, preserving the original function.
 *
 * @function Highcharts.wrap
 *
 * @param {*} obj
 *        The context object that the method belongs to. In real cases, this is
 *        often a prototype.
 *
 * @param {string} method
 *        The name of the method to extend.
 *
 * @param {Highcharts.WrapProceedFunction} func
 *        A wrapper function callback. This function is called with the same
 *        arguments as the original function, except that the original function
 *        is unshifted and passed as the first argument.
 */
function wrap(obj, method, func) {
    var proceed = obj[method];
    obj[method] = function () {
        var outerArgs = arguments,
            scope = this;
        return func.apply(this, [
            function () {
                return proceed.apply(scope, arguments.length ? arguments : outerArgs);
            }
        ].concat([].slice.call(arguments)));
    };
}

;// ./code/es5/es-modules/Extensions/OfflineExporting/OfflineExporting.js
/* *
 *
 *  Client side exporting module
 *
 *  (c) 2015-2026 Highsoft AS
 *  Author: Torstein Hønsi / Øystein Moseng
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0,
        sent: function() { if (t[0] & 1) throw t[1]; return t[1]; },
        trys: [],
        ops: [] },
        f,
        y,
        t,
        g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
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



var getOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).getOptions, setOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).setOptions;


var composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed, OfflineExporting_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, OfflineExporting_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;



/* *
 *
 *  Composition
 *
 * */
var OfflineExporting;
(function (OfflineExporting) {
    /* *
     *
     *  Constants
     *
     * */
    var invalidLibURLErrorPrefix = 'Invalid exporting.libURL:';
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Check if the PDF export dependencies are already loaded on window.
     *
     * @private
     */
    function hasPdfDependencies() {
        var _a;
        return !!(OfflineExporting_win &&
            ((_a = OfflineExporting_win.jspdf) === null || _a === void 0 ? void 0 : _a.jsPDF) &&
            OfflineExporting_win.svg2pdf);
    }
    /**
     * Validate and normalize an opt-in libURL.
     *
     * @private
     */
    function normalizeOptInLibURL(optInLibURL) {
        var _a;
        if (!optInLibURL) {
            return void 0;
        }
        var normalizedLibURL = optInLibURL.slice(-1) !== '/' ?
                optInLibURL + '/' :
                optInLibURL;
        var isValidLibURL;
        if ((_a = OfflineExporting_win.URL) === null || _a === void 0 ? void 0 : _a.canParse) {
            isValidLibURL = OfflineExporting_win.URL.canParse(normalizedLibURL, OfflineExporting_doc.baseURI);
        }
        else {
            try {
                // The baseURI allows both absolute and relative paths.
                var parsedURL = new OfflineExporting_win.URL(normalizedLibURL,
                    OfflineExporting_doc.baseURI);
                isValidLibURL = !!parsedURL.href;
            }
            catch (_b) {
                isValidLibURL = false;
            }
        }
        if (!isValidLibURL) {
            throw new Error("".concat(invalidLibURLErrorPrefix, " \"").concat(optInLibURL, "\". ") +
                'Provide a valid URL or path to the jsPDF and svg2pdf ' +
                'scripts.');
        }
        return normalizedLibURL;
    }
    /**
     * Composition function.
     *
     * @internal
     * @function compose
     *
     * @param {ExportingClass} ExportingClass
     * Exporting class.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function compose(ExportingClass) {
        var _a,
            _b,
            _c;
        // Add the downloadSVG event to the Exporting class for local PDF export
        addEvent(ExportingClass, 'downloadSVG', function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var svg,
                    exportingOptions,
                    exporting,
                    preventDefault,
                    chart,
                    _a,
                    type,
                    filename,
                    scale,
                    optInLibURL,
                    normalizedLibURL,
                    caughtError_1,
                    exportError;
                var _b,
                    _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            svg = e.svg, exportingOptions = e.exportingOptions, exporting = e.exporting, preventDefault = e.preventDefault;
                            chart = exporting === null || exporting === void 0 ? void 0 : exporting.chart;
                            if (!((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.type) === 'application/pdf')) return [3 /*break*/, 10];
                            // Prevent the default export behavior
                            preventDefault === null || preventDefault === void 0 ? void 0 : preventDefault();
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 8, , 10]);
                            _a = highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default().Exporting.prepareImageOptions(exportingOptions), type = _a.type, filename = _a.filename, scale = _a.scale;
                            optInLibURL = exportingOptions.libURL ||
                                ((_b = chart === null || chart === void 0 ? void 0 : chart.options.exporting) === null || _b === void 0 ? void 0 : _b.libURL);
                            normalizedLibURL = normalizeOptInLibURL(optInLibURL);
                            if (!(type === 'application/pdf')) return [3 /*break*/, 7];
                            if (!!hasPdfDependencies()) return [3 /*break*/, 5];
                            if (!normalizedLibURL) {
                                throw new Error('PDF export requires jsPDF and svg2pdf.');
                            }
                            if (!!((_c = OfflineExporting_win.jspdf) === null || _c === void 0 ? void 0 : _c.jsPDF)) return [3 /*break*/, 3];
                            return [4 /*yield*/, getScript("" + normalizedLibURL + "jspdf.js")];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            if (!!OfflineExporting_win.svg2pdf) return [3 /*break*/, 5];
                            return [4 /*yield*/, getScript("" + normalizedLibURL + "svg2pdf.js")];
                        case 4:
                            _d.sent();
                            _d.label = 5;
                        case 5: 
                        // Call the PDF download if SVG element found
                        return [4 /*yield*/, downloadPDF(svg, scale, filename, exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.pdfFont)];
                        case 6:
                            // Call the PDF download if SVG element found
                            _d.sent();
                            _d.label = 7;
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            caughtError_1 = _d.sent();
                            exportError = caughtError_1;
                            if ((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.fallbackToExportServer) !==
                                false &&
                                exportError.message.indexOf(invalidLibURLErrorPrefix) === 0) {
                                (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)("" + exportError.message + " Falling back to " +
                                    'export server.', false, chart);
                            }
                            // Try to fallback to the server
                            return [4 /*yield*/, (exporting === null || exporting === void 0 ? void 0 : exporting.fallbackToServer(exportingOptions, exportError))];
                        case 9:
                            // Try to fallback to the server
                            _d.sent();
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        });
        // Check the composition registry for the OfflineExporting
        if (!pushUnique(composed, 'OfflineExporting')) {
            return;
        }
        addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'load', function () {
            var _a;
            // The load event also runs for server-export chart copies.
            // Skip warnings in that case.
            if (this.renderer.forExport || hasPdfDependencies()) {
                return;
            }
            if (!((_a = this.options.exporting) === null || _a === void 0 ? void 0 : _a.libURL)) {
                (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Warning: exporting.libURL not defined, PDF client side ' +
                    'export will not work', false, this);
            }
        });
        // Adding wrappers for the deprecated functions
        extend((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()).prototype, {
            exportChartLocal: function (exportingOptions, chartOptions) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ((_a = this.exporting) === null || _a === void 0 ? void 0 : _a.exportChart(exportingOptions, chartOptions))];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
        // Update with defaults of the offline exporting module
        setOptions(OfflineExporting_OfflineExportingDefaults);
        // Additionally, extend menuItems with the offline exporting variants
        var menuItems = (_c = (_b = (_a = getOptions().exporting) === null || _a === void 0 ? void 0 : _a.buttons) === null || _b === void 0 ? void 0 : _b.contextButton) === null || _c === void 0 ? void 0 : _c.menuItems;
        menuItems === null || menuItems === void 0 ? void 0 : menuItems.push('downloadPDF');
    }
    OfflineExporting.compose = compose;
    /**
     * Get data URL to an image of an SVG and call download on it options
     * object:
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is `chart`.
     *
     * - **type:** File type of resulting download. Default is `image/png`.
     *
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `1`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand.
     *
     * @function Highcharts.downloadSVGLocal
     * @deprecated
     *
     * @param {string} svg
     * The generated SVG
     *
     * @param {Highcharts.ExportingOptions} options
     * The exporting options
     *
     */
    function downloadSVGLocal(svg, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default().Exporting.prototype.downloadSVG.call(void 0, svg, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    OfflineExporting.downloadSVGLocal = downloadSVGLocal;
    /**
     * Converts an SVG string into a PDF file and triggers its download. This
     * function processes the SVG, applies necessary font adjustments, converts
     * it to a PDF, and initiates the file download.
     *
     * @internal
     * @async
     * @function downloadPDF
     *
     * @param {string} svg
     * A string representation of the SVG markup to be converted into a PDF.
     * @param {number} scale
     * The scaling factor for the PDF output.
     * @param {string} filename
     * The name of the downloaded PDF file.
     * @param {Highcharts.PdfFontOptions} [pdfFont]
     * An optional object specifying URLs for different font variants (normal,
     * bold, italic, bolditalic).
     *
     * @return {Promise<void>}
     * A promise that resolves when the PDF has been successfully generated and
     * downloaded.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function downloadPDF(svg, scale, filename, pdfFont) {
        return __awaiter(this, void 0, void 0, function () {
            var svgNode,
                pdfData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        svgNode = preparePDF(svg, pdfFont);
                        if (!svgNode) return [3 /*break*/, 3];
                        // Loads all required fonts
                        return [4 /*yield*/, loadPdfFonts(svgNode, pdfFont)];
                    case 1:
                        // Loads all required fonts
                        _a.sent();
                        return [4 /*yield*/, svgToPdf(svgNode, 0, scale)];
                    case 2:
                        pdfData = _a.sent();
                        // Download the PDF
                        downloadURL(pdfData, filename);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Loads and registers custom fonts for PDF export if non-ASCII characters
     * are detected in the given SVG element. This function ensures that text
     * content with special characters is properly rendered in the exported PDF.
     *
     * It fetches font files (if provided in `pdfFont`), converts them to
     * base64, and registers them with jsPDF.
     *
     * @internal
     * @function loadPdfFonts
     *
     * @param {SVGElement} svgElement
     * The generated SVG element containing the text content to be exported.
     * @param {Highcharts.PdfFontOptions} [pdfFont]
     * An optional object specifying URLs for different font variants (normal,
     * bold, italic, bolditalic). If non-ASCII characters are not detected,
     * fonts are not loaded.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function loadPdfFonts(svgElement, pdfFont) {
        return __awaiter(this, void 0, void 0, function () {
            var hasNonASCII,
                addFont,
                variants,
                normalBase64,
                _loop_1,
                _i,
                variants_1,
                variant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasNonASCII = function (s) { return (
                        // eslint-disable-next-line no-control-regex
                        /[^\u0000-\u007F\u200B]+/.test(s)); };
                        addFont = function (variant, base64) {
                            OfflineExporting_win.jspdf.jsPDF.API.events.push([
                                'initialized',
                                function () {
                                    var _a;
                                    this.addFileToVFS(variant, base64);
                                    this.addFont(variant, 'HighchartsFont', variant);
                                    if (!((_a = this.getFontList()) === null || _a === void 0 ? void 0 : _a.HighchartsFont)) {
                                        this.setFont('HighchartsFont');
                                    }
                                }
                            ]);
                        };
                        // If there are no non-ASCII characters in the SVG, do not use bother
                        // downloading the font files
                        if (pdfFont && !hasNonASCII(svgElement.textContent || '')) {
                            pdfFont = void 0;
                        }
                        variants = ['normal', 'italic', 'bold', 'bolditalic'];
                        _loop_1 = function (variant) {
                            var url,
                                response,
                                blob_1,
                                reader_1,
                                base64,
                                _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        url = pdfFont === null || pdfFont === void 0 ? void 0 : pdfFont[variant];
                                        if (!url) return [3 /*break*/, 7];
                                        _c.label = 1;
                                    case 1:
                                        _c.trys.push([1, 5, , 6]);
                                        return [4 /*yield*/, OfflineExporting_win.fetch(url)];
                                    case 2:
                                        response = _c.sent();
                                        if (!response.ok) {
                                            throw new Error("Failed to fetch font: ".concat(url));
                                        }
                                        return [4 /*yield*/, response.blob()];
                                    case 3:
                                        blob_1 = _c.sent(), reader_1 = new FileReader();
                                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                reader_1.onloadend = function () {
                                                    if (typeof reader_1.result === 'string') {
                                                        resolve(reader_1.result.split(',')[1]);
                                                    }
                                                    else {
                                                        reject(new Error('Failed to read font as base64'));
                                                    }
                                                };
                                                reader_1.onerror = reject;
                                                reader_1.readAsDataURL(blob_1);
                                            })];
                                    case 4:
                                        base64 = _c.sent();
                                        addFont(variant, base64);
                                        if (variant === 'normal') {
                                            normalBase64 = base64;
                                        }
                                        return [3 /*break*/, 6];
                                    case 5:
                                        _b = _c.sent();
                                        return [3 /*break*/, 6];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        // For other variants, fall back to normal text weight/style
                                        if (normalBase64) {
                                            addFont(variant, normalBase64);
                                        }
                                        _c.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, variants_1 = variants;
                        _a.label = 1;
                    case 1:
                        if (!(_i < variants_1.length)) return [3 /*break*/, 4];
                        variant = variants_1[_i];
                        return [5 /*yield**/, _loop_1(variant)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Prepares an SVG for PDF export by ensuring proper text styling and
     * removing unnecessary elements. This function extracts an SVG element from
     * a given SVG string, applies font styles inherited from parent elements,
     * and removes text outlines and title elements to improve PDF rendering.
     *
     * @internal
     * @function preparePDF
     *
     * @param {string} svg
     * A string representation of the SVG markup.
     * @param {Highcharts.PdfFontOptions} [pdfFont]
     * An optional object specifying URLs for different font variants (normal,
     * bold, italic, bolditalic). If provided, the text elements are assigned a
     * custom PDF font.
     *
     * @return {SVGSVGElement | null}
     * Returns the parsed SVG element from the container or `null` if the SVG is
     * not found.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function preparePDF(svg, pdfFont) {
        var dummySVGContainer = OfflineExporting_doc.createElement('div');
        highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default().setElementHTML(dummySVGContainer, svg);
        var textElements = dummySVGContainer.getElementsByTagName('text'), 
            // Copy style property to element from parents if it's not there.
            // Searches up hierarchy until it finds prop, or hits the chart
            // container
            setStylePropertyFromParents = function (el,
            propName) {
                var curParent = el;
            while (curParent && curParent !== dummySVGContainer) {
                if (curParent.style[propName]) {
                    var value = curParent.style[propName];
                    if (propName === 'fontSize' && /em$/.test(value)) {
                        value = Math.round(parseFloat(value) * 16) + 'px';
                    }
                    el.style[propName] = value;
                    break;
                }
                curParent = curParent.parentNode;
            }
        };
        var titleElements,
            outlineElements;
        // Workaround for the text styling. Making sure it does pick up
        // settings for parent elements.
        [].forEach.call(textElements, function (el) {
            // Workaround for the text styling. making sure it does pick up
            // the root element
            ['fontFamily', 'fontSize']
                .forEach(function (property) {
                setStylePropertyFromParents(el, property);
            });
            el.style.fontFamily = (pdfFont === null || pdfFont === void 0 ? void 0 : pdfFont.normal) ?
                // Custom PDF font
                'HighchartsFont' :
                // Generic font (serif, sans-serif etc)
                String(el.style.fontFamily &&
                    el.style.fontFamily.split(' ').splice(-1));
            // Workaround for plotband with width, removing title from text
            // nodes
            titleElements = el.getElementsByTagName('title');
            [].forEach.call(titleElements, function (titleElement) {
                el.removeChild(titleElement);
            });
            // Remove all .highcharts-text-outline elements, #17170
            outlineElements =
                el.getElementsByClassName('highcharts-text-outline');
            while (outlineElements.length > 0) {
                var outline = outlineElements[0];
                if (outline.parentNode) {
                    outline.parentNode.removeChild(outline);
                }
            }
        });
        return dummySVGContainer.querySelector('svg');
    }
    /**
     * Transform from PDF to SVG.
     *
     * @async
     * @internal
     * @function svgToPdf
     *
     * @param {Highcharts.SVGElement} svgElement
     * The SVG element to convert.
     * @param {number} margin
     * The margin to apply.
     * @param {number} scale
     * The scale of the SVG.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function svgToPdf(svgElement, margin, scale) {
        return __awaiter(this, void 0, void 0, function () {
            var width,
                height,
                pdfDoc,
                gradients,
                index,
                gradient,
                stops,
                i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        width = (Number(svgElement.getAttribute('width')) + 2 * margin) *
                            scale, height = (Number(svgElement.getAttribute('height')) + 2 * margin) *
                            scale, pdfDoc = new OfflineExporting_win.jspdf.jsPDF(// eslint-disable-line new-cap
                        // Setting orientation to portrait if height exceeds width
                        height > width ? 'p' : 'l', 'pt', [width, height]);
                        // Workaround for #7090, hidden elements were drawn anyway. It comes
                        // down to https://github.com/yWorks/svg2pdf.js/issues/28. Check this
                        // later.
                        [].forEach.call(svgElement.querySelectorAll('*[visibility="hidden"]'), function (node) {
                            node.parentNode.removeChild(node);
                        });
                        gradients = svgElement.querySelectorAll('linearGradient');
                        for (index = 0; index < gradients.length; index++) {
                            gradient = gradients[index];
                            stops = gradient.querySelectorAll('stop');
                            i = 0;
                            while (i < stops.length &&
                                stops[i].getAttribute('offset') === '0' &&
                                stops[i + 1].getAttribute('offset') === '0') {
                                stops[i].remove();
                                i++;
                            }
                        }
                        // Workaround for #15135, zero width spaces, which Highcharts uses
                        // to break lines, are not correctly rendered in PDF. Replace it
                        // with a regular space and offset by some pixels to compensate.
                        [].forEach.call(svgElement.querySelectorAll('tspan'), function (tspan) {
                            if (tspan.textContent === '\u200B') {
                                tspan.textContent = ' ';
                                tspan.setAttribute('dx', -5);
                            }
                        });
                        // Transform from PDF to SVG
                        return [4 /*yield*/, pdfDoc.svg(svgElement, {
                                x: 0,
                                y: 0,
                                width: width,
                                height: height,
                                removeInvalid: true
                            })];
                    case 1:
                        // Transform from PDF to SVG
                        _a.sent();
                        // Return the output
                        return [2 /*return*/, pdfDoc.output('datauristring')];
                }
            });
        });
    }
})(OfflineExporting || (OfflineExporting = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var OfflineExporting_OfflineExporting = (OfflineExporting);

;// ./code/es5/es-modules/masters/modules/offline-exporting.src.js





var G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Compatibility
G.dataURLtoBlob = G.dataURLtoBlob || Shared_DownloadURL.dataURLtoBlob;
G.downloadSVGLocal = OfflineExporting_OfflineExporting.downloadSVGLocal;
G.downloadURL = G.downloadURL || Shared_DownloadURL.downloadURL;
// Compose
OfflineExporting_OfflineExporting.compose(G.Exporting);
/* harmony default export */ var offline_exporting_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});