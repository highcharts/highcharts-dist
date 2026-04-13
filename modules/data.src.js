// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.0 (2026-04-13)
 * @module highcharts/modules/data
 * @requires highcharts
 *
 * Data module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Chart"], root["_Highcharts"]["Point"], root["_Highcharts"]["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/data", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Axis"],amd1["Chart"],amd1["Point"],amd1["SeriesRegistry"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/data"] = factory(root["_Highcharts"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Chart"], root["_Highcharts"]["Point"], root["_Highcharts"]["SeriesRegistry"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Axis"], root["Highcharts"]["Chart"], root["Highcharts"]["Point"], root["Highcharts"]["SeriesRegistry"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__960__, __WEBPACK_EXTERNAL_MODULE__260__, __WEBPACK_EXTERNAL_MODULE__512__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 260:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__260__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 532:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ }),

/***/ 960:
/***/ ((module) => {

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ data_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Shared/Utilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

const { doc, win } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
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
function addEvent(el, type, fn, options = {}) {
    // Add hcEvents to either the prototype (in case we're running addEvent on a
    // class) or the instance. If hasOwnProperty('hcEvents') is false, it is
    // inherited down the prototype chain, in which case we need to set the
    // property on this instance (which may itself be a prototype).
    const owner = typeof el === 'function' && el.prototype || el;
    if (!Object.hasOwnProperty.call(owner, 'hcEvents')) {
        owner.hcEvents = {};
    }
    const events = owner.hcEvents;
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
    const addEventListener = el.addEventListener;
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
    const eventObject = {
        fn,
        order: typeof options.order === 'number' ? options.order : Infinity
    };
    events[type].push(eventObject);
    // Order the calls
    events[type].sort((a, b) => a.order - b.order);
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
    let i = data.length, min = data[0];
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
    let i = data.length, max = data[0];
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
    const isGetter = isString(keyOrAttribs) && !defined(value);
    let ret;
    const attrSingle = (value, key) => {
        // Set the value
        if (defined(value)) {
            elem.setAttribute(key, value);
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
    const el = doc.createElement(tag);
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
function crisp(value, lineWidth = 0, inverted) {
    const mod = lineWidth % 2 / 2, inverter = inverted ? -1 : 1;
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
        if (val !== except && val?.destroy) {
            // Invoke the destroy
            val.destroy();
        }
        // Delete the property from the object
        if (val?.destroy || !destructablesOnly) {
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
    element?.parentElement?.removeChild(element);
}
// eslint-disable-next-line valid-jsdoc
/**
 * Return the deep difference between two objects. It can either return the new
 * properties, or optionally return the old values of new properties.
 * @internal
 */
function diffObjects(newer, older, keepOlder, collectionsWithUpdate) {
    const ret = {};
    /**
     * Recurse over a set of options and its current values, and store the
     * current values in the ret object.
     */
    function diff(newer, older, ret, depth) {
        const keeper = keepOlder ? older : newer;
        objectEach(newer, function (newerVal, key) {
            if (!depth &&
                collectionsWithUpdate &&
                collectionsWithUpdate.indexOf(key) > -1 &&
                older[key]) {
                newerVal = splat(newerVal);
                ret[key] = [];
                // Iterate over collections like series, xAxis or yAxis and map
                // the items by index.
                for (let i = 0; i < Math.max(newerVal.length, older[key].length); i++) {
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
    let i = arr.length;
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
    let n;
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
    const obj = (function () { });
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
    if (doc?.createEvent &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default())))) {
        const e = doc.createEvent('Events');
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
        const events = [];
        let object = el;
        let multilevel = false;
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
            events.sort((a, b) => a.order - b.order);
        }
        // Call the collected event handlers
        events.forEach((obj) => {
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
const getAlignFactor = (align = '') => ({
    center: 0.5,
    right: 1,
    middle: 0.5,
    bottom: 1
}[align] || 0);
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
    const allowNegative = !onError;
    let closest, loopLength, distance, i;
    arrays.forEach((xData) => {
        if (xData.length > 1) {
            loopLength = xData.length - 1;
            for (i = loopLength; i > 0; i--) {
                distance = xData[i] - xData[i - 1];
                if (distance < 0 && !allowNegative) {
                    onError?.();
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
    const pathElements = path.split('.');
    while (pathElements.length && defined(parent)) {
        const pathElement = pathElements.shift();
        // Filter on the key
        if (typeof pathElement === 'undefined' ||
            pathElement === '__proto__') {
            return; // Undefined
        }
        if (pathElement === 'this') {
            let thisProp;
            if (isObject(parent)) {
                thisProp = parent['@this'];
            }
            return thisProp ?? parent;
        }
        const child = parent[pathElement.replace(/[\\'"]/g, '')];
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
    let style;
    // For width and height, return the actual inner pixel size (#4913)
    if (prop === 'width') {
        let offsetWidth = Math.min(el.offsetWidth, el.scrollWidth);
        // In flex boxes, we need to use getBoundingClientRect and floor it,
        // because scrollWidth doesn't support subpixel precision (#6427) ...
        const boundingClientRectWidth = el.getBoundingClientRect?.().width;
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
    const css = win.getComputedStyle(el, void 0); // eslint-disable-line no-undefined
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
const find = Array.prototype.find ?
    function (arr, callback) {
        return arr.find(callback);
    } :
    // Legacy implementation. PhantomJS, IE <= 11 etc. #7223.
    function (arr, callback) {
        let i;
        const length = arr.length;
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
    const c = obj?.constructor;
    return !!(isObject(obj, true) &&
        !isDOMElement(obj) &&
        (c?.name && c.name !== 'Object'));
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
    const str = Object.prototype.toString.call(obj);
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
function merge(extendOrSource, ...sources) {
    let i, args = [extendOrSource, ...sources], ret = {};
    const doCopy = function (copy, original) {
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
    const len = args.length;
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
    let i, retInterval = interval;
    // Round to a tenfold of 1, 2, 2.5 or 5
    magnitude = pick(magnitude, getMagnitude(interval));
    const normalized = interval / magnitude;
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
    for (const key in obj) {
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
    const docElem = doc.documentElement, box = (el.parentElement || el.parentNode) ?
        el.getBoundingClientRect() :
        { top: 0, left: 0, width: 0, height: 0 };
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
    const args = arguments;
    const length = args.length;
    for (let i = 0; i < length; i++) {
        const arg = args[i];
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
function replaceNested(text, ...replacements) {
    let previous, replacement;
    do {
        previous = text;
        for (replacement of replacements) {
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
        const removeEventListener = el.removeEventListener;
        if (removeEventListener) {
            removeEventListener.call(el, type, fn, false);
        }
    }
    /** @internal */
    function removeAllEvents(eventCollection) {
        let types, len;
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
    const owner = typeof el === 'function' && el.prototype || el;
    if (Object.hasOwnProperty.call(owner, 'hcEvents')) {
        const events = owner.hcEvents;
        if (type) {
            const typeEvents = (events[type] || []);
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
    const length = arr.length;
    let sortValue, i;
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
    const proceed = obj[method];
    obj[method] = function () {
        const outerArgs = arguments, scope = this;
        return func.apply(this, [
            function () {
                return proceed.apply(scope, arguments.length ? arguments : outerArgs);
            }
        ].concat([].slice.call(arguments)));
    };
}

;// ./code/es-modules/Core/HttpUtilities.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Christer Vasseng, Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { win: HttpUtilities_win } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

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
function ajax(settings) {
    const headers = {
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
    if (!settings.headers?.['Content-Type']) {
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
        let res;
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
                return settings.success?.(res, r);
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
async function post(url, data, fetchOptions) {
    // Prepare a form to send the data
    const formData = new HttpUtilities_win.FormData();
    // Add the data to the form
    objectEach(data, function (value, name) {
        formData.append(name, value);
    });
    formData.append('b64', 'true');
    // Send the POST
    const response = await HttpUtilities_win.fetch(url, {
        method: 'POST',
        body: formData,
        ...fetchOptions
    });
    // Check the response
    if (response.ok) {
        // Get the text from the response
        const text = await response.text();
        // Prepare self-click link with the Base64 representation
        const link = document.createElement('a');
        link.href = `data:${data.type};base64,${text}`;
        link.download = data.filename;
        link.click();
        // Remove the link
        discardElement(link);
    }
}
/**
 * Utility functions for Ajax.
 * @class
 * @name Highcharts.HttpUtilities
 */
const HttpUtilities = {
    ajax,
    getJSON
};
HttpUtilities.post = post;
/* harmony default export */ const Core_HttpUtilities = (HttpUtilities);
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

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Chart"],"commonjs":["highcharts","Chart"],"commonjs2":["highcharts","Chart"],"root":["Highcharts","Chart"]}
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_ = __webpack_require__(960);
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default = /*#__PURE__*/__webpack_require__.n(highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Point"],"commonjs":["highcharts","Point"],"commonjs2":["highcharts","Point"],"root":["Highcharts","Point"]}
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_ = __webpack_require__(260);
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default = /*#__PURE__*/__webpack_require__.n(highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Extensions/Data.js
/* *
 *
 *  Data module
 *
 *  (c) 2012-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */




const { getOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { doc: Data_doc } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { ajax: Data_ajax } = Core_HttpUtilities;


const { seriesTypes } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default());

/* *
 *
 *  Functions
 *
 * */
/** @internal */
function getFreeIndexes(numberOfColumns, seriesBuilders) {
    const freeIndexes = [], freeIndexValues = [];
    let s, i, referencedIndexes;
    // Add all columns as free
    for (i = 0; i < numberOfColumns; i = i + 1) {
        freeIndexes.push(true);
    }
    // Loop all defined builders and remove their referenced columns
    for (s = 0; s < seriesBuilders.length; s = s + 1) {
        referencedIndexes = seriesBuilders[s].getReferencedColumnIndexes();
        for (i = 0; i < referencedIndexes.length; i = i + 1) {
            freeIndexes[referencedIndexes[i]] = false;
        }
    }
    // Collect the values for the free indexes
    for (i = 0; i < freeIndexes.length; i = i + 1) {
        if (freeIndexes[i]) {
            freeIndexValues.push(i);
        }
    }
    return freeIndexValues;
}
/**
 *
 */
function hasURLOption(options) {
    return Boolean(options &&
        (options.rowsURL || options.csvURL || options.columnsURL));
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Data class
 *
 * @requires modules/data
 *
 * @class
 * @name Highcharts.Data
 *
 * @param {Highcharts.DataOptions} dataOptions
 *
 * @param {Highcharts.Options} [chartOptions]
 *
 * @param {Highcharts.Chart} [chart]
 */
class Data {
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Creates a data object to parse data for a chart.
     *
     * @function Highcharts.data
     */
    static data(dataOptions, chartOptions = {}, chart) {
        return new Data(dataOptions, chartOptions, chart);
    }
    /**
     * Reorganize rows into columns.
     *
     * @function Highcharts.Data.rowsToColumns
     */
    static rowsToColumns(rows) {
        let row, rowsLength, col, colsLength, columns;
        if (rows) {
            columns = [];
            rowsLength = rows.length;
            for (row = 0; row < rowsLength; row++) {
                colsLength = rows[row].length;
                for (col = 0; col < colsLength; col++) {
                    if (!columns[col]) {
                        columns[col] = [];
                    }
                    columns[col][row] = rows[row][col];
                }
            }
        }
        return columns;
    }
    /* *
     *
     *  Constructors
     *
     * */
    constructor(dataOptions, chartOptions = {}, chart) {
        /**
         * A collection of two-dimensional arrays.
         * @internal
         */
        this.rowsToColumns = Data.rowsToColumns; // Backwards compatibility
        /**
         * A collection of available date formats, extendable from the outside to
         * support custom date formats.
         *
         * @name Highcharts.Data#dateFormats
         * @type {Highcharts.Dictionary<Highcharts.DataDateFormatObject>}
         */
        this.dateFormats = {
            'YYYY/mm/dd': {
                regex: /^(\d{4})[\-\/\.](\d{1,2})[\-\/\.](\d{1,2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[1], +match[2] - 1, +match[3]) :
                        NaN);
                }
            },
            'dd/mm/YYYY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3], +match[2] - 1, +match[1]) :
                        NaN);
                },
                alternative: 'mm/dd/YYYY' // Different format with the same regex
            },
            'mm/dd/YYYY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3], +match[1] - 1, +match[2]) :
                        NaN);
                }
            },
            'dd/mm/YY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                parser: function (match) {
                    if (!match) {
                        return NaN;
                    }
                    const d = new Date();
                    let year = +match[3];
                    if (year > (d.getFullYear() - 2000)) {
                        year += 1900;
                    }
                    else {
                        year += 2000;
                    }
                    return Date.UTC(year, +match[2] - 1, +match[1]);
                },
                alternative: 'mm/dd/YY' // Different format with the same regex
            },
            'mm/dd/YY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3] + 2000, +match[1] - 1, +match[2]) :
                        NaN);
                }
            }
        };
        this.chart = chart;
        this.chartOptions = chartOptions;
        this.options = dataOptions;
        this.rawColumns = [];
        this.init(dataOptions, chartOptions, chart);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the Data object with the given options
     *
     * @internal
     * @function Highcharts.Data#init
     */
    init(dataOptions, chartOptions, chart) {
        let decimalPoint = dataOptions.decimalPoint, hasData;
        if (chartOptions) {
            this.chartOptions = chartOptions;
        }
        if (chart) {
            this.chart = chart;
        }
        if (decimalPoint !== '.' && decimalPoint !== ',') {
            decimalPoint = void 0;
        }
        this.options = dataOptions;
        this.columns = (dataOptions.columns ||
            this.rowsToColumns(dataOptions.rows) ||
            []);
        this.firstRowAsNames = pick(dataOptions.firstRowAsNames, this.firstRowAsNames, true);
        this.decimalRegex = (decimalPoint &&
            new RegExp('^(-?[0-9]+)' + decimalPoint + '([0-9]+)$'));
        // Always stop old polling when we have new options
        if (this.liveDataTimeout !== void 0) {
            internalClearTimeout(this.liveDataTimeout);
        }
        // This is a two-dimensional array holding the raw, trimmed string
        // values with the same organization as the columns array. It makes it
        // possible for example to revert from interpreted timestamps to
        // string-based categories.
        this.rawColumns = [];
        // No need to parse or interpret anything
        if (this.columns.length) {
            this.dataFound();
            hasData = !hasURLOption(dataOptions);
        }
        if (!hasData) {
            // Fetch live data
            hasData = this.fetchLiveData();
        }
        if (!hasData) {
            // Parse a CSV string if options.csv is given. The parseCSV function
            // returns a columns array, if it has no length, we have no data
            hasData = Boolean(this.parseCSV().length);
        }
        if (!hasData) {
            // Parse a HTML table if options.table is given
            hasData = Boolean(this.parseTable().length);
        }
        if (!hasData) {
            // Parse a Google Spreadsheet
            hasData = this.parseGoogleSpreadsheet();
        }
        if (!hasData && dataOptions.afterComplete) {
            dataOptions.afterComplete(this);
        }
    }
    /**
     * Get the column distribution. For example, a line series takes a single
     * column for Y values. A range series takes two columns for low and high
     * values respectively, and an OHLC series takes four columns.
     *
     * @function Highcharts.Data#getColumnDistribution
     */
    getColumnDistribution() {
        const chartOptions = this.chartOptions, options = this.options, xColumns = [], getValueCount = function (type = 'line') {
            return (seriesTypes[type].prototype.pointArrayMap || [0]).length;
        }, getPointArrayMap = function (type = 'line') {
            return seriesTypes[type].prototype.pointArrayMap;
        }, globalType = chartOptions?.chart?.type, individualCounts = [], seriesBuilders = [], 
        // If no series mapping is defined, check if the series array is
        // defined with types.
        seriesMapping = (options?.seriesMapping ||
            chartOptions?.series?.map(function () {
                return { x: 0 };
            }) ||
            []);
        let seriesIndex = 0;
        (chartOptions?.series || []).forEach((series) => {
            individualCounts.push(getValueCount(series.type || globalType));
        });
        // Collect the x-column indexes from seriesMapping
        seriesMapping.forEach((mapping) => {
            xColumns.push(mapping.x || 0);
        });
        // If there are no defined series with x-columns, use the first column
        // as x column
        if (xColumns.length === 0) {
            xColumns.push(0);
        }
        // Loop all seriesMappings and constructs SeriesBuilders from
        // the mapping options.
        seriesMapping.forEach((mapping) => {
            const builder = new SeriesBuilder(), numberOfValueColumnsNeeded = individualCounts[seriesIndex] ||
                getValueCount(globalType), seriesArr = chartOptions?.series ?? [], series = seriesArr[seriesIndex] ?? {}, defaultPointArrayMap = getPointArrayMap(series.type || globalType), pointArrayMap = defaultPointArrayMap ?? ['y'];
            if (
            // User-defined x.mapping
            defined(mapping.x) ||
                // All non cartesian don't need 'x'
                series.isCartesian ||
                // Except pie series:
                !defaultPointArrayMap) {
                // Add an x reader from the x property or from an undefined
                // column if the property is not set. It will then be auto
                // populated later.
                builder.addColumnReader(mapping.x, 'x');
            }
            // Add all column mappings
            objectEach(mapping, function (val, name) {
                if (name !== 'x') {
                    builder.addColumnReader(val, name);
                }
            });
            // Add missing columns
            for (let i = 0; i < numberOfValueColumnsNeeded; i++) {
                if (!builder.hasReader(pointArrayMap[i])) {
                    // Create and add a column reader for the next free column
                    // index
                    builder.addColumnReader(void 0, pointArrayMap[i]);
                }
            }
            seriesBuilders.push(builder);
            seriesIndex++;
        });
        let globalPointArrayMap = getPointArrayMap(globalType);
        if (typeof globalPointArrayMap === 'undefined') {
            globalPointArrayMap = ['y'];
        }
        this.valueCount = {
            global: getValueCount(globalType),
            xColumns: xColumns,
            individual: individualCounts,
            seriesBuilders: seriesBuilders,
            globalPointArrayMap: globalPointArrayMap
        };
    }
    /**
     * When the data is parsed into columns, either by CSV, table, GS or direct
     * input, continue with other operations.
     *
     * @internal
     * @function Highcharts.Data#dataFound
     */
    dataFound() {
        if (this.options.switchRowsAndColumns) {
            this.columns = this.rowsToColumns(this.columns);
        }
        // Interpret the info about series and columns
        this.getColumnDistribution();
        // Interpret the values into right types
        this.parseTypes();
        // Handle columns if a handleColumns callback is given
        if (this.parsed() !== false) {
            // Complete if a complete callback is given
            this.complete();
        }
    }
    /**
     * Parse a CSV input string
     *
     * @function Highcharts.Data#parseCSV
     */
    parseCSV(inOptions) {
        const self = this, columns = this.columns = [], options = inOptions || this.options, startColumn = options.startColumn || 0, endColumn = options.endColumn || Number.MAX_VALUE, dataTypes = [], 
        // We count potential delimiters in the prepass, and use the
        // result as the basis of half-intelligent guesses.
        potDelimiters = {
            ',': 0,
            ';': 0,
            '\t': 0
        };
        let csv = options.csv, startRow = options.startRow || 0, endRow = options.endRow || Number.MAX_VALUE, itemDelimiter, lines, rowIt = 0;
        /*
            This implementation is quite verbose. It will be shortened once
            it's stable and passes all the test.

            It's also not written with speed in mind, instead everything is
            very segregated, and there a several redundant loops.
            This is to make it easier to stabilize the code initially.

            We do a pre-pass on the first 4 rows to make some intelligent
            guesses on the set. Guessed delimiters are in this pass counted.

            Auto detecting delimiters
                - If we meet a quoted string, the next symbol afterwards
                  (that's not \s, \t) is the delimiter
                - If we meet a date, the next symbol afterwards is the delimiter

            Date formats
                - If we meet a column with date formats, check all of them to
                  see if one of the potential months crossing 12. If it does,
                  we now know the format

            It would make things easier to guess the delimiter before
            doing the actual parsing.

            General rules:
                - Quoting is allowed, e.g: "Col 1",123,321
                - Quoting is optional, e.g.: Col1,123,321
                - Double quoting is escaping, e.g. "Col ""Hello world""",123
                - Spaces are considered part of the data: Col1 ,123
                - New line is always the row delimiter
                - Potential column delimiters are , ; \t
                - First row may optionally contain headers
                - The last row may or may not have a row delimiter
                - Comments are optionally supported, in which case the comment
                  must start at the first column, and the rest of the line will
                  be ignored
        */
        /**
         * Parse a single row.
         * @internal
         */
        function parseRow(columnStr, rowNumber, noAdd, callbacks) {
            let i = 0, c = '', cl = '', cn = '', token = '', actualColumn = 0, column = 0;
            /**
             * @internal
             */
            function read(j) {
                c = columnStr[j];
                cl = columnStr[j - 1];
                cn = columnStr[j + 1];
            }
            /**
             * @internal
             */
            function pushType(type) {
                if (dataTypes.length < column + 1) {
                    dataTypes.push([type]);
                }
                if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                    dataTypes[column].push(type);
                }
            }
            /**
             * @internal
             */
            function push() {
                if (startColumn > actualColumn || actualColumn > endColumn) {
                    // Skip this column, but increment the column count (#7272)
                    ++actualColumn;
                    token = '';
                    return;
                }
                if (!options.columnTypes) {
                    if (!isNaN(parseFloat(token)) && isFinite(token)) {
                        token = parseFloat(token);
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
                if (columns.length < column + 1) {
                    columns.push([]);
                }
                if (!noAdd) {
                    // Don't push - if there's a varying amount of columns
                    // for each row, pushing will skew everything down n slots
                    columns[column][rowNumber] = token;
                }
                token = '';
                ++column;
                ++actualColumn;
            }
            if (!columnStr.trim().length) {
                return;
            }
            if (columnStr.trim()[0] === '#') {
                return;
            }
            for (; i < columnStr.length; i++) {
                read(i);
                if (c === '"') {
                    read(++i);
                    while (i < columnStr.length) {
                        if (c === '"' && cl !== '"' && cn !== '"') {
                            break;
                        }
                        if (c !== '"' || (c === '"' && cl !== '"')) {
                            token += c;
                        }
                        read(++i);
                    }
                    // Perform "plugin" handling
                }
                else if (callbacks?.[c]) {
                    if (callbacks[c](c, token)) {
                        push();
                    }
                    // Delimiter - push current token
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
        }
        /**
         * Attempt to guess the delimiter. We do a separate parse pass here
         * because we need to count potential delimiters softly without making
         * any assumptions.
         * @internal
         */
        function guessDelimiter(lines) {
            let points = 0, commas = 0, guessed = false;
            lines.some(function (columnStr, i) {
                let inStr = false, c, cn, cl, token = '';
                // We should be able to detect dateFormats within 13 rows
                if (i > 13) {
                    return true;
                }
                for (let j = 0; j < columnStr.length; j++) {
                    c = columnStr[j];
                    cn = columnStr[j + 1];
                    cl = columnStr[j - 1];
                    if (c === '#') {
                        // Skip the rest of the line - it's a comment
                        return;
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
                        else if (isNaN(token) ||
                            !isFinite(token)) {
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
            });
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
            if (!options.decimalPoint) {
                if (points > commas) {
                    options.decimalPoint = '.';
                }
                else {
                    options.decimalPoint = ',';
                }
                // Apply a new decimal regex based on the presumed decimal sep.
                self.decimalRegex = new RegExp('^(-?[0-9]+)' +
                    options.decimalPoint +
                    '([0-9]+)$');
            }
            return guessed;
        }
        /**
         * Tries to guess the date format
         *  - Check if either month candidate exceeds 12
         *  - Check if year is missing (use current year)
         *  - Check if a shortened year format is used (e.g. 1/1/99)
         *  - If no guess can be made, the user must be prompted
         * data is the data to deduce a format based on
         * @internal
         */
        function deduceDateFormat(data, limit) {
            const format = 'YYYY/mm/dd', stable = [], max = [];
            let thing, guessedFormat = [], calculatedFormat, i = 0, madeDeduction = false, j;
            if (!limit || limit > data.length) {
                limit = data.length;
            }
            for (; i < limit; i++) {
                if (typeof data[i] !== 'undefined' &&
                    data[i]?.length) {
                    thing = data[i]
                        .trim()
                        .replace(/\//g, ' ')
                        .replace(/\-/g, ' ')
                        .replace(/\./g, ' ')
                        .split(' ');
                    guessedFormat = [
                        '',
                        '',
                        ''
                    ];
                    for (j = 0; j < thing.length; j++) {
                        if (j < guessedFormat.length) {
                            thing[j] = parseInt(thing[j], 10);
                            if (thing[j]) {
                                max[j] = (!max[j] || max[j] < thing[j]) ?
                                    thing[j] :
                                    max[j];
                                if (typeof stable[j] !== 'undefined') {
                                    if (stable[j] !== thing[j]) {
                                        stable[j] = false;
                                    }
                                }
                                else {
                                    stable[j] = thing[j];
                                }
                                if (thing[j] > 31) {
                                    if (thing[j] < 100) {
                                        guessedFormat[j] = 'YY';
                                    }
                                    else {
                                        guessedFormat[j] = 'YYYY';
                                    }
                                }
                                else if (thing[j] > 12 &&
                                    thing[j] <= 31) {
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
                calculatedFormat = guessedFormat.join('/');
                // If the calculated format is not valid, we need to present an
                // error.
                if (!(options.dateFormats || self.dateFormats)[calculatedFormat]) {
                    // This should emit an event instead
                    fireEvent(self, 'deduceDateFailed');
                    return format;
                }
                return calculatedFormat;
            }
            return format;
        }
        if (csv && options.beforeParse) {
            csv = options.beforeParse.call(this, csv, this);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n/g, '\n') // Unix
                .replace(/\r/g, '\n') // Mac
                .split(options.lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (options.itemDelimiter) {
                itemDelimiter = options.itemDelimiter;
            }
            else {
                itemDelimiter = guessDelimiter(lines);
            }
            let offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    parseRow(lines[rowIt], rowIt - startRow - offset);
                }
            }
            if ((!options.columnTypes || options.columnTypes.length === 0) &&
                dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' &&
                !options.dateFormat) {
                options.dateFormat = deduceDateFormat(columns[0]);
            }
            /// lines.forEach(function (line, rowNo) {
            //    let trimmed = self.trim(line),
            //        isComment = trimmed.indexOf('#') === 0,
            //        isBlank = trimmed === '',
            //        items;
            //    if (
            //        rowNo >= startRow &&
            //        rowNo <= endRow &&
            //        !isComment && !isBlank
            //    ) {
            //        items = line.split(itemDelimiter);
            //        items.forEach(function (item, colNo) {
            //            if (colNo >= startColumn && colNo <= endColumn) {
            //                if (!columns[colNo - startColumn]) {
            //                    columns[colNo - startColumn] = [];
            //                }
            //                columns[colNo - startColumn][activeRowNo] = item;
            //            }
            //        });
            //        activeRowNo += 1;
            //    }
            // });
            //
            this.dataFound();
        }
        return columns;
    }
    /**
     * Parse a HTML table
     *
     * @function Highcharts.Data#parseTable
     */
    parseTable() {
        const options = this.options, columns = this.columns || [], startRow = options.startRow || 0, endRow = options.endRow || Number.MAX_VALUE, startColumn = options.startColumn || 0, endColumn = options.endColumn || Number.MAX_VALUE;
        if (options.table) {
            let table = options.table;
            if (typeof table === 'string') {
                table = Data_doc.getElementById(table);
            }
            [].forEach.call(table.getElementsByTagName('tr'), (tr, rowNo) => {
                if (rowNo >= startRow && rowNo <= endRow) {
                    [].forEach.call(tr.children, (item, colNo) => {
                        const row = columns[colNo - startColumn];
                        let i = 1;
                        if ((item.tagName === 'TD' ||
                            item.tagName === 'TH') &&
                            colNo >= startColumn &&
                            colNo <= endColumn) {
                            if (!columns[colNo - startColumn]) {
                                columns[colNo - startColumn] = [];
                            }
                            columns[colNo - startColumn][rowNo - startRow] = item.innerHTML;
                            // Loop over all previous indices and make sure
                            // they are nulls, not undefined.
                            while (rowNo - startRow >= i &&
                                row[rowNo - startRow - i] === void 0) {
                                row[rowNo - startRow - i] = null;
                                i++;
                            }
                        }
                    });
                }
            });
            this.dataFound(); // Continue
        }
        return columns;
    }
    /**
     * Fetch or refetch live data
     *
     * @function Highcharts.Data#fetchLiveData
     *
     * @return {boolean}
     *         The URLs that were tried can be found in the options
     */
    fetchLiveData() {
        const data = this, chart = this.chart, options = this.options, maxRetries = 3, pollingEnabled = options.enablePolling, originalOptions = merge(options);
        let currentRetries = 0, updateIntervalMs = (options.dataRefreshRate || 2) * 1000;
        if (!hasURLOption(options)) {
            return false;
        }
        // Do not allow polling more than once a second
        if (updateIntervalMs < 1000) {
            updateIntervalMs = 1000;
        }
        delete options.csvURL;
        delete options.rowsURL;
        delete options.columnsURL;
        /**
         * @internal
         */
        function performFetch(initialFetch) {
            /**
             * Helper function for doing the data fetch + polling.
             * @internal
             */
            function request(url, done, tp) {
                if (!url ||
                    !/^(http|\/|\.\/|\.\.\/)/.test(url)) {
                    if (url && options.error) {
                        options.error('Invalid URL');
                    }
                    return false;
                }
                if (initialFetch) {
                    internalClearTimeout(data.liveDataTimeout);
                    chart.liveDataURL = url;
                }
                /**
                 * @internal
                 */
                function poll() {
                    // Poll
                    if (pollingEnabled && chart.liveDataURL === url) {
                        // We need to stop doing this if the URL has changed
                        data.liveDataTimeout =
                            setTimeout(performFetch, updateIntervalMs);
                    }
                }
                Data_ajax({
                    url: url,
                    dataType: tp || 'json',
                    success: function (res) {
                        if (chart?.series) {
                            done(res);
                        }
                        poll();
                    },
                    error: function (xhr, text) {
                        if (++currentRetries < maxRetries) {
                            poll();
                        }
                        return options.error?.(text, xhr);
                    }
                });
                return true;
            }
            if (!request(originalOptions.csvURL, function (res) {
                chart.update({
                    data: {
                        csv: res
                    }
                });
            }, 'text')) {
                if (!request(originalOptions.rowsURL, function (res) {
                    chart.update({
                        data: {
                            rows: res
                        }
                    });
                })) {
                    request(originalOptions.columnsURL, function (res) {
                        chart.update({
                            data: {
                                columns: res
                            }
                        });
                    });
                }
            }
        }
        performFetch(true);
        return hasURLOption(options);
    }
    /**
     * Parse a Google spreadsheet.
     *
     * @function Highcharts.Data#parseGoogleSpreadsheet
     *
     * @return {boolean}
     *         Always returns false, because it is an intermediate fetch.
     */
    parseGoogleSpreadsheet() {
        const data = this, options = this.options, googleSpreadsheetKey = options.googleSpreadsheetKey, chart = this.chart, refreshRate = Math.max((options.dataRefreshRate || 2) * 1000, 4000);
        /**
         * Form the `values` field after range settings, unless the
         * googleSpreadsheetRange option is set.
         */
        const getRange = () => {
            if (options.googleSpreadsheetRange) {
                return options.googleSpreadsheetRange;
            }
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const start = (alphabet.charAt(options.startColumn || 0) || 'A') +
                ((options.startRow || 0) + 1);
            let end = alphabet.charAt(pick(options.endColumn, -1)) || 'ZZ';
            if (defined(options.endRow)) {
                end += options.endRow + 1;
            }
            return `${start}:${end}`;
        };
        /**
         * Fetch the actual spreadsheet using XMLHttpRequest.
         * @internal
         */
        function fetchSheet(fn) {
            const url = [
                'https://sheets.googleapis.com/v4/spreadsheets',
                googleSpreadsheetKey,
                'values',
                getRange(),
                '?alt=json&' +
                    'majorDimension=COLUMNS&' +
                    'valueRenderOption=UNFORMATTED_VALUE&' +
                    'dateTimeRenderOption=FORMATTED_STRING&' +
                    'key=' + options.googleAPIKey
            ].join('/');
            Data_ajax({
                url,
                dataType: 'json',
                success: function (json) {
                    fn(json);
                    if (options.enablePolling) {
                        data.liveDataTimeout = setTimeout(function () {
                            fetchSheet(fn);
                        }, refreshRate);
                    }
                },
                error: function (xhr, text) {
                    return options.error?.(text, xhr);
                }
            });
        }
        if (googleSpreadsheetKey) {
            delete options.googleSpreadsheetKey;
            fetchSheet(function (json) {
                // Prepare the data from the spreadsheet
                const columns = json.values;
                if (!columns || columns.length === 0) {
                    return false;
                }
                // Find the maximum row count in order to extend shorter columns
                const rowCount = columns.reduce((rowCount, column) => Math.max(rowCount, column.length), 0);
                // Insert null for empty spreadsheet cells (#5298)
                columns.forEach((column) => {
                    for (let i = 0; i < rowCount; i++) {
                        if (typeof column[i] === 'undefined') {
                            column[i] = null;
                        }
                    }
                });
                if (chart?.series) {
                    chart.update({
                        data: {
                            columns: columns
                        }
                    });
                }
                else { // #8245
                    data.columns = columns;
                    data.dataFound();
                }
            });
        }
        // This is an intermediate fetch, so always return false.
        return false;
    }
    /**
     * Trim a string from whitespaces.
     *
     * @function Highcharts.Data#trim
     *
     * @param {string} str
     *        String to trim
     *
     * @param {boolean} [inside=false]
     *        Remove all spaces between numbers.
     *
     * @return {string}
     *         Trimmed string
     */
    trim(str, inside) {
        if (typeof str === 'string') {
            str = str.replace(/^\s+|\s+$/g, '');
            // Clear white space inside the string, like thousands separators
            if (inside && /[\d\s]+/.test(str)) {
                str = str.replace(/\s/g, '');
            }
            if (this.decimalRegex) {
                str = str.replace(this.decimalRegex, '$1.$2');
            }
        }
        return str;
    }
    /**
     * Parse numeric cells in to number types and date types in to true dates.
     *
     * @function Highcharts.Data#parseTypes
     */
    parseTypes() {
        const columns = this.columns || [];
        let col = columns.length;
        while (col--) {
            this.parseColumn(columns[col], col);
        }
    }
    /**
     * Parse a single column. Set properties like .isDatetime and .isNumeric.
     *
     * @function Highcharts.Data#parseColumn
     *
     * @param {Array<Highcharts.DataValueType>} column
     *        Column to parse
     *
     * @param {number} col
     *        Column index
     */
    parseColumn(column, col) {
        const rawColumns = this.rawColumns, columns = this.columns = this.columns || [], firstRowAsNames = this.firstRowAsNames, isXColumn = this.valueCount?.xColumns.indexOf(col) !== -1, backup = [], chartOptions = this.chartOptions, columnTypes = this.options.columnTypes || [], columnType = columnTypes[col], forceCategory = (isXColumn &&
            (chartOptions?.xAxis &&
                splat(chartOptions.xAxis)[0].type === 'category')) || columnType === 'string', columnHasName = defined(column.name);
        let row = column.length, val, floatVal, trimVal, trimInsideVal, dateVal, diff, descending;
        if (!rawColumns[col]) {
            rawColumns[col] = [];
        }
        while (row--) {
            val = backup[row] || column[row];
            trimVal = this.trim(val);
            trimInsideVal = this.trim(val, true);
            floatVal = parseFloat(trimInsideVal);
            // Set it the first time
            if (typeof rawColumns[col][row] === 'undefined') {
                rawColumns[col][row] = trimVal;
            }
            // Disable number or date parsing by setting the X axis type to
            // category
            if (forceCategory ||
                (row === 0 && firstRowAsNames && !columnHasName)) {
                column[row] = '' + trimVal;
            }
            else if (+trimInsideVal === floatVal) { // Is numeric
                column[row] = floatVal;
                // If the number is greater than milliseconds in a year, assume
                // datetime
                if (floatVal > 365 * 24 * 3600 * 1000 &&
                    columnType !== 'float') {
                    column.isDatetime = true;
                }
                else {
                    column.isNumeric = true;
                }
                if (typeof column[row + 1] !== 'undefined') {
                    descending = floatVal > column[row + 1];
                }
                // String, continue to determine if it is a date string or really a
                // string
            }
            else {
                if (trimVal?.length) {
                    dateVal = this.parseDate(val);
                }
                // Only allow parsing of dates if this column is an x-column
                if (isXColumn && isNumber(dateVal) && columnType !== 'float') {
                    backup[row] = val;
                    column[row] = dateVal;
                    column.isDatetime = true;
                    // Check if the dates are uniformly descending or ascending.
                    // If they are not, chances are that they are a different
                    // time format, so check for alternative.
                    if (typeof column[row + 1] !== 'undefined') {
                        diff = dateVal > column[row + 1];
                        if (diff !== descending &&
                            typeof descending !== 'undefined') {
                            if (this.alternativeFormat) {
                                this.dateFormat = this.alternativeFormat;
                                row = column.length;
                                this.alternativeFormat =
                                    this.dateFormats[this.dateFormat]
                                        .alternative;
                            }
                            else {
                                column.unsorted = true;
                            }
                        }
                        descending = diff;
                    }
                }
                else { // String
                    column[row] = trimVal === '' ? null : trimVal;
                    if (row !== 0 &&
                        (column.isDatetime ||
                            column.isNumeric)) {
                        column.mixed = true;
                    }
                }
            }
        }
        // If strings are intermixed with numbers or dates in a parsed column,
        // it is an indication that parsing went wrong or the data was not
        // intended to display as numbers or dates and parsing is too
        // aggressive. Fall back to categories. Demonstrated in the
        // highcharts/demo/column-drilldown sample.
        if (isXColumn && column.mixed) {
            columns[col] = rawColumns[col];
        }
        // If the 0 column is date or number and descending, reverse all
        // columns.
        if (isXColumn && descending && this.options.sort) {
            for (col = 0; col < columns.length; col++) {
                columns[col].reverse();
                if (firstRowAsNames) {
                    const poppedColumn = columns[col].pop();
                    if (poppedColumn) {
                        columns[col].unshift(poppedColumn);
                    }
                }
            }
        }
    }
    /**
     * Parse a date and return it as a number. Overridable through
     * `options.parseDate`.
     *
     * @function Highcharts.Data#parseDate
     */
    parseDate(val) {
        const parseDate = this.options.parseDate;
        let ret, key, format, dateFormat = this.options.dateFormat || this.dateFormat, match;
        if (parseDate) {
            ret = parseDate(val);
        }
        else if (typeof val === 'string') {
            // Auto-detect the date format the first time
            if (!dateFormat) {
                for (key in this.dateFormats) { // eslint-disable-line guard-for-in
                    format = this.dateFormats[key];
                    match = val.match(format.regex);
                    if (match) {
                        this.dateFormat = dateFormat = key;
                        this.alternativeFormat = format.alternative;
                        ret = format.parser(match);
                        break;
                    }
                }
                // Next time, use the one previously found
            }
            else {
                format = this.dateFormats[dateFormat];
                if (!format) {
                    // The selected format is invalid
                    format = this.dateFormats['YYYY/mm/dd'];
                }
                match = val.match(format.regex);
                if (match) {
                    ret = format.parser(match);
                }
            }
            // Fall back to Date.parse
            if (!match) {
                if (val.match(/:.+(GMT|UTC|[Z+\-])/)) {
                    val = val
                        .replace(/\s*(?:GMT|UTC)?([+\-])(\d\d)(\d\d)$/, '$1$2:$3')
                        .replace(/(?:\s+|GMT|UTC)([+\-])/, '$1')
                        .replace(/(\d)\s*(?:GMT|UTC|Z)$/, '$1+00:00');
                }
                match = Date.parse(val);
                // External tools like Date.js and MooTools extend Date object
                // and return a date.
                if (typeof match === 'object' &&
                    match !== null &&
                    match.getTime) {
                    ret = (match.getTime() -
                        match.getTimezoneOffset() *
                            60000);
                    // Timestamp
                }
                else if (isNumber(match)) {
                    ret = match - (new Date(match)).getTimezoneOffset() * 60000;
                }
            }
        }
        return ret;
    }
    /**
     * Get the parsed data in a form that we can apply directly to the
     * `series.data` config. Array positions can be mapped using the
     * `series.keys` option.
     *
     * @example
     * const data = Highcharts.data({
     *   csv: document.getElementById('data').innerHTML
     * }).getData();
     *
     * @function Highcharts.Data#getData
     *
     * @return {Array<Array<DataValueType>>|undefined} Data rows
     */
    getData() {
        if (this.columns) {
            return this.rowsToColumns(this.columns)?.slice(1);
        }
    }
    /**
     * A hook for working directly on the parsed columns
     *
     * @function Highcharts.Data#parsed
     */
    parsed() {
        if (this.options.parsed) {
            return this.options.parsed.call(this, this.columns, this);
        }
    }
    /**
     * If a complete callback function is provided in the options, interpret the
     * columns into a Highcharts options object.
     *
     * The function requires that the context has the `valueCount` property set.
     *
     * @function Highcharts.Data#complete
     */
    complete() {
        const columns = this.columns = this.columns || [], xColumns = [], options = this.options, allSeriesBuilders = [];
        let type = 'linear', series, data, i, j, r, seriesIndex, chartOptions, builder, freeIndexes, typeCol, index;
        xColumns.length = columns.length;
        if (options.complete || options.afterComplete) {
            // Get the names and shift the top row
            if (this.firstRowAsNames) {
                for (i = 0; i < columns.length; i++) {
                    const curCol = columns[i];
                    if (!defined(curCol.name)) {
                        curCol.name = pick(curCol.shift(), '').toString();
                    }
                }
            }
            // Use the next columns for series
            series = [];
            freeIndexes = getFreeIndexes(columns?.length || 0, this.valueCount.seriesBuilders);
            // Populate defined series
            for (seriesIndex = 0; seriesIndex < this.valueCount.seriesBuilders.length; seriesIndex++) {
                builder = this.valueCount.seriesBuilders[seriesIndex];
                // If the builder can be populated with remaining columns, then
                // add it to allBuilders
                if (builder.populateColumns(freeIndexes)) {
                    allSeriesBuilders.push(builder);
                }
            }
            // Populate dynamic series
            while (freeIndexes.length > 0) {
                builder = new SeriesBuilder();
                builder.addColumnReader(0, 'x');
                // Mark index as used (not free)
                index = freeIndexes.indexOf(0);
                if (index !== -1) {
                    freeIndexes.splice(index, 1);
                }
                for (i = 0; i < this.valueCount.global; i++) {
                    // Create and add a column reader for the next free column
                    // index
                    builder.addColumnReader(void 0, this.valueCount.globalPointArrayMap[i]);
                }
                // If the builder can be populated with remaining columns, then
                // add it to allBuilders
                if (builder.populateColumns(freeIndexes)) {
                    allSeriesBuilders.push(builder);
                }
            }
            // Get the data-type from the first series x column
            if (allSeriesBuilders.length > 0 &&
                allSeriesBuilders[0].readers.length > 0) {
                typeCol = columns?.[allSeriesBuilders[0].readers[0].columnIndex ?? -1];
                if (typeof typeCol !== 'undefined') {
                    if (typeCol.isDatetime) {
                        type = 'datetime';
                    }
                    else if (!typeCol.isNumeric) {
                        type = 'category';
                    }
                }
            }
            // Axis type is category, then the "x" column should be called
            // "name"
            if (type === 'category') {
                for (seriesIndex = 0; seriesIndex < allSeriesBuilders.length; seriesIndex++) {
                    builder = allSeriesBuilders[seriesIndex];
                    for (r = 0; r < builder.readers.length; r++) {
                        if (builder.readers[r].configName === 'x') {
                            builder.readers[r].configName = 'name';
                        }
                    }
                }
            }
            // Read data for all builders
            for (seriesIndex = 0; seriesIndex < allSeriesBuilders.length; seriesIndex++) {
                builder = allSeriesBuilders[seriesIndex];
                // Iterate down the cells of each column and add data to the
                // series
                data = [];
                for (j = 0; j < columns[0].length; j++) {
                    data[j] = builder.read(columns, j);
                }
                // Add the series
                series[seriesIndex] = {
                    data,
                    pointStart: data[0] && (builder.pointIsArray ?
                        data[0]?.[0] :
                        data[0]?.x) || void 0
                };
                if (builder.name) {
                    series[seriesIndex].name = builder.name;
                }
                if (type === 'category') {
                    series[seriesIndex].turboThreshold = 0;
                    series[seriesIndex].pointStart = 0;
                }
            }
            // Do the callback
            chartOptions = { series };
            // Prepare the axis options
            if (type === 'linear' && (!this.xAxisOptions ||
                this.xAxisOptions.type === type)) {
                // Clear default value ('linear') if it is not changing the
                // axis type to avoid loosing animation
                type = this.xAxisOptions = void 0;
            }
            else {
                this.xAxisOptions = { type };
                if (type === 'category') {
                    this.xAxisOptions.uniqueNames = false;
                }
            }
            // Merge the xAxisOptions for the standalone Data module
            if (!this.chart) {
                merge(true, chartOptions, { xAxis: this.xAxisOptions || {} });
            }
            options.complete?.(chartOptions);
            // The afterComplete hook is used internally to avoid conflict with
            // the externally available complete option.
            options.afterComplete?.(this, chartOptions);
        }
    }
    /**
     * Sets properties directly on the xAxis object.
     *
     * @internal
     */
    xAxisUpdateHandler(axis) {
        const options = this.xAxisOptions;
        if (!options) {
            return;
        }
        // Set the axis properties if not blocked by the axis options that could
        // have changed in the update event.
        if (!axis.options.type && options.type) {
            axis.type = options.type;
        }
        if (!axis.options.uniqueNames &&
            options.uniqueNames === false) {
            axis.uniqueNames = options.uniqueNames;
        }
    }
    /**
     * Updates the chart with new data options.
     *
     * @function Highcharts.Data#update
     *
     * @param {Highcharts.DataOptions} options
     *        The new data options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the new options are set.
     */
    update(options, redraw) {
        const chart = this.chart, chartOptions = chart.options;
        if (options) {
            // Set the complete handler
            options.afterComplete = function (dataInstance, dataOptions) {
                if (!dataOptions) {
                    return;
                }
                // Avoid setting axis options unless they change. Running
                // Axis.update will cause the whole structure to be
                // destroyed and rebuilt, and animation is lost.
                const xAxis = chart.xAxis[0], xAxisOptions = dataInstance.xAxisOptions;
                // Update axis if xAxisOptions are different from the current
                // and not blocked by the axis options.
                if (xAxisOptions && xAxis && ((xAxis.type !== xAxisOptions.type && !xAxis.options.type) ||
                    (xAxis.uniqueNames &&
                        xAxisOptions.uniqueNames === false &&
                        xAxis.options.uniqueNames === void 0))) {
                    xAxis.update({}, false);
                }
                else {
                    // Prefer smooth points update when no axis update
                    (dataOptions?.series || []).forEach(function (seriesOptions) {
                        delete seriesOptions.pointStart;
                    });
                }
                chart.update(dataOptions, redraw, true);
            };
            // Apply it
            merge(true, chartOptions.data, options);
            // Reset columns if fetching spreadsheet, to force a re-fetch
            if (chartOptions.data?.googleSpreadsheetKey && !options.columns) {
                delete chartOptions.data.columns;
            }
            this.init(chartOptions.data || {}, chartOptions);
        }
    }
}
// Fire 1st xAxis properties modifier after the options are set.
addEvent((highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default()), 'afterSetOptions', function () {
    // Target first xAxis only
    if (this.isXAxis &&
        // Init or update
        (!this.chart.xAxis.length || this.chart.xAxis[0] === this)) {
        this.chart.data?.xAxisUpdateHandler(this);
    }
});
// Extend Chart.init so that the Chart constructor accepts a new configuration
// option group, data.
addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'init', function (e) {
    const chart = this, callback = e.args[1], defaultDataOptions = getOptions().data;
    let userOptions = (e.args[0] || {});
    if ((defaultDataOptions || userOptions && userOptions.data) &&
        !chart.hasDataDef) {
        chart.hasDataDef = true;
        /**
         * The data parser for this chart.
         *
         * @name Highcharts.Chart#data
         * @type {Highcharts.Data|undefined}
         */
        const dataOptions = merge(defaultDataOptions, userOptions.data);
        chart.data = new Data(extend(dataOptions, {
            afterComplete: function (dataInstance, dataOptions) {
                let i, series;
                // Merge series configs
                if (Object.hasOwnProperty.call(userOptions, 'series')) {
                    if (typeof userOptions.series === 'object') {
                        i = Math.max(userOptions.series.length, dataOptions?.series?.length ?? 0);
                        while (i--) {
                            series = userOptions.series[i] || {};
                            userOptions.series[i] = merge(series, dataOptions?.series?.[i] ?? {});
                        }
                    }
                    else { // Allow merging in dataOptions.series (#2856)
                        delete userOptions.series;
                    }
                }
                // Do the merge
                userOptions = merge(dataOptions, userOptions);
                // Register for access in events (Axis' afterSetOptions)
                chart.data = dataInstance;
                // Run chart.init again
                chart.init(userOptions, callback);
            }
        }), userOptions, chart);
        e.preventDefault();
    }
});
/**
 * Creates a new SeriesBuilder. A SeriesBuilder consists of a number
 * of ColumnReaders that reads columns and give them a name.
 * Ex: A series builder can be constructed to read column 3 as 'x' and
 * column 7 and 8 as 'y1' and 'y2'.
 * The output would then be points/rows of the form {x: 11, y1: 22, y2: 33}
 *
 * The name of the builder is taken from the second column. In the above
 * example it would be the column with index 7.
 *
 * @internal
 * @class
 * @name SeriesBuilder
 */
class SeriesBuilder {
    constructor() {
        /* eslint-disable no-invalid-this */
        this.readers = [];
        this.pointIsArray = true;
    }
    /**
     * Populates readers with column indexes. A reader can be added without
     * a specific index and for those readers the index is taken sequentially
     * from the free columns (this is handled by the ColumnCursor instance).
     *
     * @function SeriesBuilder#populateColumns
     */
    populateColumns(freeIndexes) {
        const builder = this;
        let enoughColumns = true;
        // Loop each reader and give it an index if its missing.
        // The freeIndexes.shift() will return undefined if there
        // are no more columns.
        builder.readers.forEach((reader) => {
            if (typeof reader.columnIndex === 'undefined') {
                reader.columnIndex = freeIndexes.shift();
            }
        });
        // Now, all readers should have columns mapped. If not
        // then return false to signal that this series should
        // not be added.
        builder.readers.forEach((reader) => {
            if (typeof reader.columnIndex === 'undefined') {
                enoughColumns = false;
            }
        });
        return enoughColumns;
    }
    /**
     * Reads a row from the dataset and returns a point or array depending
     * on the names of the readers.
     *
     * @function SeriesBuilder#read<T>
     */
    read(columns, rowIndex) {
        const builder = this, pointIsArray = builder.pointIsArray, point = pointIsArray ? [] : {};
        // Loop each reader and ask it to read its value.
        // Then, build an array or point based on the readers names.
        builder.readers.forEach((reader) => {
            const value = columns[reader.columnIndex][rowIndex];
            if (pointIsArray) {
                point.push(value);
            }
            else {
                if (reader.configName.indexOf('.') > 0) {
                    // Handle nested property names
                    highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default().prototype.setNestedProperty(point, value, reader.configName);
                }
                else {
                    point[reader.configName] = value;
                }
            }
        });
        // The name comes from the first column (excluding the x column)
        if (typeof this.name === 'undefined' && builder.readers.length >= 2) {
            const columnIndexes = [];
            builder.readers.forEach(function (reader) {
                if (reader.configName === 'x' ||
                    reader.configName === 'name' ||
                    reader.configName === 'y') {
                    if (typeof reader.columnIndex !== 'undefined') {
                        columnIndexes.push(reader.columnIndex);
                    }
                }
            });
            if (columnIndexes.length >= 2) {
                // Remove the first one (x col)
                columnIndexes.shift();
                // Sort the remaining
                columnIndexes.sort(function (a, b) {
                    return a - b;
                });
            }
            // Now use the lowest index as name column
            this.name = columns[pick(columnIndexes.shift(), 0)].name;
        }
        return point;
    }
    /**
     * Creates and adds ColumnReader from the given columnIndex and configName.
     * ColumnIndex can be undefined and in that case the reader will be given
     * an index when columns are populated.
     *
     * @function SeriesBuilder#addColumnReader
     */
    addColumnReader(columnIndex, configName) {
        this.readers.push({
            columnIndex: columnIndex,
            configName: configName
        });
        if (!(configName === 'x' ||
            configName === 'y' ||
            typeof configName === 'undefined')) {
            this.pointIsArray = false;
        }
    }
    /**
     * Returns an array of column indexes that the builder will use when
     * reading data.
     *
     * @function SeriesBuilder#getReferencedColumnIndexes
     */
    getReferencedColumnIndexes() {
        const referencedColumnIndexes = [];
        let i, columnReader;
        for (i = 0; i < this.readers.length; i = i + 1) {
            columnReader = this.readers[i];
            if (typeof columnReader.columnIndex !== 'undefined') {
                referencedColumnIndexes.push(columnReader.columnIndex);
            }
        }
        return referencedColumnIndexes;
    }
    /**
     * Returns true if the builder has a reader for the given configName.
     *
     * @function SeriesBuilder#hasReader
     */
    hasReader(configName) {
        let i, columnReader;
        for (i = 0; i < this.readers.length; i = i + 1) {
            columnReader = this.readers[i];
            if (columnReader.configName === configName) {
                return true;
            }
        }
        // Else return undefined
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Extensions_Data = (Data);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback function to modify the CSV before parsing it by the data module.
 *
 * @callback Highcharts.DataBeforeParseCallbackFunction
 *
 * @param {string} csv
 *        The CSV to modify.
 *
 * @return {string}
 *         The CSV to parse.
 */
/**
 * Callback function that gets called after parsing data.
 *
 * @callback Highcharts.DataCompleteCallbackFunction
 *
 * @param {Highcharts.Options} chartOptions
 *        The chart options that were used.
 */
/**
 * Callback function that returns the corresponding Date object to a match.
 *
 * @callback Highcharts.DataDateFormatCallbackFunction
 *
 * @param {Array<number>} match
 *
 * @return {number}
 */
/**
 * Structure for alternative date formats to parse.
 *
 * @interface Highcharts.DataDateFormatObject
 */ /**
* @name Highcharts.DataDateFormatObject#alternative
* @type {string|undefined}
*/ /**
* @name Highcharts.DataDateFormatObject#parser
* @type {Highcharts.DataDateFormatCallbackFunction}
*/ /**
* @name Highcharts.DataDateFormatObject#regex
* @type {global.RegExp}
*/
/**
 * Possible types for a data item in a column or row.
 *
 * @typedef {number|string|null} Highcharts.DataValueType
 */
/**
 * Callback function to parse string representations of dates into
 * JavaScript timestamps (milliseconds since 1.1.1970).
 *
 * @callback Highcharts.DataParseDateCallbackFunction
 *
 * @param {string} dateValue
 *
 * @return {number}
 *         Timestamp (milliseconds since 1.1.1970) as integer for Date class.
 */
/**
 * Callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories.
 *
 * @callback Highcharts.DataParsedCallbackFunction
 *
 * @param {Array<Array<*>>} columns
 *        The parsed columns by the data module.
 *
 * @return {boolean|undefined}
 *         Return `false` to stop completion, or call `this.complete()` to
 *         continue async.
 */
/* *
 *
 *  API Options
 *
 * */
/**
 * The Data module provides a simplified interface for adding data to
 * a chart from sources like CVS, HTML tables or grid views. See also
 * the [tutorial article on the Data module](
 * https://www.highcharts.com/docs/working-with-data/data-module).
 *
 * It requires the `modules/data.js` file to be loaded.
 *
 * Please note that the default way of adding data in Highcharts, without
 * the need of a module, is through the [series._type_.data](#series.line.data)
 * option.
 *
 * @sample {highcharts} highcharts/demo/column-parsed/
 *         HTML table
 * @sample {highcharts} highcharts/data/csv/
 *         CSV
 *
 * @since     4.0
 * @requires  modules/data
 * @apioption data
 */
/**
 * A callback function to modify the CSV before parsing it. Return the modified
 * string.
 *
 * @sample {highcharts} highcharts/demo/line-csv/
 *         Modify CSV before parse
 *
 * @type      {Highcharts.DataBeforeParseCallbackFunction}
 * @since     6.1
 * @apioption data.beforeParse
 */
/**
 * A two-dimensional array representing the input data on tabular form.
 * This input can be used when the data is already parsed, for example
 * from a grid view component. Each cell can be a string or number.
 * If not switchRowsAndColumns is set, the columns are interpreted as
 * series.
 *
 * @see [data.rows](#data.rows)
 *
 * @sample {highcharts} highcharts/data/columns/
 *         Columns
 *
 * @type      {Array<Array<Highcharts.DataValueType>>}
 * @since     4.0
 * @apioption data.columns
 */
/**
 * An array option that specifies the data type for each column in the series
 * loaded within the data module.
 *
 * Possible values: `"string"`, `"number"`, `"float"`, `"date"`.
 *
 * @sample {highcharts|highstock} highcharts/data/column-types/
 *         X-axis categories based on CSV data
 * @sample {highmaps} highcharts/data/column-types-map/
 *         Map chart created with fips from CSV
 *
 * @type       {Array<'string'|'number'|'float'|'date'>}
 * @since      11.3.0
 * @validvalue ["string", "number", "float", "date"]
 * @apioption  data.columnTypes
 */
/**
 * The callback that is evaluated when the data is finished loading,
 * optionally from an external source, and parsed. The first argument
 * passed is a finished chart options object, containing the series.
 * These options can be extended with additional options and passed
 * directly to the chart constructor.
 *
 * @see [data.parsed](#data.parsed)
 *
 * @sample {highcharts} highcharts/data/complete/
 *         Modify data on complete
 *
 * @type      {Highcharts.DataCompleteCallbackFunction}
 * @since     4.0
 * @apioption data.complete
 */
/**
 * A comma delimited string to be parsed. Related options are [startRow](
 * #data.startRow), [endRow](#data.endRow), [startColumn](#data.startColumn)
 * and [endColumn](#data.endColumn) to delimit what part of the table
 * is used. The [lineDelimiter](#data.lineDelimiter) and [itemDelimiter](
 * #data.itemDelimiter) options define the CSV delimiter formats.
 *
 * The built-in CSV parser doesn't support all flavours of CSV, so in
 * some cases it may be necessary to use an external CSV parser. See
 * [this example](https://jsfiddle.net/highcharts/u59176h4/) of parsing
 * CSV through the MIT licensed [Papa Parse](http://papaparse.com/)
 * library.
 *
 * @sample {highcharts} highcharts/data/csv/
 *         Data from CSV
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.csv
 */
/**
 * Which of the predefined date formats in Date.prototype.dateFormats
 * to use to parse date values. Defaults to a best guess based on what
 * format gives valid and ordered dates. Valid options include: `YYYY/mm/dd`,
 * `dd/mm/YYYY`, `mm/dd/YYYY`, `dd/mm/YY`, `mm/dd/YY`.
 *
 * @see [data.parseDate](#data.parseDate)
 *
 * @sample {highcharts} highcharts/data/dateformat-auto/
 *         Best guess date format
 *
 * @type       {string}
 * @since      4.0
 * @validvalue ["YYYY/mm/dd", "dd/mm/YYYY", "mm/dd/YYYY", "dd/mm/YYYY",
 *             "dd/mm/YY", "mm/dd/YY"]
 * @apioption  data.dateFormat
 */
/**
 * The decimal point used for parsing numbers in the CSV.
 *
 * If both this and data.delimiter is set to `undefined`, the parser will
 * attempt to deduce the decimal point automatically.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Comma as decimal point
 *
 * @type      {string}
 * @default   .
 * @since     4.1.0
 * @apioption data.decimalPoint
 */
/**
 * In tabular input data, the last column (indexed by 0) to use. Defaults
 * to the last column containing data.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @since     4.0
 * @apioption data.endColumn
 */
/**
 * In tabular input data, the last row (indexed by 0) to use. Defaults
 * to the last row containing data.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @since     4.0.4
 * @apioption data.endRow
 */
/**
 * Whether to use the first row in the data set as series names.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Don't get series names from the CSV
 * @sample {highstock} highcharts/data/start-end/
 *         Don't get series names from the CSV
 *
 * @type      {boolean}
 * @default   true
 * @since     4.1.0
 * @product   highcharts highstock gantt
 * @apioption data.firstRowAsNames
 */
/**
 * The Google Spreadsheet API key required for access generated at [API Services
 * / Credentials](https://console.cloud.google.com/apis/credentials). See a
 * comprehensive tutorial for setting up the key at the
 * [Hands-On Data Visualization](https://handsondataviz.org/google-sheets-api-key.html)
 * book website.
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string}
 * @since     9.2.2
 * @apioption data.googleAPIKey
 */
/**
 * The key or `spreadsheetId` value for a Google Spreadsheet to load. See
 * [developers.google.com](https://developers.google.com/sheets/api/guides/concepts)
 * for how to find the `spreadsheetId`.
 *
 * In order for Google Sheets to load, a valid [googleAPIKey](#data.googleAPIKey)
 * must also be given.
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.googleSpreadsheetKey
 */
/**
 * The Google Spreadsheet `range` to use in combination with
 * [googleSpreadsheetKey](#data.googleSpreadsheetKey). See
 * [developers.google.com](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get)
 * for details.
 *
 * If given, it takes precedence over `startColumn`, `endColumn`, `startRow` and
 * `endRow`.
 *
 * ```js
 * googleSpreadsheetRange: 'Fruit Consumption' // Load a named worksheet
 * googleSpreadsheetRange: 'A:Z' // Load columns A to Z
 * ```
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string|undefined}
 * @since     9.2.2
 * @apioption data.googleSpreadsheetRange
 */
/**
 * No longer works since v9.2.2, that uses Google Sheets API v4. Instead, use
 * the [googleSpreadsheetRange](#data.googleSpreadsheetRange) option to load a
 * specific sheet.
 *
 * @deprecated
 * @type      {string}
 * @since     4.0
 * @apioption data.googleSpreadsheetWorksheet
 */
/**
 * Item or cell delimiter for parsing CSV. Defaults to the tab character
 * `\t` if a tab character is found in the CSV string, if not it defaults
 * to `,`.
 *
 * If this is set to false or undefined, the parser will attempt to deduce
 * the delimiter automatically.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Delimiters
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.itemDelimiter
 */
/**
 * Line delimiter for parsing CSV.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Delimiters
 *
 * @type      {string}
 * @default   \n
 * @since     4.0
 * @apioption data.lineDelimiter
 */
/**
 * A callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories. Return `false` to stop completion, or call
 * `this.complete()` to continue async.
 *
 * @see [data.complete](#data.complete)
 *
 * @sample {highcharts} highcharts/data/parsed/
 *         Modify data after parse
 *
 * @type      {Highcharts.DataParsedCallbackFunction}
 * @since     4.0
 * @apioption data.parsed
 */
/**
 * A callback function to parse string representations of dates into
 * JavaScript timestamps. Should return an integer timestamp on success.
 *
 * @see [dateFormat](#data.dateFormat)
 *
 * @type      {Highcharts.DataParseDateCallbackFunction}
 * @since     4.0
 * @apioption data.parseDate
 */
/**
 * The same as the columns input option, but defining rows instead of
 * columns.
 *
 * @see [data.columns](#data.columns)
 *
 * @sample {highcharts} highcharts/data/rows/
 *         Data in rows
 *
 * @type      {Array<Array<Highcharts.DataValueType>>}
 * @since     4.0
 * @apioption data.rows
 */
/**
 * An array containing dictionaries for each series. A dictionary exists of
 * Point property names as the key and the CSV column index as the value.
 *
 * @sample {highcharts} highcharts/data/seriesmapping-label/
 *         Label from data set
 *
 * @type      {Array<Highcharts.Dictionary<number>>}
 * @since     4.0.4
 * @apioption data.seriesMapping
 */
/**
 * In tabular input data, the first column (indexed by 0) to use.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @apioption data.startColumn
 */
/**
 * In tabular input data, the first row (indexed by 0) to use.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @apioption data.startRow
 */
/**
 * Switch rows and columns of the input data, so that `this.columns`
 * effectively becomes the rows of the data set, and the rows are interpreted
 * as series.
 *
 * @sample {highcharts} highcharts/data/switchrowsandcolumns/
 *         Switch rows and columns
 *
 * @type      {boolean}
 * @default   false
 * @since     4.0
 * @apioption data.switchRowsAndColumns
 */
/**
 * An HTML table or the id of such to be parsed as input data. Related
 * options are `startRow`, `endRow`, `startColumn` and `endColumn` to
 * delimit what part of the table is used.
 *
 * @sample {highcharts} highcharts/demo/column-parsed/
 *         Parsed table
 *
 * @type      {string|global.HTMLElement}
 * @since     4.0
 * @apioption data.table
 */
/**
 * An URL to a remote CSV dataset. Will be fetched when the chart is created
 * using Ajax.
 *
 * @sample highcharts/demo/livedata-columns
 *         Categorized bar chart with CSV and live polling
 * @sample highcharts/data/livedata-csv
 *         Time based line chart with CSV and live polling
 *
 * @type      {string}
 * @apioption data.csvURL
 */
/**
 * A URL to a remote JSON dataset, structured as a row array.
 * Will be fetched when the chart is created using Ajax.
 *
 * @sample highcharts/data/livedata-rows
 *         Rows with live polling
 *
 * @type      {string}
 * @apioption data.rowsURL
 */
/**
 * A URL to a remote JSON dataset, structured as a column array.
 * Will be fetched when the chart is created using Ajax.
 *
 * @sample highcharts/demo/livedata-columns
 *         Columns with live polling
 *
 * @type      {string}
 * @apioption data.columnsURL
 */
/**
 * Sets the refresh rate for data polling when importing remote dataset by
 * setting [data.csvURL](data.csvURL), [data.rowsURL](data.rowsURL),
 * [data.columnsURL](data.columnsURL), or
 * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
 *
 * Note that polling must be enabled by setting
 * [data.enablePolling](data.enablePolling) to true.
 *
 * The value is the number of seconds between pollings.
 * It cannot be set to less than 1 second.
 *
 * @sample highcharts/demo/live-data
 *         Live data with user set refresh rate
 *
 * @default   1
 * @type      {number}
 * @apioption data.dataRefreshRate
 */
/**
 * Enables automatic refetching of remote datasets every _n_ seconds (defined by
 * setting [data.dataRefreshRate](data.dataRefreshRate)).
 *
 * Only works when either [data.csvURL](data.csvURL),
 * [data.rowsURL](data.rowsURL), [data.columnsURL](data.columnsURL), or
 * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
 *
 * @sample highcharts/demo/live-data
 *         Live data
 * @sample highcharts/demo/livedata-columns
 *         Categorized bar chart with CSV and live polling
 *
 * @type      {boolean}
 * @default   false
 * @apioption data.enablePolling
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/data.src.js





const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Classes
G.Data = G.Data || Extensions_Data;
G.HttpUtilities = G.HttpUtilities || Core_HttpUtilities;
// Functions
G.ajax = G.HttpUtilities.ajax;
G.data = G.Data.data;
G.getJSON = G.HttpUtilities.getJSON;
G.post = G.HttpUtilities.post;
/* harmony default export */ const data_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});