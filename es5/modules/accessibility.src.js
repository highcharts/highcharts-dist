// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/accessibility
 * @requires highcharts
 *
 * Accessibility module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Templating"], root["_Highcharts"]["AST"], root["_Highcharts"]["Legend"], root["_Highcharts"]["Axis"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"], root["_Highcharts"]["Point"], root["_Highcharts"]["Series"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/accessibility", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Templating"],amd1["AST"],amd1["Legend"],amd1["Axis"],amd1["SeriesRegistry"],amd1["SVGRenderer"],amd1["Point"],amd1["Series"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/accessibility"] = factory(root["_Highcharts"], root["_Highcharts"]["Templating"], root["_Highcharts"]["AST"], root["_Highcharts"]["Legend"], root["_Highcharts"]["Axis"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"], root["_Highcharts"]["Point"], root["_Highcharts"]["Series"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Templating"], root["Highcharts"]["AST"], root["Highcharts"]["Legend"], root["Highcharts"]["Axis"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["SVGRenderer"], root["Highcharts"]["Point"], root["Highcharts"]["Series"]);
})(typeof window === 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__984__, __WEBPACK_EXTERNAL_MODULE__660__, __WEBPACK_EXTERNAL_MODULE__632__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__540__, __WEBPACK_EXTERNAL_MODULE__260__, __WEBPACK_EXTERNAL_MODULE__820__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 260:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__260__;

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

/***/ 632:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__632__;

/***/ }),

/***/ 660:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__660__;

/***/ }),

/***/ 820:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__820__;

/***/ }),

/***/ 944:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

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
  "default": function() { return /* binding */ accessibility_src; }
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

;// ./code/es5/es-modules/Accessibility/Utils/HTMLUtilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Utility functions for accessibility module.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



var HTMLUtilities_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, HTMLUtilities_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;
/* *
 *
 *  Constants
 *
 * */
var simulatedEventTarget = HTMLUtilities_win.EventTarget && new HTMLUtilities_win.EventTarget() || 'none';
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 * @param {Highcharts.HTMLDOMElement} el
 * @param {string} className
 * @return {void}
 */
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (el.className.indexOf(className) < 0) {
        // Note: Dumb check for class name exists, should be fine for practical
        // use cases, but will return false positives if the element has a class
        // that contains the className.
        el.className += ' ' + className;
    }
}
/**
 * @private
 * @param {Highcharts.HTMLDOMElement} el
 * @param {string} className
 * @return {void}
 */
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else {
        // Note: Dumb logic that will break if the element has a class name that
        // consists of className plus something else.
        el.className = el.className.replace(new RegExp(className, 'g'), '');
    }
}
/**
 * Utility function to clone a mouse event for re-dispatching.
 * @private
 */
function cloneMouseEvent(e) {
    if (typeof HTMLUtilities_win.MouseEvent === 'function') {
        return new HTMLUtilities_win.MouseEvent(e.type, e);
    }
    // No MouseEvent support, try using initMouseEvent
    if (HTMLUtilities_doc === null || HTMLUtilities_doc === void 0 ? void 0 : HTMLUtilities_doc.createEvent) {
        var evt = HTMLUtilities_doc.createEvent('MouseEvent');
        if (evt.initMouseEvent) {
            evt.initMouseEvent(e.type, e.bubbles, // #10561, #12161
            e.cancelable, e.view || HTMLUtilities_win, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
            return evt;
        }
    }
    return getFakeMouseEvent(e.type);
}
/**
 * Utility function to clone a touch event for re-dispatching.
 * @private
 */
function cloneTouchEvent(e) {
    var touchListToTouchArray = function (l) {
            var touchArray = [];
        for (var i = 0; i < l.length; ++i) {
            var item = l.item(i);
            if (item) {
                touchArray.push(item);
            }
        }
        return touchArray;
    };
    if (typeof HTMLUtilities_win.TouchEvent === 'function') {
        var newEvent = new HTMLUtilities_win.TouchEvent(e.type, {
                touches: touchListToTouchArray(e.touches),
                targetTouches: touchListToTouchArray(e.targetTouches),
                changedTouches: touchListToTouchArray(e.changedTouches),
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                altKey: e.altKey,
                metaKey: e.metaKey,
                bubbles: e.bubbles,
                cancelable: e.cancelable,
                composed: e.composed,
                detail: e.detail,
                view: e.view
            });
        if (e.defaultPrevented) {
            newEvent.preventDefault();
        }
        return newEvent;
    }
    var fakeEvt = cloneMouseEvent(e);
    fakeEvt.touches = e.touches;
    fakeEvt.changedTouches = e.changedTouches;
    fakeEvt.targetTouches = e.targetTouches;
    return fakeEvt;
}
/**
 * @private
 */
function escapeStringForHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}
/**
 * Get an element by ID
 * @private
 */
function getElement(id) {
    return HTMLUtilities_doc.getElementById(id);
}
/**
 * Get a fake mouse event of a given type. If relatedTarget is not given,
 * it will point to simulatedEventTarget, as an indicator that the event
 * is fake.
 * @private
 */
function getFakeMouseEvent(type, position, relatedTarget) {
    var pos = position || {
            x: 0,
            y: 0
        };
    if (typeof HTMLUtilities_win.MouseEvent === 'function') {
        return new HTMLUtilities_win.MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            composed: true,
            button: 0,
            buttons: 1,
            relatedTarget: relatedTarget || simulatedEventTarget,
            view: HTMLUtilities_win,
            detail: type === 'click' ? 1 : 0,
            screenX: pos.x,
            screenY: pos.y,
            clientX: pos.x,
            clientY: pos.y
        });
    }
    // No MouseEvent support, try using initMouseEvent
    if (HTMLUtilities_doc === null || HTMLUtilities_doc === void 0 ? void 0 : HTMLUtilities_doc.createEvent) {
        var evt = HTMLUtilities_doc.createEvent('MouseEvent');
        if (evt.initMouseEvent) {
            evt.initMouseEvent(type, true, // Bubble
            true, // Cancel
            HTMLUtilities_win, // View
            type === 'click' ? 1 : 0, // Detail
            // Coords
            pos.x, pos.y, pos.x, pos.y, 
            // Pressed keys
            false, false, false, false, 0, // Button
            null // Related target
            );
            return evt;
        }
    }
    return { type: type };
}
/**
 * Get an appropriate heading level for an element. Corresponds to the
 * heading level below the previous heading in the DOM.
 *
 * Note: Only detects previous headings in the DOM that are siblings,
 * ancestors, or previous siblings of ancestors. Headings that are nested below
 * siblings of ancestors (cousins et.al) are not picked up. This is because it
 * is ambiguous whether or not the nesting is for layout purposes or indicates a
 * separate section.
 *
 * @private
 * @param {Highcharts.HTMLDOMElement} [element]
 * @return {string} The heading tag name (h1, h2 etc).
 * If no nearest heading is found, "p" is returned.
 */
function getHeadingTagNameForElement(element) {
    var getIncreasedHeadingLevel = function (tagName) {
            var headingLevel = parseInt(tagName.slice(1), 10),
        newLevel = Math.min(6,
        headingLevel + 1);
        return 'h' + newLevel;
    };
    var isHeading = function (tagName) { return /^H[1-6]$/i.test(tagName); };
    var getPreviousSiblingsHeading = function (el) {
            var sibling = el;
        while (sibling = sibling.previousSibling) { // eslint-disable-line
            var tagName = sibling.tagName || '';
            if (isHeading(tagName)) {
                return tagName;
            }
        }
        return '';
    };
    var getHeadingRecursive = function (el) {
            var prevSiblingsHeading = getPreviousSiblingsHeading(el);
        if (prevSiblingsHeading) {
            return getIncreasedHeadingLevel(prevSiblingsHeading);
        }
        // No previous siblings are headings, try parent node
        var parent = el.parentElement;
        if (!parent) {
            return 'h6';
        }
        var parentTagName = parent.tagName;
        if (isHeading(parentTagName)) {
            return getIncreasedHeadingLevel(parentTagName);
        }
        return getHeadingRecursive(parent);
    };
    return getHeadingRecursive(element);
}
/**
 * Remove an element from the DOM.
 * @private
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} [element]
 * @return {void}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Remove all child nodes from an element.
 * @private
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} [element]
 * @return {void}
 */
function removeChildNodes(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}
/**
 * Utility function. Reverses child nodes of a DOM element.
 * @private
 */
function reverseChildNodes(node) {
    var i = node.childNodes.length;
    while (i--) {
        node.appendChild(node.childNodes[i]);
    }
}
/**
 * Used for aria-label attributes, painting on a canvas will fail if the
 * text contains tags.
 * @private
 */
function stripHTMLTagsFromString(str, isForExport) {
    if (isForExport === void 0) { isForExport = false; }
    return (typeof str === 'string') ?
        (isForExport ?
            str.replace(/<\/?[^>]+(>|$)/g, '') :
            str.replace(/<\/?(?!\s)[^>]+(>|$)/g, '')) : str;
}
/**
 * Utility function for hiding an element visually, but still keeping it
 * available to screen reader users.
 * @private
 */
function visuallyHideElement(element) {
    css(element, {
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        clip: 'rect(1px, 1px, 1px, 1px)',
        marginTop: '-3px',
        '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=1)',
        filter: 'alpha(opacity=1)',
        opacity: 0.01
    });
}
/* *
 *
 *  Default Export
 *
 * */
var HTMLUtilities = {
    addClass: addClass,
    cloneMouseEvent: cloneMouseEvent,
    cloneTouchEvent: cloneTouchEvent,
    escapeStringForHTML: escapeStringForHTML,
    getElement: getElement,
    getFakeMouseEvent: getFakeMouseEvent,
    getHeadingTagNameForElement: getHeadingTagNameForElement,
    removeChildNodes: removeChildNodes,
    removeClass: removeClass,
    removeElement: removeElement,
    reverseChildNodes: reverseChildNodes,
    simulatedEventTarget: simulatedEventTarget,
    stripHTMLTagsFromString: stripHTMLTagsFromString,
    visuallyHideElement: visuallyHideElement
};
/* harmony default export */ var Utils_HTMLUtilities = (HTMLUtilities);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Templating"],"commonjs":["highcharts","Templating"],"commonjs2":["highcharts","Templating"],"root":["Highcharts","Templating"]}
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_ = __webpack_require__(984);
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default = /*#__PURE__*/__webpack_require__.n(highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_);
;// ./code/es5/es-modules/Accessibility/A11yI18n.js
/* *
 *
 *  Accessibility module - internationalization support
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format;

/* *
 *
 *  Composition
 *
 * */
var A11yI18nComposition;
(function (A11yI18nComposition) {
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
    function compose(ChartClass) {
        var chartProto = ChartClass.prototype;
        if (!chartProto.langFormat) {
            chartProto.langFormat = langFormat;
        }
    }
    A11yI18nComposition.compose = compose;
    /**
     * I18n utility function.  Format a single array or plural statement in a
     * format string.  If the statement is not an array or plural statement,
     * returns the statement within brackets.  Invalid array statements return
     * an empty string.
     *
     * @private
     * @function formatExtendedStatement
     * @param {string} statement
     * @param {Highcharts.Dictionary<*>} ctx
     * Context to apply to the format string.
     */
    function formatExtendedStatement(statement, ctx) {
        var eachStart = statement.indexOf('#each('), pluralStart = statement.indexOf('#plural('), indexStart = statement.indexOf('['), indexEnd = statement.indexOf(']');
        var arr,
            result;
        // Dealing with an each-function?
        if (eachStart > -1) {
            var eachEnd = statement.slice(eachStart).indexOf(')') + eachStart, preEach = statement.substring(0, eachStart), postEach = statement.substring(eachEnd + 1), eachStatement = statement.substring(eachStart + 6, eachEnd), eachArguments = eachStatement.split(',');
            var lenArg = Number(eachArguments[1]),
                len = void 0;
            result = '';
            arr = getNestedProperty(eachArguments[0], ctx);
            if (arr) {
                lenArg = isNaN(lenArg) ? arr.length : lenArg;
                len = lenArg < 0 ?
                    arr.length + lenArg :
                    Math.min(lenArg, arr.length); // Overshoot
                // Run through the array for the specified length
                for (var i = 0; i < len; ++i) {
                    result += preEach + arr[i] + postEach;
                }
            }
            return result.length ? result : '';
        }
        // Dealing with a plural-function?
        if (pluralStart > -1) {
            var pluralEnd = (statement.slice(pluralStart).indexOf(')') + pluralStart), pluralStatement = statement.substring(pluralStart + 8, pluralEnd), pluralArguments = pluralStatement.split(','), num = Number(getNestedProperty(pluralArguments[0], ctx));
            switch (num) {
                case 0:
                    result = pick(pluralArguments[4], pluralArguments[1]);
                    break;
                case 1:
                    result = pick(pluralArguments[2], pluralArguments[1]);
                    break;
                case 2:
                    result = pick(pluralArguments[3], pluralArguments[1]);
                    break;
                default:
                    result = pluralArguments[1];
            }
            return result ? stringTrim(result) : '';
        }
        // Array index
        if (indexStart > -1) {
            var arrayName = statement.substring(0,
                indexStart),
                ix = Number(statement.substring(indexStart + 1,
                indexEnd));
            var val = void 0;
            arr = getNestedProperty(arrayName, ctx);
            if (!isNaN(ix) && arr) {
                if (ix < 0) {
                    val = arr[arr.length + ix];
                    // Handle negative overshoot
                    if (typeof val === 'undefined') {
                        val = arr[0];
                    }
                }
                else {
                    val = arr[ix];
                    // Handle positive overshoot
                    if (typeof val === 'undefined') {
                        val = arr[arr.length - 1];
                    }
                }
            }
            return typeof val !== 'undefined' ? val : '';
        }
        // Standard substitution, delegate to format or similar
        return '{' + statement + '}';
    }
    /* eslint-disable max-len */
    /**
     * i18n formatting function.  Extends Highcharts.format() functionality by
     * also handling arrays and plural conditionals.  Arrays can be indexed as
     * follows:
     *
     * - Format: 'This is the first index: {myArray[0]}. The last: {myArray[-1]}.'
     *
     * - Context: { myArray: [0, 1, 2, 3, 4, 5] }
     *
     * - Result: 'This is the first index: 0. The last: 5.'
     *
     *
     * They can also be iterated using the #each() function.  This will repeat
     * the contents of the bracket expression for each element.  Example:
     *
     * - Format: 'List contains: {#each(myArray)cm }'
     *
     * - Context: { myArray: [0, 1, 2] }
     *
     * - Result: 'List contains: 0cm 1cm 2cm '
     *
     *
     * The #each() function optionally takes a length parameter.  If positive,
     * this parameter specifies the max number of elements to iterate through.
     * If negative, the function will subtract the number from the length of the
     * array.  Use this to stop iterating before the array ends.  Example:
     *
     * - Format: 'List contains: {#each(myArray, -1), }and {myArray[-1]}.'
     *
     * - Context: { myArray: [0, 1, 2, 3] }
     *
     * - Result: 'List contains: 0, 1, 2, and 3.'
     *
     *
     * Use the #plural() function to pick a string depending on whether or not a
     * context object is 1.  Arguments are #plural(obj, plural, singular).
     * Example:
     *
     * - Format: 'Has {numPoints} {#plural(numPoints, points, point}.'
     *
     * - Context: { numPoints: 5 }
     *
     * - Result: 'Has 5 points.'
     *
     *
     * Optionally there are additional parameters for dual and none:
     * #plural(obj, plural, singular, dual, none).  Example:
     *
     * - Format: 'Has {#plural(numPoints, many points, one point, two points,
     *   none}.'
     *
     * - Context: { numPoints: 2 }
     *
     * - Result: 'Has two points.'
     *
     *
     * The dual or none parameters will take precedence if they are supplied.
     *
     * @requires modules/accessibility
     *
     * @function Highcharts.i18nFormat
     *
     * @param {string} formatString
     * The string to format.
     *
     * @param {Highcharts.Dictionary<*>} context
     * Context to apply to the format string.
     *
     * @param {Highcharts.Chart} chart
     * A `Chart` instance with a time object and numberFormatter, passed on to
     * format().
     *
     * @deprecated
     *
     * @return {string}
     * The formatted string.
     */
    function i18nFormat(formatString, context, chart) {
        var getFirstBracketStatement = function (sourceStr, offset) {
                var str = sourceStr.slice(offset || 0), startBracket = str.indexOf('{'), endBracket = str.indexOf('}');
            if (startBracket > -1 && endBracket > startBracket) {
                return {
                    statement: str.substring(startBracket + 1, endBracket),
                    begin: offset + startBracket + 1,
                    end: offset + endBracket
                };
            }
        }, tokens = [];
        var bracketRes,
            constRes,
            cursor = 0;
        // Tokenize format string into bracket statements and constants
        do {
            bracketRes = getFirstBracketStatement(formatString, cursor);
            constRes = formatString.substring(cursor, bracketRes && bracketRes.begin - 1);
            // If we have constant content before this bracket statement, add it
            if (constRes.length) {
                tokens.push({
                    value: constRes,
                    type: 'constant'
                });
            }
            // Add the bracket statement
            if (bracketRes) {
                tokens.push({
                    value: bracketRes.statement,
                    type: 'statement'
                });
            }
            cursor = bracketRes ? bracketRes.end + 1 : cursor + 1;
        } while (bracketRes);
        // Perform the formatting.  The formatArrayStatement function returns
        // the statement in brackets if it is not an array statement, which
        // means it gets picked up by format below.
        tokens.forEach(function (token) {
            if (token.type === 'statement') {
                token.value = formatExtendedStatement(token.value, context);
            }
        });
        // Join string back together and pass to format to pick up non-array
        // statements.
        return format(tokens.reduce(function (acc, cur) { return acc + cur.value; }, ''), context, chart);
    }
    A11yI18nComposition.i18nFormat = i18nFormat;
    /* eslint-enable max-len */
    /**
     * Apply context to a format string from lang options of the chart.
     *
     * @requires modules/accessibility
     *
     * @function Highcharts.Chart#langFormat
     *
     * @param {string} langKey
     * Key (using dot notation) into lang option structure.
     *
     * @param {Highcharts.Dictionary<*>} context
     * Context to apply to the format string.
     *
     * @return {string}
     * The formatted string.
     */
    function langFormat(langKey, context) {
        var keys = langKey.split('.');
        var formatString = this.options.lang,
            i = 0;
        for (; i < keys.length; ++i) {
            formatString = formatString && formatString[keys[i]];
        }
        return typeof formatString === 'string' ?
            i18nFormat(formatString, context, this) : '';
    }
    /**
     * @private
     * @function stringTrim
     *
     * @param {string} str
     * The input string
     *
     * @return {string}
     * The trimmed string
     */
    function stringTrim(str) {
        return str.trim && str.trim() || str.replace(/^\s+|\s+$/g, '');
    }
})(A11yI18nComposition || (A11yI18nComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var A11yI18n = (A11yI18nComposition);

;// ./code/es5/es-modules/Accessibility/Utils/ChartUtilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Utils for dealing with charts.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var ChartUtilities_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var stripHTMLTags = Utils_HTMLUtilities.stripHTMLTagsFromString;

/* *
 *
 *  Functions
 *
 * */
/**
 * Fire an event on an element that is either wrapped by Highcharts,
 * or a DOM element.
 * @private
 */
function fireEventOnWrappedOrUnwrappedElement(el, eventObject) {
    var type = eventObject.type;
    var hcEvents = el.hcEvents;
    if (!!(ChartUtilities_doc === null || ChartUtilities_doc === void 0 ? void 0 : ChartUtilities_doc.createEvent) &&
        (el.dispatchEvent || el.fireEvent)) {
        if (el.dispatchEvent) {
            el.dispatchEvent(eventObject);
        }
        else {
            el.fireEvent(type, eventObject);
        }
    }
    else if (hcEvents && hcEvents[type]) {
        fireEvent(el, type, eventObject);
    }
    else if (el.element) {
        fireEventOnWrappedOrUnwrappedElement(el.element, eventObject);
    }
}
/**
 * @private
 */
function getChartTitle(chart) {
    return stripHTMLTags(chart.options.title.text ||
        chart.langFormat('accessibility.defaultChartTitle', { chart: chart }), chart.renderer.forExport);
}
/**
 * Return string with the axis name/title.
 * @private
 */
function getAxisDescription(axis) {
    var _a,
        _b;
    return axis && (((_a = axis.options.accessibility) === null || _a === void 0 ? void 0 : _a.description) ||
        ((_b = axis.axisTitle) === null || _b === void 0 ? void 0 : _b.textStr) ||
        axis.options.id ||
        axis.categories && axis.chart.langFormat('accessibility.axis.defaultAxisNames.categories', {}) ||
        axis.dateTime && axis.chart.langFormat('accessibility.axis.defaultAxisNames.time', {}) ||
        axis.chart.langFormat('accessibility.axis.defaultAxisNames.values', {}));
}
/**
 * Return string with text description of the axis range.
 * @private
 * @param {Highcharts.Axis} axis
 * The axis to get range desc of.
 * @return {string}
 * A string with the range description for the axis.
 */
function getAxisRangeDescription(axis) {
    var axisOptions = axis.options || {};
    // Handle overridden range description
    if (axisOptions.accessibility &&
        typeof axisOptions.accessibility.rangeDescription !== 'undefined') {
        return axisOptions.accessibility.rangeDescription;
    }
    // Handle category axes
    if (axis.categories) {
        return getCategoryAxisRangeDesc(axis);
    }
    // Use time range, not from-to?
    if (axis.dateTime && (axis.min === 0 || axis.dataMin === 0)) {
        return getAxisTimeLengthDesc(axis);
    }
    // Just use from and to.
    // We have the range and the unit to use, find the desc format
    return getAxisFromToDescription(axis);
}
/**
 * Describe the range of a category axis.
 * @private
 */
function getCategoryAxisRangeDesc(axis) {
    var chart = axis.chart;
    if (axis.dataMax && axis.dataMin) {
        return chart.langFormat('accessibility.axis.rangeCategories', {
            chart: chart,
            axis: axis,
            numCategories: axis.dataMax - axis.dataMin + 1
        });
    }
    return '';
}
/**
 * Describe the length of the time window shown on an axis.
 * @private
 */
function getAxisTimeLengthDesc(axis) {
    var chart = axis.chart,
        range = {},
        min = axis.dataMin || axis.min || 0,
        max = axis.dataMax || axis.max || 0;
    var rangeUnit = 'Seconds';
    range.Seconds = (max - min) / 1000;
    range.Minutes = range.Seconds / 60;
    range.Hours = range.Minutes / 60;
    range.Days = range.Hours / 24;
    ['Minutes', 'Hours', 'Days'].forEach(function (unit) {
        if (range[unit] > 2) {
            rangeUnit = unit;
        }
    });
    var rangeValue = range[rangeUnit].toFixed(rangeUnit !== 'Seconds' &&
            rangeUnit !== 'Minutes' ? 1 : 0 // Use decimals for days/hours
        );
    // We have the range and the unit to use, find the desc format
    return chart.langFormat('accessibility.axis.timeRange' + rangeUnit, {
        chart: chart,
        axis: axis,
        range: rangeValue.replace('.0', '')
    });
}
/**
 * Describe an axis from-to range.
 * @private
 */
function getAxisFromToDescription(axis) {
    var chart = axis.chart,
        options = chart.options,
        dateRangeFormat = (options &&
            options.accessibility &&
            options.accessibility.screenReaderSection.axisRangeDateFormat ||
            ''),
        extremes = {
            min: axis.dataMin || axis.min || 0,
            max: axis.dataMax || axis.max || 0
        },
        format = function (key) {
            return axis.dateTime ?
                chart.time.dateFormat(dateRangeFormat,
        extremes[key]) :
                extremes[key].toString();
    };
    return chart.langFormat('accessibility.axis.rangeFromTo', {
        chart: chart,
        axis: axis,
        rangeFrom: format('min'),
        rangeTo: format('max')
    });
}
/**
 * Get the DOM element for the first point in the series.
 * @private
 * @param {Highcharts.Series} series
 * The series to get element for.
 * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement|undefined}
 * The DOM element for the point.
 */
function getSeriesFirstPointElement(series) {
    if (series.points && series.points.length) {
        var firstPointWithGraphic = find(series.points,
            function (p) { return !!p.graphic; });
        return (firstPointWithGraphic &&
            firstPointWithGraphic.graphic &&
            firstPointWithGraphic.graphic.element);
    }
}
/**
 * Get the DOM element for the series that we put accessibility info on.
 * @private
 * @param {Highcharts.Series} series
 * The series to get element for.
 * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement|undefined}
 * The DOM element for the series
 */
function getSeriesA11yElement(series) {
    var firstPointEl = getSeriesFirstPointElement(series);
    return (firstPointEl &&
        firstPointEl.parentNode || series.graph &&
        series.graph.element || series.group &&
        series.group.element); // Could be tracker series depending on series type
}
/**
 * Remove aria-hidden from element. Also unhides parents of the element, and
 * hides siblings that are not explicitly unhidden.
 * @private
 */
function unhideChartElementFromAT(chart, element) {
    element.setAttribute('aria-hidden', false);
    if (element === chart.renderTo ||
        !element.parentNode ||
        element.parentNode === ChartUtilities_doc.body // #16126: Full screen printing
    ) {
        return;
    }
    // Hide siblings unless their hidden state is already explicitly set
    Array.prototype.forEach.call(element.parentNode.childNodes, function (node) {
        if (!node.hasAttribute('aria-hidden')) {
            node.setAttribute('aria-hidden', true);
        }
    });
    // Repeat for parent
    unhideChartElementFromAT(chart, element.parentNode);
}
/**
 * Hide series from screen readers.
 * @private
 */
function hideSeriesFromAT(series) {
    var seriesEl = getSeriesA11yElement(series);
    if (seriesEl) {
        seriesEl.setAttribute('aria-hidden', true);
    }
}
/**
 * Get series objects by series name.
 * @private
 */
function getSeriesFromName(chart, name) {
    if (!name) {
        return chart.series;
    }
    return (chart.series || []).filter(function (s) {
        return s.name === name;
    });
}
/**
 * Get point in a series from x/y values.
 * @private
 */
function getPointFromXY(series, x, y) {
    var i = series.length,
        res;
    while (i--) {
        res = find(series[i].points || [], function (p) {
            return p.x === x && p.y === y;
        });
        if (res) {
            return res;
        }
    }
}
/**
 * Get relative position of point on an x/y axis from 0 to 1.
 * @private
 */
function getRelativePointAxisPosition(axis, point) {
    if (!defined(axis.dataMin) || !defined(axis.dataMax)) {
        return 0;
    }
    var axisStart = axis.toPixels(axis.dataMin),
        axisEnd = axis.toPixels(axis.dataMax), 
        // We have to use pixel position because of axis breaks, log axis etc.
        positionProp = axis.coll === 'xAxis' ? 'x' : 'y',
        pointPos = axis.toPixels(point[positionProp] || 0);
    return (pointPos - axisStart) / (axisEnd - axisStart);
}
/**
 * Get relative position of point on an x/y axis from 0 to 1.
 * @private
 */
function scrollAxisToPoint(point) {
    var xAxis = point.series.xAxis,
        yAxis = point.series.yAxis,
        axis = (xAxis && xAxis.scrollbar ? xAxis : yAxis),
        scrollbar = (axis && axis.scrollbar);
    if (scrollbar && defined(scrollbar.to) && defined(scrollbar.from)) {
        var range = scrollbar.to - scrollbar.from;
        var pos = getRelativePointAxisPosition(axis,
            point);
        scrollbar.updatePosition(pos - range / 2, pos + range / 2);
        fireEvent(scrollbar, 'changed', {
            from: scrollbar.from,
            to: scrollbar.to,
            trigger: 'scrollbar',
            DOMEvent: null
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
var ChartUtilities = {
    fireEventOnWrappedOrUnwrappedElement: fireEventOnWrappedOrUnwrappedElement,
    getChartTitle: getChartTitle,
    getAxisDescription: getAxisDescription,
    getAxisRangeDescription: getAxisRangeDescription,
    getPointFromXY: getPointFromXY,
    getSeriesFirstPointElement: getSeriesFirstPointElement,
    getSeriesFromName: getSeriesFromName,
    getSeriesA11yElement: getSeriesA11yElement,
    unhideChartElementFromAT: unhideChartElementFromAT,
    hideSeriesFromAT: hideSeriesFromAT,
    scrollAxisToPoint: scrollAxisToPoint
};
/* harmony default export */ var Utils_ChartUtilities = (ChartUtilities);

;// ./code/es5/es-modules/Accessibility/Utils/DOMElementProvider.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Class that can keep track of elements added to DOM and clean them up on
 *  destroy.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var DOMElementProvider_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var DOMElementProvider_removeElement = Utils_HTMLUtilities.removeElement;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 */
var DOMElementProvider = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function DOMElementProvider() {
        this.elements = [];
    }
    /**
     * Create an element and keep track of it for later removal.
     * Same args as document.createElement
     * @private
     */
    DOMElementProvider.prototype.createElement = function () {
        var el = DOMElementProvider_doc.createElement.apply(DOMElementProvider_doc,
            arguments);
        this.elements.push(el);
        return el;
    };
    /**
     * Destroy created element, removing it from the DOM.
     * @private
     */
    DOMElementProvider.prototype.removeElement = function (element) {
        DOMElementProvider_removeElement(element);
        this.elements.splice(this.elements.indexOf(element), 1);
    };
    /**
     * Destroy all created elements, removing them from the DOM.
     * @private
     */
    DOMElementProvider.prototype.destroyCreatedElements = function () {
        this.elements.forEach(function (element) {
            DOMElementProvider_removeElement(element);
        });
        this.elements = [];
    };
    return DOMElementProvider;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Utils_DOMElementProvider = (DOMElementProvider);

;// ./code/es5/es-modules/Accessibility/Utils/EventProvider.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Class that can keep track of events added, and clean them up on destroy.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

/* *
 *
 *  Imports
 *
 * */


/**
 * @private
 */
var EventProvider = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function EventProvider() {
        this.eventRemovers = [];
    }
    /**
     * Add an event to an element and keep track of it for later removal.
     * Same args as Highcharts.addEvent.
     * @private
     */
    EventProvider.prototype.addEvent = function () {
        var remover = addEvent.apply((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()),
            arguments);
        this.eventRemovers.push({
            element: arguments[0], // HTML element
            remover: remover
        });
        return remover;
    };
    /**
     * Remove added event.
     * @private
     */
    EventProvider.prototype.removeEvent = function (event) {
        var pos = this.eventRemovers.map(function (e) { return e.remover; }).indexOf(event);
        this.eventRemovers[pos].remover();
        this.eventRemovers.splice(pos, 1);
    };
    /**
     * Remove all added events.
     * @private
     */
    EventProvider.prototype.removeAddedEvents = function () {
        this.eventRemovers.map(function (e) { return e.remover; })
            .forEach(function (remover) { return remover(); });
        this.eventRemovers = [];
    };
    return EventProvider;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Utils_EventProvider = (EventProvider);

;// ./code/es5/es-modules/Accessibility/AccessibilityComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component class definition
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var AccessibilityComponent_fireEventOnWrappedOrUnwrappedElement = Utils_ChartUtilities.fireEventOnWrappedOrUnwrappedElement;



var AccessibilityComponent_getFakeMouseEvent = Utils_HTMLUtilities.getFakeMouseEvent;
/* *
 *
 *  Class
 *
 * */
/**
 * The AccessibilityComponent base class, representing a part of the chart that
 * has accessibility logic connected to it. This class can be inherited from to
 * create a custom accessibility component for a chart.
 *
 * Components should take care to destroy added elements and unregister event
 * handlers on destroy. This is handled automatically if using `this.addEvent`
 * and `this.createElement`.
 *
 * @sample highcharts/accessibility/custom-component
 *         Custom accessibility component
 *
 * @requires modules/accessibility
 * @class
 * @name Highcharts.AccessibilityComponent
 */
var AccessibilityComponent = /** @class */ (function () {
    function AccessibilityComponent() {
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Called when accessibility is disabled or chart is destroyed.
     *
     * @function Highcharts.AccessibilityComponent#destroy
     */
    AccessibilityComponent.prototype.destroy = function () { };
    /**
     * Get keyboard navigation handler for this component.
     *
     * @function Highcharts.AccessibilityComponent#getKeyboardNavigation
     * @return   {Highcharts.KeyboardNavigationHandler|Array<Highcharts.KeyboardNavigationHandler>}
     *           The keyboard navigation handler(s) for this component.
     */
    AccessibilityComponent.prototype.getKeyboardNavigation = function () {
        return [];
    };
    /**
     * Called on component initialization.
     *
     * @function Highcharts.AccessibilityComponent#init
     */
    AccessibilityComponent.prototype.init = function () { };
    /**
     * Called on every chart render.
     *
     * @function Highcharts.AccessibilityComponent#onChartRender
     */
    AccessibilityComponent.prototype.onChartRender = function () { };
    /**
     * Called on updates to the chart, including options changes.
     * Note that this is also called on first render of chart.
     *
     * @function Highcharts.AccessibilityComponent#onChartUpdate
     */
    AccessibilityComponent.prototype.onChartUpdate = function () { };
    /**
     * Initialize the class
     * @private
     * @param {Highcharts.Chart} chart The chart object
     * @param {Highcharts.ProxyProvider} proxyProvider The proxy provider of the accessibility module
     */
    AccessibilityComponent.prototype.initBase = function (chart, proxyProvider) {
        this.chart = chart;
        this.eventProvider = new Utils_EventProvider();
        this.domElementProvider = new Utils_DOMElementProvider();
        this.proxyProvider = proxyProvider;
        // Key code enum for common keys
        this.keyCodes = {
            left: 37,
            right: 39,
            up: 38,
            down: 40,
            enter: 13,
            space: 32,
            esc: 27,
            tab: 9,
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36
        };
    };
    /**
     * Add an event to an element and keep track of it for later removal.
     * See EventProvider for details.
     * @private
     */
    AccessibilityComponent.prototype.addEvent = function (el, type, fn, options) {
        return this.eventProvider.addEvent(el, type, fn, options);
    };
    /**
     * Create an element and keep track of it for later removal.
     * See DOMElementProvider for details.
     * @private
     */
    AccessibilityComponent.prototype.createElement = function (tagName, options) {
        return this.domElementProvider.createElement(tagName, options);
    };
    /**
     * Fire a fake click event on an element. It is useful to have this on
     * AccessibilityComponent for users of custom components.
     * @private
     */
    AccessibilityComponent.prototype.fakeClickEvent = function (el) {
        var fakeEvent = AccessibilityComponent_getFakeMouseEvent('click');
        AccessibilityComponent_fireEventOnWrappedOrUnwrappedElement(el, fakeEvent);
    };
    /**
     * Remove traces of the component.
     * @private
     */
    AccessibilityComponent.prototype.destroyBase = function () {
        this.domElementProvider.destroyCreatedElements();
        this.eventProvider.removeAddedEvents();
    };
    return AccessibilityComponent;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Accessibility_AccessibilityComponent = (AccessibilityComponent);

;// ./code/es5/es-modules/Accessibility/KeyboardNavigationHandler.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Keyboard navigation handler base class definition
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


/* *
 *
 *  Class
 *
 * */
/**
 * Define a keyboard navigation handler for use with a
 * Highcharts.AccessibilityComponent instance. This functions as an abstraction
 * layer for keyboard navigation, and defines a map of keyCodes to handler
 * functions.
 *
 * @requires modules/accessibility
 *
 * @sample highcharts/accessibility/custom-component
 *         Custom accessibility component
 *
 * @class
 * @name Highcharts.KeyboardNavigationHandler
 *
 * @param {Highcharts.Chart} chart
 * The chart this module should act on.
 *
 * @param {Highcharts.KeyboardNavigationHandlerOptionsObject} options
 * Options for the keyboard navigation handler.
 */
var KeyboardNavigationHandler = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function KeyboardNavigationHandler(chart, options) {
        this.chart = chart;
        this.keyCodeMap = options.keyCodeMap || [];
        this.validate = options.validate;
        this.init = options.init;
        this.terminate = options.terminate;
        // Response enum
        this.response = {
            success: 1, // Keycode was handled
            prev: 2, // Move to prev module
            next: 3, // Move to next module
            noHandler: 4, // There is no handler for this keycode
            fail: 5 // Handler failed
        };
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Find handler function(s) for key code in the keyCodeMap and run it.
     *
     * @function KeyboardNavigationHandler#run
     * @param {global.KeyboardEvent} e
     * @return {number} Returns a response code indicating whether the run was
     *      a success/fail/unhandled, or if we should move to next/prev module.
     */
    KeyboardNavigationHandler.prototype.run = function (e) {
        var keyCode = e.which || e.keyCode;
        var response = this.response.noHandler;
        var handlerCodeSet = find(this.keyCodeMap,
            function (codeSet) {
                return codeSet[0].indexOf(keyCode) > -1;
        });
        if (handlerCodeSet) {
            response = handlerCodeSet[1].call(this, keyCode, e);
        }
        else if (keyCode === 9) {
            // Default tab handler, move to next/prev module
            response = this.response[e.shiftKey ? 'prev' : 'next'];
        }
        return response;
    };
    return KeyboardNavigationHandler;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Accessibility_KeyboardNavigationHandler = (KeyboardNavigationHandler);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Options for the keyboard navigation handler.
 *
 * @interface Highcharts.KeyboardNavigationHandlerOptionsObject
 */ /**
* An array containing pairs of an array of keycodes, mapped to a handler
* function. When the keycode is received, the handler is called with the
* keycode as parameter.
* @name Highcharts.KeyboardNavigationHandlerOptionsObject#keyCodeMap
* @type {Array<Array<Array<number>, Function>>}
*/ /**
* Function to run on initialization of module.
* @name Highcharts.KeyboardNavigationHandlerOptionsObject#init
* @type {Function}
*/ /**
* Function to run before moving to next/prev module. Receives moving direction
* as parameter: +1 for next, -1 for previous.
* @name Highcharts.KeyboardNavigationHandlerOptionsObject#terminate
* @type {Function|undefined}
*/ /**
* Function to run to validate module. Should return false if module should not
* run, true otherwise. Receives chart as parameter.
* @name Highcharts.KeyboardNavigationHandlerOptionsObject#validate
* @type {Function|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es5/es-modules/Accessibility/Components/ContainerComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for chart container.
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



var ContainerComponent_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT, ContainerComponent_getChartTitle = Utils_ChartUtilities.getChartTitle;

var ContainerComponent_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var ContainerComponent_stripHTMLTags = Utils_HTMLUtilities.stripHTMLTagsFromString;
/**
 * The ContainerComponent class
 *
 * @private
 * @class
 * @name Highcharts.ContainerComponent
 */
var ContainerComponent = /** @class */ (function (_super) {
    __extends(ContainerComponent, _super);
    function ContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Called on first render/updates to the chart, including options changes.
     */
    ContainerComponent.prototype.onChartUpdate = function () {
        this.handleSVGTitleElement();
        this.setSVGContainerLabel();
        this.setGraphicContainerAttrs();
        this.setRenderToAttrs();
        this.makeCreditsAccessible();
    };
    /**
     * @private
     */
    ContainerComponent.prototype.handleSVGTitleElement = function () {
        var chart = this.chart, titleId = 'highcharts-title-' + chart.index, titleContents = ContainerComponent_stripHTMLTags(chart.langFormat('accessibility.svgContainerTitle', {
                chartTitle: ContainerComponent_getChartTitle(chart)
            }));
        if (titleContents.length) {
            var titleElement = this.svgTitleElement =
                    this.svgTitleElement || ContainerComponent_doc.createElementNS('http://www.w3.org/2000/svg', 'title');
            titleElement.textContent = titleContents;
            titleElement.id = titleId;
            chart.renderTo.insertBefore(titleElement, chart.renderTo.firstChild);
        }
    };
    /**
     * @private
     */
    ContainerComponent.prototype.setSVGContainerLabel = function () {
        var chart = this.chart,
            svgContainerLabel = chart.langFormat('accessibility.svgContainerLabel', {
                chartTitle: ContainerComponent_getChartTitle(chart)
            });
        if (chart.renderer.box && svgContainerLabel.length) {
            chart.renderer.box.setAttribute('aria-label', svgContainerLabel);
        }
    };
    /**
     * @private
     */
    ContainerComponent.prototype.setGraphicContainerAttrs = function () {
        var chart = this.chart,
            label = chart.langFormat('accessibility.graphicContainerLabel', {
                chartTitle: ContainerComponent_getChartTitle(chart)
            });
        if (label.length) {
            chart.container.setAttribute('aria-label', label);
        }
    };
    /**
     * Set attributes on the chart container element.
     * @private
     */
    ContainerComponent.prototype.setRenderToAttrs = function () {
        var chart = this.chart, shouldHaveLandmark = chart.options.accessibility
                .landmarkVerbosity !== 'disabled', containerLabel = chart.langFormat('accessibility.chartContainerLabel', {
                title: ContainerComponent_getChartTitle(chart),
                chart: chart
            });
        if (containerLabel) {
            chart.renderTo.setAttribute('role', shouldHaveLandmark ? 'region' : 'group');
            chart.renderTo.setAttribute('aria-label', containerLabel);
        }
    };
    /**
     * @private
     */
    ContainerComponent.prototype.makeCreditsAccessible = function () {
        var chart = this.chart,
            credits = chart.credits;
        if (credits) {
            if (credits.textStr) {
                credits.element.setAttribute('aria-label', chart.langFormat('accessibility.credits', {
                    creditsStr: ContainerComponent_stripHTMLTags(credits.textStr, chart.renderer.forExport)
                }));
            }
            ContainerComponent_unhideChartElementFromAT(chart, credits.element);
        }
    };
    /**
     * Empty handler to just set focus on chart
     * @private
     */
    ContainerComponent.prototype.getKeyboardNavigation = function () {
        var chart = this.chart;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [],
            validate: function () {
                return true;
            },
            init: function () {
                var a11y = chart.accessibility;
                if (a11y) {
                    a11y.keyboardNavigation.tabindexContainer.focus();
                }
            }
        });
    };
    /**
     * Accessibility disabled/chart destroyed.
     */
    ContainerComponent.prototype.destroy = function () {
        this.chart.renderTo.setAttribute('aria-hidden', true);
    };
    return ContainerComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Components_ContainerComponent = (ContainerComponent);

;// ./code/es5/es-modules/Accessibility/FocusBorder.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Extend SVG and Chart classes with focus border capabilities.
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
var FocusBorderComposition;
(function (FocusBorderComposition) {
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
    // Attributes that trigger a focus border update
    var svgElementBorderUpdateTriggers = [
            'x', 'y', 'transform', 'width', 'height', 'r', 'd', 'stroke-width'
        ];
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    function compose(ChartClass, SVGElementClass) {
        var chartProto = ChartClass.prototype,
            svgElementProto = SVGElementClass.prototype;
        if (!chartProto.renderFocusBorder) {
            chartProto.renderFocusBorder = chartRenderFocusBorder;
            chartProto.setFocusToElement = chartSetFocusToElement;
        }
        if (!svgElementProto.addFocusBorder) {
            svgElementProto.addFocusBorder = svgElementAddFocusBorder;
            svgElementProto.removeFocusBorder = svgElementRemoveFocusBorder;
        }
    }
    FocusBorderComposition.compose = compose;
    /**
     * Redraws the focus border on the currently focused element.
     *
     * @private
     * @function Highcharts.Chart#renderFocusBorder
     */
    function chartRenderFocusBorder() {
        var focusElement = this.focusElement,
            focusBorderOptions = this.options.accessibility.keyboardNavigation.focusBorder;
        if (focusElement) {
            focusElement.removeFocusBorder();
            if (focusBorderOptions.enabled) {
                focusElement.addFocusBorder(focusBorderOptions.margin, {
                    stroke: focusBorderOptions.style.color,
                    strokeWidth: focusBorderOptions.style.lineWidth,
                    r: focusBorderOptions.style.borderRadius
                });
            }
        }
    }
    /**
     * Set chart's focus to an SVGElement. Calls focus() on it, and draws the
     * focus border. This is used by multiple components.
     *
     * @private
     * @function Highcharts.Chart#setFocusToElement
     *
     * @param {Highcharts.SVGElement} svgElement
     * Element to draw the border around.
     *
     * @param {SVGDOMElement|HTMLDOMElement} [focusElement]
     * If supplied, it draws the border around svgElement and sets the focus to
     * focusElement.
     */
    function chartSetFocusToElement(svgElement, focusElement) {
        var focusBorderOptions = this.options.accessibility.keyboardNavigation.focusBorder,
            browserFocusElement = focusElement || svgElement.element;
        // Set browser focus if possible
        if (browserFocusElement &&
            browserFocusElement.focus) {
            // If there is no focusin-listener, add one to work around Edge
            // where Narrator is not reading out points despite calling focus().
            if (!(browserFocusElement.hcEvents &&
                browserFocusElement.hcEvents.focusin)) {
                addEvent(browserFocusElement, 'focusin', function () { });
            }
            browserFocusElement.focus();
            // Hide default focus ring
            if (focusBorderOptions.hideBrowserFocusOutline) {
                browserFocusElement.style.outline = 'none';
            }
        }
        if (this.focusElement) {
            this.focusElement.removeFocusBorder();
        }
        this.focusElement = svgElement;
        // #22122, focus border should re-render after window is resized
        addEvent(this, 'endResize', function () {
            this.renderFocusBorder();
        });
        this.renderFocusBorder();
    }
    /**
     * Add hook to destroy focus border if SVG element is destroyed, unless
     * hook already exists.
     * @private
     * @param {object} el Element to add destroy hook to
     */
    function svgElementAddDestroyFocusBorderHook(el) {
        if (el.focusBorderDestroyHook) {
            return;
        }
        var origDestroy = el.destroy;
        el.destroy = function () {
            if (el.focusBorder && el.focusBorder.destroy) {
                el.focusBorder.destroy();
            }
            return origDestroy.apply(el, arguments);
        };
        el.focusBorderDestroyHook = origDestroy;
    }
    /**
     * Add focus border functionality to SVGElements. Draws a new rect on top of
     * element around its bounding box. This is used by multiple components.
     *
     * @private
     * @function Highcharts.SVGElement#addFocusBorder
     *
     * @param {number} margin
     *
     * @param {SVGAttributes} attribs
     */
    function svgElementAddFocusBorder(margin, attribs) {
        // Allow updating by just adding new border
        if (this.focusBorder) {
            this.removeFocusBorder();
        }
        // Add the border rect
        var bb = this.getBBox(),
            pad = pick(margin, 3),
            parent = this.parentGroup,
            scaleX = this.scaleX || parent && parent.scaleX,
            scaleY = this.scaleY || parent && parent.scaleY,
            oneDefined = scaleX ? !scaleY : scaleY,
            scaleBoth = oneDefined ? Math.abs(scaleX || scaleY || 1) :
                (Math.abs(scaleX || 1) + Math.abs(scaleY || 1)) / 2,
            lineHeight = this.renderer.fontMetrics(this).h;
        bb.x += this.translateX ? this.translateX : 0;
        bb.y += this.translateY ? this.translateY : 0;
        var borderPosX = bb.x - pad,
            borderPosY = bb.y - pad,
            borderWidth = bb.width + 2 * pad,
            borderHeight = bb.height + 2 * pad;
        /**
         * For text elements, apply x and y offset, #11397.
         * @private
         */
        function getTextAnchorCorrection(text) {
            var posXCorrection = 0,
                posYCorrection = 0;
            if (text.attr('text-anchor') === 'middle') {
                posXCorrection = posYCorrection = 0.5;
            }
            else if (!text.rotation) {
                posYCorrection = 0.75;
            }
            else {
                posXCorrection = 0.25;
            }
            return {
                x: posXCorrection,
                y: posYCorrection
            };
        }
        var isLabel = !!this.text;
        if (this.element.nodeName === 'text' || isLabel) {
            var isRotated = !!this.rotation;
            var correction = !isLabel ? getTextAnchorCorrection(this) :
                    {
                        x: isRotated ? 1 : 0,
                        y: 0
                    };
            var attrX = +this.attr('x');
            var attrY = +this.attr('y');
            if (!isNaN(attrX)) {
                borderPosX = attrX - (bb.width * correction.x) - pad;
            }
            if (!isNaN(attrY)) {
                // Correct by line height if "text-anchor" == "start", #19335.
                var dim = this.attr('text-anchor') === 'start' ?
                        lineHeight :
                        bb.height;
                borderPosY = attrY - (dim * correction.y) - pad;
            }
            if (isLabel && isRotated) {
                var temp = borderWidth;
                borderWidth = borderHeight;
                borderHeight = temp;
                if (!isNaN(attrX)) {
                    borderPosX = attrX - (bb.height * correction.x) - pad;
                }
                if (!isNaN(attrY)) {
                    borderPosY = attrY - (bb.width * correction.y) - pad;
                }
            }
        }
        this.focusBorder = this.renderer.rect(borderPosX, borderPosY, borderWidth, borderHeight, parseInt((attribs && attribs.r || 0).toString(), 10) / scaleBoth)
            .addClass('highcharts-focus-border')
            .attr({
            zIndex: 99
        })
            .add(parent);
        if (!this.renderer.styledMode) {
            this.focusBorder.attr({
                stroke: attribs && attribs.stroke,
                'stroke-width': (attribs && attribs.strokeWidth || 0) / scaleBoth
            });
        }
        avgElementAddUpdateFocusBorderHooks(this, margin, attribs);
        svgElementAddDestroyFocusBorderHook(this);
    }
    /**
     * Add hooks to update the focus border of an element when the element
     * size/position is updated, unless already added.
     * @private
     * @param {object} el Element to add update hooks to
     * @param {...*} updateParams Parameters to pass through to addFocusBorder when updating.
     */
    function avgElementAddUpdateFocusBorderHooks(el) {
        var updateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            updateParams[_i - 1] = arguments[_i];
        }
        if (el.focusBorderUpdateHooks) {
            return;
        }
        el.focusBorderUpdateHooks = {};
        svgElementBorderUpdateTriggers.forEach(function (trigger) {
            var setterKey = trigger + 'Setter';
            var origSetter = el[setterKey] || el._defaultSetter;
            el.focusBorderUpdateHooks[setterKey] = origSetter;
            el[setterKey] = function () {
                var ret = origSetter.apply(el,
                    arguments);
                el.addFocusBorder.apply(el, updateParams);
                return ret;
            };
        });
    }
    /**
     * Remove hook from SVG element added by addDestroyFocusBorderHook, if
     * existing.
     * @private
     * @param {object} el Element to remove destroy hook from
     */
    function svgElementRemoveDestroyFocusBorderHook(el) {
        if (!el.focusBorderDestroyHook) {
            return;
        }
        el.destroy = el.focusBorderDestroyHook;
        delete el.focusBorderDestroyHook;
    }
    /**
     * Add focus border functionality to SVGElements. Draws a new rect on top of
     * element around its bounding box. This is used by multiple components.
     * @private
     * @function Highcharts.SVGElement#removeFocusBorder
     */
    function svgElementRemoveFocusBorder() {
        svgElementRemoveUpdateFocusBorderHooks(this);
        svgElementRemoveDestroyFocusBorderHook(this);
        if (this.focusBorder) {
            this.focusBorder.destroy();
            delete this.focusBorder;
        }
    }
    /**
     * Remove hooks from SVG element added by addUpdateFocusBorderHooks, if
     * existing.
     * @private
     * @param {object} el Element to remove update hooks from
     */
    function svgElementRemoveUpdateFocusBorderHooks(el) {
        if (!el.focusBorderUpdateHooks) {
            return;
        }
        Object.keys(el.focusBorderUpdateHooks).forEach(function (setterKey) {
            var origSetter = el.focusBorderUpdateHooks[setterKey];
            if (origSetter === el._defaultSetter) {
                delete el[setterKey];
            }
            else {
                el[setterKey] = origSetter;
            }
        });
        delete el.focusBorderUpdateHooks;
    }
})(FocusBorderComposition || (FocusBorderComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var FocusBorder = (FocusBorderComposition);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","AST"],"commonjs":["highcharts","AST"],"commonjs2":["highcharts","AST"],"root":["Highcharts","AST"]}
var highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_ = __webpack_require__(660);
var highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default = /*#__PURE__*/__webpack_require__.n(highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_);
;// ./code/es5/es-modules/Accessibility/Utils/Announcer.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Create announcer to speak messages to screen readers and other AT.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */




var Announcer_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var Announcer_addClass = Utils_HTMLUtilities.addClass, Announcer_visuallyHideElement = Utils_HTMLUtilities.visuallyHideElement;

/* *
 *
 *  Class
 *
 * */
var Announcer = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Announcer(chart, type) {
        this.chart = chart;
        this.domElementProvider = new Utils_DOMElementProvider();
        this.announceRegion = this.addAnnounceRegion(type);
    }
    /* *
     *
     *  Functions
     *
     * */
    Announcer.prototype.destroy = function () {
        this.domElementProvider.destroyCreatedElements();
    };
    Announcer.prototype.announce = function (message) {
        var _this = this;
        highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default().setElementHTML(this.announceRegion, message);
        // Delete contents after a little while to avoid user finding the live
        // region in the DOM.
        if (this.clearAnnouncementRegionTimer) {
            internalClearTimeout(this.clearAnnouncementRegionTimer);
        }
        this.clearAnnouncementRegionTimer = setTimeout(function () {
            _this.announceRegion.innerHTML = (highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default()).emptyHTML;
            delete _this.clearAnnouncementRegionTimer;
        }, 3000);
    };
    Announcer.prototype.addAnnounceRegion = function (type) {
        var chartContainer = (this.chart.announcerContainer || this.createAnnouncerContainer()),
            div = this.domElementProvider.createElement('div');
        attr(div, {
            'aria-hidden': false,
            'aria-live': type,
            'aria-atomic': true
        });
        // Apply inline hidden styles too as the class alone depends on
        // `highcharts.css` being loaded
        Announcer_visuallyHideElement(div);
        if (this.chart.styledMode) {
            Announcer_addClass(div, 'highcharts-visually-hidden');
        }
        chartContainer.appendChild(div);
        return div;
    };
    Announcer.prototype.createAnnouncerContainer = function () {
        var chart = this.chart,
            container = Announcer_doc.createElement('div');
        attr(container, {
            'aria-hidden': false,
            'class': 'highcharts-announcer-container'
        });
        // Hide inline so the container stays out of flow even when
        // `highcharts.css` is missing in styled mode
        Announcer_visuallyHideElement(container);
        chart.renderTo.insertBefore(container, chart.renderTo.firstChild);
        chart.announcerContainer = container;
        return container;
    };
    return Announcer;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Utils_Announcer = (Announcer);

;// ./code/es5/es-modules/Accessibility/Components/AnnotationsA11y.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Annotations accessibility code.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var AnnotationsA11y_escapeStringForHTML = Utils_HTMLUtilities.escapeStringForHTML, AnnotationsA11y_stripHTMLTagsFromString = Utils_HTMLUtilities.stripHTMLTagsFromString;
/* *
 *
 *  Functions
 *
 * */
/**
 * Get list of all annotation labels in the chart.
 *
 * @private
 * @param {Highcharts.Chart} chart The chart to get annotation info on.
 * @return {Array<object>} The labels, or empty array if none.
 */
function getChartAnnotationLabels(chart) {
    var annotations = chart.annotations || [];
    return annotations.reduce(function (acc, cur) {
        if (cur.options &&
            cur.options.visible !== false) {
            acc = acc.concat(cur.labels);
        }
        return acc;
    }, []);
}
/**
 * Get the text of an annotation label.
 *
 * @private
 * @param {Object} label The annotation label object
 * @return {string} The text in the label.
 */
function getLabelText(label) {
    return ((label.options &&
        label.options.accessibility &&
        label.options.accessibility.description) ||
        (label.graphic &&
            label.graphic.text &&
            label.graphic.text.textStr) ||
        '');
}
/**
 * Describe an annotation label.
 *
 * @private
 * @param {Object} label The annotation label object to describe
 * @return {string} The description for the label.
 */
function getAnnotationLabelDescription(label) {
    var a11yDesc = (label.options &&
            label.options.accessibility &&
            label.options.accessibility.description);
    if (a11yDesc) {
        return a11yDesc;
    }
    var chart = label.chart;
    var labelText = getLabelText(label);
    var points = label.points;
    var getAriaLabel = function (point) { return (point.graphic &&
            point.graphic.element &&
            point.graphic.element.getAttribute('aria-label') ||
            ''); };
    var getValueDesc = function (point) {
            var valDesc = (point.accessibility &&
                point.accessibility.valueDescription ||
                getAriaLabel(point));
        var seriesName = (point &&
                point.series.name ||
                '');
        return (seriesName ? seriesName + ', ' : '') + 'data point ' + valDesc;
    };
    var pointValueDescriptions = points
            .filter(function (p) { return !!p.graphic; }) // Filter out mock points
            .map(getValueDesc)
            // Filter out points we can't describe
            .filter(function (desc) { return !!desc; });
    var numPoints = pointValueDescriptions.length;
    var pointsSelector = numPoints > 1 ?
            'MultiplePoints' : numPoints ?
            'SinglePoint' : 'NoPoints';
    var langFormatStr = ('accessibility.screenReaderSection.annotations.description' +
            pointsSelector);
    var context = {
            annotationText: labelText,
            annotation: label,
            numPoints: numPoints,
            annotationPoint: pointValueDescriptions[0],
            additionalAnnotationPoints: pointValueDescriptions.slice(1)
        };
    return chart.langFormat(langFormatStr, context);
}
/**
 * Return array of HTML strings for each annotation label in the chart.
 *
 * @private
 * @param {Highcharts.Chart} chart The chart to get annotation info on.
 * @return {Array<string>} Array of strings with HTML content for each annotation label.
 */
function getAnnotationListItems(chart) {
    var labels = getChartAnnotationLabels(chart);
    return labels.map(function (label) {
        var desc = AnnotationsA11y_escapeStringForHTML(AnnotationsA11y_stripHTMLTagsFromString(getAnnotationLabelDescription(label),
            chart.renderer.forExport));
        return desc ? "<li>".concat(desc, "</li>") : '';
    });
}
/**
 * Return the annotation info for a chart as string.
 *
 * @private
 * @param {Highcharts.Chart} chart The chart to get annotation info on.
 * @return {string} String with HTML content or empty string if no annotations.
 */
function getAnnotationsInfoHTML(chart) {
    var annotations = chart.annotations;
    if (!(annotations && annotations.length)) {
        return '';
    }
    var annotationItems = getAnnotationListItems(chart);
    return "<ul style=\"list-style-type: none\">".concat(annotationItems.join(' '), "</ul>");
}
/**
 * Return the texts for the annotation(s) connected to a point, or empty array
 * if none.
 *
 * @private
 * @param {Highcharts.Point} point The data point to get the annotation info from.
 * @return {Array<string>} Annotation texts
 */
function getPointAnnotationTexts(point) {
    var labels = getChartAnnotationLabels(point.series.chart);
    var pointLabels = labels
            .filter(function (label) { return label.points.indexOf(point) > -1; });
    if (!pointLabels.length) {
        return [];
    }
    return pointLabels.map(function (label) { return "".concat(getLabelText(label)); });
}
/* *
 *
 *  Default Export
 *
 * */
var AnnotationsA11y = {
    getAnnotationsInfoHTML: getAnnotationsInfoHTML,
    getAnnotationLabelDescription: getAnnotationLabelDescription,
    getAnnotationListItems: getAnnotationListItems,
    getPointAnnotationTexts: getPointAnnotationTexts
};
/* harmony default export */ var Components_AnnotationsA11y = (AnnotationsA11y);

;// ./code/es5/es-modules/Accessibility/Components/InfoRegionsComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for chart info region and table.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var InfoRegionsComponent_extends = (undefined && undefined.__extends) || (function () {
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




var InfoRegionsComponent_getAnnotationsInfoHTML = Components_AnnotationsA11y.getAnnotationsInfoHTML;


var InfoRegionsComponent_getAxisDescription = Utils_ChartUtilities.getAxisDescription, InfoRegionsComponent_getAxisRangeDescription = Utils_ChartUtilities.getAxisRangeDescription, InfoRegionsComponent_getChartTitle = Utils_ChartUtilities.getChartTitle, InfoRegionsComponent_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT;

var InfoRegionsComponent_format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format;

var InfoRegionsComponent_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var InfoRegionsComponent_addClass = Utils_HTMLUtilities.addClass, InfoRegionsComponent_getElement = Utils_HTMLUtilities.getElement, InfoRegionsComponent_getHeadingTagNameForElement = Utils_HTMLUtilities.getHeadingTagNameForElement, InfoRegionsComponent_stripHTMLTagsFromString = Utils_HTMLUtilities.stripHTMLTagsFromString, InfoRegionsComponent_visuallyHideElement = Utils_HTMLUtilities.visuallyHideElement;

/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function getTableSummary(chart) {
    return chart.langFormat('accessibility.table.tableSummary', { chart: chart });
}
/**
 * @private
 */
function getTypeDescForMapChart(chart, formatContext) {
    return formatContext.mapTitle ?
        chart.langFormat('accessibility.chartTypes.mapTypeDescription', formatContext) :
        chart.langFormat('accessibility.chartTypes.unknownMap', formatContext);
}
/**
 * @private
 */
function getTypeDescForCombinationChart(chart, formatContext) {
    return chart.langFormat('accessibility.chartTypes.combinationChart', formatContext);
}
/**
 * @private
 */
function getTypeDescForEmptyChart(chart, formatContext) {
    return chart.langFormat('accessibility.chartTypes.emptyChart', formatContext);
}
/**
 * @private
 */
function buildTypeDescriptionFromSeries(chart, types, context) {
    var firstType = types[0], typeExplanation = chart.langFormat('accessibility.seriesTypeDescriptions.' + firstType, context), multi = chart.series && chart.series.length < 2 ? 'Single' : 'Multiple';
    return (chart.langFormat('accessibility.chartTypes.' + firstType + multi, context) ||
        chart.langFormat('accessibility.chartTypes.default' + multi, context)) + (typeExplanation ? ' ' + typeExplanation : '');
}
/**
 * Return simplified explanation of chart type. Some types will not be
 * familiar to most users, but in those cases we try to add an explanation
 * of the type.
 *
 * @private
 * @function Highcharts.Chart#getTypeDescription
 * @param {Highcharts.Chart} chart The associated Chart instance.
 * @param {Array<string>} types The series types in this chart.
 * @return {string} The text description of the chart type.
 */
function getTypeDescription(chart, types) {
    var firstType = types[0],
        firstSeries = chart.series && chart.series[0] || {},
        mapTitle = chart.mapView && chart.mapView.geoMap &&
            chart.mapView.geoMap.title,
        formatContext = {
            numSeries: chart.series.length,
            numPoints: firstSeries.points && firstSeries.points.length,
            chart: chart,
            mapTitle: mapTitle
        };
    if (!firstType) {
        return getTypeDescForEmptyChart(chart, formatContext);
    }
    if (firstType === 'map' || firstType === 'tiledwebmap') {
        return getTypeDescForMapChart(chart, formatContext);
    }
    if (chart.types.length > 1) {
        return getTypeDescForCombinationChart(chart, formatContext);
    }
    return buildTypeDescriptionFromSeries(chart, types, formatContext);
}
/**
 * @private
 */
function stripEmptyHTMLTags(str) {
    // Scan alert #[71]: Loop for nested patterns
    return replaceNested(str, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, '']);
}
/* *
 *
 *  Class
 *
 * */
/**
 * The InfoRegionsComponent class
 *
 * @private
 * @class
 * @name Highcharts.InfoRegionsComponent
 */
var InfoRegionsComponent = /** @class */ (function (_super) {
    InfoRegionsComponent_extends(InfoRegionsComponent, _super);
    function InfoRegionsComponent() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this,
            arguments) || this;
        _this.screenReaderSections = {};
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init the component
     * @private
     */
    InfoRegionsComponent.prototype.init = function () {
        var chart = this.chart;
        var component = this;
        this.initRegionsDefinitions();
        this.addEvent(chart, 'afterGetTableAST', function (e) {
            component.onDataTableCreated(e);
        });
        this.addEvent(chart, 'afterViewData', function (e) {
            if (e.wasHidden) {
                component.dataTableDiv = e.element;
                // Use a small delay to give browsers & AT time to
                // register the new table.
                setTimeout(function () {
                    component.focusDataTable();
                }, 300);
            }
        });
        this.addEvent(chart, 'afterHideData', function () {
            if (component.viewDataTableButton) {
                component.viewDataTableButton
                    .setAttribute('aria-expanded', 'false');
            }
        });
        if (chart.exporting) {
            // Needed when print logic in exporting does not trigger
            // rerendering thus repositioning of screen reader DOM elements
            // (#21554)
            this.addEvent(chart, 'afterPrint', function () {
                component.updateAllScreenReaderSections();
            });
        }
        this.announcer = new Utils_Announcer(chart, 'assertive');
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.initRegionsDefinitions = function () {
        var component = this,
            accessibilityOptions = this.chart.options.accessibility;
        this.screenReaderSections = {
            before: {
                element: null,
                buildContent: function (chart) {
                    var formatter = accessibilityOptions.screenReaderSection
                            .beforeChartFormatter;
                    return formatter ? formatter(chart, component) :
                        component.defaultBeforeChartFormatter();
                },
                insertIntoDOM: function (el, chart) {
                    chart.renderTo.insertBefore(el, chart.renderTo.firstChild);
                },
                afterInserted: function () {
                    if (typeof component.sonifyButtonId !== 'undefined') {
                        component.initSonifyButton(component.sonifyButtonId);
                    }
                    if (typeof component.dataTableButtonId !== 'undefined') {
                        component.initDataTableButton(component.dataTableButtonId);
                    }
                }
            },
            after: {
                element: null,
                buildContent: function (chart) {
                    var formatter = accessibilityOptions.screenReaderSection
                            .afterChartFormatter;
                    return formatter ? formatter(chart, component) :
                        component.defaultAfterChartFormatter();
                },
                insertIntoDOM: function (el, chart) {
                    chart.renderTo.insertBefore(el, chart.container.nextSibling);
                },
                afterInserted: function () {
                    if (component.chart.accessibility &&
                        accessibilityOptions.keyboardNavigation.enabled) {
                        component.chart.accessibility
                            .keyboardNavigation.updateExitAnchor(); // #15986
                    }
                }
            }
        };
    };
    /**
     * Called on chart render. Have to update the sections on render, in order
     * to get a11y info from series.
     */
    InfoRegionsComponent.prototype.onChartRender = function () {
        this.linkedDescriptionElement = this.getLinkedDescriptionElement();
        this.setLinkedDescriptionAttrs();
        this.updateAllScreenReaderSections();
    };
    InfoRegionsComponent.prototype.updateAllScreenReaderSections = function () {
        var component = this;
        Object.keys(this.screenReaderSections).forEach(function (regionKey) {
            component.updateScreenReaderSection(regionKey);
        });
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getLinkedDescriptionElement = function () {
        var chartOptions = this.chart.options,
            linkedDescOption = chartOptions.accessibility.linkedDescription;
        if (!linkedDescOption) {
            return;
        }
        if (typeof linkedDescOption !== 'string') {
            return linkedDescOption;
        }
        var query = InfoRegionsComponent_format(linkedDescOption,
            this.chart),
            queryMatch = InfoRegionsComponent_doc.querySelectorAll(query);
        if (queryMatch.length === 1) {
            return queryMatch[0];
        }
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.setLinkedDescriptionAttrs = function () {
        var el = this.linkedDescriptionElement;
        if (el) {
            el.setAttribute('aria-hidden', 'true');
            InfoRegionsComponent_addClass(el, 'highcharts-linked-description');
        }
    };
    /**
     * @private
     * @param {string} regionKey
     * The name/key of the region to update
     */
    InfoRegionsComponent.prototype.updateScreenReaderSection = function (regionKey) {
        var chart = this.chart;
        var region = this.screenReaderSections[regionKey];
        var content = region.buildContent(chart);
        var sectionDiv = region.element = (region.element || this.createElement('div'));
        var hiddenDiv = (sectionDiv.firstChild || this.createElement('div'));
        if (content) {
            this.setScreenReaderSectionAttribs(sectionDiv, regionKey);
            highcharts_AST_commonjs_highcharts_AST_commonjs2_highcharts_AST_root_Highcharts_AST_default().setElementHTML(hiddenDiv, content);
            sectionDiv.appendChild(hiddenDiv);
            region.insertIntoDOM(sectionDiv, chart);
            // Apply inline hidden styles too as the class alone depends on
            // `highcharts.css` being loaded
            InfoRegionsComponent_visuallyHideElement(hiddenDiv);
            if (chart.styledMode) {
                InfoRegionsComponent_addClass(hiddenDiv, 'highcharts-visually-hidden');
            }
            InfoRegionsComponent_unhideChartElementFromAT(chart, hiddenDiv);
            if (region.afterInserted) {
                region.afterInserted();
            }
        }
        else {
            if (sectionDiv.parentNode) {
                sectionDiv.parentNode.removeChild(sectionDiv);
            }
            region.element = null;
        }
    };
    /**
     * Apply a11y attributes to a screen reader info section
     * @private
     * @param {Highcharts.HTMLDOMElement} sectionDiv The section element
     * @param {string} regionKey Name/key of the region we are setting attrs for
     */
    InfoRegionsComponent.prototype.setScreenReaderSectionAttribs = function (sectionDiv, regionKey) {
        var chart = this.chart, labelText = chart.langFormat('accessibility.screenReaderSection.' + regionKey +
                'RegionLabel', { chart: chart, chartTitle: InfoRegionsComponent_getChartTitle(chart) }), sectionId = "highcharts-screen-reader-region-".concat(regionKey, "-").concat(chart.index);
        attr(sectionDiv, {
            id: sectionId,
            'aria-label': labelText || void 0
        });
        // Sections are wrapped to be positioned relatively to chart in case
        // elements inside are tabbed to.
        sectionDiv.style.position = 'relative';
        if (labelText) {
            sectionDiv.setAttribute('role', chart.options.accessibility.landmarkVerbosity === 'all' ?
                'region' : 'group');
        }
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.defaultBeforeChartFormatter = function () {
        var _a;
        var chart = this.chart,
            format = chart.options.accessibility.screenReaderSection
                .beforeChartFormat;
        if (!format) {
            return '';
        }
        var axesDesc = this.getAxesDescription(),
            shouldHaveSonifyBtn = (chart.sonify &&
                chart.options.sonification &&
                chart.options.sonification.enabled),
            sonifyButtonId = 'highcharts-a11y-sonify-data-btn-' +
                chart.index,
            dataTableButtonId = 'hc-linkto-highcharts-data-table-' +
                chart.index,
            annotationsList = InfoRegionsComponent_getAnnotationsInfoHTML(chart),
            annotationsTitleStr = chart.langFormat('accessibility.screenReaderSection.annotations.heading', { chart: chart }),
            context = {
                headingTagName: InfoRegionsComponent_getHeadingTagNameForElement(chart.renderTo),
                chartTitle: InfoRegionsComponent_getChartTitle(chart),
                typeDescription: this.getTypeDescriptionText(),
                chartSubtitle: this.getSubtitleText(),
                chartLongdesc: this.getLongdescText(),
                xAxisDescription: axesDesc.xAxis,
                yAxisDescription: axesDesc.yAxis,
                playAsSoundButton: shouldHaveSonifyBtn ?
                    this.getSonifyButtonText(sonifyButtonId) : '',
                viewTableButton: ((_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.getCSV) ?
                    this.getDataTableButtonText(dataTableButtonId) : '',
                annotationsTitle: annotationsList ? annotationsTitleStr : '',
                annotationsList: annotationsList
            },
            formattedString = A11yI18n.i18nFormat(format,
            context,
            chart);
        this.dataTableButtonId = dataTableButtonId;
        this.sonifyButtonId = sonifyButtonId;
        return stripEmptyHTMLTags(formattedString);
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.defaultAfterChartFormatter = function () {
        var chart = this.chart;
        var format = chart.options.accessibility.screenReaderSection
                .afterChartFormat;
        if (!format) {
            return '';
        }
        var context = { endOfChartMarker: this.getEndOfChartMarkerText() };
        var formattedString = A11yI18n.i18nFormat(format,
            context,
            chart);
        return stripEmptyHTMLTags(formattedString);
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getLinkedDescription = function () {
        var el = this.linkedDescriptionElement,
            content = el && el.innerHTML || '';
        return InfoRegionsComponent_stripHTMLTagsFromString(content, this.chart.renderer.forExport);
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getLongdescText = function () {
        var chartOptions = this.chart.options,
            captionOptions = chartOptions.caption,
            captionText = captionOptions && captionOptions.text,
            linkedDescription = this.getLinkedDescription();
        return (chartOptions.accessibility.description ||
            linkedDescription ||
            captionText ||
            '');
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getTypeDescriptionText = function () {
        var chart = this.chart;
        return chart.types ?
            chart.options.accessibility.typeDescription ||
                getTypeDescription(chart, chart.types) : '';
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getDataTableButtonText = function (buttonId) {
        var chart = this.chart,
            buttonText = chart.langFormat('accessibility.table.viewAsDataTableButtonText', { chart: chart,
            chartTitle: InfoRegionsComponent_getChartTitle(chart) });
        return '<button id="' + buttonId + '">' + buttonText + '</button>';
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getSonifyButtonText = function (buttonId) {
        var chart = this.chart;
        if (chart.options.sonification &&
            chart.options.sonification.enabled === false) {
            return '';
        }
        var buttonText = chart.langFormat('accessibility.sonification.playAsSoundButtonText', { chart: chart,
            chartTitle: InfoRegionsComponent_getChartTitle(chart) });
        return '<button id="' + buttonId + '">' + buttonText + '</button>';
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getSubtitleText = function () {
        var subtitle = (this.chart.options.subtitle);
        return InfoRegionsComponent_stripHTMLTagsFromString(subtitle && subtitle.text || '', this.chart.renderer.forExport);
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getEndOfChartMarkerText = function () {
        var endMarkerId = "highcharts-end-of-chart-marker-".concat(this.chart.index),
            endMarker = InfoRegionsComponent_getElement(endMarkerId);
        if (endMarker) {
            return endMarker.outerHTML;
        }
        var chart = this.chart, markerText = chart.langFormat('accessibility.screenReaderSection.endOfChartMarker', { chart: chart }), id = 'highcharts-end-of-chart-marker-' + chart.index;
        return '<div id="' + id + '">' + markerText + '</div>';
    };
    /**
     * @private
     * @param {Highcharts.Dictionary<string>} e
     */
    InfoRegionsComponent.prototype.onDataTableCreated = function (e) {
        var chart = this.chart;
        if (chart.options.accessibility.enabled) {
            if (this.viewDataTableButton) {
                this.viewDataTableButton.setAttribute('aria-expanded', 'true');
            }
            var attributes = e.tree.attributes || {};
            attributes.tabindex = -1;
            attributes.summary = getTableSummary(chart);
            e.tree.attributes = attributes;
        }
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.focusDataTable = function () {
        var tableDiv = this.dataTableDiv,
            table = tableDiv && tableDiv.getElementsByTagName('table')[0];
        if (table && table.focus) {
            table.focus();
        }
    };
    /**
     * @private
     * @param {string} sonifyButtonId
     */
    InfoRegionsComponent.prototype.initSonifyButton = function (sonifyButtonId) {
        var _this = this;
        var el = this.sonifyButton = InfoRegionsComponent_getElement(sonifyButtonId);
        var chart = this.chart;
        var defaultHandler = function (e) {
                if (el) {
                    el.setAttribute('aria-hidden', 'true');
                el.setAttribute('aria-label', '');
            }
            e.preventDefault();
            e.stopPropagation();
            var announceMsg = chart.langFormat('accessibility.sonification.playAsSoundClickAnnouncement', { chart: chart });
            _this.announcer.announce(announceMsg);
            setTimeout(function () {
                if (el) {
                    el.removeAttribute('aria-hidden');
                    el.removeAttribute('aria-label');
                }
                if (chart.sonify) {
                    chart.sonify();
                }
            }, 1000); // Delay to let screen reader speak the button press
        };
        if (el && chart) {
            el.setAttribute('tabindex', -1);
            el.onclick = function (e) {
                var onPlayAsSoundClick = (chart.options.accessibility &&
                        chart.options.accessibility.screenReaderSection
                            .onPlayAsSoundClick);
                (onPlayAsSoundClick || defaultHandler).call(this, e, chart, this);
            };
        }
    };
    /**
     * Set attribs and handlers for default viewAsDataTable button if exists.
     * @private
     * @param {string} tableButtonId
     */
    InfoRegionsComponent.prototype.initDataTableButton = function (tableButtonId) {
        var el = this.viewDataTableButton = InfoRegionsComponent_getElement(tableButtonId), chart = this.chart, tableId = tableButtonId.replace('hc-linkto-', '');
        if (el) {
            attr(el, {
                tabindex: -1,
                'aria-expanded': !!InfoRegionsComponent_getElement(tableId)
            });
            el.onclick = chart.options.accessibility
                .screenReaderSection.onViewDataTableClick ||
                function () {
                    var _a;
                    (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.viewData();
                };
        }
    };
    /**
     * Return object with text description of each of the chart's axes.
     * @private
     */
    InfoRegionsComponent.prototype.getAxesDescription = function () {
        var chart = this.chart,
            shouldDescribeColl = function (collectionKey,
            defaultCondition) {
                var axes = chart[collectionKey];
            return axes.length > 1 || axes[0] &&
                pick(axes[0].options.accessibility &&
                    axes[0].options.accessibility.enabled, defaultCondition);
        }, hasNoMap = !!chart.types &&
            chart.types.indexOf('map') < 0 &&
            chart.types.indexOf('treemap') < 0 &&
            chart.types.indexOf('tilemap') < 0, hasCartesian = !!chart.hasCartesianSeries, showXAxes = shouldDescribeColl('xAxis', !chart.angular && hasCartesian && hasNoMap), showYAxes = shouldDescribeColl('yAxis', hasCartesian && hasNoMap), desc = {};
        if (showXAxes) {
            desc.xAxis = this.getAxisDescriptionText('xAxis');
        }
        if (showYAxes) {
            desc.yAxis = this.getAxisDescriptionText('yAxis');
        }
        return desc;
    };
    /**
     * @private
     */
    InfoRegionsComponent.prototype.getAxisDescriptionText = function (collectionKey) {
        var chart = this.chart;
        var axes = chart[collectionKey];
        return chart.langFormat('accessibility.axis.' + collectionKey + 'Description' + (axes.length > 1 ? 'Plural' : 'Singular'), {
            chart: chart,
            names: axes.map(function (axis) {
                return InfoRegionsComponent_getAxisDescription(axis);
            }),
            ranges: axes.map(function (axis) {
                return InfoRegionsComponent_getAxisRangeDescription(axis);
            }),
            numAxes: axes.length
        });
    };
    /**
     * Remove component traces
     */
    InfoRegionsComponent.prototype.destroy = function () {
        if (this.announcer) {
            this.announcer.destroy();
        }
    };
    return InfoRegionsComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Components_InfoRegionsComponent = (InfoRegionsComponent);

;// ./code/es5/es-modules/Accessibility/Components/MenuComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for exporting menu.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var MenuComponent_extends = (undefined && undefined.__extends) || (function () {
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



var MenuComponent_getChartTitle = Utils_ChartUtilities.getChartTitle, MenuComponent_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT;


var MenuComponent_getFakeMouseEvent = Utils_HTMLUtilities.getFakeMouseEvent;
/* *
 *
 *  Functions
 *
 * */
/**
 * Get the wrapped export button element of a chart.
 * @private
 */
function getExportMenuButtonElement(chart) {
    var _a,
        _b;
    return (_b = (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.svgElements) === null || _b === void 0 ? void 0 : _b[0];
}
/**
 * @private
 */
function exportingShouldHaveA11y(chart) {
    var exportingOpts = chart.options.exporting,
        exportButton = getExportMenuButtonElement(chart);
    return !!(exportingOpts &&
        exportingOpts.enabled !== false &&
        exportingOpts.accessibility &&
        exportingOpts.accessibility.enabled &&
        exportButton &&
        exportButton.element);
}
/* *
 *
 *  Class
 *
 * */
/**
 * The MenuComponent class
 *
 * @private
 * @class
 * @name Highcharts.MenuComponent
 */
var MenuComponent = /** @class */ (function (_super) {
    MenuComponent_extends(MenuComponent, _super);
    function MenuComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init the component
     */
    MenuComponent.prototype.init = function () {
        var chart = this.chart,
            component = this;
        this.addEvent(chart, 'exportMenuShown', function () {
            component.onMenuShown();
        });
        this.addEvent(chart, 'exportMenuHidden', function () {
            component.onMenuHidden();
        });
        this.createProxyGroup();
    };
    /**
     * @private
     */
    MenuComponent.prototype.onMenuHidden = function () {
        var _a;
        var menu = (_a = this.chart.exporting) === null || _a === void 0 ? void 0 : _a.contextMenuEl;
        if (menu) {
            menu.setAttribute('aria-hidden', 'true');
        }
        this.setExportButtonExpandedState('false');
    };
    /**
     * @private
     */
    MenuComponent.prototype.onMenuShown = function () {
        var _a;
        var chart = this.chart,
            menu = (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.contextMenuEl;
        if (menu) {
            this.addAccessibleContextMenuAttribs();
            MenuComponent_unhideChartElementFromAT(chart, menu);
        }
        this.setExportButtonExpandedState('true');
    };
    /**
     * @private
     * @param {string} stateStr
     */
    MenuComponent.prototype.setExportButtonExpandedState = function (stateStr) {
        if (this.exportButtonProxy) {
            this.exportButtonProxy.innerElement.setAttribute('aria-expanded', stateStr);
        }
    };
    /**
     * Called on each render of the chart. We need to update positioning of the
     * proxy overlay.
     */
    MenuComponent.prototype.onChartRender = function () {
        var _a;
        var chart = this.chart,
            focusEl = chart.focusElement,
            a11y = chart.accessibility;
        this.proxyProvider.clearGroup('chartMenu');
        this.proxyMenuButton();
        if (this.exportButtonProxy &&
            focusEl &&
            focusEl === ((_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.group)) {
            if (focusEl.focusBorder) {
                chart.setFocusToElement(focusEl, this.exportButtonProxy.innerElement);
            }
            else if (a11y) {
                a11y.keyboardNavigation.tabindexContainer.focus();
            }
        }
    };
    /**
     * @private
     */
    MenuComponent.prototype.proxyMenuButton = function () {
        var chart = this.chart;
        var proxyProvider = this.proxyProvider;
        var buttonEl = getExportMenuButtonElement(chart);
        if (exportingShouldHaveA11y(chart) && buttonEl) {
            this.exportButtonProxy = proxyProvider.addProxyElement('chartMenu', { click: buttonEl }, 'button', {
                'aria-label': chart.langFormat('accessibility.exporting.menuButtonLabel', {
                    chart: chart,
                    chartTitle: MenuComponent_getChartTitle(chart)
                }),
                'aria-expanded': false,
                title: chart.options.lang.contextButtonTitle || null
            });
        }
    };
    /**
     * @private
     */
    MenuComponent.prototype.createProxyGroup = function () {
        var chart = this.chart;
        if (chart && this.proxyProvider) {
            this.proxyProvider.addGroup('chartMenu');
        }
    };
    /**
     * @private
     */
    MenuComponent.prototype.addAccessibleContextMenuAttribs = function () {
        var _a;
        var chart = this.chart,
            exportList = (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.divElements;
        if (exportList && exportList.length) {
            // Set tabindex on the menu items to allow focusing by script
            // Set role to give screen readers a chance to pick up the contents
            exportList.forEach(function (item) {
                if (item) {
                    if (item.tagName === 'LI' &&
                        !(item.children && item.children.length)) {
                        item.setAttribute('tabindex', -1);
                    }
                    else {
                        item.setAttribute('aria-hidden', 'true');
                    }
                }
            });
            // Set accessibility properties on parent div
            var parentDiv = (exportList[0] && exportList[0].parentNode);
            if (parentDiv) {
                attr(parentDiv, {
                    'aria-hidden': void 0,
                    'aria-label': chart.langFormat('accessibility.exporting.chartMenuLabel', { chart: chart }),
                    role: 'list' // Needed for webkit/VO
                });
            }
        }
    };
    /**
     * Get keyboard navigation handler for this component.
     * @private
     */
    MenuComponent.prototype.getKeyboardNavigation = function () {
        var keys = this.keyCodes,
            chart = this.chart,
            component = this;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [
                // Arrow prev handler
                [
                    [keys.left, keys.up],
                    function () {
                        return component.onKbdPrevious(this);
                    }
                ],
                // Arrow next handler
                [
                    [keys.right, keys.down],
                    function () {
                        return component.onKbdNext(this);
                    }
                ],
                // Click handler
                [
                    [keys.enter, keys.space],
                    function () {
                        return component.onKbdClick(this);
                    }
                ]
            ],
            // Only run exporting navigation if exporting support exists and is
            // enabled on chart
            validate: function () {
                var _a,
                    _b,
                    _c;
                return !!chart.exporting &&
                    ((_b = (_a = chart
                        .options
                        .exporting) === null || _a === void 0 ? void 0 : _a.buttons) === null || _b === void 0 ? void 0 : _b.contextButton.enabled) !== false &&
                    chart.options.exporting.enabled !== false &&
                    (((_c = chart.options.exporting.accessibility) === null || _c === void 0 ? void 0 : _c.enabled) || false) !== false;
            },
            // Focus export menu button
            init: function () {
                var _a;
                var proxy = component.exportButtonProxy;
                var svgEl = (_a = component.chart.exporting) === null || _a === void 0 ? void 0 : _a.group;
                if (proxy && svgEl) {
                    chart.setFocusToElement(svgEl, proxy.innerElement);
                }
            },
            // Hide the menu
            terminate: function () {
                chart.hideExportMenu();
            }
        });
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    MenuComponent.prototype.onKbdPrevious = function (keyboardNavigationHandler) {
        var chart = this.chart;
        var a11yOptions = chart.options.accessibility;
        var response = keyboardNavigationHandler.response;
        // Try to highlight prev item in list. Highlighting e.g.
        // separators will fail.
        var i = chart.highlightedExportItemIx || 0;
        while (i--) {
            if (chart.highlightExportItem(i)) {
                return response.success;
            }
        }
        // We failed, so wrap around or move to prev module
        if (a11yOptions.keyboardNavigation.wrapAround) {
            chart.highlightLastExportItem();
            return response.success;
        }
        return response.prev;
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    MenuComponent.prototype.onKbdNext = function (keyboardNavigationHandler) {
        var _a,
            _b;
        var chart = this.chart;
        var a11yOptions = chart.options.accessibility;
        var response = keyboardNavigationHandler.response;
        // Try to highlight next item in list. Highlighting e.g.
        // separators will fail.
        for (var i = (chart.highlightedExportItemIx || 0) + 1; i < (((_b = (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.divElements) === null || _b === void 0 ? void 0 : _b.length) || 0); ++i) {
            if (chart.highlightExportItem(i)) {
                return response.success;
            }
        }
        // We failed, so wrap around or move to next module
        if (a11yOptions.keyboardNavigation.wrapAround) {
            chart.highlightExportItem(0);
            return response.success;
        }
        return response.next;
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    MenuComponent.prototype.onKbdClick = function (keyboardNavigationHandler) {
        var _a,
            _b,
            _c,
            _d;
        var chart = this.chart;
        var curHighlightedItem = chart.highlightedExportItemIx !== void 0 &&
                ((_b = (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.divElements) === null || _b === void 0 ? void 0 : _b[chart.highlightedExportItemIx]);
        var exportButtonElement = (_c = getExportMenuButtonElement(chart)) === null || _c === void 0 ? void 0 : _c.element;
        if ((_d = chart.exporting) === null || _d === void 0 ? void 0 : _d.openMenu) {
            curHighlightedItem && this.fakeClickEvent(curHighlightedItem);
        }
        else {
            exportButtonElement && this.fakeClickEvent(exportButtonElement);
            chart.highlightExportItem(0);
        }
        return keyboardNavigationHandler.response.success;
    };
    return MenuComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Class Namespace
 *
 * */
(function (MenuComponent) {
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
    function compose(ChartClass) {
        var chartProto = ChartClass.prototype;
        if (!chartProto.hideExportMenu) {
            chartProto.hideExportMenu = chartHideExportMenu;
            chartProto.highlightExportItem = chartHighlightExportItem;
            chartProto.highlightLastExportItem = chartHighlightLastExportItem;
            chartProto.showExportMenu = chartShowExportMenu;
        }
    }
    MenuComponent.compose = compose;
    /**
     * Show the export menu and focus the first item (if exists).
     *
     * @private
     * @function Highcharts.Chart#showExportMenu
     */
    function chartShowExportMenu() {
        var exportButton = getExportMenuButtonElement(this);
        if (exportButton) {
            var el = exportButton.element;
            if (el.onclick) {
                el.onclick = function () {
                    MenuComponent_getFakeMouseEvent('click');
                };
            }
        }
    }
    /**
     * @private
     * @function Highcharts.Chart#hideExportMenu
     */
    function chartHideExportMenu() {
        var _a,
            _b,
            _c;
        var chart = this,
            exportList = (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.divElements;
        if (exportList &&
            ((_b = chart.exporting) === null || _b === void 0 ? void 0 : _b.contextMenuEl) &&
            ((_c = chart.exporting) === null || _c === void 0 ? void 0 : _c.openMenu)) {
            // Reset hover states etc.
            exportList.forEach(function (el) {
                if (el &&
                    el.className === 'highcharts-menu-item' &&
                    el.onmouseout) {
                    el.onmouseout(MenuComponent_getFakeMouseEvent('mouseout'));
                }
            });
            chart.highlightedExportItemIx = 0;
            // Hide the menu div
            chart.exporting.contextMenuEl.hideMenu();
            // Make sure the chart has focus and can capture keyboard events
            chart.container.focus();
        }
    }
    /**
     * Highlight export menu item by index.
     *
     * @private
     * @function Highcharts.Chart#highlightExportItem
     */
    function chartHighlightExportItem(ix) {
        var _a,
            _b,
            _c,
            _d;
        var listItem = (_b = (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.divElements) === null || _b === void 0 ? void 0 : _b[ix],
            curHighlighted = this.highlightedExportItemIx !== void 0 &&
                ((_d = (_c = this.exporting) === null || _c === void 0 ? void 0 : _c.divElements) === null || _d === void 0 ? void 0 : _d[this.highlightedExportItemIx]);
        if (listItem &&
            listItem.tagName === 'LI' &&
            !(listItem.children && listItem.children.length)) {
            // Test if we have focus support for SVG elements
            var hasSVGFocusSupport = !!(this.renderTo.getElementsByTagName('g')[0] || {}).focus;
            // Only focus if we can set focus back to the elements after
            // destroying the menu (#7422)
            if (listItem.focus && hasSVGFocusSupport) {
                listItem.focus();
            }
            if (curHighlighted && curHighlighted.onmouseout) {
                curHighlighted.onmouseout(MenuComponent_getFakeMouseEvent('mouseout'));
            }
            if (listItem.onmouseover) {
                listItem.onmouseover(MenuComponent_getFakeMouseEvent('mouseover'));
            }
            this.highlightedExportItemIx = ix;
            return true;
        }
        return false;
    }
    /**
     * Try to highlight the last valid export menu item.
     *
     * @private
     * @function Highcharts.Chart#highlightLastExportItem
     */
    function chartHighlightLastExportItem() {
        var _a,
            _b;
        var chart = this;
        if ((_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.divElements) {
            var i = (_b = chart.exporting) === null || _b === void 0 ? void 0 : _b.divElements.length;
            while (i--) {
                if (chart.highlightExportItem(i)) {
                    return true;
                }
            }
        }
        return false;
    }
})(MenuComponent || (MenuComponent = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Components_MenuComponent = (MenuComponent);

;// ./code/es5/es-modules/Accessibility/KeyboardNavigation.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Main keyboard navigation handling.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var KeyboardNavigation_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, KeyboardNavigation_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;




var KeyboardNavigation_getElement = Utils_HTMLUtilities.getElement, KeyboardNavigation_simulatedEventTarget = Utils_HTMLUtilities.simulatedEventTarget;
/* *
 *
 *  Class
 *
 * */
/**
 * The KeyboardNavigation class, containing the overall keyboard navigation
 * logic for the chart.
 *
 * @requires modules/accessibility
 *
 * @private
 * @class
 * @param {Highcharts.Chart} chart
 *        Chart object
 * @param {Object} components
 *        Map of component names to AccessibilityComponent objects.
 * @name Highcharts.KeyboardNavigation
 */
var KeyboardNavigation = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function KeyboardNavigation(chart, components) {
        this.currentModuleIx = NaN;
        this.modules = [];
        this.init(chart, components);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the class
     * @private
     * @param {Highcharts.Chart} chart
     *        Chart object
     * @param {Object} components
     *        Map of component names to AccessibilityComponent objects.
     */
    KeyboardNavigation.prototype.init = function (chart, components) {
        var _this = this;
        var ep = this.eventProvider = new Utils_EventProvider();
        this.chart = chart;
        this.components = components;
        this.modules = [];
        this.currentModuleIx = 0;
        this.update();
        ep.addEvent(this.tabindexContainer, 'keydown', function (e) { return _this.onKeydown(e); });
        ep.addEvent(this.tabindexContainer, 'focus', function (e) { return _this.onFocus(e); });
        ['mouseup', 'touchend'].forEach(function (eventName) {
            return ep.addEvent(KeyboardNavigation_doc, eventName, function (e) { return _this.onMouseUp(e); });
        });
        ['mousedown', 'touchstart'].forEach(function (eventName) {
            return ep.addEvent(chart.renderTo, eventName, function () {
                _this.isClickingChart = true;
            });
        });
    };
    /**
     * Update the modules for the keyboard navigation.
     * @param {Array<string>} [order]
     *        Array specifying the tab order of the components.
     */
    KeyboardNavigation.prototype.update = function (order) {
        var a11yOptions = this.chart.options.accessibility,
            keyboardOptions = a11yOptions && a11yOptions.keyboardNavigation,
            components = this.components;
        this.updateContainerTabindex();
        if (keyboardOptions &&
            keyboardOptions.enabled &&
            order &&
            order.length) {
            // We (still) have keyboard navigation. Update module list
            this.modules = order.reduce(function (modules, componentName) {
                var navModules = components[componentName]
                        .getKeyboardNavigation();
                return modules.concat(navModules);
            }, []);
            this.updateExitAnchor();
        }
        else {
            this.modules = [];
            this.currentModuleIx = 0;
            this.removeExitAnchor();
        }
    };
    /**
     * We use an exit anchor to move focus out of chart whenever we want, by
     * setting focus to this div and not preventing the default tab action. We
     * also use this when users come back into the chart by tabbing back, in
     * order to navigate from the end of the chart.
     * @private
     */
    KeyboardNavigation.prototype.updateExitAnchor = function () {
        var endMarkerId = "highcharts-end-of-chart-marker-".concat(this.chart.index),
            endMarker = KeyboardNavigation_getElement(endMarkerId);
        this.removeExitAnchor();
        if (endMarker) {
            this.makeElementAnExitAnchor(endMarker);
            this.exitAnchor = endMarker;
        }
        else {
            this.createExitAnchor();
        }
    };
    /**
     * Move to prev/next module.
     * @private
     * @param {number} direction
     * Direction to move. +1 for next, -1 for prev.
     * @return {boolean}
     * True if there was a valid module in direction.
     */
    KeyboardNavigation.prototype.move = function (direction) {
        var curModule = this.modules && this.modules[this.currentModuleIx];
        if (curModule && curModule.terminate) {
            curModule.terminate(direction);
        }
        // Remove existing focus border if any
        if (this.chart.focusElement) {
            this.chart.focusElement.removeFocusBorder();
        }
        this.currentModuleIx += direction;
        var newModule = this.modules && this.modules[this.currentModuleIx];
        if (newModule) {
            if (newModule.validate && !newModule.validate()) {
                return this.move(direction); // Invalid module, recurse
            }
            if (newModule.init) {
                newModule.init(direction); // Valid module, init it
                return true;
            }
        }
        // No module
        this.currentModuleIx = 0; // Reset counter
        // Set focus to chart or exit anchor depending on direction
        this.exiting = true;
        if (direction > 0) {
            this.exitAnchor && this.exitAnchor.focus();
        }
        else {
            this.tabindexContainer.focus();
        }
        return false;
    };
    /**
     * Function to run on container focus
     * @private
     * @param {global.FocusEvent} e Browser focus event.
     */
    KeyboardNavigation.prototype.onFocus = function (e) {
        var chart = this.chart,
            focusComesFromChart = (e.relatedTarget &&
                chart.container.contains(e.relatedTarget)),
            a11yOptions = chart.options.accessibility,
            keyboardOptions = a11yOptions && a11yOptions.keyboardNavigation,
            enabled = keyboardOptions && keyboardOptions.enabled;
        // Init keyboard nav if tabbing into chart
        if (enabled &&
            !this.exiting &&
            !this.tabbingInBackwards &&
            !this.isClickingChart &&
            !focusComesFromChart) {
            var ix = this.getFirstValidModuleIx();
            if (ix !== null) {
                this.currentModuleIx = ix;
                this.modules[ix].init(1);
            }
        }
        this.keyboardReset = false;
        this.exiting = false;
    };
    /**
     * Reset chart navigation state if we mouse click and it's not already
     * reset. Reset fully if outside the chart, otherwise just hide focus
     * indicator.
     * @private
     */
    KeyboardNavigation.prototype.onMouseUp = function (e) {
        delete this.isClickingChart;
        if (!this.keyboardReset &&
            e.relatedTarget !== KeyboardNavigation_simulatedEventTarget) {
            var chart = this.chart;
            if (!e.target ||
                !chart.container.contains(e.target)) {
                var curMod = this.modules &&
                        this.modules[this.currentModuleIx || 0];
                if (curMod && curMod.terminate) {
                    curMod.terminate();
                }
                this.currentModuleIx = 0;
            }
            if (chart.focusElement) {
                chart.focusElement.removeFocusBorder();
                delete chart.focusElement;
            }
            this.keyboardReset = true;
        }
    };
    /**
     * Function to run on keydown
     * @private
     * @param {global.KeyboardEvent} ev Browser keydown event.
     */
    KeyboardNavigation.prototype.onKeydown = function (ev) {
        var e = ev || KeyboardNavigation_win.event,
            curNavModule = (this.modules &&
                this.modules.length &&
                this.modules[this.currentModuleIx]);
        var preventDefault;
        var target = e.target;
        if (target &&
            target.nodeName === 'INPUT' &&
            !target.classList.contains('highcharts-a11y-proxy-element')) {
            return;
        }
        // Used for resetting nav state when clicking outside chart
        this.keyboardReset = false;
        // Used for sending focus out of the chart by the modules.
        this.exiting = false;
        // If there is a nav module for the current index, run it.
        // Otherwise, we are outside of the chart in some direction.
        if (curNavModule) {
            var response = curNavModule.run(e);
            if (response === curNavModule.response.success) {
                preventDefault = true;
            }
            else if (response === curNavModule.response.prev) {
                preventDefault = this.move(-1);
            }
            else if (response === curNavModule.response.next) {
                preventDefault = this.move(1);
            }
            if (preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };
    /**
     * Chart container should have tabindex if navigation is enabled.
     * @private
     */
    KeyboardNavigation.prototype.updateContainerTabindex = function () {
        var a11yOptions = this.chart.options.accessibility,
            keyboardOptions = a11yOptions && a11yOptions.keyboardNavigation,
            shouldHaveTabindex = !(keyboardOptions && keyboardOptions.enabled === false),
            chart = this.chart,
            container = chart.container;
        var tabindexContainer;
        if (chart.renderTo.hasAttribute('tabindex')) {
            container.removeAttribute('tabindex');
            tabindexContainer = chart.renderTo;
        }
        else {
            tabindexContainer = container;
        }
        this.tabindexContainer = tabindexContainer;
        var curTabindex = tabindexContainer.getAttribute('tabindex');
        if (shouldHaveTabindex && !curTabindex) {
            tabindexContainer.setAttribute('tabindex', '0');
        }
        else if (!shouldHaveTabindex) {
            chart.container.removeAttribute('tabindex');
        }
    };
    /**
     * Add new exit anchor to the chart.
     * @private
     */
    KeyboardNavigation.prototype.createExitAnchor = function () {
        var chart = this.chart,
            exitAnchor = this.exitAnchor = KeyboardNavigation_doc.createElement('div');
        chart.renderTo.appendChild(exitAnchor);
        this.makeElementAnExitAnchor(exitAnchor);
    };
    /**
     * Add attributes and events to an element to make it function as an
     * exit anchor.
     * @private
     */
    KeyboardNavigation.prototype.makeElementAnExitAnchor = function (el) {
        var chartTabindex = this.tabindexContainer.getAttribute('tabindex') || 0;
        el.setAttribute('class', 'highcharts-exit-anchor');
        el.setAttribute('tabindex', chartTabindex);
        el.setAttribute('aria-hidden', false);
        // Handle focus
        this.addExitAnchorEventsToEl(el);
    };
    /**
     * Destroy the exit anchor and remove from DOM.
     * @private
     */
    KeyboardNavigation.prototype.removeExitAnchor = function () {
        var _this = this;
        // Remove event from element and from eventRemovers array to prevent
        // memory leak (#20329).
        if (this.exitAnchor) {
            var el = this.eventProvider.eventRemovers.find(function (el) {
                    return el.element === _this.exitAnchor;
            });
            if (el && defined(el.remover)) {
                this.eventProvider.removeEvent(el.remover);
            }
            if (this.exitAnchor.parentNode) {
                this.exitAnchor.parentNode.removeChild(this.exitAnchor);
            }
            delete this.exitAnchor;
        }
    };
    /**
     * Add focus handler to exit anchor element.
     * @private
     */
    KeyboardNavigation.prototype.addExitAnchorEventsToEl = function (element) {
        var chart = this.chart,
            keyboardNavigation = this;
        this.eventProvider.addEvent(element, 'focus', function (ev) {
            var e = ev || KeyboardNavigation_win.event,
                focusComesFromChart = (e.relatedTarget &&
                    chart.container.contains(e.relatedTarget)),
                comingInBackwards = !(focusComesFromChart || keyboardNavigation.exiting);
            if (chart.focusElement) {
                delete chart.focusElement;
            }
            if (comingInBackwards) {
                // Focus the container instead
                keyboardNavigation.tabbingInBackwards = true;
                keyboardNavigation.tabindexContainer.focus();
                delete keyboardNavigation.tabbingInBackwards;
                e.preventDefault();
                // Move to last valid keyboard nav module
                // Note the we don't run it, just set the index
                if (keyboardNavigation.modules &&
                    keyboardNavigation.modules.length) {
                    keyboardNavigation.currentModuleIx =
                        keyboardNavigation.modules.length - 1;
                    var curModule = keyboardNavigation.modules[keyboardNavigation.currentModuleIx];
                    // Validate the module
                    if (curModule &&
                        curModule.validate && !curModule.validate()) {
                        // Invalid.
                        // Try moving backwards to find next valid.
                        keyboardNavigation.move(-1);
                    }
                    else if (curModule) {
                        // We have a valid module, init it
                        curModule.init(-1);
                    }
                }
            }
            else {
                // Don't skip the next focus, we only skip once.
                keyboardNavigation.exiting = false;
            }
        });
    };
    /**
     * Get the ix of the first module that either does not require validation or
     * validates positively.
     * @private
     */
    KeyboardNavigation.prototype.getFirstValidModuleIx = function () {
        var len = this.modules.length;
        for (var i = 0; i < len; ++i) {
            var mod = this.modules[i];
            if (!mod.validate || mod.validate()) {
                return i;
            }
        }
        return null;
    };
    /**
     * Remove all traces of keyboard navigation.
     * @private
     */
    KeyboardNavigation.prototype.destroy = function () {
        this.removeExitAnchor();
        this.eventProvider.removeAddedEvents();
        this.chart.container.removeAttribute('tabindex');
    };
    return KeyboardNavigation;
}());
/* *
 *
 *  Class Namespace
 *
 * */
(function (KeyboardNavigation) {
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
     * Composition function.
     * @private
     */
    function compose(ChartClass) {
        Components_MenuComponent.compose(ChartClass);
        var chartProto = ChartClass.prototype;
        if (!chartProto.dismissPopupContent) {
            chartProto.dismissPopupContent = chartDismissPopupContent;
            if (KeyboardNavigation_doc) {
                addEvent(KeyboardNavigation_doc, 'keydown', documentOnKeydown);
            }
        }
        return ChartClass;
    }
    KeyboardNavigation.compose = compose;
    /**
     * Dismiss popup content in chart, including export menu and tooltip.
     * @private
     */
    function chartDismissPopupContent() {
        var chart = this;
        fireEvent(this, 'dismissPopupContent', {}, function () {
            if (chart.tooltip) {
                chart.tooltip.hide(0);
            }
            chart.hideExportMenu();
        });
    }
    /**
     * Add event listener to document to detect ESC key press and dismiss
     * hover/popup content.
     * @private
     */
    function documentOnKeydown(e) {
        var keycode = e.which || e.keyCode;
        var esc = 27;
        if (keycode === esc && (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).charts) {
            highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default().charts.forEach(function (chart) {
                if (chart && chart.dismissPopupContent) {
                    chart.dismissPopupContent();
                }
            });
        }
    }
})(KeyboardNavigation || (KeyboardNavigation = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Accessibility_KeyboardNavigation = (KeyboardNavigation);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Legend"],"commonjs":["highcharts","Legend"],"commonjs2":["highcharts","Legend"],"root":["Highcharts","Legend"]}
var highcharts_Legend_commonjs_highcharts_Legend_commonjs2_highcharts_Legend_root_Highcharts_Legend_ = __webpack_require__(632);
var highcharts_Legend_commonjs_highcharts_Legend_commonjs2_highcharts_Legend_root_Highcharts_Legend_default = /*#__PURE__*/__webpack_require__.n(highcharts_Legend_commonjs_highcharts_Legend_commonjs2_highcharts_Legend_root_Highcharts_Legend_);
;// ./code/es5/es-modules/Accessibility/Components/LegendComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for chart legend.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var LegendComponent_extends = (undefined && undefined.__extends) || (function () {
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

var animObject = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).animObject;

var LegendComponent_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;




var LegendComponent_getChartTitle = Utils_ChartUtilities.getChartTitle;


var LegendComponent_stripHTMLTags = Utils_HTMLUtilities.stripHTMLTagsFromString, LegendComponent_addClass = Utils_HTMLUtilities.addClass, LegendComponent_removeClass = Utils_HTMLUtilities.removeClass;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function scrollLegendToItem(legend, itemIx) {
    var itemPage = (legend.allItems[itemIx].legendItem || {}).pageIx,
        curPage = legend.currentPage;
    if (typeof itemPage !== 'undefined' && itemPage + 1 !== curPage) {
        legend.scroll(1 + itemPage - curPage);
    }
}
/**
 * @private
 */
function shouldDoLegendA11y(chart) {
    var items = chart.legend && chart.legend.allItems,
        legendA11yOptions = (chart.options.legend.accessibility || {}),
        unsupportedColorAxis = chart.colorAxis && chart.colorAxis.some(function (c) { return !c.dataClasses || !c.dataClasses.length; });
    return !!(items && items.length &&
        !unsupportedColorAxis &&
        legendA11yOptions.enabled !== false);
}
/**
 * @private
 */
function setLegendItemHoverState(hoverActive, item) {
    var legendItem = item.legendItem || {};
    item.setState(hoverActive ? 'hover' : '', true);
    for (var _i = 0, _a = ['group', 'label', 'symbol']; _i < _a.length; _i++) {
        var key = _a[_i];
        var svgElement = legendItem[key];
        var element = svgElement && svgElement.element || svgElement;
        if (element) {
            fireEvent(element, hoverActive ? 'mouseover' : 'mouseout');
        }
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The LegendComponent class
 *
 * @private
 * @class
 * @name Highcharts.LegendComponent
 */
var LegendComponent = /** @class */ (function (_super) {
    LegendComponent_extends(LegendComponent, _super);
    function LegendComponent() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this,
            arguments) || this;
        _this.highlightedLegendItemIx = NaN;
        _this.proxyGroup = null;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init the component
     * @private
     */
    LegendComponent.prototype.init = function () {
        var component = this;
        this.recreateProxies();
        // Note: Chart could create legend dynamically, so events cannot be
        // tied to the component's chart's current legend.
        // @todo 1. attach component to created legends
        // @todo 2. move listeners to composition and access `this.component`
        this.addEvent((highcharts_Legend_commonjs_highcharts_Legend_commonjs2_highcharts_Legend_root_Highcharts_Legend_default()), 'afterScroll', function () {
            if (this.chart === component.chart) {
                component.proxyProvider.updateGroupProxyElementPositions('legend');
                component.updateLegendItemProxyVisibility();
                if (component.highlightedLegendItemIx > -1) {
                    this.chart.highlightLegendItem(component.highlightedLegendItemIx);
                }
            }
        });
        this.addEvent((highcharts_Legend_commonjs_highcharts_Legend_commonjs2_highcharts_Legend_root_Highcharts_Legend_default()), 'afterPositionItem', function (e) {
            if (this.chart === component.chart && this.chart.renderer) {
                component.updateProxyPositionForItem(e.item);
            }
        });
        this.addEvent((highcharts_Legend_commonjs_highcharts_Legend_commonjs2_highcharts_Legend_root_Highcharts_Legend_default()), 'afterRender', function () {
            if (this.chart === component.chart &&
                this.chart.renderer &&
                component.recreateProxies()) {
                syncTimeout(function () { return component.proxyProvider
                    .updateGroupProxyElementPositions('legend'); }, animObject(pick(this.chart.renderer.globalAnimation, true)).duration);
            }
        });
    };
    /**
     * Update visibility of legend items when using paged legend
     * @private
     */
    LegendComponent.prototype.updateLegendItemProxyVisibility = function () {
        var chart = this.chart;
        var legend = chart.legend;
        var items = legend.allItems || [];
        var curPage = legend.currentPage || 1;
        var clipHeight = legend.clipHeight || 0;
        var legendItem;
        items.forEach(function (item) {
            if (item.a11yProxyElement) {
                var hasPages = legend.pages && legend.pages.length;
                var proxyEl = item.a11yProxyElement.element;
                var hide = false;
                legendItem = item.legendItem || {};
                if (hasPages) {
                    var itemPage = legendItem.pageIx || 0;
                    var y = legendItem.y || 0;
                    var h = legendItem.label ?
                            Math.round(legendItem.label.getBBox().height) :
                            0;
                    hide = y + h - legend.pages[itemPage] > clipHeight ||
                        itemPage !== curPage - 1;
                }
                if (hide) {
                    if (chart.styledMode) {
                        LegendComponent_addClass(proxyEl, 'highcharts-a11y-invisible');
                    }
                    else {
                        proxyEl.style.visibility = 'hidden';
                    }
                }
                else {
                    LegendComponent_removeClass(proxyEl, 'highcharts-a11y-invisible');
                    proxyEl.style.visibility = '';
                }
            }
        });
    };
    /**
     * @private
     */
    LegendComponent.prototype.onChartRender = function () {
        if (!shouldDoLegendA11y(this.chart)) {
            this.removeProxies();
        }
    };
    /**
     * @private
     */
    LegendComponent.prototype.highlightAdjacentLegendPage = function (direction) {
        var chart = this.chart;
        var legend = chart.legend;
        var curPageIx = legend.currentPage || 1;
        var newPageIx = curPageIx + direction;
        var pages = legend.pages || [];
        if (newPageIx > 0 && newPageIx <= pages.length) {
            var i = 0,
                res = void 0;
            for (var _i = 0, _a = legend.allItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (((item.legendItem || {}).pageIx || 0) + 1 === newPageIx) {
                    res = chart.highlightLegendItem(i);
                    if (res) {
                        this.highlightedLegendItemIx = i;
                    }
                }
                ++i;
            }
        }
    };
    /**
     * @private
     */
    LegendComponent.prototype.updateProxyPositionForItem = function (item) {
        if (item.a11yProxyElement) {
            item.a11yProxyElement.refreshPosition();
        }
    };
    /**
     * Returns false if legend a11y is disabled and proxies were not created,
     * true otherwise.
     * @private
     */
    LegendComponent.prototype.recreateProxies = function () {
        var focusedElement = LegendComponent_doc.activeElement;
        var proxyGroup = this.proxyGroup;
        var shouldRestoreFocus = focusedElement && proxyGroup &&
                proxyGroup.contains(focusedElement);
        this.removeProxies();
        if (shouldDoLegendA11y(this.chart)) {
            this.addLegendProxyGroup();
            this.proxyLegendItems();
            this.updateLegendItemProxyVisibility();
            this.updateLegendTitle();
            if (shouldRestoreFocus) {
                this.chart.highlightLegendItem(this.highlightedLegendItemIx);
            }
            return true;
        }
        return false;
    };
    /**
     * @private
     */
    LegendComponent.prototype.removeProxies = function () {
        this.proxyProvider.removeGroup('legend');
    };
    /**
     * @private
     */
    LegendComponent.prototype.updateLegendTitle = function () {
        var chart = this.chart;
        var legendTitle = LegendComponent_stripHTMLTags((chart.legend &&
                chart.legend.options.title &&
                chart.legend.options.title.text ||
                '').replace(/<br ?\/?>/g, ' '), chart.renderer.forExport);
        var legendLabel = chart.langFormat('accessibility.legend.legendLabel' + (legendTitle ? '' : 'NoTitle'), {
                chart: chart,
                legendTitle: legendTitle,
                chartTitle: LegendComponent_getChartTitle(chart)
            });
        this.proxyProvider.updateGroupAttrs('legend', {
            'aria-label': legendLabel
        });
    };
    /**
     * @private
     */
    LegendComponent.prototype.addLegendProxyGroup = function () {
        var a11yOptions = this.chart.options.accessibility;
        var groupRole = a11yOptions.landmarkVerbosity === 'all' ?
                'region' : null;
        this.proxyGroup = this.proxyProvider.addGroup('legend', 'ul', {
            // Filled by updateLegendTitle, to keep up to date without
            // recreating group
            'aria-label': '_placeholder_',
            role: groupRole
        });
    };
    /**
     * @private
     */
    LegendComponent.prototype.proxyLegendItems = function () {
        var component = this,
            items = (this.chart.legend || {}).allItems || [];
        var legendItem;
        items.forEach(function (item) {
            legendItem = item.legendItem || {};
            if (legendItem.label && legendItem.label.element) {
                component.proxyLegendItem(item);
            }
        });
    };
    /**
     * @private
     * @param {Highcharts.BubbleLegendItem|Point|Highcharts.Series} item
     */
    LegendComponent.prototype.proxyLegendItem = function (item) {
        var _a,
            _b,
            _c;
        var legendItem = item.legendItem || {};
        var legendItemLabel = (_a = item.legendItem) === null || _a === void 0 ? void 0 : _a.label;
        var legendLabelEl = legendItemLabel === null || legendItemLabel === void 0 ? void 0 : legendItemLabel.element;
        var ellipsis = Boolean(((_c = (_b = legendItem.label) === null || _b === void 0 ? void 0 : _b.styles) === null || _c === void 0 ? void 0 : _c.textOverflow) === 'ellipsis');
        if (!legendItem.label || !legendItem.group) {
            return;
        }
        var itemLabel = this.chart.langFormat('accessibility.legend.legendItem', {
                chart: this.chart,
                itemName: LegendComponent_stripHTMLTags(item.name,
            this.chart.renderer.forExport),
                item: item
            });
        var attribs = {
                tabindex: -1,
                'aria-pressed': item.visible,
                'aria-label': itemLabel,
                title: ''
            };
        // Check if label contains an ellipsis character (\u2026) #22397
        if (ellipsis &&
            (legendLabelEl.textContent || '').indexOf('\u2026') !== -1) {
            attribs.title = legendItemLabel === null || legendItemLabel === void 0 ? void 0 : legendItemLabel.textStr;
        }
        // Considers useHTML
        var proxyPositioningElement = legendItem.group.div ?
                legendItem.label :
                legendItem.group;
        item.a11yProxyElement = this.proxyProvider.addProxyElement('legend', {
            click: legendItem.label,
            visual: proxyPositioningElement.element
        }, 'button', attribs);
    };
    /**
     * Get keyboard navigation handler for this component.
     * @private
     */
    LegendComponent.prototype.getKeyboardNavigation = function () {
        var keys = this.keyCodes,
            component = this,
            chart = this.chart;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [
                [
                    [keys.left, keys.right, keys.up, keys.down],
                    function (keyCode) {
                        return component.onKbdArrowKey(this, keyCode);
                    }
                ],
                [
                    [keys.enter, keys.space],
                    function () {
                        return component.onKbdClick(this);
                    }
                ],
                [
                    [keys.pageDown, keys.pageUp],
                    function (keyCode) {
                        var direction = keyCode === keys.pageDown ? 1 : -1;
                        component.highlightAdjacentLegendPage(direction);
                        return this.response.success;
                    }
                ]
            ],
            validate: function () {
                return component.shouldHaveLegendNavigation();
            },
            init: function () {
                chart.highlightLegendItem(0);
                component.highlightedLegendItemIx = 0;
            },
            terminate: function () {
                component.highlightedLegendItemIx = -1;
                chart.legend.allItems.forEach(function (item) { return setLegendItemHoverState(false, item); });
            }
        });
    };
    /**
     * Arrow key navigation
     * @private
     */
    LegendComponent.prototype.onKbdArrowKey = function (keyboardNavigationHandler, key) {
        var _a = this,
            _b = _a.keyCodes,
            left = _b.left,
            up = _b.up,
            highlightedLegendItemIx = _a.highlightedLegendItemIx,
            chart = _a.chart,
            numItems = chart.legend.allItems.length,
            wrapAround = chart.options.accessibility
                .keyboardNavigation.wrapAround,
            direction = (key === left || key === up) ? -1 : 1,
            res = chart.highlightLegendItem(highlightedLegendItemIx + direction);
        if (res) {
            this.highlightedLegendItemIx += direction;
        }
        else if (wrapAround && numItems > 1) {
            this.highlightedLegendItemIx = direction > 0 ?
                0 : numItems - 1;
            chart.highlightLegendItem(this.highlightedLegendItemIx);
        }
        return keyboardNavigationHandler.response.success;
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    LegendComponent.prototype.onKbdClick = function (keyboardNavigationHandler) {
        var legendItem = this.chart.legend.allItems[this.highlightedLegendItemIx];
        if (legendItem && legendItem.a11yProxyElement) {
            legendItem.a11yProxyElement.click();
        }
        return keyboardNavigationHandler.response.success;
    };
    /**
     * @private
     */
    LegendComponent.prototype.shouldHaveLegendNavigation = function () {
        if (!shouldDoLegendA11y(this.chart)) {
            return false;
        }
        var chart = this.chart,
            legendOptions = chart.options.legend || {},
            legendA11yOptions = (legendOptions.accessibility || {});
        return !!(chart.legend.display &&
            legendA11yOptions.keyboardNavigation &&
            legendA11yOptions.keyboardNavigation.enabled);
    };
    /**
     * Clean up
     * @private
     */
    LegendComponent.prototype.destroy = function () {
        this.removeProxies();
    };
    return LegendComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Class Namespace
 *
 * */
(function (LegendComponent) {
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
     * Highlight legend item by index.
     * @private
     */
    function chartHighlightLegendItem(ix) {
        var items = this.legend.allItems;
        var oldIx = this.accessibility &&
                this.accessibility.components.legend.highlightedLegendItemIx;
        var itemToHighlight = items[ix],
            legendItem = (itemToHighlight === null || itemToHighlight === void 0 ? void 0 : itemToHighlight.legendItem) || {};
        if (itemToHighlight) {
            if (isNumber(oldIx) && items[oldIx]) {
                setLegendItemHoverState(false, items[oldIx]);
            }
            scrollLegendToItem(this.legend, ix);
            var legendItemProp = legendItem.label;
            var proxyBtn = itemToHighlight.a11yProxyElement &&
                    itemToHighlight.a11yProxyElement.innerElement;
            if (legendItemProp && legendItemProp.element && proxyBtn) {
                this.setFocusToElement(legendItemProp, proxyBtn);
            }
            setLegendItemHoverState(true, itemToHighlight);
            return true;
        }
        return false;
    }
    /**
     * @private
     */
    function compose(ChartClass, LegendClass) {
        var chartProto = ChartClass.prototype;
        if (!chartProto.highlightLegendItem) {
            chartProto.highlightLegendItem = chartHighlightLegendItem;
            addEvent(LegendClass, 'afterColorizeItem', legendOnAfterColorizeItem);
        }
    }
    LegendComponent.compose = compose;
    /**
     * Keep track of pressed state for legend items.
     * @private
     */
    function legendOnAfterColorizeItem(e) {
        var chart = this.chart,
            a11yOptions = chart.options.accessibility,
            legendItem = e.item;
        if (a11yOptions.enabled && legendItem && legendItem.a11yProxyElement) {
            legendItem.a11yProxyElement.innerElement.setAttribute('aria-pressed', e.visible ? 'true' : 'false');
        }
    }
})(LegendComponent || (LegendComponent = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Components_LegendComponent = (LegendComponent);

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

;// ./code/es5/es-modules/Accessibility/Components/NavigatorComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Accessibility component for the navigator.
 *
 *  Author: Øystein Moseng
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var NavigatorComponent_extends = (undefined && undefined.__extends) || (function () {
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
 *  Imports
 *
 * */





var NavigatorComponent_animObject = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).animObject;

var NavigatorComponent_format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format;

var NavigatorComponent_getFakeMouseEvent = Utils_HTMLUtilities.getFakeMouseEvent;

var NavigatorComponent_getAxisRangeDescription = Utils_ChartUtilities.getAxisRangeDescription, NavigatorComponent_fireEventOnWrappedOrUnwrappedElement = Utils_ChartUtilities.fireEventOnWrappedOrUnwrappedElement;

/**
 * The NavigatorComponent class
 *
 * @private
 * @class
 * @name Highcharts.NavigatorComponent
 */
var NavigatorComponent = /** @class */ (function (_super) {
    NavigatorComponent_extends(NavigatorComponent, _super);
    function NavigatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init the component
     * @private
     */
    NavigatorComponent.prototype.init = function () {
        var chart = this.chart,
            component = this;
        this.announcer = new Utils_Announcer(chart, 'polite');
        // Update positions after render
        this.addEvent(Navigator_Navigator, 'afterRender', function () {
            if (this.chart === component.chart &&
                this.chart.renderer) {
                syncTimeout(function () {
                    component.proxyProvider
                        .updateGroupProxyElementPositions('navigator');
                    component.updateHandleValues();
                }, NavigatorComponent_animObject(pick(this.chart.renderer.globalAnimation, true)).duration);
            }
        });
    };
    /**
     * Called on updates
     * @private
     */
    NavigatorComponent.prototype.onChartUpdate = function () {
        var _this = this;
        var _a,
            _b,
            _c;
        var chart = this.chart,
            options = chart.options,
            navigator = options.navigator;
        if (navigator.enabled && ((_a = navigator.accessibility) === null || _a === void 0 ? void 0 : _a.enabled)) {
            var verbosity = options.accessibility.landmarkVerbosity,
                groupFormatStr = (_b = options.lang
                    .accessibility) === null || _b === void 0 ? void 0 : _b.navigator.groupLabel;
            // We just recreate the group for simplicity. Could consider
            // updating the existing group if the verbosity has not changed.
            this.proxyProvider.removeGroup('navigator');
            this.proxyProvider.addGroup('navigator', 'div', {
                role: verbosity === 'all' ? 'region' : 'group',
                'aria-label': NavigatorComponent_format(groupFormatStr, { chart: chart }, chart)
            });
            var handleFormatStr_1 = (_c = options.lang
                    .accessibility) === null || _c === void 0 ? void 0 : _c.navigator.handleLabel;
            [0, 1].forEach(function (n) {
                var handle = _this.getHandleByIx(n);
                if (handle) {
                    var proxyEl = _this.proxyProvider.addProxyElement('navigator', {
                            click: handle
                        }, 'input', {
                            type: 'range',
                            'aria-label': NavigatorComponent_format(handleFormatStr_1, { handleIx: n,
                        chart: chart },
                        chart)
                        });
                    _this[n ? 'maxHandleProxy' : 'minHandleProxy'] =
                        proxyEl.innerElement;
                    proxyEl.innerElement.style.pointerEvents = 'none';
                    proxyEl.innerElement.oninput =
                        function () { return _this.updateNavigator(); };
                }
            });
            this.updateHandleValues();
        }
        else {
            this.proxyProvider.removeGroup('navigator');
        }
    };
    /**
     * Get navigation for a navigator handle.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler} The module object.
     */
    NavigatorComponent.prototype.getNavigatorHandleNavigation = function (handleIx) {
        var _this = this;
        var component = this,
            chart = this.chart,
            proxyEl = handleIx ? this.maxHandleProxy : this.minHandleProxy,
            keys = this.keyCodes;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [[
                    [keys.left, keys.right, keys.up, keys.down],
                    function (keyCode) {
                        if (proxyEl) {
                            var delta = keyCode === keys.left ||
                                    keyCode === keys.up ? -1 : 1;
                            proxyEl.value = '' + clamp(parseFloat(proxyEl.value) + delta, 0, 100);
                            component.updateNavigator(function () {
                                var handle = component.getHandleByIx(handleIx);
                                if (handle) {
                                    chart.setFocusToElement(handle, proxyEl);
                                }
                            });
                        }
                        return this.response.success;
                    }
                ]],
            init: function () {
                chart.setFocusToElement(_this.getHandleByIx(handleIx), proxyEl);
            },
            validate: function () {
                var _a;
                return !!(_this.getHandleByIx(handleIx) && proxyEl &&
                    ((_a = chart.options.navigator.accessibility) === null || _a === void 0 ? void 0 : _a.enabled));
            }
        });
    };
    /**
     * Get keyboard navigation handlers for this component.
     * @return {Array<Highcharts.KeyboardNavigationHandler>}
     *         List of module objects.
     */
    NavigatorComponent.prototype.getKeyboardNavigation = function () {
        return [
            this.getNavigatorHandleNavigation(0),
            this.getNavigatorHandleNavigation(1)
        ];
    };
    /**
     * Remove component traces
     */
    NavigatorComponent.prototype.destroy = function () {
        if (this.updateNavigatorThrottleTimer) {
            internalClearTimeout(this.updateNavigatorThrottleTimer);
        }
        this.proxyProvider.removeGroup('navigator');
        if (this.announcer) {
            this.announcer.destroy();
        }
    };
    /**
     * Update the value of the handles to match current navigator pos.
     * @private
     */
    NavigatorComponent.prototype.updateHandleValues = function () {
        var navigator = this.chart.navigator;
        if (navigator && this.minHandleProxy && this.maxHandleProxy) {
            var length_1 = navigator.size;
            this.minHandleProxy.value =
                '' + Math.round(navigator.zoomedMin / length_1 * 100);
            this.maxHandleProxy.value =
                '' + Math.round(navigator.zoomedMax / length_1 * 100);
        }
    };
    /**
     * Get a navigator handle by its index
     * @private
     */
    NavigatorComponent.prototype.getHandleByIx = function (ix) {
        var navigator = this.chart.navigator;
        return navigator && navigator.handles &&
            navigator.handles[ix];
    };
    /**
     * Update navigator to match changed proxy values.
     * @private
     */
    NavigatorComponent.prototype.updateNavigator = function (beforeAnnounce) {
        var _this = this;
        var performUpdate = function (beforeAnnounce) {
                var _a,
            _b;
            var chart = _this.chart,
                navigator = chart.navigator,
                pointer = chart.pointer,
                keyboardNavigation = (_a = _this.chart.accessibility) === null || _a === void 0 ? void 0 : _a.keyboardNavigation;
            if (navigator &&
                pointer &&
                _this.minHandleProxy &&
                _this.maxHandleProxy) {
                var chartPos_1 = pointer.getChartPosition(),
                    minNewX = parseFloat(_this.minHandleProxy.value) /
                        100 * navigator.size,
                    maxNewX = parseFloat(_this.maxHandleProxy.value) /
                        100 * navigator.size;
                // Fire fake events in order for each handle.
                [
                    [0, 'mousedown', navigator.zoomedMin],
                    [0, 'mousemove', minNewX],
                    [0, 'mouseup', minNewX],
                    [1, 'mousedown', navigator.zoomedMax],
                    [1, 'mousemove', maxNewX],
                    [1, 'mouseup', maxNewX]
                ].forEach(function (_a) {
                    var _b;
                    var handleIx = _a[0],
                        type = _a[1],
                        x = _a[2];
                    var handle = (_b = _this.getHandleByIx(handleIx)) === null || _b === void 0 ? void 0 : _b.element;
                    if (handle) {
                        NavigatorComponent_fireEventOnWrappedOrUnwrappedElement(handle, NavigatorComponent_getFakeMouseEvent(type, {
                            x: chartPos_1.left + navigator.left + x,
                            y: chartPos_1.top + navigator.top
                        }, handle));
                    }
                });
                // If navigating by keyboard, do not reset #22122
                if (keyboardNavigation) {
                    keyboardNavigation.keyboardReset = false;
                }
                if (beforeAnnounce) {
                    beforeAnnounce();
                }
                // Announce the update
                var announceFormatStr = (_b = chart.options.lang
                        .accessibility) === null || _b === void 0 ? void 0 : _b.navigator.changeAnnouncement,
                    axisRangeDescription = NavigatorComponent_getAxisRangeDescription(chart.xAxis[0]);
                _this.announcer.announce(NavigatorComponent_format(announceFormatStr, { axisRangeDescription: axisRangeDescription, chart: chart }, chart));
            }
        };
        // Throttle updates so as not to reduce performance with
        // continuous keypress.
        if (this.updateNavigatorThrottleTimer) {
            internalClearTimeout(this.updateNavigatorThrottleTimer);
        }
        this.updateNavigatorThrottleTimer = setTimeout(performUpdate.bind(this, beforeAnnounce), 20);
    };
    return NavigatorComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ var Components_NavigatorComponent = (NavigatorComponent);

;// ./code/es5/es-modules/Accessibility/Components/SeriesComponent/SeriesDescriber.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Place descriptions on a series and its points.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var SeriesDescriber_getPointAnnotationTexts = Components_AnnotationsA11y.getPointAnnotationTexts;

var SeriesDescriber_getAxisDescription = Utils_ChartUtilities.getAxisDescription, SeriesDescriber_getSeriesFirstPointElement = Utils_ChartUtilities.getSeriesFirstPointElement, SeriesDescriber_getSeriesA11yElement = Utils_ChartUtilities.getSeriesA11yElement, SeriesDescriber_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT;

var SeriesDescriber_format = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).format, numberFormat = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default()).numberFormat;

var SeriesDescriber_reverseChildNodes = Utils_HTMLUtilities.reverseChildNodes, SeriesDescriber_stripHTMLTags = Utils_HTMLUtilities.stripHTMLTagsFromString;

/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function findFirstPointWithGraphic(point) {
    var _a;
    var sourcePointIndex = point.index;
    if (!point.series || !point.series.data || !defined(sourcePointIndex)) {
        return null;
    }
    var nullInteraction = (_a = point.series.options) === null || _a === void 0 ? void 0 : _a.nullInteraction;
    return find(point.series.data, function (p) {
        return !!(p &&
            typeof p.index !== 'undefined' &&
            (nullInteraction || p.index > sourcePointIndex) &&
            p.graphic &&
            p.graphic.element);
    }) || null;
}
/**
 * Whether or not we should add a mock point element in
 * order to describe a point that has no graphic.
 * @private
 */
function shouldAddMockPoint(point) {
    // Note: Sunburst series use isNull for hidden points on drilldown.
    // Ignore these.
    var series = point.series,
        chart = series && series.chart,
        isSunburst = series && series.is('sunburst'),
        isNull = point.isNull,
        shouldDescribeNull = chart &&
            chart
                .options.accessibility.point.describeNull;
    return isNull && !isSunburst && shouldDescribeNull;
}
/**
 * @private
 */
function makeMockElement(point, pos) {
    var renderer = point.series.chart.renderer,
        mock = renderer.rect(pos.x,
        pos.y, 1, 1);
    mock.attr({
        'class': 'highcharts-a11y-mock-point',
        fill: 'none',
        opacity: 0,
        'fill-opacity': 0,
        'stroke-opacity': 0
    });
    return mock;
}
/**
 * @private
 */
function addMockPointElement(point) {
    var series = point.series,
        firstPointWithGraphic = findFirstPointWithGraphic(point),
        firstGraphic = firstPointWithGraphic && firstPointWithGraphic.graphic,
        parentGroup = firstGraphic ?
            firstGraphic.parentGroup :
            series.graph || series.group,
        mockPos = firstPointWithGraphic ? {
            x: pick(point.plotX,
        firstPointWithGraphic.plotX, 0),
            y: pick(point.plotY,
        firstPointWithGraphic.plotY, 0)
        } : {
            x: pick(point.plotX, 0),
            y: pick(point.plotY, 0)
        },
        mockElement = makeMockElement(point,
        mockPos);
    if (parentGroup && parentGroup.element) {
        point.graphic = mockElement;
        point.hasMockGraphic = true;
        mockElement.add(parentGroup);
        // Move to correct pos in DOM
        parentGroup.element.insertBefore(mockElement.element, firstGraphic ? firstGraphic.element : null);
        return mockElement.element;
    }
}
/**
 * @private
 */
function hasMorePointsThanDescriptionThreshold(series) {
    var chartA11yOptions = series.chart.options.accessibility,
        threshold = (chartA11yOptions.series.pointDescriptionEnabledThreshold);
    return !!(threshold !== false &&
        series.points &&
        series.points.length >= +threshold);
}
/**
 * @private
 */
function shouldSetScreenReaderPropsOnPoints(series) {
    var seriesA11yOptions = series.options.accessibility || {};
    return !hasMorePointsThanDescriptionThreshold(series) &&
        !seriesA11yOptions.exposeAsGroupOnly;
}
/**
 * @private
 */
function shouldSetKeyboardNavPropsOnPoints(series) {
    var chartA11yOptions = series.chart.options.accessibility,
        seriesNavOptions = chartA11yOptions.keyboardNavigation.seriesNavigation;
    return !!(series.points && (series.points.length <
        +seriesNavOptions.pointNavigationEnabledThreshold ||
        seriesNavOptions.pointNavigationEnabledThreshold === false));
}
/**
 * @private
 */
function shouldDescribeSeriesElement(series) {
    var chart = series.chart,
        chartOptions = chart.options.chart,
        chartHas3d = chartOptions.options3d && chartOptions.options3d.enabled,
        hasMultipleSeries = chart.series.length > 1,
        describeSingleSeriesOption = chart.options.accessibility.series.describeSingleSeries,
        exposeAsGroupOnlyOption = (series.options.accessibility || {}).exposeAsGroupOnly,
        noDescribe3D = chartHas3d && hasMultipleSeries;
    return !noDescribe3D && (hasMultipleSeries || describeSingleSeriesOption ||
        exposeAsGroupOnlyOption || hasMorePointsThanDescriptionThreshold(series));
}
/**
 * @private
 */
function pointNumberToString(point, value) {
    var series = point.series,
        chart = series.chart,
        a11yPointOptions = chart.options.accessibility.point || {},
        seriesA11yPointOptions = series.options.accessibility &&
            series.options.accessibility.point || {},
        tooltipOptions = series.tooltipOptions || {},
        lang = chart.options.lang;
    if (isNumber(value)) {
        return numberFormat(value, seriesA11yPointOptions.valueDecimals ||
            a11yPointOptions.valueDecimals ||
            tooltipOptions.valueDecimals ||
            -1, lang.decimalPoint, lang.accessibility.thousandsSep || lang.thousandsSep);
    }
    return value;
}
/**
 * @private
 */
function getSeriesDescriptionText(series) {
    var seriesA11yOptions = series.options.accessibility || {},
        descOpt = seriesA11yOptions.description;
    return descOpt && series.chart.langFormat('accessibility.series.description', {
        description: descOpt,
        series: series
    }) || '';
}
/**
 * @private
 */
function getSeriesAxisDescriptionText(series, axisCollection) {
    var axis = series[axisCollection];
    return series.chart.langFormat('accessibility.series.' + axisCollection + 'Description', {
        name: SeriesDescriber_getAxisDescription(axis),
        series: series
    });
}
/**
 * Get accessible time description for a point on a datetime axis.
 *
 * @private
 */
function getPointA11yTimeDescription(point) {
    var _a;
    var series = point.series,
        chart = series.chart,
        seriesA11yOptions = series.options.accessibility &&
            series.options.accessibility.point || {},
        a11yOptions = chart.options.accessibility.point || {},
        dateXAxis = series.xAxis && series.xAxis.dateTime;
    if (dateXAxis) {
        var tooltipDateFormat = dateXAxis.getXDateFormat(point.x || 0,
            chart.options.tooltip.dateTimeLabelFormats),
            dateFormat = seriesA11yOptions.dateFormatter &&
                seriesA11yOptions.dateFormatter(point) ||
                ((_a = a11yOptions.dateFormatter) === null || _a === void 0 ? void 0 : _a.call(a11yOptions,
            point)) ||
                seriesA11yOptions.dateFormat ||
                a11yOptions.dateFormat ||
                tooltipDateFormat;
        return chart.time.dateFormat(dateFormat, point.x || 0, void 0);
    }
}
/**
 * @private
 */
function getPointXDescription(point) {
    var timeDesc = getPointA11yTimeDescription(point), xAxis = point.series.xAxis || {}, pointCategory = xAxis.categories && defined(point.category) &&
            ('' + point.category).replace('<br/>', ' '), canUseId = defined(point.id) &&
            ('' + point.id).indexOf('highcharts-') < 0, fallback = 'x, ' + point.x;
    return point.name || timeDesc || pointCategory ||
        (canUseId ? point.id : fallback);
}
/**
 * @private
 */
function getPointArrayMapValueDescription(point, prefix, suffix) {
    var pre = prefix || '', suf = suffix || '', keyToValStr = function (key) {
            var num = pointNumberToString(point, pick(point[key], point.options[key]));
        return num !== void 0 ?
            key + ': ' + pre + num + suf :
            num;
    }, pointArrayMap = point.series.pointArrayMap;
    return pointArrayMap.reduce(function (desc, key) {
        var propDesc = keyToValStr(key);
        return propDesc ?
            (desc + (desc.length ? ', ' : '') + propDesc) :
            desc;
    }, '');
}
/**
 * @private
 */
function getPointValue(point) {
    var series = point.series,
        a11yPointOpts = series.chart.options.accessibility.point || {},
        seriesA11yPointOpts = series.chart.options.accessibility &&
            series.chart.options.accessibility.point || {},
        tooltipOptions = series.tooltipOptions || {},
        valuePrefix = seriesA11yPointOpts.valuePrefix ||
            a11yPointOpts.valuePrefix ||
            tooltipOptions.valuePrefix ||
            '',
        valueSuffix = seriesA11yPointOpts.valueSuffix ||
            a11yPointOpts.valueSuffix ||
            tooltipOptions.valueSuffix ||
            '',
        fallbackKey = (typeof point.value !==
            'undefined' ?
            'value' : 'y'),
        fallbackDesc = pointNumberToString(point,
        point[fallbackKey]);
    if (point.isNull) {
        return series.chart.langFormat('accessibility.series.nullPointValue', {
            point: point
        });
    }
    if (series.pointArrayMap) {
        return getPointArrayMapValueDescription(point, valuePrefix, valueSuffix);
    }
    return valuePrefix + fallbackDesc + valueSuffix;
}
/**
 * Return the description for the annotation(s) connected to a point, or
 * empty string if none.
 *
 * @private
 * @param {Highcharts.Point} point
 * The data point to get the annotation info from.
 * @return {string}
 * Annotation description
 */
function getPointAnnotationDescription(point) {
    var chart = point.series.chart;
    var langKey = 'accessibility.series.pointAnnotationsDescription';
    var annotations = SeriesDescriber_getPointAnnotationTexts(point);
    var context = { point: point,
        annotations: annotations };
    return annotations.length ? chart.langFormat(langKey, context) : '';
}
/**
 * Return string with information about point.
 * @private
 */
function getPointValueDescription(point) {
    var series = point.series, chart = series.chart, seriesA11yOptions = series.options.accessibility, seriesValueDescFormat = seriesA11yOptions && seriesA11yOptions.point &&
            seriesA11yOptions.point.valueDescriptionFormat, pointValueDescriptionFormat = seriesValueDescFormat ||
            chart.options.accessibility.point.valueDescriptionFormat, showXDescription = pick(series.xAxis &&
            series.xAxis.options.accessibility &&
            series.xAxis.options.accessibility.enabled, !chart.angular && series.type !== 'flowmap'), xDesc = showXDescription ? getPointXDescription(point) : '', context = {
            point: point,
            index: defined(point.index) ? (point.index + 1) : '',
            xDescription: xDesc,
            value: getPointValue(point),
            separator: showXDescription ? ', ' : ''
        };
    return SeriesDescriber_format(pointValueDescriptionFormat, context, chart);
}
/**
 * Return string with information about point.
 * @private
 */
function defaultPointDescriptionFormatter(point) {
    var series = point.series, shouldExposeSeriesName = series.chart.series.length > 1 ||
            series.options.name, valText = getPointValueDescription(point), description = point.options && point.options.accessibility &&
            point.options.accessibility.description, userDescText = description ? ' ' + description : '', seriesNameText = shouldExposeSeriesName ? ' ' + series.name + '.' : '', annotationsDesc = getPointAnnotationDescription(point), pointAnnotationsText = annotationsDesc ? ' ' + annotationsDesc : '';
    point.accessibility = point.accessibility || {};
    point.accessibility.valueDescription = valText;
    return valText + userDescText + seriesNameText + pointAnnotationsText;
}
/**
 * Set a11y props on a point element
 * @private
 * @param {Highcharts.Point} point
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} pointElement
 */
function setPointScreenReaderAttribs(point, pointElement) {
    var _a,
        _b,
        _c;
    var series = point.series,
        seriesPointA11yOptions = ((_a = series.options.accessibility) === null || _a === void 0 ? void 0 : _a.point) || {},
        a11yPointOptions = series.chart.options.accessibility.point || {},
        label = SeriesDescriber_stripHTMLTags((isString(seriesPointA11yOptions.descriptionFormat) &&
            SeriesDescriber_format(seriesPointA11yOptions.descriptionFormat,
        point,
        series.chart)) ||
            ((_b = seriesPointA11yOptions.descriptionFormatter) === null || _b === void 0 ? void 0 : _b.call(seriesPointA11yOptions,
        point)) ||
            (isString(a11yPointOptions.descriptionFormat) &&
                SeriesDescriber_format(a11yPointOptions.descriptionFormat,
        point,
        series.chart)) ||
            ((_c = a11yPointOptions.descriptionFormatter) === null || _c === void 0 ? void 0 : _c.call(a11yPointOptions,
        point)) ||
            defaultPointDescriptionFormatter(point),
        series.chart.renderer.forExport);
    pointElement.setAttribute('role', 'img');
    pointElement.setAttribute('aria-label', label);
}
/**
 * Add accessible info to individual point elements of a series
 * @private
 * @param {Highcharts.Series} series
 */
function describePointsInSeries(series) {
    var setScreenReaderProps = shouldSetScreenReaderPropsOnPoints(series),
        setKeyboardProps = shouldSetKeyboardNavPropsOnPoints(series),
        shouldDescribeNullPoints = series.chart.options.accessibility
            .point.describeNull;
    if (setScreenReaderProps || setKeyboardProps) {
        series.points.forEach(function (point) {
            var pointEl = point.graphic && point.graphic.element ||
                    shouldAddMockPoint(point) && addMockPointElement(point),
                pointA11yDisabled = (point.options &&
                    point.options.accessibility &&
                    point.options.accessibility.enabled === false);
            if (pointEl) {
                if (point.isNull && !shouldDescribeNullPoints) {
                    pointEl.setAttribute('aria-hidden', true);
                    return;
                }
                // We always set tabindex, as long as we are setting props.
                // When setting tabindex, also remove default outline to
                // avoid ugly border on click.
                pointEl.setAttribute('tabindex', '-1');
                if (!series.chart.styledMode) {
                    pointEl.style.outline = 'none';
                }
                if (setScreenReaderProps && !pointA11yDisabled) {
                    setPointScreenReaderAttribs(point, pointEl);
                }
                else {
                    pointEl.setAttribute('aria-hidden', true);
                }
            }
        });
    }
}
/**
 * Return string with information about series.
 * @private
 */
function defaultSeriesDescriptionFormatter(series) {
    var chart = series.chart,
        chartTypes = chart.types || [],
        description = getSeriesDescriptionText(series),
        shouldDescribeAxis = function (coll) {
            return chart[coll] && chart[coll].length > 1 && series[coll];
    }, seriesNumber = series.index + 1, xAxisInfo = getSeriesAxisDescriptionText(series, 'xAxis'), yAxisInfo = getSeriesAxisDescriptionText(series, 'yAxis'), summaryContext = {
        seriesNumber: seriesNumber,
        series: series,
        chart: chart
    }, combinationSuffix = chartTypes.length > 1 ? 'Combination' : '', summary = chart.langFormat('accessibility.series.summary.' + series.type + combinationSuffix, summaryContext) || chart.langFormat('accessibility.series.summary.default' + combinationSuffix, summaryContext), axisDescription = (shouldDescribeAxis('yAxis') ? ' ' + yAxisInfo + '.' : '') + (shouldDescribeAxis('xAxis') ? ' ' + xAxisInfo + '.' : ''), formatStr = pick(series.options.accessibility &&
        series.options.accessibility.descriptionFormat, chart.options.accessibility.series.descriptionFormat, '');
    return SeriesDescriber_format(formatStr, {
        seriesDescription: summary,
        authorDescription: (description ? ' ' + description : ''),
        axisDescription: axisDescription,
        series: series,
        chart: chart,
        seriesNumber: seriesNumber
    }, void 0);
}
/**
 * Set a11y props on a series element
 * @private
 * @param {Highcharts.Series} series
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} seriesElement
 */
function describeSeriesElement(series, seriesElement) {
    var seriesA11yOptions = series.options.accessibility || {},
        a11yOptions = series.chart.options.accessibility,
        landmarkVerbosity = a11yOptions.landmarkVerbosity;
    // Handle role attribute
    if (seriesA11yOptions.exposeAsGroupOnly) {
        seriesElement.setAttribute('role', 'img');
    }
    else if (landmarkVerbosity === 'all') {
        seriesElement.setAttribute('role', 'region');
    }
    else {
        seriesElement.setAttribute('role', 'group');
    }
    seriesElement.setAttribute('tabindex', '-1');
    if (!series.chart.styledMode) {
        // Don't show browser outline on click, despite tabindex
        seriesElement.style.outline = 'none';
    }
    seriesElement.setAttribute('aria-label', SeriesDescriber_stripHTMLTags(a11yOptions.series.descriptionFormatter &&
        a11yOptions.series.descriptionFormatter(series) ||
        defaultSeriesDescriptionFormatter(series), series.chart.renderer.forExport));
}
/**
 * Put accessible info on series and points of a series.
 * @param {Highcharts.Series} series The series to add info on.
 */
function describeSeries(series) {
    var chart = series.chart,
        firstPointEl = SeriesDescriber_getSeriesFirstPointElement(series),
        seriesEl = SeriesDescriber_getSeriesA11yElement(series),
        is3d = chart.is3d && chart.is3d();
    if (seriesEl) {
        // For some series types the order of elements do not match the
        // order of points in series. In that case we have to reverse them
        // in order for AT to read them out in an understandable order.
        // Due to z-index issues we cannot do this for 3D charts.
        if (seriesEl.lastChild === firstPointEl && !is3d) {
            SeriesDescriber_reverseChildNodes(seriesEl);
        }
        describePointsInSeries(series);
        SeriesDescriber_unhideChartElementFromAT(chart, seriesEl);
        if (shouldDescribeSeriesElement(series)) {
            describeSeriesElement(series, seriesEl);
        }
        else {
            seriesEl.removeAttribute('aria-label');
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
var SeriesDescriber = {
    defaultPointDescriptionFormatter: defaultPointDescriptionFormatter,
    defaultSeriesDescriptionFormatter: defaultSeriesDescriptionFormatter,
    describeSeries: describeSeries
};
/* harmony default export */ var SeriesComponent_SeriesDescriber = (SeriesDescriber);

;// ./code/es5/es-modules/Accessibility/Components/SeriesComponent/NewDataAnnouncer.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Handle announcing new data for a chart.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var NewDataAnnouncer_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;


var NewDataAnnouncer_getChartTitle = Utils_ChartUtilities.getChartTitle;



var NewDataAnnouncer_defaultPointDescriptionFormatter = SeriesComponent_SeriesDescriber.defaultPointDescriptionFormatter, NewDataAnnouncer_defaultSeriesDescriptionFormatter = SeriesComponent_SeriesDescriber.defaultSeriesDescriptionFormatter;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function chartHasAnnounceEnabled(chart) {
    return !!chart.options.accessibility.announceNewData.enabled;
}
/**
 * @private
 */
function findPointInDataArray(point) {
    var candidates = point.series.data.filter(function (candidate) { return (point.x === candidate.x && point.y === candidate.y); });
    return candidates.length === 1 ? candidates[0] : point;
}
/**
 * Get array of unique series from two arrays
 * @private
 */
function getUniqueSeries(arrayA, arrayB) {
    var uniqueSeries = (arrayA || []).concat(arrayB || []).reduce(function (acc,
        cur) {
            acc[cur.name + cur.index] = cur;
        return acc;
    }, {});
    return Object
        .keys(uniqueSeries)
        .map(function (ix) { return uniqueSeries[ix]; });
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 */
var NewDataAnnouncer = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function NewDataAnnouncer(chart) {
        this.dirty = {
            allSeries: {}
        };
        this.lastAnnouncementTime = 0;
        this.chart = chart;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the new data announcer.
     * @private
     */
    NewDataAnnouncer.prototype.init = function () {
        var chart = this.chart;
        var announceOptions = (chart.options.accessibility.announceNewData);
        var announceType = announceOptions.interruptUser ?
                'assertive' : 'polite';
        this.lastAnnouncementTime = 0;
        this.dirty = {
            allSeries: {}
        };
        this.eventProvider = new Utils_EventProvider();
        this.announcer = new Utils_Announcer(chart, announceType);
        this.addEventListeners();
    };
    /**
     * Remove traces of announcer.
     * @private
     */
    NewDataAnnouncer.prototype.destroy = function () {
        this.eventProvider.removeAddedEvents();
        this.announcer.destroy();
    };
    /**
     * Add event listeners for the announcer
     * @private
     */
    NewDataAnnouncer.prototype.addEventListeners = function () {
        var announcer = this,
            chart = this.chart,
            e = this.eventProvider;
        e.addEvent(chart, 'afterApplyDrilldown', function () {
            announcer.lastAnnouncementTime = 0;
        });
        e.addEvent(chart, 'afterAddSeries', function (e) {
            announcer.onSeriesAdded(e.series);
        });
        e.addEvent(chart, 'redraw', function () {
            announcer.announceDirtyData();
        });
    };
    /**
     * On new data series added, update dirty list.
     * @private
     * @param {Highcharts.Series} series
     */
    NewDataAnnouncer.prototype.onSeriesAdded = function (series) {
        if (chartHasAnnounceEnabled(this.chart)) {
            this.dirty.hasDirty = true;
            this.dirty.allSeries[series.name + series.index] = series;
            // Add it to newSeries storage unless we already have one
            this.dirty.newSeries = defined(this.dirty.newSeries) ?
                void 0 : series;
        }
    };
    /**
     * Gather what we know and announce the data to user.
     * @private
     */
    NewDataAnnouncer.prototype.announceDirtyData = function () {
        var chart = this.chart,
            announcer = this;
        if (chart.options.accessibility.announceNewData &&
            this.dirty.hasDirty) {
            var newPoint = this.dirty.newPoint;
            // If we have a single new point, see if we can find it in the
            // data array. Otherwise we can only pass through options to
            // the description builder, and it is a bit sparse in info.
            if (newPoint) {
                newPoint = findPointInDataArray(newPoint);
            }
            this.queueAnnouncement(Object
                .keys(this.dirty.allSeries)
                .map(function (ix) {
                return announcer.dirty.allSeries[ix];
            }), this.dirty.newSeries, newPoint);
            // Reset
            this.dirty = {
                allSeries: {}
            };
        }
    };
    /**
     * Announce to user that there is new data.
     * @private
     * @param {Array<Highcharts.Series>} dirtySeries
     *          Array of series with new data.
     * @param {Highcharts.Series} [newSeries]
     *          If a single new series was added, a reference to this series.
     * @param {Highcharts.Point} [newPoint]
     *          If a single point was added, a reference to this point.
     */
    NewDataAnnouncer.prototype.queueAnnouncement = function (dirtySeries, newSeries, newPoint) {
        var _this = this;
        var chart = this.chart;
        var annOptions = chart.options.accessibility.announceNewData;
        if (annOptions.enabled) {
            var now = +new Date();
            var dTime = now - this.lastAnnouncementTime;
            var time = Math.max(0,
                annOptions.minAnnounceInterval - dTime);
            // Add series from previously queued announcement.
            var allSeries = getUniqueSeries(this.queuedAnnouncement && this.queuedAnnouncement.series,
                dirtySeries);
            // Build message and announce
            var message = this.buildAnnouncementMessage(allSeries,
                newSeries,
                newPoint);
            if (message) {
                // Is there already one queued?
                if (this.queuedAnnouncement) {
                    internalClearTimeout(this.queuedAnnouncementTimer);
                }
                // Build the announcement
                this.queuedAnnouncement = {
                    time: now,
                    message: message,
                    series: allSeries
                };
                // Queue the announcement
                this.queuedAnnouncementTimer = setTimeout(function () {
                    if (_this && _this.announcer) {
                        _this.lastAnnouncementTime = +new Date();
                        _this.announcer.announce(_this.queuedAnnouncement.message);
                        delete _this.queuedAnnouncement;
                        delete _this.queuedAnnouncementTimer;
                    }
                }, time);
            }
        }
    };
    /**
     * Get announcement message for new data.
     * @private
     * @param {Array<Highcharts.Series>} dirtySeries
     *          Array of series with new data.
     * @param {Highcharts.Series} [newSeries]
     *          If a single new series was added, a reference to this series.
     * @param {Highcharts.Point} [newPoint]
     *          If a single point was added, a reference to this point.
     *
     * @return {string|null}
     * The announcement message to give to user.
     */
    NewDataAnnouncer.prototype.buildAnnouncementMessage = function (dirtySeries, newSeries, newPoint) {
        var chart = this.chart,
            annOptions = chart.options.accessibility.announceNewData;
        // User supplied formatter?
        if (annOptions.announcementFormatter) {
            var formatterRes = annOptions.announcementFormatter(dirtySeries,
                newSeries,
                newPoint,
                this);
            if (formatterRes !== false) {
                return formatterRes.length ? formatterRes : null;
            }
        }
        // Default formatter - use lang options
        var multiple = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).charts && (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).charts.length > 1 ?
                'Multiple' : 'Single', langKey = newSeries ? 'newSeriesAnnounce' + multiple :
                newPoint ? 'newPointAnnounce' + multiple : 'newDataAnnounce', chartTitle = NewDataAnnouncer_getChartTitle(chart);
        return chart.langFormat('accessibility.announceNewData.' + langKey, {
            chartTitle: chartTitle,
            seriesDesc: newSeries ?
                NewDataAnnouncer_defaultSeriesDescriptionFormatter(newSeries) :
                null,
            pointDesc: newPoint ?
                NewDataAnnouncer_defaultPointDescriptionFormatter(newPoint) :
                null,
            point: newPoint,
            series: newSeries
        });
    };
    return NewDataAnnouncer;
}());
/* *
 *
 *  Class Namespace
 *
 * */
(function (NewDataAnnouncer) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    function compose(SeriesClass) {
        if (pushUnique(NewDataAnnouncer_composed, 'A11y.NDA')) {
            addEvent(SeriesClass, 'addPoint', seriesOnAddPoint);
            addEvent(SeriesClass, 'updatedData', seriesOnUpdatedData);
        }
    }
    NewDataAnnouncer.compose = compose;
    /**
     * On new point added, update dirty list.
     * @private
     * @param {Highcharts.Point} point
     */
    function seriesOnAddPoint(e) {
        var _a;
        var chart = this.chart,
            newDataAnnouncer = (_a = chart.accessibility) === null || _a === void 0 ? void 0 : _a.components.series.newDataAnnouncer;
        if (newDataAnnouncer &&
            newDataAnnouncer.chart === chart &&
            chartHasAnnounceEnabled(chart)) {
            // Add it to newPoint storage unless we already have one
            newDataAnnouncer.dirty.newPoint = (defined(newDataAnnouncer.dirty.newPoint) ?
                void 0 :
                e.point);
        }
    }
    /**
     * On new data in the series, make sure we add it to the dirty list.
     * @private
     */
    function seriesOnUpdatedData() {
        var _a;
        var chart = this.chart,
            newDataAnnouncer = (_a = chart.accessibility) === null || _a === void 0 ? void 0 : _a.components.series.newDataAnnouncer;
        if (newDataAnnouncer &&
            newDataAnnouncer.chart === chart &&
            chartHasAnnounceEnabled(chart)) {
            newDataAnnouncer.dirty.hasDirty = true;
            newDataAnnouncer.dirty.allSeries[this.name + this.index] = this;
        }
    }
})(NewDataAnnouncer || (NewDataAnnouncer = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var SeriesComponent_NewDataAnnouncer = (NewDataAnnouncer);

;// ./code/es5/es-modules/Accessibility/ProxyElement.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Proxy elements are used to shadow SVG elements in HTML for assistive
 *  technology, such as screen readers or voice input software.
 *
 *  The ProxyElement class represents such an element, and deals with
 *  overlay positioning and mirroring events for the target.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var ProxyElement_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, ProxyElement_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;


var ProxyElement_fireEventOnWrappedOrUnwrappedElement = Utils_ChartUtilities.fireEventOnWrappedOrUnwrappedElement;


var ProxyElement_cloneMouseEvent = Utils_HTMLUtilities.cloneMouseEvent, ProxyElement_cloneTouchEvent = Utils_HTMLUtilities.cloneTouchEvent, ProxyElement_getFakeMouseEvent = Utils_HTMLUtilities.getFakeMouseEvent, ProxyElement_removeElement = Utils_HTMLUtilities.removeElement;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a proxy element that overlays a target and relays events
 * to its target.
 *
 * @private
 * @class
 */
var ProxyElement = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function ProxyElement(chart, target, proxyElementType, wrapperElementType, attributes) {
        if (proxyElementType === void 0) { proxyElementType = 'button'; }
        this.chart = chart;
        this.target = target;
        this.eventProvider = new Utils_EventProvider();
        var innerEl = this.innerElement =
                ProxyElement_doc.createElement(proxyElementType),
            wrapperEl = this.element = wrapperElementType ?
                ProxyElement_doc.createElement(wrapperElementType) : innerEl;
        if (!chart.styledMode) {
            this.hideElementVisually(innerEl);
        }
        if (wrapperElementType) {
            if (wrapperElementType === 'li' && !chart.styledMode) {
                wrapperEl.style.listStyle = 'none';
            }
            wrapperEl.appendChild(innerEl);
            this.element = wrapperEl;
        }
        this.updateTarget(target, attributes);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Fake a click event on the target.
     */
    ProxyElement.prototype.click = function () {
        var pos = this.getTargetPosition();
        pos.x += pos.width / 2;
        pos.y += pos.height / 2;
        var fakeEventObject = ProxyElement_getFakeMouseEvent('click',
            pos);
        ProxyElement_fireEventOnWrappedOrUnwrappedElement(this.target.click, fakeEventObject);
    };
    /**
     * Update the target to be proxied. The position and events are updated to
     * match the new target.
     * @param {object} target The new target definition
     * @param {object} attributes New HTML attributes to apply to the proxy. Set an
     * attribute to null to remove.
     */
    ProxyElement.prototype.updateTarget = function (target, attributes) {
        this.target = target;
        this.updateCSSClassName();
        var attrs = attributes || {};
        Object.keys(attrs).forEach(function (a) {
            if (attrs[a] === null) {
                delete attrs[a];
            }
        });
        var targetAriaLabel = this.getTargetAttr(target.click, 'aria-label');
        attr(this.innerElement, merge(targetAriaLabel ? {
            'aria-label': targetAriaLabel
        } : {}, attrs));
        this.eventProvider.removeAddedEvents();
        this.addProxyEventsToElement(this.innerElement, target.click);
        this.refreshPosition();
    };
    /**
     * Refresh the position of the proxy element to match the current target
     */
    ProxyElement.prototype.refreshPosition = function () {
        var bBox = this.getTargetPosition();
        css(this.innerElement, {
            width: (bBox.width || 1) + 'px',
            height: (bBox.height || 1) + 'px',
            left: (Math.round(bBox.x) || 0) + 'px',
            top: (Math.round(bBox.y) || 0) + 'px'
        });
    };
    /**
     * Remove button from DOM, and clear events.
     */
    ProxyElement.prototype.remove = function () {
        this.eventProvider.removeAddedEvents();
        ProxyElement_removeElement(this.element);
    };
    // -------------------------- private ------------------------------------
    /**
     * Update the CSS class name to match target
     */
    ProxyElement.prototype.updateCSSClassName = function () {
        var _a,
            _b,
            _c;
        var stringHasNoTooltip = function (s) { return (s.indexOf('highcharts-no-tooltip') > -1); };
        var noTooltipOnGroup = stringHasNoTooltip(((_c = (_b = (_a = this.chart.legend) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.div) === null || _c === void 0 ? void 0 : _c.className) || '');
        var targetClassName = this.getTargetAttr(this.target.click, 'class') || '';
        var noTooltipOnTarget = stringHasNoTooltip(targetClassName);
        this.innerElement.className = noTooltipOnGroup || noTooltipOnTarget ?
            'highcharts-a11y-proxy-element highcharts-no-tooltip' :
            'highcharts-a11y-proxy-element';
    };
    /**
     * Mirror events for a proxy element to a target
     */
    ProxyElement.prototype.addProxyEventsToElement = function (element, target) {
        var _this = this;
        [
            'click', 'touchstart', 'touchend', 'touchcancel', 'touchmove',
            'mouseover', 'mouseenter', 'mouseleave', 'mouseout'
        ].forEach(function (evtType) {
            var isTouchEvent = evtType.indexOf('touch') === 0;
            _this.eventProvider.addEvent(element, evtType, function (e) {
                var clonedEvent = isTouchEvent ?
                        ProxyElement_cloneTouchEvent(e) :
                        ProxyElement_cloneMouseEvent(e);
                if (target) {
                    ProxyElement_fireEventOnWrappedOrUnwrappedElement(target, clonedEvent);
                }
                e.stopPropagation();
                // #9682, #15318: Touch scrolling didn't work when touching
                // proxy
                if (!isTouchEvent) {
                    e.preventDefault();
                }
            }, { passive: false });
        });
    };
    /**
     * Set visually hidden style on a proxy element
     */
    ProxyElement.prototype.hideElementVisually = function (el) {
        css(el, {
            borderWidth: 0,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            outline: 'none',
            opacity: 0.001,
            filter: 'alpha(opacity=1)',
            zIndex: 999,
            overflow: 'hidden',
            padding: 0,
            margin: 0,
            display: 'block',
            position: 'absolute',
            '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=1)'
        });
    };
    /**
     * Get the position relative to chart container for the target
     */
    ProxyElement.prototype.getTargetPosition = function () {
        var clickTarget = this.target.click;
        // We accept both DOM elements and wrapped elements as click targets.
        var clickTargetElement = clickTarget.element ?
                clickTarget.element :
                clickTarget;
        var posElement = this.target.visual || clickTargetElement;
        var chartDiv = this.chart.renderTo,
            pointer = this.chart.pointer;
        if (chartDiv && (posElement === null || posElement === void 0 ? void 0 : posElement.getBoundingClientRect) && pointer) {
            var scrollTop = ProxyElement_win.scrollY ||
                    ProxyElement_doc.documentElement.scrollTop,
                rectEl = posElement.getBoundingClientRect(),
                chartPos = pointer.getChartPosition();
            return {
                x: (rectEl.left - chartPos.left) / chartPos.scaleX,
                // #21994, Add scroll position as "getBoundingClientRect"
                // returns the position from the viewport, not the document top.
                y: ((rectEl.top + scrollTop) - chartPos.top) / chartPos.scaleY,
                width: rectEl.right / chartPos.scaleX -
                    rectEl.left / chartPos.scaleX,
                height: rectEl.bottom / chartPos.scaleY -
                    rectEl.top / chartPos.scaleY
            };
        }
        return { x: 0, y: 0, width: 1, height: 1 };
    };
    /**
     * Get an attribute value of a target
     */
    ProxyElement.prototype.getTargetAttr = function (target, key) {
        if (target.element) {
            return target.element.getAttribute(key);
        }
        return target.getAttribute(key);
    };
    return ProxyElement;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Accessibility_ProxyElement = (ProxyElement);

;// ./code/es5/es-modules/Accessibility/ProxyProvider.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Proxy elements are used to shadow SVG elements in HTML for assistive
 *  technology, such as screen readers or voice input software.
 *
 *  The ProxyProvider keeps track of all proxy elements of the a11y module,
 *  and updating their order and positioning.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var ProxyProvider_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var ProxyProvider_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT;


var ProxyProvider_removeChildNodes = Utils_HTMLUtilities.removeChildNodes;


/* *
 *
 *  Class
 *
 * */
/**
 * Keeps track of all proxy elements and proxy groups.
 *
 * @private
 * @class
 */
var ProxyProvider = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function ProxyProvider(chart) {
        this.chart = chart;
        this.domElementProvider = new Utils_DOMElementProvider();
        this.groups = {};
        this.groupOrder = [];
        this.beforeChartProxyPosContainer = this.createProxyPosContainer('before');
        this.afterChartProxyPosContainer = this.createProxyPosContainer('after');
        this.update();
    }
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable */
    /**
     * Add a new proxy element to a group, proxying a target control.
     */
    ProxyProvider.prototype.addProxyElement = function (groupKey, target, proxyElementType, attributes) {
        if (proxyElementType === void 0) { proxyElementType = 'button'; }
        var group = this.groups[groupKey];
        if (!group) {
            throw new Error('ProxyProvider.addProxyElement: Invalid group key ' + groupKey);
        }
        var wrapperElementType = group.type === 'ul' || group.type === 'ol' ?
                'li' : void 0,
            proxy = new Accessibility_ProxyElement(this.chart,
            target,
            proxyElementType,
            wrapperElementType,
            attributes);
        group.proxyContainerElement.appendChild(proxy.element);
        group.proxyElements.push(proxy);
        return proxy;
    };
    /**
     * Create a group that will contain proxy elements. The group order is
     * automatically updated according to the last group order keys.
     *
     * Returns the added group.
     */
    ProxyProvider.prototype.addGroup = function (groupKey, groupElementType, attributes) {
        if (groupElementType === void 0) { groupElementType = 'div'; }
        var existingGroup = this.groups[groupKey];
        if (existingGroup) {
            return existingGroup.groupElement;
        }
        var proxyContainer = this.domElementProvider
                .createElement(groupElementType);
        // If we want to add a role to the group, and still use e.g.
        // a list group, we need a wrapper div around the proxyContainer.
        // Used for setting region role on legend.
        var groupElement;
        if (attributes && attributes.role && groupElementType !== 'div') {
            groupElement = this.domElementProvider.createElement('div');
            groupElement.appendChild(proxyContainer);
        }
        else {
            groupElement = proxyContainer;
        }
        groupElement.className = 'highcharts-a11y-proxy-group highcharts-a11y-proxy-group-' +
            groupKey.replace(/\W/g, '-');
        this.groups[groupKey] = {
            proxyContainerElement: proxyContainer,
            groupElement: groupElement,
            type: groupElementType,
            proxyElements: []
        };
        attr(groupElement, attributes || {});
        if (groupElementType === 'ul') {
            proxyContainer.setAttribute('role', 'list'); // Needed for webkit
        }
        // Add the group to the end by default, and perhaps then we
        // won't have to reorder the whole set of groups.
        this.afterChartProxyPosContainer.appendChild(groupElement);
        this.updateGroupOrder(this.groupOrder);
        return groupElement;
    };
    /**
     * Update HTML attributes of a group.
     */
    ProxyProvider.prototype.updateGroupAttrs = function (groupKey, attributes) {
        var group = this.groups[groupKey];
        if (!group) {
            throw new Error('ProxyProvider.updateGroupAttrs: Invalid group key ' + groupKey);
        }
        attr(group.groupElement, attributes);
    };
    /**
     * Reorder the proxy groups.
     *
     * The group key "series" refers to the chart's data points / <svg> element.
     * This is so that the keyboardNavigation.order option can be used to
     * determine the proxy group order.
     */
    ProxyProvider.prototype.updateGroupOrder = function (groupKeys) {
        var _this = this;
        // Store so that we can update order when a new group is created
        this.groupOrder = groupKeys.slice();
        // Don't unnecessarily reorder, because keyboard focus is lost
        if (this.isDOMOrderGroupOrder()) {
            return;
        }
        var seriesIx = groupKeys.indexOf('series');
        var beforeKeys = seriesIx > -1 ? groupKeys.slice(0,
            seriesIx) : groupKeys;
        var afterKeys = seriesIx > -1 ? groupKeys.slice(seriesIx + 1) : [];
        // Store focused element since it will be lost when reordering
        var activeElement = ProxyProvider_doc.activeElement;
        // Add groups to correct container
        ['before', 'after'].forEach(function (pos) {
            var posContainer = _this[pos === 'before' ?
                    'beforeChartProxyPosContainer' :
                    'afterChartProxyPosContainer'];
            var keys = pos === 'before' ? beforeKeys : afterKeys;
            ProxyProvider_removeChildNodes(posContainer);
            keys.forEach(function (groupKey) {
                var group = _this.groups[groupKey];
                if (group) {
                    posContainer.appendChild(group.groupElement);
                }
            });
        });
        // Attempt to restore focus after reordering, but note that this may
        // cause screen readers re-announcing the button.
        if ((this.beforeChartProxyPosContainer.contains(activeElement) ||
            this.afterChartProxyPosContainer.contains(activeElement)) &&
            activeElement && activeElement.focus) {
            activeElement.focus();
        }
    };
    /**
     * Remove all proxy elements in a group
     */
    ProxyProvider.prototype.clearGroup = function (groupKey) {
        var group = this.groups[groupKey];
        if (!group) {
            throw new Error('ProxyProvider.clearGroup: Invalid group key ' + groupKey);
        }
        ProxyProvider_removeChildNodes(group.proxyContainerElement);
    };
    /**
     * Remove a group from the DOM and from the proxy provider's group list.
     * All child elements are removed.
     * If the group does not exist, nothing happens.
     */
    ProxyProvider.prototype.removeGroup = function (groupKey) {
        var group = this.groups[groupKey];
        if (group) {
            // Remove detached HTML elements to prevent memory leak (#20329).
            this.domElementProvider.removeElement(group.groupElement);
            // Sometimes groupElement is a wrapper around the proxyContainer, so
            // the real one proxyContainer needs to be removed also.
            if (group.groupElement !== group.proxyContainerElement) {
                this.domElementProvider.removeElement(group.proxyContainerElement);
            }
            delete this.groups[groupKey];
        }
    };
    /**
     * Update the position and order of all proxy groups and elements
     */
    ProxyProvider.prototype.update = function () {
        this.updatePosContainerPositions();
        this.updateGroupOrder(this.groupOrder);
        this.updateProxyElementPositions();
    };
    /**
     * Update all proxy element positions
     */
    ProxyProvider.prototype.updateProxyElementPositions = function () {
        Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
    };
    /**
     * Update a group's proxy elements' positions.
     * If the group does not exist, nothing happens.
     */
    ProxyProvider.prototype.updateGroupProxyElementPositions = function (groupKey) {
        var group = this.groups[groupKey];
        if (group) {
            group.proxyElements.forEach(function (el) { return el.refreshPosition(); });
        }
    };
    /**
     * Remove all added elements
     */
    ProxyProvider.prototype.destroy = function () {
        this.domElementProvider.destroyCreatedElements();
    };
    // -------------------------- private ------------------------------------
    /**
     * Create and return a pos container element (the overall containers for
     * the proxy groups).
     */
    ProxyProvider.prototype.createProxyPosContainer = function (classNamePostfix) {
        var el = this.domElementProvider.createElement('div');
        el.setAttribute('aria-hidden', 'false');
        el.className = 'highcharts-a11y-proxy-container' + (classNamePostfix ? '-' + classNamePostfix : '');
        // Position inline so the container stays out of flow even when
        // `highcharts.css` is missing in styled mode
        css(el, {
            position: 'absolute',
            top: '0',
            left: '0',
            whiteSpace: 'nowrap'
        });
        return el;
    };
    /**
     * Get an array of group keys that corresponds to the current group order
     * in the DOM.
     */
    ProxyProvider.prototype.getCurrentGroupOrderInDOM = function () {
        var _this = this;
        var getGroupKeyFromElement = function (el) {
                var allGroups = Object.keys(_this.groups);
            var i = allGroups.length;
            while (i--) {
                var groupKey = allGroups[i];
                var group = _this.groups[groupKey];
                if (group && el === group.groupElement) {
                    return groupKey;
                }
            }
        };
        var getChildrenGroupOrder = function (el) {
                var childrenOrder = [];
            var children = el.children;
            for (var i = 0; i < children.length; ++i) {
                var groupKey = getGroupKeyFromElement(children[i]);
                if (groupKey) {
                    childrenOrder.push(groupKey);
                }
            }
            return childrenOrder;
        };
        var before = getChildrenGroupOrder(this.beforeChartProxyPosContainer);
        var after = getChildrenGroupOrder(this.afterChartProxyPosContainer);
        before.push('series');
        return before.concat(after);
    };
    /**
     * Check if the current DOM order matches the current group order, so that
     * a reordering/update is unnecessary.
     */
    ProxyProvider.prototype.isDOMOrderGroupOrder = function () {
        var _this = this;
        var domOrder = this.getCurrentGroupOrderInDOM();
        var groupOrderWithGroups = this.groupOrder.filter(function (x) { return x === 'series' || !!_this.groups[x]; });
        var i = domOrder.length;
        if (i !== groupOrderWithGroups.length) {
            return false;
        }
        while (i--) {
            if (domOrder[i] !== groupOrderWithGroups[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Update the DOM positions of the before/after proxy
     * positioning containers for the groups.
     */
    ProxyProvider.prototype.updatePosContainerPositions = function () {
        var chart = this.chart;
        // If exporting, don't add these containers to the DOM.
        if (chart.renderer.forExport) {
            return;
        }
        var rendererSVGEl = chart.renderer.box;
        chart.container.insertBefore(this.afterChartProxyPosContainer, rendererSVGEl.nextSibling);
        chart.container.insertBefore(this.beforeChartProxyPosContainer, rendererSVGEl);
        ProxyProvider_unhideChartElementFromAT(this.chart, this.afterChartProxyPosContainer);
        ProxyProvider_unhideChartElementFromAT(this.chart, this.beforeChartProxyPosContainer);
    };
    return ProxyProvider;
}());
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ var Accessibility_ProxyProvider = (ProxyProvider);

;// ./code/es5/es-modules/Accessibility/Components/RangeSelectorComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for the range selector.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var RangeSelectorComponent_extends = (undefined && undefined.__extends) || (function () {
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



var RangeSelectorComponent_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT, RangeSelectorComponent_getAxisRangeDescription = Utils_ChartUtilities.getAxisRangeDescription;


/* *
 *
 *  Functions
 *
 * */
/**
 * Do we want date input navigation
 * @private
 */
function shouldRunInputNavigation(chart) {
    return Boolean(chart.rangeSelector &&
        chart.rangeSelector.inputGroup &&
        chart.rangeSelector.inputGroup.element.style.visibility !== 'hidden' &&
        chart.options.rangeSelector.inputEnabled !== false &&
        chart.rangeSelector.minInput &&
        chart.rangeSelector.maxInput);
}
/* *
 *
 *  Class
 *
 * */
/**
 * The RangeSelectorComponent class
 *
 * @private
 * @class
 * @name Highcharts.RangeSelectorComponent
 */
var RangeSelectorComponent = /** @class */ (function (_super) {
    RangeSelectorComponent_extends(RangeSelectorComponent, _super);
    function RangeSelectorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init the component
     * @private
     */
    RangeSelectorComponent.prototype.init = function () {
        var chart = this.chart;
        this.announcer = new Utils_Announcer(chart, 'polite');
    };
    /**
     * Called on first render/updates to the chart, including options changes.
     */
    RangeSelectorComponent.prototype.onChartUpdate = function () {
        var chart = this.chart,
            component = this,
            rangeSelector = chart.rangeSelector;
        if (!rangeSelector) {
            return;
        }
        this.updateSelectorVisibility();
        this.setDropdownAttrs();
        if (rangeSelector.buttons &&
            rangeSelector.buttons.length) {
            rangeSelector.buttons.forEach(function (button) {
                component.setRangeButtonAttrs(button);
            });
        }
        // Make sure input boxes are accessible and focusable
        if (rangeSelector.maxInput && rangeSelector.minInput) {
            ['minInput', 'maxInput'].forEach(function (key, i) {
                var input = rangeSelector[key];
                if (input) {
                    RangeSelectorComponent_unhideChartElementFromAT(chart, input);
                    component.setRangeInputAttrs(input, 'accessibility.rangeSelector.' + (i ? 'max' : 'min') +
                        'InputLabel');
                }
            });
        }
    };
    /**
     * Hide buttons from AT when showing dropdown, and vice versa.
     * @private
     */
    RangeSelectorComponent.prototype.updateSelectorVisibility = function () {
        var chart = this.chart;
        var rangeSelector = chart.rangeSelector;
        var dropdown = (rangeSelector &&
                rangeSelector.dropdown);
        var buttons = (rangeSelector &&
                rangeSelector.buttons ||
                []);
        var hideFromAT = function (el) { return el.setAttribute('aria-hidden',
            true); };
        if (rangeSelector &&
            rangeSelector.hasVisibleDropdown &&
            dropdown) {
            RangeSelectorComponent_unhideChartElementFromAT(chart, dropdown);
            buttons.forEach(function (btn) { return hideFromAT(btn.element); });
        }
        else {
            if (dropdown) {
                hideFromAT(dropdown);
            }
            buttons.forEach(function (btn) { return RangeSelectorComponent_unhideChartElementFromAT(chart, btn.element); });
        }
    };
    /**
     * Set accessibility related attributes on dropdown element.
     * @private
     */
    RangeSelectorComponent.prototype.setDropdownAttrs = function () {
        var chart = this.chart;
        var dropdown = (chart.rangeSelector &&
                chart.rangeSelector.dropdown);
        if (dropdown) {
            var label = chart.langFormat('accessibility.rangeSelector.dropdownLabel', { rangeTitle: chart.options.lang.rangeSelectorZoom });
            dropdown.setAttribute('aria-label', label);
            dropdown.setAttribute('tabindex', -1);
        }
    };
    /**
     * Set attrs for a range button
     * @private
     */
    RangeSelectorComponent.prototype.setRangeButtonAttrs = function (button) {
        attr(button.element, {
            tabindex: -1,
            role: 'button'
        });
    };
    /**
     * Set attrs for a date input
     * @private
     */
    RangeSelectorComponent.prototype.setRangeInputAttrs = function (input, langKey) {
        var chart = this.chart;
        attr(input, {
            tabindex: -1,
            'aria-label': chart.langFormat(langKey, { chart: chart })
        });
    };
    /**
     * Handle arrow key nav
     * @private
     */
    RangeSelectorComponent.prototype.onButtonNavKbdArrowKey = function (keyboardNavigationHandler, keyCode) {
        var response = keyboardNavigationHandler.response,
            keys = this.keyCodes,
            chart = this.chart,
            wrapAround = chart.options.accessibility
                .keyboardNavigation.wrapAround,
            direction = (keyCode === keys.left || keyCode === keys.up) ? -1 : 1,
            didHighlight = chart.highlightRangeSelectorButton(chart.highlightedRangeSelectorItemIx + direction);
        if (!didHighlight) {
            if (wrapAround) {
                keyboardNavigationHandler.init(direction);
                return response.success;
            }
            return response[direction > 0 ? 'next' : 'prev'];
        }
        return response.success;
    };
    /**
     * Handle keyboard click
     * @private
     */
    RangeSelectorComponent.prototype.onButtonNavKbdClick = function (keyboardNavigationHandler) {
        var response = keyboardNavigationHandler.response,
            chart = this.chart,
            wasDisabled = chart.oldRangeSelectorItemState === 3;
        if (!wasDisabled) {
            this.fakeClickEvent(chart.rangeSelector.buttons[chart.highlightedRangeSelectorItemIx].element);
        }
        return response.success;
    };
    /**
     * Called whenever a range selector button has been clicked, either by
     * mouse, touch, or kbd/voice/other.
     * @private
     */
    RangeSelectorComponent.prototype.onAfterBtnClick = function () {
        var chart = this.chart;
        var axisRangeDescription = RangeSelectorComponent_getAxisRangeDescription(chart.xAxis[0]);
        var announcement = chart.langFormat('accessibility.rangeSelector.clickButtonAnnouncement', { chart: chart,
            axisRangeDescription: axisRangeDescription });
        if (announcement) {
            this.announcer.announce(announcement);
        }
    };
    /**
     * Handle move between input elements with Tab key
     * @private
     */
    RangeSelectorComponent.prototype.onInputKbdMove = function (direction) {
        var chart = this.chart;
        var rangeSel = chart.rangeSelector;
        var newIx = chart.highlightedInputRangeIx = (chart.highlightedInputRangeIx || 0) + direction;
        var newIxOutOfRange = newIx > 1 || newIx < 0;
        if (newIxOutOfRange) {
            if (chart.accessibility) {
                // Ignore focus
                chart.accessibility.keyboardNavigation.exiting = true;
                chart.accessibility.keyboardNavigation.tabindexContainer
                    .focus();
                return chart.accessibility.keyboardNavigation.move(direction);
            }
        }
        else if (rangeSel) {
            var svgEl = rangeSel[newIx ? 'maxDateBox' : 'minDateBox'];
            var inputEl = rangeSel[newIx ? 'maxInput' : 'minInput'];
            if (svgEl && inputEl) {
                chart.setFocusToElement(svgEl, inputEl);
            }
        }
        return true;
    };
    /**
     * Init date input navigation
     * @private
     */
    RangeSelectorComponent.prototype.onInputNavInit = function (direction) {
        var _this = this;
        var component = this;
        var chart = this.chart;
        var buttonIxToHighlight = direction > 0 ? 0 : 1;
        var rangeSel = chart.rangeSelector;
        var svgEl = (rangeSel &&
                rangeSel[buttonIxToHighlight ? 'maxDateBox' : 'minDateBox']);
        var minInput = (rangeSel && rangeSel.minInput);
        var maxInput = (rangeSel && rangeSel.maxInput);
        var inputEl = buttonIxToHighlight ? maxInput : minInput;
        chart.highlightedInputRangeIx = buttonIxToHighlight;
        if (svgEl && minInput && maxInput) {
            chart.setFocusToElement(svgEl, inputEl);
            // Tab-press with the input focused does not propagate to chart
            // automatically, so we manually catch and handle it when relevant.
            if (this.removeInputKeydownHandler) {
                this.removeInputKeydownHandler();
            }
            var keydownHandler = function (e) {
                    var isTab = (e.which || e.keyCode) === _this.keyCodes.tab;
                if (isTab &&
                    component.onInputKbdMove(e.shiftKey ? -1 : 1)) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            };
            var minRemover_1 = addEvent(minInput, 'keydown',
                keydownHandler);
            var maxRemover_1 = addEvent(maxInput, 'keydown',
                keydownHandler);
            this.removeInputKeydownHandler = function () {
                minRemover_1();
                maxRemover_1();
            };
        }
    };
    /**
     * Terminate date input nav
     * @private
     */
    RangeSelectorComponent.prototype.onInputNavTerminate = function () {
        var rangeSel = (this.chart.rangeSelector || {});
        if (rangeSel.maxInput) {
            rangeSel.hideInput('max');
        }
        if (rangeSel.minInput) {
            rangeSel.hideInput('min');
        }
        if (this.removeInputKeydownHandler) {
            this.removeInputKeydownHandler();
            delete this.removeInputKeydownHandler;
        }
    };
    /**
     * Init range selector dropdown nav
     * @private
     */
    RangeSelectorComponent.prototype.initDropdownNav = function () {
        var _this = this;
        var chart = this.chart;
        var rangeSelector = chart.rangeSelector;
        var dropdown = (rangeSelector && rangeSelector.dropdown);
        if (rangeSelector && dropdown) {
            chart.setFocusToElement(rangeSelector.buttonGroup, dropdown);
            if (this.removeDropdownKeydownHandler) {
                this.removeDropdownKeydownHandler();
            }
            // Tab-press with dropdown focused does not propagate to chart
            // automatically, so we manually catch and handle it when relevant.
            this.removeDropdownKeydownHandler = addEvent(dropdown, 'keydown', function (e) {
                var isTab = (e.which || e.keyCode) === _this.keyCodes.tab,
                    a11y = chart.accessibility;
                if (isTab) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (a11y) {
                        a11y.keyboardNavigation.move(e.shiftKey ? -1 : 1);
                    }
                }
            });
        }
    };
    /**
     * Get navigation for the range selector buttons.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler} The module object.
     */
    RangeSelectorComponent.prototype.getRangeSelectorButtonNavigation = function () {
        var chart = this.chart;
        var keys = this.keyCodes;
        var component = this;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [
                [
                    [keys.left, keys.right, keys.up, keys.down],
                    function (keyCode) {
                        return component.onButtonNavKbdArrowKey(this, keyCode);
                    }
                ],
                [
                    [keys.enter, keys.space],
                    function () {
                        return component.onButtonNavKbdClick(this);
                    }
                ]
            ],
            validate: function () {
                return !!(chart.rangeSelector &&
                    chart.rangeSelector.buttons &&
                    chart.rangeSelector.buttons.length);
            },
            init: function (direction) {
                var rangeSelector = chart.rangeSelector;
                if (rangeSelector && rangeSelector.hasVisibleDropdown) {
                    component.initDropdownNav();
                }
                else if (rangeSelector) {
                    var lastButtonIx = rangeSelector.buttons.length - 1;
                    chart.highlightRangeSelectorButton(direction > 0 ? 0 : lastButtonIx);
                }
            },
            terminate: function () {
                if (component.removeDropdownKeydownHandler) {
                    component.removeDropdownKeydownHandler();
                    delete component.removeDropdownKeydownHandler;
                }
            }
        });
    };
    /**
     * Get navigation for the range selector input boxes.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler}
     *         The module object.
     */
    RangeSelectorComponent.prototype.getRangeSelectorInputNavigation = function () {
        var chart = this.chart;
        var component = this;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [],
            validate: function () {
                return shouldRunInputNavigation(chart);
            },
            init: function (direction) {
                component.onInputNavInit(direction);
            },
            terminate: function () {
                component.onInputNavTerminate();
            }
        });
    };
    /**
     * Get keyboard navigation handlers for this component.
     * @return {Array<Highcharts.KeyboardNavigationHandler>}
     *         List of module objects.
     */
    RangeSelectorComponent.prototype.getKeyboardNavigation = function () {
        return [
            this.getRangeSelectorButtonNavigation(),
            this.getRangeSelectorInputNavigation()
        ];
    };
    /**
     * Remove component traces
     */
    RangeSelectorComponent.prototype.destroy = function () {
        if (this.removeDropdownKeydownHandler) {
            this.removeDropdownKeydownHandler();
        }
        if (this.removeInputKeydownHandler) {
            this.removeInputKeydownHandler();
        }
        if (this.announcer) {
            this.announcer.destroy();
        }
    };
    return RangeSelectorComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Class Namespace
 *
 * */
(function (RangeSelectorComponent) {
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
     * Highlight range selector button by index.
     *
     * @private
     * @function Highcharts.Chart#highlightRangeSelectorButton
     */
    function chartHighlightRangeSelectorButton(ix) {
        var buttons = (this.rangeSelector &&
                this.rangeSelector.buttons ||
                []);
        var curHighlightedIx = this.highlightedRangeSelectorItemIx;
        var curSelectedIx = (this.rangeSelector &&
                this.rangeSelector.selected);
        // Deselect old
        if (typeof curHighlightedIx !== 'undefined' &&
            buttons[curHighlightedIx] &&
            curHighlightedIx !== curSelectedIx) {
            buttons[curHighlightedIx].setState(this.oldRangeSelectorItemState || 0);
        }
        // Select new
        this.highlightedRangeSelectorItemIx = ix;
        if (buttons[ix]) {
            this.setFocusToElement(buttons[ix].box, buttons[ix].element);
            if (ix !== curSelectedIx) {
                this.oldRangeSelectorItemState = buttons[ix].state;
                buttons[ix].setState(1);
            }
            return true;
        }
        return false;
    }
    /**
     * Build compositions
     * @private
     */
    function compose(ChartClass, RangeSelectorClass) {
        var chartProto = ChartClass.prototype;
        if (!chartProto.highlightRangeSelectorButton) {
            chartProto.highlightRangeSelectorButton = (chartHighlightRangeSelectorButton);
            addEvent(RangeSelectorClass, 'afterBtnClick', rangeSelectorAfterBtnClick);
        }
    }
    RangeSelectorComponent.compose = compose;
    /**
     * Range selector does not have destroy-setup for class instance events - so
     * we set it on the class and call the component from here.
     * @private
     */
    function rangeSelectorAfterBtnClick() {
        var a11y = this.chart.accessibility;
        if (a11y && a11y.components.rangeSelector) {
            return a11y.components.rangeSelector.onAfterBtnClick();
        }
    }
})(RangeSelectorComponent || (RangeSelectorComponent = {}));
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ var Components_RangeSelectorComponent = (RangeSelectorComponent);

;// ./code/es5/es-modules/Accessibility/Components/SeriesComponent/ForcedMarkers.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Handle forcing series markers.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var ForcedMarkers_composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;

/* *
 *
 *  Composition
 *
 * */
var ForcedMarkersComposition;
(function (ForcedMarkersComposition) {
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
        if (pushUnique(ForcedMarkers_composed, 'A11y.FM')) {
            addEvent(SeriesClass, 'afterSetOptions', seriesOnAfterSetOptions);
            addEvent(SeriesClass, 'render', seriesOnRender);
            addEvent(SeriesClass, 'afterRender', seriesOnAfterRender);
            addEvent(SeriesClass, 'renderCanvas', seriesOnRenderCanvas);
        }
    }
    ForcedMarkersComposition.compose = compose;
    /**
     * @private
     */
    function forceZeroOpacityMarkerOptions(options) {
        merge(true, options, {
            marker: {
                enabled: true,
                states: {
                    normal: {
                        opacity: 0
                    }
                }
            }
        });
    }
    /**
     * @private
     */
    function getPointMarkerOpacity(pointOptions) {
        return pointOptions.marker.states &&
            pointOptions.marker.states.normal &&
            pointOptions.marker.states.normal.opacity;
    }
    /**
     * @private
     */
    function handleForcePointMarkers(series) {
        var i = series.points.length;
        while (i--) {
            var point = series.points[i];
            var pointOptions = point.options;
            var hadForcedMarker = point.hasForcedA11yMarker;
            delete point.hasForcedA11yMarker;
            if (pointOptions.marker) {
                var isStillForcedMarker = hadForcedMarker &&
                        getPointMarkerOpacity(pointOptions) === 0;
                if (pointOptions.marker.enabled && !isStillForcedMarker) {
                    unforcePointMarkerOptions(pointOptions);
                    point.hasForcedA11yMarker = false;
                }
                else if (pointOptions.marker.enabled === false) {
                    forceZeroOpacityMarkerOptions(pointOptions);
                    point.hasForcedA11yMarker = true;
                }
            }
        }
    }
    /**
     * @private
     */
    function hasIndividualPointMarkerOptions(series) {
        return !!(series._hasPointMarkers &&
            series.points &&
            series.points.length);
    }
    /**
     * @private
     */
    function isWithinDescriptionThreshold(series) {
        var a11yOptions = series.chart.options.accessibility;
        return series.points.length <
            a11yOptions.series.pointDescriptionEnabledThreshold ||
            a11yOptions.series
                .pointDescriptionEnabledThreshold === false;
    }
    /**
     * Process marker graphics after render
     * @private
     */
    function seriesOnAfterRender() {
        var series = this;
        // For styled mode the rendered graphic does not reflect the style
        // options, and we need to add/remove classes to achieve the same.
        if (series.chart.styledMode) {
            if (series.markerGroup) {
                series.markerGroup[series.a11yMarkersForced ? 'addClass' : 'removeClass']('highcharts-a11y-markers-hidden');
            }
            // Do we need to handle individual points?
            if (hasIndividualPointMarkerOptions(series)) {
                series.points.forEach(function (point) {
                    if (point.graphic) {
                        point.graphic[point.hasForcedA11yMarker ?
                            'addClass' : 'removeClass']('highcharts-a11y-marker-hidden');
                        point.graphic[point.hasForcedA11yMarker === false ?
                            'addClass' :
                            'removeClass']('highcharts-a11y-marker-visible');
                    }
                });
            }
        }
    }
    /**
     * Keep track of options to reset markers to if no longer forced.
     * @private
     */
    function seriesOnAfterSetOptions(e) {
        this.resetA11yMarkerOptions = merge(e.options.marker || {}, this.userOptions.marker || {});
    }
    /**
     * Keep track of forcing markers.
     * @private
     */
    function seriesOnRender() {
        var _a,
            _b,
            _c;
        var series = this,
            options = series.options;
        if (shouldForceMarkers(series)) {
            if (((_a = options.marker) === null || _a === void 0 ? void 0 : _a.enabled) === false) {
                series.a11yMarkersForced = true;
                forceZeroOpacityMarkerOptions(series.options);
            }
            if (hasIndividualPointMarkerOptions(series)) {
                handleForcePointMarkers(series);
            }
        }
        else if (series.a11yMarkersForced) {
            delete series.a11yMarkersForced;
            // Mark series dirty to ensure marker graphics are cleaned up
            series.isDirty = true;
            unforceSeriesMarkerOptions(series);
            if (((_b = options.marker) === null || _b === void 0 ? void 0 : _b.enabled) === false) { // #23329
                delete series.resetA11yMarkerOptions; // #16624
            }
        }
        else if (series.chart.styledMode &&
            ((_c = options.marker) === null || _c === void 0 ? void 0 : _c.enabled) === false &&
            !hasIndividualPointMarkerOptions(series)) {
            // `a11yMarkersForced` can be reset during `Series.update`.
            // Clean up stale marker graphics that may still exist (#24164).
            destroyPointMarkerGraphics(series);
        }
    }
    /**
     * @private
     */
    function shouldForceMarkers(series) {
        var chart = series.chart,
            chartA11yEnabled = chart.options.accessibility.enabled,
            seriesA11yEnabled = (series.options.accessibility &&
                series.options.accessibility.enabled) !== false;
        return (chartA11yEnabled &&
            seriesA11yEnabled &&
            isWithinDescriptionThreshold(series));
    }
    /**
     * @private
     */
    function unforcePointMarkerOptions(pointOptions) {
        merge(true, pointOptions.marker, {
            states: {
                normal: {
                    opacity: getPointMarkerOpacity(pointOptions) || 1
                }
            }
        });
    }
    /**
     * @private
     */
    function destroyPointMarkerGraphics(series) {
        var _a;
        (_a = series.points) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
            if (point.graphic) {
                point.graphic = point.graphic.destroy();
            }
        });
    }
    /**
     * Reset markers to normal
     * @private
     */
    function unforceSeriesMarkerOptions(series) {
        var resetMarkerOptions = series.resetA11yMarkerOptions;
        if (resetMarkerOptions) {
            var originalOpacity = resetMarkerOptions.states &&
                    resetMarkerOptions.states.normal &&
                    resetMarkerOptions.states.normal.opacity;
            // Prevent ghost markers when zooming out (#23878).
            if (series.chart.styledMode &&
                resetMarkerOptions.enabled === false) {
                destroyPointMarkerGraphics(series);
            }
            // Temporarily set the old marker options to enabled in order to
            // trigger destruction of the markers in Series.update.
            if (series.userOptions && series.userOptions.marker) {
                series.userOptions.marker.enabled = true;
            }
            series.update({
                marker: {
                    enabled: resetMarkerOptions.enabled,
                    states: {
                        normal: { opacity: originalOpacity }
                    }
                }
            });
        }
    }
    /**
     * Reset markers if series is boosted and had forced markers (#17320).
     * @private
     */
    function seriesOnRenderCanvas() {
        if (this.boosted && this.a11yMarkersForced) {
            merge(true, this.options, {
                marker: {
                    enabled: false
                }
            });
            delete this.a11yMarkersForced;
        }
    }
})(ForcedMarkersComposition || (ForcedMarkersComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var ForcedMarkers = (ForcedMarkersComposition);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Point"],"commonjs":["highcharts","Point"],"commonjs2":["highcharts","Point"],"root":["Highcharts","Point"]}
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_ = __webpack_require__(260);
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default = /*#__PURE__*/__webpack_require__.n(highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series"],"commonjs":["highcharts","Series"],"commonjs2":["highcharts","Series"],"root":["Highcharts","Series"]}
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_ = __webpack_require__(820);
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_);
;// ./code/es5/es-modules/Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Handle keyboard navigation for series.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var SeriesKeyboardNavigation_assign = (undefined && undefined.__assign) || function () {
    SeriesKeyboardNavigation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return SeriesKeyboardNavigation_assign.apply(this, arguments);
};



var SeriesKeyboardNavigation_seriesTypes = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

var SeriesKeyboardNavigation_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;




var SeriesKeyboardNavigation_getPointFromXY = Utils_ChartUtilities.getPointFromXY, SeriesKeyboardNavigation_getSeriesFromName = Utils_ChartUtilities.getSeriesFromName, SeriesKeyboardNavigation_scrollAxisToPoint = Utils_ChartUtilities.scrollAxisToPoint;
/* *
 *
 *  Functions
 *
 * */
/**
 * Get the index of a point in a series. This is needed when using e.g. data
 * grouping.
 *
 * @private
 * @function getPointIndex
 * @param {Highcharts.AccessibilityPoint} point
 * The point to find index of.
 * @return {number|undefined}
 * The index in the series.points array of the point.
 */
function getPointIndex(point) {
    var index = point.index,
        points = point.series.points;
    var i = points.length;
    if (points[index] !== point) {
        while (i--) {
            if (points[i] === point) {
                return i;
            }
        }
    }
    else {
        return index;
    }
}
/**
 * Determine if series navigation should be skipped
 * @private
 */
function isSkipSeries(series) {
    var a11yOptions = series.chart.options.accessibility,
        seriesNavOptions = a11yOptions.keyboardNavigation.seriesNavigation,
        seriesA11yOptions = series.options.accessibility || {},
        seriesKbdNavOptions = seriesA11yOptions.keyboardNavigation;
    return seriesKbdNavOptions && seriesKbdNavOptions.enabled === false ||
        seriesA11yOptions.enabled === false ||
        series.options.enableMouseTracking === false || // #8440
        !series.visible ||
        // Skip all points in a series where pointNavigationEnabledThreshold is
        // reached
        (seriesNavOptions.pointNavigationEnabledThreshold &&
            +seriesNavOptions.pointNavigationEnabledThreshold <=
                series.points.length);
}
/**
 * Determine if navigation for a point should be skipped
 * @private
 */
function isSkipPoint(point) {
    var _a;
    var series = point.series,
        nullInteraction = series.options.nullInteraction,
        pointOptions = point.options,
        pointA11yOptions = pointOptions.accessibility,
        a11yOptions = series.chart.options.accessibility,
        pointA11yDisabled = (pointA11yOptions === null || pointA11yOptions === void 0 ? void 0 : pointA11yOptions.enabled) === false;
    return (_a = a11yOptions
        .keyboardNavigation
        .seriesNavigation
        .skipNullPoints) !== null && _a !== void 0 ? _a : (!(!point.isNull || nullInteraction) &&
        point.visible === false ||
        point.isInside === false ||
        pointA11yDisabled ||
        isSkipSeries(series));
}
/**
 * Get the first point that is not a skip point in this series.
 * @private
 */
function getFirstValidPointInSeries(series) {
    var points = series.points || [],
        len = points.length;
    for (var i = 0; i < len; ++i) {
        if (!isSkipPoint(points[i])) {
            return points[i];
        }
    }
    return null;
}
/**
 * Get the first point that is not a skip point in this chart.
 * @private
 */
function getFirstValidPointInChart(chart) {
    var series = chart.series || [],
        len = series.length;
    for (var i = 0; i < len; ++i) {
        if (!isSkipSeries(series[i])) {
            var point = getFirstValidPointInSeries(series[i]);
            if (point) {
                return point;
            }
        }
    }
    return null;
}
/**
 * @private
 */
function highlightLastValidPointInChart(chart) {
    var numSeries = chart.series.length;
    var i = numSeries,
        res = false;
    while (i--) {
        chart.highlightedPoint = chart.series[i].points[chart.series[i].points.length - 1];
        // Highlight first valid point in the series will also
        // look backwards. It always starts from currently
        // highlighted point.
        res = chart.series[i].highlightNextValidPoint();
        if (res) {
            break;
        }
    }
    return res;
}
/**
 * After drilling down/up, we need to set focus to the first point for
 * screen readers and keyboard nav.
 * @private
 */
function updateChartFocusAfterDrilling(chart) {
    var point = getFirstValidPointInChart(chart);
    if (point) {
        point.highlight(false); // Do not visually highlight
    }
}
/**
 * Highlight the first point in chart that is not a skip point
 * @private
 */
function highlightFirstValidPointInChart(chart) {
    delete chart.highlightedPoint;
    var point = getFirstValidPointInChart(chart);
    return point ? point.highlight() : false;
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.SeriesKeyboardNavigation
 */
var SeriesKeyboardNavigation = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function SeriesKeyboardNavigation(chart, keyCodes) {
        this.keyCodes = keyCodes;
        this.chart = chart;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init the keyboard navigation
     */
    SeriesKeyboardNavigation.prototype.init = function () {
        var keyboardNavigation = this,
            chart = this.chart,
            e = this.eventProvider = new Utils_EventProvider();
        e.addEvent((highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()), 'destroy', function () {
            return keyboardNavigation.onSeriesDestroy(this);
        });
        e.addEvent(chart, 'afterApplyDrilldown', function () {
            updateChartFocusAfterDrilling(this);
        });
        e.addEvent(chart, 'drilldown', function (e) {
            var point = e.point,
                series = point.series;
            keyboardNavigation.lastDrilledDownPoint = {
                x: point.x,
                y: point.y,
                seriesName: series ? series.name : ''
            };
        });
        e.addEvent(chart, 'drillupall', function () {
            setTimeout(function () {
                keyboardNavigation.onDrillupAll();
            }, 10);
        });
        // Heatmaps et al. alter z-index in setState, causing elements
        // to lose focus
        e.addEvent((highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default()), 'afterSetState', function () {
            var point = this;
            var pointEl = point.graphic && point.graphic.element;
            var focusedElement = SeriesKeyboardNavigation_doc.activeElement;
            // VO brings focus with it to container, causing series nav to run.
            // If then navigating with virtual cursor, it is possible to leave
            // keyboard nav module state on the data points and still activate
            // proxy buttons.
            var focusedElClassName = (focusedElement && focusedElement.getAttribute('class'));
            var isProxyFocused = focusedElClassName &&
                    focusedElClassName.indexOf('highcharts-a11y-proxy-element') > -1;
            if (chart.highlightedPoint === point &&
                focusedElement !== pointEl &&
                !isProxyFocused &&
                pointEl &&
                pointEl.focus) {
                pointEl.focus();
            }
        });
    };
    /**
     * After drillup we want to find the point that was drilled down to and
     * highlight it.
     * @private
     */
    SeriesKeyboardNavigation.prototype.onDrillupAll = function () {
        var last = this.lastDrilledDownPoint,
            chart = this.chart,
            series = last && SeriesKeyboardNavigation_getSeriesFromName(chart,
            last.seriesName);
        var point;
        if (last && series && defined(last.x) && defined(last.y)) {
            point = SeriesKeyboardNavigation_getPointFromXY(series, last.x, last.y);
        }
        point = point || getFirstValidPointInChart(chart);
        // Container focus can be lost on drillup due to deleted elements.
        if (chart.container) {
            chart.container.focus();
        }
        if (point && point.highlight) {
            point.highlight(false); // Do not visually highlight
        }
    };
    /**
     * @private
     */
    SeriesKeyboardNavigation.prototype.getKeyboardNavigationHandler = function () {
        var keyboardNavigation = this,
            keys = this.keyCodes,
            chart = this.chart,
            inverted = chart.inverted;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [
                [
                    inverted ? [keys.up, keys.down] : [keys.left, keys.right],
                    function (keyCode) {
                        return keyboardNavigation.onKbdSideways(this, keyCode);
                    }
                ],
                [
                    inverted ? [keys.left, keys.right] : [keys.up, keys.down],
                    function (keyCode) {
                        return keyboardNavigation.onKbdVertical(this, keyCode);
                    }
                ],
                [
                    [keys.enter, keys.space],
                    function (keyCode, event) {
                        var _a;
                        var point = chart.highlightedPoint;
                        if (point) {
                            var _b = this.chart,
                                plotLeft = _b.plotLeft,
                                plotTop = _b.plotTop,
                                _c = point.plotX,
                                plotX = _c === void 0 ? 0 : _c,
                                _d = point.plotY,
                                plotY = _d === void 0 ? 0 : _d;
                            event = SeriesKeyboardNavigation_assign(SeriesKeyboardNavigation_assign({}, event), { chartX: plotLeft + plotX, chartY: plotTop + plotY, point: point, target: ((_a = point.graphic) === null || _a === void 0 ? void 0 : _a.element) || event.target });
                            fireEvent(point.series, 'click', event);
                            point.firePointEvent('click', event);
                        }
                        return this.response.success;
                    }
                ],
                [
                    [keys.home],
                    function () {
                        highlightFirstValidPointInChart(chart);
                        return this.response.success;
                    }
                ],
                [
                    [keys.end],
                    function () {
                        highlightLastValidPointInChart(chart);
                        return this.response.success;
                    }
                ],
                [
                    [keys.pageDown, keys.pageUp],
                    function (keyCode) {
                        chart.highlightAdjacentSeries(keyCode === keys.pageDown);
                        return this.response.success;
                    }
                ]
            ],
            init: function () {
                return keyboardNavigation.onHandlerInit(this);
            },
            validate: function () {
                return !!getFirstValidPointInChart(chart);
            },
            terminate: function () {
                return keyboardNavigation.onHandlerTerminate();
            }
        });
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} handler
     * @param {number} keyCode
     * @return {number}
     * response
     */
    SeriesKeyboardNavigation.prototype.onKbdSideways = function (handler, keyCode) {
        var keys = this.keyCodes,
            isNext = keyCode === keys.right || keyCode === keys.down;
        return this.attemptHighlightAdjacentPoint(handler, isNext);
    };
    /**
     * When keyboard navigation inits.
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} handler The handler object
     * @return {number}
     * response
     */
    SeriesKeyboardNavigation.prototype.onHandlerInit = function (handler) {
        var chart = this.chart,
            kbdNavOptions = chart.options.accessibility.keyboardNavigation;
        if (kbdNavOptions.seriesNavigation.rememberPointFocus &&
            chart.highlightedPoint) {
            chart.highlightedPoint.highlight();
        }
        else {
            highlightFirstValidPointInChart(chart);
        }
        return handler.response.success;
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} handler
     * @param {number} keyCode
     * @return {number}
     * response
     */
    SeriesKeyboardNavigation.prototype.onKbdVertical = function (handler, keyCode) {
        var chart = this.chart,
            keys = this.keyCodes,
            isNext = keyCode === keys.down || keyCode === keys.right,
            navOptions = chart.options.accessibility.keyboardNavigation
                .seriesNavigation;
        // Handle serialized mode, act like left/right
        if (navOptions.mode && navOptions.mode === 'serialize') {
            return this.attemptHighlightAdjacentPoint(handler, isNext);
        }
        // Normal mode, move between series
        var highlightMethod = (chart.highlightedPoint &&
                chart.highlightedPoint.series.keyboardMoveVertical) ?
                'highlightAdjacentPointVertical' :
                'highlightAdjacentSeries';
        chart[highlightMethod](isNext);
        return handler.response.success;
    };
    /**
     * @private
     */
    SeriesKeyboardNavigation.prototype.onHandlerTerminate = function () {
        var chart = this.chart,
            kbdNavOptions = chart.options.accessibility.keyboardNavigation;
        if (chart.tooltip) {
            chart.tooltip.hide(0);
        }
        var hoverSeries = (chart.highlightedPoint && chart.highlightedPoint.series);
        if (hoverSeries && hoverSeries.onMouseOut) {
            hoverSeries.onMouseOut();
        }
        if (chart.highlightedPoint && chart.highlightedPoint.onMouseOut) {
            chart.highlightedPoint.onMouseOut();
        }
        if (!kbdNavOptions.seriesNavigation.rememberPointFocus) {
            delete chart.highlightedPoint;
        }
    };
    /**
     * Function that attempts to highlight next/prev point. Handles wrap around.
     * @private
     */
    SeriesKeyboardNavigation.prototype.attemptHighlightAdjacentPoint = function (handler, directionIsNext) {
        var chart = this.chart,
            wrapAround = chart.options.accessibility.keyboardNavigation
                .wrapAround,
            highlightSuccessful = chart.highlightAdjacentPoint(directionIsNext);
        if (!highlightSuccessful) {
            if (wrapAround && (directionIsNext ?
                highlightFirstValidPointInChart(chart) :
                highlightLastValidPointInChart(chart))) {
                return handler.response.success;
            }
            return handler.response[directionIsNext ? 'next' : 'prev'];
        }
        return handler.response.success;
    };
    /**
     * @private
     */
    SeriesKeyboardNavigation.prototype.onSeriesDestroy = function (series) {
        var chart = this.chart,
            currentHighlightedPointDestroyed = chart.highlightedPoint &&
                chart.highlightedPoint.series === series;
        if (currentHighlightedPointDestroyed) {
            delete chart.highlightedPoint;
            if (chart.focusElement) {
                chart.focusElement.removeFocusBorder();
            }
        }
    };
    /**
     * @private
     */
    SeriesKeyboardNavigation.prototype.destroy = function () {
        this.eventProvider.removeAddedEvents();
    };
    return SeriesKeyboardNavigation;
}());
/* *
 *
 *  Class Namespace
 *
 * */
(function (SeriesKeyboardNavigation) {
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
     * Function to highlight next/previous point in chart.
     *
     * @private
     * @function Highcharts.Chart#highlightAdjacentPoint
     *
     * @param {boolean} next
     * Flag for the direction.
     *
     * @return {Highcharts.Point|boolean}
     * Returns highlighted point on success, false on failure (no adjacent point
     * to highlight in chosen direction).
     */
    function chartHighlightAdjacentPoint(next) {
        var chart = this,
            series = chart.series,
            curPoint = chart.highlightedPoint,
            curPointIndex = curPoint && getPointIndex(curPoint) || 0,
            curPoints = curPoint && curPoint.series.points || [],
            lastSeries = chart.series && chart.series[chart.series.length - 1],
            lastPoint = lastSeries &&
                lastSeries.points &&
                lastSeries.points[lastSeries.points.length - 1];
        var newSeries,
            newPoint;
        // If no points, return false
        if (!series[0] || !series[0].points) {
            return false;
        }
        if (!curPoint) {
            // No point is highlighted yet. Try first/last point depending on
            // move direction
            newPoint = next ? series[0].points[0] : lastPoint;
        }
        else {
            // We have a highlighted point. Grab next/prev point & series.
            newSeries = series[curPoint.series.index + (next ? 1 : -1)];
            newPoint = curPoints[curPointIndex + (next ? 1 : -1)];
            if (!newPoint && newSeries) {
                // Done with this series, try next one
                newPoint = newSeries.points[next ? 0 : newSeries.points.length - 1];
            }
            // If there is no adjacent point, we return false
            if (!newPoint) {
                return false;
            }
        }
        // Recursively skip points
        if (isSkipPoint(newPoint)) {
            // If we skip this whole series, move to the end of the series
            // before we recurse, just to optimize
            newSeries = newPoint.series;
            if (isSkipSeries(newSeries)) {
                chart.highlightedPoint = next ?
                    newSeries.points[newSeries.points.length - 1] :
                    newSeries.points[0];
            }
            else {
                // Otherwise, just move one point
                chart.highlightedPoint = newPoint;
            }
            // Retry
            return chart.highlightAdjacentPoint(next);
        }
        // There is an adjacent point, highlight it
        return newPoint.highlight();
    }
    /**
     * Highlight the closest point vertically.
     * @private
     */
    function chartHighlightAdjacentPointVertical(down) {
        var curPoint = this.highlightedPoint;
        var minDistance = Infinity,
            bestPoint;
        if (!defined(curPoint.plotX) || !defined(curPoint.plotY)) {
            return false;
        }
        this.series.forEach(function (series) {
            if (isSkipSeries(series)) {
                return;
            }
            series.points.forEach(function (point) {
                if (!defined(point.plotY) || !defined(point.plotX) ||
                    point === curPoint) {
                    return;
                }
                var yDistance = point.plotY - curPoint.plotY;
                var width = Math.abs(point.plotX - curPoint.plotX),
                    distance = Math.abs(yDistance) * Math.abs(yDistance) +
                        width * width * 4; // Weigh horizontal distance highly
                    // Reverse distance number if axis is reversed
                    if (series.yAxis && series.yAxis.reversed) {
                        yDistance *= -1;
                }
                if (yDistance <= 0 && down || yDistance >= 0 && !down ||
                    distance < 5 || // Points in same spot => infinite loop
                    isSkipPoint(point)) {
                    return;
                }
                if (distance < minDistance) {
                    minDistance = distance;
                    bestPoint = point;
                }
            });
        });
        return bestPoint ? bestPoint.highlight() : false;
    }
    /**
     * Highlight next/previous series in chart. Returns false if no adjacent
     * series in the direction, otherwise returns new highlighted point.
     * @private
     */
    function chartHighlightAdjacentSeries(down) {
        var chart = this,
            curPoint = chart.highlightedPoint,
            lastSeries = chart.series && chart.series[chart.series.length - 1],
            lastPoint = lastSeries && lastSeries.points &&
                lastSeries.points[lastSeries.points.length - 1];
        var newSeries,
            newPoint,
            adjacentNewPoint;
        // If no point is highlighted, highlight the first/last point
        if (!chart.highlightedPoint) {
            newSeries = down ? (chart.series && chart.series[0]) : lastSeries;
            newPoint = down ?
                (newSeries && newSeries.points && newSeries.points[0]) :
                lastPoint;
            return newPoint ? newPoint.highlight() : false;
        }
        newSeries = (chart.series[curPoint.series.index + (down ? -1 : 1)]);
        if (!newSeries) {
            return false;
        }
        // We have a new series in this direction, find the right point
        // Weigh xDistance as counting much higher than Y distance
        newPoint = getClosestPoint(curPoint, newSeries, 4);
        if (!newPoint) {
            return false;
        }
        // New series and point exists, but we might want to skip it
        if (isSkipSeries(newSeries)) {
            // Skip the series
            newPoint.highlight();
            // Try recurse
            adjacentNewPoint = chart.highlightAdjacentSeries(down);
            if (!adjacentNewPoint) {
                // Recurse failed
                curPoint.highlight();
                return false;
            }
            // Recurse succeeded
            return adjacentNewPoint;
        }
        // Highlight the new point or any first valid point back or forwards
        // from it
        newPoint.highlight();
        return newPoint.series.highlightNextValidPoint();
    }
    /**
     * @private
     */
    function compose(ChartClass, PointClass, SeriesClass) {
        var chartProto = ChartClass.prototype,
            pointProto = PointClass.prototype,
            seriesProto = SeriesClass.prototype;
        if (!chartProto.highlightAdjacentPoint) {
            chartProto.highlightAdjacentPoint = chartHighlightAdjacentPoint;
            chartProto.highlightAdjacentPointVertical = (chartHighlightAdjacentPointVertical);
            chartProto.highlightAdjacentSeries = chartHighlightAdjacentSeries;
            pointProto.highlight = pointHighlight;
            /**
             * Set for which series types it makes sense to move to the closest
             * point with up/down arrows, and which series types should just
             * move to next series.
             * @private
             */
            seriesProto.keyboardMoveVertical = true;
            [
                'column',
                'gantt',
                'pie'
            ].forEach(function (type) {
                if (SeriesKeyboardNavigation_seriesTypes[type]) {
                    SeriesKeyboardNavigation_seriesTypes[type].prototype.keyboardMoveVertical = false;
                }
            });
            seriesProto.highlightNextValidPoint = (seriesHighlightNextValidPoint);
        }
    }
    SeriesKeyboardNavigation.compose = compose;
    /**
     * Get the point in a series that is closest (in pixel distance) to a
     * reference point. Optionally supply weight factors for x and y directions.
     * @private
     */
    function getClosestPoint(point, series, xWeight, yWeight) {
        var minDistance = Infinity,
            dPoint,
            minIx,
            distance,
            i = series.points.length;
        var hasUndefinedPosition = function (point) { return (!(defined(point.plotX) && defined(point.plotY))); };
        if (hasUndefinedPosition(point)) {
            return;
        }
        while (i--) {
            dPoint = series.points[i];
            if (hasUndefinedPosition(dPoint)) {
                continue;
            }
            distance = (point.plotX - dPoint.plotX) *
                (point.plotX - dPoint.plotX) *
                (xWeight || 1) +
                (point.plotY - dPoint.plotY) *
                    (point.plotY - dPoint.plotY) *
                    (yWeight || 1);
            if (distance < minDistance) {
                minDistance = distance;
                minIx = i;
            }
        }
        return defined(minIx) ? series.points[minIx] : void 0;
    }
    /**
     * Highlights a point (show tooltip, display hover state, focus element).
     *
     * @private
     * @function Highcharts.Point#highlight
     *
     * @return {Highcharts.Point}
     *         This highlighted point.
     */
    function pointHighlight(highlightVisually) {
        var _a,
            _b,
            _c;
        if (highlightVisually === void 0) { highlightVisually = true; }
        var chart = this.series.chart,
            tooltipElement = (_b = (_a = chart.tooltip) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.element;
        if ((!this.isNull ||
            ((_c = this.series.options) === null || _c === void 0 ? void 0 : _c.nullInteraction)) && highlightVisually) {
            this.onMouseOver(); // Show the hover marker and tooltip
        }
        else {
            if (chart.tooltip) {
                chart.tooltip.hide(0);
            }
            // Do not call blur on the element, as it messes up the focus of the
            // div element of the chart
        }
        SeriesKeyboardNavigation_scrollAxisToPoint(this);
        // We focus only after calling onMouseOver because the state change can
        // change z-index and mess up the element.
        if (this.graphic) {
            chart.setFocusToElement(this.graphic);
            if (!highlightVisually && chart.focusElement) {
                chart.focusElement.removeFocusBorder();
            }
        }
        chart.highlightedPoint = this;
        // Get position of the tooltip.
        var tooltipTop = tooltipElement === null || tooltipElement === void 0 ? void 0 : tooltipElement.getBoundingClientRect().top;
        if (tooltipElement && tooltipTop && tooltipTop < 0) {
            // Calculate scroll position.
            var scrollTop = window.scrollY,
                newScrollTop = scrollTop + tooltipTop;
            // Scroll window to new position.
            window.scrollTo({
                behavior: 'smooth',
                top: newScrollTop
            });
        }
        return this;
    }
    /**
     * Highlight first valid point in a series. Returns the point if
     * successfully highlighted, otherwise false. If there is a highlighted
     * point in the series, use that as starting point.
     *
     * @private
     * @function Highcharts.Series#highlightNextValidPoint
     */
    function seriesHighlightNextValidPoint() {
        var curPoint = this.chart.highlightedPoint,
            start = (curPoint && curPoint.series) === this ?
                getPointIndex(curPoint) :
                0,
            points = this.points,
            len = points.length;
        if (points && len) {
            for (var i = start; i < len; ++i) {
                if (!isSkipPoint(points[i])) {
                    return points[i].highlight();
                }
            }
            for (var j = start; j >= 0; --j) {
                if (!isSkipPoint(points[j])) {
                    return points[j].highlight();
                }
            }
        }
        return false;
    }
})(SeriesKeyboardNavigation || (SeriesKeyboardNavigation = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var SeriesComponent_SeriesKeyboardNavigation = (SeriesKeyboardNavigation);

;// ./code/es5/es-modules/Accessibility/Components/SeriesComponent/SeriesComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for series and points.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var SeriesComponent_extends = (undefined && undefined.__extends) || (function () {
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


var SeriesComponent_hideSeriesFromAT = Utils_ChartUtilities.hideSeriesFromAT;



var SeriesComponent_describeSeries = SeriesComponent_SeriesDescriber.describeSeries;

/* *
 *
 *  Class
 *
 * */
/**
 * The SeriesComponent class
 *
 * @private
 * @class
 * @name Highcharts.SeriesComponent
 */
var SeriesComponent = /** @class */ (function (_super) {
    SeriesComponent_extends(SeriesComponent, _super);
    function SeriesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    SeriesComponent.compose = function (ChartClass, PointClass, SeriesClass) {
        SeriesComponent_NewDataAnnouncer.compose(SeriesClass);
        ForcedMarkers.compose(SeriesClass);
        SeriesComponent_SeriesKeyboardNavigation.compose(ChartClass, PointClass, SeriesClass);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init the component.
     */
    SeriesComponent.prototype.init = function () {
        this.newDataAnnouncer = new SeriesComponent_NewDataAnnouncer(this.chart);
        this.newDataAnnouncer.init();
        this.keyboardNavigation = new SeriesComponent_SeriesKeyboardNavigation(this.chart, this.keyCodes);
        this.keyboardNavigation.init();
        this.hideTooltipFromATWhenShown();
        this.hideSeriesLabelsFromATWhenShown();
    };
    /**
     * @private
     */
    SeriesComponent.prototype.hideTooltipFromATWhenShown = function () {
        var component = this;
        if (this.chart.tooltip) {
            this.addEvent(this.chart.tooltip.constructor, 'refresh', function () {
                if (this.chart === component.chart &&
                    this.label &&
                    this.label.element) {
                    this.label.element.setAttribute('aria-hidden', true);
                }
            });
        }
    };
    /**
     * @private
     */
    SeriesComponent.prototype.hideSeriesLabelsFromATWhenShown = function () {
        this.addEvent(this.chart, 'afterDrawSeriesLabels', function () {
            this.series.forEach(function (series) {
                if (series.labelBySeries) {
                    series.labelBySeries.attr('aria-hidden', true);
                }
            });
        });
    };
    /**
     * Called on chart render. It is necessary to do this for render in case
     * markers change on zoom/pixel density.
     */
    SeriesComponent.prototype.onChartRender = function () {
        var chart = this.chart;
        chart.series.forEach(function (series) {
            var shouldDescribeSeries = (series.options.accessibility &&
                    series.options.accessibility.enabled) !== false &&
                    series.visible && series.getPointsCollection().length !== 0;
            if (shouldDescribeSeries) {
                SeriesComponent_describeSeries(series);
            }
            else {
                SeriesComponent_hideSeriesFromAT(series);
            }
        });
    };
    /**
     * Get keyboard navigation handler for this component.
     * @private
     */
    SeriesComponent.prototype.getKeyboardNavigation = function () {
        return this.keyboardNavigation.getKeyboardNavigationHandler();
    };
    /**
     * Remove traces
     * @private
     */
    SeriesComponent.prototype.destroy = function () {
        this.newDataAnnouncer.destroy();
        this.keyboardNavigation.destroy();
    };
    return SeriesComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var SeriesComponent_SeriesComponent = (SeriesComponent);

;// ./code/es5/es-modules/Accessibility/Components/ZoomComponent.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility component for chart zoom.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var ZoomComponent_extends = (undefined && undefined.__extends) || (function () {
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


var ZoomComponent_unhideChartElementFromAT = Utils_ChartUtilities.unhideChartElementFromAT;

var ZoomComponent_getFakeMouseEvent = Utils_HTMLUtilities.getFakeMouseEvent;


/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function chartHasMapZoom(chart) {
    return !!((chart.mapView) &&
        chart.mapNavigation &&
        chart.mapNavigation.navButtons.length);
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ZoomComponent class
 *
 * @private
 * @class
 * @name Highcharts.ZoomComponent
 */
var ZoomComponent = /** @class */ (function (_super) {
    ZoomComponent_extends(ZoomComponent, _super);
    function ZoomComponent() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this,
            arguments) || this;
        _this.focusedMapNavButtonIx = -1;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the component
     */
    ZoomComponent.prototype.init = function () {
        var component = this,
            chart = this.chart;
        this.proxyProvider.addGroup('zoom', 'div');
        [
            'afterShowResetZoom', 'afterApplyDrilldown', 'drillupall'
        ].forEach(function (eventType) {
            component.addEvent(chart, eventType, function () {
                component.updateProxyOverlays();
            });
        });
    };
    /**
     * Called when chart is updated
     */
    ZoomComponent.prototype.onChartUpdate = function () {
        var chart = this.chart,
            component = this;
        // Make map zoom buttons accessible
        if (chart.mapNavigation) {
            chart.mapNavigation.navButtons.forEach(function (button, i) {
                ZoomComponent_unhideChartElementFromAT(chart, button.element);
                component.setMapNavButtonAttrs(button.element, 'accessibility.zoom.mapZoom' + (i ? 'Out' : 'In'));
            });
        }
    };
    /**
     * @private
     * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} button
     * @param {string} labelFormatKey
     */
    ZoomComponent.prototype.setMapNavButtonAttrs = function (button, labelFormatKey) {
        var chart = this.chart,
            label = chart.langFormat(labelFormatKey, { chart: chart });
        attr(button, {
            tabindex: -1,
            role: 'button',
            'aria-label': label
        });
    };
    /**
     * Update the proxy overlays on every new render to ensure positions are
     * correct.
     */
    ZoomComponent.prototype.onChartRender = function () {
        this.updateProxyOverlays();
    };
    /**
     * Update proxy overlays, recreating the buttons.
     */
    ZoomComponent.prototype.updateProxyOverlays = function () {
        var chart = this.chart;
        // Always start with a clean slate
        this.proxyProvider.clearGroup('zoom');
        if (chart.resetZoomButton) {
            this.createZoomProxyButton(chart.resetZoomButton, 'resetZoomProxyButton', chart.langFormat('accessibility.zoom.resetZoomButton', { chart: chart }));
        }
        if (chart.drillUpButton &&
            chart.breadcrumbs &&
            chart.breadcrumbs.list) {
            var lastBreadcrumb = chart.breadcrumbs.list[chart.breadcrumbs.list.length - 1];
            this.createZoomProxyButton(chart.drillUpButton, 'drillUpProxyButton', chart.langFormat('accessibility.drillUpButton', {
                chart: chart,
                buttonText: chart.breadcrumbs.getButtonText(lastBreadcrumb)
            }));
        }
    };
    /**
     * @private
     * @param {Highcharts.SVGElement} buttonEl
     * @param {string} buttonProp
     * @param {string} label
     */
    ZoomComponent.prototype.createZoomProxyButton = function (buttonEl, buttonProp, label) {
        this[buttonProp] = this.proxyProvider.addProxyElement('zoom', {
            click: buttonEl
        }, 'button', {
            'aria-label': label,
            tabindex: -1
        });
    };
    /**
     * Get keyboard navigation handler for map zoom.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler} The module object
     */
    ZoomComponent.prototype.getMapZoomNavigation = function () {
        var keys = this.keyCodes,
            chart = this.chart,
            component = this;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [
                [
                    [keys.up, keys.down, keys.left, keys.right],
                    function (keyCode) {
                        return component.onMapKbdArrow(this, keyCode);
                    }
                ],
                [
                    [keys.tab],
                    function (_keyCode, e) {
                        return component.onMapKbdTab(this, e);
                    }
                ],
                [
                    [keys.space, keys.enter],
                    function () {
                        return component.onMapKbdClick(this);
                    }
                ]
            ],
            validate: function () {
                return chartHasMapZoom(chart);
            },
            init: function (direction) {
                return component.onMapNavInit(direction);
            }
        });
    };
    /**
     * Arrow key panning for maps.
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler The handler context.
     * @param {number} keyCode Key pressed.
     * @return {number} Response code
     */
    ZoomComponent.prototype.onMapKbdArrow = function (keyboardNavigationHandler, keyCode) {
        var chart = this.chart,
            keys = this.keyCodes,
            target = chart.container,
            isY = keyCode === keys.up || keyCode === keys.down,
            stepDirection = (keyCode === keys.left || keyCode === keys.up) ?
                1 : -1,
            granularity = 10,
            diff = (isY ? chart.plotHeight : chart.plotWidth) /
                granularity * stepDirection, 
            // Randomize since same mousedown coords twice is ignored in MapView
            r = Math.random() * 10,
            startPos = {
                x: target.offsetLeft + chart.plotLeft + chart.plotWidth / 2 + r,
                y: target.offsetTop + chart.plotTop + chart.plotHeight / 2 + r
            },
            endPos = isY ? { x: startPos.x,
            y: startPos.y + diff } :
                { x: startPos.x + diff,
            y: startPos.y };
        [
            ZoomComponent_getFakeMouseEvent('mousedown', startPos),
            ZoomComponent_getFakeMouseEvent('mousemove', endPos),
            ZoomComponent_getFakeMouseEvent('mouseup', endPos)
        ].forEach(function (e) { return target.dispatchEvent(e); });
        return keyboardNavigationHandler.response.success;
    };
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @param {global.KeyboardEvent} event
     * @return {number} Response code
     */
    ZoomComponent.prototype.onMapKbdTab = function (keyboardNavigationHandler, event) {
        var chart = this.chart;
        var response = keyboardNavigationHandler.response;
        var isBackwards = event.shiftKey;
        var isMoveOutOfRange = isBackwards && !this.focusedMapNavButtonIx ||
                !isBackwards && this.focusedMapNavButtonIx;
        // Deselect old
        chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0);
        if (isMoveOutOfRange) {
            if (chart.mapView) {
                chart.mapView.zoomBy(); // Reset zoom
            }
            return response[isBackwards ? 'prev' : 'next'];
        }
        // Select other button
        this.focusedMapNavButtonIx += isBackwards ? -1 : 1;
        var button = chart.mapNavigation.navButtons[this.focusedMapNavButtonIx];
        chart.setFocusToElement(button.box, button.element);
        button.setState(2);
        return response.success;
    };
    /**
     * Called on map button click.
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler The handler context object
     * @return {number} Response code
     */
    ZoomComponent.prototype.onMapKbdClick = function (keyboardNavigationHandler) {
        var el = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
        this.fakeClickEvent(el);
        return keyboardNavigationHandler.response.success;
    };
    /**
     * @private
     * @param {number} direction
     */
    ZoomComponent.prototype.onMapNavInit = function (direction) {
        var chart = this.chart,
            zoomIn = chart.mapNavigation.navButtons[0],
            zoomOut = chart.mapNavigation.navButtons[1],
            initialButton = direction > 0 ? zoomIn : zoomOut;
        chart.setFocusToElement(initialButton.box, initialButton.element);
        initialButton.setState(2);
        this.focusedMapNavButtonIx = direction > 0 ? 0 : 1;
    };
    /**
     * Get keyboard navigation handler for a simple chart button. Provide the
     * button reference for the chart, and a function to call on click.
     *
     * @private
     * @param {string} buttonProp The property on chart referencing the button.
     * @return {Highcharts.KeyboardNavigationHandler} The module object
     */
    ZoomComponent.prototype.simpleButtonNavigation = function (buttonProp, proxyProp, onClick) {
        var keys = this.keyCodes,
            component = this,
            chart = this.chart;
        return new Accessibility_KeyboardNavigationHandler(chart, {
            keyCodeMap: [
                [
                    [keys.tab, keys.up, keys.down, keys.left, keys.right],
                    function (keyCode, e) {
                        var isBackwards = (keyCode === keys.tab && e.shiftKey ||
                                keyCode === keys.left ||
                                keyCode === keys.up);
                        // Arrow/tab => just move
                        return this.response[isBackwards ? 'prev' : 'next'];
                    }
                ],
                [
                    [keys.space, keys.enter],
                    function () {
                        var res = onClick(this,
                            chart);
                        return pick(res, this.response.success);
                    }
                ]
            ],
            validate: function () {
                var hasButton = (chart[buttonProp] &&
                        chart[buttonProp].box &&
                        component[proxyProp].innerElement);
                return hasButton;
            },
            init: function () {
                chart.setFocusToElement(chart[buttonProp].box, component[proxyProp].innerElement);
            }
        });
    };
    /**
     * Get keyboard navigation handlers for this component.
     * @return {Array<Highcharts.KeyboardNavigationHandler>}
     *         List of module objects
     */
    ZoomComponent.prototype.getKeyboardNavigation = function () {
        return [
            this.simpleButtonNavigation('resetZoomButton', 'resetZoomProxyButton', function (_handler, chart) {
                chart.zoomOut();
            }),
            this.simpleButtonNavigation('drillUpButton', 'drillUpProxyButton', function (handler, chart) {
                chart.drillUp();
                return handler.response.prev;
            }),
            this.getMapZoomNavigation()
        ];
    };
    return ZoomComponent;
}(Accessibility_AccessibilityComponent));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Components_ZoomComponent = (ZoomComponent);

;// ./code/es5/es-modules/Accessibility/HighContrastMode.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Handling for Windows High Contrast Mode.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var HighContrastMode_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc, isMS = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isMS, HighContrastMode_win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;
/* *
 *
 *  Functions
 *
 * */
/**
 * Detect WHCM in the browser.
 *
 * @function Highcharts#isHighContrastModeActive
 * @private
 * @return {boolean} Returns true if the browser is in High Contrast mode.
 */
function isHighContrastModeActive() {
    // Test BG image for IE
    if (isMS && HighContrastMode_win.getComputedStyle) {
        var testDiv = HighContrastMode_doc.createElement('div');
        var imageSrc = 'data:image/gif;base64,' +
                'R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        testDiv.style.backgroundImage = "url(".concat(imageSrc, ")"); // #13071
        HighContrastMode_doc.body.appendChild(testDiv);
        var bi = (testDiv.currentStyle ||
                HighContrastMode_win.getComputedStyle(testDiv)).backgroundImage;
        HighContrastMode_doc.body.removeChild(testDiv);
        return bi === 'none';
    }
    // Other browsers use the forced-colors standard
    return HighContrastMode_win.matchMedia && HighContrastMode_win.matchMedia('(forced-colors: active)').matches;
}
/**
 * Force high contrast theme for the chart. The default theme is defined in
 * a separate file.
 *
 * @function Highcharts#setHighContrastTheme
 * @private
 * @param {Highcharts.AccessibilityChart} chart The chart to set the theme of.
 * @return {void}
 */
function setHighContrastTheme(chart) {
    // We might want to add additional functionality here in the future for
    // storing the old state so that we can reset the theme if HC mode is
    // disabled. For now, the user will have to reload the page.
    var _a;
    var highContrastState = chart.highContrastState || (chart.highContrastState = {});
    highContrastState.active = true;
    highContrastState.applying = true;
    try {
        // Apply theme to chart
        var theme_1 = (chart.options.accessibility.highContrastTheme);
        chart.update(theme_1, false);
        var hasCustomColors_1 = ((_a = theme_1.colors) === null || _a === void 0 ? void 0 : _a.length) > 1;
        // Force series colors (plotOptions is not enough)
        chart.series.forEach(function (s) {
            var plotOpts = theme_1.plotOptions[s.type] || {};
            var fillColor = hasCustomColors_1 && s.colorIndex !== void 0 ?
                    theme_1.colors[s.colorIndex] :
                    plotOpts.color || 'window';
            var seriesOptions = {
                    color: plotOpts.color || 'windowText',
                    colors: hasCustomColors_1 ?
                        theme_1.colors : [plotOpts.color || 'windowText'],
                    borderColor: plotOpts.borderColor || 'window',
                    fillColor: fillColor
                };
            s.update(seriesOptions, false);
            if (s.points) {
                // Force point colors if existing
                s.points.forEach(function (p) {
                    if (p.options && p.options.color) {
                        p.update({
                            color: plotOpts.color || 'windowText',
                            borderColor: plotOpts.borderColor || 'window'
                        }, false);
                    }
                });
            }
        });
        // The redraw for each series and after is required for 3D pie
        // (workaround)
        chart.redraw();
    }
    finally {
        delete highContrastState.applying;
    }
}
/* *
 *
 *  Default Export
 *
 * */
var whcm = {
    isHighContrastModeActive: isHighContrastModeActive,
    setHighContrastTheme: setHighContrastTheme
};
/* harmony default export */ var HighContrastMode = (whcm);

;// ./code/es5/es-modules/Accessibility/HighContrastTheme.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Default theme for Windows High Contrast Mode.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

var theme = {
    chart: {
        backgroundColor: 'window'
    },
    title: {
        style: {
            color: 'windowText'
        }
    },
    subtitle: {
        style: {
            color: 'windowText'
        }
    },
    colorAxis: {
        minColor: 'windowText',
        maxColor: 'windowText',
        stops: [],
        dataClasses: []
    },
    colors: ['windowText'],
    xAxis: {
        gridLineColor: 'windowText',
        labels: {
            style: {
                color: 'windowText'
            }
        },
        lineColor: 'windowText',
        minorGridLineColor: 'windowText',
        tickColor: 'windowText',
        title: {
            style: {
                color: 'windowText'
            }
        }
    },
    yAxis: {
        gridLineColor: 'windowText',
        labels: {
            style: {
                color: 'windowText'
            }
        },
        lineColor: 'windowText',
        minorGridLineColor: 'windowText',
        tickColor: 'windowText',
        title: {
            style: {
                color: 'windowText'
            }
        }
    },
    tooltip: {
        backgroundColor: 'window',
        borderColor: 'windowText',
        style: {
            color: 'windowText'
        }
    },
    plotOptions: {
        series: {
            lineColor: 'windowText',
            fillColor: 'window',
            borderColor: 'windowText',
            edgeColor: 'windowText',
            borderWidth: 1,
            dataLabels: {
                connectorColor: 'windowText',
                color: 'windowText',
                style: {
                    color: 'windowText',
                    textOutline: 'none'
                }
            },
            marker: {
                lineColor: 'windowText',
                fillColor: 'windowText'
            }
        },
        pie: {
            color: 'window',
            colors: ['window'],
            borderColor: 'windowText',
            borderWidth: 1
        },
        boxplot: {
            fillColor: 'window'
        },
        candlestick: {
            lineColor: 'windowText',
            fillColor: 'window'
        },
        errorbar: {
            fillColor: 'window'
        }
    },
    legend: {
        backgroundColor: 'window',
        itemStyle: {
            color: 'windowText'
        },
        itemHoverStyle: {
            color: 'windowText'
        },
        itemHiddenStyle: {
            color: '#555'
        },
        title: {
            style: {
                color: 'windowText'
            }
        }
    },
    credits: {
        style: {
            color: 'windowText'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: 'windowText'
        },
        activeDataLabelStyle: {
            color: 'windowText'
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: 'windowText',
            theme: {
                fill: 'window'
            }
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: 'window',
            stroke: 'windowText',
            style: {
                color: 'windowText'
            },
            states: {
                hover: {
                    fill: 'window',
                    stroke: 'windowText',
                    style: {
                        color: 'windowText'
                    }
                },
                select: {
                    fill: '#444',
                    stroke: 'windowText',
                    style: {
                        color: 'windowText'
                    }
                }
            }
        },
        inputBoxBorderColor: 'windowText',
        inputStyle: {
            backgroundColor: 'window',
            color: 'windowText'
        },
        labelStyle: {
            color: 'windowText'
        }
    },
    navigator: {
        handles: {
            backgroundColor: 'window',
            borderColor: 'windowText'
        },
        outlineColor: 'windowText',
        maskFill: 'transparent',
        series: {
            color: 'windowText',
            lineColor: 'windowText'
        },
        xAxis: {
            gridLineColor: 'windowText'
        }
    },
    scrollbar: {
        barBackgroundColor: '#444',
        barBorderColor: 'windowText',
        buttonArrowColor: 'windowText',
        buttonBackgroundColor: 'window',
        buttonBorderColor: 'windowText',
        rifleColor: 'windowText',
        trackBackgroundColor: 'window',
        trackBorderColor: 'windowText'
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var HighContrastTheme = (theme);

;// ./code/es5/es-modules/Accessibility/Options/A11yDefaults.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Default options for accessibility.
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
 * Formatter callback for the accessibility announcement.
 *
 * @callback Highcharts.AccessibilityAnnouncementFormatter
 *
 * @param {Array<Highcharts.Series>} updatedSeries
 * Array of all series that received updates. If an announcement is already
 * queued, the series that received updates for that announcement are also
 * included in this array.
 *
 * @param {Highcharts.Series} [addedSeries]
 * This is provided if {@link Highcharts.Chart#addSeries} was called, and there
 * is a new series. In that case, this argument is a reference to the new
 * series.
 *
 * @param {Highcharts.Point} [addedPoint]
 * This is provided if {@link Highcharts.Series#addPoint} was called, and there
 * is a new point. In that case, this argument is a reference to the new point.
 *
 * @return {false|string}
 * The function should return a string with the text to announce to the user.
 * Return empty string to not announce anything. Return `false` to use the
 * default announcement format.
 */
/**
 * @interface Highcharts.PointAccessibilityOptionsObject
 */ /**
* Provide a description of the data point, announced to screen readers.
* @name Highcharts.PointAccessibilityOptionsObject#description
* @type {string|undefined}
* @requires modules/accessibility
* @since 7.1.0
*/ /**
* Enable or disable exposing the point to assistive technology
* @name Highcharts.PointAccessibilityOptionsObject#enabled
* @type {boolean|undefined}
* @requires modules/accessibility
* @since 9.0.1
*/
/* *
 * @interface Highcharts.PointOptionsObject in parts/Point.ts
 */ /**
* @name Highcharts.PointOptionsObject#accessibility
* @type {Highcharts.PointAccessibilityOptionsObject|undefined}
* @requires modules/accessibility
* @since 7.1.0
*/
/**
 * @callback Highcharts.ScreenReaderClickCallbackFunction
 *
 * @param {global.MouseEvent} evt
 *        Mouse click event
 *
 * @param {Highcharts.Chart} [chart]
 *        Chart context.
 *
 * @param {global.GlobalEventHandlers} [ctx]
 *        Since v12.6.0, the global event handlers context passed as an extra
 *        argument for arrow functions.
 *
 * @return {void}
 */
/**
 * Creates a formatted string for the screen reader module.
 *
 * @callback Highcharts.ScreenReaderFormatterCallbackFunction<T>
 *
 * @param {T} context
 *        Context to format
 *
 * @param {*} [outerContext]
 *        Since v12.6.0, the outer context passed as an extra argument for
 *        arrow functions.
 *
 * @return {string}
 *         Formatted string for the screen reader module.
 */
var Options = {
    /**
     * Options for configuring accessibility for the chart. Requires the
     * [accessibility module](https://code.highcharts.com/modules/accessibility.js)
     * to be loaded. For a description of the module and information
     * on its features, see
     * [Highcharts Accessibility](https://www.highcharts.com/docs/accessibility/accessibility-module).
     *
     * @since        5.0.0
     * @requires     modules/accessibility
     * @optionparent accessibility
     */
    accessibility: {
        /**
         * Enable accessibility functionality for the chart. For more
         * information on how to include these features, and why this is
         * recommended, see [Highcharts Accessibility](https://www.highcharts.com/docs/accessibility/accessibility-module).
         *
         * Highcharts will by default emit a warning to the console if
         * the [accessibility module](https://code.highcharts.com/modules/accessibility.js)
         * is not loaded. Setting this option to `false` will override
         * and silence the warning.
         *
         * Once the module is loaded, setting this option to `false`
         * will disable the module for this chart.
         *
         * @since 5.0.0
         */
        enabled: true,
        /**
         * Accessibility options for the screen reader information sections
         * added before and after the chart.
         *
         * @since 8.0.0
         */
        screenReaderSection: {
            /**
             * Function to run upon clicking the "View as Data Table" link in
             * the screen reader region.
             *
             * By default Highcharts will insert and set focus to a data table
             * representation of the chart.
             *
             * @type      {Highcharts.ScreenReaderClickCallbackFunction}
             * @since 8.0.0
             * @apioption accessibility.screenReaderSection.onViewDataTableClick
             */
            /**
             * Function to run upon clicking the "Play as sound" button in
             * the screen reader region.
             *
             * By default Highcharts will call the `chart.sonify` function.
             *
             * @type      {Highcharts.ScreenReaderClickCallbackFunction}
             * @since 8.0.1
             * @apioption accessibility.screenReaderSection.onPlayAsSoundClick
             */
            /**
             * A formatter function to create the HTML contents of the hidden
             * screen reader information region before the chart. Receives one
             * argument, `chart`, referring to the chart object. Should return a
             * string with the HTML content of the region. By default this
             * returns an automatic description of the chart based on
             * [beforeChartFormat](#accessibility.screenReaderSection.beforeChartFormat).
             *
             * @type      {Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Chart>}
             * @since 8.0.0
             * @apioption accessibility.screenReaderSection.beforeChartFormatter
             */
            /**
             * Format for the screen reader information region before the chart.
             * Supported HTML tags are `<h1-6>`, `<p>`, `<div>`, `<a>`, `<ul>`,
             * `<ol>`, `<li>`, and `<button>`. Attributes are not supported,
             * except for id on `<div>`, `<a>`, and `<button>`. Id is required
             * on `<a>` and `<button>` in the format `<tag id="abcd">`. Numbers,
             * lower- and uppercase letters, "-" and "#" are valid characters in
             * IDs.
             *
             * The headingTagName is an auto-detected heading (h1-h6) that
             * corresponds to the heading level below the previous heading in
             * the DOM.
             *
             * Set to empty string to remove the region altogether.
             *
             * @sample highcharts/accessibility/before-chart-format
             *         beforeChartFormat
             *
             * @since 8.0.0
             */
            beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}>' +
                '<div>{typeDescription}</div>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{playAsSoundButton}</div>' +
                '<div>{viewTableButton}</div>' +
                '<div>{xAxisDescription}</div>' +
                '<div>{yAxisDescription}</div>' +
                '<div>{annotationsTitle}{annotationsList}</div>',
            /**
             * A formatter function to create the HTML contents of the hidden
             * screen reader information region after the chart. Analogous to
             * [beforeChartFormatter](#accessibility.screenReaderSection.beforeChartFormatter).
             *
             * @type      {Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Chart>}
             * @since 8.0.0
             * @apioption accessibility.screenReaderSection.afterChartFormatter
             */
            /**
             * Format for the screen reader information region after the chart.
             * Analogous to [beforeChartFormat](#accessibility.screenReaderSection.beforeChartFormat).
             *
             * @since 8.0.0
             */
            afterChartFormat: '{endOfChartMarker}',
            /**
             * Date format to use to describe range of datetime axes.
             *
             * For an overview of the replacement codes, see
             * [dateFormat](/class-reference/Highcharts.Time#dateFormat).
             *
             * @see [point.dateFormat](#accessibility.point.dateFormat)
             *
             * @since 8.0.0
             */
            axisRangeDateFormat: '%Y-%m-%d %H:%M:%S'
        },
        /**
         * Accessibility options global to all data series. Individual series
         * can also have specific [accessibility options](#plotOptions.series.accessibility)
         * set.
         *
         * @since 8.0.0
         */
        series: {
            /**
             * Formatter function to use instead of the default for series
             * descriptions. Receives one argument, `series`, referring to the
             * series to describe. Should return a string with the description
             * of the series for a screen reader user. If `false` is returned,
             * the default formatter will be used for that series.
             *
             * @see [series.descriptionFormat](#accessibility.series.descriptionFormat)
             * @see [series.description](#plotOptions.series.description)
             *
             * @type      {Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Series>}
             * @since 8.0.0
             * @apioption accessibility.series.descriptionFormatter
             */
            /**
             * Format to use for describing the data series group to assistive
             * technology - including screen readers.
             *
             * The series context and its subproperties are available under the
             * variable `{series}`, for example `{series.name}` for the series
             * name, and `{series.points.length}` for the number of data points.
             *
             * The chart context and its subproperties are available under the
             * variable `{chart}`, for example `{chart.series.length}` for the
             * number of series in the chart.
             *
             * `{seriesDescription}` refers to the automatic description of the
             * series type and number of points added by Highcharts by default.
             * `{authorDescription}` refers to the description added in
             * [series.description](#plotOptions.series.description) if one is
             * present. `{axisDescription}` refers to the description added if
             * the chart has multiple X or Y axes.
             *
             * Note that if [series.descriptionFormatter](#accessibility.series.descriptionFormatter)
             * is declared it will take precedence, and this option will be
             * overridden.
             *
             * @sample highcharts/accessibility/advanced-accessible
             *  Accessible low-medium-high chart
             *
             * @type      {string}
             * @since 10.1.0
             */
            descriptionFormat: '{seriesDescription}{authorDescription}{axisDescription}',
            /**
             * Whether or not to add series descriptions to charts with a single
             * series.
             *
             * @since 8.0.0
             */
            describeSingleSeries: false,
            /**
             * When a series contains more points than this, we no longer expose
             * information about individual points to screen readers.
             * Note that the keyboard navigation remains functional, but points
             * won't have accessible descriptions unless handled separately.
             *
             * Set to `false` to disable.
             *
             * @sample highcharts/accessibility/point-description-enabled-threshold
             *         pointDescriptionEnabledThreshold
             *
             * @type  {boolean|number}
             * @since 8.0.0
             */
            pointDescriptionEnabledThreshold: 200
        },
        /**
         * Options for descriptions of individual data points.
         *
         * @since 8.0.0
         */
        point: {
            /**
             * Date format to use for points on datetime axes when describing
             * them to screen reader users.
             *
             * Defaults to the same format as in tooltip.
             *
             * For an overview of the replacement codes, see
             * [dateFormat](/class-reference/Highcharts.Time#dateFormat).
             *
             * @see [dateFormatter](#accessibility.point.dateFormatter)
             *
             * @type      {string}
             * @since 8.0.0
             * @apioption accessibility.point.dateFormat
             */
            /**
             * Formatter function to determine the date/time format used with
             * points on datetime axes when describing them to screen reader
             * users. Receives one argument, `point`, referring to the point
             * to describe. Should return a date format string compatible with
             * [dateFormat](/class-reference/Highcharts.Time#dateFormat).
             *
             * @see [dateFormat](#accessibility.point.dateFormat)
             *
             * @type      {Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>}
             * @since 8.0.0
             * @apioption accessibility.point.dateFormatter
             */
            /**
             * Prefix to add to the values in the point descriptions. Uses
             * [tooltip.valuePrefix](#tooltip.valuePrefix) if not defined.
             *
             * @type        {string}
             * @since 8.0.0
             * @apioption   accessibility.point.valuePrefix
             */
            /**
             * Suffix to add to the values in the point descriptions. Uses
             * [tooltip.valueSuffix](#tooltip.valueSuffix) if not defined.
             *
             * @type        {string}
             * @since 8.0.0
             * @apioption   accessibility.point.valueSuffix
             */
            /**
             * Decimals to use for the values in the point descriptions. Uses
             * [tooltip.valueDecimals](#tooltip.valueDecimals) if not defined.
             *
             * @type        {number}
             * @since 8.0.0
             * @apioption   accessibility.point.valueDecimals
             */
            /**
             * A [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
             * to use instead of the default for point descriptions.
             *
             * The context of the format string is the point instance.
             *
             * As opposed to [accessibility.point.valueDescriptionFormat](#accessibility.point.valueDescriptionFormat),
             * this option replaces the whole description.
             *
             * @type      {string}
             * @since 11.1.0
             * @sample highcharts/demo/advanced-accessible
             *      Description format
             * @apioption accessibility.point.descriptionFormat
             */
            /**
             * Formatter function to use instead of the default for point
             * descriptions.
             *
             * Receives one argument, `point`, referring to the point to
             * describe. Should return a string with the description of the
             * point for a screen reader user. If `false` is returned, the
             * default formatter will be used for that point.
             *
             * Note: Prefer using [accessibility.point.valueDescriptionFormat](#accessibility.point.valueDescriptionFormat)
             * instead if possible, as default functionality such as describing
             * annotations will be preserved.
             *
             * @see [accessibility.point.valueDescriptionFormat](#accessibility.point.valueDescriptionFormat)
             * @see [point.accessibility.description](#series.line.data.accessibility.description)
             *
             * @type      {Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>}
             * @since 8.0.0
             * @apioption accessibility.point.descriptionFormatter
             */
            /**
             * Format to use for describing the values of data points
             * to assistive technology - including screen readers.
             * The point context is available as `{point}`.
             *
             * Other available context variables include `{index}`, `{value}`, and `{xDescription}`.
             *
             * Additionally, the series name, annotation info, and
             * description added in `point.accessibility.description`
             * is added by default if relevant. To override this, use the
             * [accessibility.point.descriptionFormatter](#accessibility.point.descriptionFormatter)
             * option.
             *
             * @see [point.accessibility.description](#series.line.data.accessibility.description)
             * @see [accessibility.point.descriptionFormatter](#accessibility.point.descriptionFormatter)
             *
             * @type      {string}
             * @since 8.0.1
             */
            valueDescriptionFormat: '{xDescription}{separator}{value}.',
            /**
             * Whether or not to describe points with the value `null` to
             * assistive technology, such as screen readers.
             *
             * @sample {highmaps} maps/demo/all-areas-as-null
             *         Accessible map with null points
             *
             * @type      {boolean}
             * @since 10.1.0
             */
            describeNull: true
        },
        /**
         * Amount of landmarks/regions to create for screen reader users. More
         * landmarks can make navigation with screen readers easier, but can
         * be distracting if there are lots of charts on the page. Three modes
         * are available:
         *  - `all`: Adds regions for all series, legend, information
         *      region.
         *  - `one`: Adds a single landmark per chart.
         *  - `disabled`: No landmarks are added.
         *
         * @since 7.1.0
         * @validvalue ["all", "one", "disabled"]
         */
        landmarkVerbosity: 'all',
        /**
         * Link the chart to an HTML element describing the contents of the
         * chart.
         *
         * It is always recommended to describe charts using visible text, to
         * improve SEO as well as accessibility for users with disabilities.
         * This option lets an HTML element with a description be linked to the
         * chart, so that screen reader users can connect the two.
         *
         * By setting this option to a string, Highcharts runs the string as an
         * HTML selector query on the entire document. If there is only a single
         * match, this element is linked to the chart. The content of the linked
         * element will be included in the chart description for screen reader
         * users.
         *
         * By default, the chart looks for an adjacent sibling element with the
         * `highcharts-description` class.
         *
         * The feature can be disabled by setting the option to an empty string,
         * or overridden by providing the
         * [accessibility.description](#accessibility.description) option.
         * Alternatively, the HTML element to link can be passed in directly as
         * an HTML node.
         *
         * If you need the description to be part of the exported image,
         * consider using the [caption](#caption) feature.
         *
         * If you need the description to be hidden visually, use the
         * [accessibility.description](#accessibility.description) option.
         *
         * @see [caption](#caption)
         * @see [description](#accessibility.description)
         * @see [typeDescription](#accessibility.typeDescription)
         *
         * @sample highcharts/accessibility/accessible-line
         *         Accessible line chart
         *
         * @type  {string|Highcharts.HTMLDOMElement}
         * @since 8.0.0
         */
        linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', // eslint-disable-line
        /**
         * A hook for adding custom components to the accessibility module.
         * Should be an object mapping component names to instances of classes
         * inheriting from the Highcharts.AccessibilityComponent base class.
         * Remember to add the component to the
         * [keyboardNavigation.order](#accessibility.keyboardNavigation.order)
         * for the keyboard navigation to be usable.
         *
         * @sample highcharts/accessibility/custom-component
         *         Custom accessibility component
         *
         * @type      {*}
         * @since     7.1.0
         * @apioption accessibility.customComponents
         */
        /**
         * Theme to apply to the chart when Windows High Contrast Mode is
         * detected. By default, a high contrast theme matching the high
         * contrast system colors is used.
         *
         * @type      {*}
         * @since     7.1.3
         * @apioption accessibility.highContrastTheme
         */
        /**
         * Controls how [highContrastTheme](#accessibility.highContrastTheme)
         * is applied.
         *
         * The default option is `auto`, which applies the high contrast theme
         * the user's system has a high contrast theme active.
         *
         * @sample highcharts/accessibility/high-contrast-mode
         *         High contrast mode enabled
         *
         * @since 11.4.0
         */
        highContrastMode: 'auto',
        /**
         * A text description of the chart.
         *
         * **Note: Prefer using [linkedDescription](#accessibility.linkedDescription)
         * or [caption](#caption.text) instead.**
         *
         * If the Accessibility module is loaded, this option is included by
         * default as a long description of the chart in the hidden screen
         * reader information region.
         *
         * Note: Since Highcharts now supports captions and linked descriptions,
         * it is preferred to define the description using those methods, as a
         * visible caption/description benefits all users. If the
         * `accessibility.description` option is defined, the linked description
         * is ignored, and the caption is hidden from screen reader users.
         *
         * @see [linkedDescription](#accessibility.linkedDescription)
         * @see [caption](#caption)
         * @see [typeDescription](#accessibility.typeDescription)
         *
         * @type      {string}
         * @since     5.0.0
         * @apioption accessibility.description
         */
        /**
         * A text description of the chart type.
         *
         * If the Accessibility module is loaded, this will be included in the
         * description of the chart in the screen reader information region.
         *
         * Highcharts will by default attempt to guess the chart type, but for
         * more complex charts it is recommended to specify this property for
         * clarity.
         *
         * @type      {string}
         * @since     5.0.0
         * @apioption accessibility.typeDescription
         */
        /**
         * Options for keyboard navigation.
         *
         * @declare Highcharts.KeyboardNavigationOptionsObject
         * @since   5.0.0
         */
        keyboardNavigation: {
            /**
             * Enable keyboard navigation for the chart.
             *
             * @since 5.0.0
             */
            enabled: true,
            /**
             * Options for the focus border drawn around elements while
             * navigating through them.
             *
             * @sample highcharts/accessibility/custom-focus
             *         Custom focus ring
             *
             * @declare Highcharts.KeyboardNavigationFocusBorderOptionsObject
             * @since   6.0.3
             */
            focusBorder: {
                /**
                 * Enable/disable focus border for chart.
                 *
                 * @since 6.0.3
                 */
                enabled: true,
                /**
                 * Hide the browser's default focus indicator.
                 *
                 * @since 6.0.4
                 */
                hideBrowserFocusOutline: true,
                /**
                 * Style options for the focus border drawn around elements
                 * while navigating through them. Note that some browsers in
                 * addition draw their own borders for focused elements. These
                 * automatic borders cannot be styled by Highcharts.
                 *
                 * In styled mode, the border is given the
                 * `.highcharts-focus-border` class.
                 *
                 * @type    {Highcharts.CSSObject}
                 * @since   6.0.3
                 */
                style: {
                    /**
                     * @type {Highcharts.ColorType}
                     */
                    color: 'var(--highcharts-highlight-color-80)',
                    lineWidth: 2,
                    borderRadius: 3
                },
                /**
                 * Focus border margin around the elements.
                 *
                 * @since 6.0.3
                 */
                margin: 2
            },
            /**
             * Order of tab navigation in the chart. Determines which elements
             * are tabbed to first. Available elements are: `series`, `zoom`,
             * `rangeSelector`, `navigator`, `chartMenu`, `legend` and `container`.
             * In addition, any custom components can be added here. Adding
             * `container` first in order will make the keyboard focus stop on
             * the chart container first, requiring the user to tab again to
             * enter the chart.
             *
             * @sample highcharts/accessibility/custom-component
             *         Custom order is set
             *
             * @type  {Array<string>}
             * @since 7.1.0
             */
            order: [
                'series', 'zoom', 'rangeSelector',
                'navigator', 'legend', 'chartMenu'
            ],
            /**
             * Whether or not to wrap around when reaching the end of arrow-key
             * navigation for an element in the chart.
             * @since 7.1.0
             */
            wrapAround: true,
            /**
             * Options for the keyboard navigation of data points and series.
             *
             * @declare Highcharts.KeyboardNavigationSeriesNavigationOptionsObject
             * @since 8.0.0
             */
            seriesNavigation: {
                /**
                 * Set the keyboard navigation mode for the chart. Can be
                 * "normal" or "serialize". In normal mode, left/right arrow
                 * keys move between points in a series, while up/down arrow
                 * keys move between series. Up/down navigation acts
                 * intelligently to figure out which series makes sense to move
                 * to from any given point.
                 *
                 * In "serialize" mode, points are instead navigated as a single
                 * list. Left/right behaves as in "normal" mode. Up/down arrow
                 * keys will behave like left/right. This can be useful for
                 * unifying navigation behavior with/without screen readers
                 * enabled.
                 *
                 * @type       {string}
                 * @default    normal
                 * @since 8.0.0
                 * @validvalue ["normal", "serialize"]
                 * @apioption  accessibility.keyboardNavigation.seriesNavigation.mode
                 */
                /**
                 * Skip null points when navigating through points with the
                 * keyboard. By default this is the opposite of
                 * [series.nullInteraction](https://api.highcharts.com/highcharts/plotOptions.series.nullInteraction).
                 *
                 * @since 8.0.0
                 */
                skipNullPoints: void 0,
                /**
                 * When a series contains more points than this, we no longer
                 * allow keyboard navigation for it.
                 *
                 * Set to `false` to disable.
                 *
                 * @type  {boolean|number}
                 * @since 8.0.0
                 */
                pointNavigationEnabledThreshold: false,
                /**
                 * Remember which point was focused even after navigating away
                 * from the series, so that when navigating back to the series
                 * you start at the last focused point.
                 *
                 * @type  {boolean}
                 * @since 10.1.0
                 */
                rememberPointFocus: false
            }
        },
        /**
         * Options for announcing new data to screen reader users. Useful
         * for dynamic data applications and drilldown.
         *
         * Keep in mind that frequent announcements will not be useful to
         * users, as they won't have time to explore the new data. For these
         * applications, consider making snapshots of the data accessible, and
         * do the announcements in batches.
         *
         * @declare Highcharts.AccessibilityAnnounceNewDataOptionsObject
         * @since   7.1.0
         */
        announceNewData: {
            /**
             * Optional formatter callback for the announcement. Receives
             * up to three arguments. The first argument is always an array
             * of all series that received updates. If an announcement is
             * already queued, the series that received updates for that
             * announcement are also included in this array. The second
             * argument is provided if `chart.addSeries` was called, and
             * there is a new series. In that case, this argument is a
             * reference to the new series. The third argument, similarly,
             * is provided if `series.addPoint` was called, and there is a
             * new point. In that case, this argument is a reference to the
             * new point.
             *
             * The function should return a string with the text to announce
             * to the user. Return empty string to not announce anything.
             * Return `false` to use the default announcement format.
             *
             * @sample highcharts/accessibility/custom-dynamic
             *         High priority live alerts
             *
             * @type      {Highcharts.AccessibilityAnnouncementFormatter}
             * @apioption accessibility.announceNewData.announcementFormatter
             */
            /**
             * Enable announcing new data to screen reader users
             * @sample highcharts/accessibility/accessible-dynamic
             *         Dynamic data accessible
             */
            enabled: false,
            /**
             * Minimum interval between announcements in milliseconds. If
             * new data arrives before this amount of time has passed, it is
             * queued for announcement. If another new data event happens
             * while an announcement is queued, the queued announcement is
             * dropped, and the latest announcement is queued instead. Set
             * to 0 to allow all announcements, but be warned that frequent
             * announcements are disturbing to users.
             */
            minAnnounceInterval: 5000,
            /**
             * Choose whether or not the announcements should interrupt the
             * screen reader. If not enabled, the user will be notified once
             * idle. It is recommended not to enable this setting unless
             * there is a specific reason to do so.
             */
            interruptUser: false
        }
    },
    /**
     * Accessibility options for a data point.
     *
     * @declare   Highcharts.PointAccessibilityOptionsObject
     * @since     7.1.0
     * @apioption series.line.data.accessibility
     */
    /**
     * Provide a description of the data point, announced to screen readers.
     *
     * @type      {string}
     * @since     7.1.0
     * @apioption series.line.data.accessibility.description
     */
    /**
     * Set to false to disable accessibility functionality for a specific point.
     * The point will not be included in keyboard navigation, and will not be
     * exposed to assistive technology.
     *
     * @type      {boolean}
     * @since 9.0.1
     * @apioption series.line.data.accessibility.enabled
     */
    /**
     * Accessibility options for a series.
     *
     * @declare    Highcharts.SeriesAccessibilityOptionsObject
     * @since      7.1.0
     * @requires   modules/accessibility
     * @apioption  plotOptions.series.accessibility
     */
    /**
     * Enable/disable accessibility functionality for a specific series.
     *
     * @type       {boolean}
     * @since      7.1.0
     * @apioption  plotOptions.series.accessibility.enabled
     */
    /**
     * Provide a description of the series, announced to screen readers.
     *
     * @type       {string}
     * @since      7.1.0
     * @apioption  plotOptions.series.accessibility.description
     */
    /**
     * Format to use for describing the data series group to assistive
     * technology - including screen readers.
     *
     * @see [series.descriptionFormat](#accessibility.series.descriptionFormat)
     * @type       {string}
     * @since 11.0.0
     * @apioption  plotOptions.series.accessibility.descriptionFormat
     */
    /**
     * Expose only the series element to screen readers, not its points.
     *
     * @type       {boolean}
     * @since      7.1.0
     * @apioption  plotOptions.series.accessibility.exposeAsGroupOnly
     */
    /**
     * Point accessibility options for a series.
     *
     * @extends    accessibility.point
     * @since 9.3.0
     * @requires   modules/accessibility
     * @apioption  plotOptions.series.accessibility.point
     */
    /**
     * Formatter function to use instead of the default for point
     * descriptions. Same as `accessibility.point.descriptionFormatter`, but
     * applies to a series instead of the whole chart.
     *
     * Note: Prefer using [accessibility.point.valueDescriptionFormat](#plotOptions.series.accessibility.point.valueDescriptionFormat)
     * instead if possible, as default functionality such as describing
     * annotations will be preserved.
     *
     * @see [accessibility.point.valueDescriptionFormat](#plotOptions.series.accessibility.point.valueDescriptionFormat)
     * @see [point.accessibility.description](#series.line.data.accessibility.description)
     * @see [accessibility.point.descriptionFormatter](#accessibility.point.descriptionFormatter)
     *
     * @type      {Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>}
     * @since 9.3.0
     * @apioption plotOptions.series.accessibility.point.descriptionFormatter
     */
    /**
     * Keyboard navigation for a series
     *
     * @declare    Highcharts.SeriesAccessibilityKeyboardNavigationOptionsObject
     * @since      7.1.0
     * @apioption  plotOptions.series.accessibility.keyboardNavigation
     */
    /**
     * Enable/disable keyboard navigation support for a specific series.
     *
     * @type       {boolean}
     * @since      7.1.0
     * @apioption  plotOptions.series.accessibility.keyboardNavigation.enabled
     */
    /**
     * Accessibility options for an annotation label.
     *
     * @declare    Highcharts.AnnotationLabelAccessibilityOptionsObject
     * @since 8.0.1
     * @requires   modules/accessibility
     * @apioption  annotations.labelOptions.accessibility
     */
    /**
     * Description of an annotation label for screen readers and other assistive
     * technology.
     *
     * @type       {string}
     * @since 8.0.1
     * @apioption  annotations.labelOptions.accessibility.description
     */
    /**
     * Accessibility options for an axis. Requires the accessibility module.
     *
     * @declare    Highcharts.AxisAccessibilityOptionsObject
     * @since      7.1.0
     * @requires   modules/accessibility
     * @apioption  xAxis.accessibility
     */
    /**
     * Enable axis accessibility features, including axis information in the
     * screen reader information region. If this is disabled on the xAxis, the
     * x values are not exposed to screen readers for the individual data points
     * by default.
     *
     * @type       {boolean}
     * @since      7.1.0
     * @apioption  xAxis.accessibility.enabled
     */
    /**
     * Description for an axis to expose to screen reader users.
     *
     * @type       {string}
     * @since      7.1.0
     * @apioption  xAxis.accessibility.description
     */
    /**
     * Range description for an axis. Overrides the default range description.
     * Set to empty to disable range description for this axis.
     *
     * @type       {string}
     * @since      7.1.0
     * @apioption  xAxis.accessibility.rangeDescription
     */
    /**
     * @optionparent legend
     */
    legend: {
        /**
         * Accessibility options for the legend. Requires the Accessibility
         * module.
         *
         * @since     7.1.0
         * @requires  modules/accessibility
         */
        accessibility: {
            /**
             * Enable accessibility support for the legend.
             *
             * @since  7.1.0
             */
            enabled: true,
            /**
             * Options for keyboard navigation for the legend.
             *
             * @since     7.1.0
             * @requires  modules/accessibility
             */
            keyboardNavigation: {
                /**
                 * Enable keyboard navigation for the legend.
                 *
                 * @see [accessibility.keyboardNavigation](#accessibility.keyboardNavigation.enabled)
                 *
                 * @since  7.1.0
                 */
                enabled: true
            }
        }
    },
    /**
     * @optionparent exporting
     */
    exporting: {
        /**
         * Accessibility options for the exporting menu. Requires the
         * Accessibility module.
         *
         * @since    7.1.0
         * @requires modules/accessibility
         */
        accessibility: {
            /**
             * Enable accessibility support for the export menu.
             *
             * @since 7.1.0
             */
            enabled: true
        }
    },
    /**
     * @optionparent navigator
     */
    navigator: {
        /**
         * Accessibility options for the navigator. Requires the
         * Accessibility module.
         *
         * @since 11.2.0
         * @requires modules/accessibility
         */
        accessibility: {
            /**
             * Enable accessibility support for the navigator.
             *
             * @since 11.2.0
             */
            enabled: true
        }
    }
};
/* harmony default export */ var A11yDefaults = (Options);

;// ./code/es5/es-modules/Accessibility/Options/LangDefaults.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Default lang/i18n options for accessibility.
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
var langOptions = {
    /**
     * Configure the accessibility strings in the chart. Requires the
     * [accessibility module](https://code.highcharts.com/modules/accessibility.js)
     * to be loaded. For a description of the module and information on its
     * features, see
     * [Highcharts Accessibility](https://www.highcharts.com/docs/chart-concepts/accessibility).
     *
     * The lang options use [Format Strings](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#format-strings)
     * with variables that are replaced at run time. These variables should be
     * used when available, to avoid duplicating text that is defined elsewhere.
     *
     * For more dynamic control over the accessibility functionality, see
     * [accessibility.point.descriptionFormatter](#accessibility.point.descriptionFormatter),
     * [accessibility.series.descriptionFormatter](#accessibility.series.descriptionFormatter),
     * and
     * [accessibility.screenReaderSection.beforeChartFormatter](#accessibility.screenReaderSection.beforeChartFormatter).
     *
     * @since        6.0.6
     * @optionparent lang.accessibility
     */
    accessibility: {
        /**
         * @deprecated 10.2.1
         * @type       {string}
         * @apioption  lang.accessibility.resetZoomButton
         */
        /**
         * Default title of the chart for assistive technology, for charts
         * without a chart title.
         */
        defaultChartTitle: 'Chart',
        /**
         * Accessible label for the chart container HTML element.
         * `{title}` refers to the chart title.
         */
        chartContainerLabel: '{title}. Highcharts interactive chart.',
        /**
         * Accessible label for the chart SVG element.
         * `{chartTitle}` refers to the chart title.
         */
        svgContainerLabel: 'Interactive chart',
        /**
         * Accessible label for the drill-up button.
         * `{buttonText}` refers to the visual text on the button.
         */
        drillUpButton: '{buttonText}',
        /**
         * Accessible label for the chart credits.
         * `{creditsStr}` refers to the visual text in the credits.
         */
        credits: 'Chart credits: {creditsStr}',
        /**
         * Thousands separator to use when formatting numbers for screen
         * readers. Note that many screen readers will not handle space as a
         * thousands separator, and will consider "11 700" as two numbers.
         *
         * Set to `null` to use the separator defined in
         * [lang.thousandsSep](lang.thousandsSep).
         *
         * @since 7.1.0
         */
        thousandsSep: ',',
        /**
         * Title element text for the chart SVG element. Leave this
         * empty to disable adding the title element. Browsers will display
         * this content when hovering over elements in the chart. Assistive
         * technology may use this element to label the chart.
         *
         * @since 6.0.8
         */
        svgContainerTitle: '',
        /**
         * Set a label on the container wrapping the SVG.
         *
         * @see [chartContainerLabel](#lang.accessibility.chartContainerLabel)
         *
         * @since 8.0.0
         */
        graphicContainerLabel: '',
        /**
         * Language options for the screen reader information sections added
         * before and after the charts.
         *
         * @since 8.0.0
         */
        screenReaderSection: {
            beforeRegionLabel: '',
            afterRegionLabel: '',
            /**
             * Language options for annotation descriptions.
             *
             * @since 8.0.1
             */
            annotations: {
                heading: 'Chart annotations summary',
                descriptionSinglePoint: ('{annotationText}. Related to {annotationPoint}'),
                descriptionMultiplePoints: ('{annotationText}. Related to {annotationPoint}' +
                    '{#each additionalAnnotationPoints}' +
                    ', also related to {this}' +
                    '{/each}'),
                descriptionNoPoints: '{annotationText}'
            },
            /**
             * Label for the end of the chart. Announced by screen readers.
             *
             * @since 8.0.0
             */
            endOfChartMarker: 'End of interactive chart.'
        },
        /**
         * Language options for sonification.
         *
         * @since 8.0.1
         */
        sonification: {
            playAsSoundButtonText: 'Play as sound, {chartTitle}',
            playAsSoundClickAnnouncement: 'Play'
        },
        /**
         * Language options for accessibility of the legend.
         *
         * @since 8.0.0
         */
        legend: {
            /**
             * Accessible label for the legend, for charts where there is no
             * legend title defined.
             */
            legendLabelNoTitle: 'Toggle series visibility, {chartTitle}',
            /**
             * Accessible label for the legend, for charts where there is a
             * legend title defined. `{legendTitle}` refers to the visual text
             * in the legend title.
             */
            legendLabel: 'Chart legend: {legendTitle}',
            /**
             * Accessible label for individual legend items. `{itemName}` refers
             * to the visual text in the legend for that item.
             */
            legendItem: 'Show {itemName}'
        },
        /**
         * Chart and map zoom accessibility language options.
         *
         * @since 8.0.0
         */
        zoom: {
            mapZoomIn: 'Zoom chart',
            mapZoomOut: 'Zoom out chart',
            resetZoomButton: 'Reset zoom'
        },
        /**
         * Range selector language options for accessibility.
         *
         * @since 8.0.0
         */
        rangeSelector: {
            dropdownLabel: '{rangeTitle}',
            minInputLabel: 'Select start date.',
            maxInputLabel: 'Select end date.',
            clickButtonAnnouncement: 'Viewing {axisRangeDescription}'
        },
        /**
         * Navigator language options for accessibility.
         *
         * @since 11.2.0
         */
        navigator: {
            /**
             * Label for the navigator handles.
             *
             * Receives `handleIx` and `chart` as context.
             * `handleIx` refers to the index of the navigator handle.
             */
            handleLabel: '{#eq handleIx 0}Start, percent{else}End, percent{/eq}',
            /**
             * Label for the navigator region.
             *
             * Receives `chart` as context.
             */
            groupLabel: 'Axis zoom',
            /**
             * Announcement for assistive technology when navigator values
             * are changed.
             *
             * Receives `axisRangeDescription` and `chart` as context.
             * `axisRangeDescription` corresponds to the range description
             * defined in [lang.accessibility.axis](#lang.accessibility.axis)
             */
            changeAnnouncement: '{axisRangeDescription}'
        },
        /**
         * Stock tools language options for accessibility.
         *
         * @since next
         */
        stockTools: {
            groupLabel: 'Stock chart tools',
            arrowLabel: 'Toggle submenu'
        },
        /**
         * Accessibility language options for the data table.
         *
         * @since 8.0.0
         */
        table: {
            viewAsDataTableButtonText: 'View as data table, {chartTitle}',
            tableSummary: 'Table representation of chart.'
        },
        /**
         * Default announcement for new data in charts. If addPoint or
         * addSeries is used, and only one series/point is added, the
         * `newPointAnnounce` and `newSeriesAnnounce` strings are used.
         * The `...Single` versions will be used if there is only one chart
         * on the page, and the `...Multiple` versions will be used if there
         * are multiple charts on the page. For all other new data events,
         * the `newDataAnnounce` string will be used.
         *
         * @since 7.1.0
         */
        announceNewData: {
            newDataAnnounce: 'Updated data for chart {chartTitle}',
            newSeriesAnnounceSingle: 'New data series: {seriesDesc}',
            newPointAnnounceSingle: 'New data point: {pointDesc}',
            newSeriesAnnounceMultiple: 'New data series in chart {chartTitle}: {seriesDesc}',
            newPointAnnounceMultiple: 'New data point in chart {chartTitle}: {pointDesc}'
        },
        /**
         * Descriptions of lesser known series types. The relevant
         * description is added to the screen reader information region
         * when these series types are used.
         *
         * @since 6.0.6
         */
        seriesTypeDescriptions: {
            boxplot: 'Box plot charts are typically used to display ' +
                'groups of statistical data. Each data point in the ' +
                'chart can have up to 5 values: minimum, lower quartile, ' +
                'median, upper quartile, and maximum.',
            arearange: 'Arearange charts are line charts displaying a ' +
                'range between a lower and higher value for each point.',
            areasplinerange: 'These charts are line charts displaying a ' +
                'range between a lower and higher value for each point.',
            bubble: 'Bubble charts are scatter charts where each data ' +
                'point also has a size value.',
            columnrange: 'Columnrange charts are column charts ' +
                'displaying a range between a lower and higher value for ' +
                'each point.',
            errorbar: 'Errorbar series are used to display the ' +
                'variability of the data.',
            funnel: 'Funnel charts are used to display reduction of data ' +
                'in stages.',
            pyramid: 'Pyramid charts consist of a single pyramid with ' +
                'item heights corresponding to each point value.',
            waterfall: 'A waterfall chart is a column chart where each ' +
                'column contributes towards a total end value.'
        },
        /**
         * Chart type description strings. This is added to the chart
         * information region.
         *
         * If there is only a single series type used in the chart, we use
         * the format string for the series type, or default if missing.
         * There is one format string for cases where there is only a single
         * series in the chart, and one for multiple series of the same
         * type.
         *
         * @since 6.0.6
         */
        chartTypes: {
            /* eslint-disable max-len */
            emptyChart: 'Empty chart',
            mapTypeDescription: 'Map of {mapTitle} with {numSeries} data series.',
            unknownMap: 'Map of unspecified region with {numSeries} data series.',
            combinationChart: 'Combination chart with {numSeries} data series.',
            defaultSingle: 'Chart with {numPoints} data ' +
                '{#eq numPoints 1}point{else}points{/eq}.',
            defaultMultiple: 'Chart with {numSeries} data series.',
            splineSingle: 'Line chart with {numPoints} data ' +
                '{#eq numPoints 1}point{else}points{/eq}.',
            splineMultiple: 'Line chart with {numSeries} lines.',
            lineSingle: 'Line chart with {numPoints} data ' +
                '{#eq numPoints 1}point{else}points{/eq}.',
            lineMultiple: 'Line chart with {numSeries} lines.',
            columnSingle: 'Bar chart with {numPoints} ' +
                '{#eq numPoints 1}bar{else}bars{/eq}.',
            columnMultiple: 'Bar chart with {numSeries} data series.',
            barSingle: 'Bar chart with {numPoints} ' +
                '{#eq numPoints 1}bar{else}bars{/eq}.',
            barMultiple: 'Bar chart with {numSeries} data series.',
            pieSingle: 'Pie chart with {numPoints} ' +
                '{#eq numPoints 1}slice{else}slices{/eq}.',
            pieMultiple: 'Pie chart with {numSeries} pies.',
            scatterSingle: 'Scatter chart with {numPoints} ' +
                '{#eq numPoints 1}point{else}points{/eq}.',
            scatterMultiple: 'Scatter chart with {numSeries} data series.',
            boxplotSingle: 'Boxplot with {numPoints} ' +
                '{#eq numPoints 1}box{else}boxes{/eq}.',
            boxplotMultiple: 'Boxplot with {numSeries} data series.',
            bubbleSingle: 'Bubble chart with {numPoints} ' +
                '{#eq numPoints 1}bubbles{else}bubble{/eq}.',
            bubbleMultiple: 'Bubble chart with {numSeries} data series.'
        }, /* eslint-enable max-len */
        /**
         * Axis description format strings.
         *
         * @since 6.0.6
         */
        axis: {
            /* eslint-disable max-len */
            xAxisDescriptionSingular: 'The chart has 1 X axis displaying {names[0]}. {ranges[0]}',
            xAxisDescriptionPlural: 'The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.',
            yAxisDescriptionSingular: 'The chart has 1 Y axis displaying {names[0]}. {ranges[0]}',
            yAxisDescriptionPlural: 'The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.',
            timeRangeDays: 'Data range: {range} days.',
            timeRangeHours: 'Data range: {range} hours.',
            timeRangeMinutes: 'Data range: {range} minutes.',
            timeRangeSeconds: 'Data range: {range} seconds.',
            rangeFromTo: 'Data ranges from {rangeFrom} to {rangeTo}.',
            rangeCategories: 'Data range: {numCategories} categories.',
            defaultAxisNames: {
                categories: 'categories',
                time: 'Time',
                values: 'values'
            }
        }, /* eslint-enable max-len */
        /**
         * Exporting menu format strings for accessibility module.
         *
         * @since 6.0.6
         */
        exporting: {
            chartMenuLabel: 'Chart menu',
            menuButtonLabel: 'View chart menu, {chartTitle}'
        },
        /**
         * Lang configuration for different series types. For more dynamic
         * control over the series element descriptions, see
         * [accessibility.seriesDescriptionFormatter](#accessibility.seriesDescriptionFormatter).
         *
         * @since 6.0.6
         */
        series: {
            /**
             * Lang configuration for the series main summary. Each series
             * type has two modes:
             *
             * 1. This series type is the only series type used in the
             *    chart
             *
             * 2. This is a combination chart with multiple series types
             *
             * If a definition does not exist for the specific series type
             * and mode, the 'default' lang definitions are used.
             *
             * Chart and its subproperties can be accessed with the `{chart}` variable.
             * The series and its subproperties can be accessed with the `{series}` variable.
             *
             * The series index (starting from 1) can be accessed with the `{seriesNumber}` variable.
             *
             * @since 6.0.6
             */
            summary: {
                /* eslint-disable max-len */
                'default': '{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                defaultCombination: '{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                line: '{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                lineCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                spline: '{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                splineCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                column: '{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.',
                columnCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.',
                bar: '{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.',
                barCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.',
                pie: '{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.',
                pieCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.',
                scatter: '{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.',
                scatterCombination: '{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.',
                boxplot: '{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.',
                boxplotCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.',
                bubble: '{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.',
                bubbleCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.',
                map: '{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.',
                mapCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.',
                mapline: '{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                maplineCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.',
                mapbubble: '{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.',
                mapbubbleCombination: '{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.'
            }, /* eslint-enable max-len */
            /**
             * User supplied description text. This is added in the point
             * comment description by default if present.
             *
             * `{description}` refers to the value given in
             * [point.accessibility.description](#series.line.data.accessibility.description).
             *
             * @since 6.0.6
             */
            description: '{description}',
            /**
             * X-axis description for series if there are multiple xAxes in
             * the chart.
             *
             * @since 6.0.6
             */
            xAxisDescription: 'X axis, {name}',
            /**
             * Y-axis description for series if there are multiple yAxes in
             * the chart.
             *
             * @since 6.0.6
             */
            yAxisDescription: 'Y axis, {name}',
            /**
             * Description for the value of null points.
             *
             * @since 8.0.0
             */
            nullPointValue: 'No value',
            /**
             * Description for annotations on a point, as it is made available
             * to assistive technology.
             *
             * @since 8.0.1
             */
            pointAnnotationsDescription: '{#each annotations}' +
                'Annotation: {this}{/each}'
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var LangDefaults = (langOptions);

;// ./code/es5/es-modules/Accessibility/Options/DeprecatedOptions.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Default options for accessibility.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
/* eslint-disable max-len */
/*
 *  List of deprecated options:
 *
 *  chart.description -> accessibility.description
 *  chart.typeDescription -> accessibility.typeDescription
 *  series.description -> series.accessibility.description
 *  series.exposeElementToA11y -> series.accessibility.exposeAsGroupOnly
 *  series.pointDescriptionFormat ->
 *      series.accessibility.point.descriptionFormat
 *  series.pointDescriptionFormatter ->
 *      series.accessibility.pointDescriptionFormatter
 *  series.accessibility.pointDescriptionFormatter ->
 *      series.accessibility.point.descriptionFormatter
 *  series.skipKeyboardNavigation ->
 *      series.accessibility.keyboardNavigation.enabled
 *  point.description -> point.accessibility.description !!!! WARNING: No longer deprecated and handled, removed for HC8.
 *  axis.description -> axis.accessibility.description
 *
 *  accessibility.pointDateFormat -> accessibility.point.dateFormat
 *  accessibility.addTableShortcut -> Handled by screenReaderSection.beforeChartFormat
 *  accessibility.pointDateFormatter -> accessibility.point.dateFormatter
 *  accessibility.pointDescriptionFormatter -> accessibility.point.descriptionFormatter
 *  accessibility.pointDescriptionThreshold -> accessibility.series.pointDescriptionEnabledThreshold
 *  accessibility.pointNavigationThreshold -> accessibility.keyboardNavigation.seriesNavigation.pointNavigationEnabledThreshold
 *  accessibility.pointValueDecimals -> accessibility.point.valueDecimals
 *  accessibility.pointValuePrefix -> accessibility.point.valuePrefix
 *  accessibility.pointValueSuffix -> accessibility.point.valueSuffix
 *  accessibility.screenReaderSectionFormatter -> accessibility.screenReaderSection.beforeChartFormatter
 *  accessibility.describeSingleSeries -> accessibility.series.describeSingleSeries
 *  accessibility.seriesDescriptionFormatter -> accessibility.series.descriptionFormatter
 *  accessibility.onTableAnchorClick -> accessibility.screenReaderSection.onViewDataTableClick
 *  accessibility.axisRangeDateFormat -> accessibility.screenReaderSection.axisRangeDateFormat
 *  accessibility.keyboardNavigation.skipNullPoints -> accessibility.keyboardNavigation.seriesNavigation.skipNullPoints
 *  accessibility.keyboardNavigation.mode -> accessibility.keyboardNavigation.seriesNavigation.mode
 *
 *  lang.accessibility.chartHeading -> no longer used, remove
 *  lang.accessibility.legendItem -> lang.accessibility.legend.legendItem
 *  lang.accessibility.legendLabel -> lang.accessibility.legend.legendLabel
 *  lang.accessibility.mapZoomIn -> lang.accessibility.zoom.mapZoomIn
 *  lang.accessibility.mapZoomOut -> lang.accessibility.zoom.mapZoomOut
 *  lang.accessibility.resetZoomButton -> lang.accessibility.zoom.resetZoomButton
 *  lang.accessibility.screenReaderRegionLabel -> lang.accessibility.screenReaderSection.beforeRegionLabel
 *  lang.accessibility.rangeSelectorButton -> lang.accessibility.rangeSelector.buttonText
 *  lang.accessibility.rangeSelectorMaxInput -> lang.accessibility.rangeSelector.maxInputLabel
 *  lang.accessibility.rangeSelectorMinInput -> lang.accessibility.rangeSelector.minInputLabel
 *  lang.accessibility.svgContainerEnd -> lang.accessibility.screenReaderSection.endOfChartMarker
 *  lang.accessibility.viewAsDataTable -> lang.accessibility.table.viewAsDataTableButtonText
 *  lang.accessibility.tableSummary -> lang.accessibility.table.tableSummary
 *
 */
/* eslint-enable max-len */



/* *
 *
 *  Functions
 *
 * */
/**
 * Set a new option on a root prop, where the option is defined as an array of
 * suboptions.
 * @private
 * @param {Record<string, *>} root
 * @param {Array<string>} optionAsArray
 * @param {*} val
 * @return {void}
 */
function traverseSetOption(root, optionAsArray, val) {
    var opt = root,
        prop,
        i = 0;
    for (; i < optionAsArray.length - 1; ++i) {
        prop = optionAsArray[i];
        opt = opt[prop] = pick(opt[prop], {});
    }
    opt[optionAsArray[optionAsArray.length - 1]] = val;
}
/**
 * If we have a clear root option node for old and new options and a mapping
 * between, we can use this generic function for the copy and warn logic.
 */
function deprecateFromOptionsMap(chart, rootOldAsArray, rootNewAsArray, mapToNewOptions) {
    /**
     * @private
     */
    function getChildProp(root, propAsArray) {
        return propAsArray.reduce(function (acc, cur) {
            return acc[cur];
        }, root);
    }
    var rootOld = getChildProp(chart.options,
        rootOldAsArray),
        rootNew = getChildProp(chart.options,
        rootNewAsArray);
    Object.keys(mapToNewOptions).forEach(function (oldOptionKey) {
        var _a;
        var val = rootOld[oldOptionKey];
        if (typeof val !== 'undefined') {
            traverseSetOption(rootNew, mapToNewOptions[oldOptionKey], val);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(32, false, chart, (_a = {},
                _a[rootOldAsArray.join('.') + '.' + oldOptionKey] = (rootNewAsArray.join('.') + '.' +
                    mapToNewOptions[oldOptionKey].join('.')),
                _a));
        }
    });
}
/**
 * @private
 */
function copyDeprecatedChartOptions(chart) {
    var chartOptions = chart.options.chart,
        a11yOptions = chart.options.accessibility || {};
    ['description', 'typeDescription'].forEach(function (prop) {
        var _a;
        if (chartOptions[prop]) {
            a11yOptions[prop] = chartOptions[prop];
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(32, false, chart, (_a = {}, _a["chart.".concat(prop)] = "use accessibility.".concat(prop), _a));
        }
    });
}
/**
 * @private
 */
function copyDeprecatedAxisOptions(chart) {
    chart.axes.forEach(function (axis) {
        var opts = axis.options;
        if (opts && opts.description) {
            opts.accessibility = opts.accessibility || {};
            opts.accessibility.description = opts.description;
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(32, false, chart, {
                'axis.description': 'use axis.accessibility.description'
            });
        }
    });
}
/**
 * @private
 */
function copyDeprecatedSeriesOptions(chart) {
    // Map of deprecated series options. New options are defined as
    // arrays of paths under series.options.
    var oldToNewSeriesOptions = {
            description: ['accessibility', 'description'],
            exposeElementToA11y: ['accessibility', 'exposeAsGroupOnly'],
            pointDescriptionFormat: [
                'accessibility', 'point', 'descriptionFormat'
            ],
            pointDescriptionFormatter: [
                'accessibility', 'point', 'descriptionFormatter'
            ],
            skipKeyboardNavigation: [
                'accessibility', 'keyboardNavigation', 'enabled'
            ],
            'accessibility.pointDescriptionFormatter': [
                'accessibility', 'point', 'descriptionFormatter'
            ]
        };
    chart.series.forEach(function (series) {
        // Handle series wide options
        Object.keys(oldToNewSeriesOptions).forEach(function (oldOption) {
            var _a;
            var optionVal = series.options[oldOption];
            // Special case
            if (oldOption === 'accessibility.pointDescriptionFormatter') {
                optionVal = (series.options.accessibility &&
                    series.options.accessibility
                        .pointDescriptionFormatter);
            }
            if (typeof optionVal !== 'undefined') {
                // Set the new option
                traverseSetOption(series.options, oldToNewSeriesOptions[oldOption], 
                // Note that skipKeyboardNavigation has inverted option
                // value, since we set enabled rather than disabled
                oldOption === 'skipKeyboardNavigation' ?
                    !optionVal : optionVal);
                (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(32, false, chart, (_a = {},
                    _a["series.".concat(oldOption)] = ('series.' +
                        oldToNewSeriesOptions[oldOption].join('.')),
                    _a));
            }
        });
    });
}
/**
 * @private
 */
function copyDeprecatedTopLevelAccessibilityOptions(chart) {
    deprecateFromOptionsMap(chart, ['accessibility'], ['accessibility'], {
        pointDateFormat: ['point', 'dateFormat'],
        pointDateFormatter: ['point', 'dateFormatter'],
        pointDescriptionFormatter: ['point', 'descriptionFormatter'],
        pointDescriptionThreshold: [
            'series',
            'pointDescriptionEnabledThreshold'
        ],
        pointNavigationThreshold: [
            'keyboardNavigation', 'seriesNavigation',
            'pointNavigationEnabledThreshold'
        ],
        pointValueDecimals: ['point', 'valueDecimals'],
        pointValuePrefix: ['point', 'valuePrefix'],
        pointValueSuffix: ['point', 'valueSuffix'],
        screenReaderSectionFormatter: [
            'screenReaderSection',
            'beforeChartFormatter'
        ],
        describeSingleSeries: ['series', 'describeSingleSeries'],
        seriesDescriptionFormatter: ['series', 'descriptionFormatter'],
        onTableAnchorClick: ['screenReaderSection', 'onViewDataTableClick'],
        axisRangeDateFormat: ['screenReaderSection', 'axisRangeDateFormat']
    });
}
/**
 * @private
 */
function copyDeprecatedKeyboardNavigationOptions(chart) {
    deprecateFromOptionsMap(chart, ['accessibility', 'keyboardNavigation'], ['accessibility', 'keyboardNavigation', 'seriesNavigation'], {
        skipNullPoints: ['skipNullPoints'],
        mode: ['mode']
    });
}
/**
 * @private
 */
function copyDeprecatedLangOptions(chart) {
    deprecateFromOptionsMap(chart, ['lang', 'accessibility'], ['lang', 'accessibility'], {
        legendItem: ['legend', 'legendItem'],
        legendLabel: ['legend', 'legendLabel'],
        mapZoomIn: ['zoom', 'mapZoomIn'],
        mapZoomOut: ['zoom', 'mapZoomOut'],
        resetZoomButton: ['zoom', 'resetZoomButton'],
        screenReaderRegionLabel: [
            'screenReaderSection',
            'beforeRegionLabel'
        ],
        rangeSelectorButton: ['rangeSelector', 'buttonText'],
        rangeSelectorMaxInput: ['rangeSelector', 'maxInputLabel'],
        rangeSelectorMinInput: ['rangeSelector', 'minInputLabel'],
        svgContainerEnd: ['screenReaderSection', 'endOfChartMarker'],
        viewAsDataTable: ['table', 'viewAsDataTableButtonText'],
        tableSummary: ['table', 'tableSummary']
    });
}
/**
 * Copy options that are deprecated over to new options. Logs warnings to
 * console if deprecated options are used.
 *
 * @private
 */
function copyDeprecatedOptions(chart) {
    copyDeprecatedChartOptions(chart);
    copyDeprecatedAxisOptions(chart);
    if (chart.series) {
        copyDeprecatedSeriesOptions(chart);
    }
    copyDeprecatedTopLevelAccessibilityOptions(chart);
    copyDeprecatedKeyboardNavigationOptions(chart);
    copyDeprecatedLangOptions(chart);
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var DeprecatedOptions = (copyDeprecatedOptions);

;// ./code/es5/es-modules/Accessibility/Accessibility.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Accessibility module for Highcharts
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


var Accessibility_defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;

var Accessibility_doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var Accessibility_removeElement = Utils_HTMLUtilities.removeElement;



















/* *
 *
 *  Class
 *
 * */
/**
 * The Accessibility class
 *
 * @private
 * @requires modules/accessibility
 *
 * @class
 * @name Highcharts.Accessibility
 *
 * @param {Highcharts.Chart} chart
 * Chart object
 */
var Accessibility = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Accessibility(chart) {
        this.init(chart);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the accessibility class
     * @private
     * @param {Highcharts.Chart} chart
     *        Chart object
     */
    Accessibility.prototype.init = function (chart) {
        this.chart = chart;
        // Abort on old browsers
        if (!(Accessibility_doc === null || Accessibility_doc === void 0 ? void 0 : Accessibility_doc.addEventListener)) {
            this.zombie = true;
            this.components = {};
            chart.renderTo.setAttribute('aria-hidden', true);
            return;
        }
        // Copy over any deprecated options that are used. We could do this on
        // every update, but it is probably not needed.
        DeprecatedOptions(chart);
        this.proxyProvider = new Accessibility_ProxyProvider(this.chart);
        this.initComponents();
        this.keyboardNavigation = new Accessibility_KeyboardNavigation(chart, this.components);
    };
    /**
     * @private
     */
    Accessibility.prototype.initComponents = function () {
        var chart = this.chart;
        var proxyProvider = this.proxyProvider;
        var a11yOptions = chart.options.accessibility;
        this.components = {
            container: new Components_ContainerComponent(),
            infoRegions: new Components_InfoRegionsComponent(),
            legend: new Components_LegendComponent(),
            chartMenu: new Components_MenuComponent(),
            rangeSelector: new Components_RangeSelectorComponent(),
            series: new SeriesComponent_SeriesComponent(),
            zoom: new Components_ZoomComponent(),
            navigator: new Components_NavigatorComponent()
        };
        if (a11yOptions.customComponents) {
            extend(this.components, a11yOptions.customComponents);
        }
        var components = this.components;
        this.getComponentOrder().forEach(function (componentName) {
            components[componentName].initBase(chart, proxyProvider);
            components[componentName].init();
        });
    };
    /**
     * Get order to update components in.
     * @private
     */
    Accessibility.prototype.getComponentOrder = function () {
        if (!this.components) {
            return []; // For zombie accessibility object on old browsers
        }
        if (!this.components.series) {
            return Object.keys(this.components);
        }
        var componentsExceptSeries = Object.keys(this.components)
                .filter(function (c) { return c !== 'series'; });
        // Update series first, so that other components can read accessibility
        // info on points.
        return ['series'].concat(componentsExceptSeries);
    };
    /**
     * Update all components.
     */
    Accessibility.prototype.update = function () {
        var _a,
            _b;
        var components = this.components,
            chart = this.chart,
            a11yOptions = chart.options.accessibility;
        fireEvent(chart, 'beforeA11yUpdate');
        // Update the chart type list as this is used by multiple modules
        chart.types = this.getChartTypes();
        // Update proxies. We don't update proxy positions since most likely we
        // need to recreate the proxies on update.
        var kbdNavOrder = a11yOptions.keyboardNavigation.order;
        this.proxyProvider.updateGroupOrder(kbdNavOrder);
        // Update markup
        this.getComponentOrder().forEach(function (componentName) {
            components[componentName].onChartUpdate();
            fireEvent(chart, 'afterA11yComponentUpdate', {
                name: componentName,
                component: components[componentName]
            });
        });
        // Update keyboard navigation
        this.keyboardNavigation.update(kbdNavOrder);
        // Handle high contrast mode
        // Reapply after updates while HC mode is active, but avoid recursion
        // while the theme itself is being applied through chart.update.
        if (!((_a = chart.highContrastState) === null || _a === void 0 ? void 0 : _a.applying) &&
            a11yOptions.highContrastMode !== false && (((_b = chart.highContrastState) === null || _b === void 0 ? void 0 : _b.active) ||
            HighContrastMode.isHighContrastModeActive() ||
            a11yOptions.highContrastMode === true)) {
            HighContrastMode.setHighContrastTheme(chart);
        }
        fireEvent(chart, 'afterA11yUpdate', {
            accessibility: this
        });
    };
    /**
     * Destroy all elements.
     */
    Accessibility.prototype.destroy = function () {
        var chart = this.chart || {};
        // Destroy components
        var components = this.components;
        Object.keys(components).forEach(function (componentName) {
            components[componentName].destroy();
            components[componentName].destroyBase();
        });
        // Destroy proxy provider
        if (this.proxyProvider) {
            this.proxyProvider.destroy();
        }
        // Remove announcer container
        if (chart.announcerContainer) {
            Accessibility_removeElement(chart.announcerContainer);
        }
        // Kill keyboard nav
        if (this.keyboardNavigation) {
            this.keyboardNavigation.destroy();
        }
        // Hide container from screen readers if it exists
        if (chart.renderTo) {
            chart.renderTo.setAttribute('aria-hidden', true);
        }
        // Remove focus border if it exists
        if (chart.focusElement) {
            chart.focusElement.removeFocusBorder();
        }
    };
    /**
     * Return a list of the types of series we have in the chart.
     * @private
     */
    Accessibility.prototype.getChartTypes = function () {
        var types = {};
        this.chart.series.forEach(function (series) {
            types[series.type] = 1;
        });
        return Object.keys(types);
    };
    return Accessibility;
}());
/* *
 *
 *  Class Namespace
 *
 * */
(function (Accessibility) {
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
    Accessibility.i18nFormat = A11yI18n.i18nFormat;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Destroy with chart.
     * @private
     */
    function chartOnDestroy() {
        if (this.accessibility) {
            this.accessibility.destroy();
        }
    }
    /**
     * Handle updates to the module and send render updates to components.
     * @private
     */
    function chartOnRender() {
        // Update/destroy
        if (this.a11yDirty && this.renderTo) {
            delete this.a11yDirty;
            this.updateA11yEnabled();
        }
        var a11y = this.accessibility;
        if (a11y && !a11y.zombie) {
            a11y.proxyProvider.updateProxyElementPositions();
            a11y.getComponentOrder().forEach(function (componentName) {
                a11y.components[componentName].onChartRender();
            });
        }
    }
    /**
     * Update with chart/series/point updates.
     * @private
     */
    function chartOnUpdate(e) {
        // Merge new options
        var newOptions = e.options.accessibility;
        if (newOptions) {
            // Handle custom component updating specifically
            if (newOptions.customComponents) {
                this.options.accessibility.customComponents =
                    newOptions.customComponents;
                delete newOptions.customComponents;
            }
            merge(true, this.options.accessibility, newOptions);
            // Recreate from scratch
            if (this.accessibility && this.accessibility.destroy) {
                this.accessibility.destroy();
                delete this.accessibility;
            }
        }
        // Mark dirty for update
        this.a11yDirty = true;
    }
    /**
     * @private
     */
    function chartUpdateA11yEnabled() {
        var a11y = this.accessibility;
        var accessibilityOptions = this.options.accessibility,
            svg = this.renderer.boxWrapper.element,
            title = this.title;
        if (accessibilityOptions && accessibilityOptions.enabled) {
            if (a11y && !a11y.zombie) {
                a11y.update();
            }
            else {
                this.accessibility = a11y = new Accessibility(this);
                if (a11y && !a11y.zombie) {
                    a11y.update();
                }
                // If a11y has been disabled, and is now enabled
                if (svg.getAttribute('role') === 'img') {
                    svg.removeAttribute('role');
                }
            }
        }
        else if (a11y) {
            // Destroy if after update we have a11y and it is disabled
            if (a11y.destroy) {
                a11y.destroy();
            }
            delete this.accessibility;
        }
        else {
            // If a11y has been disabled dynamically or is disabled
            this.renderTo.setAttribute('role', 'img');
            this.renderTo.setAttribute('aria-hidden', false);
            this.renderTo.setAttribute('aria-label', ((title && title.element.textContent) || '').replace(/</g, '&lt;'));
            svg.setAttribute('aria-hidden', true);
            var description = document.getElementsByClassName('highcharts-description')[0];
            if (description) {
                description.setAttribute('aria-hidden', false);
                description.classList.remove('highcharts-linked-description');
            }
        }
    }
    /**
     * @private
     */
    function compose(ChartClass, LegendClass, PointClass, SeriesClass, SVGElementClass, RangeSelectorClass) {
        // Ordered:
        Accessibility_KeyboardNavigation.compose(ChartClass);
        SeriesComponent_NewDataAnnouncer.compose(SeriesClass);
        Components_LegendComponent.compose(ChartClass, LegendClass);
        Components_MenuComponent.compose(ChartClass);
        SeriesComponent_SeriesComponent.compose(ChartClass, PointClass, SeriesClass);
        A11yI18n.compose(ChartClass);
        FocusBorder.compose(ChartClass, SVGElementClass);
        // RangeSelector
        if (RangeSelectorClass) {
            Components_RangeSelectorComponent.compose(ChartClass, RangeSelectorClass);
        }
        var chartProto = ChartClass.prototype;
        if (!chartProto.updateA11yEnabled) {
            chartProto.updateA11yEnabled = chartUpdateA11yEnabled;
            addEvent(ChartClass, 'destroy', chartOnDestroy);
            addEvent(ChartClass, 'render', chartOnRender);
            addEvent(ChartClass, 'update', chartOnUpdate);
            // Mark dirty for update
            ['addSeries', 'init'].forEach(function (event) {
                addEvent(ChartClass, event, function () {
                    this.a11yDirty = true;
                });
            });
            // Direct updates (events happen after render)
            ['afterApplyDrilldown', 'drillupall'].forEach(function (event) {
                addEvent(ChartClass, event, function chartOnAfterDrilldown() {
                    var a11y = this.accessibility;
                    if (a11y && !a11y.zombie) {
                        a11y.update();
                    }
                });
            });
            addEvent(PointClass, 'update', pointOnUpdate);
            // Mark dirty for update
            ['update', 'updatedData', 'remove'].forEach(function (event) {
                addEvent(SeriesClass, event, function () {
                    if (this.chart.accessibility) {
                        this.chart.a11yDirty = true;
                    }
                });
            });
        }
    }
    Accessibility.compose = compose;
    /**
     * Mark dirty for update.
     * @private
     */
    function pointOnUpdate() {
        if (this.series.chart.accessibility) {
            this.series.chart.a11yDirty = true;
        }
    }
})(Accessibility || (Accessibility = {}));
/* *
 *
 *  Registry
 *
 * */
// Add default options
merge(true, Accessibility_defaultOptions, A11yDefaults, {
    accessibility: {
        highContrastTheme: HighContrastTheme
    },
    lang: LangDefaults
});
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Accessibility_Accessibility = (Accessibility);

;// ./code/es5/es-modules/masters/modules/accessibility.src.js









var G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Classes
G.i18nFormat = Accessibility_Accessibility.i18nFormat;
G.A11yChartUtilities = Utils_ChartUtilities;
G.A11yHTMLUtilities = Utils_HTMLUtilities;
G.AccessibilityComponent = Accessibility_AccessibilityComponent;
G.KeyboardNavigationHandler = Accessibility_KeyboardNavigationHandler;
G.SeriesAccessibilityDescriber = SeriesComponent_SeriesDescriber;
// Compositions
Accessibility_Accessibility.compose(G.Chart, G.Legend, G.Point, G.Series, G.SVGElement, G.RangeSelector);
/* harmony default export */ var accessibility_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});