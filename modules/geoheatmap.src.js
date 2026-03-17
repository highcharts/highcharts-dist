// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/geoheatmap
 * @requires highcharts
 *
 * (c) 2009-2026
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/geoheatmap", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SeriesRegistry"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/geoheatmap"] = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["SeriesRegistry"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__512__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

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
  "default": () => (/* binding */ geoheatmap_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
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

;// ./code/es-modules/Series/GeoHeatmap/GeoHeatmapPoint.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Authors: Magdalena Gut, Piotr Madej
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { map: { prototype: { pointClass: MapPoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class GeoHeatmapPoint extends MapPoint {
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * @private
     */
    applyOptions(options, x) {
        const point = super.applyOptions.call(this, options, x), { lat, lon } = point.options;
        if (isNumber(lon) && isNumber(lat)) {
            const { colsize = 1, rowsize = 1 } = this.series.options, x1 = lon - colsize / 2, y1 = lat - rowsize / 2;
            point.geometry = point.options.geometry = {
                type: 'Polygon',
                // A rectangle centered in lon/lat
                coordinates: [
                    [
                        [x1, y1],
                        [x1 + colsize, y1],
                        [x1 + colsize, y1 + rowsize],
                        [x1, y1 + rowsize],
                        [x1, y1]
                    ]
                ]
            };
        }
        return point;
        /* eslint-enable valid-jsdoc */
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const GeoHeatmap_GeoHeatmapPoint = (GeoHeatmapPoint);

;// ./code/es-modules/Series/InterpolationUtilities.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Hubert Kozik
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { doc: InterpolationUtilities_doc } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Find color of point based on color axis.
 *
 * @function Highcharts.colorFromPoint
 *
 * @param {number | null} value
 *        Value to find corresponding color on the color axis.
 *
 * @param {Highcharts.Point} point
 *        Point to find it's color from color axis.
 *
 * @return {number[]}
 *        Color in RGBa array.
 */
function colorFromPoint(value, point) {
    const colorAxis = point.series.colorAxis;
    if (colorAxis) {
        const rgba = (colorAxis.toColor(value || 0, point)
            .split(')')[0]
            .split('(')[1]
            .split(',')
            .map((s) => pick(parseFloat(s), parseInt(s, 10))));
        rgba[3] = pick(rgba[3], 1.0) * 255;
        if (!defined(value) || !point.visible) {
            rgba[3] = 0;
        }
        return rgba;
    }
    return [0, 0, 0, 0];
}
/**
 * Method responsible for creating a canvas for interpolation image.
 * @private
 */
function getContext(series) {
    const { canvas, context } = series;
    // We can trust that the conext is canvas when clearRect is present.
    if (canvas && context?.clearRect) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    else {
        series.canvas = InterpolationUtilities_doc.createElement('canvas');
        series.context = series.canvas.getContext('2d', {
            willReadFrequently: true
        }) || void 0;
        return series.context;
    }
    return context;
}
const InterpolationUtilities = {
    colorFromPoint,
    getContext
};
/* harmony default export */ const Series_InterpolationUtilities = (InterpolationUtilities);

;// ./code/es-modules/Series/GeoHeatmap/GeoHeatmapSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Authors: Magdalena Gut, Piotr Madej
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject, stop } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { noop } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { colorFromPoint: GeoHeatmapSeries_colorFromPoint, getContext: GeoHeatmapSeries_getContext } = Series_InterpolationUtilities;

const { seriesTypes: { map: MapSeries } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default());


/**
 * Normalize longitute value to -180:180 range.
 * @private
 */
function normalizeLonValue(lon) {
    return lon - Math.floor((lon + 180) / 360) * 360;
}
/**
 * Get proper point's position for PixelData array.
 * @private
 */
function scaledPointPos(lon, lat, canvasWidth, canvasHeight, colsize, rowsize) {
    return Math.ceil((canvasWidth * (canvasHeight - 1 - (lat + 90) / rowsize)) +
        ((lon + 180) / colsize));
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Geo Heatmap series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.geoheatmap
 *
 * @augments Highcharts.Series
 */
class GeoHeatmapSeries extends MapSeries {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.isDirtyCanvas = true;
    }
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * For updated colsize and rowsize options
     * @private
     */
    update() {
        const series = this;
        series.options = merge(series.options, arguments[0]);
        if (series.getInterpolation().enabled) {
            series.isDirtyCanvas = true;
            series.points.forEach((point) => {
                if (point.graphic) {
                    point.graphic.destroy();
                    delete point.graphic;
                }
            });
        }
        super.update.apply(series, arguments);
    }
    /**
     * Override translate method to not fire if not needed.
     * @private
     */
    translate() {
        if (this.getInterpolation().enabled &&
            this.image &&
            !this.isDirty &&
            !this.isDirtyData) {
            return;
        }
        super.translate.apply(this, arguments);
    }
    /**
     * Create the extended object out of the boolean
     * @private
     */
    getInterpolation() {
        if (!isObject(this.options.interpolation)) {
            return {
                blur: 1,
                enabled: this.options.interpolation
            };
        }
        return this.options.interpolation;
    }
    /**
     * Overriding drawPoints original method to apply new features.
     * @private
     */
    drawPoints() {
        const series = this, chart = series.chart, mapView = chart.mapView, seriesOptions = series.options;
        if (series.getInterpolation().enabled && mapView && series.bounds) {
            const ctx = series.context || GeoHeatmapSeries_getContext(series), { canvas, colorAxis, image, chart, points } = series, [colsize, rowsize] = [
                pick(seriesOptions.colsize, 1),
                pick(seriesOptions.rowsize, 1)
            ], 
            // Calculate dimensions based on series bounds
            topLeft = mapView.projectedUnitsToPixels({
                x: series.bounds.x1,
                y: series.bounds.y2
            }), bottomRight = mapView.projectedUnitsToPixels({
                x: series.bounds.x2,
                y: series.bounds.y1
            });
            if (canvas && ctx && colorAxis && topLeft && bottomRight) {
                const { x, y } = topLeft, width = bottomRight.x - x, height = bottomRight.y - y, dimensions = {
                    x,
                    y,
                    width,
                    height
                };
                if (
                // Do not calculate new canvas if not necessary
                series.isDirtyCanvas ||
                    // Calculate new canvas if data is dirty
                    series.isDirtyData ||
                    // Always calculate new canvas for Orthographic projection
                    mapView.projection.options.name === 'Orthographic') {
                    const canvasWidth = canvas.width = ~~(360 / colsize) + 1, canvasHeight = canvas.height = ~~(180 / rowsize) + 1, canvasArea = canvasWidth * canvasHeight, pixelData = new Uint8ClampedArray(canvasArea * 4), 
                    // Guess if we have to round lon/lat with this data
                    { lat = 0, lon = 0 } = points[0].options, unEvenLon = lon % rowsize !== 0, unEvenLat = lat % colsize !== 0, getAdjustedLon = (unEvenLon ?
                        (lon) => (Math.round(lon / rowsize) * rowsize) :
                        (lon) => lon), getAdjustedLat = (unEvenLat ?
                        (lat) => (Math.round(lat / colsize) * colsize) :
                        (lat) => lat), pointsLen = points.length;
                    if (unEvenLon || unEvenLat) {
                        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts Warning: For best performance,' +
                            ' lon/lat datapoints should spaced by a single ' +
                            'colsize/rowsize', false, series.chart, {
                            colsize: String(colsize),
                            rowsize: String(rowsize)
                        });
                    }
                    // Needed for tooltip
                    series.directTouch = false;
                    series.isDirtyCanvas = true;
                    // First pixelData represents the geo coordinates
                    for (let i = 0; i < pointsLen; i++) {
                        const p = points[i], { lon, lat } = p.options;
                        if (isNumber(lon) && isNumber(lat)) {
                            pixelData.set(GeoHeatmapSeries_colorFromPoint(p.value, p), scaledPointPos(getAdjustedLon(lon), getAdjustedLat(lat), canvasWidth, canvasHeight, colsize, rowsize) * 4);
                        }
                    }
                    const blur = series.getInterpolation().blur, blurFactor = blur === 0 ? 1 : blur * 11, upscaledWidth = ~~(canvasWidth * blurFactor), upscaledHeight = ~~(canvasHeight * blurFactor), projectedWidth = ~~width, projectedHeight = ~~height, img = new ImageData(pixelData, canvasWidth, canvasHeight);
                    canvas.width = upscaledWidth;
                    canvas.height = upscaledHeight;
                    // Next step is to upscale pixelData to big image to get
                    // the blur on the interpolation
                    ctx.putImageData(img, 0, 0);
                    // Now we have an unscaled version of our ImageData
                    // let's make the compositing mode to 'copy' so that
                    // our next drawing op erases whatever was there
                    // previously just like putImageData would have done
                    ctx.globalCompositeOperation = 'copy';
                    // Now we can draw ourself over ourself
                    ctx.drawImage(canvas, 0, 0, img.width, img.height, // Grab the ImageData
                    0, 0, upscaledWidth, upscaledHeight // Scale it
                    );
                    // Add projection to upscaled ImageData
                    const projectedPixelData = this.getProjectedImageData(mapView, projectedWidth, projectedHeight, ctx.getImageData(0, 0, upscaledWidth, upscaledHeight), canvas, x, y);
                    canvas.width = projectedWidth;
                    canvas.height = projectedHeight;
                    ctx.putImageData(new ImageData(projectedPixelData, projectedWidth, projectedHeight), 0, 0);
                }
                if (image) {
                    if (chart.renderer.globalAnimation && chart.hasRendered) {
                        const startX = Number(image.attr('x')), startY = Number(image.attr('y')), startWidth = Number(image.attr('width')), startHeight = Number(image.attr('height'));
                        const step = (now, fx) => {
                            const pos = fx.pos;
                            image.attr({
                                x: (startX + (x - startX) * pos),
                                y: (startY + (y - startY) * pos),
                                width: (startWidth + (width - startWidth) * pos),
                                height: (startHeight + (height - startHeight) * pos)
                            });
                        };
                        const animOptions = merge(animObject(chart.renderer.globalAnimation)), userStep = animOptions.step;
                        animOptions.step =
                            function () {
                                if (userStep) {
                                    userStep.apply(this, arguments);
                                }
                                step.apply(this, arguments);
                            };
                        image
                            .attr(merge({ animator: 0 }, series.isDirtyCanvas ? {
                            href: canvas.toDataURL('image/png', 1)
                        } : void 0))
                            .animate({ animator: 1 }, animOptions);
                        // When dragging or first rendering, animation is off
                    }
                    else {
                        stop(image);
                        image.attr(merge(dimensions, series.isDirtyCanvas ? {
                            href: canvas.toDataURL('image/png', 1)
                        } : void 0));
                    }
                }
                else {
                    series.image = chart.renderer.image(canvas.toDataURL('image/png', 1))
                        .attr(dimensions)
                        .add(series.group);
                }
                series.isDirtyCanvas = false;
            }
        }
        else {
            super.drawPoints.apply(series, arguments);
        }
    }
    /**
     * Project ImageData to actual mapView projection used on a chart.
     * @private
     */
    getProjectedImageData(mapView, projectedWidth, projectedHeight, cartesianImageData, canvas, horizontalShift, verticalShift) {
        const projectedPixelData = new Uint8ClampedArray(projectedWidth * projectedHeight * 4), lambda = pick(mapView.projection.options.rotation?.[0], 0), widthFactor = canvas.width / 360, heightFactor = -1 * canvas.height / 180;
        let y = -1;
        // For each pixel on the map plane, find the map
        // coordinate and get the color value
        for (let i = 0; i < projectedPixelData.length; i += 4) {
            const x = (i / 4) % projectedWidth;
            if (x === 0) {
                y++;
            }
            const projectedCoords = mapView.pixelsToLonLat({
                x: horizontalShift + x,
                y: verticalShift + y
            });
            if (projectedCoords) {
                // Normalize lon values
                if (projectedCoords.lon > -180 - lambda &&
                    projectedCoords.lon < 180 - lambda) {
                    projectedCoords.lon =
                        normalizeLonValue(projectedCoords.lon);
                }
                const projected = [
                    projectedCoords.lon,
                    projectedCoords.lat
                ], cvs2PixelX = projected[0] * widthFactor + canvas.width / 2, cvs2PixelY = projected[1] * heightFactor +
                    canvas.height / 2;
                if (cvs2PixelX >= 0 &&
                    cvs2PixelX <= canvas.width &&
                    cvs2PixelY >= 0 &&
                    cvs2PixelY <= canvas.height) {
                    const redPos = (
                    // Rows
                    Math.floor(cvs2PixelY) *
                        canvas.width * 4 +
                        // Columns
                        Math.round(cvs2PixelX) * 4);
                    projectedPixelData[i] =
                        cartesianImageData.data[redPos];
                    projectedPixelData[i + 1] =
                        cartesianImageData.data[redPos + 1];
                    projectedPixelData[i + 2] =
                        cartesianImageData.data[redPos + 2];
                    projectedPixelData[i + 3] =
                        cartesianImageData.data[redPos + 3];
                }
            }
        }
        return projectedPixelData;
    }
    searchPoint(e, compareX) {
        const series = this, chart = this.chart, mapView = chart.mapView;
        if (mapView &&
            series.bounds &&
            series.image &&
            chart.tooltip &&
            chart.tooltip.options.enabled) {
            if (
            // If user drags map do not build k-d-tree
            !chart.pointer.hasDragged &&
                // If user zooms in/out map do not build k-d-tree
                (+series.image.attr('animator') <= 0.01 ||
                    +series.image.attr('animator') >= 0.99)) {
                const topLeft = mapView.projectedUnitsToPixels({
                    x: series.bounds.x1,
                    y: series.bounds.y2
                }), bottomRight = mapView.projectedUnitsToPixels({
                    x: series.bounds.x2,
                    y: series.bounds.y1
                });
                chart.pointer.normalize(e);
                if (e.lon && e.lat &&
                    topLeft && bottomRight &&
                    e.chartX - chart.plotLeft > topLeft.x &&
                    e.chartX - chart.plotLeft < bottomRight.x &&
                    e.chartY - chart.plotTop > topLeft.y &&
                    e.chartY - chart.plotTop < bottomRight.y) {
                    return this.searchKDTree({
                        clientX: e.chartX,
                        lon: normalizeLonValue(e.lon),
                        lat: e.lat
                    }, compareX, e);
                }
            }
            else {
                chart.tooltip.destroy();
            }
        }
    }
}
/**
 * A `geoheatmap` series is a variety of heatmap series, composed into
 * the map projection, where the units are expressed in the latitude
 * and longitude, and individual values contained in a matrix are
 * represented as colors.
 *
 * @sample maps/demo/geoheatmap-europe/
 *         GeoHeatmap Chart with interpolation on Europe map
 * @sample maps/series-geoheatmap/geoheatmap-equalearth/
 *         GeoHeatmap Chart on the Equal Earth Projection
 *
 * @extends      plotOptions.map
 * @since        11.0.0
 * @product      highmaps
 * @excluding    allAreas, dragDrop, findNearestPointBy, geometry, joinBy,
 * negativeColor, onPoint, stickyTracking
 * @requires     modules/geoheatmap
 * @optionparent plotOptions.geoheatmap
 */
GeoHeatmapSeries.defaultOptions = merge(MapSeries.defaultOptions, {
    nullColor: 'transparent',
    tooltip: {
        pointFormat: 'Lat: {point.lat}, Lon: {point.lon}, Value: {point.value}<br/>'
    },
    /**
     * The border width of each geoheatmap tile.
     *
     * In styled mode, the border stroke width is given in the
     * `.highcharts-point` class.
     *
     * @sample maps/demo/geoheatmap-orthographic/
     *         borderWidth set to 1 to create a grid
     *
     * @type      {number|null}
     * @default   0
     * @product   highmaps
     * @apioption plotOptions.geoheatmap.borderWidth
     */
    borderWidth: 0,
    /**
     * The column size - how many longitude units each column in the
     * geoheatmap should span.
     *
     * @sample maps/demo/geoheatmap-europe/
     *         1 by default, set to 5
     *
     * @product   highmaps
     * @apioption plotOptions.geoheatmap.colsize
     */
    colsize: 1,
    /**
     * The main color of the series. In heat maps this color is rarely
     * used, as we mostly use the color to denote the value of each
     * point. Unless options are set in the [colorAxis](#colorAxis), the
     * default value is pulled from the [options.colors](#colors) array.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product   highmaps
     * @apioption plotOptions.geoheatmap.color
     */
    /**
     * The rowsize size - how many latitude units each row in the
     * geoheatmap should span.
     *
     * @sample maps/demo/geoheatmap-europe/
     *         1 by default, set to 5
     *
     * @product   highmaps
     * @apioption plotOptions.geoheatmap.rowsize
     */
    rowsize: 1,
    stickyTracking: true,
    /**
     * Make the geoheatmap render its data points as an interpolated
     * image. It can be used to show a Temperature Map-like charts.
     *
     * @sample maps/demo/geoheatmap-earth-statistics
     *         Advanced demo of GeoHeatmap interpolation with multiple
     *         datasets
     *
     * @type      {boolean|Highcharts.InterpolationOptionsObject}
     * @since     11.2.0
     * @product   highmaps
     */
    interpolation: {
        /**
         * Enable or disable the interpolation of the geoheatmap series.
         *
         * @since 11.2.0
         */
        enabled: false,
        /**
         * Represents how much blur should be added to the interpolated
         * image. Works best in the range of 0-1, all higher values
         * would need a lot more performance of the machine to calculate
         * more detailed interpolation.
         *
         *  * **Note:** Useful, if the data is spread into wide range of
         *  longitude and latitude values.
         *
         * @sample maps/series-geoheatmap/turkey-fire-areas
         *         Simple demo of GeoHeatmap interpolation
         *
         * @since  11.2.0
         */
        blur: 1
    }
});
addEvent(GeoHeatmapSeries, 'afterDataClassLegendClick', function () {
    this.isDirtyCanvas = true;
    this.drawPoints();
});
extend(GeoHeatmapSeries.prototype, {
    type: 'geoheatmap',
    applyJitter: noop,
    pointClass: GeoHeatmap_GeoHeatmapPoint,
    pointArrayMap: ['lon', 'lat', 'value'],
    kdAxisArray: ['lon', 'lat'] // Search k-d-tree by lon/lat values
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('geoheatmap', GeoHeatmapSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const GeoHeatmap_GeoHeatmapSeries = ((/* unused pure expression or super */ null && (GeoHeatmapSeries)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `geoheatmap` series. If the [type](#series.map.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.geoheatmap
 * @excluding allAreas, dataParser, dataURL, dragDrop, findNearestPointBy,
 *            joinBy, marker, mapData, negativeColor, onPoint, shadow,
 *            stickyTracking
 * @product   highmaps
 * @apioption series.geoheatmap
 */
/**
 * An array of data points for the series. For the `geoheatmap` series
 * type, points can be given in the following ways:
 *
 * 1.  An array of arrays with 3 or 2 values. In this case, the values
 * correspond to `lon,lat,value`. The `value` refers to the color on the `colorAxis`.
 *
 *  ```js
 *     data: [
 *         [51.50, -0.12, 7],
 *         [54.59, -5.93, 4],
 *         [55.8, -4.25, 3]
 *     ]
 *  ```
 *
 * 2.  An array of objects with named values. The following snippet shows only a
 * few settings, see the complete options set below. If the total number of data
 * points exceeds the series' [turboThreshold](#series.heatmap.turboThreshold),
 * this option is not available.
 *
 *  ```js
 *     data: [{
 *         lat: 51.50,
 *         lon: -0.12,
 *         value: 7,
 *         name: "London"
 *     }, {
 *         lat: 54.59,
 *         lon: -5.93,
 *         value: 4,
 *         name: "Belfast"
 *     }]
 *  ```
 *
 * @sample maps/demo/geoheatmap-europe/
 *         GeoHeatmap Chart with interpolation on Europe map
 * @sample maps/series-geoheatmap/geoheatmap-equalearth/
 *         GeoHeatmap Chart on the Equal Earth Projection
 *
 * @type      {Array<Array<number>|*>}
 * @extends   series.map.data
 * @product   highmaps
 * @apioption series.geoheatmap.data
 */
/**
 * Individual color for the point. By default the color is either used
 * to denote the value, or pulled from the global `colors` array.
 *
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @product   highmaps
 * @apioption series.geoheatmap.data.color
 */
/**
 * The value of the point, resulting in a color controlled by options
 * as set in the [colorAxis](#colorAxis) configuration.
 *
 * @type      {number|null}
 * @product   highmaps
 * @apioption series.geoheatmap.data.value
 */
/**
 * Detailed options for interpolation object.
 *
 * @interface Highcharts.InterpolationOptionsObject
 */ /**
*  Enable or disable the interpolation.
*
* @name Highcharts.InterpolationOptionsObject#enabled
* @type {boolean}
*/ /**
* Represents how much blur should be added to the interpolated
* image. Works best in the range of 0-1, all higher values
* would need a lot more performance of the machine to calculate
* more detailed interpolation.
*
* @name Highcharts.InterpolationOptionsObject#blur
* @type {number}
*/
''; // Adds doclets above to the transpiled file

;// ./code/es-modules/masters/modules/geoheatmap.src.js




/* harmony default export */ const geoheatmap_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});