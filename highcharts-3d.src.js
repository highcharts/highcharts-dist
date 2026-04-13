// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.0 (2026-04-13)
 * @module highcharts/highcharts-3d
 * @requires highcharts
 *
 * 3D features for Highcharts JS
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Color"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["RendererRegistry"], root["_Highcharts"]["Series"], root["_Highcharts"]["StackItem"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Series"]["types"]["scatter"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/highcharts-3d", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Color"],amd1["SeriesRegistry"],amd1["RendererRegistry"],amd1["Series"],amd1["StackItem"],amd1["Axis"],amd1["Series"],["types"],["scatter"]);});
	else if(typeof exports === 'object')
		exports["highcharts/highcharts-3d"] = factory(root["_Highcharts"], root["_Highcharts"]["Color"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["RendererRegistry"], root["_Highcharts"]["Series"], root["_Highcharts"]["StackItem"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Series"]["types"]["scatter"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Color"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["RendererRegistry"], root["Highcharts"]["Series"], root["Highcharts"]["StackItem"], root["Highcharts"]["Axis"], root["Highcharts"]["Series"]["types"]["scatter"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__620__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__608__, __WEBPACK_EXTERNAL_MODULE__820__, __WEBPACK_EXTERNAL_MODULE__184__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__632__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 184:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__184__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 532:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

/***/ }),

/***/ 608:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__608__;

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__620__;

/***/ }),

/***/ 632:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__632__;

/***/ }),

/***/ 820:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__820__;

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
  "default": () => (/* binding */ highcharts_3d_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Color"],"commonjs":["highcharts","Color"],"commonjs2":["highcharts","Color"],"root":["Highcharts","Color"]}
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_ = __webpack_require__(620);
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default = /*#__PURE__*/__webpack_require__.n(highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_);
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

;// ./code/es-modules/Core/Math3D.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Functions
 *
 * */
/* eslint-disable max-len */
/**
 * Apply 3-D rotation
 * Euler Angles (XYZ):
 *     cosA = cos(Alfa|Roll)
 *     cosB = cos(Beta|Pitch)
 *     cosG = cos(Gamma|Yaw)
 *
 * Composite rotation:
 * |          cosB * cosG             |           cosB * sinG            |    -sinB    |
 * | sinA * sinB * cosG - cosA * sinG | sinA * sinB * sinG + cosA * cosG | sinA * cosB |
 * | cosA * sinB * cosG + sinA * sinG | cosA * sinB * sinG - sinA * cosG | cosA * cosB |
 *
 * Now, Gamma/Yaw is not used (angle=0), so we assume cosG = 1 and sinG = 0, so
 * we get:
 * |     cosB    |   0    |   - sinB    |
 * | sinA * sinB |  cosA  | sinA * cosB |
 * | cosA * sinB | - sinA | cosA * cosB |
 *
 * But in browsers, y is reversed, so we get sinA => -sinA. The general result
 * is:
 * |      cosB     |   0    |    - sinB     |     | x |     | px |
 * | - sinA * sinB |  cosA  | - sinA * cosB |  x  | y |  =  | py |
 * |  cosA * sinB  |  sinA  |  cosA * cosB  |     | z |     | pz |
 *
 * @internal
 * @function rotate3D
 */
/* eslint-enable max-len */
/**
 * Rotates the position as defined in angles.
 * @internal
 * @param {number} x
 *        X coordinate
 * @param {number} y
 *        Y coordinate
 * @param {number} z
 *        Z coordinate
 * @param {Highcharts.Rotation3DObject} angles
 *        Rotation angles
 * @return {Highcharts.Position3DObject}
 *         Rotated position
 */
function rotate3D(x, y, z, angles) {
    return {
        x: angles.cosB * x - angles.sinB * z,
        y: -angles.sinA * angles.sinB * x + angles.cosA * y -
            angles.cosB * angles.sinA * z,
        z: angles.cosA * angles.sinB * x + angles.sinA * y +
            angles.cosA * angles.cosB * z
    };
}
/**
 * Transforms a given array of points according to the angles in chart.options.
 *
 * @internal
 * @function Highcharts.perspective
 *
 * @param {Array<Highcharts.Position3DObject>} points
 * The array of points
 *
 * @param {Highcharts.Chart} chart
 * The chart
 *
 * @param {boolean} [insidePlotArea]
 * Whether to verify that the points are inside the plotArea
 *
 * @param {boolean} [useInvertedPersp]
 * Whether to use inverted perspective in calculations
 *
 * @return {Array<Highcharts.Position3DObject>}
 * An array of transformed points
 *
 * @requires highcharts-3d
 */
function perspective(points, chart, insidePlotArea, useInvertedPersp) {
    const options3d = chart.options.chart.options3d, 
    /* The useInvertedPersp argument is used for inverted charts with
     * already inverted elements, such as dataLabels or tooltip positions.
     */
    inverted = pick(useInvertedPersp, insidePlotArea ? chart.inverted : false), origin = {
        x: chart.plotWidth / 2,
        y: chart.plotHeight / 2,
        z: options3d.depth / 2,
        vd: pick(options3d.depth, 1) * pick(options3d.viewDistance, 0)
    }, scale = chart.scale3d || 1, beta = deg2rad * options3d.beta * (inverted ? -1 : 1), alpha = deg2rad * options3d.alpha * (inverted ? -1 : 1), angles = {
        cosA: Math.cos(alpha),
        cosB: Math.cos(-beta),
        sinA: Math.sin(alpha),
        sinB: Math.sin(-beta)
    };
    if (!insidePlotArea) {
        origin.x += chart.plotLeft;
        origin.y += chart.plotTop;
    }
    // Transform each point
    return points.map(function (point) {
        const rotated = rotate3D((inverted ? point.y : point.x) - origin.x, (inverted ? point.x : point.y) - origin.y, (point.z || 0) - origin.z, angles), 
        // Apply perspective
        coordinate = perspective3D(rotated, origin, origin.vd);
        // Apply translation
        coordinate.x = coordinate.x * scale + origin.x;
        coordinate.y = coordinate.y * scale + origin.y;
        coordinate.z = rotated.z * scale + origin.z;
        return {
            x: (inverted ? coordinate.y : coordinate.x),
            y: (inverted ? coordinate.x : coordinate.y),
            z: coordinate.z
        };
    });
}
/**
 * Perspective3D function is available in global Highcharts scope because is
 * needed also outside of perspective() function (#8042).
 * @internal
 * @function Highcharts.perspective3D
 *
 * @param {Highcharts.Position3DObject} coordinate
 * 3D position
 *
 * @param {Highcharts.Position3DObject} origin
 * 3D root position
 *
 * @param {number} distance
 * Perspective distance
 *
 * @return {Highcharts.PositionObject}
 * Perspective 3D Position
 *
 * @requires highcharts-3d
 */
function perspective3D(coordinate, origin, distance) {
    const projection = ((distance > 0) &&
        (distance < Number.POSITIVE_INFINITY)) ?
        distance / (coordinate.z + origin.z + distance) :
        1;
    return {
        x: coordinate.x * projection,
        y: coordinate.y * projection
    };
}
/**
 * Calculate a distance from camera to points - made for calculating zIndex of
 * scatter points.
 *
 * @internal
 * @function Highcharts.pointCameraDistance
 *
 * @param {Highcharts.Dictionary<number>} coordinates
 * Coordinates of the specific point
 *
 * @param {Highcharts.Chart} chart
 * Related chart
 *
 * @return {number}
 * Distance from camera to point
 *
 * @requires highcharts-3d
 */
function pointCameraDistance(coordinates, chart) {
    const options3d = chart.options.chart.options3d, cameraPosition = {
        x: chart.plotWidth / 2,
        y: chart.plotHeight / 2,
        z: pick(options3d.depth, 1) * pick(options3d.viewDistance, 0) +
            options3d.depth
    }, 
    // Added support for objects with plotX or x coordinates.
    distance = Math.sqrt(Math.pow(cameraPosition.x - pick(coordinates.plotX, coordinates.x), 2) +
        Math.pow(cameraPosition.y - pick(coordinates.plotY, coordinates.y), 2) +
        Math.pow(cameraPosition.z - pick(coordinates.plotZ, coordinates.z), 2));
    return distance;
}
/**
 * Calculate area of a 2D polygon using Shoelace algorithm
 * https://en.wikipedia.org/wiki/Shoelace_formula
 *
 * @internal
 * @function Highcharts.shapeArea
 *
 * @param {Array<Highcharts.PositionObject>} vertexes
 * 2D Polygon
 *
 * @return {number}
 * Calculated area
 *
 * @requires highcharts-3d
 */
function shapeArea(vertexes) {
    let area = 0, i, j;
    for (i = 0; i < vertexes.length; i++) {
        j = (i + 1) % vertexes.length;
        area += vertexes[i].x * vertexes[j].y - vertexes[j].x * vertexes[i].y;
    }
    return area / 2;
}
/**
 * Calculate area of a 3D polygon after perspective projection
 *
 * @internal
 * @function Highcharts.shapeArea3d
 *
 * @param {Array<Highcharts.Position3DObject>} vertexes
 * 3D Polygon
 *
 * @param {Highcharts.Chart} chart
 * Related chart
 *
 * @param {boolean} [insidePlotArea]
 * Whether to verify that the points are inside the plotArea
 *
 * @return {number}
 * Calculated area
 *
 * @requires highcharts-3d
 */
function shapeArea3D(vertexes, chart, insidePlotArea) {
    return shapeArea(perspective(vertexes, chart, insidePlotArea));
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const Math3D = {
    perspective,
    perspective3D,
    pointCameraDistance,
    shapeArea,
    shapeArea3D
};
/** @internal */
/* harmony default export */ const Core_Math3D = (Math3D);

;// ./code/es-modules/Core/Chart/Chart3D.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extension for 3D charts
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { parse: color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());

const { defaultOptions: genericDefaultOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: Chart3D_perspective, shapeArea3D: Chart3D_shapeArea3D } = Core_Math3D;

/* *
 *
 *  Composition
 *
 * */
var Chart3D;
(function (Chart3D) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * @optionparent
     * @internal
     */
    Chart3D.defaultOptions = {
        chart: {
            /**
             * Options to render charts in 3 dimensions. This feature requires
             * `highcharts-3d.js`, found in the download package or online at
             * [code.highcharts.com/highcharts-3d.js](https://code.highcharts.com/highcharts-3d.js).
             *
             * @since    4.0
             * @product  highcharts
             * @requires highcharts-3d
             */
            options3d: {
                /**
                 * Whether to render the chart using the 3D functionality.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                enabled: false,
                /**
                 * One of the two rotation angles for the chart.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                alpha: 0,
                /**
                 * One of the two rotation angles for the chart.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                beta: 0,
                /**
                 * The total depth of the chart.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                depth: 100,
                /**
                 * Whether the 3d box should automatically adjust to the chart
                 * plot area.
                 *
                 * @since   4.2.4
                 * @product highcharts
                 */
                fitToPlot: true,
                /**
                 * Defines the distance the viewer is standing in front of the
                 * chart, this setting is important to calculate the perspective
                 * effect in column and scatter charts. It is not used for 3D
                 * pie charts.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                viewDistance: 25,
                /**
                 * Set it to `"auto"` to automatically move the labels to the
                 * best edge.
                 *
                 * @type    {"auto"|null}
                 * @since   5.0.12
                 * @product highcharts
                 */
                axisLabelPosition: null,
                /**
                 * Provides the option to draw a frame around the charts by
                 * defining a bottom, front and back panel.
                 *
                 * @since    4.0
                 * @product  highcharts
                 * @requires highcharts-3d
                 */
                frame: {
                    /**
                     * Whether the frames are visible.
                     */
                    visible: 'default',
                    /**
                     * General pixel thickness for the frame faces.
                     */
                    size: 1,
                    /**
                     * The bottom of the frame around a 3D chart.
                     *
                     * @since    4.0
                     * @product  highcharts
                     * @requires highcharts-3d
                     */
                    /**
                     * The color of the panel.
                     *
                     * @type      {Highcharts.ColorType}
                     * @default   transparent
                     * @since     4.0
                     * @product   highcharts
                     * @apioption chart.options3d.frame.bottom.color
                     */
                    /**
                     * The thickness of the panel.
                     *
                     * @type      {number}
                     * @default   1
                     * @since     4.0
                     * @product   highcharts
                     * @apioption chart.options3d.frame.bottom.size
                     */
                    /**
                     * Whether to display the frame. Possible values are `true`,
                     * `false`, `"auto"` to display only the frames behind the
                     * data, and `"default"` to display faces behind the data
                     * based on the axis layout, ignoring the point of view.
                     *
                     * @sample {highcharts} highcharts/3d/scatter-frame/
                     *         Auto frames
                     *
                     * @type      {boolean|"default"|"auto"}
                     * @default   default
                     * @since     5.0.12
                     * @product   highcharts
                     * @apioption chart.options3d.frame.bottom.visible
                     */
                    /**
                     * The bottom of the frame around a 3D chart.
                     */
                    bottom: {},
                    /**
                     * The top of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    top: {},
                    /**
                     * The left side of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    left: {},
                    /**
                     * The right of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    right: {},
                    /**
                     * The back side of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    back: {},
                    /**
                     * The front of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    front: {}
                }
            }
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(ChartClass, FxClass) {
        const chartProto = ChartClass.prototype;
        const fxProto = FxClass.prototype;
        /**
         * Shorthand to check the is3d flag.
         * @internal
         * @return {boolean}
         * Whether it is a 3D chart.
         */
        chartProto.is3d = function () {
            return !!this.options.chart.options3d?.enabled;
        };
        chartProto.propsRequireDirtyBox.push('chart.options3d');
        chartProto.propsRequireUpdateSeries.push('chart.options3d');
        /**
         * Animation setter for matrix property.
         * @internal
         */
        fxProto.matrixSetter = function () {
            let interpolated;
            if (this.pos < 1 &&
                (isArray(this.start) || isArray(this.end))) {
                const start = (this.start ||
                    [1, 0, 0, 1, 0, 0]), end = this.end || [1, 0, 0, 1, 0, 0];
                interpolated = [];
                for (let i = 0; i < 6; i++) {
                    interpolated.push(this.pos * end[i] + (1 - this.pos) * start[i]);
                }
            }
            else {
                interpolated = this.end;
            }
            this.elem.attr(this.prop, interpolated, null, true);
        };
        merge(true, genericDefaultOptions, Chart3D.defaultOptions);
        addEvent(ChartClass, 'init', onInit);
        addEvent(ChartClass, 'addSeries', onAddSeries);
        addEvent(ChartClass, 'afterDrawChartBox', onAfterDrawChartBox);
        addEvent(ChartClass, 'afterGetContainer', onAfterGetContainer);
        addEvent(ChartClass, 'afterInit', onAfterInit);
        addEvent(ChartClass, 'afterSetChartSize', onAfterSetChartSize);
        addEvent(ChartClass, 'beforeRedraw', onBeforeRedraw);
        addEvent(ChartClass, 'beforeRender', onBeforeRender);
        wrap(chartProto, 'isInsidePlot', wrapIsInsidePlot);
        wrap(chartProto, 'renderSeries', wrapRenderSeries);
        wrap(chartProto, 'setClassName', wrapSetClassName);
    }
    Chart3D.compose = compose;
    /**
     * Legacy support for HC < 6 to make 'scatter' series in a 3D chart route to
     * the real 'scatter3d' series type. (#8407)
     * @internal
     */
    function onAddSeries(e) {
        if (this.is3d()) {
            if (e.options.type === 'scatter') {
                e.options.type = 'scatter3d';
            }
        }
    }
    /** @internal */
    function onAfterDrawChartBox() {
        if (this.chart3d &&
            this.is3d()) {
            const chart = this, renderer = chart.renderer, options3d = chart.options.chart.options3d, frame = chart.chart3d.get3dFrame(), xm = chart.plotLeft, xp = chart.plotLeft + chart.plotWidth, ym = chart.plotTop, yp = chart.plotTop + chart.plotHeight, zm = 0, zp = options3d.depth, xmm = xm - (frame.left.visible ? frame.left.size : 0), xpp = xp + (frame.right.visible ? frame.right.size : 0), ymm = ym - (frame.top.visible ? frame.top.size : 0), ypp = yp + (frame.bottom.visible ? frame.bottom.size : 0), zmm = zm - (frame.front.visible ? frame.front.size : 0), zpp = zp + (frame.back.visible ? frame.back.size : 0), verb = chart.hasRendered ? 'animate' : 'attr';
            chart.chart3d.frame3d = frame;
            if (!chart.frameShapes) {
                chart.frameShapes = {
                    bottom: renderer.polyhedron().add(),
                    top: renderer.polyhedron().add(),
                    left: renderer.polyhedron().add(),
                    right: renderer.polyhedron().add(),
                    back: renderer.polyhedron().add(),
                    front: renderer.polyhedron().add()
                };
            }
            chart.frameShapes.bottom[verb]({
                'class': 'highcharts-3d-frame highcharts-3d-frame-bottom',
                zIndex: frame.bottom.frontFacing ? -1000 : 1000,
                faces: [{
                        fill: color(frame.bottom.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }],
                        enabled: frame.bottom.visible
                    },
                    {
                        fill: color(frame.bottom.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xm,
                                y: yp,
                                z: zp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.bottom.visible
                    },
                    {
                        fill: color(frame.bottom.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.bottom.visible && !frame.left.visible
                    },
                    {
                        fill: color(frame.bottom.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }],
                        enabled: frame.bottom.visible && !frame.right.visible
                    },
                    {
                        fill: color(frame.bottom.color).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.bottom.visible && !frame.front.visible
                    },
                    {
                        fill: color(frame.bottom.color).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }],
                        enabled: frame.bottom.visible && !frame.back.visible
                    }]
            });
            chart.frameShapes.top[verb]({
                'class': 'highcharts-3d-frame highcharts-3d-frame-top',
                zIndex: frame.top.frontFacing ? -1000 : 1000,
                faces: [{
                        fill: color(frame.top.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }],
                        enabled: frame.top.visible
                    },
                    {
                        fill: color(frame.top.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xm,
                                y: ym,
                                z: zm
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.top.visible
                    },
                    {
                        fill: color(frame.top.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.top.visible && !frame.left.visible
                    },
                    {
                        fill: color(frame.top.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }],
                        enabled: frame.top.visible && !frame.right.visible
                    },
                    {
                        fill: color(frame.top.color).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }],
                        enabled: frame.top.visible && !frame.front.visible
                    },
                    {
                        fill: color(frame.top.color).get(),
                        vertexes: [{
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.top.visible && !frame.back.visible
                    }]
            });
            chart.frameShapes.left[verb]({
                'class': 'highcharts-3d-frame highcharts-3d-frame-left',
                zIndex: frame.left.frontFacing ? -1000 : 1000,
                faces: [{
                        fill: color(frame.left.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }],
                        enabled: frame.left.visible && !frame.bottom.visible
                    },
                    {
                        fill: color(frame.left.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }],
                        enabled: frame.left.visible && !frame.top.visible
                    },
                    {
                        fill: color(frame.left.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }],
                        enabled: frame.left.visible
                    },
                    {
                        fill: color(frame.left.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xm,
                                y: ym,
                                z: zp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }],
                        enabled: frame.left.visible
                    },
                    {
                        fill: color(frame.left.color).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.left.visible && !frame.front.visible
                    },
                    {
                        fill: color(frame.left.color).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.left.visible && !frame.back.visible
                    }]
            });
            chart.frameShapes.right[verb]({
                'class': 'highcharts-3d-frame highcharts-3d-frame-right',
                zIndex: frame.right.frontFacing ? -1000 : 1000,
                faces: [{
                        fill: color(frame.right.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }],
                        enabled: frame.right.visible && !frame.bottom.visible
                    },
                    {
                        fill: color(frame.right.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }],
                        enabled: frame.right.visible && !frame.top.visible
                    },
                    {
                        fill: color(frame.right.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xp,
                                y: ym,
                                z: zm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.right.visible
                    },
                    {
                        fill: color(frame.right.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }],
                        enabled: frame.right.visible
                    },
                    {
                        fill: color(frame.right.color).get(),
                        vertexes: [{
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }],
                        enabled: frame.right.visible && !frame.front.visible
                    },
                    {
                        fill: color(frame.right.color).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }],
                        enabled: frame.right.visible && !frame.back.visible
                    }]
            });
            chart.frameShapes.back[verb]({
                'class': 'highcharts-3d-frame highcharts-3d-frame-back',
                zIndex: frame.back.frontFacing ? -1000 : 1000,
                faces: [{
                        fill: color(frame.back.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }],
                        enabled: frame.back.visible && !frame.bottom.visible
                    },
                    {
                        fill: color(frame.back.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.back.visible && !frame.top.visible
                    },
                    {
                        fill: color(frame.back.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xm,
                                y: ym,
                                z: zp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }],
                        enabled: frame.back.visible && !frame.left.visible
                    },
                    {
                        fill: color(frame.back.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }],
                        enabled: frame.back.visible && !frame.right.visible
                    },
                    {
                        fill: color(frame.back.color).get(),
                        vertexes: [{
                                x: xm,
                                y: ym,
                                z: zp
                            }, {
                                x: xp,
                                y: ym,
                                z: zp
                            }, {
                                x: xp,
                                y: yp,
                                z: zp
                            }, {
                                x: xm,
                                y: yp,
                                z: zp
                            }],
                        enabled: frame.back.visible
                    },
                    {
                        fill: color(frame.back.color).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zpp
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zpp
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zpp
                            }],
                        enabled: frame.back.visible
                    }]
            });
            chart.frameShapes.front[verb]({
                'class': 'highcharts-3d-frame highcharts-3d-frame-front',
                zIndex: frame.front.frontFacing ? -1000 : 1000,
                faces: [{
                        fill: color(frame.front.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.front.visible && !frame.bottom.visible
                    },
                    {
                        fill: color(frame.front.color).brighten(0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }],
                        enabled: frame.front.visible && !frame.top.visible
                    },
                    {
                        fill: color(frame.front.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }],
                        enabled: frame.front.visible && !frame.left.visible
                    },
                    {
                        fill: color(frame.front.color).brighten(-0.1).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xp,
                                y: ym,
                                z: zm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.front.visible && !frame.right.visible
                    },
                    {
                        fill: color(frame.front.color).get(),
                        vertexes: [{
                                x: xp,
                                y: ym,
                                z: zm
                            }, {
                                x: xm,
                                y: ym,
                                z: zm
                            }, {
                                x: xm,
                                y: yp,
                                z: zm
                            }, {
                                x: xp,
                                y: yp,
                                z: zm
                            }],
                        enabled: frame.front.visible
                    },
                    {
                        fill: color(frame.front.color).get(),
                        vertexes: [{
                                x: xpp,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ypp,
                                z: zmm
                            }, {
                                x: xmm,
                                y: ymm,
                                z: zmm
                            }, {
                                x: xpp,
                                y: ymm,
                                z: zmm
                            }],
                        enabled: frame.front.visible
                    }]
            });
        }
    }
    /**
     * Add the required CSS classes for column sides (#6018)
     * @internal
     */
    function onAfterGetContainer() {
        if (this.styledMode) {
            // Add definitions used by brighter and darker faces of the cuboids.
            [{
                    name: 'darker',
                    slope: 0.6
                }, {
                    name: 'brighter',
                    slope: 1.4
                }].forEach(function (cfg) {
                this.renderer.definition({
                    tagName: 'filter',
                    attributes: {
                        id: 'highcharts-' + cfg.name
                    },
                    children: [{
                            tagName: 'feComponentTransfer',
                            children: [{
                                    tagName: 'feFuncR',
                                    attributes: {
                                        type: 'linear',
                                        slope: cfg.slope
                                    }
                                }, {
                                    tagName: 'feFuncG',
                                    attributes: {
                                        type: 'linear',
                                        slope: cfg.slope
                                    }
                                }, {
                                    tagName: 'feFuncB',
                                    attributes: {
                                        type: 'linear',
                                        slope: cfg.slope
                                    }
                                }]
                        }]
                });
            }, this);
        }
    }
    /**
     * Legacy support for HC < 6 to make 'scatter' series in a 3D chart route to
     * the real 'scatter3d' series type. (#8407)
     * @internal
     */
    function onAfterInit() {
        const options = this.options;
        if (this.is3d()) {
            (options.series || []).forEach(function (s) {
                const type = (s.type ||
                    options.chart.type ||
                    options.chart.defaultSeriesType);
                if (type === 'scatter') {
                    s.type = 'scatter3d';
                }
            });
        }
    }
    /** @internal */
    function onAfterSetChartSize() {
        const chart = this, options3d = chart.options.chart.options3d;
        if (chart.chart3d &&
            chart.is3d()) {
            // Add a 0-360 normalization for alfa and beta angles in 3d graph
            if (options3d) {
                options3d.alpha = options3d.alpha % 360 +
                    (options3d.alpha >= 0 ? 0 : 360);
                options3d.beta = options3d.beta % 360 +
                    (options3d.beta >= 0 ? 0 : 360);
            }
            const inverted = chart.inverted, clipBox = chart.clipBox, margin = chart.margin, x = inverted ? 'y' : 'x', y = inverted ? 'x' : 'y', w = inverted ? 'height' : 'width', h = inverted ? 'width' : 'height';
            clipBox[x] = -(margin[3] || 0);
            clipBox[y] = -(margin[0] || 0);
            clipBox[w] = (chart.chartWidth + (margin[3] || 0) + (margin[1] || 0));
            clipBox[h] = (chart.chartHeight + (margin[0] || 0) + (margin[2] || 0));
            // Set scale, used later in perspective method():
            // getScale uses perspective, so scale3d has to be reset.
            chart.scale3d = 1;
            if (options3d.fitToPlot === true) {
                chart.scale3d = chart.chart3d.getScale(options3d.depth);
            }
            // Recalculate the 3d frame with every call of setChartSize,
            // instead of doing it after every redraw(). It avoids ticks
            // and axis title outside of chart.
            chart.chart3d.frame3d = chart.chart3d.get3dFrame(); // #7942
        }
    }
    /** @internal */
    function onBeforeRedraw() {
        if (this.is3d()) {
            // Set to force a redraw of all elements
            this.isDirtyBox = true;
        }
    }
    /** @internal */
    function onBeforeRender() {
        if (this.chart3d && this.is3d()) {
            this.chart3d.frame3d = this.chart3d.get3dFrame();
        }
    }
    /** @internal */
    function onInit() {
        if (!this.chart3d) {
            this.chart3d = new Additions(this);
        }
    }
    /** @internal */
    function wrapIsInsidePlot(proceed) {
        return this.is3d() || proceed.apply(this, [].slice.call(arguments, 1));
    }
    /**
     * Draw the series in the reverse order (#3803, #3917)
     * @internal
     */
    function wrapRenderSeries(proceed) {
        let series, i = this.series.length;
        if (this.is3d()) {
            while (i--) {
                series = this.series[i];
                series.translate();
                series.render();
            }
        }
        else {
            proceed.call(this);
        }
    }
    /** @internal */
    function wrapSetClassName(proceed) {
        proceed.apply(this, [].slice.call(arguments, 1));
        if (this.is3d()) {
            this.container.className += ' highcharts-3d-chart';
        }
    }
    /* *
     *
     *  Class
     *
     * */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /** @internal */
        constructor(chart) {
            this.chart = chart;
        }
        /* *
         *
         *  Functions
         *
         * */
        /** @internal */
        get3dFrame() {
            const chart = this.chart, options3d = chart.options.chart.options3d, frameOptions = options3d.frame, xm = chart.plotLeft, xp = chart.plotLeft + chart.plotWidth, ym = chart.plotTop, yp = chart.plotTop + chart.plotHeight, zm = 0, zp = options3d.depth, faceOrientation = function (vertexes) {
                const area = Chart3D_shapeArea3D(vertexes, chart);
                // Give it 0.5 squared-pixel as a margin for rounding errors
                if (area > 0.5) {
                    return 1;
                }
                if (area < -0.5) {
                    return -1;
                }
                return 0;
            }, bottomOrientation = faceOrientation([
                { x: xm, y: yp, z: zp },
                { x: xp, y: yp, z: zp },
                { x: xp, y: yp, z: zm },
                { x: xm, y: yp, z: zm }
            ]), topOrientation = faceOrientation([
                { x: xm, y: ym, z: zm },
                { x: xp, y: ym, z: zm },
                { x: xp, y: ym, z: zp },
                { x: xm, y: ym, z: zp }
            ]), leftOrientation = faceOrientation([
                { x: xm, y: ym, z: zm },
                { x: xm, y: ym, z: zp },
                { x: xm, y: yp, z: zp },
                { x: xm, y: yp, z: zm }
            ]), rightOrientation = faceOrientation([
                { x: xp, y: ym, z: zp },
                { x: xp, y: ym, z: zm },
                { x: xp, y: yp, z: zm },
                { x: xp, y: yp, z: zp }
            ]), frontOrientation = faceOrientation([
                { x: xm, y: yp, z: zm },
                { x: xp, y: yp, z: zm },
                { x: xp, y: ym, z: zm },
                { x: xm, y: ym, z: zm }
            ]), backOrientation = faceOrientation([
                { x: xm, y: ym, z: zp },
                { x: xp, y: ym, z: zp },
                { x: xp, y: yp, z: zp },
                { x: xm, y: yp, z: zp }
            ]), defaultShowFront = false, defaultShowBack = true;
            let defaultShowBottom = false, defaultShowTop = false, defaultShowLeft = false, defaultShowRight = false;
            // The 'default' criteria to visible faces of the frame is looking
            // up every axis to decide whenever the left/right//top/bottom sides
            // of the frame will be shown
            []
                .concat(chart.xAxis, chart.yAxis, chart.zAxis)
                .forEach(function (axis) {
                if (axis) {
                    if (axis.horiz) {
                        if (axis.opposite) {
                            defaultShowTop = true;
                        }
                        else {
                            defaultShowBottom = true;
                        }
                    }
                    else {
                        if (axis.opposite) {
                            defaultShowRight = true;
                        }
                        else {
                            defaultShowLeft = true;
                        }
                    }
                }
            });
            const getFaceOptions = function (sources, faceOrientation, defaultVisible) {
                const faceAttrs = ['size', 'color', 'visible'], options = {};
                for (let i = 0; i < faceAttrs.length; i++) {
                    const attr = faceAttrs[i];
                    for (let j = 0; j < sources.length; j++) {
                        if (typeof sources[j] === 'object') {
                            const val = sources[j][attr];
                            if (typeof val !== 'undefined' && val !== null) {
                                options[attr] = val;
                                break;
                            }
                        }
                    }
                }
                let isVisible = defaultVisible;
                if (options.visible === true || options.visible === false) {
                    isVisible = options.visible;
                }
                else if (options.visible === 'auto') {
                    isVisible = faceOrientation > 0;
                }
                return {
                    size: pick(options.size, 1),
                    color: pick(options.color, 'none'),
                    frontFacing: faceOrientation > 0,
                    visible: isVisible
                };
            };
            // Docs @TODO: Add all frame options (left, right, top, bottom,
            // front, back) to apioptions JSDoc once the new system is up.
            const ret = {
                axes: {},
                // FIXME: Previously, left/right, top/bottom and front/back
                // pairs shared size and color.
                // For compatibility and consistency sake, when one face have
                // size/color/visibility set, the opposite face will default to
                // the same values. Also, left/right used to be called 'side',
                // so that's also added as a fallback.
                bottom: getFaceOptions([frameOptions.bottom, frameOptions.top, frameOptions], bottomOrientation, defaultShowBottom),
                top: getFaceOptions([frameOptions.top, frameOptions.bottom, frameOptions], topOrientation, defaultShowTop),
                left: getFaceOptions([
                    frameOptions.left,
                    frameOptions.right,
                    frameOptions.side,
                    frameOptions
                ], leftOrientation, defaultShowLeft),
                right: getFaceOptions([
                    frameOptions.right,
                    frameOptions.left,
                    frameOptions.side,
                    frameOptions
                ], rightOrientation, defaultShowRight),
                back: getFaceOptions([frameOptions.back, frameOptions.front, frameOptions], backOrientation, defaultShowBack),
                front: getFaceOptions([frameOptions.front, frameOptions.back, frameOptions], frontOrientation, defaultShowFront)
            };
            // Decide the bast place to put axis title/labels based on the
            // visible faces. Ideally, The labels can only be on the edge
            // between a visible face and an invisible one. Also, the Y label
            // should be one the left-most edge (right-most if opposite).
            if (options3d.axisLabelPosition === 'auto') {
                const isValidEdge = function (face1, face2) {
                    return ((face1.visible !== face2.visible) ||
                        (face1.visible &&
                            face2.visible &&
                            (face1.frontFacing !== face2.frontFacing)));
                };
                const yEdges = [];
                if (isValidEdge(ret.left, ret.front)) {
                    yEdges.push({
                        y: (ym + yp) / 2,
                        x: xm,
                        z: zm,
                        xDir: { x: 1, y: 0, z: 0 }
                    });
                }
                if (isValidEdge(ret.left, ret.back)) {
                    yEdges.push({
                        y: (ym + yp) / 2,
                        x: xm,
                        z: zp,
                        xDir: { x: 0, y: 0, z: -1 }
                    });
                }
                if (isValidEdge(ret.right, ret.front)) {
                    yEdges.push({
                        y: (ym + yp) / 2,
                        x: xp,
                        z: zm,
                        xDir: { x: 0, y: 0, z: 1 }
                    });
                }
                if (isValidEdge(ret.right, ret.back)) {
                    yEdges.push({
                        y: (ym + yp) / 2,
                        x: xp,
                        z: zp,
                        xDir: { x: -1, y: 0, z: 0 }
                    });
                }
                const xBottomEdges = [];
                if (isValidEdge(ret.bottom, ret.front)) {
                    xBottomEdges.push({
                        x: (xm + xp) / 2,
                        y: yp,
                        z: zm,
                        xDir: { x: 1, y: 0, z: 0 }
                    });
                }
                if (isValidEdge(ret.bottom, ret.back)) {
                    xBottomEdges.push({
                        x: (xm + xp) / 2,
                        y: yp,
                        z: zp,
                        xDir: { x: -1, y: 0, z: 0 }
                    });
                }
                const xTopEdges = [];
                if (isValidEdge(ret.top, ret.front)) {
                    xTopEdges.push({
                        x: (xm + xp) / 2,
                        y: ym,
                        z: zm,
                        xDir: { x: 1, y: 0, z: 0 }
                    });
                }
                if (isValidEdge(ret.top, ret.back)) {
                    xTopEdges.push({
                        x: (xm + xp) / 2,
                        y: ym,
                        z: zp,
                        xDir: { x: -1, y: 0, z: 0 }
                    });
                }
                const zBottomEdges = [];
                if (isValidEdge(ret.bottom, ret.left)) {
                    zBottomEdges.push({
                        z: (zm + zp) / 2,
                        y: yp,
                        x: xm,
                        xDir: { x: 0, y: 0, z: -1 }
                    });
                }
                if (isValidEdge(ret.bottom, ret.right)) {
                    zBottomEdges.push({
                        z: (zm + zp) / 2,
                        y: yp,
                        x: xp,
                        xDir: { x: 0, y: 0, z: 1 }
                    });
                }
                const zTopEdges = [];
                if (isValidEdge(ret.top, ret.left)) {
                    zTopEdges.push({
                        z: (zm + zp) / 2,
                        y: ym,
                        x: xm,
                        xDir: { x: 0, y: 0, z: -1 }
                    });
                }
                if (isValidEdge(ret.top, ret.right)) {
                    zTopEdges.push({
                        z: (zm + zp) / 2,
                        y: ym,
                        x: xp,
                        xDir: { x: 0, y: 0, z: 1 }
                    });
                }
                const pickEdge = function (edges, axis, mult) {
                    if (edges.length === 0) {
                        return null;
                    }
                    if (edges.length === 1) {
                        return edges[0];
                    }
                    const projections = Chart3D_perspective(edges, chart, false);
                    let best = 0;
                    for (let i = 1; i < projections.length; i++) {
                        if (mult * projections[i][axis] >
                            mult * projections[best][axis]) {
                            best = i;
                        }
                        else if ((mult * projections[i][axis] ===
                            mult * projections[best][axis]) &&
                            (projections[i].z < projections[best].z)) {
                            best = i;
                        }
                    }
                    return edges[best];
                };
                ret.axes = {
                    y: {
                        'left': pickEdge(yEdges, 'x', -1),
                        'right': pickEdge(yEdges, 'x', +1)
                    },
                    x: {
                        'top': pickEdge(xTopEdges, 'y', -1),
                        'bottom': pickEdge(xBottomEdges, 'y', +1)
                    },
                    z: {
                        'top': pickEdge(zTopEdges, 'y', -1),
                        'bottom': pickEdge(zBottomEdges, 'y', +1)
                    }
                };
            }
            else {
                ret.axes = {
                    y: {
                        'left': {
                            x: xm, z: zm, xDir: { x: 1, y: 0, z: 0 }
                        },
                        'right': {
                            x: xp, z: zm, xDir: { x: 0, y: 0, z: 1 }
                        }
                    },
                    x: {
                        'top': {
                            y: ym, z: zm, xDir: { x: 1, y: 0, z: 0 }
                        },
                        'bottom': {
                            y: yp,
                            z: zm,
                            xDir: { x: 1, y: 0, z: 0 }
                        }
                    },
                    z: {
                        'top': {
                            x: defaultShowLeft ? xp : xm,
                            y: ym,
                            xDir: defaultShowLeft ?
                                { x: 0, y: 0, z: 1 } :
                                { x: 0, y: 0, z: -1 }
                        },
                        'bottom': {
                            x: defaultShowLeft ? xp : xm,
                            y: yp,
                            xDir: defaultShowLeft ?
                                { x: 0, y: 0, z: 1 } :
                                { x: 0, y: 0, z: -1 }
                        }
                    }
                };
            }
            return ret;
        }
        /**
         * Calculate scale of the 3D view. That is required to fit chart's 3D
         * projection into the actual plotting area. Reported as #4933.
         *
         * **Note:**
         * This function should ideally take the plot values instead of a chart
         * object, but since the chart object is needed for perspective it is
         * not practical. Possible to make both getScale and perspective more
         * logical and also immutable.
         *
         * @internal
         * @function getScale
         *
         * @param {number} depth
         * The depth of the chart
         *
         * @return {number}
         * The scale to fit the 3D chart into the plotting area.
         *
         * @requires highcharts-3d
         */
        getScale(depth) {
            const chart = this.chart, plotLeft = chart.plotLeft, plotRight = chart.plotWidth + plotLeft, plotTop = chart.plotTop, plotBottom = chart.plotHeight + plotTop, originX = plotLeft + chart.plotWidth / 2, originY = plotTop + chart.plotHeight / 2, bbox3d = {
                minX: Number.MAX_VALUE,
                maxX: -Number.MAX_VALUE,
                minY: Number.MAX_VALUE,
                maxY: -Number.MAX_VALUE
            };
            let corners, scale = 1;
            // Top left corners:
            corners = [{
                    x: plotLeft,
                    y: plotTop,
                    z: 0
                }, {
                    x: plotLeft,
                    y: plotTop,
                    z: depth
                }];
            // Top right corners:
            [0, 1].forEach(function (i) {
                corners.push({
                    x: plotRight,
                    y: corners[i].y,
                    z: corners[i].z
                });
            });
            // All bottom corners:
            [0, 1, 2, 3].forEach(function (i) {
                corners.push({
                    x: corners[i].x,
                    y: plotBottom,
                    z: corners[i].z
                });
            });
            // Calculate 3D corners:
            corners = Chart3D_perspective(corners, chart, false);
            // Get bounding box of 3D element:
            corners.forEach(function (corner) {
                bbox3d.minX = Math.min(bbox3d.minX, corner.x);
                bbox3d.maxX = Math.max(bbox3d.maxX, corner.x);
                bbox3d.minY = Math.min(bbox3d.minY, corner.y);
                bbox3d.maxY = Math.max(bbox3d.maxY, corner.y);
            });
            // Left edge:
            if (plotLeft > bbox3d.minX) {
                scale = Math.min(scale, 1 - Math.abs((plotLeft + originX) / (bbox3d.minX + originX)) % 1);
            }
            // Right edge:
            if (plotRight < bbox3d.maxX) {
                scale = Math.min(scale, (plotRight - originX) / (bbox3d.maxX - originX));
            }
            // Top edge:
            if (plotTop > bbox3d.minY) {
                if (bbox3d.minY < 0) {
                    scale = Math.min(scale, (plotTop + originY) / (-bbox3d.minY + plotTop + originY));
                }
                else {
                    scale = Math.min(scale, 1 - (plotTop + originY) / (bbox3d.minY + originY) % 1);
                }
            }
            // Bottom edge:
            if (plotBottom < bbox3d.maxY) {
                scale = Math.min(scale, Math.abs((plotBottom - originY) / (bbox3d.maxY - originY)));
            }
            return scale;
        }
    }
    Chart3D.Additions = Additions;
})(Chart3D || (Chart3D = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chart_Chart3D = (Chart3D);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Note: As of v5.0.12, `frame.left` or `frame.right` should be used instead.
 *
 * The side for the frame around a 3D chart.
 *
 * @deprecated
 * @since     4.0
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption chart.options3d.frame.side
 */
/**
 * The color of the panel.
 *
 * @deprecated
 * @type      {Highcharts.ColorType}
 * @default   transparent
 * @since     4.0
 * @product   highcharts
 * @apioption chart.options3d.frame.side.color
 */
/**
 * The thickness of the panel.
 *
 * @deprecated
 * @type      {number}
 * @default   1
 * @since     4.0
 * @product   highcharts
 * @apioption chart.options3d.frame.side.size
 */
''; // Keeps doclets above in JS file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/Area3D/Area3DSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Grzegorz Blachliński
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: Area3DSeries_perspective } = Core_Math3D;

const { line: { prototype: lineProto } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

/* *
 *
 *  Functions
 *
 * */
/**
 * Adds 3D behavior to the area series.
 * @internal
 */
function compose(AreaSeriesClass) {
    if (pushUnique(composed, 'Area3DSeries')) {
        wrap(AreaSeriesClass.prototype, 'getGraphPath', wrapAreaSeriesGetGraphPath);
    }
}
/**
 * Extends the area path with a projected bottom path in 3D charts.
 * @internal
 */
function wrapAreaSeriesGetGraphPath(proceed) {
    const series = this, svgPath = proceed.apply(series, [].slice.call(arguments, 1));
    // Do not do this if the chart is not 3D
    if (!series.chart.is3d()) {
        return svgPath;
    }
    const getGraphPath = lineProto.getGraphPath, options = series.options, translatedThreshold = Math.round(// #10909
    series.yAxis.getThreshold(options.threshold));
    let bottomPoints = [];
    if (series.rawPointsX) {
        for (let i = 0; i < series.points.length; i++) {
            bottomPoints.push({
                x: series.rawPointsX[i],
                y: options.stacking ?
                    series.points[i].yBottom : translatedThreshold,
                z: series.zPadding
            });
        }
    }
    const options3d = series.chart.options.chart.options3d;
    bottomPoints = Area3DSeries_perspective(bottomPoints, series.chart, true).map((point) => ({ plotX: point.x, plotY: point.y, plotZ: point.z }));
    if (series.group && options3d && options3d.depth && options3d.beta) {
        // Markers should take the global zIndex of series group.
        if (series.markerGroup) {
            series.markerGroup.add(series.group);
            series.markerGroup.attr({
                translateX: 0,
                translateY: 0
            });
        }
        series.group.attr({
            zIndex: Math.max(1, (options3d.beta > 270 || options3d.beta < 90) ?
                options3d.depth - Math.round(series.zPadding || 0) :
                Math.round(series.zPadding || 0))
        });
    }
    bottomPoints.reversed = true;
    const bottomPath = getGraphPath.call(series, bottomPoints, true, true);
    if (bottomPath[0] && bottomPath[0][0] === 'M') {
        bottomPath[0] = ['L', bottomPath[0][1], bottomPath[0][2]];
    }
    if (series.areaPath) {
        // Remove previously used bottomPath and add the new one.
        const areaPath = series.areaPath.splice(0, series.areaPath.length / 2).concat(bottomPath);
        // Use old xMap in the new areaPath
        areaPath.xMap = series.areaPath.xMap;
        series.areaPath = areaPath;
    }
    series.graphPath = svgPath;
    return svgPath;
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const Area3DSeries = {
    compose
};
/** @internal */
/* harmony default export */ const Area3D_Area3DSeries = (Area3DSeries);

;// ./code/es-modules/Core/Axis/Axis3DDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extension for 3d axes
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
 * @optionparent xAxis
 */
const Axis3DDefaults = {
    labels: {
        /**
         * Defines how the labels are be repositioned according to the 3D
         * chart orientation.
         *
         * - `'offset'`: Maintain a fixed horizontal/vertical distance from
         *   the tick marks, despite the chart orientation. This is the
         *   backwards compatible behavior, and causes skewing of X and Z
         *   axes.
         *
         * - `'chart'`: Preserve 3D position relative to the chart. This
         *   looks nice, but hard to read if the text isn't forward-facing.
         *
         * - `'flap'`: Rotated text along the axis to compensate for the
         *   chart orientation. This tries to maintain text as legible as
         *   possible on all orientations.
         *
         * - `'ortho'`: Rotated text along the axis direction so that the
         *   labels are orthogonal to the axis. This is very similar to
         *   `'flap'`, but prevents skewing the labels (X and Y scaling are
         *   still present).
         *
         * @sample highcharts/3d/skewed-labels/
         *         Skewed labels
         *
         * @since      5.0.15
         * @validvalue ['offset', 'chart', 'flap', 'ortho']
         * @product    highcharts
         * @requires   highcharts-3d
         */
        position3d: 'offset',
        /**
         * If enabled, the axis labels will skewed to follow the
         * perspective.
         *
         * This will fix overlapping labels and titles, but texts become
         * less legible due to the distortion.
         *
         * The final appearance depends heavily on `labels.position3d`.
         *
         * @sample highcharts/3d/skewed-labels/
         *         Skewed labels
         *
         * @since    5.0.15
         * @product  highcharts
         * @requires highcharts-3d
         */
        skew3d: false
    },
    title: {
        /**
         * Defines how the title is repositioned according to the 3D chart
         * orientation.
         *
         * - `'offset'`: Maintain a fixed horizontal/vertical distance from
         *   the tick marks, despite the chart orientation. This is the
         *   backwards compatible behavior, and causes skewing of X and Z
         *   axes.
         *
         * - `'chart'`: Preserve 3D position relative to the chart. This
         *   looks nice, but hard to read if the text isn't forward-facing.
         *
         * - `'flap'`: Rotated text along the axis to compensate for the
         *   chart orientation. This tries to maintain text as legible as
         *   possible on all orientations.
         *
         * - `'ortho'`: Rotated text along the axis direction so that the
         *   labels are orthogonal to the axis. This is very similar to
         *   `'flap'`, but prevents skewing the labels (X and Y scaling are
         *   still present).
         *
         * - `undefined`: Will use the config from `labels.position3d`
         *
         * @sample highcharts/3d/skewed-labels/
         *         Skewed labels
         *
         * @type     {"offset"|"chart"|"flap"|"ortho"|null}
         * @since    5.0.15
         * @product  highcharts
         * @requires highcharts-3d
         */
        position3d: null,
        /**
         * If enabled, the axis title will skewed to follow the perspective.
         *
         * This will fix overlapping labels and titles, but texts become
         * less legible due to the distortion.
         *
         * The final appearance depends heavily on `title.position3d`.
         *
         * A `null` value will use the config from `labels.skew3d`.
         *
         * @sample highcharts/3d/skewed-labels/
         *         Skewed labels
         *
         * @type     {boolean|null}
         * @since    5.0.15
         * @product  highcharts
         * @requires highcharts-3d
         */
        skew3d: null
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_Axis3DDefaults = (Axis3DDefaults);

;// ./code/es-modules/Core/Axis/Tick3DComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extension for 3d axes
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed: Tick3DComposition_composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Functions
 *
 * */
/** @internal */
function Tick3DComposition_compose(TickClass) {
    if (pushUnique(Tick3DComposition_composed, 'Axis.Tick3D')) {
        addEvent(TickClass, 'afterGetLabelPosition', onTickAfterGetLabelPosition);
        wrap(TickClass.prototype, 'getMarkPath', wrapTickGetMarkPath);
    }
}
/** @internal */
function onTickAfterGetLabelPosition(e) {
    const axis3D = this.axis.axis3D;
    if (axis3D) {
        extend(e.pos, axis3D.fix3dPosition(e.pos));
    }
}
/** @internal */
function wrapTickGetMarkPath(proceed) {
    const axis3D = this.axis.axis3D, path = proceed.apply(this, [].slice.call(arguments, 1));
    if (axis3D) {
        const start = path[0];
        const end = path[1];
        if (start[0] === 'M' && end[0] === 'L') {
            const pArr = [
                axis3D.fix3dPosition({ x: start[1], y: start[2], z: 0 }),
                axis3D.fix3dPosition({ x: end[1], y: end[2], z: 0 })
            ];
            return this.axis.chart.renderer.toLineSegments(pArr);
        }
    }
    return path;
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const Tick3DAdditions = {
    compose: Tick3DComposition_compose
};
/** @internal */
/* harmony default export */ const Tick3DComposition = (Tick3DAdditions);

;// ./code/es-modules/Core/Axis/Axis3DComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extension for 3d axes
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { defaultOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { deg2rad: Axis3DComposition_deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: Axis3DComposition_perspective, perspective3D: Axis3DComposition_perspective3D, shapeArea: Axis3DComposition_shapeArea } = Core_Math3D;


/* *
 *
 *  Functions
 *
 * */
/** @internal */
function onAxisAfterSetOptions() {
    const axis = this, chart = axis.chart, options = axis.options;
    if (chart.is3d?.() && axis.coll !== 'colorAxis') {
        options.tickWidth = pick(options.tickWidth, 0);
        options.gridLineWidth = pick(options.gridLineWidth, 1);
    }
}
/** @internal */
function onAxisDrawCrosshair(e) {
    const axis = this;
    if (axis.chart.is3d() &&
        axis.coll !== 'colorAxis') {
        if (e.point) {
            e.point.crosshairPos = axis.isXAxis ?
                e.point.axisXpos :
                axis.len - e.point.axisYpos;
        }
    }
}
/** @internal */
function onAxisInit() {
    const axis = this;
    if (!axis.axis3D) {
        axis.axis3D = new Axis3DAdditions(axis);
    }
}
/**
 * Do not draw axis lines in 3D.
 * @internal
 */
function wrapAxisGetLinePath(proceed) {
    const axis = this;
    // Do not do this if the chart is not 3D
    if (!axis.chart.is3d() || axis.coll === 'colorAxis') {
        return proceed.apply(axis, [].slice.call(arguments, 1));
    }
    return [];
}
/** @internal */
function wrapAxisGetPlotBandPath(proceed) {
    // Do not do this if the chart is not 3D
    if (!this.chart.is3d() || this.coll === 'colorAxis') {
        return proceed.apply(this, [].slice.call(arguments, 1));
    }
    const args = arguments, from = args[1], to = args[2], path = [], fromPath = this.getPlotLinePath({ value: from }), toPath = this.getPlotLinePath({ value: to });
    if (fromPath && toPath) {
        for (let i = 0; i < fromPath.length; i += 2) {
            const fromStartSeg = fromPath[i], fromEndSeg = fromPath[i + 1], toStartSeg = toPath[i], toEndSeg = toPath[i + 1];
            if (fromStartSeg[0] === 'M' &&
                fromEndSeg[0] === 'L' &&
                toStartSeg[0] === 'M' &&
                toEndSeg[0] === 'L') {
                path.push(fromStartSeg, fromEndSeg, toEndSeg, 
                // `lineTo` instead of `moveTo`
                ['L', toStartSeg[1], toStartSeg[2]], ['Z']);
            }
        }
    }
    return path;
}
/** @internal */
function wrapAxisGetPlotLinePath(proceed) {
    const axis = this, axis3D = axis.axis3D, chart = axis.chart, path = proceed.apply(axis, [].slice.call(arguments, 1));
    // Do not do this if the chart is not 3D
    if (axis.coll === 'colorAxis' ||
        !chart.chart3d ||
        !chart.is3d()) {
        return path;
    }
    if (path === null) {
        return path;
    }
    const options3d = chart.options.chart.options3d, d = axis.isZAxis ? chart.plotWidth : options3d.depth, frame = chart.chart3d.frame3d, startSegment = path[0], endSegment = path[1];
    let pArr, pathSegments = [];
    if (startSegment[0] === 'M' && endSegment[0] === 'L') {
        pArr = [
            axis3D.swapZ({ x: startSegment[1], y: startSegment[2], z: 0 }),
            axis3D.swapZ({ x: startSegment[1], y: startSegment[2], z: d }),
            axis3D.swapZ({ x: endSegment[1], y: endSegment[2], z: 0 }),
            axis3D.swapZ({ x: endSegment[1], y: endSegment[2], z: d })
        ];
        if (!this.horiz) { // Y-Axis
            if (frame.front.visible) {
                pathSegments.push(pArr[0], pArr[2]);
            }
            if (frame.back.visible) {
                pathSegments.push(pArr[1], pArr[3]);
            }
            if (frame.left.visible) {
                pathSegments.push(pArr[0], pArr[1]);
            }
            if (frame.right.visible) {
                pathSegments.push(pArr[2], pArr[3]);
            }
        }
        else if (this.isZAxis) { // Z-Axis
            if (frame.left.visible) {
                pathSegments.push(pArr[0], pArr[2]);
            }
            if (frame.right.visible) {
                pathSegments.push(pArr[1], pArr[3]);
            }
            if (frame.top.visible) {
                pathSegments.push(pArr[0], pArr[1]);
            }
            if (frame.bottom.visible) {
                pathSegments.push(pArr[2], pArr[3]);
            }
        }
        else { // X-Axis
            if (frame.front.visible) {
                pathSegments.push(pArr[0], pArr[2]);
            }
            if (frame.back.visible) {
                pathSegments.push(pArr[1], pArr[3]);
            }
            if (frame.top.visible) {
                pathSegments.push(pArr[0], pArr[1]);
            }
            if (frame.bottom.visible) {
                pathSegments.push(pArr[2], pArr[3]);
            }
        }
        pathSegments = Axis3DComposition_perspective(pathSegments, this.chart, false);
    }
    return chart.renderer.toLineSegments(pathSegments);
}
/**
 * Wrap getSlotWidth function to calculate individual width value for each
 * slot (#8042).
 * @internal
 */
function wrapAxisGetSlotWidth(proceed, tick) {
    const axis = this, { chart, gridGroup, tickPositions, ticks } = axis;
    if (axis.categories &&
        chart.frameShapes &&
        chart.is3d() &&
        gridGroup &&
        tick &&
        tick.label) {
        const firstGridLine = (gridGroup.element.childNodes[0].getBBox()), frame3DLeft = chart.frameShapes.left.getBBox(), options3d = chart.options.chart.options3d, origin = {
            x: chart.plotWidth / 2,
            y: chart.plotHeight / 2,
            z: options3d.depth / 2,
            vd: (pick(options3d.depth, 1) *
                pick(options3d.viewDistance, 0))
        }, index = tickPositions.indexOf(tick.pos), prevTick = ticks[tickPositions[index - 1]], nextTick = ticks[tickPositions[index + 1]];
        let labelPos, prevLabelPos, nextLabelPos;
        // Check whether the tick is not the first one and previous tick
        // exists, then calculate position of previous label.
        if (prevTick?.label?.xy) {
            prevLabelPos = Axis3DComposition_perspective3D({
                x: prevTick.label.xy.x,
                y: prevTick.label.xy.y,
                z: null
            }, origin, origin.vd);
        }
        // If next label position is defined, then recalculate its position
        // basing on the perspective.
        if (nextTick?.label?.xy) {
            nextLabelPos = Axis3DComposition_perspective3D({
                x: nextTick.label.xy.x,
                y: nextTick.label.xy.y,
                z: null
            }, origin, origin.vd);
        }
        labelPos = {
            x: tick.label.xy.x,
            y: tick.label.xy.y,
            z: null
        };
        labelPos = Axis3DComposition_perspective3D(labelPos, origin, origin.vd);
        // If tick is first one, check whether next label position is
        // already calculated, then return difference between the first and
        // the second label. If there is no next label position calculated,
        // return the difference between the first grid line and left 3d
        // frame.
        return Math.abs(prevLabelPos ?
            labelPos.x - prevLabelPos.x : nextLabelPos ?
            nextLabelPos.x - labelPos.x :
            firstGridLine.x - frame3DLeft.x);
    }
    return proceed.apply(axis, [].slice.call(arguments, 1));
}
/** @internal */
function wrapAxisGetTitlePosition(proceed) {
    const pos = proceed.apply(this, [].slice.call(arguments, 1));
    return this.axis3D ?
        this.axis3D.fix3dPosition(pos, true) :
        pos;
}
/* *
 *
 *  Class
 *
 * */
/**
 * Adds 3D support to axes.
 * @internal
 * @class
 */
class Axis3DAdditions {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends axis class with 3D support.
     * @internal
     */
    static compose(AxisClass, TickClass) {
        Tick3DComposition.compose(TickClass);
        if (!AxisClass.keepProps.includes('axis3D')) {
            merge(true, defaultOptions.xAxis, Axis_Axis3DDefaults);
            AxisClass.keepProps.push('axis3D');
            addEvent(AxisClass, 'init', onAxisInit);
            addEvent(AxisClass, 'afterSetOptions', onAxisAfterSetOptions);
            addEvent(AxisClass, 'drawCrosshair', onAxisDrawCrosshair);
            const axisProto = AxisClass.prototype;
            wrap(axisProto, 'getLinePath', wrapAxisGetLinePath);
            wrap(axisProto, 'getPlotBandPath', wrapAxisGetPlotBandPath);
            wrap(axisProto, 'getPlotLinePath', wrapAxisGetPlotLinePath);
            wrap(axisProto, 'getSlotWidth', wrapAxisGetSlotWidth);
            wrap(axisProto, 'getTitlePosition', wrapAxisGetTitlePosition);
        }
    }
    /* *
     *
     *  Constructors
     *
     * */
    /** @internal */
    constructor(axis) {
        this.axis = axis;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     * @param {Highcharts.Position3DObject} pos
     * Position to fix.
     * @param {boolean} [isTitle]
     * Whether this is a title position.
     * @return {Highcharts.Position3DObject}
     * Fixed position.
     */
    fix3dPosition(pos, isTitle) {
        const axis3D = this;
        const axis = axis3D.axis;
        const chart = axis.chart;
        // Do not do this if the chart is not 3D
        if (axis.coll === 'colorAxis' ||
            !chart.chart3d ||
            !chart.is3d()) {
            return pos;
        }
        const alpha = Axis3DComposition_deg2rad * chart.options.chart.options3d.alpha, beta = Axis3DComposition_deg2rad * chart.options.chart.options3d.beta, positionMode = pick(isTitle && axis.options.title.position3d, axis.options.labels.position3d), skew = pick(isTitle && axis.options.title.skew3d, axis.options.labels.skew3d), frame = chart.chart3d.frame3d, plotLeft = chart.plotLeft, plotRight = chart.plotWidth + plotLeft, plotTop = chart.plotTop, plotBottom = chart.plotHeight + plotTop;
        let offsetX = 0, offsetY = 0, vecX, vecY = { x: 0, y: 1, z: 0 }, 
        // Indicates that we are labelling an X or Z axis on the "back" of
        // the chart
        reverseFlap = false;
        pos = axis.axis3D.swapZ({ x: pos.x, y: pos.y, z: 0 });
        if (axis.isZAxis) { // Z Axis
            if (axis.opposite) {
                if (frame.axes.z.top === null) {
                    return {};
                }
                offsetY = pos.y - plotTop;
                pos.x = frame.axes.z.top.x;
                pos.y = frame.axes.z.top.y;
                vecX = frame.axes.z.top.xDir;
                reverseFlap = !frame.top.frontFacing;
            }
            else {
                if (frame.axes.z.bottom === null) {
                    return {};
                }
                offsetY = pos.y - plotBottom;
                pos.x = frame.axes.z.bottom.x;
                pos.y = frame.axes.z.bottom.y;
                vecX = frame.axes.z.bottom.xDir;
                reverseFlap = !frame.bottom.frontFacing;
            }
        }
        else if (axis.horiz) { // X Axis
            if (axis.opposite) {
                if (frame.axes.x.top === null) {
                    return {};
                }
                offsetY = pos.y - plotTop;
                pos.y = frame.axes.x.top.y;
                pos.z = frame.axes.x.top.z;
                vecX = frame.axes.x.top.xDir;
                reverseFlap = !frame.top.frontFacing;
            }
            else {
                if (frame.axes.x.bottom === null) {
                    return {};
                }
                offsetY = pos.y - plotBottom;
                pos.y = frame.axes.x.bottom.y;
                pos.z = frame.axes.x.bottom.z;
                vecX = frame.axes.x.bottom.xDir;
                reverseFlap = !frame.bottom.frontFacing;
            }
        }
        else { // Y Axis
            if (axis.opposite) {
                if (frame.axes.y.right === null) {
                    return {};
                }
                offsetX = pos.x - plotRight;
                pos.x = frame.axes.y.right.x;
                pos.z = frame.axes.y.right.z;
                vecX = frame.axes.y.right.xDir;
                // Rotate 90º on opposite edge
                vecX = { x: vecX.z, y: vecX.y, z: -vecX.x };
            }
            else {
                if (frame.axes.y.left === null) {
                    return {};
                }
                offsetX = pos.x - plotLeft;
                pos.x = frame.axes.y.left.x;
                pos.z = frame.axes.y.left.z;
                vecX = frame.axes.y.left.xDir;
            }
        }
        if (positionMode === 'chart') {
            // Labels preserve their direction relative to the chart
            // nothing to do
        }
        else if (positionMode === 'flap') {
            // Labels are rotated around the axis direction to face the screen
            if (!axis.horiz) { // Y Axis
                vecX = { x: Math.cos(beta), y: 0, z: Math.sin(beta) };
            }
            else { // X and Z Axis
                let sin = Math.sin(alpha);
                const cos = Math.cos(alpha);
                if (reverseFlap) {
                    sin = -sin;
                }
                vecY = { x: vecX.z * sin, y: cos, z: -vecX.x * sin };
            }
        }
        else if (positionMode === 'ortho') {
            // Labels will be rotated to be orthogonal to the axis
            if (!axis.horiz) { // Y Axis
                vecX = { x: Math.cos(beta), y: 0, z: Math.sin(beta) };
            }
            else { // X and Z Axis
                const sina = Math.sin(alpha);
                const cosa = Math.cos(alpha);
                const sinb = Math.sin(beta);
                const cosb = Math.cos(beta);
                const vecZ = { x: sinb * cosa, y: -sina, z: -cosa * cosb };
                vecY = {
                    x: vecX.y * vecZ.z - vecX.z * vecZ.y,
                    y: vecX.z * vecZ.x - vecX.x * vecZ.z,
                    z: vecX.x * vecZ.y - vecX.y * vecZ.x
                };
                let scale = 1 / Math.sqrt(vecY.x * vecY.x + vecY.y * vecY.y + vecY.z * vecY.z);
                if (reverseFlap) {
                    scale = -scale;
                }
                vecY = {
                    x: scale * vecY.x, y: scale * vecY.y, z: scale * vecY.z
                };
            }
        }
        else { // Position mode  == 'offset'
            // Labels will be skewd to maintain vertical / horizontal offsets
            // from axis
            if (!axis.horiz) { // Y Axis
                vecX = { x: Math.cos(beta), y: 0, z: Math.sin(beta) };
            }
            else { // X and Z Axis
                vecY = {
                    x: Math.sin(beta) * Math.sin(alpha),
                    y: Math.cos(alpha),
                    z: -Math.cos(beta) * Math.sin(alpha)
                };
            }
        }
        pos.x += offsetX * vecX.x + offsetY * vecY.x;
        pos.y += offsetX * vecX.y + offsetY * vecY.y;
        pos.z += offsetX * vecX.z + offsetY * vecY.z;
        const projected = Axis3DComposition_perspective([pos], axis.chart)[0];
        if (skew) {
            // Check if the label text would be mirrored
            const isMirrored = Axis3DComposition_shapeArea(Axis3DComposition_perspective([
                pos,
                { x: pos.x + vecX.x, y: pos.y + vecX.y, z: pos.z + vecX.z },
                { x: pos.x + vecY.x, y: pos.y + vecY.y, z: pos.z + vecY.z }
            ], axis.chart)) < 0;
            if (isMirrored) {
                vecX = { x: -vecX.x, y: -vecX.y, z: -vecX.z };
            }
            const pointsProjected = Axis3DComposition_perspective([
                { x: pos.x, y: pos.y, z: pos.z },
                { x: pos.x + vecX.x, y: pos.y + vecX.y, z: pos.z + vecX.z },
                { x: pos.x + vecY.x, y: pos.y + vecY.y, z: pos.z + vecY.z }
            ], axis.chart);
            projected.matrix = [
                pointsProjected[1].x - pointsProjected[0].x,
                pointsProjected[1].y - pointsProjected[0].y,
                pointsProjected[2].x - pointsProjected[0].x,
                pointsProjected[2].y - pointsProjected[0].y,
                projected.x,
                projected.y
            ];
            projected.matrix[4] -= projected.x * projected.matrix[0] +
                projected.y * projected.matrix[2];
            projected.matrix[5] -= projected.x * projected.matrix[1] +
                projected.y * projected.matrix[3];
        }
        return projected;
    }
    /** @internal */
    swapZ(p, insidePlotArea) {
        const axis = this.axis;
        if (axis.isZAxis) {
            const plotLeft = insidePlotArea ? 0 : axis.chart.plotLeft;
            return {
                x: plotLeft + p.z,
                y: p.y,
                z: p.x - plotLeft
            };
        }
        return p;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Axis3DComposition = (Axis3DAdditions);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","RendererRegistry"],"commonjs":["highcharts","RendererRegistry"],"commonjs2":["highcharts","RendererRegistry"],"root":["Highcharts","RendererRegistry"]}
var highcharts_RendererRegistry_commonjs_highcharts_RendererRegistry_commonjs2_highcharts_RendererRegistry_root_Highcharts_RendererRegistry_ = __webpack_require__(608);
var highcharts_RendererRegistry_commonjs_highcharts_RendererRegistry_commonjs2_highcharts_RendererRegistry_root_Highcharts_RendererRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_RendererRegistry_commonjs_highcharts_RendererRegistry_commonjs2_highcharts_RendererRegistry_root_Highcharts_RendererRegistry_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series"],"commonjs":["highcharts","Series"],"commonjs2":["highcharts","Series"],"root":["Highcharts","Series"]}
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_ = __webpack_require__(820);
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_);
;// ./code/es-modules/Core/Series/Series3D.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extension to the Series object in 3D charts.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed: Series3D_composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: Series3D_perspective } = Core_Math3D;


/* *
 *
 *  Class
 *
 * */
/** @internal */
class Series3D extends (highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()) {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass) {
        if (pushUnique(Series3D_composed, 'Core.Series3D')) {
            addEvent(SeriesClass, 'afterTranslate', function () {
                if (this.chart.is3d()) {
                    this.translate3dPoints();
                }
            });
            extend(SeriesClass.prototype, {
                translate3dPoints: Series3D.prototype.translate3dPoints
            });
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Translate the plotX, plotY properties and add plotZ.
     * @internal
     */
    translate3dPoints() {
        const series = this, seriesOptions = series.options, chart = series.chart, zAxis = pick(series.zAxis, chart.options.zAxis[0]), rawPoints = [], rawPointsX = [], stack = seriesOptions.stacking ?
            (isNumber(seriesOptions.stack) ? seriesOptions.stack : 0) :
            series.index || 0;
        let projectedPoint, zValue;
        series.zPadding = stack *
            (seriesOptions.depth || 0 + (seriesOptions.groupZPadding || 1));
        series.points.forEach((rawPoint) => {
            if (zAxis?.translate) {
                zValue = zAxis.logarithmic && zAxis.val2lin ?
                    zAxis.val2lin(rawPoint.z) :
                    rawPoint.z; // #4562
                rawPoint.plotZ = zAxis.translate(zValue);
                rawPoint.isInside = rawPoint.isInside ?
                    (zValue >= zAxis.min &&
                        zValue <= zAxis.max) :
                    false;
            }
            else {
                rawPoint.plotZ = series.zPadding;
            }
            rawPoint.axisXpos = rawPoint.plotX;
            rawPoint.axisYpos = rawPoint.plotY;
            rawPoint.axisZpos = rawPoint.plotZ;
            rawPoints.push({
                x: rawPoint.plotX,
                y: rawPoint.plotY,
                z: rawPoint.plotZ
            });
            rawPointsX.push(rawPoint.plotX || 0);
        });
        series.rawPointsX = rawPointsX;
        const projectedPoints = Series3D_perspective(rawPoints, chart, true);
        series.points.forEach((rawPoint, i) => {
            projectedPoint = projectedPoints[i];
            rawPoint.plotX = projectedPoint.x;
            rawPoint.plotY = projectedPoint.y;
            rawPoint.plotZ = projectedPoint.z;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
Series3D.defaultOptions = merge((highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()).defaultOptions);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Series_Series3D = (Series3D);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","StackItem"],"commonjs":["highcharts","StackItem"],"commonjs2":["highcharts","StackItem"],"root":["Highcharts","StackItem"]}
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_ = __webpack_require__(184);
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default = /*#__PURE__*/__webpack_require__.n(highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_);
;// ./code/es-modules/Core/Renderer/SVG/SVGElement3D.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extensions to the SVGRenderer class to enable 3D shapes
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { parse: SVGElement3D_color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());

const { Element: SVGElement } = highcharts_RendererRegistry_commonjs_highcharts_RendererRegistry_commonjs2_highcharts_RendererRegistry_root_Highcharts_RendererRegistry_default().getRendererType().prototype;

/* *
 *
 *  Class
 *
 * */
/** @internal */
class SVGElement3D extends SVGElement {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        /* *
         *
         *  Properties
         *
         * */
        this.parts = ['front', 'top', 'side'];
        this.pathType = 'cuboid';
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * The init is used by base - renderer.Element
     * @internal
     */
    initArgs(args) {
        const elem3d = this, renderer = elem3d.renderer, paths = renderer[elem3d.pathType + 'Path'](args), zIndexes = paths.zIndexes;
        // Build parts
        for (const part of elem3d.parts) {
            const attribs = {
                'class': 'highcharts-3d-' + part,
                zIndex: zIndexes[part] || 0
            };
            if (renderer.styledMode) {
                if (part === 'top') {
                    attribs.filter = 'url(#highcharts-brighter)';
                }
                else if (part === 'side') {
                    attribs.filter = 'url(#highcharts-darker)';
                }
            }
            elem3d[part] = renderer.path(paths[part])
                .attr(attribs)
                .add(elem3d);
        }
        elem3d.attr({
            'stroke-linejoin': 'round',
            zIndex: zIndexes.group
        });
        // Store information if any side of element was rendered by force.
        elem3d.forcedSides = paths.forcedSides;
    }
    /**
     * Single property setter that applies options to each part
     * @internal
     */
    singleSetterForParts(prop, val, values, verb, duration, complete) {
        const elem3d = this, newAttr = {}, optionsToApply = [null, null, (verb || 'attr'), duration, complete], hasZIndexes = values?.zIndexes;
        if (!values) {
            newAttr[prop] = val;
            optionsToApply[0] = newAttr;
        }
        else {
            // It is needed to deal with the whole group zIndexing
            // in case of graph rotation
            if (hasZIndexes?.group) {
                elem3d.attr({
                    zIndex: hasZIndexes.group
                });
            }
            for (const part of Object.keys(values)) {
                newAttr[part] = {};
                newAttr[part][prop] = values[part];
                // Include zIndexes if provided
                if (hasZIndexes) {
                    newAttr[part].zIndex = values.zIndexes[part] || 0;
                }
            }
            optionsToApply[1] = newAttr;
        }
        return this.processParts.apply(elem3d, optionsToApply);
    }
    /**
     * Calls function for each part. Used for attr, animate and destroy.
     * @internal
     */
    processParts(props, partsProps, verb, duration, complete) {
        const elem3d = this;
        for (const part of elem3d.parts) {
            // If different props for different parts
            if (partsProps) {
                props = pick(partsProps[part], false);
            }
            // Only if something to set, but allow undefined
            if (props !== false) {
                elem3d[part][verb](props, duration, complete);
            }
        }
        return elem3d;
    }
    /**
     * Destroy all parts
     * @internal
     */
    destroy() {
        this.processParts(null, null, 'destroy');
        return super.destroy();
    }
    // Following functions are SVGElement3DCuboid (= base)
    /** @internal */
    attr(args, val, complete, continueAnimation) {
        // Resolve setting attributes by string name
        if (typeof args === 'string' && typeof val !== 'undefined') {
            const key = args;
            args = {};
            args[key] = val;
        }
        if (args.shapeArgs || defined(args.x)) {
            return this.singleSetterForParts('d', null, this.renderer[this.pathType + 'Path'](args.shapeArgs || args));
        }
        return super.attr(args, void 0, complete, continueAnimation);
    }
    /** @internal */
    animate(args, duration, complete) {
        if (defined(args.x) && defined(args.y)) {
            const paths = this.renderer[this.pathType + 'Path'](args), forcedSides = paths.forcedSides;
            this.singleSetterForParts('d', null, paths, 'animate', duration, complete);
            this.attr({
                zIndex: paths.zIndexes.group
            });
            // If sides that are forced to render changed, recalculate colors.
            if (forcedSides !== this.forcedSides) {
                this.forcedSides = forcedSides;
                if (!this.renderer.styledMode) {
                    this.fillSetter(this.fill);
                }
            }
        }
        else {
            super.animate(args, duration, complete);
        }
        return this;
    }
    /** @internal */
    fillSetter(fill) {
        const elem3d = this;
        elem3d.forcedSides = elem3d.forcedSides || [];
        elem3d.singleSetterForParts('fill', null, {
            front: fill,
            // Do not change color if side was forced to render.
            top: SVGElement3D_color(fill).brighten(elem3d.forcedSides.indexOf('top') >= 0 ? 0 : 0.1).get(),
            side: SVGElement3D_color(fill).brighten(elem3d.forcedSides.indexOf('side') >= 0 ? 0 : -0.1).get()
        });
        // Fill for animation getter (#6776)
        elem3d.color = elem3d.fill = fill;
        return elem3d;
    }
}
SVGElement3D.types = {
    base: SVGElement3D,
    cuboid: SVGElement3D
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const SVG_SVGElement3D = (SVGElement3D);

;// ./code/es-modules/Core/Renderer/SVG/SVGRenderer3D.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extensions to the SVGRenderer class to enable 3D shapes
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { parse: SVGRenderer3D_color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());

const { charts, deg2rad: SVGRenderer3D_deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: SVGRenderer3D_perspective, shapeArea: SVGRenderer3D_shapeArea } = Core_Math3D;


/* *
 *
 *  Constants
 *
 * */
/** @internal */
const cos = Math.cos, sin = Math.sin, PI = Math.PI, dFactor = (4 * (Math.sqrt(2) - 1) / 3) / (PI / 2);
/* *
 *
 *  Functions
 *
 * */
/**
 * Method to construct a curved path. Can 'wrap' around more then 180
 * degrees.
 * @internal
 */
function curveTo(cx, cy, rx, ry, start, end, dx, dy) {
    const arcAngle = end - start;
    let result = [];
    if ((end > start) && (end - start > Math.PI / 2 + 0.0001)) {
        result = result.concat(curveTo(cx, cy, rx, ry, start, start + (Math.PI / 2), dx, dy));
        result = result.concat(curveTo(cx, cy, rx, ry, start + (Math.PI / 2), end, dx, dy));
        return result;
    }
    if ((end < start) && (start - end > Math.PI / 2 + 0.0001)) {
        result = result.concat(curveTo(cx, cy, rx, ry, start, start - (Math.PI / 2), dx, dy));
        result = result.concat(curveTo(cx, cy, rx, ry, start - (Math.PI / 2), end, dx, dy));
        return result;
    }
    return [[
            'C',
            cx + (rx * Math.cos(start)) -
                ((rx * dFactor * arcAngle) * Math.sin(start)) + dx,
            cy + (ry * Math.sin(start)) +
                ((ry * dFactor * arcAngle) * Math.cos(start)) + dy,
            cx + (rx * Math.cos(end)) +
                ((rx * dFactor * arcAngle) * Math.sin(end)) + dx,
            cy + (ry * Math.sin(end)) -
                ((ry * dFactor * arcAngle) * Math.cos(end)) + dy,
            cx + (rx * Math.cos(end)) + dx,
            cy + (ry * Math.sin(end)) + dy
        ]];
}
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var SVGRenderer3D;
(function (SVGRenderer3D) {
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
    function compose(SVGRendererClass) {
        const rendererProto = SVGRendererClass.prototype;
        if (!rendererProto.element3d) {
            extend(rendererProto, {
                Element3D: SVG_SVGElement3D,
                arc3d,
                arc3dPath,
                cuboid,
                cuboidPath,
                element3d,
                face3d,
                polyhedron,
                toLinePath,
                toLineSegments
            });
        }
    }
    SVGRenderer3D.compose = compose;
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function toLinePath(points, closed) {
        const result = [];
        // Put "L x y" for each point
        for (const point of points) {
            result.push(['L', point.x, point.y]);
        }
        if (points.length) {
            // Set the first element to M
            result[0][0] = 'M';
            // If it is a closed line, add Z
            if (closed) {
                result.push(['Z']);
            }
        }
        return result;
    }
    /** @internal */
    function toLineSegments(points) {
        const result = [];
        let m = true;
        for (const point of points) {
            result.push(m ? ['M', point.x, point.y] : ['L', point.x, point.y]);
            m = !m;
        }
        return result;
    }
    /**
     * A 3-D Face is defined by it's 3D vertexes, and is only visible if it's
     * vertexes are counter-clockwise (Back-face culling). It is used as a
     * polyhedron Element.
     * @internal
     */
    function face3d(args) {
        const renderer = this, elementProto = renderer.Element.prototype, ret = renderer.createElement('path');
        ret.vertexes = [];
        ret.insidePlotArea = false;
        ret.enabled = true;
        /* eslint-disable no-invalid-this */
        ret.attr = function (hash) {
            if (typeof hash === 'object' &&
                (defined(hash.enabled) ||
                    defined(hash.vertexes) ||
                    defined(hash.insidePlotArea))) {
                this.enabled = pick(hash.enabled, this.enabled);
                this.vertexes = pick(hash.vertexes, this.vertexes);
                this.insidePlotArea = pick(hash.insidePlotArea, this.insidePlotArea);
                delete hash.enabled;
                delete hash.vertexes;
                delete hash.insidePlotArea;
                const chart = charts[renderer.chartIndex], vertexes2d = SVGRenderer3D_perspective(this.vertexes, chart, this.insidePlotArea), path = renderer.toLinePath(vertexes2d, true), area = SVGRenderer3D_shapeArea(vertexes2d);
                hash.d = path;
                hash.visibility = (this.enabled && area > 0) ?
                    'inherit' : 'hidden';
            }
            return elementProto.attr.apply(this, arguments);
        };
        ret.animate = function (params) {
            if (typeof params === 'object' &&
                (defined(params.enabled) ||
                    defined(params.vertexes) ||
                    defined(params.insidePlotArea))) {
                this.enabled = pick(params.enabled, this.enabled);
                this.vertexes = pick(params.vertexes, this.vertexes);
                this.insidePlotArea = pick(params.insidePlotArea, this.insidePlotArea);
                delete params.enabled;
                delete params.vertexes;
                delete params.insidePlotArea;
                const chart = charts[renderer.chartIndex], vertexes2d = SVGRenderer3D_perspective(this.vertexes, chart, this.insidePlotArea), path = renderer.toLinePath(vertexes2d, true), area = SVGRenderer3D_shapeArea(vertexes2d), visibility = (this.enabled && area > 0) ?
                    'visible' : 'hidden';
                params.d = path;
                this.attr('visibility', visibility);
            }
            return elementProto.animate.apply(this, arguments);
        };
        /* eslint-enable no-invalid-this */
        return ret.attr(args);
    }
    /**
     * A Polyhedron is a handy way of defining a group of 3-D faces. It's only
     * attribute is `faces`, an array of attributes of each one of it's Face3D
     * instances.
     * @internal
     */
    function polyhedron(args) {
        const renderer = this, elementProto = renderer.Element.prototype, result = renderer.g(), destroy = result.destroy;
        if (!this.styledMode) {
            result.attr({
                'stroke-linejoin': 'round'
            });
        }
        result.faces = [];
        // Destroy all children
        result.destroy = function () {
            for (let i = 0; i < result.faces.length; i++) {
                result.faces[i].destroy();
            }
            return destroy.call(this);
        };
        result.attr = function (hash, val, complete, continueAnimation) {
            if (typeof hash === 'object' && defined(hash.faces)) {
                while (result.faces.length > hash.faces.length) {
                    result.faces.pop().destroy();
                }
                while (result.faces.length < hash.faces.length) {
                    result.faces.push(renderer.face3d().add(result));
                }
                for (let i = 0; i < hash.faces.length; i++) {
                    if (renderer.styledMode) {
                        delete hash.faces[i].fill;
                    }
                    result.faces[i].attr(hash.faces[i], null, complete, continueAnimation);
                }
                delete hash.faces;
            }
            return elementProto.attr.apply(this, arguments);
        };
        result.animate = function (params, duration, complete) {
            if (params?.faces) {
                while (result.faces.length > params.faces.length) {
                    result.faces.pop().destroy();
                }
                while (result.faces.length < params.faces.length) {
                    result.faces.push(renderer.face3d().add(result));
                }
                for (let i = 0; i < params.faces.length; i++) {
                    result.faces[i].animate(params.faces[i], duration, complete);
                }
                delete params.faces;
            }
            return elementProto.animate.apply(this, arguments);
        };
        return result.attr(args);
    }
    /**
     * Return result, generalization
     * @internal
     * @requires highcharts-3d
     */
    function element3d(type, shapeArgs) {
        const elem3d = new SVG_SVGElement3D.types[type](this, 'g');
        elem3d.initArgs(shapeArgs);
        return elem3d;
    }
    /**
     * Generalized, so now use simply
     * @internal
     */
    function cuboid(shapeArgs) {
        return this.element3d('cuboid', shapeArgs);
    }
    /**
     * Generates a cuboid path and zIndexes
     * @internal
     */
    function cuboidPath(shapeArgs) {
        const x = shapeArgs.x || 0, y = shapeArgs.y || 0, z = shapeArgs.z || 0, 
        // For side calculation (right/left)
        // there is a need for height (and other shapeArgs arguments)
        // to be at least 1px
        h = shapeArgs.height || 0, w = shapeArgs.width || 0, d = shapeArgs.depth || 0, chart = charts[this.chartIndex], options3d = chart.options.chart.options3d, alpha = options3d.alpha, 
        // Priority for x axis is the biggest,
        // because of x direction has biggest influence on zIndex
        incrementX = 1000000, 
        // Y axis has the smallest priority in case of our charts
        // (needs to be set because of stacking)
        incrementY = 10, incrementZ = 100, forcedSides = [];
        let shape, zIndex = 0, 
        // The 8 corners of the cube
        pArr = [{
                x: x,
                y: y,
                z: z
            }, {
                x: x + w,
                y: y,
                z: z
            }, {
                x: x + w,
                y: y + h,
                z: z
            }, {
                x: x,
                y: y + h,
                z: z
            }, {
                x: x,
                y: y + h,
                z: z + d
            }, {
                x: x + w,
                y: y + h,
                z: z + d
            }, {
                x: x + w,
                y: y,
                z: z + d
            }, {
                x: x,
                y: y,
                z: z + d
            }];
        // Apply perspective
        pArr = SVGRenderer3D_perspective(pArr, chart, shapeArgs.insidePlotArea);
        /**
         * Helper method to decide which side is visible
         * @internal
         */
        const mapSidePath = (i) => {
            // Added support for 0 value in columns, where height is 0
            // but the shape is rendered.
            // Height is used from 1st to 6th element of pArr
            if (h === 0 && i > 1 && i < 6) { // [2, 3, 4, 5]
                return {
                    x: pArr[i].x,
                    // When height is 0 instead of cuboid we render plane
                    // so it is needed to add fake 10 height to imitate
                    // cuboid for side calculation
                    y: pArr[i].y + 10,
                    z: pArr[i].z
                };
            }
            // It is needed to calculate dummy sides (front/back) for
            // breaking points in case of x and depth values. If column has
            // side, it means that x values of front and back side are
            // different.
            if (pArr[0].x === pArr[7].x && i >= 4) { // [4, 5, 6, 7]
                return {
                    x: pArr[i].x + 10,
                    // When height is 0 instead of cuboid we render plane
                    // so it is needed to add fake 10 height to imitate
                    // cuboid for side calculation
                    y: pArr[i].y,
                    z: pArr[i].z
                };
            }
            // Added dummy depth
            if (d === 0 && i < 2 || i > 5) { // [0, 1, 6, 7]
                return {
                    x: pArr[i].x,
                    // When height is 0 instead of cuboid we render plane
                    // so it is needed to add fake 10 height to imitate
                    // cuboid for side calculation
                    y: pArr[i].y,
                    z: pArr[i].z + 10
                };
            }
            return pArr[i];
        }, 
        /**
         * Method creating the final side
         * @internal
         */
        mapPath = (i) => (pArr[i]), 
        /**
         * First value - path with specific face
         * Second value - added info about side for later calculations.
         *                 Possible second values are 0 for path1, 1 for
         *                 path2 and -1 for no path chosen.
         * Third value - string containing information about current side of
         *               cuboid for forcing side rendering.
         * @internal
         */
        pickShape = (verticesIndex1, verticesIndex2, side) => {
            const // An array of vertices for cuboid face
            face1 = verticesIndex1.map(mapPath), face2 = verticesIndex2.map(mapPath), 
            // Dummy face is calculated the same way as standard face,
            // but if cuboid height is 0 additional height is added so
            // it is possible to use this vertices array for visible
            // face calculation
            dummyFace1 = verticesIndex1.map(mapSidePath), dummyFace2 = verticesIndex2.map(mapSidePath);
            let ret = [[], -1];
            if (SVGRenderer3D_shapeArea(face1) < 0) {
                ret = [face1, 0];
            }
            else if (SVGRenderer3D_shapeArea(face2) < 0) {
                ret = [face2, 1];
            }
            else if (side) {
                forcedSides.push(side);
                if (SVGRenderer3D_shapeArea(dummyFace1) < 0) {
                    ret = [face1, 0];
                }
                else if (SVGRenderer3D_shapeArea(dummyFace2) < 0) {
                    ret = [face2, 1];
                }
                else {
                    ret = [face1, 0]; // Force side calculation.
                }
            }
            return ret;
        };
        // Front or back
        const front = [3, 2, 1, 0], back = [7, 6, 5, 4];
        shape = pickShape(front, back, 'front');
        const path1 = shape[0], isFront = shape[1];
        // Top or bottom
        const top = [1, 6, 7, 0], bottom = [4, 5, 2, 3];
        shape = pickShape(top, bottom, 'top');
        const path2 = shape[0], isTop = shape[1];
        // Side
        const right = [1, 2, 5, 6], left = [0, 7, 4, 3];
        shape = pickShape(right, left, 'side');
        const path3 = shape[0], isRight = shape[1];
        /* New block used for calculating zIndex. It is basing on X, Y and Z
        position of specific columns. All zIndexes (for X, Y and Z values) are
        added to the final zIndex, where every value has different priority. The
        biggest priority is in X and Z directions, the lowest index is for
        stacked columns (Y direction and the same X and Z positions). Big
        differences between priorities is made because we need to ensure that
        even for big changes in Y and Z parameters all columns will be drawn
        correctly. */
        if (isRight === 1) {
            // It is needed to connect value with current chart width
            // for big chart size.
            zIndex += incrementX * (chart.plotWidth - x);
        }
        else if (!isRight) {
            zIndex += incrementX * x;
        }
        zIndex += incrementY * (!isTop ||
            // Numbers checked empirically
            (alpha >= 0 && alpha <= 180 || alpha < 360 && alpha > 357.5) ?
            chart.plotHeight - y : 10 + y);
        if (isFront === 1) {
            zIndex += incrementZ * (z);
        }
        else if (!isFront) {
            zIndex += incrementZ * (1000 - z);
        }
        return {
            front: this.toLinePath(path1, true),
            top: this.toLinePath(path2, true),
            side: this.toLinePath(path3, true),
            zIndexes: {
                group: Math.round(zIndex)
            },
            forcedSides: forcedSides,
            // Additional info about zIndexes
            isFront: isFront,
            isTop: isTop
        }; // #4774
    }
    /** @internal */
    function arc3d(attribs) {
        const renderer = this, wrapper = renderer.g(), elementProto = renderer.Element.prototype, customAttribs = [
            'alpha', 'beta',
            'x', 'y', 'r', 'innerR', 'start', 'end', 'depth'
        ];
        /**
         * Get custom attributes. Don't mutate the original object and return an
         * object with only custom attr.
         * @internal
         */
        function extractCustom(params) {
            const ca = {};
            params = merge(params); // Don't mutate the original object
            let key;
            for (key in params) {
                if (customAttribs.indexOf(key) !== -1) {
                    ca[key] = params[key];
                    delete params[key];
                }
            }
            return Object.keys(ca).length ? [ca, params] : false;
        }
        attribs = merge(attribs);
        attribs.alpha = (attribs.alpha || 0) * SVGRenderer3D_deg2rad;
        attribs.beta = (attribs.beta || 0) * SVGRenderer3D_deg2rad;
        // Create the different sub sections of the shape
        wrapper.top = renderer.path();
        wrapper.side1 = renderer.path();
        wrapper.side2 = renderer.path();
        wrapper.inn = renderer.path();
        wrapper.out = renderer.path();
        /* eslint-disable no-invalid-this */
        // Add all faces
        wrapper.onAdd = function () {
            const parent = wrapper.parentGroup, className = wrapper.attr('class');
            wrapper.top.add(wrapper);
            // These faces are added outside the wrapper group because the
            // z-index relates to neighbor elements as well
            for (const face of ['out', 'inn', 'side1', 'side2']) {
                wrapper[face]
                    .attr({
                    'class': className + ' highcharts-3d-side'
                })
                    .add(parent);
            }
        };
        // Cascade to faces
        for (const fn of ['addClass', 'removeClass']) {
            wrapper[fn] = function () {
                const args = arguments;
                for (const face of ['top', 'out', 'inn', 'side1', 'side2']) {
                    wrapper[face][fn].apply(wrapper[face], args);
                }
            };
        }
        /**
         * Compute the transformed paths and set them to the composite shapes
         * @internal
         */
        wrapper.setPaths = function (attribs) {
            const paths = wrapper.renderer.arc3dPath(attribs), zIndex = paths.zTop * 100;
            wrapper.attribs = attribs;
            wrapper.top.attr({ d: paths.top, zIndex: paths.zTop });
            wrapper.inn.attr({ d: paths.inn, zIndex: paths.zInn });
            wrapper.out.attr({ d: paths.out, zIndex: paths.zOut });
            wrapper.side1.attr({ d: paths.side1, zIndex: paths.zSide1 });
            wrapper.side2.attr({ d: paths.side2, zIndex: paths.zSide2 });
            // Show all children
            wrapper.zIndex = zIndex;
            wrapper.attr({ zIndex: zIndex });
            // Set the radial gradient center the first time
            if (attribs.center) {
                wrapper.top.setRadialReference(attribs.center);
                delete attribs.center;
            }
        };
        wrapper.setPaths(attribs);
        /**
         * Apply the fill to the top and a darker shade to the sides
         * @internal
         */
        wrapper.fillSetter = function (value) {
            const darker = SVGRenderer3D_color(value).brighten(-0.1).get();
            this.fill = value;
            this.side1.attr({ fill: darker });
            this.side2.attr({ fill: darker });
            this.inn.attr({ fill: darker });
            this.out.attr({ fill: darker });
            this.top.attr({ fill: value });
            return this;
        };
        // Apply the same value to all. These properties cascade down to the
        // children when set to the composite arc3d.
        for (const setter of ['opacity', 'translateX', 'translateY', 'visibility']) {
            wrapper[setter + 'Setter'] = function (value, key) {
                wrapper[key] = value;
                for (const el of ['out', 'inn', 'side1', 'side2', 'top']) {
                    wrapper[el].attr(key, value);
                }
            };
        }
        // Override attr to remove shape attributes and use those to set child
        // paths
        wrapper.attr = function (params) {
            if (typeof params === 'object') {
                const paramArr = extractCustom(params);
                if (paramArr) {
                    const ca = paramArr[0];
                    arguments[0] = paramArr[1];
                    // Translate alpha and beta to rotation
                    if (ca.alpha !== void 0) {
                        ca.alpha *= SVGRenderer3D_deg2rad;
                    }
                    if (ca.beta !== void 0) {
                        ca.beta *= SVGRenderer3D_deg2rad;
                    }
                    extend(wrapper.attribs, ca);
                    if (wrapper.attribs) {
                        wrapper.setPaths(wrapper.attribs);
                    }
                }
            }
            return elementProto.attr.apply(wrapper, arguments);
        };
        // Override the animate function by sucking out custom parameters
        // related to the shapes directly, and update the shapes from the
        // animation step.
        wrapper.animate = function (params, animation, complete) {
            const from = this.attribs, randomProp = 'data-' +
                Math.random().toString(26).substring(2, 9);
            // Attribute-line properties connected to 3D. These shouldn't have
            // been in the attribs collection in the first place.
            delete params.center;
            delete params.z;
            const anim = animObject(pick(animation, this.renderer.globalAnimation));
            if (anim.duration) {
                const paramArr = extractCustom(params);
                // Params need to have a property in order for the step to run
                // (#5765, #7097, #7437)
                wrapper[randomProp] = 0;
                params[randomProp] = 1;
                wrapper[randomProp + 'Setter'] = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).noop;
                if (paramArr) {
                    const to = paramArr[0], // Custom attr
                    interpolate = (key, pos) => (from[key] + (pick(to[key], from[key]) -
                        from[key]) * pos);
                    anim.step = function (a, fx) {
                        if (fx.prop === randomProp) {
                            fx.elem.setPaths(merge(from, {
                                x: interpolate('x', fx.pos),
                                y: interpolate('y', fx.pos),
                                r: interpolate('r', fx.pos),
                                innerR: interpolate('innerR', fx.pos),
                                start: interpolate('start', fx.pos),
                                end: interpolate('end', fx.pos),
                                depth: interpolate('depth', fx.pos)
                            }));
                        }
                    };
                }
                animation = anim; // Only when duration (#5572)
            }
            return elementProto.animate.call(this, params, animation, complete);
        };
        // Destroy all children
        wrapper.destroy = function () {
            this.top.destroy();
            this.out.destroy();
            this.inn.destroy();
            this.side1.destroy();
            this.side2.destroy();
            return elementProto.destroy.call(this);
        };
        // Hide all children
        wrapper.hide = function () {
            this.top.hide();
            this.out.hide();
            this.inn.hide();
            this.side1.hide();
            this.side2.hide();
        };
        wrapper.show = function (inherit) {
            this.top.show(inherit);
            this.out.show(inherit);
            this.inn.show(inherit);
            this.side1.show(inherit);
            this.side2.show(inherit);
        };
        /* eslint-enable no-invalid-this */
        return wrapper;
    }
    /**
     * Generate the paths required to draw a 3D arc.
     * @internal
     */
    function arc3dPath(shapeArgs) {
        const cx = shapeArgs.x || 0, // X coordinate of the center
        cy = shapeArgs.y || 0, // Y coordinate of the center
        start = shapeArgs.start || 0, // Start angle
        end = (shapeArgs.end || 0) - 0.00001, // End angle
        r = shapeArgs.r || 0, // Radius
        ir = shapeArgs.innerR || 0, // Inner radius
        d = shapeArgs.depth || 0, // Depth
        alpha = shapeArgs.alpha || 0, // Alpha rotation of the chart
        beta = shapeArgs.beta || 0; // Beta rotation of the chart
        // Derived Variables
        const cs = Math.cos(start), // Cosinus of the start angle
        ss = Math.sin(start), // Sinus of the start angle
        ce = Math.cos(end), // Cosinus of the end angle
        se = Math.sin(end), // Sinus of the end angle
        rx = r * Math.cos(beta), // X-radius
        ry = r * Math.cos(alpha), // Y-radius
        irx = ir * Math.cos(beta), // X-radius (inner)
        iry = ir * Math.cos(alpha), // Y-radius (inner)
        dx = d * Math.sin(beta), // Distance between top and bottom in x
        dy = d * Math.sin(alpha); // Distance between top and bottom in y
        // TOP
        let top = [
            ['M', cx + (rx * cs), cy + (ry * ss)]
        ];
        top = top.concat(curveTo(cx, cy, rx, ry, start, end, 0, 0));
        top.push([
            'L', cx + (irx * ce), cy + (iry * se)
        ]);
        top = top.concat(curveTo(cx, cy, irx, iry, end, start, 0, 0));
        top.push(['Z']);
        // OUTSIDE
        const b = (beta > 0 ? Math.PI / 2 : 0), a = (alpha > 0 ? 0 : Math.PI / 2);
        const start2 = start > -b ? start : (end > -b ? -b : start), end2 = end < PI - a ? end : (start < PI - a ? PI - a : end), midEnd = 2 * PI - a;
        // When slice goes over bottom middle, need to add both, left and right
        // outer side. Additionally, when we cross right hand edge, create sharp
        // edge. Outer shape/wall:
        //
        //            -------
        //          /    ^    \
        //    4)   /   /   \   \  1)
        //        /   /     \   \
        //       /   /       \   \
        // (c)=> ====         ==== <=(d)
        //       \   \       /   /
        //        \   \<=(a)/   /
        //         \   \   /   / <=(b)
        //    3)    \    v    /  2)
        //            -------
        //
        // (a) - inner side
        // (b) - outer side
        // (c) - left edge (sharp)
        // (d) - right edge (sharp)
        // 1..n - rendering order for startAngle = 0, when set to e.g 90, order
        // changes clockwise (1->2, 2->3, n->1) and counterclockwise for
        // negative startAngle
        let out = [
            ['M', cx + (rx * cos(start2)), cy + (ry * sin(start2))]
        ];
        out = out.concat(curveTo(cx, cy, rx, ry, start2, end2, 0, 0));
        // When shape is wide, it can cross both, (c) and (d) edges, when using
        // startAngle
        if (end > midEnd && start < midEnd) {
            // Go to outer side
            out.push([
                'L', cx + (rx * cos(end2)) + dx, cy + (ry * sin(end2)) + dy
            ]);
            // Curve to the right edge of the slice (d)
            out = out.concat(curveTo(cx, cy, rx, ry, end2, midEnd, dx, dy));
            // Go to the inner side
            out.push([
                'L', cx + (rx * cos(midEnd)), cy + (ry * sin(midEnd))
            ]);
            // Curve to the true end of the slice
            out = out.concat(curveTo(cx, cy, rx, ry, midEnd, end, 0, 0));
            // Go to the outer side
            out.push([
                'L', cx + (rx * cos(end)) + dx, cy + (ry * sin(end)) + dy
            ]);
            // Go back to middle (d)
            out = out.concat(curveTo(cx, cy, rx, ry, end, midEnd, dx, dy));
            out.push([
                'L', cx + (rx * cos(midEnd)), cy + (ry * sin(midEnd))
            ]);
            // Go back to the left edge
            out = out.concat(curveTo(cx, cy, rx, ry, midEnd, end2, 0, 0));
            // But shape can cross also only (c) edge:
        }
        else if (end > PI - a && start < PI - a) {
            // Go to outer side
            out.push([
                'L',
                cx + (rx * Math.cos(end2)) + dx,
                cy + (ry * Math.sin(end2)) + dy
            ]);
            // Curve to the true end of the slice
            out = out.concat(curveTo(cx, cy, rx, ry, end2, end, dx, dy));
            // Go to the inner side
            out.push([
                'L', cx + (rx * Math.cos(end)), cy + (ry * Math.sin(end))
            ]);
            // Go back to the artificial end2
            out = out.concat(curveTo(cx, cy, rx, ry, end, end2, 0, 0));
        }
        out.push([
            'L',
            cx + (rx * Math.cos(end2)) + dx,
            cy + (ry * Math.sin(end2)) + dy
        ]);
        out = out.concat(curveTo(cx, cy, rx, ry, end2, start2, dx, dy));
        out.push(['Z']);
        // INSIDE
        let inn = [
            ['M', cx + (irx * cs), cy + (iry * ss)]
        ];
        inn = inn.concat(curveTo(cx, cy, irx, iry, start, end, 0, 0));
        inn.push([
            'L',
            cx + (irx * Math.cos(end)) + dx,
            cy + (iry * Math.sin(end)) + dy
        ]);
        inn = inn.concat(curveTo(cx, cy, irx, iry, end, start, dx, dy));
        inn.push(['Z']);
        // SIDES
        const side1 = [
            ['M', cx + (rx * cs), cy + (ry * ss)],
            ['L', cx + (rx * cs) + dx, cy + (ry * ss) + dy],
            ['L', cx + (irx * cs) + dx, cy + (iry * ss) + dy],
            ['L', cx + (irx * cs), cy + (iry * ss)],
            ['Z']
        ];
        const side2 = [
            ['M', cx + (rx * ce), cy + (ry * se)],
            ['L', cx + (rx * ce) + dx, cy + (ry * se) + dy],
            ['L', cx + (irx * ce) + dx, cy + (iry * se) + dy],
            ['L', cx + (irx * ce), cy + (iry * se)],
            ['Z']
        ];
        // Correction for changed position of vanishing point caused by alpha
        // and beta rotations
        const angleCorr = Math.atan2(dy, -dx);
        let angleEnd = Math.abs(end + angleCorr), angleStart = Math.abs(start + angleCorr), angleMid = Math.abs((start + end) / 2 + angleCorr);
        /**
         * Set to 0-PI range
         * @internal
         */
        function toZeroPIRange(angle) {
            angle = angle % (2 * Math.PI);
            if (angle > Math.PI) {
                angle = 2 * Math.PI - angle;
            }
            return angle;
        }
        angleEnd = toZeroPIRange(angleEnd);
        angleStart = toZeroPIRange(angleStart);
        angleMid = toZeroPIRange(angleMid);
        // *1e5 is to compensate pInt in zIndexSetter
        const incPrecision = 1e5, a1 = angleMid * incPrecision, a2 = angleStart * incPrecision, a3 = angleEnd * incPrecision;
        return {
            top: top,
            // Max angle is PI, so this is always higher
            zTop: Math.PI * incPrecision + 1,
            out: out,
            zOut: Math.max(a1, a2, a3),
            inn: inn,
            zInn: Math.max(a1, a2, a3),
            side1: side1,
            // To keep below zOut and zInn in case of same values
            zSide1: a3 * 0.99,
            side2: side2,
            zSide2: a2 * 0.99
        };
    }
})(SVGRenderer3D || (SVGRenderer3D = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const SVG_SVGRenderer3D = (SVGRenderer3D);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
;// ./code/es-modules/Core/Axis/ZAxis.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { defaultOptions: ZAxis_defaultOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Functions
 *
 * */
/** @internal */
function chartAddZAxis(options) {
    return new ZAxis(this, options);
}
/**
 * Get the Z axis in addition to the default X and Y.
 * @internal
 */
function onChartAfterCreateAxes() {
    const zAxisOptions = this.options.zAxis = splat(this.options.zAxis || {});
    if (!this.is3d()) {
        return;
    }
    this.zAxis = [];
    zAxisOptions.forEach((axisOptions) => {
        this.addZAxis(axisOptions).setScale();
    });
}
/* *
 *
 *  Class
 *
 * */
/**
 * 3D axis for z coordinates.
 */
class ZAxis extends (highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default()) {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.isZAxis = true;
    }
    /** @internal */
    static compose(ChartClass) {
        const chartProto = ChartClass.prototype;
        if (!chartProto.addZAxis) {
            ZAxis_defaultOptions.zAxis = merge(ZAxis_defaultOptions.xAxis, {
                offset: 0,
                lineWidth: 0
            });
            chartProto.addZAxis = chartAddZAxis;
            chartProto.collectionsWithInit.zAxis = [chartProto.addZAxis];
            chartProto.collectionsWithUpdate.push('zAxis');
            addEvent(ChartClass, 'afterCreateAxes', onChartAfterCreateAxes);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    init(chart, userOptions) {
        // #14793, this used to be set on the prototype
        this.isZAxis = true;
        super.init(chart, userOptions, 'zAxis');
    }
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    getSeriesExtremes() {
        this.hasVisibleSeries = false;
        // Reset properties in case we're redrawing (#3353)
        this.dataMin = this.dataMax = this.ignoreMinPadding = (this.ignoreMaxPadding = void 0);
        if (this.stacking) {
            this.stacking.buildStacks();
        }
        // Loop through this axis' series
        this.series.forEach((series) => {
            if (series.reserveSpace()) {
                let threshold = series.options.threshold;
                this.hasVisibleSeries = true;
                // Validate threshold in logarithmic axes
                if (this.positiveValuesOnly && threshold <= 0) {
                    threshold = void 0;
                }
                const zData = series.getColumn('z');
                if (zData.length) {
                    this.dataMin = Math.min(pick(this.dataMin, zData[0]), Math.min.apply(null, zData));
                    this.dataMax = Math.max(pick(this.dataMax, zData[0]), Math.max.apply(null, zData));
                }
            }
        });
    }
    /** @internal */
    setAxisSize() {
        const chart = this.chart;
        super.setAxisSize();
        this.width = this.len = chart.options.chart.options3d?.depth || 0;
        this.right = chart.chartWidth - this.width - this.left;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_ZAxis = (ZAxis);

;// ./code/es-modules/Series/Column3D/Column3DComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed: Column3DComposition_composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: Column3DComposition_perspective } = Core_Math3D;

/* *
 *
 *  Functions
 *
 * */
/** @private */
function columnSeriesTranslate3dShapes() {
    const series = this, chart = series.chart, seriesOptions = series.options, depth = seriesOptions.depth, stack = seriesOptions.stacking ?
        (seriesOptions.stack || 0) :
        series.index; // #4743
    let z = stack * (depth + (seriesOptions.groupZPadding || 1)), borderCrisp = series.borderWidth % 2 ? 0.5 : 0, point2dPos; // Position of point in 2D, used for 3D position calculation
    if (chart.inverted && !series.yAxis.reversed) {
        borderCrisp *= -1;
    }
    if (seriesOptions.grouping !== false) {
        z = 0;
    }
    z += (seriesOptions.groupZPadding || 1);
    for (const point of series.points) {
        // #7103 Reset outside3dPlot flag
        point.outside3dPlot = null;
        if (point.y !== null) {
            const shapeArgs = extend({ x: 0, y: 0, width: 0, height: 0 }, point.shapeArgs || {}), 
            // Array for final shapeArgs calculation.
            // We are checking two dimensions (x and y).
            dimensions = [['x', 'width'], ['y', 'height']], tooltipPos = point.tooltipPos;
            let borderlessBase; // Crisped rects can have +/- 0.5 pixels offset.
            // #3131 We need to check if column is inside plotArea.
            for (const d of dimensions) {
                borderlessBase = shapeArgs[d[0]] - borderCrisp;
                if (borderlessBase < 0) {
                    // If borderLessBase is smaller than 0, it is needed to set
                    // its value to 0 or 0.5 depending on borderWidth
                    // borderWidth may be even or odd.
                    shapeArgs[d[1]] += shapeArgs[d[0]] + borderCrisp;
                    shapeArgs[d[0]] = -borderCrisp;
                    borderlessBase = 0;
                }
                if ((borderlessBase + shapeArgs[d[1]] >
                    series[d[0] + 'Axis'].len) &&
                    // Do not change height/width of column if 0 (#6708)
                    shapeArgs[d[1]] !== 0) {
                    shapeArgs[d[1]] =
                        series[d[0] + 'Axis'].len -
                            shapeArgs[d[0]];
                }
                if (
                // Do not remove columns with zero height/width.
                shapeArgs[d[1]] !== 0 &&
                    (shapeArgs[d[0]] >= series[d[0] + 'Axis'].len ||
                        shapeArgs[d[0]] + shapeArgs[d[1]] <= borderCrisp)) {
                    // Set args to 0 if column is outside the chart.
                    for (const key in shapeArgs) { // eslint-disable-line guard-for-in
                        // #13840
                        shapeArgs[key] = key === 'y' ? -9999 : 0;
                    }
                    // #7103 outside3dPlot flag is set on Points which are
                    // currently outside of plot.
                    point.outside3dPlot = true;
                }
            }
            // Change from 2d to 3d
            if (point.shapeType === 'roundedRect') {
                point.shapeType = 'cuboid';
            }
            point.shapeArgs = extend(shapeArgs, {
                z,
                depth,
                insidePlotArea: true
            });
            // Point's position in 2D
            point2dPos = {
                x: shapeArgs.x + shapeArgs.width / 2,
                y: shapeArgs.y,
                z: z + depth / 2 // The center of column in Z dimension
            };
            // Recalculate point positions for inverted graphs
            if (chart.inverted) {
                point2dPos.x = shapeArgs.height;
                point2dPos.y = point.clientX || 0;
            }
            // Crosshair positions
            point.axisXpos = point2dPos.x;
            point.axisYpos = point2dPos.y;
            point.axisZpos = point2dPos.z;
            // Calculate and store point's position in 3D,
            // using perspective method.
            point.plot3d = Column3DComposition_perspective([point2dPos], chart, true, false)[0];
            // Translate the tooltip position in 3d space
            if (tooltipPos) {
                const translatedTTPos = Column3DComposition_perspective([{
                        x: tooltipPos[0],
                        y: tooltipPos[1],
                        z: z + depth / 2 // The center of column in Z dimension
                    }], chart, true, false)[0];
                point.tooltipPos = [translatedTTPos.x, translatedTTPos.y];
            }
        }
    }
    // Store for later use #4067
    series.z = z;
}
/** @private */
function Column3DComposition_compose(SeriesClass, StackItemClass) {
    if (pushUnique(Column3DComposition_composed, 'Column3D')) {
        const seriesProto = SeriesClass.prototype, stackItemProto = StackItemClass.prototype, { column: ColumnSeriesClass, columnRange: ColumnRangeSeriesClass } = SeriesClass.types;
        wrap(seriesProto, 'alignDataLabel', wrapSeriesAlignDataLabel);
        wrap(seriesProto, 'justifyDataLabel', wrapSeriesJustifyDataLabel);
        wrap(stackItemProto, 'getStackBox', wrapStackItemGetStackBox);
        if (ColumnSeriesClass) {
            const columnSeriesProto = ColumnSeriesClass.prototype, columnPointProto = columnSeriesProto.pointClass.prototype;
            columnSeriesProto.translate3dPoints = () => void 0;
            columnSeriesProto.translate3dShapes = columnSeriesTranslate3dShapes;
            addEvent(columnSeriesProto, 'afterInit', onColumnSeriesAfterInit);
            wrap(columnPointProto, 'hasNewShapeType', wrapColumnPointHasNewShapeType);
            wrap(columnSeriesProto, 'animate', wrapColumnSeriesAnimate);
            wrap(columnSeriesProto, 'plotGroup', wrapColumnSeriesPlotGroup);
            wrap(columnSeriesProto, 'pointAttribs', wrapColumnSeriesPointAttribs);
            wrap(columnSeriesProto, 'setState', wrapColumnSeriesSetState);
            wrap(columnSeriesProto, 'setVisible', wrapColumnSeriesSetVisible);
            wrap(columnSeriesProto, 'translate', wrapColumnSeriesTranslate);
        }
        if (ColumnRangeSeriesClass) {
            const columnRangeSeriesProto = ColumnRangeSeriesClass.prototype, columnRangePointProto = columnRangeSeriesProto.pointClass.prototype;
            wrap(columnRangePointProto, 'hasNewShapeType', wrapColumnPointHasNewShapeType);
            wrap(columnRangeSeriesProto, 'plotGroup', wrapColumnSeriesPlotGroup);
            wrap(columnRangeSeriesProto, 'pointAttribs', wrapColumnSeriesPointAttribs);
            wrap(columnRangeSeriesProto, 'setState', wrapColumnSeriesSetState);
            wrap(columnRangeSeriesProto, 'setVisible', wrapColumnSeriesSetVisible);
        }
    }
}
/**
 * @private
 * @param {Highcharts.Chart} chart
 * Chart with stacks
 * @param {string} stacking
 * Stacking option
 */
function retrieveStacks(chart, stacking) {
    const series = chart.series, stacks = { totalStacks: 0 };
    let stackNumber, i = 1;
    series.forEach(function (s) {
        stackNumber = pick(s.options.stack, (stacking ? 0 : series.length - 1 - s.index)); // #3841, #4532
        if (!stacks[stackNumber]) {
            stacks[stackNumber] = { series: [s], position: i };
            i++;
        }
        else {
            stacks[stackNumber].series.push(s);
        }
    });
    stacks.totalStacks = i + 1;
    return stacks;
}
/** @private */
function onColumnSeriesAfterInit() {
    if (this.chart.is3d()) {
        const series = this, seriesOptions = series.options, grouping = seriesOptions.grouping, stacking = seriesOptions.stacking, reversedStacks = series.yAxis.options.reversedStacks;
        let z = 0;
        // @todo grouping === true ?
        if (!(typeof grouping !== 'undefined' && !grouping)) {
            const stacks = retrieveStacks(this.chart, stacking || void 0), stack = seriesOptions.stack || 0;
            let i; // Position within the stack
            for (i = 0; i < stacks[stack].series.length; i++) {
                if (stacks[stack].series[i] === this) {
                    break;
                }
            }
            z = (10 * (stacks.totalStacks - stacks[stack].position)) +
                (reversedStacks ? i : -i); // #4369
            // In case when axis is reversed, columns are also reversed inside
            // the group (#3737)
            if (!this.xAxis.reversed) {
                z = (stacks.totalStacks * 10) - z;
            }
        }
        seriesOptions.depth = seriesOptions.depth || 25;
        series.z = series.z || 0;
        seriesOptions.zIndex = z;
    }
}
/**
 * In 3D mode, simple checking for a new shape to animate is not enough.
 * Additionally check if graphic is a group of elements
 * @private
 */
function wrapColumnPointHasNewShapeType(proceed, ...args) {
    return this.series.chart.is3d() ?
        this.graphic && this.graphic.element.nodeName !== 'g' :
        proceed.apply(this, args);
}
/** @private */
function wrapColumnSeriesAnimate(proceed) {
    if (!this.chart.is3d()) {
        proceed.apply(this, [].slice.call(arguments, 1));
    }
    else {
        const args = arguments, init = args[1], yAxis = this.yAxis, series = this, reversed = this.yAxis.reversed;
        if (init) {
            for (const point of series.points) {
                if (point.y !== null) {
                    point.height = point.shapeArgs.height;
                    point.shapey = point.shapeArgs.y; // #2968
                    point.shapeArgs.height = 1;
                    if (!reversed) {
                        if (point.stackY) {
                            point.shapeArgs.y =
                                point.plotY +
                                    yAxis.translate(point.stackY);
                        }
                        else {
                            point.shapeArgs.y =
                                point.plotY +
                                    (point.negative ?
                                        -point.height :
                                        point.height);
                        }
                    }
                }
            }
        }
        else { // Run the animation
            for (const point of series.points) {
                if (point.y !== null) {
                    point.shapeArgs.height = point.height;
                    point.shapeArgs.y = point.shapey; // #2968
                    // null value do not have a graphic
                    if (point.graphic) {
                        point.graphic[point.outside3dPlot ?
                            'attr' :
                            'animate'](point.shapeArgs, series.options.animation);
                    }
                }
            }
            // Redraw dataLabels to the correct position
            this.drawDataLabels();
        }
    }
}
/**
 * In case of 3d columns there is no sense to add these columns to a specific
 * series group. If a series is added to a group all columns will have the same
 * zIndex in comparison to another series.
 * @private
 */
function wrapColumnSeriesPlotGroup(proceed, prop, _name, _visibility, _zIndex, parent) {
    if (prop !== 'dataLabelsGroup' && prop !== 'markerGroup') {
        if (this.chart.is3d()) {
            if (this[prop]) {
                delete this[prop];
            }
            if (parent) {
                if (!this.chart.columnGroup) {
                    this.chart.columnGroup =
                        this.chart.renderer.g('columnGroup').add(parent);
                }
                this[prop] = this.chart.columnGroup;
                this.chart.columnGroup.attr(this.getPlotBox());
                this[prop].survive = true;
                if (prop === 'group') {
                    arguments[3] = 'visible';
                    // For 3D column group and markerGroup should be visible
                }
            }
        }
    }
    return proceed.apply(this, Array.prototype.slice.call(arguments, 1));
}
/** @private */
function wrapColumnSeriesPointAttribs(proceed) {
    const attr = proceed.apply(this, [].slice.call(arguments, 1));
    if (this.chart.is3d && this.chart.is3d()) {
        // Set the fill color to the fill color to provide a smooth edge
        attr.stroke = this.options.edgeColor || attr.fill;
        attr['stroke-width'] = pick(this.options.edgeWidth, 1); // #4055
    }
    return attr;
}
/**
 * In 3D mode, all column-series are rendered in one main group. Because of that
 * we need to apply inactive state on all points.
 * @private
 */
function wrapColumnSeriesSetState(proceed, state, inherit) {
    const is3d = this.chart.is3d && this.chart.is3d();
    if (is3d) {
        this.options.inactiveOtherPoints = true;
    }
    proceed.call(this, state, inherit);
    if (is3d) {
        this.options.inactiveOtherPoints = false;
    }
}
/**
 * When series is not added to group it is needed to change setVisible method to
 * allow correct Legend functionality. This wrap is basing on pie chart series.
 * @private
 */
function wrapColumnSeriesSetVisible(proceed, vis) {
    const series = this;
    if (series.chart.is3d()) {
        for (const point of series.points) {
            point.visible = point.options.visible = vis =
                typeof vis === 'undefined' ?
                    !pick(series.visible, point.visible) : vis;
            series.options.data[series.data.indexOf(point)] =
                point.options;
            if (point.graphic) {
                point.graphic.attr({
                    visibility: vis ? 'visible' : 'hidden'
                });
            }
        }
    }
    proceed.apply(this, Array.prototype.slice.call(arguments, 1));
}
/** @private */
function wrapColumnSeriesTranslate(proceed) {
    proceed.apply(this, [].slice.call(arguments, 1));
    // Do not do this if the chart is not 3D
    if (this.chart.is3d()) {
        this.translate3dShapes();
    }
}
/** @private */
function wrapSeriesAlignDataLabel(proceed, point, _dataLabel, options, alignTo) {
    const chart = this.chart;
    // In 3D we need to pass point.outsidePlot option to the justifyDataLabel
    // method for disabling justifying dataLabels in columns outside plot
    options.outside3dPlot = point.outside3dPlot;
    // Only do this for 3D columns and it's derived series
    if (chart.is3d() &&
        this.is('column')) {
        const series = this, seriesOptions = series.options, inside = pick(options.inside, !!series.options.stacking), options3d = chart.options.chart.options3d, xOffset = (point.pointWidth || 0) / 2;
        let dLPosition = {
            x: alignTo.x + xOffset,
            y: alignTo.y,
            z: series.z + seriesOptions.depth / 2
        };
        if (chart.inverted) {
            // Inside dataLabels are positioned according to above
            // logic and there is no need to position them using
            // non-3D algorithm (that use alignTo.width)
            if (inside) {
                alignTo.width = 0;
                dLPosition.x += point.shapeArgs.height / 2;
            }
            // When chart is upside down
            // (alpha angle between 180 and 360 degrees)
            // it is needed to add column width to calculated value.
            if (options3d.alpha >= 90 && options3d.alpha <= 270) {
                dLPosition.y += point.shapeArgs.width;
            }
        }
        // `dLPosition` is recalculated for 3D graphs
        dLPosition = Column3DComposition_perspective([dLPosition], chart, true, false)[0];
        alignTo.x = dLPosition.x - xOffset;
        // #7103 If point is outside of plotArea, hide data label.
        alignTo.y = point.outside3dPlot ? -9e9 : dLPosition.y;
    }
    proceed.apply(this, [].slice.call(arguments, 1));
}
/**
 * Don't use justifyDataLabel when point is outsidePlot.
 * @private
 */
function wrapSeriesJustifyDataLabel(proceed) {
    return (!(arguments[2].outside3dPlot) ?
        proceed.apply(this, [].slice.call(arguments, 1)) :
        false);
}
/**
 * Added stackLabels position calculation for 3D charts.
 * @private
 */
function wrapStackItemGetStackBox(proceed, stackBoxProps) {
    const stackBox = proceed.apply(this, [].slice.call(arguments, 1));
    // Only do this for 3D graph
    const stackItem = this, chart = this.axis.chart, { width: xWidth } = stackBoxProps;
    if (chart.is3d() && stackItem.base) {
        // First element of stackItem.base is an index of base series.
        const baseSeriesInd = +(stackItem.base).split(',')[0];
        const columnSeries = chart.series[baseSeriesInd];
        const options3d = chart.options.chart.options3d;
        // Only do this if base series is a column or inherited type,
        // use its barW, z and depth parameters
        // for correct stackLabels position calculation
        if (columnSeries &&
            columnSeries.type === 'column') {
            let dLPosition = {
                x: stackBox.x + (chart.inverted ? stackBox.height : xWidth / 2),
                y: stackBox.y,
                z: columnSeries.options.depth / 2
            };
            if (chart.inverted) {
                // Do not use default offset calculation logic
                // for 3D inverted stackLabels.
                stackBox.width = 0;
                // When chart is upside down
                // (alpha angle between 180 and 360 degrees)
                // it is needed to add column width to calculated value.
                if (options3d.alpha >= 90 && options3d.alpha <= 270) {
                    dLPosition.y += xWidth;
                }
            }
            dLPosition = Column3DComposition_perspective([dLPosition], chart, true, false)[0];
            stackBox.x = dLPosition.x - xWidth / 2;
            stackBox.y = dLPosition.y;
        }
    }
    return stackBox;
}
/* *
 *
 *  Default Export
 *
 * */
const Column3DComposition = {
    compose: Column3DComposition_compose
};
/* harmony default export */ const Column3D_Column3DComposition = (Column3DComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * Depth of the columns in a 3D column chart.
 *
 * @type      {number}
 * @default   25
 * @since     4.0
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption plotOptions.column.depth
 */
/**
 * 3D columns only. The color of the edges. Similar to `borderColor`, except it
 * defaults to the same color as the column.
 *
 * @type      {Highcharts.ColorString}
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption plotOptions.column.edgeColor
 */
/**
 * 3D columns only. The width of the colored edges.
 *
 * @type      {number}
 * @default   1
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption plotOptions.column.edgeWidth
 */
/**
 * The spacing between columns on the Z Axis in a 3D chart.
 *
 * @type      {number}
 * @default   1
 * @since     4.0
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption plotOptions.column.groupZPadding
 */
''; // Keeps doclets above in transpiled file

;// ./code/es-modules/Series/Pie3D/Pie3DPoint.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  3D pie series
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { pie: { prototype: { pointClass: PiePoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class Pie3DPoint extends PiePoint {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    haloPath() {
        return this.series?.chart.is3d() ?
            [] : super.haloPath.apply(this, arguments);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Pie3D_Pie3DPoint = (Pie3DPoint);

;// ./code/es-modules/Series/Pie3D/Pie3DSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  3D pie series
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed: Pie3DSeries_composed, deg2rad: Pie3DSeries_deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { pie: PieSeries } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

/* *
 *
 *  Class
 *
 * */
class Pie3DSeries extends PieSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass) {
        if (pushUnique(Pie3DSeries_composed, 'Pie3D')) {
            SeriesClass.types.pie = Pie3DSeries;
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    addPoint() {
        super.addPoint.apply(this, arguments);
        if (this.chart.is3d()) {
            // Destroy (and rebuild) everything!!!
            this.update(this.userOptions, true); // #3845 pass the old options
        }
    }
    /**
     * @private
     */
    animate(init) {
        if (!this.chart.is3d()) {
            super.animate.apply(this, arguments);
        }
        else {
            const center = this.center, group = this.group, markerGroup = this.markerGroup;
            let animation = this.options.animation, attribs;
            if (animation === true) {
                animation = {};
            }
            // Initialize the animation
            if (init) {
                // Scale down the group and place it in the center
                group.oldtranslateX = pick(group.oldtranslateX, group.translateX);
                group.oldtranslateY = pick(group.oldtranslateY, group.translateY);
                attribs = {
                    translateX: center[0],
                    translateY: center[1],
                    scaleX: 0.001, // #1499
                    scaleY: 0.001
                };
                group.attr(attribs);
                if (markerGroup) {
                    markerGroup.attrSetters = group.attrSetters;
                    markerGroup.attr(attribs);
                }
                // Run the animation
            }
            else {
                attribs = {
                    translateX: group.oldtranslateX,
                    translateY: group.oldtranslateY,
                    scaleX: 1,
                    scaleY: 1
                };
                group.animate(attribs, animation);
                if (markerGroup) {
                    markerGroup.animate(attribs, animation);
                }
            }
        }
    }
    /**
     * @private
     */
    getDataLabelPosition(point, distance) {
        const labelPosition = super.getDataLabelPosition(point, distance);
        if (this.chart.is3d()) {
            const options3d = this.chart.options.chart.options3d, shapeArgs = point.shapeArgs, r = shapeArgs.r, 
            // #3240 issue with dataLabels for 0 and null values
            a1 = ((shapeArgs.alpha || options3d?.alpha) *
                Pie3DSeries_deg2rad), b1 = ((shapeArgs.beta || options3d?.beta) *
                Pie3DSeries_deg2rad), a2 = (shapeArgs.start + shapeArgs.end) / 2, connectorPosition = labelPosition.connectorPosition, yOffset = (-r * (1 - Math.cos(a1)) * Math.sin(a2)), xOffset = r * (Math.cos(b1) - 1) * Math.cos(a2);
            // Apply perspective on label positions
            for (const coordinates of [
                labelPosition?.natural,
                connectorPosition.breakAt,
                connectorPosition.touchingSliceAt
            ]) {
                coordinates.x += xOffset;
                coordinates.y += yOffset;
            }
        }
        return labelPosition;
    }
    /**
     * @private
     */
    pointAttribs(point) {
        const attr = super.pointAttribs.apply(this, arguments), options = this.options;
        if (this.chart.is3d() && !this.chart.styledMode) {
            attr.stroke = options.edgeColor || point.color || this.color;
            attr['stroke-width'] = pick(options.edgeWidth, 1);
        }
        return attr;
    }
    /**
     * @private
     */
    translate() {
        super.translate.apply(this, arguments);
        // Do not do this if the chart is not 3D
        if (!this.chart.is3d()) {
            return;
        }
        const series = this, seriesOptions = series.options, depth = seriesOptions.depth || 0, options3d = series.chart.options.chart.options3d, alpha = options3d.alpha, beta = options3d.beta;
        let z = seriesOptions.stacking ?
            (seriesOptions.stack || 0) * depth :
            series._i * depth;
        z += depth / 2;
        if (seriesOptions.grouping !== false) {
            z = 0;
        }
        for (const point of series.points) {
            const shapeArgs = point.shapeArgs;
            point.shapeType = 'arc3d';
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            const angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
                translateX: Math.round(Math.cos(angle) *
                    seriesOptions.slicedOffset *
                    Math.cos(alpha * Pie3DSeries_deg2rad)),
                translateY: Math.round(Math.sin(angle) *
                    seriesOptions.slicedOffset *
                    Math.cos(alpha * Pie3DSeries_deg2rad))
            };
        }
    }
    /**
     * @private
     */
    drawTracker() {
        super.drawTracker.apply(this, arguments);
        // Do not do this if the chart is not 3D
        if (!this.chart.is3d()) {
            return;
        }
        for (const point of this.points) {
            if (point.graphic) {
                for (const face of ['out', 'inn', 'side1', 'side2']) {
                    if (point.graphic) {
                        point.graphic[face].element.point = point;
                    }
                }
            }
        }
    }
}
extend(Pie3DSeries.prototype, {
    pointClass: Pie3D_Pie3DPoint
});
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Pie3D_Pie3DSeries = (Pie3DSeries);
/* *
 *
 *  API Options
 *
 * */
/**
 * The thickness of a 3D pie.
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption plotOptions.pie.depth
 */
''; // Keeps doclets above after transpilation

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series","types","scatter"],"commonjs":["highcharts","Series","types","scatter"],"commonjs2":["highcharts","Series","types","scatter"],"root":["Highcharts","Series","types","scatter"]}
var highcharts_Series_types_scatter_commonjs_highcharts_Series_types_scatter_commonjs2_highcharts_Series_types_scatter_root_Highcharts_Series_types_scatter_ = __webpack_require__(632);
var highcharts_Series_types_scatter_commonjs_highcharts_Series_types_scatter_commonjs2_highcharts_Series_types_scatter_root_Highcharts_Series_types_scatter_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_types_scatter_commonjs_highcharts_Series_types_scatter_commonjs2_highcharts_Series_types_scatter_root_Highcharts_Series_types_scatter_);
;// ./code/es-modules/Series/Scatter3D/Scatter3DPoint.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Scatter 3D series.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { pointClass: ScatterPoint } = (highcharts_Series_types_scatter_commonjs_highcharts_Series_types_scatter_commonjs2_highcharts_Series_types_scatter_root_Highcharts_Series_types_scatter_default()).prototype;
/* *
 *
 *  Class
 *
 * */
class Scatter3DPoint extends ScatterPoint {
    /* *
     *
     *  Functions
     *
     * */
    applyOptions() {
        super.applyOptions.apply(this, arguments);
        if (!defined(this.z)) {
            this.z = 0;
        }
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Scatter3D_Scatter3DPoint = (Scatter3DPoint);

;// ./code/es-modules/Series/Scatter3D/Scatter3DSeriesDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Scatter 3D series.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * A 3D scatter plot uses x, y and z coordinates to display values for three
 * variables for a set of data.
 *
 * @sample {highcharts} highcharts/3d/scatter/
 *         Simple 3D scatter
 * @sample {highcharts} highcharts/demo/3d-scatter-draggable
 *         Draggable 3d scatter
 *
 * @extends      plotOptions.scatter
 * @excluding    boostThreshold, boostBlending, cluster, dragDrop,
 *               legendSymbolColor
 * @product      highcharts
 * @requires     highcharts-3d
 * @optionparent plotOptions.scatter3d
 */
const Scatter3DSeriesDefaults = {
    tooltip: {
        pointFormat: 'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>'
    }
};
/**
 * A `scatter3d` series. If the [type](#series.scatter3d.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.scatter3d
 * @excluding boostThreshold, boostBlending
 * @product   highcharts
 * @requires  highcharts-3d
 * @apioption series.scatter3d
 */
/**
 * An array of data points for the series. For the `scatter3d` series
 * type, points can be given in the following ways:
 *
 * 1.  An array of arrays with 3 values. In this case, the values correspond
 * to `x,y,z`. If the first value is a string, it is applied as the name
 * of the point, and the `x` value is inferred.
 *
 *  ```js
 *     data: [
 *         [0, 0, 1],
 *         [1, 8, 7],
 *         [2, 9, 2]
 *     ]
 *  ```
 *
 * 3.  An array of objects with named values. The following snippet shows only a
 * few settings, see the complete options set below. If the total number of data
 * points exceeds the series'
 * [turboThreshold](#series.scatter3d.turboThreshold), this option is not
 * available.
 *
 *  ```js
 *     data: [{
 *         x: 1,
 *         y: 2,
 *         z: 24,
 *         name: "Point2",
 *         color: "#00FF00"
 *     }, {
 *         x: 1,
 *         y: 4,
 *         z: 12,
 *         name: "Point1",
 *         color: "#FF00FF"
 *     }]
 *  ```
 *
 * @sample {highcharts} highcharts/chart/reflow-true/
 *         Numerical values
 * @sample {highcharts} highcharts/series/data-array-of-arrays/
 *         Arrays of numeric x and y
 * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
 *         Arrays of datetime x and y
 * @sample {highcharts} highcharts/series/data-array-of-name-value/
 *         Arrays of point.name and y
 * @sample {highcharts} highcharts/series/data-array-of-objects/
 *         Config objects
 *
 * @type      {Array<Array<number>|*>}
 * @extends   series.scatter.data
 * @product   highcharts
 * @apioption series.scatter3d.data
 */
/**
 * The z value for each data point.
 *
 * @type      {number}
 * @product   highcharts
 * @apioption series.scatter3d.data.z
 */
''; // Keeps doclets above
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Scatter3D_Scatter3DSeriesDefaults = (Scatter3DSeriesDefaults);

;// ./code/es-modules/Series/Scatter3D/Scatter3DSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Scatter 3D series.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { pointCameraDistance: Scatter3DSeries_pointCameraDistance } = Core_Math3D;





/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.scatter3d
 *
 * @augments Highcharts.Series
 */
class Scatter3DSeries extends (highcharts_Series_types_scatter_commonjs_highcharts_Series_types_scatter_commonjs2_highcharts_Series_types_scatter_root_Highcharts_Series_types_scatter_default()) {
    /* *
     *
     *  Functions
     *
     * */
    pointAttribs(point) {
        const attribs = super.pointAttribs.apply(this, arguments);
        if (this.chart.is3d() && point) {
            attribs.zIndex =
                Scatter3DSeries_pointCameraDistance(point, this.chart);
        }
        return attribs;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
Scatter3DSeries.defaultOptions = merge((highcharts_Series_types_scatter_commonjs_highcharts_Series_types_scatter_commonjs2_highcharts_Series_types_scatter_root_Highcharts_Series_types_scatter_default()).defaultOptions, Scatter3D_Scatter3DSeriesDefaults);
extend(Scatter3DSeries.prototype, {
    axisTypes: ['xAxis', 'yAxis', 'zAxis'],
    // Require direct touch rather than using the k-d-tree, because the
    // k-d-tree currently doesn't take the xyz coordinate system into
    // account (#4552)
    directTouch: true,
    parallelArrays: ['x', 'y', 'z'],
    pointArrayMap: ['x', 'y', 'z'],
    pointClass: Scatter3D_Scatter3DPoint
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('scatter3d', Scatter3DSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Scatter3D_Scatter3DSeries = ((/* unused pure expression or super */ null && (Scatter3DSeries)));

;// ./code/es-modules/masters/highcharts-3d.src.js














const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Compositions
Area3D_Area3DSeries.compose(G.Series.types.area);
Axis3DComposition.compose(G.Axis, G.Tick);
Chart_Chart3D.compose(G.Chart, G.Fx);
Column3D_Column3DComposition.compose(G.Series, (highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default()));
Pie3D_Pie3DSeries.compose(G.Series);
Series_Series3D.compose(G.Series);
SVG_SVGRenderer3D.compose(highcharts_RendererRegistry_commonjs_highcharts_RendererRegistry_commonjs2_highcharts_RendererRegistry_root_Highcharts_RendererRegistry_default().getRendererType());
Axis_ZAxis.compose(G.Chart);
/* harmony default export */ const highcharts_3d_src = (G);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});