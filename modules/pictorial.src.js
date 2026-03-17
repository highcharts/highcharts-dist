// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/pictorial
 * @requires highcharts
 *
 * Pictorial graph series type for Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Honsi, Magdalena Gut
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Series"]["types"]["column"], root["_Highcharts"]["Chart"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Series"], root["_Highcharts"]["StackItem"], root["_Highcharts"]["SVGRenderer"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/pictorial", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Series"],["types"],["column"],amd1["Chart"],amd1["SeriesRegistry"],amd1["Series"],amd1["StackItem"],amd1["SVGRenderer"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/pictorial"] = factory(root["_Highcharts"], root["_Highcharts"]["Series"]["types"]["column"], root["_Highcharts"]["Chart"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Series"], root["_Highcharts"]["StackItem"], root["_Highcharts"]["SVGRenderer"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Series"]["types"]["column"], root["Highcharts"]["Chart"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["Series"], root["Highcharts"]["StackItem"], root["Highcharts"]["SVGRenderer"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__448__, __WEBPACK_EXTERNAL_MODULE__960__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__820__, __WEBPACK_EXTERNAL_MODULE__184__, __WEBPACK_EXTERNAL_MODULE__540__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 184:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__184__;

/***/ }),

/***/ 448:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__448__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 540:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__540__;

/***/ }),

/***/ 820:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__820__;

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
  "default": () => (/* binding */ pictorial_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series","types","column"],"commonjs":["highcharts","Series","types","column"],"commonjs2":["highcharts","Series","types","column"],"root":["Highcharts","Series","types","column"]}
var highcharts_Series_types_column_commonjs_highcharts_Series_types_column_commonjs2_highcharts_Series_types_column_root_Highcharts_Series_types_column_ = __webpack_require__(448);
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

;// ./code/es-modules/Extensions/PatternFill.js
/* *
 *
 *  Module for using patterns or images as point fills.
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi, Øystein Moseng
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { getOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Constants
 *
 * */
const patterns = createPatterns();
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(ChartClass, SeriesClass, SVGRendererClass) {
    const PointClass = SeriesClass.prototype.pointClass, pointProto = PointClass.prototype;
    if (!pointProto.calculatePatternDimensions) {
        addEvent(ChartClass, 'endResize', onChartEndResize);
        addEvent(ChartClass, 'redraw', onChartRedraw);
        extend(pointProto, {
            calculatePatternDimensions: pointCalculatePatternDimensions
        });
        addEvent(PointClass, 'afterInit', onPointAfterInit);
        addEvent(SeriesClass, 'render', onSeriesRender);
        wrap(SeriesClass.prototype, 'getColor', wrapSeriesGetColor);
        // Pattern scale corrections
        addEvent(SeriesClass, 'afterRender', onPatternScaleCorrection);
        addEvent(SeriesClass, 'mapZoomComplete', onPatternScaleCorrection);
        extend(SVGRendererClass.prototype, {
            addPattern: rendererAddPattern
        });
        addEvent(SVGRendererClass, 'complexColor', onRendererComplexColor);
    }
}
/**
 * Add the predefined patterns.
 * @internal
 */
function createPatterns() {
    const patterns = [], colors = getOptions().colors;
    // Start with subtle patterns
    let i = 0;
    for (const pattern of [
        'M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5',
        'M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5',
        'M 2 0 L 2 5 M 4 0 L 4 5',
        'M 0 2 L 5 2 M 0 4 L 5 4',
        'M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5'
    ]) {
        patterns.push({
            path: pattern,
            color: colors[i++],
            width: 5,
            height: 5,
            patternTransform: 'scale(1.4 1.4)'
        });
    }
    // Then add the more drastic ones
    i = 5;
    for (const pattern of [
        'M 0 0 L 5 10 L 10 0',
        'M 3 3 L 8 3 L 8 8 L 3 8 Z',
        'M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0',
        'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
        'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9'
    ]) {
        patterns.push({
            path: pattern,
            color: colors[i++],
            width: 10,
            height: 10
        });
    }
    return patterns;
}
/**
 * Create an anchored pattern instance for a specific point.
 * @private
 */
function createAnchoredPattern(pattern, element) {
    const anchoredPattern = merge({}, pattern);
    // Get point's bounding box for anchoring
    const bbox = element.getBBox ? element.getBBox() : {
        x: 0, y: 0, width: 32, height: 32
    };
    // Position pattern at point's origin so each point has its own
    // pattern instance starting from its top-left corner
    anchoredPattern._x = bbox.x;
    anchoredPattern._y = bbox.y;
    return anchoredPattern;
}
/**
 * Utility function to compute a hash value from an object. Modified Java
 * String.hashCode implementation in JS. Use the preSeed parameter to add an
 * additional seeding step.
 *
 * @internal
 * @function hashFromObject
 *
 * @param {Object} obj
 *        The javascript object to compute the hash from.
 *
 * @param {boolean} [preSeed=false]
 *        Add an optional preSeed stage.
 *
 * @return {string}
 *         The computed hash.
 */
function hashFromObject(obj, preSeed) {
    const str = JSON.stringify(obj), strLen = str.length || 0;
    let hash = 0, i = 0, char, seedStep;
    if (preSeed) {
        seedStep = Math.max(Math.floor(strLen / 500), 1);
        for (let a = 0; a < strLen; a += seedStep) {
            hash += str.charCodeAt(a);
        }
        hash = hash & hash;
    }
    for (; i < strLen; ++i) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16).replace('-', '1');
}
/**
 * When animation is used, we have to recalculate pattern dimensions after
 * resize, as the bounding boxes are not available until then.
 * @internal
 */
function onChartEndResize() {
    if (this.renderer &&
        (this.renderer.defIds || []).filter((id) => (id &&
            id.indexOf &&
            id.indexOf('highcharts-pattern-') === 0)).length) {
        // We have non-default patterns to fix. Find them by looping through
        // all points.
        for (const series of this.series) {
            if (series.visible) {
                for (const point of series.points) {
                    const colorOptions = point.options && point.options.color;
                    if (colorOptions &&
                        colorOptions.pattern) {
                        colorOptions.pattern
                            ._width = 'defer';
                        colorOptions.pattern
                            ._height = 'defer';
                    }
                }
            }
        }
        // Redraw without animation
        this.redraw(false);
    }
}
/**
 * Add a garbage collector to delete old patterns with autogenerated hashes that
 * are no longer being referenced.
 * @internal
 */
function onChartRedraw() {
    const usedIds = {}, renderer = this.renderer, 
    // Get the autocomputed patterns - these are the ones we might delete
    patterns = (renderer.defIds || []).filter((pattern) => (pattern.indexOf &&
        pattern.indexOf('highcharts-pattern-') === 0));
    if (patterns.length) {
        // Look through the DOM for usage of the patterns. This can be points,
        // series, tooltips etc.
        [].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'), (node) => {
            const id = node.getAttribute('fill') ||
                node.getAttribute('color') ||
                node.getAttribute('stroke');
            if (id) {
                const sanitizedId = id
                    .replace(renderer.url, '')
                    .replace('url(#', '')
                    .replace(')', '');
                usedIds[sanitizedId] = true;
            }
        });
        // Loop through the patterns that exist and see if they are used
        for (const id of patterns) {
            if (!usedIds[id]) {
                // Remove id from used id list
                erase(renderer.defIds, id);
                // Remove pattern element
                if (renderer.patternElements[id]) {
                    renderer.patternElements[id].destroy();
                    delete renderer.patternElements[id];
                }
            }
        }
    }
}
/**
 * Merge series color options to points.
 * @internal
 */
function onPointAfterInit() {
    const point = this, colorOptions = (point.color || point.options.color);
    // Only do this if we have defined a specific color on this point. Otherwise
    // we will end up trying to re-add the series color for each point.
    if (colorOptions &&
        (colorOptions.pattern ||
            colorOptions.patternIndex !== void 0)) {
        // Move path definition to object, allows for merge with series path
        // definition
        if (typeof colorOptions.pattern?.path === 'string') {
            colorOptions.pattern.path = {
                d: colorOptions.pattern.path
            };
        }
        // Merge with series options
        point.color = point.options.color = merge(point.series.options.color, colorOptions);
    }
}
/**
 * Add functionality to SVG renderer to handle patterns as complex colors.
 * @internal
 */
function onRendererComplexColor(args) {
    const color = args.args[0], prop = args.args[1], element = args.args[2], chartIndex = (this.chartIndex || 0);
    let pattern = color.pattern, value = "#333333" /* Palette.neutralColor80 */;
    // Handle patternIndex
    if (typeof color.patternIndex !== 'undefined' && patterns) {
        pattern = patterns[color.patternIndex];
    }
    // Skip and call default if there is no pattern
    if (!pattern) {
        return true;
    }
    // We have a pattern.
    if (pattern.image ||
        typeof pattern.path === 'string' ||
        pattern.path && pattern.path.d) {
        // Real pattern. Add it and set the color value to be a reference.
        // Force Hash-based IDs for legend items, as they are drawn before
        // point render, meaning they are drawn before autocalculated image
        // width/heights. We don't want them to highjack the width/height for
        // this ID if it is defined by users.
        let forceHashId = element.parentNode &&
            element.parentNode.getAttribute('class');
        forceHashId = forceHashId &&
            forceHashId.indexOf('highcharts-legend') > -1;
        // If we don't have a width/height yet, handle it. Try faking a point
        // and running the algorithm again.
        if (pattern._width === 'defer' || pattern._height === 'defer') {
            pointCalculatePatternDimensions.call({ graphic: { element: element } }, pattern);
        }
        // If we don't have an explicit ID, compute a hash from the
        // definition and use that as the ID. This ensures that points with
        // the same pattern definition reuse existing pattern elements by
        // default. We combine two hashes, the second with an additional
        // preSeed algorithm, to minimize collision probability.
        if (forceHashId || !pattern.id || pattern.anchorToPoint) {
            // Make a copy so we don't accidentally edit options when setting ID
            pattern = merge({}, pattern);
            // Handle anchored patterns - include the point's
            // position in the pattern before hashing, so each
            // point gets a unique ID.
            if (pattern.anchorToPoint) {
                pattern = createAnchoredPattern(pattern, element);
            }
            pattern.id = 'highcharts-pattern-' + chartIndex + '-' +
                hashFromObject(pattern) + hashFromObject(pattern, true) +
                (pattern.anchorToPoint ? '-anchored' : '');
        }
        // Add it. This function does nothing if an element with this ID
        // already exists.
        this.addPattern(pattern, !this.forExport && pick(pattern.animation, this.globalAnimation, { duration: 100 }));
        value = `url(${this.url}#${pattern.id + (this.forExport ? '-export' : '')})`;
    }
    else {
        // Not a full pattern definition, just add color
        value = pattern.color || value;
    }
    // Set the fill/stroke prop on the element
    element.setAttribute(prop, value);
    // Allow the color to be concatenated into tooltips formatters etc.
    color.toString = function () {
        return value;
    };
    // Skip default handler
    return false;
}
/**
 * Calculate pattern dimensions on points that have their own pattern.
 * @internal
 */
function onSeriesRender() {
    const isResizing = this.chart.isResizing;
    if (this.isDirtyData || isResizing || !this.chart.hasRendered) {
        for (const point of this.points) {
            const colorOptions = point.options && point.options.color;
            if (colorOptions &&
                colorOptions.pattern) {
                // For most points we want to recalculate the dimensions on
                // render, where we have the shape args and bbox. But if we
                // are resizing and don't have the shape args, defer it, since
                // the bounding box is still not resized.
                if (isResizing &&
                    !(point.shapeArgs &&
                        point.shapeArgs.width &&
                        point.shapeArgs.height)) {
                    colorOptions
                        .pattern._width = 'defer';
                    colorOptions
                        .pattern._height = 'defer';
                }
                else {
                    point.calculatePatternDimensions(colorOptions.pattern);
                }
            }
        }
    }
}
/**
 * Set dimensions on pattern from point. This function will set internal
 * pattern._width/_height properties if width and height are not both already
 * set. We only do this on image patterns. The _width/_height properties are set
 * to the size of the bounding box of the point, optionally taking aspect ratio
 * into account. If only one of width or height are supplied as options, the
 * undefined option is calculated as above.
 *
 * @internal
 * @function Highcharts.Point#calculatePatternDimensions
 *
 * @param {Highcharts.PatternOptionsObject} pattern
 *        The pattern to set dimensions on.
 *
 * @return {void}
 *
 * @requires modules/pattern-fill
 */
function pointCalculatePatternDimensions(pattern) {
    if (pattern.width && pattern.height && !pattern.anchorToPoint) {
        return;
    }
    const bBox = this.graphic && (this.graphic.getBBox &&
        this.graphic.getBBox(true) ||
        this.graphic.element &&
            this.graphic.element.getBBox()) || {}, shapeArgs = this.shapeArgs;
    // Prefer using shapeArgs, as it is animation agnostic
    if (shapeArgs) {
        bBox.width = shapeArgs.width || bBox.width;
        bBox.height = shapeArgs.height || bBox.height;
        bBox.x = shapeArgs.x || bBox.x;
        bBox.y = shapeArgs.y || bBox.y;
    }
    // For images we stretch to bounding box
    if (pattern.image) {
        // If we do not have a bounding box at this point, simply add a defer
        // key and pick this up in the fillSetter handler, where the bounding
        // box should exist.
        if (!bBox.width || !bBox.height) {
            pattern._width = 'defer';
            pattern._height = 'defer';
            // Mark the pattern to be flipped later if upside down (#16810)
            const scaleY = this.series.chart.mapView &&
                this.series.chart.mapView.getSVGTransform().scaleY;
            if (defined(scaleY) && scaleY < 0) {
                pattern._inverted = true;
            }
            return;
        }
        // Handle aspect ratio filling
        if (pattern.aspectRatio) {
            bBox.aspectRatio = bBox.width / bBox.height;
            if (pattern.aspectRatio > bBox.aspectRatio) {
                // Height of bBox will determine width
                bBox.aspectWidth = bBox.height * pattern.aspectRatio;
            }
            else {
                // Width of bBox will determine height
                bBox.aspectHeight = bBox.width / pattern.aspectRatio;
            }
        }
        // We set the width/height on internal properties to differentiate
        // between the options set by a user and by this function.
        pattern._width = pattern.width ||
            Math.ceil(bBox.aspectWidth || bBox.width);
        pattern._height = pattern.height ||
            Math.ceil(bBox.aspectHeight || bBox.height);
    }
    // Handle anchored patterns
    if (pattern.anchorToPoint) {
        // For anchored patterns, always position at origin of the point
        pattern._x = 0;
        pattern._y = 0;
        // Ensure pattern dimensions match the point if not explicitly set
        if (!pattern.width) {
            pattern._width = bBox.width;
        }
        if (!pattern.height) {
            pattern._height = bBox.height;
        }
    }
    else {
        // Original logic for global patterns
        // Set x/y accordingly, centering if using aspect ratio, otherwise
        // adjusting so bounding box corner is 0,0 of pattern.
        if (!pattern.width) {
            pattern._x = pattern.x || 0;
            pattern._x += bBox.x - Math.round(bBox.aspectWidth ?
                Math.abs(bBox.aspectWidth - bBox.width) / 2 :
                0);
        }
        if (!pattern.height) {
            pattern._y = pattern.y || 0;
            pattern._y += bBox.y - Math.round(bBox.aspectHeight ?
                Math.abs(bBox.aspectHeight - bBox.height) / 2 :
                0);
        }
    }
}
/**
 * Add a pattern to the renderer.
 *
 * @internal
 * @function Highcharts.SVGRenderer#addPattern
 *
 * @param {Highcharts.PatternObject} options
 * The pattern options.
 *
 * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
 * The animation options.
 *
 * @return {Highcharts.SVGElement|undefined}
 * The added pattern. Undefined if the pattern already exists.
 *
 * @requires modules/pattern-fill
 */
function rendererAddPattern(options, animation) {
    const animate = pick(animation, true), animationOptions = animObject(animate), color = options.color || "#333333" /* Palette.neutralColor80 */, defaultSize = 32, height = options.height ||
        (typeof options._height === 'number' ? options._height : 0) ||
        defaultSize, width = options.width ||
        (typeof options._width === 'number' ? options._width : 0) ||
        defaultSize, patternContentUnits = options.anchorToPoint ?
        'userSpaceOnUse' :
        (options.patternContentUnits || 'userSpaceOnUse');
    const rect = (fill) => this
        .rect(0, 0, width, height)
        .attr({ fill })
        .add(pattern);
    let attribs, id = options.id, path;
    if (!id) {
        this.idCounter = this.idCounter || 0;
        id = ('highcharts-pattern-' +
            this.idCounter +
            '-' +
            (this.chartIndex || 0));
        ++this.idCounter;
    }
    if (this.forExport) {
        id += '-export';
    }
    // Do nothing if ID already exists
    this.defIds = this.defIds || [];
    if (this.defIds.indexOf(id) > -1) {
        return;
    }
    // Store ID in list to avoid duplicates
    this.defIds.push(id);
    // Calculate pattern element attributes
    const attrs = {
        id: id,
        patternUnits: 'userSpaceOnUse',
        patternContentUnits: patternContentUnits,
        width: width,
        height: height,
        x: options._x || options.x || 0,
        y: options._y || options.y || 0
    };
    if (options._inverted) {
        attrs.patternTransform = 'scale(1, -1)'; // (#16810)
        if (options.patternTransform) {
            options.patternTransform += ' scale(1, -1)';
        }
    }
    if (options.patternTransform) {
        attrs.patternTransform = options.patternTransform;
    }
    const pattern = this.createElement('pattern').attr(attrs).add(this.defs);
    // Set id on the SVGRenderer object
    pattern.id = id;
    // Use an SVG path for the pattern
    if (options.path) {
        path = isObject(options.path) ?
            options.path :
            { d: options.path };
        // The background
        if (options.backgroundColor) {
            rect(options.backgroundColor);
        }
        // The pattern
        attribs = {
            'd': path.d
        };
        if (!this.styledMode) {
            attribs.stroke = path.stroke || color;
            attribs['stroke-width'] = pick(path.strokeWidth, 2);
            attribs.fill = path.fill || 'none';
        }
        if (path.transform) {
            attribs.transform = path.transform;
        }
        this.createElement('path').attr(attribs).add(pattern);
        pattern.color = color;
        // Image pattern
    }
    else if (options.image) {
        if (animate) {
            this.image(options.image, 0, 0, width, height, function () {
                // Onload
                this.animate({
                    opacity: pick(options.opacity, 1)
                }, animationOptions);
                removeEvent(this.element, 'load');
            }).attr({ opacity: 0 }).add(pattern);
        }
        else {
            this.image(options.image, 0, 0, width, height).add(pattern);
        }
    }
    // For non-animated patterns, set opacity now
    if (!(options.image && animate) && typeof options.opacity !== 'undefined') {
        [].forEach.call(pattern.element.childNodes, (child) => {
            child.setAttribute('opacity', options.opacity);
        });
    }
    // Store for future reference
    this.patternElements = this.patternElements || {};
    this.patternElements[id] = pattern;
    return pattern;
}
/**
 * Make sure we have a series color.
 * @internal
 */
function wrapSeriesGetColor(proceed) {
    const oldColor = this.options.color;
    // Temporarily remove color options to get defaults
    if (oldColor &&
        oldColor.pattern &&
        !oldColor.pattern.color) {
        delete this.options.color;
        // Get default
        proceed.apply(this, [].slice.call(arguments, 1));
        // Replace with old, but add default color
        oldColor.pattern.color =
            this.color;
        this.color = this.options.color = oldColor;
    }
    else {
        // We have a color, no need to do anything special
        proceed.apply(this, [].slice.call(arguments, 1));
    }
}
/**
 * Scale patterns inversely to the series it's used in.
 * Maintains a visual (1,1) scale regardless of size.
 * @internal
 */
function onPatternScaleCorrection() {
    const series = this;
    // If not a series used in a map chart, skip it.
    if (!series.chart?.mapView) {
        return;
    }
    const chart = series.chart, renderer = chart.renderer, patterns = renderer.patternElements;
    // Only scale if we have patterns to scale.
    if (renderer.defIds?.length && patterns) {
        // Filter for points which have patterns that don't use images assigned
        // and has a group scale available.
        series.points.filter(function (p) {
            const point = p;
            // No graphic we can fetch id from, filter out this point.
            if (!point.graphic) {
                return false;
            }
            return (point.graphic.element.hasAttribute('fill') ||
                point.graphic.element.hasAttribute('color') ||
                point.graphic.element.hasAttribute('stroke')) &&
                !point.options.color?.pattern?.image &&
                !!point.group?.scaleX &&
                !!point.group?.scaleY;
        })
            // Map up pattern id's and their scales.
            .map(function (p) {
            const point = p;
            // Parse the id from the graphic element of the point.
            const id = (point.graphic?.element.getAttribute('fill') ||
                point.graphic?.element.getAttribute('color') ||
                point.graphic?.element.getAttribute('stroke') || '')
                .replace(renderer.url, '')
                .replace('url(#', '')
                .replace(')', '');
            return {
                id,
                x: point.group?.scaleX || 1,
                y: point.group?.scaleY || 1
            };
        })
            // Filter out colors and other non-patterns, as well as duplicates.
            .filter(function (pointInfo, index, arr) {
            return pointInfo.id !== '' &&
                pointInfo.id.indexOf('highcharts-pattern-') !== -1 &&
                !arr.some(function (otherInfo, otherIndex) {
                    return otherInfo.id === pointInfo.id && otherIndex < index;
                });
        })
            .forEach(function (pointInfo) {
            const id = pointInfo.id;
            patterns[id].scaleX = 1 / pointInfo.x;
            patterns[id].scaleY = 1 / pointInfo.y;
            patterns[id].updateTransform('patternTransform');
        });
    }
}
/* *
 *
 *  Export
 *
 * */
const PatternFill = {
    compose,
    patterns
};
/* harmony default export */ const Extensions_PatternFill = (PatternFill);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Pattern options
 *
 * @interface Highcharts.PatternOptionsObject
 */ /**
* When true, the pattern is anchored to each individual point rather than
* using a global pattern grid. This ensures consistent pattern rendering
* across points of different sizes and improves accessibility for narrow
* columns. Defaults to false for backward compatibility.
*
* @sample highcharts/series/pattern-fill-anchor-to-point/
*         Compare shared vs anchored pattern positioning
* @name Highcharts.PatternOptionsObject#anchorToPoint
* @type {boolean|undefined}
* @since next
* @default false
*/ /**
* Background color for the pattern if a `path` is set (not images).
* @name Highcharts.PatternOptionsObject#backgroundColor
* @type {Highcharts.ColorString|undefined}
*/ /**
* URL to an image to use as the pattern.
* @name Highcharts.PatternOptionsObject#image
* @type {string|undefined}
*/ /**
* Width of the pattern. For images this is automatically set to the width of
* the element bounding box if not supplied. For non-image patterns the default
* is 32px. Note that automatic resizing of image patterns to fill a bounding
* box dynamically is only supported for patterns with an automatically
* calculated ID.
* @name Highcharts.PatternOptionsObject#width
* @type {number|undefined}
*/ /**
* Analogous to pattern.width.
* @name Highcharts.PatternOptionsObject#height
* @type {number|undefined}
*/ /**
* For automatically calculated width and height on images, it is possible to
* set an aspect ratio. The image will be zoomed to fill the bounding box,
* maintaining the aspect ratio defined.
* @name Highcharts.PatternOptionsObject#aspectRatio
* @type {number|undefined}
*/ /**
* Horizontal offset of the pattern. Defaults to 0.
* @name Highcharts.PatternOptionsObject#x
* @type {number|undefined}
*/ /**
* Vertical offset of the pattern. Defaults to 0.
* @name Highcharts.PatternOptionsObject#y
* @type {number|undefined}
*/ /**
* Either an SVG path as string, or an object. As an object, supply the path
* string in the `path.d` property. Other supported properties are standard SVG
* attributes like `path.stroke` and `path.fill`. If a path is supplied for the
* pattern, the `image` property is ignored.
* @name Highcharts.PatternOptionsObject#path
* @type {string|Highcharts.SVGAttributes|undefined}
*/ /**
* SVG `patternTransform` to apply to the entire pattern.
* @name Highcharts.PatternOptionsObject#patternTransform
* @type {string|undefined}
* @see [patternTransform demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series/pattern-fill-transform)
*/ /**
* Pattern color, used as default path stroke.
* @name Highcharts.PatternOptionsObject#color
* @type {Highcharts.ColorString|undefined}
*/ /**
* Opacity of the pattern as a float value from 0 to 1.
* @name Highcharts.PatternOptionsObject#opacity
* @type {number|undefined}
*/ /**
* ID to assign to the pattern. This is automatically computed if not added, and
* identical patterns are reused. To refer to an existing pattern for a
* Highcharts color, use `color: "url(#pattern-id)"`.
* @name Highcharts.PatternOptionsObject#id
* @type {string|undefined}
*/
/**
 * Holds a pattern definition.
 *
 * @sample highcharts/series/pattern-fill-area/
 *         Define a custom path pattern
 * @sample highcharts/series/pattern-fill-pie/
 *         Default patterns and a custom image pattern
 * @sample maps/demo/pattern-fill-map/
 *         Custom images on map
 *
 * @example
 * // Pattern used as a color option
 * color: {
 *     pattern: {
 *            path: {
 *                 d: 'M 3 3 L 8 3 L 8 8 Z',
 *                fill: '#102045'
 *            },
 *            width: 12,
 *            height: 12,
 *            color: '#907000',
 *            opacity: 0.5
 *     }
 * }
 *
 * @interface Highcharts.PatternObject
 */ /**
* Pattern options
* @name Highcharts.PatternObject#pattern
* @type {Highcharts.PatternOptionsObject}
*/ /**
* Animation options for the image pattern loading.
* @name Highcharts.PatternObject#animation
* @type {boolean|Partial<Highcharts.AnimationOptionsObject>|undefined}
*/ /**
* Optionally an index referencing which pattern to use. Highcharts adds
* 10 default patterns to the `Highcharts.patterns` array. Additional
* pattern definitions can be pushed to this array if desired. This option
* is an index into this array.
* @name Highcharts.PatternObject#patternIndex
* @type {number|undefined}
*/
''; // Keeps doclets above in transpiled file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Chart"],"commonjs":["highcharts","Chart"],"commonjs2":["highcharts","Chart"],"root":["Highcharts","Chart"]}
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_ = __webpack_require__(960);
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default = /*#__PURE__*/__webpack_require__.n(highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/Pictorial/PictorialUtilities.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi, Magdalena Gut
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/**
 *
 */
function rescalePatternFill(element, stackHeight, width, height, borderWidth = 1) {
    const fill = element && element.attr('fill'), match = fill && fill.match(/url\(([^)]+)\)/);
    if (match) {
        const patternPath = document.querySelector(`${match[1]} path`);
        if (patternPath) {
            let bBox = patternPath.getBBox();
            // Firefox (v108/Mac) is unable to detect the bounding box within
            // defs. Without this block, the pictorial is not rendered.
            if (bBox.width === 0) {
                const parent = patternPath.parentElement;
                // Temporarily append it to the root
                element.renderer.box.appendChild(patternPath);
                bBox = patternPath.getBBox();
                parent.appendChild(patternPath);
            }
            let scaleX = 1 / (bBox.width + borderWidth);
            const scaleY = stackHeight / height / bBox.height, aspectRatio = bBox.width / bBox.height, pointAspectRatio = width / stackHeight, x = -bBox.width / 2;
            if (aspectRatio < pointAspectRatio) {
                scaleX = scaleX * aspectRatio / pointAspectRatio;
            }
            patternPath.setAttribute('stroke-width', borderWidth / (width * scaleX));
            patternPath.setAttribute('transform', 'translate(0.5, 0)' +
                `scale(${scaleX} ${scaleY}) ` +
                `translate(${x + borderWidth * scaleX / 2}, ${-bBox.y})`);
        }
    }
}
/**
 *
 */
function getStackMetrics(yAxis, shape) {
    let height = yAxis.len, y = 0;
    if (shape && defined(shape.max)) {
        y = yAxis.toPixels(shape.max, true);
        height = yAxis.len - y;
    }
    return {
        height,
        y
    };
}
/**
 *
 */
function invertShadowGroup(shadowGroup, yAxis) {
    const inverted = yAxis.chart.inverted;
    if (inverted) {
        shadowGroup.attr({
            rotation: inverted ? 90 : 0,
            scaleX: inverted ? -1 : 1
        });
    }
}
/* harmony default export */ const PictorialUtilities = ({ rescalePatternFill, invertShadowGroup, getStackMetrics });

;// ./code/es-modules/Series/Pictorial/PictorialPoint.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi, Magdalena Gut
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const ColumnPoint = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column.prototype.pointClass;
const { rescalePatternFill: PictorialPoint_rescalePatternFill, getStackMetrics: PictorialPoint_getStackMetrics } = PictorialUtilities;
/* *
 *
 *  Class
 *
 * */
class PictorialPoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    setState() {
        const point = this;
        super.setState.apply(point, arguments);
        const series = point.series, paths = series.options.paths;
        if (point.graphic && point.shapeArgs && paths) {
            const shape = paths[point.index %
                paths.length];
            PictorialPoint_rescalePatternFill(point.graphic, PictorialPoint_getStackMetrics(series.yAxis, shape).height, point.shapeArgs.width || 0, point.shapeArgs.height || Infinity, point.series.options.borderWidth || 0);
        }
    }
}
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ const Pictorial_PictorialPoint = (PictorialPoint);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series"],"commonjs":["highcharts","Series"],"commonjs2":["highcharts","Series"],"root":["Highcharts","Series"]}
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_ = __webpack_require__(820);
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","StackItem"],"commonjs":["highcharts","StackItem"],"commonjs2":["highcharts","StackItem"],"root":["Highcharts","StackItem"]}
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_ = __webpack_require__(184);
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default = /*#__PURE__*/__webpack_require__.n(highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGRenderer"],"commonjs":["highcharts","SVGRenderer"],"commonjs2":["highcharts","SVGRenderer"],"root":["Highcharts","SVGRenderer"]}
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_ = __webpack_require__(540);
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_);
;// ./code/es-modules/Series/Pictorial/PictorialSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi, Magdalena Gut
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











const ColumnSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column;
Extensions_PatternFill.compose((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), (highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()), (highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default()));
const { animObject: PictorialSeries_animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
const { getStackMetrics: PictorialSeries_getStackMetrics, invertShadowGroup: PictorialSeries_invertShadowGroup, rescalePatternFill: PictorialSeries_rescalePatternFill } = PictorialUtilities;
/* *
 *
 *  Class
 *
 * */
/**
 * The pictorial series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pictorial
 *
 * @augments Highcharts.Series
 */
class PictorialSeries extends ColumnSeries {
    /* *
     *
     * Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * Animate in the series. Called internally twice. First with the `init`
     * parameter set to true, which sets up the initial state of the
     * animation. Then when ready, it is called with the `init` parameter
     * undefined, in order to perform the actual animation.
     *
     * @function Highcharts.Series#animate
     *
     * @param {boolean} [init]
     * Initialize the animation.
     */
    animate(init) {
        const { chart, group } = this, animation = PictorialSeries_animObject(this.options.animation), 
        // The key for temporary animation clips
        animationClipKey = [
            this.getSharedClipKey(),
            animation.duration,
            animation.easing,
            animation.defer
        ].join(',');
        let animationClipRect = chart.sharedClips[animationClipKey];
        // Initialize the animation. Set up the clipping rectangle.
        if (init && group) {
            const clipBox = chart.getClipBox(this);
            // Create temporary animation clips
            if (!animationClipRect) {
                clipBox.y = clipBox.height;
                clipBox.height = 0;
                animationClipRect = chart.renderer.clipRect(clipBox);
                chart.sharedClips[animationClipKey] = animationClipRect;
            }
            group.clip(animationClipRect);
            // Run the animation
        }
        else if (animationClipRect &&
            // Only first series in this pane
            !animationClipRect.hasClass('highcharts-animating')) {
            const finalBox = chart.getClipBox(this);
            animationClipRect
                .addClass('highcharts-animating')
                .animate(finalBox, animation);
        }
    }
    animateDrilldown() { }
    animateDrillupFrom() { }
    pointAttribs(point) {
        const pointAttribs = super.pointAttribs.apply(this, arguments), seriesOptions = this.options, series = this, paths = seriesOptions.paths;
        if (point && point.shapeArgs && paths) {
            const shape = paths[point.index % paths.length], { y, height } = PictorialSeries_getStackMetrics(series.yAxis, shape), pathDef = shape.definition;
            // New pattern, replace
            if (pathDef !== point.pathDef) {
                point.pathDef = pathDef;
                pointAttribs.fill = {
                    pattern: {
                        path: {
                            d: pathDef,
                            fill: pointAttribs.fill,
                            strokeWidth: pointAttribs['stroke-width'],
                            stroke: pointAttribs.stroke
                        },
                        x: point.shapeArgs.x,
                        y: y,
                        width: point.shapeArgs.width || 0,
                        height: height,
                        patternContentUnits: 'objectBoundingBox',
                        backgroundColor: 'none',
                        color: '#ff0000'
                    }
                };
            }
            else if (point.pathDef && point.graphic) {
                delete pointAttribs.fill;
            }
        }
        delete pointAttribs.stroke;
        delete pointAttribs.strokeWidth;
        return pointAttribs;
    }
    /**
     * Make sure that path.max is also considered when calculating dataMax.
     */
    getExtremes() {
        const extremes = super.getExtremes.apply(this, arguments), series = this, paths = series.options.paths;
        if (paths) {
            paths.forEach(function (path) {
                if (defined(path.max) &&
                    defined(extremes.dataMax) &&
                    path.max > extremes.dataMax) {
                    extremes.dataMax = path.max;
                }
            });
        }
        return extremes;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
PictorialSeries.defaultOptions = merge(ColumnSeries.defaultOptions, 
/**
 * A pictorial chart uses vector images to represents the data.
 * The shape of the data point is taken from the path parameter.
 *
 * @sample       {highcharts} highcharts/demo/pictorial/
 *               Pictorial chart
 *
 * @extends      plotOptions.column
 * @since 11.0.0
 * @product      highcharts
 * @excluding    allAreas, borderRadius,
 *               centerInCategory, colorAxis, colorKey, connectEnds,
 *               connectNulls, crisp, compare, compareBase, dataSorting,
 *               dashStyle, dataAsColumns, linecap, lineWidth, shadow,
 *               onPoint
 * @requires     modules/pictorial
 * @optionparent plotOptions.pictorial
 */
{
    borderWidth: 0
});
/* *
 *
 *  Events
 *
 * */
addEvent(PictorialSeries, 'afterRender', function () {
    const series = this, paths = series.options.paths, fillUrlMatcher = /url\(([^)]+)\)/;
    series.points.forEach(function (point) {
        if (point.graphic && point.shapeArgs && paths) {
            const shape = paths[point.index % paths.length], fill = point.graphic.attr('fill'), match = fill && fill.match(fillUrlMatcher), { y, height } = PictorialSeries_getStackMetrics(series.yAxis, shape);
            if (match && series.chart.renderer.patternElements) {
                const currentPattern = series.chart.renderer.patternElements[match[1].slice(1)];
                if (currentPattern) {
                    currentPattern.animate({
                        x: point.shapeArgs.x,
                        y: y,
                        width: point.shapeArgs.width || 0,
                        height: height
                    });
                }
            }
            PictorialSeries_rescalePatternFill(point.graphic, PictorialSeries_getStackMetrics(series.yAxis, shape).height, point.shapeArgs.width || 0, point.shapeArgs.height || Infinity, series.options.borderWidth || 0);
        }
    });
});
/**
 *
 */
function renderStackShadow(stack) {
    // Get first pictorial series
    const stackKeys = Object
        .keys(stack.points)
        .filter((p) => p.split(',').length > 1), allSeries = stack.axis.chart.series, seriesIndexes = stackKeys.map((key) => parseFloat(key.split(',')[0]));
    let seriesIndex = -1;
    seriesIndexes.forEach((index) => {
        if (allSeries[index] && allSeries[index].visible) {
            seriesIndex = index;
        }
    });
    const series = stack.axis.chart.series[seriesIndex];
    if (series &&
        series.is('pictorial') &&
        stack.axis.hasData() &&
        series.xAxis.hasData()) {
        const xAxis = series.xAxis, options = stack.axis.options, chart = stack.axis.chart, stackShadow = stack.shadow, xCenter = xAxis.toPixels(stack.x, true), x = chart.inverted ? xAxis.len - xCenter : xCenter, paths = series.options.paths || [], index = stack.x % paths.length, shape = paths[index], width = series.getColumnMetrics &&
            series.getColumnMetrics().width, { height, y } = PictorialSeries_getStackMetrics(series.yAxis, shape), shadowOptions = options.stackShadow, strokeWidth = pick(shadowOptions && shadowOptions.borderWidth, series.options.borderWidth, 1);
        if (!stackShadow &&
            shadowOptions &&
            shadowOptions.enabled &&
            shape) {
            if (!stack.shadowGroup) {
                stack.shadowGroup = chart.renderer.g('shadow-group')
                    .add();
            }
            stack.shadowGroup.attr({
                translateX: chart.inverted ?
                    stack.axis.pos : xAxis.pos,
                translateY: chart.inverted ?
                    xAxis.pos : stack.axis.pos
            });
            stack.shadow = chart.renderer.rect(x, y, width, height)
                .attr({
                fill: {
                    pattern: {
                        path: {
                            d: shape.definition,
                            fill: shadowOptions.color ||
                                '#dedede',
                            strokeWidth: strokeWidth,
                            stroke: shadowOptions.borderColor ||
                                'transparent'
                        },
                        x: x,
                        y: y,
                        width: width,
                        height: height,
                        patternContentUnits: 'objectBoundingBox',
                        backgroundColor: 'none',
                        color: '#dedede'
                    }
                }
            })
                .add(stack.shadowGroup);
            PictorialSeries_invertShadowGroup(stack.shadowGroup, stack.axis);
            PictorialSeries_rescalePatternFill(stack.shadow, height, width, height, strokeWidth);
            stack.setOffset(series.pointXOffset || 0, series.barW || 0);
        }
        else if (stackShadow && stack.shadowGroup) {
            stackShadow.animate({
                x,
                y,
                width,
                height
            });
            const fillUrlMatcher = /url\(([^)]+)\)/, fill = stackShadow.attr('fill'), match = fill && fill.match(fillUrlMatcher);
            if (match && chart.renderer.patternElements) {
                chart.renderer.patternElements[match[1].slice(1)]
                    .animate({
                    x,
                    y,
                    width,
                    height
                });
            }
            stack.shadowGroup.animate({
                translateX: chart.inverted ?
                    stack.axis.pos : xAxis.pos,
                translateY: chart.inverted ?
                    xAxis.pos : stack.axis.pos
            });
            PictorialSeries_invertShadowGroup(stack.shadowGroup, stack.axis);
            PictorialSeries_rescalePatternFill(stackShadow, height, width, height, strokeWidth);
            stack.setOffset(series.pointXOffset || 0, series.barW || 0);
        }
    }
    else if (stack.shadow && stack.shadowGroup) {
        stack.shadow.destroy();
        stack.shadow = void 0;
        stack.shadowGroup.destroy();
        stack.shadowGroup = void 0;
    }
}
/**
 *
 */
function forEachStack(chart, callback) {
    if (chart.axes) {
        chart.axes.forEach(function (axis) {
            if (!axis.stacking) {
                return;
            }
            const stacks = axis.stacking.stacks;
            // Render each stack total
            objectEach(stacks, function (type) {
                objectEach(type, function (stack) {
                    callback(stack);
                });
            });
        });
    }
}
addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'render', function () {
    forEachStack(this, renderStackShadow);
});
addEvent((highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default()), 'afterSetOffset', function (e) {
    if (this.shadow) {
        const { chart, len } = this.axis, { xOffset, width } = e, translateX = chart.inverted ? xOffset - chart.xAxis[0].len : xOffset, translateY = chart.inverted ? -len : 0;
        this.shadow.attr({
            translateX,
            translateY
        });
        this.shadow.animate({ width });
    }
});
/**
 *
 */
function destroyAllStackShadows(chart) {
    forEachStack(chart, function (stack) {
        if (stack.shadow && stack.shadowGroup) {
            stack.shadow.destroy();
            stack.shadowGroup.destroy();
            delete stack.shadow;
            delete stack.shadowGroup;
        }
    });
}
// This is a workaround due to no implementation of the animation drilldown.
addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'afterDrilldown', function () {
    destroyAllStackShadows(this);
});
addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'afterDrillUp', function () {
    destroyAllStackShadows(this);
});
PictorialSeries.prototype.pointClass = Pictorial_PictorialPoint;
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('pictorial', PictorialSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Pictorial_PictorialSeries = ((/* unused pure expression or super */ null && (PictorialSeries)));
/* *
 *
 * API Options
 *
 * */
/**
 * A `pictorial` series. If the [type](#series.pictorial.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.pictorial
 * @since 11.0.0
 * @product   highcharts
 * @excluding dataParser, borderRadius, boostBlending, boostThreshold,
 *            borderColor, borderWidth, centerInCategory, connectEnds,
 *            connectNulls, crisp, colorKey, dataURL, dataAsColumns, depth,
 *            dragDrop, edgeColor, edgeWidth, linecap, lineWidth,  marker,
 *            dataSorting, dashStyle, onPoint, relativeXValue, shadow, zoneAxis,
 *            zones
 * @requires  modules/pictorial
 * @apioption series.pictorial
 */
/**
 * An array of data points for the series. For the `pictorial` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 2 values. In this case, the values correspond
 *    to `x,y`. If the first value is a string, it is applied as the name
 *    of the point, and the `x` value is inferred. The `x` value can also be
 *    omitted, in which case the inner arrays should be of length 2. Then the
 *    `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 40],
 *        [1, 50],
 *        [2, 60]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.pictorial.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 0,
 *        y: 40,
 *        name: "Point1",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        y: 60,
 *        name: "Point2",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
 * @extends   series.column.data
 *
 * @sample {highcharts} highcharts/demo/pictorial/
 *         Pictorial chart
 * @sample {highcharts} highcharts/demo/pictorial-stackshadow/
 *         Pictorial stackShadow option
 * @sample {highcharts} highcharts/series-pictorial/paths-max/
 *         Pictorial max option
 *
 * @excluding borderColor, borderWidth, dashStyle, dragDrop
 * @since 11.0.0
 * @product   highcharts
 * @apioption series.pictorial.data
 */
/**
 * The paths include options describing the series image. For further details on
 * preparing the SVG image, please refer to the [pictorial
 * documentation](https://www.highcharts.com/docs/chart-and-series-types/pictorial).
 *
 * @declare   Highcharts.SeriesPictorialPathsOptionsObject
 * @type      {Array<*>}
 *
 * @sample    {highcharts} highcharts/demo/pictorial/
 *            Pictorial chart
 *
 * @since     11.0.0
 * @product   highcharts
 * @apioption series.pictorial.paths
 */
/**
 * The definition defines a path to be drawn. It corresponds `d` SVG attribute.
 *
 * @type      {string}
 *
 * @sample    {highcharts} highcharts/demo/pictorial/
 *            Pictorial chart
 *
 * @product   highcharts
 * @apioption series.pictorial.paths.definition
 */
/**
 * The max option determines height of the image. It is the ratio of
 * `yAxis.max` to the `paths.max`.
 *
 * @sample {highcharts} highcharts/series-pictorial/paths-max
 *         Pictorial max option
 *
 * @type      {number}
 * @default   yAxis.max
 * @product   highcharts
 * @apioption series.pictorial.paths.max
 */
/**
 * Relevant only for pictorial series. The `stackShadow` forms the background of
 * stacked points. Requires `series.stacking` to be defined.
 *
 * @sample {highcharts} highcharts/demo/pictorial-stackshadow/ Pictorial
 *         stackShadow option
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {*}
 * @since 11.0.0
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow
 */
/**
 * The color of the `stackShadow` border.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @default   transparent
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.borderColor
 */
/**
 * The width of the `stackShadow` border.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {number}
 * @default   0
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.borderWidth
 */
/**
 * The color of the `stackShadow`.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @default   #dedede
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.color
 */
/**
 * Enable or disable `stackShadow`.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {boolean}
 * @default   undefined
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.enabled
 */
''; // Adds doclets above to transpiled file

;// ./code/es-modules/masters/modules/pictorial.src.js




/* harmony default export */ const pictorial_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});