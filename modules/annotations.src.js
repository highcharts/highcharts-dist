// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.0 (2026-04-13)
 * @module highcharts/modules/annotations
 * @requires highcharts
 *
 * Annotations module
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Templating"], root["_Highcharts"]["AST"], root["_Highcharts"]["Color"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/annotations", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SeriesRegistry"],amd1["Templating"],amd1["AST"],amd1["Color"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/annotations"] = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Templating"], root["_Highcharts"]["AST"], root["_Highcharts"]["Color"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["Templating"], root["Highcharts"]["AST"], root["Highcharts"]["Color"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__984__, __WEBPACK_EXTERNAL_MODULE__660__, __WEBPACK_EXTERNAL_MODULE__620__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__620__;

/***/ }),

/***/ 660:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__660__;

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ }),

/***/ 984:
/***/ ((module) => {

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
  "default": () => (/* binding */ annotations_src)
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

;// ./code/es-modules/Extensions/Annotations/AnnotationChart.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


/* *
 *
 *  Functions
 *
 * */
/**
 * Add an annotation to the chart after render time.
 *
 * @sample highcharts/annotations/add-annotation/
 *         Add annotation
 *
 * @function Highcharts.Chart#addAnnotation
 *
 * @param  {Highcharts.AnnotationsOptions} options
 *         The annotation options for the new, detailed annotation.
 *
 * @param {boolean} [redraw]
 *
 * @return {Highcharts.Annotation}
 *         The newly generated annotation.
 */
function chartAddAnnotation(options, redraw) {
    const annotation = this.initAnnotation(options);
    this.options.annotations.push(annotation.options);
    if (pick(redraw, true)) {
        annotation.redraw();
        annotation.graphic.attr({
            opacity: 1
        });
    }
    return annotation;
}
/** @internal */
function chartCallback() {
    const chart = this;
    chart.plotBoxClip = this.renderer.clipRect(this.plotBox);
    chart.controlPointsGroup = chart.renderer
        .g('control-points')
        .attr({ zIndex: 99 })
        .clip(chart.plotBoxClip)
        .add();
    chart.options.annotations.forEach((annotationOptions, i) => {
        if (
        // Verify that it has not been previously added in a responsive rule
        !chart.annotations.some((annotation) => annotation.options === annotationOptions)) {
            const annotation = chart.initAnnotation(annotationOptions);
            chart.options.annotations[i] = annotation.options;
        }
    });
    chart.drawAnnotations();
    addEvent(chart, 'redraw', chart.drawAnnotations);
    addEvent(chart, 'destroy', function () {
        chart.plotBoxClip.destroy();
        chart.controlPointsGroup.destroy();
    });
    addEvent(chart, 'exportData', function (event) {
        const annotations = chart.annotations, csvColumnHeaderFormatter = ((this.options.exporting &&
            this.options.exporting.csv) ||
            {}).columnHeaderFormatter, 
        // If second row doesn't have xValues
        // then it is a title row thus multiple level header is in use.
        multiLevelHeaders = !event.dataRows[1].xValues, annotationHeader = (chart.options.lang &&
            chart.options.lang.exportData &&
            chart.options.lang.exportData.annotationHeader), columnHeaderFormatter = function (index) {
            let s;
            if (csvColumnHeaderFormatter) {
                s = csvColumnHeaderFormatter(index);
                if (s !== false) {
                    return s;
                }
            }
            s = annotationHeader + ' ' + index;
            if (multiLevelHeaders) {
                return {
                    columnTitle: s,
                    topLevelColumnTitle: s
                };
            }
            return s;
        }, startRowLength = event.dataRows[0].length, annotationSeparator = chart.options.exporting?.csv?.annotations
            ?.itemDelimiter, joinAnnotations = chart.options.exporting?.csv?.annotations?.join;
        annotations.forEach((annotation) => {
            if (annotation.options.labelOptions?.includeInDataExport) {
                annotation.labels.forEach((label) => {
                    if (label.options.text) {
                        const annotationText = label.options.text;
                        label.points.forEach((points) => {
                            const annotationX = points.x, xAxisIndex = points.series.xAxis ?
                                points.series.xAxis.index :
                                -1;
                            let wasAdded = false;
                            // Annotation not connected to any xAxis -
                            // add new row.
                            if (xAxisIndex === -1) {
                                const n = event.dataRows[0].length, newRow = new Array(n);
                                for (let i = 0; i < n; ++i) {
                                    newRow[i] = '';
                                }
                                newRow.push(annotationText);
                                newRow.xValues = [];
                                newRow.xValues[xAxisIndex] = annotationX;
                                event.dataRows.push(newRow);
                                wasAdded = true;
                            }
                            // Annotation placed on a exported data point
                            // - add new column
                            if (!wasAdded) {
                                event.dataRows.forEach((row) => {
                                    if (!wasAdded &&
                                        row.xValues &&
                                        xAxisIndex !== void 0 &&
                                        annotationX === row.xValues[xAxisIndex]) {
                                        if (joinAnnotations &&
                                            row.length > startRowLength) {
                                            row[row.length - 1] += (annotationSeparator +
                                                annotationText);
                                        }
                                        else {
                                            row.push(annotationText);
                                        }
                                        wasAdded = true;
                                    }
                                });
                            }
                            // Annotation not placed on any exported data point,
                            // but connected to the xAxis - add new row
                            if (!wasAdded) {
                                const n = event.dataRows[0].length, newRow = new Array(n);
                                for (let i = 0; i < n; ++i) {
                                    newRow[i] = '';
                                }
                                newRow[0] = annotationX;
                                newRow.push(annotationText);
                                newRow.xValues = [];
                                if (xAxisIndex !== void 0) {
                                    newRow.xValues[xAxisIndex] = annotationX;
                                }
                                event.dataRows.push(newRow);
                            }
                        });
                    }
                });
            }
        });
        let maxRowLen = 0;
        event.dataRows.forEach((row) => {
            maxRowLen = Math.max(maxRowLen, row.length);
        });
        const newRows = maxRowLen - event.dataRows[0].length;
        for (let i = 0; i < newRows; i++) {
            const header = columnHeaderFormatter(i + 1);
            if (multiLevelHeaders) {
                event.dataRows[0].push(header.topLevelColumnTitle);
                event.dataRows[1].push(header.columnTitle);
            }
            else {
                event.dataRows[0].push(header);
            }
        }
    });
}
/** @internal */
function chartDrawAnnotations() {
    this.plotBoxClip.attr(this.plotBox);
    this.annotations.forEach((annotation) => {
        annotation.redraw();
        annotation.graphic.animate({
            opacity: 1
        }, annotation.animationConfig);
    });
}
/**
 * Remove an annotation from the chart.
 *
 * @function Highcharts.Chart#removeAnnotation
 *
 * @param {number|string|Highcharts.Annotation} idOrAnnotation
 *        The annotation's id or direct annotation object.
 */
function chartRemoveAnnotation(idOrAnnotation) {
    const annotations = this.annotations, annotation = (idOrAnnotation.coll === 'annotations') ?
        idOrAnnotation :
        find(annotations, function (annotation) {
            return annotation.options.id === idOrAnnotation;
        });
    if (annotation) {
        fireEvent(annotation, 'remove');
        erase(this.options.annotations, annotation.options);
        erase(annotations, annotation);
        annotation.destroy();
    }
}
/**
 * Create lookups initially.
 * @internal
 */
function onChartAfterInit() {
    const chart = this, annotationsOption = this.options.annotations, annotationsUserOption = this.userOptions.annotations;
    chart.annotations = [];
    if (!isArray(this.options.annotations)) {
        this.options.annotations = [];
    }
    if (isObject(annotationsUserOption, true) &&
        isObject(annotationsOption, true)) {
        this.options.annotations.push(annotationsOption);
    }
}
/** @internal */
function wrapPointerOnContainerMouseDown(proceed) {
    if (!this.chart.hasDraggedAnnotation) {
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    }
}
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var AnnotationChart;
(function (AnnotationChart) {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(AnnotationClass, ChartClass, PointerClass) {
        const chartProto = ChartClass.prototype;
        if (!chartProto.addAnnotation) {
            const pointerProto = PointerClass.prototype;
            addEvent(ChartClass, 'afterInit', onChartAfterInit);
            chartProto.addAnnotation = chartAddAnnotation;
            chartProto.callbacks.push(chartCallback);
            chartProto.collectionsWithInit.annotations = [chartAddAnnotation];
            chartProto.collectionsWithUpdate.push('annotations');
            chartProto.drawAnnotations = chartDrawAnnotations;
            chartProto.removeAnnotation = chartRemoveAnnotation;
            chartProto.initAnnotation = function chartInitAnnotation(userOptions) {
                const Constructor = (AnnotationClass.types[userOptions.type] ||
                    AnnotationClass), annotation = new Constructor(this, userOptions);
                this.annotations.push(annotation);
                return annotation;
            };
            wrap(pointerProto, 'onContainerMouseDown', wrapPointerOnContainerMouseDown);
        }
    }
    AnnotationChart.compose = compose;
})(AnnotationChart || (AnnotationChart = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_AnnotationChart = (AnnotationChart);

;// ./code/es-modules/Extensions/Annotations/AnnotationDefaults.js
/* *
 *
 *  Imports
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * A collection of annotations to add to the chart. The basic annotation allows
 * adding custom labels or shapes. The items can be tied to points, axis
 * coordinates or chart pixel coordinates.
 *
 * General options for all annotations can be set using the
 * `Highcharts.setOptions` function. In this case only single objects are
 * supported, because it alters the defaults for all items. For initialization
 * in the chart constructors however, arrays of annotations are supported.
 *
 * See more in the [general docs](https://www.highcharts.com/docs/advanced-chart-features/annotations).
 *
 * @sample highcharts/annotations/basic/ Basic annotations
 * @sample highcharts/demo/annotations/ Annotated chart
 * @sample highcharts/css/annotations Styled mode
 * @sample highcharts/annotations-advanced/controllable Controllable items
 * @sample {highstock} stock/annotations/fibonacci-retracements
 *         Custom annotation, Fibonacci retracement
 * @sample highcharts/annotations/shape/
 *         Themed crooked line annotation
 *
 * @type         {Array<*>}
 * @since        6.0.0
 * @requires     modules/annotations
 * @optionparent annotations
 * @internal
 */
const AnnotationDefaults = {
    /**
     * A class name for styling by CSS.
     *
     * @since 12.5.0
     * @type      {string}
     * @apioption annotations.className
     */
    /**
     * Sets an ID for an annotation. Can be user later when
     * removing an annotation in [Chart#removeAnnotation(id)](
     * /class-reference/Highcharts.Chart#removeAnnotation) method.
     *
     * @type      {number|string}
     * @apioption annotations.id
     */
    /**
     * For advanced annotations, this option defines the type of annotation. Can
     * be one of the keys listed under the [types option](#annotations.types).
     *
     * @sample    highcharts/annotations-advanced/crooked-line
     *            Crooked line annotation
     * @requires  modules/annotations-advanced
     * @product   highstock
     * @type      {string}
     * @apioption annotations.type
     */
    /**
     * Whether the annotation is visible.
     *
     * @sample highcharts/annotations/visible/
     *         Set annotation visibility
     */
    visible: true,
    /**
     * Enable or disable the initial animation when a series is
     * displayed for the `annotation`. The animation can also be set
     * as a configuration object. Please note that this option only
     * applies to the initial animation.
     * For other animations, see [chart.animation](#chart.animation)
     * and the animation parameter under the API methods.
     * The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     *
     * @sample {highcharts} highcharts/annotations/defer/
     *          Animation defer settings
     * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
     * @since 8.2.0
     */
    animation: {},
    /**
     * Whether to hide the part of the annotation
     * that is outside the plot area.
     *
     * @sample highcharts/annotations/label-crop-overflow/
     *         Crop line annotation
     * @type  {boolean}
     * @since 9.3.0
     */
    crop: true,
    /**
     * The animation delay time in milliseconds.
     * Set to `0` renders annotation immediately.
     * As `undefined` inherits defer time from the [series.animation.defer](#plotOptions.series.animation.defer).
     *
     * @type      {number}
     * @since 8.2.0
     * @apioption annotations.animation.defer
     */
    /**
     * Allow an annotation to be draggable by a user. Possible
     * values are `'x'`, `'xy'`, `'y'` and `''` (disabled).
     *
     * @sample highcharts/annotations/draggable/
     *         Annotations draggable: 'xy'
     *
     * @type {Highcharts.AnnotationDraggableValue}
     */
    draggable: 'xy',
    /**
     * Options for annotation's labels. Each label inherits options
     * from the labelOptions object. An option from the labelOptions
     * can be overwritten by config for a specific label.
     *
     * @requires modules/annotations
     */
    labelOptions: {
        /**
         * The alignment of the annotation's label. If right,
         * the right side of the label should be touching the point.
         *
         * @sample highcharts/annotations/label-position/
         *         Set labels position
         *
         * @type {Highcharts.AlignValue}
         */
        align: 'center',
        /**
         * Whether to allow the annotation's labels to overlap.
         * To make the labels less sensitive for overlapping,
         * the can be set to 0.
         *
         * @sample highcharts/annotations/tooltip-like/
         *         Hide overlapping labels
         */
        allowOverlap: false,
        /**
         * The background color or gradient for the annotation's label.
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         *
         * @type {Highcharts.ColorType}
         */
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        /**
         * The border color for the annotation's label.
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         *
         * @type {Highcharts.ColorType}
         */
        borderColor: "#000000" /* Palette.neutralColor100 */,
        /**
         * The border radius in pixels for the annotation's label.
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         */
        borderRadius: 3,
        /**
         * The border width in pixels for the annotation's label.
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         */
        borderWidth: 1,
        /**
         * A class name for styling by CSS.
         *
         * @sample highcharts/css/annotations
         *         Styled mode annotations
         *
         * @since 6.0.5
         */
        className: 'highcharts-no-tooltip',
        /**
         * Whether to hide the annotation's label
         * that is outside the plot area.
         *
         * @sample highcharts/annotations/label-crop-overflow/
         *         Crop or justify labels
         */
        crop: false,
        /**
         * The label's pixel distance from the point.
         *
         * @sample highcharts/annotations/label-position/
         *         Set labels position
         *
         * @type      {number}
         * @apioption annotations.labelOptions.distance
         */
        /**
         * A
         * [format](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
         * string for the data label.
         *
         * @see [plotOptions.series.dataLabels.format](#plotOptions.series.dataLabels.format)
         *
         * @sample highcharts/annotations/label-text/
         *         Set labels text
         *
         * @type      {string}
         * @apioption annotations.labelOptions.format
         */
        /**
         * Alias for the format option.
         *
         * @see [format](#annotations.labelOptions.format)
         *
         * @sample highcharts/annotations/label-text/
         *         Set labels text
         *
         * @type      {string}
         * @apioption annotations.labelOptions.text
         */
        /**
         * Callback JavaScript function to format the annotation's
         * label. Note that if a `format` or `text` are defined,
         * the format or text take precedence and the formatter is
         * ignored. `This` refers to a point object. The callback also receives
         * an argument `ctx` so that arrow-functions can access the same
         * context (the point in this case) as normal functions can using
         * `this`. Since v12.6.0, the callback receives `ctx`.
         *
         * @sample highcharts/annotations/label-text/
         *         Set labels text
         *
         * @type    {Highcharts.FormatterCallbackFunction<Highcharts.Point>}
         * @default function () { return defined(this.y) ? this.y : 'Annotation label'; }
         */
        formatter: function () {
            return defined(this.y) ? '' + this.y : 'Annotation label';
        },
        /**
         * Whether all the labels for an annotation are visible in the exported
         * data table.
         *
         * @sample highcharts/annotations/include-in-data-export/
         *         Do not include in the data export
         *
         * @since 8.2.0
         * @requires modules/export-data
         */
        includeInDataExport: true,
        /**
         * How to handle the annotation's label that flow outside
         * the plot area. The justify option aligns the label inside
         * the plot area.
         *
         * @sample highcharts/annotations/label-crop-overflow/
         *         Crop or justify labels
         *
         * @validvalue ["allow", "justify"]
         */
        overflow: 'justify',
        /**
         * When either the borderWidth or the backgroundColor is
         * set, this is the padding within the box.
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         */
        padding: 5,
        /**
         * The shadow of the box. The shadow can be an object
         * configuration containing `color`, `offsetX`, `offsetY`,
         * `opacity` and `width`.
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         *
         * @type {boolean|Highcharts.ShadowOptionsObject}
         */
        shadow: false,
        /**
         * The name of a symbol to use for the border around the
         * label. Symbols are predefined functions on the Renderer
         * object.
         *
         * @sample highcharts/annotations/shapes/
         *         Available shapes for labels
         */
        shape: 'callout',
        /**
         * Styles for the annotation's label.
         *
         * @see [plotOptions.series.dataLabels.style](plotOptions.series.dataLabels.style.html)
         *
         * @sample highcharts/annotations/label-presentation/
         *         Set labels graphic options
         *
         * @type {Highcharts.CSSObject}
         * @default {"fontSize": "0.7em", "fontWeight": "normal", "color": "contrast"}
         */
        style: {
            /** @ignore */
            fontSize: '0.7em',
            /** @ignore */
            fontWeight: 'normal',
            /** @ignore */
            color: 'contrast'
        },
        /**
         * Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the annotation's label.
         */
        useHTML: false,
        /**
         * The vertical alignment of the annotation's label.
         *
         * @sample highcharts/annotations/label-position/
         *         Set labels position
         *
         * @type {Highcharts.VerticalAlignValue}
         */
        verticalAlign: 'bottom',
        /**
         * The x position offset of the label relative to the point.
         * Note that if a `distance` is defined, the distance takes
         * precedence over `x` and `y` options.
         *
         * @sample highcharts/annotations/label-position/
         *         Set labels position
         */
        x: 0,
        /**
         * The y position offset of the label relative to the point.
         * Note that if a `distance` is defined, the distance takes
         * precedence over `x` and `y` options.
         *
         * @sample highcharts/annotations/label-position/
         *         Set labels position
         */
        y: -16
    },
    /**
     * An array of labels for the annotation. For options that apply
     * to multiple labels, they can be added to the
     * [labelOptions](annotations.labelOptions.html).
     *
     * @type      {Array<*>}
     * @extends   annotations.labelOptions
     * @apioption annotations.labels
     */
    /**
     * The array of control points.
     *
     * @sample highcharts/annotations/ellipse
     *         Ellipse annotation
     *
     * @extends annotations.controlPointOptions
     * @type {Array<AnnotationControlPointOptionsObject>}
     * @apioption annotations.labels.controlPoints
     */
    /**
     * This option defines the point to which the label will be
     * connected. It can be either the point which exists in the
     * series - it is referenced by the point's id - or a new point
     * with defined x, y properties and optionally axes.
     *
     * @sample highcharts/annotations/mock-point/
     *         Attach annotation to a mock point
     * @sample highcharts/annotations/mock-points/
     *         Attach annotation to a mock point with different ways
     *
     * @type      {Highcharts.AnnotationMockPointOptions}
     * @requires  modules/annotations
     * @apioption annotations.labels.point
     */
    /**
     * An array of shapes for the annotation. For options that apply
     * to multiple shapes, then can be added to the
     * [shapeOptions](annotations.shapeOptions.html).
     *
     * @type      {Array<*>}
     * @extends   annotations.shapeOptions
     * @apioption annotations.shapes
     */
    /**
     * The array of control points.
     *
     * @sample highcharts/annotations-advanced/controllable-image
     *         Controllable image annotation
     *
     * @extends annotations.controlPointOptions
     * @type {Array<AnnotationControlPointOptionsObject>}
     * @apioption annotations.shapes.controlPoints
     */
    /**
     * This option defines the point to which the shape will be
     * connected. It can be either the point which exists in the
     * series - it is referenced by the point's id - or a new point
     * with defined x, y properties and optionally axes.
     *
     * @sample highcharts/annotations/mock-points/
     *         Attach annotation to a mock point with different ways
     *
     * @type      {Highcharts.AnnotationMockPointOptions}
     * @extends   annotations.labels.point
     * @requires  modules/annotations
     * @apioption annotations.shapes.point
     */
    /**
     * An array of points for the shape
     * or a callback function that returns that shape point.
     *
     * This option is available
     * for shapes which can use multiple points such as path. A
     * point can be either a point object or a point's id.
     *
     * @see [annotations.shapes.point](#annotations.shapes.point)
     *
     * @type      {Array<Highcharts.AnnotationMockPointOptions>}
     * @extends   annotations.labels.point
     * @apioption annotations.shapes.points
     */
    /**
     * Id of the marker which will be drawn at the final vertex of
     * the path. Custom markers can be defined in defs property.
     *
     * @see [defs.markers](#defs.markers)
     *
     * @sample highcharts/annotations/custom-markers/
     *         Define a custom marker for annotations
     *
     * @type      {string}
     * @apioption annotations.shapes.markerEnd
     */
    /**
     * Id of the marker which will be drawn at the first vertex of
     * the path. Custom markers can be defined in defs property.
     *
     * @see [defs.markers](#defs.markers)
     *
     * @sample {highcharts} highcharts/annotations/custom-markers/
     *         Define a custom marker for annotations
     *
     * @type      {string}
     * @apioption annotations.shapes.markerStart
     */
    /**
     * Options for annotation's shapes. Each shape inherits options
     * from the shapeOptions object. An option from the shapeOptions
     * can be overwritten by config for a specific shape.
     *
     * @requires  modules/annotations
     */
    shapeOptions: {
        /**
         * The radius of the `ellipse` shape in y direction. Can be defined in
         * pixels or yAxis units, if
         * [shapes.yAxis](#annotations.shapeOptions.yAxis) index is defined.
         *
         * @sample highcharts/annotations/ellipse/
         *         Ellipse annotation
         *
         * @type      {number}
         * @apioption annotations.shapeOptions.ry
         **/
        /**
         * The xAxis index which should be used for annotation's sizes and
         * points coordinates conversion.
         *
         * This option is used for `rect` shape
         * [width](#annotations.shapeOptions.width), and all shapes
         * [point](#annotations.shapes.point) and
         * [points](#annotations.shapes.points) coordinates.
         *
         * @sample highcharts/annotations/shapes-axis-units/
         *         Shapes created with axis units
         * @type      {number}
         * @apioption annotations.shapeOptions.xAxis
         **/
        /**
         * The yAxis index which should be used for annotation's sizes and
         * points coordinates conversion.
         *
         * This option is used for `rect` shape
         * [height](#annotations.shapeOptions.height), `circle` shape
         * [radius](#annotations.shapeOptions.r), `ellipse`
         * [y direction radius](#annotations.shapeOptions.ry), and all shapes
         * [point](#annotations.shapes.point) and
         * [points](#annotations.shapes.points) coordinates.
         *
         * @sample highcharts/annotations/shapes-axis-units/
         *         Shapes created with axis units
         * @type      {number}
         * @apioption annotations.shapeOptions.yAxis
         **/
        /**
         * The width of the `rect` shape. Can be defined in pixels or xAxis
         * units, if [shapes.xAxis](#annotations.shapeOptions.xAxis) index is
         * defined.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         *
         * @type      {number}
         * @apioption annotations.shapeOptions.width
         **/
        /**
         * The height of the `rect` shape. Can be defined in pixels or yAxis
         * units, if [shapes.yAxis](#annotations.shapeOptions.yAxis) index is
         * defined.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         *
         * @type      {number}
         * @apioption annotations.shapeOptions.height
         */
        /**
         * The type of the shape.
         * Available options are `circle`, `rect`, `ellipse` and `path`.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         *
         * @sample highcharts/annotations/ellipse/
         *         Ellipse annotation
         *
         * @type      {string}
         * @default   rect
         * @apioption annotations.shapeOptions.type
         */
        /**
         * The URL for an image to use as the annotation shape.
         * Note, type has to be set to `'image'`.
         *
         * @see [annotations.shapeOptions.type](#annotations.shapeOptions.type)
         *
         * @sample highcharts/annotations/shape-src/
         *         Define a marker image url for annotations
         *
         * @type      {string}
         * @apioption annotations.shapeOptions.src
         */
        /**
         * Name of the dash style to use for the shape's stroke.
         *
         * @sample {highcharts} highcharts/plotoptions/series-dashstyle-all/
         *         Possible values demonstrated
         *
         * @type      {Highcharts.DashStyleValue}
         * @apioption annotations.shapeOptions.dashStyle
         */
        /**
         * The color of the shape's stroke.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         *
         * @type {Highcharts.ColorType}
         */
        stroke: 'rgba(0, 0, 0, 0.75)',
        /**
         * The pixel stroke width of the shape.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         */
        strokeWidth: 1,
        /**
         * The color of the shape's fill.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         *
         * @type {Highcharts.ColorType}
         */
        fill: 'rgba(0, 0, 0, 0.75)',
        /**
         * The radius of the `circle` shape. Can be defined in pixels or yAxis
         * units, if [shapes.yAxis](#annotations.shapeOptions.yAxis) index is
         * defined.
         *
         * @sample highcharts/annotations/shape/
         *         Basic shape annotation
         */
        r: 0,
        /**
         * Defines additional snapping area around an annotation
         * making this annotation to focus. Defined in pixels.
         */
        snap: 2
    },
    /**
     * Options for annotation's control points. Each control point
     * inherits options from controlPointOptions object.
     * Options from the controlPointOptions can be overwritten
     * by options in a specific control point.
     *
     * @declare  Highcharts.AnnotationControlPointOptionsObject
     * @requires modules/annotations
     */
    controlPointOptions: {
        /**
         * @type      {Highcharts.AnnotationControlPointPositionerFunction}
         * @apioption annotations.controlPointOptions.positioner
         */
        /**
         * @type {Highcharts.Dictionary<Function>}
         */
        events: {},
        /**
         * @type {Highcharts.SVGAttributes}
         */
        style: {
            cursor: 'pointer',
            fill: "#ffffff" /* Palette.backgroundColor */,
            stroke: "#000000" /* Palette.neutralColor100 */,
            'stroke-width': 2
        },
        height: 10,
        symbol: 'circle',
        visible: false,
        width: 10
    },
    /**
     * Event callback when annotation is added to the chart.
     *
     * @type      {Highcharts.EventCallbackFunction<Highcharts.Annotation>}
     * @since     7.1.0
     * @apioption annotations.events.add
     */
    /**
     * Event callback when annotation is updated (e.g. drag and
     * dropped or resized by control points).
     *
     * @type      {Highcharts.EventCallbackFunction<Highcharts.Annotation>}
     * @since     7.1.0
     * @apioption annotations.events.afterUpdate
     */
    /**
     * Fires when the annotation is clicked.
     *
     * @type      {Highcharts.EventCallbackFunction<Highcharts.Annotation>}
     * @since     7.1.0
     * @apioption annotations.events.click
     */
    /**
     * Fires when the annotation is dragged.
     *
     * @type      {Highcharts.EventCallbackFunction<Highcharts.Annotation>}
     * @apioption annotations.events.drag
     */
    /**
     * Event callback when annotation is removed from the chart.
     *
     * @type      {Highcharts.EventCallbackFunction<Highcharts.Annotation>}
     * @since     7.1.0
     * @apioption annotations.events.remove
     */
    /**
     * Events available in annotations.
     *
     * @requires modules/annotations
     */
    events: {},
    /**
     *
     * Additional options for an annotation with the type.
     *
     * @requires  modules/annotations
     * @apioption annotations.typeOptions
     */
    typeOptions: {
    /**
     * Background shape options for the annotation.
     *
     * @extends annotations.shapeOptions
     * @apioption annotations.typeOptions.background
     */
    /**
     * Height of the annotation in pixels.
     *
     * @type {number}
     * @apioption annotations.typeOptions.height
     */
    /**
     * Line options.
     *
     * @extends annotations.shapeOptions
     * @apioption annotations.typeOptions.line
     */
    /**
     * A single point that the annotation is attached to. It can be either
     * the point which exists in the series - it is referenced by the
     * point's id - or a new point with defined x, y properties
     * and optionally axes.
     *
     * @type {string | Highcharts.AnnotationMockPointOptionsObject}
     * @apioption annotations.typeOptions.point
     */
    /**
     * An array of points that the annotation is attached to. Each point can
     * the point which exists in the series - it is referenced by the
     * point's id - or a new point with defined x, y properties
     * and optionally axes.
     *
     * @type {Array<(string | Highcharts.AnnotationMockPointOptionsObject)>}
     * @apioption annotations.typeOptions.points
     */
    /**
     * The annotation type identifier.
     *
     * @type {string}
     * @apioption annotations.typeOptions.type
     */
    /**
     * This number defines which `xAxis` the point is connected to.
     * It refers to either the axis id or the index of the axis
     * in the `xAxis` array.
     *
     * @type {number}
     * @apioption annotations.typeOptions.xAxis
     */
    /**
     * This number defines which `yAxis` the point is connected to.
     * It refers to either the axis id or the index of the axis
     * in the `yAxis` array.
     *
     * @type {number}
     * @apioption annotations.typeOptions.yAxis
     */
    },
    /**
     * Option override for specific advanced annotation types. This collection
     * is intended for general theming using `Highcharts.setOptions()`.
     *
     * @sample   highcharts/annotations/shape/
     *           Themed crooked line annotation
     * @product highstock
     * @requires modules/annotations-advanced
     */
    types: {},
    /**
     * The Z index of the annotation.
     */
    zIndex: 6
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Annotations_AnnotationDefaults = (AnnotationDefaults);

;// ./code/es-modules/Extensions/Annotations/EventEmitter.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { doc: EventEmitter_doc, isTouchDevice } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Class
 *
 * */
// Internal class, but made public because Annotation extends it.
class EventEmitter {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Add emitter events.
     * @internal
     */
    addEvents() {
        const emitter = this, addMouseDownEvent = function (element) {
            addEvent(element, isTouchDevice ? 'touchstart' : 'mousedown', (e) => {
                emitter.onMouseDown(e);
            }, { passive: false });
        };
        addMouseDownEvent(this.graphic.element);
        (emitter.labels || []).forEach((label) => {
            if (label.options.useHTML &&
                label.graphic.text &&
                !label.graphic.text.foreignObject) {
                // Mousedown event bound to HTML element (#13070).
                addMouseDownEvent(label.graphic.text.element);
            }
        });
        objectEach(emitter.options.events, (event, type) => {
            const eventHandler = function (e) {
                if (type !== 'click' || !emitter.cancelClick) {
                    event.call(emitter, emitter.chart.pointer?.normalize(e), emitter.target, emitter);
                }
            };
            if ((emitter.nonDOMEvents || []).indexOf(type) === -1) {
                addEvent(emitter.graphic.element, type, eventHandler, { passive: false });
                if (emitter.graphic.div) {
                    addEvent(emitter.graphic.div, type, eventHandler, { passive: false });
                }
            }
            else {
                addEvent(emitter, type, eventHandler, { passive: false });
            }
        });
        if (emitter.options.draggable) {
            addEvent(emitter, 'drag', emitter.onDrag);
            if (!emitter.graphic.renderer.styledMode) {
                const cssPointer = {
                    cursor: {
                        x: 'ew-resize',
                        y: 'ns-resize',
                        xy: 'move'
                    }[emitter.options.draggable]
                };
                emitter.graphic.css(cssPointer);
                (emitter.labels || []).forEach((label) => {
                    if (label.options.useHTML &&
                        label.graphic.text &&
                        !label.graphic.text.foreignObject) {
                        label.graphic.text.css(cssPointer);
                    }
                });
            }
        }
        if (!emitter.isUpdating) {
            fireEvent(emitter, 'add');
        }
    }
    /**
     * Destroy the event emitter.
     * @internal
     */
    destroy() {
        this.removeDocEvents();
        removeEvent(this);
        this.hcEvents = null;
    }
    /**
     * Map mouse move event to the radians.
     * @internal
     */
    mouseMoveToRadians(e, cx, cy) {
        let prevDy = e.prevChartY - cy, prevDx = e.prevChartX - cx, dy = e.chartY - cy, dx = e.chartX - cx, temp;
        if (this.chart.inverted) {
            temp = prevDx;
            prevDx = prevDy;
            prevDy = temp;
            temp = dx;
            dx = dy;
            dy = temp;
        }
        return Math.atan2(dy, dx) - Math.atan2(prevDy, prevDx);
    }
    /**
     * Map mouse move to the scale factors.
     * @internal
     */
    mouseMoveToScale(e, cx, cy) {
        const prevDx = e.prevChartX - cx, prevDy = e.prevChartY - cy, dx = e.chartX - cx, dy = e.chartY - cy;
        let sx = (dx || 1) / (prevDx || 1), sy = (dy || 1) / (prevDy || 1);
        if (this.chart.inverted) {
            const temp = sy;
            sy = sx;
            sx = temp;
        }
        return {
            x: sx,
            y: sy
        };
    }
    /**
     * Map mouse move event to the distance between two following events.
     * @internal
     */
    mouseMoveToTranslation(e) {
        let dx = e.chartX - e.prevChartX, dy = e.chartY - e.prevChartY, temp;
        if (this.chart.inverted) {
            temp = dy;
            dy = dx;
            dx = temp;
        }
        return {
            x: dx,
            y: dy
        };
    }
    /**
     * Drag and drop event. All basic annotations should share this
     * capability as well as the extended ones.
     * @internal
     */
    onDrag(e) {
        if (this.chart.isInsidePlot(e.chartX - this.chart.plotLeft, e.chartY - this.chart.plotTop, {
            visiblePlotOnly: true
        })) {
            const translation = this.mouseMoveToTranslation(e);
            if (this.options.draggable === 'x') {
                translation.y = 0;
            }
            if (this.options.draggable === 'y') {
                translation.x = 0;
            }
            const emitter = this;
            if (emitter.points.length) {
                emitter.translate(translation.x, translation.y);
            }
            else {
                emitter.shapes.forEach((shape) => shape.translate(translation.x, translation.y));
                emitter.labels.forEach((label) => label.translate(translation.x, translation.y));
            }
            this.redraw(false);
        }
    }
    /**
     * Mouse down handler.
     * @internal
     */
    onMouseDown(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        // On right click, do nothing:
        if (e.button === 2) {
            return;
        }
        const emitter = this, pointer = emitter.chart.pointer, 
        // Using experimental property on event object to check if event was
        // created by touch on screen on hybrid device (#18122)
        firesTouchEvents = (e?.sourceCapabilities?.firesTouchEvents) || false;
        e = pointer?.normalize(e) || e;
        let prevChartX = e.chartX, prevChartY = e.chartY;
        emitter.cancelClick = false;
        emitter.chart.hasDraggedAnnotation = true;
        emitter.removeDrag = addEvent(EventEmitter_doc, isTouchDevice || firesTouchEvents ? 'touchmove' : 'mousemove', function (e) {
            emitter.hasDragged = true;
            e = pointer?.normalize(e) || e;
            e.prevChartX = prevChartX;
            e.prevChartY = prevChartY;
            fireEvent(emitter, 'drag', e);
            prevChartX = e.chartX;
            prevChartY = e.chartY;
        }, isTouchDevice || firesTouchEvents ? { passive: false } : void 0);
        emitter.removeMouseUp = addEvent(EventEmitter_doc, isTouchDevice || firesTouchEvents ? 'touchend' : 'mouseup', function () {
            // Sometimes the target is the annotation and sometimes its the
            // controllable
            const annotation = pick(emitter.target && emitter.target.annotation, emitter.target);
            if (annotation) {
                // Keep annotation selected after dragging control point
                annotation.cancelClick = emitter.hasDragged;
            }
            emitter.cancelClick = emitter.hasDragged;
            emitter.chart.hasDraggedAnnotation = false;
            if (emitter.hasDragged) {
                // ControlPoints vs Annotation:
                fireEvent(pick(annotation, // #15952
                emitter), 'afterUpdate');
            }
            emitter.hasDragged = false;
            emitter.onMouseUp();
        }, isTouchDevice || firesTouchEvents ? { passive: false } : void 0);
    }
    /**
     * Mouse up handler.
     * @internal
     */
    onMouseUp() {
        this.removeDocEvents();
    }
    /**
     * Remove emitter document events.
     * @internal
     */
    removeDocEvents() {
        if (this.removeDrag) {
            this.removeDrag = this.removeDrag();
        }
        if (this.removeMouseUp) {
            this.removeMouseUp = this.removeMouseUp();
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_EventEmitter = (EventEmitter);

;// ./code/es-modules/Extensions/Annotations/ControlPoint.js
/* *
 *
 *
 * */



/* *
 *
 *  Class
 *
 * */
/**
 * A control point class which is a connection between controllable
 * transform methods and a user actions.
 *
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControlPoint
 *
 * @hideconstructor
 *
 * @param {Highcharts.Chart} chart
 * A chart instance.
 *
 * @param {Highcharts.AnnotationControllable} target
 * A controllable instance which is a target for a control point.
 *
 * @param {Highcharts.AnnotationControlPointOptionsObject} options
 * An options object.
 *
 * @param {number} [index]
 * Point index.
 */
class ControlPoint extends Annotations_EventEmitter {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, target, options, index) {
        super();
        /**
         * List of events for `annotation.options.events` that should not be
         * added to `annotation.graphic` but to the `annotation`.
         *
         * @internal
         * @name Highcharts.AnnotationControlPoint#nonDOMEvents
         * @type {Array<string>}
         */
        this.nonDOMEvents = ['drag'];
        this.chart = chart;
        this.target = target;
        this.options = options;
        this.index = pick(options.index, index);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Destroy the control point.
     * @internal
     */
    destroy() {
        super.destroy();
        if (this.graphic) {
            this.graphic = this.graphic.destroy();
        }
        this.chart = null;
        this.target = null;
        this.options = null;
    }
    /**
     * Redraw the control point.
     *
     * @internal
     * @param {boolean} [animation]
     */
    redraw(animation) {
        this.graphic[animation ? 'animate' : 'attr'](this.options.positioner.call(this, this.target, this));
    }
    /**
     * Render the control point.
     * @internal
     */
    render() {
        const chart = this.chart, options = this.options;
        this.graphic = chart.renderer
            .symbol(options.symbol, 0, 0, options.width, options.height)
            .add(chart.controlPointsGroup)
            .css(options.style);
        this.setVisibility(options.visible);
        // `npm test -- --tests "@highcharts/highcharts/annotations-advanced/*"`
        this.addEvents();
    }
    /**
     * Set the visibility of the control point.
     *
     * @function Highcharts.AnnotationControlPoint#setVisibility
     *
     * @param {boolean} visible
     * Visibility of the control point.
     *
     */
    setVisibility(visible) {
        this.graphic[visible ? 'show' : 'hide']();
        this.options.visible = visible;
    }
    /**
     * Update the control point.
     *
     * @function Highcharts.AnnotationControlPoint#update
     *
     * @param {Partial<Highcharts.AnnotationControlPointOptionsObject>} userOptions
     * New options for the control point.
     */
    update(userOptions) {
        const chart = this.chart, target = this.target, index = this.index, options = merge(true, this.options, userOptions);
        this.destroy();
        this.constructor(chart, target, options, index);
        this.render(chart.controlPointsGroup);
        this.redraw();
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_ControlPoint = (ControlPoint);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback to modify annotation's positioner controls.
 *
 * @callback Highcharts.AnnotationControlPointPositionerFunction
 * @param {Highcharts.AnnotationControlPoint} this
 * @param {Highcharts.AnnotationControllable} target
 * @return {Highcharts.PositionObject}
 */
(''); // Keeps doclets above in JS file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Extensions/Annotations/MockPoint.js
/* *
 *
 *
 * */


const { series: { prototype: seriesProto } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default());

/* *
 *
 *  Class
 *
 * */
/**
 * A trimmed point object which imitates {@link Highcharts.Point} class. It is
 * created when there is a need of pointing to some chart's position using axis
 * values or pixel values
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationMockPoint
 *
 * @hideconstructor
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.AnnotationControllable|null} target
 * The related controllable.
 *
 * @param {Highcharts.AnnotationMockPointOptionsObject|Function} options
 * The options object.
 */
class MockPoint {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Create a mock point from a real Highcharts point.
     *
     * @internal
     * @static
     *
     * @param {Highcharts.Point} point
     *
     * @return {Highcharts.AnnotationMockPoint}
     * A mock point instance.
     */
    static fromPoint(point) {
        return new MockPoint(point.series.chart, null, {
            x: point.x,
            y: point.y,
            xAxis: point.series.xAxis,
            yAxis: point.series.yAxis
        });
    }
    /**
     * Get the pixel position from the point like object.
     *
     * @internal
     * @static
     *
     * @param {Highcharts.AnnotationPointType} point
     *
     * @param {boolean} [paneCoordinates]
     *        Whether the pixel position should be relative
     *
     * @return {Highcharts.PositionObject} pixel position
     */
    static pointToPixels(point, paneCoordinates) {
        const series = point.series, chart = series.chart;
        let x = point.plotX || 0, y = point.plotY || 0, plotBox;
        if (chart.inverted) {
            if (point.mock) {
                x = point.plotY;
                y = point.plotX;
            }
            else {
                x = chart.plotWidth - (point.plotY || 0);
                y = chart.plotHeight - (point.plotX || 0);
            }
        }
        if (series && !paneCoordinates) {
            plotBox = series.getPlotBox();
            x += plotBox.translateX;
            y += plotBox.translateY;
        }
        return {
            x: x,
            y: y
        };
    }
    /**
     * Get fresh mock point options from the point like object.
     *
     * @internal
     * @static
     *
     * @param {Highcharts.AnnotationPointType} point
     *
     * @return {Highcharts.AnnotationMockPointOptionsObject}
     * A mock point's options.
     */
    static pointToOptions(point) {
        return {
            x: point.x,
            y: point.y,
            xAxis: point.series.xAxis,
            yAxis: point.series.yAxis
        };
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, target, options) {
        /* *
         *
         * Functions
         *
         * */
        /**
         * A flag indicating that a point is not a real one.
         */
        this.mock = true;
        // Circular reference for formats and formatters
        this.point = this;
        /**
         * A mock series instance imitating a real series from a real point.
         *
         * @name Annotation.AnnotationMockPoint#series
         * @type {Highcharts.AnnotationMockSeries}
         */
        this.series = {
            visible: true,
            chart: chart,
            getPlotBox: seriesProto.getPlotBox
        };
        /**
         * @name Annotation.AnnotationMockPoint#target
         * @type {Highcharts.AnnotationControllable|null}
         */
        this.target = target || null;
        /**
         * Options for the mock point.
         *
         * @name Annotation.AnnotationMockPoint#options
         * @type {Highcharts.AnnotationsMockPointOptionsObject}
         */
        this.options = options;
        /**
         * If an xAxis is set it represents the point's value in terms of the
         * xAxis.
         *
         * @name Annotation.AnnotationMockPoint#x
         * @type {number|undefined}
         */
        /**
         * If an yAxis is set it represents the point's value in terms of the
         * yAxis.
         *
         * @name Annotation.AnnotationMockPoint#y
         * @type {number|undefined}
         */
        /**
         * It represents the point's pixel x coordinate relative to its plot
         * box.
         *
         * @name Annotation.AnnotationMockPoint#plotX
         * @type {number|undefined}
         */
        /**
         * It represents the point's pixel y position relative to its plot box.
         *
         * @name Annotation.AnnotationMockPoint#plotY
         * @type {number|undefined}
         */
        /**
         * Whether the point is inside the plot box.
         *
         * @name Annotation.AnnotationMockPoint#isInside
         * @type {boolean|undefined}
         */
        this.applyOptions(this.getOptions());
    }
    /**
     * Apply options for the point.
     *
     * @internal
     * @param {Highcharts.AnnotationMockPointOptionsObject} options
     */
    applyOptions(options) {
        this.command = options.command;
        this.setAxis(options, 'x');
        this.setAxis(options, 'y');
        this.refresh();
    }
    /**
     * Get the point's options.
     *
     * @internal
     * @return {Highcharts.AnnotationMockPointOptionsObject}
     * The mock point's options.
     */
    getOptions() {
        if (this.hasDynamicOptions()) {
            if (typeof this.options === 'function') {
                return this.options(this.target);
            }
        }
        return this.options;
    }
    /**
     * Check if the point has dynamic options.
     *
     * @internal
     * @return {boolean}
     * A positive flag if the point has dynamic options.
     */
    hasDynamicOptions() {
        return typeof this.options === 'function';
    }
    /**
     * Check if the point is inside its pane.
     *
     * @internal
     * @return {boolean} A flag indicating whether the point is inside the pane.
     */
    isInsidePlot() {
        const plotX = this.plotX, plotY = this.plotY, xAxis = this.series.xAxis, yAxis = this.series.yAxis, e = {
            x: plotX,
            y: plotY,
            isInsidePlot: true,
            options: {}
        };
        if (xAxis) {
            e.isInsidePlot = defined(plotX) && plotX >= 0 && plotX <= xAxis.len;
        }
        if (yAxis) {
            e.isInsidePlot =
                e.isInsidePlot &&
                    defined(plotY) &&
                    plotY >= 0 && plotY <= yAxis.len;
        }
        fireEvent(this.series.chart, 'afterIsInsidePlot', e);
        return e.isInsidePlot;
    }
    /**
     * Refresh point values and coordinates based on its options.
     * @internal
     */
    refresh() {
        const series = this.series, xAxis = series.xAxis, yAxis = series.yAxis, options = this.getOptions();
        if (xAxis) {
            this.x = options.x;
            this.plotX = xAxis.toPixels(options.x, true);
        }
        else {
            this.x = void 0;
            this.plotX = options.x;
        }
        if (yAxis) {
            this.y = options.y;
            this.plotY = yAxis.toPixels(options.y, true);
        }
        else {
            this.y = null;
            this.plotY = options.y;
        }
        this.isInside = this.isInsidePlot();
    }
    /**
     * Refresh point options based on its plot coordinates.
     * @internal
     */
    refreshOptions() {
        const series = this.series, xAxis = series.xAxis, yAxis = series.yAxis;
        this.x = this.options.x = xAxis ?
            this.options.x = xAxis.toValue(this.plotX, true) :
            this.plotX;
        this.y = this.options.y = yAxis ?
            yAxis.toValue(this.plotY, true) :
            this.plotY;
    }
    /**
     * Rotate the point.
     *
     * @internal
     * @param {number} cx origin x rotation
     * @param {number} cy origin y rotation
     * @param {number} radians
     */
    rotate(cx, cy, radians) {
        if (!this.hasDynamicOptions()) {
            const cos = Math.cos(radians), sin = Math.sin(radians), x = this.plotX - cx, y = this.plotY - cy, tx = x * cos - y * sin, ty = x * sin + y * cos;
            this.plotX = tx + cx;
            this.plotY = ty + cy;
            this.refreshOptions();
        }
    }
    /**
     * Scale the point.
     *
     * @internal
     *
     * @param {number} cx
     * Origin x transformation.
     *
     * @param {number} cy
     * Origin y transformation.
     *
     * @param {number} sx
     * Scale factor x.
     *
     * @param {number} sy
     * Scale factor y.
     */
    scale(cx, cy, sx, sy) {
        if (!this.hasDynamicOptions()) {
            const x = this.plotX * sx, y = this.plotY * sy, tx = (1 - sx) * cx, ty = (1 - sy) * cy;
            this.plotX = tx + x;
            this.plotY = ty + y;
            this.refreshOptions();
        }
    }
    /**
     * Set x or y axis.
     *
     * @internal
     * @param {Highcharts.AnnotationMockPointOptionsObject} options
     * @param {string} xOrY
     * 'x' or 'y' string literal
     */
    setAxis(options, xOrY) {
        const axisName = (xOrY + 'Axis'), axisOptions = options[axisName], chart = this.series.chart;
        this.series[axisName] =
            typeof axisOptions === 'object' ?
                axisOptions :
                defined(axisOptions) ?
                    (chart[axisName][axisOptions] ||
                        // @todo v--- (axisName)[axisOptions] ?
                        chart.get(axisOptions)) :
                    null;
    }
    /**
     * Transform the mock point to an anchor (relative position on the chart).
     *
     * @internal
     * @return {Array<number>}
     * A quadruple of numbers which denotes x, y, width and height of the box
     **/
    toAnchor() {
        const anchor = [this.plotX, this.plotY, 0, 0];
        if (this.series.chart.inverted) {
            anchor[0] = this.plotY;
            anchor[1] = this.plotX;
        }
        return anchor;
    }
    /**
     * Translate the point.
     *
     * @internal
     **/
    translate(_cx, _cy, dx, dy) {
        if (!this.hasDynamicOptions()) {
            this.plotX += dx;
            this.plotY += dy;
            this.refreshOptions();
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_MockPoint = (MockPoint);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @internal
 * @interface Highcharts.AnnotationMockLabelOptionsObject
 */ /**
* Point instance of the point.
* @name Highcharts.AnnotationMockLabelOptionsObject#point
* @type {Highcharts.AnnotationMockPoint}
*/ /**
* X value translated to x axis scale.
* @name Highcharts.AnnotationMockLabelOptionsObject#x
* @type {number|null}
*/ /**
* Y value translated to y axis scale.
* @name Highcharts.AnnotationMockLabelOptionsObject#y
* @type {number|null}
*/
/**
 * Object of shape point.
 *
 * @interface Highcharts.AnnotationMockPointOptionsObject
 */ /**
* The x position of the point. Units can be either in axis
* or chart pixel coordinates.
*
* @type      {number}
* @name      Highcharts.AnnotationMockPointOptionsObject.x
*/ /**
* The y position of the point. Units can be either in axis
* or chart pixel coordinates.
*
* @type      {number}
* @name      Highcharts.AnnotationMockPointOptionsObject.y
*/ /**
* This number defines which xAxis the point is connected to.
* It refers to either the axis id or the index of the axis in
* the xAxis array. If the option is not configured or the axis
* is not found the point's x coordinate refers to the chart
* pixels.
*
* @type      {number|string|null}
* @name      Highcharts.AnnotationMockPointOptionsObject.xAxis
*/ /**
* This number defines which yAxis the point is connected to.
* It refers to either the axis id or the index of the axis in
* the yAxis array. If the option is not configured or the axis
* is not found the point's y coordinate refers to the chart
* pixels.
*
* @type      {number|string|null}
* @name      Highcharts.AnnotationMockPointOptionsObject.yAxis
*/
/**
 * Callback function that returns the annotation shape point or it's options.
 *
 * @callback Highcharts.AnnotationMockPointFunction
 *
 * @param {Highcharts.AnnotationControllable} controllable
 *        Controllable shape or label.
 *
 * @return {
 *     Highcharts.AnnotationMockPointOptionsObject |
 *     Highcharts.Point
 * }
 *         Annotations shape point or it's options.
 */
/**
 * A mock series instance imitating a real series from a real point.
 * @internal
 * @interface Highcharts.AnnotationMockSeries
 */ /**
* Whether a series is visible.
* @name Highcharts.AnnotationMockSeries#visible
* @type {boolean}
*/ /**
* A chart instance.
* @name Highcharts.AnnotationMockSeries#chart
* @type {Highcharts.Chart}
*/ /**
* @name Highcharts.AnnotationMockSeries#getPlotBox
* @type {Function}
*/
/**
 * Indicates if this is a mock point for an annotation.
 * @name Highcharts.Point#mock
 * @type {boolean|undefined}
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/Annotations/ControlTarget.js
/* *
 *
 *
 * */




/* *
 *
 *  Composition Namespace
 *
 * */
/** @internal */
var ControlTarget;
(function (ControlTarget) {
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
     * Add control points.
     * @internal
     */
    function addControlPoints() {
        const controlPoints = this.controlPoints, controlPointsOptions = this.options.controlPoints || [];
        controlPointsOptions.forEach((controlPointOptions, i) => {
            const options = merge(this.options.controlPointOptions, controlPointOptions);
            if (!options.index) {
                options.index = i;
            }
            controlPointsOptions[i] = options;
            controlPoints.push(new Annotations_ControlPoint(this.chart, this, options));
        });
    }
    /**
     * Returns object which denotes anchor position - relative and absolute.
     *
     * @internal
     * @param {Highcharts.AnnotationPointType} point
     * An annotation point.
     *
     * @return {Highcharts.AnnotationAnchorObject}
     * An annotation anchor.
     */
    function anchor(point) {
        const plotBox = point.series.getPlotBox(), chart = point.series.chart, box = point.mock ?
            point.toAnchor() :
            chart.tooltip &&
                chart.tooltip.getAnchor.call({
                    chart: point.series.chart
                }, point) ||
                [0, 0, 0, 0], anchor = {
            x: box[0] + (this.options.x || 0),
            y: box[1] + (this.options.y || 0),
            height: box[2] || 0,
            width: box[3] || 0
        };
        return {
            relativePosition: anchor,
            absolutePosition: merge(anchor, {
                x: anchor.x + (point.mock ? plotBox.translateX : chart.plotLeft),
                y: anchor.y + (point.mock ? plotBox.translateY : chart.plotTop)
            })
        };
    }
    /**
     * Adds shared functions to be used with targets of ControlPoint.
     * @internal
     */
    function compose(ControlTargetClass) {
        const controlProto = ControlTargetClass.prototype;
        if (!controlProto.addControlPoints) {
            merge(true, controlProto, {
                addControlPoints,
                anchor,
                destroyControlTarget,
                getPointsOptions,
                linkPoints,
                point,
                redrawControlPoints,
                renderControlPoints,
                transform,
                transformPoint,
                translate,
                translatePoint
            });
        }
    }
    ControlTarget.compose = compose;
    /**
     * Destroy control points.
     * @internal
     */
    function destroyControlTarget() {
        this.controlPoints.forEach((controlPoint) => controlPoint.destroy());
        this.chart = null;
        this.controlPoints = null;
        this.points = null;
        this.options = null;
        if (this.annotation) {
            this.annotation = null;
        }
    }
    /**
     * Get the points options.
     *
     * @internal
     * @return {Array<Highcharts.PointOptionsObject>}
     * An array of points' options.
     */
    function getPointsOptions() {
        const options = this.options;
        return (options.points ||
            (options.point && splat(options.point)));
    }
    /**
     * Find point-like objects based on points options.
     *
     * @internal
     * @return {Array<Annotation.PointBase>}
     *         An array of point-like objects.
     */
    function linkPoints() {
        const pointsOptions = this.getPointsOptions(), points = this.points, len = pointsOptions?.length || 0;
        let i, point;
        for (i = 0; i < len; i++) {
            point = this.point(pointsOptions[i], points[i]);
            if (!point) {
                points.length = 0;
                return;
            }
            if (point.mock) {
                point.refresh();
            }
            points[i] = point;
        }
        return points;
    }
    /**
     * Map point's options to a point-like object.
     *
     * @internal
     * @param {
     *      string|
     *      Function|
     *      Highcharts.AnnotationMockPointOptionsObject|
     *      Highcharts.AnnotationPointType
     * } pointOptions
     *        Point's options.
     * @param {Highcharts.AnnotationPointType} point
     *        A point-like instance.
     * @return {Highcharts.AnnotationPointType|null}
     *         If the point is found/set returns this point, otherwise null
     */
    function point(pointOptions, point) {
        if (pointOptions && pointOptions.series) {
            return pointOptions;
        }
        if (!point || point.series === null) {
            if (isObject(pointOptions)) {
                point = new Annotations_MockPoint(this.chart, this, pointOptions);
            }
            else if (isString(pointOptions)) {
                point = this.chart.get(pointOptions) || null;
            }
            else if (typeof pointOptions === 'function') {
                const pointConfigOrPoint = pointOptions.call(point, this);
                point = pointConfigOrPoint.series ?
                    pointConfigOrPoint :
                    new Annotations_MockPoint(this.chart, this, pointOptions);
            }
        }
        return point;
    }
    /**
     * Redraw control points.
     * @internal
     */
    function redrawControlPoints(animation) {
        this.controlPoints.forEach((controlPoint) => controlPoint.redraw(animation));
    }
    /**
     * Render control points.
     * @internal
     */
    function renderControlPoints() {
        this.controlPoints.forEach((controlPoint) => controlPoint.render());
    }
    /**
     * Transform control points with a specific transformation.
     *
     * @internal
     * @param {string} transformation
     *        A transformation name
     * @param {number|null} cx
     *        Origin x transformation
     * @param {number|null} cy
     *        Origin y transformation
     * @param {number} p1
     *        Param for the transformation
     * @param {number} [p2]
     *        Param for the transformation
     */
    function transform(transformation, cx, cy, p1, p2) {
        if (this.chart.inverted) {
            const temp = cx;
            cx = cy;
            cy = temp;
        }
        this.points.forEach((_point, i) => (this.transformPoint(transformation, cx, cy, p1, p2, i)), this);
    }
    /**
     * Transform a point with a specific transformation
     * If a transformed point is a real point it is replaced with
     * the mock point.
     *
     * @internal
     * @param {string} transformation
     *        A transformation name
     * @param {number|null} cx
     *        Origin x transformation
     * @param {number|null} cy
     *        Origin y transformation
     * @param {number} p1
     *        Param for the transformation
     * @param {number|undefined} p2
     *        Param for the transformation
     * @param {number} i
     *        Index of the point
     */
    function transformPoint(transformation, cx, cy, p1, p2, i) {
        let point = this.points[i];
        if (!point.mock) {
            point = this.points[i] = Annotations_MockPoint.fromPoint(point);
        }
        point[transformation](cx, cy, p1, p2);
    }
    /**
     * Translate control points.
     *
     * @internal
     * @param {number} dx
     *        Translation for x coordinate
     * @param {number} dy
     *        Translation for y coordinate
     **/
    function translate(dx, dy) {
        this.transform('translate', null, null, dx, dy);
    }
    /**
     * Translate a specific control point.
     *
     * @internal
     * @param {number} dx
     *        Translation for x coordinate
     * @param {number} dy
     *        Translation for y coordinate
     * @param {number} i
     *        Index of the point
     **/
    function translatePoint(dx, dy, i) {
        this.transformPoint('translate', null, null, dx, dy, i);
    }
})(ControlTarget || (ControlTarget = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_ControlTarget = (ControlTarget);

;// ./code/es-modules/Extensions/Annotations/Controllables/Controllable.js
/* *
 *
 *
 * */



/* *
 *
 *  Class
 *
 * */
class Controllable {
    /* *
     *
     *  Constructor
     *
     * */
    /** @internal */
    constructor(annotation, options, index, itemType) {
        this.annotation = annotation;
        this.chart = annotation.chart;
        this.collection = (itemType === 'label' ? 'labels' : 'shapes');
        this.controlPoints = [];
        this.options = options;
        this.points = [];
        this.index = index;
        this.itemType = itemType;
        this.init(annotation, options, index);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Redirect attr usage on the controllable graphic element.
     * @internal
     */
    attr(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ..._args) {
        this.graphic.attr.apply(this.graphic, arguments);
    }
    /**
     * Utility function for mapping item's options
     * to element's attribute
     * @internal
     * @param {Highcharts.AnnotationsLabelsOptions|Highcharts.AnnotationsShapesOptions} options
     * @return {Highcharts.SVGAttributes}
     *         Mapped options.
     */
    attrsFromOptions(options) {
        const map = this.constructor.attrsMap, attrs = {}, styledMode = this.chart.styledMode;
        let key, mappedKey;
        for (key in options) { // eslint-disable-line guard-for-in
            mappedKey = map[key];
            if (typeof map[key] !== 'undefined' &&
                (!styledMode ||
                    ['fill', 'stroke', 'stroke-width']
                        .indexOf(mappedKey) === -1)) {
                attrs[mappedKey] = options[key];
            }
        }
        return attrs;
    }
    /**
     * Destroy a controllable.
     * @internal
     */
    destroy() {
        if (this.graphic) {
            this.graphic = this.graphic.destroy();
        }
        if (this.tracker) {
            this.tracker = this.tracker.destroy();
        }
        this.destroyControlTarget();
    }
    /**
     * Get the pixel value from a start point to an end point on an axis.
     * @internal
     */
    calculateAnnotationSize(startPoint, value, axis) {
        const startPixel = axis.toPixels(startPoint, true), endPixel = axis.toPixels(startPoint + value, true);
        return Math.abs(endPixel - startPixel);
    }
    /**
     * Init the controllable
     * @internal
     */
    init(annotation, options, index) {
        this.annotation = annotation;
        this.chart = annotation.chart;
        this.options = options;
        this.points = [];
        this.controlPoints = [];
        this.index = index;
        this.linkPoints();
        this.addControlPoints();
    }
    /**
     * Redraw a controllable.
     * @internal
     */
    redraw(animation) {
        this.redrawControlPoints(animation);
    }
    /**
     * Render a controllable.
     * @internal
     */
    render(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _parentGroup) {
        if (this.options.className && this.graphic) {
            this.graphic.addClass(this.options.className);
        }
        this.renderControlPoints();
    }
    /**
     * Rotate a controllable.
     * @internal
     * @param {number} cx
     *        Origin x rotation
     * @param {number} cy
     *        Origin y rotation
     * @param {number} radians
     **/
    rotate(cx, cy, radians) {
        this.transform('rotate', cx, cy, radians);
    }
    /**
     * Scale a controllable.
     * @internal
     * @param {number} cx
     *        Origin x rotation
     * @param {number} cy
     *        Origin y rotation
     * @param {number} sx
     *        Scale factor x
     * @param {number} sy
     *        Scale factor y
     */
    scale(cx, cy, sx, sy) {
        this.transform('scale', cx, cy, sx, sy);
    }
    /**
     * Set control points' visibility.
     * @internal
     */
    setControlPointsVisibility(visible) {
        this.controlPoints.forEach((controlPoint) => {
            controlPoint.setVisibility(visible);
        });
    }
    /**
     * Check if a controllable should be rendered/redrawn.
     * @internal
     * @return {boolean}
     *         Whether a controllable should be drawn.
     */
    shouldBeDrawn() {
        return !!this.points.length;
    }
    /**
     * Translate shape within controllable item.
     * Replaces `controllable.translate` method.
     *
     * @internal
     * @param {number} dx
     *        Translation for x coordinate
     * @param {number} dy
     *        Translation for y coordinate
     * @param {boolean|undefined} translateSecondPoint
     *        If the shape has two points attached to it, this option allows you
     *        to translate also the second point.
     */
    translateShape(dx, dy, translateSecondPoint) {
        const chart = this.annotation.chart, 
        // Annotation.options
        shapeOptions = this.annotation.userOptions, 
        // Chart.options.annotations
        annotationIndex = chart.annotations.indexOf(this.annotation), chartOptions = chart.options.annotations[annotationIndex];
        this.translatePoint(dx, dy, 0);
        if (translateSecondPoint) {
            this.translatePoint(dx, dy, 1);
        }
        // Options stored in:
        // - chart (for exporting)
        // - current config (for redraws)
        chartOptions[this.collection][this.index]
            .point = this.options.point;
        shapeOptions[this.collection][this.index]
            .point = this.options.point;
    }
    /**
     * Update a controllable.
     * @internal
     */
    update(newOptions) {
        const annotation = this.annotation, options = merge(true, this.options, newOptions), parentGroup = this.graphic.parentGroup, Constructor = this.constructor;
        this.destroy();
        const newControllable = new Constructor(annotation, options, this.index, this.itemType);
        merge(true, this, newControllable);
        this.render(parentGroup);
        this.redraw();
    }
}
Annotations_ControlTarget.compose(Controllable);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Controllables_Controllable = (Controllable);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * An object which denotes a controllable's anchor positions - relative and
 * absolute.
 *
 * @internal
 * @interface Highcharts.AnnotationAnchorObject
 */ /**
* Relative to the plot area position.
*
* @internal
* @name Highcharts.AnnotationAnchorObject#relativePosition
* @type {Highcharts.BBoxObject}
*/ /**
* Absolute position.
*
* @internal
* @name Highcharts.AnnotationAnchorObject#absolutePosition
* @type {Highcharts.BBoxObject}
*/
/**
 * @interface Highcharts.AnnotationControllable
 */ /**
* @name Highcharts.AnnotationControllable#annotation
* @type {Highcharts.Annotation}
*/ /**
* @name Highcharts.AnnotationControllable#chart
* @type {Highcharts.Chart}
*/ /**
* @name Highcharts.AnnotationControllable#collection
* @type {string}
*/ /**
* @internal
* @name Highcharts.AnnotationControllable#controlPoints
* @type {Array<Highcharts.AnnotationControlPoint>}
*/ /**
* @name Highcharts.AnnotationControllable#points
* @type {Array<Highcharts.Point>}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/Annotations/Controllables/ControllableDefaults.js
/* *
 *
 *
 * */

/**
 * Options for configuring markers for annotations.
 *
 * An example of the arrow marker:
 * <pre>
 * {
 *   arrow: {
 *     id: 'arrow',
 *     tagName: 'marker',
 *     refY: 5,
 *     refX: 5,
 *     markerWidth: 10,
 *     markerHeight: 10,
 *     children: [{
 *       tagName: 'path',
 *       attrs: {
 *         d: 'M 0 0 L 10 5 L 0 10 Z',
 *         'stroke-width': 0
 *       }
 *     }]
 *   }
 * }
 * </pre>
 *
 * @sample highcharts/annotations/custom-markers/
 *         Define a custom marker for annotations
 *
 * @sample highcharts/css/annotations-markers/
 *         Define markers in a styled mode
 *
 * @type         {Highcharts.Dictionary<Highcharts.ASTNode>}
 * @since        6.0.0
 * @optionparent defs
 */
const defaultMarkers = {
    /**
     * @type {Highcharts.ASTNode}
     */
    arrow: {
        tagName: 'marker',
        attributes: {
            id: 'arrow',
            refY: 5,
            refX: 9,
            markerWidth: 10,
            markerHeight: 10
        },
        /**
         * @type {Array<Highcharts.DefsOptions>}
         */
        children: [{
                tagName: 'path',
                attributes: {
                    d: 'M 0 0 L 10 5 L 0 10 Z', // Triangle (used as an arrow)
                    'stroke-width': 0
                }
            }]
    },
    /**
     * @type {Highcharts.ASTNode}
     */
    'reverse-arrow': {
        tagName: 'marker',
        attributes: {
            id: 'reverse-arrow',
            refY: 5,
            refX: 1,
            markerWidth: 10,
            markerHeight: 10
        },
        children: [{
                tagName: 'path',
                attributes: {
                    // Reverse triangle (used as an arrow)
                    d: 'M 0 5 L 10 0 L 10 10 Z',
                    'stroke-width': 0
                }
            }]
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const ControllableDefaults = {
    defaultMarkers
};
/** @internal */
/* harmony default export */ const Controllables_ControllableDefaults = (ControllableDefaults);

;// ./code/es-modules/Extensions/Annotations/Controllables/ControllablePath.js
/* *
 *
 *
 * */



const { defaultMarkers: ControllablePath_defaultMarkers } = Controllables_ControllableDefaults;



/* *
 *
 *  Constants
 *
 * */
const markerEndSetter = createMarkerSetter('marker-end');
const markerStartSetter = createMarkerSetter('marker-start');
// See TRACKER_FILL in highcharts.src.js
const TRACKER_FILL = 'rgba(192,192,192,' + ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).svg ? 0.0001 : 0.002) + ')';
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function createMarkerSetter(markerType) {
    return function (value) {
        this.attr(markerType, 'url(#' + value + ')');
    };
}
/** @internal */
function onChartAfterGetContainer() {
    this.options.defs = merge(ControllablePath_defaultMarkers, this.options.defs || {});
    ///  objectEach(this.options.defs, function (def): void {
    //     const attributes = def.attributes;
    //     if (
    //         def.tagName === 'marker' &&
    //         attributes &&
    //         attributes.id &&
    //         attributes.display !== 'none'
    //     ) {
    //         this.renderer.addMarker(attributes.id, def);
    //     }
    // }, this);
}
/** @internal */
function svgRendererAddMarker(id, markerOptions) {
    const options = { attributes: { id } };
    const attrs = {
        stroke: markerOptions.color || 'none',
        fill: markerOptions.color || 'rgba(0, 0, 0, 0.75)'
    };
    options.children = (markerOptions.children &&
        markerOptions.children.map(function (child) {
            return merge(attrs, child);
        }));
    const ast = merge(true, {
        attributes: {
            markerWidth: 20,
            markerHeight: 20,
            refX: 0,
            refY: 0,
            orient: 'auto'
        }
    }, markerOptions, options);
    const marker = this.definition(ast);
    marker.id = id;
    return marker;
}
/* *
 *
 *  Class
 *
 * */
/**
 * A controllable path class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllablePath
 *
 * @param {Highcharts.Annotation}
 * Related annotation.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A path's options object.
 *
 * @param {number} index
 * Index of the path.
 */
class ControllablePath extends Controllables_Controllable {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(ChartClass, SVGRendererClass) {
        const svgRendererProto = SVGRendererClass.prototype;
        if (!svgRendererProto.addMarker) {
            addEvent(ChartClass, 'afterGetContainer', onChartAfterGetContainer);
            svgRendererProto.addMarker = svgRendererAddMarker;
        }
    }
    /* *
     *
     *  Constructors
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'shape');
        /* *
         *
         *  Properties
         *
         * */
        this.type = 'path';
    }
    /* *
     *
     *  Functions
     *
     * */
    init(annotation, options, index) {
        if (defined(options.yAxis)) {
            options.points.forEach((point) => {
                if (point && typeof point !== 'string') {
                    point.yAxis = options.yAxis;
                }
            });
        }
        if (defined(options.xAxis)) {
            options.points.forEach((point) => {
                if (point && typeof point !== 'string') {
                    point.xAxis = options.xAxis;
                }
            });
        }
        super.init(annotation, options, index);
    }
    /**
     * Map the controllable path to 'd' path attribute.
     *
     * @return {Highcharts.SVGPathArray|null}
     * A path's d attribute.
     */
    toD() {
        const dOption = this.options.d;
        if (dOption) {
            return typeof dOption === 'function' ?
                dOption.call(this) :
                dOption;
        }
        const points = this.points, len = points.length, d = [];
        let showPath = len, point = points[0], position = showPath && this.anchor(point).absolutePosition, pointIndex = 0, command;
        if (position) {
            d.push(['M', position.x, position.y]);
            while (++pointIndex < len && showPath) {
                point = points[pointIndex];
                command = point.command || 'L';
                position = this.anchor(point).absolutePosition;
                if (command === 'M') {
                    d.push([command, position.x, position.y]);
                }
                else if (command === 'L') {
                    d.push([command, position.x, position.y]);
                }
                else if (command === 'Z') {
                    d.push([command]);
                }
                showPath = point.series.visible;
            }
        }
        return (showPath && this.graphic ?
            this.chart.renderer.crispLine(d, this.graphic.strokeWidth()) :
            null);
    }
    shouldBeDrawn() {
        return super.shouldBeDrawn() || !!this.options.d;
    }
    render(parent) {
        const options = this.options, attrs = this.attrsFromOptions(options);
        this.graphic = this.annotation.chart.renderer
            .path([['M', 0, 0]])
            .attr(attrs)
            .add(parent);
        this.tracker = this.annotation.chart.renderer
            .path([['M', 0, 0]])
            .addClass('highcharts-tracker-line')
            .attr({
            zIndex: 2
        })
            .add(parent);
        if (!this.annotation.chart.styledMode) {
            this.tracker.attr({
                'stroke-linejoin': 'round', // #1225
                stroke: TRACKER_FILL,
                fill: TRACKER_FILL,
                'stroke-width': this.graphic.strokeWidth() +
                    options.snap * 2
            });
        }
        super.render();
        extend(this.graphic, { markerStartSetter, markerEndSetter });
        this.setMarkers(this);
    }
    redraw(animation) {
        if (this.graphic) {
            const d = this.toD(), action = animation ? 'animate' : 'attr';
            if (d) {
                this.graphic[action]({ d: d });
                this.tracker[action]({ d: d });
            }
            else {
                this.graphic.attr({ d: 'M 0 ' + -9e9 });
                this.tracker.attr({ d: 'M 0 ' + -9e9 });
            }
            this.graphic.placed = this.tracker.placed = !!d;
        }
        super.redraw(animation);
    }
    /**
     * Set markers.
     *
     * @param {Highcharts.AnnotationControllablePath} item
     */
    setMarkers(item) {
        const itemOptions = item.options, chart = item.chart, defs = chart.options.defs, fill = itemOptions.fill, color = defined(fill) && fill !== 'none' ?
            fill :
            itemOptions.stroke;
        const setMarker = function (markerType) {
            const markerId = itemOptions[markerType];
            let def, predefinedMarker, key, marker;
            if (markerId) {
                for (key in defs) { // eslint-disable-line guard-for-in
                    def = defs[key];
                    if ((markerId === (def.attributes && def.attributes.id) ||
                        // Legacy, for
                        // unit-tests/annotations/annotations-shapes
                        markerId === def.id) &&
                        def.tagName === 'marker') {
                        predefinedMarker = def;
                        break;
                    }
                }
                if (predefinedMarker) {
                    marker = item[markerType] = chart.renderer
                        .addMarker((itemOptions.id || (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)()) + '-' + markerId, merge(predefinedMarker, { color: color }));
                    item.attr(markerType, marker.getAttribute('id'));
                }
            }
        };
        ['markerStart', 'markerEnd']
            .forEach(setMarker);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element attributes
 *
 * @name Highcharts.AnnotationControllablePath.attrsMap
 * @type {Highcharts.Dictionary<string>}
 */
ControllablePath.attrsMap = {
    dashStyle: 'dashstyle',
    strokeWidth: 'stroke-width',
    stroke: 'stroke',
    fill: 'fill',
    zIndex: 'zIndex'
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Controllables_ControllablePath = (ControllablePath);

;// ./code/es-modules/Extensions/Annotations/Controllables/ControllableRect.js
/* *
 *
 *
 * */




/* *
 *
 *  Class
 *
 * */
/**
 * A controllable rect class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableRect
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A rect's options.
 *
 * @param {number} index
 * Index of the rectangle
 */
class ControllableRect extends Controllables_Controllable {
    /* *
     *
     *  Constructors
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'shape');
        /* *
         *
         *  Properties
         *
         * */
        this.type = 'rect';
        this.translate = super.translateShape;
    }
    /* *
     *
     *  Functions
     *
     * */
    init(annotation, options, index) {
        const { point, xAxis, yAxis } = options;
        if (point && typeof point !== 'string') {
            if (defined(xAxis)) {
                point.xAxis = xAxis;
            }
            if (defined(yAxis)) {
                point.yAxis = yAxis;
            }
        }
        super.init(annotation, options, index);
    }
    render(parent) {
        const attrs = this.attrsFromOptions(this.options);
        this.graphic = this.annotation.chart.renderer
            .rect(0, -9e9, 0, 0)
            .attr(attrs)
            .add(parent);
        super.render();
    }
    redraw(animation) {
        if (this.graphic) {
            const point = this.points[0], position = this.anchor(point).absolutePosition;
            let width = this.options.width || 0, height = this.options.height || 0;
            if (position) {
                const xAxis = defined(this.options.xAxis) ?
                    this.chart.xAxis[this.options.xAxis] : void 0, yAxis = defined(this.options.yAxis) ?
                    this.chart.yAxis[this.options.yAxis] : void 0;
                if (xAxis && defined(point.x)) {
                    width = this.calculateAnnotationSize(point.x, width, xAxis);
                }
                if (yAxis && defined(point.y)) {
                    height = this.calculateAnnotationSize(point.y, height, yAxis);
                }
                this.graphic[animation ? 'animate' : 'attr']({
                    x: position.x,
                    y: position.y,
                    width,
                    height
                });
            }
            else {
                this.attr({
                    x: 0,
                    y: -9e9
                });
            }
            this.graphic.placed = Boolean(position);
        }
        super.redraw(animation);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element attributes
 *
 * @type {Annotation.ControllableRect.AttrsMap}
 */
ControllableRect.attrsMap = merge(Controllables_ControllablePath.attrsMap, {
    width: 'width',
    height: 'height'
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Controllables_ControllableRect = (ControllableRect);

;// ./code/es-modules/Extensions/Annotations/Controllables/ControllableCircle.js
/* *
 *
 *
 * */




/* *
 *
 *  Class
 *
 * */
/**
 * A controllable circle class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableCircle
 *
 * @param {Highcharts.Annotation} annotation an annotation instance
 * @param {Highcharts.AnnotationsShapeOptions} options a shape's options
 * @param {number} index of the circle
 */
class ControllableCircle extends Controllables_Controllable {
    /* *
     *
     *  Constructors
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'shape');
        /* *
         *
         *  Properties
         *
         * */
        this.type = 'circle';
        this.translate = super.translateShape;
    }
    /* *
     *
     *  Functions
     *
     * */
    init(annotation, options, index) {
        const { point, xAxis, yAxis } = options;
        if (point && typeof point !== 'string') {
            if (defined(xAxis)) {
                point.xAxis = xAxis;
            }
            if (defined(yAxis)) {
                point.yAxis = yAxis;
            }
        }
        super.init(annotation, options, index);
    }
    redraw(animation) {
        if (this.graphic) {
            const point = this.points[0], position = this.anchor(point).absolutePosition;
            let r = this.options.r || 0;
            if (position) {
                const yAxis = defined(this.options.yAxis) ?
                    this.chart.yAxis[this.options.yAxis] : void 0;
                if (yAxis && defined(point.y)) {
                    r = this.calculateAnnotationSize(point.y, r, yAxis);
                }
                this.graphic[animation ? 'animate' : 'attr']({
                    x: position.x,
                    y: position.y,
                    r
                });
            }
            else {
                this.graphic.attr({
                    x: 0,
                    y: -9e9
                });
            }
            this.graphic.placed = !!position;
        }
        super.redraw.call(this, animation);
    }
    render(parent) {
        const attrs = this.attrsFromOptions(this.options);
        this.graphic = this.annotation.chart.renderer
            .circle(0, -9e9, 0)
            .attr(attrs)
            .add(parent);
        super.render();
    }
    /**
     * Set the radius.
     *
     * @internal
     * @param {number} r
     *        A radius to be set
     */
    setRadius(r) {
        this.options.r = r;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element
 * attributes.
 *
 * @name Highcharts.AnnotationControllableCircle.attrsMap
 * @type {Highcharts.Dictionary<string>}
 */
ControllableCircle.attrsMap = merge(Controllables_ControllablePath.attrsMap, { r: 'r' });
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Controllables_ControllableCircle = (ControllableCircle);

;// ./code/es-modules/Extensions/Annotations/Controllables/ControllableEllipse.js
/* *
 *
 * Author: Paweł Lysy
 *
 *
 * */




/* *
 *
 *  Class
 *
 * */
/**
 * A controllable ellipse class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableEllipse
 *
 * @param {Highcharts.Annotation} annotation an annotation instance
 * @param {Highcharts.AnnotationsShapeOptions} options a shape's options
 * @param {number} index of the Ellipse
 */
class ControllableEllipse extends Controllables_Controllable {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'shape');
        /* *
         *
         *  Properties
         *
         * */
        this.type = 'ellipse';
    }
    /* *
     *
     *  Functions
     *
     * */
    init(annotation, options, index) {
        if (defined(options.yAxis)) {
            options.points.forEach((point) => {
                if (point && typeof point !== 'string') {
                    point.yAxis = options.yAxis;
                }
            });
        }
        if (defined(options.xAxis)) {
            options.points.forEach((point) => {
                if (point && typeof point !== 'string') {
                    point.xAxis = options.xAxis;
                }
            });
        }
        super.init(annotation, options, index);
    }
    /**
     * Render the element.
     *
     * @param {Highcharts.SVGElement} parent
     *        Parent SVG element.
     */
    render(parent) {
        this.graphic = this.annotation.chart.renderer.createElement('ellipse')
            .attr(this.attrsFromOptions(this.options))
            .add(parent);
        super.render();
    }
    /**
     * Translate the points. Mostly used to handle dragging of the ellipse.
     */
    translate(dx, dy) {
        super.translateShape(dx, dy, true);
    }
    /**
     * Get the distance from the line to the point.
     *
     * @param {object} point1
     *        First point which is on the line
     * @param {object} point2
     *        Second point
     * @param {number} x0
     *        Point's x value from which you want to calculate the distance from
     * @param {number} y0
     *        Point's y value from which you want to calculate the distance from
     */
    getDistanceFromLine(point1, point2, x0, y0) {
        return Math.abs((point2.y - point1.y) * x0 - (point2.x - point1.x) * y0 +
            point2.x * point1.y - point2.y * point1.x) / Math.sqrt((point2.y - point1.y) * (point2.y - point1.y) +
            (point2.x - point1.x) * (point2.x - point1.x));
    }
    /**
     * The function calculates the svg attributes of the ellipse, and returns
     * all parameters necessary to draw the ellipse.
     *
     * @param {Highcharts.BBoxObject} position
     *        Absolute position of the first point in points array
     * @param {Highcharts.BBoxObject} position2
     *        Absolute position of the second point in points array
     */
    getAttrs(position, position2) {
        const x1 = position.x, y1 = position.y, x2 = position2.x, y2 = position2.y, cx = (x1 + x2) / 2, cy = (y1 + y2) / 2, rx = Math.sqrt((x1 - x2) * (x1 - x2) / 4 + (y1 - y2) * (y1 - y2) / 4), tan = (y2 - y1) / (x2 - x1);
        let angle = Math.atan(tan) * 180 / Math.PI;
        if (cx < x1) {
            angle += 180;
        }
        const ry = this.getRY();
        return { cx, cy, rx, ry, angle };
    }
    /**
     * Get the value of minor radius of the ellipse.
     */
    getRY() {
        const yAxis = this.getYAxis();
        return defined(yAxis) ?
            Math.abs(yAxis.toPixels(this.options.ry) - yAxis.toPixels(0)) :
            this.options.ry;
    }
    /**
     * Get the yAxis object to which the ellipse is pinned.
     */
    getYAxis() {
        const yAxisIndex = this.options.yAxis;
        return this.chart.yAxis[yAxisIndex];
    }
    /**
     * Get the absolute coordinates of the MockPoint.
     *
     * @param {Highcharts.AnnotationPointType} point
     *        MockPoint that is added through options
     */
    getAbsolutePosition(point) {
        return this.anchor(point).absolutePosition;
    }
    /**
     * Redraw the element.
     *
     * @param {boolean} [animation]
     *        Display an animation
     */
    redraw(animation) {
        if (this.graphic) {
            const position = this.getAbsolutePosition(this.points[0]), position2 = this.getAbsolutePosition(this.points[1]), attrs = this.getAttrs(position, position2);
            if (position) {
                this.graphic[animation ? 'animate' : 'attr']({
                    cx: attrs.cx,
                    cy: attrs.cy,
                    rx: attrs.rx,
                    ry: attrs.ry,
                    rotation: attrs.angle,
                    rotationOriginX: attrs.cx,
                    rotationOriginY: attrs.cy
                });
            }
            else {
                this.graphic.attr({
                    x: 0,
                    y: -9e9
                });
            }
            this.graphic.placed = Boolean(position);
        }
        super.redraw(animation);
    }
    /**
     * Set the radius Y.
     *
     * @param {number} ry
     *        A radius in y direction to be set
     */
    setYRadius(ry) {
        const shapes = this.annotation.userOptions.shapes;
        this.options.ry = ry;
        if (shapes && shapes[0]) {
            shapes[0].ry = ry;
            shapes[0].ry = ry;
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element
 * attributes.
 *
 * @name Highcharts.AnnotationControllableEllipse.attrsMap
 * @type {Highcharts.Dictionary<string>}
 */
ControllableEllipse.attrsMap = merge(Controllables_ControllablePath.attrsMap, {
    ry: 'ry'
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Controllables_ControllableEllipse = (ControllableEllipse);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Templating"],"commonjs":["highcharts","Templating"],"commonjs2":["highcharts","Templating"],"root":["Highcharts","Templating"]}
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_ = __webpack_require__(984);
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default = /*#__PURE__*/__webpack_require__.n(highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_);
;// ./code/es-modules/Extensions/Annotations/Controllables/ControllableLabel.js
/* *
 *
 *
 * */



const { format } = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default());


/* *
 *
 *  Functions
 *
 * */
/**
 * General symbol definition for labels with connector.
 * @internal
 */
function symbolConnector(x, y, w, h, options) {
    const anchorX = options && options.anchorX, anchorY = options && options.anchorY;
    let path, yOffset, lateral = w / 2;
    if (isNumber(anchorX) && isNumber(anchorY)) {
        path = [['M', anchorX, anchorY]];
        // Prefer 45 deg connectors
        yOffset = y - anchorY;
        if (yOffset < 0) {
            yOffset = -h - yOffset;
        }
        if (yOffset < w) {
            lateral = anchorX < x + (w / 2) ? yOffset : w - yOffset;
        }
        // Anchor below label
        if (anchorY > y + h) {
            path.push(['L', x + lateral, y + h]);
            // Anchor above label
        }
        else if (anchorY < y) {
            path.push(['L', x + lateral, y]);
            // Anchor left of label
        }
        else if (anchorX < x) {
            path.push(['L', x, y + h / 2]);
            // Anchor right of label
        }
        else if (anchorX > x + w) {
            path.push(['L', x + w, y + h / 2]);
        }
    }
    return path || [];
}
/* *
 *
 *  Class
 *
 * */
/**
 * A controllable label class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableLabel
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 * @param {Highcharts.AnnotationsLabelOptions} options
 * A label's options.
 * @param {number} index
 * Index of the label.
 */
class ControllableLabel extends Controllables_Controllable {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Returns new aligned position based alignment options and box to align to.
     * It is almost a one-to-one copy from SVGElement.prototype.align
     * except it does not use and mutate an element
     *
     * @param {Highcharts.AnnotationAlignObject} alignOptions
     *
     * @param {Highcharts.BBoxObject} box
     *
     * @return {Highcharts.PositionObject}
     * Aligned position.
     */
    static alignedPosition(alignOptions, box) {
        return {
            x: Math.round((box.x || 0) + (alignOptions.x || 0) +
                (box.width - (alignOptions.width || 0)) *
                    getAlignFactor(alignOptions.align)),
            y: Math.round((box.y || 0) + (alignOptions.y || 0) +
                (box.height - (alignOptions.height || 0)) *
                    getAlignFactor(alignOptions.verticalAlign))
        };
    }
    static compose(SVGRendererClass) {
        const symbols = SVGRendererClass.prototype.symbols;
        symbols.connector = symbolConnector;
    }
    /**
     * Returns new alignment options for a label if the label is outside the
     * plot area. It is almost a one-to-one copy from
     * Series.prototype.justifyDataLabel except it does not mutate the label and
     * it works with absolute instead of relative position.
     */
    static justifiedOptions(chart, label, alignOptions, alignAttr) {
        const align = alignOptions.align, verticalAlign = alignOptions.verticalAlign, padding = label.box ? 0 : (label.padding || 0), bBox = label.getBBox(), 
        //
        options = {
            align: align,
            verticalAlign: verticalAlign,
            x: alignOptions.x,
            y: alignOptions.y,
            width: label.width,
            height: label.height
        }, 
        //
        x = (alignAttr.x || 0) - chart.plotLeft, y = (alignAttr.y || 0) - chart.plotTop;
        let off;
        // Off left
        off = x + padding;
        if (off < 0) {
            if (align === 'right') {
                options.align = 'left';
            }
            else {
                options.x = (options.x || 0) - off;
            }
        }
        // Off right
        off = x + bBox.width - padding;
        if (off > chart.plotWidth) {
            if (align === 'left') {
                options.align = 'right';
            }
            else {
                options.x = (options.x || 0) + chart.plotWidth - off;
            }
        }
        // Off top
        off = y + padding;
        if (off < 0) {
            if (verticalAlign === 'bottom') {
                options.verticalAlign = 'top';
            }
            else {
                options.y = (options.y || 0) - off;
            }
        }
        // Off bottom
        off = y + bBox.height - padding;
        if (off > chart.plotHeight) {
            if (verticalAlign === 'top') {
                options.verticalAlign = 'bottom';
            }
            else {
                options.y = (options.y || 0) + chart.plotHeight - off;
            }
        }
        return options;
    }
    /* *
     *
     *  Constructors
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'label');
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Translate the point of the label by deltaX and deltaY translations.
     * The point is the label's anchor.
     *
     * @param {number} dx translation for x coordinate
     * @param {number} dy translation for y coordinate
     */
    translatePoint(dx, dy) {
        super.translatePoint(dx, dy, 0);
    }
    /**
     * Translate x and y position relative to the label's anchor.
     *
     * @param {number} dx translation for x coordinate
     * @param {number} dy translation for y coordinate
     */
    translate(dx, dy) {
        var _a,
            _b;
        const chart = this.annotation.chart, 
        // Annotation.options
        labelOptions = this.annotation.userOptions, 
        // Chart.options.annotations
        annotationIndex = chart.annotations.indexOf(this.annotation), chartAnnotations = chart.options.annotations, chartOptions = chartAnnotations[annotationIndex];
        if (chart.inverted) {
            const temp = dx;
            dx = dy;
            dy = temp;
        }
        // Local options:
        (_a = this.options).x || (_a.x = 0);
        (_b = this.options).y || (_b.y = 0);
        this.options.x += dx;
        this.options.y += dy;
        // Options stored in chart:
        chartOptions[this.collection][this.index].x = this.options.x;
        chartOptions[this.collection][this.index].y = this.options.y;
        labelOptions[this.collection][this.index].x = this.options.x;
        labelOptions[this.collection][this.index].y = this.options.y;
    }
    render(parent) {
        const options = this.options, attrs = this.attrsFromOptions(options), style = options.style, optionsChart = this.annotation.chart.options.chart, chartBackground = optionsChart.plotBackgroundColor ||
            optionsChart.backgroundColor;
        this.graphic = this.annotation.chart.renderer
            .label('', 0, -9999, // #10055
        options.shape, void 0, void 0, options.useHTML, void 0, 'annotation-label')
            .attr(attrs)
            .add(parent);
        if (!this.annotation.chart.styledMode) {
            if (style?.color === 'contrast') {
                const background = ((!options.shape ||
                    ControllableLabel.shapesWithoutBackground.indexOf(options.shape) > -1) || options.backgroundColor === 'none') ?
                    chartBackground :
                    options.backgroundColor;
                style.color = this.annotation.chart.renderer.getContrast(typeof background === 'string' ? background :
                    typeof chartBackground === 'string' ? chartBackground :
                        '#ffffff');
            }
            this.graphic
                .css(options.style || {})
                .shadow(options.shadow);
        }
        this.graphic.labelrank = options.labelrank;
        super.render();
    }
    redraw(animation) {
        const options = this.options, text = this.text || options.format || options.text, label = this.graphic, point = this.points[0];
        if (!label) {
            this.redraw(animation);
            return;
        }
        label.attr({
            text: text ?
                format(String(text), point, this.annotation.chart) :
                options.formatter.call(point, point)
        });
        const anchor = this.anchor(point);
        const attrs = this.position(anchor);
        if (attrs) {
            label.alignAttr = attrs;
            attrs.anchorX = anchor.absolutePosition.x;
            attrs.anchorY = anchor.absolutePosition.y;
            label[animation ? 'animate' : 'attr'](attrs);
        }
        else {
            label.attr({
                x: 0,
                y: -9999 // #10055
            });
        }
        label.placed = !!attrs;
        super.redraw(animation);
    }
    /**
     * All basic shapes don't support alignTo() method except label.
     * For a controllable label, we need to subtract translation from
     * options.
     */
    anchor(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _point) {
        const anchor = super.anchor.apply(this, arguments), x = this.options.x || 0, y = this.options.y || 0;
        anchor.absolutePosition.x -= x;
        anchor.absolutePosition.y -= y;
        anchor.relativePosition.x -= x;
        anchor.relativePosition.y -= y;
        return anchor;
    }
    /**
     * Returns the label position relative to its anchor.
     */
    position(anchor) {
        const item = this.graphic, chart = this.annotation.chart, tooltip = chart.tooltip, point = this.points[0], itemOptions = this.options, anchorAbsolutePosition = anchor.absolutePosition, anchorRelativePosition = anchor.relativePosition;
        let itemPosition, alignTo, itemPosRelativeX, itemPosRelativeY, showItem = point.series.visible &&
            Annotations_MockPoint.prototype.isInsidePlot.call(point);
        if (item && showItem) {
            const { width = 0, height = 0 } = item;
            if (itemOptions.distance && tooltip) {
                itemPosition = tooltip.getPosition.call({
                    chart,
                    distance: pick(itemOptions.distance, 16),
                    getPlayingField: tooltip.getPlayingField,
                    pointer: tooltip.pointer
                }, width, height, {
                    plotX: anchorRelativePosition.x,
                    plotY: anchorRelativePosition.y,
                    negative: point.negative,
                    ttBelow: point.ttBelow,
                    h: (anchorRelativePosition.height ||
                        anchorRelativePosition.width)
                });
            }
            else if (itemOptions.positioner) {
                itemPosition = itemOptions.positioner.call(this, this);
            }
            else {
                alignTo = {
                    x: anchorAbsolutePosition.x,
                    y: anchorAbsolutePosition.y,
                    width: 0,
                    height: 0
                };
                itemPosition = ControllableLabel.alignedPosition(extend(itemOptions, {
                    width,
                    height
                }), alignTo);
                if (this.options.overflow === 'justify') {
                    itemPosition = ControllableLabel.alignedPosition(ControllableLabel.justifiedOptions(chart, item, itemOptions, itemPosition), alignTo);
                }
            }
            if (itemOptions.crop) {
                itemPosRelativeX = itemPosition.x - chart.plotLeft;
                itemPosRelativeY = itemPosition.y - chart.plotTop;
                showItem =
                    chart.isInsidePlot(itemPosRelativeX, itemPosRelativeY) &&
                        chart.isInsidePlot(itemPosRelativeX + width, itemPosRelativeY + height);
            }
        }
        return showItem ? itemPosition : null;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element attributes
 *
 * @type {Highcharts.Dictionary<string>}
 */
ControllableLabel.attrsMap = {
    backgroundColor: 'fill',
    borderColor: 'stroke',
    borderWidth: 'stroke-width',
    zIndex: 'zIndex',
    borderRadius: 'r',
    padding: 'padding'
};
/**
 * Shapes which do not have background - the object is used for proper
 * setting of the contrast color.
 *
 * @type {Array<string>}
 */
ControllableLabel.shapesWithoutBackground = ['connector'];
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Controllables_ControllableLabel = (ControllableLabel);

;// ./code/es-modules/Extensions/Annotations/Controllables/ControllableImage.js
/* *
 *
 *
 * */



/* *
 *
 *  Class
 *
 * */
/**
 * A controllable image class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableImage
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A controllable's options.
 *
 * @param {number} index
 * Index of the image.
 */
class ControllableImage extends Controllables_Controllable {
    /* *
     *
     *  Constructors
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'shape');
        /* *
         *
         *  Properties
         *
         * */
        this.type = 'image';
        this.translate = super.translateShape;
    }
    render(parent) {
        const attrs = this.attrsFromOptions(this.options), options = this.options;
        this.graphic = this.annotation.chart.renderer
            .image(options.src, 0, -9e9, options.width, options.height)
            .attr(attrs)
            .add(parent);
        this.graphic.width = options.width;
        this.graphic.height = options.height;
        super.render();
    }
    redraw(animation) {
        if (this.graphic) {
            const anchor = this.anchor(this.points[0]), position = Controllables_ControllableLabel.prototype.position.call(this, anchor);
            if (position) {
                this.graphic[animation ? 'animate' : 'attr']({
                    x: position.x,
                    y: position.y
                });
            }
            else {
                this.graphic.attr({
                    x: 0,
                    y: -9e9
                });
            }
            this.graphic.placed = Boolean(position);
        }
        super.redraw(animation);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element attributes
 *
 * @name Highcharts.AnnotationControllableImage.attrsMap
 * @type {Highcharts.Dictionary<string>}
 */
ControllableImage.attrsMap = {
    width: 'width',
    height: 'height',
    zIndex: 'zIndex'
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Controllables_ControllableImage = (ControllableImage);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","AST"],"commonjs":["highcharts","AST"],"commonjs2":["highcharts","AST"],"root":["Highcharts","AST"]}
var highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_ = __webpack_require__(660);
var highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default = /*#__PURE__*/__webpack_require__.n(highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_);
;// ./code/es-modules/Shared/BaseForm.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/* *
 *
 *  Imports
 *
 * */


/* *
 *
 *  Class
 *
 * */
class BaseForm {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(parentDiv, iconsURL) {
        this.iconsURL = iconsURL;
        this.container = this.createPopupContainer(parentDiv);
        this.closeButton = this.addCloseButton();
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create popup div container.
     *
     * @param {HTMLElement} parentDiv
     * Parent div to attach popup.
     *
     * @param  {string} className
     * Class name of the popup.
     *
     * @return {HTMLElement}
     * Popup div.
     */
    createPopupContainer(parentDiv, className = 'highcharts-popup highcharts-no-tooltip') {
        return createElement('div', { className }, void 0, parentDiv);
    }
    /**
     * Create HTML element and attach click event to close popup.
     *
     * @param {string} className
     * Class name of the close button.
     *
     * @return {HTMLElement}
     * Close button.
     */
    addCloseButton(className = 'highcharts-popup-close') {
        const popup = this, iconsURL = this.iconsURL;
        // Create close popup button.
        const closeButton = createElement('button', { className }, void 0, this.container);
        createElement('span', {
            className: 'highcharts-icon'
        }, {
            backgroundImage: 'url(' + (iconsURL.match(/png|svg|jpeg|jpg|gif/ig) ?
                iconsURL : iconsURL + 'close.svg') + ')'
        }, closeButton);
        ['click', 'touchstart'].forEach((eventName) => {
            addEvent(closeButton, eventName, popup.closeButtonEvents.bind(popup));
        });
        // Close popup when press ESC
        addEvent(document, 'keydown', function (event) {
            if (event.code === 'Escape') {
                popup.closeButtonEvents();
            }
        });
        return closeButton;
    }
    /**
     * Close button events.
     * @return {void}
     */
    closeButtonEvents() {
        this.closePopup();
    }
    /**
     * Reset content of the current popup and show.
     *
     * @param {string} toolbarClass
     * Class name of the toolbar which styles should be reset.
     */
    showPopup(toolbarClass = 'highcharts-annotation-toolbar') {
        const popupDiv = this.container, popupCloseButton = this.closeButton;
        this.type = void 0;
        // Reset content.
        popupDiv.innerHTML = (highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default()).emptyHTML;
        // Reset toolbar styles if exists.
        if (popupDiv.className.indexOf(toolbarClass) >= 0) {
            popupDiv.classList.remove(toolbarClass);
            // Reset toolbar inline styles
            popupDiv.removeAttribute('style');
        }
        // Add close button.
        popupDiv.appendChild(popupCloseButton);
        popupDiv.style.display = 'block';
        popupDiv.style.height = '';
    }
    /**
     * Hide popup.
     */
    closePopup() {
        this.container.style.display = 'none';
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Shared_BaseForm = (BaseForm);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Color"],"commonjs":["highcharts","Color"],"commonjs2":["highcharts","Color"],"root":["Highcharts","Color"]}
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_ = __webpack_require__(620);
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default = /*#__PURE__*/__webpack_require__.n(highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_);
;// ./code/es-modules/Extensions/Annotations/Popup/PopupAnnotations.js
/* *
 *
 *  Popup generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { doc: PopupAnnotations_doc, isFirefox } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Functions
 *
 * */
/**
 * Create annotation simple form.
 * It contains fields with param names.
 *
 * @internal
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {Object} options
 * Options
 * @param {Function} callback
 * On click callback
 * @param {boolean} [isInit]
 * If it is a form declared for init annotation
 */
function addForm(chart, options, callback, isInit) {
    if (!chart) {
        return;
    }
    const popupDiv = this.container, lang = this.lang;
    // Create title of annotations
    let lhsCol = createElement('h2', {
        className: 'highcharts-popup-main-title'
    }, void 0, popupDiv);
    lhsCol.appendChild(PopupAnnotations_doc.createTextNode(lang[options.langKey] || options.langKey || ''));
    // Left column
    lhsCol = createElement('div', {
        className: ('highcharts-popup-lhs-col highcharts-popup-lhs-full')
    }, void 0, popupDiv);
    const bottomRow = createElement('div', {
        className: 'highcharts-popup-bottom-row'
    }, void 0, popupDiv);
    addFormFields.call(this, lhsCol, chart, '', options, [], true);
    this.addButton(bottomRow, isInit ?
        (lang.addButton || 'Add') :
        (lang.saveButton || 'Save'), isInit ? 'add' : 'save', popupDiv, callback);
}
/**
 * Create annotation simple form. It contains two buttons
 * (edit / remove) and text label.
 *
 * @internal
 * @param {Highcharts.Chart} chart
 *        The Chart instance
 * @param {Highcharts.AnnotationsOptions} options
 *        Annotation options
 * @param {Function} callback
 *        On click callback
 */
function addToolbar(chart, options, callback) {
    const lang = this.lang, popupDiv = this.container, showForm = this.showForm, toolbarClass = 'highcharts-annotation-toolbar';
    // Set small size
    if (popupDiv.className.indexOf(toolbarClass) === -1) {
        popupDiv.className += ' ' + toolbarClass + ' highcharts-no-mousewheel';
    }
    // Set position
    if (chart) {
        popupDiv.style.top = chart.plotTop + 10 + 'px';
    }
    // Create label
    const label = createElement('p', {
        className: 'highcharts-annotation-label'
    }, void 0, popupDiv);
    label.setAttribute('aria-label', 'Annotation type');
    label.appendChild(PopupAnnotations_doc.createTextNode(pick(
    // Advanced annotations:
    lang[options.langKey] || options.langKey, 
    // Basic shapes:
    options.shapes && options.shapes[0].type, '')));
    // Add buttons
    let button = this.addButton(popupDiv, lang.editButton || 'Edit', 'edit', popupDiv, () => {
        showForm.call(this, 'annotation-edit', chart, options, callback);
    });
    button.className += ' highcharts-annotation-edit-button';
    createElement('span', {
        className: 'highcharts-icon'
    }, {
        backgroundImage: `url(${this.iconsURL}edit.svg)`
    }, button);
    button = this.addButton(popupDiv, lang.removeButton || 'Remove', 'remove', popupDiv, callback);
    button.className += ' highcharts-annotation-remove-button';
    createElement('span', {
        className: 'highcharts-icon'
    }, {
        backgroundImage: `url(${this.iconsURL}destroy.svg)`
    }, button);
}
/**
 * Create annotation's form fields.
 *
 * @internal
 * @param {Highcharts.HTMLDOMElement} parentDiv
 * Div where inputs are placed
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {string} parentNode
 * Name of parent to create chain of names
 * @param {Highcharts.AnnotationsOptions} options
 * Options
 * @param {Array<unknown>} storage
 * Array where all items are stored
 * @param {boolean} [isRoot]
 * Recursive flag for root
 */
function addFormFields(parentDiv, chart, parentNode, options, storage, isRoot) {
    if (!chart) {
        return;
    }
    const addInput = this.addInput, lang = this.lang;
    let parentFullName, titleName;
    objectEach(options, (value, option) => {
        // Create name like params.styles.fontSize
        parentFullName = parentNode !== '' ? parentNode + '.' + option : option;
        if (isObject(value)) {
            if (
            // Value is object of options
            !isArray(value) ||
                // Array of objects with params. i.e labels in Fibonacci
                (isArray(value) && isObject(value[0]))) {
                titleName = lang[option] || option;
                if (!titleName.match(/\d/g)) {
                    storage.push([
                        true,
                        titleName,
                        parentDiv
                    ]);
                }
                addFormFields.call(this, parentDiv, chart, parentFullName, value, storage, false);
            }
            else {
                storage.push([
                    this,
                    parentFullName,
                    'annotation',
                    parentDiv,
                    value
                ]);
            }
        }
    });
    if (isRoot) {
        stableSort(storage, (a) => (a[1].match(/format/g) ? -1 : 1));
        if (isFirefox) {
            storage.reverse(); // (#14691)
        }
        storage.forEach((genInput) => {
            if (genInput[0] === true) {
                createElement('span', {
                    className: 'highcharts-annotation-title'
                }, void 0, genInput[2]).appendChild(PopupAnnotations_doc.createTextNode(genInput[1]));
            }
            else {
                genInput[4] = {
                    value: genInput[4][0],
                    type: genInput[4][1]
                };
                addInput.apply(genInput[0], genInput.splice(1));
            }
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const PopupAnnotations = {
    addForm,
    addToolbar
};
/** @internal */
/* harmony default export */ const Popup_PopupAnnotations = (PopupAnnotations);

;// ./code/es-modules/Extensions/Annotations/Popup/PopupIndicators.js
/* *
 *
 *  Popup generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { doc: PopupIndicators_doc } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { seriesTypes } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default());

/* *
 *
 *  Enums
 *
 * */
/**
 * Enum for properties which should have dropdown list.
 * @internal
 */
var DropdownProperties;
(function (DropdownProperties) {
    DropdownProperties[DropdownProperties["params.algorithm"] = 0] = "params.algorithm";
    DropdownProperties[DropdownProperties["params.average"] = 1] = "params.average";
})(DropdownProperties || (DropdownProperties = {}));
/**
 * List of available algorithms for the specific indicator.
 * @internal
 */
const dropdownParameters = {
    'algorithm-pivotpoints': ['standard', 'fibonacci', 'camarilla'],
    'average-disparityindex': ['sma', 'ema', 'dema', 'tema', 'wma']
};
/* *
 *
 *  Functions
 *
 * */
/**
 * Create two columns (divs) in HTML.
 *
 * @internal
 * @param {Highcharts.HTMLDOMElement} container
 * Container of columns
 * @return {Highcharts.Dictionary<Highcharts.HTMLDOMElement>}
 * Reference to two HTML columns (lhsCol, rhsCol)
 */
function addColsContainer(container) {
    // Left column
    const lhsCol = createElement('div', {
        className: 'highcharts-popup-lhs-col'
    }, void 0, container);
    // Right column
    const rhsCol = createElement('div', {
        className: 'highcharts-popup-rhs-col'
    }, void 0, container);
    // Wrapper content
    createElement('div', {
        className: 'highcharts-popup-rhs-col-wrapper'
    }, void 0, rhsCol);
    return {
        lhsCol: lhsCol,
        rhsCol: rhsCol
    };
}
/**
 * Create indicator's form. It contains two tabs (ADD and EDIT) with
 * content.
 * @internal
 */
function PopupIndicators_addForm(chart, _options, callback) {
    const lang = this.lang;
    let buttonParentDiv;
    if (!chart) {
        return;
    }
    // Add tabs
    this.tabs.init.call(this, chart);
    // Get all tabs content divs
    const tabsContainers = this.container
        .querySelectorAll('.highcharts-tab-item-content');
    // ADD tab
    addColsContainer(tabsContainers[0]);
    addSearchBox.call(this, chart, tabsContainers[0]);
    addIndicatorList.call(this, chart, tabsContainers[0], 'add');
    buttonParentDiv = tabsContainers[0]
        .querySelectorAll('.highcharts-popup-rhs-col')[0];
    this.addButton(buttonParentDiv, lang.addButton || 'add', 'add', buttonParentDiv, callback);
    // EDIT tab
    addColsContainer(tabsContainers[1]);
    addIndicatorList.call(this, chart, tabsContainers[1], 'edit');
    buttonParentDiv = tabsContainers[1]
        .querySelectorAll('.highcharts-popup-rhs-col')[0];
    this.addButton(buttonParentDiv, lang.saveButton || 'save', 'edit', buttonParentDiv, callback);
    this.addButton(buttonParentDiv, lang.removeButton || 'remove', 'remove', buttonParentDiv, callback);
}
/**
 * Create typical inputs for chosen indicator. Fields are extracted from
 * defaultOptions (ADD mode) or current indicator (ADD mode). Two extra
 * fields are added:
 * - hidden input - contains indicator type (required for callback)
 * - select - list of series which can be linked with indicator
 *
 * @internal
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {Highcharts.Series} series
 * Indicator
 * @param {string} seriesType
 * Indicator type like: sma, ema, etc.
 * @param {Highcharts.HTMLDOMElement} rhsColWrapper
 * Element where created HTML list is added
 */
function PopupIndicators_addFormFields(chart, series, seriesType, rhsColWrapper) {
    const fields = series.params || series.options.params;
    // Reset current content
    rhsColWrapper.innerHTML = (highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default()).emptyHTML;
    // Create title (indicator name in the right column)
    createElement('h3', {
        className: 'highcharts-indicator-title'
    }, void 0, rhsColWrapper).appendChild(PopupIndicators_doc.createTextNode(getNameType(series, seriesType).indicatorFullName));
    // Input type
    createElement('input', {
        type: 'hidden',
        name: 'highcharts-type-' + seriesType,
        value: seriesType
    }, void 0, rhsColWrapper);
    // List all series with id
    listAllSeries.call(this, seriesType, 'series', chart, rhsColWrapper, series, series.linkedParent && series.linkedParent.options.id);
    if (fields.volumeSeriesID) {
        listAllSeries.call(this, seriesType, 'volume', chart, rhsColWrapper, series, series.linkedParent && fields.volumeSeriesID);
    }
    // Add param fields
    addParamInputs.call(this, chart, 'params', fields, seriesType, rhsColWrapper);
}
/**
 * Create HTML list of all indicators (ADD mode) or added indicators
 * (EDIT mode).
 *
 * @internal
 *
 * @param {Highcharts.AnnotationChart} chart
 *        The chart object.
 *
 * @param {HTMLDOMElement} [parentDiv]
 *        HTML parent element.
 *
 * @param {string} listType
 *        Type of list depending on the selected bookmark.
 *        Might be 'add' or 'edit'.
 *
 * @param {string|undefined} filter
 *        Applied filter string from the input.
 *        For the first iteration, it's an empty string.
 */
function addIndicatorList(chart, parentDiv, listType, filter) {
    /**
     *
     */
    function selectIndicator(series, indicatorType) {
        const button = rhsColWrapper.parentNode
            .children[1];
        PopupIndicators_addFormFields.call(popup, chart, series, indicatorType, rhsColWrapper);
        if (button) {
            button.style.display = 'block';
        }
        // Add hidden input with series.id
        if (isEdit && series.options) {
            createElement('input', {
                type: 'hidden',
                name: 'highcharts-id-' + indicatorType,
                value: series.options.id
            }, void 0, rhsColWrapper).setAttribute('highcharts-data-series-id', series.options.id);
        }
    }
    const popup = this, lang = popup.lang, lhsCol = parentDiv.querySelectorAll('.highcharts-popup-lhs-col')[0], rhsCol = parentDiv.querySelectorAll('.highcharts-popup-rhs-col')[0], isEdit = listType === 'edit', series = (isEdit ?
        chart.series : // EDIT mode
        chart.options.plotOptions || {} // ADD mode
    );
    if (!chart && series) {
        return;
    }
    let item, filteredSeriesArray = [];
    // Filter and sort the series.
    if (!isEdit && !isArray(series)) {
        // Apply filters only for the 'add' indicator list.
        filteredSeriesArray = filterSeries.call(this, series, filter);
    }
    else if (isArray(series)) {
        filteredSeriesArray = filterSeriesArray.call(this, series);
    }
    // Sort indicators alphabetically.
    stableSort(filteredSeriesArray, (a, b) => {
        const seriesAName = a.indicatorFullName.toLowerCase(), seriesBName = b.indicatorFullName.toLowerCase();
        return (seriesAName < seriesBName) ?
            -1 : (seriesAName > seriesBName) ? 1 : 0;
    });
    // If the list exists remove it from the DOM
    // in order to create a new one with different filters.
    if (lhsCol.children[1]) {
        lhsCol.children[1].remove();
    }
    // Create wrapper for list.
    const indicatorList = createElement('ul', {
        className: 'highcharts-indicator-list'
    }, void 0, lhsCol);
    const rhsColWrapper = rhsCol.querySelectorAll('.highcharts-popup-rhs-col-wrapper')[0];
    filteredSeriesArray.forEach((seriesSet) => {
        const { indicatorFullName, indicatorType, series } = seriesSet;
        item = createElement('li', {
            className: 'highcharts-indicator-list'
        }, void 0, indicatorList);
        const btn = createElement('button', {
            className: 'highcharts-indicator-list-item',
            textContent: indicatorFullName
        }, void 0, item);
        ['click', 'touchstart'].forEach((eventName) => {
            addEvent(btn, eventName, function () {
                selectIndicator(series, indicatorType);
            });
        });
    });
    // Select first item from the list
    if (filteredSeriesArray.length > 0) {
        const { series, indicatorType } = filteredSeriesArray[0];
        selectIndicator(series, indicatorType);
    }
    else if (!isEdit) {
        highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default().setElementHTML(rhsColWrapper.parentNode.children[0], lang.noFilterMatch || '');
        rhsColWrapper.parentNode.children[1]
            .style.display = 'none';
    }
}
/**
 * Recurrent function which lists all fields, from params object and
 * create them as inputs. Each input has unique `data-name` attribute,
 * which keeps chain of fields i.e params.styles.fontSize.
 *
 * @internal
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {string} parentNode
 * Name of parent to create chain of names
 * @param {Highcharts.PopupFieldsDictionary<string>} fields
 * Params which are based for input create
 * @param {string} type
 * Indicator type like: sma, ema, etc.
 * @param {Highcharts.HTMLDOMElement} parentDiv
 * Element where created HTML list is added
 */
function addParamInputs(chart, parentNode, fields, type, parentDiv) {
    if (!chart) {
        return;
    }
    const addInput = this.addInput;
    objectEach(fields, (value, fieldName) => {
        // Create name like params.styles.fontSize
        const parentFullName = parentNode + '.' + fieldName;
        if (defined(value) && // Skip if field is unnecessary, #15362
            parentFullName) {
            if (isObject(value)) {
                // (15733) 'Periods' has an arrayed value. Label must be
                // created here.
                addInput.call(this, parentFullName, type, parentDiv, {});
                addParamInputs.call(this, chart, parentFullName, value, type, parentDiv);
            }
            // If the option is listed in dropdown enum,
            // add the selection box for it.
            if (parentFullName in DropdownProperties) {
                // Add selection boxes.
                const selectBox = addSelection.call(this, type, parentFullName, parentDiv);
                // Add possible dropdown options.
                addSelectionOptions.call(this, chart, parentNode, selectBox, type, fieldName, value);
            }
            else if (
            // Skip volume field which is created by addFormFields.
            parentFullName !== 'params.volumeSeriesID' &&
                !isArray(value) // Skip params declared in array.
            ) {
                addInput.call(this, parentFullName, type, parentDiv, {
                    value: value,
                    type: 'number'
                } // All inputs are text type
                );
            }
        }
    });
}
/**
 * Add searchbox HTML element and its' label.
 *
 * @internal
 *
 * @param {Highcharts.AnnotationChart} chart
 *        The chart object.
 *
 * @param {HTMLDOMElement} parentDiv
 *        HTML parent element.
 */
function addSearchBox(chart, parentDiv) {
    const popup = this, lhsCol = parentDiv.querySelectorAll('.highcharts-popup-lhs-col')[0], options = 'searchIndicators', inputAttributes = {
        value: '',
        type: 'text',
        htmlFor: 'search-indicators',
        labelClassName: 'highcharts-input-search-indicators-label'
    }, clearFilterText = this.lang.clearFilter, inputWrapper = createElement('div', {
        className: 'highcharts-input-wrapper'
    }, void 0, lhsCol);
    const handleInputChange = function (inputText) {
        // Apply some filters.
        addIndicatorList.call(popup, chart, popup.container, 'add', inputText);
    };
    // Add input field with the label and button.
    const input = this.addInput(options, 'input', inputWrapper, inputAttributes), button = createElement('a', {
        textContent: clearFilterText
    }, void 0, inputWrapper);
    input.classList.add('highcharts-input-search-indicators');
    button.classList.add('clear-filter-button');
    // Add input change events.
    addEvent(input, 'input', function () {
        handleInputChange(this.value);
        // Show clear filter button.
        if (this.value.length) {
            button.style.display = 'inline-block';
        }
        else {
            button.style.display = 'none';
        }
    });
    // Add clear filter click event.
    ['click', 'touchstart'].forEach((eventName) => {
        addEvent(button, eventName, function () {
            // Clear the input.
            input.value = '';
            handleInputChange('');
            // Hide clear filter button- no longer necessary.
            button.style.display = 'none';
        });
    });
}
/**
 * Add selection HTML element and its' label.
 *
 * @internal
 *
 * @param {string} indicatorType
 * Type of the indicator i.e. sma, ema...
 *
 * @param {string} [optionName]
 * Name of the option into which selection is being added.
 *
 * @param {HTMLDOMElement} [parentDiv]
 * HTML parent element.
 */
function addSelection(indicatorType, optionName, parentDiv) {
    const optionParamList = optionName.split('.'), labelText = optionParamList[optionParamList.length - 1], selectName = 'highcharts-' + optionName + '-type-' + indicatorType, lang = this.lang;
    // Add a label for the selection box.
    createElement('label', {
        htmlFor: selectName
    }, null, parentDiv).appendChild(PopupIndicators_doc.createTextNode(lang[labelText] || optionName));
    // Create a selection box.
    const selectBox = createElement('select', {
        name: selectName,
        className: 'highcharts-popup-field',
        id: 'highcharts-select-' + optionName
    }, null, parentDiv);
    selectBox.setAttribute('id', 'highcharts-select-' + optionName);
    return selectBox;
}
/**
 * Get and add selection options.
 *
 * @internal
 *
 * @param {Highcharts.AnnotationChart} chart
 *        The chart object.
 *
 * @param {string} [optionName]
 *        Name of the option into which selection is being added.
 *
 * @param {HTMLSelectElement} [selectBox]
 *        HTML select box element to which the options are being added.
 *
 * @param {string|undefined} indicatorType
 *        Type of the indicator i.e. sma, ema...
 *
 * @param {string|undefined} parameterName
 *        Name of the parameter which should be applied.
 *
 * @param {string|undefined} selectedOption
 *        Default value in dropdown.
 */
function addSelectionOptions(chart, optionName, selectBox, indicatorType, parameterName, selectedOption, currentSeries) {
    // Get and apply selection options for the possible series.
    if (optionName === 'series' || optionName === 'volume') {
        // List all series which have id - mandatory for indicator.
        chart.series.forEach((series) => {
            const seriesOptions = series.options, seriesName = seriesOptions.name ||
                seriesOptions.params ?
                series.name :
                seriesOptions.id || '';
            if (seriesOptions.id !== 'highcharts-navigator-series' &&
                seriesOptions.id !== (currentSeries &&
                    currentSeries.options &&
                    currentSeries.options.id)) {
                if (!defined(selectedOption) &&
                    optionName === 'volume' &&
                    series.type === 'column') {
                    selectedOption = seriesOptions.id;
                }
                createElement('option', {
                    value: seriesOptions.id
                }, void 0, selectBox).appendChild(PopupIndicators_doc.createTextNode(seriesName));
            }
        });
    }
    else if (indicatorType && parameterName) {
        // Get and apply options for the possible parameters.
        const dropdownKey = parameterName + '-' + indicatorType, parameterOption = dropdownParameters[dropdownKey];
        parameterOption.forEach((element) => {
            createElement('option', {
                value: element
            }, void 0, selectBox).appendChild(PopupIndicators_doc.createTextNode(element));
        });
    }
    // Add the default dropdown value if defined.
    if (defined(selectedOption)) {
        selectBox.value = selectedOption;
    }
}
/**
 * Filter object of series which are not indicators.
 * If the filter string exists, check against it.
 *
 * @internal
 *
 * @param {Highcharts.FilteredSeries} series
 *        All series are available in the plotOptions.
 *
 * @param {string|undefined} filter
 *        Applied filter string from the input.
 *        For the first iteration, it's an empty string.
 *
 * @return {Array<Highcharts.FilteredSeries>} filteredSeriesArray
 *         Returns array of filtered series based on filter string.
 */
function filterSeries(series, filter) {
    const popup = this, lang = popup.chart && popup.chart.options.lang, indicatorAliases = lang &&
        lang.navigation &&
        lang.navigation.popup &&
        lang.navigation.popup.indicatorAliases, filteredSeriesMap = new Map();
    let filteredSeries;
    objectEach(series, (series, value) => {
        const seriesOptions = series && series.options;
        // Allow only indicators.
        if (series.params || seriesOptions &&
            seriesOptions.params) {
            const { indicatorFullName, indicatorType } = getNameType(series, value);
            if (filter) {
                // Replace invalid characters.
                const validFilter = filter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(validFilter, 'i'), alias = indicatorAliases &&
                    indicatorAliases[indicatorType] &&
                    indicatorAliases[indicatorType].join(' ') || '';
                if (indicatorFullName.match(regex) ||
                    alias.match(regex)) {
                    filteredSeries = {
                        indicatorFullName,
                        indicatorType,
                        series: series
                    };
                    filteredSeriesMap
                        .set(indicatorType.toLowerCase(), filteredSeries);
                }
            }
            else {
                filteredSeries = {
                    indicatorFullName,
                    indicatorType,
                    series: series
                };
                filteredSeriesMap
                    .set(indicatorType.toLowerCase(), filteredSeries);
            }
        }
    });
    return Array.from(filteredSeriesMap.values());
}
/**
 * Filter an array of series and map its names and types.
 *
 * @internal
 *
 * @param {Highcharts.FilteredSeries} series
 *        All series that are available in the plotOptions.
 *
 * @return {Array<Highcharts.FilteredSeries>} filteredSeriesArray
 *         Returns array of filtered series based on filter string.
 */
function filterSeriesArray(series) {
    const filteredSeriesArray = [];
    // Allow only indicators.
    series.forEach((series) => {
        if (series.is('sma')) {
            filteredSeriesArray.push({
                indicatorFullName: series.name,
                indicatorType: series.type,
                series: series
            });
        }
    });
    return filteredSeriesArray;
}
/**
 * Get amount of indicators added to chart.
 *
 * @internal
 * @return {number} - Amount of indicators
 */
function getAmount() {
    let counter = 0;
    this.series.forEach((s) => {
        if (s.params ||
            s.options.params) {
            counter++;
        }
    });
    return counter;
}
/**
 * Extract full name and type of requested indicator.
 *
 * @internal
 *
 * @param {Highcharts.Series} series
 * Series which name is needed(EDITmode - defaultOptions.series,
 * ADDmode - indicator series).
 *
 * @param {string} [indicatorType]
 * Type of the indicator i.e. sma, ema...
 *
 * @return {Highcharts.Dictionary<string>}
 * Full name and series type.
 */
function getNameType(series, indicatorType) {
    const options = series.options;
    // Add mode
    let seriesName = (seriesTypes[indicatorType] &&
        seriesTypes[indicatorType].prototype.nameBase) ||
        indicatorType.toUpperCase(), seriesType = indicatorType;
    // Edit
    if (options && options.type) {
        seriesType = series.options.type;
        seriesName = series.name;
    }
    return {
        indicatorFullName: seriesName,
        indicatorType: seriesType
    };
}
/**
 * Create the selection box for the series,
 * add options and apply the default one.
 *
 * @internal
 *
 * @param {string} indicatorType
 *        Type of the indicator i.e. sma, ema...
 *
 * @param {string} [optionName]
 *        Name of the option into which selection is being added.
 *
 * @param {Highcharts.AnnotationChart} chart
 *        The chart object.
 *
 * @param {HTMLDOMElement} parentDiv
 *        HTML parent element.
 *
 * @param {Highcharts.Series} currentSeries
 *        The current SMA indicator series
 *
 * @param {string|undefined} selectedOption
 *        Default value in dropdown.
 */
function listAllSeries(indicatorType, optionName, chart, parentDiv, currentSeries, selectedOption) {
    const popup = this;
    // Won't work without the chart.
    if (!chart) {
        return;
    }
    // Add selection boxes.
    const selectBox = addSelection.call(popup, indicatorType, optionName, parentDiv);
    // Add possible dropdown options.
    addSelectionOptions.call(popup, chart, optionName, selectBox, void 0, void 0, void 0, currentSeries);
    // Add the default dropdown value if defined.
    if (defined(selectedOption)) {
        selectBox.value = selectedOption;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const PopupIndicators = {
    addForm: PopupIndicators_addForm,
    getAmount
};
/** @internal */
/* harmony default export */ const Popup_PopupIndicators = (PopupIndicators);

;// ./code/es-modules/Extensions/Annotations/Popup/PopupTabs.js
/* *
 *
 *  Popup generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { doc: PopupTabs_doc } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Functions
 *
 * */
/**
 * Create tab content.
 *
 * @internal
 * @return {HTMLDOMElement} - created HTML tab-content element
 */
function addContentItem() {
    const popupDiv = this.container;
    return createElement('div', {
        // #12100
        className: 'highcharts-tab-item-content highcharts-no-mousewheel'
    }, void 0, popupDiv);
}
/**
 * Create tab menu item.
 *
 * @internal
 * @param {string} tabName
 * `add` or `edit`
 * @param {number} [disableTab]
 * Disable tab when 0
 * @return {Highcharts.HTMLDOMElement}
 * Created HTML tab-menu element
 */
function addMenuItem(tabName, disableTab) {
    const popupDiv = this.container, lang = this.lang;
    let className = 'highcharts-tab-item';
    if (disableTab === 0) {
        className += ' highcharts-tab-disabled';
    }
    // Tab 1
    const menuItem = createElement('button', {
        className
    }, void 0, popupDiv);
    menuItem.appendChild(PopupTabs_doc.createTextNode(lang[tabName + 'Button'] || tabName));
    menuItem.setAttribute('highcharts-data-tab-type', tabName);
    return menuItem;
}
/**
 * Set all tabs as invisible.
 * @internal
 */
function deselectAll() {
    const popupDiv = this.container, tabs = popupDiv
        .querySelectorAll('.highcharts-tab-item'), tabsContent = popupDiv
        .querySelectorAll('.highcharts-tab-item-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('highcharts-tab-item-active');
        tabsContent[i].classList.remove('highcharts-tab-item-show');
    }
}
/**
 * Init tabs. Create tab menu items, tabs containers.
 *
 * @internal
 * @param {Highcharts.Chart} chart
 * Reference to current chart
 */
function init(chart) {
    if (!chart) {
        return;
    }
    const indicatorsCount = this.indicators.getAmount.call(chart);
    // Create menu items
    const firstTab = addMenuItem.call(this, 'add'); // Run by default
    addMenuItem.call(this, 'edit', indicatorsCount);
    // Create tabs containers
    addContentItem.call(this);
    addContentItem.call(this);
    switchTabs.call(this, indicatorsCount);
    // Activate first tab
    selectTab.call(this, firstTab, 0);
}
/**
 * Set tab as visible.
 *
 * @internal
 * @param {globals.Element} tab The current tab
 * @param {number} index Index of the tab in the menu
 */
function selectTab(tab, index) {
    const allTabs = this.container
        .querySelectorAll('.highcharts-tab-item-content');
    tab.className += ' highcharts-tab-item-active';
    allTabs[index].className += ' highcharts-tab-item-show';
}
/**
 * Add click event to each tab.
 *
 * @internal
 * @param {number} disableTab
 * Disable tab when 0
 */
function switchTabs(disableTab) {
    const popup = this, popupDiv = this.container, tabs = popupDiv.querySelectorAll('.highcharts-tab-item');
    tabs.forEach((tab, i) => {
        if (disableTab === 0 &&
            tab.getAttribute('highcharts-data-tab-type') === 'edit') {
            return;
        }
        ['click', 'touchstart'].forEach((eventName) => {
            addEvent(tab, eventName, function () {
                // Reset class on other elements
                deselectAll.call(popup);
                selectTab.call(popup, this, i);
            });
        });
    });
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const PopupTabs = {
    init
};
/** @internal */
/* harmony default export */ const Popup_PopupTabs = (PopupTabs);

;// ./code/es-modules/Extensions/Annotations/Popup/Popup.js
/* *
 *
 *  Popup generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */




const { doc: Popup_doc } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { getOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());




/* *
 *
 *  Functions
 *
 * */
/**
 * Get values from all inputs and selections then create JSON.
 *
 * @internal
 *
 * @param {Highcharts.HTMLDOMElement} parentDiv
 * The container where inputs and selections are created.
 *
 * @param {string} type
 * Type of the popup bookmark (add|edit|remove).
 */
function getFields(parentDiv, type) {
    const inputList = Array.prototype.slice.call(parentDiv.querySelectorAll('input')), selectList = Array.prototype.slice.call(parentDiv.querySelectorAll('select')), optionSeries = '#highcharts-select-series > option:checked', optionVolume = '#highcharts-select-volume > option:checked', linkedTo = parentDiv.querySelectorAll(optionSeries)[0], volumeTo = parentDiv.querySelectorAll(optionVolume)[0];
    const fieldsOutput = {
        actionType: type,
        linkedTo: linkedTo && linkedTo.getAttribute('value') || '',
        fields: {}
    };
    inputList.forEach((input) => {
        const param = input.getAttribute('highcharts-data-name'), seriesId = input.getAttribute('highcharts-data-series-id');
        // Params
        if (seriesId) {
            fieldsOutput.seriesId = input.value;
        }
        else if (param) {
            const wrapper = input.closest('.highcharts-popup-color-wrapper'), opacityInput = wrapper?.querySelector('.highcharts-popup-opacity-percentage'), opacity = opacityInput ?
                Number(opacityInput.value) / 100 : 1;
            if (opacityInput) {
                const rgba = highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default().parse(input.value).rgba;
                fieldsOutput.fields[param] = !Number.isNaN(rgba[0]) ?
                    `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${opacity})` :
                    input.value;
            }
            else {
                fieldsOutput.fields[param] = input.value;
            }
        }
        else {
            // Type like sma / ema
            fieldsOutput.type = input.value;
        }
    });
    selectList.forEach((select) => {
        const id = select.id;
        // Get inputs only for the parameters, not for series and volume.
        if (id !== 'highcharts-select-series' &&
            id !== 'highcharts-select-volume') {
            const parameter = id.split('highcharts-select-')[1];
            fieldsOutput.fields[parameter] = select.value;
        }
    });
    if (volumeTo) {
        fieldsOutput.fields['params.volumeSeriesID'] = volumeTo
            .getAttribute('value') || '';
    }
    return fieldsOutput;
}
/**
 * Resolve CSS 'var()', 'color-mix()' and 'rgba()' values to hex and alpha.
 * @internal
 */
function resolveColorValue(value, contextElement) {
    const toHex = (n) => ('0' + Math.round(n).toString(16)).slice(-2).toUpperCase();
    const rgbaToHex = (value) => {
        const [r, g, b, a] = highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default().parse(value).rgba;
        return { value: '#' + toHex(r) + toHex(g) + toHex(b), alpha: a };
    };
    // If 'rgb()' or 'rgba()', use built-in parser.
    if (value.startsWith('rgb') || value.startsWith('rgba')) {
        return rgbaToHex(value);
    }
    // If 'color()' or 'var()', use a dummy element and getComputedStyle.
    if (value.startsWith('color') || value.startsWith('var')) {
        // Create a dummy span element and get the computed style from it.
        const dummy = Popup_doc.createElement('span');
        dummy.style.setProperty('color', value);
        contextElement.appendChild(dummy);
        const computed = window.getComputedStyle(dummy).color;
        contextElement.removeChild(dummy);
        // Parse color(srgb r g b / a) directly to hex and alpha.
        if (computed.startsWith('color')) {
            const srgbMatch = computed.match(new RegExp('color\\s*\\(\\s*srgb\\s+([\\d.]+)\\s+([\\d.]+)\\s+' +
                '([\\d.]+)\\s+(?:\\s*\\/\\s*([\\d.]+))?\\s*\\)'));
            if (srgbMatch) {
                const r = Math.round(parseFloat(srgbMatch[1]) * 255), g = Math.round(parseFloat(srgbMatch[2]) * 255), b = Math.round(parseFloat(srgbMatch[3]) * 255), alpha = srgbMatch[4] ? parseFloat(srgbMatch[4]) : 1;
                return { value: '#' + toHex(r) + toHex(g) + toHex(b), alpha };
            }
        }
        // If 'rgb()' or 'rgba()', use built-in parser.
        if (computed.startsWith('rgb') || computed.startsWith('rgba')) {
            return rgbaToHex(computed);
        }
    }
    // Don't parse hex colors and other non-color values like contrast, none.
    return { value, alpha: 1 };
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
class Popup extends Shared_BaseForm {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(parentDiv, iconsURL, chart) {
        super(parentDiv, iconsURL);
        this.chart = chart;
        this.lang = (getOptions().lang.navigation || {}).popup || {};
        addEvent(this.container, 'mousedown', () => {
            const activeAnnotation = chart &&
                chart.navigationBindings &&
                chart.navigationBindings.activeAnnotation;
            if (activeAnnotation) {
                activeAnnotation.cancelClick = true;
                const unbind = addEvent(Popup_doc, 'click', () => {
                    setTimeout(() => {
                        activeAnnotation.cancelClick = false;
                    }, 0);
                    unbind();
                });
            }
        });
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create input with label.
     *
     * @param {string} option
     *        Chain of fields i.e params.styles.fontSize separated by the dot.
     *
     * @param {string} indicatorType
     *        Type of the indicator i.e. sma, ema...
     *
     * @param {HTMLDOMElement} parentDiv
     *        HTML parent element.
     *
     * @param {Highcharts.InputAttributes} inputAttributes
     *        Attributes of the input.
     *
     * @return {HTMLInputElement}
     *         Return created input element.
     */
    addInput(option, indicatorType, parentDiv, inputAttributes) {
        const optionParamList = option.split('.'), optionName = optionParamList[optionParamList.length - 1], lang = this.lang, inputName = 'highcharts-' + indicatorType + '-' + pick(inputAttributes.htmlFor, optionName);
        if (!optionName.match(/^\d+$/)) {
            // Add label
            createElement('label', {
                htmlFor: inputName,
                className: inputAttributes.labelClassName
            }, void 0, parentDiv).appendChild(Popup_doc.createTextNode(lang[optionName] || optionName));
        }
        if (inputAttributes.type === 'color' && this.chart?.container) {
            return this.createColorInput(option, inputName, inputAttributes, parentDiv, this.chart.container);
        }
        // Add input
        const input = createElement('input', {
            name: inputName,
            value: inputAttributes.value,
            type: inputAttributes.type,
            className: 'highcharts-popup-field'
        }, void 0, parentDiv);
        input.setAttribute('highcharts-data-name', option);
        return input;
    }
    /**
     * Create color input group with color picker, text field and opacity
     * controls.
     */
    createColorInput(option, inputName, inputAttributes, parentDiv, container) {
        const { value, alpha } = resolveColorValue(inputAttributes.value || '', container);
        const parsedOpacity = highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default().parse(inputAttributes.value || '').rgba[3], opacity = isNaN(parsedOpacity) ? alpha : parsedOpacity;
        const wrapper = createElement('div', { className: 'highcharts-popup-color-wrapper' }, void 0, parentDiv);
        const colorInput = createElement('input', {
            type: 'color',
            value,
            className: ('highcharts-popup-field highcharts-popup-field-color')
        }, void 0, wrapper);
        const textInput = createElement('input', {
            name: inputName,
            id: inputName,
            value,
            type: 'text',
            className: ('highcharts-popup-field highcharts-popup-field-text')
        }, void 0, wrapper);
        textInput.setAttribute('highcharts-data-name', option);
        const separator = createElement('span', { className: 'highcharts-popup-color-separator' }, void 0, wrapper);
        const opacityPercentInput = createElement('input', {
            type: 'number',
            value: String(Math.round(opacity * 100)),
            className: ('highcharts-popup-field highcharts-popup-opacity-percentage'),
            min: '0',
            max: '100',
            step: '1'
        }, void 0, wrapper);
        const opacityPercentSuffix = createElement('span', { className: 'highcharts-popup-opacity-percent-suffix' }, void 0, wrapper);
        opacityPercentSuffix.appendChild(Popup_doc.createTextNode(' %'));
        const opacitySlider = createElement('input', {
            type: 'range',
            value: String(Math.round(opacity * 100)),
            className: 'highcharts-popup-opacity-slider',
            min: '0',
            max: '100',
            step: '1'
        }, void 0, parentDiv);
        opacitySlider.style.setProperty('--highcharts-popup-opacity-track-color', value);
        opacitySlider.style.setProperty('display', 'none');
        const setOpacityGroupVisibility = () => {
            const isHex = /^#[0-9A-Fa-f]{6}$/.test(textInput.value);
            separator.style.display = isHex ? '' : 'none';
            opacityPercentInput.style.display = isHex ? '' : 'none';
            opacityPercentSuffix.style.display = isHex ? '' : 'none';
        };
        setOpacityGroupVisibility();
        const syncOpacityInputs = (e) => {
            const target = e.target, val = clamp(Number(target.value), 0, 100);
            opacitySlider.value = String(val);
            opacityPercentInput.value = String(Math.round(val));
        };
        const syncColorInputs = (e) => {
            if (e.target === colorInput) {
                textInput.value = colorInput.value.toUpperCase();
            }
            else {
                colorInput.value = textInput.value;
            }
            opacitySlider.style.setProperty('--highcharts-popup-opacity-track-color', colorInput.value);
            setOpacityGroupVisibility();
        };
        addEvent(parentDiv, 'mousedown', (e) => {
            if (e.target !== opacityPercentInput &&
                e.target !== opacitySlider) {
                opacitySlider.style.display = 'none';
            }
        });
        addEvent(opacityPercentInput, 'focus', () => {
            opacitySlider.style.display = '';
        });
        addEvent(opacityPercentInput, 'input', syncOpacityInputs);
        addEvent(opacitySlider, 'input', syncOpacityInputs);
        addEvent(colorInput, 'input', syncColorInputs);
        addEvent(textInput, 'input', syncColorInputs);
        return wrapper;
    }
    closeButtonEvents() {
        if (this.chart) {
            const navigationBindings = this.chart.navigationBindings;
            fireEvent(navigationBindings, 'closePopup');
            if (navigationBindings &&
                navigationBindings.selectedButtonElement) {
                fireEvent(navigationBindings, 'deselectButton', { button: navigationBindings.selectedButtonElement });
            }
        }
        else {
            super.closeButtonEvents();
        }
    }
    /**
     * Create button.
     *
     * @param {Highcharts.HTMLDOMElement} parentDiv
     * Container where elements should be added
     * @param {string} label
     * Text placed as button label
     * @param {string} type
     * add | edit | remove
     * @param {Highcharts.HTMLDOMElement} fieldsDiv
     * Container where inputs are generated
     * @param {Function} callback
     * On click callback
     * @return {Highcharts.HTMLDOMElement}
     * HTML button
     */
    addButton(parentDiv, label, type, fieldsDiv, callback) {
        const button = createElement('button', void 0, void 0, parentDiv);
        button.appendChild(Popup_doc.createTextNode(label));
        if (callback) {
            ['click', 'touchstart'].forEach((eventName) => {
                addEvent(button, eventName, () => {
                    this.closePopup();
                    return callback(getFields(fieldsDiv, type));
                });
            });
        }
        return button;
    }
    /**
     * Create content and show popup.
     *
     * @param {string} type
     *        Type of popup i.e indicators
     * @param {Highcharts.Chart} chart
     *        Chart instance
     * @param {Highcharts.AnnotationsOptions} options
     *        Annotation options
     * @param {Function} callback
     *        On click callback
     */
    showForm(type, chart, options, callback) {
        if (!chart) {
            return;
        }
        // Show blank popup
        this.showPopup();
        // Indicator form
        if (type === 'indicators') {
            this.indicators.addForm.call(this, chart, options, callback);
        }
        // Annotation small toolbar
        if (type === 'annotation-toolbar') {
            this.annotations.addToolbar.call(this, chart, options, callback);
        }
        // Annotation edit form
        if (type === 'annotation-edit') {
            this.annotations.addForm.call(this, chart, options, callback);
        }
        // Flags form - add / edit
        if (type === 'flag') {
            this.annotations.addForm.call(this, chart, options, callback, true);
        }
        this.type = type;
        // Explicit height is needed to make inner elements scrollable
        this.container.style.height = this.container.offsetHeight + 'px';
    }
}
extend(Popup.prototype, {
    annotations: Popup_PopupAnnotations,
    indicators: Popup_PopupIndicators,
    tabs: Popup_PopupTabs
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Popup_Popup = (Popup);

;// ./code/es-modules/Extensions/Annotations/Popup/PopupComposition.js
/* *
 *
 *  Popup generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(NavigationBindingsClass, PointerClass) {
    if (pushUnique(composed, 'Popup')) {
        addEvent(NavigationBindingsClass, 'closePopup', onNavigationBindingsClosePopup);
        addEvent(NavigationBindingsClass, 'showPopup', onNavigationBindingsShowPopup);
        wrap(PointerClass.prototype, 'onContainerMouseDown', wrapPointerOnContainerMouserDown);
    }
}
/** @internal */
function onNavigationBindingsClosePopup() {
    if (this.popup) {
        this.popup.closePopup();
    }
}
/** @internal */
function onNavigationBindingsShowPopup(config) {
    if (!this.popup) {
        // Add popup to main container
        this.popup = new Popup_Popup(this.chart.container, (this.chart.options.navigation.iconsURL ||
            (this.chart.options.stockTools &&
                this.chart.options.stockTools.gui.iconsURL) ||
            'https://code.highcharts.com/12.6.0/gfx/stock-icons/'), this.chart);
    }
    this.popup.showForm(config.formType, this.chart, config.options, config.onSubmit);
}
/**
 * `onContainerMouseDown` blocks internal popup events, due to e.preventDefault.
 * Related issue #4606
 * @internal
 */
function wrapPointerOnContainerMouserDown(proceed, e) {
    // Elements is not in popup
    if (!this.inClass(e.target, 'highcharts-popup')) {
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const PopupComposition = {
    compose
};
/** @internal */
/* harmony default export */ const Popup_PopupComposition = (PopupComposition);

;// ./code/es-modules/Extensions/Annotations/Annotation.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { getDeferredAnimation } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());











const { defaultOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());




/* *
 *
 *  Functions
 *
 * */
/**
 * Hide or show annotation attached to points.
 * @internal
 */
function adjustVisibility(item) {
    const label = item.graphic, hasVisiblePoints = item.points.some((point) => (point.series.visible !== false &&
        point.visible !== false));
    if (label) {
        if (!hasVisiblePoints) {
            label.hide();
        }
        else if (label.visibility === 'hidden') {
            label.show();
        }
    }
}
/** @internal */
function getLabelsAndShapesOptions(baseOptions, newOptions) {
    const mergedOptions = {};
    ['labels', 'shapes'].forEach((name) => {
        const someBaseOptions = baseOptions[name], newOptionsValue = newOptions[name];
        if (someBaseOptions) {
            if (newOptionsValue) {
                mergedOptions[name] = splat(newOptionsValue).map((basicOptions, i) => merge(someBaseOptions[i], basicOptions));
            }
            else {
                mergedOptions[name] = baseOptions[name];
            }
        }
    });
    return mergedOptions;
}
/* *
 *
 *  Class
 *
 * */
/**
 * An annotation class which serves as a container for items like labels or
 * shapes. Created items are positioned on the chart either by linking them to
 * existing points or created mock points.
 *
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.Annotation
 *
 * @param {Highcharts.Chart} chart
 *        A chart instance
 * @param {Highcharts.AnnotationsOptions} userOptions
 *        The annotation options
 */
class Annotation extends Annotations_EventEmitter {
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    static compose(ChartClass, NavigationBindingsClass, PointerClass, SVGRendererClass) {
        Annotations_AnnotationChart.compose(Annotation, ChartClass, PointerClass);
        Controllables_ControllableLabel.compose(SVGRendererClass);
        Controllables_ControllablePath.compose(ChartClass, SVGRendererClass);
        NavigationBindingsClass.compose(Annotation, ChartClass);
        Popup_PopupComposition.compose(NavigationBindingsClass, PointerClass);
    }
    /* *
     *
     *  Constructors
     *
     * */
    constructor(chart, userOptions) {
        super();
        /** @internal */
        this.coll = 'annotations';
        /**
         * The chart that the annotation belongs to.
         *
         * @name Highcharts.Annotation#chart
         * @type {Highcharts.Chart}
         */
        this.chart = chart;
        /**
         * The array of points which defines the annotation.
         *
         * @name Highcharts.Annotation#points
         * @type {Array<Highcharts.Point>}
         */
        this.points = [];
        /**
         * The array of control points.
         *
         * @internal
         * @name Highcharts.Annotation#controlPoints
         * @type {Array<Annotation.ControlPoint>}
         */
        this.controlPoints = [];
        this.coll = 'annotations';
        this.index = -1;
        /**
         * The array of labels which belong to the annotation.
         *
         * @internal
         * @name Highcharts.Annotation#labels
         * @type {Array<Highcharts.AnnotationLabelType>}
         */
        this.labels = [];
        /**
         * The array of shapes which belong to the annotation.
         *
         * @internal
         * @name Highcharts.Annotation#shapes
         * @type {Array<Highcharts.AnnotationShapeType>}
         */
        this.shapes = [];
        /**
         * The options for the annotations.
         *
         * @name Highcharts.Annotation#options
         * @type {Highcharts.AnnotationsOptions}
         */
        this.setOptions(userOptions);
        /**
         * The user options for the annotations.
         *
         * @name Highcharts.Annotation#userOptions
         * @type {Highcharts.AnnotationsOptions}
         */
        this.userOptions = userOptions;
        // Handle labels and shapes - those are arrays
        // Merging does not work with arrays (stores reference)
        const labelsAndShapes = getLabelsAndShapesOptions(this.options, userOptions);
        this.options.labels = labelsAndShapes.labels;
        this.options.shapes = labelsAndShapes.shapes;
        /**
         * The callback that reports to the overlapping labels logic which
         * labels it should account for.
         *
         * @internal
         * @name Highcharts.Annotation#labelCollector
         * @type {Function}
         */
        /**
         * The group svg element.
         *
         * @name Highcharts.Annotation#group
         * @type {Highcharts.SVGElement}
         */
        /**
         * The group svg element of the annotation's shapes.
         *
         * @name Highcharts.Annotation#shapesGroup
         * @type {Highcharts.SVGElement}
         */
        /**
         * The group svg element of the annotation's labels.
         *
         * @name Highcharts.Annotation#labelsGroup
         * @type {Highcharts.SVGElement}
         */
        this.init(chart, this.options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    addClipPaths() {
        this.setClipAxes();
        if (this.clipXAxis &&
            this.clipYAxis &&
            this.options.crop // #15399
        ) {
            this.clipRect = this.chart.renderer.clipRect(this.getClipBox());
        }
    }
    /** @internal */
    addLabels() {
        const labelsOptions = (this.options.labels || []);
        labelsOptions.forEach((labelOptions, i) => {
            const label = this.initLabel(labelOptions, i);
            merge(true, labelsOptions[i], label.options);
        });
    }
    /** @internal */
    addShapes() {
        const shapes = this.options.shapes || [];
        shapes.forEach((shapeOptions, i) => {
            const shape = this.initShape(shapeOptions, i);
            merge(true, shapes[i], shape.options);
        });
    }
    /**
     * Destroy the annotation. This function does not touch the chart
     * that the annotation belongs to (all annotations are kept in
     * the chart.annotations array) - it is recommended to use
     * {@link Highcharts.Chart#removeAnnotation} instead.
     *
     * @internal
     */
    destroy() {
        const chart = this.chart, destroyItem = function (item) {
            item.destroy();
        };
        this.labels.forEach(destroyItem);
        this.shapes.forEach(destroyItem);
        this.clipXAxis = null;
        this.clipYAxis = null;
        erase(chart.labelCollectors, this.labelCollector);
        super.destroy();
        this.destroyControlTarget();
        destroyObjectProperties(this, chart);
    }
    /**
     * Destroy a single item.
     * @internal
     */
    destroyItem(item) {
        // Erase from shapes or labels array
        erase(this[item.itemType + 's'], item);
        item.destroy();
    }
    /** @internal */
    getClipBox() {
        if (this.clipXAxis && this.clipYAxis) {
            return {
                x: this.clipXAxis.left,
                y: this.clipYAxis.top,
                width: this.clipXAxis.width,
                height: this.clipYAxis.height
            };
        }
    }
    /**
     * Initialize the annotation properties.
     * @internal
     */
    initProperties(chart, userOptions) {
        this.setOptions(userOptions);
        const labelsAndShapes = getLabelsAndShapesOptions(this.options, userOptions);
        this.options.labels = labelsAndShapes.labels;
        this.options.shapes = labelsAndShapes.shapes;
        this.chart = chart;
        this.points = [];
        this.controlPoints = [];
        this.coll = 'annotations';
        this.userOptions = userOptions;
        this.labels = [];
        this.shapes = [];
    }
    /**
     * Initialize the annotation.
     * @internal
     */
    init(_annotationOrChart, _userOptions, index = this.index) {
        const chart = this.chart, animOptions = this.options.animation;
        this.index = index;
        this.linkPoints();
        this.addControlPoints();
        this.addShapes();
        this.addLabels();
        this.setLabelCollector();
        this.animationConfig = getDeferredAnimation(chart, animOptions);
    }
    /**
     * Initialization of a single label.
     * @internal
     */
    initLabel(labelOptions, index) {
        this.options.labelOptions?.align;
        const options = merge(this.options.labelOptions, {
            controlPointOptions: this.options.controlPointOptions
        }, labelOptions), label = new Controllables_ControllableLabel(this, options, index);
        label.itemType = 'label';
        this.labels.push(label);
        return label;
    }
    /**
     * Initialization of a single shape.
     *
     * @internal
     * @param {Object} shapeOptions
     * a config object for a single shape
     * @param {number} index
     * annotation may have many shapes, this is the shape's index saved in
     * shapes.index.
     */
    initShape(shapeOptions, index) {
        const options = merge(this.options.shapeOptions, {
            controlPointOptions: this.options.controlPointOptions
        }, shapeOptions), shape = new Annotation.shapesMap[options.type || 'rect'](this, options, index);
        shape.itemType = 'shape';
        this.shapes.push(shape);
        return shape;
    }
    /** @internal */
    redraw(animation) {
        this.linkPoints();
        if (!this.graphic) {
            this.render();
        }
        if (this.clipRect) {
            this.clipRect.animate(this.getClipBox());
        }
        this.redrawItems(this.shapes, animation);
        this.redrawItems(this.labels, animation);
        this.redrawControlPoints(animation);
    }
    /**
     * Redraw a single item.
     * @internal
     */
    redrawItem(item, animation) {
        item.linkPoints();
        if (!item.shouldBeDrawn()) {
            this.destroyItem(item);
        }
        else {
            if (!item.graphic) {
                this.renderItem(item);
            }
            item.redraw(pick(animation, true) && item.graphic.placed);
            if (item.points.length) {
                adjustVisibility(item);
            }
        }
    }
    /** @internal */
    redrawItems(items, animation) {
        let i = items.length;
        // Needs a backward loop. Labels/shapes array might be modified due to
        // destruction of the item
        while (i--) {
            this.redrawItem(items[i], animation);
        }
    }
    /**
     * See {@link Highcharts.Chart#removeAnnotation}.
     * @internal
     */
    remove() {
        // Let chart.update() remove annotations on demand
        return this.chart.removeAnnotation(this);
    }
    /** @internal */
    render() {
        const renderer = this.chart.renderer;
        this.graphic = renderer
            .g('annotation')
            .addClass(this.options.className || '')
            .attr({
            opacity: 0,
            zIndex: this.options.zIndex,
            visibility: this.options.visible ?
                'inherit' :
                'hidden'
        })
            .add();
        this.shapesGroup = renderer
            .g('annotation-shapes')
            .add(this.graphic);
        if (this.options.crop) { // #15399
            this.shapesGroup.clip(this.chart.plotBoxClip);
        }
        this.labelsGroup = renderer
            .g('annotation-labels')
            .attr({
            // `hideOverlappingLabels` requires translation
            translateX: 0,
            translateY: 0
        })
            .add(this.graphic);
        this.addClipPaths();
        if (this.clipRect) {
            this.graphic.clip(this.clipRect);
        }
        // Render shapes and labels before adding events (#13070).
        this.renderItems(this.shapes);
        this.renderItems(this.labels);
        this.addEvents();
        this.renderControlPoints();
    }
    /** @internal */
    renderItem(item) {
        item.render(item.itemType === 'label' ?
            this.labelsGroup :
            this.shapesGroup);
    }
    /** @internal */
    renderItems(items) {
        let i = items.length;
        while (i--) {
            this.renderItem(items[i]);
        }
    }
    /** @internal */
    setClipAxes() {
        const xAxes = this.chart.xAxis, yAxes = this.chart.yAxis, linkedAxes = [
            ...(this.options.labels ?? []),
            ...(this.options.shapes ?? [])
        ].reduce((axes, labelOrShape) => {
            const point = labelOrShape &&
                (labelOrShape.point ||
                    (('points' in labelOrShape) &&
                        labelOrShape.points?.[0]));
            return [
                xAxes[point && point.xAxis] || axes[0],
                yAxes[point && point.yAxis] || axes[1]
            ];
        }, []);
        this.clipXAxis = linkedAxes[0];
        this.clipYAxis = linkedAxes[1];
    }
    /** @internal */
    setControlPointsVisibility(visible) {
        const setItemControlPointsVisibility = function (item) {
            item.setControlPointsVisibility(visible);
        };
        this.controlPoints.forEach((controlPoint) => {
            controlPoint.setVisibility(visible);
        });
        this.shapes.forEach(setItemControlPointsVisibility);
        this.labels.forEach(setItemControlPointsVisibility);
    }
    /** @internal */
    setLabelCollector() {
        const annotation = this;
        annotation.labelCollector = function () {
            return annotation.labels.reduce(function (labels, label) {
                if (!label.options.allowOverlap) {
                    labels.push(label.graphic);
                }
                return labels;
            }, []);
        };
        annotation.chart.labelCollectors.push(annotation.labelCollector);
    }
    /**
     * Set an annotation options.
     *
     * @internal
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        User options for an annotation
     */
    setOptions(userOptions) {
        var _a;
        this.options = merge(
        // Shared for all annotation types
        this.defaultOptions, 
        // The static typeOptions from the class
        (userOptions.type &&
            this.defaultOptions.types?.[userOptions.type]) || {}, userOptions);
        // Safe access for `.typeOptions!`
        (_a = this.options).typeOptions || (_a.typeOptions = {});
    }
    /**
     * Set the annotation's visibility.
     *
     * @internal
     * @param {boolean} [visible]
     * Whether to show or hide an annotation. If the param is omitted, the
     * annotation's visibility is toggled.
     */
    setVisibility(visible) {
        const options = this.options, navigation = this.chart.navigationBindings, visibility = pick(visible, !options.visible);
        this.graphic.attr('visibility', visibility ? 'inherit' : 'hidden');
        if (!visibility) {
            const setItemControlPointsVisibility = function (item) {
                item.setControlPointsVisibility(visibility);
            };
            this.shapes.forEach(setItemControlPointsVisibility);
            this.labels.forEach(setItemControlPointsVisibility);
            if (navigation.activeAnnotation === this &&
                navigation.popup &&
                navigation.popup.type === 'annotation-toolbar') {
                fireEvent(navigation, 'closePopup');
            }
        }
        options.visible = visibility;
    }
    /**
     * Updates an annotation.
     *
     * @function Highcharts.Annotation#update
     *
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        New user options for the annotation.
     * @param {boolean} [redraw]
     *        Whether to redraw the chart's annotations.
     */
    update(userOptions, redraw) {
        const chart = this.chart, labelsAndShapes = getLabelsAndShapesOptions(this.userOptions, userOptions), userOptionsIndex = chart.annotations.indexOf(this), options = merge(true, this.userOptions, userOptions);
        options.labels = labelsAndShapes.labels;
        options.shapes = labelsAndShapes.shapes;
        this.destroy();
        this.initProperties(chart, options);
        this.init(chart, options);
        // Update options in chart options, used in exporting (#9767, #21507):
        chart.options.annotations[userOptionsIndex] = this.options;
        this.isUpdating = true;
        if (pick(redraw, true)) {
            chart.drawAnnotations();
        }
        fireEvent(this, 'afterUpdate');
        this.isUpdating = false;
    }
}
/** @internal */
Annotation.ControlPoint = Annotations_ControlPoint;
/** @internal */
Annotation.MockPoint = Annotations_MockPoint;
/**
 * An object uses for mapping between a shape type and a constructor.
 * To add a new shape type extend this object with type name as a key
 * and a constructor as its value.
 *
 * @internal
 */
Annotation.shapesMap = {
    'rect': Controllables_ControllableRect,
    'circle': Controllables_ControllableCircle,
    'ellipse': Controllables_ControllableEllipse,
    'path': Controllables_ControllablePath,
    'image': Controllables_ControllableImage
};
/** @internal */
Annotation.types = {};
Annotation.prototype.defaultOptions = Annotations_AnnotationDefaults;
defaultOptions.annotations = Annotations_AnnotationDefaults;
/**
 * List of events for `annotation.options.events` that should not be
 * added to `annotation.graphic` but to the `annotation`.
 *
 * @internal
 * @type {Array<string>}
 */
Annotation.prototype.nonDOMEvents = ['add', 'afterUpdate', 'drag', 'remove'];
Annotations_ControlTarget.compose(Annotation);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_Annotation = (Annotation);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Possible directions for draggable annotations. An empty string (`''`)
 * makes the annotation undraggable.
 *
 * @typedef {''|'x'|'xy'|'y'} Highcharts.AnnotationDraggableValue
 * @requires modules/annotations
 */
/**
 * @internal
 * @typedef {
 *          Highcharts.AnnotationControllableCircle|
 *          Highcharts.AnnotationControllableImage|
 *          Highcharts.AnnotationControllablePath|
 *          Highcharts.AnnotationControllableRect
 *     } Highcharts.AnnotationShapeType
 * @requires modules/annotations
 */
/**
 * @internal
 * @typedef {
 *          Highcharts.AnnotationControllableLabel
 *     } Highcharts.AnnotationLabelType
 * @requires modules/annotations
 */
/**
 * A point-like object, a mock point or a point used in series.
 * @internal
 * @typedef {
 *          Highcharts.AnnotationMockPoint|
 *          Highcharts.Point
 *     } Highcharts.AnnotationPointType
 * @requires modules/annotations
 */
/**
 * Annotation point, which can be:
 * - a string: the ID of an existing series point,
 * - an object: mock point options,
 * - a function: returning either mock point options object or a point.
 *
 * @requires modules/annotations
 * @typedef {
 *          string|
 *          Highcharts.AnnotationMockPointOptionsObject|
 *          Highcharts.AnnotationMockPointFunction
 *     } Highcharts.AnnotationMockPointOptions
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Core/Chart/ChartNavigationComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 * */

/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ChartNavigationComposition;
(function (ChartNavigationComposition) {
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
    /** @internal */
    function compose(chart) {
        if (!chart.navigation) {
            chart.navigation = new Additions(chart);
        }
        return chart;
    }
    ChartNavigationComposition.compose = compose;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Initializes `chart.navigation` object which delegates `update()` methods
     * to all other common classes (used in exporting and navigationBindings).
     * @internal
     */
    class Additions {
        /* *
         *
         *  Constructor
         *
         * */
        /** @internal */
        constructor(chart) {
            /** @internal */
            this.updates = [];
            this.chart = chart;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Registers an `update()` method in the `chart.navigation` object.
         *
         * @internal
         * @param {UpdateFunction} updateFn
         * The `update()` method that will be called in `chart.update()`.
         */
        addUpdate(updateFn) {
            this.chart.navigation.updates.push(updateFn);
        }
        /** @internal */
        update(options, redraw) {
            this.updates.forEach((updateFn) => {
                updateFn.call(this.chart, options, redraw);
            });
        }
    }
    ChartNavigationComposition.Additions = Additions;
})(ChartNavigationComposition || (ChartNavigationComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Chart_ChartNavigationComposition = (ChartNavigationComposition);

;// ./code/es-modules/Extensions/Annotations/NavigationBindingsUtilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
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
const annotationsFieldsTypes = {
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
    return coords.filter((coord) => {
        const extremes = coord.axis.getExtremes(), axisMin = extremes.min, axisMax = extremes.max, 
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
    const predefinedType = annotationsFieldsTypes[key];
    let fieldType = typeof value;
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
const NavigationBindingUtilities = {
    annotationsFieldsTypes,
    getAssignedAxis,
    getFieldType
};
/** @internal */
/* harmony default export */ const NavigationBindingsUtilities = (NavigationBindingUtilities);

;// ./code/es-modules/Extensions/Annotations/NavigationBindingsDefaults.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { getAssignedAxis: NavigationBindingsDefaults_getAssignedAxis } = NavigationBindingsUtilities;

/* *
 *
 *  Constants
 *
 * */
/**
 * @optionparent lang
 */
const lang = {
    /**
     * Configure the Popup strings in the chart. Requires the
     * `annotations.js` or `annotations-advanced.src.js` module to be
     * loaded.
     * @since   7.0.0
     * @product highcharts highstock
     */
    navigation: {
        /**
         * Translations for all field names used in popup.
         *
         * @product highcharts highstock
         */
        popup: {
            simpleShapes: 'Simple shapes',
            lines: 'Lines',
            circle: 'Circle',
            ellipse: 'Ellipse',
            rectangle: 'Rectangle',
            label: 'Label',
            shapeOptions: 'Shape options',
            typeOptions: 'Details',
            fill: 'Fill',
            format: 'Text',
            strokeWidth: 'Line width',
            stroke: 'Line color',
            title: 'Title',
            name: 'Name',
            labelOptions: 'Label options',
            labels: 'Labels',
            backgroundColor: 'Background color',
            backgroundColors: 'Background colors',
            borderColor: 'Border color',
            borderRadius: 'Border radius',
            borderWidth: 'Border width',
            style: 'Style',
            padding: 'Padding',
            fontSize: 'Font size',
            color: 'Color',
            height: 'Height',
            shapes: 'Shape options'
        }
    }
};
/**
 * @optionparent navigation
 * @product      highcharts highstock
 */
const navigation = {
    /**
     * A CSS class name where all bindings will be attached to. Multiple
     * charts on the same page should have separate class names to prevent
     * duplicating events.
     *
     * Default value of versions < 7.0.4 `highcharts-bindings-wrapper`
     *
     * @since     7.0.0
     * @type      {string}
     */
    bindingsClassName: 'highcharts-bindings-container',
    /**
     * Bindings definitions for custom HTML buttons. Each binding implements
     * simple event-driven interface:
     *
     * - `className`: classname used to bind event to
     *
     * - `init`: initial event, fired on button click
     *
     * - `start`: fired on first click on a chart
     *
     * - `steps`: array of sequential events fired one after another on each
     *   of users clicks
     *
     * - `end`: last event to be called after last step event
     *
     * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>|*}
     *
     * @sample {highstock} stock/stocktools/stocktools-thresholds
     *               Custom bindings
     * @sample {highcharts} highcharts/annotations/bindings/
     *               Simple binding
     * @sample {highcharts} highcharts/annotations/bindings-custom-annotation/
     *               Custom annotation binding
     *
     * @since        7.0.0
     * @requires     modules/annotations
     * @product      highcharts highstock
     */
    bindings: {
        /**
         * A circle annotation bindings. Includes `start` and one event in
         * `steps` array.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-circle-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        circleAnnotation: {
            /** @ignore-option */
            className: 'highcharts-circle-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.circleAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation(merge({
                    langKey: 'circle',
                    type: 'basicAnnotation',
                    shapes: [{
                            type: 'circle',
                            point: {
                                x: coordsX.value,
                                y: coordsY.value,
                                xAxis: coordsX.axis.index,
                                yAxis: coordsY.axis.index
                            },
                            r: 5
                        }]
                }, navigation.annotationsOptions, navigation.bindings.circleAnnotation
                    .annotationsOptions));
            },
            /** @ignore-option */
            steps: [
                function (e, annotation) {
                    const shapes = annotation.options.shapes, mockPointOpts = ((shapes && shapes[0] && shapes[0].point) ||
                        {});
                    let distance;
                    if (isNumber(mockPointOpts.xAxis) &&
                        isNumber(mockPointOpts.yAxis)) {
                        const inverted = this.chart.inverted, x = this.chart.xAxis[mockPointOpts.xAxis]
                            .toPixels(mockPointOpts.x), y = this.chart.yAxis[mockPointOpts.yAxis]
                            .toPixels(mockPointOpts.y);
                        distance = Math.max(Math.sqrt(Math.pow(inverted ? y - e.chartX : x - e.chartX, 2) +
                            Math.pow(inverted ? x - e.chartY : y - e.chartY, 2)), 5);
                    }
                    annotation.update({
                        shapes: [{
                                r: distance
                            }]
                    });
                }
            ]
        },
        /**
         * An ellipse annotation bindings. Includes `start` and two events in
         * `steps` array. First updates the second point, responsible for a
         * rx width, and second updates the ry width.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-ellipse-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        ellipseAnnotation: {
            className: 'highcharts-ellipse-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.ellipseAnnotation.annotationsOptions
             */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation(merge({
                    langKey: 'ellipse',
                    type: 'basicAnnotation',
                    shapes: [
                        {
                            type: 'ellipse',
                            xAxis: coordsX.axis.index,
                            yAxis: coordsY.axis.index,
                            points: [{
                                    x: coordsX.value,
                                    y: coordsY.value
                                }, {
                                    x: coordsX.value,
                                    y: coordsY.value
                                }],
                            ry: 1
                        }
                    ]
                }, navigation.annotationsOptions, navigation.bindings.ellipseAnnotation
                    .annotationsOptions));
            },
            steps: [
                function (e, annotation) {
                    const target = annotation.shapes[0], position = target.getAbsolutePosition(target.points[1]);
                    target.translatePoint(e.chartX - position.x, e.chartY - position.y, 1);
                    target.redraw(false);
                },
                function (e, annotation) {
                    const target = annotation.shapes[0], position = target.getAbsolutePosition(target.points[0]), position2 = target.getAbsolutePosition(target.points[1]), newR = target.getDistanceFromLine(position, position2, e.chartX, e.chartY), yAxis = target.getYAxis(), newRY = Math.abs(yAxis.toValue(0) - yAxis.toValue(newR));
                    target.setYRadius(newRY);
                    target.redraw(false);
                }
            ]
        },
        /**
         * A rectangle annotation bindings. Includes `start` and one event
         * in `steps` array.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-rectangle-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        rectangleAnnotation: {
            /** @ignore-option */
            className: 'highcharts-rectangle-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.rectangleAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis);
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                const x = coordsX.value, y = coordsY.value, xAxis = coordsX.axis.index, yAxis = coordsY.axis.index, navigation = this.chart.options.navigation;
                return this.chart.addAnnotation(merge({
                    langKey: 'rectangle',
                    type: 'basicAnnotation',
                    shapes: [{
                            type: 'path',
                            points: [
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { command: 'Z' }
                            ]
                        }]
                }, navigation
                    .annotationsOptions, navigation
                    .bindings
                    .rectangleAnnotation
                    .annotationsOptions));
            },
            /** @ignore-option */
            steps: [
                function (e, annotation) {
                    const shapes = annotation.options.shapes, points = ((shapes && shapes[0] && shapes[0].points) ||
                        []), coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis);
                    if (coordsX && coordsY) {
                        const x = coordsX.value, y = coordsY.value;
                        // Top right point
                        points[1].x = x;
                        // Bottom right point (cursor position)
                        points[2].x = x;
                        points[2].y = y;
                        // Bottom left
                        points[3].y = y;
                        annotation.update({
                            shapes: [{
                                    points: points
                                }]
                        });
                    }
                }
            ]
        },
        /**
         * A label annotation bindings. Includes `start` event only.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-label-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        labelAnnotation: {
            /** @ignore-option */
            className: 'highcharts-label-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.labelAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation(merge({
                    langKey: 'label',
                    type: 'basicAnnotation',
                    labelOptions: {
                        format: '{y:.2f}',
                        overflow: 'none',
                        crop: true
                    },
                    labels: [{
                            point: {
                                xAxis: coordsX.axis.index,
                                yAxis: coordsY.axis.index,
                                x: coordsX.value,
                                y: coordsY.value
                            }
                        }]
                }, navigation
                    .annotationsOptions, navigation
                    .bindings
                    .labelAnnotation
                    .annotationsOptions));
            }
        }
    },
    /**
     * Path where Highcharts will look for icons. Change this to use icons
     * from a different server.
     *
     * @type      {string}
     * @default   https://code.highcharts.com/12.6.0/gfx/stock-icons/
     * @since     7.1.3
     * @apioption navigation.iconsURL
     */
    /**
     * A `showPopup` event. Fired when selecting for example an annotation.
     *
     * @type      {Function}
     * @apioption navigation.events.showPopup
     */
    /**
     * A `closePopup` event. Fired when Popup should be hidden, for example
     * when clicking on an annotation again.
     *
     * @type      {Function}
     * @apioption navigation.events.closePopup
     */
    /**
     * Event fired on a button click.
     *
     * @type      {Function}
     * @sample    highcharts/annotations/gui/
     *            Change icon in a dropddown on event
     * @sample    highcharts/annotations/gui-buttons/
     *            Change button class on event
     * @apioption navigation.events.selectButton
     */
    /**
     * Event fired when button state should change, for example after
     * adding an annotation.
     *
     * @type      {Function}
     * @sample    highcharts/annotations/gui/
     *            Change icon in a dropddown on event
     * @sample    highcharts/annotations/gui-buttons/
     *            Change button class on event
     * @apioption navigation.events.deselectButton
     */
    /**
     * Events to communicate between Stock Tools and custom GUI.
     *
     * @since        7.0.0
     * @product      highcharts highstock
     * @optionparent navigation.events
     */
    events: {},
    /**
     * Additional options to be merged into all annotations.
     *
     * @sample stock/stocktools/navigation-annotation-options
     *         Set red color of all line annotations
     *
     * @type      {Highcharts.AnnotationsOptions}
     * @extends   annotations
     * @exclude   crookedLine, elliottWave, fibonacci, infinityLine,
     *            measure, pitchfork, tunnel, verticalLine, basicAnnotation
     * @requires     modules/annotations
     * @apioption navigation.annotationsOptions
     */
    annotationsOptions: {
        animation: {
            defer: 0
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const NavigationBindingDefaults = {
    lang,
    navigation
};
/** @internal */
/* harmony default export */ const NavigationBindingsDefaults = (NavigationBindingDefaults);

;// ./code/es-modules/Extensions/Annotations/NavigationBindings.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { setOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { format: NavigationBindings_format } = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default());

const { composed: NavigationBindings_composed, doc: NavigationBindings_doc, win: NavigationBindings_win } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { getAssignedAxis: NavigationBindings_getAssignedAxis, getFieldType: NavigationBindings_getFieldType } = NavigationBindingsUtilities;

/* *
 *
 *  Functions
 *
 * */
/**
 * IE 9-11 polyfill for Element.closest():
 * @internal
 */
function closestPolyfill(el, s) {
    const ElementProto = NavigationBindings_win.Element.prototype, elementMatches = ElementProto.matches ||
        ElementProto.msMatchesSelector ||
        ElementProto.webkitMatchesSelector;
    let ret = null;
    if (ElementProto.closest) {
        ret = ElementProto.closest.call(el, s);
    }
    else {
        do {
            if (elementMatches.call(el, s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
    }
    return ret;
}
/** @internal */
function onAnnotationRemove() {
    if (this.chart.navigationBindings) {
        this.chart.navigationBindings.deselectAnnotation();
    }
}
/** @internal */
function onChartDestroy() {
    if (this.navigationBindings) {
        this.navigationBindings.destroy();
    }
}
/** @internal */
function onChartLoad() {
    const options = this.options;
    if (options && options.navigation && options.navigation.bindings) {
        this.navigationBindings = new NavigationBindings(this, options.navigation);
        this.navigationBindings.initEvents();
        this.navigationBindings.initUpdate();
    }
}
/** @internal */
function onChartRender() {
    const navigationBindings = this.navigationBindings, disabledClassName = 'highcharts-disabled-btn';
    if (this && navigationBindings) {
        // Check if the buttons should be enabled/disabled based on
        // visible series.
        let buttonsEnabled = false;
        this.series.forEach((series) => {
            if (!series.options.isInternal && series.visible) {
                buttonsEnabled = true;
            }
        });
        if (this.navigationBindings &&
            this.navigationBindings.container &&
            this.navigationBindings.container[0]) {
            const container = this.navigationBindings.container[0];
            objectEach(navigationBindings.boundClassNames, (value, key) => {
                // Get the HTML element corresponding to the className taken
                // from StockToolsBindings.
                const buttonNode = container.querySelectorAll('.' + key);
                if (buttonNode) {
                    for (let i = 0; i < buttonNode.length; i++) {
                        const button = buttonNode[i], cls = button.className;
                        if (value.noDataState === 'normal') {
                            // If button has noDataState: 'normal', and has
                            // disabledClassName, remove this className.
                            if (cls.indexOf(disabledClassName) !== -1) {
                                button.classList.remove(disabledClassName);
                            }
                        }
                        else if (!buttonsEnabled) {
                            if (cls.indexOf(disabledClassName) === -1) {
                                button.className += ' ' + disabledClassName;
                            }
                        }
                        else {
                            // Enable all buttons by deleting the className.
                            if (cls.indexOf(disabledClassName) !== -1) {
                                button.classList.remove(disabledClassName);
                            }
                        }
                    }
                }
            });
        }
    }
}
/** @internal */
function NavigationBindings_onNavigationBindingsClosePopup() {
    this.deselectAnnotation();
}
/** @internal */
function onNavigationBindingsDeselectButton() {
    this.selectedButtonElement = null;
}
/**
 * Show edit-annotation form:
 * @internal
 */
function selectableAnnotation(annotationType) {
    const originalClick = annotationType.prototype.defaultOptions.events &&
        annotationType.prototype.defaultOptions.events.click;
    /**
     * Select and show popup.
     * @internal
     */
    function selectAndShowPopup(eventArguments) {
        const annotation = this, navigation = annotation.chart.navigationBindings, prevAnnotation = navigation.activeAnnotation;
        if (originalClick) {
            originalClick.call(annotation, eventArguments);
        }
        if (prevAnnotation !== annotation) {
            // Select current:
            navigation.deselectAnnotation();
            navigation.activeAnnotation = annotation;
            annotation.setControlPointsVisibility(true);
            fireEvent(navigation, 'showPopup', {
                annotation: annotation,
                formType: 'annotation-toolbar',
                options: navigation.annotationToFields(annotation),
                onSubmit: function (data) {
                    if (data.actionType === 'remove') {
                        navigation.activeAnnotation = false;
                        navigation.chart.removeAnnotation(annotation);
                    }
                    else {
                        const config = {};
                        navigation.fieldsToOptions(data.fields, config);
                        navigation.deselectAnnotation();
                        const typeOptions = config.typeOptions;
                        if (annotation.options.type === 'measure') {
                            // Manually disable crosshairs according to
                            // stroke width of the shape:
                            typeOptions.crosshairY.enabled = (typeOptions.crosshairY
                                .strokeWidth !== 0);
                            typeOptions.crosshairX.enabled = (typeOptions.crosshairX
                                .strokeWidth !== 0);
                        }
                        annotation.update(config);
                    }
                }
            });
        }
        else {
            // Deselect current:
            fireEvent(navigation, 'closePopup');
        }
        // Let bubble event to chart.click:
        eventArguments.activeAnnotation = true;
    }
    // #18276, show popup on touchend, but not on touchmove
    let touchStartX, touchStartY;
    /**
     *
     */
    function saveCoords(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }
    /**
     *
     */
    function checkForTouchmove(e) {
        const hasMoved = touchStartX ? Math.sqrt(Math.pow(touchStartX - e.changedTouches[0].clientX, 2) +
            Math.pow(touchStartY - e.changedTouches[0].clientY, 2)) >= 4 : false;
        if (!hasMoved) {
            selectAndShowPopup.call(this, e);
        }
    }
    merge(true, annotationType.prototype.defaultOptions.events, {
        click: selectAndShowPopup,
        touchstart: saveCoords,
        touchend: checkForTouchmove
    });
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
class NavigationBindings {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(AnnotationClass, ChartClass) {
        if (pushUnique(NavigationBindings_composed, 'NavigationBindings')) {
            addEvent(AnnotationClass, 'remove', onAnnotationRemove);
            // Basic shapes:
            selectableAnnotation(AnnotationClass);
            // Advanced annotations:
            objectEach(AnnotationClass.types, (annotationType) => {
                selectableAnnotation(annotationType);
            });
            addEvent(ChartClass, 'destroy', onChartDestroy);
            addEvent(ChartClass, 'load', onChartLoad);
            addEvent(ChartClass, 'render', onChartRender);
            addEvent(NavigationBindings, 'closePopup', NavigationBindings_onNavigationBindingsClosePopup);
            addEvent(NavigationBindings, 'deselectButton', onNavigationBindingsDeselectButton);
            setOptions(NavigationBindingsDefaults);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, options) {
        this.boundClassNames = void 0;
        this.chart = chart;
        this.options = options;
        this.eventsToUnbind = [];
        this.container =
            this.chart.container.getElementsByClassName(this.options.bindingsClassName || '');
        if (!this.container.length) {
            this.container = NavigationBindings_doc.getElementsByClassName(this.options.bindingsClassName || '');
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    getCoords(e) {
        const coords = this.chart.pointer?.getCoordinates(e);
        return [
            coords && NavigationBindings_getAssignedAxis(coords.xAxis),
            coords && NavigationBindings_getAssignedAxis(coords.yAxis)
        ];
    }
    /**
     * Init all events connected to NavigationBindings.
     *
     * @internal
     * @function Highcharts.NavigationBindings#initEvents
     */
    initEvents() {
        const navigation = this, chart = navigation.chart, bindingsContainer = navigation.container, options = navigation.options;
        // Shorthand object for getting events for buttons:
        navigation.boundClassNames = {};
        objectEach((options.bindings || {}), (value) => {
            navigation.boundClassNames[value.className] = value;
        });
        // Handle multiple containers with the same class names:
        [].forEach.call(bindingsContainer, (subContainer) => {
            navigation.eventsToUnbind.push(addEvent(subContainer, 'click', (event) => {
                const bindings = navigation.getButtonEvents(subContainer, event);
                if (bindings &&
                    (!bindings.button.classList
                        .contains('highcharts-disabled-btn'))) {
                    navigation.bindingsButtonClick(bindings.button, bindings.events, event);
                }
            }));
        });
        objectEach((options.events || {}), (callback, eventName) => {
            if (isFunction(callback)) {
                navigation.eventsToUnbind.push(addEvent(navigation, eventName, callback, { passive: false }));
            }
        });
        navigation.eventsToUnbind.push(addEvent(chart.container, 'click', function (e) {
            if (!chart.cancelClick &&
                chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop, {
                    visiblePlotOnly: true
                })) {
                navigation.bindingsChartClick(this, e);
            }
        }));
        navigation.eventsToUnbind.push(addEvent(chart.container, (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isTouchDevice ? 'touchmove' : 'mousemove', function (e) {
            navigation.bindingsContainerMouseMove(this, e);
        }, (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isTouchDevice ? { passive: false } : void 0));
    }
    /**
     * Common chart.update() delegation, shared between bindings and exporting.
     *
     * @internal
     * @function Highcharts.NavigationBindings#initUpdate
     */
    initUpdate() {
        const navigation = this;
        Chart_ChartNavigationComposition
            .compose(this.chart).navigation
            .addUpdate((options) => {
            navigation.update(options);
        });
    }
    /**
     * Hook for click on a button, method selects/unselects buttons,
     * then calls `bindings.init` callback.
     *
     * @internal
     * @function Highcharts.NavigationBindings#bindingsButtonClick
     *
     * @param {Highcharts.HTMLDOMElement} [button]
     *        Clicked button
     *
     * @param {Object} events
     *        Events passed down from bindings (`init`, `start`, `step`, `end`)
     *
     * @param {Highcharts.PointerEventObject} clickEvent
     *        Browser's click event
     */
    bindingsButtonClick(button, events, clickEvent) {
        const navigation = this, chart = navigation.chart, svgContainer = chart.renderer.boxWrapper;
        let shouldEventBeFired = true;
        if (navigation.selectedButtonElement) {
            if (navigation.selectedButtonElement.classList === button.classList) {
                shouldEventBeFired = false;
            }
            fireEvent(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
            if (navigation.nextEvent) {
                // Remove in-progress annotations adders:
                if (navigation.currentUserDetails &&
                    navigation.currentUserDetails.coll === 'annotations') {
                    chart.removeAnnotation(navigation.currentUserDetails);
                }
                navigation.mouseMoveEvent = navigation.nextEvent = false;
            }
        }
        if (shouldEventBeFired) {
            navigation.selectedButton = events;
            navigation.selectedButtonElement = button;
            fireEvent(navigation, 'selectButton', { button: button });
            // Call "init" event, for example to open modal window
            if (events.init) {
                events.init.call(navigation, button, clickEvent);
            }
            if (events.start || events.steps) {
                chart.renderer.boxWrapper.addClass('highcharts-draw-mode');
            }
        }
        else {
            chart.stockTools && button.classList.remove('highcharts-active');
            svgContainer.removeClass('highcharts-draw-mode');
            navigation.nextEvent = false;
            navigation.mouseMoveEvent = false;
            navigation.selectedButton = null;
        }
    }
    /**
     * Hook for click on a chart, first click on a chart calls `start` event,
     * then on all subsequent clicks iterate over `steps` array.
     * When finished, calls `end` event.
     *
     * @internal
     * @function Highcharts.NavigationBindings#bindingsChartClick
     *
     * @param {Highcharts.Chart} chart
     *        Chart that click was performed on.
     *
     * @param {Highcharts.PointerEventObject} clickEvent
     *        Browser's click event.
     */
    bindingsChartClick(chart, clickEvent) {
        chart = this.chart;
        const navigation = this, activeAnnotation = navigation.activeAnnotation, selectedButton = navigation.selectedButton, svgContainer = chart.renderer.boxWrapper;
        if (activeAnnotation) {
            // Click outside popups, should close them and deselect the
            // annotation
            if (!activeAnnotation.cancelClick && // #15729
                !clickEvent.activeAnnotation &&
                // Element could be removed in the child action, e.g. button
                clickEvent.target.parentNode &&
                // TO DO: Polyfill for IE11?
                !closestPolyfill(clickEvent.target, '.highcharts-popup')) {
                fireEvent(navigation, 'closePopup');
            }
            else if (activeAnnotation.cancelClick) {
                // Reset cancelClick after the other event handlers have run
                setTimeout(() => {
                    activeAnnotation.cancelClick = false;
                }, 0);
            }
        }
        if (!selectedButton || !selectedButton.start) {
            return;
        }
        if (!navigation.nextEvent) {
            // Call init method:
            navigation.currentUserDetails = selectedButton.start.call(navigation, clickEvent);
            // If steps exists (e.g. Annotations), bind them:
            if (navigation.currentUserDetails && selectedButton.steps) {
                navigation.stepIndex = 0;
                navigation.steps = true;
                navigation.mouseMoveEvent = navigation.nextEvent =
                    selectedButton.steps[navigation.stepIndex];
            }
            else {
                fireEvent(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
                svgContainer.removeClass('highcharts-draw-mode');
                navigation.steps = false;
                navigation.selectedButton = null;
                // First click is also the last one:
                if (selectedButton.end) {
                    selectedButton.end.call(navigation, clickEvent, navigation.currentUserDetails);
                }
            }
        }
        else {
            navigation.nextEvent(clickEvent, navigation.currentUserDetails);
            if (navigation.steps) {
                navigation.stepIndex++;
                if (selectedButton.steps[navigation.stepIndex]) {
                    // If we have more steps, bind them one by one:
                    navigation.mouseMoveEvent = navigation.nextEvent = selectedButton.steps[navigation.stepIndex];
                }
                else {
                    fireEvent(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
                    svgContainer.removeClass('highcharts-draw-mode');
                    // That was the last step, call end():
                    if (selectedButton.end) {
                        selectedButton.end.call(navigation, clickEvent, navigation.currentUserDetails);
                    }
                    navigation.nextEvent = false;
                    navigation.mouseMoveEvent = false;
                    navigation.selectedButton = null;
                }
            }
        }
    }
    /**
     * Hook for mouse move on a chart's container. It calls current step.
     *
     * @internal
     */
    bindingsContainerMouseMove(_container, moveEvent) {
        if (this.mouseMoveEvent) {
            this.mouseMoveEvent(moveEvent, this.currentUserDetails);
        }
    }
    /**
     * Translate fields (e.g. `params.period` or `marker.styles.color`) to
     * Highcharts options object (e.g. `{ params: { period } }`).
     *
     * @internal
     * @function Highcharts.NavigationBindings#fieldsToOptions<T>
     *
     * @param {Highcharts.Dictionary<string>} fields
     *        Fields from popup form.
     *
     * @param {T} config
     *        Default config to be modified.
     *
     * @return {T}
     *         Modified config
     */
    fieldsToOptions(fields, config) {
        objectEach(fields, (value, field) => {
            const parsedValue = parseFloat(value), path = field.split('.'), pathLength = path.length - 1;
            // If it's a number (not "format" options), parse it:
            if (isNumber(parsedValue) &&
                !value.match(/px|em/g) &&
                !field.match(/format/g)) {
                value = parsedValue;
            }
            // Remove values like 0
            if (value !== 'undefined') {
                let parent = config;
                path.forEach((name, index) => {
                    if (name !== '__proto__' && name !== 'constructor') {
                        const nextName = pick(path[index + 1], '');
                        if (pathLength === index) {
                            // Last index, put value:
                            parent[name] = value;
                        }
                        else if (!parent[name]) {
                            // Create middle property:
                            parent[name] = nextName.match(/\d/g) ?
                                [] :
                                {};
                            parent = parent[name];
                        }
                        else {
                            // Jump into next property
                            parent = parent[name];
                        }
                    }
                });
            }
        });
        return config;
    }
    /**
     * Shorthand method to deselect an annotation.
     *
     * @function Highcharts.NavigationBindings#deselectAnnotation
     */
    deselectAnnotation() {
        if (this.activeAnnotation) {
            this.activeAnnotation.setControlPointsVisibility(false);
            this.activeAnnotation = false;
        }
    }
    /**
     * Generates API config for popup in the same format as options for
     * Annotation object.
     *
     * @function Highcharts.NavigationBindings#annotationToFields
     *
     * @param {Highcharts.Annotation} annotation
     *        Annotations object
     *
     * @return {Highcharts.Dictionary<string>}
     *         Annotation options to be displayed in popup box
     */
    annotationToFields(annotation) {
        const options = annotation.options, editables = NavigationBindings.annotationsEditable, nestedEditables = editables.nestedOptions, type = pick(options.type, options.shapes?.[0]?.type, options.labels?.[0]?.type, 'label'), nonEditables = NavigationBindings.annotationsNonEditable[options.langKey] || [], visualOptions = {
            langKey: options.langKey,
            type: type
        };
        /**
         * Nested options traversing. Method goes down to the options and copies
         * allowed options (with values) to new object, which is last parameter:
         * "parent".
         *
         * @internal
         *
         * @param {*} option
         *        Atomic type or object/array
         *
         * @param {string} key
         *        Option name, for example "visible" or "x", "y"
         *
         * @param {Object} parentEditables
         *        Editables from NavigationBindings.annotationsEditable
         *
         * @param {Object} parent
         *        Where new options will be assigned
         */
        function traverse(option, key, parentEditables, parent, parentKey) {
            let nextParent;
            if (parentEditables &&
                defined(option) &&
                nonEditables.indexOf(key) === -1 &&
                ((parentEditables.indexOf &&
                    parentEditables.indexOf(key)) >= 0 ||
                    parentEditables[key] || // Nested array
                    parentEditables === true // Simple array
                )) {
                // Roots:
                if (isArray(option)) {
                    parent[key] = [];
                    option.forEach((arrayOption, i) => {
                        if (!isObject(arrayOption)) {
                            // Simple arrays, e.g. [String, Number, Boolean]
                            traverse(arrayOption, 0, nestedEditables[key], parent[key], key);
                        }
                        else {
                            // Advanced arrays, e.g. [Object, Object]
                            parent[key][i] = {};
                            objectEach(arrayOption, (nestedOption, nestedKey) => {
                                traverse(nestedOption, nestedKey, nestedEditables[key], parent[key][i], key);
                            });
                        }
                    });
                }
                else if (isObject(option)) {
                    nextParent = {};
                    if (isArray(parent)) {
                        parent.push(nextParent);
                        nextParent[key] = {};
                        nextParent = nextParent[key];
                    }
                    else {
                        parent[key] = nextParent;
                    }
                    objectEach(option, (nestedOption, nestedKey) => {
                        traverse(nestedOption, nestedKey, key === 0 ?
                            parentEditables :
                            nestedEditables[key], nextParent, key);
                    });
                }
                else {
                    // Leaf:
                    if (key === 'format') {
                        parent[key] = [
                            NavigationBindings_format(option, annotation.labels[0].points[0]).toString(),
                            'text'
                        ];
                    }
                    else if (isArray(parent)) {
                        parent.push([option, NavigationBindings_getFieldType(parentKey, option)]);
                    }
                    else {
                        parent[key] = [option, NavigationBindings_getFieldType(key, option)];
                    }
                }
            }
        }
        objectEach(options, (option, key) => {
            if (key === 'typeOptions' &&
                visualOptions['type'] !== 'basicAnnotation' // #23575
            ) {
                visualOptions[key] = {};
                objectEach(options[key], (typeOption, typeKey) => {
                    traverse(typeOption, typeKey, nestedEditables, visualOptions[key], typeKey);
                });
            }
            else {
                traverse(option, key, editables[type], visualOptions, key);
            }
        });
        return visualOptions;
    }
    /**
     * Get all class names for all parents in the element. Iterates until finds
     * main container.
     *
     * @internal
     * @function Highcharts.NavigationBindings#getClickedClassNames
     *
     * @param {Highcharts.HTMLDOMElement} container
     * Container that event is bound to.
     *
     * @param {global.Event} event
     * Browser's event.
     *
     * @return {Array<Array<string, Highcharts.HTMLDOMElement>>}
     * Array of class names with corresponding elements
     */
    getClickedClassNames(container, event) {
        let element = event.target, classNames = [], elemClassName;
        while (element && element.tagName) {
            elemClassName = attr(element, 'class');
            if (elemClassName) {
                classNames = classNames.concat(elemClassName
                    .split(' ')
                    // eslint-disable-next-line no-loop-func
                    .map((name) => ([name, element])));
            }
            element = element.parentNode;
            if (element === container) {
                return classNames;
            }
        }
        return classNames;
    }
    /**
     * Get events bound to a button. It's a custom event delegation to find all
     * events connected to the element.
     *
     * @internal
     * @function Highcharts.NavigationBindings#getButtonEvents
     *
     * @param {Highcharts.HTMLDOMElement} container
     *        Container that event is bound to.
     *
     * @param {global.Event} event
     *        Browser's event.
     *
     * @return {Object}
     *         Object with events (init, start, steps, and end)
     */
    getButtonEvents(container, event) {
        const navigation = this, classNames = this.getClickedClassNames(container, event);
        let bindings;
        classNames.forEach((className) => {
            if (navigation.boundClassNames[className[0]] && !bindings) {
                bindings = {
                    events: navigation.boundClassNames[className[0]],
                    button: className[1]
                };
            }
        });
        return bindings;
    }
    /**
     * Bindings are just events, so the whole update process is simply
     * removing old events and adding new ones.
     *
     * @internal
     * @function Highcharts.NavigationBindings#update
     */
    update(options) {
        this.options = merge(true, this.options, options);
        this.removeEvents();
        this.initEvents();
    }
    /**
     * Remove all events created in the navigation.
     *
     * @internal
     * @function Highcharts.NavigationBindings#removeEvents
     */
    removeEvents() {
        this.eventsToUnbind.forEach((unbinder) => unbinder());
    }
    /**
     * @internal
     * @function Highcharts.NavigationBindings#destroy
     */
    destroy() {
        this.removeEvents();
    }
}
/* *
 *
 *  Static Properties
 *
 * */
// Define which options from annotations should show up in edit box:
NavigationBindings.annotationsEditable = {
    // `typeOptions` are always available
    // Nested and shared options:
    nestedOptions: {
        labelOptions: ['style', 'format', 'backgroundColor'],
        labels: ['style'],
        label: ['style'],
        style: ['fontSize', 'color'],
        background: ['fill', 'strokeWidth', 'stroke'],
        innerBackground: ['fill', 'strokeWidth', 'stroke'],
        outerBackground: ['fill', 'strokeWidth', 'stroke'],
        shapeOptions: ['fill', 'strokeWidth', 'stroke'],
        shapes: ['fill', 'strokeWidth', 'stroke'],
        line: ['strokeWidth', 'stroke'],
        backgroundColors: [true],
        connector: ['fill', 'strokeWidth', 'stroke'],
        crosshairX: ['strokeWidth', 'stroke'],
        crosshairY: ['strokeWidth', 'stroke']
    },
    // Simple shapes:
    circle: ['shapes'],
    ellipse: ['shapes'],
    verticalLine: [],
    label: ['labelOptions'],
    // Measure
    measure: ['background', 'crosshairY', 'crosshairX'],
    // Others:
    fibonacci: [],
    tunnel: ['background', 'line', 'height'],
    pitchfork: ['innerBackground', 'outerBackground'],
    rect: ['shapes'],
    // Crooked lines, elliots, arrows etc:
    crookedLine: [],
    basicAnnotation: ['shapes', 'labelOptions']
};
// Define non editable fields per annotation, for example Rectangle inherits
// options from Measure, but crosshairs are not available
NavigationBindings.annotationsNonEditable = {
    rectangle: ['crosshairX', 'crosshairY', 'labelOptions'],
    ellipse: ['labelOptions'],
    circle: ['labelOptions']
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Annotations_NavigationBindings = (NavigationBindings);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A config object for navigation bindings in annotations.
 *
 * @interface Highcharts.NavigationBindingsOptionsObject
 */ /**
* ClassName of the element for a binding.
* @name Highcharts.NavigationBindingsOptionsObject#className
* @type {string|undefined}
*/ /**
* Last event to be fired after last step event.
* @name Highcharts.NavigationBindingsOptionsObject#end
* @type {Function|undefined}
*/ /**
* Initial event, fired on a button click.
* @name Highcharts.NavigationBindingsOptionsObject#init
* @type {Function|undefined}
*/ /**
* Event fired on first click on a chart.
* @name Highcharts.NavigationBindingsOptionsObject#start
* @type {Function|undefined}
*/ /**
* Last event to be fired after last step event. Array of step events to be
* called sequentially after each user click.
* @name Highcharts.NavigationBindingsOptionsObject#steps
* @type {Array<Function>|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/annotations.src.js





const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.Annotation = G.Annotation || Annotations_Annotation;
G.NavigationBindings = G.NavigationBindings || Annotations_NavigationBindings;
G.Annotation.compose(G.Chart, G.NavigationBindings, G.Pointer, G.SVGRenderer);
/* harmony default export */ const annotations_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});