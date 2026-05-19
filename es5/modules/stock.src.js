// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/stock
 * @requires highcharts
 *
 * Highcharts Stock as a plugin for Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Point"], root["_Highcharts"]["Series"], root["_Highcharts"]["Axis"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"], root["_Highcharts"]["SVGElement"], root["_Highcharts"]["Templating"], root["_Highcharts"]["Chart"], root["_Highcharts"]["Series"]["types"]["column"], root["_Highcharts"]["StackItem"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/stock", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Point"],amd1["Series"],amd1["Axis"],amd1["SeriesRegistry"],amd1["SVGRenderer"],amd1["SVGElement"],amd1["Templating"],amd1["Chart"],amd1["Series"],["types"],["column"],amd1["StackItem"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/stock"] = factory(root["_Highcharts"], root["_Highcharts"]["Point"], root["_Highcharts"]["Series"], root["_Highcharts"]["Axis"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"], root["_Highcharts"]["SVGElement"], root["_Highcharts"]["Templating"], root["_Highcharts"]["Chart"], root["_Highcharts"]["Series"]["types"]["column"], root["_Highcharts"]["StackItem"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Point"], root["Highcharts"]["Series"], root["Highcharts"]["Axis"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["SVGRenderer"], root["Highcharts"]["SVGElement"], root["Highcharts"]["Templating"], root["Highcharts"]["Chart"], root["Highcharts"]["Series"]["types"]["column"], root["Highcharts"]["StackItem"]);
})(typeof window === 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__260__, __WEBPACK_EXTERNAL_MODULE__820__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__540__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__984__, __WEBPACK_EXTERNAL_MODULE__960__, __WEBPACK_EXTERNAL_MODULE__448__, __WEBPACK_EXTERNAL_MODULE__184__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 28:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),

/***/ 184:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__184__;

/***/ }),

/***/ 260:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__260__;

/***/ }),

/***/ 448:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__448__;

/***/ }),

/***/ 512:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 532:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

/***/ }),

/***/ 540:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__540__;

/***/ }),

/***/ 820:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__820__;

/***/ }),

/***/ 944:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ }),

/***/ 960:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__960__;

/***/ }),

/***/ 984:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__984__;

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
  "default": function() { return /* binding */ stock_src; }
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Point"],"commonjs":["highcharts","Point"],"commonjs2":["highcharts","Point"],"root":["Highcharts","Point"]}
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_ = __webpack_require__(260);
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default = /*#__PURE__*/__webpack_require__.n(highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series"],"commonjs":["highcharts","Series"],"commonjs2":["highcharts","Series"],"root":["Highcharts","Series"]}
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_ = __webpack_require__(820);
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_);
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

var doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;
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
    var el = doc.createElement(tag);
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
    if ((doc === null || doc === void 0 ? void 0 : doc.createEvent) &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default())))) {
        var e = doc.createEvent('Events');
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
            child === win) {
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
    var css = win.getComputedStyle(el,
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
    var docElem = doc.documentElement,
        box = (el.parentElement || el.parentNode) ?
            el.getBoundingClientRect() :
            { top: 0,
        left: 0,
        width: 0,
        height: 0 };
    return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) -
            (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) -
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

;// ./code/es5/es-modules/Series/DataModifyComposition.js
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


var pointTooltipFormatter = (highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default()).prototype.tooltipFormatter;


/* *
 *
 *  Composition
 *
 * */
var DataModifyComposition;
(function (DataModifyComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends the series, axis and point classes with
     * compare and cumulative support.
     *
     * @private
     */
    function compose(SeriesClass, AxisClass, PointClass) {
        var axisProto = AxisClass.prototype,
            pointProto = PointClass.prototype,
            seriesProto = SeriesClass.prototype;
        if (!seriesProto.setCompare) {
            seriesProto.setCompare = seriesSetCompare;
            seriesProto.setCumulative = seriesSetCumulative;
            addEvent(SeriesClass, 'afterInit', afterInit);
            addEvent(SeriesClass, 'afterGetExtremes', afterGetExtremes);
            addEvent(SeriesClass, 'afterProcessData', afterProcessData);
        }
        if (!axisProto.setCompare) {
            axisProto.setCompare = axisSetCompare;
            axisProto.setModifier = setModifier;
            axisProto.setCumulative = axisSetCumulative;
            pointProto.tooltipFormatter = tooltipFormatter;
        }
        return SeriesClass;
    }
    DataModifyComposition.compose = compose;
    /* ********************************************************************** *
     *  Start shared compare and cumulative logic                             *
     * ********************************************************************** */
    /**
     * Shared code for the axis.setCompare() and the axis.setCumulative()
     * methods. Inits the 'compare' or the 'cumulative' mode.
     * @private
     */
    function setModifier(mode, modeState, redraw) {
        if (!this.isXAxis) {
            this.series.forEach(function (series) {
                if (mode === 'compare' &&
                    typeof modeState !== 'boolean') {
                    series.setCompare(modeState, false);
                }
                else if (mode === 'cumulative' &&
                    !isString(modeState)) {
                    series.setCumulative(modeState, false);
                }
            });
            if (pick(redraw, true)) {
                this.chart.redraw();
            }
        }
    }
    /**
     * Extend the tooltip formatter by adding support for the point.change
     * variable as well as the changeDecimals option.
     *
     * @ignore
     * @function Highcharts.Point#tooltipFormatter
     *
     * @param {string} pointFormat
     */
    function tooltipFormatter(pointFormat) {
        var point = this, numberFormatter = point.series.chart.numberFormatter, replace = function (value) {
                pointFormat = pointFormat.replace('{point.' + value + '}', (point[value] > 0 && value === 'change' ? '+' : '') +
                    numberFormatter(point[value], pick(point.series.tooltipOptions.changeDecimals, 2)));
        };
        if (defined(point.change)) {
            replace('change');
        }
        if (defined(point.cumulativeSum)) {
            replace('cumulativeSum');
        }
        return pointTooltipFormatter.apply(this, [pointFormat]);
    }
    /**
     * Extend series.init by adding a methods to modify the y values used
     * for plotting on the y axis. For compare mode, this method is called both
     * from the axis when finding dataMin and dataMax,
     * and from the series.translate method.
     *
     * @ignore
     * @function Highcharts.Series#init
     */
    function afterInit() {
        // If linked series does not have compare option set, use the parent
        // series' compare option, #21119.
        var linkedTo = this.options.linkedTo,
            chart = this.chart;
        if (linkedTo) {
            var linkedSeries = linkedTo === ':previous' ?
                    chart.series[this.index - 1] :
                    chart.get(linkedTo);
            if (linkedSeries instanceof (highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default())) {
                this.options.compare = pick(this.userOptions.compare, linkedSeries.options.compare);
            }
        }
        var compare = this.options.compare;
        var dataModify;
        if (compare === 'percent' ||
            compare === 'value' ||
            this.options.cumulative) {
            dataModify = new Additions(this);
            if (compare === 'percent' || compare === 'value') {
                // Set comparison mode
                dataModify.initCompare(compare);
            }
            else {
                // Set Cumulative Sum mode
                dataModify.initCumulative();
            }
        }
        this.dataModify = dataModify;
    }
    /**
     * Adjust the extremes (compare and cumulative modify the data).
     * @private
     */
    function afterGetExtremes(e) {
        var dataExtremes = e.dataExtremes,
            activeYData = dataExtremes.activeYData;
        if (this.dataModify && dataExtremes) {
            var extremes = void 0;
            if (this.options.compare) {
                extremes = [
                    this.dataModify.modifyValue(dataExtremes.dataMin),
                    this.dataModify.modifyValue(dataExtremes.dataMax)
                ];
            }
            else if (this.options.cumulative &&
                isArray(activeYData) &&
                // If only one y visible, sum doesn't change
                // so no need to change extremes
                activeYData.length >= 2) {
                extremes = Additions.getCumulativeExtremes(activeYData);
            }
            if (extremes) {
                dataExtremes.dataMin = arrayMin(extremes);
                dataExtremes.dataMax = arrayMax(extremes);
            }
        }
    }
    /* ********************************************************************** *
     *  End shared compare and cumulative logic                               *
     * ********************************************************************** */
    /* ********************************************************************** *
     *  Start value compare logic                                             *
     * ********************************************************************** */
    /**
     * Highcharts Stock only. Set the
     * [compare](https://api.highcharts.com/highstock/plotOptions.series.compare)
     * mode of the series after render time.
     * In most cases it is more useful running
     * {@link Axis#setCompare} on the X axis to update all its series.
     *
     * @function Highcharts.Series#setCompare
     *
     * @param {string|null} [compare]
     *        Can be one of `undefined` (default), `null`, `"percent"`
     *        or `"value"`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function seriesSetCompare(compare, redraw) {
        // Survive to export, #5485 (and for options generally)
        this.options.compare = this.userOptions.compare = compare;
        // Fire series.init() that will set or delete series.dataModify
        this.update({}, pick(redraw, true));
        if (this.dataModify && (compare === 'value' || compare === 'percent')) {
            this.dataModify.initCompare(compare);
        }
        else {
            // When disabling, clear the points
            this.points.forEach(function (point) {
                delete point.change;
            });
        }
    }
    /**
     * Extend series.processData by finding the first y value in the plot area,
     * used for comparing the following values
     *
     * @ignore
     * @function Highcharts.Series#processData
     */
    function afterProcessData() {
        var series = this, 
            // For series with more than one value (range, OHLC etc), compare
            // against close or the pointValKey (#4922, #3112, #9854)
            compareColumn = this.getColumn((series.pointArrayMap &&
                (series.options.pointValKey || series.pointValKey)) || 'y',
            true);
        if (series.xAxis && // Not pies
            compareColumn.length &&
            series.dataModify) {
            var processedXData = series.getColumn('x',
                true),
                length_1 = series.dataTable.rowCount,
                compareStart = series.options.compareStart === true ? 0 : 1;
            // Find the first value for comparison
            for (var i = 0; i < length_1 - compareStart; i++) {
                var compareValue = compareColumn[i];
                if (isNumber(compareValue) &&
                    compareValue !== 0 &&
                    processedXData[i + compareStart] >= (series.xAxis.min || 0)) {
                    series.dataModify.compareValue = compareValue;
                    break;
                }
            }
        }
    }
    /**
     * Highcharts Stock only. Set the compare mode on all series
     * belonging to a Y axis.
     *
     * @see [plotOptions.series.compare](https://api.highcharts.com/highstock/plotOptions.series.compare)
     *
     * @sample stock/members/axis-setcompare/
     *         Set compare
     *
     * @function Highcharts.Axis#setCompare
     *
     * @param {string|null} [compare]
     *        The compare mode. Can be one of `undefined` (default), `null`,
     *        `"value"` or `"percent"`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function axisSetCompare(compare, redraw) {
        this.setModifier('compare', compare, redraw);
    }
    /* ********************************************************************** *
     *  End value compare logic                                               *
     * ********************************************************************** */
    /* ********************************************************************** *
     *  Start Cumulative Sum logic, author: Rafał Sebestjański                *
     * ********************************************************************** */
    /**
     * Highcharts Stock only. Set the
     * [cumulative](https://api.highcharts.com/highstock/plotOptions.series.cumulative)
     * mode of the series after render time.
     * In most cases it is more useful running
     * {@link Axis#setCumulative} on the Y axis to update all its series.
     *
     * @function Highcharts.Series#setCumulative
     *
     * @param {boolean} [cumulative=false]
     *        Either enable or disable Cumulative Sum mode.
     *        Can be one of `false` (default) or `true`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function seriesSetCumulative(cumulative, redraw) {
        // Set default value to false
        cumulative = pick(cumulative, false);
        // Survive to export, #5485 (and for options generally)
        this.options.cumulative = this.userOptions.cumulative = cumulative;
        // Fire series.init() that will set or delete series.dataModify
        this.update({}, pick(redraw, true));
        // If should, turn on the Cumulative Sum mode
        if (this.dataModify) {
            this.dataModify.initCumulative();
        }
        else {
            // When disabling, clear the points
            this.points.forEach(function (point) {
                delete point.cumulativeSum;
            });
        }
    }
    /**
     * Highcharts Stock only. Set the cumulative mode on all series
     * belonging to a Y axis.
     *
     * @see [plotOptions.series.cumulative](https://api.highcharts.com/highstock/plotOptions.series.cumulative)
     *
     * @sample stock/members/axis-setcumulative/
     *         Set cumulative
     *
     * @function Highcharts.Axis#setCumulative
     *
     * @param {boolean} [cumulative]
     *        Whether to disable or enable the cumulative mode.
     *        Can be one of `undefined` (default, treated as `false`),
     *        `false` or `true`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function axisSetCumulative(cumulative, redraw) {
        this.setModifier('cumulative', cumulative, redraw);
    }
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    var Additions = /** @class */ (function () {
            /* *
             *
             *  Constructors
             *
             * */
            /**
             * @private
             */
            function Additions(series) {
                this.series = series;
        }
        /* *
        *
        *  Functions
        *
        * */
        /**
         * @private
         */
        Additions.prototype.modifyValue = function () {
            return 0;
        };
        /**
         * @ignore
         * @function Highcharts.Series#getCumulativeExtremes
         *
         * @param {Array} [activeYData]
         *        An array containing all the points' y values
         *        in a visible range.
         */
        Additions.getCumulativeExtremes = function (activeYData) {
            var cumulativeDataMin = Infinity,
                cumulativeDataMax = -Infinity;
            activeYData.reduce(function (prev, cur) {
                var sum = prev + cur;
                cumulativeDataMin = Math.min(cumulativeDataMin, sum, prev);
                cumulativeDataMax = Math.max(cumulativeDataMax, sum, prev);
                return sum;
            });
            return [cumulativeDataMin, cumulativeDataMax];
        };
        /**
         * @ignore
         * @function Highcharts.Series#initCompare
         *
         * @param {string} [compare]
         *        Can be one of `"percent"` or `"value"`.
         */
        Additions.prototype.initCompare = function (compare) {
            // Set the modifyValue method
            this.modifyValue = function (value, index) {
                if (value === null) {
                    value = 0;
                }
                var compareValue = this.compareValue;
                if (typeof value !== 'undefined' &&
                    typeof compareValue !== 'undefined') { // #2601, #5814
                    // Get the modified value
                    if (compare === 'value') {
                        value -= compareValue;
                        // Compare percent
                    }
                    else {
                        var compareBase = this.series.options.compareBase;
                        value = 100 * (value / Math.abs(compareValue)) -
                            (compareBase === 100 ? 0 : 100);
                    }
                    // Record for tooltip etc.
                    if (typeof index !== 'undefined') {
                        var point = this.series.points[index];
                        if (point) {
                            point.change = value;
                        }
                    }
                    return value;
                }
                return 0;
            };
        };
        /**
         * @ignore
         * @function Highcharts.Series#initCumulative
         */
        Additions.prototype.initCumulative = function () {
            // Set the modifyValue method
            this.modifyValue = function (value, index) {
                if (value === null) {
                    value = 0;
                }
                if (value !== void 0 && index !== void 0) {
                    var prevPoint = index > 0 ?
                            this.series.points[index - 1] : null;
                    // Get the modified value
                    if (prevPoint && prevPoint.cumulativeSum) {
                        value = correctFloat(prevPoint.cumulativeSum + value);
                    }
                    // Record for tooltip etc.
                    var point = this.series.points[index];
                    var cumulativeStart = point.series.options.cumulativeStart,
                        withinRange = point.x <= this.series.xAxis.max &&
                            point.x >= this.series.xAxis.min;
                    if (point) {
                        if (!cumulativeStart || withinRange) {
                            point.cumulativeSum = value;
                        }
                        else {
                            point.cumulativeSum = void 0;
                        }
                    }
                    return value;
                }
                return 0;
            };
        };
        return Additions;
    }());
    DataModifyComposition.Additions = Additions;
})(DataModifyComposition || (DataModifyComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Series_DataModifyComposition = (DataModifyComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * Compare the values of the series against the first non-null, non-
 * zero value in the visible range. The y axis will show percentage
 * or absolute change depending on whether `compare` is set to `"percent"`
 * or `"value"`. When this is applied to multiple series, it allows
 * comparing the development of the series against each other. Adds
 * a `change` field to every point object. If a `compare` value is not set on a
 * linked series, it will be inherited from the parent series.
 *
 * @see [compareBase](#plotOptions.series.compareBase)
 * @see [Axis.setCompare()](/class-reference/Highcharts.Axis#setCompare)
 * @see [Series.setCompare()](/class-reference/Highcharts.Series#setCompare)
 *
 * @sample {highstock} stock/plotoptions/series-compare-percent/
 *         Percent
 * @sample {highstock} stock/plotoptions/series-compare-value/
 *         Value
 *
 * @type      {string}
 * @since     1.0.1
 * @product   highstock
 * @validvalue ["percent", "value"]
 * @apioption plotOptions.series.compare
 */
/**
 * Defines if comparison should start from the first point within the visible
 * range or should start from the last point **before** the range.
 *
 * In other words, this flag determines if first point within the visible range
 * will have 0% (`compareStart=true`) or should have been already calculated
 * according to the previous point (`compareStart=false`).
 *
 * @sample {highstock} stock/plotoptions/series-comparestart/
 *         Calculate compare within visible range
 *
 * @type      {boolean}
 * @default   false
 * @since     6.0.0
 * @product   highstock
 * @apioption plotOptions.series.compareStart
 */
/**
 * When [compare](#plotOptions.series.compare) is `percent`, this option
 * dictates whether to use 0 or 100 as the base of comparison.
 *
 * @sample {highstock} stock/plotoptions/series-comparebase/
 *         Compare base is 100
 *
 * @type       {number}
 * @default    0
 * @since      5.0.6
 * @product    highstock
 * @validvalue [0, 100]
 * @apioption  plotOptions.series.compareBase
 */
/**
 * Cumulative Sum feature replaces points' values with the following formula:
 * `sum of all previous points' values + current point's value`.
 * Works only for points in a visible range.
 * Adds the `cumulativeSum` field to each point object that can be accessed
 * e.g. in the [tooltip.pointFormat](https://api.highcharts.com/highstock/tooltip.pointFormat).
 *
 * With `dataGrouping` enabled, default grouping approximation is set to `sum`.
 *
 * @see [Axis.setCumulative()](/class-reference/Highcharts.Axis#setCumulative)
 * @see [Series.setCumulative()](/class-reference/Highcharts.Series#setCumulative)
 *
 * @sample {highstock} stock/plotoptions/series-cumulative-sum/
 *         Cumulative Sum
 *
 * @type      {boolean}
 * @default   false
 * @since 9.3.0
 * @product   highstock
 * @apioption plotOptions.series.cumulative
 */
/**
 * Defines if cumulation should start from the first point within the visible
 * range or should start from the last point **before** the range.
 *
 * In other words, this flag determines if first point within the visible range
 * will start at 0 (`cumulativeStart=true`) or should have been already calculated
 * according to the previous point (`cumulativeStart=false`).
 *
 * @sample {highstock} stock/plotoptions/series-cumulativestart/
 *         Cumulative Start
 *
 * @type      {boolean}
 * @default   false
 * @since 11.4.2
 * @product   highstock
 * @apioption plotOptions.series.cumulativeStart
 */
''; // Keeps doclets above in transpiled file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
;// ./code/es5/es-modules/Stock/Navigator/ChartNavigatorComposition.js
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


var isTouchDevice = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isTouchDevice;

/* *
 *
 *  Constants
 *
 * */
var composedMembers = [];
/* *
 *
 *  Variables
 *
 * */
var NavigatorConstructor;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(ChartClass, NavigatorClass) {
    if (pushUnique(composedMembers, ChartClass)) {
        var chartProto = ChartClass.prototype;
        NavigatorConstructor = NavigatorClass;
        chartProto.callbacks.push(onChartCallback);
        addEvent(ChartClass, 'afterAddSeries', onChartAfterAddSeries);
        addEvent(ChartClass, 'afterSetChartSize', onChartAfterSetChartSize);
        addEvent(ChartClass, 'afterUpdate', onChartAfterUpdate);
        addEvent(ChartClass, 'beforeRender', onChartBeforeRender);
        addEvent(ChartClass, 'beforeShowResetZoom', onChartBeforeShowResetZoom);
        addEvent(ChartClass, 'update', onChartUpdate);
    }
}
/**
 * Handle adding new series.
 * @internal
 */
function onChartAfterAddSeries() {
    if (this.navigator) {
        // Recompute which series should be shown in navigator, and add them
        this.navigator.setBaseSeries(null, false);
    }
}
/**
 * For stock charts, extend the Chart.setChartSize method so that we can set the
 * final top position of the navigator once the height of the chart, including
 * the legend, is determined. #367. We can't use Chart.getMargins, because
 * labels offsets are not calculated yet.
 * @internal
 */
function onChartAfterSetChartSize() {
    var _a;
    var legend = this.legend,
        navigator = this.navigator;
    var legendOptions,
        xAxis,
        yAxis;
    if (navigator) {
        legendOptions = legend && legend.options;
        xAxis = navigator.xAxis;
        yAxis = navigator.yAxis;
        var scrollbarHeight = navigator.scrollbarHeight,
            scrollButtonSize = navigator.scrollButtonSize;
        // Compute the top position
        if (this.inverted) {
            navigator.left = navigator.opposite ?
                this.chartWidth - scrollbarHeight -
                    navigator.height :
                this.spacing[3] + scrollbarHeight;
            navigator.top = this.plotTop + scrollButtonSize;
        }
        else {
            navigator.left = pick(xAxis.left, this.plotLeft + scrollButtonSize);
            navigator.top = navigator.navigatorOptions.top ||
                this.chartHeight -
                    navigator.height -
                    scrollbarHeight -
                    (((_a = this.scrollbar) === null || _a === void 0 ? void 0 : _a.options.margin) || 0) -
                    this.spacing[2] -
                    (this.rangeSelector && this.extraBottomMargin ?
                        this.rangeSelector.getHeight() :
                        0) -
                    ((legendOptions &&
                        legendOptions.verticalAlign === 'bottom' &&
                        legendOptions.layout !== 'proximate' && // #13392
                        legendOptions.enabled &&
                        !legendOptions.floating) ?
                        legend.legendHeight +
                            pick(legendOptions.margin, 10) :
                        0) -
                    (this.titleOffset ? this.titleOffset[2] : 0);
        }
        if (xAxis && yAxis) { // False if navigator is disabled (#904)
            if (this.inverted) {
                xAxis.options.left = yAxis.options.left = navigator.left;
            }
            else {
                xAxis.options.top = yAxis.options.top = navigator.top;
            }
            xAxis.setAxisSize();
            yAxis.setAxisSize();
        }
    }
}
/**
 * Initialize navigator, if no scrolling exists yet.
 * @internal
 */
function onChartAfterUpdate(event) {
    if (!this.navigator && !this.scroller &&
        (this.options.navigator.enabled ||
            this.options.scrollbar.enabled)) {
        this.scroller = this.navigator = new NavigatorConstructor(this);
        if (pick(event.redraw, true)) {
            this.redraw(event.animation); // #7067
        }
    }
}
/**
 * Initialize navigator for stock charts
 * @internal
 */
function onChartBeforeRender() {
    var options = this.options;
    if (options.navigator.enabled ||
        options.scrollbar.enabled) {
        this.scroller = this.navigator = new NavigatorConstructor(this);
    }
}
/**
 * For Stock charts. For x only zooming, do not to create the zoom button
 * because X axis zooming is already allowed by the Navigator and Range
 * selector. (#9285)
 * @internal
 */
function onChartBeforeShowResetZoom() {
    var chartOptions = this.options,
        navigator = chartOptions.navigator,
        rangeSelector = chartOptions.rangeSelector;
    if (((navigator && navigator.enabled) ||
        (rangeSelector && rangeSelector.enabled)) &&
        ((!isTouchDevice &&
            this.zooming.type === 'x') ||
            (isTouchDevice && this.zooming.pinchType === 'x'))) {
        return false;
    }
}
/** @internal */
function onChartCallback(chart) {
    var navigator = chart.navigator;
    // Initialize the navigator
    if (navigator && chart.xAxis[0]) {
        var extremes = chart.xAxis[0].getExtremes();
        navigator.render(extremes.min, extremes.max);
    }
}
/**
 * Merge options, if no scrolling exists yet
 * @internal
 */
function onChartUpdate(e) {
    var navigatorOptions = (e.options.navigator || {}),
        scrollbarOptions = (e.options.scrollbar || {});
    if (!this.navigator && !this.scroller &&
        (navigatorOptions.enabled || scrollbarOptions.enabled)) {
        merge(true, this.options.navigator, navigatorOptions);
        merge(true, this.options.scrollbar, scrollbarOptions);
        delete e.options.navigator;
        delete e.options.scrollbar;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var ChartNavigatorComposition = {
    compose: compose
};
/** @internal */
/* harmony default export */ var Navigator_ChartNavigatorComposition = (ChartNavigatorComposition);

;// ./code/es5/es-modules/Core/Axis/NavigatorAxisComposition.js
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


var NavigatorAxisComposition_isTouchDevice = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isTouchDevice;

/* *
 *
 *  Functions
 *
 * */
/** @internal */
function onAxisInit() {
    var axis = this;
    if (!axis.navigatorAxis) {
        axis.navigatorAxis = new NavigatorAxisAdditions(axis);
    }
}
/**
 * For Stock charts, override selection zooming with some special features
 * because X axis zooming is already allowed by the Navigator and Range
 * selector.
 * @internal
 */
function onAxisSetExtremes(e) {
    var axis = this,
        chart = axis.chart,
        chartOptions = chart.options,
        navigator = chartOptions.navigator,
        navigatorAxis = axis.navigatorAxis,
        pinchType = chart.zooming.pinchType,
        rangeSelector = chartOptions.rangeSelector,
        zoomType = chart.zooming.type;
    var zoomed;
    if (axis.isXAxis &&
        ((navigator === null || navigator === void 0 ? void 0 : navigator.enabled) || (rangeSelector === null || rangeSelector === void 0 ? void 0 : rangeSelector.enabled))) {
        // For y only zooming, ignore the X axis completely
        if (zoomType === 'y' && e.trigger === 'zoom') {
            zoomed = false;
            // For xy zooming, record the state of the zoom before zoom selection,
            // then when the reset button is pressed, revert to this state. This
            // should apply only if the chart is initialized with a range (#6612),
            // otherwise zoom all the way out.
        }
        else if (((e.trigger === 'zoom' && zoomType === 'xy') ||
            (NavigatorAxisComposition_isTouchDevice && pinchType === 'xy')) &&
            axis.options.range) {
            var previousZoom = navigatorAxis.previousZoom;
            // Minimum defined, zooming in
            if (defined(e.min)) {
                navigatorAxis.previousZoom = [axis.min, axis.max];
                // Minimum undefined, resetting zoom
            }
            else if (previousZoom) {
                e.min = previousZoom[0];
                e.max = previousZoom[1];
                navigatorAxis.previousZoom = void 0;
            }
        }
    }
    if (typeof zoomed !== 'undefined') {
        e.preventDefault();
    }
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
var NavigatorAxisAdditions = /** @class */ (function () {
    /* *
     *
     *  Constructors
     *
     * */
    function NavigatorAxisAdditions(axis) {
        this.axis = axis;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    NavigatorAxisAdditions.compose = function (AxisClass) {
        if (!AxisClass.keepProps.includes('navigatorAxis')) {
            AxisClass.keepProps.push('navigatorAxis');
            addEvent(AxisClass, 'init', onAxisInit);
            addEvent(AxisClass, 'setExtremes', onAxisSetExtremes);
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    NavigatorAxisAdditions.prototype.destroy = function () {
        this.axis = void 0;
    };
    /**
     * Add logic to normalize the zoomed range in order to preserve the pressed
     * state of range selector buttons
     *
     * @internal
     * @function Highcharts.Axis#toFixedRange
     */
    NavigatorAxisAdditions.prototype.toFixedRange = function (pxMin, pxMax, fixedMin, fixedMax) {
        var axis = this.axis,
            halfPointRange = (axis.pointRange || 0) / 2;
        var newMin = pick(fixedMin,
            axis.translate(pxMin,
            true, !axis.horiz)),
            newMax = pick(fixedMax,
            axis.translate(pxMax,
            true, !axis.horiz));
        // Add/remove half point range to/from the extremes (#1172)
        if (!defined(fixedMin)) {
            newMin = correctFloat(newMin + halfPointRange);
        }
        if (!defined(fixedMax)) {
            newMax = correctFloat(newMax - halfPointRange);
        }
        if (!isNumber(newMin) || !isNumber(newMax)) { // #1195, #7411
            newMin = newMax = void 0;
        }
        return {
            min: newMin,
            max: newMax
        };
    };
    return NavigatorAxisAdditions;
}());
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var NavigatorAxisComposition = (NavigatorAxisAdditions);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es5/es-modules/Stock/Navigator/NavigatorDefaults.js
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


var seriesTypes = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Constants
 *
 * */
/**
 * The navigator is a small series below the main series, displaying
 * a view of the entire data set. It provides tools to zoom in and
 * out on parts of the data as well as panning across the dataset.
 *
 * @product      highstock gantt
 * @optionparent navigator
 */
var NavigatorDefaults = {
    /**
     * Whether the navigator and scrollbar should adapt to updated data
     * in the base X axis. When loading data async, as in the demo below,
     * this should be `false`. Otherwise new data will trigger navigator
     * redraw, which will cause unwanted looping. In the demo below, the
     * data in the navigator is set only once. On navigating, only the main
     * chart content is updated.
     *
     * @sample {highstock} stock/demo/lazy-loading/
     *         Set to false with async data loading
     *
     * @type      {boolean}
     * @default   true
     * @apioption navigator.adaptToUpdatedData
     */
    /**
     * An integer identifying the index to use for the base series, or a
     * string representing the id of the series.
     *
     * **Note**: As of Highcharts 5.0, this is now a deprecated option.
     * Prefer [series.showInNavigator](#plotOptions.series.showInNavigator).
     *
     * @see [series.showInNavigator](#plotOptions.series.showInNavigator)
     *
     * @deprecated
     * @type      {number|string}
     * @default   0
     * @apioption navigator.baseSeries
     */
    /**
     * Enable or disable the navigator.
     *
     * @sample {highstock} stock/navigator/enabled/
     *         Disable the navigator
     *
     * @type      {boolean}
     * @default   true
     * @apioption navigator.enabled
     */
    /**
     * When the chart is inverted, whether to draw the navigator on the
     * opposite side.
     *
     * @type      {boolean}
     * @default   false
     * @since     5.0.8
     * @apioption navigator.opposite
     */
    /**
     * The height of the navigator.
     *
     * @sample {highstock} stock/navigator/height/
     *         A higher navigator
     */
    height: 40,
    /**
     * The distance from the nearest element, the X axis or X axis labels.
     *
     * @sample {highstock} stock/navigator/margin/
     *         A margin of 2 draws the navigator closer to the X axis labels
     */
    margin: 22,
    /**
     * Whether the mask should be inside the range marking the zoomed
     * range, or outside. In Highcharts Stock 1.x it was always `false`.
     *
     * @sample {highstock} stock/demo/maskinside-false/
     *         False, mask outside
     *
     * @since   2.0
     */
    maskInside: true,
    /**
     * Options for the handles for dragging the zoomed area.
     *
     * @sample {highstock} stock/navigator/handles/
     *         Colored handles
     */
    handles: {
        /**
         * Width for handles.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since   6.0.0
         */
        width: 7,
        /**
         * Border radius of the handles.
         *
         * @sample {highstock} stock/navigator/handles-border-radius/
         *      Border radius on the navigator handles.
         *
         * @since 11.4.2
         */
        borderRadius: 0,
        /**
         * Height for handles.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since   6.0.0
         */
        height: 15,
        /**
         * Array to define shapes of handles. 0-index for left, 1-index for
         * right.
         *
         * Additionally, the URL to a graphic can be given on this form:
         * `url(graphic.png)`. Note that for the image to be applied to
         * exported charts, its URL needs to be accessible by the export
         * server.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
         * used by its method name, as shown in the demo.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @type    {Array<string>}
         * @default ["navigator-handle", "navigator-handle"]
         * @since   6.0.0
         */
        symbols: ['navigator-handle', 'navigator-handle'],
        /**
         * Allows to enable/disable handles.
         *
         * @since   6.0.0
         */
        enabled: true,
        /**
         * The width for the handle border and the stripes inside.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since     6.0.0
         * @apioption navigator.handles.lineWidth
         */
        lineWidth: 1,
        /**
         * The fill for the handle.
         *
         * @type {Highcharts.ColorType}
         */
        backgroundColor: 'var(--highcharts-neutral-color-5)',
        /**
         * The stroke for the handle border and the stripes inside.
         *
         * @type {Highcharts.ColorType}
         */
        borderColor: 'var(--highcharts-neutral-color-40)'
    },
    /**
     * The color of the mask covering the areas of the navigator series
     * that are currently not visible in the main series. The default
     * color is bluish with an opacity of 0.3 to see the series below.
     *
     * @see In styled mode, the mask is styled with the
     *      `.highcharts-navigator-mask` and
     *      `.highcharts-navigator-mask-inside` classes.
     *
     * @sample {highstock} stock/navigator/maskfill/
     *         Blue, semi transparent mask
     *
     * @type    {Highcharts.ColorType}
     */
    maskFill: 'color-mix(var(--highcharts-highlight-color-60) 30%, transparent)',
    /**
     * The color of the line marking the currently zoomed area in the
     * navigator.
     *
     * @sample {highstock} stock/navigator/outline/
     *         2px blue outline
     *
     * @type {Highcharts.ColorType}
     */
    outlineColor: 'var(--highcharts-neutral-color-40)',
    /**
     * The width of the line marking the currently zoomed area in the
     * navigator.
     *
     * @see In styled mode, the outline stroke width is set with the
     *      `.highcharts-navigator-outline` class.
     *
     * @sample {highstock} stock/navigator/outline/
     *         2px blue outline
     *
     * @type    {number}
     */
    outlineWidth: 1,
    /**
     * Options for the navigator series. Available options are the same
     * as any series, documented at [plotOptions](#plotOptions.series)
     * and [series](#series).
     *
     * Unless data is explicitly defined on navigator.series, the data
     * is borrowed from the first series in the chart.
     *
     * Default series options for the navigator series are:
     * ```js
     * series: {
     *     type: 'areaspline',
     *     fillOpacity: 0.05,
     *     dataGrouping: {
     *         smoothed: true
     *     },
     *     lineWidth: 1,
     *     marker: {
     *         enabled: false
     *     }
     * }
     * ```
     *
     * @see In styled mode, the navigator series is styled with the
     *      `.highcharts-navigator-series` class.
     *
     * @sample {highstock} stock/navigator/series-data/
     *         Using a separate data set for the navigator
     * @sample {highstock} stock/navigator/series/
     *         A green navigator series
     *
     * @type {*|Array<*>|Highcharts.SeriesOptionsType|Array<Highcharts.SeriesOptionsType>}
     */
    series: {
        /**
         * The type of the navigator series.
         *
         * Heads up:
         * In column-type navigator, zooming is limited to at least one
         * point with its `pointRange`.
         *
         * @sample {highstock} stock/navigator/column/
         *         Column type navigator
         *
         * @type    {string}
         * @default {highstock} `areaspline` if defined, otherwise `line`
         * @default {gantt} gantt
         */
        type: (typeof seriesTypes.areaspline === 'undefined' ?
            'line' :
            'areaspline'),
        /**
         * The fill opacity of the navigator series.
         */
        fillOpacity: 0.05,
        /**
         * The pixel line width of the navigator series.
         */
        lineWidth: 1,
        /**
         * @ignore-option
         */
        compare: null,
        /**
         * @ignore-option
         */
        sonification: {
            enabled: false
        },
        /**
         * Unless data is explicitly defined, the data is borrowed from the
         * first series in the chart.
         *
         * @type      {Array<number|Array<number|string|null>|object|null>}
         * @product   highstock
         * @apioption navigator.series.data
         */
        /**
         * Data grouping options for the navigator series.
         *
         * @extends plotOptions.series.dataGrouping
         */
        dataGrouping: {
            approximation: 'average',
            enabled: true,
            groupPixelWidth: 2,
            // Replace smoothed property by anchors, #12455.
            firstAnchor: 'firstPoint',
            anchor: 'middle',
            lastAnchor: 'lastPoint',
            // Day and week differs from plotOptions.series.dataGrouping
            units: [
                ['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ['second', [1, 2, 5, 10, 15, 30]],
                ['minute', [1, 2, 5, 10, 15, 30]],
                ['hour', [1, 2, 3, 4, 6, 8, 12]],
                ['day', [1, 2, 3, 4]],
                ['week', [1, 2, 3]],
                ['month', [1, 3, 6]],
                ['year', null]
            ]
        },
        /**
         * Data label options for the navigator series. Data labels are
         * disabled by default on the navigator series.
         *
         * @extends plotOptions.series.dataLabels
         */
        dataLabels: {
            enabled: false,
            zIndex: 2 // #1839
        },
        id: 'highcharts-navigator-series',
        className: 'highcharts-navigator-series',
        /**
         * Sets the fill color of the navigator series.
         *
         * @type      {Highcharts.ColorType}
         * @apioption navigator.series.color
         */
        /**
         * Line color for the navigator series. Allows setting the color
         * while disallowing the default candlestick setting.
         *
         * @type {Highcharts.ColorString|null}
         */
        lineColor: null, // #4602
        marker: {
            enabled: false
        },
        /**
         * Since Highcharts Stock v8, default value is the same as default
         * `pointRange` defined for a specific type (e.g. `null` for
         * column type).
         *
         * In Highcharts Stock version < 8, defaults to 0.
         *
         * @type {number|null}
         * @apioption navigator.series.pointRange
         */
        /**
         * The threshold option. Setting it to 0 will make the default
         * navigator area series draw its area from the 0 value and up.
         *
         * @type {number|null}
         */
        threshold: null
    },
    /**
     * Enable or disable navigator sticking to right, while adding new
     * points. If `undefined`, the navigator sticks to the axis maximum only
     * if it was already at the maximum prior to adding points.
     *
     * @type      {boolean}
     * @default   undefined
     * @since 10.2.1
     * @sample {highstock} stock/navigator/sticktomax-false/
     * stickToMax set to false
     * @apioption navigator.stickToMax
     */
    /**
     * Options for the navigator X axis. Default series options for the
     * navigator xAxis are:
     * ```js
     * xAxis: {
     *     tickWidth: 0,
     *     lineWidth: 0,
     *     gridLineWidth: 1,
     *     tickPixelInterval: 200,
     *     labels: {
     *            align: 'left',
     *         style: {
     *             color: '#888'
     *         },
     *         x: 3,
     *         y: -4
     *     }
     * }
     * ```
     *
     * @extends   xAxis
     * @excluding linkedTo, maxZoom, minRange, opposite, range, scrollbar,
     *            showEmpty, maxRange
     */
    xAxis: {
        /**
         * Additional range on the right side of the xAxis. Works similar to
         * `xAxis.maxPadding`, but the value is set in terms of axis values,
         * percentage or pixels.
         *
         * If it's a number, it is interpreted as axis values, which in a
         * datetime axis equals milliseconds.
         *
         * If it's a percentage string, is interpreted as percentages of the
         * axis length. An overscroll of 50% will make a 100px axis 50px longer.
         *
         * If it's a pixel string, it is interpreted as a fixed pixel value, but
         * limited to 90% of the axis length.
         *
         * If it's undefined, the value is inherited from `xAxis.overscroll`.
         *
         * Can be set for both, main xAxis and navigator's xAxis.
         *
         * @type    {number | string | undefined}
         * @since   6.0.0
         * @apioption navigator.xAxis.overscroll
         */
        className: 'highcharts-navigator-xaxis',
        tickLength: 0,
        lineWidth: 0,
        gridLineColor: 'var(--highcharts-neutral-color-10)',
        id: 'navigator-x-axis',
        gridLineWidth: 1,
        tickPixelInterval: 200,
        labels: {
            align: 'left',
            /**
             * @type {Highcharts.CSSObject}
             */
            style: {
                /** @ignore */
                color: 'var(--highcharts-neutral-color-100)',
                /** @ignore */
                fontSize: '0.7em',
                /** @ignore */
                opacity: 0.6,
                /** @ignore */
                textOutline: '2px contrast'
            },
            x: 3,
            y: -4
        },
        crosshair: false
    },
    /**
     * Options for the navigator Y axis. Default series options for the
     * navigator yAxis are:
     * ```js
     * yAxis: {
     *     gridLineWidth: 0,
     *     startOnTick: false,
     *     endOnTick: false,
     *     minPadding: 0.1,
     *     maxPadding: 0.1,
     *     labels: {
     *         enabled: false
     *     },
     *     title: {
     *         text: null
     *     },
     *     tickWidth: 0
     * }
     * ```
     *
     * @extends   yAxis
     * @excluding height, linkedTo, maxZoom, minRange, ordinal, range,
     *            showEmpty, scrollbar, top, units, maxRange, minLength,
     *            maxLength, resize
     */
    yAxis: {
        className: 'highcharts-navigator-yaxis',
        gridLineWidth: 0,
        startOnTick: false,
        endOnTick: false,
        minPadding: 0.1,
        id: 'navigator-y-axis',
        maxPadding: 0.1,
        labels: {
            enabled: false
        },
        crosshair: false,
        title: {
            text: void 0
        },
        tickLength: 0,
        tickWidth: 0
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Navigator_NavigatorDefaults = (NavigatorDefaults);
/* *
 *
 *  API Options
 *
 * */
/**
 * Maximum range which can be set using the navigator's handles.
 * Opposite of [xAxis.minRange](#xAxis.minRange).
 *
 * @sample {highstock} stock/navigator/maxrange/
 *         Defined max and min range
 *
 * @type      {number}
 * @since     6.0.0
 * @product   highstock gantt
 * @apioption xAxis.maxRange
 */
(''); // Keeps doclets above in JS file

;// ./code/es5/es-modules/Core/Renderer/SVG/Symbols.js
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
 *  Functions
 *
 * */
/* eslint-disable require-jsdoc, valid-jsdoc */
/**
 * Arc symbol path.
 *
 * @param {number} cx
 * Center X
 * @param {number} cy
 * Center Y
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function arc(cx, cy, w, h, options) {
    var arc = [];
    if (options) {
        var start = options.start || 0,
            end = options.end || 0;
        var rx = pick(options.r, w), ry = pick(options.r, h || w), 
            // Subtract a small number to prevent cos and sin of start and end
            // from becoming equal on 360 arcs (#1561). See "Arc proximity"
            // tests at samples/unit-tests/svgrenderer/symbol/demo.js
            proximity = 0.0001, fullCircle = (Math.abs(end - start - 2 * Math.PI) <
                proximity);
        if (fullCircle) {
            start = Math.PI / 2;
            end = Math.PI * 2.5 - proximity;
        }
        var innerRadius = options.innerR,
            open_1 = pick(options.open,
            fullCircle),
            cosStart = fullCircle ? 0 : Math.cos(start),
            sinStart = fullCircle ? 1 : Math.sin(start),
            cosEnd = fullCircle ? 0 : Math.cos(end),
            sinEnd = fullCircle ? 1 : Math.sin(end), 
            // Proximity takes care of rounding errors around PI (#6971)
            longArc = pick(options.longArc,
            end - start - Math.PI < proximity ? 0 : 1);
        var arcSegment = [
                'A', // ArcTo
                rx, // X radius
                ry, // Y radius
                0, // Slanting
                longArc, // Long or short arc
                pick(options.clockwise, 1), // Clockwise
                // Use a static pixel offset for full circle (#21701)
                cx + (fullCircle ? 0.001 : rx * cosEnd),
                cy + ry * sinEnd
            ];
        arcSegment.params = { start: start, end: end, cx: cx, cy: cy }; // Memo for border radius
        arc.push([
            'M',
            cx + rx * cosStart,
            cy + ry * sinStart
        ], arcSegment);
        if (defined(innerRadius)) {
            arcSegment = [
                'A', // ArcTo
                innerRadius, // X radius
                innerRadius, // Y radius
                0, // Slanting
                longArc, // Long or short arc
                // Clockwise - opposite to the outer arc clockwise
                defined(options.clockwise) ? 1 - options.clockwise : 0,
                cx + (fullCircle ? -0.001 : innerRadius * cosStart),
                cy + innerRadius * sinStart
            ];
            // Memo for border radius
            arcSegment.params = {
                start: end,
                end: start,
                cx: cx,
                cy: cy
            };
            arc.push(open_1 ?
                [
                    'M',
                    cx + innerRadius * cosEnd,
                    cy + innerRadius * sinEnd
                ] : [
                'L',
                cx + innerRadius * cosEnd,
                cy + innerRadius * sinEnd
            ], arcSegment);
        }
        if (!open_1) {
            arc.push(['Z']);
        }
    }
    return arc;
}
/**
 * Callout shape used for default tooltips.
 *
 * @param {number} x
 * Center X
 * @param {number} y
 * Center Y
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function callout(x, y, w, h, options) {
    var arrowLength = 6,
        halfDistance = 6,
        r = Math.min((options === null || options === void 0 ? void 0 : options.r) || 0,
        w,
        h),
        safeDistance = r + halfDistance,
        anchorX = options === null || options === void 0 ? void 0 : options.anchorX,
        anchorY = (options === null || options === void 0 ? void 0 : options.anchorY) || 0;
    var path = roundedRect(x,
        y,
        w,
        h, { r: r });
    if (!isNumber(anchorX)) {
        return path;
    }
    // Do not render a connector, if anchor starts inside the label
    if (anchorX < w && anchorX > 0 && anchorY < h && anchorY > 0) {
        return path;
    }
    // Anchor on right side
    if (x + anchorX > w - safeDistance) {
        // Chevron
        if (anchorY > y + safeDistance &&
            anchorY < y + h - safeDistance) {
            path.splice(3, 1, ['L', x + w, anchorY - halfDistance], ['L', x + w + arrowLength, anchorY], ['L', x + w, anchorY + halfDistance], ['L', x + w, y + h - r]);
            // Simple connector
        }
        else {
            if (anchorX < w) { // Corner connector
                var isTopCorner = anchorY < y + safeDistance,
                    cornerY = isTopCorner ? y : y + h,
                    sliceStart = isTopCorner ? 2 : 5;
                path.splice(sliceStart, 0, ['L', anchorX, anchorY], ['L', x + w - r, cornerY]);
            }
            else { // Side connector
                path.splice(3, 1, ['L', x + w, h / 2], ['L', anchorX, anchorY], ['L', x + w, h / 2], ['L', x + w, y + h - r]);
            }
        }
        // Anchor on left side
    }
    else if (x + anchorX < safeDistance) {
        // Chevron
        if (anchorY > y + safeDistance &&
            anchorY < y + h - safeDistance) {
            path.splice(7, 1, ['L', x, anchorY + halfDistance], ['L', x - arrowLength, anchorY], ['L', x, anchorY - halfDistance], ['L', x, y + r]);
            // Simple connector
        }
        else {
            if (anchorX > 0) { // Corner connector
                var isTopCorner = anchorY < y + safeDistance,
                    cornerY = isTopCorner ? y : y + h,
                    sliceStart = isTopCorner ? 1 : 6;
                path.splice(sliceStart, 0, ['L', anchorX, anchorY], ['L', x + r, cornerY]);
            }
            else { // Side connector
                path.splice(7, 1, ['L', x, h / 2], ['L', anchorX, anchorY], ['L', x, h / 2], ['L', x, y + r]);
            }
        }
    }
    else if ( // Replace bottom
    anchorY > h &&
        anchorX < w - safeDistance) {
        path.splice(5, 1, ['L', anchorX + halfDistance, y + h], ['L', anchorX, y + h + arrowLength], ['L', anchorX - halfDistance, y + h], ['L', x + r, y + h]);
    }
    else if ( // Replace top
    anchorY < 0 &&
        anchorX > safeDistance) {
        path.splice(1, 1, ['L', anchorX - halfDistance, y], ['L', anchorX, y - arrowLength], ['L', anchorX + halfDistance, y], ['L', w - r, y]);
    }
    return path;
}
/**
 * Circle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function circle(x, y, w, h) {
    // Return a full arc
    return arc(x + w / 2, y + h / 2, w / 2, h / 2, {
        start: Math.PI * 0.5,
        end: Math.PI * 2.5,
        open: false
    });
}
/**
 * Diamond symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function diamond(x, y, w, h) {
    return [
        ['M', x + w / 2, y],
        ['L', x + w, y + h / 2],
        ['L', x + w / 2, y + h],
        ['L', x, y + h / 2],
        ['Z']
    ];
}
// #15291
/**
 * Rect symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function rect(x, y, w, h, options) {
    if (options === null || options === void 0 ? void 0 : options.r) {
        return roundedRect(x, y, w, h, options);
    }
    return [
        ['M', x, y],
        ['L', x + w, y],
        ['L', x + w, y + h],
        ['L', x, y + h],
        ['Z']
    ];
}
/**
 * Rounded rectangle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function roundedRect(x, y, w, h, options) {
    var r = (options === null || options === void 0 ? void 0 : options.r) || 0;
    return [
        ['M', x + r, y],
        ['L', x + w - r, y], // Top side
        ['A', r, r, 0, 0, 1, x + w, y + r], // Top-right corner
        ['L', x + w, y + h - r], // Right side
        ['A', r, r, 0, 0, 1, x + w - r, y + h], // Bottom-right corner
        ['L', x + r, y + h], // Bottom side
        ['A', r, r, 0, 0, 1, x, y + h - r], // Bottom-left corner
        ['L', x, y + r], // Left side
        ['A', r, r, 0, 0, 1, x + r, y],
        ['Z'] // Top-left corner
    ];
}
/**
 * Triangle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function triangle(x, y, w, h) {
    return [
        ['M', x + w / 2, y],
        ['L', x + w, y + h],
        ['L', x, y + h],
        ['Z']
    ];
}
/**
 * Inverted triangle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
function triangleDown(x, y, w, h) {
    return [
        ['M', x, y],
        ['L', x + w, y],
        ['L', x + w / 2, y + h],
        ['Z']
    ];
}
var Symbols = {
    /**
     * Arc symbol path.
     *
     * @param {number} cx
     * Center X
     * @param {number} cy
     * Center Y
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @param {Highcharts.SymbolOptions} [options]
     * Options
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    arc: arc,
    /**
     * Callout shape used for default tooltips.
     *
     * @param {number} cx
     * Center X
     * @param {number} cy
     * Center Y
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @param {Highcharts.SymbolOptions} [options]
     * Options
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    callout: callout,
    /**
     * Circle symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} y
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    circle: circle,
    /**
     * Diamond symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} y
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    diamond: diamond,
    /**
     * Rect symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} y
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @param {Highcharts.SymbolOptions} [options]
     * Options
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    rect: rect,
    /**
     * Rounded rectangle symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} y
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @param {Highcharts.SymbolOptions} [options]
     * Options
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    roundedRect: roundedRect,
    /**
     * Rect symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} y
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @param {Highcharts.SymbolOptions} [options]
     * Options
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    square: rect,
    /**
     * Triangle symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} y
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    triangle: triangle,
    /**
     * Inverted triangle symbol path.
     *
     * @param {number} x
     * X coordinate
     * @param {number} number
     * Y coordinate
     * @param {number} w
     * Width
     * @param {number} h
     * Height
     * @return {Highcharts.SVGPathArray}
     * Path
     */
    'triangle-down': triangleDown
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var SVG_Symbols = (Symbols);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @interface Highcharts.SymbolOptions
 */ /**
* @name anchorX
* @type {number|undefined}
*/ /**
* @name anchorY
* @type {number|undefined}
*/ /**
* @name backgroundSize
* @type {"contain"|"cover"|"within"}
*/ /**
* @name clockwise
* @type {0|1|undefined}
*/ /**
* @name context
* @type {string|undefined}
*/ /**
* @name end
* @type {number|undefined}
*/ /**
* @name height
* @type {number|undefined}
*/ /**
* @name innerR
* @type {number|undefined}
*/ /**
* @name longArc
* @type {0|1|undefined}
*/ /**
* @name open
* @type {boolean|undefined}
*/ /**
* @name r
* @type {number|undefined}
*/ /**
* @name start
* @type {number|undefined}
*/ /**
* @name width
* @type {number|undefined}
*/ /**
* @name x
* @type {number|undefined}
*/ /**
* @name y
* @type {number|undefined}
*/
''; // Keeps doclets above in file

;// ./code/es5/es-modules/Stock/Navigator/NavigatorSymbols.js
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

var NavigatorSymbols_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


/* *
 *
 *  Constants
 *
 * */
/**
 * Draw one of the handles on the side of the zoomed range in the navigator.
 * @internal
 */
function navigatorHandle(_x, _y, width, height, options) {
    if (options === void 0) { options = {}; }
    var halfWidth = options.width ? options.width / 2 : width,
        markerPosition = 1.5,
        r = relativeLength(options.borderRadius || 0,
        Math.min(halfWidth * 2,
        height));
    height = options.height || height;
    return NavigatorSymbols_spreadArray([
        ['M', -markerPosition, height / 2 - 3.5],
        ['L', -markerPosition, height / 2 + 4.5],
        ['M', markerPosition - 1, height / 2 - 3.5],
        ['L', markerPosition - 1, height / 2 + 4.5]
    ], SVG_Symbols.rect(-halfWidth - 1, 0.5, halfWidth * 2 + 1, height, { r: r }), true);
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var NavigatorSymbols = {
    'navigator-handle': navigatorHandle
};
/** @internal */
/* harmony default export */ var Navigator_NavigatorSymbols = (NavigatorSymbols);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGRenderer"],"commonjs":["highcharts","SVGRenderer"],"commonjs2":["highcharts","SVGRenderer"],"root":["Highcharts","SVGRenderer"]}
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_ = __webpack_require__(540);
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_);
;// ./code/es5/es-modules/Stock/Utilities/StockUtilities.js
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
 *  Functions
 *
 * */
/**
 * Sets the chart.fixedRange to the specified value. If the value is larger
 * than actual range, sets it to the maximum possible range. (#20327)
 *
 * @internal
 * @function Highcharts.StockChart#setFixedRange
 * @param {number|undefined} range
 *        Range to set in axis units.
 */
function setFixedRange(range) {
    var xAxis = this.xAxis[0];
    if (defined(xAxis.dataMax) &&
        defined(xAxis.dataMin) &&
        range) {
        this.fixedRange = Math.min(range, xAxis.dataMax - xAxis.dataMin);
    }
    else {
        this.fixedRange = range;
    }
}
/** @internal */
var StockUtilities = {
    setFixedRange: setFixedRange
};
/** @internal */
/* harmony default export */ var Utilities_StockUtilities = (StockUtilities);

;// ./code/es5/es-modules/Stock/Navigator/NavigatorComposition.js
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


var defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;

var composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;





var NavigatorComposition_setFixedRange = Utilities_StockUtilities.setFixedRange;

/* *
 *
 *  Variables
 *
 * */
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function NavigatorComposition_compose(ChartClass, AxisClass, SeriesClass) {
    NavigatorAxisComposition.compose(AxisClass);
    if (pushUnique(composed, 'Navigator')) {
        ChartClass.prototype.setFixedRange = NavigatorComposition_setFixedRange;
        extend((highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default()).prototype.symbols, Navigator_NavigatorSymbols);
        extend(defaultOptions, { navigator: Navigator_NavigatorDefaults });
        addEvent(SeriesClass, 'afterUpdate', onSeriesAfterUpdate);
    }
}
/**
 * Handle updating series
 * @internal
 */
function onSeriesAfterUpdate() {
    if (this.chart.navigator && !this.options.isInternal) {
        this.chart.navigator.setBaseSeries(null, false);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var NavigatorComposition = {
    compose: NavigatorComposition_compose
};
/** @internal */
/* harmony default export */ var Navigator_NavigatorComposition = (NavigatorComposition);

;// ./code/es5/es-modules/Core/Axis/ScrollbarAxis.js
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


var ScrollbarAxis_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;

/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ScrollbarAxis;
(function (ScrollbarAxis) {
    /* *
     *
     *  Variables
     *
     * */
    var Scrollbar;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Attaches to axis events to create scrollbars if enabled.
     *
     * @internal
     *
     * @param {Highcharts.Axis} AxisClass
     * Axis class to extend.
     *
     * @param {Highcharts.Scrollbar} ScrollbarClass
     * Scrollbar class to use.
     */
    function compose(AxisClass, ScrollbarClass) {
        if (pushUnique(ScrollbarAxis_composed, 'Axis.Scrollbar')) {
            Scrollbar = ScrollbarClass;
            addEvent(AxisClass, 'afterGetOffset', onAxisAfterGetOffset);
            addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            addEvent(AxisClass, 'afterRender', onAxisAfterRender);
        }
    }
    ScrollbarAxis.compose = compose;
    /** @internal */
    function getExtremes(axis) {
        var _a,
            _b,
            _c,
            _d,
            _e,
            _f,
            _g,
            _h;
        var axisMin = pick((_a = axis.options) === null || _a === void 0 ? void 0 : _a.min,
            axis.min);
        var axisMax = pick((_b = axis.options) === null || _b === void 0 ? void 0 : _b.max,
            axis.max);
        return {
            axisMin: axisMin,
            axisMax: axisMax,
            scrollMin: defined(axis.dataMin) ?
                Math.min(axisMin, (_c = axis.min) !== null && _c !== void 0 ? _c : Infinity, axis.dataMin, (_d = axis.threshold) !== null && _d !== void 0 ? _d : Infinity) : axisMin,
            scrollMax: (_f = (_e = axis.treeGrid) === null || _e === void 0 ? void 0 : _e.adjustedMax) !== null && _f !== void 0 ? _f : (defined(axis.dataMax) ?
                Math.max(axisMax, (_g = axis.max) !== null && _g !== void 0 ? _g : -Infinity, axis.dataMax, (_h = axis.threshold) !== null && _h !== void 0 ? _h : -Infinity) :
                axisMax)
        };
    }
    /**
     * Make space for a scrollbar.
     * @internal
     */
    function onAxisAfterGetOffset() {
        var axis = this,
            scrollbar = axis.scrollbar,
            opposite = scrollbar && !scrollbar.options.opposite,
            index = axis.horiz ? 2 : opposite ? 3 : 1;
        if (scrollbar) {
            // Reset scrollbars offsets
            axis.chart.scrollbarsOffsets = [0, 0];
            axis.chart.axisOffset[index] +=
                scrollbar.size + (scrollbar.options.margin || 0);
        }
    }
    /**
     * Wrap axis initialization and create scrollbar if enabled.
     * @internal
     */
    function onAxisAfterInit() {
        var _a,
            _b;
        var axis = this;
        if ((_b = (_a = axis.options) === null || _a === void 0 ? void 0 : _a.scrollbar) === null || _b === void 0 ? void 0 : _b.enabled) {
            // Predefined options:
            axis.options.scrollbar.vertical = !axis.horiz;
            axis.options.startOnTick = axis.options.endOnTick = false;
            axis.scrollbar = new Scrollbar(axis.chart.renderer, axis.options.scrollbar, axis.chart);
            addEvent(axis.scrollbar, 'changed', function (e) {
                var _a = getExtremes(axis),
                    axisMin = _a.axisMin,
                    axisMax = _a.axisMax,
                    unitedMin = _a.scrollMin,
                    unitedMax = _a.scrollMax,
                    minPX = axis.toPixels(unitedMin),
                    maxPX = axis.toPixels(unitedMax),
                    rangePX = maxPX - minPX;
                var to,
                    from;
                // #12834, scroll when show/hide series, wrong extremes
                if (!defined(axisMin) || !defined(axisMax)) {
                    return;
                }
                if ((axis.horiz && !axis.reversed) ||
                    (!axis.horiz && axis.reversed)) {
                    to = Math.min(unitedMax, axis.toValue(minPX + rangePX * this.to));
                    from = Math.max(unitedMin, axis.toValue(minPX + rangePX * this.from));
                }
                else {
                    // Y-values in browser are reversed, but this also
                    // applies for reversed horizontal axis:
                    to = Math.min(unitedMax, axis.toValue(minPX + rangePX * (1 - this.from)));
                    from = Math.max(unitedMin, axis.toValue(minPX + rangePX * (1 - this.to)));
                }
                if (this.shouldUpdateExtremes(e.DOMType)) {
                    // #17977, set animation to undefined instead of true
                    var animate = e.DOMType === 'mousemove' ||
                            e.DOMType === 'touchmove' ? false : void 0;
                    axis.setExtremes(correctFloat(from), correctFloat(to), true, animate, e);
                }
                else {
                    // When live redraw is disabled, don't change extremes
                    // Only change the position of the scrollbar thumb
                    this.setRange(this.from, this.to);
                }
            });
        }
    }
    /**
     * Wrap rendering axis, and update scrollbar if one is created.
     * @internal
     */
    function onAxisAfterRender() {
        var axis = this,
            _a = getExtremes(axis),
            scrollMin = _a.scrollMin,
            scrollMax = _a.scrollMax,
            scrollbar = axis.scrollbar,
            offset = (axis.axisTitleMargin || 0) + (axis.titleOffset || 0),
            scrollbarsOffsets = axis.chart.scrollbarsOffsets,
            axisMargin = axis.options.margin || 0;
        var offsetsIndex,
            from,
            to;
        if (scrollbar && scrollbarsOffsets) {
            if (axis.horiz) {
                // Reserve space for labels/title
                if (!axis.opposite) {
                    scrollbarsOffsets[1] += offset;
                }
                scrollbar.position(axis.left, (axis.top +
                    axis.height +
                    2 +
                    scrollbarsOffsets[1] -
                    (axis.opposite ? axisMargin : 0)), axis.width, axis.height);
                // Next scrollbar should reserve space for margin (if set)
                if (!axis.opposite) {
                    scrollbarsOffsets[1] += axisMargin;
                }
                offsetsIndex = 1;
            }
            else {
                // Reserve space for labels/title
                if (axis.opposite) {
                    scrollbarsOffsets[0] += offset;
                }
                var xPosition = void 0;
                if (!scrollbar.options.opposite) {
                    xPosition = axis.opposite ? 0 : axisMargin;
                }
                else {
                    xPosition = axis.left +
                        axis.width +
                        2 +
                        scrollbarsOffsets[0] -
                        (axis.opposite ? 0 : axisMargin);
                }
                scrollbar.position(xPosition, axis.top, axis.width, axis.height);
                // Next scrollbar should reserve space for margin (if set)
                if (axis.opposite) {
                    scrollbarsOffsets[0] += axisMargin;
                }
                offsetsIndex = 0;
            }
            scrollbarsOffsets[offsetsIndex] += scrollbar.size +
                (scrollbar.options.margin || 0);
            if (isNaN(scrollMin) ||
                isNaN(scrollMax) ||
                !defined(axis.min) ||
                !defined(axis.max) ||
                (defined(axis.dataMin) && // #23335
                    axis.dataMin === axis.dataMax // #10733
                )) {
                // Default action: when data extremes are the same or there is
                // not extremes on the axis, but scrollbar exists, make it
                // full size
                scrollbar.setRange(0, 1);
            }
            else if (axis.min === axis.max) { // #20359
                // When the extremes are the same, set the scrollbar to a point
                // within the extremes range. Utilize pointRange to perform the
                // calculations. (#20359)
                var interval = axis.pointRange / (axis.dataMax +
                        1);
                from = interval * axis.min;
                to = interval * (axis.max + 1);
                scrollbar.setRange(from, to);
            }
            else {
                from = (axis.toPixels(axis.min) - axis.toPixels(scrollMin)) /
                    (axis.toPixels(scrollMax) - axis.toPixels(scrollMin));
                to = (axis.toPixels(axis.max) - axis.toPixels(scrollMin)) /
                    (axis.toPixels(scrollMax) - axis.toPixels(scrollMin));
                if ((axis.horiz && !axis.reversed) ||
                    (!axis.horiz && axis.reversed)) {
                    scrollbar.setRange(from, to);
                }
                else {
                    // Inverse vertical axis
                    scrollbar.setRange(1 - to, 1 - from);
                }
            }
        }
    }
})(ScrollbarAxis || (ScrollbarAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Axis_ScrollbarAxis = (ScrollbarAxis);

;// ./code/es5/es-modules/Stock/Scrollbar/ScrollbarDefaults.js
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
 *  Constant
 *
 * */
/**
 *
 * The scrollbar is a means of panning over the X axis of a stock chart.
 * Scrollbars can also be applied to other types of axes.
 *
 * Another approach to scrollable charts is the [chart.scrollablePlotArea](
 * https://api.highcharts.com/highcharts/chart.scrollablePlotArea) option that
 * is especially suitable for simpler cartesian charts on mobile.
 *
 * In styled mode, all the presentational options for the
 * scrollbar are replaced by the classes `.highcharts-scrollbar-thumb`,
 * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
 * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
 *
 * @sample stock/yaxis/inverted-bar-scrollbar/
 *         A scrollbar on a simple bar chart
 *
 * @product highstock gantt
 * @optionparent scrollbar
 */
var ScrollbarDefaults = {
    /**
     * The height of the scrollbar. If `buttonsEnabled` is true , the height
     * also applies to the width of the scroll arrows so that they are always
     * squares.
     *
     * @sample stock/scrollbar/style/
     *         Non-default height
     *
     * @type    {number}
     */
    height: 10,
    /**
     * The border rounding radius of the bar.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    barBorderRadius: 5,
    /**
     * The corner radius of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    buttonBorderRadius: 0,
    /**
     * Enable or disable the buttons at the end of the scrollbar.
     *
     * @since 11.0.0
     */
    buttonsEnabled: false,
    /**
     * Enable or disable the scrollbar.
     *
     * @sample stock/scrollbar/enabled/
     *         Disable the scrollbar, only use navigator
     *
     * @type      {boolean}
     * @default   true
     * @apioption scrollbar.enabled
     */
    /**
     * Whether to redraw the main chart as the scrollbar or the navigator
     * zoomed window is moved. Defaults to `true` for modern browsers and
     * `false` for legacy IE browsers as well as mobile devices. This option
     * works regardless of whether the scrollbar is enabled or not.
     *
     * @sample stock/scrollbar/liveredraw
     *         Setting live redraw to false
     *
     * @type  {boolean}
     * @since 1.3
     */
    liveRedraw: void 0,
    /**
     * The margin between the scrollbar and its axis when the scrollbar is
     * applied directly to an axis, or the navigator in case that is enabled.
     * Defaults to 10 for axis, 3 for navigator.
     *
     * @type {number|undefined}
     */
    margin: void 0,
    /**
     * The minimum width of the scrollbar.
     *
     * @since 1.2.5
     */
    minWidth: 6,
    /** @ignore-option */
    opposite: true,
    /**
     * Whether to show or hide the scrollbar when the scrolled content is
     * zoomed out to it full extent.
     *
     * @type      {boolean}
     * @default   true
     * @apioption scrollbar.showFull
     */
    step: 0.2,
    /**
     * The z index of the scrollbar group.
     */
    zIndex: 3,
    /**
     * The background color of the scrollbar itself.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorType}
     */
    barBackgroundColor: 'var(--highcharts-neutral-color-20)',
    /**
     * The width of the bar's border.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    barBorderWidth: 0,
    /**
     * The color of the scrollbar's border.
     *
     * @type {Highcharts.ColorType}
     */
    barBorderColor: 'var(--highcharts-neutral-color-20)',
    /**
     * The color of the small arrow inside the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorType}
     */
    buttonArrowColor: 'var(--highcharts-neutral-color-80)',
    /**
     * The color of scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorType}
     */
    buttonBackgroundColor: 'var(--highcharts-neutral-color-10)',
    /**
     * The color of the border of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorType}
     */
    buttonBorderColor: 'var(--highcharts-neutral-color-20)',
    /**
     * The border width of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    buttonBorderWidth: 1,
    /**
     * The color of the small rifles in the middle of the scrollbar.
     *
     * @type {Highcharts.ColorType}
     */
    rifleColor: 'none',
    /**
     * The color of the track background.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorType}
     */
    trackBackgroundColor: 'rgba(255, 255, 255, 0.001)', // #18922
    /**
     * The color of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorType}
     */
    trackBorderColor: 'var(--highcharts-neutral-color-20)',
    /**
     * The corner radius of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    trackBorderRadius: 5,
    /**
     * The width of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    trackBorderWidth: 1
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Scrollbar_ScrollbarDefaults = (ScrollbarDefaults);

;// ./code/es5/es-modules/Stock/Scrollbar/Scrollbar.js
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


var Scrollbar_defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;

var Scrollbar_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;



/* *
 *
 *  Constants
 *
 * */
/* eslint-disable no-invalid-this, valid-jsdoc */
/**
 * A reusable scrollbar, internally used in Highcharts Stock's
 * navigator and optionally on individual axes.
 *
 * @internal
 * @class
 * @name Highcharts.Scrollbar
 * @param {Highcharts.SVGRenderer} renderer
 * @param {Highcharts.ScrollbarOptions} options
 * @param {Highcharts.Chart} chart
 */
var Scrollbar = /** @class */ (function () {
    /* *
     *
     *  Constructors
     *
     * */
    function Scrollbar(renderer, options, chart) {
        /* *
         *
         *  Properties
         *
         * */
        this._events = [];
        this.chartX = 0;
        this.chartY = 0;
        this.from = 0;
        this.scrollbarButtons = [];
        this.scrollbarLeft = 0;
        this.scrollbarStrokeWidth = 1;
        this.scrollbarTop = 0;
        this.size = 0;
        this.to = 0;
        this.trackBorderWidth = 1;
        this.x = 0;
        this.y = 0;
        this.init(renderer, options, chart);
    }
    /* *
     *
     *  Static Functions
     *
     * */
    Scrollbar.compose = function (AxisClass) {
        Axis_ScrollbarAxis.compose(AxisClass, Scrollbar);
        if (pushUnique(Scrollbar_composed, 'Scrollbar')) {
            extend(Scrollbar_defaultOptions, { scrollbar: Scrollbar_ScrollbarDefaults });
        }
    };
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @function Highcharts.swapXY
     *
     * @param {Highcharts.SVGPathArray} path
     * Path to be rotated.
     *
     * @param {boolean} [vertical]
     * If vertical scrollbar, swap x-y values.
     *
     * @return {Highcharts.SVGPathArray}
     * Rotated path.
     *
     * @requires modules/stock
     */
    Scrollbar.swapXY = function (path, vertical) {
        if (vertical) {
            path.forEach(function (seg) {
                var len = seg.length;
                var temp;
                for (var i = 0; i < len; i += 2) {
                    temp = seg[i + 1];
                    if (typeof temp === 'number') {
                        seg[i + 1] = seg[i + 2];
                        seg[i + 2] = temp;
                    }
                }
            });
        }
        return path;
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Set up the mouse and touch events for the Scrollbar
     *
     * @internal
     * @function Highcharts.Scrollbar#addEvents
     */
    Scrollbar.prototype.addEvents = function () {
        var buttonsOrder = this.options.inverted ? [1, 0] : [0, 1],
            buttons = this.scrollbarButtons,
            bar = this.scrollbarGroup.element,
            track = this.track.element,
            mouseDownHandler = this.mouseDownHandler.bind(this),
            mouseMoveHandler = this.mouseMoveHandler.bind(this),
            mouseUpHandler = this.mouseUpHandler.bind(this);
        var _events = [
                // Mouse events
                [
                    buttons[buttonsOrder[0]].element,
                    'click',
                    this.buttonToMinClick.bind(this)
                ],
                [
                    buttons[buttonsOrder[1]].element,
                    'click',
                    this.buttonToMaxClick.bind(this)
                ],
                [track, 'click',
            this.trackClick.bind(this)],
                [bar, 'mousedown',
            mouseDownHandler],
                [bar.ownerDocument, 'mousemove',
            mouseMoveHandler],
                [bar.ownerDocument, 'mouseup',
            mouseUpHandler],
                // Touch events
                [bar, 'touchstart',
            mouseDownHandler],
                [bar.ownerDocument, 'touchmove',
            mouseMoveHandler],
                [bar.ownerDocument, 'touchend',
            mouseUpHandler]
            ];
        // Add them all
        _events.forEach(function (args) {
            addEvent.apply(null, args);
        });
        this._events = _events;
    };
    Scrollbar.prototype.buttonToMaxClick = function (e) {
        var scroller = this;
        var range = ((scroller.to - scroller.from) *
                pick(scroller.options.step, 0.2));
        scroller.updatePosition(scroller.from + range, scroller.to + range);
        fireEvent(scroller, 'changed', {
            from: scroller.from,
            to: scroller.to,
            trigger: 'scrollbar',
            DOMEvent: e
        });
    };
    Scrollbar.prototype.buttonToMinClick = function (e) {
        var scroller = this;
        var range = correctFloat(scroller.to - scroller.from) *
                pick(scroller.options.step, 0.2);
        scroller.updatePosition(correctFloat(scroller.from - range), correctFloat(scroller.to - range));
        fireEvent(scroller, 'changed', {
            from: scroller.from,
            to: scroller.to,
            trigger: 'scrollbar',
            DOMEvent: e
        });
    };
    /**
     * Get normalized (0-1) cursor position over the scrollbar
     *
     * @internal
     * @function Highcharts.Scrollbar#cursorToScrollbarPosition
     *
     * @param  {*} normalizedEvent
     *         normalized event, with chartX and chartY values
     *
     * @return {Highcharts.Dictionary<number>}
     *         Local position {chartX, chartY}
     */
    Scrollbar.prototype.cursorToScrollbarPosition = function (normalizedEvent) {
        var scroller = this,
            options = scroller.options,
            minWidthDifference = options.minWidth > scroller.calculatedWidth ?
                options.minWidth :
                0; // `minWidth` distorts translation
            return {
                chartX: (normalizedEvent.chartX - scroller.x -
                    scroller.xOffset) /
                    (scroller.barWidth - minWidthDifference),
                chartY: (normalizedEvent.chartY - scroller.y -
                    scroller.yOffset) /
                    (scroller.barWidth - minWidthDifference)
            };
    };
    /**
     * Destroys allocated elements.
     *
     * @internal
     * @function Highcharts.Scrollbar#destroy
     */
    Scrollbar.prototype.destroy = function () {
        var scroller = this,
            navigator = scroller.chart.scroller;
        // Disconnect events added in addEvents
        scroller.removeEvents();
        // Destroy properties
        [
            'track',
            'scrollbarRifles',
            'scrollbar',
            'scrollbarGroup',
            'group'
        ].forEach(function (prop) {
            if (scroller[prop] && scroller[prop].destroy) {
                scroller[prop] = scroller[prop].destroy();
            }
        });
        // #6421, chart may have more scrollbars
        if (navigator && scroller === navigator.scrollbar) {
            navigator.scrollbar = null;
            // Destroy elements in collection
            destroyObjectProperties(navigator.scrollbarButtons);
        }
    };
    /**
     * Draw the scrollbar buttons with arrows
     *
     * @internal
     * @function Highcharts.Scrollbar#drawScrollbarButton
     * @param {number} index
     *        0 is left, 1 is right
     */
    Scrollbar.prototype.drawScrollbarButton = function (index) {
        var scroller = this,
            renderer = scroller.renderer,
            scrollbarButtons = scroller.scrollbarButtons,
            options = scroller.options,
            size = scroller.size,
            group = renderer.g().add(scroller.group);
        scrollbarButtons.push(group);
        if (options.buttonsEnabled) {
            // Create a rectangle for the scrollbar button
            var rect = renderer.rect()
                    .addClass('highcharts-scrollbar-button')
                    .add(group);
            // Presentational attributes
            if (!scroller.chart.styledMode) {
                rect.attr({
                    stroke: options.buttonBorderColor,
                    'stroke-width': options.buttonBorderWidth,
                    fill: options.buttonBackgroundColor
                });
            }
            // Place the rectangle based on the rendered stroke width
            rect.attr(rect.crisp({
                x: -0.5,
                y: -0.5,
                width: size,
                height: size,
                r: options.buttonBorderRadius
            }, rect.strokeWidth()));
            // Button arrow
            var arrow = renderer
                    .path(Scrollbar.swapXY([[
                        'M',
                        size / 2 + (index ? -1 : 1),
                        size / 2 - 3
                    ],
                [
                        'L',
                        size / 2 + (index ? -1 : 1),
                        size / 2 + 3
                    ],
                [
                        'L',
                        size / 2 + (index ? 2 : -2),
                        size / 2
                    ]],
                options.vertical))
                    .addClass('highcharts-scrollbar-arrow')
                    .add(scrollbarButtons[index]);
            if (!scroller.chart.styledMode) {
                arrow.attr({
                    fill: options.buttonArrowColor
                });
            }
        }
    };
    /**
     * @internal
     * @function Highcharts.Scrollbar#init
     * @param {Highcharts.SVGRenderer} renderer
     * @param {Highcharts.ScrollbarOptions} options
     * @param {Highcharts.Chart} chart
     */
    Scrollbar.prototype.init = function (renderer, options, chart) {
        var scroller = this;
        scroller.scrollbarButtons = [];
        scroller.renderer = renderer;
        scroller.userOptions = options;
        scroller.options = merge(Scrollbar_ScrollbarDefaults, Scrollbar_defaultOptions.scrollbar, options);
        scroller.options.margin = pick(scroller.options.margin, 10);
        scroller.chart = chart;
        // Backward compatibility
        scroller.size = pick(scroller.options.size, scroller.options.height);
        // Init
        if (options.enabled) {
            scroller.render();
            scroller.addEvents();
        }
    };
    Scrollbar.prototype.mouseDownHandler = function (e) {
        var _a;
        var scroller = this,
            normalizedEvent = ((_a = scroller.chart.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e,
            mousePosition = scroller.cursorToScrollbarPosition(normalizedEvent);
        scroller.chartX = mousePosition.chartX;
        scroller.chartY = mousePosition.chartY;
        scroller.initPositions = [scroller.from, scroller.to];
        scroller.grabbedCenter = true;
    };
    /**
     * Event handler for the mouse move event.
     * @internal
     */
    Scrollbar.prototype.mouseMoveHandler = function (e) {
        var _a;
        var scroller = this,
            normalizedEvent = ((_a = scroller.chart.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e,
            options = scroller.options,
            direction = options.vertical ?
                'chartY' : 'chartX',
            initPositions = scroller.initPositions || [];
        var scrollPosition,
            chartPosition,
            change;
        // In iOS, a mousemove event with e.pageX === 0 is fired when
        // holding the finger down in the center of the scrollbar. This
        // should be ignored.
        if (scroller.grabbedCenter &&
            // #4696, scrollbar failed on Android
            (!e.touches || e.touches[0][direction] !== 0)) {
            chartPosition = scroller.cursorToScrollbarPosition(normalizedEvent)[direction];
            scrollPosition = scroller[direction];
            change = chartPosition - scrollPosition;
            scroller.hasDragged = true;
            scroller.updatePosition(initPositions[0] + change, initPositions[1] + change);
            if (scroller.hasDragged) {
                fireEvent(scroller, 'changed', {
                    from: scroller.from,
                    to: scroller.to,
                    trigger: 'scrollbar',
                    DOMType: e.type,
                    DOMEvent: e
                });
            }
        }
    };
    /**
     * Event handler for the mouse up event.
     * @internal
     */
    Scrollbar.prototype.mouseUpHandler = function (e) {
        var scroller = this;
        if (scroller.hasDragged) {
            fireEvent(scroller, 'changed', {
                from: scroller.from,
                to: scroller.to,
                trigger: 'scrollbar',
                DOMType: e.type,
                DOMEvent: e
            });
        }
        scroller.grabbedCenter =
            scroller.hasDragged =
                scroller.chartX =
                    scroller.chartY = null;
    };
    /**
     * Position the scrollbar, method called from a parent with defined
     * dimensions.
     *
     * @internal
     * @function Highcharts.Scrollbar#position
     * @param {number} x
     *        x-position on the chart
     * @param {number} y
     *        y-position on the chart
     * @param {number} width
     *        width of the scrollbar
     * @param {number} height
     *        height of the scrollbar
     */
    Scrollbar.prototype.position = function (x, y, width, height) {
        var scroller = this,
            options = scroller.options,
            buttonsEnabled = options.buttonsEnabled,
            _a = options.margin,
            margin = _a === void 0 ? 0 : _a,
            vertical = options.vertical,
            method = scroller.rendered ? 'animate' : 'attr';
        var xOffset = height,
            yOffset = 0;
        // Make the scrollbar visible when it is repositioned, #15763.
        scroller.group.show();
        scroller.x = x;
        scroller.y = y + this.trackBorderWidth;
        scroller.width = width; // Width with buttons
        scroller.height = height;
        scroller.xOffset = xOffset;
        scroller.yOffset = yOffset;
        // If Scrollbar is a vertical type, swap options:
        if (vertical) {
            scroller.width = scroller.yOffset = width = yOffset = scroller.size;
            scroller.xOffset = xOffset = 0;
            scroller.yOffset = yOffset = buttonsEnabled ? scroller.size : 0;
            // Width without buttons
            scroller.barWidth = height - (buttonsEnabled ? width * 2 : 0);
            scroller.x = x = x + margin;
        }
        else {
            scroller.height = height = scroller.size;
            scroller.xOffset = xOffset = buttonsEnabled ? scroller.size : 0;
            // Width without buttons
            scroller.barWidth = width - (buttonsEnabled ? height * 2 : 0);
            scroller.y = scroller.y + margin;
        }
        // Set general position for a group:
        scroller.group[method]({
            translateX: x,
            translateY: scroller.y
        });
        // Resize background/track:
        scroller.track[method]({
            width: width,
            height: height
        });
        // Move right/bottom button to its place:
        scroller.scrollbarButtons[1][method]({
            translateX: vertical ? 0 : width - xOffset,
            translateY: vertical ? height - yOffset : 0
        });
    };
    /**
     * Removes the event handlers attached previously with addEvents.
     *
     * @internal
     * @function Highcharts.Scrollbar#removeEvents
     */
    Scrollbar.prototype.removeEvents = function () {
        this._events.forEach(function (args) {
            removeEvent.apply(null, args);
        });
        this._events.length = 0;
    };
    /**
     * Render scrollbar with all required items.
     *
     * @internal
     * @function Highcharts.Scrollbar#render
     */
    Scrollbar.prototype.render = function () {
        var scroller = this,
            renderer = scroller.renderer,
            options = scroller.options,
            size = scroller.size,
            styledMode = scroller.chart.styledMode,
            group = renderer.g('scrollbar')
                .attr({
                zIndex: options.zIndex
            })
                .hide() // Initially hide the scrollbar #15863
                .add();
        // Draw the scrollbar group
        scroller.group = group;
        // Draw the scrollbar track:
        scroller.track = renderer.rect()
            .addClass('highcharts-scrollbar-track')
            .attr({
            r: options.trackBorderRadius || 0,
            height: size,
            width: size
        }).add(group);
        if (!styledMode) {
            scroller.track.attr({
                fill: options.trackBackgroundColor,
                stroke: options.trackBorderColor,
                'stroke-width': options.trackBorderWidth
            });
        }
        var trackBorderWidth = scroller.trackBorderWidth =
                scroller.track.strokeWidth();
        scroller.track.attr({
            x: -crisp(0, trackBorderWidth),
            y: -crisp(0, trackBorderWidth)
        });
        // Draw the scrollbar itself
        scroller.scrollbarGroup = renderer.g().add(group);
        scroller.scrollbar = renderer.rect()
            .addClass('highcharts-scrollbar-thumb')
            .attr({
            height: size - trackBorderWidth,
            width: size - trackBorderWidth,
            r: options.barBorderRadius || 0
        }).add(scroller.scrollbarGroup);
        scroller.scrollbarRifles = renderer
            .path(Scrollbar.swapXY([
            ['M', -3, size / 4],
            ['L', -3, 2 * size / 3],
            ['M', 0, size / 4],
            ['L', 0, 2 * size / 3],
            ['M', 3, size / 4],
            ['L', 3, 2 * size / 3]
        ], options.vertical))
            .addClass('highcharts-scrollbar-rifles')
            .add(scroller.scrollbarGroup);
        if (!styledMode) {
            scroller.scrollbar.attr({
                fill: options.barBackgroundColor,
                stroke: options.barBorderColor,
                'stroke-width': options.barBorderWidth
            });
            scroller.scrollbarRifles.attr({
                stroke: options.rifleColor,
                'stroke-width': 1
            });
        }
        scroller.scrollbarStrokeWidth = scroller.scrollbar.strokeWidth();
        scroller.scrollbarGroup.translate(-crisp(0, scroller.scrollbarStrokeWidth), -crisp(0, scroller.scrollbarStrokeWidth));
        // Draw the buttons:
        scroller.drawScrollbarButton(0);
        scroller.drawScrollbarButton(1);
    };
    /**
     * Set scrollbar size, with a given scale.
     *
     * @internal
     * @function Highcharts.Scrollbar#setRange
     * @param {number} from
     *        scale (0-1) where bar should start
     * @param {number} to
     *        scale (0-1) where bar should end
     */
    Scrollbar.prototype.setRange = function (from, to) {
        var scroller = this,
            options = scroller.options,
            vertical = options.vertical,
            minWidth = options.minWidth,
            fullWidth = scroller.barWidth,
            method = (this.rendered &&
                !this.hasDragged &&
                !(this.chart.navigator && this.chart.navigator.hasDragged)) ? 'animate' : 'attr';
        if (!defined(fullWidth)) {
            return;
        }
        var toPX = fullWidth * Math.min(to, 1);
        var fromPX,
            newSize;
        from = Math.max(from, 0);
        fromPX = Math.ceil(fullWidth * from);
        scroller.calculatedWidth = newSize = correctFloat(toPX - fromPX);
        // We need to recalculate position, if minWidth is used
        if (newSize < minWidth) {
            fromPX = (fullWidth - minWidth + newSize) * from;
            newSize = minWidth;
        }
        var newPos = Math.floor(fromPX + scroller.xOffset + scroller.yOffset);
        var newRiflesPos = newSize / 2 - 0.5; // -0.5 -> rifle line width / 2
            // Store current position:
            scroller.from = from;
        scroller.to = to;
        if (!vertical) {
            scroller.scrollbarGroup[method]({
                translateX: newPos
            });
            scroller.scrollbar[method]({
                width: newSize
            });
            scroller.scrollbarRifles[method]({
                translateX: newRiflesPos
            });
            scroller.scrollbarLeft = newPos;
            scroller.scrollbarTop = 0;
        }
        else {
            scroller.scrollbarGroup[method]({
                translateY: newPos
            });
            scroller.scrollbar[method]({
                height: newSize
            });
            scroller.scrollbarRifles[method]({
                translateY: newRiflesPos
            });
            scroller.scrollbarTop = newPos;
            scroller.scrollbarLeft = 0;
        }
        if (newSize <= 12) {
            scroller.scrollbarRifles.hide();
        }
        else {
            scroller.scrollbarRifles.show();
        }
        // Show or hide the scrollbar based on the showFull setting
        if (options.showFull === false) {
            if (from <= 0 && to >= 1) {
                scroller.group.hide();
            }
            else {
                scroller.group.show();
            }
        }
        scroller.rendered = true;
    };
    /**
     * Checks if the extremes should be updated in response to a scrollbar
     * change event.
     *
     * @internal
     * @function Highcharts.Scrollbar#shouldUpdateExtremes
     */
    Scrollbar.prototype.shouldUpdateExtremes = function (eventType) {
        return (pick(this.options.liveRedraw, (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).svg &&
            !(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isTouchDevice &&
            !this.chart.boosted) ||
            // Mouseup always should change extremes
            eventType === 'mouseup' ||
            eventType === 'touchend' ||
            // Internal events
            !defined(eventType));
    };
    Scrollbar.prototype.trackClick = function (e) {
        var _a;
        var scroller = this;
        var normalizedEvent = ((_a = scroller.chart.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e,
            range = scroller.to - scroller.from,
            top = scroller.y + scroller.scrollbarTop,
            left = scroller.x + scroller.scrollbarLeft;
        if ((scroller.options.vertical && normalizedEvent.chartY > top) ||
            (!scroller.options.vertical && normalizedEvent.chartX > left)) {
            // On the top or on the left side of the track:
            scroller.updatePosition(scroller.from + range, scroller.to + range);
        }
        else {
            // On the bottom or the right side of the track:
            scroller.updatePosition(scroller.from - range, scroller.to - range);
        }
        fireEvent(scroller, 'changed', {
            from: scroller.from,
            to: scroller.to,
            trigger: 'scrollbar',
            DOMEvent: e
        });
    };
    /**
     * Update the scrollbar with new options
     *
     * @internal
     * @function Highcharts.Scrollbar#update
     * @param  {Highcharts.ScrollbarOptions} options
     */
    Scrollbar.prototype.update = function (options) {
        this.destroy();
        this.init(this.chart.renderer, merge(true, this.options, options), this.chart);
    };
    /**
     * Update position option in the Scrollbar, with normalized 0-1 scale
     *
     * @internal
     * @function Highcharts.Scrollbar#updatePosition
     * @param  {number} from
     * @param  {number} to
     */
    Scrollbar.prototype.updatePosition = function (from, to) {
        if (to > 1) {
            from = correctFloat(1 - correctFloat(to - from));
            to = 1;
        }
        if (from < 0) {
            to = correctFloat(to - from);
            from = 0;
        }
        this.from = from;
        this.to = to;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    Scrollbar.defaultOptions = Scrollbar_ScrollbarDefaults;
    return Scrollbar;
}());
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Scrollbar_Scrollbar = (Scrollbar);

;// ./code/es5/es-modules/Stock/Navigator/Navigator.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 * */

var __assign = (undefined && undefined.__assign) || function () {
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
var Navigator_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var Navigator_defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;

var Navigator_isTouchDevice = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isTouchDevice;




/* *
 *
 *  Functions
 *
 * */
/**
 * Finding the min or max of a set of variables where we don't know if they are
 * defined, is a pattern that is repeated several places in Highcharts. Consider
 * making this a global utility method.
 * @internal
 */
function numExt(extreme) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var numbers = [].filter.call(args,
        isNumber);
    if (numbers.length) {
        return Math[extreme].apply(0, numbers);
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Navigator class
 *
 * @internal
 * @class
 * @name Highcharts.Navigator
 *
 * @param {Highcharts.Chart} chart
 *        Chart object
 */
var Navigator = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Navigator(chart) {
        this.isDirty = false;
        this.scrollbarHeight = 0;
        this.init(chart);
    }
    /* *
     *
     *  Static Properties
     *
     * */
    Navigator.compose = function (ChartClass, AxisClass, SeriesClass) {
        Navigator_ChartNavigatorComposition.compose(ChartClass, Navigator);
        Navigator_NavigatorComposition.compose(ChartClass, AxisClass, SeriesClass);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Draw one of the handles on the side of the zoomed range in the navigator.
     *
     * @internal
     * @function Highcharts.Navigator#drawHandle
     *
     * @param {number} x
     *        The x center for the handle
     *
     * @param {number} index
     *        0 for left and 1 for right
     *
     * @param {boolean|undefined} inverted
     *        Flag for chart.inverted
     *
     * @param {string} verb
     *        Use 'animate' or 'attr'
     */
    Navigator.prototype.drawHandle = function (x, index, inverted, verb) {
        var navigator = this,
            height = navigator.navigatorOptions.handles.height;
        // Place it
        navigator.handles[index][verb](inverted ? {
            translateX: Math.round(navigator.left + navigator.height / 2),
            translateY: Math.round(navigator.top + parseInt(x, 10) + 0.5 - height)
        } : {
            translateX: Math.round(navigator.left + parseInt(x, 10)),
            translateY: Math.round(navigator.top + navigator.height / 2 - height / 2 - 1)
        });
    };
    /**
     * Render outline around the zoomed range
     *
     * @internal
     * @function Highcharts.Navigator#drawOutline
     *
     * @param {number} zoomedMin
     *        in pixels position where zoomed range starts
     *
     * @param {number} zoomedMax
     *        in pixels position where zoomed range ends
     *
     * @param {boolean|undefined} inverted
     *        flag if chart is inverted
     *
     * @param {string} verb
     *        use 'animate' or 'attr'
     */
    Navigator.prototype.drawOutline = function (zoomedMin, zoomedMax, inverted, verb) {
        var navigator = this, maskInside = navigator.navigatorOptions.maskInside, outlineWidth = navigator.outline.strokeWidth(), halfOutline = outlineWidth / 2, outlineCorrection = (outlineWidth % 2) / 2, // #5800
            scrollButtonSize = navigator.scrollButtonSize, navigatorSize = navigator.size, navigatorTop = navigator.top, height = navigator.height, lineTop = navigatorTop - halfOutline, lineBtm = navigatorTop + height;
        var left = navigator.left,
            verticalMin,
            path;
        if (inverted) {
            verticalMin = navigatorTop + zoomedMax + outlineCorrection;
            zoomedMax = navigatorTop + zoomedMin + outlineCorrection;
            path = [
                [
                    'M',
                    left + height,
                    navigatorTop - scrollButtonSize - outlineCorrection
                ],
                // Top right of zoomed range
                ['L', left + height, verticalMin],
                ['L', left, verticalMin], // Top left of z.r.
                ['M', left, zoomedMax], // Bottom left of z.r.
                ['L', left + height, zoomedMax], // Bottom right of z.r.
                [
                    'L',
                    left + height,
                    navigatorTop + navigatorSize + scrollButtonSize
                ]
            ];
            if (maskInside) {
                path.push(
                // Upper left of zoomed range
                ['M', left + height, verticalMin - halfOutline], 
                // Upper right of z.r.
                [
                    'L',
                    left + height,
                    zoomedMax + halfOutline
                ]);
            }
        }
        else {
            left -= scrollButtonSize;
            zoomedMin += left + scrollButtonSize - outlineCorrection;
            zoomedMax += left + scrollButtonSize - outlineCorrection;
            path = [
                // Left
                ['M', left, lineTop],
                // Upper left of zoomed range
                ['L', zoomedMin, lineTop],
                // Lower left of z.r.
                ['L', zoomedMin, lineBtm],
                // Lower right of z.r.
                ['M', zoomedMax, lineBtm],
                // Upper right of z.r.
                ['L', zoomedMax, lineTop],
                // Right
                [
                    'L',
                    left + navigatorSize + scrollButtonSize * 2,
                    lineTop
                ]
            ];
            if (maskInside) {
                path.push(
                // Upper left of zoomed range
                ['M', zoomedMin - halfOutline, lineTop], 
                // Upper right of z.r.
                ['L', zoomedMax + halfOutline, lineTop]);
            }
        }
        navigator.outline[verb]({
            d: path
        });
    };
    /**
     * Render outline around the zoomed range
     *
     * @internal
     * @function Highcharts.Navigator#drawMasks
     *
     * @param {number} zoomedMin
     *        in pixels position where zoomed range starts
     *
     * @param {number} zoomedMax
     *        in pixels position where zoomed range ends
     *
     * @param {boolean|undefined} inverted
     *        flag if chart is inverted
     *
     * @param {string} verb
     *        use 'animate' or 'attr'
     */
    Navigator.prototype.drawMasks = function (zoomedMin, zoomedMax, inverted, verb) {
        var navigator = this,
            left = navigator.left,
            top = navigator.top,
            navigatorHeight = navigator.height;
        var height,
            width,
            x,
            y;
        // Determine rectangle position & size
        // According to (non)inverted position:
        if (inverted) {
            x = [left, left, left];
            y = [top, top + zoomedMin, top + zoomedMax];
            width = [navigatorHeight, navigatorHeight, navigatorHeight];
            height = [
                zoomedMin,
                zoomedMax - zoomedMin,
                navigator.size - zoomedMax
            ];
        }
        else {
            x = [left, left + zoomedMin, left + zoomedMax];
            y = [top, top, top];
            width = [
                zoomedMin,
                zoomedMax - zoomedMin,
                navigator.size - zoomedMax
            ];
            height = [navigatorHeight, navigatorHeight, navigatorHeight];
        }
        navigator.shades.forEach(function (shade, i) {
            shade[verb]({
                x: x[i],
                y: y[i],
                width: width[i],
                height: height[i]
            });
        });
    };
    /**
     * Generate and update DOM elements for a navigator:
     *
     * - main navigator group
     *
     * - all shades
     *
     * - outline
     *
     * - handles
     *
     * @internal
     * @function Highcharts.Navigator#renderElements
     */
    Navigator.prototype.renderElements = function () {
        var _a,
            _b,
            _c;
        var navigator = this,
            navigatorOptions = navigator.navigatorOptions,
            maskInside = navigatorOptions.maskInside,
            chart = navigator.chart,
            inverted = chart.inverted,
            renderer = chart.renderer,
            mouseCursor = {
                cursor: inverted ? 'ns-resize' : 'ew-resize'
            }, 
            // Create the main navigator group
            navigatorGroup = (_a = navigator.navigatorGroup) !== null && _a !== void 0 ? _a : (navigator.navigatorGroup = renderer
                .g('navigator')
                .attr({
                zIndex: 8,
                visibility: 'hidden'
            })
                .add());
        // Create masks, each mask will get events and fill:
        [
            !maskInside,
            maskInside,
            !maskInside
        ].forEach(function (hasMask, index) {
            var _a;
            var shade = (_a = navigator.shades[index]) !== null && _a !== void 0 ? _a : (navigator.shades[index] = renderer.rect()
                    .addClass('highcharts-navigator-mask' +
                    (index === 1 ? '-inside' : '-outside'))
                    .add(navigatorGroup));
            if (!chart.styledMode) {
                shade.attr({
                    fill: hasMask ? navigatorOptions.maskFill : 'rgba(0,0,0,0)'
                });
                if (index === 1) {
                    shade.css(mouseCursor);
                }
            }
        });
        // Create the outline:
        if (!navigator.outline) {
            navigator.outline = renderer.path()
                .addClass('highcharts-navigator-outline')
                .add(navigatorGroup);
        }
        if (!chart.styledMode) {
            navigator.outline.attr({
                'stroke-width': navigatorOptions.outlineWidth,
                stroke: navigatorOptions.outlineColor
            });
        }
        // Create the handles:
        if ((_b = navigatorOptions.handles) === null || _b === void 0 ? void 0 : _b.enabled) {
            var redrawHandles_1 = false;
            var handlesOptions_1 = navigatorOptions.handles,
                height_1 = handlesOptions_1.height,
                width_1 = handlesOptions_1.width;
            [0, 1].forEach(function (index) {
                var _a,
                    _b;
                var newSymbolName = handlesOptions_1.symbols[index];
                redrawHandles_1 = redrawHandles_1 ||
                    (((_a = navigator.handles[index]) === null || _a === void 0 ? void 0 : _a.symbolName) !== newSymbolName);
                // First render of handles or update of handle symbol
                if (redrawHandles_1) {
                    (_b = navigator.handles[index]) === null || _b === void 0 ? void 0 : _b.destroy();
                    navigator.handles[index] = renderer.symbol(newSymbolName, -width_1 / 2 - 1, 0, width_1, height_1, handlesOptions_1);
                    // Z index is 6 for right handle, 7 for left. Can't be 10,
                    // because of the tooltip in inverted chart (#2908).
                    navigator.handles[index].attr({ zIndex: 7 - index })
                        .addClass('highcharts-navigator-handle ' +
                        'highcharts-navigator-handle-' +
                        ['left', 'right'][index]).add(navigatorGroup);
                }
                if (chart.inverted) {
                    navigator.handles[index].attr({
                        rotation: 90,
                        rotationOriginX: Math.floor(-width_1 / 2),
                        rotationOriginY: (height_1 + width_1) / 2
                    });
                }
                if (!chart.styledMode) {
                    navigator.handles[index]
                        .attr({
                        fill: handlesOptions_1.backgroundColor,
                        stroke: handlesOptions_1.borderColor,
                        'stroke-width': handlesOptions_1.lineWidth,
                        width: handlesOptions_1.width,
                        height: handlesOptions_1.height,
                        x: -width_1 / 2 - 1,
                        y: 0
                    })
                        .css(mouseCursor);
                }
            });
            if (redrawHandles_1) {
                (_c = navigator.partsEventsToUnbind) === null || _c === void 0 ? void 0 : _c.forEach(function (unbind) {
                    unbind();
                });
                navigator.partsEventsToUnbind = Navigator_spreadArray(Navigator_spreadArray([], navigator.getPartsEvents('mousedown'), true), navigator.getPartsEvents('touchstart'), true);
            }
        }
    };
    /**
     * Update navigator
     *
     * @internal
     * @function Highcharts.Navigator#update
     *
     * @param {Highcharts.NavigatorOptions} options
     *        Options to merge in when updating navigator
     */
    Navigator.prototype.update = function (options, redraw) {
        var _a,
            _b;
        var _this = this;
        var _c,
            _d;
        if (redraw === void 0) { redraw = false; }
        var chart = this.chart,
            invertedUpdate = chart.options.chart.inverted !==
                ((_c = chart.scrollbar) === null || _c === void 0 ? void 0 : _c.options.vertical);
        merge(true, chart.options.navigator, options);
        this.navigatorOptions = chart.options.navigator || {};
        this.setOpposite();
        // Revert to destroy/init for navigator/scrollbar enabled toggle
        if (defined(options.enabled) || invertedUpdate) {
            this.destroy();
            this.navigatorEnabled = options.enabled || this.navigatorEnabled;
            return this.init(chart);
        }
        if (this.navigatorEnabled) {
            this.isDirty = true;
            if (options.adaptToUpdatedData === false) {
                this.baseSeries.forEach(function (series) {
                    removeEvent(series, 'updatedData', _this.updatedDataHandler);
                }, this);
            }
            if (options.adaptToUpdatedData) {
                this.baseSeries.forEach(function (series) {
                    series.eventsToUnbind.push(addEvent(series, 'updatedData', _this.updatedDataHandler));
                }, this);
            }
            // Update navigator series
            if (options.series || options.baseSeries) {
                this.setBaseSeries(void 0, false);
            }
            // Update navigator axis
            if (options.height || options.xAxis || options.yAxis) {
                this.height = (_d = options.height) !== null && _d !== void 0 ? _d : this.height;
                var offsets = this.getXAxisOffsets();
                this.xAxis.update(__assign(__assign({}, options.xAxis), (_a = { offsets: offsets }, _a[chart.inverted ? 'width' : 'height'] = this.height, _a[chart.inverted ? 'height' : 'width'] = void 0, _a)), false);
                this.yAxis.update(__assign(__assign({}, options.yAxis), (_b = {}, _b[chart.inverted ? 'width' : 'height'] = this.height, _b)), false);
            }
        }
        if (redraw) {
            chart.redraw();
        }
    };
    /**
     * Render the navigator
     *
     * @internal
     * @function Highcharts.Navigator#render
     * @param {number} min
     *        X axis value minimum
     * @param {number} max
     *        X axis value maximum
     * @param {number} [pxMin]
     *        Pixel value minimum
     * @param {number} [pxMax]
     *        Pixel value maximum
     */
    Navigator.prototype.render = function (min, max, pxMin, pxMax) {
        var _a;
        var navigator = this,
            chart = navigator.chart,
            xAxis = navigator.xAxis,
            pointRange = xAxis.pointRange || 0,
            scrollbarXAxis = xAxis.navigatorAxis.fake ? chart.xAxis[0] : xAxis,
            navigatorEnabled = navigator.navigatorEnabled,
            rendered = navigator.rendered,
            inverted = chart.inverted,
            minRange = chart.xAxis[0].minRange,
            maxRange = chart.xAxis[0].options.maxRange,
            scrollButtonSize = navigator.scrollButtonSize;
        var navigatorWidth,
            scrollbarLeft,
            scrollbarTop,
            scrollbarHeight = navigator.scrollbarHeight,
            navigatorSize,
            verb;
        // Don't redraw while moving the handles (#4703).
        if (this.hasDragged && !defined(pxMin)) {
            return;
        }
        if (this.isDirty) {
            // Update DOM navigator elements
            this.renderElements();
        }
        min = correctFloat(min - pointRange / 2);
        max = correctFloat(max + pointRange / 2);
        // Don't render the navigator until we have data (#486, #4202, #5172).
        if (!isNumber(min) || !isNumber(max)) {
            // However, if navigator was already rendered, we may need to resize
            // it. For example hidden series, but visible navigator (#6022).
            if (rendered) {
                pxMin = 0;
                pxMax = pick(xAxis.width, scrollbarXAxis.width);
            }
            else {
                return;
            }
        }
        navigator.left = pick(xAxis.left, 
        // In case of scrollbar only, without navigator
        chart.plotLeft + scrollButtonSize +
            (inverted ? chart.plotWidth : 0));
        var zoomedMax = navigator.size = navigatorSize = pick(xAxis.len, (inverted ? chart.plotHeight : chart.plotWidth) -
                2 * scrollButtonSize);
        if (inverted) {
            navigatorWidth = scrollbarHeight;
        }
        else {
            navigatorWidth = navigatorSize + 2 * scrollButtonSize;
        }
        // Get the pixel position of the handles
        pxMin = pick(pxMin, xAxis.toPixels(min, true));
        pxMax = pick(pxMax, xAxis.toPixels(max, true));
        // Verify (#1851, #2238)
        if (!isNumber(pxMin) || Math.abs(pxMin) === Infinity) {
            pxMin = 0;
            pxMax = navigatorWidth;
        }
        // Are we below the minRange? (#2618, #6191)
        var newMin = xAxis.toValue(pxMin,
            true),
            newMax = xAxis.toValue(pxMax,
            true),
            currentRange = Math.abs(correctFloat(newMax - newMin));
        if (defined(minRange) && currentRange < minRange) {
            if (this.grabbedLeft) {
                pxMin = xAxis.toPixels(newMax - minRange - pointRange, true);
            }
            else if (this.grabbedRight) {
                pxMax = xAxis.toPixels(newMin + minRange + pointRange, true);
            }
        }
        else if (defined(maxRange) &&
            correctFloat(currentRange - pointRange) > maxRange) {
            if (this.grabbedLeft) {
                pxMin = xAxis.toPixels(newMax - maxRange - pointRange, true);
            }
            else if (this.grabbedRight) {
                pxMax = xAxis.toPixels(newMin + maxRange + pointRange, true);
            }
        }
        // Handles are allowed to cross, but never exceed the plot area
        navigator.zoomedMax = clamp(Math.max(pxMin, pxMax), 0, zoomedMax);
        navigator.zoomedMin = clamp(navigator.fixedWidth ?
            navigator.zoomedMax - navigator.fixedWidth :
            Math.min(pxMin, pxMax), 0, zoomedMax);
        navigator.range = navigator.zoomedMax - navigator.zoomedMin;
        zoomedMax = Math.round(navigator.zoomedMax);
        var zoomedMin = Math.round(navigator.zoomedMin);
        if (navigatorEnabled) {
            navigator.navigatorGroup.attr({
                visibility: 'inherit'
            });
            // Place elements
            verb = rendered && !navigator.hasDragged ? 'animate' : 'attr';
            navigator.drawMasks(zoomedMin, zoomedMax, inverted, verb);
            navigator.drawOutline(zoomedMin, zoomedMax, inverted, verb);
            if ((_a = navigator.navigatorOptions.handles) === null || _a === void 0 ? void 0 : _a.enabled) {
                navigator.drawHandle(zoomedMin, 0, inverted, verb);
                navigator.drawHandle(zoomedMax, 1, inverted, verb);
            }
        }
        if (navigator.scrollbar) {
            if (inverted) {
                scrollbarTop = navigator.top - scrollButtonSize;
                scrollbarLeft = navigator.left - scrollbarHeight +
                    (navigatorEnabled || !scrollbarXAxis.opposite ? 0 :
                        // Multiple axes has offsets:
                        (scrollbarXAxis.titleOffset || 0) +
                            // Self margin from the axis.title
                            scrollbarXAxis.axisTitleMargin);
                scrollbarHeight = navigatorSize + 2 * scrollButtonSize;
            }
            else {
                scrollbarTop = navigator.top + (navigatorEnabled ?
                    navigator.height :
                    -scrollbarHeight);
                scrollbarLeft = navigator.left - scrollButtonSize;
            }
            // Reposition scrollbar
            navigator.scrollbar.position(scrollbarLeft, scrollbarTop, navigatorWidth, scrollbarHeight);
            // Keep scale 0-1
            navigator.scrollbar.setRange(
            // Use real value, not rounded because range can be very small
            // (#1716)
            navigator.zoomedMin / (navigatorSize || 1), navigator.zoomedMax / (navigatorSize || 1));
        }
        navigator.rendered = true;
        this.isDirty = false;
        fireEvent(this, 'afterRender');
    };
    /**
     * Set up the mouse and touch events for the navigator. Shades and handles
     * events are added inside the `renderElements` method by calling the
     * `getPartsEvents` method.
     *
     * @internal
     * @function Highcharts.Navigator#addMouseEvents
     */
    Navigator.prototype.addMouseEvents = function () {
        var navigator = this,
            chart = navigator.chart,
            container = chart.container;
        var eventsToUnbind = [];
        var mouseMoveHandler,
            mouseUpHandler;
        /**
         * Create mouse events' handlers.
         * Make them as separate functions to enable wrapping them:
         */
        navigator.mouseMoveHandler = mouseMoveHandler = function (e) {
            navigator.onMouseMove(e);
        };
        navigator.mouseUpHandler = mouseUpHandler = function (e) {
            navigator.onMouseUp(e);
        };
        eventsToUnbind.push(
        // Add mouse move and mouseup events. These are bind to doc/div,
        // because Navigator.grabbedSomething flags are stored in mousedown
        // events
        addEvent(chart.renderTo, 'mousemove', mouseMoveHandler), addEvent(container.ownerDocument, 'mouseup', mouseUpHandler), 
        // Touch events
        addEvent(chart.renderTo, 'touchmove', mouseMoveHandler), addEvent(container.ownerDocument, 'touchend', mouseUpHandler));
        navigator.eventsToUnbind = eventsToUnbind;
        // Data events
        if (navigator.series && navigator.series[0]) {
            eventsToUnbind.push(addEvent(navigator.series[0].xAxis, 'foundExtremes', function () {
                var _a;
                (_a = chart.navigator) === null || _a === void 0 ? void 0 : _a.modifyNavigatorAxisExtremes();
            }));
        }
    };
    /**
     * Generate events for handles and masks
     *
     * @internal
     * @function Highcharts.Navigator#getPartsEvents
     *
     * @param {string} eventName
     *        Event name handler, 'mousedown' or 'touchstart'
     *
     * @return {Array<Function>}
     *         An array of functions to remove navigator functions from the
     *         events again.
     */
    Navigator.prototype.getPartsEvents = function (eventName) {
        var navigator = this,
            events = [];
        ['shades', 'handles'].forEach(function (name) {
            navigator[name].forEach(function (navigatorItem, index) {
                events.push(addEvent(navigatorItem.element, eventName, function (e) {
                    navigator["" + name + "Mousedown"](e, index);
                }));
            });
        });
        return events;
    };
    /**
     * Mousedown on a shaded mask, either:
     *
     * - will be stored for future drag&drop
     *
     * - will directly shift to a new range
     *
     * @internal
     * @function Highcharts.Navigator#shadesMousedown
     *
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     *
     * @param {number} index
     *        Index of a mask in Navigator.shades array
     */
    Navigator.prototype.shadesMousedown = function (e, index) {
        var _a,
            _b,
            _c;
        e = ((_a = this.chart.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e;
        var navigator = this,
            chart = navigator.chart,
            xAxis = navigator.xAxis,
            zoomedMin = navigator.zoomedMin,
            navigatorSize = navigator.size,
            range = navigator.range;
        var navigatorPosition = navigator.left,
            chartX = e.chartX,
            fixedMax,
            fixedMin,
            ext,
            left;
        // For inverted chart, swap some options:
        if (chart.inverted) {
            chartX = e.chartY;
            navigatorPosition = navigator.top;
        }
        if (index === 1) {
            // Store information for drag&drop
            navigator.grabbedCenter = chartX;
            navigator.fixedWidth = range;
            navigator.dragOffset = chartX - zoomedMin;
        }
        else {
            // Shift the range by clicking on shaded areas
            left = chartX - navigatorPosition - range / 2;
            if (index === 0) {
                left = Math.max(0, left);
            }
            else if (index === 2 && left + range >= navigatorSize) {
                left = navigatorSize - range;
                if (navigator.reversedExtremes) {
                    // #7713
                    left -= range;
                    fixedMin = (_b = navigator.getUnionExtremes()) === null || _b === void 0 ? void 0 : _b.dataMin;
                }
                else {
                    // #2293, #3543
                    fixedMax = (_c = navigator.getUnionExtremes()) === null || _c === void 0 ? void 0 : _c.dataMax;
                }
            }
            if (left !== zoomedMin) { // It has actually moved
                navigator.fixedWidth = range; // #1370
                ext = xAxis.navigatorAxis.toFixedRange(left, left + range, fixedMin, fixedMax);
                if (defined(ext.min)) { // #7411
                    fireEvent(this, 'setRange', {
                        min: Math.min(ext.min, ext.max),
                        max: Math.max(ext.min, ext.max),
                        redraw: true,
                        eventArguments: {
                            trigger: 'navigator'
                        }
                    });
                }
            }
        }
    };
    /**
     * Mousedown on a handle mask.
     * Will store necessary information for drag&drop.
     *
     * @internal
     * @function Highcharts.Navigator#handlesMousedown
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     * @param {number} index
     *        Index of a handle in Navigator.handles array
     */
    Navigator.prototype.handlesMousedown = function (e, index) {
        var _a;
        e = ((_a = this.chart.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e;
        var navigator = this,
            chart = navigator.chart,
            baseXAxis = chart.xAxis[0], 
            // For reversed axes, min and max are changed,
            // so the other extreme should be stored
            reverse = navigator.reversedExtremes;
        if (index === 0) {
            // Grab the left handle
            navigator.grabbedLeft = true;
            navigator.otherHandlePos = navigator.zoomedMax;
            navigator.fixedExtreme = reverse ? baseXAxis.min : baseXAxis.max;
        }
        else {
            // Grab the right handle
            navigator.grabbedRight = true;
            navigator.otherHandlePos = navigator.zoomedMin;
            navigator.fixedExtreme = reverse ? baseXAxis.max : baseXAxis.min;
        }
        chart.setFixedRange(void 0);
    };
    /**
     * Mouse move event based on x/y mouse position.
     *
     * @internal
     * @function Highcharts.Navigator#onMouseMove
     *
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     */
    Navigator.prototype.onMouseMove = function (e) {
        var _a,
            _b;
        var navigator = this,
            chart = navigator.chart,
            navigatorSize = navigator.navigatorSize,
            range = navigator.range,
            dragOffset = navigator.dragOffset,
            inverted = chart.inverted;
        var left = navigator.left,
            chartX;
        // In iOS, a mousemove event with e.pageX === 0 is fired when holding
        // the finger down in the center of the scrollbar. This should be
        // ignored.
        if (!e.touches || e.touches[0].pageX !== 0) { // #4696
            e = ((_a = chart.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e;
            chartX = e.chartX;
            // Swap some options for inverted chart
            if (inverted) {
                left = navigator.top;
                chartX = e.chartY;
            }
            // Drag left handle or top handle
            if (navigator.grabbedLeft) {
                navigator.hasDragged = true;
                navigator.render(0, 0, chartX - left, navigator.otherHandlePos);
                // Drag right handle or bottom handle
            }
            else if (navigator.grabbedRight) {
                navigator.hasDragged = true;
                navigator.render(0, 0, navigator.otherHandlePos, chartX - left);
                // Drag scrollbar or open area in navigator
            }
            else if (navigator.grabbedCenter && dragOffset) {
                navigator.hasDragged = true;
                if (chartX < dragOffset) { // Outside left
                    chartX = dragOffset;
                    // Outside right
                }
                else if (chartX >
                    navigatorSize + dragOffset - range) {
                    chartX = navigatorSize + dragOffset - range;
                }
                navigator.render(0, 0, chartX - dragOffset, chartX - dragOffset + range);
            }
            if (navigator.hasDragged &&
                pick((_b = navigator.scrollbarOptions) === null || _b === void 0 ? void 0 : _b.liveRedraw, 
                // By default, don't run live redraw on touch
                // devices or if the chart is in boost.
                !Navigator_isTouchDevice &&
                    !this.chart.boosted)) {
                e.DOMType = e.type;
                setTimeout(function () {
                    navigator.onMouseUp(e);
                }, 0);
            }
        }
    };
    /**
     * Mouse up event based on x/y mouse position.
     *
     * @internal
     * @function Highcharts.Navigator#onMouseUp
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     */
    Navigator.prototype.onMouseUp = function (e) {
        var _a;
        var navigator = this,
            chart = navigator.chart,
            xAxis = navigator.xAxis,
            scrollbar = navigator.scrollbar,
            DOMEvent = e.DOMEvent || e,
            inverted = chart.inverted,
            verb = navigator.rendered && !navigator.hasDragged ?
                'animate' : 'attr';
        var zoomedMax,
            zoomedMin,
            unionExtremes,
            fixedMin,
            fixedMax,
            ext;
        if (
        // MouseUp is called for both, navigator and scrollbar (that order),
        // which causes calling afterSetExtremes twice. Prevent first call
        // by checking if scrollbar is going to set new extremes (#6334)
        (navigator.hasDragged && (!scrollbar || !scrollbar.hasDragged)) ||
            e.trigger === 'scrollbar') {
            unionExtremes = navigator.getUnionExtremes();
            // When dragging one handle, make sure the other one doesn't change
            if (navigator.zoomedMin === navigator.otherHandlePos) {
                fixedMin = navigator.fixedExtreme;
            }
            else if (navigator.zoomedMax === navigator.otherHandlePos) {
                fixedMax = navigator.fixedExtreme;
            }
            // Snap to right edge (#4076)
            if (navigator.zoomedMax === navigator.size) {
                fixedMax = navigator.reversedExtremes ?
                    unionExtremes.dataMin :
                    unionExtremes.dataMax;
            }
            // Snap to left edge (#7576)
            if (navigator.zoomedMin === 0) {
                fixedMin = navigator.reversedExtremes ?
                    unionExtremes.dataMax :
                    unionExtremes.dataMin;
            }
            ext = xAxis.navigatorAxis.toFixedRange(navigator.zoomedMin, navigator.zoomedMax, fixedMin, fixedMax);
            if (defined(ext.min)) {
                fireEvent(this, 'setRange', {
                    min: Math.min(ext.min, ext.max),
                    max: Math.max(ext.min, ext.max),
                    redraw: true,
                    animation: navigator.hasDragged ? false : null,
                    eventArguments: {
                        trigger: 'navigator',
                        triggerOp: 'navigator-drag',
                        DOMEvent: DOMEvent // #1838
                    }
                });
            }
        }
        if (e.DOMType !== 'mousemove' &&
            e.DOMType !== 'touchmove') {
            navigator.grabbedLeft = navigator.grabbedRight =
                navigator.grabbedCenter = navigator.fixedWidth =
                    navigator.fixedExtreme = navigator.otherHandlePos =
                        navigator.hasDragged = navigator.dragOffset = null;
        }
        // Update position of navigator shades, outline and handles (#12573)
        if (navigator.navigatorEnabled &&
            isNumber(navigator.zoomedMin) &&
            isNumber(navigator.zoomedMax)) {
            zoomedMin = Math.round(navigator.zoomedMin);
            zoomedMax = Math.round(navigator.zoomedMax);
            if (navigator.shades) {
                navigator.drawMasks(zoomedMin, zoomedMax, inverted, verb);
            }
            if (navigator.outline) {
                navigator.drawOutline(zoomedMin, zoomedMax, inverted, verb);
            }
            if (((_a = navigator.navigatorOptions.handles) === null || _a === void 0 ? void 0 : _a.enabled) &&
                Object.keys(navigator.handles).length ===
                    navigator.handles.length) {
                navigator.drawHandle(zoomedMin, 0, inverted, verb);
                navigator.drawHandle(zoomedMax, 1, inverted, verb);
            }
        }
    };
    /**
     * Removes the event handlers attached previously with addEvents.
     *
     * @internal
     * @function Highcharts.Navigator#removeEvents
     */
    Navigator.prototype.removeEvents = function () {
        var _a;
        (_a = this.eventsToUnbind) === null || _a === void 0 ? void 0 : _a.forEach(function (unbind) {
            unbind();
        });
        this.eventsToUnbind = void 0;
        this.removeBaseSeriesEvents();
    };
    /**
     * Remove data events.
     *
     * @internal
     * @function Highcharts.Navigator#removeBaseSeriesEvents
     */
    Navigator.prototype.removeBaseSeriesEvents = function () {
        var baseSeries = this.baseSeries || [];
        if (this.navigatorEnabled && baseSeries[0]) {
            if (this.navigatorOptions.adaptToUpdatedData !== false) {
                baseSeries.forEach(function (series) {
                    removeEvent(series, 'updatedData', this.updatedDataHandler);
                }, this);
            }
            // We only listen for extremes-events on the first baseSeries
            if (baseSeries[0].xAxis) {
                removeEvent(baseSeries[0].xAxis, 'foundExtremes', this.modifyBaseAxisExtremes);
            }
        }
    };
    /**
     * Calculate the navigator xAxis offsets
     *
     * @internal
     */
    Navigator.prototype.getXAxisOffsets = function () {
        return (this.chart.inverted ?
            [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] :
            [0, -this.scrollButtonSize, 0, this.scrollButtonSize]);
    };
    /**
     * Initialize the Navigator object
     *
     * @internal
     * @function Highcharts.Navigator#init
     */
    Navigator.prototype.init = function (chart) {
        var _a,
            _b,
            _c,
            _d;
        var chartOptions = chart.options,
            navigatorOptions = chartOptions.navigator || {},
            navigatorEnabled = navigatorOptions.enabled,
            scrollbarOptions = chartOptions.scrollbar || {},
            scrollbarEnabled = scrollbarOptions.enabled,
            height = navigatorEnabled && navigatorOptions.height || 0,
            scrollbarHeight = scrollbarEnabled && scrollbarOptions.height || 0,
            scrollButtonSize = scrollbarOptions.buttonsEnabled && scrollbarHeight || 0;
        this.handles = [];
        this.shades = [];
        this.chart = chart;
        this.setBaseSeries();
        this.height = height;
        this.scrollbarHeight = scrollbarHeight;
        this.scrollButtonSize = scrollButtonSize;
        this.scrollbarEnabled = scrollbarEnabled;
        this.navigatorEnabled = !!navigatorEnabled;
        this.navigatorOptions = navigatorOptions;
        this.scrollbarOptions = scrollbarOptions;
        this.setOpposite();
        var navigator = this,
            baseSeries = navigator.baseSeries,
            xAxisIndex = chart.xAxis.length,
            yAxisIndex = chart.yAxis.length,
            baseXaxis = baseSeries && baseSeries[0] && baseSeries[0].xAxis ||
                chart.xAxis[0] || { options: {} };
        chart.isDirtyBox = true;
        if (navigator.navigatorEnabled) {
            var offsets = this.getXAxisOffsets();
            // An x axis is required for scrollbar also
            navigator.xAxis = new (highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default())(chart, merge({
                // Inherit base xAxis' break, ordinal options and overscroll
                breaks: baseXaxis.options.breaks,
                ordinal: baseXaxis.options.ordinal,
                overscroll: baseXaxis.options.overscroll
            }, navigatorOptions.xAxis, {
                type: 'datetime',
                yAxis: (_a = navigatorOptions.yAxis) === null || _a === void 0 ? void 0 : _a.id,
                index: xAxisIndex,
                isInternal: true,
                offset: 0,
                keepOrdinalPadding: true, // #2436
                startOnTick: false,
                endOnTick: false,
                // Inherit base xAxis' padding when ordinal is false (#16915).
                minPadding: baseXaxis.options.ordinal ? 0 :
                    baseXaxis.options.minPadding,
                maxPadding: baseXaxis.options.ordinal ? 0 :
                    baseXaxis.options.maxPadding,
                zoomEnabled: false
            }, chart.inverted ? {
                offsets: offsets,
                width: height
            } : {
                offsets: offsets,
                height: height
            }), 'xAxis');
            navigator.yAxis = new (highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default())(chart, merge(navigatorOptions.yAxis, {
                alignTicks: false,
                offset: 0,
                index: yAxisIndex,
                isInternal: true,
                reversed: pick((navigatorOptions.yAxis &&
                    navigatorOptions.yAxis.reversed), (chart.yAxis[0] && chart.yAxis[0].reversed), false), // #14060
                zoomEnabled: false
            }, chart.inverted ? {
                width: height
            } : {
                height: height
            }), 'yAxis');
            navigator.xAxis.clippable = false;
            navigator.yAxis.clippable = false;
            // If we have a base series, initialize the navigator series
            if (baseSeries ||
                ((_b = navigatorOptions.series) === null || _b === void 0 ? void 0 : _b.data) ||
                ((_c = navigatorOptions.series) === null || _c === void 0 ? void 0 : _c.dataTable)) {
                navigator.updateNavigatorSeries(false);
                // If not, set up an event to listen for added series
            }
            else if (chart.series.length === 0) {
                navigator.unbindRedraw = addEvent(chart, 'beforeRedraw', function () {
                    var _a;
                    // We've got one, now add it as base
                    if (chart.series.length > 0 && !navigator.series) {
                        navigator.setBaseSeries();
                        (_a = navigator.unbindRedraw) === null || _a === void 0 ? void 0 : _a.call(navigator); // Reset
                    }
                });
            }
            navigator.reversedExtremes = (chart.inverted && !navigator.xAxis.reversed) || (!chart.inverted && navigator.xAxis.reversed);
            // Render items, so we can bind events to them:
            navigator.renderElements();
            // Add mouse events
            navigator.addMouseEvents();
            // In case of scrollbar only, fake an x axis to get translation
        }
        else {
            navigator.xAxis = {
                chart: chart,
                navigatorAxis: {
                    fake: true
                },
                translate: function (value, reverse) {
                    var axis = chart.xAxis[0], ext = axis.getExtremes(), scrollTrackWidth = axis.len - 2 * scrollButtonSize, min = numExt('min', axis.options.min, ext.dataMin), valueRange = numExt('max', axis.options.max, ext.dataMax) - min;
                    return reverse ?
                        // From pixel to value
                        (value * valueRange / scrollTrackWidth) + min :
                        // From value to pixel
                        scrollTrackWidth * (value - min) / valueRange;
                },
                toPixels: function (value) {
                    return this.translate(value);
                },
                toValue: function (value) {
                    return this.translate(value, true);
                }
            };
            navigator.xAxis.navigatorAxis.axis = navigator.xAxis;
            navigator.xAxis.navigatorAxis.toFixedRange = (NavigatorAxisComposition.prototype.toFixedRange.bind(navigator.xAxis.navigatorAxis));
        }
        // Initialize the scrollbar
        if ((_d = chart.options.scrollbar) === null || _d === void 0 ? void 0 : _d.enabled) {
            var options = merge(chart.options.scrollbar, { vertical: chart.inverted });
            if (!isNumber(options.margin)) {
                options.margin = chart.inverted ? -3 : 3;
            }
            chart.scrollbar = navigator.scrollbar = new Scrollbar_Scrollbar(chart.renderer, options, chart);
            addEvent(navigator.scrollbar, 'changed', function (e) {
                var _a;
                var range = navigator.size,
                    to = range * this.to,
                    from = range * this.from;
                navigator.hasDragged = (_a = navigator.scrollbar) === null || _a === void 0 ? void 0 : _a.hasDragged;
                navigator.render(0, 0, from, to);
                if (this.shouldUpdateExtremes(e.DOMType)) {
                    setTimeout(function () {
                        navigator.onMouseUp(e);
                    });
                }
            });
        }
        // Add data events
        navigator.addBaseSeriesEvents();
        // Add redraw events
        navigator.addChartEvents();
    };
    /**
     * Set the opposite property on navigator
     *
     * @internal
     */
    Navigator.prototype.setOpposite = function () {
        var navigatorOptions = this.navigatorOptions,
            navigatorEnabled = this.navigatorEnabled,
            chart = this.chart;
        this.opposite = pick(navigatorOptions.opposite, Boolean(!navigatorEnabled && chart.inverted)); // #6262
    };
    /**
     * Get the union data extremes of the chart - the outer data extremes of the
     * base X axis and the navigator axis.
     *
     * @internal
     * @function Highcharts.Navigator#getUnionExtremes
     */
    Navigator.prototype.getUnionExtremes = function (returnFalseOnNoBaseSeries) {
        var baseAxis = this.chart.xAxis[0],
            time = this.chart.time,
            navAxis = this.xAxis,
            navAxisOptions = navAxis.options,
            baseAxisOptions = baseAxis.options;
        var ret;
        if (!returnFalseOnNoBaseSeries || baseAxis.dataMin !== null) {
            ret = {
                dataMin: pick(// #4053
                time.parse(navAxisOptions === null || navAxisOptions === void 0 ? void 0 : navAxisOptions.min), numExt('min', time.parse(baseAxisOptions.min), baseAxis.dataMin, navAxis.dataMin, navAxis.min)),
                dataMax: pick(time.parse(navAxisOptions === null || navAxisOptions === void 0 ? void 0 : navAxisOptions.max), numExt('max', time.parse(baseAxisOptions.max), baseAxis.dataMax, navAxis.dataMax, navAxis.max))
            };
        }
        return ret;
    };
    /**
     * Set the base series and update the navigator series from this. With a bit
     * of modification we should be able to make this an API method to be called
     * from the outside
     *
     * @internal
     * @function Highcharts.Navigator#setBaseSeries
     * @param {Highcharts.SeriesOptionsType} [baseSeriesOptions]
     *        Additional series options for a navigator
     * @param {boolean} [redraw]
     *        Whether to redraw after update.
     */
    Navigator.prototype.setBaseSeries = function (baseSeriesOptions, redraw) {
        var _a;
        var chart = this.chart,
            baseSeries = this.baseSeries = [];
        baseSeriesOptions = (baseSeriesOptions ||
            ((_a = chart.options.navigator) === null || _a === void 0 ? void 0 : _a.baseSeries) ||
            (chart.series.length ?
                // Find the first non-navigator series (#8430)
                find(chart.series, function (s) { return (!s.options.isInternal); }).index :
                0));
        // Iterate through series and add the ones that should be shown in
        // navigator.
        (chart.series || []).forEach(function (series, i) {
            if (
            // Don't include existing nav series
            !series.options.isInternal &&
                (series.options.showInNavigator ||
                    (i === baseSeriesOptions ||
                        series.options.id === baseSeriesOptions) &&
                        series.options.showInNavigator !== false)) {
                baseSeries.push(series);
            }
        });
        // When run after render, this.xAxis already exists
        if (this.xAxis && !this.xAxis.navigatorAxis.fake) {
            this.updateNavigatorSeries(true, redraw);
        }
    };
    /**
     * Update series in the navigator from baseSeries, adding new if does not
     * exist.
     *
     * @internal
     * @function Highcharts.Navigator.updateNavigatorSeries
     */
    Navigator.prototype.updateNavigatorSeries = function (addEvents, redraw) {
        var _a,
            _b;
        var navigator = this,
            chart = navigator.chart,
            baseSeries = navigator.baseSeries,
            navSeriesMixin = {
                enableMouseTracking: false,
                index: null, // #6162
                linkedTo: null, // #6734
                group: 'nav', // For columns
                padXAxis: false,
                xAxis: (_a = this.navigatorOptions.xAxis) === null || _a === void 0 ? void 0 : _a.id,
                yAxis: (_b = this.navigatorOptions.yAxis) === null || _b === void 0 ? void 0 : _b.id,
                showInLegend: false,
                stacking: void 0, // #4823
                isInternal: true,
                states: {
                    inactive: {
                        opacity: 1
                    }
                }
            }, 
            // Remove navigator series that are no longer in the baseSeries
            navigatorSeries = navigator.series =
                (navigator.series || []).filter(function (navSeries) {
                    var base = navSeries.baseSeries;
                if (base && baseSeries.indexOf(base) < 0) { // Not in array
                    // If there is still a base series connected to this
                    // series, remove event handler and reference.
                    if (base) {
                        removeEvent(base, 'updatedData', navigator.updatedDataHandler);
                        delete base.navigatorSeries;
                    }
                    // Kill the nav series. It may already have been
                    // destroyed (#8715).
                    if (navSeries.chart) {
                        navSeries.destroy();
                    }
                    return false;
                }
                return true;
            });
        var baseOptions,
            mergedNavSeriesOptions,
            chartNavigatorSeriesOptions = navigator.navigatorOptions.series,
            baseNavigatorOptions;
        // Go through each base series and merge the options to create new
        // series
        if (baseSeries && baseSeries.length) {
            baseSeries.forEach(function (base) {
                var _a,
                    _b;
                var linkedNavSeries = base.navigatorSeries,
                    userNavOptions = extend(
                    // Grab color and visibility from base as default
                    {
                        color: base.color,
                        visible: base.visible
                    }, !isArray(chartNavigatorSeriesOptions) ?
                        chartNavigatorSeriesOptions :
                        Navigator_defaultOptions.navigator.series);
                // Don't update if the series exists in nav and we have disabled
                // adaptToUpdatedData.
                if (linkedNavSeries &&
                    navigator.navigatorOptions.adaptToUpdatedData === false) {
                    return;
                }
                navSeriesMixin.name = 'Navigator ' + baseSeries.length;
                baseOptions = base.options || {};
                baseNavigatorOptions = baseOptions.navigatorOptions || {};
                // The dataLabels options are not merged correctly
                // if the settings are an array, #13847.
                userNavOptions.dataLabels = splat(userNavOptions.dataLabels);
                mergedNavSeriesOptions = merge(baseOptions, navSeriesMixin, userNavOptions, baseNavigatorOptions);
                // Once nav series type is resolved, pick correct pointRange
                mergedNavSeriesOptions.pointRange = pick(
                // Strictly set pointRange in options
                userNavOptions.pointRange, baseNavigatorOptions.pointRange, 
                // Fallback to default values, e.g. `null` for column
                (_a = Navigator_defaultOptions.plotOptions[mergedNavSeriesOptions.type || 'line']) === null || _a === void 0 ? void 0 : _a.pointRange);
                // Merge data separately. Do a slice to avoid mutating the
                // navigator options from base series (#4923).
                var navigatorSeriesData = baseNavigatorOptions.data || userNavOptions.data,
                    navigatorSeriesDataTable = baseNavigatorOptions.dataTable ||
                        userNavOptions.dataTable;
                navigator.hasNavigatorData =
                    navigator.hasNavigatorData ||
                        !!navigatorSeriesData ||
                        !!navigatorSeriesDataTable;
                mergedNavSeriesOptions.data =
                    navigatorSeriesData ||
                        ((_b = baseOptions.data) === null || _b === void 0 ? void 0 : _b.slice(0));
                mergedNavSeriesOptions.dataTable =
                    navigatorSeriesDataTable ||
                        baseOptions.dataTable;
                // Update or add the series
                if (linkedNavSeries && linkedNavSeries.options) {
                    linkedNavSeries.update(mergedNavSeriesOptions, redraw);
                }
                else {
                    base.navigatorSeries = chart.initSeries(mergedNavSeriesOptions);
                    // Trigger setSortedData with dataSorting enabled (#20318)
                    fireEvent(base.navigatorSeries, 'afterUpdate');
                    base.navigatorSeries.baseSeries = base; // Store ref
                    navigatorSeries.push(base.navigatorSeries);
                }
            });
        }
        // If user has defined data (and no base series) or explicitly defined
        // navigator.series as an array, we create these series on top of any
        // base series.
        if (((chartNavigatorSeriesOptions === null || chartNavigatorSeriesOptions === void 0 ? void 0 : chartNavigatorSeriesOptions.data) ||
            (chartNavigatorSeriesOptions === null || chartNavigatorSeriesOptions === void 0 ? void 0 : chartNavigatorSeriesOptions.dataTable)) &&
            !(baseSeries && baseSeries.length) ||
            isArray(chartNavigatorSeriesOptions)) {
            var colors_1 = chart.options.colors || [];
            navigator.hasNavigatorData = false;
            // Allow navigator.series to be an array
            chartNavigatorSeriesOptions =
                splat(chartNavigatorSeriesOptions);
            chartNavigatorSeriesOptions.forEach(function (userSeriesOptions, i) {
                var _a;
                navSeriesMixin.name =
                    'Navigator ' + (navigatorSeries.length + 1);
                mergedNavSeriesOptions = merge((_a = Navigator_defaultOptions.navigator) === null || _a === void 0 ? void 0 : _a.series, {
                    // Since we don't have a base series to pull color from,
                    // try to fake it by using color from series with same
                    // index. Otherwise pull from the colors array. We need
                    // an explicit color as otherwise updates will increment
                    // color counter and we'll get a new color for each
                    // update of the nav series.
                    color: (chart.series[i] &&
                        !chart.series[i].options.isInternal &&
                        chart.series[i].color) ||
                        colors_1[i] ||
                        colors_1[0]
                }, navSeriesMixin, userSeriesOptions);
                mergedNavSeriesOptions.data = userSeriesOptions.data;
                mergedNavSeriesOptions.dataTable = userSeriesOptions.dataTable;
                if (mergedNavSeriesOptions.data ||
                    mergedNavSeriesOptions.dataTable) {
                    navigator.hasNavigatorData = true;
                    navigatorSeries.push(chart.initSeries(mergedNavSeriesOptions));
                }
            });
        }
        if (addEvents) {
            this.addBaseSeriesEvents();
        }
    };
    /**
     * Add data events.
     * For example when main series is updated we need to recalculate extremes
     *
     * @internal
     * @function Highcharts.Navigator#addBaseSeriesEvent
     */
    Navigator.prototype.addBaseSeriesEvents = function () {
        var _this = this;
        var navigator = this,
            baseSeries = navigator.baseSeries || [];
        // Bind modified extremes event to first base's xAxis only.
        // In event of > 1 base-xAxes, the navigator will ignore those.
        // Adding this multiple times to the same axis is no problem, as
        // duplicates should be discarded by the browser.
        if (baseSeries[0] && baseSeries[0].xAxis) {
            baseSeries[0].eventsToUnbind.push(addEvent(baseSeries[0].xAxis, 'foundExtremes', this.modifyBaseAxisExtremes));
        }
        baseSeries.forEach(function (base) {
            // Link base series show/hide to navigator series visibility
            base.eventsToUnbind.push(addEvent(base, 'show', function () {
                if (this.navigatorSeries) {
                    this.navigatorSeries.setVisible(true, false);
                }
            }));
            base.eventsToUnbind.push(addEvent(base, 'hide', function () {
                if (this.navigatorSeries) {
                    this.navigatorSeries.setVisible(false, false);
                }
            }));
            // Respond to updated data in the base series, unless explicitly
            // not adapting to data changes.
            if (_this.navigatorOptions.adaptToUpdatedData !== false) {
                if (base.xAxis) {
                    base.eventsToUnbind.push(addEvent(base, 'updatedData', _this.updatedDataHandler));
                }
            }
            // Handle series removal
            base.eventsToUnbind.push(addEvent(base, 'remove', function () {
                if (baseSeries) {
                    erase(baseSeries, base); // #21043
                }
                if (this.navigatorSeries && navigator.series) {
                    erase(navigator.series, this.navigatorSeries);
                    if (defined(this.navigatorSeries.options)) {
                        this.navigatorSeries.remove(false);
                    }
                    delete this.navigatorSeries;
                }
            }));
        });
    };
    /**
     * Get minimum from all base series connected to the navigator
     * @internal
     * @param {number} currentSeriesMin
     *        Minium from the current series
     * @return {number}
     *         Minimum from all series
     */
    Navigator.prototype.getBaseSeriesMin = function (currentSeriesMin) {
        return this.baseSeries.reduce(function (min, series) {
            var _a;
            // #10193
            return Math.min(min, (_a = series.getColumn('x')[0]) !== null && _a !== void 0 ? _a : min);
        }, currentSeriesMin);
    };
    /**
     * Set the navigator x axis extremes to reflect the total. The navigator
     * extremes should always be the extremes of the union of all series in the
     * chart as well as the navigator series.
     *
     * @internal
     * @function Highcharts.Navigator#modifyNavigatorAxisExtremes
     */
    Navigator.prototype.modifyNavigatorAxisExtremes = function () {
        var xAxis = this.xAxis;
        if (typeof xAxis.getExtremes !== 'undefined') {
            var unionExtremes = this.getUnionExtremes(true);
            if (unionExtremes &&
                (unionExtremes.dataMin !== xAxis.min ||
                    unionExtremes.dataMax !== xAxis.max)) {
                xAxis.min = unionExtremes.dataMin;
                xAxis.max = unionExtremes.dataMax;
            }
        }
    };
    /**
     * Hook to modify the base axis extremes with information from the Navigator
     *
     * @internal
     * @function Highcharts.Navigator#modifyBaseAxisExtremes
     */
    Navigator.prototype.modifyBaseAxisExtremes = function () {
        var _a;
        var baseXAxis = this,
            navigator = baseXAxis.chart.navigator,
            baseExtremes = baseXAxis.getExtremes(),
            baseMin = baseExtremes.min,
            baseMax = baseExtremes.max,
            baseDataMin = baseExtremes.dataMin,
            baseDataMax = baseExtremes.dataMax,
            range = baseMax - baseMin,
            stickToMin = navigator === null || navigator === void 0 ? void 0 : navigator.stickToMin,
            stickToMax = navigator === null || navigator === void 0 ? void 0 : navigator.stickToMax,
            overscroll = pick((_a = baseXAxis.ordinal) === null || _a === void 0 ? void 0 : _a.convertOverscroll(baseXAxis.options.overscroll), 0),
            navigatorSeries = navigator.series && navigator.series[0],
            hasSetExtremes = !!baseXAxis.setExtremes, 
            // When the extremes have been set by range selector button, don't
            // stick to min or max. The range selector buttons will handle the
            // extremes. (#5489)
            unmutable = baseXAxis.eventArgs &&
                baseXAxis.eventArgs.trigger === 'rangeSelectorButton';
        var newMax,
            newMin;
        if (!unmutable) {
            // If the zoomed range is already at the min, move it to the right
            // as new data comes in
            if (stickToMin) {
                newMin = baseDataMin;
                newMax = newMin + range;
            }
            // If the zoomed range is already at the max, move it to the right
            // as new data comes in
            if (stickToMax) {
                newMax = baseDataMax + overscroll;
                // If stickToMin is true, the new min value is set above
                if (!stickToMin) {
                    newMin = Math.max(baseDataMin, // Don't go below data extremes (#13184)
                    newMax - range, navigator.getBaseSeriesMin(navigatorSeries && navigatorSeries.xData ?
                        navigatorSeries.xData[0] :
                        -Number.MAX_VALUE));
                }
            }
            // Update the extremes
            if (hasSetExtremes && (stickToMin || stickToMax)) {
                if (isNumber(newMin)) {
                    baseXAxis.min = baseXAxis.userMin = newMin;
                    baseXAxis.max = baseXAxis.userMax = newMax;
                }
            }
        }
        // Reset
        navigator.stickToMin =
            navigator.stickToMax = null;
    };
    /**
     * Handler for updated data on the base series. When data is modified, the
     * navigator series must reflect it. This is called from the Chart.redraw
     * function before axis and series extremes are computed.
     *
     * @internal
     * @function Highcharts.Navigator#updateDataHandler
     */
    Navigator.prototype.updatedDataHandler = function () {
        var navigator = this.chart.navigator,
            baseSeries = this,
            navigatorSeries = this.navigatorSeries,
            shouldStickToMax = navigator.reversedExtremes ?
                Math.round(navigator.zoomedMin) === 0 :
                Math.round(navigator.zoomedMax) >= Math.round(navigator.size);
        // If the scrollbar is scrolled all the way to the right, keep right as
        // new data comes in, unless user set navigator.stickToMax to false.
        navigator.stickToMax = pick(this.chart.options.navigator &&
            this.chart.options.navigator.stickToMax, shouldStickToMax);
        navigator.stickToMin = navigator.shouldStickToMin(baseSeries, navigator);
        // Set the navigator series data to the new data of the base series
        if (navigatorSeries && !navigator.hasNavigatorData) {
            navigatorSeries.options.pointStart = baseSeries.getColumn('x')[0];
            navigatorSeries.setData(baseSeries.options.data || baseSeries.options.dataTable, false, void 0, false); // #5414
        }
    };
    /**
     * Detect if the zoomed area should stick to the minimum, #14742.
     *
     * @internal
     * @function Highcharts.Navigator#shouldStickToMin
     */
    Navigator.prototype.shouldStickToMin = function (baseSeries, navigator) {
        var xDataMin = navigator.getBaseSeriesMin(baseSeries.getColumn('x')[0]),
            xAxis = baseSeries.xAxis,
            max = xAxis.max,
            min = xAxis.min,
            range = xAxis.options.range;
        var stickToMin = true;
        if (isNumber(max) && isNumber(min)) {
            // If range declared, stick to the minimum only if the range
            // is smaller than the data set range.
            if (range && max - xDataMin > 0) {
                stickToMin = max - xDataMin < range;
            }
            else {
                // If the current axis minimum falls outside the new
                // updated dataset, we must adjust.
                stickToMin = min <= xDataMin;
            }
        }
        else {
            stickToMin = false; // #15864
        }
        return stickToMin;
    };
    /**
     * Add chart events, like redrawing navigator, when chart requires that.
     *
     * @internal
     * @function Highcharts.Navigator#addChartEvents
     */
    Navigator.prototype.addChartEvents = function () {
        if (!this.eventsToUnbind) {
            this.eventsToUnbind = [];
        }
        this.eventsToUnbind.push(
        // Move the scrollbar after redraw, like after data updata even if
        // axes don't redraw
        addEvent(this.chart, 'redraw', function () {
            var navigator = this.navigator,
                xAxis = navigator && (navigator.baseSeries &&
                    navigator.baseSeries[0] &&
                    navigator.baseSeries[0].xAxis ||
                    this.xAxis[0]); // #5709, #13114
                if (xAxis) {
                    navigator.render(xAxis.min,
                xAxis.max);
            }
        }), 
        // Make room for the navigator, can be placed around the chart:
        addEvent(this.chart, 'getMargins', function () {
            var _a;
            var chart = this,
                navigator = chart.navigator;
            var marginName = navigator.opposite ?
                    'plotTop' : 'marginBottom';
            if (chart.inverted) {
                marginName = navigator.opposite ?
                    'marginRight' : 'plotLeft';
            }
            chart[marginName] = (chart[marginName] || 0) + (navigator.navigatorEnabled || !chart.inverted ?
                navigator.height +
                    (((_a = this.scrollbar) === null || _a === void 0 ? void 0 : _a.options.margin) || 0) +
                    navigator.scrollbarHeight : 0) + (navigator.navigatorOptions.margin || 0);
        }), addEvent(this, 'setRange', function (e) {
            this.chart.xAxis[0].setExtremes(e.min, e.max, e.redraw, e.animation, e.eventArguments);
        }));
    };
    /**
     * Destroys allocated elements.
     *
     * @internal
     * @function Highcharts.Navigator#destroy
     */
    Navigator.prototype.destroy = function () {
        var _this = this;
        // Disconnect events added in addEvents
        this.removeEvents();
        if (this.xAxis) {
            erase(this.chart.xAxis, this.xAxis);
            erase(this.chart.axes, this.xAxis);
        }
        if (this.yAxis) {
            erase(this.chart.yAxis, this.yAxis);
            erase(this.chart.axes, this.yAxis);
        }
        // Destroy series
        (this.series || []).forEach(function (s) {
            if (s.destroy) {
                s.destroy();
            }
        });
        // Destroy properties
        [
            'series', 'xAxis', 'yAxis', 'shades', 'outline', 'scrollbarTrack',
            'scrollbarRifles', 'scrollbarGroup', 'scrollbar', 'navigatorGroup',
            'rendered'
        ].forEach(function (prop) {
            if (_this[prop] && _this[prop].destroy) {
                _this[prop].destroy();
            }
            _this[prop] = null;
        });
        // Destroy elements in collection
        [this.handles].forEach(function (coll) {
            destroyObjectProperties(coll);
        });
        // Clean up linked series
        this.baseSeries.forEach(function (s) {
            s.navigatorSeries = void 0;
        });
        this.navigatorEnabled = false;
    };
    return Navigator;
}());
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Navigator_Navigator = (Navigator);

;// ./code/es5/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Dawid Draguła
 *
 * */
var ColumnUtils_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* *
*
* Functions
*
* */
/**
 * Sets the length of the column array.
 *
 * @param {DataTableColumn} column
 * Column to be modified.
 *
 * @param {number} length
 * New length of the column.
 *
 * @param {boolean} asSubarray
 * If column is a typed array, return a subarray instead of a new array. It
 * is faster `O(1)`, but the entire buffer will be kept in memory until all
 * views of it are destroyed. Default is `false`.
 *
 * @return {DataTableColumn}
 * Modified column.
 *
 * @private
 */
function setLength(column, length, asSubarray) {
    if (Array.isArray(column)) {
        column.length = length;
        return column;
    }
    return column[asSubarray ? 'subarray' : 'slice'](0, length);
}
/**
 * Splices a column array.
 *
 * @param {DataTableColumn} column
 * Column to be modified.
 *
 * @param {number} start
 * Index at which to start changing the array.
 *
 * @param {number} deleteCount
 * An integer indicating the number of old array elements to remove.
 *
 * @param {boolean} removedAsSubarray
 * If column is a typed array, return a subarray instead of a new array. It
 * is faster `O(1)`, but the entire buffer will be kept in memory until all
 * views to it are destroyed. Default is `true`.
 *
 * @param {Array<number>|TypedArray} items
 * The elements to add to the array, beginning at the start index. If you
 * don't specify any elements, `splice()` will only remove elements from the
 * array.
 *
 * @return {SpliceResult}
 * Object containing removed elements and the modified column.
 *
 * @private
 */
function splice(column, start, deleteCount, removedAsSubarray, items) {
    if (items === void 0) { items = []; }
    if (Array.isArray(column)) {
        if (!Array.isArray(items)) {
            items = Array.from(items);
        }
        return {
            removed: column.splice.apply(column, ColumnUtils_spreadArray([start, deleteCount], items, false)),
            array: column
        };
    }
    var Constructor = Object.getPrototypeOf(column)
            .constructor;
    var removed = column[removedAsSubarray ? 'subarray' : 'slice'](start,
        start + deleteCount);
    var newLength = column.length - deleteCount + items.length;
    var result = new Constructor(newLength);
    result.set(column.subarray(0, start), 0);
    result.set(items, start);
    result.set(column.subarray(start + deleteCount), start + items.length);
    return {
        removed: removed,
        array: result
    };
}
/**
 * Converts a cell value to a number.
 *
 * @param {DataTableCellType} value
 * Cell value to convert to a number.
 *
 * @param {boolean} useNaN
 * If `true`, returns `NaN` for non-numeric values; if `false`,
 * returns `null` instead.
 *
 * @return {number | null}
 * Number or `null` if the value is not a number.
 *
 * @private
 */
function convertToNumber(value, useNaN) {
    switch (typeof value) {
        case 'boolean':
            return (value ? 1 : 0);
        case 'number':
            return (isNaN(value) && !useNaN ? null : value);
        default:
            value = parseFloat("".concat(value !== null && value !== void 0 ? value : ''));
            return (isNaN(value) && !useNaN ? null : value);
    }
}
/* *
 *
 *  Default Export
 *
 * */
var ColumnUtils = {
    convertToNumber: convertToNumber,
    setLength: setLength,
    splice: splice
};
/* harmony default export */ var Data_ColumnUtils = (ColumnUtils);

;// ./code/es5/es-modules/Data/DataTableCore.js
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
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


var DataTableCore_setLength = Data_ColumnUtils.setLength, DataTableCore_splice = Data_ColumnUtils.splice;


/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * Highcharts allows passing a `DataTable` or a configuration object for a data
 * table in the `dataTable` property, either chart-level
 * [dataTable](https://api.highcharts.com/highcharts/dataTable) or as
 * [series.dataTable](https://api.highcharts.com/highcharts/series.dataTable).
 * The `DataTable` is then used as a source for the series data points, mapped
 * by the `series.dataMapping` option.
 *
 * After chart instantiation, the data table can be accessed from the series as
 * `series.dataTable`. CRUD operations on the data table will be reflected in
 * the chart.
 *
 * @example
 * const dataTable = new Highcharts.DataTable({
 *   columns: {
 *     year: [2020, 2021, 2022, 2023],
 *     cost: [11, 13, 12, 14],
 *     revenue: [12, 15, 14, 18]
 *   }
 * });
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptionsObject} [options]
 * Options to initialize the new DataTable instance.
 */
var DataTableCore = /** @class */ (function () {
    function DataTableCore(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.isDataTable = true;
        this.autoId = !options.id;
        this.columns = {};
        this.id = (options.id || (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)());
        this.rowCount = 0;
        this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        var rowCount = 0;
        objectEach(options.columns || {}, function (column, columnId) {
            _this.columns[columnId] = column.slice();
            rowCount = Math.max(rowCount, column.length);
        });
        this.applyRowCount(rowCount);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies a row count to the table by setting the `rowCount` property and
     * adjusting the length of all columns.
     *
     * @private
     * @param {number} rowCount The new row count.
     */
    DataTableCore.prototype.applyRowCount = function (rowCount) {
        var _this = this;
        this.rowCount = rowCount;
        objectEach(this.columns, function (column, columnId) {
            if (column.length !== rowCount) {
                _this.columns[columnId] = DataTableCore_setLength(column, rowCount);
            }
        });
    };
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
     *
     * @sample highcharts/datatable/live-chart/
     *       Add and delete rows in a live chart
     * @sample highcharts/datatable/shared-with-grid/
     *       Chart with data table CRUD operations
     *
     * @function Highcharts.DataTable#deleteRows
     *
     * @param {number} rowIndex
     * The start row index
     *
     * @param {number} [rowCount=1]
     * The number of rows to delete
     *
     * @return {void}
     *
     * @emits #afterDeleteRows
     */
    DataTableCore.prototype.deleteRows = function (rowIndex, rowCount) {
        var _this = this;
        if (rowCount === void 0) { rowCount = 1; }
        if (rowCount > 0 && rowIndex < this.rowCount) {
            var length_1 = 0;
            objectEach(this.columns, function (column, columnId) {
                _this.columns[columnId] =
                    DataTableCore_splice(column, rowIndex, rowCount).array;
                length_1 = column.length;
            });
            this.rowCount = length_1;
        }
        fireEvent(this, 'afterDeleteRows', { rowIndex: rowIndex, rowCount: rowCount });
        this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
    };
    /**
     * Fetches the given column by the canonical column ID. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @function Highcharts.DataTable#setColumn
     *
     * @param {string} columnId
     * ID of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    DataTableCore.prototype.getColumn = function (columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    };
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @function Highcharts.DataTable#getColumns
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    DataTableCore.prototype.getColumns = function (columnIds, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        var _this = this;
        return (columnIds || Object.keys(this.columns)).reduce(function (columns, columnId) {
            columns[columnId] = _this.columns[columnId];
            return columns;
        }, {});
    };
    /**
     * Retrieves the row at a given index.
     *
     * @function Highcharts.DataTable#getRowObject
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnNames]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    DataTableCore.prototype.getRowObject = function (rowIndex, columnNames) {
        var _a;
        var row = {},
            columns = this.columns;
        columnNames !== null && columnNames !== void 0 ? columnNames : (columnNames = Object.keys(this.columns));
        for (var _i = 0, columnNames_1 = columnNames; _i < columnNames_1.length; _i++) {
            var columnName = columnNames_1[_i];
            row[columnName] = (_a = columns[columnName]) === null || _a === void 0 ? void 0 : _a[rowIndex];
        }
        return row;
    };
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @function Highcharts.DataTable#setColumn
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    DataTableCore.prototype.setColumn = function (columnId, column, rowIndex, eventDetail) {
        var _a;
        if (column === void 0) { column = []; }
        if (rowIndex === void 0) { rowIndex = 0; }
        this.setColumns((_a = {}, _a[columnId] = column, _a), rowIndex, eventDetail);
    };
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTable.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @sample highcharts/datatable/shared-with-grid/
     *       Chart with data table CRUD operations
     *
     * @function Highcharts.DataTable#setColumns
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the simplified `DataTable`,
     * as it always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    DataTableCore.prototype.setColumns = function (columns, rowIndex, eventDetail) {
        var _this = this;
        var rowCount = this.rowCount;
        objectEach(columns, function (column, columnId) {
            _this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!(eventDetail === null || eventDetail === void 0 ? void 0 : eventDetail.silent)) {
            fireEvent(this, 'afterSetColumns');
            this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        }
    };
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
     *
     * @sample highcharts/datatable/live-chart/
     *       Add and delete rows in a live chart
     * @sample stock/datatable/live-candlestick/
     *       Live candlestick
     * @sample highcharts/datatable/shared-with-grid/
     *       Chart with data table CRUD operations
     *
     * @function Highcharts.DataTable#setRow
     *
     * @param {Record<string, number|string|undefined>} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #afterSetRows
     */
    DataTableCore.prototype.setRow = function (row, rowIndex, insert, eventDetail) {
        var _a;
        if (rowIndex === void 0) { rowIndex = this.rowCount; }
        var columns = this.columns,
            indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1,
            rowKeys = Object.keys(row);
        if ((eventDetail === null || eventDetail === void 0 ? void 0 : eventDetail.addColumns) !== false) {
            for (var i = 0, iEnd = rowKeys.length; i < iEnd; i++) {
                columns[_a = rowKeys[i]] || (columns[_a] = new Array(this.rowCount));
            }
        }
        objectEach(columns, function (column, columnId) {
            if (column) {
                if (insert) {
                    column = DataTableCore_splice(column, rowIndex, 0, true, [row[columnId]]).array;
                }
                else {
                    column[rowIndex] =
                        // Preserve explicit null and undefined but fall back
                        // to existing value if the new row does not have the
                        // key
                        columnId in row ?
                            row[columnId] :
                            column[rowIndex];
                }
                columns[columnId] = column;
            }
        });
        this.applyRowCount(Math.max(indexRowCount, this.rowCount));
        if (!(eventDetail === null || eventDetail === void 0 ? void 0 : eventDetail.silent)) {
            fireEvent(this, 'afterSetRows', { rowIndex: rowIndex });
            this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        }
    };
    /**
     * Returns the modified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTable}
     * The modified (clone) or the original data table.
     */
    DataTableCore.prototype.getModified = function () {
        return this.modified || this;
    };
    return DataTableCore;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Data_DataTableCore = (DataTableCore);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A collection of data table columns defined by a object where the key is the
 * column ID and the value is an array of the column values. Typed arrays are
 * supported.
 *
 * @type {Highcharts.DataTableColumnCollection|undefined}
 * @apioption dataTable.columns
 */
/**
 * Custom ID to identify the new DataTable instance.
 *
 * @type {string|undefined}
 * @apioption dataTable.id
 */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 */ /**
* A column of values in a data table.
* @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
*/ /**
* A collection of data table columns defined by a object where the key is the
* column ID and the value is an array of the column values. Typed arrays are
* supported.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptionsObject
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptionsObject.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptionsObject.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es5/es-modules/Core/Axis/OrdinalAxis.js
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

var OrdinalAxis_assign = (undefined && undefined.__assign) || function () {
    OrdinalAxis_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return OrdinalAxis_assign.apply(this, arguments);
};




/* *
 *
 *  Composition
 *
 * */
/**
 * Extends the axis with ordinal support.
 * @internal
 */
var OrdinalAxis;
(function (OrdinalAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends the axis with ordinal support.
     *
     * @internal
     */
    function compose(AxisClass, SeriesClass, ChartClass) {
        var axisProto = AxisClass.prototype;
        if (!axisProto.ordinal2lin) {
            axisProto.getTimeTicks = getTimeTicks;
            axisProto.index2val = index2val;
            axisProto.lin2val = lin2val;
            axisProto.val2lin = val2lin;
            // Record this to prevent overwriting by broken-axis module (#5979)
            axisProto.ordinal2lin = axisProto.val2lin;
            addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            addEvent(AxisClass, 'foundExtremes', onAxisFoundExtremes);
            addEvent(AxisClass, 'afterSetScale', onAxisAfterSetScale);
            addEvent(AxisClass, 'initialAxisTranslation', onAxisInitialAxisTranslation);
            addEvent(ChartClass, 'pan', onChartPan);
            addEvent(ChartClass, 'touchpan', onChartPan);
            addEvent(SeriesClass, 'updatedData', onSeriesUpdatedData);
        }
        return AxisClass;
    }
    OrdinalAxis.compose = compose;
    /**
     * In an ordinal axis, there might be areas with dense concentrations of
     * points, then large gaps between some. Creating equally distributed
     * ticks over this entire range may lead to a huge number of ticks that
     * will later be removed. So instead, break the positions up in
     * segments, find the tick positions for each segment then concatenize
     * them. This method is used from both data grouping logic and X axis
     * tick position logic.
     * @internal
     */
    function getTimeTicks(normalizedInterval, min, max, startOfWeek, positions, closestDistance, findBoundaryTicks) {
        if (positions === void 0) { positions = []; }
        if (closestDistance === void 0) { closestDistance = 0; }
        var boundaryTicks = {},
            tickPixelIntervalOption = this.options.tickPixelInterval,
            time = this.chart.time, 
            // Record all the start positions of a segment, to use when
            // deciding what's a gap in the data.
            segmentStarts = [];
        var end,
            segmentPositions,
            hasCrossedBoundary,
            info,
            outsideMax,
            start = 0,
            groupPositions = [],
            lastGroupPosition = -Number.MAX_VALUE;
        // The positions are not always defined, for example for ordinal
        // positions when data has regular interval (#1557, #2090)
        if ((!this.options.ordinal && !this.options.breaks) ||
            !positions ||
            positions.length < 3 ||
            typeof min === 'undefined') {
            return time.getTimeTicks.apply(time, arguments);
        }
        // Analyze the positions array to split it into segments on gaps
        // larger than 5 times the closest distance. The closest distance is
        // already found at this point, so we reuse that instead of
        // computing it again.
        var posLength = positions.length;
        for (end = 0; end < posLength; end++) {
            outsideMax = end && positions[end - 1] > max;
            if (positions[end] < min) { // Set the last position before min
                start = end;
            }
            if (end === posLength - 1 ||
                positions[end + 1] - positions[end] > closestDistance * 5 ||
                outsideMax) {
                // For each segment, calculate the tick positions from the
                // getTimeTicks utility function. The interval will be the
                // same regardless of how long the segment is.
                if (positions[end] > lastGroupPosition) { // #1475
                    segmentPositions = time.getTimeTicks(normalizedInterval, positions[start], positions[end], startOfWeek);
                    // Prevent duplicate groups, for example for multiple
                    // segments within one larger time frame (#1475)
                    while (segmentPositions.length &&
                        segmentPositions[0] <= lastGroupPosition) {
                        segmentPositions.shift();
                    }
                    if (segmentPositions.length) {
                        lastGroupPosition =
                            segmentPositions[segmentPositions.length - 1];
                    }
                    segmentStarts.push(groupPositions.length);
                    groupPositions = groupPositions.concat(segmentPositions);
                }
                // Set start of next segment
                start = end + 1;
            }
            if (outsideMax) {
                break;
            }
        }
        // Get the grouping info from the last of the segments. The info is
        // the same for all segments.
        if (segmentPositions) {
            info = segmentPositions.info;
            // Optionally identify ticks with boundary, for example
            // when the ticks have crossed midnight.
            if (findBoundaryTicks && info.unitRange <= highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.timeUnits.hour) {
                end = groupPositions.length - 1;
                // Compare points two by two
                for (start = 1; start < end; start++) {
                    if (time.dateFormat('%d', groupPositions[start]) !==
                        time.dateFormat('%d', groupPositions[start - 1])) {
                        boundaryTicks[groupPositions[start]] = 'day';
                        hasCrossedBoundary = true;
                    }
                }
                // If the complete array has crossed midnight, we want
                // to mark the first positions also as boundary
                if (hasCrossedBoundary) {
                    boundaryTicks[groupPositions[0]] = 'day';
                }
                info.boundaryTicks = boundaryTicks;
            }
            // Save the info
            info.segmentStarts = segmentStarts;
            groupPositions.info = info;
        }
        else {
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(12, false, this.chart);
        }
        // Don't show ticks within a gap in the ordinal axis, where the
        // space between two points is greater than a portion of the tick
        // pixel interval
        if (findBoundaryTicks && defined(tickPixelIntervalOption)) {
            var length_1 = groupPositions.length,
                translatedArr = [],
                distances = [];
            var itemToRemove = void 0,
                translated = void 0,
                lastTranslated = void 0,
                medianDistance = void 0,
                distance = void 0,
                i = length_1;
            // Find median pixel distance in order to keep a reasonably even
            // distance between ticks (#748)
            while (i--) {
                translated = this.translate(groupPositions[i]);
                if (lastTranslated) {
                    distances[i] = lastTranslated - translated;
                }
                translatedArr[i] = lastTranslated = translated;
            }
            distances.sort(function (a, b) { return a - b; });
            medianDistance = distances[Math.floor(distances.length / 2)];
            if (medianDistance < tickPixelIntervalOption * 0.6) {
                medianDistance = null;
            }
            // Now loop over again and remove ticks where needed
            i = groupPositions[length_1 - 1] > max ? length_1 - 1 : length_1; // #817
            lastTranslated = void 0;
            while (i--) {
                translated = translatedArr[i];
                distance = Math.abs(lastTranslated - translated);
                // #4175 - when axis is reversed, the distance, is negative but
                // tickPixelIntervalOption positive, so we need to compare the
                // same values
                // Remove ticks that are closer than 0.6 times the pixel
                // interval from the one to the right, but not if it is close to
                // the median distance (#748).
                if (lastTranslated &&
                    distance < tickPixelIntervalOption * 0.8 &&
                    (medianDistance === null || distance < medianDistance * 0.8)) {
                    // Is this a boundary position with a normal
                    // position to the right?
                    if (boundaryTicks[groupPositions[i]] &&
                        !boundaryTicks[groupPositions[i + 1]]) {
                        // Yes: remove the lower ranked neighbor to the right
                        itemToRemove = i + 1;
                        lastTranslated = translated; // #709
                    }
                    else {
                        // No: remove this one
                        itemToRemove = i;
                    }
                    groupPositions.splice(itemToRemove, 1);
                }
                else {
                    lastTranslated = translated;
                }
            }
        }
        return groupPositions;
    }
    /**
     * Get axis position of given index of the extended ordinal positions.
     * Used only when panning an ordinal axis.
     *
     * @internal
     * @function Highcharts.Axis#index2val
     * @param {number} index
     * The index value of searched point
     */
    function index2val(index) {
        var axis = this,
            ordinal = axis.ordinal, 
            // Context could be changed to extendedOrdinalPositions.
            ordinalPositions = ordinal.positions;
        // The visible range contains only equally spaced values.
        if (!ordinalPositions) {
            return index;
        }
        var i = ordinalPositions.length - 1,
            distance;
        if (index < 0) { // Out of range, in effect panning to the left
            index = ordinalPositions[0];
        }
        else if (index > i) { // Out of range, panning to the right
            index = ordinalPositions[i];
        }
        else { // Split it up
            i = Math.floor(index);
            distance = index - i; // The decimal
        }
        if (typeof distance !== 'undefined' &&
            typeof ordinalPositions[i] !== 'undefined') {
            return ordinalPositions[i] + (distance ?
                distance *
                    (ordinalPositions[i + 1] - ordinalPositions[i]) :
                0);
        }
        return index;
    }
    /**
     * Translate from linear (internal) to axis value.
     *
     * @internal
     * @function Highcharts.Axis#lin2val
     * @param {number} val
     * The linear abstracted value.
     */
    function lin2val(val) {
        var axis = this,
            ordinal = axis.ordinal,
            localMin = axis.old ? axis.old.min : axis.min,
            localA = axis.old ? axis.old.transA : axis.transA;
        // Always use extendedPositions (#19816)
        var positions = ordinal.getExtendedPositions();
        // In some cases (especially in early stages of the chart creation) the
        // getExtendedPositions might return undefined.
        if (positions === null || positions === void 0 ? void 0 : positions.length) {
            // Convert back from modified value to pixels. // #15970
            var pixelVal = correctFloat((val - localMin) * localA +
                    axis.minPixelPadding),
                index = correctFloat(ordinal.getIndexOfPoint(pixelVal,
                positions)),
                mantissa = correctFloat(index % 1);
            // Check if the index is inside position array. If true,
            // read/approximate value for that exact index.
            if (index >= 0 && index <= positions.length - 1) {
                var leftNeighbor = positions[Math.floor(index)],
                    rightNeighbor = positions[Math.ceil(index)],
                    distance = rightNeighbor - leftNeighbor;
                return positions[Math.floor(index)] + mantissa * distance;
            }
        }
        // If the value is outside positions array, return initial value
        return val; // #16784
    }
    /**
     * Internal function to calculate the precise index in ordinalPositions
     * array.
     * @internal
     */
    function getIndexInArray(ordinalPositions, val) {
        var index = OrdinalAxis.Additions.findIndexOf(ordinalPositions,
            val,
            true);
        if (ordinalPositions[index] === val) {
            return index;
        }
        var percent = (val - ordinalPositions[index]) /
                (ordinalPositions[index + 1] - ordinalPositions[index]);
        return index + percent;
    }
    /** @internal */
    function onAxisAfterInit() {
        var axis = this;
        if (!axis.ordinal) {
            axis.ordinal = new OrdinalAxis.Additions(axis);
        }
    }
    /** @internal */
    function onAxisFoundExtremes() {
        var axis = this,
            eventArgs = axis.eventArgs,
            options = axis.options;
        if (axis.isXAxis &&
            defined(options.overscroll) &&
            options.overscroll !== 0 &&
            isNumber(axis.max) &&
            isNumber(axis.min)) {
            if (axis.options.ordinal && !axis.ordinal.originalOrdinalRange) {
                // Calculate the original ordinal range
                axis.ordinal.getExtendedPositions(false);
            }
            // #22334
            axis.isFullRange = (defined(axis.dataMin) &&
                defined(axis.dataMax) &&
                axis.max - axis.min === axis.dataMax - axis.dataMin);
            if (axis.max === axis.dataMax &&
                (
                // Panning is an exception. We don't want to apply
                // overscroll when panning over the dataMax
                (eventArgs === null || eventArgs === void 0 ? void 0 : eventArgs.trigger) !== 'pan' ||
                    axis.isInternal) &&
                // Scrollbar buttons are the other exception
                (eventArgs === null || eventArgs === void 0 ? void 0 : eventArgs.trigger) !== 'navigator') {
                var overscroll = axis.ordinal.convertOverscroll(options.overscroll);
                axis.max += overscroll;
                // Live data and buttons require translation for the min:
                if (!axis.isInternal &&
                    defined(axis.userMin) &&
                    (eventArgs === null || eventArgs === void 0 ? void 0 : eventArgs.trigger) !== 'mousewheel') {
                    axis.min += overscroll;
                }
            }
        }
    }
    /**
     * For ordinal axis, that loads data async, redraw axis after data is
     * loaded. If we don't do that, axis will have the same extremes as
     * previously, but ordinal positions won't be calculated. See #10290
     * @internal
     */
    function onAxisAfterSetScale() {
        var axis = this;
        if (axis.horiz && !axis.isDirty) {
            axis.isDirty = axis.isOrdinal &&
                axis.chart.navigator &&
                !axis.chart.navigator.adaptToUpdatedData;
        }
    }
    /** @internal */
    function onAxisInitialAxisTranslation() {
        var axis = this;
        if (axis.ordinal) {
            axis.ordinal.beforeSetTickPositions();
            axis.tickInterval = axis.ordinal.postProcessTickInterval(axis.tickInterval);
        }
    }
    /**
     * Extending the Chart.pan method for ordinal axes
     * @internal
     */
    function onChartPan(e) {
        var _a;
        var chart = this,
            xAxis = chart.xAxis[0],
            overscroll = xAxis.ordinal.convertOverscroll(xAxis.options.overscroll),
            chartX = e.originalEvent.chartX,
            panning = chart.options.chart.panning;
        var runBase = false;
        if ((panning === null || panning === void 0 ? void 0 : panning.type) !== 'y' &&
            xAxis.options.ordinal &&
            xAxis.series.length &&
            // On touch devices, let default function handle the pinching
            (!e.touches || e.touches.length <= 1)) {
            var mouseDownX = chart.mouseDownX,
                extremes = xAxis.getExtremes(),
                dataMin = extremes.dataMin,
                dataMax = extremes.dataMax,
                min = extremes.min,
                max = extremes.max,
                hoverPoints = chart.hoverPoints,
                closestPointRange = (xAxis.closestPointRange ||
                    ((_a = xAxis.ordinal) === null || _a === void 0 ? void 0 : _a.overscrollPointsRange)),
                pointPixelWidth = (xAxis.translationSlope *
                    (xAxis.ordinal.slope || closestPointRange)), 
                // How many ordinal units did we move?
                movedUnits = Math.round((mouseDownX - chartX) / pointPixelWidth), 
                // Get index of all the chart's points
                extendedOrdinalPositions = xAxis.ordinal.getExtendedPositions(),
                extendedAxis = {
                    ordinal: {
                        positions: extendedOrdinalPositions,
                        extendedOrdinalPositions: extendedOrdinalPositions
                    }
                },
                index2val_1 = xAxis.index2val,
                val2lin_1 = xAxis.val2lin;
            var trimmedRange = void 0,
                ordinalPositions = void 0;
            // Make sure panning to the edges does not decrease the zoomed range
            if ((min <= dataMin && movedUnits <= 0) ||
                (max >= dataMax + overscroll && movedUnits >= 0)) {
                e.preventDefault();
                return;
            }
            // We have an ordinal axis, but the data is equally spaced
            if (!extendedAxis.ordinal.positions) {
                runBase = true;
            }
            else if (Math.abs(movedUnits) > 1) {
                // Remove active points for shared tooltip
                if (hoverPoints) {
                    hoverPoints.forEach(function (point) {
                        point.setState();
                    });
                }
                // In grouped data series, the last ordinal position represents
                // the grouped data, which is to the left of the real data max.
                // If we don't compensate for this, we will be allowed to pan
                // grouped data series passed the right of the plot area.
                ordinalPositions = extendedAxis.ordinal.positions;
                if (overscroll) { // #21606
                    ordinalPositions = extendedAxis.ordinal.positions =
                        ordinalPositions.concat(xAxis.ordinal.getOverscrollPositions());
                }
                if (dataMax > ordinalPositions[ordinalPositions.length - 1]) {
                    ordinalPositions.push(dataMax);
                }
                // Get the new min and max values by getting the ordinal index
                // for the current extreme, then add the moved units and
                // translate back to values. This happens on the extended
                // ordinal positions if the new position is out of range, else
                // it happens on the current x axis which is smaller and faster.
                chart.setFixedRange(max - min);
                trimmedRange = xAxis.navigatorAxis
                    .toFixedRange(void 0, void 0, index2val_1.apply(extendedAxis, [
                    val2lin_1.apply(extendedAxis, [min, true]) +
                        movedUnits
                ]), index2val_1.apply(extendedAxis, [
                    val2lin_1.apply(extendedAxis, [max, true]) +
                        movedUnits
                ]));
                // Apply it if it is within the available data range
                if (trimmedRange.min >= Math.min(ordinalPositions[0], min) &&
                    trimmedRange.max <= Math.max(ordinalPositions[ordinalPositions.length - 1], max) + overscroll) {
                    xAxis.setExtremes(trimmedRange.min, trimmedRange.max, true, false, { trigger: 'pan' });
                }
                chart.mouseDownX = chartX; // Set new reference for next run
                css(chart.container, { cursor: 'move' });
            }
        }
        else {
            runBase = true;
        }
        // Revert to the linear chart.pan version
        if (runBase || (panning && /y/.test(panning.type))) {
            if (overscroll && isNumber(xAxis.dataMax)) {
                xAxis.max = xAxis.dataMax + overscroll;
            }
        }
        else {
            e.preventDefault();
        }
    }
    /** @internal */
    function onSeriesUpdatedData() {
        var xAxis = this.xAxis;
        // Destroy the extended ordinal index on updated data
        // and destroy extendedOrdinalPositions, #16055.
        if (xAxis === null || xAxis === void 0 ? void 0 : xAxis.options.ordinal) {
            delete xAxis.ordinal.index;
            delete xAxis.ordinal.originalOrdinalRange;
        }
    }
    /**
     * Translate from a linear axis value to the corresponding ordinal axis
     * position. If there are no gaps in the ordinal axis this will be the
     * same. The translated value is the value that the point would have if
     * the axis was linear, using the same min and max.
     *
     * @internal
     * @function Highcharts.Axis#val2lin
     * @param {number} val
     * The axis value.
     * @param {boolean} [toIndex]
     * Whether to return the index in the ordinalPositions or the new value.
     */
    function val2lin(val, toIndex) {
        var _a;
        var axis = this,
            ordinal = axis.ordinal,
            ordinalPositions = ordinal.positions;
        var slope = ordinal.slope,
            extendedOrdinalPositions;
        if (!ordinalPositions) {
            return val;
        }
        var ordinalLength = ordinalPositions.length;
        var ordinalIndex;
        // If the searched value is inside visible plotArea, investigate the
        // value basing on ordinalPositions.
        if (ordinalPositions[0] <= val &&
            ordinalPositions[ordinalLength - 1] >= val) {
            ordinalIndex = getIndexInArray(ordinalPositions, val);
            // Final return value is based on ordinalIndex
        }
        else {
            extendedOrdinalPositions = (_a = ordinal.getExtendedPositions) === null || _a === void 0 ? void 0 : _a.call(ordinal);
            if (!(extendedOrdinalPositions === null || extendedOrdinalPositions === void 0 ? void 0 : extendedOrdinalPositions.length)) {
                return val;
            }
            var length_2 = extendedOrdinalPositions.length;
            if (!slope) {
                slope =
                    (extendedOrdinalPositions[length_2 - 1] -
                        extendedOrdinalPositions[0]) /
                        length_2;
            }
            // `originalPointReference` is equal to the index of first point of
            // ordinalPositions in extendedOrdinalPositions.
            var originalPositionsReference = getIndexInArray(extendedOrdinalPositions,
                ordinalPositions[0]);
            // If the searched value is outside the visiblePlotArea,
            // check if it is inside extendedOrdinalPositions.
            if (val >= extendedOrdinalPositions[0] &&
                val <=
                    extendedOrdinalPositions[length_2 - 1]) {
                // Return Value
                ordinalIndex = getIndexInArray(extendedOrdinalPositions, val) -
                    originalPositionsReference;
            }
            else {
                if (!toIndex) {
                    // If the value is outside positions array,
                    // return initial value, #16784
                    return val;
                }
                // Since ordinal.slope is the average distance between 2
                // points on visible plotArea, this can be used to calculate
                // the approximate position of the point, which is outside
                // the extendedOrdinalPositions.
                if (val < extendedOrdinalPositions[0]) {
                    var diff = extendedOrdinalPositions[0] - val,
                        approximateIndexOffset = diff / slope;
                    ordinalIndex =
                        -originalPositionsReference -
                            approximateIndexOffset;
                }
                else {
                    var diff = val -
                            extendedOrdinalPositions[length_2 - 1],
                        approximateIndexOffset = diff / slope;
                    ordinalIndex =
                        approximateIndexOffset +
                            length_2 -
                            originalPositionsReference;
                }
            }
        }
        return toIndex ? ordinalIndex : slope * (ordinalIndex || 0) +
            ordinal.offset;
    }
    /* *
     *
     *  Classes
     *
     * */
    /** @internal */
    var Additions = /** @class */ (function () {
            /* *
             *
             *  Constructors
             *
             * */
            /** @internal */
            function Additions(axis) {
                /** @internal */
                this.index = {};
            this.axis = axis;
        }
        /* *
        *
        *  Functions
        *
        * */
        /**
         * Calculate the ordinal positions before tick positions are calculated.
         * @internal
         */
        Additions.prototype.beforeSetTickPositions = function () {
            var _a;
            var axis = this.axis,
                ordinal = axis.ordinal,
                extremes = axis.getExtremes(),
                min = extremes.min,
                max = extremes.max,
                hasBreaks = (_a = axis.brokenAxis) === null || _a === void 0 ? void 0 : _a.hasBreaks,
                isOrdinal = axis.options.ordinal,
                overscroll = axis.options.overscroll &&
                    axis.ordinal.convertOverscroll(axis.options.overscroll) ||
                    0;
            var len,
                uniqueOrdinalPositions,
                dist,
                minIndex,
                maxIndex,
                slope,
                i,
                ordinalPositions = [],
                overscrollPointsRange = Number.MAX_VALUE,
                useOrdinal = false,
                adjustOrdinalExtremesPoints = false,
                isBoosted = false;
            // Apply the ordinal logic
            if (isOrdinal || hasBreaks) { // #4167 YAxis is never ordinal ?
                var distanceBetweenPoint_1 = 0;
                axis.series.forEach(function (series, i) {
                    var xData = series.getColumn('x',
                        true);
                    uniqueOrdinalPositions = [];
                    // For an axis with multiple series, check if the distance
                    // between points is identical throughout all series.
                    if (i > 0 &&
                        series.options.id !== 'highcharts-navigator-series' &&
                        xData.length > 1) {
                        adjustOrdinalExtremesPoints = (distanceBetweenPoint_1 !== xData[1] - xData[0]);
                    }
                    distanceBetweenPoint_1 = xData[1] - xData[0];
                    if (series.boosted) {
                        isBoosted = series.boosted;
                    }
                    if (series.reserveSpace() &&
                        (series
                            .takeOrdinalPosition !== false || hasBreaks)) {
                        // Concatenate the processed X data into the existing
                        // positions, or the empty array
                        ordinalPositions = ordinalPositions.concat(xData);
                        len = ordinalPositions.length;
                        // Remove duplicates (#1588)
                        ordinalPositions.sort(function (a, b) {
                            // Without a custom function it is sorted as strings
                            return a - b;
                        });
                        overscrollPointsRange = Math.min(overscrollPointsRange, pick(
                        // Check for a single-point series:
                        series.closestPointRange, overscrollPointsRange));
                        if (len) {
                            i = 0;
                            while (i < len - 1) {
                                if (ordinalPositions[i] !==
                                    ordinalPositions[i + 1]) {
                                    uniqueOrdinalPositions.push(ordinalPositions[i + 1]);
                                }
                                i++;
                            }
                            // Check first item:
                            if (uniqueOrdinalPositions[0] !==
                                ordinalPositions[0]) {
                                uniqueOrdinalPositions.unshift(ordinalPositions[0]);
                            }
                            ordinalPositions = uniqueOrdinalPositions;
                        }
                    }
                });
                if (!axis.ordinal.originalOrdinalRange) {
                    // Calculate current originalOrdinalRange
                    axis.ordinal.originalOrdinalRange =
                        (ordinalPositions.length - 1) * overscrollPointsRange;
                }
                // If the distance between points is not identical throughout
                // all series, remove the first and last ordinal position to
                // avoid enabling ordinal logic when it is not needed, #17405.
                // Only for boosted series because changes are negligible.
                if (adjustOrdinalExtremesPoints && isBoosted) {
                    ordinalPositions.pop();
                    ordinalPositions.shift();
                }
                // Cache the length
                len = ordinalPositions.length;
                // Check if we really need the overhead of mapping axis data
                // against the ordinal positions. If the series consist of
                // evenly spaced data any way, we don't need any ordinal logic.
                if (len > 2) { // Two points have equal distance by default
                    dist = ordinalPositions[1] - ordinalPositions[0];
                    i = len - 1;
                    while (i-- && !useOrdinal) {
                        if (ordinalPositions[i + 1] - ordinalPositions[i] !==
                            dist) {
                            useOrdinal = true;
                        }
                    }
                    // When zooming in on a week, prevent axis padding for
                    // weekends even though the data within the week is evenly
                    // spaced.
                    if (!axis.options.keepOrdinalPadding &&
                        (ordinalPositions[0] - min > dist ||
                            max - overscroll - ordinalPositions[len - 1] >
                                dist)) {
                        useOrdinal = true;
                    }
                }
                else if (axis.options.overscroll) {
                    if (len === 2) {
                        // Exactly two points, distance for overscroll is fixed:
                        overscrollPointsRange =
                            ordinalPositions[1] - ordinalPositions[0];
                    }
                    else if (len === 1) {
                        // We have just one point, closest distance is unknown.
                        // Assume then it is last point and overscrolled range:
                        overscrollPointsRange = overscroll;
                        ordinalPositions = [
                            ordinalPositions[0],
                            ordinalPositions[0] + overscrollPointsRange
                        ];
                    }
                    else {
                        // In case of zooming in on overscrolled range, stick to
                        // the old range:
                        overscrollPointsRange = ordinal.overscrollPointsRange;
                    }
                }
                // Record the slope and offset to compute the linear values from
                // the array index. Since the ordinal positions may exceed the
                // current range, get the start and end positions within it
                // (#719, #665b)
                if (useOrdinal || axis.forceOrdinal) {
                    if (axis.options.overscroll) {
                        ordinal.overscrollPointsRange = overscrollPointsRange;
                        ordinalPositions = ordinalPositions.concat(ordinal.getOverscrollPositions());
                    }
                    // Register
                    ordinal.positions = ordinalPositions;
                    // This relies on the ordinalPositions being set. Use
                    // Math.max and Math.min to prevent padding on either sides
                    // of the data.
                    minIndex = axis.ordinal2lin(// #5979
                    Math.max(min, ordinalPositions[0]), true);
                    maxIndex = Math.max(axis.ordinal2lin(Math.min(max, ordinalPositions[ordinalPositions.length - 1]), true), 1); // #3339
                    // Set the slope and offset of the values compared to the
                    // indices in the ordinal positions.
                    ordinal.slope = slope =
                        (max - min) / (maxIndex - minIndex);
                    ordinal.offset = min - (minIndex * slope);
                }
                else {
                    ordinal.overscrollPointsRange = pick(axis.closestPointRange, ordinal.overscrollPointsRange);
                    ordinal.positions = axis.ordinal.slope = ordinal.offset =
                        void 0;
                }
            }
            axis.isOrdinal = isOrdinal && useOrdinal; // #3818, #4196, #4926
            ordinal.groupIntervalFactor = null; // Reset for next run
        };
        /**
         * Faster way of using the Array.indexOf method.
         * Works for sorted arrays only with unique values.
         *
         * @param {Array} sortedArray
         *        The sorted array inside which we are looking for.
         * @param {number} key
         *        The key to being found.
         * @param {boolean} indirectSearch
         *        In case of lack of the point in the array, should return
         *        value be equal to -1 or the closest smaller index.
         *  @internal
         */
        Additions.findIndexOf = function (sortedArray, key, indirectSearch) {
            var start = 0,
                end = sortedArray.length - 1,
                middle;
            while (start < end) {
                middle = Math.ceil((start + end) / 2);
                // Key found as the middle element.
                if (sortedArray[middle] <= key) {
                    // Continue searching to the right.
                    start = middle;
                }
                else {
                    // Continue searching to the left.
                    end = middle - 1;
                }
            }
            if (sortedArray[start] === key) {
                return start;
            }
            // Key could not be found.
            return !indirectSearch ? -1 : start;
        };
        /**
         * Get the ordinal positions for the entire data set. This is necessary
         * in chart panning because we need to find out what points or data
         * groups are available outside the visible range. When a panning
         * operation starts, if an index for the given grouping does not exists,
         * it is created and cached. This index is deleted on updated data, so
         * it will be regenerated the next time a panning operation starts.
         * @internal
         */
        Additions.prototype.getExtendedPositions = function (withOverscroll) {
            if (withOverscroll === void 0) { withOverscroll = true; }
            var ordinal = this,
                axis = ordinal.axis,
                axisProto = axis.constructor.prototype,
                chart = axis.chart,
                key = axis.series.reduce(function (k,
                series) {
                    var grouping = series.currentDataGrouping;
                return (k +
                    (grouping ? grouping.count + grouping.unitName : 'raw'));
            }, ''), overscroll = withOverscroll ?
                axis.ordinal.convertOverscroll(axis.options.overscroll) : 0, extremes = axis.getExtremes();
            var fakeAxis,
                fakeSeries = void 0,
                ordinalIndex = ordinal.index;
            // If this is the first time, or the ordinal index is deleted by
            // updatedData,
            // create it.
            if (!ordinalIndex) {
                ordinalIndex = ordinal.index = {};
            }
            if (!ordinalIndex[key]) {
                // Create a fake axis object where the extended ordinal
                // positions are emulated
                fakeAxis = {
                    series: [],
                    chart: chart,
                    forceOrdinal: false,
                    getExtremes: function () {
                        return {
                            min: extremes.dataMin,
                            max: extremes.dataMax + overscroll
                        };
                    },
                    applyGrouping: axisProto.applyGrouping,
                    getGroupPixelWidth: axisProto.getGroupPixelWidth,
                    getTimeTicks: axisProto.getTimeTicks,
                    options: {
                        ordinal: true
                    },
                    ordinal: {
                        getGroupIntervalFactor: this.getGroupIntervalFactor
                    },
                    ordinal2lin: axisProto.ordinal2lin, // #6276
                    getIndexOfPoint: axisProto.getIndexOfPoint,
                    val2lin: axisProto.val2lin // #2590
                };
                fakeAxis.ordinal.axis = fakeAxis;
                // Add the fake series to hold the full data, then apply
                // processData to it
                axis.series.forEach(function (series) {
                    var _a,
                        _b,
                        _c;
                    if (series.takeOrdinalPosition === false) {
                        return; // #22657
                    }
                    fakeSeries = {
                        xAxis: fakeAxis,
                        chart: chart,
                        groupPixelWidth: series.groupPixelWidth,
                        destroyGroupedData: (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).noop,
                        getColumn: series.getColumn,
                        getX: (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).noop,
                        applyGrouping: series.applyGrouping,
                        getProcessedData: series.getProcessedData,
                        reserveSpace: series.reserveSpace,
                        visible: series.visible
                    };
                    var xColumn = series.getColumn('x'),
                        xData = (
                        // No concat on TypedArrays, use Array.from
                        Array.isArray(xColumn) ?
                            xColumn :
                            Array.from(xColumn)).concat(withOverscroll ?
                            ordinal.getOverscrollPositions() :
                            []);
                    fakeSeries.dataTable = new Data_DataTableCore({
                        columns: {
                            x: xData
                        }
                    });
                    fakeSeries.options = OrdinalAxis_assign(OrdinalAxis_assign({}, series.options), { dataGrouping: series.currentDataGrouping ? {
                            firstAnchor: (_a = series.options.dataGrouping) === null || _a === void 0 ? void 0 : _a.firstAnchor,
                            anchor: (_b = series.options.dataGrouping) === null || _b === void 0 ? void 0 : _b.anchor,
                            lastAnchor: (_c = series.options.dataGrouping) === null || _c === void 0 ? void 0 : _c.firstAnchor,
                            enabled: true,
                            forced: true,
                            approximation: 'open',
                            units: [[
                                    series.currentDataGrouping.unitName,
                                    [series.currentDataGrouping.count]
                                ]]
                        } : {
                            enabled: false
                        } });
                    fakeAxis.series.push(fakeSeries);
                    series.processData.apply(fakeSeries);
                });
                fakeAxis.applyGrouping({ hasExtremesChanged: true });
                // Force to use the ordinal when points are evenly spaced (e.g.
                // weeks), #3825.
                if (((fakeSeries === null || fakeSeries === void 0 ? void 0 : fakeSeries.closestPointRange) !==
                    (fakeSeries === null || fakeSeries === void 0 ? void 0 : fakeSeries.basePointRange)) &&
                    fakeSeries.currentDataGrouping) {
                    fakeAxis.forceOrdinal = true;
                }
                // Run beforeSetTickPositions to compute the ordinalPositions
                axis.ordinal.beforeSetTickPositions.apply({ axis: fakeAxis });
                if (!axis.ordinal.originalOrdinalRange &&
                    fakeAxis.ordinal.originalOrdinalRange) {
                    axis.ordinal.originalOrdinalRange =
                        fakeAxis.ordinal.originalOrdinalRange;
                }
                // Cache it
                if (fakeAxis.ordinal.positions) {
                    ordinalIndex[key] = fakeAxis.ordinal.positions;
                }
            }
            return ordinalIndex[key];
        };
        /**
         * Find the factor to estimate how wide the plot area would have been if
         * ordinal gaps were included. This value is used to compute an imagined
         * plot width in order to establish the data grouping interval.
         *
         * A real world case is the intraday-candlestick example. Without this
         * logic, it would show the correct data grouping when viewing a range
         * within each day, but once moving the range to include the gap between
         * two days, the interval would include the cut-away night hours and the
         * data grouping would be wrong. So the below method tries to compensate
         * by identifying the most common point interval, in this case days.
         *
         * An opposite case is presented in issue #718. We have a long array of
         * daily data, then one point is appended one hour after the last point.
         * We expect the data grouping not to change.
         *
         * In the future, if we find cases where this estimation doesn't work
         * optimally, we might need to add a second pass to the data grouping
         * logic, where we do another run with a greater interval if the number
         * of data groups is more than a certain fraction of the desired group
         * count.
         * @internal
         */
        Additions.prototype.getGroupIntervalFactor = function (xMin, xMax, series) {
            var ordinal = this,
                processedXData = series.getColumn('x',
                true),
                len = processedXData.length,
                distances = [];
            var median,
                i,
                groupIntervalFactor = ordinal.groupIntervalFactor;
            // Only do this computation for the first series, let the other
            // inherit it (#2416)
            if (!groupIntervalFactor) {
                // Register all the distances in an array
                for (i = 0; i < len - 1; i++) {
                    distances[i] = (processedXData[i + 1] -
                        processedXData[i]);
                }
                // Sort them and find the median
                distances.sort(function (a, b) {
                    return a - b;
                });
                median = distances[Math.floor(len / 2)];
                // Compensate for series that don't extend through the entire
                // axis extent. #1675.
                xMin = Math.max(xMin, processedXData[0]);
                xMax = Math.min(xMax, processedXData[len - 1]);
                ordinal.groupIntervalFactor = groupIntervalFactor =
                    (len * median) / (xMax - xMin);
            }
            // Return the factor needed for data grouping
            return groupIntervalFactor;
        };
        /**
         * Get index of point inside the ordinal positions array.
         *
         * @internal
         * @param {number} pixelVal
         * The pixel value of a point.
         *
         * @param {Array<number>} [ordinalArray]
         * An array of all points available on the axis for the given data set.
         * Either ordinalPositions if the value is inside the plotArea or
         * extendedOrdinalPositions if not.
         */
        Additions.prototype.getIndexOfPoint = function (pixelVal, ordinalArray) {
            var ordinal = this,
                axis = ordinal.axis,
                min = axis.min,
                minX = axis.minPixelPadding,
                indexOfMin = getIndexInArray(ordinalArray,
                min);
            var ordinalPointPixelInterval = axis.translationSlope *
                    (ordinal.slope ||
                        axis.closestPointRange ||
                        ordinal.overscrollPointsRange);
            var shiftIndex = correctFloat((pixelVal - minX) / ordinalPointPixelInterval);
            return indexOfMin + shiftIndex;
        };
        /**
         * Get ticks for an ordinal axis within a range where points don't
         * exist. It is required when overscroll is enabled. We can't base on
         * points, because we may not have any, so we use approximated
         * pointRange and generate these ticks between Axis.dataMax,
         * Axis.dataMax + Axis.overscroll evenly spaced. Used in panning and
         * navigator scrolling.
         * @internal
         */
        Additions.prototype.getOverscrollPositions = function () {
            var ordinal = this,
                axis = ordinal.axis,
                extraRange = ordinal.convertOverscroll(axis.options.overscroll),
                distance = ordinal.overscrollPointsRange,
                positions = [];
            var max = axis.dataMax;
            if (defined(distance)) {
                // Max + pointRange because we need to scroll to the last
                while (max < axis.dataMax + extraRange) {
                    max += distance;
                    positions.push(max);
                }
            }
            return positions;
        };
        /**
         * Make the tick intervals closer because the ordinal gaps make the
         * ticks spread out or cluster.
         * @internal
         */
        Additions.prototype.postProcessTickInterval = function (tickInterval) {
            // Problem: https://jsfiddle.net/highcharts/FQm4E/1/. This is a case
            // where this algorithm doesn't work optimally. In this case, the
            // tick labels are spread out per week, but all the gaps reside
            // within weeks. So we have a situation where the labels are courser
            // than the ordinal gaps, and thus the tick interval should not be
            // altered.
            var ordinal = this,
                axis = ordinal.axis,
                ordinalSlope = ordinal.slope,
                closestPointRange = axis.closestPointRange;
            var ret;
            if (ordinalSlope && closestPointRange) {
                if (!axis.options.breaks) {
                    ret = (tickInterval /
                        (ordinalSlope / closestPointRange));
                }
                else {
                    ret = closestPointRange || tickInterval; // #7275
                }
            }
            else {
                ret = tickInterval;
            }
            return ret;
        };
        /**
         * If overscroll is pixel or percentage value, convert it to axis range.
         *
         * @internal
         * @param {number | string} overscroll
         * Overscroll value in axis range, pixels or percentage value.
         * @return {number}
         * Overscroll value in axis range.
         */
        Additions.prototype.convertOverscroll = function (overscroll) {
            if (overscroll === void 0) { overscroll = 0; }
            var ordinal = this,
                axis = ordinal.axis,
                calculateOverscroll = function (overscrollPercentage) {
                    return pick(ordinal.originalOrdinalRange,
                defined(axis.dataMax) && defined(axis.dataMin) ?
                        axis.dataMax - axis.dataMin : 0) * overscrollPercentage;
            };
            if (isString(overscroll)) {
                var overscrollValue = parseInt(overscroll, 10);
                // #22334
                if (axis.isFullRange === false &&
                    isNumber(axis.min) &&
                    isNumber(axis.max)) {
                    this.originalOrdinalRange = axis.max - axis.min;
                }
                if (/%$/.test(overscroll)) {
                    // If overscroll is percentage
                    return calculateOverscroll(overscrollValue / 100);
                }
                if (/px/.test(overscroll)) {
                    // If overscroll is pixels, it is limited to 90% of the axis
                    // length to prevent division by zero
                    var limitedOverscrollValue = Math.min(overscrollValue,
                        axis.len * 0.9),
                        pixelToPercent = limitedOverscrollValue / axis.len;
                    return calculateOverscroll(pixelToPercent /
                        (axis.isFullRange ? (1 - pixelToPercent) : 1));
                }
                // If overscroll is a string but not pixels or percentage,
                // return 0 as no overscroll
                return 0;
            }
            return overscroll;
        };
        return Additions;
    }());
    OrdinalAxis.Additions = Additions;
})(OrdinalAxis || (OrdinalAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Axis_OrdinalAxis = (OrdinalAxis);

;// ./code/es5/es-modules/Stock/RangeSelector/RangeSelectorDefaults.js
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
 *  Declarations
 *
 * */
/**
 * An object containing language-related strings and settings. A typical setup
 * uses `Highcharts.setOptions` to make the options apply to all charts in the
 * same page.
 *
 * ```js
 * Highcharts.setOptions({
 *     lang: {
 *         locale: 'fr'
 *     }
 * });
 * ```
 *
 * @optionparent lang
 */
var lang = {
    /**
     * The text for the label for the range selector buttons.
     *
     * @product highstock gantt
     */
    rangeSelectorZoom: 'Zoom',
    /**
     * The text for the label for the "from" input box in the range
     * selector. Since v9.0, this string is empty as the label is not
     * rendered by default.
     *
     * @product highstock gantt
     */
    rangeSelectorFrom: '',
    /**
     * The text for the label for the "to" input box in the range selector.
     *
     * @product highstock gantt
     */
    rangeSelectorTo: '→',
    /**
     * The default text for the rangeselector buttons.
     *
     * @since 12.2.0
     */
    rangeSelector: {
        allText: 'All',
        allTitle: 'View all',
        monthText: '{count}m',
        monthTitle: 'View {count} {#eq count 1}month{else}months{/eq}',
        yearText: '{count}y',
        yearTitle: 'View {count} {#eq count 1}year{else}years{/eq}',
        ytdText: 'YTD',
        ytdTitle: 'View year to date'
    }
};
/**
 * The range selector is a tool for selecting ranges to display within
 * the chart. It provides buttons to select preconfigured ranges in
 * the chart, like 1 day, 1 week, 1 month etc. It also provides input
 * boxes where min and max dates can be manually input.
 *
 * @product      highstock gantt
 * @optionparent rangeSelector
 */
var rangeSelector = {
    /**
     * Whether to enable all buttons from the start. By default buttons are
     * only enabled if the corresponding time range exists on the X axis,
     * but enabling all buttons allows for dynamically loading different
     * time ranges.
     *
     * @sample {highstock} stock/rangeselector/allbuttonsenabled-true/
     *         All buttons enabled
     *
     * @since     2.0.3
     */
    allButtonsEnabled: false,
    /**
     * An array of configuration objects for the buttons.
     *
     * Defaults to:
     * ```js
     * buttons: [{
     *     type: 'month',
     *     count: 1,
     *     text: '1m',
     *     title: 'View 1 month'
     * }, {
     *     type: 'month',
     *     count: 3,
     *     text: '3m',
     *     title: 'View 3 months'
     * }, {
     *     type: 'month',
     *     count: 6,
     *     text: '6m',
     *     title: 'View 6 months'
     * }, {
     *     type: 'ytd',
     *     text: 'YTD',
     *     title: 'View year to date'
     * }, {
     *     type: 'year',
     *     count: 1,
     *     text: '1y',
     *     title: 'View 1 year'
     * }, {
     *     type: 'all',
     *     text: 'All',
     *     title: 'View all'
     * }]
     * ```
     *
     * @sample {highstock} stock/demo/rangeselector-datagrouping/
     *         Data grouping by buttons
     *
     * @type      {Array<*>}
     */
    buttons: [{
            type: 'month',
            count: 1
        }, {
            type: 'month',
            count: 3
        }, {
            type: 'month',
            count: 6
        }, {
            type: 'ytd'
        }, {
            type: 'year',
            count: 1
        }, {
            type: 'all'
        }],
    /**
     * How many units of the defined type the button should span. If `type`
     * is "month" and `count` is 3, the button spans three months.
     *
     * @type      {number}
     * @default   1
     * @apioption rangeSelector.buttons.count
     */
    /**
     * Fires when clicking on the rangeSelector button. One parameter,
     * event, is passed to the function, containing common event
     * information.
     *
     * ```js
     * click: function(e) {
     *   console.log(this);
     * }
     * ```
     *
     * Return false to stop default button's click action.
     *
     * @sample {highstock} stock/rangeselector/button-click/
     *         Click event on the button
     *
     * @type      {Highcharts.RangeSelectorClickCallbackFunction}
     * @apioption rangeSelector.buttons.events.click
     */
    /**
     * Additional range (in milliseconds) added to the end of the calculated
     * time span.
     *
     * @sample {highstock} stock/rangeselector/min-max-offsets/
     *         Button offsets
     *
     * @type      {number}
     * @default   0
     * @since     6.0.0
     * @apioption rangeSelector.buttons.offsetMax
     */
    /**
     * Additional range (in milliseconds) added to the start of the
     * calculated time span.
     *
     * @sample {highstock} stock/rangeselector/min-max-offsets/
     *         Button offsets
     *
     * @type      {number}
     * @default   0
     * @since     6.0.0
     * @apioption rangeSelector.buttons.offsetMin
     */
    /**
     * When buttons apply dataGrouping on a series, by default zooming
     * in/out will deselect buttons and unset dataGrouping. Enable this
     * option to keep buttons selected when extremes change.
     *
     * @sample {highstock} stock/rangeselector/preserve-datagrouping/
     *         Different preserveDataGrouping settings
     *
     * @type      {boolean}
     * @default   false
     * @since     6.1.2
     * @apioption rangeSelector.buttons.preserveDataGrouping
     */
    /**
     * A custom data grouping object for each button.
     *
     * @see [series.dataGrouping](#plotOptions.series.dataGrouping)
     *
     * @sample {highstock} stock/demo/rangeselector-datagrouping/
     *         Data grouping by range selector buttons
     *
     * @type      {*}
     * @extends   plotOptions.series.dataGrouping
     * @apioption rangeSelector.buttons.dataGrouping
     */
    /**
     * The text for the button itself.
     *
     * @type      {string}
     * @apioption rangeSelector.buttons.text
     */
    /**
     * Explanation for the button, shown as a tooltip on hover, and used by
     * assistive technology.
     *
     * @type      {string}
     * @apioption rangeSelector.buttons.title
     */
    /**
     * Defined the time span for the button. Can be one of `millisecond`,
     * `second`, `minute`, `hour`, `day`, `week`, `month`, `year`, `ytd`,
     * and `all`.
     *
     * @type       {Highcharts.RangeSelectorButtonTypeValue}
     * @apioption  rangeSelector.buttons.type
     */
    /**
     * The space in pixels between the buttons in the range selector.
     */
    buttonSpacing: 5,
    /**
     * Whether to collapse the range selector buttons into a dropdown when
     * there is not enough room to show everything in a single row, instead
     * of dividing the range selector into multiple rows.
     * Can be one of the following:
     *  - `always`: Always collapse
     *  - `responsive`: Only collapse when there is not enough room
     *  - `never`: Never collapse
     *
     * @sample {highstock} stock/rangeselector/dropdown/
     *         Dropdown option
     *
     * @validvalue ["always", "responsive", "never"]
     * @since 9.0.0
     */
    dropdown: 'responsive',
    /**
     * Enable or disable the range selector. Default to `true` for stock
     * charts, using the `stockChart` factory.
     *
     * @sample {highstock} stock/rangeselector/enabled/
     *         Disable the range selector
     *
     * @type {boolean|undefined}
     * @default {highstock} true
     */
    enabled: void 0,
    /**
     * The vertical alignment of the rangeselector box. Allowed properties
     * are `top`, `middle`, `bottom`.
     *
     * @sample {highstock} stock/rangeselector/vertical-align-middle/
     *         Middle
     * @sample {highstock} stock/rangeselector/vertical-align-bottom/
     *         Bottom
     *
     * @type  {Highcharts.VerticalAlignValue}
     * @since 6.0.0
     */
    verticalAlign: 'top',
    /**
     * A collection of attributes for the buttons. The object takes SVG
     * attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button
     * states.
     *
     * CSS styles for the text label.
     *
     * In styled mode, the buttons are styled by the
     * `.highcharts-range-selector-buttons .highcharts-button` rule with its
     * different states.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type {Highcharts.SVGAttributes}
     */
    buttonTheme: {
        /** @ignore */
        width: 28,
        /** @ignore */
        height: 18,
        /** @ignore */
        padding: 2,
        /** @ignore */
        zIndex: 7 // #484, #852
    },
    /**
     * When the rangeselector is floating, the plot area does not reserve
     * space for it. This opens for positioning anywhere on the chart.
     *
     * @sample {highstock} stock/rangeselector/floating/
     *         Placing the range selector between the plot area and the
     *         navigator
     *
     * @since 6.0.0
     */
    floating: false,
    /**
     * The x offset of the range selector relative to its horizontal
     * alignment within `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @since 6.0.0
     */
    x: 0,
    /**
     * The y offset of the range selector relative to its horizontal
     * alignment within `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @since 6.0.0
     */
    y: 0,
    /**
     * Deprecated. The height of the range selector. Currently it is
     * calculated dynamically.
     *
     * @deprecated
     * @type  {number|undefined}
     * @since 2.1.9
     */
    height: void 0, // Reserved space for buttons and input
    /**
     * The border color of the date input boxes.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type      {Highcharts.ColorString}
     * @since     1.3.7
     */
    inputBoxBorderColor: 'none',
    /**
     * The pixel height of the date input boxes.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @since     1.3.7
     */
    inputBoxHeight: 17,
    /**
     * The pixel width of the date input boxes. When `undefined`, the width
     * is fitted to the rendered content.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type   {number|undefined}
     * @since  1.3.7
     */
    inputBoxWidth: void 0,
    /**
     * The date format in the input boxes when not selected for editing.
     * Defaults to `%e %b %Y`.
     *
     * This is used to determine which type of input to show,
     * `datetime-local`, `date` or `time` and falling back to `text` when
     * the browser does not support the input type or the format contains
     * milliseconds.
     *
     * @sample {highstock} stock/rangeselector/input-type/
     *         Input types
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     */
    inputDateFormat: '%[ebY]',
    /**
     * A custom callback function to parse values entered in the input boxes and
     * return a valid JavaScript time as milliseconds since 1970. The first
     * argument passed is the value to parse, second is a boolean indicating use
     * of UTC time. The third is a reference to the `time` object. Time zone can
     * be read from `time.timezone`.
     *
     * This will only get called for inputs of type `text`. Since v8.2.3, the
     * input type is dynamically determined based on the granularity of the
     * `inputDateFormat` and the browser support.
     *
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     * @type      {Highcharts.RangeSelectorParseCallbackFunction}
     * @since     1.3.3
     */
    inputDateParser: void 0,
    /**
     * The date format in the input boxes when they are selected for
     * editing. This must be a format that is recognized by JavaScript
     * Date.parse.
     *
     * This will only be used for inputs of type `text`. Since v8.2.3,
     * the input type is dynamically determined based on the granularity
     * of the `inputDateFormat` and the browser support.
     *
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     */
    inputEditDateFormat: '%Y-%m-%d',
    /**
     * Enable or disable the date input boxes.
     */
    inputEnabled: true,
    /**
     * Positioning for the input boxes. Allowed properties are `align`,
     *  `x` and `y`.
     *
     * @since 1.2.4
     */
    inputPosition: {
        /**
         * The alignment of the input box. Allowed properties are `left`,
         * `center`, `right`.
         *
         * @sample {highstock} stock/rangeselector/input-button-opposite-alignment/
         *         Opposite alignment
         *
         * @sample {highstock} stock/rangeselector/input-button-same-alignment/
         *         Same alignment for buttons and input
         *
         * @type  {Highcharts.AlignValue}
         * @since 6.0.0
         */
        align: 'right',
        /**
         * X offset of the input row.
         */
        x: 0,
        /**
         * Y offset of the input row.
         */
        y: 0
    },
    /**
     * The space in pixels between the labels and the date input boxes in
     * the range selector.
     *
     * @since 9.0.0
     */
    inputSpacing: 5,
    /**
     * The index of the button to appear pre-selected. If the selected range
     * exceeds the total data range and the 'all' option is available,
     * the 'all' option, showing the full range, is automatically selected.
     *
     * @type      {number}
     */
    selected: void 0,
    /**
     * Positioning for the button row.
     *
     * @since 1.2.4
     */
    buttonPosition: {
        /**
         * The alignment of the input box. Allowed properties are `left`,
         * `center`, `right`.
         *
         * @sample {highstock} stock/rangeselector/input-button-opposite-alignment/
         *         Opposite alignment
         *
         * @sample {highstock} stock/rangeselector/input-button-same-alignment/
         *         Same alignment for buttons and input
         *
         * @type  {Highcharts.AlignValue}
         * @since 6.0.0
         */
        align: 'left',
        /**
         * X offset of the button row.
         */
        x: 0,
        /**
         * Y offset of the button row.
         */
        y: 0
    },
    /**
     * CSS for the HTML inputs in the range selector.
     *
     * In styled mode, the inputs are styled by the
     * `.highcharts-range-input text` rule in SVG mode, and
     * `input.highcharts-range-selector` when active.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type      {Highcharts.CSSObject}
     * @apioption rangeSelector.inputStyle
     */
    inputStyle: {
        /** @ignore */
        color: 'var(--highcharts-highlight-color-80)',
        /** @ignore */
        cursor: 'pointer',
        /** @ignore */
        fontSize: '0.8em'
    },
    /**
     * CSS styles for the labels - the Zoom, From and To texts.
     *
     * In styled mode, the labels are styled by the
     * `.highcharts-range-label` class.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type {Highcharts.CSSObject}
     */
    labelStyle: {
        /** @ignore */
        color: 'var(--highcharts-neutral-color-60)',
        /** @ignore */
        fontSize: '0.8em'
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var RangeSelectorDefaults = {
    lang: lang,
    rangeSelector: rangeSelector
};
/** @internal */
/* harmony default export */ var RangeSelector_RangeSelectorDefaults = (RangeSelectorDefaults);

;// ./code/es5/es-modules/Stock/RangeSelector/RangeSelectorComposition.js
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


var RangeSelectorComposition_defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;

var RangeSelectorComposition_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;


/* *
 *
 *  Constants
 *
 * */
var chartDestroyEvents = [];
/* *
 *
 *  Variables
 *
 * */
var RangeSelectorConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Get the axis min value based on the range option and the current max. For
 * stock charts this is extended via the {@link RangeSelector} so that if the
 * selected range is a multiple of months or years, it is compensated for
 * various month lengths.
 *
 * @internal
 * @function Highcharts.Axis#minFromRange
 * @return {number|undefined}
 *         The new minimum value.
 */
function axisMinFromRange() {
    var rangeOptions = this.range,
        type = rangeOptions.type,
        max = this.max,
        time = this.chart.time, 
        // Get the true range from a start date
        getTrueRange = function (base,
        count) {
            var original = time.toParts(base),
        modified = original.slice();
        if (type === 'year') {
            modified[0] += count;
        }
        else {
            modified[1] += count;
        }
        var d = time.makeTime.apply(time,
            modified);
        var numbers = time.toParts(d);
        // When subtracting a month still places us in the same month, like
        // subtracting one month from March 31 places us on February 31,
        // which translates to March 3 (#6537)
        if (type === 'month' &&
            original[1] === numbers[1] &&
            Math.abs(count) === 1) {
            modified[0] = original[0];
            modified[1] = original[1];
            // 0 is the last day of the previous month
            modified[2] = 0;
        }
        d = time.makeTime.apply(time, modified);
        return d - base;
    };
    var min,
        range;
    if (isNumber(rangeOptions)) {
        min = max - rangeOptions;
        range = rangeOptions;
    }
    else if (rangeOptions) {
        min = max + getTrueRange(max, -(rangeOptions.count || 1));
        // Let the fixedRange reflect initial settings (#5930)
        if (this.chart) {
            this.chart.setFixedRange(max - min);
        }
    }
    var dataMin = pick(this.dataMin,
        Number.MIN_VALUE);
    if (!isNumber(min)) {
        min = dataMin;
    }
    if (min <= dataMin) {
        min = dataMin;
        if (typeof range === 'undefined') { // #4501
            range = getTrueRange(min, rangeOptions.count);
        }
        this.newMax = Math.min(min + range, pick(this.dataMax, Number.MAX_VALUE));
    }
    if (!isNumber(max)) {
        min = void 0;
    }
    else if (!isNumber(rangeOptions) &&
        rangeOptions &&
        rangeOptions._offsetMin) {
        min += rangeOptions._offsetMin;
    }
    return min;
}
/** @internal */
function updateRangeSelectorButtons() {
    var _a;
    (_a = this.rangeSelector) === null || _a === void 0 ? void 0 : _a.redrawElements();
}
/** @internal */
function RangeSelectorComposition_compose(AxisClass, ChartClass, RangeSelectorClass) {
    RangeSelectorConstructor = RangeSelectorClass;
    if (pushUnique(RangeSelectorComposition_composed, 'RangeSelector')) {
        var chartProto = ChartClass.prototype;
        AxisClass.prototype.minFromRange = axisMinFromRange;
        addEvent(ChartClass, 'afterGetContainer', createRangeSelector);
        addEvent(ChartClass, 'beforeRender', RangeSelectorComposition_onChartBeforeRender);
        addEvent(ChartClass, 'destroy', onChartDestroy);
        addEvent(ChartClass, 'getMargins', onChartGetMargins);
        addEvent(ChartClass, 'redraw', redrawRangeSelector);
        addEvent(ChartClass, 'update', RangeSelectorComposition_onChartUpdate);
        addEvent(ChartClass, 'beforeRedraw', updateRangeSelectorButtons);
        chartProto.callbacks.push(redrawRangeSelector);
        extend(RangeSelectorComposition_defaultOptions, { rangeSelector: RangeSelector_RangeSelectorDefaults.rangeSelector });
        extend(RangeSelectorComposition_defaultOptions.lang, RangeSelector_RangeSelectorDefaults.lang);
    }
}
/**
 * Initialize rangeselector for stock charts
 * @internal
 */
function createRangeSelector() {
    if (this.options.rangeSelector &&
        this.options.rangeSelector.enabled) {
        this.rangeSelector = new RangeSelectorConstructor(this);
    }
}
/** @internal */
function RangeSelectorComposition_onChartBeforeRender() {
    var chart = this,
        rangeSelector = chart.rangeSelector;
    if (rangeSelector) {
        if (isNumber(rangeSelector.deferredYTDClick)) {
            rangeSelector.clickButton(rangeSelector.deferredYTDClick);
            delete rangeSelector.deferredYTDClick;
        }
        var verticalAlign = rangeSelector.options.verticalAlign;
        if (!rangeSelector.options.floating) {
            if (verticalAlign === 'bottom') {
                this.extraBottomMargin = true;
            }
            else if (verticalAlign === 'top') {
                this.extraTopMargin = true;
            }
        }
    }
}
/**
 * Redraw rangeSelector on chart redraw event
 * @internal
 */
function redrawRangeSelector() {
    var chart = this;
    var rangeSelector = this.rangeSelector;
    if (!rangeSelector) {
        return;
    }
    var alignTo;
    var extremes = chart.xAxis[0].getExtremes();
    var legend = chart.legend;
    var verticalAlign = (rangeSelector &&
            rangeSelector.options.verticalAlign);
    if (isNumber(extremes.min)) {
        rangeSelector.render(extremes.min, extremes.max);
    }
    // Re-align the legend so that it's below the rangeselector
    if ((legend === null || legend === void 0 ? void 0 : legend.display) &&
        verticalAlign === 'top' &&
        verticalAlign === legend.options.verticalAlign) {
        // Create a new alignment box for the legend.
        alignTo = merge(chart.spacingBox);
        if (legend.options.layout === 'vertical') {
            alignTo.y = chart.plotTop;
        }
        else {
            alignTo.y += rangeSelector.getHeight();
        }
        legend.group.placed = false; // Don't animate the alignment.
        legend.align(alignTo);
    }
}
/**
 * Remove resize/afterSetExtremes at chart destroy.
 * @internal
 */
function onChartDestroy() {
    for (var i = 0, iEnd = chartDestroyEvents.length; i < iEnd; ++i) {
        var events = chartDestroyEvents[i];
        if (events[0] === this) {
            events[1].forEach(function (unbind) { return unbind(); });
            chartDestroyEvents.splice(i, 1);
            return;
        }
    }
}
/**
 * Reflow rangeSelector and adjust chart layout
 * @internal
 */
function onChartGetMargins() {
    var _a;
    var rangeSelector = this.rangeSelector;
    if ((_a = rangeSelector === null || rangeSelector === void 0 ? void 0 : rangeSelector.options) === null || _a === void 0 ? void 0 : _a.enabled) {
        // Rerender rangeSelector in order to return correct plotHeight, #23058
        var _b = this.xAxis[0].getExtremes(),
            min = _b.min,
            max = _b.max;
        if (isNumber(min) &&
            rangeSelector.inputGroup &&
            rangeSelector.inputGroup.getBBox().width < 20) {
            rangeSelector.render(min, max);
        }
        var rangeSelectorHeight = rangeSelector.getHeight();
        var verticalAlign = rangeSelector.options.verticalAlign;
        if (!rangeSelector.options.floating) {
            if (verticalAlign === 'bottom') {
                this.marginBottom += rangeSelectorHeight;
            }
            else if (verticalAlign !== 'middle') {
                this.plotTop += rangeSelectorHeight;
            }
        }
    }
}
/** @internal */
function RangeSelectorComposition_onChartUpdate(e) {
    var chart = this,
        options = e.options,
        optionsRangeSelector = options.rangeSelector,
        extraBottomMarginWas = this.extraBottomMargin,
        extraTopMarginWas = this.extraTopMargin;
    var rangeSelector = chart.rangeSelector;
    if (optionsRangeSelector &&
        optionsRangeSelector.enabled &&
        !defined(rangeSelector) &&
        this.options.rangeSelector) {
        this.options.rangeSelector.enabled = true;
        this.rangeSelector = rangeSelector = new RangeSelectorConstructor(this);
    }
    this.extraBottomMargin = false;
    this.extraTopMargin = false;
    if (rangeSelector) {
        var verticalAlign = (optionsRangeSelector &&
                optionsRangeSelector.verticalAlign) || (rangeSelector.options && rangeSelector.options.verticalAlign);
        if (!rangeSelector.options.floating) {
            if (verticalAlign === 'bottom') {
                this.extraBottomMargin = true;
            }
            else if (verticalAlign !== 'middle') {
                this.extraTopMargin = true;
            }
        }
        if (this.extraBottomMargin !== extraBottomMarginWas ||
            this.extraTopMargin !== extraTopMarginWas) {
            this.isDirtyBox = true;
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var RangeSelectorComposition = {
    compose: RangeSelectorComposition_compose
};
/** @internal */
/* harmony default export */ var RangeSelector_RangeSelectorComposition = (RangeSelectorComposition);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGElement"],"commonjs":["highcharts","SVGElement"],"commonjs2":["highcharts","SVGElement"],"root":["Highcharts","SVGElement"]}
var highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_ = __webpack_require__(28);
var highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Templating"],"commonjs":["highcharts","Templating"],"commonjs2":["highcharts","Templating"],"root":["Highcharts","Templating"]}
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_ = __webpack_require__(984);
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default = /*#__PURE__*/__webpack_require__.n(highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_);
;// ./code/es5/es-modules/Stock/RangeSelector/RangeSelector.js
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



var RangeSelector_defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;




var format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format;

/* *
 *
 *  Functions
 *
 * */
/**
 * Get the preferred input type based on a date format string.
 *
 * @internal
 * @function preferredInputType
 */
function preferredInputType(format) {
    var hasTimeKey = function (char) {
            return new RegExp("%[[a-zA-Z]*".concat(char)).test(format);
    };
    var ms = isString(format) ?
            format.indexOf('%L') !== -1 :
            // Implemented but not typed as of 2024
            format.fractionalSecondDigits;
    if (ms) {
        return 'text';
    }
    var date = isString(format) ?
            ['a', 'A', 'd', 'e', 'w', 'b', 'B', 'm', 'o', 'y', 'Y']
                .some(hasTimeKey) :
            format.dateStyle || format.day || format.month || format.year;
    var time = isString(format) ?
            ['H', 'k', 'I', 'l', 'M', 'S'].some(hasTimeKey) :
            format.timeStyle || format.hour || format.minute || format.second;
    if (date && time) {
        return 'datetime-local';
    }
    if (date) {
        return 'date';
    }
    if (time) {
        return 'time';
    }
    return 'text';
}
/* *
 *
 *  Class
 *
 * */
/**
 * The range selector.
 *
 * @internal
 * @class
 * @name Highcharts.RangeSelector
 * @param {Highcharts.Chart} chart
 */
var RangeSelector = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function RangeSelector(chart) {
        var _this = this;
        this.isDirty = false;
        this.buttonOptions = [];
        this.initialButtonGroupWidth = 0;
        this.maxButtonWidth = function () {
            var buttonWidth = 0;
            _this.buttons.forEach(function (button) {
                var bBox = button.getBBox();
                if (bBox.width > buttonWidth) {
                    buttonWidth = bBox.width;
                }
            });
            return buttonWidth;
        };
        this.init(chart);
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    RangeSelector.compose = function (AxisClass, ChartClass) {
        RangeSelector_RangeSelectorComposition.compose(AxisClass, ChartClass, RangeSelector);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * The method to run when one of the buttons in the range selectors is
     * clicked
     *
     * @internal
     * @function Highcharts.RangeSelector#clickButton
     * @param {number} i
     *        The index of the button
     * @param {boolean} [redraw]
     */
    RangeSelector.prototype.clickButton = function (i, redraw) {
        var rangeSelector = this,
            chart = rangeSelector.chart,
            rangeOptions = rangeSelector.buttonOptions[i],
            baseAxis = chart.xAxis[0],
            unionExtremes = (chart.scroller && chart.scroller.getUnionExtremes()) || baseAxis || {},
            type = rangeOptions.type,
            dataGrouping = rangeOptions.dataGrouping;
        var dataMin = unionExtremes.dataMin,
            dataMax = unionExtremes.dataMax,
            newMin,
            newMax = isNumber(baseAxis === null || baseAxis === void 0 ? void 0 : baseAxis.max) ? Math.round(Math.min(baseAxis.max,
            dataMax !== null && dataMax !== void 0 ? dataMax : baseAxis.max)) : void 0, // #1568
            baseXAxisOptions,
            range = rangeOptions._range,
            rangeMin,
            ctx,
            ytdExtremes,
            addOffsetMin = true;
        // Chart has no data, base series is removed
        if (dataMin === null || dataMax === null) {
            return;
        }
        rangeSelector.setSelected(i);
        // Apply dataGrouping associated to button
        if (dataGrouping) {
            this.forcedDataGrouping = true;
            highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default().prototype.setDataGrouping.call(baseAxis || { chart: this.chart }, dataGrouping, false);
            this.frozenStates = rangeOptions.preserveDataGrouping;
        }
        // Apply range
        if (type === 'month' || type === 'year') {
            if (!baseAxis) {
                // This is set to the user options and picked up later when the
                // axis is instantiated so that we know the min and max.
                range = rangeOptions;
            }
            else {
                ctx = {
                    range: rangeOptions,
                    max: newMax,
                    chart: chart,
                    dataMin: dataMin,
                    dataMax: dataMax
                };
                newMin = baseAxis.minFromRange.call(ctx);
                if (isNumber(ctx.newMax)) {
                    newMax = ctx.newMax;
                }
                // #15799: offsetMin is added in minFromRange so that it works
                // with pre-selected buttons as well
                addOffsetMin = false;
            }
            // Fixed times like minutes, hours, days
        }
        else if (range) {
            if (isNumber(newMax)) {
                newMin = Math.max(newMax - range, dataMin);
                newMax = Math.min(newMin + range, dataMax);
                addOffsetMin = false;
            }
        }
        else if (type === 'ytd') {
            // On user clicks on the buttons, or a delayed action running from
            // the beforeRender event (below), the baseAxis is defined.
            if (baseAxis) {
                // When "ytd" is the pre-selected button for the initial view,
                // its calculation is delayed and rerun in the beforeRender
                // event (below). When the series are initialized, but before
                // the chart is rendered, we have access to the xData array
                // (#942).
                if (baseAxis.hasData() && (!isNumber(dataMax) ||
                    !isNumber(dataMin))) {
                    dataMin = Number.MAX_VALUE;
                    dataMax = -Number.MAX_VALUE;
                    chart.series.forEach(function (series) {
                        // Reassign it to the last item
                        var xData = series.getColumn('x');
                        if (xData.length) {
                            dataMin = Math.min(xData[0], dataMin);
                            dataMax = Math.max(xData[xData.length - 1], dataMax);
                        }
                    });
                    redraw = false;
                }
                if (isNumber(dataMax) && isNumber(dataMin)) {
                    ytdExtremes = rangeSelector.getYTDExtremes(dataMax, dataMin);
                    newMin = rangeMin = ytdExtremes.min;
                    newMax = ytdExtremes.max;
                }
                // "ytd" is pre-selected. We don't yet have access to processed
                // point and extremes data (things like pointStart and pointInterval
                // are missing), so we delay the process (#942)
            }
            else {
                rangeSelector.deferredYTDClick = i;
                return;
            }
        }
        else if (type === 'all' && baseAxis) {
            // If the navigator exist and the axis range is declared reset that
            // range and from now on only use the range set by a user, #14742.
            if (chart.navigator && chart.navigator.baseSeries[0]) {
                chart.navigator.baseSeries[0].xAxis.options.range = void 0;
            }
            newMin = dataMin;
            newMax = dataMax;
        }
        if (addOffsetMin && rangeOptions._offsetMin && defined(newMin)) {
            newMin += rangeOptions._offsetMin;
        }
        if (rangeOptions._offsetMax && defined(newMax)) {
            newMax += rangeOptions._offsetMax;
        }
        if (this.dropdown) {
            this.dropdown.selectedIndex = i + 1;
        }
        // Update the chart
        if (!baseAxis) {
            // Axis not yet instantiated. Temporarily set min and range
            // options and axes once defined and remove them on
            // chart load (#4317 & #20529).
            baseXAxisOptions = splat(chart.options.xAxis || {})[0];
            var axisRangeUpdateEvent_1 = addEvent(chart, 'afterCreateAxes',
                function () {
                    var xAxis = chart.xAxis[0];
                xAxis.range = xAxis.options.range = range;
                xAxis.min = xAxis.options.min = rangeMin;
            });
            addEvent(chart, 'load', function resetMinAndRange() {
                var xAxis = chart.xAxis[0];
                chart.setFixedRange(rangeOptions._range);
                xAxis.options.range = baseXAxisOptions.range;
                xAxis.options.min = baseXAxisOptions.min;
                axisRangeUpdateEvent_1(); // Remove event
            });
        }
        else if (isNumber(newMin) || isNumber(newMax)) {
            // Existing axis object. Set extremes after render time.
            baseAxis.setExtremes(newMin, newMax, pick(redraw, true), void 0, // Auto animation
            {
                trigger: 'rangeSelectorButton',
                rangeSelectorButton: rangeOptions
            });
            chart.setFixedRange(rangeOptions._range);
        }
        fireEvent(this, 'afterBtnClick');
    };
    /**
     * Set the selected option. This method only sets the internal flag, it
     * doesn't update the buttons or the actual zoomed range.
     *
     * @internal
     * @function Highcharts.RangeSelector#setSelected
     * @param {number} [selected]
     */
    RangeSelector.prototype.setSelected = function (selected) {
        this.selected = this.options.selected = selected;
    };
    /**
     * Initialize the range selector
     *
     * @internal
     * @function Highcharts.RangeSelector#init
     * @param {Highcharts.Chart} chart
     */
    RangeSelector.prototype.init = function (chart) {
        var rangeSelector = this,
            options = chart.options.rangeSelector,
            langOptions = chart.options.lang,
            buttonOptions = options.buttons,
            selectedOption = options.selected,
            blurInputs = function () {
                var minInput = rangeSelector.minInput,
            maxInput = rangeSelector.maxInput;
            // #3274 in some case blur is not defined
            if (minInput && !!minInput.blur) {
                fireEvent(minInput, 'blur');
            }
            if (maxInput && !!maxInput.blur) {
                fireEvent(maxInput, 'blur');
            }
        };
        rangeSelector.chart = chart;
        rangeSelector.options = options;
        rangeSelector.buttons = [];
        rangeSelector.buttonOptions = buttonOptions
            .map(function (opt) {
            var _a,
                _b;
            if (opt.type && langOptions.rangeSelector) {
                (_a = opt.text) !== null && _a !== void 0 ? _a : (opt.text = langOptions.rangeSelector["" + opt.type + "Text"]);
                (_b = opt.title) !== null && _b !== void 0 ? _b : (opt.title = langOptions.rangeSelector["" + opt.type + "Title"]);
            }
            opt.text = format(opt.text, {
                count: opt.count || 1
            });
            opt.title = format(opt.title, {
                count: opt.count || 1
            });
            return opt;
        });
        this.eventsToUnbind = [];
        this.eventsToUnbind.push(addEvent(chart.container, 'mousedown', blurInputs));
        this.eventsToUnbind.push(addEvent(chart, 'resize', blurInputs));
        // Extend the buttonOptions with actual range
        buttonOptions.forEach(rangeSelector.computeButtonRange);
        // Zoomed range based on a pre-selected button index
        if (typeof selectedOption !== 'undefined' &&
            buttonOptions[selectedOption]) {
            this.clickButton(selectedOption, false);
        }
        this.eventsToUnbind.push(addEvent(chart, 'load', function () {
            // If a data grouping is applied to the current button, release it
            // when extremes change
            if (chart.xAxis && chart.xAxis[0]) {
                addEvent(chart.xAxis[0], 'setExtremes', function (e) {
                    if (isNumber(this.max) &&
                        isNumber(this.min) &&
                        this.max - this.min !== chart.fixedRange &&
                        e.trigger !== 'rangeSelectorButton' &&
                        e.trigger !== 'updatedData' &&
                        rangeSelector.forcedDataGrouping &&
                        !rangeSelector.frozenStates) {
                        this.setDataGrouping(false, false);
                    }
                });
            }
        }));
        this.createElements();
    };
    /**
     * Dynamically update the range selector buttons after a new range has been
     * set
     *
     * @internal
     * @function Highcharts.RangeSelector#updateButtonStates
     */
    RangeSelector.prototype.updateButtonStates = function () {
        var rangeSelector = this,
            chart = this.chart,
            dropdown = this.dropdown,
            dropdownLabel = this.dropdownLabel,
            baseAxis = chart.xAxis[0],
            actualRange = Math.round(baseAxis.max - baseAxis.min),
            hasNoData = !baseAxis.hasVisibleSeries,
            day = 24 * 36e5, // A single day in milliseconds
            unionExtremes = (chart.scroller &&
                chart.scroller.getUnionExtremes()) || baseAxis,
            dataMin = unionExtremes.dataMin,
            dataMax = unionExtremes.dataMax,
            ytdExtremes = rangeSelector.getYTDExtremes(dataMax,
            dataMin),
            ytdMin = ytdExtremes.min,
            ytdMax = ytdExtremes.max,
            selected = rangeSelector.selected,
            allButtonsEnabled = rangeSelector.options.allButtonsEnabled,
            buttonStates = new Array(rangeSelector.buttonOptions.length)
                .fill(0),
            selectedExists = isNumber(selected),
            buttons = rangeSelector.buttons;
        var isSelectedTooGreat = false,
            selectedIndex = null;
        rangeSelector.buttonOptions.forEach(function (rangeOptions, i) {
            var _a;
            var range = rangeOptions._range,
                type = rangeOptions.type,
                count = rangeOptions.count || 1,
                offsetRange = rangeOptions._offsetMax -
                    rangeOptions._offsetMin,
                isSelected = i === selected, 
                // Disable buttons where the range exceeds what is allowed i;
            // the current view
            isTooGreatRange = range >
                dataMax - dataMin, 
            // Disable buttons where the range is smaller than the minimum
            // range
            isTooSmallRange = range < baseAxis.minRange;
            // Do not select the YTD button if not explicitly told so
            var isYTDButNotSelected = false, 
                // Disable the All button if we're already showing all
                isSameRange = range === actualRange;
            if (isSelected && isTooGreatRange) {
                isSelectedTooGreat = true;
            }
            if (baseAxis.isOrdinal &&
                ((_a = baseAxis.ordinal) === null || _a === void 0 ? void 0 : _a.positions) &&
                range &&
                actualRange < range) {
                // Handle ordinal ranges
                var positions = baseAxis.ordinal.positions;
                if (positions[positions.length - 1] - positions[0] > range) {
                    isSameRange = true;
                }
            }
            else if (
            // Months and years have variable range so we check the extremes
            (type === 'month' || type === 'year') &&
                (actualRange + 36e5 >=
                    { month: 28, year: 365 }[type] * day * count - offsetRange) &&
                (actualRange - 36e5 <=
                    { month: 31, year: 366 }[type] * day * count + offsetRange)) {
                isSameRange = true;
            }
            else if (type === 'ytd') {
                isSameRange = (ytdMax - ytdMin + offsetRange) === actualRange;
                isYTDButNotSelected = !isSelected;
            }
            else if (type === 'all') {
                isSameRange = (baseAxis.max - baseAxis.min >=
                    dataMax - dataMin);
            }
            // The new zoom area happens to match the range for a button - mark
            // it selected. This happens when scrolling across an ordinal gap.
            // It can be seen in the intraday demos when selecting 1h and scroll
            // across the night gap.
            var disable = (!allButtonsEnabled &&
                    !(isSelectedTooGreat && type === 'all') &&
                    (isTooGreatRange ||
                        isTooSmallRange ||
                        hasNoData));
            var select = ((isSelectedTooGreat && type === 'all') ||
                    (isYTDButNotSelected ? false : isSameRange) ||
                    (isSelected && rangeSelector.frozenStates));
            if (disable) {
                buttonStates[i] = 3;
            }
            else if (select) {
                if (!selectedExists || i === selected) {
                    selectedIndex = i;
                }
            }
        });
        if (selectedIndex !== null) {
            buttonStates[selectedIndex] = 2;
            rangeSelector.setSelected(selectedIndex);
            if (this.dropdown) {
                this.dropdown.selectedIndex = selectedIndex + 1;
            }
        }
        else {
            rangeSelector.setSelected();
            if (this.dropdown) {
                this.dropdown.selectedIndex = -1;
            }
            if (dropdownLabel) {
                dropdownLabel.setState(0);
                dropdownLabel.attr({
                    text: (RangeSelector_defaultOptions.lang.rangeSelectorZoom || '') + ' ▾'
                });
            }
        }
        for (var i = 0; i < buttonStates.length; i++) {
            var state = buttonStates[i];
            var button = buttons[i];
            if (button.state !== state) {
                button.setState(state);
                if (dropdown) {
                    dropdown.options[i + 1].disabled = (state === 3);
                    if (state === 2) {
                        if (dropdownLabel) {
                            dropdownLabel.setState(2);
                            dropdownLabel.attr({
                                text: rangeSelector.buttonOptions[i].text + ' ▾'
                            });
                        }
                        dropdown.selectedIndex = i + 1;
                    }
                    var bbox = dropdownLabel.getBBox();
                    css(dropdown, {
                        width: "" + bbox.width + "px",
                        height: "" + bbox.height + "px"
                    });
                }
            }
        }
    };
    /**
     * Compute and cache the range for an individual button
     *
     * @internal
     * @function Highcharts.RangeSelector#computeButtonRange
     * @param {Highcharts.RangeSelectorButtonsOptions} rangeOptions
     */
    RangeSelector.prototype.computeButtonRange = function (rangeOptions) {
        var type = rangeOptions.type,
            count = rangeOptions.count || 1, 
            // These time intervals have a fixed number of milliseconds, as
            // opposed to month, ytd and year
            fixedTimes = {
                millisecond: 1,
                second: 1000,
                minute: 60 * 1000,
                hour: 3600 * 1000,
                day: 24 * 3600 * 1000,
                week: 7 * 24 * 3600 * 1000
            };
        // Store the range on the button object
        if (fixedTimes[type]) {
            rangeOptions._range = fixedTimes[type] * count;
        }
        else if (type === 'month' || type === 'year') {
            rangeOptions._range = {
                month: 30,
                year: 365
            }[type] * 24 * 36e5 * count;
        }
        rangeOptions._offsetMin = pick(rangeOptions.offsetMin, 0);
        rangeOptions._offsetMax = pick(rangeOptions.offsetMax, 0);
        rangeOptions._range +=
            rangeOptions._offsetMax - rangeOptions._offsetMin;
    };
    /**
     * Get the unix timestamp of a HTML input for the dates
     *
     * @internal
     * @function Highcharts.RangeSelector#getInputValue
     */
    RangeSelector.prototype.getInputValue = function (name) {
        var input = name === 'min' ? this.minInput : this.maxInput;
        var options = this.chart.options
                .rangeSelector;
        var time = this.chart.time;
        if (input) {
            return ((input.type === 'text' && options.inputDateParser) ||
                this.defaultInputDateParser)(input.value, time.timezone === 'UTC', time);
        }
        return 0;
    };
    /**
     * Set the internal and displayed value of a HTML input for the dates
     *
     * @internal
     * @function Highcharts.RangeSelector#setInputValue
     */
    RangeSelector.prototype.setInputValue = function (name, inputTime) {
        var options = this.options, time = this.chart.time, input = name === 'min' ? this.minInput : this.maxInput, dateBox = name === 'min' ? this.minDateBox : this.maxDateBox;
        if (input) {
            input.setAttribute('type', preferredInputType(options.inputDateFormat || '%e %b %Y'));
            var hcTimeAttr = input.getAttribute('data-hc-time');
            var updatedTime = defined(hcTimeAttr) ? Number(hcTimeAttr) : void 0;
            if (defined(inputTime)) {
                var previousTime = updatedTime;
                if (defined(previousTime)) {
                    input.setAttribute('data-hc-time-previous', previousTime);
                }
                input.setAttribute('data-hc-time', inputTime);
                updatedTime = inputTime;
            }
            input.value = time.dateFormat((this.inputTypeFormats[input.type] ||
                options.inputEditDateFormat), updatedTime);
            if (dateBox) {
                dateBox.attr({
                    text: time.dateFormat(options.inputDateFormat, updatedTime)
                });
            }
        }
    };
    /**
     * Set the min and max value of a HTML input for the dates
     *
     * @internal
     * @function Highcharts.RangeSelector#setInputExtremes
     */
    RangeSelector.prototype.setInputExtremes = function (name, min, max) {
        var input = name === 'min' ? this.minInput : this.maxInput;
        if (input) {
            var format_1 = this.inputTypeFormats[input.type];
            var time = this.chart.time;
            if (format_1) {
                var newMin = time.dateFormat(format_1,
                    min);
                if (input.min !== newMin) {
                    input.min = newMin;
                }
                var newMax = time.dateFormat(format_1,
                    max);
                if (input.max !== newMax) {
                    input.max = newMax;
                }
            }
        }
    };
    /**
     * @internal
     * @function Highcharts.RangeSelector#showInput
     * @param {string} name
     */
    RangeSelector.prototype.showInput = function (name) {
        var dateBox = name === 'min' ? this.minDateBox : this.maxDateBox, input = name === 'min' ? this.minInput : this.maxInput;
        if (input && dateBox && this.inputGroup) {
            var isTextInput = input.type === 'text',
                _a = this.inputGroup,
                _b = _a.translateX,
                translateX = _b === void 0 ? 0 : _b,
                _c = _a.translateY,
                translateY = _c === void 0 ? 0 : _c,
                _d = dateBox.x,
                x = _d === void 0 ? 0 : _d,
                _e = dateBox.width,
                width = _e === void 0 ? 0 : _e,
                _f = dateBox.height,
                height = _f === void 0 ? 0 : _f,
                inputBoxWidth = this.options.inputBoxWidth;
            css(input, {
                width: isTextInput ?
                    ((width + (inputBoxWidth ? -2 : 20)) + 'px') :
                    'auto',
                height: (height - 2) + 'px',
                border: '2px solid silver'
            });
            if (isTextInput && inputBoxWidth) {
                css(input, {
                    left: (translateX + x) + 'px',
                    top: translateY + 'px'
                });
                // Inputs of types date, time or datetime-local should be centered
                // on top of the dateBox
            }
            else {
                css(input, {
                    left: Math.min(Math.round(x +
                        translateX -
                        (input.offsetWidth - width) / 2), this.chart.chartWidth - input.offsetWidth) + 'px',
                    top: (translateY - (input.offsetHeight - height) / 2) + 'px'
                });
            }
        }
    };
    /**
     * @internal
     * @function Highcharts.RangeSelector#hideInput
     * @param {string} name
     */
    RangeSelector.prototype.hideInput = function (name) {
        var input = name === 'min' ? this.minInput : this.maxInput;
        if (input) {
            css(input, {
                top: '-9999em',
                border: 0,
                width: '1px',
                height: '1px'
            });
        }
    };
    /**
     * @internal
     * @function Highcharts.RangeSelector#defaultInputDateParser
     */
    RangeSelector.prototype.defaultInputDateParser = function (inputDate, useUTC, time) {
        return (time === null || time === void 0 ? void 0 : time.parse(inputDate)) || 0;
    };
    /**
     * Draw either the 'from' or the 'to' HTML input box of the range selector
     *
     * @internal
     * @function Highcharts.RangeSelector#drawInput
     */
    RangeSelector.prototype.drawInput = function (name) {
        var _a = this,
            chart = _a.chart,
            div = _a.div,
            inputGroup = _a.inputGroup;
        var rangeSelector = this,
            chartStyle = chart.renderer.style || {},
            renderer = chart.renderer,
            options = chart.options.rangeSelector,
            lang = RangeSelector_defaultOptions.lang,
            isMin = name === 'min';
        /** @internal */
        function updateExtremes(name) {
            var _a;
            var maxInput = rangeSelector.maxInput,
                minInput = rangeSelector.minInput,
                chartAxis = chart.xAxis[0],
                unionExtremes = ((_a = chart.scroller) === null || _a === void 0 ? void 0 : _a.getUnionExtremes()) || chartAxis,
                dataMin = unionExtremes.dataMin,
                dataMax = unionExtremes.dataMax,
                currentExtreme = chart.xAxis[0].getExtremes()[name];
            var value = rangeSelector.getInputValue(name);
            if (isNumber(value) && value !== currentExtreme) {
                // Validate the extremes. If it goes beyond the data min or
                // max, use the actual data extreme (#2438).
                if (isMin && maxInput && isNumber(dataMin)) {
                    if (value > Number(maxInput.getAttribute('data-hc-time'))) {
                        value = void 0;
                    }
                    else if (value < dataMin) {
                        value = dataMin;
                    }
                }
                else if (minInput && isNumber(dataMax)) {
                    if (value < Number(minInput.getAttribute('data-hc-time'))) {
                        value = void 0;
                    }
                    else if (value > dataMax) {
                        value = dataMax;
                    }
                }
                // Set the extremes
                if (typeof value !== 'undefined') { // @todo typeof undefined
                    chartAxis.setExtremes(isMin ? value : chartAxis.min, isMin ? chartAxis.max : value, void 0, void 0, { trigger: 'rangeSelectorInput' });
                }
            }
        }
        // Create the text label
        var text = lang[isMin ? 'rangeSelectorFrom' : 'rangeSelectorTo'] || '';
        var label = renderer
                .label(text, 0)
                .addClass('highcharts-range-label')
                .attr({
                padding: text ? 2 : 0,
                height: text ? options.inputBoxHeight : 0
            })
                .add(inputGroup);
        // Create an SVG label that shows updated date ranges and records click
        // events that bring in the HTML input.
        var dateBox = renderer
                .label('', 0)
                .addClass('highcharts-range-input')
                .attr({
                padding: 2,
                width: options.inputBoxWidth,
                height: options.inputBoxHeight,
                'text-align': 'center'
            })
                .on('click',
            function () {
                // If it is already focused, the onfocus event doesn't fire
                // (#3713)
                rangeSelector.showInput(name);
            rangeSelector[name + 'Input'].focus();
        });
        if (!chart.styledMode) {
            dateBox.attr({
                stroke: options.inputBoxBorderColor,
                'stroke-width': 1
            });
        }
        dateBox.add(inputGroup);
        // Create the HTML input element. This is rendered as 1x1 pixel then set
        // to the right size when focused.
        var input = createElement('input', {
                name: name,
                className: 'highcharts-range-selector'
            },
            void 0,
            div);
        // #14788: Setting input.type to an unsupported type throws in IE, so
        // we need to use setAttribute instead
        input.setAttribute('type', preferredInputType(options.inputDateFormat || '%e %b %Y'));
        if (!chart.styledMode) {
            // Styles
            label.css(merge(chartStyle, options.labelStyle));
            dateBox.css(merge({
                color: 'var(--highcharts-neutral-color-80)'
            }, chartStyle, options.inputStyle));
            css(input, extend({
                position: 'absolute',
                border: 0,
                boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                width: '1px', // Chrome needs a pixel to see it
                height: '1px',
                padding: 0,
                textAlign: 'center',
                fontSize: chartStyle.fontSize,
                fontFamily: chartStyle.fontFamily,
                top: '-9999em' // #4798
            }, options.inputStyle));
        }
        // Blow up the input box
        input.onfocus = function () {
            rangeSelector.showInput(name);
        };
        // Hide away the input box
        input.onblur = function () {
            // Update extremes only when inputs are active
            if (input === (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc.activeElement) { // Only when focused
                // Update also when no `change` event is triggered, like when
                // clicking inside the SVG (#4710)
                updateExtremes(name);
            }
            // #10404 - move hide and blur outside focus
            rangeSelector.hideInput(name);
            rangeSelector.setInputValue(name);
            input.blur(); // #4606
        };
        var keyDown = false;
        // Handle changes in the input boxes
        input.onchange = function () {
            // Update extremes and blur input when clicking date input calendar
            if (!keyDown) {
                updateExtremes(name);
                rangeSelector.hideInput(name);
                input.blur();
            }
        };
        input.onkeypress = function (event) {
            // IE does not fire onchange on enter
            if (event.keyCode === 13) {
                updateExtremes(name);
            }
        };
        input.onkeydown = function (event) {
            keyDown = true;
            // Arrow keys
            if (event.key === 'ArrowUp' ||
                event.key === 'ArrowDown' ||
                event.key === 'Tab') {
                updateExtremes(name);
            }
        };
        input.onkeyup = function () {
            keyDown = false;
        };
        return { dateBox: dateBox, input: input, label: label };
    };
    /**
     * Get the position of the range selector buttons and inputs. This can be
     * overridden from outside for custom positioning.
     *
     * @internal
     * @function Highcharts.RangeSelector#getPosition
     */
    RangeSelector.prototype.getPosition = function () {
        var chart = this.chart,
            options = chart.options.rangeSelector,
            top = options.verticalAlign === 'top' ?
                chart.plotTop - chart.axisOffset[0] :
                0; // Set offset only for verticalAlign top
            return {
                buttonTop: top + options.buttonPosition.y,
                inputTop: top + options.inputPosition.y - 10
            };
    };
    /**
     * Get the extremes of YTD. Will choose dataMax if its value is lower than
     * the current timestamp. Will choose dataMin if its value is higher than
     * the timestamp for the start of current year.
     *
     * @internal
     * @function Highcharts.RangeSelector#getYTDExtremes
     * @return {*}
     * Returns min and max for the YTD
     */
    RangeSelector.prototype.getYTDExtremes = function (dataMax, dataMin) {
        var time = this.chart.time,
            year = time.toParts(dataMax)[0],
            startOfYear = time.makeTime(year, 0);
        return {
            max: dataMax,
            min: Math.max(dataMin, startOfYear)
        };
    };
    RangeSelector.prototype.createElements = function () {
        var _a;
        var chart = this.chart,
            renderer = chart.renderer,
            container = chart.container,
            chartOptions = chart.options,
            options = chartOptions.rangeSelector,
            inputEnabled = options.inputEnabled,
            inputsZIndex = pick((_a = chartOptions.chart.style) === null || _a === void 0 ? void 0 : _a.zIndex, 0) + 1;
        if (options.enabled === false) {
            return;
        }
        this.group = renderer.g('range-selector-group')
            .attr({
            zIndex: 7
        })
            .add();
        this.div = createElement('div', void 0, {
            position: 'relative',
            height: 0,
            zIndex: inputsZIndex
        });
        if (this.buttonOptions.length) {
            this.renderButtons();
        }
        // First create a wrapper outside the container in order to make
        // the inputs work and make export correct
        if (container.parentNode) {
            container.parentNode.insertBefore(this.div, container);
        }
        if (inputEnabled) {
            this.createInputs();
        }
    };
    /**
     * Create the input elements and its group.
     *
     */
    RangeSelector.prototype.createInputs = function () {
        this.inputGroup = this.chart.renderer.g('input-group').add(this.group);
        var minElems = this.drawInput('min');
        this.minDateBox = minElems.dateBox;
        this.minLabel = minElems.label;
        this.minInput = minElems.input;
        var maxElems = this.drawInput('max');
        this.maxDateBox = maxElems.dateBox;
        this.maxLabel = maxElems.label;
        this.maxInput = maxElems.input;
    };
    /**
     * Render the range selector including the buttons and the inputs. The first
     * time render is called, the elements are created and positioned. On
     * subsequent calls, they are moved and updated.
     *
     * @internal
     * @function Highcharts.RangeSelector#render
     * @param {number} [min]
     *        X axis minimum
     * @param {number} [max]
     *        X axis maximum
     */
    RangeSelector.prototype.render = function (min, max) {
        var _a,
            _b;
        if (this.options.enabled === false) {
            return;
        }
        var chart = this.chart,
            chartOptions = chart.options,
            options = chartOptions.rangeSelector, 
            // Place inputs above the container
            inputEnabled = options.inputEnabled;
        if (inputEnabled) {
            if (!this.inputGroup) {
                this.createInputs();
            }
            // Set or reset the input values
            this.setInputValue('min', min);
            this.setInputValue('max', max);
            if (!this.chart.styledMode) {
                (_a = this.maxLabel) === null || _a === void 0 ? void 0 : _a.css(options.labelStyle);
                (_b = this.minLabel) === null || _b === void 0 ? void 0 : _b.css(options.labelStyle);
            }
            var unionExtremes = (chart.scroller && chart.scroller.getUnionExtremes()) || chart.xAxis[0] || {};
            if (defined(unionExtremes.dataMin) &&
                defined(unionExtremes.dataMax)) {
                var minRange = chart.xAxis[0].minRange || 0;
                this.setInputExtremes('min', unionExtremes.dataMin, Math.min(unionExtremes.dataMax, this.getInputValue('max')) - minRange);
                this.setInputExtremes('max', Math.max(unionExtremes.dataMin, this.getInputValue('min')) + minRange, unionExtremes.dataMax);
            }
            // Reflow
            if (this.inputGroup) {
                var x_1 = 0;
                [
                    this.minLabel,
                    this.minDateBox,
                    this.maxLabel,
                    this.maxDateBox
                ].forEach(function (label) {
                    if (label) {
                        var width = label.getBBox().width;
                        if (width) {
                            label.attr({ x: x_1 });
                            x_1 += width + options.inputSpacing;
                        }
                    }
                });
            }
        }
        else {
            if (this.inputGroup) {
                this.inputGroup.destroy();
                delete this.inputGroup;
            }
        }
        if (!this.chart.styledMode) {
            if (this.zoomText) {
                this.zoomText.css(options.labelStyle);
            }
        }
        this.alignElements();
        this.updateButtonStates();
    };
    /**
     * Render the range buttons. This only runs the first time, later the
     * positioning is laid out in alignElements.
     *
     * @internal
     * @function Highcharts.RangeSelector#renderButtons
     */
    RangeSelector.prototype.renderButtons = function () {
        var _this = this;
        var _a,
            _b;
        var _c;
        var _d = this,
            chart = _d.chart,
            options = _d.options;
        var lang = RangeSelector_defaultOptions.lang;
        var renderer = chart.renderer;
        var buttonTheme = merge(options.buttonTheme);
        var states = buttonTheme && buttonTheme.states;
        // Prevent the button from resetting the width when the button state
        // changes since we need more control over the width when collapsing
        // the buttons
        delete buttonTheme.width;
        delete buttonTheme.states;
        this.buttonGroup = renderer.g('range-selector-buttons').add(this.group);
        var dropdown = this.dropdown = createElement('select',
            void 0, {
                position: 'absolute',
                padding: 0,
                border: 0,
                cursor: 'pointer',
                opacity: 0.0001
            },
            this.div);
        // Create a label for dropdown select element
        var userButtonTheme = (_a = chart.userOptions.rangeSelector) === null || _a === void 0 ? void 0 : _a.buttonTheme;
        this.dropdownLabel = renderer.button('', 0, 0, function () { }, merge(buttonTheme, {
            'stroke-width': pick(buttonTheme['stroke-width'], 0),
            width: 'auto',
            paddingLeft: pick(options.buttonTheme.paddingLeft, userButtonTheme === null || userButtonTheme === void 0 ? void 0 : userButtonTheme.padding, 8),
            paddingRight: pick(options.buttonTheme.paddingRight, userButtonTheme === null || userButtonTheme === void 0 ? void 0 : userButtonTheme.padding, 8)
        }), states && states.hover, states && states.select, states && states.disabled)
            .hide()
            .add(this.group);
        // Prevent page zoom on iPhone
        addEvent(dropdown, 'touchstart', function () {
            dropdown.style.fontSize = '16px';
        });
        // Forward events from select to button
        var mouseOver = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isMS ? 'mouseover' : 'mouseenter', mouseOut = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isMS ? 'mouseout' : 'mouseleave';
        addEvent(dropdown, mouseOver, function () {
            fireEvent(_this.dropdownLabel.element, mouseOver);
        });
        addEvent(dropdown, mouseOut, function () {
            fireEvent(_this.dropdownLabel.element, mouseOut);
        });
        addEvent(dropdown, 'change', function () {
            var button = _this.buttons[dropdown.selectedIndex - 1];
            fireEvent(button.element, 'click');
        });
        this.zoomText = renderer
            .label(lang.rangeSelectorZoom || '', 0)
            .attr({
            padding: options.buttonTheme.padding,
            height: options.buttonTheme.height,
            paddingLeft: 0,
            paddingRight: 0
        })
            .add(this.buttonGroup);
        if (!this.chart.styledMode) {
            this.zoomText.css(options.labelStyle);
            (_b = (_c = options.buttonTheme)['stroke-width']) !== null && _b !== void 0 ? _b : (_c['stroke-width'] = 0);
        }
        createElement('option', {
            textContent: this.zoomText.textStr,
            disabled: true
        }, void 0, dropdown);
        this.createButtons();
    };
    RangeSelector.prototype.createButtons = function () {
        var _this = this;
        var options = this.options;
        var buttonTheme = merge(options.buttonTheme);
        var states = buttonTheme && buttonTheme.states;
        // Prevent the button from resetting the width when the button state
        // changes since we need more control over the width when collapsing
        // the buttons
        var width = buttonTheme.width || 28;
        delete buttonTheme.width;
        delete buttonTheme.states;
        this.buttonOptions.forEach(function (rangeOptions, i) {
            _this.createButton(rangeOptions, i, width, states);
        });
    };
    RangeSelector.prototype.createButton = function (rangeOptions, i, width, states) {
        var _this = this;
        var _a;
        var _b = this,
            dropdown = _b.dropdown,
            buttons = _b.buttons,
            chart = _b.chart,
            options = _b.options;
        var renderer = chart.renderer;
        var buttonTheme = merge(options.buttonTheme);
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.add(createElement('option', {
            textContent: rangeOptions.title || rangeOptions.text
        }), i + 2);
        buttons[i] = renderer
            .button((_a = rangeOptions.text) !== null && _a !== void 0 ? _a : '', 0, 0, function (e) {
            // Extract events from button object and call
            var buttonEvents = (rangeOptions.events && rangeOptions.events.click);
            var callDefaultEvent;
            if (buttonEvents) {
                callDefaultEvent =
                    buttonEvents.call(rangeOptions, e);
            }
            if (callDefaultEvent !== false) {
                _this.clickButton(i);
            }
            _this.isActive = true;
        }, buttonTheme, states && states.hover, states && states.select, states && states.disabled)
            .attr({
            'text-align': 'center',
            width: width
        })
            .add(this.buttonGroup);
        if (rangeOptions.title) {
            buttons[i].attr('title', rangeOptions.title);
        }
    };
    /**
     * Align the elements horizontally and vertically.
     *
     * @internal
     * @function Highcharts.RangeSelector#alignElements
     */
    RangeSelector.prototype.alignElements = function () {
        var _this = this;
        var _a;
        var _b = this,
            buttonGroup = _b.buttonGroup,
            buttons = _b.buttons,
            chart = _b.chart,
            group = _b.group,
            inputGroup = _b.inputGroup,
            options = _b.options,
            zoomText = _b.zoomText;
        var chartOptions = chart.options;
        var navButtonOptions = (chartOptions.exporting &&
                chartOptions.exporting.enabled !== false &&
                chartOptions.navigation &&
                chartOptions.navigation.buttonOptions);
        var buttonPosition = options.buttonPosition,
            inputPosition = options.inputPosition,
            verticalAlign = options.verticalAlign;
        // Get the X offset required to avoid overlapping with the exporting
        // button. This is used both by the buttonGroup and the inputGroup.
        var getXOffsetForExportButton = function (group,
            position,
            rightAligned) {
                if (navButtonOptions &&
                    _this.titleCollision(chart) &&
                    verticalAlign === 'top' &&
                    rightAligned && ((position.y -
                    group.getBBox().height - 12) <
                    ((navButtonOptions.y || 0) +
                        (navButtonOptions.height || 0) +
                        chart.spacing[0]))) {
                    return -40;
            }
            return 0;
        };
        var plotLeft = chart.plotLeft;
        if (group && buttonPosition && inputPosition) {
            var translateX = buttonPosition.x - chart.spacing[3];
            if (buttonGroup) {
                this.positionButtons();
                if (!this.initialButtonGroupWidth) {
                    var width_1 = 0;
                    if (zoomText) {
                        width_1 += zoomText.getBBox().width + 5;
                    }
                    buttons.forEach(function (button, i) {
                        width_1 += button.width || 0;
                        if (i !== buttons.length - 1) {
                            width_1 += options.buttonSpacing;
                        }
                    });
                    this.initialButtonGroupWidth = width_1;
                }
                plotLeft -= chart.spacing[3];
                // Detect collision between button group and exporting
                var xOffsetForExportButton_1 = getXOffsetForExportButton(buttonGroup,
                    buttonPosition,
                    buttonPosition.align === 'right' ||
                        inputPosition.align === 'right');
                this.alignButtonGroup(xOffsetForExportButton_1);
                if ((_a = this.buttonGroup) === null || _a === void 0 ? void 0 : _a.translateY) {
                    this.dropdownLabel
                        .attr({ y: this.buttonGroup.translateY });
                }
                // Skip animation
                group.placed = buttonGroup.placed = chart.hasLoaded;
            }
            var xOffsetForExportButton = 0;
            if (options.inputEnabled && inputGroup) {
                // Detect collision between the input group and exporting button
                xOffsetForExportButton = getXOffsetForExportButton(inputGroup, inputPosition, buttonPosition.align === 'right' ||
                    inputPosition.align === 'right');
                if (inputPosition.align === 'left') {
                    translateX = plotLeft;
                }
                else if (inputPosition.align === 'right') {
                    translateX = -Math.max(chart.axisOffset[1], -xOffsetForExportButton);
                }
                // Update the alignment to the updated spacing box
                inputGroup.align({
                    y: inputPosition.y,
                    width: inputGroup.getBBox().width,
                    align: inputPosition.align,
                    // Fix wrong getBBox() value on right align
                    x: inputPosition.x + translateX - 2
                }, true, chart.spacingBox);
                // Skip animation
                inputGroup.placed = chart.hasLoaded;
            }
            this.handleCollision(xOffsetForExportButton);
            // Vertical align
            group.align({
                verticalAlign: verticalAlign
            }, true, chart.spacingBox);
            var alignTranslateY = group.alignAttr.translateY;
            // Set position
            var groupHeight = group.getBBox().height + 20; // # 20 padding
                var translateY = 0;
            // Calculate bottom position
            if (verticalAlign === 'bottom') {
                var legendOptions = chart.legend && chart.legend.options;
                var legendHeight = (legendOptions &&
                        legendOptions.verticalAlign === 'bottom' &&
                        legendOptions.enabled &&
                        !legendOptions.floating ?
                        (chart.legend.legendHeight +
                            pick(legendOptions.margin, 10)) :
                        0);
                groupHeight = groupHeight + legendHeight - 20;
                translateY = (alignTranslateY -
                    groupHeight -
                    (options.floating ? 0 : options.y) -
                    (chart.titleOffset ? chart.titleOffset[2] : 0) -
                    10 // 10 spacing
                );
            }
            if (verticalAlign === 'top') {
                if (options.floating) {
                    translateY = 0;
                }
                if (chart.titleOffset && chart.titleOffset[0]) {
                    translateY = chart.titleOffset[0];
                }
                translateY += ((chart.margin[0] - chart.spacing[0]) || 0);
            }
            else if (verticalAlign === 'middle') {
                if (inputPosition.y === buttonPosition.y) {
                    translateY = alignTranslateY;
                }
                else if (inputPosition.y || buttonPosition.y) {
                    if (inputPosition.y < 0 ||
                        buttonPosition.y < 0) {
                        translateY -= Math.min(inputPosition.y, buttonPosition.y);
                    }
                    else {
                        translateY = alignTranslateY - groupHeight;
                    }
                }
            }
            group.translate(options.x, options.y + Math.floor(translateY));
            // Translate HTML inputs
            var _c = this,
                minInput = _c.minInput,
                maxInput = _c.maxInput,
                dropdown = _c.dropdown;
            if (options.inputEnabled && minInput && maxInput) {
                minInput.style.marginTop = group.translateY + 'px';
                maxInput.style.marginTop = group.translateY + 'px';
            }
            if (dropdown) {
                dropdown.style.marginTop = group.translateY + 'px';
            }
        }
    };
    /** @internal */
    RangeSelector.prototype.redrawElements = function () {
        var _a,
            _b,
            _c,
            _d,
            _e,
            _f,
            _g;
        var chart = this.chart,
            _h = this.options,
            inputBoxHeight = _h.inputBoxHeight,
            inputBoxBorderColor = _h.inputBoxBorderColor;
        (_a = this.maxDateBox) === null || _a === void 0 ? void 0 : _a.attr({
            height: inputBoxHeight
        });
        (_b = this.minDateBox) === null || _b === void 0 ? void 0 : _b.attr({
            height: inputBoxHeight
        });
        if (!chart.styledMode) {
            (_c = this.maxDateBox) === null || _c === void 0 ? void 0 : _c.attr({
                stroke: inputBoxBorderColor
            });
            (_d = this.minDateBox) === null || _d === void 0 ? void 0 : _d.attr({
                stroke: inputBoxBorderColor
            });
        }
        if (this.isDirty) {
            this.isDirty = false;
            // Reset this prop to force redrawing collapse of buttons
            this.isCollapsed = void 0;
            var newButtonsOptions = (_e = this.options.buttons) !== null && _e !== void 0 ? _e : [];
            var btnLength = Math.min(newButtonsOptions.length,
                this.buttonOptions.length);
            var _j = this,
                dropdown = _j.dropdown,
                options = _j.options;
            var buttonTheme = merge(options.buttonTheme);
            var states = buttonTheme && buttonTheme.states;
            // Prevent the button from resetting the width when the button state
            // changes since we need more control over the width when collapsing
            // the buttons
            var width = buttonTheme.width || 28;
            // Destroy additional buttons
            if (newButtonsOptions.length < this.buttonOptions.length) {
                for (var i = this.buttonOptions.length - 1; i >= newButtonsOptions.length; i--) {
                    var btn = this.buttons.pop();
                    btn === null || btn === void 0 ? void 0 : btn.destroy();
                    (_f = this.dropdown) === null || _f === void 0 ? void 0 : _f.options.remove(i + 1);
                }
            }
            // Update current buttons
            for (var i = btnLength - 1; i >= 0; i--) {
                var rangeOptions = newButtonsOptions[i];
                this.buttons[i].destroy();
                dropdown === null || dropdown === void 0 ? void 0 : dropdown.options.remove(i + 1);
                this.createButton(rangeOptions, i, width, states);
                this.computeButtonRange(rangeOptions);
            }
            // Create missing buttons
            if (newButtonsOptions.length > this.buttonOptions.length) {
                for (var i = this.buttonOptions.length; i < newButtonsOptions.length; i++) {
                    this.createButton(newButtonsOptions[i], i, width, states);
                    this.computeButtonRange(newButtonsOptions[i]);
                }
            }
            this.buttonOptions = (_g = this.options.buttons) !== null && _g !== void 0 ? _g : [];
            if (defined(this.options.selected) && this.buttons.length) {
                this.clickButton(this.options.selected, false);
            }
        }
    };
    /**
     * Align the button group horizontally and vertically.
     *
     * @internal
     * @function Highcharts.RangeSelector#alignButtonGroup
     * @param {number} xOffsetForExportButton
     * @param {number} [width]
     */
    RangeSelector.prototype.alignButtonGroup = function (xOffsetForExportButton, width) {
        var _a = this,
            chart = _a.chart,
            options = _a.options,
            buttonGroup = _a.buttonGroup,
            dropdown = _a.dropdown,
            dropdownLabel = _a.dropdownLabel;
        var buttonPosition = options.buttonPosition;
        var plotLeft = chart.plotLeft - chart.spacing[3];
        var translateX = buttonPosition.x - chart.spacing[3];
        var dropdownTranslateX = chart.plotLeft;
        if (buttonPosition.align === 'right') {
            translateX += xOffsetForExportButton - plotLeft; // #13014
            if (this.hasVisibleDropdown) {
                dropdownTranslateX = chart.chartWidth +
                    xOffsetForExportButton -
                    this.maxButtonWidth() - 20;
            }
        }
        else if (buttonPosition.align === 'center') {
            translateX -= plotLeft / 2;
            if (this.hasVisibleDropdown) {
                dropdownTranslateX = chart.chartWidth / 2 -
                    this.maxButtonWidth();
            }
        }
        if (dropdown) {
            css(dropdown, {
                left: dropdownTranslateX + 'px',
                top: (buttonGroup === null || buttonGroup === void 0 ? void 0 : buttonGroup.translateY) + 'px'
            });
        }
        dropdownLabel === null || dropdownLabel === void 0 ? void 0 : dropdownLabel.attr({
            x: dropdownTranslateX
        });
        if (buttonGroup) {
            // Align button group
            buttonGroup.align({
                y: buttonPosition.y,
                width: pick(width, this.initialButtonGroupWidth),
                align: buttonPosition.align,
                x: translateX
            }, true, chart.spacingBox);
        }
    };
    /**
     * @internal
     * @function Highcharts.RangeSelector#positionButtons
     */
    RangeSelector.prototype.positionButtons = function () {
        var _a = this,
            buttons = _a.buttons,
            chart = _a.chart,
            options = _a.options,
            zoomText = _a.zoomText;
        var verb = chart.hasLoaded ? 'animate' : 'attr';
        var buttonPosition = options.buttonPosition;
        var plotLeft = chart.plotLeft;
        var buttonLeft = plotLeft;
        if (zoomText && zoomText.visibility !== 'hidden') {
            // #8769, allow dynamically updating margins
            zoomText[verb]({
                x: pick(plotLeft + buttonPosition.x, plotLeft)
            });
            // Button start position
            buttonLeft += buttonPosition.x +
                zoomText.getBBox().width + 5;
        }
        for (var i = 0, iEnd = this.buttonOptions.length; i < iEnd; ++i) {
            if (buttons[i].visibility !== 'hidden') {
                buttons[i][verb]({ x: buttonLeft });
                // Increase the button position for the next button
                buttonLeft += (buttons[i].width || 0) + options.buttonSpacing;
            }
            else {
                buttons[i][verb]({ x: plotLeft });
            }
        }
    };
    /**
     * Handle collision between the button group and the input group
     *
     * @internal
     * @function Highcharts.RangeSelector#handleCollision
     *
     * @param  {number} xOffsetForExportButton
     *                  The X offset of the group required to make room for the
     *                  exporting button
     */
    RangeSelector.prototype.handleCollision = function (xOffsetForExportButton) {
        var _a = this,
            chart = _a.chart,
            buttonGroup = _a.buttonGroup,
            inputGroup = _a.inputGroup,
            initialButtonGroupWidth = _a.initialButtonGroupWidth;
        var _b = this.options,
            buttonPosition = _b.buttonPosition,
            dropdown = _b.dropdown,
            inputPosition = _b.inputPosition;
        var moveInputsDown = function () {
                if (inputGroup && buttonGroup) {
                    inputGroup.attr({
                        translateX: inputGroup.alignAttr.translateX + (chart.axisOffset[1] >= -xOffsetForExportButton ?
                            0 :
                            -xOffsetForExportButton),
                        translateY: inputGroup.alignAttr.translateY +
                            buttonGroup.getBBox().height + 10
                    });
            }
        };
        // Detect collision
        if (inputGroup && buttonGroup) {
            if (inputPosition.align === buttonPosition.align) {
                moveInputsDown();
                if (initialButtonGroupWidth >
                    chart.plotWidth + xOffsetForExportButton - 20) {
                    this.collapseButtons();
                }
                else {
                    this.expandButtons();
                }
            }
            else if (initialButtonGroupWidth -
                xOffsetForExportButton +
                inputGroup.getBBox().width >
                chart.plotWidth) {
                if (dropdown === 'responsive' || dropdown === 'always') {
                    this.collapseButtons();
                }
                else {
                    moveInputsDown();
                }
            }
            else {
                this.expandButtons();
            }
        }
        else if (buttonGroup && dropdown === 'responsive') {
            if (initialButtonGroupWidth > chart.plotWidth) {
                this.collapseButtons();
            }
            else {
                this.expandButtons();
            }
        }
        // Forced states
        if (buttonGroup) {
            if (dropdown === 'always') {
                this.collapseButtons();
            }
            if (dropdown === 'never') {
                this.expandButtons();
            }
        }
        this.alignButtonGroup(xOffsetForExportButton);
    };
    /**
     * Collapse the buttons and show the select element.
     *
     * @internal
     * @function Highcharts.RangeSelector#collapseButtons
     */
    RangeSelector.prototype.collapseButtons = function () {
        var _a = this,
            buttons = _a.buttons,
            zoomText = _a.zoomText;
        if (this.isCollapsed === true) {
            return;
        }
        this.isCollapsed = true;
        zoomText.hide();
        buttons.forEach(function (button) { return void button.hide(); });
        this.showDropdown();
    };
    /**
     * Show all the buttons and hide the select element.
     *
     * @internal
     * @function Highcharts.RangeSelector#expandButtons
     */
    RangeSelector.prototype.expandButtons = function () {
        var _a = this,
            buttons = _a.buttons,
            zoomText = _a.zoomText;
        if (this.isCollapsed === false) {
            return;
        }
        this.isCollapsed = false;
        this.hideDropdown();
        zoomText.show();
        buttons.forEach(function (button) { return void button.show(); });
        this.positionButtons();
    };
    /**
     * Position the select element on top of the button.
     *
     * @internal
     * @function Highcharts.RangeSelector#showDropdown
     */
    RangeSelector.prototype.showDropdown = function () {
        var _a = this,
            buttonGroup = _a.buttonGroup,
            dropdownLabel = _a.dropdownLabel,
            dropdown = _a.dropdown;
        if (buttonGroup && dropdown) {
            dropdownLabel.show();
            css(dropdown, { visibility: 'inherit' });
            this.hasVisibleDropdown = true;
        }
    };
    /**
     * @internal
     * @function Highcharts.RangeSelector#hideDropdown
     */
    RangeSelector.prototype.hideDropdown = function () {
        var dropdown = this.dropdown;
        if (dropdown) {
            this.dropdownLabel.hide();
            css(dropdown, {
                visibility: 'hidden'
            });
            this.hasVisibleDropdown = false;
        }
    };
    /**
     * Extracts height of range selector
     *
     * @internal
     * @function Highcharts.RangeSelector#getHeight
     * @return {number}
     * Returns rangeSelector height
     */
    RangeSelector.prototype.getHeight = function () {
        var rangeSelector = this,
            options = rangeSelector.options,
            rangeSelectorGroup = rangeSelector.group,
            inputPosition = options.inputPosition,
            buttonPosition = options.buttonPosition,
            yPosition = options.y,
            buttonPositionY = buttonPosition.y,
            inputPositionY = inputPosition.y;
        var rangeSelectorHeight = 0;
        if (options.height) {
            return options.height;
        }
        // Align the elements before we read the height in case we're switching
        // between wrapped and non-wrapped layout
        this.alignElements();
        rangeSelectorHeight = rangeSelectorGroup ?
            // 13px to keep back compatibility
            (rangeSelectorGroup.getBBox(true).height) + 13 +
                yPosition :
            0;
        var minPosition = Math.min(inputPositionY,
            buttonPositionY);
        if ((inputPositionY < 0 && buttonPositionY < 0) ||
            (inputPositionY > 0 && buttonPositionY > 0)) {
            rangeSelectorHeight += Math.abs(minPosition);
        }
        return rangeSelectorHeight;
    };
    /**
     * Detect collision with title or subtitle
     *
     * @internal
     * @function Highcharts.RangeSelector#titleCollision
     * @return {boolean}
     * Returns collision status
     */
    RangeSelector.prototype.titleCollision = function (chart) {
        return !(chart.options.title.text ||
            chart.options.subtitle.text);
    };
    /**
     * Update the range selector with new options
     *
     * @internal
     * @function Highcharts.RangeSelector#update
     * @param {Highcharts.RangeSelectorOptions} options
     */
    RangeSelector.prototype.update = function (options, redraw) {
        if (redraw === void 0) { redraw = true; }
        var chart = this.chart;
        merge(true, this.options, options);
        if (this.options.selected &&
            this.options.selected >= this.options.buttons.length) {
            this.options.selected = void 0;
            chart.options.rangeSelector.selected = void 0;
        }
        if (defined(options.enabled)) {
            this.destroy();
            return this.init(chart);
        }
        this.isDirty = !!options.buttons || !!options.buttonTheme;
        if (redraw) {
            this.render();
        }
    };
    /**
     * Destroys allocated elements.
     *
     * @internal
     * @function Highcharts.RangeSelector#destroy
     */
    RangeSelector.prototype.destroy = function () {
        var rSelector = this,
            minInput = rSelector.minInput,
            maxInput = rSelector.maxInput;
        if (rSelector.eventsToUnbind) {
            rSelector.eventsToUnbind.forEach(function (unbind) { return unbind(); });
            rSelector.eventsToUnbind = void 0;
        }
        // Destroy elements in collections
        destroyObjectProperties(rSelector.buttons);
        // Clear input element events
        if (minInput) {
            minInput.onfocus = minInput.onblur = minInput.onchange = null;
        }
        if (maxInput) {
            maxInput.onfocus = maxInput.onblur = maxInput.onchange = null;
        }
        // Destroy HTML and SVG elements
        objectEach(rSelector, function (val, key) {
            if (val && key !== 'chart') {
                if (val instanceof (highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default())) {
                    // SVGElement
                    val.destroy();
                }
                else if (val instanceof window.HTMLElement) {
                    // HTML element
                    discardElement(val);
                }
                delete rSelector[key];
            }
            if (val !== RangeSelector.prototype[key]) {
                rSelector[key] = null;
            }
        }, this);
        this.buttons = [];
    };
    return RangeSelector;
}());
extend(RangeSelector.prototype, {
    /**
     * The date formats to use when setting min, max and value on date inputs.
     * @internal
     */
    inputTypeFormats: {
        'datetime-local': '%Y-%m-%dT%H:%M:%S',
        'date': '%Y-%m-%d',
        'time': '%H:%M:%S'
    }
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var RangeSelector_RangeSelector = (RangeSelector);
/* *
 *
 *  API Options
 *
 * */
/**
 * Define the time span for the button
 *
 * @typedef {"all"|"day"|"hour"|"millisecond"|"minute"|"month"|"second"|"week"|"year"|"ytd"} Highcharts.RangeSelectorButtonTypeValue
 */
/**
 * Callback function to react on button clicks.
 *
 * @callback Highcharts.RangeSelectorClickCallbackFunction
 *
 * @param {global.Event} e
 *        Event arguments.
 *
 * @return {boolean|undefined}
 *         Return false to cancel the default button event.
 */
/**
 * Callback function to parse values entered in the input boxes and return a
 * valid JavaScript time as milliseconds since 1970.
 *
 * @callback Highcharts.RangeSelectorParseCallbackFunction
 *
 * @param {string} value
 *        Input value to parse.
 *
 * @return {number}
 *         Parsed JavaScript time value.
 */
(''); // Keeps doclets above in JS file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Chart"],"commonjs":["highcharts","Chart"],"commonjs2":["highcharts","Chart"],"root":["Highcharts","Chart"]}
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_ = __webpack_require__(960);
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default = /*#__PURE__*/__webpack_require__.n(highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_);
;// ./code/es5/es-modules/Core/Chart/StockChart.js
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

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StockChart_format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format;

var getOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).getOptions;




var StockChart_setFixedRange = Utilities_StockUtilities.setFixedRange;

/* *
 *
 *  Functions
 *
 * */
/**
 * Get stock-specific default axis options.
 *
 * @internal
 * @function getDefaultAxisOptions
 */
function getDefaultAxisOptions(coll, options, defaultOptions) {
    var _a,
        _b;
    if (coll === 'xAxis') {
        return {
            minPadding: 0,
            maxPadding: 0,
            overscroll: 0,
            ordinal: true
        };
    }
    if (coll === 'yAxis') {
        return {
            labels: {
                y: -2
            },
            opposite: (_b = (_a = defaultOptions.opposite) !== null && _a !== void 0 ? _a : options.opposite) !== null && _b !== void 0 ? _b : true,
            showLastLabel: !!(
            // #6104, show last label by default for category axes
            options.categories ||
                options.type === 'category'),
            title: {
                text: void 0
            }
        };
    }
    return {};
}
/**
 * Get stock-specific forced axis options.
 *
 * @internal
 * @function getForcedAxisOptions
 */
function getForcedAxisOptions(type, chartOptions) {
    var _a;
    if (type === 'xAxis') {
        // Always disable startOnTick:true on the main axis when the navigator
        // is enabled (#1090)
        var navigatorEnabled = pick((_a = chartOptions.navigator) === null || _a === void 0 ? void 0 : _a.enabled,
            Navigator_NavigatorDefaults.enabled,
            true);
        var axisOptions = {
                type: 'datetime',
                categories: void 0
            };
        if (navigatorEnabled) {
            axisOptions.startOnTick = false;
            axisOptions.endOnTick = false;
        }
        return axisOptions;
    }
    return {};
}
/* *
 *
 *  Class
 *
 * */
/**
 * Stock-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/stock
 *
 * @class
 * @name Highcharts.StockChart
 * @extends Highcharts.Chart
 */
var StockChart = /** @class */ (function (_super) {
    __extends(StockChart, _super);
    function StockChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.StockChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function|true} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded. Set to `true` to return a promise that
     *        resolves when the chart is ready.
     *
     * @emits Highcharts.StockChart#event:init
     * @emits Highcharts.StockChart#event:afterInit
     */
    StockChart.prototype.init = function (userOptions, callback) {
        var _a,
            _b;
        var defaultOptions = getOptions(),
            xAxisOptions = userOptions.xAxis,
            yAxisOptions = userOptions.yAxis, 
            // Always disable startOnTick:true on the main axis when the
            // navigator is enabled (#1090)
            navigatorEnabled = pick((_a = userOptions.navigator) === null || _a === void 0 ? void 0 : _a.enabled,
            Navigator_NavigatorDefaults.enabled,
            true);
        // Avoid doing these twice
        userOptions.xAxis = userOptions.yAxis = void 0;
        var options = merge({
                chart: {
                    panning: {
                        enabled: true,
                        type: 'x'
                    },
                    zooming: {
                        pinchType: 'x',
                        mouseWheel: {
                            type: 'x'
                        }
                    }
                },
                navigator: {
                    enabled: navigatorEnabled
                },
                scrollbar: {
                    // #4988 - check if setOptions was called
                    enabled: pick(Scrollbar_ScrollbarDefaults.enabled,
            true)
                },
                rangeSelector: {
                    // #4988 - check if setOptions was called
                    enabled: pick(RangeSelector_RangeSelectorDefaults.rangeSelector.enabled,
            true)
                },
                title: {
                    text: null
                },
                tooltip: {
                    split: pick((_b = defaultOptions.tooltip) === null || _b === void 0 ? void 0 : _b.split,
            true),
                    crosshairs: true
                },
                legend: {
                    enabled: false
                }
            },
            userOptions, // User's options
            {
                isStock: true // Internal flag
            });
        userOptions.xAxis = xAxisOptions;
        userOptions.yAxis = yAxisOptions;
        // Apply X axis options to both single and multi y axes
        options.xAxis = splat(userOptions.xAxis || {}).map(function (xAxisOptions) { return merge(getDefaultAxisOptions('xAxis', xAxisOptions, defaultOptions.xAxis), 
        // #7690
        xAxisOptions, // User options
        getForcedAxisOptions('xAxis', userOptions)); });
        // Apply Y axis options to both single and multi y axes
        options.yAxis = splat(userOptions.yAxis || {}).map(function (yAxisOptions) { return merge(getDefaultAxisOptions('yAxis', yAxisOptions, defaultOptions.yAxis), 
        // #7690
        yAxisOptions // User options
        ); });
        _super.prototype.init.call(this, options, callback);
    };
    /**
     * Factory for creating different axis types.
     * Extended to add stock defaults.
     *
     * @internal
     * @function Highcharts.StockChart#createAxis
     * @param {string} coll
     * An axis type.
     * @param {Chart.CreateAxisOptionsObject} options
     * The axis creation options.
     */
    StockChart.prototype.createAxis = function (coll, options) {
        options.axis = merge(getDefaultAxisOptions(coll, options.axis, getOptions()[coll]), options.axis, getForcedAxisOptions(coll, this.userOptions));
        return _super.prototype.createAxis.call(this, coll, options);
    };
    return StockChart;
}((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default())));
addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'update', function (e) {
    var chart = this,
        options = e.options;
    // Use case: enabling scrollbar from a disabled state.
    // Scrollbar needs to be initialized from a controller, Navigator in this
    // case (#6615)
    if ('scrollbar' in options && chart.navigator) {
        merge(true, chart.options.scrollbar, options.scrollbar);
        chart.navigator.update({ enabled: !!chart.navigator.navigatorEnabled });
        delete options.scrollbar;
    }
});
/* *
 *
 *  Composition
 *
 * */
/** @internal */
(function (StockChart) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Composes the chart with the stock-specific functionality.
     *
     * @internal
     *
     * @param {Highcharts.Class<Highcharts.Chart>} ChartClass
     * The chart class to compose.
     *
     * @param {Highcharts.Class<Highcharts.Axis>} AxisClass
     * The axis class to compose.
     *
     * @param {Highcharts.Class<Highcharts.Series>} SeriesClass
     * The series class to compose.
     *
     * @param {Highcharts.Class<Highcharts.SVGRenderer>} SVGRendererClass
     * The SVG renderer class to compose.
     */
    function compose(ChartClass, AxisClass, SeriesClass, SVGRendererClass) {
        var seriesProto = SeriesClass.prototype;
        if (!seriesProto.forceCropping) {
            addEvent(AxisClass, 'afterDrawCrosshair', onAxisAfterDrawCrosshair);
            addEvent(AxisClass, 'afterHideCrosshair', onAxisAfterHideCrosshair);
            addEvent(AxisClass, 'autoLabelAlign', onAxisAutoLabelAlign);
            addEvent(AxisClass, 'destroy', onAxisDestroy);
            addEvent(AxisClass, 'getPlotLinePath', onAxisGetPlotLinePath);
            ChartClass.prototype.setFixedRange = StockChart_setFixedRange;
            seriesProto.forceCropping = seriesForceCropping;
            addEvent(SeriesClass, 'setOptions', onSeriesSetOptions);
            SVGRendererClass.prototype.crispPolyLine = svgRendererCrispPolyLine;
        }
    }
    StockChart.compose = compose;
    /**
     * Extend crosshairs to also draw the label.
     * @internal
     */
    function onAxisAfterDrawCrosshair(event) {
        var _a,
            _b,
            _c,
            _d;
        var axis = this;
        // Check if the label has to be drawn
        if (!(((_b = (_a = axis.crosshair) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.enabled) &&
            axis.cross &&
            isNumber(axis.min) &&
            isNumber(axis.max))) {
            return;
        }
        var chart = axis.chart,
            log = axis.logarithmic,
            options = axis.crosshair.label, // The label's options
            horiz = axis.horiz, // Axis orientation
            opposite = axis.opposite, // Axis position
            left = axis.left, // Left position
            top = axis.top, // Top position
            width = axis.width,
            tickInside = axis.options.tickPosition === 'inside',
            snap = axis.crosshair.snap !== false,
            e = event.e || ((_c = axis.cross) === null || _c === void 0 ? void 0 : _c.e),
            point = event.point;
        var crossLabel = axis.crossLabel, // The svgElement
            posx,
            posy,
            formatOption = options.format,
            formatFormat = '',
            limit,
            offset = 0, 
            // Use last available event (#5287)
            min = axis.min,
            max = axis.max;
        if (log) {
            min = log.lin2log(axis.min);
            max = log.lin2log(axis.max);
        }
        var align = (horiz ? 'center' : opposite ?
                (axis.labelAlign === 'right' ? 'right' : 'left') :
                (axis.labelAlign === 'left' ? 'left' : 'center'));
        // If the label does not exist yet, create it.
        if (!crossLabel) {
            crossLabel = axis.crossLabel = chart.renderer
                .label('', 0, void 0, options.shape || 'callout')
                .addClass('highcharts-crosshair-label highcharts-color-' + ((point === null || point === void 0 ? void 0 : point.series) ?
                point.series.colorIndex :
                axis.series[0] && this.series[0].colorIndex))
                .attr({
                align: options.align || align,
                padding: pick(options.padding, 8),
                r: pick(options.borderRadius, 3),
                zIndex: 2
            })
                .add(axis.labelGroup);
            // Presentational
            if (!chart.styledMode) {
                crossLabel
                    .attr({
                    fill: options.backgroundColor ||
                        ((_d = point === null || point === void 0 ? void 0 : point.series) === null || _d === void 0 ? void 0 : _d.color) || // #14888
                        'var(--highcharts-neutral-color-60)',
                    stroke: options.borderColor || '',
                    'stroke-width': options.borderWidth || 0
                })
                    .css(extend({
                    color: 'var(--highcharts-background-color)',
                    fontWeight: 'normal',
                    fontSize: '0.7em',
                    textAlign: 'center'
                }, options.style || {}));
            }
        }
        if (horiz) {
            posx = snap ? (point.plotX || 0) + left : e.chartX;
            posy = top + (opposite ? 0 : axis.height);
        }
        else {
            posx = left + axis.offset + (opposite ? width : 0);
            posy = snap ? (point.plotY || 0) + top : e.chartY;
        }
        if (!formatOption && !options.formatter) {
            if (axis.dateTime) {
                formatFormat = '%b %d, %Y';
            }
            formatOption =
                '{value' + (formatFormat ? ':' + formatFormat : '') + '}';
        }
        // Show the label
        var value = snap ?
                (axis.isXAxis ? point.x : point.y) :
                axis.toValue(horiz ? e.chartX : e.chartY);
        // Crosshair should be rendered within Axis range (#7219) and the point
        // of currentPriceIndicator should be inside the plot area (#14879).
        var isInside = (point === null || point === void 0 ? void 0 : point.series) ?
                point.series.isPointInside(point) :
                (isNumber(value) && value > min && value < max);
        var text = '';
        if (formatOption) {
            text = StockChart_format(formatOption, { value: value }, chart);
        }
        else if (options.formatter && isNumber(value)) {
            text = options.formatter.call(axis, value, axis);
        }
        crossLabel.attr({
            text: text,
            x: posx,
            y: posy,
            visibility: isInside ? 'inherit' : 'hidden'
        });
        var crossBox = crossLabel.getBBox();
        // Now it is placed we can correct its position
        if (isNumber(crossLabel.x) && !horiz && !opposite) {
            posx = crossLabel.x - (crossBox.width / 2);
        }
        if (isNumber(crossLabel.y)) {
            if (horiz) {
                if ((tickInside && !opposite) || (!tickInside && opposite)) {
                    posy = crossLabel.y - crossBox.height;
                }
            }
            else {
                posy = crossLabel.y - (crossBox.height / 2);
            }
        }
        // Check the edges
        if (horiz) {
            limit = {
                left: left,
                right: left + axis.width
            };
        }
        else {
            limit = {
                left: axis.labelAlign === 'left' ? left : 0,
                right: axis.labelAlign === 'right' ?
                    left + axis.width :
                    chart.chartWidth
            };
        }
        var translateX = crossLabel.translateX || 0;
        // Left edge
        if (translateX < limit.left) {
            offset = limit.left - translateX;
        }
        // Right edge
        if (translateX + crossBox.width >= limit.right) {
            offset = -(translateX + crossBox.width - limit.right);
        }
        // Show the crosslabel
        crossLabel.attr({
            x: Math.max(0, posx + offset),
            y: Math.max(0, posy),
            // First set x and y, then anchorX and anchorY, when box is actually
            // calculated, #5702
            anchorX: horiz ?
                posx :
                (axis.opposite ? 0 : chart.chartWidth),
            anchorY: horiz ?
                (axis.opposite ? chart.chartHeight : 0) :
                posy + crossBox.height / 2
        });
    }
    /**
     * Wrapper to hide the label.
     * @internal
     */
    function onAxisAfterHideCrosshair() {
        var axis = this;
        if (axis.crossLabel) {
            axis.crossLabel = axis.crossLabel.hide();
        }
    }
    /**
     * Override the automatic label alignment so that the first Y axis' labels
     * are drawn on top of the grid line, and subsequent axes are drawn outside.
     * @internal
     */
    function onAxisAutoLabelAlign(e) {
        var axis = this,
            chart = axis.chart,
            options = axis.options,
            panes = chart._labelPanes = chart._labelPanes || {},
            labelOptions = options.labels;
        if (chart.options.isStock && axis.coll === 'yAxis') {
            var key = options.top + ',' + options.height;
            // Do it only for the first Y axis of each pane
            if (!panes[key] && labelOptions.enabled) {
                if (labelOptions.distance === 15 && // Default
                    axis.side === 1) {
                    labelOptions.distance = 0;
                }
                if (typeof labelOptions.align === 'undefined') {
                    labelOptions.align = 'right';
                }
                panes[key] = axis;
                e.align = 'right';
                e.preventDefault();
            }
        }
    }
    /**
     * Clear axis from label panes. (#6071)
     * @internal
     */
    function onAxisDestroy() {
        var axis = this, chart = axis.chart, key = (axis.options &&
                (axis.options.top + ',' + axis.options.height));
        if (key && chart._labelPanes && chart._labelPanes[key] === axis) {
            delete chart._labelPanes[key];
        }
    }
    /**
     * Override getPlotLinePath to allow for multipane charts.
     * @internal
     */
    function onAxisGetPlotLinePath(e) {
        var axis = this, axisOptions = axis.options, series = (axis.isLinked && !axis.series && axis.linkedParent ?
                axis.linkedParent.series :
                axis.series), chart = axis.chart, horiz = axis.horiz, renderer = chart.renderer, result = [], _a = e.acrossPanes, acrossPanes = _a === void 0 ? true : _a, force = e.force, translatedValue = e.translatedValue, value = e.value, allPerpendicularAxes = (axis.isXAxis ? chart.yAxis : chart.xAxis) || [], crossingPosName = horiz ? 'top' : 'left', crossingLenName = horiz ? 'height' : 'width', hasCrossingBounds = defined(axisOptions[crossingPosName]) ||
                defined(axisOptions[crossingLenName]), 
            /**
             * Return the other axis based on either the axis option or on
             * related series.
             * @internal
             */
            getAxis = function (coll) {
                var otherColl = coll === 'xAxis' ? 'yAxis' : 'xAxis', opt = axisOptions[otherColl];
            if (acrossPanes && !axisOptions.isInternal) {
                return allPerpendicularAxes.filter(function (a) {
                    return !a.options.isInternal;
                });
            }
            // Other axis indexed by number
            if (isNumber(opt)) {
                return [chart[otherColl][opt]];
            }
            // Other axis indexed by id (like navigator)
            if (isString(opt)) {
                return [chart.get(opt)];
            }
            // Auto detect based on existing series
            return series.map(function (s) { return s[otherColl]; });
        };
        /**
         * Push a segment to the result SVGPath array
         */
        function pushSegment(pos, crossingPos1, crossingPos2) {
            result.push(['M', horiz ? pos : crossingPos1, horiz ? crossingPos1 : pos], ['L', horiz ? pos : crossingPos2, horiz ? crossingPos2 : pos]);
        }
        var axes = [], // #3416 need a default array
            uniqueAxes,
            transVal;
        if ((chart.options.isStock || hasCrossingBounds) &&
            // Ignore in case of colorAxis or zAxis. #3360, #3524, #6720
            (axis.coll === 'xAxis' || axis.coll === 'yAxis')) {
            e.preventDefault();
            // Get the related axes based on series
            axes = getAxis(axis.coll);
            // Get the related axes based options.*Axis setting #2810
            for (var _i = 0, allPerpendicularAxes_1 = allPerpendicularAxes; _i < allPerpendicularAxes_1.length; _i++) {
                var A = allPerpendicularAxes_1[_i];
                if (!A.options.isInternal) {
                    var a = (A.isXAxis ? 'yAxis' : 'xAxis'),
                        relatedAxis = (defined(A.options[a]) &&
                            chart[a][A.options[a]]);
                    if (axis === relatedAxis) {
                        axes.push(A);
                    }
                }
            }
            // Remove duplicates in the axes array. If there are no axes in the
            // axes array, we are adding an axis without data, so we need to
            // populate this with grid lines (#2796).
            uniqueAxes = axes.length ?
                [] :
                [axis.isXAxis ? chart.yAxis[0] : chart.xAxis[0]]; // #3742
            var _loop_1 = function (axis2) {
                    if (uniqueAxes.indexOf(axis2) === -1 &&
                        // Do not draw on axis which overlap completely. #5424
                        !find(uniqueAxes,
                function (unique) { return (unique.pos === axis2.pos &&
                            unique.len === axis2.len); })) {
                        uniqueAxes.push(axis2);
                }
            };
            for (var _b = 0, axes_1 = axes; _b < axes_1.length; _b++) {
                var axis2 = axes_1[_b];
                _loop_1(axis2);
            }
            transVal = pick(translatedValue, axis.translate(value || 0, void 0, void 0, e.old));
            if (isNumber(transVal)) {
                var skip = void 0,
                    pos = horiz ?
                        transVal + axis.pos :
                        axis.pos + axis.len - transVal;
                // Outside plot area
                if (force !== 'pass' &&
                    (pos < axis.pos || pos > axis.pos + axis.len)) {
                    if (force) {
                        pos = clamp(pos, axis.pos, axis.pos + axis.len);
                    }
                    else {
                        skip = true;
                    }
                }
                if (!skip) {
                    if (
                    // If the perpendicular position is set explicitly on
                    // the axis, use it. For example, if `top` and `height`
                    // options are set on a horizontal x-axis, the grid
                    // lines should conform to that position.
                    hasCrossingBounds &&
                        // In parallel coordinates, the axis height/width is 0,
                        // so we need to skip that, #24442.
                        axis[crossingLenName] > 0 &&
                        !acrossPanes) {
                        pushSegment(pos, axis[crossingPosName], axis[crossingPosName] + axis[crossingLenName]);
                    }
                    else {
                        for (var _c = 0, uniqueAxes_1 = uniqueAxes; _c < uniqueAxes_1.length; _c++) {
                            var perpendicularAxis = uniqueAxes_1[_c];
                            pushSegment(pos, perpendicularAxis.pos, perpendicularAxis.pos + perpendicularAxis.len);
                        }
                    }
                }
            }
            e.path = result.length > 0 ?
                renderer.crispPolyLine(result, e.lineWidth || 1) :
                // #3557 getPlotLinePath in regular Highcharts also returns null
                void 0;
        }
    }
    /**
     * Handle som Stock-specific series defaults, override the plotOptions
     * before series options are handled.
     * @internal
     */
    function onSeriesSetOptions(e) {
        var series = this;
        if (series.chart.options.isStock) {
            var overrides = void 0;
            if (series.is('column') || series.is('columnrange')) {
                overrides = {
                    borderWidth: 0,
                    shadow: false
                };
            }
            else if (!series.is('scatter') && !series.is('sma')) {
                overrides = {
                    marker: {
                        enabled: false,
                        radius: 2
                    }
                };
            }
            if (overrides) {
                e.plotOptions[series.type] = merge(e.plotOptions[series.type], overrides);
            }
        }
    }
    /**
     * Based on the data grouping options decides whether
     * the data should be cropped while processing.
     *
     * @ignore
     * @function Highcharts.Series#forceCropping
     */
    function seriesForceCropping() {
        var series = this,
            chart = series.chart,
            options = series.options,
            dataGroupingOptions = options.dataGrouping,
            groupingEnabled = (series.allowDG !== false &&
                dataGroupingOptions &&
                pick(dataGroupingOptions.enabled,
            chart.options.isStock));
        return groupingEnabled;
    }
    /* eslint-disable jsdoc/check-param-names */
    /**
     * Factory function for creating new stock charts. Creates a new
     * {@link Highcharts.StockChart|StockChart} object with different default
     * options than the basic Chart.
     *
     * @example
     * let chart = Highcharts.stockChart('container', {
     *     series: [{
     *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     *         pointInterval: 24 * 60 * 60 * 1000
     *     }]
     * });
     *
     * @function Highcharts.stockChart
     *
     * @param {string|Highcharts.HTMLDOMElement} [renderTo]
     *        The DOM element to render to, or its id.
     *
     * @param {Highcharts.Options} options
     *        The chart options structure as described in the
     *        [options reference](https://api.highcharts.com/highstock).
     *
     * @param {Highcharts.ChartCallbackFunction} [callback]
     *        A function to execute when the chart object is finished
     *        rendering and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        [chart.events.load](https://api.highcharts.com/highstock/chart.events.load)
     *        handler is equivalent.
     *
     * @return {Highcharts.StockChart}
     *         The chart object.
     */
    function stockChart(a, b, c) {
        var chart = new StockChart(a,
            b,
            c);
        return chart.promise || chart;
    }
    StockChart.stockChart = stockChart;
    /* eslint-enable jsdoc/check-param-names */
    /**
     * Function to crisp a line with multiple segments
     *
     * @internal
     * @function Highcharts.SVGRenderer#crispPolyLine
     */
    function svgRendererCrispPolyLine(points, width) {
        // Points format: [['M', 0, 0], ['L', 100, 0]]
        // normalize to a crisp line
        for (var i = 0; i < points.length; i = i + 2) {
            var start = points[i],
                end = points[i + 1];
            if (defined(start[1]) && start[1] === end[1]) {
                start[1] = end[1] = crisp(start[1], width);
            }
            if (defined(start[2]) && start[2] === end[2]) {
                start[2] = end[2] = crisp(start[2], width);
            }
        }
        return points;
    }
})(StockChart || (StockChart = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Chart_StockChart = (StockChart);

;// ./code/es5/es-modules/Series/HLC/HLCPoint.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Lysy
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var HLCPoint_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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

var ColumnPoint = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var HLCPoint = /** @class */ (function (_super) {
    HLCPoint_extends(HLCPoint, _super);
    function HLCPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the origin position for entrance animation of new points
     */
    HLCPoint.prototype.getOrigin = function (_a, shape) {
        var _b = _a.x,
            x = _b === void 0 ? 0 : _b;
        if (shape === void 0) { shape = {}; }
        var d = shape.d,
            shiftX = x - (this.plotX || 0);
        if (d) {
            return {
                d: d.map(function (segment) {
                    var slice = segment.slice();
                    if (typeof slice[1] === 'number') {
                        slice[1] += shiftX;
                    }
                    return slice;
                })
            };
        }
        return shape;
    };
    return HLCPoint;
}(ColumnPoint));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var HLC_HLCPoint = (HLCPoint);

;// ./code/es5/es-modules/Series/HLC/HLCSeriesDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Lysy
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
 * An HLC chart is a style of financial chart used to describe price
 * movements over time. It displays high, low and close values per
 * data point.
 *
 * @sample stock/demo/hlc/
 *         HLC chart
 *
 * @extends      plotOptions.column
 * @excluding    borderColor, borderRadius, borderWidth, crisp, stacking,
 *               stack
 * @product      highstock
 * @optionparent plotOptions.hlc
 */
var HLCSeriesDefaults = {
    /**
     * The approximate pixel width of each group. If for example a series
     * with 30 points is displayed over a 600 pixel wide plot area, no
     * grouping is performed. If however the series contains so many points
     * that the spacing is less than the groupPixelWidth, Highcharts will
     * try to group it into appropriate groups so that each is more or less
     * two pixels wide. Defaults to `5`.
     *
     * @type      {number}
     * @default   5
     * @product   highstock
     * @apioption plotOptions.hlc.dataGrouping.groupPixelWidth
     */
    /**
     * @type      {Highcharts.DataGroupingApproximationValue|Function}
     * @default   hlc
     * @product   highstock
     * @apioption plotOptions.hlc.dataGrouping.approximation
     */
    /**
     * @default   close
     * @apioption plotOptions.hlc.colorKey
     */
    /**
     * What type of legend symbol to render for this series. For HLC series,
     * the default is `hlc`, a vertical stem with a tick on the right
     * representing the closing value.
     *
     * @default   hlc
     * @product   highstock
     * @apioption plotOptions.hlc.legendSymbol
     */
    legendSymbol: 'hlc',
    /**
     * The pixel width of the line/border. Defaults to `1`.
     *
     * @sample {highstock} stock/plotoptions/hlc-linewidth/
     *         A greater line width
     *
     * @type    {number}
     * @default 1
     * @product highstock
     *
     * @public
     */
    lineWidth: 1,
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
            '<b> {series.name}</b><br/>' +
            '{series.chart.options.lang.stockHigh}: {point.high}<br/>' +
            '{series.chart.options.lang.stockLow}: {point.low}<br/>' +
            '{series.chart.options.lang.stockClose}: {point.close}<br/>'
    },
    /**
     * @type {number|null}
     */
    threshold: null,
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The pixel width of the line representing the HLC point.
             *
             * @type    {number}
             * @default 3
             * @product highstock
             */
            lineWidth: 3
        }
    },
    /**
     * Determines which one of  `high`, `low`, `close` values should
     * be represented as `point.y`, which is later used to set dataLabel
     * position and [compare](#plotOptions.series.compare).
     *
     * @sample {highstock} stock/plotoptions/hlc-pointvalkey/
     *         Possible values
     *
     * @declare    Highcharts.OptionsHLCPointValKeyValue
     * @type       {string}
     * @default    close
     * @validvalue ["high", "low", "close"]
     * @product    highstock
     * @apioption  plotOptions.hlc.pointValKey
     */
    /**
     * @default   close
     * @apioption plotOptions.hlc.colorKey
     */
    stickyTracking: true
};
/**
 * A `hlc` series. If the [type](#series.hlc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.hlc
 * @excluding dataParser, dataURL
 * @product   highstock
 * @apioption series.hlc
 */
/**
 * An array of data points for the series. For the `hlc` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 4 or 3 values. In this case, the values correspond
 *    to `x,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length of 3\.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 5, 6, 7],
 *        [1, 4, 8, 2],
 *        [2, 3, 4, 10]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.hlc.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        high: 4,
 *        low: 5,
 *        close: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        high: 3,
 *        low: 6,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @basic
 * @type      {Array<Array<(number|string),number,number>|Array<(number|string),number,number,number>|*>}
 * @extends   series.arearange.data
 * @excluding y, marker
 * @product   highstock
 * @apioption series.hlc.data
 */
/**
 * The closing value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.hlc.data.close
 */
(''); // Keeps doclets above in JS file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var HLC_HLCSeriesDefaults = (HLCSeriesDefaults);

;// ./code/es5/es-modules/Series/FinancialSymbols.js



var FinancialSymbols_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;
/* *
 * Composition
 * */
var FinancialSymbols;
(function (FinancialSymbols) {
    function compose(SVGRendererClass) {
        if (pushUnique(FinancialSymbols_composed, 'Series.FinancialSymbols')) {
            var symbols_1 = SVGRendererClass.prototype.symbols;
            var hlcPath_1 = function (x, y, w, h, isOhlc) {
                    var cx = Math.round(x + w / 2), 
                    // Up bar: close is higher up (smaller Y) than open
                    closeY = Math.round(y + h * (isOhlc ? 0.3 : 0.5)), path = [
                        ['M', cx, y], ['L', cx, y + h], // Stem
                        ['M', cx, closeY], ['L', x + w, closeY] // Close tick
                    ];
                if (isOhlc) {
                    // Up bar: open is lower down (larger Y)
                    var openY = Math.round(y + h * 0.7);
                    path.push(['M', x, openY], ['L', cx, openY]);
                }
                return path;
            };
            symbols_1.hlc = function (x, y, w, h) { return hlcPath_1(x, y, w, h); };
            symbols_1.ohlc = function (x, y, w, h) { return hlcPath_1(x, y, w, h, true); };
            symbols_1.candlestick = function (x, y, w, h) {
                var cx = Math.round(x + w / 2), top = Math.round(y + h * 0.25), bottom = Math.round(y + h * 0.75), 
                    // 1. Explicitly type the base array as SVGPath
                    path = [
                        ['M', cx, y], ['L', cx, top], // Top wick
                        ['M', cx, bottom], ['L', cx, y + h] // Bottom wick
                    ];
                // 2. Push the rect path segments directly into it
                if (symbols_1.rect) {
                    path.push.apply(path, symbols_1.rect(x, top, w, bottom - top));
                }
                return path;
            };
        }
    }
    FinancialSymbols.compose = compose;
})(FinancialSymbols || (FinancialSymbols = {}));
/* harmony default export */ var Series_FinancialSymbols = (FinancialSymbols);

;// ./code/es5/es-modules/Series/HLC/HLCSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Lysy
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var HLCSeries_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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



var ColumnSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column;



var HLCSeries_defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;
/* *
 *
 *  Class
 *
 * */
/**
 * The hlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.hlc
 *
 * @augments Highcharts.Series
 */
var HLCSeries = /** @class */ (function (_super) {
    HLCSeries_extends(HLCSeries, _super);
    function HLCSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Static Properties
     *
     * */
    HLCSeries.compose = function (_SeriesClass, SVGRendererClass) {
        Series_FinancialSymbols.compose(SVGRendererClass);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the path if close is not between high and low.
     *
     * @param {SVGPath} path the path array of the point
     * @param {number} halfStrokeWidth
     * @param {number} value value of the point to which the stem should be extended
     */
    HLCSeries.prototype.extendStem = function (path, halfStrokeWidth, value) {
        var start = path[0];
        var end = path[1];
        // We don't need to worry about crisp - close value
        // is already crisped and halfStrokeWidth should remove it.
        if (typeof start[2] === 'number') {
            start[2] = Math.max(value + halfStrokeWidth, start[2]);
        }
        if (typeof end[2] === 'number') {
            end[2] = Math.min(value - halfStrokeWidth, end[2]);
        }
    };
    /**
     * Function to create SVGPath of the point based on the plot positions of
     * this point.
     * @private
     */
    HLCSeries.prototype.getPointPath = function (point) {
        // Crisp vector coordinates
        var series = point.series,
            strokeWidth = series.borderWidth, 
            // #2596:
            crispX = crisp(point.plotX || 0,
            strokeWidth),
            halfWidth = Math.round(point.shapeArgs.width / 2);
        // The vertical stem
        var path = [
                ['M',
            crispX,
            Math.round(point.yBottom)],
                ['L',
            crispX,
            Math.round(point.plotHigh)]
            ];
        // Close
        if (point.close !== null) {
            var plotClose = crisp(point.plotClose,
                strokeWidth);
            path.push(['M', crispX, plotClose], ['L', crispX + halfWidth, plotClose]);
            series.extendStem(path, strokeWidth / 2, plotClose);
        }
        return path;
    };
    /**
     * @private
     * @function Highcharts.seriesTypes.hlc#init
     */
    HLCSeries.prototype.init = function () {
        _super.prototype.init.apply(this, arguments);
        this.options.stacking = void 0; // #8817
    };
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    HLCSeries.prototype.pointAttribs = function (point, state) {
        var attribs = _super.prototype.pointAttribs.call(this,
            point,
            state);
        if (point) {
            delete attribs.fill;
        }
        return attribs;
    };
    HLCSeries.prototype.toYData = function (point) {
        // Return a plain array for speedy calculation
        return [point.high, point.low, point.close];
    };
    /**
     * Translate data points from raw values x and y to plotX and plotY
     *
     * @private
     * @function Highcharts.seriesTypes.hlc#translate
     */
    HLCSeries.prototype.translate = function () {
        var _a;
        var series = this,
            yAxis = series.yAxis,
            names = (this.pointArrayMap && this.pointArrayMap.slice()) || [],
            translated = names.map(function (name) {
                return "plot".concat(name.charAt(0).toUpperCase() + name.slice(1));
        }), lineWidth = (_a = series.options.lineWidth) !== null && _a !== void 0 ? _a : 1;
        translated.push('yBottom');
        names.push('low');
        _super.prototype.translate.apply(series);
        series.borderWidth = lineWidth;
        // Do the translation
        series.points.concat(series.condemnedPoints).forEach(function (point) {
            names.forEach(function (name, i) {
                var value = point[name];
                if (value !== null) {
                    if (series.dataModify) {
                        value = series.dataModify.modifyValue(value);
                    }
                    point[translated[i]] =
                        yAxis.toPixels(value, true);
                }
            });
            // The data label box
            var _a = point.shapeArgs || {},
                _b = _a.x,
                x = _b === void 0 ? 0 : _b,
                _c = _a.y,
                y = _c === void 0 ? 0 : _c,
                _d = _a.width,
                width = _d === void 0 ? 0 : _d,
                _e = _a.height,
                height = _e === void 0 ? 0 : _e;
            point.dlBox = { x: x, y: y, width: width, height: height };
            // The new shape args overwrite those of ColumnSeries
            point.shapeType = 'path';
            point.shapeArgs = { d: series.getPointPath(point) };
            // Align the tooltip to the high value to avoid covering the point
            point.tooltipPos[1] =
                point.plotHigh + yAxis.pos - series.chart.plotTop;
        });
    };
    HLCSeries.defaultOptions = merge(ColumnSeries.defaultOptions, HLC_HLCSeriesDefaults);
    return HLCSeries;
}(ColumnSeries));
extend(HLCSeries.prototype, {
    pointClass: HLC_HLCPoint,
    animate: null, // Disable animation
    directTouch: false,
    keysAffectYAxis: ['low', 'high'],
    pointArrayMap: ['high', 'low', 'close'],
    pointAttrToOptions: {
        stroke: 'color',
        'stroke-width': 'lineWidth'
    },
    pointValKey: 'close'
});
// Extend default lang options with OHLC terms
var HLCDefaultLangOptions = {
    stockOpen: 'Open',
    stockHigh: 'High',
    stockLow: 'Low',
    stockClose: 'Close'
};
extend(HLCSeries_defaultOptions.lang, HLCDefaultLangOptions);
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('hlc', HLCSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var HLC_HLCSeries = (HLCSeries);

;// ./code/es5/es-modules/Series/OHLC/OHLCPoint.js
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

var OHLCPoint_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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

var OHLCPoint_HLCSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.hlc;
/* *
 *
 *  Class
 *
 * */
var OHLCPoint = /** @class */ (function (_super) {
    OHLCPoint_extends(OHLCPoint, _super);
    function OHLCPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the parent method by adding up or down to the class name.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getClassName
     */
    OHLCPoint.prototype.getClassName = function () {
        return _super.prototype.getClassName.call(this) +
            (this.open < this.close ?
                ' highcharts-point-up' :
                ' highcharts-point-down');
    };
    /**
     * Save upColor as point color (#14826).
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveUpColor
     */
    OHLCPoint.prototype.resolveUpColor = function () {
        if (this.open < this.close &&
            !this.options.color &&
            this.series.options.upColor) {
            this.color = this.series.options.upColor;
        }
    };
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveColor
     */
    OHLCPoint.prototype.resolveColor = function () {
        _super.prototype.resolveColor.call(this);
        if (!this.series.is('heikinashi')) {
            this.resolveUpColor();
        }
    };
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getZone
     *
     * @return {Highcharts.SeriesZonesOptionsObject}
     *         The zone item.
     */
    OHLCPoint.prototype.getZone = function () {
        var zone = _super.prototype.getZone.call(this);
        this.resolveUpColor();
        return zone;
    };
    /**
     * Extend the parent method by resolving up/down colors (#15849)
     * @private
     **/
    OHLCPoint.prototype.applyOptions = function () {
        _super.prototype.applyOptions.apply(this, arguments);
        if (this.resolveColor) {
            this.resolveColor();
        }
        return this;
    };
    return OHLCPoint;
}(OHLCPoint_HLCSeries.prototype.pointClass));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var OHLC_OHLCPoint = (OHLCPoint);

;// ./code/es5/es-modules/Series/OHLC/OHLCSeriesDefaults.js
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
 * An OHLC chart is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per
 * data point.
 *
 * @sample stock/demo/ohlc
 *         OHLC chart
 *
 * @extends      plotOptions.hlc
 * @product      highstock
 * @optionparent plotOptions.ohlc
 */
var OHLCSeriesDefaults = {
    /**
     * @type      {Highcharts.DataGroupingApproximationValue|Function}
     * @default   ohlc
     * @product   highstock
     * @apioption plotOptions.ohlc.dataGrouping.approximation
     */
    /**
     * What type of legend symbol to render for this series. For OHLC series,
     * the default is `ohlc`, a vertical stem with an open tick on the left
     * and a close tick on the right.
     *
     * @default   ohlc
     * @product   highstock
     * @apioption plotOptions.ohlc.legendSymbol
     */
    legendSymbol: 'ohlc',
    /**
     * Determines which one of  `open`, `high`, `low`, `close` values should
     * be represented as `point.y`, which is later used to set dataLabel
     * position and [compare](#plotOptions.series.compare).
     *
     * @declare    Highcharts.OptionsPointValKeyValue
     * @default    close
     * @validvalue ["open", "high", "low", "close"]
     * @product    highstock
     * @apioption  plotOptions.ohlc.pointValKey
     */
    /**
     * Line color for up points.
     *
     * @type      {Highcharts.ColorType}
     * @product   highstock
     * @apioption plotOptions.ohlc.upColor
     */
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
            '<b> {series.name}</b><br/>' +
            '{series.chart.options.lang.stockOpen}: {point.open}<br/>' +
            '{series.chart.options.lang.stockHigh}: {point.high}<br/>' +
            '{series.chart.options.lang.stockLow}: {point.low}<br/>' +
            '{series.chart.options.lang.stockClose}: {point.close}<br/>'
    }
};
/**
 * The parameter allows setting line series type and use OHLC indicators.
 * Data in OHLC format is required.
 *
 * @sample {highstock} stock/indicators/use-ohlc-data
 *         Use OHLC data format to plot line chart
 *
 * @type      {boolean}
 * @product   highstock
 * @apioption plotOptions.series.useOhlcData
 */
/**
 * A `ohlc` series. If the [type](#series.ohlc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ohlc
 * @excluding dataParser, dataURL
 * @product   highstock
 * @apioption series.ohlc
 */
/**
 * An array of data points for the series. For the `ohlc` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4\.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 6, 5, 6, 7],
 *        [1, 9, 4, 8, 2],
 *        [2, 6, 3, 4, 10]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.ohlc.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 3,
 *        high: 4,
 *        low: 5,
 *        close: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 4,
 *        high: 3,
 *        low: 6,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @basic
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.arearange.data
 * @excluding y, marker
 * @product   highstock
 * @apioption series.ohlc.data
 */
/**
 * The closing value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.ohlc.data.close
 */
/**
 * The opening value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.ohlc.data.open
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var OHLC_OHLCSeriesDefaults = (OHLCSeriesDefaults);

;// ./code/es5/es-modules/Series/OHLC/OHLCSeries.js
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

var OHLCSeries_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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

var OHLCSeries_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;



var OHLCSeries_HLCSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.hlc;

/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function onSeriesAfterSetOptions(e) {
    var options = e.options,
        dataGrouping = options.dataGrouping;
    if (dataGrouping &&
        options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        dataGrouping.approximation = 'ohlc';
    }
}
/**
 * Add useOhlcData option
 * @private
 */
function onSeriesInit(eventOptions) {
    // eslint-disable-next-line no-invalid-this
    var series = this,
        options = eventOptions.options;
    if (options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        extend(series, {
            pointValKey: OHLCSeries.prototype.pointValKey,
            // Keys: ohlcProto.keys, // @todo potentially nonsense
            pointArrayMap: OHLCSeries.prototype.pointArrayMap,
            toYData: OHLCSeries.prototype.toYData
        });
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ohlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ohlc
 *
 * @augments Highcharts.Series
 */
var OHLCSeries = /** @class */ (function (_super) {
    OHLCSeries_extends(OHLCSeries, _super);
    function OHLCSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    OHLCSeries.compose = function (SeriesClass) {
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _args[_i - 1] = arguments[_i];
        }
        if (pushUnique(OHLCSeries_composed, 'OHLCSeries')) {
            addEvent(SeriesClass, 'afterSetOptions', onSeriesAfterSetOptions);
            addEvent(SeriesClass, 'init', onSeriesInit);
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    OHLCSeries.prototype.getPointPath = function (point) {
        var path = _super.prototype.getPointPath.call(this,
            point),
            strokeWidth = this.borderWidth,
            crispX = crisp(point.plotX || 0,
            strokeWidth),
            halfWidth = Math.round(point.shapeArgs.width / 2);
        if (point.open !== null) {
            var plotOpen = crisp(point.plotOpen,
                strokeWidth);
            path.push(['M', crispX, plotOpen], ['L', crispX - halfWidth, plotOpen]);
            _super.prototype.extendStem.call(this, path, strokeWidth / 2, plotOpen);
        }
        return path;
    };
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    OHLCSeries.prototype.pointAttribs = function (point, state) {
        var attribs = _super.prototype.pointAttribs.call(this,
            point,
            state),
            options = this.options;
        delete attribs.fill;
        if (!(point === null || point === void 0 ? void 0 : point.options.color) &&
            options.upColor &&
            ((point === null || point === void 0 ? void 0 : point.open) || 0) < ((point === null || point === void 0 ? void 0 : point.close) || 0)) {
            attribs.stroke = options.upColor;
        }
        return attribs;
    };
    OHLCSeries.prototype.toYData = function (point) {
        // Return a plain array for speedy calculation
        return [point.open, point.high, point.low, point.close];
    };
    /* *
     *
     *  Static Properties
     *
     * */
    OHLCSeries.defaultOptions = merge(OHLCSeries_HLCSeries.defaultOptions, OHLC_OHLCSeriesDefaults);
    return OHLCSeries;
}(OHLCSeries_HLCSeries));
extend(OHLCSeries.prototype, {
    pointClass: OHLC_OHLCPoint,
    pointArrayMap: ['open', 'high', 'low', 'close']
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('ohlc', OHLCSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var OHLC_OHLCSeries = (OHLCSeries);

;// ./code/es5/es-modules/Series/Candlestick/CandlestickSeriesDefaults.js
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
 * A candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * @sample stock/demo/candlestick/
 *         Candlestick chart
 *
 * @extends      plotOptions.ohlc
 * @excluding    borderColor,borderRadius,borderWidth
 * @product      highstock
 * @optionparent plotOptions.candlestick
 */
var CandlestickSeriesDefaults = {
    /**
     * The specific line color for up candle sticks. The default is to
     * inherit the general `lineColor` setting.
     *
     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
     *         Candlestick line colors
     *
     * @type      {Highcharts.ColorType}
     * @since     1.3.6
     * @product   highstock
     * @apioption plotOptions.candlestick.upLineColor
     */
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The pixel width of the line/border around the
             * candlestick.
             *
             * @product highstock
             */
            lineWidth: 2
        }
    },
    /**
     * @type    {number|null}
     * @product highstock
     */
    threshold: null,
    /**
     * What type of legend symbol to render for this series. For candlestick
     * series, the default is `candlestick`, a vertical line (wick) with a
     * rectangular body.
     *
     * @default   candlestick
     * @product   highstock
     * @apioption plotOptions.candlestick.legendSymbol
     */
    legendSymbol: 'candlestick',
    /**
     * The color of the line/border of the candlestick.
     *
     * In styled mode, the line stroke can be set with the
     * `.highcharts-candlestick-series .highcharts-point` rule.
     *
     * @see [upLineColor](#plotOptions.candlestick.upLineColor)
     *
     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
     *         Candlestick line colors
     *
     * @type    {Highcharts.ColorType}
     * @default #000000
     * @product highstock
     */
    lineColor: 'var(--highcharts-neutral-color-100)',
    /**
     * The pixel width of the candlestick line/border. Defaults to `1`.
     *
     *
     * In styled mode, the line stroke width can be set with the
     * `.highcharts-candlestick-series .highcharts-point` rule.
     *
     * @product highstock
     */
    lineWidth: 1,
    /**
     * The fill color of the candlestick when values are rising.
     *
     * In styled mode, the up color can be set with the
     * `.highcharts-candlestick-series .highcharts-point-up` rule.
     *
     * @sample {highstock} stock/plotoptions/candlestick-color/
     *         Custom colors
     * @sample {highstock} highcharts/css/candlestick/
     *         Colors in styled mode
     *
     * @type    {Highcharts.ColorType}
     * @default #ffffff
     * @product highstock
    */
    upColor: 'var(--highcharts-background-color)',
    /**
     * @product highstock
     */
    stickyTracking: true
};
/**
 * A `candlestick` series. If the [type](#series.candlestick.type)
 * option is not specified, it is inherited from [chart.type](
 * #chart.type).
 *
 * @type      {*}
 * @extends   series,plotOptions.candlestick
 * @excluding dataParser, dataURL, marker
 * @product   highstock
 * @apioption series.candlestick
 */
/**
 * An array of data points for the series. For the `candlestick` series
 * type, points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 7, 2, 0, 4],
 *        [1, 1, 4, 2, 8],
 *        [2, 3, 3, 9, 3]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.candlestick.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 9,
 *        high: 2,
 *        low: 4,
 *        close: 6,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 1,
 *        high: 4,
 *        low: 7,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @basic
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.ohlc.data
 * @excluding y
 * @product   highstock
 * @apioption series.candlestick.data
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Candlestick_CandlestickSeriesDefaults = (CandlestickSeriesDefaults);

;// ./code/es5/es-modules/Series/Candlestick/CandlestickSeries.js
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

var CandlestickSeries_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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


var _a = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes, CandlestickSeries_ColumnSeries = _a.column, CandlestickSeries_OHLCSeries = _a.ohlc;

/* *
 *
 *  Class
 *
 * */
/**
 * The candlestick series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.candlestick
 *
 * @augments Highcharts.seriesTypes.ohlc
 */
var CandlestickSeries = /** @class */ (function (_super) {
    CandlestickSeries_extends(CandlestickSeries, _super);
    function CandlestickSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Postprocess mapping between options and SVG attributes
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#pointAttribs
     */
    CandlestickSeries.prototype.pointAttribs = function (point, state) {
        var attribs = CandlestickSeries_ColumnSeries.prototype.pointAttribs.call(this,
            point,
            state),
            options = this.options,
            isUp = ((point === null || point === void 0 ? void 0 : point.open) || 0) < ((point === null || point === void 0 ? void 0 : point.close) || 0),
            stroke = options.lineColor || this.color,
            color = (point === null || point === void 0 ? void 0 : point.color) || this.color; // (#14826)
            attribs['stroke-width'] = options.lineWidth;
        attribs.fill = (point === null || point === void 0 ? void 0 : point.options.color) ||
            (isUp ? (options.upColor || color) : color);
        attribs.stroke = (point === null || point === void 0 ? void 0 : point.options.lineColor) ||
            (isUp ? (options.upLineColor || stroke) : stroke);
        // Select or hover states
        if (state) {
            var stateOptions = options.states[state];
            attribs.fill = stateOptions.color || attribs.fill;
            attribs.stroke = stateOptions.lineColor || attribs.stroke;
            attribs['stroke-width'] =
                stateOptions.lineWidth || attribs['stroke-width'];
        }
        return attribs;
    };
    /**
     * Create the SVGPath of the point based on the plot positions
     * @private
     */
    CandlestickSeries.prototype.getPointPath = function (point) {
        // Crisp vector coordinates
        var strokeWidth = this.borderWidth, 
            // #2596:
            crispX = crisp(point.plotX || 0,
            strokeWidth),
            plotOpen = point.plotOpen,
            plotClose = point.plotClose,
            topBoxFloat = Math.min(plotOpen,
            plotClose),
            bottomBoxFloat = Math.max(plotOpen,
            plotClose),
            halfWidth = Math.round(point.shapeArgs.width / 2),
            reversedYAxis = this.yAxis.reversed,
            hasTopWhisker = reversedYAxis ?
                bottomBoxFloat !== point.yBottom :
                Math.round(topBoxFloat) !==
                    Math.round(point.plotHigh || 0),
            hasBottomWhisker = reversedYAxis ?
                Math.round(topBoxFloat) !==
                    Math.round(point.plotHigh || 0) :
                bottomBoxFloat !== point.yBottom,
            topBox = crisp(topBoxFloat,
            strokeWidth),
            bottomBox = crisp(bottomBoxFloat,
            strokeWidth);
        // Create the path. Due to a bug in Chrome 49, the path is
        // first instantiated with no values, then the values
        // pushed. For unknown reasons, instantiating the path array
        // with all the values would lead to a crash when updating
        // frequently (#5193).
        var path = [];
        path.push(['M', crispX - halfWidth, bottomBox], ['L', crispX - halfWidth, topBox], ['L', crispX + halfWidth, topBox], ['L', crispX + halfWidth, bottomBox], ['Z'], // Ensure a nice rectangle #2602
        ['M', crispX, topBox], [
            'L',
            // #460, #2094
            crispX,
            hasTopWhisker ?
                Math.round(reversedYAxis ?
                    point.yBottom :
                    point.plotHigh) :
                topBox
        ], ['M', crispX, bottomBox], [
            'L',
            // #460, #2094
            crispX,
            hasBottomWhisker ?
                Math.round(reversedYAxis ?
                    point.plotHigh :
                    point.yBottom) :
                bottomBox
        ]);
        return path;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    CandlestickSeries.defaultOptions = merge(CandlestickSeries_OHLCSeries.defaultOptions, { tooltip: CandlestickSeries_OHLCSeries.defaultOptions.tooltip }, Candlestick_CandlestickSeriesDefaults);
    return CandlestickSeries;
}(CandlestickSeries_OHLCSeries));
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('candlestick', CandlestickSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Candlestick_CandlestickSeries = ((/* unused pure expression or super */ null && (CandlestickSeries)));

;// ./code/es5/es-modules/Series/Flags/FlagsPoint.js
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

var FlagsPoint_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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


var FlagsPoint_ColumnPoint = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var FlagsPoint = /** @class */ (function (_super) {
    FlagsPoint_extends(FlagsPoint, _super);
    function FlagsPoint() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this,
            arguments) || this;
        _this.ttBelow = false;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    FlagsPoint.prototype.isValid = function () {
        // #9233 - Prevent from treating flags as null points (even if
        // they have no y values defined).
        return isNumber(this.y) || typeof this.y === 'undefined';
    };
    /**
     * @private
     */
    FlagsPoint.prototype.hasNewShapeType = function () {
        var shape = this.options.shape || this.series.options.shape;
        return this.graphic && shape && shape !== this.graphic.symbolKey;
    };
    return FlagsPoint;
}(FlagsPoint_ColumnPoint));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Flags_FlagsPoint = (FlagsPoint);

;// ./code/es5/es-modules/Series/Flags/FlagsSeriesDefaults.js
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
 * Flags are used to mark events in stock charts. They can be added on the
 * timeline, or attached to a specific series.
 *
 * @sample stock/demo/flags-general/
 *         Flags on a line series
 *
 * @extends      plotOptions.column
 * @excluding    animation, borderColor, borderWidth,
 *               colorByPoint, cropThreshold, dataGrouping, pointPadding,
 *               pointWidth, turboThreshold
 * @product      highstock
 * @optionparent plotOptions.flags
 */
var FlagsSeriesDefaults = {
    /**
     * The corner radius of the border surrounding each flag. For `squarepin`
     * shaped flags only. A number signifies pixels. A percentage string, like
     * for example 50%, signifies a relative size.
     */
    borderRadius: 0,
    /**
     * In case the flag is placed on a series, on what point key to place
     * it. Line and columns have one key, `y`. In range or OHLC-type series,
     * however, the flag can optionally be placed on the `open`, `high`,
     * `low` or `close` key.
     *
     * @sample {highstock} stock/plotoptions/flags-onkey/
     *         Range series, flag on high
     *
     * @type       {string}
     * @default    y
     * @since      4.2.2
     * @product    highstock
     * @validvalue ["y", "open", "high", "low", "close"]
     * @apioption  plotOptions.flags.onKey
     */
    /**
   * What type of legend symbol to render for this series. For flags
   * series, the default is `flag-icon`, a pole with a pennant.
   *
     * @default   flag-icon
     * @product   highstock
     * @apioption plotOptions.flags.legendSymbol
     */
    legendSymbol: 'flag-icon',
    /**
     * The id of the series that the flags should be drawn on. If no id
     * is given, the flags are drawn on the x axis.
     *
     * @sample {highstock} stock/plotoptions/flags/
     *         Flags on series and on x axis
     *
     * @type      {string}
     * @product   highstock
     * @apioption plotOptions.flags.onSeries
     */
    pointRange: 0, // #673
    /**
     * Whether the flags are allowed to overlap sideways. If `false`, the
     * flags are moved sideways using an algorithm that seeks to place every
     * flag as close as possible to its original position.
     *
     * @sample {highstock} stock/plotoptions/flags-allowoverlapx
     *         Allow sideways overlap
     *
     * @since 6.0.4
     */
    allowOverlapX: false,
    /**
     * The shape of the marker. Can be one of "flag", "circlepin",
     * "squarepin", or an image of the format `url(/path-to-image.jpg)`.
     * Individual shapes can also be set for each point.
     *
     * @sample {highstock} stock/plotoptions/flags/
     *         Different shapes
     *
     * @type    {Highcharts.FlagsShapeValue}
     * @product highstock
     */
    shape: 'flag',
    /**
     * When multiple flags in the same series fall on the same value, this
     * number determines the vertical offset between them.
     *
     * @sample {highstock} stock/plotoptions/flags-stackdistance/
     *         A greater stack distance
     *
     * @product highstock
     */
    stackDistance: 12,
    /**
     * Text alignment for the text inside the flag.
     *
     * @since      5.0.0
     * @product    highstock
     * @validvalue ["left", "center", "right"]
     */
    textAlign: 'center',
    /**
     * Specific tooltip options for flag series. Flag series tooltips are
     * different from most other types in that a flag doesn't have a data
     * value, so the tooltip rather displays the `text` option for each
     * point.
     *
     * @extends   plotOptions.series.tooltip
     * @excluding changeDecimals, valueDecimals, valuePrefix, valueSuffix
     * @product   highstock
     */
    tooltip: {
        pointFormat: '{point.text}'
    },
    /**
     * @type {number|null}
     */
    threshold: null,
    /**
     * The text to display on each flag. This can be defined on series
     * level, or individually for each point. Defaults to `"A"`.
     *
     * @type      {string}
     * @default   A
     * @product   highstock
     * @apioption plotOptions.flags.title
     */
    /**
     * The y position of the top left corner of the flag relative to either
     * the series (if onSeries is defined), or the x axis. Defaults to
     * `-30`.
     *
     * @product highstock
     */
    y: -30,
    /**
     * Whether to use HTML to render the flag texts. Using HTML allows for
     * advanced formatting, images and reliable bi-directional text
     * rendering. Note that exported images won't respect the HTML, and that
     * HTML won't respect Z-index settings.
     *
     * @type      {boolean}
     * @default   false
     * @since     1.3
     * @product   highstock
     * @apioption plotOptions.flags.useHTML
     */
    /**
     * Fixed width of the flag's shape. By default, width is autocalculated
     * according to the flag's title.
     *
     * @sample {highstock} stock/demo/flags-shapes/
     *         Flags with fixed width
     *
     * @type      {number}
     * @product   highstock
     * @apioption plotOptions.flags.width
     */
    /**
     * Fixed height of the flag's shape. By default, height is
     * autocalculated according to the flag's title.
     *
     * @type      {number}
     * @product   highstock
     * @apioption plotOptions.flags.height
     */
    /**
     * The fill color for the flags.
     *
     * @type    {Highcharts.ColorType}
     * @product highstock
     */
    fillColor: 'var(--highcharts-background-color)',
    /**
     * The color of the line/border of the flag.
     *
     * In styled mode, the stroke is set in the
     * `.highcharts-flag-series.highcharts-point` rule.
     *
     * @type      {Highcharts.ColorType}
     * @default   #000000
     * @product   highstock
     * @apioption plotOptions.flags.lineColor
     */
    /**
     * The pixel width of the flag's line/border.
     *
     * @product highstock
     */
    lineWidth: 1,
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The color of the line/border of the flag.
             *
             * @type    {Highcharts.ColorType}
             * @product highstock
             */
            lineColor: 'var(--highcharts-neutral-color-100)',
            /**
             * The fill or background color of the flag.
             *
             * @type    {Highcharts.ColorType}
             * @product highstock
             */
            fillColor: 'var(--highcharts-highlight-color-20)'
        }
    },
    /**
     * The text styles of the flag.
     *
     * In styled mode, the styles are set in the
     * `.highcharts-flag-series .highcharts-point` rule.
     *
     * @type    {Highcharts.CSSObject}
     * @default {"fontSize": "11px", "fontWeight": "bold"}
     * @product highstock
     */
    style: {
        /** @ignore-option */
        color: 'var(--highcharts-neutral-color-100)',
        /** @ignore-option */
        fontSize: '0.7em',
        /** @ignore-option */
        fontWeight: 'bold'
    }
};
/**
 * A `flags` series. If the [type](#series.flags.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.flags
 * @excluding animation, borderColor, borderRadius, borderWidth, colorByPoint,
 *            connectNulls, cropThreshold, dashStyle, dataGrouping, dataParser,
 *            dataURL, gapSize, gapUnit, linecap, lineWidth, marker,
 *            pointPadding, pointWidth, step, turboThreshold, useOhlcData
 * @product   highstock
 * @apioption series.flags
 */
/**
 * An array of data points for the series. For the `flags` series type,
 * points can be given in the following ways:
 *
 * 1. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.flags.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        title: "A",
 *        text: "First event"
 *    }, {
 *        x: 1,
 *        title: "B",
 *        text: "Second event"
 *    }]
 *    ```
 *
 * @basic
 * @type      {Array<*>}
 * @extends   series.line.data
 * @excluding dataLabels, marker, name, y
 * @product   highstock
 * @apioption series.flags.data
 */
/**
 * The fill color of an individual flag. By default it inherits from
 * the series color.
 *
 * @type      {Highcharts.ColorType}
 * @product   highstock
 * @apioption series.flags.data.fillColor
 */
/**
 * The longer text to be shown in the flag's tooltip.
 *
 * @type      {string}
 * @product   highstock
 * @apioption series.flags.data.text
 */
/**
 * The short text to be shown on the flag.
 *
 * @type      {string}
 * @product   highstock
 * @apioption series.flags.data.title
 */
''; // Keeps doclets above in transpiled file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Flags_FlagsSeriesDefaults = (FlagsSeriesDefaults);

;// ./code/es5/es-modules/Series/Flags/FlagsSymbols.js
/* *
 *
 *  Imports
 *
 * */


var FlagsSymbols_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;
/* *
 *
 *  Composition
 *
 * */
var FlagsSymbols;
(function (FlagsSymbols) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    function compose(SVGRendererClass) {
        if (pushUnique(FlagsSymbols_composed, 'Series.Flags')) {
            var symbols = SVGRendererClass.prototype.symbols;
            symbols.flag = flag;
            createPinSymbol(symbols, 'circle');
            createPinSymbol(symbols, 'square');
            symbols['flag-icon'] = function (x, y, w, h) {
                return flag.call(this, x, y, w, Math.round(h * 0.6), {
                    anchorX: Math.round(x),
                    anchorY: Math.round(y + h)
                });
            };
        }
    }
    FlagsSymbols.compose = compose;
    /**
     * Create the flag icon with anchor.
     * @private
     */
    function flag(x, y, w, h, options) {
        var anchorX = (options && options.anchorX) || x,
            anchorY = (options && options.anchorY) || y;
        var path = this.circle(anchorX - 1,
            anchorY - 1, 2, 2);
        path.push(['M', anchorX, anchorY], ['L', x, y + h], ['L', x, y], ['L', x + w, y], ['L', x + w, y + h], ['L', x, y + h], ['Z']);
        return path;
    }
    /**
     * Create the circlepin and squarepin icons with anchor.
     * @private
     */
    function createPinSymbol(symbols, shape) {
        symbols[(shape + 'pin')] = function (x, y, w, h, options) {
            var anchorX = options && options.anchorX,
                anchorY = options && options.anchorY;
            var path;
            // For single-letter flags, make sure circular flags are not taller
            // than their width
            if (shape === 'circle' && h > w) {
                x -= Math.round((h - w) / 2);
                w = h;
            }
            path = (symbols[shape])(x, y, w, h, options);
            if (anchorX && anchorY) {
                /**
                 * If the label is below the anchor, draw the connecting line
                 * from the top edge of the label, otherwise start drawing from
                 * the bottom edge
                 */
                var labelX = anchorX;
                if (shape === 'circle') {
                    labelX = x + w / 2;
                }
                else {
                    var startSeg = path[0];
                    var endSeg = path[1];
                    if (startSeg[0] === 'M' && endSeg[0] === 'L') {
                        labelX = (startSeg[1] + endSeg[1]) / 2;
                    }
                }
                var labelY = (y > anchorY) ? y : y + h;
                path.push([
                    'M',
                    labelX,
                    labelY
                ], [
                    'L',
                    anchorX,
                    anchorY
                ]);
                path = path.concat(symbols.circle(anchorX - 1, anchorY - 1, 2, 2));
            }
            return path;
        };
    }
})(FlagsSymbols || (FlagsSymbols = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Flags_FlagsSymbols = (FlagsSymbols);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series","types","column"],"commonjs":["highcharts","Series","types","column"],"commonjs2":["highcharts","Series","types","column"],"root":["Highcharts","Series","types","column"]}
var highcharts_Series_types_column_commonjs_highcharts_Series_types_column_commonjs2_highcharts_Series_types_column_root_Highcharts_Series_types_column_ = __webpack_require__(448);
var highcharts_Series_types_column_commonjs_highcharts_Series_types_column_commonjs2_highcharts_Series_types_column_root_Highcharts_Series_types_column_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_types_column_commonjs_highcharts_Series_types_column_commonjs2_highcharts_Series_types_column_root_Highcharts_Series_types_column_);
;// ./code/es5/es-modules/Series/OnSeriesComposition.js
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



var OnSeriesComposition_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;
var columnProto = (highcharts_Series_types_column_commonjs_highcharts_Series_types_column_commonjs2_highcharts_Series_types_column_root_Highcharts_Series_types_column_default()).prototype;

var seriesProto = (highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()).prototype;

/* *
 *
 *  Composition
 *
 * */
var OnSeriesComposition;
(function (OnSeriesComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    function compose(SeriesClass) {
        if (pushUnique(OnSeriesComposition_composed, 'OnSeries')) {
            var seriesProto_1 = SeriesClass.prototype;
            seriesProto_1.getPlotBox = getPlotBox;
            seriesProto_1.translate = translate;
        }
        return SeriesClass;
    }
    OnSeriesComposition.compose = compose;
    /**
     * Override getPlotBox. If the onSeries option is valid, return the plot box
     * of the onSeries, otherwise proceed as usual.
     *
     * @private
     */
    function getPlotBox(name) {
        return seriesProto.getPlotBox.call((this.options.onSeries &&
            this.chart.get(this.options.onSeries)) || this, name);
    }
    OnSeriesComposition.getPlotBox = getPlotBox;
    /**
     * Extend the translate method by placing the point on the related series
     *
     * @private
     */
    function translate() {
        var _a,
            _b;
        columnProto.translate.apply(this);
        var series = this,
            options = series.options,
            chart = series.chart,
            points = series.points,
            optionsOnSeries = options.onSeries,
            onSeries = (optionsOnSeries &&
                chart.get(optionsOnSeries)),
            step = onSeries && onSeries.options.step,
            onData = (onSeries && onSeries.points),
            inverted = chart.inverted,
            xAxis = series.xAxis,
            yAxis = series.yAxis;
        var cursor = points.length - 1,
            point,
            lastPoint,
            onKey = options.onKey || 'y',
            i = onData && onData.length,
            xOffset = 0,
            leftPoint,
            lastX,
            rightPoint,
            currentDataGrouping,
            distanceRatio;
        // Relate to a master series
        if (onSeries && onSeries.visible && i) {
            xOffset = (onSeries.pointXOffset || 0) + (onSeries.barW || 0) / 2;
            currentDataGrouping = onSeries.currentDataGrouping;
            lastX = (onData[i - 1].x +
                (currentDataGrouping ? currentDataGrouping.totalRange : 0)); // #2374
            // sort the data points
            stableSort(points, function (a, b) { return (a.x - b.x); });
            onKey = 'plot' + onKey[0].toUpperCase() + onKey.substr(1);
            var _loop_1 = function () {
                    leftPoint = onData[i];
                point = points[cursor];
                point.y = leftPoint.y;
                if (leftPoint.x <= point.x &&
                    typeof leftPoint[onKey] !== 'undefined') {
                    if (point.x <= lastX) { // #803
                        point.plotY = leftPoint[onKey];
                        // Interpolate between points, #666
                        if (leftPoint.x < point.x &&
                            !step) {
                            rightPoint = onData[i + 1];
                            if (rightPoint &&
                                typeof rightPoint[onKey] !== 'undefined') {
                                // If the series is spline, calculate Y of the
                                // point on the bezier line. #19264
                                if (defined(point.plotX) &&
                                    onSeries.is('spline')) {
                                    leftPoint = leftPoint;
                                    rightPoint = rightPoint;
                                    var p0_1 = [
                                            leftPoint.plotX || 0,
                                            leftPoint.plotY || 0
                                        ],
                                        p3_1 = [
                                            rightPoint.plotX || 0,
                                            rightPoint.plotY || 0
                                        ],
                                        p1_1 = (((_a = leftPoint.controlPoints) === null || _a === void 0 ? void 0 : _a.high) ||
                                            p0_1),
                                        p2_1 = (((_b = rightPoint.controlPoints) === null || _b === void 0 ? void 0 : _b.low) ||
                                            p3_1),
                                        pixelThreshold = 0.25,
                                        maxIterations = 100,
                                        calculateCoord = function (t,
                                        key) { return (
                                        // The parametric formula for the
                                        // cubic Bezier curve.
                                        Math.pow(1 - t, 3) * p0_1[key] +
                                            3 * (1 - t) * (1 - t) * t *
                                                p1_1[key] + 3 * (1 - t) * t * t *
                                            p2_1[key] + t * t * t * p3_1[key]); };
                                    var tMin = 0,
                                        tMax = 1,
                                        t = void 0;
                                    // Find `t` of the parametric function of
                                    // the bezier curve for the given `plotX`.
                                    for (var i_1 = 0; i_1 < maxIterations; i_1++) {
                                        var tMid = (tMin + tMax) / 2;
                                        var xMid = calculateCoord(tMid, 0);
                                        if (xMid === null) {
                                            break;
                                        }
                                        if (Math.abs(xMid - point.plotX) < pixelThreshold) {
                                            t = tMid;
                                            break;
                                        }
                                        if (xMid < point.plotX) {
                                            tMin = tMid;
                                        }
                                        else {
                                            tMax = tMid;
                                        }
                                    }
                                    if (defined(t)) {
                                        point.plotY =
                                            calculateCoord(t, 1);
                                        point.y =
                                            yAxis.toValue(point.plotY, true);
                                    }
                                }
                                else {
                                    // The distance ratio, between 0 and 1
                                    distanceRatio =
                                        (point.x - leftPoint.x) /
                                            (rightPoint.x - leftPoint.x);
                                    point.plotY +=
                                        distanceRatio *
                                            // The plotY distance
                                            (rightPoint[onKey] - leftPoint[onKey]);
                                    point.y +=
                                        distanceRatio *
                                            (rightPoint.y - leftPoint.y);
                                }
                            }
                        }
                    }
                    cursor--;
                    i++; // Check again for points in the same x position
                    if (cursor < 0) {
                        return "break";
                    }
                }
            };
            while (i-- && points[cursor]) {
                var state_1 = _loop_1();
                if (state_1 === "break")
                    break;
            }
        }
        // Add plotY position and handle stacking
        points.forEach(function (point, i) {
            var stackIndex;
            point.plotX += xOffset; // #2049
            // Undefined plotY means the point is either on axis, outside series
            // range or hidden series. If the series is outside the range of the
            // x axis it should fall through with an undefined plotY, but then
            // we must remove the shapeArgs (#847). For inverted charts, we need
            // to calculate position anyway, because series.invertGroups is not
            // defined
            if (typeof point.plotY === 'undefined' || inverted) {
                if (point.plotX >= 0 &&
                    point.plotX <= xAxis.len) {
                    // We're inside xAxis range
                    if (inverted) {
                        point.plotY = xAxis.translate(point.x, 0, 1, 0, 1);
                        point.plotX = defined(point.y) ?
                            yAxis.translate(point.y, 0, 0, 0, 1) :
                            0;
                    }
                    else {
                        point.plotY = (xAxis.opposite ? 0 : series.yAxis.len) +
                            xAxis.offset; // For the windbarb demo
                    }
                }
                else {
                    point.shapeArgs = {}; // 847
                }
            }
            // If multiple flags appear at the same x, order them into a stack
            lastPoint = points[i - 1];
            if (lastPoint && lastPoint.plotX === point.plotX) {
                if (typeof lastPoint.stackIndex === 'undefined') {
                    lastPoint.stackIndex = 0;
                }
                stackIndex = lastPoint.stackIndex + 1;
            }
            point.stackIndex = stackIndex; // #3639
        });
        this.onSeries = onSeries;
    }
    OnSeriesComposition.translate = translate;
})(OnSeriesComposition || (OnSeriesComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Series_OnSeriesComposition = (OnSeriesComposition);

;// ./code/es5/es-modules/Series/Flags/FlagsSeries.js
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

var FlagsSeries_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d,
        b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d,
        b) { d.__proto__ = b; }) ||
                function (d,
        b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b,
        p)) d[p] = b[p]; };
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




var noop = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).noop;


var distribute = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).distribute;

var Series = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).series, FlagsSeries_ColumnSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column;


/* *
 *
 *  Classes
 *
 * */
/**
 * The Flags series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.flags
 *
 * @augments Highcharts.Series
 */
var FlagsSeries = /** @class */ (function (_super) {
    FlagsSeries_extends(FlagsSeries, _super);
    function FlagsSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Disable animation, but keep clipping (#8546).
     * @private
     */
    FlagsSeries.prototype.animate = function (init) {
        if (init) {
            this.setClip();
        }
    };
    /**
     * Draw the markers.
     * @private
     */
    FlagsSeries.prototype.drawPoints = function () {
        var _a,
            _b;
        var series = this,
            points = series.points,
            chart = series.chart,
            renderer = chart.renderer,
            inverted = chart.inverted,
            options = series.options,
            optionsY = options.y,
            yAxis = series.yAxis,
            boxesMap = {},
            boxes = [],
            borderRadius = isNumber(options.borderRadius) ?
                options.borderRadius : 0;
        var plotX,
            plotY,
            shape,
            i,
            point,
            graphic,
            stackIndex,
            anchorY,
            attribs,
            outsideRight,
            centered;
        i = points.length;
        while (i--) {
            point = points[i];
            outsideRight =
                (inverted ? point.plotY : point.plotX) >
                    series.xAxis.len;
            plotX = point.plotX;
            stackIndex = point.stackIndex;
            shape = point.options.shape || options.shape;
            plotY = point.plotY;
            if (typeof plotY !== 'undefined') {
                plotY = point.plotY + optionsY -
                    (typeof stackIndex !== 'undefined' &&
                        (stackIndex * options.stackDistance));
            }
            // Skip connectors for higher level stacked points
            point.anchorX = stackIndex ? void 0 : point.plotX;
            anchorY = stackIndex ? void 0 : point.plotY;
            centered = shape !== 'flag';
            graphic = point.graphic;
            // Only draw the point if y is defined and the flag is within
            // the visible area
            if (typeof plotY !== 'undefined' &&
                plotX >= 0 &&
                !outsideRight) {
                // #15384
                if (graphic && point.hasNewShapeType()) {
                    graphic = graphic.destroy();
                }
                // Create the flag
                if (!graphic) {
                    graphic = point.graphic = renderer.label('', 0, void 0, shape, void 0, void 0, options.useHTML)
                        .addClass(point.getClassName())
                        .add(series.markerGroup);
                    // Add reference to the point for tracker (#6303)
                    if (point.graphic.div) {
                        point.graphic.div.point = point;
                    }
                    graphic.isNew = true;
                }
                graphic.attr({
                    align: centered ? 'center' : 'left',
                    width: options.width,
                    height: options.height,
                    'text-align': options.textAlign,
                    r: borderRadius
                });
                if (!chart.styledMode) {
                    graphic
                        .attr(series.pointAttribs(point))
                        .css(merge(options.style, point.style))
                        .shadow(options.shadow);
                }
                if (plotX > 0) { // #3119
                    plotX -= graphic.strokeWidth() % 2; // #4285
                }
                // Plant the flag
                attribs = {
                    y: plotY,
                    anchorY: anchorY
                };
                if (options.allowOverlapX) {
                    attribs.x = plotX;
                    attribs.anchorX = point.anchorX;
                }
                graphic.attr({
                    // Allow empty string as a flag title (#20549)
                    text: (_b = (_a = point.options.title) !== null && _a !== void 0 ? _a : options.title) !== null && _b !== void 0 ? _b : 'A'
                })[graphic.isNew ? 'attr' : 'animate'](attribs);
                // Rig for the distribute function
                if (!options.allowOverlapX) {
                    if (!boxesMap[point.plotX]) {
                        boxesMap[point.plotX] = {
                            align: centered ? 0.5 : 0,
                            size: graphic.width || 0,
                            target: plotX,
                            anchorX: plotX
                        };
                    }
                    else {
                        boxesMap[point.plotX].size = Math.max(boxesMap[point.plotX].size, graphic.width || 0);
                    }
                }
                // Set the tooltip anchor position
                point.tooltipPos = [
                    plotX,
                    plotY + yAxis.pos - chart.plotTop
                ]; // #6327
            }
            else if (graphic) {
                point.graphic = graphic.destroy();
            }
        }
        // Handle X-dimension overlapping
        if (!options.allowOverlapX) {
            var maxDistance_1 = 100;
            objectEach(boxesMap, function (box) {
                box.plotX = box.anchorX;
                boxes.push(box);
                maxDistance_1 = Math.max(box.size, maxDistance_1);
            });
            // If necessary (for overlapping or long labels)  distribute it
            // depending on the label width or a hardcoded value, #16041.
            distribute(boxes, inverted ? yAxis.len : this.xAxis.len, maxDistance_1);
            for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                var point_1 = points_1[_i];
                var plotX_1 = point_1.plotX,
                    graphic_1 = point_1.graphic,
                    box = graphic_1 && boxesMap[plotX_1];
                if (box && graphic_1) {
                    // Hide flag when its box position is not specified
                    // (#8573, #9299)
                    if (!defined(box.pos)) {
                        graphic_1.hide().isNew = true;
                    }
                    else {
                        graphic_1[graphic_1.isNew ? 'attr' : 'animate']({
                            x: box.pos + (box.align || 0) * box.size,
                            anchorX: point_1.anchorX
                        }).show().isNew = false;
                    }
                }
            }
        }
        // Can be a mix of SVG and HTML and we need events for both (#6303)
        if (options.useHTML && series.markerGroup) {
            wrap(series.markerGroup, 'on', function (proceed) {
                return highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default().prototype.on.apply(
                // For HTML
                // eslint-disable-next-line no-invalid-this
                proceed.apply(this, [].slice.call(arguments, 1)), 
                // And for SVG
                [].slice.call(arguments, 1));
            });
        }
    };
    /**
     * Extend the column trackers with listeners to expand and contract
     * stacks.
     * @private
     */
    FlagsSeries.prototype.drawTracker = function () {
        var series = this,
            points = series.points;
        _super.prototype.drawTracker.call(this);
        var _loop_1 = function (point) {
                var graphic = point.graphic;
            if (graphic) {
                if (point.unbindMouseOver) {
                    point.unbindMouseOver();
                }
                point.unbindMouseOver = addEvent(graphic.element, 'mouseover', function () {
                    // Raise this point
                    if (point.stackIndex > 0 &&
                        !point.raised) {
                        point._y = graphic.y;
                        graphic.attr({
                            y: point._y - 8
                        });
                        point.raised = true;
                    }
                    // Revert other raised points
                    for (var _i = 0, points_3 = points; _i < points_3.length; _i++) {
                        var otherPoint = points_3[_i];
                        if (otherPoint !== point &&
                            otherPoint.raised &&
                            otherPoint.graphic) {
                            otherPoint.graphic.attr({
                                y: otherPoint._y
                            });
                            otherPoint.raised = false;
                        }
                    }
                });
            }
        };
        /* *
        * Bring each stacked flag up on mouse over, this allows readability
        * of vertically stacked elements as well as tight points on the x
        * axis. #1924.
        */
        for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
            var point = points_2[_i];
            _loop_1(point);
        }
    };
    /**
     * Get presentational attributes
     * @private
     */
    FlagsSeries.prototype.pointAttribs = function (point, state) {
        var options = this.options,
            color = (point && point.color) || this.color;
        var lineColor = options.lineColor,
            lineWidth = (point && point.lineWidth),
            fill = (point && point.fillColor) || options.fillColor;
        if (state) {
            fill = options.states[state].fillColor;
            lineColor = options.states[state].lineColor;
            lineWidth = options.states[state].lineWidth;
        }
        return {
            fill: fill || color,
            stroke: lineColor || color,
            'stroke-width': lineWidth || options.lineWidth || 0
        };
    };
    /**
     * @private
     */
    FlagsSeries.prototype.setClip = function () {
        Series.prototype.setClip.apply(this, arguments);
        if (this.options.clip !== false &&
            this.sharedClipKey &&
            this.markerGroup) {
            this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey]);
        }
    };
    /* *
     *
     *  Static Properties
     *
     * */
    FlagsSeries.compose = Flags_FlagsSymbols.compose;
    FlagsSeries.defaultOptions = merge(FlagsSeries_ColumnSeries.defaultOptions, Flags_FlagsSeriesDefaults);
    return FlagsSeries;
}(FlagsSeries_ColumnSeries));
Series_OnSeriesComposition.compose(FlagsSeries);
extend(FlagsSeries.prototype, {
    allowDG: false,
    forceCrop: true,
    invertible: false, // Flags series group should not be invertible (#14063).
    noSharedTooltip: true,
    pointClass: Flags_FlagsPoint,
    sorted: false,
    takeOrdinalPosition: false, // #1074
    trackerGroups: ['markerGroup'],
    buildKDTree: noop,
    /**
     * Inherit the initialization from base Series.
     * @private
     */
    init: Series.prototype.init
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('flags', FlagsSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Flags_FlagsSeries = (FlagsSeries);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"circlepin"|"flag"|"squarepin"} Highcharts.FlagsShapeValue
 */
''; // Detach doclets above

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","StackItem"],"commonjs":["highcharts","StackItem"],"commonjs2":["highcharts","StackItem"],"root":["Highcharts","StackItem"]}
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_ = __webpack_require__(184);
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default = /*#__PURE__*/__webpack_require__.n(highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_);
;// ./code/es5/es-modules/Core/Axis/BrokenAxis.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
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
 *  Composition
 *
 * */
/**
 * Axis with support of broken data rows.
 * @internal
 */
var BrokenAxis;
(function (BrokenAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds support for broken axes.
     * @internal
     */
    function compose(AxisClass, SeriesClass) {
        if (!AxisClass.keepProps.includes('brokenAxis')) {
            AxisClass.keepProps.push('brokenAxis');
            addEvent(AxisClass, 'init', onAxisInit);
            addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            addEvent(AxisClass, 'afterSetTickPositions', onAxisAfterSetTickPositions);
            addEvent(AxisClass, 'afterSetOptions', onAxisAfterSetOptions);
            var seriesProto = SeriesClass.prototype;
            seriesProto.drawBreaks = seriesDrawBreaks;
            seriesProto.gappedPath = seriesGappedPath;
            addEvent(SeriesClass, 'afterGeneratePoints', onSeriesAfterGeneratePoints);
            addEvent(SeriesClass, 'afterRender', onSeriesAfterRender);
        }
        return AxisClass;
    }
    BrokenAxis.compose = compose;
    /** @internal */
    function onAxisAfterInit() {
        if (typeof this.brokenAxis !== 'undefined') {
            this.brokenAxis.setBreaks(this.options.breaks, false);
        }
    }
    /**
     * Force Axis to be not-ordinal when breaks are defined.
     * @internal
     */
    function onAxisAfterSetOptions() {
        var _a;
        var axis = this;
        // Too early for axis.brokenAxis?.hasBreaks.
        if (Object.keys(((_a = axis.options.breaks) === null || _a === void 0 ? void 0 : _a[0]) || {}).length) {
            axis.options.ordinal = false;
        }
    }
    /** @internal */
    function onAxisAfterSetTickPositions() {
        var axis = this,
            brokenAxis = axis.brokenAxis;
        if (brokenAxis === null || brokenAxis === void 0 ? void 0 : brokenAxis.hasBreaks) {
            var tickPositions = axis.tickPositions,
                info = axis.tickPositions.info,
                newPositions = [];
            for (var i = 0; i < tickPositions.length; i++) {
                if (!brokenAxis.isInAnyBreak(tickPositions[i])) {
                    newPositions.push(tickPositions[i]);
                }
            }
            axis.tickPositions = newPositions;
            axis.tickPositions.info = info;
        }
    }
    /** @internal */
    function onAxisInit() {
        var axis = this;
        if (!axis.brokenAxis) {
            axis.brokenAxis = new Additions(axis);
        }
    }
    /** @internal */
    function onSeriesAfterGeneratePoints() {
        var _a,
            _b;
        var _c = this,
            isDirty = _c.isDirty,
            connectNulls = _c.options.connectNulls,
            points = _c.points,
            xAxis = _c.xAxis,
            yAxis = _c.yAxis;
        // Set, or reset visibility of the points. Axis.setBreaks marks
        // the series as isDirty
        if (isDirty) {
            var i = points.length;
            while (i--) {
                var point = points[i];
                // Respect nulls inside the break (#4275)
                var nullGap = point.y === null && connectNulls === false;
                var isPointInBreak = (!nullGap && (((_a = xAxis === null || xAxis === void 0 ? void 0 : xAxis.brokenAxis) === null || _a === void 0 ? void 0 : _a.isInAnyBreak(point.x,
                    true)) ||
                        ((_b = yAxis === null || yAxis === void 0 ? void 0 : yAxis.brokenAxis) === null || _b === void 0 ? void 0 : _b.isInAnyBreak(point.y,
                    true))));
                // Set point.visible if in any break.
                // If not in break, reset visible to original value.
                point.visible = isPointInBreak ?
                    false :
                    point.options.visible !== false;
            }
        }
    }
    /** @internal */
    function onSeriesAfterRender() {
        this.drawBreaks(this.xAxis, ['x']);
        this.drawBreaks(this.yAxis, pick(this.pointArrayMap, ['y']));
    }
    /** @internal */
    function seriesDrawBreaks(axis, keys) {
        var _a;
        var series = this,
            points = series.points;
        var breaks,
            threshold,
            y;
        if ((_a = axis === null || axis === void 0 ? void 0 : axis.brokenAxis) === null || _a === void 0 ? void 0 : _a.hasBreaks) {
            var brokenAxis_1 = axis.brokenAxis;
            keys.forEach(function (key) {
                breaks = (brokenAxis_1 === null || brokenAxis_1 === void 0 ? void 0 : brokenAxis_1.breakArray) || [];
                threshold = axis.isXAxis ?
                    axis.min :
                    pick(series.options.threshold, axis.min);
                points.forEach(function (point) {
                    var _a;
                    y = (_a = point['stack' + key.toUpperCase()]) !== null && _a !== void 0 ? _a : point[key];
                    breaks.forEach(function (brk) {
                        if (isNumber(threshold) && isNumber(y)) {
                            var eventName = '';
                            if ((threshold < brk.from && y > brk.to) ||
                                (threshold > brk.from && y < brk.from)) {
                                eventName = 'pointBreak';
                            }
                            else if ((threshold < brk.from &&
                                y > brk.from &&
                                y < brk.to) || (threshold > brk.from &&
                                y > brk.to &&
                                y < brk.from)) {
                                eventName = 'pointInBreak';
                            }
                            if (eventName) {
                                fireEvent(axis, eventName, { point: point, brk: brk });
                            }
                        }
                    });
                });
            });
        }
    }
    /**
     * Extend getGraphPath by identifying gaps in the data so that we
     * can draw a gap in the line or area. This was moved from ordinal
     * axis module to broken axis module as of #5045.
     *
     * @internal
     * @function Highcharts.Series#gappedPath
     *
     * @return {Highcharts.SVGPathArray}
     * Gapped path
     */
    function seriesGappedPath() {
        var _a;
        var currentDataGrouping = this.currentDataGrouping,
            groupingSize = currentDataGrouping === null || currentDataGrouping === void 0 ? void 0 : currentDataGrouping.gapSize,
            points = this.points.slice(),
            yAxis = this.yAxis;
        var gapSize = this.options.gapSize,
            i = points.length - 1,
            stack;
        /**
         * Defines when to display a gap in the graph, together with the
         * [gapUnit](plotOptions.series.gapUnit) option.
         *
         * In case when `dataGrouping` is enabled, points can be grouped
         * into a larger time span. This can make the grouped points to
         * have a greater distance than the absolute value of `gapSize`
         * property, which will result in disappearing graph completely.
         * To prevent this situation the mentioned distance between
         * grouped points is used instead of previously defined
         * `gapSize`.
         *
         * In practice, this option is most often used to visualize gaps
         * in time series. In a stock chart, intraday data is available
         * for daytime hours, while gaps will appear in nights and
         * weekends.
         *
         * @see [gapUnit](plotOptions.series.gapUnit)
         * @see [xAxis.breaks](#xAxis.breaks)
         *
         * @sample {highstock} stock/plotoptions/series-gapsize/
         * Setting the gap size to 2 introduces gaps for weekends in
         * daily datasets.
         *
         * @type      {number}
         * @default   0
         * @product   highcharts highstock
         * @requires  modules/broken-axis
         * @apioption plotOptions.series.gapSize
         */
        /**
         * Together with [gapSize](plotOptions.series.gapSize), this
         * option defines where to draw gaps in the graph.
         *
         * When the `gapUnit` is `"relative"` (default), a gap size of 5
         * means that if the distance between two points is greater than
         * 5 times that of the two closest points, the graph will be
         * broken.
         *
         * When the `gapUnit` is `"value"`, the gap is based on absolute
         * axis values, which on a datetime axis is milliseconds. This
         * also applies to the navigator series that inherits gap
         * options from the base series.
         *
         * @see [gapSize](plotOptions.series.gapSize)
         *
         * @type       {string}
         * @default    relative
         * @since      5.0.13
         * @product    highcharts highstock
         * @validvalue ["relative", "value"]
         * @requires   modules/broken-axis
         * @apioption  plotOptions.series.gapUnit
         */
        if (gapSize && i > 0) { // #5008
            // Gap unit is relative
            if (this.options.gapUnit !== 'value') {
                gapSize *= this.basePointRange;
            }
            // Setting a new gapSize in case dataGrouping is enabled
            // (#7686)
            if (groupingSize &&
                groupingSize > gapSize &&
                // Except when DG is forced (e.g. from other series)
                // and has lower granularity than actual points (#11351)
                groupingSize >= this.basePointRange) {
                gapSize = groupingSize;
            }
            // Extension for ordinal breaks
            var current = void 0,
                next = void 0;
            while (i--) {
                // Reassign next if it is not visible
                if (!(next && next.visible !== false)) {
                    next = points[i + 1];
                }
                current = points[i];
                // Skip iteration if one of the points is not visible
                if (next.visible === false || current.visible === false) {
                    continue;
                }
                if (next.x - current.x > gapSize) {
                    var xRange = (current.x + next.x) / 2;
                    points.splice(// Insert after this one
                    i + 1, 0, {
                        isNull: true,
                        x: xRange
                    });
                    // For stacked chart generate empty stack items, #6546
                    if (yAxis.stacking && this.options.stacking) {
                        stack = yAxis.stacking.stacks[this.stackKey][xRange] = new (highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default())(yAxis, yAxis.options.stackLabels, false, xRange, (_a = this.stack) !== null && _a !== void 0 ? _a : '');
                        stack.total = 0;
                    }
                }
                // Assign current to next for the upcoming iteration
                next = current;
            }
        }
        // Call base method
        return this.getGraphPath(points);
    }
    /* *
     *
     *  Class
     *
     * */
    /**
     * Provides support for broken axes.
     * @internal
     * @class
     */
    var Additions = /** @class */ (function () {
            /* *
             *
             *  Constructors
             *
             * */
            /** @internal */
            function Additions(axis) {
                this.axis = axis;
        }
        /* *
         *
         *  Static Functions
         *
         * */
        /** @internal */
        Additions.isInBreak = function (brk, val) {
            var repeat = brk.repeat || Infinity,
                from = brk.from,
                length = brk.to - brk.from,
                test = (val >= from ?
                    (val - from) % repeat :
                    repeat - ((from - val) % repeat));
            var ret;
            if (!brk.inclusive) {
                ret = test < length && test !== 0;
            }
            else {
                ret = test <= length;
            }
            return ret;
        };
        /** @internal */
        Additions.lin2Val = function (val) {
            var axis = this,
                threshold = axis.min || 0,
                brokenAxis = axis.brokenAxis,
                breakArray = brokenAxis === null || brokenAxis === void 0 ? void 0 : brokenAxis.breakArray;
            if (!(breakArray === null || breakArray === void 0 ? void 0 : breakArray.length) || !isNumber(val)) {
                return val;
            }
            var nval = val;
            // Axis min is the anchor point. Above it, break gaps impact the
            // result differently than below.
            if (val > threshold) {
                for (var _i = 0, breakArray_1 = breakArray; _i < breakArray_1.length; _i++) {
                    var brk = breakArray_1[_i];
                    if (brk.from > nval) {
                        // Skip all breaks after the nval.
                        break;
                    }
                    else if (brk.to <= nval && brk.to > threshold) {
                        nval += brk.len;
                    }
                    else if (Additions.isInBreak(brk, nval)) {
                        nval += brk.len;
                    }
                }
            }
            else if (val < threshold) {
                for (var _a = 0, breakArray_2 = breakArray; _a < breakArray_2.length; _a++) {
                    var brk = breakArray_2[_a];
                    if (brk.from > threshold) {
                        // Skip all breaks above the threshold.
                        break;
                    }
                    else if (brk.from >= nval && brk.from < threshold) {
                        nval -= brk.len;
                    }
                    else if (Additions.isInBreak(brk, nval)) {
                        nval -= brk.len;
                    }
                }
            }
            return nval;
        };
        /** @internal */
        Additions.val2Lin = function (val) {
            var axis = this,
                threshold = axis.min || 0,
                brokenAxis = axis.brokenAxis,
                breakArray = brokenAxis === null || brokenAxis === void 0 ? void 0 : brokenAxis.breakArray;
            if (!(breakArray === null || breakArray === void 0 ? void 0 : breakArray.length) || !isNumber(val)) {
                return val;
            }
            var nval = val;
            // Axis min is the anchor point. Above it, break gaps impact the
            // result differently than below.
            if (val > threshold) {
                for (var _i = 0, breakArray_3 = breakArray; _i < breakArray_3.length; _i++) {
                    var brk = breakArray_3[_i];
                    if (brk.to <= val && brk.to > threshold) {
                        nval -= brk.len;
                    }
                    else if (brk.from > val) {
                        // Skip all breaks after the val.
                        break;
                    }
                    else if (Additions.isInBreak(brk, val)) {
                        nval -= (val - brk.from);
                        break;
                    }
                }
            }
            else if (val < threshold) {
                for (var _a = 0, breakArray_4 = breakArray; _a < breakArray_4.length; _a++) {
                    var brk = breakArray_4[_a];
                    if (brk.from >= val && brk.from < threshold) {
                        nval += brk.len;
                    }
                    else if (brk.from > threshold) {
                        // Skip all breaks before the threshold.
                        break;
                    }
                    else if (Additions.isInBreak(brk, val)) {
                        nval += (brk.to - val);
                        break;
                    }
                }
            }
            return nval;
        };
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Returns the first break found where the x is larger then break.from
         * and smaller then break.to.
         *
         * @param {number} x
         * The number which should be within a break.
         *
         * @param {Array<Highcharts.XAxisBreaksOptions>} breaks
         * The array of breaks to search within.
         *
         * @return {Highcharts.XAxisBreaksOptions|undefined}
         * Returns the first break found that matches, returns false if no break
         * is found.
         */
        Additions.prototype.findBreakAt = function (x, breaks) {
            return find(breaks, function (b) {
                return b.from < x && x < b.to;
            });
        };
        /** @internal */
        Additions.prototype.isInAnyBreak = function (val, testKeep) {
            var brokenAxis = this,
                axis = brokenAxis.axis,
                breaks = axis.options.breaks || [];
            var i = breaks.length,
                inbrk,
                keep,
                ret;
            if (i && isNumber(val)) {
                while (i--) {
                    if (Additions.isInBreak(breaks[i], val)) {
                        inbrk = true;
                        if (!keep) {
                            keep = pick(breaks[i].showPoints, !axis.isXAxis);
                        }
                    }
                }
                if (inbrk && testKeep) {
                    ret = inbrk && !keep;
                }
                else {
                    ret = inbrk;
                }
            }
            return ret;
        };
        /**
         * Dynamically set or unset breaks in an axis. This function in lighter
         * than using Axis.update, and it also preserves animation.
         *
         * @internal
         * @function Highcharts.Axis#setBreaks
         *
         * @param {Array<Highcharts.XAxisBreaksOptions>} [breaks]
         * The breaks to add. When `undefined` it removes existing breaks.
         *
         * @param {boolean} [redraw=true]
         * Whether to redraw the chart immediately.
         */
        Additions.prototype.setBreaks = function (breaks, redraw) {
            var _a;
            var brokenAxis = this,
                axis = brokenAxis.axis,
                time = axis.chart.time,
                hasBreaks = isArray(breaks) &&
                    !!Object.keys((breaks === null || breaks === void 0 ? void 0 : breaks[0]) || {}).length;
            axis.isDirty = ((_a = brokenAxis.hasBreaks) !== null && _a !== void 0 ? _a : false) !== hasBreaks;
            brokenAxis.hasBreaks = hasBreaks;
            // Compile string dates
            breaks === null || breaks === void 0 ? void 0 : breaks.forEach(function (brk) {
                brk.from = time.parse(brk.from) || 0;
                brk.to = time.parse(brk.to) || 0;
            });
            if (breaks !== axis.options.breaks) {
                axis.options.breaks = axis.userOptions.breaks = breaks;
            }
            axis.forceRedraw = true; // Force recalculation in setScale
            // Recalculate series related to the axis.
            axis.series.forEach(function (series) {
                series.isDirty = true;
            });
            if (!hasBreaks && axis.val2lin === Additions.val2Lin) {
                // Revert to prototype functions
                delete axis.val2lin;
                delete axis.lin2val;
            }
            if (hasBreaks) {
                axis.userOptions.ordinal = false;
                axis.lin2val = Additions.lin2Val;
                axis.val2lin = Additions.val2Lin;
                axis.setExtremes = function (newMin, newMax, redraw, animation, eventArguments) {
                    var _a;
                    // If trying to set extremes inside a break, extend min to
                    // after, and max to before the break ( #3857 )
                    // but not for gantt (#13898);
                    if (brokenAxis.hasBreaks && !((_a = axis.treeGrid) === null || _a === void 0 ? void 0 : _a.tree)) {
                        var breaks_1 = (this.brokenAxis.breakArray || []);
                        var axisBreak = void 0;
                        while ((axisBreak = brokenAxis.findBreakAt(newMin, breaks_1))) {
                            newMin = axisBreak.to;
                        }
                        while ((axisBreak = brokenAxis.findBreakAt(newMax, breaks_1))) {
                            newMax = axisBreak.from;
                        }
                        // If both min and max is within the same break.
                        if (newMax < newMin) {
                            newMax = newMin;
                        }
                    }
                    axis.constructor.prototype.setExtremes.call(this, newMin, newMax, redraw, animation, eventArguments);
                };
                axis.setAxisTranslation = function () {
                    var _a,
                        _b,
                        _c,
                        _d,
                        _e,
                        _f,
                        _g,
                        _h;
                    axis.constructor.prototype.setAxisTranslation.call(this);
                    brokenAxis.unitLength = void 0;
                    if (brokenAxis.hasBreaks) {
                        var breaks_2 = axis.options.breaks || [],
                            breakArrayTemp_1 = [],
                            breakArray_5 = [],
                            pointRangePadding = (_a = axis.pointRangePadding) !== null && _a !== void 0 ? _a : 0;
                        var length_1 = 0,
                            inBrk_1,
                            repeat_1,
                            min_1 = (_b = axis.userMin) !== null && _b !== void 0 ? _b : axis.min,
                            max_1 = (_c = axis.userMax) !== null && _c !== void 0 ? _c : axis.max,
                            start_1,
                            i_1;
                        // Extend range to include visible breaks outside of
                        // series data.
                        var dataMin_1 = isNumber(min_1) ?
                                Math.min((_d = axis.dataMin) !== null && _d !== void 0 ? _d : min_1,
                            min_1) :
                                ((_e = axis.dataMin) !== null && _e !== void 0 ? _e : min_1),
                            dataMax_1 = isNumber(max_1) ?
                                Math.max((_f = axis.dataMax) !== null && _f !== void 0 ? _f : max_1,
                            max_1) :
                                ((_g = axis.dataMax) !== null && _g !== void 0 ? _g : max_1);
                        // Min & max check (#4247) but not for gantt (#13898)
                        if (!((_h = axis.treeGrid) === null || _h === void 0 ? void 0 : _h.tree)) {
                            breaks_2.forEach(function (brk) {
                                repeat_1 = brk.repeat || Infinity;
                                if (isNumber(min_1) && isNumber(max_1)) {
                                    if (Additions.isInBreak(brk, min_1)) {
                                        min_1 += ((brk.to % repeat_1) -
                                            (min_1 % repeat_1));
                                    }
                                    if (Additions.isInBreak(brk, max_1)) {
                                        max_1 -= ((max_1 % repeat_1) -
                                            (brk.from % repeat_1));
                                    }
                                }
                            });
                        }
                        // Construct an array holding all breaks in the axis
                        // for the current data range.
                        if (isNumber(dataMin_1) && isNumber(dataMax_1)) {
                            breaks_2.forEach(function (brk) {
                                start_1 = brk.from;
                                repeat_1 = brk.repeat || Infinity;
                                while (start_1 - repeat_1 > dataMin_1) {
                                    start_1 -= repeat_1;
                                }
                                while (start_1 < dataMin_1) {
                                    start_1 += repeat_1;
                                }
                                for (i_1 = start_1; i_1 < dataMax_1; i_1 += repeat_1) {
                                    breakArrayTemp_1.push({
                                        value: i_1,
                                        move: 'in'
                                    });
                                    breakArrayTemp_1.push({
                                        value: i_1 + brk.to - brk.from,
                                        move: 'out',
                                        size: brk.breakSize
                                    });
                                }
                            });
                        }
                        breakArrayTemp_1.sort(function (a, b) {
                            return ((a.value === b.value) ?
                                ((a.move === 'in' ? 0 : 1) -
                                    (b.move === 'in' ? 0 : 1)) :
                                a.value - b.value);
                        });
                        // Simplify the breaks
                        inBrk_1 = 0;
                        start_1 = dataMin_1;
                        breakArrayTemp_1.forEach(function (brk) {
                            inBrk_1 += (brk.move === 'in' ? 1 : -1);
                            if (inBrk_1 === 1 && brk.move === 'in') {
                                start_1 = brk.value;
                            }
                            if (inBrk_1 === 0 && isNumber(start_1)) {
                                breakArray_5.push({
                                    from: start_1,
                                    to: brk.value,
                                    len: brk.value - start_1 - (brk.size || 0)
                                });
                                if (isNumber(min_1) && isNumber(max_1) &&
                                    start_1 < max_1 && brk.value > min_1) {
                                    // Sum break gaps in the visible range
                                    length_1 += (brk.value -
                                        start_1 -
                                        (brk.size || 0));
                                }
                            }
                        });
                        brokenAxis.breakArray = breakArray_5;
                        // Used with staticScale, and below the actual axis
                        // length, when breaks are subtracted.
                        if (isNumber(min_1) &&
                            isNumber(max_1) &&
                            isNumber(axis.min)) {
                            brokenAxis.unitLength = max_1 - min_1 - length_1 +
                                pointRangePadding;
                            fireEvent(axis, 'afterBreaks');
                            if (axis.staticScale) {
                                axis.transA = axis.staticScale;
                            }
                            else if (brokenAxis.unitLength) {
                                axis.transA *=
                                    (max_1 - axis.min + pointRangePadding) /
                                        brokenAxis.unitLength;
                            }
                            if (pointRangePadding) {
                                axis.minPixelPadding =
                                    axis.transA * (axis.minPointOffset || 0);
                            }
                            axis.min = min_1;
                            axis.max = max_1;
                        }
                    }
                };
            }
            if (pick(redraw, true)) {
                axis.chart.redraw();
            }
        };
        return Additions;
    }());
    BrokenAxis.Additions = Additions;
})(BrokenAxis || (BrokenAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var Axis_BrokenAxis = (BrokenAxis);

;// ./code/es5/es-modules/masters/modules/broken-axis.src.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/broken-axis
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */



var G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.BrokenAxis = G.BrokenAxis || Axis_BrokenAxis;
G.BrokenAxis.compose(G.Axis, G.Series);
/* harmony default export */ var broken_axis_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es5/es-modules/Extensions/DataGrouping/ApproximationRegistry.js
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
 *  Constants
 *
 * */
/**
 * Define the available approximation types. The data grouping
 * approximations takes an array or numbers as the first parameter. In case
 * of ohlc, four arrays are sent in as four parameters. Each array consists
 * only of numbers. In case null values belong to the group, the property
 * .hasNulls will be set to true on the array.
 *
 * @product highstock
 *
 * @internal
 */
var ApproximationRegistry = {
// Approximations added programmatically
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ var DataGrouping_ApproximationRegistry = (ApproximationRegistry);

;// ./code/es5/es-modules/Extensions/DataGrouping/ApproximationDefaults.js
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
 *  Functions
 *
 * */
function average(arr) {
    var len = arr.length;
    var ret = sum(arr);
    // If we have a number, return it divided by the length. If not,
    // return null or undefined based on what the sum method finds.
    if (isNumber(ret) && len) {
        ret = correctFloat(ret / len);
    }
    return ret;
}
/**
 * The same as average, but for series with multiple values, like area ranges.
 */
function averages() {
    var ret = [];
    [].forEach.call(arguments, function (arr) {
        ret.push(average(arr));
    });
    // Return undefined when first elem. is undefined and let
    // sum method handle null (#7377)
    return typeof ret[0] === 'undefined' ? void 0 : ret;
}
function ApproximationDefaults_close(arr) {
    return arr.length ?
        arr[arr.length - 1] :
        (arr.hasNulls ? null : void 0);
}
function high(arr) {
    return arr.length ?
        arrayMax(arr) :
        (arr.hasNulls ? null : void 0);
}
/**
 * HLC, OHLC and range are special cases where a multidimensional array is input
 * and an array is output.
 */
function hlc(high, low, close) {
    high = DataGrouping_ApproximationRegistry.high(high);
    low = DataGrouping_ApproximationRegistry.low(low);
    close = DataGrouping_ApproximationRegistry.close(close);
    if (isNumber(high) ||
        isNumber(low) ||
        isNumber(close)) {
        return [high, low, close];
    }
}
function low(arr) {
    return arr.length ?
        arrayMin(arr) :
        (arr.hasNulls ? null : void 0);
}
function ohlc(open, high, low, close) {
    open = DataGrouping_ApproximationRegistry.open(open);
    high = DataGrouping_ApproximationRegistry.high(high);
    low = DataGrouping_ApproximationRegistry.low(low);
    close = DataGrouping_ApproximationRegistry.close(close);
    if (isNumber(open) ||
        isNumber(high) ||
        isNumber(low) ||
        isNumber(close)) {
        return [open, high, low, close];
    }
}
function ApproximationDefaults_open(arr) {
    return arr.length ? arr[0] : (arr.hasNulls ? null : void 0);
}
function range(low, high) {
    low = DataGrouping_ApproximationRegistry.low(low);
    high = DataGrouping_ApproximationRegistry.high(high);
    if (isNumber(low) || isNumber(high)) {
        return [low, high];
    }
    if (low === null && high === null) {
        return null;
    }
    // Else, return is undefined
}
function sum(arr) {
    var len = arr.length,
        ret;
    // 1. it consists of nulls exclusive
    if (!len && arr.hasNulls) {
        ret = null;
        // 2. it has a length and real values
    }
    else if (len) {
        ret = 0;
        while (len--) {
            ret += arr[len];
        }
    }
    // 3. it has zero length, so just return undefined
    // => doNothing()
    return ret;
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var ApproximationDefaults = {
    average: average,
    averages: averages,
    close: ApproximationDefaults_close,
    high: high,
    hlc: hlc,
    low: low,
    ohlc: ohlc,
    open: ApproximationDefaults_open,
    range: range,
    sum: sum
};
extend(DataGrouping_ApproximationRegistry, ApproximationDefaults);
/** @internal */
/* harmony default export */ var DataGrouping_ApproximationDefaults = (ApproximationDefaults);

;// ./code/es5/es-modules/Extensions/DataGrouping/DataGroupingDefaults.js
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
 *  Constants
 *
 * */
/**
 * Common options
 * @internal
 */
var common = {
    /// enabled: null, // (true for stock charts, false for basic),
    // forced: undefined,
    groupPixelWidth: 2,
    // The first one is the point or start value, the second is the start
    // value if we're dealing with range, the third one is the end value if
    // dealing with a range
    dateTimeLabelFormats: {
        millisecond: [
            '%[AebHMSL]',
            '%[AebHMSL]',
            '-%[HMSL]'
        ],
        second: [
            '%[AebHMS]',
            '%[AebHMS]',
            '-%[HMS]'
        ],
        minute: [
            '%[AebHM]',
            '%[AebHM]',
            '-%[HM]'
        ],
        hour: [
            '%[AebHM]',
            '%[AebHM]',
            '-%[HM]'
        ],
        day: [
            '%[AebY]',
            '%[Aeb]',
            '-%[AebY]'
        ],
        week: [
            '%v %[AebY]',
            '%[Aeb]',
            '-%[AebY]'
        ],
        month: [
            '%[BY]',
            '%[B]',
            '-%[BY]'
        ],
        year: [
            '%Y',
            '%Y',
            '-%Y'
        ]
    }
    /// smoothed = false, // enable this for navigator series only
};
/**
 * Extends common options
 * @internal
 */
var seriesSpecific = {
    line: {},
    spline: {},
    area: {},
    areaspline: {},
    arearange: {},
    column: {
        groupPixelWidth: 10
    },
    columnrange: {
        groupPixelWidth: 10
    },
    candlestick: {
        groupPixelWidth: 10
    },
    ohlc: {
        groupPixelWidth: 5
    },
    hlc: {
        groupPixelWidth: 5
        // Move to HeikinAshiSeries.ts after refactoring data grouping.
    },
    heikinashi: {
        groupPixelWidth: 10
    }
};
/**
 * Units are defined in a separate array to allow complete overriding in
 * case of a user option.
 * @internal
 */
var units = [
    [
        'millisecond', // Unit name
        [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // Allowed multiples
    ], [
        'second',
        [1, 2, 5, 10, 15, 30]
    ], [
        'minute',
        [1, 2, 5, 10, 15, 30]
    ], [
        'hour',
        [1, 2, 3, 4, 6, 8, 12]
    ], [
        'day',
        [1]
    ], [
        'week',
        [1]
    ], [
        'month',
        [1, 3, 6]
    ], [
        'year',
        null
    ]
];
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var DataGroupingDefaults = {
    common: common,
    seriesSpecific: seriesSpecific,
    units: units
};
/** @internal */
/* harmony default export */ var DataGrouping_DataGroupingDefaults = (DataGroupingDefaults);

;// ./code/es5/es-modules/Extensions/DataGrouping/DataGroupingAxisComposition.js
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
 *  Variables
 *
 * */
var AxisConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Check the groupPixelWidth and apply the grouping if needed.
 * Fired only after processing the data.
 *
 * @product highstock
 *
 * @function Highcharts.Axis#applyGrouping
 */
function applyGrouping(e) {
    var axis = this,
        series = axis.series;
    // Reset the groupPixelWidth for all series, #17141.
    series.forEach(function (series) {
        series.groupPixelWidth = void 0; // #2110
    });
    series.forEach(function (series) {
        series.groupPixelWidth = (axis.getGroupPixelWidth &&
            axis.getGroupPixelWidth());
        if (series.groupPixelWidth) {
            series.hasProcessed = true; // #2692
        }
        // Fire independently on series.groupPixelWidth to always set a proper
        // dataGrouping state, (#16238)
        series.applyGrouping(!!e.hasExtremesChanged);
    });
}
function DataGroupingAxisComposition_compose(AxisClass) {
    AxisConstructor = AxisClass;
    var axisProto = AxisClass.prototype;
    if (!axisProto.applyGrouping) {
        addEvent(AxisClass, 'afterSetScale', onAfterSetScale);
        // When all series are processed, calculate the group pixel width and
        // then if this value is different than zero apply groupings.
        addEvent(AxisClass, 'postProcessData', applyGrouping);
        extend(axisProto, {
            applyGrouping: applyGrouping,
            getGroupPixelWidth: getGroupPixelWidth,
            setDataGrouping: setDataGrouping
        });
    }
}
/**
 * Get the data grouping pixel width based on the greatest defined individual
 * width of the axis' series, and if whether one of the axes need grouping.
 * @internal
 */
function getGroupPixelWidth() {
    var series = this.series;
    var i = series.length,
        groupPixelWidth = 0,
        doGrouping = false,
        dataLength,
        dgOptions;
    // If one of the series needs grouping, apply it to all (#1634)
    while (i--) {
        dgOptions = series[i].options.dataGrouping;
        if (dgOptions) { // #2692
            // If multiple series are compared on the same x axis, give them the
            // same group pixel width (#334)
            groupPixelWidth = Math.max(groupPixelWidth, 
            // Fallback to commonOptions (#9693)
            pick(dgOptions.groupPixelWidth, DataGrouping_DataGroupingDefaults.common.groupPixelWidth));
            dataLength = (series[i].dataTable.getModified() ||
                series[i].dataTable).rowCount;
            // Execute grouping if the amount of points is greater than the
            // limit defined in groupPixelWidth
            if (series[i].groupPixelWidth ||
                (dataLength >
                    (this.chart.plotSizeX / groupPixelWidth)) ||
                (dataLength && dgOptions.forced)) {
                doGrouping = true;
            }
        }
    }
    return doGrouping ? groupPixelWidth : 0;
}
/**
 * When resetting the scale reset the hasProcessed flag to avoid taking
 * previous data grouping of neighbor series into account when determining
 * group pixel width (#2692).
 * @internal
 */
function onAfterSetScale() {
    this.series.forEach(function (series) {
        series.hasProcessed = false;
    });
}
/**
 * Highcharts Stock only. Force data grouping on all the axis' series.
 *
 * @product highstock
 *
 * @function Highcharts.Axis#setDataGrouping
 *
 * @param {boolean|Highcharts.DataGroupingOptionsObject} [dataGrouping]
 *        A `dataGrouping` configuration. Use `false` to disable data grouping
 *        dynamically.
 *
 * @param {boolean} [redraw=true]
 *        Whether to redraw the chart or wait for a later call to
 *        {@link Chart#redraw}.
 */
function setDataGrouping(dataGrouping, redraw) {
    var axis = this;
    var i;
    redraw = pick(redraw, true);
    if (!dataGrouping) {
        dataGrouping = {
            forced: false,
            units: null
        };
    }
    // Axis is instantiated, update all series
    if (this instanceof AxisConstructor) {
        i = this.series.length;
        while (i--) {
            this.series[i].update({
                dataGrouping: dataGrouping
            }, false);
        }
        // Axis not yet instantiated, alter series options
    }
    else {
        this.chart.options.series.forEach(function (seriesOptions) {
            // Merging dataGrouping options with already defined options #16759
            seriesOptions.dataGrouping = typeof dataGrouping === 'boolean' ?
                dataGrouping :
                merge(dataGrouping, seriesOptions.dataGrouping);
        });
    }
    // Clear ordinal slope, so we won't accidentally use the old one (#7827)
    if (axis.ordinal) {
        axis.ordinal.slope = void 0;
    }
    if (redraw) {
        this.chart.redraw();
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var DataGroupingAxisComposition = {
    compose: DataGroupingAxisComposition_compose
};
/** @internal */
/* harmony default export */ var DataGrouping_DataGroupingAxisComposition = (DataGroupingAxisComposition);

;// ./code/es5/es-modules/Core/Axis/DateTimeAxis.js
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
 *  Composition
 *
 * */
var DateTimeAxis;
(function (DateTimeAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends axis class with date and time support.
     * @internal
     */
    function compose(AxisClass) {
        if (!AxisClass.keepProps.includes('dateTime')) {
            AxisClass.keepProps.push('dateTime');
            var axisProto = AxisClass.prototype;
            axisProto.getTimeTicks = getTimeTicks;
            addEvent(AxisClass, 'afterSetType', onAfterSetType);
        }
        return AxisClass;
    }
    DateTimeAxis.compose = compose;
    /**
     * Set the tick positions to a time unit that makes sense, for example
     * on the first of each month or on every Monday. Return an array with
     * the time positions. Used in datetime axes as well as for grouping
     * data on a datetime axis.
     *
     * @internal
     * @function Highcharts.Axis#getTimeTicks
     */
    function getTimeTicks() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    }
    /** @internal */
    function onAfterSetType() {
        if (this.type !== 'datetime') {
            this.dateTime = void 0;
            return;
        }
        if (!this.dateTime) {
            this.dateTime = new Additions(this);
        }
    }
    /* *
     *
     *  Classes
     *
     * */
    /** @internal */
    var Additions = /** @class */ (function () {
            /* *
             *
             *  Constructors
             *
             * */
            function Additions(axis) {
                this.axis = axis;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Get a normalized tick interval for dates. Returns a configuration
         * object with unit range (interval), count and name. Used to prepare
         * data for `getTimeTicks`. Previously this logic was part of
         * getTimeTicks, but as `getTimeTicks` now runs of segments in stock
         * charts, the normalizing logic was extracted in order to prevent it
         * for running over again for each segment having the same interval.
         * #662, #697.
         * @internal
         */
        Additions.prototype.normalizeTimeTickInterval = function (tickInterval, unitsOption) {
            var units = (unitsOption || [[
                        // Unit name
                        'millisecond',
                        // Allowed multiples
                        [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
                    ],
                [
                        'second',
                        [1, 2, 5, 10, 15, 30]
                    ],
                [
                        'minute',
                        [1, 2, 5, 10, 15, 30]
                    ],
                [
                        'hour',
                        [1, 2, 3, 4, 6, 8, 12]
                    ],
                [
                        'day',
                        [1, 2]
                    ],
                [
                        'week',
                        [1, 2]
                    ],
                [
                        'month',
                        [1, 2, 3, 4, 6]
                    ],
                [
                        'year',
                        null
                    ]]);
            var unit = units[units.length - 1], // Default unit is years
                interval = highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.timeUnits[unit[0]],
                multiples = unit[1],
                i,
                match;
            // Loop through the units to find the one that best fits the
            // tickInterval
            for (i = 0; i < units.length; i++) {
                unit = units[i];
                interval = highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.timeUnits[unit[0]];
                multiples = unit[1];
                if (units[i + 1]) {
                    // `lessThan` is in the middle between the highest multiple
                    // and the next unit.
                    var lessThan = (interval *
                            multiples[multiples.length - 1] +
                            highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.timeUnits[units[i + 1][0]]) / 2;
                    // Break and keep the current unit
                    if (tickInterval <= lessThan) {
                        match = lessThan / tickInterval;
                        break;
                    }
                }
            }
            // Prevent 2.5 years intervals, though 25, 250 etc. are allowed
            if (interval === highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.timeUnits.year && tickInterval < 5 * interval) {
                multiples = [1, 2, 5];
            }
            // Get the count
            var count = normalizeTickInterval(tickInterval / interval, multiples, unit[0] === 'year' ? // #1913, #2360
                    Math.max(getMagnitude(tickInterval / interval), 1) :
                    1);
            return {
                unitRange: interval,
                count: count,
                unitName: unit[0],
                match: match
            };
        };
        /**
         * Get the best date format for a specific X value based on the closest
         * point range on the axis.
         *
         * @internal
         */
        Additions.prototype.getXDateFormat = function (x, dateTimeLabelFormats) {
            var axis = this.axis,
                time = axis.chart.time;
            return axis.closestPointRange ?
                time.getDateFormat(axis.closestPointRange, x, axis.options.startOfWeek, dateTimeLabelFormats) ||
                    // #2546, 2581
                    time.resolveDTLFormat(dateTimeLabelFormats.year).main :
                time.resolveDTLFormat(dateTimeLabelFormats.day).main;
        };
        return Additions;
    }());
    DateTimeAxis.Additions = Additions;
})(DateTimeAxis || (DateTimeAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Axis_DateTimeAxis = (DateTimeAxis);

;// ./code/es5/es-modules/Extensions/DataGrouping/DataGroupingSeriesComposition.js
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







var DataGroupingSeriesComposition_seriesProto = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).series.prototype;


/* *
 *
 *  Constants
 *
 * */
var baseGeneratePoints = DataGroupingSeriesComposition_seriesProto.generatePoints;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function adjustExtremes(xAxis, groupedXData) {
    // Make sure the X axis extends to show the first group (#2533)
    // But only for visible series (#5493, #6393)
    if (defined(groupedXData[0]) &&
        isNumber(xAxis.min) &&
        isNumber(xAxis.dataMin) &&
        groupedXData[0] < xAxis.min) {
        if ((!defined(xAxis.options.min) &&
            xAxis.min <= xAxis.dataMin) ||
            xAxis.min === xAxis.dataMin) {
            xAxis.min = Math.min(groupedXData[0], xAxis.min);
        }
        xAxis.dataMin = Math.min(groupedXData[0], xAxis.dataMin);
    }
    // When the last anchor set, change the extremes that
    // the last point is visible (#12455).
    if (defined(groupedXData[groupedXData.length - 1]) &&
        isNumber(xAxis.max) &&
        isNumber(xAxis.dataMax) &&
        groupedXData[groupedXData.length - 1] > xAxis.max) {
        if ((!defined(xAxis.options.max) &&
            isNumber(xAxis.dataMax) &&
            xAxis.max >= xAxis.dataMax) || xAxis.max === xAxis.dataMax) {
            xAxis.max = Math.max(groupedXData[groupedXData.length - 1], xAxis.max);
        }
        xAxis.dataMax = Math.max(groupedXData[groupedXData.length - 1], xAxis.dataMax);
    }
}
/** @internal */
function anchorPoints(series, groupedXData, xMax) {
    var options = series.options,
        dataGroupingOptions = options.dataGrouping,
        totalRange = (series.currentDataGrouping && series.currentDataGrouping.gapSize),
        xData = series.getColumn('x');
    if (!(dataGroupingOptions &&
        xData.length &&
        totalRange &&
        series.groupMap)) {
        return;
    }
    var groupedDataLastIndex = groupedXData.length - 1,
        anchor = dataGroupingOptions.anchor,
        firstAnchor = dataGroupingOptions.firstAnchor,
        lastAnchor = dataGroupingOptions.lastAnchor;
    var anchorIndexIterator = groupedXData.length - 1,
        anchorFirstIndex = 0;
    // Change the first point position, but only when it is
    // the first point in the data set not in the current zoom.
    if (firstAnchor && xData[0] >= groupedXData[0]) {
        anchorFirstIndex++;
        var groupStart = series.groupMap[0].start,
            groupLength = series.groupMap[0].length;
        var firstGroupEnd = void 0;
        if (isNumber(groupStart) && isNumber(groupLength)) {
            firstGroupEnd = groupStart + (groupLength - 1);
        }
        groupedXData[0] = {
            start: groupedXData[0],
            middle: groupedXData[0] + 0.5 * totalRange,
            end: groupedXData[0] + totalRange,
            firstPoint: xData[0],
            lastPoint: firstGroupEnd && xData[firstGroupEnd]
        }[firstAnchor];
    }
    // Change the last point position but only when it is
    // the last point in the data set not in the current zoom,
    // or if it is not the 1st point simultaneously.
    if (groupedDataLastIndex > 0 &&
        lastAnchor &&
        totalRange &&
        groupedXData[groupedDataLastIndex] >= xMax - totalRange) {
        anchorIndexIterator--;
        var lastGroupStart = series.groupMap[series.groupMap.length - 1].start;
        groupedXData[groupedDataLastIndex] = {
            start: groupedXData[groupedDataLastIndex],
            middle: groupedXData[groupedDataLastIndex] + 0.5 * totalRange,
            end: groupedXData[groupedDataLastIndex] + totalRange,
            firstPoint: lastGroupStart && xData[lastGroupStart],
            lastPoint: xData[xData.length - 1]
        }[lastAnchor];
    }
    if (anchor && anchor !== 'start') {
        var shiftInterval = (totalRange *
                { middle: 0.5,
            end: 1 }[anchor]);
        // Anchor the rest of the points apart from the ones, that were
        // previously moved.
        while (anchorIndexIterator >= anchorFirstIndex) {
            groupedXData[anchorIndexIterator] += shiftInterval;
            anchorIndexIterator--;
        }
    }
}
/**
 * For the processed data, calculate the grouped data if needed.
 *
 * @internal
 * @function Highcharts.Series#applyGrouping
 */
function DataGroupingSeriesComposition_applyGrouping(hasExtremesChanged) {
    var series = this,
        chart = series.chart,
        options = series.options,
        dataGroupingOptions = options.dataGrouping,
        groupingEnabled = series.allowDG !== false && dataGroupingOptions &&
            pick(dataGroupingOptions.enabled,
        chart.options.isStock),
        reserveSpace = series.reserveSpace(),
        lastDataGrouping = this.currentDataGrouping;
    var currentDataGrouping,
        croppedData,
        revertRequireSorting = false;
    // Data needs to be sorted for dataGrouping
    if (groupingEnabled && !series.requireSorting) {
        series.requireSorting = revertRequireSorting = true;
    }
    // Skip if skipDataGrouping method returns false or if grouping is disabled
    // (in that order).
    var skip = skipDataGrouping(series,
        hasExtremesChanged) === false || !groupingEnabled;
    // Revert original requireSorting value if changed
    if (revertRequireSorting) {
        series.requireSorting = false;
    }
    if (skip) {
        return;
    }
    series.destroyGroupedData();
    var table = dataGroupingOptions.groupAll ?
            series.dataTable :
            series.dataTable.getModified() || series.dataTable,
        processedXData = series.getColumn('x', !dataGroupingOptions.groupAll),
        xData = processedXData,
        plotSizeX = chart.plotSizeX,
        xAxis = series.xAxis,
        extremes = xAxis.getExtremes(),
        ordinal = xAxis.options.ordinal,
        groupPixelWidth = series.groupPixelWidth;
    var i,
        hasGroupedData;
    // Execute grouping if the amount of points is greater than the limit
    // defined in groupPixelWidth
    if (groupPixelWidth &&
        xData &&
        table.rowCount &&
        plotSizeX &&
        isNumber(extremes.min)) {
        hasGroupedData = true;
        // Force recreation of point instances in series.translate, #5699
        series.isDirty = true;
        series.points = null; // #6709
        var xMin = extremes.min,
            xMax = extremes.max,
            groupIntervalFactor = (ordinal &&
                xAxis.ordinal &&
                xAxis.ordinal.getGroupIntervalFactor(xMin,
            xMax,
            series)) || 1,
            interval = (groupPixelWidth * (xMax - xMin) / plotSizeX) *
                groupIntervalFactor,
            groupPositions = xAxis.getTimeTicks(Axis_DateTimeAxis.Additions.prototype.normalizeTimeTickInterval(interval,
            dataGroupingOptions.units ||
                DataGrouping_DataGroupingDefaults.units), 
            // Processed data may extend beyond axis (#4907)
            Math.min(xMin,
            xData[0]),
            Math.max(xMax,
            xData[xData.length - 1]),
            xAxis.options.startOfWeek,
            processedXData,
            series.closestPointRange),
            groupedData = DataGroupingSeriesComposition_seriesProto.groupData.apply(series,
            [
                table,
                groupPositions,
                dataGroupingOptions.approximation
            ]);
        var modified = groupedData.modified,
            groupedXData = modified.getColumn('x',
            true),
            gapSize = 0;
        // The smoothed option is deprecated, instead, there is a fallback
        // to the new anchoring mechanism. #12455.
        if ((dataGroupingOptions === null || dataGroupingOptions === void 0 ? void 0 : dataGroupingOptions.smoothed) &&
            modified.rowCount) {
            dataGroupingOptions.firstAnchor = 'firstPoint';
            dataGroupingOptions.anchor = 'middle';
            dataGroupingOptions.lastAnchor = 'lastPoint';
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(32, false, chart, {
                'dataGrouping.smoothed': 'use dataGrouping.anchor'
            });
        }
        // Record what data grouping values were used
        for (i = 1; i < groupPositions.length; i++) {
            // The grouped gapSize needs to be the largest distance between
            // the group to capture varying group sizes like months or DST
            // crossing (#10000). Also check that the gap is not at the
            // start of a segment.
            if (!groupPositions.info.segmentStarts ||
                groupPositions.info.segmentStarts.indexOf(i) === -1) {
                gapSize = Math.max(groupPositions[i] - groupPositions[i - 1], gapSize);
            }
        }
        currentDataGrouping = groupPositions.info;
        currentDataGrouping.gapSize = gapSize;
        series.closestPointRange = groupPositions.info.totalRange;
        series.groupMap = groupedData.groupMap;
        series.currentDataGrouping = currentDataGrouping;
        anchorPoints(series, groupedXData || [], xMax);
        if (reserveSpace && groupedXData) {
            adjustExtremes(xAxis, groupedXData);
        }
        // We calculated all group positions but we should render only the ones
        // within the visible range
        if (dataGroupingOptions.groupAll) {
            // Keep the reference to all grouped points for further calculation,
            // used in Heikin-Ashi and hollow candlestick series.
            series.allGroupedTable = modified;
            croppedData = series.cropData(modified, xAxis.min || 0, xAxis.max || 0);
            modified = croppedData.modified;
            groupedXData = modified.getColumn('x');
            series.cropStart = croppedData.start; // #15005
        }
        // Set the modified table
        series.dataTable.modified = modified;
    }
    else {
        series.groupMap = void 0;
        series.currentDataGrouping = void 0;
    }
    series.hasGroupedData = hasGroupedData;
    series.preventGraphAnimation =
        (lastDataGrouping && lastDataGrouping.totalRange) !==
            (currentDataGrouping && currentDataGrouping.totalRange);
}
/** @internal */
function DataGroupingSeriesComposition_compose(SeriesClass) {
    var seriesProto = SeriesClass.prototype;
    if (!seriesProto.applyGrouping) {
        var PointClass = SeriesClass.prototype.pointClass;
        // Override point prototype to throw a warning when trying to update
        // grouped points.
        addEvent(PointClass, 'update', function () {
            if (this.dataGroup) {
                (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(24, false, this.series.chart);
                return false;
            }
        });
        addEvent(SeriesClass, 'afterSetOptions', onAfterSetOptions);
        addEvent(SeriesClass, 'destroy', destroyGroupedData);
        extend(seriesProto, {
            applyGrouping: DataGroupingSeriesComposition_applyGrouping,
            destroyGroupedData: destroyGroupedData,
            generatePoints: generatePoints,
            getDGApproximation: getDGApproximation,
            groupData: groupData
        });
    }
}
/**
 * Destroy the grouped data points. #622, #740
 * @internal
 */
function destroyGroupedData() {
    // Clear previous groups
    if (this.groupedData) {
        this.groupedData.forEach(function (point, i) {
            if (point) {
                this.groupedData[i] = point.destroy ?
                    point.destroy() : null;
            }
        }, this);
        // Clears all:
        // - `this.groupedData`
        // - `this.points`
        // - `preserve` object in series.update()
        this.groupedData.length = 0;
        delete this.allGroupedTable;
    }
}
/**
 * Override the generatePoints method by adding a reference to grouped data
 * @internal
 */
function generatePoints() {
    baseGeneratePoints.apply(this);
    // Record grouped data in order to let it be destroyed the next time
    // processData runs
    this.destroyGroupedData(); // #622
    this.groupedData = this.hasGroupedData ? this.points : null;
}
/**
 * Set default approximations to the prototypes if present. Properties are
 * inherited down. Can be overridden for individual series types.
 * @internal
 */
function getDGApproximation() {
    if (this.is('arearange')) {
        return 'range';
    }
    if (this.is('ohlc')) {
        return 'ohlc';
    }
    if (this.is('hlc')) {
        return 'hlc';
    }
    if (
    // #18974, default approximation for cumulative
    // should be `sum` when `dataGrouping` is enabled
    this.is('column') ||
        this.options.cumulative) {
        return 'sum';
    }
    return 'average';
}
/**
 * Highcharts Stock only. Takes parallel arrays of x and y data and groups the
 * data into intervals defined by groupPositions, a collection of starting x
 * values for each group.
 *
 * @product highstock
 *
 * @function Highcharts.Series#groupData
 * @param {Highcharts.DataTable} table
 *        The series data table.
 * @param {Array<number>} groupPositions
 *        Group positions.
 * @param {string|Function} [approximation]
 *        Approximation to use.
 * @return {Highcharts.DataGroupingResultObject}
 *         Mapped groups.
 */
function groupData(table, groupPositions, approximation) {
    var _a,
        _b;
    var xData = (table === this.dataTable) ?
            // If the table is the series dataTable, get the cached x data
            // to avoid undefined x values from the data table.
            this.getColumn('x') :
            table.getColumn('x', true), yData = table.getColumn('y', true), series = this, topTable = series.dataTable, cropStart = series.cropStart || 0, data = series.data, dataOptions = (_a = series.options) === null || _a === void 0 ? void 0 : _a.data, groupedXData = [], modified = new Data_DataTableCore(), groupMap = [], dataLength = table.rowCount, 
        // When grouping the fake extended axis for panning, we don't need to
        // consider y
        handleYData = !!yData, values = [], pointArrayMap = series.pointArrayMap, pointArrayMapLength = pointArrayMap && pointArrayMap.length, extendedPointArrayMap = ['x'].concat(pointArrayMap || ['y']), 
        // Data columns to be applied to the modified data table at the end
        valueColumns = (pointArrayMap || ['y']).map(function () { return []; }), groupAll = (_b = this.options.dataGrouping) === null || _b === void 0 ? void 0 : _b.groupAll;
    var pointX,
        pointY,
        groupedY,
        pos = 0,
        start = 0;
    var approximationFn = (typeof approximation === 'function' ?
            approximation :
            approximation && DataGrouping_ApproximationRegistry[approximation] ?
                DataGrouping_ApproximationRegistry[approximation] :
                DataGrouping_ApproximationRegistry[(series.getDGApproximation && series.getDGApproximation() ||
                    'average')]);
    // Calculate values array size from pointArrayMap length
    if (pointArrayMapLength) {
        var len = pointArrayMap.length;
        while (len--) {
            values.push([]);
        }
    }
    else {
        values.push([]);
    }
    var valuesLen = pointArrayMapLength || 1;
    for (var i = 0; i <= dataLength; i++) {
        // Start with the first point within the X axis range (#2696)
        if (xData[i] < groupPositions[0]) {
            continue; // With next point
        }
        // When a new group is entered, summarize and initialize
        // the previous group
        while ((typeof groupPositions[pos + 1] !== 'undefined' &&
            xData[i] >= groupPositions[pos + 1]) ||
            i === dataLength) { // Get the last group
            // get group x and y
            pointX = groupPositions[pos];
            series.dataGroupInfo = {
                start: groupAll ? start : (series.cropStart + start),
                length: values[0].length,
                groupStart: pointX
            };
            groupedY = approximationFn.apply(series, values);
            // By default, let options of the first grouped point be passed over
            // to the grouped point. This allows preserving properties like
            // `name` and `color` or custom properties. Implementers can
            // override this from the approximation function, where they can
            // write custom options to `this.dataGroupInfo.options`.
            if (series.pointClass &&
                !defined(series.dataGroupInfo.options) &&
                dataOptions) {
                // Convert numbers and arrays into objects
                series.dataGroupInfo.options = merge(series.pointClass.prototype
                    .optionsToObject.call({ series: series }, topTable.getRowObject(cropStart + start)));
                // Make sure the raw data (x, y, open, high etc) is not copied
                // over and overwriting approximated data.
                extendedPointArrayMap.forEach(function (key) {
                    delete series.dataGroupInfo.options[key];
                });
            }
            // Push the grouped data
            if (typeof groupedY !== 'undefined') {
                groupedXData.push(pointX);
                // Push the grouped values to the parallel columns
                var groupedValuesArr = splat(groupedY);
                for (var j = 0; j < groupedValuesArr.length; j++) {
                    valueColumns[j].push(groupedValuesArr[j]);
                }
                groupMap.push(series.dataGroupInfo);
            }
            // Reset the aggregate arrays
            start = i;
            for (var j = 0; j < valuesLen; j++) {
                values[j].length = 0; // Faster than values[j] = []
                values[j].hasNulls = false;
            }
            // Advance on the group positions
            pos += 1;
            // Don't loop beyond the last group
            if (i === dataLength) {
                break;
            }
        }
        // Break out
        if (i === dataLength) {
            break;
        }
        // For each raw data point, push it to an array that contains all values
        // for this specific group
        if (pointArrayMap) {
            var index = groupAll ? i : series.cropStart + i,
                point = (data && data[index]) ||
                    series.pointClass.prototype.applyOptions.apply({
                        series: series
                    },
                [
                        topTable.getRowObject(index)
                    ]);
            var val = void 0;
            for (var j = 0; j < pointArrayMapLength; j++) {
                val = point[pointArrayMap[j]];
                if (isNumber(val)) {
                    values[j].push(val);
                }
                else if (val === null) {
                    values[j].hasNulls = true;
                }
            }
        }
        else {
            pointY = handleYData ? yData[i] : null;
            if (isNumber(pointY)) {
                values[0].push(pointY);
            }
            else if (pointY === null) {
                values[0].hasNulls = true;
            }
        }
    }
    var columns = {
            x: groupedXData
        };
    (pointArrayMap || ['y']).forEach(function (key, i) {
        columns[key] = valueColumns[i];
    });
    modified.setColumns(columns);
    return {
        groupMap: groupMap,
        modified: modified
    };
}
/**
 * Handle default options for data grouping. This must be set at runtime because
 * some series types are defined after this.
 * @internal
 */
function onAfterSetOptions(e) {
    var options = e.options,
        type = this.type,
        plotOptions = this.chart.options.plotOptions, 
        // External series, for example technical indicators should also inherit
        // commonOptions which are not available outside this module
        baseOptions = (this.useCommonDataGrouping &&
            DataGrouping_DataGroupingDefaults.common),
        seriesSpecific = DataGrouping_DataGroupingDefaults.seriesSpecific;
    var defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions.plotOptions[type].dataGrouping;
    if (plotOptions && (seriesSpecific[type] || baseOptions)) { // #1284
        var rangeSelector = this.chart.rangeSelector;
        if (!defaultOptions) {
            defaultOptions = merge(DataGrouping_DataGroupingDefaults.common, seriesSpecific[type]);
        }
        options.dataGrouping = merge(baseOptions, defaultOptions, plotOptions.series && plotOptions.series.dataGrouping, // #1228
        // Set by the StockChart constructor:
        plotOptions[type].dataGrouping, this.userOptions.dataGrouping, !options.isInternal &&
            rangeSelector &&
            isNumber(rangeSelector.selected) &&
            rangeSelector.buttonOptions[rangeSelector.selected].dataGrouping);
    }
}
/** @internal */
function skipDataGrouping(series, force) {
    return !(series.isCartesian &&
        !series.isDirty &&
        !series.xAxis.isDirty &&
        !series.yAxis.isDirty &&
        !force);
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var DataGroupingSeriesComposition = {
    compose: DataGroupingSeriesComposition_compose,
    groupData: groupData
};
/** @internal */
/* harmony default export */ var DataGrouping_DataGroupingSeriesComposition = (DataGroupingSeriesComposition);

;// ./code/es5/es-modules/Extensions/DataGrouping/DataGrouping.js
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





var DataGrouping_format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format;

var DataGrouping_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;

/* *
 *
 *  Functions
 *
 * */
function DataGrouping_compose(AxisClass, SeriesClass, TooltipClass) {
    DataGrouping_DataGroupingAxisComposition.compose(AxisClass);
    DataGrouping_DataGroupingSeriesComposition.compose(SeriesClass);
    if (TooltipClass &&
        pushUnique(DataGrouping_composed, 'DataGrouping')) {
        addEvent(TooltipClass, 'headerFormatter', onTooltipHeaderFormatter);
    }
}
/**
 * Extend the original method, make the tooltip's header reflect the grouped
 * range.
 * @internal
 */
function onTooltipHeaderFormatter(e) {
    var _a;
    var chart = this.chart,
        time = chart.time,
        point = e.point,
        series = point.series,
        options = series.options,
        tooltipOptions = series.tooltipOptions,
        dataGroupingOptions = options.dataGrouping,
        xAxis = series.xAxis;
    var xDateFormat = tooltipOptions.xDateFormat || '', xDateFormatEnd, currentDataGrouping, dateTimeLabelFormats, labelFormats, formattedKey, formatString = tooltipOptions[e.isFooter ? 'footerFormat' : 'headerFormat'];
    // Apply only to grouped series
    if (xAxis &&
        xAxis.options.type === 'datetime' &&
        dataGroupingOptions &&
        isNumber(point.key)) {
        // Set variables
        currentDataGrouping = series.currentDataGrouping;
        dateTimeLabelFormats = dataGroupingOptions.dateTimeLabelFormats ||
            // Fallback to commonOptions (#9693)
            DataGrouping_DataGroupingDefaults.common.dateTimeLabelFormats;
        // If we have grouped data, use the grouping information to get the
        // right format
        if (currentDataGrouping) {
            labelFormats = dateTimeLabelFormats[currentDataGrouping.unitName];
            if (currentDataGrouping.count === 1) {
                xDateFormat = labelFormats[0];
            }
            else {
                xDateFormat = labelFormats[1];
                xDateFormatEnd = labelFormats[2];
            }
            // If not grouped, and we don't have set the xDateFormat option, get the
            // best fit, so if the least distance between points is one minute, show
            // it, but if the least distance is one day, skip hours and minutes etc.
        }
        else if (!xDateFormat && dateTimeLabelFormats && xAxis.dateTime) {
            xDateFormat = xAxis.dateTime.getXDateFormat(point.x, tooltipOptions.dateTimeLabelFormats);
        }
        var groupStart = pick((_a = series.groupMap) === null || _a === void 0 ? void 0 : _a[point.index].groupStart,
            point.key),
            groupEnd = groupStart + ((currentDataGrouping === null || currentDataGrouping === void 0 ? void 0 : currentDataGrouping.totalRange) || 0) - 1;
        formattedKey = time.dateFormat(xDateFormat, groupStart);
        if (xDateFormatEnd) {
            formattedKey += time.dateFormat(xDateFormatEnd, groupEnd);
        }
        // Replace default header style with class name
        if (series.chart.styledMode) {
            formatString = this.styledModeFormat(formatString);
        }
        // Return the replaced format
        e.text = DataGrouping_format(formatString, {
            point: extend(point, { key: formattedKey }),
            series: series
        }, chart);
        e.preventDefault();
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var DataGroupingComposition = {
    compose: DataGrouping_compose,
    groupData: DataGrouping_DataGroupingSeriesComposition.groupData
};
/** @internal */
/* harmony default export */ var DataGrouping = (DataGroupingComposition);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"average"|"averages"|"close"|"high"|"hlc"|"low"|"ohlc"|"open"|"range"|"sum"} Highcharts.DataGroupingApproximationValue
 */
/**
 * The position of the point inside the group.
 *
 * @typedef    {"start"|"middle"|"end"} Highcharts.DataGroupingAnchor
 */
/**
 * The position of the first or last point in the series inside the group.
 *
 * @typedef    {"start"|"middle"|"end"|"firstPoint"|"lastPoint"} Highcharts.DataGroupingAnchorExtremes
 */
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingInfoObject
 */ /**
* @name Highcharts.DataGroupingInfoObject#length
* @type {number}
*/ /**
* @name Highcharts.DataGroupingInfoObject#options
* @type {Highcharts.SeriesOptionsType|undefined}
*/ /**
* @name Highcharts.DataGroupingInfoObject#start
* @type {number}
*/
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingResultObject
 */ /**
* @name Highcharts.DataGroupingResultObject#modified
* @type {Highcharts.DataTable}
*/ /**
* @name Highcharts.DataGroupingResultObject#groupMap
* @type {Array<DataGroupingInfoObject>}
*/
/**
 * Highcharts Stock only. If a point object is created by data
 * grouping, it doesn't reflect actual points in the raw
 * data. In this case, the `dataGroup` property holds
 * information that points back to the raw data.
 *
 * - `dataGroup.start` is the index of the first raw data
 *   point in the group.
 *
 * - `dataGroup.length` is the amount of points in the
 *   group.
 *
 * @sample stock/members/point-datagroup
 *         Click to inspect raw data points
 *
 * @product highstock
 *
 * @name Highcharts.Point#dataGroup
 * @type {Highcharts.DataGroupingInfoObject|undefined}
 */
(''); // Detach doclets above
/* *
 *
 *  API Options
 *
 * */
/**
 * Data grouping is the concept of sampling the data values into larger
 * blocks in order to ease readability and increase performance of the
 * JavaScript charts. Highcharts Stock by default applies data grouping when
 * the points become closer than a certain pixel value, determined by
 * the `groupPixelWidth` option.
 *
 * If data grouping is applied, the grouping information of grouped
 * points can be read from the [Point.dataGroup](
 * /class-reference/Highcharts.Point#dataGroup). If point options other than
 * the data itself are set, for example `name` or `color` or custom properties,
 * the grouping logic doesn't know how to group it. In this case the options of
 * the first point instance are copied over to the group point. This can be
 * altered through a custom `approximation` callback function.
 *
 * @declare   Highcharts.DataGroupingOptionsObject
 * @product   highstock
 * @requires  modules/stock
 * @apioption plotOptions.series.dataGrouping
 */
/**
 * Specifies how the points should be located on the X axis inside the group.
 * Points that are extremes can be set separately. Available options:
 *
 * - `start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * - `middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * - `end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-anchor
 *         Changing the point x-coordinate inside the group.
 *
 * @see [dataGrouping.firstAnchor](#plotOptions.series.dataGrouping.firstAnchor)
 * @see [dataGrouping.lastAnchor](#plotOptions.series.dataGrouping.lastAnchor)
 *
 * @type       {Highcharts.DataGroupingAnchor}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.anchor
 */
/**
 * The method of approximation inside a group. When for example 30 days
 * are grouped into one month, this determines what value should represent
 * the group. Possible values are "average", "averages", "open", "high",
 * "low", "close" and "sum". For OHLC and candlestick series the approximation
 * is "ohlc" by default, which finds the open, high, low and close values
 * within all the grouped data. For ranges, the approximation is "range",
 * which finds the low and high values. For multi-dimensional data,
 * like ranges and OHLC, "averages" will compute the average for each
 * dimension.
 *
 * Custom aggregate methods can be added by assigning a callback function
 * as the approximation. This function takes a numeric array as the
 * argument and should return a single numeric value or `null`. Note
 * that the numeric array will never contain null values, only true
 * numbers. Instead, if null values are present in the raw data, the
 * numeric array will have an `.hasNulls` property set to `true`. For
 * single-value data sets the data is available in the first argument
 * of the callback function. For OHLC data sets, all the open values
 * are in the first argument, all high values in the second etc.
 *
 * Since v4.2.7, grouping meta data is available in the approximation
 * callback from `this.dataGroupInfo`. It can be used to extract information
 * from the raw data.
 *
 * Defaults to `average` for line-type series, `sum` for columns, `range`
 * for range series, `hlc` for HLC, and `ohlc` for OHLC and candlestick.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-approximation
 *         Approximation callback with custom data
 * @sample {highstock} stock/plotoptions/series-datagrouping-simple-approximation
 *         Simple approximation demo
 *
 * @type       {Highcharts.DataGroupingApproximationValue|Function}
 * @apioption  plotOptions.series.dataGrouping.approximation
 */
/**
 * Datetime formats for the header of the tooltip in a stock chart.
 * The format can vary within a chart depending on the currently selected
 * time range and the current data grouping.
 *
 * The default formats are:
 * ```js
 * {
 *     millisecond: [
 *         '%A, %e %b, %H:%M:%S.%L', '%A, %e %b, %H:%M:%S.%L', '-%H:%M:%S.%L'
 *     ],
 *     second: ['%A, %e %b, %H:%M:%S', '%A, %e %b, %H:%M:%S', '-%H:%M:%S'],
 *     minute: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
 *     hour: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
 *     day: ['%A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
 *     week: ['%v %A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
 *     month: ['%B %Y', '%B', '-%B %Y'],
 *     year: ['%Y', '%Y', '-%Y']
 * }
 * ```
 *
 * For each of these array definitions, the first item is the format
 * used when the active time span is one unit. For instance, if the
 * current data applies to one week, the first item of the week array
 * is used. The second and third items are used when the active time
 * span is more than two units. For instance, if the current data applies
 * to two weeks, the second and third item of the week array are used,
 *  and applied to the start and end date of the time span.
 *
 * @type      {Object}
 * @apioption plotOptions.series.dataGrouping.dateTimeLabelFormats
 */
/**
 * Enable or disable data grouping.
 *
 * @type      {boolean}
 * @default   true
 * @apioption plotOptions.series.dataGrouping.enabled
 */
/**
 * Specifies how the first grouped point is positioned on the xAxis.
 * If firstAnchor and/or lastAnchor are defined, then those options take
 * precedence over anchor for the first and/or last grouped points.
 * Available options:
 *
 * -`start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * -`middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * -`end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * -`firstPoint` the first point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:13)
 *
 * -`lastPoint` the last point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-first-anchor
 *         Applying first and last anchor.
 *
 * @see [dataGrouping.anchor](#plotOptions.series.dataGrouping.anchor)
 *
 * @type       {Highcharts.DataGroupingAnchorExtremes}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.firstAnchor
 */
/**
 * When data grouping is forced, it runs no matter how small the intervals
 * are. This can be handy for example when the sum should be calculated
 * for values appearing at random times within each hour.
 *
 * @type      {boolean}
 * @default   false
 * @apioption plotOptions.series.dataGrouping.forced
 */
/**
 * By default only points within the visible range are grouped. Enabling this
 * option will force data grouping to calculate all grouped points for a given
 * dataset. That option prevents for example a column series from calculating
 * a grouped point partially. The effect is similar to
 * [Series.getExtremesFromAll](#plotOptions.series.getExtremesFromAll) but does
 * not affect yAxis extremes.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-groupall/
 *         Two series with the same data but different groupAll setting
 *
 * @type      {boolean}
 * @default   false
 * @since     6.1.0
 * @apioption plotOptions.series.dataGrouping.groupAll
 */
/**
 * The approximate pixel width of each group. If for example a series
 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
 * is performed. If however the series contains so many points that
 * the spacing is less than the groupPixelWidth, Highcharts will try
 * to group it into appropriate groups so that each is more or less
 * two pixels wide. If multiple series with different group pixel widths
 * are drawn on the same x axis, all series will take the greatest width.
 * For example, line series have 2px default group width, while column
 * series have 10px. If combined, both the line and the column will
 * have 10px by default.
 *
 * @type      {number}
 * @default   2
 * @apioption plotOptions.series.dataGrouping.groupPixelWidth
 */
/**
 * Specifies how the last grouped point is positioned on the xAxis.
 * If firstAnchor and/or lastAnchor are defined, then those options take
 * precedence over anchor for the first and/or last grouped points.
 * Available options:
 *
 * -`start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * -`middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * -`end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * -`firstPoint` the first point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:13)
 *
 * -`lastPoint` the last point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-first-anchor
 *         Applying first and last anchor.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-last-anchor
 *         Applying the last anchor in the chart with live data.
 *
 * @see [dataGrouping.anchor](#plotOptions.series.dataGrouping.anchor)
 *
 * @type       {Highcharts.DataGroupingAnchorExtremes}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.lastAnchor
 */
/**
 * Normally, a group is indexed by the start of that group, so for example
 * when 30 daily values are grouped into one month, that month's x value
 * will be the 1st of the month. This apparently shifts the data to
 * the left. When the smoothed option is true, this is compensated for.
 * The data is shifted to the middle of the group, and min and max
 * values are preserved. Internally, this is used in the Navigator series.
 *
 * @type      {boolean}
 * @default   false
 * @deprecated
 * @apioption plotOptions.series.dataGrouping.smoothed
 */
/**
 * An array determining what time intervals the data is allowed to be
 * grouped to. Each array item is an array where the first value is
 * the time unit and the second value another array of allowed multiples.
 *
 * Defaults to:
 * ```js
 * units: [[
 *     'millisecond', // unit name
 *     [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
 * ], [
 *     'second',
 *     [1, 2, 5, 10, 15, 30]
 * ], [
 *     'minute',
 *     [1, 2, 5, 10, 15, 30]
 * ], [
 *     'hour',
 *     [1, 2, 3, 4, 6, 8, 12]
 * ], [
 *     'day',
 *     [1]
 * ], [
 *     'week',
 *     [1]
 * ], [
 *     'month',
 *     [1, 3, 6]
 * ], [
 *     'year',
 *     null
 * ]]
 * ```
 *
 * @type      {Array<Array<string,(Array<number>|null)>>}
 * @apioption plotOptions.series.dataGrouping.units
 */
/**
 * The approximate pixel width of each group. If for example a series
 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
 * is performed. If however the series contains so many points that
 * the spacing is less than the groupPixelWidth, Highcharts will try
 * to group it into appropriate groups so that each is more or less
 * two pixels wide. Defaults to `10`.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-grouppixelwidth/
 *         Two series with the same data density but different groupPixelWidth
 *
 * @type      {number}
 * @default   10
 * @apioption plotOptions.column.dataGrouping.groupPixelWidth
 */
''; // Required by JSDoc parsing

;// ./code/es5/es-modules/masters/modules/datagrouping.src.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/datagrouping
 * @requires highcharts
 *
 * Data grouping module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */





var datagrouping_src_G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
datagrouping_src_G.dataGrouping = datagrouping_src_G.dataGrouping || {};
datagrouping_src_G.dataGrouping.approximationDefaults = (datagrouping_src_G.dataGrouping.approximationDefaults ||
    DataGrouping_ApproximationDefaults);
datagrouping_src_G.dataGrouping.approximations = (datagrouping_src_G.dataGrouping.approximations ||
    DataGrouping_ApproximationRegistry);
DataGrouping.compose(datagrouping_src_G.Axis, datagrouping_src_G.Series, datagrouping_src_G.Tooltip);
/* harmony default export */ var datagrouping_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es5/es-modules/Extensions/Annotations/NavigationBindingsUtilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


/* *
 *
 *  Constants
 *
 * */
/**
 * Define types for editable fields per annotation. There is no need to define
 * numbers, because they won't change their type to string.
 * @internal
 */
var annotationsFieldsTypes = {
    backgroundColor: 'color',
    backgroundColors: 'color',
    borderColor: 'color',
    borderRadius: 'string',
    color: 'color',
    fill: 'color',
    fontSize: 'string',
    labels: 'string',
    name: 'string',
    stroke: 'color',
    title: 'string'
};
/* *
 *
 *  Functions
 *
 * */
/**
 * Returns the first xAxis or yAxis that was clicked with its value.
 *
 * @internal
 *
 * @param {Array<Highcharts.PointerAxisCoordinateObject>} coords
 *        All the chart's x or y axes with a current pointer's axis value.
 *
 * @return {Highcharts.PointerAxisCoordinateObject}
 *         Object with a first found axis and its value that pointer
 *         is currently pointing.
 */
function getAssignedAxis(coords) {
    return coords.filter(function (coord) {
        var extremes = coord.axis.getExtremes(),
            axisMin = extremes.min,
            axisMax = extremes.max, 
            // Correct axis edges when axis has series
            // with pointRange (like column)
            minPointOffset = pick(coord.axis.minPointOffset, 0);
        return isNumber(axisMin) && isNumber(axisMax) &&
            coord.value >= (axisMin - minPointOffset) &&
            coord.value <= (axisMax + minPointOffset) &&
            // Don't count navigator axis
            !coord.axis.options.isInternal;
    })[0]; // If the axes overlap, return the first axis that was found.
}
/**
 * Get field type according to value
 *
 * @internal
 *
 * @return {'checkbox'|'color'|'number'|'text'}
 * Field type (one of: text, number, checkbox, color)
 */
function getFieldType(key, value) {
    var predefinedType = annotationsFieldsTypes[key];
    var fieldType = typeof value;
    if (defined(predefinedType)) {
        fieldType = predefinedType;
    }
    return {
        'string': 'text',
        'number': 'number',
        'boolean': 'checkbox',
        'color': 'color'
    }[fieldType];
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var NavigationBindingUtilities = {
    annotationsFieldsTypes: annotationsFieldsTypes,
    getAssignedAxis: getAssignedAxis,
    getFieldType: getFieldType
};
/** @internal */
/* harmony default export */ var NavigationBindingsUtilities = (NavigationBindingUtilities);

;// ./code/es5/es-modules/Extensions/MouseWheelZoom/MouseWheelZoom.js
/* *
 *
 *  (c) 2023-2026 Highsoft AS
 *  Author: Torstein Hønsi, Askel Eirik Johansson
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



var MouseWheelZoom_getAssignedAxis = NavigationBindingsUtilities.getAssignedAxis;
/* *
 *
 *  Constants
 *
 * */
var composedClasses = [], MouseWheelZoom_defaultOptions = {
    enabled: true,
    sensitivity: 1.1,
    showResetButton: false
};
var wheelTimer;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
var optionsToObject = function (options) {
    if (!isObject(options)) {
        options = {
            enabled: options !== null && options !== void 0 ? options : true
        };
    }
    return merge(MouseWheelZoom_defaultOptions, options);
};
/** @internal */
var zoomBy = function (chart, howMuch, xAxis, yAxis, mouseX, mouseY, options) {
    var type = pick(options.type,
        chart.zooming.type, '');
    var axes = [];
    if (type === 'x') {
        axes = xAxis;
    }
    else if (type === 'y') {
        axes = yAxis;
    }
    else if (type === 'xy') {
        axes = chart.axes;
    }
    var hasZoomed = chart.transform({
            axes: axes,
            // Create imaginary reference and target rectangles around the mouse
            // point that scales up or down with `howMuch`;
        to: {
            x: mouseX - 5,
            y: mouseY - 5,
            // Must use 10 to get passed the limit for too small reference.
            // Below this, the transform will default to a pan.
            width: 10,
            height: 10
        },
        from: {
            x: mouseX - 5 * howMuch,
            y: mouseY - 5 * howMuch,
            width: 10 * howMuch,
            height: 10 * howMuch
        },
        trigger: 'mousewheel',
        allowResetButton: options.showResetButton
    });
    if (hasZoomed) {
        if (defined(wheelTimer)) {
            internalClearTimeout(wheelTimer);
        }
        // Some time after the last mousewheel event, run drop. In case any of
        // the affected axes had `startOnTick` or `endOnTick`, they will be
        // re-adjusted now.
        wheelTimer = setTimeout(function () {
            var _a;
            (_a = chart.pointer) === null || _a === void 0 ? void 0 : _a.drop();
        }, 400);
    }
    return hasZoomed;
};
/** @internal */
function onAfterGetContainer() {
    var _this = this;
    var wheelZoomOptions = optionsToObject(this.zooming.mouseWheel);
    if (wheelZoomOptions.enabled) {
        addEvent(this.container, 'wheel', function (e) {
            var _a,
                _b;
            e = ((_a = _this.pointer) === null || _a === void 0 ? void 0 : _a.normalize(e)) || e;
            var pointer = _this.pointer,
                allowZoom = pointer && !pointer.inClass(e.target, 'highcharts-no-mousewheel');
            // Firefox uses e.detail, WebKit and IE uses deltaX, deltaY, deltaZ.
            if (_this.isInsidePlot(e.chartX - _this.plotLeft, e.chartY - _this.plotTop) && allowZoom) {
                var wheelSensitivity = wheelZoomOptions.sensitivity || 1.1,
                    delta = e.detail || ((e.deltaY || 0) / 120),
                    xAxisCoords = MouseWheelZoom_getAssignedAxis(pointer.getCoordinates(e).xAxis),
                    yAxisCoords = MouseWheelZoom_getAssignedAxis(pointer.getCoordinates(e).yAxis);
                var hasZoomed = zoomBy(_this,
                    Math.pow(wheelSensitivity,
                    delta),
                    xAxisCoords ? [xAxisCoords.axis] : _this.xAxis,
                    yAxisCoords ? [yAxisCoords.axis] : _this.yAxis,
                    e.chartX,
                    e.chartY,
                    wheelZoomOptions);
                // Prevent page scroll
                if (hasZoomed) {
                    (_b = e.preventDefault) === null || _b === void 0 ? void 0 : _b.call(e);
                }
            }
        });
    }
}
/** @internal */
function MouseWheelZoom_compose(ChartClass) {
    if (composedClasses.indexOf(ChartClass) === -1) {
        composedClasses.push(ChartClass);
        addEvent(ChartClass, 'afterGetContainer', onAfterGetContainer);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var MouseWheelZoomComposition = {
    compose: MouseWheelZoom_compose
};
/** @internal */
/* harmony default export */ var MouseWheelZoom = (MouseWheelZoomComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * The mouse wheel zoom is a feature included in Highcharts Stock, but is also
 * available for Highcharts Core as a module. Zooming with the mouse wheel is
 * enabled by default in Highcharts Stock. In Highcharts Core it is enabled if
 * [chart.zooming.type](chart.zooming.type) is set. It can be disabled by
 * setting this option to `false`.
 *
 * @type      {boolean|object}
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/enabled
 *            Enable or disable
 * @sample    {highstock} stock/mouse-wheel-zoom/enabled
 *            Enable or disable
 * @apioption chart.zooming.mouseWheel
 */
/**
 * Zooming with the mouse wheel can be disabled by setting this option to
 * `false`.
 *
 * @type      {boolean}
 * @default   true
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @apioption chart.zooming.mouseWheel.enabled
 */
/**
 * Adjust the sensitivity of the zoom. Sensitivity of mouse wheel or trackpad
 * scrolling. `1` is no sensitivity, while with `2`, one mouse wheel delta will
 * zoom in `50%`.
 *
 * @type      {number}
 * @default   1.1
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/sensitivity
 *            Change mouse wheel zoom sensitivity
 * @sample    {highstock} stock/mouse-wheel-zoom/sensitivity
 *            Change mouse wheel zoom sensitivity
 * @apioption chart.zooming.mouseWheel.sensitivity
 */
/**
 * Decides in what dimensions the user can zoom scrolling the wheel. Can be one
 * of `x`, `y` or `xy`. In Highcharts Core, if not specified here, it will
 * inherit the type from [chart.zooming.type](chart.zooming.type). In Highcharts
 * Stock, it defaults to `x`.
 *
 * Note that particularly with mouse wheel in the y direction, the zoom is
 * affected by the default [yAxis.startOnTick](#yAxis.startOnTick) and
 * [endOnTick]((#yAxis.endOnTick)) settings. In order to respect these settings,
 * the zoom level will adjust after the user has stopped zooming. To prevent
 * this, consider setting `startOnTick` and `endOnTick` to `false`.
 *
 * @type      {string}
 * @default   {highcharts} undefined
 * @default   {highstock} x
 * @validvalue ["x", "y", "xy"]
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @apioption chart.zooming.mouseWheel.type
 */
/**
 * Whether to enable the reset zoom button when zooming with the mouse wheel.
 *
 * @type      {boolean}
 * @default   false
 * @since {next}
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/reset-zoom-button
 *            Enable reset zoom button for mouse wheel zooming
 * @sample    {highstock} stock/mouse-wheel-zoom/reset-zoom-button
 *            Enable reset zoom button for mouse wheel zooming
 * @apioption chart.zooming.mouseWheel.showResetButton
 */
(''); // Keeps doclets above in JS file

;// ./code/es5/es-modules/masters/modules/mouse-wheel-zoom.src.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/mouse-wheel-zoom
 * @requires highcharts
 *
 * Mousewheel zoom module
 *
 * (c) 2023-2026 Highsoft AS
 * Author: Askel Eirik Johansson
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */



var mouse_wheel_zoom_src_G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
mouse_wheel_zoom_src_G.MouseWheelZoom = mouse_wheel_zoom_src_G.MouseWheelZoom || MouseWheelZoom;
mouse_wheel_zoom_src_G.MouseWheelZoom.compose(mouse_wheel_zoom_src_G.Chart);
/* harmony default export */ var mouse_wheel_zoom_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es5/es-modules/masters/modules/stock.src.js

















var stock_src_G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Classes
stock_src_G.Navigator = stock_src_G.Navigator || Navigator_Navigator;
stock_src_G.OrdinalAxis = stock_src_G.OrdinalAxis || Axis_OrdinalAxis;
stock_src_G.RangeSelector = stock_src_G.RangeSelector || RangeSelector_RangeSelector;
stock_src_G.Scrollbar = stock_src_G.Scrollbar || Scrollbar_Scrollbar;
// Functions
stock_src_G.stockChart = Chart_StockChart.stockChart;
stock_src_G.StockChart = stock_src_G.StockChart || stock_src_G.stockChart;
extend(stock_src_G.StockChart, Chart_StockChart);
// Compositions
Series_DataModifyComposition.compose(stock_src_G.Series, stock_src_G.Axis, stock_src_G.Point);
HLC_HLCSeries.compose(stock_src_G.Series, stock_src_G.SVGRenderer);
Flags_FlagsSeries.compose(stock_src_G.Renderer);
OHLC_OHLCSeries.compose(stock_src_G.Series);
stock_src_G.Navigator.compose(stock_src_G.Chart, stock_src_G.Axis, stock_src_G.Series);
stock_src_G.OrdinalAxis.compose(stock_src_G.Axis, stock_src_G.Series, stock_src_G.Chart);
stock_src_G.RangeSelector.compose(stock_src_G.Axis, stock_src_G.Chart);
stock_src_G.Scrollbar.compose(stock_src_G.Axis);
stock_src_G.StockChart.compose(stock_src_G.Chart, stock_src_G.Axis, stock_src_G.Series, stock_src_G.SVGRenderer);
/* harmony default export */ var stock_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});