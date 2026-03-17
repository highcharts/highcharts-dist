// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts Gantt JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/grid-axis
 * @requires highcharts
 *
 * GridAxis
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Axis"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/grid-axis", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Axis"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/grid-axis"] = factory(root["_Highcharts"], root["_Highcharts"]["Axis"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Axis"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__532__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 532:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

/***/ }),

/***/ 944:
/***/ ((module) => {

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
  "default": () => (/* binding */ grid_axis_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
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
/* eslint-disable valid-jsdoc */
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
    /* eslint-enable valid-jsdoc */
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
 * Utility for crisping a line position to the nearest full pixel depening on
 * the line width
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
 * Remove the last occurence of an item from an array.
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
    /* eslint-enable valid-jsdoc */
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
/* eslint-disable valid-jsdoc */
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
    /* eslint-enable valid-jsdoc */
    eventArguments = eventArguments || {};
    if (doc?.createEvent &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== H))) {
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
 * @param {unknown} obj
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
/* eslint-disable valid-jsdoc */
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
    /* eslint-enable valid-jsdoc */
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
/* eslint-disable valid-jsdoc */
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
/* eslint-disable valid-jsdoc */
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
    /* eslint-enable valid-jsdoc */
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
 * standard does not specify the behaviour when items are equal.
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

;// ./code/es-modules/Core/Axis/GridAxis.js
/* *
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Lars A. V. Cabrera
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { dateFormats } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


/* *
 *
 *  Enums
 *
 * */
/**
 * Enum for which side the axis is on. Maps to axis.side.
 * @internal
 */
var GridAxisSide;
(function (GridAxisSide) {
    GridAxisSide[GridAxisSide["top"] = 0] = "top";
    GridAxisSide[GridAxisSide["right"] = 1] = "right";
    GridAxisSide[GridAxisSide["bottom"] = 2] = "bottom";
    GridAxisSide[GridAxisSide["left"] = 3] = "left";
})(GridAxisSide || (GridAxisSide = {}));
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function argsToArray(args) {
    return Array.prototype.slice.call(args, 1);
}
/** @internal */
function GridAxis_isObject(x) {
    // Always use strict mode
    return isObject(x, true);
}
/** @internal */
function applyGridOptions(axis) {
    const options = axis.options;
    // Center-align by default
    /*
    if (!options.labels) {
        options.labels = {};
    }
    */
    options.labels.align = pick(options.labels.align, 'center');
    // @todo: Check against tickLabelPlacement between/on etc
    /* Prevents adding the last tick label if the axis is not a category
       axis.
       Since numeric labels are normally placed at starts and ends of a
       range of value, and this module makes the label point at the value,
       an "extra" label would appear. */
    if (!axis.categories) {
        options.showLastLabel = false;
    }
    // Prevents rotation of labels when squished, as rotating them would not
    // help.
    axis.labelRotation = 0;
    options.labels.rotation = 0;
    // Allow putting ticks closer than their data points.
    options.minTickInterval = 1;
}
/**
 * Extends axis class with grid support.
 * @internal
 */
function compose(AxisClass, ChartClass, TickClass) {
    if (!AxisClass.keepProps.includes('grid')) {
        AxisClass.keepProps.push('grid');
        AxisClass.prototype.getMaxLabelDimensions = getMaxLabelDimensions;
        wrap(AxisClass.prototype, 'unsquish', wrapUnsquish);
        wrap(AxisClass.prototype, 'getOffset', wrapGetOffset);
        // Add event handlers
        addEvent(AxisClass, 'init', onInit);
        addEvent(AxisClass, 'afterGetTitlePosition', onAfterGetTitlePosition);
        addEvent(AxisClass, 'afterInit', onAfterInit);
        addEvent(AxisClass, 'afterRender', onAfterRender);
        addEvent(AxisClass, 'afterSetAxisTranslation', onAfterSetAxisTranslation);
        addEvent(AxisClass, 'afterSetOptions', onAfterSetOptions);
        addEvent(AxisClass, 'afterSetOptions', onAfterSetOptions2);
        addEvent(AxisClass, 'afterSetScale', onAfterSetScale);
        addEvent(AxisClass, 'afterTickSize', onAfterTickSize);
        addEvent(AxisClass, 'trimTicks', onTrimTicks);
        addEvent(AxisClass, 'destroy', onDestroy);
        addEvent(ChartClass, 'afterSetChartSize', onChartAfterSetChartSize);
        addEvent(TickClass, 'afterGetLabelPosition', onTickAfterGetLabelPosition);
        addEvent(TickClass, 'labelFormat', onTickLabelFormat);
    }
    return AxisClass;
}
/**
 * Get the largest label width and height.
 *
 * @internal
 * @function Highcharts.Axis#getMaxLabelDimensions
 *
 * @param {Highcharts.Dictionary<Highcharts.Tick>} ticks
 * All the ticks on one axis.
 *
 * @param {Array<number|string>} tickPositions
 * All the tick positions on one axis.
 *
 * @return {Highcharts.SizeObject}
 * Object containing the properties height and width.
 *
 * @todo Move this to the generic axis implementation, as it is used there.
 */
function getMaxLabelDimensions(ticks, tickPositions) {
    const dimensions = {
        width: 0,
        height: 0
    };
    tickPositions.forEach(function (pos) {
        const tick = ticks[pos];
        let labelHeight = 0, labelWidth = 0, label;
        if (GridAxis_isObject(tick)) {
            label = GridAxis_isObject(tick.label) ? tick.label : {};
            // Find width and height of label
            labelHeight = label.getBBox ? label.getBBox().height : 0;
            if (label.textStr && !isNumber(label.textPxLength)) {
                label.textPxLength = label.getBBox().width;
            }
            labelWidth = isNumber(label.textPxLength) ?
                // Math.round ensures crisp lines
                Math.round(label.textPxLength) :
                0;
            if (label.textStr) {
                // Set the tickWidth same as the label width after ellipsis
                // applied #10281
                labelWidth = Math.round(label.getBBox().width);
            }
            // Update the result if width and/or height are larger
            dimensions.height = Math.max(labelHeight, dimensions.height);
            dimensions.width = Math.max(labelWidth, dimensions.width);
        }
    });
    // For tree grid, add indentation
    if (this.type === 'treegrid' &&
        this.treeGrid &&
        this.treeGrid.mapOfPosToGridNode) {
        const treeDepth = this.treeGrid.mapOfPosToGridNode[-1].height || 0;
        dimensions.width += (this.options.labels.indentation *
            (treeDepth - 1));
    }
    return dimensions;
}
/**
 * Handle columns and getOffset.
 * @internal
 */
function wrapGetOffset(proceed) {
    const { grid } = this, 
    // On the left side we handle the columns first because the offset is
    // calculated from the plot area and out
    columnsFirst = this.side === 3;
    if (!columnsFirst) {
        proceed.apply(this);
    }
    if (!grid?.isColumn) {
        let columns = grid?.columns || [];
        if (columnsFirst) {
            columns = columns.slice().reverse();
        }
        columns
            .forEach((column) => {
            column.getOffset();
        });
    }
    if (columnsFirst) {
        proceed.apply(this);
    }
}
/** @internal */
function onAfterGetTitlePosition(e) {
    const axis = this;
    const options = axis.options;
    const gridOptions = options.grid || {};
    if (gridOptions.enabled === true) {
        // Compute anchor points for each of the title align options
        const { axisTitle, height: axisHeight, horiz, left: axisLeft, offset, opposite, options, top: axisTop, width: axisWidth } = axis;
        const tickSize = axis.tickSize();
        const titleWidth = axisTitle?.getBBox().width;
        const xOption = options.title.x;
        const yOption = options.title.y;
        const titleMargin = pick(options.title.margin, horiz ? 5 : 10);
        const titleFontSize = axisTitle ? axis.chart.renderer.fontMetrics(axisTitle).f : 0;
        const crispCorr = tickSize ? tickSize[0] / 2 : 0;
        // TODO account for alignment
        // the position in the perpendicular direction of the axis
        const offAxis = ((horiz ? axisTop + axisHeight : axisLeft) +
            (horiz ? 1 : -1) * // Horizontal axis reverses the margin
                (opposite ? -1 : 1) * // So does opposite axes
                crispCorr +
            (axis.side === GridAxisSide.bottom ? titleFontSize : 0));
        e.titlePosition.x = horiz ?
            axisLeft - (titleWidth || 0) / 2 - titleMargin + xOption :
            offAxis + (opposite ? axisWidth : 0) + offset + xOption;
        e.titlePosition.y = horiz ?
            (offAxis -
                (opposite ? axisHeight : 0) +
                (opposite ? titleFontSize : -titleFontSize) / 2 +
                offset +
                yOption) :
            axisTop - titleMargin + yOption;
    }
}
/** @internal */
function onAfterInit() {
    const axis = this;
    const { chart, options: { grid: gridOptions = {} }, userOptions } = axis;
    if (gridOptions.enabled) {
        applyGridOptions(axis);
    }
    if (gridOptions.columns) {
        const columns = axis.grid.columns = [];
        let columnIndex = axis.grid.columnIndex = 0;
        // Handle columns, each column is a grid axis
        while (++columnIndex < gridOptions.columns.length) {
            const columnOptions = merge(userOptions, gridOptions.columns[columnIndex], {
                isInternal: true,
                linkedTo: 0,
                // Disable by default the scrollbar on the grid axis
                scrollbar: {
                    enabled: false
                }
            }, 
            // Avoid recursion
            {
                grid: {
                    columns: void 0
                }
            });
            const column = new (highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default())(axis.chart, columnOptions, axis.coll);
            column.grid.isColumn = true;
            column.grid.columnIndex = columnIndex;
            // Remove column axis from chart axes array, and place it
            // in the columns array.
            erase(chart.axes, column);
            erase(chart[axis.coll] || [], column);
            columns.push(column);
        }
    }
}
/**
 * Draw an extra line on the far side of the outermost axis,
 * creating floor/roof/wall of a grid. And some padding.
 * ```
 * Make this:
 *             (axis.min) __________________________ (axis.max)
 *                           |    |    |    |    |
 * Into this:
 *             (axis.min) __________________________ (axis.max)
 *                        ___|____|____|____|____|__
 * ```
 * @internal
 */
function onAfterRender() {
    const axis = this, { axisTitle, grid, options } = axis, gridOptions = options.grid || {};
    if (gridOptions.enabled === true) {
        const min = axis.min || 0, max = axis.max || 0, firstTick = axis.ticks[axis.tickPositions[0]];
        // Adjust the title max width to the column width (#19657)
        if (axisTitle &&
            !axis.chart.styledMode &&
            firstTick?.slotWidth &&
            !axis.options.title.style.width) {
            axisTitle.css({ width: `${firstTick.slotWidth}px` });
        }
        // @todo actual label padding (top, bottom, left, right)
        axis.maxLabelDimensions = axis.getMaxLabelDimensions(axis.ticks, axis.tickPositions);
        // Remove right wall before rendering if updating
        if (axis.rightWall) {
            axis.rightWall.destroy();
        }
        /*
        Draw an extra axis line on outer axes
                    >
        Make this:    |______|______|______|___

                    > _________________________
        Into this:    |______|______|______|__|
                                                */
        if (axis.grid?.isOuterAxis() && axis.axisLine) {
            const lineWidth = options.lineWidth;
            if (lineWidth) {
                const linePath = axis.getLinePath(lineWidth), startPoint = linePath[0], endPoint = linePath[1], 
                // Negate distance if top or left axis
                // Subtract 1px to draw the line at the end of the tick
                tickLength = (axis.tickSize('tick') || [1])[0], distance = tickLength * ((axis.side === GridAxisSide.top ||
                    axis.side === GridAxisSide.left) ? -1 : 1);
                // If axis is horizontal, reposition line path vertically
                if (startPoint[0] === 'M' && endPoint[0] === 'L') {
                    if (axis.horiz) {
                        startPoint[2] += distance;
                        endPoint[2] += distance;
                    }
                    else {
                        startPoint[1] += distance;
                        endPoint[1] += distance;
                    }
                }
                // If it doesn't exist, add an upper and lower border
                // for the vertical grid axis.
                if (!axis.horiz && axis.chart.marginRight) {
                    const upperBorderStartPoint = startPoint, upperBorderEndPoint = [
                        'L',
                        axis.left,
                        startPoint[2] || 0
                    ], upperBorderPath = [
                        upperBorderStartPoint,
                        upperBorderEndPoint
                    ], lowerBorderEndPoint = [
                        'L',
                        axis.chart.chartWidth - axis.chart.marginRight,
                        axis.toPixels(max + axis.tickmarkOffset)
                    ], lowerBorderStartPoint = [
                        'M',
                        endPoint[1] || 0,
                        axis.toPixels(max + axis.tickmarkOffset)
                    ], lowerBorderPath = [
                        lowerBorderStartPoint,
                        lowerBorderEndPoint
                    ];
                    if (!axis.grid.upperBorder && min % 1 !== 0) {
                        axis.grid.upperBorder = axis.grid.renderBorder(upperBorderPath);
                    }
                    if (axis.grid.upperBorder) {
                        axis.grid.upperBorder.attr({
                            stroke: options.lineColor,
                            'stroke-width': options.lineWidth
                        });
                        axis.grid.upperBorder.animate({
                            d: upperBorderPath
                        });
                    }
                    if (!axis.grid.lowerBorder && max % 1 !== 0) {
                        axis.grid.lowerBorder = axis.grid.renderBorder(lowerBorderPath);
                    }
                    if (axis.grid.lowerBorder) {
                        axis.grid.lowerBorder.attr({
                            stroke: options.lineColor,
                            'stroke-width': options.lineWidth
                        });
                        axis.grid.lowerBorder.animate({
                            d: lowerBorderPath
                        });
                    }
                }
                // Render an extra line parallel to the existing axes, to
                // close the grid.
                if (!axis.grid.axisLineExtra) {
                    axis.grid.axisLineExtra = axis.grid.renderBorder(linePath);
                }
                else {
                    axis.grid.axisLineExtra.attr({
                        stroke: options.lineColor,
                        'stroke-width': options.lineWidth
                    });
                    axis.grid.axisLineExtra.animate({
                        d: linePath
                    });
                }
                // Show or hide the line depending on options.showEmpty
                axis.axisLine[axis.showAxis ? 'show' : 'hide']();
            }
        }
        (grid?.columns || []).forEach((column) => column.render());
        // Manipulate the tick mark visibility
        // based on the axis.max- allows smooth scrolling.
        if (!axis.horiz &&
            axis.chart.hasRendered &&
            (axis.scrollbar || axis.linkedParent?.scrollbar) &&
            axis.tickPositions.length) {
            const tickmarkOffset = axis.tickmarkOffset, lastTick = axis.tickPositions[axis.tickPositions.length - 1], firstTick = axis.tickPositions[0];
            let label, tickMark;
            while ((label = axis.hiddenLabels.pop()) && label.element) {
                label.show(); // #15453
            }
            while ((tickMark = axis.hiddenMarks.pop()) &&
                tickMark.element) {
                tickMark.show(); // #16439
            }
            // Hide/show first tick label.
            label = axis.ticks[firstTick].label;
            if (label) {
                if (min - firstTick > tickmarkOffset) {
                    axis.hiddenLabels.push(label.hide());
                }
                else {
                    label.show();
                }
            }
            // Hide/show last tick mark/label.
            label = axis.ticks[lastTick].label;
            if (label) {
                if (lastTick - max > tickmarkOffset) {
                    axis.hiddenLabels.push(label.hide());
                }
                else {
                    label.show();
                }
            }
            const mark = axis.ticks[lastTick].mark;
            if (mark &&
                lastTick - max < tickmarkOffset &&
                lastTick - max > 0 && axis.ticks[lastTick].isLast) {
                axis.hiddenMarks.push(mark.hide());
            }
        }
    }
}
/** @internal */
function onAfterSetAxisTranslation() {
    const axis = this;
    const tickInfo = axis.tickPositions?.info;
    const options = axis.options;
    const gridOptions = options.grid || {};
    const userLabels = axis.userOptions.labels || {};
    // Fire this only for the Gantt type chart, #14868.
    if (gridOptions.enabled) {
        if (axis.horiz) {
            axis.series.forEach((series) => {
                series.options.pointRange = 0;
            });
            // Lower level time ticks, like hours or minutes, represent
            // points in time and not ranges. These should be aligned
            // left in the grid cell by default. The same applies to
            // years of higher order.
            if (tickInfo &&
                options.dateTimeLabelFormats &&
                options.labels &&
                !defined(userLabels.align) &&
                (options.dateTimeLabelFormats[tickInfo.unitName]
                    .range === false ||
                    tickInfo.count > 1 // Years
                )) {
                options.labels.align = 'left';
                if (!defined(userLabels.x)) {
                    options.labels.x = 3;
                }
            }
        }
        else {
            // Don't trim ticks which not in min/max range but
            // they are still in the min/max plus tickInterval.
            if (this.type !== 'treegrid' &&
                axis.grid &&
                axis.grid.columns) {
                this.minPointOffset = this.tickInterval;
            }
        }
    }
}
/**
 * Creates a left and right wall on horizontal axes:
 * - Places leftmost tick at the start of the axis, to create a left
 *   wall
 * - Ensures that the rightmost tick is at the end of the axis, to
 *   create a right wall.
 * @internal
 */
function onAfterSetOptions(e) {
    const options = this.options, userOptions = e.userOptions, gridOptions = ((options && GridAxis_isObject(options.grid)) ? options.grid : {});
    let gridAxisOptions;
    if (gridOptions.enabled === true) {
        // Merge the user options into default grid axis options so
        // that when a user option is set, it takes precedence.
        gridAxisOptions = merge(true, {
            className: ('highcharts-grid-axis ' + (userOptions.className || '')),
            dateTimeLabelFormats: {
                hour: {
                    list: ['%[HM]', '%[H]']
                },
                day: {
                    list: ['%[AeB]', '%[aeb]', '%[E]']
                },
                week: {
                    list: ['Week %W', 'W%W']
                },
                month: {
                    list: ['%[B]', '%[b]', '%o']
                }
            },
            grid: {
                borderWidth: 1
            },
            labels: {
                padding: 2,
                style: {
                    fontSize: '0.9em'
                }
            },
            margin: 0,
            title: {
                text: null,
                reserveSpace: false,
                rotation: 0,
                style: {
                    textOverflow: 'ellipsis'
                }
            },
            // In a grid axis, only allow one unit of certain types,
            // for example we shouldn't have one grid cell spanning
            // two days.
            units: [[
                    'millisecond', // Unit name
                    [1, 10, 100]
                ], [
                    'second',
                    [1, 10]
                ], [
                    'minute',
                    [1, 5, 15]
                ], [
                    'hour',
                    [1, 6]
                ], [
                    'day',
                    [1]
                ], [
                    'week',
                    [1]
                ], [
                    'month',
                    [1]
                ], [
                    'year',
                    null
                ]]
        }, userOptions);
        // X-axis specific options
        if (this.coll === 'xAxis') {
            // For linked axes, tickPixelInterval is used only if
            // the tickPositioner below doesn't run or returns
            // undefined (like multiple years)
            if (defined(userOptions.linkedTo) &&
                !defined(userOptions.tickPixelInterval)) {
                gridAxisOptions.tickPixelInterval = 350;
            }
            // For the secondary grid axis, use the primary axis'
            // tick intervals and return ticks one level higher.
            if (
            // Check for tick pixel interval in options
            !defined(userOptions.tickPixelInterval) &&
                // Only for linked axes
                defined(userOptions.linkedTo) &&
                !defined(userOptions.tickPositioner) &&
                !defined(userOptions.tickInterval) &&
                !defined(userOptions.units)) {
                gridAxisOptions.tickPositioner = function (min, max) {
                    const parentInfo = this.linkedParent?.tickPositions?.info;
                    if (parentInfo) {
                        const units = (gridAxisOptions.units || []);
                        let unitIdx, count = 1, unitName = 'year';
                        for (let i = 0; i < units.length; i++) {
                            const unit = units[i];
                            if (unit && unit[0] === parentInfo.unitName) {
                                unitIdx = i;
                                break;
                            }
                        }
                        // Get the first allowed count on the next unit.
                        const unit = (isNumber(unitIdx) && units[unitIdx + 1]);
                        if (unit) {
                            unitName = unit[0] || 'year';
                            const counts = unit[1];
                            count = counts?.[0] || 1;
                            // In case the base X axis shows years, make the
                            // secondary axis show ten times the years (#11427)
                        }
                        else if (parentInfo.unitName === 'year') {
                            // `unitName` is 'year'
                            count = parentInfo.count * 10;
                        }
                        const unitRange = highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.timeUnits[unitName];
                        this.tickInterval = unitRange * count;
                        return this.chart.time.getTimeTicks({ unitRange, count, unitName }, min, max, this.options.startOfWeek);
                    }
                };
            }
        }
        // Now merge the combined options into the axis options
        merge(true, this.options, gridAxisOptions);
        if (this.horiz) {
            /*               _________________________
            Make this:    ___|_____|_____|_____|__|
                            ^                     ^
                            _________________________
            Into this:    |_____|_____|_____|_____|
                                ^                 ^    */
            options.minPadding = pick(userOptions.minPadding, 0);
            options.maxPadding = pick(userOptions.maxPadding, 0);
        }
        // If borderWidth is set, then use its value for tick and
        // line width.
        if (isNumber(options.grid.borderWidth)) {
            options.tickWidth = options.lineWidth =
                gridOptions.borderWidth;
        }
    }
}
/** @internal */
function onAfterSetOptions2(e) {
    const axis = this;
    const userOptions = e.userOptions;
    const gridOptions = userOptions?.grid || {};
    const columns = gridOptions.columns;
    // Add column options to the parent axis. Children has their column options
    // set on init in onGridAxisAfterInit.
    if (gridOptions.enabled && columns) {
        merge(true, axis.options, columns[0]);
    }
}
/**
 * Handle columns and setScale.
 * @internal
 */
function onAfterSetScale() {
    const axis = this;
    (axis.grid.columns || []).forEach((column) => column.setScale());
}
/**
 * Draw vertical axis ticks extra long to create cell floors and roofs.
 * Overrides the tickLength for vertical axes.
 * @internal
 */
function onAfterTickSize(e) {
    const { horiz, maxLabelDimensions, options: { grid: gridOptions = {} } } = this;
    if (gridOptions.enabled && maxLabelDimensions) {
        const labelPadding = this.options.labels.distance * 2;
        const distance = horiz ?
            (gridOptions.cellHeight ||
                labelPadding + maxLabelDimensions.height) :
            labelPadding + maxLabelDimensions.width;
        if (isArray(e.tickSize)) {
            e.tickSize[0] = distance;
        }
        else {
            e.tickSize = [distance, 0];
        }
    }
}
/** @internal */
function onChartAfterSetChartSize() {
    this.axes.forEach((axis) => {
        (axis.grid?.columns || []).forEach((column) => {
            column.setAxisSize();
            column.setAxisTranslation();
        });
    });
}
/** @internal */
function onDestroy(e) {
    const { grid } = this;
    (grid.columns || []).forEach((column) => column.destroy(e.keepEvents));
    grid.columns = void 0;
}
/**
 * Wraps axis init to draw cell walls on vertical axes.
 * @internal
 */
function onInit(e) {
    const axis = this;
    const userOptions = e.userOptions || {};
    const gridOptions = userOptions.grid || {};
    if (gridOptions.enabled && defined(gridOptions.borderColor)) {
        userOptions.tickColor = userOptions.lineColor = (gridOptions.borderColor);
    }
    if (!axis.grid) {
        axis.grid = new GridAxisAdditions(axis);
    }
    axis.hiddenLabels = [];
    axis.hiddenMarks = [];
}
/**
 * Center tick labels in cells.
 * @internal
 */
function onTickAfterGetLabelPosition(e) {
    const tick = this, label = tick.label, axis = tick.axis, reversed = axis.reversed, chart = axis.chart, options = axis.options, gridOptions = options.grid || {}, labelOpts = axis.options.labels, align = labelOpts.align, 
    // `verticalAlign` is currently not supported for axis.labels.
    verticalAlign = 'middle', // LabelOpts.verticalAlign,
    side = GridAxisSide[axis.side], tickmarkOffset = e.tickmarkOffset, tickPositions = axis.tickPositions, tickPos = tick.pos - tickmarkOffset, nextTickPos = (isNumber(tickPositions[e.index + 1]) ?
        tickPositions[e.index + 1] - tickmarkOffset :
        (axis.max || 0) + tickmarkOffset), tickSize = axis.tickSize('tick'), tickWidth = tickSize ? tickSize[0] : 0, crispCorr = tickSize ? tickSize[1] / 2 : 0;
    // Only center tick labels in grid axes
    if (gridOptions.enabled === true) {
        let bottom, top, left, right;
        // Calculate top and bottom positions of the cell.
        if (side === 'top') {
            bottom = axis.top + axis.offset;
            top = bottom - tickWidth;
        }
        else if (side === 'bottom') {
            top = chart.chartHeight - axis.bottom + axis.offset;
            bottom = top + tickWidth;
        }
        else {
            bottom = axis.top + axis.len - (axis.translate(reversed ? nextTickPos : tickPos) || 0);
            top = axis.top + axis.len - (axis.translate(reversed ? tickPos : nextTickPos) || 0);
        }
        // Calculate left and right positions of the cell.
        if (side === 'right') {
            left = chart.chartWidth - axis.right + axis.offset;
            right = left + tickWidth;
        }
        else if (side === 'left') {
            right = axis.left + axis.offset;
            left = right - tickWidth;
        }
        else {
            left = Math.round(axis.left + (axis.translate(reversed ? nextTickPos : tickPos) || 0)) - crispCorr;
            right = Math.min(// #15742
            Math.round(axis.left + (axis.translate(reversed ? tickPos : nextTickPos) || 0)) - crispCorr, axis.left + axis.len);
        }
        tick.slotWidth = right - left;
        // Calculate the positioning of the label based on
        // alignment.
        e.pos.x = (align === 'left' ?
            left :
            align === 'right' ?
                right :
                left + ((right - left) / 2) // Default to center
        );
        e.pos.y = (verticalAlign === 'top' ?
            top :
            verticalAlign === 'bottom' ?
                bottom :
                top + ((bottom - top) / 2) // Default to middle
        );
        if (label) {
            const lblMetrics = chart.renderer.fontMetrics(label), labelHeight = label.getBBox().height;
            // Adjustment to y position to align the label correctly.
            // Would be better to have a setter or similar for this.
            if (!labelOpts.useHTML) {
                const lines = Math.round(labelHeight / lblMetrics.h);
                e.pos.y += (
                // Center the label
                // TODO: why does this actually center the label?
                ((lblMetrics.b - (lblMetrics.h - lblMetrics.f)) / 2) +
                    // Adjust for height of additional lines.
                    -(((lines - 1) * lblMetrics.h) / 2));
            }
            else {
                e.pos.y += (
                // Readjust yCorr in htmlUpdateTransform
                lblMetrics.b +
                    // Adjust for height of html label
                    -(labelHeight / 2));
            }
        }
        e.pos.x += (axis.horiz && labelOpts.x) || 0;
    }
}
/** @internal */
function onTickLabelFormat(ctx) {
    const { axis, value } = ctx;
    if (axis.options.grid?.enabled) {
        const tickPos = axis.tickPositions;
        const series = (axis.linkedParent || axis).series[0];
        const isFirst = value === tickPos[0];
        const isLast = value === tickPos[tickPos.length - 1];
        const point = series && find(series.options.data, function (p) {
            return p[axis.isXAxis ? 'x' : 'y'] === value;
        });
        let pointCopy;
        if (point && series.is('gantt')) {
            // For the Gantt set point aliases to the pointCopy
            // to do not change the original point
            pointCopy = merge(point);
            highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default().seriesTypes.gantt.prototype.pointClass
                .setGanttPointAliases(pointCopy, axis.chart);
        }
        // Make additional properties available for the
        // formatter
        ctx.isFirst = isFirst;
        ctx.isLast = isLast;
        ctx.point = pointCopy;
    }
}
/**
 * Makes tick labels which are usually ignored in a linked axis
 * displayed if they are within range of linkedParent.min.
 * ```
 *                        _____________________________
 *                        |   |       |       |       |
 * Make this:             |   |   2   |   3   |   4   |
 *                        |___|_______|_______|_______|
 *                          ^
 *                        _____________________________
 *                        |   |       |       |       |
 * Into this:             | 1 |   2   |   3   |   4   |
 *                        |___|_______|_______|_______|
 *                          ^
 * ```
 * @internal
 * @todo Does this function do what the drawing says? Seems to affect
 *       ticks and not the labels directly?
 */
function onTrimTicks() {
    const axis = this, options = axis.options, gridOptions = options.grid || {}, categoryAxis = axis.categories, tickPositions = axis.tickPositions, firstPos = tickPositions[0], secondPos = tickPositions[1], lastPos = tickPositions[tickPositions.length - 1], beforeLastPos = tickPositions[tickPositions.length - 2], linkedMin = axis.linkedParent?.min, linkedMax = axis.linkedParent?.max, min = linkedMin || axis.min, max = linkedMax || axis.max, tickInterval = axis.tickInterval, startLessThanMin = ( // #19845
    isNumber(min) &&
        min >= firstPos + tickInterval &&
        min < secondPos), endMoreThanMin = (isNumber(min) &&
        firstPos < min &&
        firstPos + tickInterval > min), startLessThanMax = (isNumber(max) &&
        lastPos > max &&
        lastPos - tickInterval < max), endMoreThanMax = (isNumber(max) &&
        max <= lastPos - tickInterval &&
        max > beforeLastPos);
    if (gridOptions.enabled === true &&
        !categoryAxis &&
        (axis.isXAxis || axis.isLinked)) {
        if ((endMoreThanMin || startLessThanMin) && !options.startOnTick) {
            tickPositions[0] = min;
        }
        if ((startLessThanMax || endMoreThanMax) && !options.endOnTick) {
            tickPositions[tickPositions.length - 1] = max;
        }
    }
}
/**
 * Avoid altering tickInterval when reserving space.
 * @internal
 */
function wrapUnsquish(proceed) {
    const axis = this;
    const { options: { grid: gridOptions = {} } } = axis;
    if (gridOptions.enabled === true && axis.categories) {
        return axis.tickInterval;
    }
    return proceed.apply(axis, argsToArray(arguments));
}
/* *
 *
 *  Class
 *
 * */
/**
 * Additions for grid axes.
 * @internal
 * @class
 */
class GridAxisAdditions {
    /* *
    *
    *  Constructors
    *
    * */
    constructor(axis) {
        this.axis = axis;
    }
    /* *
    *
    *  Functions
    *
    * */
    /**
     * Checks if an axis is the outer axis in its dimension. Since
     * axes are placed outwards in order, the axis with the highest
     * index is the outermost axis.
     *
     * Example: If there are multiple x-axes at the top of the chart,
     * this function returns true if the axis supplied is the last
     * of the x-axes.
     *
     * @internal
     *
     * @return {boolean}
     * True if the axis is the outermost axis in its dimension; false if
     * not.
     */
    isOuterAxis() {
        const axis = this.axis;
        const chart = axis.chart;
        const columnIndex = axis.grid.columnIndex;
        const columns = (axis.linkedParent?.grid.columns ||
            axis.grid.columns ||
            []);
        const parentAxis = columnIndex ? axis.linkedParent : axis;
        let thisIndex = -1, lastIndex = 0;
        // On the left side, when we have columns (not only multiple axes), the
        // main axis is to the left
        if (axis.side === 3 && !chart.inverted && columns.length) {
            return !axis.linkedParent;
        }
        (chart[axis.coll] || []).forEach((otherAxis, index) => {
            if (otherAxis.side === axis.side &&
                !otherAxis.options.isInternal) {
                lastIndex = index;
                if (otherAxis === parentAxis) {
                    // Get the index of the axis in question
                    thisIndex = index;
                }
            }
        });
        return (lastIndex === thisIndex &&
            (isNumber(columnIndex) ?
                columns.length === columnIndex :
                true));
    }
    /**
     * Add extra border based on the provided path.
     * @internal
     * @param {Highcharts.SVGPathArray} path
     * The path of the border.
     * @return {Highcharts.SVGElement}
     * Border
     */
    renderBorder(path) {
        const axis = this.axis, renderer = axis.chart.renderer, options = axis.options, extraBorderLine = renderer.path(path)
            .addClass('highcharts-axis-line')
            .add(axis.axisGroup);
        if (!renderer.styledMode) {
            extraBorderLine.attr({
                stroke: options.lineColor,
                'stroke-width': options.lineWidth,
                zIndex: 7
            });
        }
        return extraBorderLine;
    }
}
/* *
 *
 *  Registry
 *
 * */
// First letter of the day of the week, e.g. 'M' for 'Monday'.
dateFormats.E = function (timestamp) {
    return this.dateFormat('%a', timestamp, true).charAt(0);
};
// Adds week date format
dateFormats.W = function (timestamp) {
    const d = this.toParts(timestamp), firstDay = (d[7] + 6) % 7, thursday = d.slice(0);
    thursday[2] = d[2] - firstDay + 3;
    const firstThursday = this.toParts(this.makeTime(thursday[0], 0, 1));
    if (firstThursday[7] !== 4) {
        d[1] = 0; // Set month to January
        d[2] = 1 + (11 - firstThursday[7]) % 7;
    }
    const thursdayTS = this.makeTime(thursday[0], thursday[1], thursday[2]), firstThursdayTS = this.makeTime(firstThursday[0], firstThursday[1], firstThursday[2]);
    return (1 +
        Math.floor((thursdayTS - firstThursdayTS) / 604800000)).toString();
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const GridAxis = {
    compose
};
/** @internal */
/* harmony default export */ const Axis_GridAxis = (GridAxis);
/* *
 *
 *  API Options
 *
 * */
/**
 * @productdesc {gantt}
 * For grid axes (like in Gantt charts),
 * it is possible to declare as a list to provide different
 * formats depending on available space.
 *
 * Defaults to:
 * ```js
 * {
 *     hour: { list: ['%H:%M', '%H'] },
 *     day: { list: ['%A, %e. %B', '%a, %e. %b', '%E'] },
 *     week: { list: ['Week %W', 'W%W'] },
 *     month: { list: ['%B', '%b', '%o'] }
 * }
 * ```
 *
 * @sample {gantt} gantt/grid-axis/date-time-label-formats
 *         Gantt chart with custom axis date format.
 *
 * @apioption xAxis.dateTimeLabelFormats
 */
/**
 * Set grid options for the axis labels. Requires Highcharts Gantt.
 *
 * @since     6.2.0
 * @product   gantt
 * @apioption xAxis.grid
 */
/**
 * Enable grid on the axis labels. Defaults to true for Gantt charts.
 *
 * @type      {boolean}
 * @default   true
 * @since     6.2.0
 * @product   gantt
 * @apioption xAxis.grid.enabled
 */
/**
 * Set specific options for each column (or row for horizontal axes) in the
 * grid. Each extra column/row is its own axis, and the axis options can be set
 * here.
 *
 * @sample gantt/demo/left-axis-table
 *         Left axis as a table
 * @sample gantt/demo/treegrid-columns
 *         Collapsible tree grid with columns
 * @sample gantt/grid-axis/horizontal-columns
 *         Horizontal grid axis with columns rendered as rows
 *
 * @type      {Array<Highcharts.XAxisOptions>}
 * @apioption xAxis.grid.columns
 */
/**
 * Set border color for the label grid lines.
 *
 * @type      {Highcharts.ColorString}
 * @default   #e6e6e6
 * @apioption xAxis.grid.borderColor
 */
/**
 * Set border width of the label grid lines.
 *
 * @type      {number}
 * @default   1
 * @apioption xAxis.grid.borderWidth
 */
/**
 * Set cell height for grid axis labels. By default this is calculated from font
 * size. This option only applies to horizontal axes. For vertical axes, check
 * the [#yAxis.staticScale](yAxis.staticScale) option.
 *
 * @sample gantt/grid-axis/cellheight
 *         Gant chart with custom cell height
 * @type      {number}
 * @apioption xAxis.grid.cellHeight
 */
''; // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/grid-axis.src.js




const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Compositions
Axis_GridAxis.compose(G.Axis, G.Chart, G.Tick);
/* harmony default export */ const grid_axis_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});