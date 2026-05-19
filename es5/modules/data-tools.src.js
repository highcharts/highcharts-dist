// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/data-tools
 * @requires highcharts
 *
 * Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/data-tools", ["highcharts/highcharts"], function (amd1) {return factory(amd1);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/data-tools"] = factory(root["_Highcharts"]);
	else
		root["Highcharts"] = factory(root["Highcharts"]);
})(typeof window === 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__944__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 944:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

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
  "default": function() { return /* binding */ data_tools_src; }
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
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

;// ./code/es5/es-modules/Data/Modifiers/DataModifier.js
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
 *  - Dawid Draguła
 *
 * */


/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class to provide an interface for modifying a table.
 */
var DataModifier = /** @class */ (function () {
    function DataModifier() {
    }
    /**
     * Adds a modifier class to the registry. The modifier class has to provide
     * the `DataModifier.options` property and the `DataModifier.modifyTable`
     * method to modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the modifier class.
     *
     * @param {DataModifierType} DataModifierClass
     * Modifier class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a modifier registered with this key.
     */
    DataModifier.registerType = function (key, DataModifierClass) {
        return (!!key &&
            !DataModifier.types[key] &&
            !!(DataModifier.types[key] = DataModifierClass));
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Runs a timed execution of the modifier on the given datatable.
     * Can be configured to run multiple times.
     *
     * @param {DataTable} dataTable
     * The datatable to execute
     *
     * @param {BenchmarkOptions} options
     * Options. Currently supports `iterations` for number of iterations.
     *
     * @return {Array<number>}
     * An array of times in milliseconds
     *
     */
    DataModifier.prototype.benchmark = function (dataTable, options) {
        var results = [];
        var modifier = this;
        var execute = function () {
                modifier.modifyTable(dataTable);
            modifier.emit({
                type: 'afterBenchmarkIteration'
            });
        };
        var defaultOptions = {
                iterations: 1
            };
        var iterations = merge(defaultOptions,
            options).iterations;
        modifier.on('afterBenchmarkIteration', function () {
            if (results.length === iterations) {
                modifier.emit({
                    type: 'afterBenchmark',
                    results: results
                });
                return;
            }
            // Run again
            execute();
        });
        var times = {
                startTime: 0,
                endTime: 0
            };
        // Add timers
        modifier.on('modify', function () {
            times.startTime = window.performance.now();
        });
        modifier.on('afterModify', function () {
            times.endTime = window.performance.now();
            results.push(times.endTime - times.startTime);
        });
        // Initial run
        execute();
        return results;
    };
    /**
     * Emits an event on the modifier to all registered callbacks of this event.
     *
     * @param {DataModifierEvent} [e]
     * Event object containing additional event information.
     */
    DataModifier.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
     * Modifies the given table and sets its `modified` property as a reference
     * to the modified table. If `modified` property does not exist on the
     * original table, it's always created.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    DataModifier.prototype.modify = function (table, eventDetail) {
        var modifier = this;
        return new Promise(function (resolve, reject) {
            if (!table.modified) {
                table.modified = table.clone(false, eventDetail);
            }
            try {
                resolve(modifier.modifyTable(table, eventDetail));
            }
            catch (e) {
                modifier.emit({
                    type: 'error',
                    detail: eventDetail,
                    table: table
                });
                reject(e instanceof Error ? e : new Error('' + e));
            }
        });
    };
    /**
     * Registers a callback for a specific modifier event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventCallback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    DataModifier.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Registry as a record object with modifier names and their class
     * constructor.
     */
    DataModifier.types = {};
    return DataModifier;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_DataModifier = (DataModifier);

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

;// ./code/es5/es-modules/Data/DataTable.js
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
 *  - Jomar Hønsi
 *  - Dawid Draguła
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


var DataTable_splice = Data_ColumnUtils.splice, DataTable_setLength = Data_ColumnUtils.setLength;


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
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptionsObject} [options]
 * Options to initialize the new DataTable instance.
 */
var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    /* *
     *
     *  Constructor
     *
     * */
    function DataTable(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this,
            options) || this;
        _this.metadata = options.metadata;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns a clone of this table. The cloned table is completely independent
     * of the original, and any changes made to the clone will not affect
     * the original table.
     *
     * @function Highcharts.DataTable#clone
     *
     * @param {boolean} [skipColumns]
     * Whether to clone columns or not.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Clone of this data table.
     *
     * @emits #cloneTable
     * @emits #afterCloneTable
     */
    DataTable.prototype.clone = function (skipColumns, eventDetail) {
        var table = this,
            tableOptions = {};
        table.emit({ type: 'cloneTable', detail: eventDetail });
        if (!skipColumns) {
            tableOptions.columns = table.columns;
        }
        if (!table.autoId) {
            tableOptions.id = table.id;
        }
        var tableClone = new DataTable(tableOptions);
        if (!skipColumns) {
            tableClone.versionTag = table.versionTag;
            tableClone.originalRowIndexes = table.originalRowIndexes;
            tableClone.localRowIndexes = table.localRowIndexes;
        }
        tableClone.metadata = __assign({}, table.metadata);
        table.emit({
            type: 'afterCloneTable',
            detail: eventDetail,
            tableClone: tableClone
        });
        return tableClone;
    };
    /**
     * Deletes columns from the table.
     *
     * @function Highcharts.DataTable#deleteColumns
     *
     * @param {Array<string>} [columnIds]
     * Names of columns to delete. If no array is provided, all
     * columns will be deleted.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTableColumnCollection|undefined}
     * Returns the deleted columns, if found.
     *
     * @emits #deleteColumns
     * @emits #afterDeleteColumns
     */
    DataTable.prototype.deleteColumns = function (columnIds, eventDetail) {
        var table = this,
            columns = table.columns,
            deletedColumns = {},
            modifiedColumns = {},
            modifier = table.modifier,
            rowCount = table.rowCount;
        columnIds = (columnIds || Object.keys(columns));
        if (columnIds.length) {
            table.emit({
                type: 'deleteColumns',
                columnIds: columnIds,
                detail: eventDetail
            });
            for (var i = 0, iEnd = columnIds.length, column = void 0, columnId = void 0; i < iEnd; ++i) {
                columnId = columnIds[i];
                column = columns[columnId];
                if (column) {
                    deletedColumns[columnId] = column;
                    modifiedColumns[columnId] = new Array(rowCount);
                }
                delete columns[columnId];
            }
            if (!Object.keys(columns).length) {
                table.rowCount = 0;
                this.deleteRowIndexReferences();
            }
            if (modifier) {
                modifier.modifyTable(table);
            }
            table.emit({
                type: 'afterDeleteColumns',
                columns: deletedColumns,
                columnIds: columnIds,
                detail: eventDetail
            });
            return deletedColumns;
        }
    };
    /**
     * Deletes the row index references. This is useful when the original table
     * is deleted, and the references are no longer needed. This table is
     * then considered an original table or a table that has the same rows
     * order as the original table.
     */
    DataTable.prototype.deleteRowIndexReferences = function () {
        delete this.originalRowIndexes;
        delete this.localRowIndexes;
    };
    /**
     * Deletes rows in this table.
     *
     * @function Highcharts.DataTable#deleteRows
     *
     * @param {number | number[]} [rowIndex]
     * Index of the row where deletion should start, or an array of indices for
     * deleting multiple rows. If not specified, all rows will be deleted.
     *
     * @param {number} [rowCount]
     * Number of rows to delete.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Array<Highcharts.DataTableRow>}
     * Returns the deleted rows, if found.
     *
     * @emits #deleteRows
     * @emits #afterDeleteRows
     */
    DataTable.prototype.deleteRows = function (rowIndex, rowCount, eventDetail) {
        var _this = this;
        if (rowCount === void 0) { rowCount = 1; }
        var _a = this,
            columns = _a.columns,
            modifier = _a.modifier;
        var deletedRows = [];
        var indices;
        var actualRowCount;
        if (!defined(rowIndex)) {
            // No index provided - delete all rows.
            indices = [0];
            actualRowCount = this.rowCount;
        }
        else if (Array.isArray(rowIndex)) {
            // Array of indices provided - delete the specified rows.
            indices = rowIndex
                // Remove negative indices, and indices beyond the row count,
                // and remove duplicates.
                .filter(function (index, i, arr) { return (index >= 0 &&
                index < _this.rowCount &&
                arr.indexOf(index) === i); })
                // Sort indices in descending order.
                .sort(function (a, b) { return b - a; });
            actualRowCount = indices.length;
        }
        else {
            // Single index provided - delete the specified range of rows.
            indices = [rowIndex];
            actualRowCount = rowCount;
        }
        this.emit({
            type: 'deleteRows',
            detail: eventDetail,
            rowCount: actualRowCount,
            rowIndex: rowIndex !== null && rowIndex !== void 0 ? rowIndex : 0
        });
        if (actualRowCount > 0) {
            var columnIds = Object.keys(columns);
            for (var i = 0; i < columnIds.length; ++i) {
                var columnId = columnIds[i];
                var column = columns[columnId];
                var deletedCells = void 0;
                // Perform a range splice.
                if (indices.length === 1 && actualRowCount > 1) {
                    var result = DataTable_splice(column,
                        indices[0],
                        actualRowCount);
                    deletedCells = result.removed;
                    columns[columnId] = result.array;
                }
                else {
                    // Perform a index splice for each index in the array.
                    deletedCells = [];
                    for (var _i = 0, indices_1 = indices; _i < indices_1.length; _i++) {
                        var index = indices_1[_i];
                        deletedCells.push(column[index]);
                        DataTable_splice(column, index, 1);
                    }
                    // Reverse the deleted cells to maintain the correct order.
                    deletedCells.reverse();
                }
                if (!i) {
                    this.rowCount = column.length;
                }
                for (var j = 0, jEnd = deletedCells.length; j < jEnd; ++j) {
                    deletedRows[j] = deletedRows[j] || [];
                    deletedRows[j][i] = deletedCells[j];
                }
            }
        }
        if (modifier) {
            modifier.modifyTable(this);
        }
        this.emit({
            type: 'afterDeleteRows',
            detail: eventDetail,
            rowCount: actualRowCount,
            rowIndex: rowIndex !== null && rowIndex !== void 0 ? rowIndex : 0,
            rows: deletedRows
        });
        return deletedRows;
    };
    /**
     * Emits an event on this table to all registered callbacks of the given
     * event.
     * @private
     *
     * @param {Event} e
     * Event object with event information.
     */
    DataTable.prototype.emit = function (e) {
        if ([
            'afterDeleteColumns',
            'afterDeleteRows',
            'afterSetCell',
            'afterSetColumns',
            'afterSetRows'
        ].includes(e.type)) {
            this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        }
        fireEvent(this, e.type, e);
    };
    /**
     * Fetches a single cell value.
     *
     * @function Highcharts.DataTable#getCell
     *
     * @param {string} columnId
     * Column name of the cell to retrieve.
     *
     * @param {number} rowIndex
     * Row index of the cell to retrieve.
     *
     * @return {Highcharts.DataTableCellType|undefined}
     * Returns the cell value or `undefined`.
     */
    DataTable.prototype.getCell = function (columnId, rowIndex) {
        var table = this;
        var column = table.columns[columnId];
        if (column) {
            return column[rowIndex];
        }
    };
    /**
     * Fetches the given column by the canonical column name.
     * This function is a simplified wrap of {@link getColumns}.
     *
     * @function Highcharts.DataTable#getColumn
     *
     * @param {string} columnId
     * Name of the column to get.
     *
     * @param {boolean} [asReference]
     * Whether to return the column as a readonly reference.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    DataTable.prototype.getColumn = function (columnId, asReference) {
        return this.getColumns([columnId], asReference)[columnId];
    };
    /**
     * Fetches all column IDs.
     *
     * @function Highcharts.DataTable#getColumnIds
     *
     * @return {Array<string>}
     * Returns all column IDs.
     */
    DataTable.prototype.getColumnIds = function () {
        return Object.keys(this.columns);
    };
    /**
     * Retrieves all or the given columns.
     *
     * @function Highcharts.DataTable#getColumns
     *
     * @param {Array<string>} [columnIds]
     * Column names to retrieve.
     *
     * @param {boolean} [asReference]
     * Whether to return columns as a readonly reference.
     *
     * @param {boolean} [asBasicColumns]
     * Whether to transform all typed array columns to normal arrays.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    DataTable.prototype.getColumns = function (columnIds, asReference, asBasicColumns) {
        var table = this,
            tableColumns = table.columns,
            columns = {};
        columnIds = (columnIds || Object.keys(tableColumns));
        for (var i = 0, iEnd = columnIds.length, column = void 0, columnId = void 0; i < iEnd; ++i) {
            columnId = columnIds[i];
            column = tableColumns[columnId];
            if (column) {
                if (asReference) {
                    columns[columnId] = column;
                }
                else if (asBasicColumns && !Array.isArray(column)) {
                    columns[columnId] = Array.from(column);
                }
                else {
                    columns[columnId] = column.slice();
                }
            }
        }
        return columns;
    };
    /**
     * Takes the original row index and returns the local row index in the
     * modified table for which this function is called.
     *
     * @param {number} originalRowIndex
     * Original row index to get the local row index for.
     *
     * @return {number|undefined}
     * Returns the local row index or `undefined` if not found.
     */
    DataTable.prototype.getLocalRowIndex = function (originalRowIndex) {
        var localRowIndexes = this.localRowIndexes;
        if (localRowIndexes) {
            return localRowIndexes[originalRowIndex];
        }
        return originalRowIndex;
    };
    /**
     * Returns the modifier associated with this table, if any.
     *
     * @return {Highcharts.DataModifier|undefined}
     * Returns the modifier or `undefined`.
     *
     * @private
     */
    DataTable.prototype.getModifier = function () {
        return this.modifier;
    };
    /**
     * Takes the local row index and returns the index of the corresponding row
     * in the original table.
     *
     * @param {number} rowIndex
     * Local row index to get the original row index for.
     *
     * @return {number|undefined}
     * Returns the original row index or `undefined` if not found.
     */
    DataTable.prototype.getOriginalRowIndex = function (rowIndex) {
        var originalRowIndexes = this.originalRowIndexes;
        if (originalRowIndexes) {
            return originalRowIndexes[rowIndex];
        }
        return rowIndex;
    };
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRows}.
     *
     * @function Highcharts.DataTable#getRow
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnIds]
     * Column names in order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns the row values, or `undefined` if not found.
     */
    DataTable.prototype.getRow = function (rowIndex, columnIds) {
        return this.getRows(rowIndex, 1, columnIds)[0];
    };
    /**
     * Returns the number of rows in this table.
     *
     * @function Highcharts.DataTable#getRowCount
     *
     * @return {number}
     * Number of rows in this table.
     */
    DataTable.prototype.getRowCount = function () {
        // @todo Implement via property getter `.length` browsers supported
        return this.rowCount;
    };
    /**
     * Retrieves the index of the first row matching a specific cell value.
     *
     * @function Highcharts.DataTable#getRowIndexBy
     *
     * @param {string} columnId
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @param {number} [rowIndexOffset]
     * Index offset to start searching.
     *
     * @return {number|undefined}
     * Index of the first row matching the cell value.
     */
    DataTable.prototype.getRowIndexBy = function (columnId, cellValue, rowIndexOffset) {
        var table = this;
        var column = table.columns[columnId];
        if (column) {
            var rowIndex = -1;
            if (Array.isArray(column)) {
                // Normal array
                rowIndex = column.indexOf(cellValue, rowIndexOffset);
            }
            else if (isNumber(cellValue)) {
                // Typed array
                rowIndex = column.indexOf(cellValue, rowIndexOffset);
            }
            if (rowIndex !== -1) {
                return rowIndex;
            }
        }
    };
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRowObjects}.
     *
     * @function Highcharts.DataTable#getRowObject
     *
     * @param {number} rowIndex
     * Row index.
     *
     * @param {Array<string>} [columnIds]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns the row values, or `undefined` if not found.
     */
    DataTable.prototype.getRowObject = function (rowIndex, columnIds) {
        return this.getRowObjects(rowIndex, 1, columnIds)[0];
    };
    /**
     * Fetches all or a number of rows as an object.
     *
     * @function Highcharts.DataTable#getRowObjects
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnIds]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns retrieved rows.
     */
    DataTable.prototype.getRowObjects = function (rowIndex, rowCount, columnIds) {
        if (rowIndex === void 0) { rowIndex = 0; }
        if (rowCount === void 0) { rowCount = (this.rowCount - rowIndex); }
        var table = this,
            columns = table.columns,
            rows = new Array(rowCount);
        columnIds = (columnIds || Object.keys(columns));
        for (var i = rowIndex, i2 = 0, iEnd = Math.min(table.rowCount, (rowIndex + rowCount)), column = void 0, row = void 0; i < iEnd; ++i, ++i2) {
            row = rows[i2] = {};
            for (var _i = 0, columnIds_1 = columnIds; _i < columnIds_1.length; _i++) {
                var columnId = columnIds_1[_i];
                column = columns[columnId];
                row[columnId] = (column ? column[i] : void 0);
            }
        }
        return rows;
    };
    /**
     * Fetches all or a number of rows as an array.
     *
     * @function Highcharts.DataTable#getRows
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnIds]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns retrieved rows.
     */
    DataTable.prototype.getRows = function (rowIndex, rowCount, columnIds) {
        if (rowIndex === void 0) { rowIndex = 0; }
        if (rowCount === void 0) { rowCount = (this.rowCount - rowIndex); }
        var table = this,
            columns = table.columns,
            rows = new Array(rowCount);
        columnIds = (columnIds || Object.keys(columns));
        for (var i = rowIndex, i2 = 0, iEnd = Math.min(table.rowCount, (rowIndex + rowCount)), column = void 0, row = void 0; i < iEnd; ++i, ++i2) {
            row = rows[i2] = [];
            for (var _i = 0, columnIds_2 = columnIds; _i < columnIds_2.length; _i++) {
                var columnId = columnIds_2[_i];
                column = columns[columnId];
                row.push(column ? column[i] : void 0);
            }
        }
        return rows;
    };
    /**
     * Returns the unique version tag of the current state of the table.
     *
     * @function Highcharts.DataTable#getVersionTag
     *
     * @return {string}
     * Unique version tag.
     */
    DataTable.prototype.getVersionTag = function () {
        return this.versionTag;
    };
    /**
     * Determines whether all specified column names exist in the table.
     *
     * @function Highcharts.DataTable#hasColumns
     *
     * @param {Array<string>} columnIds
     * Column names to check.
     *
     * @return {boolean}
     * Returns `true` if all columns have been found, otherwise `false`.
     */
    DataTable.prototype.hasColumns = function (columnIds) {
        var table = this,
            columns = table.columns;
        for (var i = 0, iEnd = columnIds.length, columnId = void 0; i < iEnd; ++i) {
            columnId = columnIds[i];
            if (!columns[columnId]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Checks if any row in the specified column contains the given cell value.
     *
     * @function Highcharts.DataTable#hasRowWith
     *
     * @param {string} columnId
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @return {boolean}
     * True, if a row has been found, otherwise false.
     */
    DataTable.prototype.hasRowWith = function (columnId, cellValue) {
        var table = this;
        var column = table.columns[columnId];
        // Normal array
        if (Array.isArray(column)) {
            return (column.indexOf(cellValue) !== -1);
        }
        // Typed array
        if (defined(cellValue) && Number.isFinite(cellValue)) {
            return (column.indexOf(+cellValue) !== -1);
        }
        return false;
    };
    /**
     * Registers a callback function to be executed when a specific event is
     * emitted. To stop listening to the event, call the function returned by
     * this method.
     *
     * @function Highcharts.DataTable#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataTable>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    DataTable.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /**
     * Changes the ID of an existing column to a new ID, effectively renaming
     * the column.
     *
     * @function Highcharts.DataTable#changeColumnId
     *
     * @param {string} columnId
     * Id of the column to be changed.
     *
     * @param {string} newColumnId
     * New id of the column.
     *
     * @return {boolean}
     * Returns `true` if successful, `false` if the column was not found.
     */
    DataTable.prototype.changeColumnId = function (columnId, newColumnId) {
        var table = this,
            columns = table.columns;
        if (columns[columnId]) {
            if (columnId !== newColumnId) {
                columns[newColumnId] = columns[columnId];
                delete columns[columnId];
            }
            return true;
        }
        return false;
    };
    /**
     * Sets the value of a specific cell identified by column ID and row index.
     * If the column does not exist, it will be created. If the row index is
     * beyond the current row count, the table will be expanded to accommodate
     * the new cell.
     *
     * @function Highcharts.DataTable#setCell
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {number|undefined} rowIndex
     * Row index to set.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to set.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setCell
     * @emits #afterSetCell
     */
    DataTable.prototype.setCell = function (columnId, rowIndex, cellValue, eventDetail) {
        var table = this,
            columns = table.columns,
            modifier = table.modifier;
        var column = columns[columnId];
        if (column && column[rowIndex] === cellValue) {
            return;
        }
        table.emit({
            type: 'setCell',
            cellValue: cellValue,
            columnId: columnId,
            detail: eventDetail,
            rowIndex: rowIndex
        });
        if (!column) {
            column = columns[columnId] = new Array(table.rowCount);
        }
        if (rowIndex >= table.rowCount) {
            table.rowCount = (rowIndex + 1);
        }
        column[rowIndex] = cellValue;
        if (modifier) {
            modifier.modifyTable(table);
        }
        table.emit({
            type: 'afterSetCell',
            cellValue: cellValue,
            columnId: columnId,
            detail: eventDetail,
            rowIndex: rowIndex
        });
    };
    /**
     * Replaces or updates multiple columns in the table with new data. If a
     * column does not exist, it will be created and added to the table.
     *
     * @function Highcharts.DataTable#setColumns
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Keep undefined to reset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @param {boolean} [typeAsOriginal=false]
     * Determines whether the original column retains its type when data
     * replaced. If `true`, the original column keeps its type. If not
     * (default), the original column will adopt the type of the replacement
     * column.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    DataTable.prototype.setColumns = function (columns, rowIndex, eventDetail, typeAsOriginal) {
        var table = this,
            tableColumns = table.columns,
            tableModifier = table.modifier,
            columnIds = Object.keys(columns);
        var rowCount = table.rowCount;
        table.emit({
            type: 'setColumns',
            columns: columns,
            columnIds: columnIds,
            detail: eventDetail,
            rowIndex: rowIndex
        });
        if (!defined(rowIndex) && !typeAsOriginal) {
            _super.prototype.setColumns.call(this, columns, rowIndex, extend(eventDetail, { silent: true }));
        }
        else {
            for (var i = 0, iEnd = columnIds.length, column = void 0, tableColumn = void 0, columnId = void 0, ArrayConstructor = void 0; i < iEnd; ++i) {
                columnId = columnIds[i];
                column = columns[columnId];
                tableColumn = tableColumns[columnId];
                ArrayConstructor = Object.getPrototypeOf((tableColumn && typeAsOriginal) ? tableColumn : column).constructor;
                if (!tableColumn) {
                    tableColumn = new ArrayConstructor(rowCount);
                }
                else if (ArrayConstructor === Array) {
                    if (!Array.isArray(tableColumn)) {
                        tableColumn = Array.from(tableColumn);
                    }
                }
                else if (tableColumn.length < rowCount) {
                    tableColumn =
                        new ArrayConstructor(rowCount);
                    tableColumn.set(tableColumns[columnId]);
                }
                tableColumns[columnId] = tableColumn;
                for (var i_1 = (rowIndex || 0), iEnd_1 = column.length; i_1 < iEnd_1; ++i_1) {
                    tableColumn[i_1] = column[i_1];
                }
                rowCount = Math.max(rowCount, column.length);
            }
            this.applyRowCount(rowCount);
        }
        if (tableModifier) {
            tableModifier.modifyTable(table);
        }
        table.emit({
            type: 'afterSetColumns',
            columns: columns,
            columnIds: columnIds,
            detail: eventDetail,
            rowIndex: rowIndex
        });
    };
    /**
     * Assigns a new data modifier to the table.
     *
     * This method does not modify the table directly. Instead, it sets the
     * `.modified` property of the table with a modified copy of this table,
     * as produced by the modifier.
     *
     * @param {Highcharts.DataModifier} [modifier]
     * Modifier to set, or `undefined` to unset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Resolves to this table if successful, or rejects on failure.
     *
     * @emits #setModifier
     * @emits #afterSetModifier
     */
    DataTable.prototype.setModifier = function (modifier, eventDetail) {
        var table = this;
        var promise;
        table.emit({
            type: 'setModifier',
            detail: eventDetail,
            modifier: modifier,
            modified: table.getModified()
        });
        table.modifier = modifier;
        if (modifier) {
            promise = modifier.modify(table);
        }
        else {
            promise = Promise.resolve(table);
        }
        return promise
            .then(function (table) {
            table.emit({
                type: 'afterSetModifier',
                detail: eventDetail,
                modifier: modifier,
                modified: table.getModified()
            });
            return table;
        })['catch'](function (error) {
            table.emit({
                type: 'setModifierError',
                error: error,
                modifier: modifier,
                modified: table.getModified()
            });
            throw error;
        });
    };
    /**
     * Sets the original row indexes for the table. It is used to keep the
     * reference to the original rows when modifying the table.
     *
     * @param {Array<number|undefined>} originalRowIndexes
     * Original row indexes array.
     *
     * @param {boolean} omitLocalRowIndexes
     * Whether to omit the local row indexes calculation. Defaults to `false`.
     */
    DataTable.prototype.setOriginalRowIndexes = function (originalRowIndexes, omitLocalRowIndexes) {
        if (omitLocalRowIndexes === void 0) { omitLocalRowIndexes = false; }
        this.originalRowIndexes = originalRowIndexes;
        if (omitLocalRowIndexes) {
            return;
        }
        var modifiedIndexes = this.localRowIndexes = [];
        for (var i = 0, iEnd = originalRowIndexes.length, originalIndex = void 0; i < iEnd; ++i) {
            originalIndex = originalRowIndexes[i];
            if (defined(originalIndex)) {
                modifiedIndexes[originalIndex] = i;
            }
        }
    };
    /**
     * Sets cell values of a row. Will insert a new row, if no index was
     * provided, or if the index is higher than the total number of table rows.
     *
     * Note: This function is just a simplified wrap of
     * {@link Highcharts.DataTable#setRows}.
     *
     * @function Highcharts.DataTable#setRow
     *
     * @param {Highcharts.DataTableRow|Highcharts.DataTableRowObject} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    DataTable.prototype.setRow = function (row, rowIndex, insert, eventDetail) {
        this.setRows([row], rowIndex, insert, eventDetail);
    };
    /**
     * Sets cell values for multiple rows. Will insert new rows, if no index was
     * was provided, or if the index is higher than the total number of table
     * rows.
     *
     * @function Highcharts.DataTable#setRows
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Row values to set.
     *
     * @param {number} [rowIndex]
     * Index of the first row to set. Leave `undefined` to add as new rows.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    DataTable.prototype.setRows = function (rows, rowIndex, insert, eventDetail) {
        if (rowIndex === void 0) { rowIndex = this.rowCount; }
        var table = this,
            columns = table.columns,
            columnIds = Object.keys(columns),
            modifier = table.modifier,
            rowCount = rows.length;
        table.emit({
            type: 'setRows',
            detail: eventDetail,
            rowCount: rowCount,
            rowIndex: rowIndex,
            rows: rows
        });
        for (var i = 0, i2 = rowIndex, row = void 0; i < rowCount; ++i, ++i2) {
            row = rows[i];
            if (Object.keys(row).length === 0) { // Is empty Object
                for (var j = 0, jEnd = columnIds.length; j < jEnd; ++j) {
                    var column = columns[columnIds[j]];
                    if (insert) {
                        columns[columnIds[j]] = DataTable_splice(column, i2, 0, true, [null]).array;
                    }
                    else {
                        column[i2] = null;
                    }
                }
            }
            else if (Array.isArray(row)) {
                for (var j = 0, jEnd = columnIds.length; j < jEnd; ++j) {
                    columns[columnIds[j]][i2] = row[j];
                }
            }
            else {
                _super.prototype.setRow.call(this, row, i2, insert, { silent: true });
            }
        }
        var indexRowCount = insert ?
                rowCount + rows.length :
                rowIndex + rowCount;
        if (indexRowCount > table.rowCount) {
            table.rowCount = indexRowCount;
            for (var i = 0, iEnd = columnIds.length; i < iEnd; ++i) {
                var columnId = columnIds[i];
                columns[columnId] = DataTable_setLength(columns[columnId], indexRowCount);
            }
        }
        if (modifier) {
            modifier.modifyTable(table);
        }
        table.emit({
            type: 'afterSetRows',
            detail: eventDetail,
            rowCount: rowCount,
            rowIndex: rowIndex,
            rows: rows
        });
    };
    return DataTable;
}(Data_DataTableCore));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Data_DataTable = (DataTable);

;// ./code/es5/es-modules/Data/Connectors/DataConnector.js
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
                    new Data_DataTable(dataTable);
                if (!key) {
                    dataTableIndex++;
                }
            }
        }
        else {
            // If user options dataTables is not defined, generate a default
            // table.
            this.dataTables[0] = new Data_DataTable({
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
        var connector = this,
            columns = connector.metadata.columns,
            names = Object.keys(columns || {});
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
            var tableOptionsArray,
                _loop_1,
                this_1,
                _i,
                _a,
                _b,
                key,
                table;
            var _c,
                _d,
                _e,
                _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        tableOptionsArray = (_c = this.options) === null || _c === void 0 ? void 0 : _c.dataTables;
                        _loop_1 = function (key, table) {
                            var dataModifierOptions,
                                ModifierClass;
                            return __generator(this, function (_h) {
                                switch (_h.label) {
                                    case 0:
                                        dataModifierOptions = (_e = (_d = tableOptionsArray === null || tableOptionsArray === void 0 ? void 0 : tableOptionsArray.find(function (dataTable) { return dataTable.key === key; })) === null || _d === void 0 ? void 0 : _d.dataModifier) !== null && _e !== void 0 ? _e : (_f = this_1.options) === null || _f === void 0 ? void 0 : _f.dataModifier;
                                        if (!dataModifierOptions) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        ModifierClass = (dataModifierOptions &&
                                            Modifiers_DataModifier.types[dataModifierOptions.type]);
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
            var _b = _a[_i],
                key = _b[0],
                table = _b[1];
            // Create a proper converter and parse its data.
            var converter = createConverter(key);
            var columns = parseData(converter,
                data);
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
/* harmony default export */ var Connectors_DataConnector = (DataConnector);

;// ./code/es5/es-modules/Data/Converters/DataConverterUtils.js
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
 *  - Kamil Kubik
 *
 * */

/* *
 *
 *  Functions
 *
 * */
/**
 * Converts a value to a Date.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {globalThis.Date}
 * Converted value as a Date.
 */
function asDate(value, converter) {
    var timestamp;
    if (typeof value === 'string') {
        timestamp = converter.parseDate(value);
    }
    else if (typeof value === 'number') {
        timestamp = value;
    }
    else if (value instanceof Date) {
        return value;
    }
    else {
        timestamp = converter.parseDate(asString(value));
    }
    return new Date(timestamp);
}
/**
 * Converts a value to a number.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {number}
 * Converted value as a number.
 */
function asNumber(value, decimalRegExp) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    if (typeof value === 'string') {
        var decimalRegex = decimalRegExp;
        if (value.indexOf(' ') > -1) {
            value = value.replace(/\s+/g, '');
        }
        if (decimalRegex) {
            if (!decimalRegex.test(value)) {
                return NaN;
            }
            value = value.replace(decimalRegex, '$1.$2');
        }
        return parseFloat(value);
    }
    if (value instanceof Date) {
        return value.getDate();
    }
    if (value) {
        return value.getRowCount();
    }
    return NaN;
}
/**
 * Converts a value to a string.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {string}
 * Converted value as a string.
 */
function asString(value) {
    return '' + value;
}
/**
 * Converts a value to a boolean.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {boolean}
 * Converted value as a boolean.
 */
function asBoolean(value) {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        return value !== '' && value !== '0' && value !== 'false';
    }
    return !!asNumber(value);
}
/**
 * Guesses the potential type of a string value for parsing CSV etc.
 *
 * @param {*} value
 * The value to examine.
 *
 * @return {'number' | 'string' | 'Date'}
 * Type string, either `string`, `Date`, or `number`.
 */
function guessType(value, converter) {
    var result = 'string';
    if (typeof value === 'string') {
        var trimedValue = trim("".concat(value)),
            decimalRegExp = converter.decimalRegExp;
        var innerTrimedValue = trim(trimedValue,
            true);
        if (decimalRegExp) {
            innerTrimedValue = (decimalRegExp.test(innerTrimedValue) ?
                innerTrimedValue.replace(decimalRegExp, '$1.$2') :
                '');
        }
        var floatValue = parseFloat(innerTrimedValue);
        if (+innerTrimedValue === floatValue) {
            // String is numeric
            value = floatValue;
        }
        else {
            // Determine if a date string
            var dateValue = converter.parseDate(value);
            result = isNumber(dateValue) ? 'Date' : 'string';
        }
    }
    if (typeof value === 'number') {
        // Greater than milliseconds in a year assumed timestamp
        result = value > 365 * 24 * 3600 * 1000 ? 'Date' : 'number';
    }
    return result;
}
/**
 * Trim a string from whitespaces.
 *
 * @param {string} str
 * String to trim.
 *
 * @param {boolean} [inside=false]
 * Remove all spaces between numbers.
 *
 * @return {string}
 * Trimmed string
 */
function trim(str, inside) {
    if (typeof str === 'string') {
        str = str.replace(/^\s+|\s+$/g, '');
        // Clear white space inside the string, like thousands separators
        if (inside && /^[\d\s]+$/.test(str)) {
            str = str.replace(/\s/g, '');
        }
    }
    return str;
}
/**
 * Parses an array of columns to a column collection. If more headers are
 * provided, the corresponding, empty columns are added.
 *
 * @param {DataTableColumn[]} [columnsArray]
 * Array of columns.
 *
 * @param {string[]} [headers]
 * Column ids to use.
 *
 * @return {DataTableColumnCollection}
 * Parsed columns.
 */
function getColumnsCollection(columnsArray, headers) {
    if (columnsArray === void 0) { columnsArray = []; }
    var columns = {};
    for (var i = 0, iEnd = Math.max(headers.length, columnsArray.length); i < iEnd; ++i) {
        var columnId = headers[i] || "".concat(i);
        columns[columnId] = columnsArray[i] ? columnsArray[i].slice() : [];
    }
    return columns;
}
/* *
 *
 *  Default Export
 *
 * */
var DataConverterUtils = {
    asBoolean: asBoolean,
    asDate: asDate,
    asNumber: asNumber,
    asString: asString,
    getColumnsCollection: getColumnsCollection,
    guessType: guessType,
    trim: trim
};
/* harmony default export */ var Converters_DataConverterUtils = (DataConverterUtils);

;// ./code/es5/es-modules/Data/Converters/DataConverter.js
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
 *  - Sebastian Bochan
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *  - Wojciech Chmiel
 *  - Jomar Hønsi
 *  - Kamil Kubik
 *
 * */



/* *
 *
 *  Class
 *
 * */
/**
 * Base class providing an interface and basic methods for a DataConverter
 *
 * @private
 */
var DataConverter = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the DataConverter.
     *
     * @param {UserOptions} [options]
     * Options for the DataConverter.
     */
    function DataConverter(options) {
        /* *
         *
         *  Properties
         *
         * */
        /**
         * A collection of available date formats.
         */
        this.dateFormats = {
            'YYYY/mm/dd': {
                regex: /^(\d{4})([\-\.\/])(\d{1,2})\2(\d{1,2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[1], +match[3] - 1, +match[4]) : NaN);
                }
            },
            'dd/mm/YYYY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4], +match[3] - 1, +match[1]) : NaN);
                },
                alternative: 'mm/dd/YYYY' // Different format with the same regex
            },
            'mm/dd/YYYY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4], +match[1] - 1, +match[3]) : NaN);
                }
            },
            'dd/mm/YY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{2})$/,
                parser: function (match) {
                    var d = new Date();
                    if (!match) {
                        return NaN;
                    }
                    var year = +match[4];
                    if (year > (d.getFullYear() - 2000)) {
                        year += 1900;
                    }
                    else {
                        year += 2000;
                    }
                    return Date.UTC(year, +match[3] - 1, +match[1]);
                },
                alternative: 'mm/dd/YY' // Different format with the same regex
            },
            'mm/dd/YY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4] + 2000, +match[1] - 1, +match[3]) :
                        NaN);
                }
            }
        };
        var mergedOptions = merge(DataConverter.defaultOptions,
            options);
        var regExpPoint = mergedOptions.decimalPoint;
        if (regExpPoint === '.' || regExpPoint === ',') {
            regExpPoint = regExpPoint === '.' ? '\\.' : ',';
            this.decimalRegExp =
                new RegExp('^(-?[0-9]+)' + regExpPoint + '([0-9]+)$');
        }
        this.options = mergedOptions;
    }
    /**
     * Adds a converter class to the registry.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the converter class.
     *
     * @param {DataConverterTypes} DataConverterClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a converter registered with this key.
     */
    DataConverter.registerType = function (key, DataConverterClass) {
        return (!!key &&
            !DataConverter.types[key] &&
            !!(DataConverter.types[key] = DataConverterClass));
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Converts a string value based on its guessed type.
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {number | string | Date}
     * The converted value.
     */
    DataConverter.prototype.convertByType = function (value) {
        var converter = this,
            typeMap = {
                'number': function (value) {
                    return Converters_DataConverterUtils.asNumber(value,
            converter.decimalRegExp);
            },
            'Date': function (value) {
                return Converters_DataConverterUtils.asDate(value, converter);
            },
            'string': Converters_DataConverterUtils.asString
        };
        return typeMap[Converters_DataConverterUtils.guessType(value, converter)]
            .call(converter, value);
    };
    /**
     * Tries to guess the date format
     *  - Check if either month candidate exceeds 12
     *  - Check if year is missing (use current year)
     *  - Check if a shortened year format is used (e.g. 1/1/99)
     *  - If no guess can be made, the user must be prompted
     * data is the data to deduce a format based on
     * @private
     *
     * @param {string[]} data
     * Data to check the format.
     *
     * @param {number} limit
     * Max data to check the format.
     *
     * @param {boolean} save
     * Whether to save the date format in the converter options.
     */
    DataConverter.prototype.deduceDateFormat = function (data, limit, save) {
        var parser = this,
            stable = [],
            max = [];
        var format = 'YYYY/mm/dd', thing, guessedFormat = [], i = 0, madeDeduction = false, elem, j;
        if (!limit || limit > data.length) {
            limit = data.length;
        }
        for (; i < limit; i++) {
            if (typeof data[i] !== 'undefined' &&
                data[i] && data[i].length) {
                thing = data[i]
                    .trim()
                    .replace(/[\-\.\/]/g, ' ')
                    .split(' ');
                guessedFormat = [
                    '',
                    '',
                    ''
                ];
                for (j = 0; j < thing.length; j++) {
                    if (j < guessedFormat.length) {
                        elem = parseInt(thing[j], 10);
                        if (elem) {
                            max[j] = (!max[j] || max[j] < elem) ? elem : max[j];
                            if (typeof stable[j] !== 'undefined') {
                                if (stable[j] !== elem) {
                                    stable[j] = false;
                                }
                            }
                            else {
                                stable[j] = elem;
                            }
                            if (elem > 31) {
                                if (elem < 100) {
                                    guessedFormat[j] = 'YY';
                                }
                                else {
                                    guessedFormat[j] = 'YYYY';
                                }
                            }
                            else if (elem > 12 &&
                                elem <= 31) {
                                guessedFormat[j] = 'dd';
                                madeDeduction = true;
                            }
                            else if (!guessedFormat[j].length) {
                                guessedFormat[j] = 'mm';
                            }
                        }
                    }
                }
            }
        }
        if (madeDeduction) {
            // This handles a few edge cases with hard to guess dates
            for (j = 0; j < stable.length; j++) {
                if (stable[j] !== false) {
                    if (max[j] > 12 &&
                        guessedFormat[j] !== 'YY' &&
                        guessedFormat[j] !== 'YYYY') {
                        guessedFormat[j] = 'YY';
                    }
                }
                else if (max[j] > 12 && guessedFormat[j] === 'mm') {
                    guessedFormat[j] = 'dd';
                }
            }
            // If the middle one is dd, and the last one is dd,
            // the last should likely be year.
            if (guessedFormat.length === 3 &&
                guessedFormat[1] === 'dd' &&
                guessedFormat[2] === 'dd') {
                guessedFormat[2] = 'YY';
            }
            format = guessedFormat.join('/');
            // If the calculated format is not valid, we need to present an
            // error.
        }
        // Save the deduced format in the converter options.
        if (save) {
            parser.options.dateFormat = format;
        }
        return format;
    };
    /**
     * Emits an event on the DataConverter instance.
     *
     * @param {Event} [e]
     * Event object containing additional event data
     */
    DataConverter.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
     * Registers a callback for a specific event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventCallback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    DataConverter.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /**
     * Parse a date and return it as a number.
     *
     * @param {string} value
     * Value to parse.
     *
     * @param {string} dateFormatProp
     * Which of the predefined date formats
     * to use to parse date values.
     */
    DataConverter.prototype.parseDate = function (value, dateFormatProp) {
        var converter = this,
            options = converter.options;
        var dateFormat = dateFormatProp || options.dateFormat,
            result = NaN,
            key,
            match = null;
        if (options.parseDate) {
            result = options.parseDate(value);
        }
        else {
            var dateFormats = converter.dateFormats;
            // Auto-detect the date format the first time
            if (!dateFormat) {
                for (key in dateFormats) { // eslint-disable-line guard-for-in
                    var format = dateFormats[key];
                    match = value.match(format.regex);
                    if (match) {
                        dateFormat = key;
                        result = format.parser(match);
                        break;
                    }
                }
                // Next time, use the one previously found
            }
            else {
                var format = dateFormats[dateFormat];
                if (!format) {
                    // The selected format is invalid
                    format = dateFormats['YYYY/mm/dd'];
                }
                match = value.match(format.regex);
                if (match) {
                    result = format.parser(match);
                }
            }
            // Fall back to Date.parse
            if (!match) {
                var parsed = Date.parse(value);
                if (!isNaN(parsed)) {
                    result =
                        parsed - new Date(parsed).getTimezoneOffset() * 60000;
                    // Reset dates without year in Chrome
                    if (!value.includes('2001') &&
                        new Date(result).getFullYear() === 2001) {
                        result = NaN;
                    }
                }
            }
        }
        return result;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    DataConverter.defaultOptions = {
        dateFormat: '',
        firstRowAsNames: true
    };
    /**
     * Registry as a record object with converter names and their class.
     */
    DataConverter.types = {};
    return DataConverter;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Converters_DataConverter = (DataConverter);

;// ./code/es5/es-modules/Data/DataCursor.js
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
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  Class
 *
 * */
/**
 * This class manages state cursors pointing on {@link Data.DataTable}. It
 * creates a relation between states of the user interface and the table cells,
 * columns, or rows.
 *
 * @class
 * @name Data.DataCursor
 */
var DataCursor = /** @class */ (function () {
    /* *
     *
     *  Static Properties
     *
     * */
    /* *
     *
     *  Constructor
     *
     * */
    function DataCursor(stateMap) {
        if (stateMap === void 0) { stateMap = {}; }
        this.emittingRegister = [];
        this.listenerMap = {};
        this.stateMap = stateMap;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * This function registers a listener for a specific state and table.
     *
     * @example
     * ```TypeScript
     * dataCursor.addListener(myTable.id, 'hover', (e: DataCursorEvent) => {
     *     if (e.cursor.type === 'position') {
     *         console.log(`Hover over row #${e.cursor.row}.`);
     *     }
     * });
     * ```
     *
     * @function #addListener
     *
     * @param {Data.DataCursorTableId} tableId
     * The ID of the table to listen to.
     *
     * @param {Data.DataCursorState} state
     * The state on the table to listen to.
     *
     * @param {Data.DataCursorListener} listener
     * The listener to register.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.addListener = function (tableId, state, listener) {
        var listenerMap = this.listenerMap[tableId] = (this.listenerMap[tableId] ||
                {});
        var listeners = listenerMap[state] = (listenerMap[state] ||
                []);
        listeners.push(listener);
        return this;
    };
    /**
     * @private
     */
    DataCursor.prototype.buildEmittingTag = function (e) {
        return (e.cursor.type === 'position' ?
            [
                e.table.id,
                e.cursor.column,
                e.cursor.row,
                e.cursor.state,
                e.cursor.type
            ] :
            [
                e.table.id,
                e.cursor.columns,
                e.cursor.firstRow,
                e.cursor.lastRow,
                e.cursor.state,
                e.cursor.type
            ]).join('\0');
    };
    /**
     * This function emits a state cursor related to a table. It will provide
     * lasting state cursors of the table to listeners.
     *
     * @example
     * ```ts
     * dataCursor.emit(myTable, {
     *     type: 'position',
     *     column: 'city',
     *     row: 4,
     *     state: 'hover',
     * });
     * ```
     *
     * @param {Data.DataTable} table
     * The related table of the cursor.
     *
     * @param {Data.DataCursorType} cursor
     * The state cursor to emit.
     *
     * @param {Event} [event]
     * Optional event information from a related source.
     *
     * @param {boolean} [lasting]
     * Whether this state cursor should be kept until it is cleared with
     * {@link DataCursor#remitCursor}.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.emitCursor = function (table, cursor, event, lasting) {
        var _a;
        var tableId = table.id,
            state = cursor.state,
            listeners = (this.listenerMap[tableId] &&
                this.listenerMap[tableId][state]);
        if (listeners) {
            var stateMap = this.stateMap[tableId] = ((_a = this.stateMap[tableId]) !== null && _a !== void 0 ? _a : {});
            var cursors = stateMap[cursor.state] || [];
            if (lasting) {
                if (!cursors.length) {
                    stateMap[cursor.state] = cursors;
                }
                if (getIndex(cursor, cursors) === -1) {
                    cursors.push(cursor);
                }
            }
            var e = {
                    cursor: cursor,
                    cursors: cursors,
                    table: table
                };
            if (event) {
                e.event = event;
            }
            var emittingRegister = this.emittingRegister,
                emittingTag = this.buildEmittingTag(e);
            if (emittingRegister.indexOf(emittingTag) >= 0) {
                // Break call stack loops
                return this;
            }
            try {
                this.emittingRegister.push(emittingTag);
                for (var i = 0, iEnd = listeners.length; i < iEnd; ++i) {
                    listeners[i].call(this, e);
                }
            }
            finally {
                var index = this.emittingRegister.indexOf(emittingTag);
                if (index >= 0) {
                    this.emittingRegister.splice(index, 1);
                }
            }
        }
        return this;
    };
    /**
     * Removes a lasting state cursor.
     *
     * @function #remitCursor
     *
     * @param {string} tableId
     * ID of the related cursor table.
     *
     * @param {Data.DataCursorType} cursor
     * Copy or reference of the cursor.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.remitCursor = function (tableId, cursor) {
        var cursors = (this.stateMap[tableId] &&
                this.stateMap[tableId][cursor.state]);
        if (cursors) {
            var index = getIndex(cursor,
                cursors);
            if (index >= 0) {
                cursors.splice(index, 1);
            }
        }
        return this;
    };
    /**
     * This function removes a listener.
     *
     * @function #addListener
     *
     * @param {Data.DataCursorTableId} tableId
     * The ID of the table the listener is connected to.
     *
     * @param {Data.DataCursorState} state
     * The state on the table the listener is listening to.
     *
     * @param {Data.DataCursorListener} listener
     * The listener to deregister.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.removeListener = function (tableId, state, listener) {
        var listeners = (this.listenerMap[tableId] &&
                this.listenerMap[tableId][state]);
        if (listeners) {
            var index = listeners.indexOf(listener);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
        }
        return this;
    };
    return DataCursor;
}());
/* *
 *
 *  Functions
 *
 * */
/**
 * Finds the index of an cursor in an array.
 * @private
 */
function getIndex(needle, cursors) {
    if (needle.type === 'position') {
        for (var cursor = void 0, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
            cursor = cursors[i];
            if (cursor.type === 'position' &&
                cursor.state === needle.state &&
                cursor.column === needle.column &&
                cursor.row === needle.row) {
                return i;
            }
        }
    }
    else {
        var columnNeedle = JSON.stringify(needle.columns);
        for (var cursor = void 0, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
            cursor = cursors[i];
            if (cursor.type === 'range' &&
                cursor.state === needle.state &&
                cursor.firstRow === needle.firstRow &&
                cursor.lastRow === needle.lastRow &&
                JSON.stringify(cursor.columns) === columnNeedle) {
                return i;
            }
        }
    }
    return -1;
}
/**
 * Checks whether two cursor share the same properties.
 * @private
 */
function isEqual(cursorA, cursorB) {
    if (cursorA.type === 'position' && cursorB.type === 'position') {
        return (cursorA.column === cursorB.column &&
            cursorA.row === cursorB.row &&
            cursorA.state === cursorB.state);
    }
    if (cursorA.type === 'range' && cursorB.type === 'range') {
        return (cursorA.firstRow === cursorB.firstRow &&
            cursorA.lastRow === cursorB.lastRow &&
            (JSON.stringify(cursorA.columns) ===
                JSON.stringify(cursorB.columns)));
    }
    return false;
}
/**
 * Checks whether a cursor is in a range.
 * @private
 */
function isInRange(needle, range) {
    if (range.type === 'position') {
        range = toRange(range);
    }
    if (needle.type === 'position') {
        needle = toRange(needle, range);
    }
    var needleColumns = needle.columns;
    var rangeColumns = range.columns;
    return (needle.firstRow >= range.firstRow &&
        needle.lastRow <= range.lastRow &&
        (!needleColumns ||
            !rangeColumns ||
            needleColumns.every(function (column) { return rangeColumns.indexOf(column) >= 0; })));
}
/**
 * @private
 */
function toPositions(cursor) {
    if (cursor.type === 'position') {
        return [cursor];
    }
    var columns = (cursor.columns || []);
    var positions = [];
    var state = cursor.state;
    for (var row = cursor.firstRow, rowEnd = cursor.lastRow; row < rowEnd; ++row) {
        if (!columns.length) {
            positions.push({
                type: 'position',
                row: row,
                state: state
            });
            continue;
        }
        for (var column = 0, columnEnd = columns.length; column < columnEnd; ++column) {
            positions.push({
                type: 'position',
                column: columns[column],
                row: row,
                state: state
            });
        }
    }
    return positions;
}
/**
 * @private
 */
function toRange(cursor, defaultRange) {
    var _a,
        _b,
        _c,
        _d;
    if (cursor.type === 'range') {
        return cursor;
    }
    var range = {
            type: 'range',
            firstRow: ((_b = (_a = cursor.row) !== null && _a !== void 0 ? _a : (defaultRange && defaultRange.firstRow)) !== null && _b !== void 0 ? _b : 0),
            lastRow: ((_d = (_c = cursor.row) !== null && _c !== void 0 ? _c : (defaultRange && defaultRange.lastRow)) !== null && _d !== void 0 ? _d : Number.MAX_VALUE),
            state: cursor.state
        };
    if (typeof cursor.column !== 'undefined') {
        range.columns = [cursor.column];
    }
    return range;
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Data_DataCursor = (DataCursor);

;// ./code/es5/es-modules/Data/DataPool.js
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

var DataPool_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var DataPool_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
        var connectors = this.options.connectors,
            connectorIds = [];
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
            var ConnectorClass = Connectors_DataConnector.types[options.type];
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
        return DataPool_awaiter(this, void 0, void 0, function () {
            var connectorsOptions,
                connectorsInstances,
                i,
                iEnd,
                existingConnector;
            return DataPool_generator(this, function (_a) {
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
/* harmony default export */ var Data_DataPool = (DataPool);

;// ./code/es5/es-modules/Data/Formula/FormulaParser.js
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


/* *
 *
 *  Constants
 *
 * */
/**
 * @private
 */
var booleanRegExp = /^(?:FALSE|TRUE)/;
/**
 * `.`-separated decimal.
 * @private
 */
var decimal1RegExp = /^[+\-]?\d+(?:\.\d+)?(?:e[+\-]\d+)?/;
/**
 * `,`-separated decimal.
 * @private
 */
var decimal2RegExp = /^[+\-]?\d+(?:,\d+)?(?:e[+\-]\d+)?/;
/**
 * - Group 1: Function name
 * @private
 */
var functionRegExp = /^([A-Z][A-Z\d\.]*)\(/;
/**
 * @private
 */
var operatorRegExp = /^(?:[+\-*\/^<=>]|<=|=>)/;
/**
 * - Group 1: Start column
 * - Group 2: Start row
 * - Group 3: End column
 * - Group 4: End row
 * @private
 */
var rangeA1RegExp = /^(\$?[A-Z]+)(\$?\d+)\:(\$?[A-Z]+)(\$?\d+)/;
/**
 * - Group 1: Start row
 * - Group 2: Start column
 * - Group 3: End row
 * - Group 4: End column
 * @private
 */
var rangeR1C1RegExp = /^R(\d*|\[\d+\])C(\d*|\[\d+\])\:R(\d*|\[\d+\])C(\d*|\[\d+\])/;
/**
 * - Group 1: Column
 * - Group 2: Row
 * @private
 */
var referenceA1RegExp = /^(\$?[A-Z]+)(\$?\d+)(?![\:C])/;
/**
 * - Group 1: Row
 * - Group 2: Column
 * @private
 */
var referenceR1C1RegExp = /^R(\d*|\[\d+\])C(\d*|\[\d+\])(?!\:)/;
/* *
 *
 *  Functions
 *
 * */
/**
 * Extracts the inner string of the most outer parantheses.
 *
 * @private
 *
 * @param {string} text
 * Text string to extract from.
 *
 * @return {string}
 * Extracted parantheses. If not found an exception will be thrown.
 */
function extractParentheses(text) {
    var parenthesesLevel = 0;
    for (var i = 0, iEnd = text.length, char = void 0, parenthesesStart = 1; i < iEnd; ++i) {
        char = text[i];
        if (char === '(') {
            if (!parenthesesLevel) {
                parenthesesStart = i + 1;
            }
            ++parenthesesLevel;
            continue;
        }
        if (char === ')') {
            --parenthesesLevel;
            if (!parenthesesLevel) {
                return text.substring(parenthesesStart, i);
            }
        }
    }
    if (parenthesesLevel > 0) {
        var error = new Error('Incomplete parentheses.');
        error.name = 'FormulaParseError';
        throw error;
    }
    return '';
}
/**
 * Extracts the inner string value.
 *
 * @private
 *
 * @param {string} text
 * Text string to extract from.
 *
 * @return {string}
 * Extracted string. If not found an exception will be thrown.
 */
function extractString(text) {
    var start = -1;
    for (var i = 0, iEnd = text.length, char = void 0, escaping = false; i < iEnd; ++i) {
        char = text[i];
        if (char === '\\') {
            escaping = !escaping;
            continue;
        }
        if (escaping) {
            escaping = false;
            continue;
        }
        if (char === '"') {
            if (start < 0) {
                start = i;
            }
            else {
                return text.substring(start + 1, i); // `ì` is excluding
            }
        }
    }
    var error = new Error('Incomplete string.');
    error.name = 'FormulaParseError';
    throw error;
}
/**
 * Parses an argument string. Formula arrays with a single term will be
 * simplified to the term.
 *
 * @private
 *
 * @param {string} text
 * Argument string to parse.
 *
 * @param {boolean} alternativeSeparators
 * Whether to expect `;` as argument separator and `,` as decimal separator.
 *
 * @return {Formula|Function|Range|Reference|Value}
 * The recognized term structure.
 */
function parseArgument(text, alternativeSeparators) {
    var match;
    // Check for a R1C1:R1C1 range notation
    match = text.match(rangeR1C1RegExp);
    if (match) {
        var beginColumnRelative = (match[2] === '' || match[2][0] === '[');
        var beginRowRelative = (match[1] === '' || match[1][0] === '[');
        var endColumnRelative = (match[4] === '' || match[4][0] === '[');
        var endRowRelative = (match[3] === '' || match[3][0] === '[');
        var range = {
                type: 'range',
                beginColumn: (beginColumnRelative ?
                    parseInt(match[2].substring(1, -1) || '0', 10) :
                    parseInt(match[2], 10) - 1),
                beginRow: (beginRowRelative ?
                    parseInt(match[1].substring(1, -1) || '0', 10) :
                    parseInt(match[1], 10) - 1),
                endColumn: (endColumnRelative ?
                    parseInt(match[4].substring(1, -1) || '0', 10) :
                    parseInt(match[4], 10) - 1),
                endRow: (endRowRelative ?
                    parseInt(match[3].substring(1, -1) || '0', 10) :
                    parseInt(match[3], 10) - 1)
            };
        if (beginColumnRelative) {
            range.beginColumnRelative = true;
        }
        if (beginRowRelative) {
            range.beginRowRelative = true;
        }
        if (endColumnRelative) {
            range.endColumnRelative = true;
        }
        if (endRowRelative) {
            range.endRowRelative = true;
        }
        return range;
    }
    // Check for a A1:A1 range notation
    match = text.match(rangeA1RegExp);
    if (match) {
        var beginColumnRelative = match[1][0] !== '$';
        var beginRowRelative = match[2][0] !== '$';
        var endColumnRelative = match[3][0] !== '$';
        var endRowRelative = match[4][0] !== '$';
        var range = {
                type: 'range',
                beginColumn: parseReferenceColumn(beginColumnRelative ?
                    match[1] :
                    match[1].substring(1)) - 1,
                beginRow: parseInt(beginRowRelative ?
                    match[2] :
                    match[2].substring(1), 10) - 1,
                endColumn: parseReferenceColumn(endColumnRelative ?
                    match[3] :
                    match[3].substring(1)) - 1,
                endRow: parseInt(endRowRelative ?
                    match[4] :
                    match[4].substring(1), 10) - 1
            };
        if (beginColumnRelative) {
            range.beginColumnRelative = true;
        }
        if (beginRowRelative) {
            range.beginRowRelative = true;
        }
        if (endColumnRelative) {
            range.endColumnRelative = true;
        }
        if (endRowRelative) {
            range.endRowRelative = true;
        }
        return range;
    }
    // Fallback to formula processing for other pattern types
    var formula = parseFormula(text,
        alternativeSeparators);
    return (formula.length === 1 && typeof formula[0] !== 'string' ?
        formula[0] :
        formula);
}
/**
 * Parse arguments string inside function parantheses.
 *
 * @private
 *
 * @param {string} text
 * Parantheses string of the function.
 *
 * @param {boolean} alternativeSeparators
 * Whether to expect `;` as argument separator and `,` as decimal separator.
 *
 * @return {Highcharts.FormulaArguments}
 * Parsed arguments array.
 */
function parseArguments(text, alternativeSeparators) {
    var args = [], argumentsSeparator = (alternativeSeparators ? ';' : ',');
    var parantheseLevel = 0,
        term = '';
    for (var i = 0, iEnd = text.length, char = void 0; i < iEnd; ++i) {
        char = text[i];
        // Check for separator
        if (char === argumentsSeparator &&
            !parantheseLevel &&
            term) {
            args.push(parseArgument(term, alternativeSeparators));
            term = '';
            // Check for a quoted string before skip logic
        }
        else if (char === '"' &&
            !parantheseLevel &&
            !term) {
            var string = extractString(text.substring(i));
            args.push(string);
            i += string.length + 1; // Only +1 to cover ++i in for-loop
            // Skip space and check paranthesis nesting
        }
        else if (char !== ' ') {
            term += char;
            if (char === '(') {
                ++parantheseLevel;
            }
            else if (char === ')') {
                --parantheseLevel;
            }
        }
    }
    // Look for left-overs from last argument
    if (!parantheseLevel && term) {
        args.push(parseArgument(term, alternativeSeparators));
    }
    return args;
}
/**
 * Checks if there's one of the following operator before the negative number
 * value: '*', '/' or '^'.
 *
 * Used to properly indicate a negative value reference or negate a directly
 * passed number value.
 */
function negativeReference(formula) {
    var formulaLength = formula.length;
    var priorFormula = formula[formulaLength - 2];
    return (formula[formulaLength - 1] === '-' &&
        isString(priorFormula) &&
        !!priorFormula.match(/\*|\/|\^/));
}
/**
 * Converts a spreadsheet formula string into a formula array. Throws a
 * `FormulaParserError` when the string can not be parsed.
 *
 * @private
 * @function Formula.parseFormula
 *
 * @param {string} text
 * Spreadsheet formula string, without the leading `=`.
 *
 * @param {boolean} alternativeSeparators
 * * `false` to expect `,` between arguments and `.` in decimals.
 * * `true` to expect `;` between arguments and `,` in decimals.
 *
 * @return {Formula.Formula}
 * Formula array representing the string.
 */
function parseFormula(text, alternativeSeparators) {
    var decimalRegExp = (alternativeSeparators ?
            decimal2RegExp :
            decimal1RegExp),
        formula = [];
    var match,
        next = (text[0] === '=' ? text.substring(1) : text).trim();
    while (next) {
        // Check for an R1C1 reference notation
        match = next.match(referenceR1C1RegExp);
        if (match) {
            var columnRelative = (match[2] === '' || match[2][0] === '[');
            var rowRelative = (match[1] === '' || match[1][0] === '[');
            var reference = {
                    type: 'reference',
                    column: (columnRelative ?
                        parseInt(match[2].substring(1, -1) || '0', 10) :
                        parseInt(match[2], 10) - 1),
                    row: (rowRelative ?
                        parseInt(match[1].substring(1, -1) || '0', 10) :
                        parseInt(match[1], 10) - 1)
                };
            if (columnRelative) {
                reference.columnRelative = true;
            }
            if (rowRelative) {
                reference.rowRelative = true;
            }
            if (negativeReference(formula)) {
                formula.pop();
                reference.isNegative = true;
            }
            formula.push(reference);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for an A1 reference notation
        match = next.match(referenceA1RegExp);
        if (match) {
            var columnRelative = match[1][0] !== '$';
            var rowRelative = match[2][0] !== '$';
            var reference = {
                    type: 'reference',
                    column: parseReferenceColumn(columnRelative ?
                        match[1] :
                        match[1].substring(1)) - 1,
                    row: parseInt(rowRelative ?
                        match[2] :
                        match[2].substring(1), 10) - 1
                };
            if (columnRelative) {
                reference.columnRelative = true;
            }
            if (rowRelative) {
                reference.rowRelative = true;
            }
            if (negativeReference(formula)) {
                formula.pop();
                reference.isNegative = true;
            }
            formula.push(reference);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a formula operator
        match = next.match(operatorRegExp);
        if (match) {
            formula.push(match[0]);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a boolean value
        match = next.match(booleanRegExp);
        if (match) {
            formula.push(match[0] === 'TRUE');
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a number value
        match = next.match(decimalRegExp);
        if (match) {
            var number = parseFloat(match[0]);
            // If the current value is multiplication-related and the previous
            // one is a minus sign, set the current value to negative and remove
            // the minus sign.
            if (negativeReference(formula)) {
                formula.pop();
                number = -number;
            }
            formula.push(number);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a quoted string
        if (next[0] === '"') {
            var string = extractString(next);
            formula.push(string.substring(1, -1));
            next = next.substring(string.length + 2).trim();
            continue;
        }
        // Check for a function
        match = next.match(functionRegExp);
        if (match) {
            next = next.substring(match[1].length).trim();
            var parantheses = extractParentheses(next);
            formula.push({
                type: 'function',
                name: match[1],
                args: parseArguments(parantheses, alternativeSeparators)
            });
            next = next.substring(parantheses.length + 2).trim();
            continue;
        }
        // Check for a formula in parentheses
        if (next[0] === '(') {
            var parentheses = extractParentheses(next);
            if (parentheses) {
                formula
                    .push(parseFormula(parentheses, alternativeSeparators));
                next = next.substring(parentheses.length + 2).trim();
                continue;
            }
        }
        // Something is not right
        var position = text.length - next.length, error = new Error('Unexpected character `' +
                text.substring(position, position + 1) +
                '` at position ' + (position + 1) +
                '. (`...' + text.substring(position - 5, position + 6) + '...`)');
        error.name = 'FormulaParseError';
        throw error;
    }
    return formula;
}
/**
 * Converts a reference column `A` of `A1` into a number. Supports endless sizes
 * `ZZZ...`, just limited by integer precision.
 *
 * @private
 *
 * @param {string} text
 * Column string to convert.
 *
 * @return {number}
 * Converted column index.
 */
function parseReferenceColumn(text) {
    var column = 0;
    for (var i = 0, iEnd = text.length, code = void 0, factor = text.length - 1; i < iEnd; ++i) {
        code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            column += (code - 64) * Math.pow(26, factor);
        }
        --factor;
    }
    return column;
}
/* *
 *
 *  Default Export
 *
 * */
var FormulaParser = {
    parseFormula: parseFormula
};
/* harmony default export */ var Formula_FormulaParser = (FormulaParser);

;// ./code/es5/es-modules/Data/Formula/FormulaTypes.js
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

/* *
 *
 *  Constants
 *
 * */
/**
 * Array of all possible operators.
 * @private
 */
var operators = ['+', '-', '*', '/', '^', '=', '<', '<=', '>', '>='];
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests an item for a Formula array.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a formula (or argument) array.
 */
function isFormula(item) {
    return Array.isArray(item);
}
/**
 * Tests an item for a Function structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a formula function.
 */
function FormulaTypes_isFunction(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'function');
}
/**
 * Tests an item for an Operator string.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is an operator string.
 */
function isOperator(item) {
    return (typeof item === 'string' &&
        operators.indexOf(item) >= 0);
}
/**
 * Tests an item for a Range structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a range.
 */
function isRange(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'range');
}
/**
 * Tests an item for a Reference structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a reference.
 */
function isReference(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'reference');
}
/**
 * Tests an item for a Value structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem|null|undefined} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a value.
 */
function isValue(item) {
    return (typeof item === 'boolean' ||
        typeof item === 'number' ||
        typeof item === 'string');
}
/* *
 *
 *  Default Export
 *
 * */
var MathFormula = {
    isFormula: isFormula,
    isFunction: FormulaTypes_isFunction,
    isOperator: isOperator,
    isRange: isRange,
    isReference: isReference,
    isValue: isValue
};
/* harmony default export */ var FormulaTypes = (MathFormula);

;// ./code/es5/es-modules/Data/Formula/FormulaProcessor.js
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



var FormulaProcessor_isFormula = FormulaTypes.isFormula, FormulaProcessor_isFunction = FormulaTypes.isFunction, FormulaProcessor_isOperator = FormulaTypes.isOperator, FormulaProcessor_isRange = FormulaTypes.isRange, FormulaProcessor_isReference = FormulaTypes.isReference, FormulaProcessor_isValue = FormulaTypes.isValue;
/* *
 *
 *  Constants
 *
 * */
var asLogicalStringRegExp = / */;
var MAX_FALSE = Number.MAX_VALUE / 1.000000000001;
var MAX_STRING = Number.MAX_VALUE / 1.000000000002;
var MAX_TRUE = Number.MAX_VALUE;
var operatorPriority = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
    '=': 0,
    '<': 0,
    '<=': 0,
    '>': 0,
    '>=': 0
};
var processorFunctions = {};
var processorFunctionNameRegExp = /^[A-Z][A-Z\.]*$/;
/* *
 *
 *  Functions
 *
 * */
/**
 * Converts non-number types to logical numbers.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Logical number value. `NaN` if not convertable.
 */
function asLogicalNumber(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? MAX_TRUE : MAX_FALSE;
        case 'string':
            return MAX_STRING;
        case 'number':
            return value;
        default:
            return NaN;
    }
}
/**
 * Converts strings to logical strings, while other types get passed through. In
 * logical strings the space character is the lowest value and letters are case
 * insensitive.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {Highcharts.FormulaValue}
 * Logical string value or passed through value.
 */
function asLogicalString(value) {
    if (typeof value === 'string') {
        return value.toLowerCase().replace(asLogicalStringRegExp, '\0');
    }
    return value;
}
/**
 * Converts non-number types to a logic number.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Number value. `NaN` if not convertable.
 */
function FormulaProcessor_asNumber(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? 1 : 0;
        case 'string':
            return parseFloat(value.replace(',', '.'));
        case 'number':
            return value;
        default:
            return NaN;
    }
}
/**
 * Process a basic operation of two given values.
 *
 * @private
 *
 * @param {Highcharts.FormulaOperator} operator
 * Operator between values.
 *
 * @param {Highcharts.FormulaValue} x
 * First value for operation.
 *
 * @param {Highcharts.FormulaValue} y
 * Second value for operation.
 *
 * @return {Highcharts.FormulaValue}
 * Operation result. `NaN` if operation is not support.
 */
function basicOperation(operator, x, y) {
    switch (operator) {
        case '=':
            return asLogicalString(x) === asLogicalString(y);
        case '<':
            if (typeof x === typeof y) {
                return asLogicalString(x) < asLogicalString(y);
            }
            return asLogicalNumber(x) < asLogicalNumber(y);
        case '<=':
            if (typeof x === typeof y) {
                return asLogicalString(x) <= asLogicalString(y);
            }
            return asLogicalNumber(x) <= asLogicalNumber(y);
        case '>':
            if (typeof x === typeof y) {
                return asLogicalString(x) > asLogicalString(y);
            }
            return asLogicalNumber(x) > asLogicalNumber(y);
        case '>=':
            if (typeof x === typeof y) {
                return asLogicalString(x) >= asLogicalString(y);
            }
            return asLogicalNumber(x) >= asLogicalNumber(y);
    }
    x = FormulaProcessor_asNumber(x);
    y = FormulaProcessor_asNumber(y);
    var result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            return NaN;
    }
    // Limit decimal to 9 digits
    return (result % 1 ?
        Math.round(result * 1000000000) / 1000000000 :
        result);
}
/**
 * Converts an argument to Value and in case of a range to an array of Values.
 *
 * @function Highcharts.Formula.getArgumentValue
 *
 * @param {Highcharts.FormulaRange|Highcharts.FormulaTerm} arg
 * Formula range or term to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Converted value.
 */
function getArgumentValue(arg, table) {
    // Add value
    if (FormulaProcessor_isValue(arg)) {
        return arg;
    }
    // Add values of a range
    if (FormulaProcessor_isRange(arg)) {
        return (table && getRangeValues(arg, table) || []);
    }
    // Add values of a function
    if (FormulaProcessor_isFunction(arg)) {
        return processFunction(arg, table);
    }
    // Process functions, operations, references with formula processor
    return processFormula((FormulaProcessor_isFormula(arg) ? arg : [arg]), table);
}
/**
 * Converts all arguments to Values and in case of ranges to arrays of Values.
 *
 * @function Highcharts.Formula.getArgumentsValues
 *
 * @param {Highcharts.FormulaArguments} args
 * Formula arguments to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Array<(Highcharts.FormulaValue|Array<Highcharts.FormulaValue>)>}
 * Converted values.
 */
function getArgumentsValues(args, table) {
    var values = [];
    for (var i = 0, iEnd = args.length; i < iEnd; ++i) {
        values.push(getArgumentValue(args[i], table));
    }
    return values;
}
/**
 * Extracts cell values from a table for a given range.
 *
 * @function Highcharts.Formula.getRangeValues
 *
 * @param {Highcharts.FormulaRange} range
 * Formula range to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Array<Highcharts.FormulaValue>}
 * Extracted values.
 */
function getRangeValues(range, table) {
    var columnIds = table
            .getColumnIds()
            .slice(range.beginColumn,
        range.endColumn + 1),
        values = [];
    for (var i = 0, iEnd = columnIds.length, cell = void 0; i < iEnd; ++i) {
        var cells = table.getColumn(columnIds[i],
            true) || [];
        for (var j = range.beginRow, jEnd = range.endRow + 1; j < jEnd; ++j) {
            cell = cells[j];
            if (typeof cell === 'string' &&
                cell[0] === '=' &&
                table !== table.getModified()) {
                // Look in the modified table for formula result
                cell = table.getModified().getCell(columnIds[i], j);
            }
            values.push(FormulaProcessor_isValue(cell) ? cell : NaN);
        }
    }
    return values;
}
/**
 * Extracts the cell value from a table for a given reference.
 *
 * @private
 *
 * @param {Highcharts.FormulaReference} reference
 * Formula reference to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Highcharts.FormulaValue}
 * Extracted value. 'undefined' might also indicate that the cell was not found.
 */
function getReferenceValue(reference, table) {
    var columnId = table.getColumnIds()[reference.column];
    if (columnId) {
        var cell = table.getCell(columnId,
            reference.row);
        if (typeof cell === 'string' &&
            cell[0] === '=' &&
            table !== table.getModified()) {
            // Look in the modified table for formula result
            var result = table.getModified().getCell(columnId,
                reference.row);
            return FormulaProcessor_isValue(result) ? result : NaN;
        }
        if (FormulaProcessor_isValue(cell)) {
            return reference.isNegative ? -cell : cell;
        }
        return NaN;
    }
    return NaN;
}
/**
 * Calculates a value based on the two top values and the related operator.
 *
 * Used to properly process the formula's values based on its operators.
 *
 * @private
 * @function Highcharts.applyOperator
 *
 * @param {Array<Highcharts.Value>} values
 * Processed formula values.
 *
 * @param {Array<Highcharts.Operator>} operators
 * Processed formula operators.
 */
function applyOperator(values, operators) {
    if (values.length < 2 || operators.length < 1) {
        values.push(NaN);
    }
    var secondValue = values.pop();
    var firstValue = values.pop();
    var operator = operators.pop();
    if (!defined(secondValue) || !defined(firstValue) || !defined(operator)) {
        values.push(NaN);
    }
    else {
        values.push(basicOperation(operator, firstValue, secondValue));
    }
}
/**
 * Processes a formula array on the given table. If the formula does not contain
 * references or ranges, then no table has to be provided.
 *
 * Performs formulas considering the operators precedence.
 *
 * // Example of the `2 * 3 + 4` formula:
 * 2 -> values: [2], operators: []
 * * -> values: [2], operators: [*]
 * 3 -> values: [2, 3], operators: [*]
 * // Since the higher precedence operator exists (* > +), perform it first.
 * + -> values: [6], operators: [+]
 * 4 -> values: [6, 4], operators: [+]
 * // When non-higher precedence operators remain, perform rest calculations.
 * -> values: [10], operators: []
 *
 * @private
 * @function Highcharts.processFormula
 *
 * @param {Highcharts.Formula} formula
 * Formula array to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue}
 * Result value of the process. `NaN` indicates an error.
 */
function processFormula(formula, table) {
    // Keeps all the values to calculate them in a proper priority, based on the
    // given operators.
    var values = [];
    // Keeps all the operators to calculate the values above, following the
    // proper priority.
    var operators = [];
    // Indicates if the next item is a value (not an operator).
    var expectingValue = true;
    for (var i = 0, iEnd = formula.length; i < iEnd; ++i) {
        var item = formula[i];
        if (FormulaProcessor_isOperator(item)) {
            if (expectingValue && item === '-') {
                // Split the negative values to be handled as a binary
                // operation if the next item is a value.
                values.push(0);
                operators.push('-');
                expectingValue = true;
            }
            else {
                // Perform if the higher precedence operator exist.
                while (operators.length &&
                    operatorPriority[operators[operators.length - 1]] >=
                        operatorPriority[item]) {
                    applyOperator(values, operators);
                }
                operators.push(item);
                expectingValue = true;
            }
            continue;
        }
        var value = void 0;
        // Assign the proper value, starting from the most common types.
        if (FormulaProcessor_isValue(item)) {
            value = item;
        }
        else if (FormulaProcessor_isReference(item)) {
            value = table ? getReferenceValue(item, table) : NaN;
        }
        else if (FormulaProcessor_isFunction(item)) {
            var result = processFunction(item,
                table);
            value = FormulaProcessor_isValue(result) ? result : NaN;
        }
        else if (FormulaProcessor_isFormula(item)) {
            value = processFormula(item, table);
        }
        if (typeof value !== 'undefined') {
            values.push(value);
            expectingValue = false;
        }
        else {
            return NaN;
        }
    }
    // Handle the remaining operators that weren't taken into consideration, due
    // to non-higher precedence.
    while (operators.length) {
        applyOperator(values, operators);
    }
    if (values.length !== 1) {
        return NaN;
    }
    return values[0];
}
/**
 * Process a function on the given table. If the arguments do not contain
 * references or ranges, then no table has to be provided.
 *
 * @private
 *
 * @param {Highcharts.FormulaFunction} formulaFunction
 * Formula function to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @param {Highcharts.FormulaReference} [reference]
 * Table cell reference to use for relative references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Result value (or values) of the process. `NaN` indicates an error.
 */
function processFunction(formulaFunction, table, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
reference // @todo
) {
    var processor = processorFunctions[formulaFunction.name];
    if (processor) {
        try {
            return processor(formulaFunction.args, table);
        }
        catch (_a) {
            return NaN;
        }
    }
    var error = new Error("Function \"".concat(formulaFunction.name, "\" not found."));
    error.name = 'FormulaProcessError';
    throw error;
}
/**
 * Registers a function for the FormulaProcessor.
 *
 * @param {string} name
 * Name of the function in spreadsheets notation with upper case.
 *
 * @param {Highcharts.FormulaFunction} processorFunction
 * ProcessorFunction for the FormulaProcessor. This is an object so that it
 * can take additional parameter for future validation routines.
 *
 * @return {boolean}
 * Return true, if the ProcessorFunction has been registered.
 */
function registerProcessorFunction(name, processorFunction) {
    return (processorFunctionNameRegExp.test(name) &&
        !processorFunctions[name] &&
        !!(processorFunctions[name] = processorFunction));
}
/**
 * Translates relative references and ranges in-place.
 *
 * @param {Highcharts.Formula} formula
 * Formula to translate references and ranges in.
 *
 * @param {number} [columnDelta=0]
 * Column delta to translate to. Negative translate back.
 *
 * @param {number} [rowDelta=0]
 * Row delta to translate to. Negative numbers translate back.
 *
 * @return {Highcharts.Formula}
 * Formula with translated reference and ranges. This formula is equal to the
 * first argument.
 */
function translateReferences(formula, columnDelta, rowDelta) {
    if (columnDelta === void 0) { columnDelta = 0; }
    if (rowDelta === void 0) { rowDelta = 0; }
    for (var i = 0, iEnd = formula.length, item = void 0; i < iEnd; ++i) {
        item = formula[i];
        if (Array.isArray(item)) {
            translateReferences(item, columnDelta, rowDelta);
        }
        else if (FormulaProcessor_isFunction(item)) {
            translateReferences(item.args, columnDelta, rowDelta);
        }
        else if (FormulaProcessor_isRange(item)) {
            if (item.beginColumnRelative) {
                item.beginColumn += columnDelta;
            }
            if (item.beginRowRelative) {
                item.beginRow += rowDelta;
            }
            if (item.endColumnRelative) {
                item.endColumn += columnDelta;
            }
            if (item.endRowRelative) {
                item.endRow += rowDelta;
            }
        }
        else if (FormulaProcessor_isReference(item)) {
            if (item.columnRelative) {
                item.column += columnDelta;
            }
            if (item.rowRelative) {
                item.row += rowDelta;
            }
        }
    }
    return formula;
}
/* *
 *
 *  Default Export
 *
 * */
var FormulaProcessor = {
    asNumber: FormulaProcessor_asNumber,
    getArgumentValue: getArgumentValue,
    getArgumentsValues: getArgumentsValues,
    getRangeValues: getRangeValues,
    getReferenceValue: getReferenceValue,
    processFormula: processFormula,
    processorFunctions: processorFunctions,
    registerProcessorFunction: registerProcessorFunction,
    translateReferences: translateReferences
};
/* harmony default export */ var Formula_FormulaProcessor = (FormulaProcessor);

;// ./code/es5/es-modules/Data/Formula/Functions/ABS.js
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


var ABS_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `ABS(value)` implementation. Returns positive numbers.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Array<number>}
 * Result value of the process.
 */
function ABS(args, table) {
    var value = ABS_getArgumentValue(args[0],
        table);
    switch (typeof value) {
        case 'number':
            return Math.abs(value);
        case 'object': {
            var values = [];
            for (var i = 0, iEnd = value.length, value2 = void 0; i < iEnd; ++i) {
                value2 = value[i];
                if (typeof value2 !== 'number') {
                    return NaN;
                }
                values.push(Math.abs(value2));
            }
            return values;
        }
        default:
            return NaN;
    }
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('ABS', ABS);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_ABS = ((/* unused pure expression or super */ null && (ABS)));

;// ./code/es5/es-modules/Data/Formula/Functions/AND.js
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


var AND_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `AND(...tests)` implementation. Returns `TRUE`, if all test
 * results are not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
function AND(args, table) {
    for (var i = 0, iEnd = args.length, value = void 0; i < iEnd; ++i) {
        value = AND_getArgumentValue(args[i], table);
        if (!value ||
            (typeof value === 'object' &&
                !AND(value, table))) {
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('AND', AND);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_AND = ((/* unused pure expression or super */ null && (AND)));

;// ./code/es5/es-modules/Data/Formula/Functions/AVERAGE.js
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


var AVERAGE_getArgumentsValues = Formula_FormulaProcessor.getArgumentsValues;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `AVERAGE(...values)` implementation. Calculates the average
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.AVERAGE
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function AVERAGE(args, table) {
    var values = AVERAGE_getArgumentsValues(args,
        table);
    var count = 0,
        result = 0;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                    result += value;
                }
                break;
            case 'object':
                for (var j = 0, jEnd = value.length, value2 = void 0; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        ++count;
                        result += value2;
                    }
                }
                break;
        }
    }
    return (count ? (result / count) : 0);
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('AVERAGE', AVERAGE);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_AVERAGE = ((/* unused pure expression or super */ null && (AVERAGE)));

;// ./code/es5/es-modules/Data/Formula/Functions/AVERAGEA.js
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


var AVERAGEA_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `AVERAGEA(...values)` implementation. Calculates the
 * average of the given values. Strings and FALSE are calculated as 0.
 *
 * @private
 * @function Formula.processorFunctions.AVERAGEA
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function AVERAGEA(args, table) {
    var count = 0,
        result = 0;
    for (var i = 0, iEnd = args.length, value = void 0; i < iEnd; ++i) {
        value = AVERAGEA_getArgumentValue(args[i], table);
        switch (typeof value) {
            case 'boolean':
                ++count;
                result += (value ? 1 : 0);
                continue;
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                    result += value;
                }
                continue;
            case 'string':
                ++count;
                continue;
            default:
                for (var j = 0, jEnd = value.length, value2 = void 0; j < jEnd; ++j) {
                    value2 = value[j];
                    switch (typeof value2) {
                        case 'boolean':
                            ++count;
                            result += (value2 ? 1 : 0);
                            continue;
                        case 'number':
                            if (!isNaN(value2)) {
                                ++count;
                                result += value2;
                            }
                            continue;
                        case 'string':
                            ++count;
                            continue;
                    }
                }
                continue;
        }
    }
    return (count ? (result / count) : 0);
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('AVERAGEA', AVERAGEA);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_AVERAGEA = ((/* unused pure expression or super */ null && (AVERAGEA)));

;// ./code/es5/es-modules/Data/Formula/Functions/COUNT.js
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


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `COUNT(...values)` implementation. Returns the count of
 * given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.COUNT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function COUNT(args, table) {
    var values = Formula_FormulaProcessor.getArgumentsValues(args,
        table);
    var count = 0;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                }
                break;
            case 'object':
                count += COUNT(value, table);
                break;
        }
    }
    return count;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('COUNT', COUNT);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_COUNT = ((/* unused pure expression or super */ null && (COUNT)));

;// ./code/es5/es-modules/Data/Formula/Functions/COUNTA.js
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


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `COUNTA(...values)` implementation. Returns the count of
 * given values that are not empty.
 *
 * @private
 * @function Formula.processorFunctions.COUNT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function COUNTA(args, table) {
    var values = Formula_FormulaProcessor.getArgumentsValues(args,
        table);
    var count = 0;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (isNaN(value)) {
                    continue;
                }
                break;
            case 'object':
                count += COUNTA(value, table);
                continue;
            case 'string':
                if (!value) {
                    continue;
                }
                break;
        }
        ++count;
    }
    return count;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('COUNTA', COUNTA);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_COUNTA = ((/* unused pure expression or super */ null && (COUNTA)));

;// ./code/es5/es-modules/Data/Formula/Functions/IF.js
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


var IF_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `IF(test, value1, value2)` implementation. Returns one of
 * the values based on the test result. `value1` will be returned, if the test
 * result is not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.IF
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Result value of the process.
 */
function IF(args, table) {
    return (IF_getArgumentValue(args[0], table) ?
        IF_getArgumentValue(args[1], table) :
        IF_getArgumentValue(args[2], table));
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('IF', IF);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_IF = ((/* unused pure expression or super */ null && (IF)));

;// ./code/es5/es-modules/Data/Formula/Functions/ISNA.js
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


var ISNA_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `ISNA(value)` implementation. Returns TRUE if value is not
 * a number.
 *
 * @private
 * @function Formula.processorFunctions.ISNA
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
function ISNA(args, table) {
    var value = ISNA_getArgumentValue(args[0],
        table);
    return (typeof value !== 'number' || isNaN(value));
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('ISNA', ISNA);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_ISNA = ((/* unused pure expression or super */ null && (ISNA)));

;// ./code/es5/es-modules/Data/Formula/Functions/MAX.js
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


var MAX_getArgumentsValues = Formula_FormulaProcessor.getArgumentsValues;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MAX(...values)` implementation. Calculates the largest
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.MAX
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MAX(args, table) {
    var values = MAX_getArgumentsValues(args,
        table);
    var result = Number.NEGATIVE_INFINITY;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (value > result) {
                    result = value;
                }
                break;
            case 'object':
                value = MAX(value);
                if (value > result) {
                    result = value;
                }
                break;
        }
    }
    return isFinite(result) ? result : 0;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MAX', MAX);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_MAX = ((/* unused pure expression or super */ null && (MAX)));

;// ./code/es5/es-modules/Data/Formula/Functions/MEDIAN.js
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


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MEDIAN(...values)` implementation. Calculates the median
 * average of the given values.
 *
 * @private
 * @function Formula.processorFunctions.MEDIAN
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function MEDIAN(args, table) {
    var median = [],
        values = Formula_FormulaProcessor.getArgumentsValues(args,
        table);
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    median.push(value);
                }
                break;
            case 'object':
                for (var j = 0, jEnd = value.length, value2 = void 0; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        median.push(value2);
                    }
                }
                break;
        }
    }
    var count = median.length;
    if (!count) {
        return NaN;
    }
    var half = Math.floor(count / 2); // Floor because index starts at 0
        return (count % 2 ?
            median[half] : // Odd
            (median[half - 1] + median[half]) / 2 // Even
        );
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MEDIAN', MEDIAN);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_MEDIAN = ((/* unused pure expression or super */ null && (MEDIAN)));

;// ./code/es5/es-modules/Data/Formula/Functions/MIN.js
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


var MIN_getArgumentsValues = Formula_FormulaProcessor.getArgumentsValues;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MIN(...values)` implementation. Calculates the lowest
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.MIN
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MIN(args, table) {
    var values = MIN_getArgumentsValues(args,
        table);
    var result = Number.POSITIVE_INFINITY;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (value < result) {
                    result = value;
                }
                break;
            case 'object':
                value = MIN(value);
                if (value < result) {
                    result = value;
                }
                break;
        }
    }
    return isFinite(result) ? result : 0;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MIN', MIN);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_MIN = ((/* unused pure expression or super */ null && (MIN)));

;// ./code/es5/es-modules/Data/Formula/Functions/MOD.js
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


var MOD_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MOD(value1, value2)` implementation. Calculates the rest
 * of the division with the given values.
 *
 * @private
 * @function Formula.processorFunctions.MOD
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MOD(args, table) {
    var value1 = MOD_getArgumentValue(args[0],
        table),
        value2 = MOD_getArgumentValue(args[1],
        table);
    if (typeof value1 === 'object') {
        value1 = value1[0];
    }
    if (typeof value2 === 'object') {
        value2 = value2[0];
    }
    if (typeof value1 !== 'number' ||
        typeof value2 !== 'number' ||
        value2 === 0) {
        return NaN;
    }
    return value1 % value2;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MOD', MOD);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_MOD = ((/* unused pure expression or super */ null && (MOD)));

;// ./code/es5/es-modules/Data/Formula/Functions/MODE.js
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


/* *
 *
 *  Functions
 *
 * */
/**
 * Creates the mode map of the given arguments.
 *
 * @private
 * @function Formula.processorFunctions.MULT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function getModeMap(args, table) {
    var modeMap = {},
        values = Formula_FormulaProcessor.getArgumentsValues(args,
        table);
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    modeMap[value] = (modeMap[value] || 0) + 1;
                }
                break;
            case 'object':
                for (var j = 0, jEnd = value.length, value2 = void 0; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        modeMap[value2] = (modeMap[value2] || 0) + 1;
                    }
                }
                break;
        }
    }
    return modeMap;
}
/**
 * Processor for the `MODE.MULT(...values)` implementation. Calculates the most
 * frequent values of the give values.
 *
 * @private
 * @function Formula.processorFunctions.MULT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number|Array<number>}
 * Result value of the process.
 */
function MULT(args, table) {
    var modeMap = getModeMap(args,
        table),
        keys = Object.keys(modeMap);
    if (!keys.length) {
        return NaN;
    }
    var modeKeys = [parseFloat(keys[0])],
        modeCount = modeMap[keys[0]];
    for (var i = 1, iEnd = keys.length, key = void 0, count = void 0; i < iEnd; ++i) {
        key = keys[i];
        count = modeMap[key];
        if (modeCount < count) {
            modeKeys = [parseFloat(key)];
            modeCount = count;
        }
        else if (modeCount === count) {
            modeKeys.push(parseFloat(key));
        }
    }
    return modeCount > 1 ? modeKeys : NaN;
}
/**
 * Processor for the `MODE.SNGL(...values)` implementation. Calculates the
 * lowest most frequent value of the give values.
 *
 * @private
 * @function Formula.processorFunctions['MODE.SNGL']
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function SNGL(args, table) {
    var modeMap = getModeMap(args,
        table),
        keys = Object.keys(modeMap);
    if (!keys.length) {
        return NaN;
    }
    var modeKey = parseFloat(keys[0]),
        modeCount = modeMap[keys[0]];
    for (var i = 1, iEnd = keys.length, key = void 0, keyValue = void 0, count = void 0; i < iEnd; ++i) {
        key = keys[i];
        count = modeMap[key];
        if (modeCount < count) {
            modeKey = parseFloat(key);
            modeCount = count;
        }
        else if (modeCount === count) {
            keyValue = parseFloat(key);
            if (modeKey > keyValue) {
                modeKey = keyValue;
                modeCount = count;
            }
        }
    }
    return modeCount > 1 ? modeKey : NaN;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MODE', SNGL);
Formula_FormulaProcessor.registerProcessorFunction('MODE.MULT', MULT);
Formula_FormulaProcessor.registerProcessorFunction('MODE.SNGL', SNGL);
/* *
 *
 *  Default Export
 *
 * */
var MODE = {
    MULT: MULT,
    SNGL: SNGL
};
/* harmony default export */ var Functions_MODE = ((/* unused pure expression or super */ null && (MODE)));

;// ./code/es5/es-modules/Data/Formula/Functions/NOT.js
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


var NOT_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `NOT(value)` implementation. Returns the opposite test
 * result.
 *
 * @private
 * @function Formula.processorFunctions.NOT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean|number}
 * Result value of the process.
 */
function NOT(args, table) {
    var value = NOT_getArgumentValue(args[0],
        table);
    if (typeof value === 'object') {
        value = value[0];
    }
    switch (typeof value) {
        case 'boolean':
        case 'number':
            return !value;
    }
    return NaN;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('NOT', NOT);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_NOT = ((/* unused pure expression or super */ null && (NOT)));

;// ./code/es5/es-modules/Data/Formula/Functions/OR.js
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


var OR_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `OR(...tests)` implementation. Returns `TRUE`, if one test
 * result is not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
function OR(args, table) {
    for (var i = 0, iEnd = args.length, value = void 0; i < iEnd; ++i) {
        value = OR_getArgumentValue(args[i], table);
        if (typeof value === 'object') {
            if (OR(value, table)) {
                return true;
            }
        }
        else if (value) {
            return true;
        }
    }
    return false;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('OR', OR);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_OR = ((/* unused pure expression or super */ null && (OR)));

;// ./code/es5/es-modules/Data/Formula/Functions/PRODUCT.js
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


var PRODUCT_getArgumentsValues = Formula_FormulaProcessor.getArgumentsValues;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `PRODUCT(...values)` implementation. Calculates the product
 * of the given values.
 *
 * @private
 * @function Formula.processorFunctions.PRODUCT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function PRODUCT(args, table) {
    var values = PRODUCT_getArgumentsValues(args,
        table);
    var result = 1,
        calculated = false;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    calculated = true;
                    result *= value;
                }
                break;
            case 'object':
                calculated = true;
                result *= PRODUCT(value, table);
                break;
        }
    }
    return (calculated ? result : 0);
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('PRODUCT', PRODUCT);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_PRODUCT = ((/* unused pure expression or super */ null && (PRODUCT)));

;// ./code/es5/es-modules/Data/Formula/Functions/SUM.js
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


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `SUM(...values)` implementation. Calculates the sum of the
 * given values.
 *
 * @private
 * @function Formula.processorFunctions.SUM
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function SUM(args, table) {
    var values = Formula_FormulaProcessor.getArgumentsValues(args,
        table);
    var result = 0;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    result += value;
                }
                break;
            case 'object':
                result += SUM(value, table);
                break;
        }
    }
    return result;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('SUM', SUM); // 🐝
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_SUM = ((/* unused pure expression or super */ null && (SUM)));

;// ./code/es5/es-modules/Data/Formula/Functions/XOR.js
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


var XOR_getArgumentValue = Formula_FormulaProcessor.getArgumentValue;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `XOR(...tests)` implementation. Returns `TRUE`, if at least
 * one of the given tests differs in result of other tests.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean|number}
 * Result value of the process.
 */
function XOR(args, table) {
    for (var i = 0, iEnd = args.length, lastValue = void 0, value = void 0; i < iEnd; ++i) {
        value = XOR_getArgumentValue(args[i], table);
        switch (typeof value) {
            case 'boolean':
            case 'number':
                if (typeof lastValue === 'undefined') {
                    lastValue = !!value;
                }
                else if (!!value !== lastValue) {
                    return true;
                }
                break;
            case 'object':
                for (var j = 0, jEnd = value.length, value2 = void 0; j < jEnd; ++j) {
                    value2 = value[j];
                    switch (typeof value2) {
                        case 'boolean':
                        case 'number':
                            if (typeof lastValue === 'undefined') {
                                lastValue = !!value2;
                            }
                            else if (!!value2 !== lastValue) {
                                return true;
                            }
                            break;
                    }
                }
                break;
        }
    }
    return false;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('XOR', XOR);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Functions_XOR = ((/* unused pure expression or super */ null && (XOR)));

;// ./code/es5/es-modules/Data/Formula/Formula.js
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

var Formula_assign = (undefined && undefined.__assign) || function () {
    Formula_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Formula_assign.apply(this, arguments);
};
/* *
 *
 *  Imports
 *
 * */





















/* *
 *
 *  Default Export
 *
 * */
/**
 * Formula engine to make use of spreadsheet formula strings.
 * @internal
 */
var Formula = Formula_assign(Formula_assign(Formula_assign({}, Formula_FormulaParser), Formula_FormulaProcessor), FormulaTypes);
/* harmony default export */ var Formula_Formula = (Formula);

;// ./code/es5/es-modules/Data/Converters/CSVConverter.js
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

var CSVConverter_extends = (undefined && undefined.__extends) || (function () {
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
var CSVConverter_assign = (undefined && undefined.__assign) || function () {
    CSVConverter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CSVConverter_assign.apply(this, arguments);
};



/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming CSV to a table.
 *
 * @private
 */
var CSVConverter = /** @class */ (function (_super) {
    CSVConverter_extends(CSVConverter, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the CSV parser.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the CSV parser.
     */
    function CSVConverter(options) {
        var _this = this;
        var mergedOptions = merge(CSVConverter.defaultOptions,
            options);
        _this = _super.call(this, mergedOptions) || this;
        /* *
         *
         *  Properties
         *
         * */
        _this.headers = [];
        _this.dataTypes = [];
        _this.options = mergedOptions;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Parses the CSV string into a DataTable column collection.
     * Handles line and item delimiters, optional header row, and
     * applies pre-processing if a beforeParse callback is provided.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the parser.
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     * @return {DataTableColumnCollection}
     * The parsed column collection.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     */
    CSVConverter.prototype.parse = function (options, eventDetail) {
        var converter = this,
            dataTypes = converter.dataTypes,
            parserOptions = merge(this.options,
            options),
            beforeParse = parserOptions.beforeParse,
            lineDelimiter = parserOptions.lineDelimiter,
            firstRowAsNames = parserOptions.firstRowAsNames,
            itemDelimiter = parserOptions.itemDelimiter;
        var lines,
            rowIt = 0,
            csv = parserOptions.csv,
            startRow = parserOptions.startRow,
            endRow = parserOptions.endRow,
            column;
        var columnsArray = [];
        converter.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        if (csv && beforeParse) {
            csv = beforeParse(csv);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n|\r/g, '\n') // Windows | Mac
                .split(lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (!itemDelimiter) {
                converter.guessedItemDelimiter =
                    converter.guessDelimiter(lines);
            }
            // If the first row contain names, add them to the
            // headers array and skip the row.
            if (firstRowAsNames) {
                var headers = lines[0].split(itemDelimiter || converter.guessedItemDelimiter || ',');
                // Remove ""s from the headers
                for (var i = 0; i < headers.length; i++) {
                    headers[i] = headers[i].trim().replace(/^["']|["']$/g, '');
                }
                converter.headers = headers;
                startRow++;
            }
            var offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    converter.parseCSVRow(columnsArray, lines[rowIt], rowIt - startRow - offset);
                }
            }
            if (dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' && // Format is a string date
                !converter.options.dateFormat) {
                converter.deduceDateFormat(columnsArray[0], null, true);
            }
            // Guess types.
            for (var i = 0, iEnd = columnsArray.length; i < iEnd; ++i) {
                column = columnsArray[i];
                for (var j = 0, jEnd = column.length; j < jEnd; ++j) {
                    if (column[j] && typeof column[j] === 'string') {
                        var cellValue = converter.convertByType(column[j]);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        columnsArray[i][j] = cellValue;
                    }
                }
            }
        }
        // Normalize columns to same length to avoid truncation.
        columnsArray.forEach(function (col) {
            col.length = Math.max.apply(Math, columnsArray.map(function (c) { return c.length; }));
        });
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    };
    /**
     * Parses a single CSV row string into columns, handling delimiters,
     * quoted values, data type inference, and column range selection.
     */
    CSVConverter.prototype.parseCSVRow = function (columns, columnStr, rowNumber) {
        var converter = this,
            dataTypes = converter.dataTypes,
            _a = converter.options,
            startColumn = _a.startColumn,
            endColumn = _a.endColumn,
            itemDelimiter = (converter.options.itemDelimiter ||
                converter.guessedItemDelimiter);
        var decimalPoint = converter.options.decimalPoint;
        if (!decimalPoint || decimalPoint === itemDelimiter) {
            decimalPoint = converter.guessedDecimalPoint || '.';
        }
        var i = 0, c = '', token = '', actualColumn = 0, column = 0;
        var read = function (j) {
                c = columnStr[j];
        };
        var pushType = function (type) {
                if (dataTypes.length < column + 1) {
                    dataTypes.push([type]);
            }
            if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                dataTypes[column].push(type);
            }
        };
        var push = function () {
                if (startColumn > actualColumn || actualColumn > endColumn) {
                    // Skip this column, but increment the column count (#7272)
                    ++actualColumn;
                token = '';
                return;
            }
            // Save the type of the token.
            if (typeof token === 'string') {
                var parsedNumber = parseFloat(token);
                if (!isNaN(parsedNumber) && isFinite(Number(token))) {
                    token = parsedNumber;
                    pushType('number');
                }
                else if (!isNaN(Date.parse(token))) {
                    token = token.replace(/\//g, '-');
                    pushType('date');
                }
                else {
                    pushType('string');
                }
            }
            else {
                pushType('number');
            }
            if (columns.length < column + 1) {
                columns.push([]);
            }
            // Try to apply the decimal point, and check if the token then is a
            // number. If not, reapply the initial value
            if (typeof token !== 'number' &&
                Converters_DataConverterUtils.guessType(token, converter) !== 'number' &&
                decimalPoint) {
                var initialValue = token;
                token = token.replace(decimalPoint, '.');
                if (Converters_DataConverterUtils.guessType(token, converter) !== 'number') {
                    token = initialValue;
                }
            }
            columns[column][rowNumber] = token;
            token = '';
            ++column;
            ++actualColumn;
        };
        if (!columnStr.trim().length) {
            return;
        }
        if (columnStr.trim()[0] === '#') {
            return;
        }
        for (; i < columnStr.length; i++) {
            read(i);
            if (c === '#') {
                // If there are hexvalues remaining (#13283)
                if (!/^#[A-F\d]{3,3}|[A-F\d]{6,6}/i.test(columnStr.substring(i))) {
                    // The rest of the row is a comment
                    push();
                    return;
                }
            }
            // Quoted string
            if (c === '"') {
                read(++i);
                while (i < columnStr.length) {
                    if (c === '"') {
                        break;
                    }
                    token += c;
                    read(++i);
                }
            }
            else if (c === itemDelimiter) {
                push();
                // Actual column data
            }
            else {
                token += c;
            }
        }
        push();
    };
    /**
     * Internal method that guesses the delimiter from the first
     * 13 lines of the CSV
     * @param {string[]} lines
     * The CSV, split into lines
     */
    CSVConverter.prototype.guessDelimiter = function (lines) {
        var points = 0,
            commas = 0,
            guessed;
        var potDelimiters = {
                ',': 0,
                ';': 0,
                '\t': 0
            }, linesCount = lines.length;
        for (var i = 0; i < linesCount; i++) {
            var inStr = false,
                c = void 0,
                cn = void 0,
                cl = void 0,
                token = '';
            // We should be able to detect dateFormats within 13 rows
            if (i > 13) {
                break;
            }
            var columnStr = lines[i];
            for (var j = 0; j < columnStr.length; j++) {
                c = columnStr[j];
                cn = columnStr[j + 1];
                cl = columnStr[j - 1];
                if (c === '#') {
                    // Skip the rest of the line - it's a comment
                    break;
                }
                if (c === '"') {
                    if (inStr) {
                        if (cl !== '"' && cn !== '"') {
                            while (cn === ' ' && j < columnStr.length) {
                                cn = columnStr[++j];
                            }
                            // After parsing a string, the next non-blank
                            // should be a delimiter if the CSV is properly
                            // formed.
                            if (typeof potDelimiters[cn] !== 'undefined') {
                                potDelimiters[cn]++;
                            }
                            inStr = false;
                        }
                    }
                    else {
                        inStr = true;
                    }
                }
                else if (typeof potDelimiters[c] !== 'undefined') {
                    token = token.trim();
                    if (!isNaN(Date.parse(token))) {
                        potDelimiters[c]++;
                    }
                    else if (isNaN(Number(token)) ||
                        !isFinite(Number(token))) {
                        potDelimiters[c]++;
                    }
                    token = '';
                }
                else {
                    token += c;
                }
                if (c === ',') {
                    commas++;
                }
                if (c === '.') {
                    points++;
                }
            }
        }
        // Count the potential delimiters.
        // This could be improved by checking if the number of delimiters
        // equals the number of columns - 1
        if (potDelimiters[';'] > potDelimiters[',']) {
            guessed = ';';
        }
        else if (potDelimiters[','] > potDelimiters[';']) {
            guessed = ',';
        }
        else {
            // No good guess could be made..
            guessed = ',';
        }
        // Try to deduce the decimal point if it's not explicitly set.
        // If both commas or points is > 0 there is likely an issue
        if (points > commas) {
            this.guessedDecimalPoint = '.';
        }
        else {
            this.guessedDecimalPoint = ',';
        }
        return guessed;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    CSVConverter.defaultOptions = CSVConverter_assign(CSVConverter_assign({}, Converters_DataConverter.defaultOptions), { lineDelimiter: '\n', startColumn: 0, endColumn: Number.MAX_VALUE, startRow: 0, endRow: Number.MAX_VALUE });
    return CSVConverter;
}(Converters_DataConverter));
Converters_DataConverter.registerType('CSV', CSVConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Converters_CSVConverter = (CSVConverter);

;// ./code/es5/es-modules/Data/Connectors/CSVConnector.js
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

var CSVConnector_extends = (undefined && undefined.__extends) || (function () {
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
    CSVConnector_extends(CSVConnector, _super);
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
        var mergedOptions = merge(CSVConnector.defaultOptions,
            options);
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
        var csv = options.csv,
            csvURL = options.csvURL,
            dataTables = options.dataTables,
            decimalPoint = options.decimalPoint;
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
                    var _a = tableOptions || {},
                        _b = _a.firstRowAsNames,
                        firstRowAsNames = _b === void 0 ? options.firstRowAsNames : _b,
                        _c = _a.beforeParse,
                        beforeParse = _c === void 0 ? options.beforeParse : _c;
                    var converterOptions = {
                            decimalPoint: decimalPoint,
                            firstRowAsNames: firstRowAsNames,
                            beforeParse: beforeParse
                        };
                    return new Converters_CSVConverter(merge(options, converterOptions));
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
}(Connectors_DataConnector));
/* *
 *
 *  Registry
 *
 * */
Connectors_DataConnector.registerType('CSV', CSVConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Connectors_CSVConnector = ((/* unused pure expression or super */ null && (CSVConnector)));

;// ./code/es5/es-modules/Data/Converters/JSONConverter.js
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

var JSONConverter_extends = (undefined && undefined.__extends) || (function () {
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
var JSONConverter_assign = (undefined && undefined.__assign) || function () {
    JSONConverter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return JSONConverter_assign.apply(this, arguments);
};




/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
var JSONConverter = /** @class */ (function (_super) {
    JSONConverter_extends(JSONConverter, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {Partial<JSONConverterOptions>} [options]
     * Options for the JSON parser.
     */
    function JSONConverter(options) {
        var _this = this;
        var mergedOptions = merge(JSONConverter.defaultOptions,
            options);
        _this = _super.call(this, mergedOptions) || this;
        /* *
         *
         *  Properties
         *
         * */
        _this.headerColumnIds = [];
        _this.headers = [];
        _this.options = mergedOptions;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates parsing of JSON structure.
     *
     * @param {Partial<JSONConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    JSONConverter.prototype.parse = function (options, eventDetail) {
        var converter = this;
        options = merge(converter.options, options);
        var beforeParse = options.beforeParse,
            orientation = options.orientation,
            firstRowAsNames = options.firstRowAsNames,
            columnIds = options.columnIds;
        var data = options.data;
        if (!data) {
            return {};
        }
        converter.headers = [];
        var columnsArray = [];
        converter.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        if (beforeParse) {
            data = beforeParse(data);
        }
        data = data.slice();
        if (orientation === 'columns') {
            this.parseColumnsOrientation(columnsArray, data, firstRowAsNames, columnIds);
        }
        else if (orientation === 'rows') {
            this.parseRowsOrientation(columnsArray, data, firstRowAsNames, columnIds);
        }
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    };
    /**
     * Helper for parsing data in 'columns' orientation.
     *
     * @param {DataTableBasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {void}
     */
    JSONConverter.prototype.parseColumnsOrientation = function (columnsArray, data, firstRowAsNames, columnIds) {
        var converter = this;
        for (var i = 0, iEnd = data.length; i < iEnd; i++) {
            var item = data[i];
            if (!(Array.isArray(item))) {
                return;
            }
            if (Array.isArray(converter.headers)) {
                if (firstRowAsNames) {
                    converter.headers.push("".concat(item.shift()));
                }
                else if (columnIds && Array.isArray(columnIds)) {
                    converter.headers.push(columnIds[i]);
                }
                columnsArray.push(item);
            }
            else {
                (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('JSONConverter: Invalid `columnIds` option.', false);
            }
        }
    };
    /**
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {DataTableBasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {DataTableBasicColumn[]}
     * Parsed columns.
     */
    JSONConverter.prototype.parseRowsOrientation = function (columnsArray, data, firstRowAsNames, columnIds) {
        var converter = this;
        if (firstRowAsNames) {
            converter.headers = data.shift();
        }
        else if (columnIds) {
            converter.headerColumnIds = columnIds;
        }
        for (var rowIndex = 0, iEnd = data.length; rowIndex < iEnd; rowIndex++) {
            var row = data[rowIndex];
            if (!isArray(row)) {
                row = this.convertItemToRow(row, columnIds);
            }
            for (var columnIndex = 0, jEnd = row.length; columnIndex < jEnd; columnIndex++) {
                if (columnsArray.length < columnIndex + 1) {
                    columnsArray.push([]);
                }
                columnsArray[columnIndex].push(row[columnIndex]);
                // Create headers only once.
                if (!firstRowAsNames && rowIndex === 0) {
                    if (Array.isArray(converter.headerColumnIds)) {
                        converter.headers.push(converter.headerColumnIds[columnIndex] ||
                            columnIndex.toString());
                    }
                    else {
                        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('JSONConverter: Invalid `columnIds` option.', false);
                    }
                }
            }
        }
    };
    /**
     * Extracts a row from an object, using columnIds if provided.
     *
     * @param {Record<string, string|number>} [rowObj]
     * Set of props.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Array<string | number>}
     * Row converted to array.
     */
    JSONConverter.prototype.convertItemToRow = function (rowObj, columnIds) {
        var converter = this;
        if (columnIds && !(Array.isArray(columnIds))) {
            var newRow_1 = [];
            objectEach(columnIds, function (arrayWithPath, name) {
                newRow_1.push(arrayWithPath.reduce(function (acc, key) {
                    return acc[key];
                }, rowObj));
                if (converter.headers.indexOf(name) < 0) {
                    converter.headers.push(name);
                }
            });
            return newRow_1;
        }
        converter.headerColumnIds = Object.keys(rowObj);
        return Object.values(rowObj);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    JSONConverter.defaultOptions = JSONConverter_assign(JSONConverter_assign({}, Converters_DataConverter.defaultOptions), { orientation: 'rows' });
    return JSONConverter;
}(Converters_DataConverter));
Converters_DataConverter.registerType('JSON', JSONConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Converters_JSONConverter = (JSONConverter);

;// ./code/es5/es-modules/Data/Connectors/JSONConnector.js
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

var JSONConnector_extends = (undefined && undefined.__extends) || (function () {
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
var JSONConnector_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var JSONConnector_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
    JSONConnector_extends(JSONConnector, _super);
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
        var mergedOptions = merge(JSONConnector.defaultOptions,
            options);
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
        var data = options.data,
            dataUrl = options.dataUrl,
            dataTables = options.dataTables;
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
            .then(function (data) { return JSONConnector_awaiter(_this, void 0, void 0, function () {
            return JSONConnector_generator(this, function (_a) {
                if (data) {
                    this.initConverters(data, function (key) {
                        var tableOptions = dataTables === null || dataTables === void 0 ? void 0 : dataTables.find(function (dataTable) { return dataTable.key === key; });
                        // The data table options takes precedence over the
                        // connector options.
                        var _a = tableOptions || {},
                            _b = _a.columnIds,
                            columnIds = _b === void 0 ? options.columnIds : _b,
                            _c = _a.firstRowAsNames,
                            firstRowAsNames = _c === void 0 ? options.firstRowAsNames : _c,
                            _d = _a.orientation,
                            orientation = _d === void 0 ? options.orientation : _d,
                            _e = _a.beforeParse,
                            beforeParse = _e === void 0 ? options.beforeParse : _e;
                        var converterOptions = {
                                data: data,
                                columnIds: columnIds,
                                firstRowAsNames: firstRowAsNames,
                                orientation: orientation,
                                beforeParse: beforeParse
                            };
                        return new Converters_JSONConverter(converterOptions);
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
}(Connectors_DataConnector));
/* *
 *
 *  Registry
 *
 * */
Connectors_DataConnector.registerType('JSON', JSONConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Connectors_JSONConnector = ((/* unused pure expression or super */ null && (JSONConnector)));

;// ./code/es5/es-modules/Data/Converters/GoogleSheetsConverter.js
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
 *  - Kamil Kubik
 *
 * */

var GoogleSheetsConverter_extends = (undefined && undefined.__extends) || (function () {
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
var GoogleSheetsConverter_assign = (undefined && undefined.__assign) || function () {
    GoogleSheetsConverter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GoogleSheetsConverter_assign.apply(this, arguments);
};




/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an Google Sheets to a table.
 *
 * @private
 */
var GoogleSheetsConverter = /** @class */ (function (_super) {
    GoogleSheetsConverter_extends(GoogleSheetsConverter, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the GoogleSheetsConverter.
     *
     * @param {Partial<GoogleSheetsConverterOptions>} [options]
     * Options for the GoogleSheetsConverter.
     */
    function GoogleSheetsConverter(options) {
        var _this = this;
        var mergedOptions = merge(GoogleSheetsConverter.defaultOptions,
            options);
        _this = _super.call(this, mergedOptions) || this;
        _this.header = [];
        _this.options = mergedOptions;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates the parsing of the Google Sheet
     *
     * @param {Partial<GoogleSheetsConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    GoogleSheetsConverter.prototype.parse = function (options, eventDetail) {
        var _a;
        var converter = this,
            parseOptions = merge(converter.options,
            options);
        var columnsArray = (((_a = parseOptions.json) === null || _a === void 0 ? void 0 : _a.values) || []).map(function (column) { return column.slice(); });
        if (columnsArray.length === 0) {
            return {};
        }
        converter.header = [];
        converter.emit({
            type: 'parse',
            columns: [],
            detail: eventDetail,
            headers: converter.header
        });
        // If beforeParse is defined, use it to modify the data
        var beforeParse = parseOptions.beforeParse,
            json = parseOptions.json;
        if (beforeParse && json) {
            columnsArray = beforeParse(json.values);
        }
        var column;
        for (var i = 0, iEnd = columnsArray.length; i < iEnd; i++) {
            column = columnsArray[i];
            converter.header[i] = (parseOptions.firstRowAsNames ?
                "".concat(column.shift()) :
                (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)());
            for (var j = 0, jEnd = column.length; j < jEnd; ++j) {
                var cellValue = column[j];
                if (isDateObject(cellValue)) {
                    cellValue = cellValue.getTime();
                }
                columnsArray[i][j] = cellValue;
            }
        }
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.header
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.header);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    GoogleSheetsConverter.defaultOptions = GoogleSheetsConverter_assign({}, Converters_DataConverter.defaultOptions);
    return GoogleSheetsConverter;
}(Converters_DataConverter));
Converters_DataConverter.registerType('GoogleSheets', GoogleSheetsConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Converters_GoogleSheetsConverter = (GoogleSheetsConverter);
/**
 * Check if a value is a Date object
 *
 * @param {unknown} value to verify
 * @return {boolean}
 * True if the value is a Date object, false otherwise.
 */
function isDateObject(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

;// ./code/es5/es-modules/Data/Connectors/GoogleSheetsConnector.js
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

var GoogleSheetsConnector_extends = (undefined && undefined.__extends) || (function () {
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
    GoogleSheetsConnector_extends(GoogleSheetsConnector, _super);
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
        var mergedOptions = merge(GoogleSheetsConnector.defaultOptions,
            options);
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
        var dataRefreshRate = options.dataRefreshRate,
            enablePolling = options.enablePolling,
            googleAPIKey = options.googleAPIKey,
            googleSpreadsheetKey = options.googleSpreadsheetKey,
            dataTables = options.dataTables;
        var url = buildFetchURL(googleAPIKey,
            googleSpreadsheetKey,
            options);
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
                var _a = tableOptions || {},
                    _b = _a.firstRowAsNames,
                    firstRowAsNames = _b === void 0 ? options.firstRowAsNames : _b,
                    _c = _a.beforeParse,
                    beforeParse = _c === void 0 ? options.beforeParse : _c;
                var converterOptions = {
                        firstRowAsNames: firstRowAsNames,
                        beforeParse: beforeParse
                    };
                return new Converters_GoogleSheetsConverter(converterOptions);
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
}(Connectors_DataConnector));
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
function buildFetchURL(apiKey, sheetKey, options) {
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
function buildQueryRange(options) {
    if (options === void 0) { options = {}; }
    var endColumn = options.endColumn,
        endRow = options.endRow,
        googleSpreadsheetRange = options.googleSpreadsheetRange,
        startColumn = options.startColumn,
        startRow = options.startRow;
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
Connectors_DataConnector.registerType('GoogleSheets', GoogleSheetsConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Connectors_GoogleSheetsConnector = ((/* unused pure expression or super */ null && (GoogleSheetsConnector)));

;// ./code/es5/es-modules/Data/Converters/HTMLTableConverter.js
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
 *  - Kamil Kubik
 *
 * */

var HTMLTableConverter_extends = (undefined && undefined.__extends) || (function () {
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
var HTMLTableConverter_assign = (undefined && undefined.__assign) || function () {
    HTMLTableConverter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return HTMLTableConverter_assign.apply(this, arguments);
};



/* *
 *
 *  Functions
 *
 * */
/**
 * Row equal
 */
function isRowEqual(row1, row2) {
    var i = row1.length;
    if (row2.length === i) {
        while (--i) {
            if (row1[i] !== row2[i]) {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
}
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an HTML table to a table.
 *
 * @private
 */
var HTMLTableConverter = /** @class */ (function (_super) {
    HTMLTableConverter_extends(HTMLTableConverter, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the HTMLTableConverter.
     *
     * @param {Partial<HTMLTableConverterOptions>} [options]
     * Options for the HTMLTableConverter.
     */
    function HTMLTableConverter(options) {
        var _this = this;
        var mergedOptions = merge(HTMLTableConverter.defaultOptions,
            options);
        _this = _super.call(this, mergedOptions) || this;
        _this.headers = [];
        _this.options = mergedOptions;
        if (mergedOptions.tableElement) {
            _this.tableElement = mergedOptions.tableElement;
            _this.tableElementID = mergedOptions.tableElement.id;
        }
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Exports the dataconnector as an HTML string, using the options
     * provided on import unless other options are provided.
     *
     * @param {DataConnector} connector
     * Connector instance to export from.
     *
     * @param {HTMLTableConnector.ExportOptions} [options]
     * Options that override default or existing export options.
     *
     * @return {string}
     * HTML from the current dataTable.
     */
    HTMLTableConverter.prototype.export = function (connector, options) {
        if (options === void 0) { options = this.options; }
        var exportNames = (options.firstRowAsNames !== false),
            useMultiLevelHeaders = options.useMultiLevelHeaders;
        var columns = connector.getSortedColumns(),
            columnIds = Object.keys(columns),
            htmlRows = [],
            columnsCount = columnIds.length;
        var rowArray = [];
        var tableHead = '';
        // Add the names as the first row if they should be exported
        if (exportNames) {
            var subcategories = [];
            // If using multilevel headers, the first value
            // of each column is a subcategory
            if (useMultiLevelHeaders) {
                for (var _i = 0, columnIds_1 = columnIds; _i < columnIds_1.length; _i++) {
                    var columnId = columnIds_1[_i];
                    var column = columns[columnId];
                    if (!Array.isArray(column)) {
                        // Convert to conventional array from typed array
                        // if needed
                        column = Array.from(column);
                    }
                    var subhead = (column.shift() || '').toString();
                    columns[columnId] = column;
                    subcategories.push(subhead);
                }
                tableHead = this.getTableHeaderHTML(columnIds, subcategories, options);
            }
            else {
                tableHead = this.getTableHeaderHTML(void 0, columnIds, options);
            }
        }
        for (var columnIndex = 0; columnIndex < columnsCount; columnIndex++) {
            var columnId = columnIds[columnIndex],
                column = columns[columnId],
                columnLength = column.length;
            for (var rowIndex = 0; rowIndex < columnLength; rowIndex++) {
                var cellValue = column[rowIndex];
                if (!rowArray[rowIndex]) {
                    rowArray[rowIndex] = [];
                }
                if (!(typeof cellValue === 'string' ||
                    typeof cellValue === 'number' ||
                    typeof cellValue === 'undefined')) {
                    cellValue = (cellValue || '').toString();
                }
                rowArray[rowIndex][columnIndex] = this.getCellHTMLFromValue(columnIndex ? 'td' : 'th', null, columnIndex ? '' : 'scope="row"', cellValue);
                // On the final column, push the row to the array
                if (columnIndex === columnsCount - 1) {
                    htmlRows.push('<tr>' +
                        rowArray[rowIndex].join('') +
                        '</tr>');
                }
            }
        }
        var caption = '';
        // Add table caption
        // Current exportdata falls back to chart title
        // but that should probably be handled elsewhere?
        if (options.tableCaption) {
            caption = '<caption class="highcharts-table-caption">' +
                options.tableCaption +
                '</caption>';
        }
        return ('<table>' +
            caption +
            tableHead +
            '<tbody>' +
            htmlRows.join('') +
            '</tbody>' +
            '</table>');
    };
    /**
     * Get table cell markup from row data.
     */
    HTMLTableConverter.prototype.getCellHTMLFromValue = function (tag, classes, attrs, value, decimalPoint) {
        var val = value,
            className = 'text' + (classes ? ' ' + classes : '');
        // Convert to string if number
        if (typeof val === 'number') {
            val = val.toString();
            if (decimalPoint === ',') {
                val = val.replace('.', decimalPoint);
            }
            className = 'number';
        }
        else if (!value) {
            val = '';
            className = 'empty';
        }
        return '<' + tag + (attrs ? ' ' + attrs : '') +
            ' class="' + className + '">' +
            val + '</' + tag + '>';
    };
    /**
     * Get table header markup from row data.
     */
    HTMLTableConverter.prototype.getTableHeaderHTML = function (topheaders, subheaders, options) {
        if (topheaders === void 0) { topheaders = []; }
        if (subheaders === void 0) { subheaders = []; }
        if (options === void 0) { options = this.options; }
        var useMultiLevelHeaders = options.useMultiLevelHeaders,
            useRowspanHeaders = options.useRowspanHeaders;
        var html = '<thead>',
            i = 0,
            len = subheaders && subheaders.length,
            next,
            cur,
            curColspan = 0,
            rowspan;
        // Clean up multiple table headers. Exporting.getDataRows() returns two
        // levels of headers when using multilevel, not merged. We need to
        // merge identical headers, remove redundant headers, and keep it
        // all marked up nicely.
        if (useMultiLevelHeaders &&
            topheaders &&
            subheaders &&
            !isRowEqual(topheaders, subheaders)) {
            html += '<tr>';
            for (; i < len; ++i) {
                cur = topheaders[i];
                next = topheaders[i + 1];
                if (cur === next) {
                    ++curColspan;
                }
                else if (curColspan) {
                    // Ended colspan
                    // Add cur to HTML with colspan.
                    html += this.getCellHTMLFromValue('th', 'highcharts-table-topheading', 'scope="col" ' +
                        'colspan="' + (curColspan + 1) + '"', cur);
                    curColspan = 0;
                }
                else {
                    // Cur is standalone. If it is same as sublevel,
                    // remove sublevel and add just toplevel.
                    if (cur === subheaders[i]) {
                        if (useRowspanHeaders) {
                            rowspan = 2;
                            subheaders.splice(i, 1);
                        }
                        else {
                            rowspan = 1;
                            subheaders[i] = '';
                        }
                    }
                    else {
                        rowspan = 1;
                    }
                    html += this.getCellHTMLFromValue('th', 'highcharts-table-topheading', 'scope="col"' +
                        (rowspan > 1 ?
                            ' valign="top" rowspan="' + rowspan + '"' :
                            ''), cur);
                }
            }
            html += '</tr>';
        }
        // Add the subheaders (the only headers if not using multilevels)
        if (subheaders) {
            html += '<tr>';
            for (i = 0, len = subheaders.length; i < len; ++i) {
                if (typeof subheaders[i] !== 'undefined') {
                    html += this.getCellHTMLFromValue('th', null, 'scope="col"', subheaders[i]);
                }
            }
            html += '</tr>';
        }
        html += '</thead>';
        return html;
    };
    /**
     * Initiates the parsing of the HTML table
     *
     * @param {Partial<HTMLTableConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     * @emits HTMLTableParser#parseError
     */
    HTMLTableConverter.prototype.parse = function (options, eventDetail) {
        var converter = this,
            columnsArray = [],
            headers = [],
            parseOptions = merge(converter.options,
            options),
            endRow = parseOptions.endRow,
            startColumn = parseOptions.startColumn,
            endColumn = parseOptions.endColumn,
            firstRowAsNames = parseOptions.firstRowAsNames,
            tableHTML = parseOptions.tableElement || this.tableElement;
        if (!(tableHTML instanceof HTMLElement)) {
            converter.emit({
                type: 'parseError',
                columns: columnsArray,
                detail: eventDetail,
                headers: headers,
                error: 'Not a valid HTML Table'
            });
            return {};
        }
        converter.tableElement = tableHTML;
        converter.tableElementID = tableHTML.id;
        this.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        var rows = tableHTML.getElementsByTagName('tr'),
            rowsCount = rows.length;
        var rowIndex = 0,
            item,
            startRow = parseOptions.startRow;
        // Insert headers from the first row
        if (firstRowAsNames && rowsCount) {
            var items = rows[0].children,
                itemsLength = items.length;
            for (var i = startColumn; i < itemsLength; i++) {
                if (i > endColumn) {
                    break;
                }
                item = items[i];
                if (item.tagName === 'TD' ||
                    item.tagName === 'TH') {
                    headers.push(item.innerHTML);
                }
            }
            startRow++;
        }
        while (rowIndex < rowsCount) {
            if (rowIndex >= startRow && rowIndex <= endRow) {
                var columnsInRow = rows[rowIndex].children,
                    columnsInRowLength = columnsInRow.length;
                var columnIndex = 0;
                while (columnIndex < columnsInRowLength) {
                    var relativeColumnIndex = columnIndex - startColumn,
                        row = columnsArray[relativeColumnIndex];
                    item = columnsInRow[columnIndex];
                    if ((item.tagName === 'TD' ||
                        item.tagName === 'TH') &&
                        (columnIndex >= startColumn &&
                            columnIndex <= endColumn)) {
                        if (!columnsArray[relativeColumnIndex]) {
                            columnsArray[relativeColumnIndex] = [];
                        }
                        var cellValue = converter.convertByType(item.innerHTML);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        columnsArray[relativeColumnIndex][rowIndex - startRow] = cellValue;
                        // Loop over all previous indices and make sure
                        // they are nulls, not undefined.
                        var i = 1;
                        while (rowIndex - startRow >= i &&
                            row[rowIndex - startRow - i] === void 0) {
                            row[rowIndex - startRow - i] = null;
                            i++;
                        }
                    }
                    columnIndex++;
                }
            }
            rowIndex++;
        }
        this.headers = headers;
        this.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: headers
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    HTMLTableConverter.defaultOptions = HTMLTableConverter_assign(HTMLTableConverter_assign({}, Converters_DataConverter.defaultOptions), { useRowspanHeaders: true, useMultiLevelHeaders: true, startColumn: 0, endColumn: Number.MAX_VALUE, startRow: 0, endRow: Number.MAX_VALUE });
    return HTMLTableConverter;
}(Converters_DataConverter));
Converters_DataConverter.registerType('HTMLTable', HTMLTableConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Converters_HTMLTableConverter = (HTMLTableConverter);

;// ./code/es5/es-modules/Data/Connectors/HTMLTableConnector.js
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
 *  - Kamil Kubik
 *
 * */

var HTMLTableConnector_extends = (undefined && undefined.__extends) || (function () {
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
var HTMLTableConnector_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var HTMLTableConnector_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var HTMLTableConnector_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a data connector from an HTML table.
 *
 * @private
 */
var HTMLTableConnector = /** @class */ (function (_super) {
    HTMLTableConnector_extends(HTMLTableConnector, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of HTMLTableConnector.
     *
     * @param {CombinedHTMLTableConnectorOptions} [options]
     * Options for the connector and converter.
     */
    function HTMLTableConnector(options) {
        var _this = this;
        var mergedOptions = merge(HTMLTableConnector.defaultOptions,
            options);
        _this = _super.call(this, mergedOptions) || this;
        _this.options = mergedOptions;
        _this.converter = new Converters_HTMLTableConverter(mergedOptions);
        return _this;
    }
    /**
     * Initiates creating the dataconnector from the HTML table
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits HTMLTableConnector#load
     * @emits HTMLTableConnector#afterLoad
     * @emits HTMLTableConnector#loadError
     */
    HTMLTableConnector.prototype.load = function (eventDetail) {
        return HTMLTableConnector_awaiter(this, void 0, void 0, function () {
            var connector,
                options,
                converter,
                table,
                htmlTable,
                tableElement,
                error,
                columns;
            return HTMLTableConnector_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connector = this;
                        options = connector.options;
                        converter = connector.converter;
                        table = connector.getTable();
                        htmlTable = options.htmlTable;
                        connector.emit({
                            type: 'load',
                            detail: eventDetail
                        });
                        if (typeof htmlTable === 'string') {
                            connector.tableID = htmlTable;
                            tableElement = HTMLTableConnector_win.document.getElementById(htmlTable);
                        }
                        else {
                            tableElement = htmlTable;
                            connector.tableID = tableElement.id;
                        }
                        connector.tableElement = tableElement || void 0;
                        if (!connector.tableElement) {
                            error = 'HTML table not provided, or element with ID not found';
                            connector.emit({
                                type: 'loadError',
                                detail: eventDetail,
                                error: error
                            });
                            return [2 /*return*/, Promise.reject(new Error(error))];
                        }
                        columns = converter.parse(merge({ tableElement: connector.tableElement }, options), eventDetail);
                        // If already loaded, clear the current rows
                        table.deleteColumns();
                        table.setColumns(columns);
                        return [4 /*yield*/, connector.applyTableModifiers()];
                    case 1:
                        _a.sent();
                        connector.emit({
                            type: 'afterLoad',
                            detail: eventDetail
                        });
                        return [2 /*return*/, connector];
                }
            });
        });
    };
    /* *
     *
     *  Static Properties
     *
     * */
    HTMLTableConnector.defaultOptions = {
        id: 'HTML-table-connector',
        type: 'HTMLTable',
        htmlTable: ''
    };
    return HTMLTableConnector;
}(Connectors_DataConnector));
Connectors_DataConnector.registerType('HTMLTable', HTMLTableConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Connectors_HTMLTableConnector = ((/* unused pure expression or super */ null && (HTMLTableConnector)));

;// ./code/es5/es-modules/Data/Modifiers/ChainModifier.js
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
 *  - Dawid Draguła
 *
 * */

var ChainModifier_extends = (undefined && undefined.__extends) || (function () {
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
var ChainModifier_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ChainModifier_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


/* *
 *
 *  Class
 *
 * */
/**
 * Modifies a table with the help of modifiers in an ordered chain.
 *
 */
var ChainModifier = /** @class */ (function (_super) {
    ChainModifier_extends(ChainModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the modifier chain.
     *
     * @param {Partial<ChainModifierOptions>} [options]
     * Options to configure the modifier chain.
     *
     * @param {...DataModifier} [chain]
     * Ordered chain of modifiers.
     */
    function ChainModifier(options) {
        var chain = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            chain[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.chain = chain;
        _this.options = merge(ChainModifier.defaultOptions, options);
        var optionsChain = _this.options.chain || [];
        for (var i = 0, iEnd = optionsChain.length, modifierOptions = void 0, ModifierClass = void 0; i < iEnd; ++i) {
            modifierOptions = optionsChain[i];
            if (!modifierOptions.type) {
                continue;
            }
            ModifierClass = Modifiers_DataModifier.types[modifierOptions.type];
            if (ModifierClass) {
                chain.push(new ModifierClass(modifierOptions));
            }
        }
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a configured modifier to the end of the modifier chain. Please note,
     * that the modifier can be added multiple times.
     *
     * @param {DataModifier} modifier
     * Configured modifier to add.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     */
    ChainModifier.prototype.add = function (modifier, eventDetail) {
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier: modifier
        });
        this.chain.push(modifier);
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier: modifier
        });
    };
    /**
     * Clears all modifiers from the chain.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     */
    ChainModifier.prototype.clear = function (eventDetail) {
        this.emit({
            type: 'clearChain',
            detail: eventDetail
        });
        this.chain.length = 0;
        this.emit({
            type: 'afterClearChain',
            detail: eventDetail
        });
    };
    /**
     * Sequentially applies all modifiers in the chain to the given table,
     * updating its `modified` property with the final result.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    ChainModifier.prototype.modify = function (table, eventDetail) {
        return ChainModifier_awaiter(this, void 0, void 0, function () {
            var modifiers,
                modified,
                i,
                iEnd,
                error_1;
            return ChainModifier_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modifiers = (this.options.reverse ?
                            this.chain.slice().reverse() :
                            this.chain.slice());
                        if (!table.modified) {
                            table.modified = table.clone(false, eventDetail);
                        }
                        modified = table;
                        i = 0, iEnd = modifiers.length;
                        _a.label = 1;
                    case 1:
                        if (!(i < iEnd)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, modifiers[i].modify(modified, eventDetail)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.emit({
                            type: 'error',
                            detail: eventDetail,
                            table: table
                        });
                        throw error_1;
                    case 5:
                        modified = modified.getModified();
                        _a.label = 6;
                    case 6:
                        ++i;
                        return [3 /*break*/, 1];
                    case 7:
                        table.modified = modified;
                        return [2 /*return*/, table];
                }
            });
        });
    };
    /**
     * Applies several modifications to the table.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table as a reference.
     *
     * @emits ChainDataModifier#execute
     * @emits ChainDataModifier#afterExecute
     */
    ChainModifier.prototype.modifyTable = function (table, eventDetail) {
        var chain = this;
        chain.emit({
            type: 'modify',
            detail: eventDetail,
            table: table
        });
        var modifiers = (chain.options.reverse ?
                chain.chain.reverse() :
                chain.chain.slice());
        var modified = table.getModified();
        for (var i = 0, iEnd = modifiers.length, modifier = void 0; i < iEnd; ++i) {
            modifier = modifiers[i];
            modified =
                modifier.modifyTable(modified, eventDetail).getModified();
        }
        table.modified = modified;
        chain.emit({
            type: 'afterModify',
            detail: eventDetail,
            table: table
        });
        return table;
    };
    /**
     * Removes a configured modifier from all positions in the modifier chain.
     *
     * @param {DataModifier} modifier
     * Configured modifier to remove.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     */
    ChainModifier.prototype.remove = function (modifier, eventDetail) {
        var modifiers = this.chain;
        this.emit({
            type: 'removeModifier',
            detail: eventDetail,
            modifier: modifier
        });
        modifiers.splice(modifiers.indexOf(modifier), 1);
        this.emit({
            type: 'afterRemoveModifier',
            detail: eventDetail,
            modifier: modifier
        });
    };
    ChainModifier.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    ChainModifier.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default option for the ordered modifier chain.
     */
    ChainModifier.defaultOptions = {
        type: 'Chain'
    };
    return ChainModifier;
}(Modifiers_DataModifier));
Modifiers_DataModifier.registerType('Chain', ChainModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_ChainModifier = ((/* unused pure expression or super */ null && (ChainModifier)));

;// ./code/es5/es-modules/Data/Modifiers/InvertModifier.js
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
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *
 * */

var InvertModifier_extends = (undefined && undefined.__extends) || (function () {
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


/* *
 *
 *  Class
 *
 * */
/**
 * Inverts columns and rows in a table.
 *
 * @private
 */
var InvertModifier = /** @class */ (function (_super) {
    InvertModifier_extends(InvertModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the invert modifier.
     *
     * @param {Partial<InvertModifierOptions>} [options]
     * Options to configure the invert modifier.
     */
    function InvertModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(InvertModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Inverts rows and columns in the table. If the given table does not have
     * defined a `modified` property, the filtering is applied in-place on the
     * original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to invert.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with inverted `modified` property as a reference or modified table,
     * if `modified` property of the original table is undefined.
     */
    InvertModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var modified = table.getModified();
        if (table.hasColumns(['columnIds'])) { // Inverted table
            var columnIdsColumn = ((table.deleteColumns(['columnIds']) || {})
                    .columnIds || []),
                columns = {},
                columnIds = [];
            for (var i = 0, iEnd = columnIdsColumn.length; i < iEnd; ++i) {
                columnIds.push('' + columnIdsColumn[i]);
            }
            for (var i = 0, iEnd = table.getRowCount(), row = void 0; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns[columnIds[i]] = row;
                }
            }
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        else { // Regular table
            var columns = {};
            for (var i = 0, iEnd = table.getRowCount(), row = void 0; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns["".concat(i)] = row;
                }
            }
            columns.columnIds = table.getColumnIds();
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options for the invert modifier.
     */
    InvertModifier.defaultOptions = {
        type: 'Invert'
    };
    return InvertModifier;
}(Modifiers_DataModifier));
Modifiers_DataModifier.registerType('Invert', InvertModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_InvertModifier = ((/* unused pure expression or super */ null && (InvertModifier)));

;// ./code/es5/es-modules/Data/Modifiers/MathModifier.js
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

var MathModifier_extends = (undefined && undefined.__extends) || (function () {
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
var MathModifier_assign = (undefined && undefined.__assign) || function () {
    MathModifier_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MathModifier_assign.apply(this, arguments);
};



/* *
 *
 *  Class
 *
 * */
/**
 * Replaces formula strings in a table with calculated values.
 *
 * @class
 * @name Highcharts.DataModifier.types.MathModifier
 * @augments Highcharts.DataModifier
 */
var MathModifier = /** @class */ (function (_super) {
    MathModifier_extends(MathModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    function MathModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = MathModifier_assign(MathModifier_assign({}, MathModifier.defaultOptions), options);
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    MathModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var alternativeSeparators = modifier.options.alternativeSeparators,
            formulaColumns = (modifier.options.formulaColumns ||
                table.getColumnIds()),
            modified = table.getModified();
        for (var i = 0, iEnd = formulaColumns.length, columnId = void 0; i < iEnd; ++i) {
            columnId = formulaColumns[i];
            if (formulaColumns.indexOf(columnId) >= 0) {
                modified.setColumn(columnId, modifier.processColumn(table, columnId));
            }
        }
        var columnFormulas = (modifier.options.columnFormulas || []);
        for (var i = 0, iEnd = columnFormulas.length, columnFormula = void 0, formula = void 0; i < iEnd; ++i) {
            columnFormula = columnFormulas[i];
            formula = Formula_FormulaParser.parseFormula(columnFormula.formula, alternativeSeparators);
            modified.setColumn(columnFormula.column, modifier.processColumnFormula(formula, table, columnFormula.rowStart, columnFormula.rowEnd));
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
    /**
     * Process a column by replacing formula strings with calculated values.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table to extract column from and use as reference.
     *
     * @param {string} columnId
     * Id of column to process.
     *
     * @param {number} rowIndex
     * Row index to start the replacing process from.
     *
     * @return {Highcharts.DataTableColumn}
     * Returns the processed table column.
     */
    MathModifier.prototype.processColumn = function (table, columnId, rowIndex) {
        if (rowIndex === void 0) { rowIndex = 0; }
        var alternativeSeparators = this.options.alternativeSeparators,
            column = (table.getColumn(columnId,
            true) || [])
                .slice(rowIndex > 0 ? rowIndex : 0);
        for (var i = 0, iEnd = column.length, cacheFormula = [], cacheString = '', cell = void 0; i < iEnd; ++i) {
            cell = column[i];
            if (typeof cell === 'string' &&
                cell[0] === '=') {
                try {
                    // Use cache while formula string is repetitive
                    cacheFormula = (cacheString === cell ?
                        cacheFormula :
                        Formula_FormulaParser.parseFormula(cell.substring(1), alternativeSeparators));
                    // Process parsed formula string
                    column[i] =
                        Formula_FormulaProcessor.processFormula(cacheFormula, table);
                }
                catch (_a) {
                    column[i] = NaN;
                }
            }
        }
        return column;
    };
    /**
     * Process a column by replacing cell values with calculated values from a
     * given formula.
     *
     * @private
     *
     * @param {Highcharts.Formula} formula
     * Formula to use for processing.
     *
     * @param {Highcharts.DataTable} table
     * Table to extract column from and use as reference.
     *
     * @param {number} rowStart
     * Row index to start the replacing process from.
     *
     * @param {number} rowEnd
     * Row index to end the replacing process.
     *
     * @return {Highcharts.DataTableColumn}
     * Returns the processed table column.
     */
    MathModifier.prototype.processColumnFormula = function (formula, table, rowStart, rowEnd) {
        if (rowStart === void 0) { rowStart = 0; }
        if (rowEnd === void 0) { rowEnd = table.getRowCount(); }
        rowStart = rowStart >= 0 ? rowStart : 0;
        rowEnd = rowEnd >= 0 ? rowEnd : table.getRowCount() + rowEnd;
        var column = [],
            modified = table.getModified();
        for (var i = 0, iEnd = (rowEnd - rowStart); i < iEnd; ++i) {
            try {
                column[i] = Formula_FormulaProcessor.processFormula(formula, modified);
            }
            catch (_a) {
                column[i] = NaN;
            }
            finally {
                formula = Formula_FormulaProcessor.translateReferences(formula, 0, 1);
            }
        }
        return column;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options of MathModifier.
     * @private
     */
    MathModifier.defaultOptions = {
        type: 'Math',
        alternativeSeparators: false
    };
    return MathModifier;
}(Modifiers_DataModifier));
Modifiers_DataModifier.registerType('Math', MathModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_MathModifier = ((/* unused pure expression or super */ null && (MathModifier)));

;// ./code/es5/es-modules/Data/Modifiers/RangeModifier.js
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
 *  - Dawid Draguła
 *
 * */

var RangeModifier_extends = (undefined && undefined.__extends) || (function () {
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


/* *
 *
 *  Class
 *
 * */
/**
 * Slices the table rows based on the specified range.
 */
var RangeModifier = /** @class */ (function (_super) {
    RangeModifier_extends(RangeModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeModifierOptions>} [options]
     * Options to configure the range modifier.
     */
    function RangeModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(RangeModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Replaces table rows with ranged rows. If the given table does not have
     * defined a `modified` property, the filtering is applied in-place on the
     * original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    RangeModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var _a = modifier.options,
            start = _a.start,
            end = _a.end;
        start = Math.max(0, start || 0);
        end = Math.min(end || Infinity, table.getRowCount());
        var length = Math.max(end - start, 0);
        var modified = table.getModified();
        modified.deleteRows();
        modified.setRows(table.getRows(start, length));
        modified.setOriginalRowIndexes(Array.from({ length: length }, function (_, i) { return table.getOriginalRowIndex(start + i); }));
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options for the range modifier.
     */
    RangeModifier.defaultOptions = {
        type: 'Range',
        start: 0,
        end: Infinity
    };
    return RangeModifier;
}(Modifiers_DataModifier));
Modifiers_DataModifier.registerType('Range', RangeModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_RangeModifier = ((/* unused pure expression or super */ null && (RangeModifier)));

;// ./code/es5/es-modules/Data/Modifiers/SortModifier.js
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
 *  - Dawid Draguła
 *
 * */

var SortModifier_extends = (undefined && undefined.__extends) || (function () {
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


/* *
 *
 *  Class
 *
 * */
/**
 * Sort table rows according to values of a column.
 *
 */
var SortModifier = /** @class */ (function (_super) {
    SortModifier_extends(SortModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the sort modifier.
     *
     * @param {Partial<SortModifierOptions>} [options]
     * Options to configure the sort modifier.
     */
    function SortModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(SortModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    SortModifier.ascending = function (a, b) {
        return ((a || 0) < (b || 0) ? -1 :
            (a || 0) > (b || 0) ? 1 :
                0);
    };
    SortModifier.descending = function (a, b) {
        return ((b || 0) < (a || 0) ? -1 :
            (b || 0) > (a || 0) ? 1 :
                0);
    };
    SortModifier.compareFactory = function (direction, customCompare) {
        if (customCompare) {
            if (direction === 'desc') {
                return function (a, b) { return -customCompare(a, b); };
            }
            return customCompare;
        }
        return (direction === 'asc' ?
            SortModifier.ascending :
            SortModifier.descending);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns index and row for sort reference.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table with rows to reference.
     *
     * @return {Array<SortRowReference>}
     * Array of row references.
     */
    SortModifier.prototype.getRowReferences = function (table) {
        var rows = table.getRows(),
            rowReferences = [];
        for (var i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rowReferences.push({
                index: i,
                row: rows[i]
            });
        }
        return rowReferences;
    };
    SortModifier.prototype.modifyTable = function (table, eventDetail) {
        var _a;
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var columnIds = table.getColumnIds(),
            rowCount = table.getRowCount(),
            rowReferences = this.getRowReferences(table),
            _b = modifier.options,
            direction = _b.direction,
            orderInColumn = _b.orderInColumn,
            customCompare = _b.compare,
            modified = table.getModified();
        var orderBy = ('columns' in modifier.options ?
                modifier.options.columns :
                [modifier.options.orderByColumn]);
        var orderByIndexes = [];
        for (var i = 0, iEnd = orderBy.length; i < iEnd; ++i) {
            var sort = orderBy[i];
            var isString = typeof sort === 'string';
            var column = isString ? sort : sort.column;
            var columnIndex = columnIds.indexOf(column);
            if (columnIndex === -1) {
                continue;
            }
            orderByIndexes.push({
                columnIndex: columnIndex,
                compare: SortModifier.compareFactory(isString ? direction : (sort.direction || direction), isString ? customCompare : (sort.compare || customCompare))
            });
        }
        if (orderByIndexes.length) {
            rowReferences.sort(function (a, b) {
                for (var i = 0, iEnd = orderByIndexes.length; i < iEnd; ++i) {
                    var _a = orderByIndexes[i],
                        columnIndex = _a.columnIndex,
                        compare = _a.compare;
                    var result = compare(a.row[columnIndex],
                        b.row[columnIndex]);
                    if (result) {
                        return result;
                    }
                }
                return a.index - b.index;
            });
        }
        if (orderInColumn) {
            var column = [];
            for (var i = 0; i < rowCount; ++i) {
                column[rowReferences[i].index] = i;
            }
            modified.setColumns((_a = {}, _a[orderInColumn] = column, _a));
        }
        else {
            var originalIndexes = [];
            var rows = [];
            var rowReference = void 0;
            for (var i = 0; i < rowCount; ++i) {
                rowReference = rowReferences[i];
                originalIndexes.push(table.getOriginalRowIndex(rowReference.index));
                rows.push(rowReference.row);
            }
            modified.setRows(rows, 0);
            modified.setOriginalRowIndexes(originalIndexes);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options to group table rows.
     */
    SortModifier.defaultOptions = {
        type: 'Sort',
        direction: 'desc',
        orderByColumn: 'y'
    };
    return SortModifier;
}(Modifiers_DataModifier));
Modifiers_DataModifier.registerType('Sort', SortModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_SortModifier = ((/* unused pure expression or super */ null && (SortModifier)));

;// ./code/es5/es-modules/Data/Modifiers/FilterModifier.js
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
 *  - Dawid Draguła
 *
 * */

var FilterModifier_extends = (undefined && undefined.__extends) || (function () {
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


/* *
 *
 *  Class
 *
 * */
/**
 * Filters out table rows matching a given condition.
 */
var FilterModifier = /** @class */ (function (_super) {
    FilterModifier_extends(FilterModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the filter modifier.
     *
     * @param {Partial<FilterModifierOptions>} [options]
     * Options to configure the filter modifier.
     */
    function FilterModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(FilterModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Compiles a filter condition into a callback function.
     *
     * @param {FilterCondition} condition
     * Condition to compile.
     */
    FilterModifier.compile = function (condition) {
        var _this = this;
        if (isFunction(condition)) {
            return condition;
        }
        var op = condition.operator;
        switch (op) {
            case 'and': {
                var subs_1 = condition.conditions.map(function (c) { return _this.compile(c); });
                return function (row, table, i) { return subs_1.every(function (cond) { return cond(row, table, i); }); };
            }
            case 'or': {
                var subs_2 = condition.conditions.map(function (c) { return _this.compile(c); });
                return function (row, table, i) { return subs_2.some(function (cond) { return cond(row, table, i); }); };
            }
            case 'not': {
                var sub_1 = this.compile(condition.condition);
                return function (row, table, i) { return !sub_1(row, table, i); };
            }
        }
        var col = condition.columnId,
            value = condition.value;
        switch (op) {
            case '==':
                // eslint-disable-next-line eqeqeq
                return function (row) { return row[col] == value; };
            case '===':
                return function (row) { return row[col] === value; };
            case '!=':
                // eslint-disable-next-line eqeqeq
                return function (row) { return row[col] != value; };
            case '!==':
                return function (row) { return row[col] !== value; };
            case '>':
                return function (row) { return (row[col] || 0) > (value || 0); };
            case '>=':
                return function (row) { return (row[col] || 0) >= (value || 0); };
            case '<':
                return function (row) { return (row[col] || 0) < (value || 0); };
            case '<=':
                return function (row) { return (row[col] || 0) <= (value || 0); };
            case 'empty':
                return function (row) { return row[col] === null || row[col] === ''; };
        }
        var ignoreCase = condition.ignoreCase;
        var str = function (val) {
                var s = '' + val;
            return (ignoreCase !== null && ignoreCase !== void 0 ? ignoreCase : true) ? s.toLowerCase() : s;
        };
        switch (op) {
            case 'contains':
                return function (row) { return str(row[col]).includes(str(value)); };
            default:
                return function (row) { return str(row[col])[op](str(value)); };
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Filters out table rows matching a given condition. If the given table
     * does not have defined a `modified` property, the filtering is applied
     * in-place on the original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    FilterModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var condition = modifier.options.condition;
        if (!condition) {
            // If no condition is set, return the unmodified table.
            return table;
        }
        var matchRow = FilterModifier.compile(condition);
        var modified = table.getModified();
        var rows = [];
        var indexes = [];
        for (var i = 0, iEnd = table.getRowCount(); i < iEnd; ++i) {
            var row = table.getRowObject(i);
            if (!row) {
                continue;
            }
            if (matchRow(row, table, i)) {
                rows.push(row);
                indexes.push(table.getOriginalRowIndex(i));
            }
        }
        modified.deleteRows();
        modified.setRows(rows);
        modified.setOriginalRowIndexes(indexes);
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options for the filter modifier.
     */
    FilterModifier.defaultOptions = {
        type: 'Filter'
    };
    return FilterModifier;
}(Modifiers_DataModifier));
Modifiers_DataModifier.registerType('Filter', FilterModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Modifiers_FilterModifier = ((/* unused pure expression or super */ null && (FilterModifier)));

;// ./code/es5/es-modules/masters/modules/data-tools.src.js




















var G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.DataConnector = G.DataConnector || Connectors_DataConnector;
G.DataConverter = G.DataConverter || Converters_DataConverter;
G.DataCursor = G.DataCursor || Data_DataCursor;
G.DataModifier = G.DataModifier || Modifiers_DataModifier;
G.DataPool = G.DataPool || Data_DataPool;
G.DataTable = G.DataTable || Data_DataTable;
G.Formula = G.Formula || Formula_Formula;
/* harmony default export */ var data_tools_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});