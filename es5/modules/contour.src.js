/**
 * @license Highmaps JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/contour
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Color"], root["_Highcharts"]["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/contour", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Axis"],amd1["Color"],amd1["SeriesRegistry"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/contour"] = factory(root["_Highcharts"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Color"], root["_Highcharts"]["SeriesRegistry"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Axis"], root["Highcharts"]["Color"], root["Highcharts"]["SeriesRegistry"]);
})(typeof window === 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__620__, __WEBPACK_EXTERNAL_MODULE__512__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 512:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 532:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

/***/ }),

/***/ 620:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__620__;

/***/ }),

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
  "default": function() { return /* binding */ contour_src; }
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Color"],"commonjs":["highcharts","Color"],"commonjs2":["highcharts","Color"],"root":["Highcharts","Color"]}
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_ = __webpack_require__(620);
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default = /*#__PURE__*/__webpack_require__.n(highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_);
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

;// ./code/es5/es-modules/Core/Axis/Color/ColorAxisBase.js
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



var color = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default()).parse;
/* *
 *
 *  Namespace
 *
 * */
/** @internal */
var ColorAxisBase;
(function (ColorAxisBase) {
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
     * Initialize defined data classes.
     * @internal
     */
    function initDataClasses(userOptions) {
        var axis = this,
            chart = axis.chart,
            legendItem = axis.legendItem = axis.legendItem || {},
            options = axis.options,
            userDataClasses = userOptions.dataClasses || [];
        var dataClass,
            dataClasses,
            colorCount = chart.options.chart.colorCount,
            colorCounter = 0,
            colors;
        axis.dataClasses = dataClasses = [];
        legendItem.labels = [];
        for (var i = 0, iEnd = userDataClasses.length; i < iEnd; ++i) {
            dataClass = userDataClasses[i];
            dataClass = merge(dataClass);
            dataClasses.push(dataClass);
            if (!chart.styledMode && dataClass.color) {
                continue;
            }
            if (options.dataClassColor === 'category') {
                if (!chart.styledMode) {
                    colors = chart.options.colors || [];
                    colorCount = colors.length;
                    dataClass.color = colors[colorCounter];
                }
                dataClass.colorIndex = colorCounter;
                // Loop back to zero
                colorCounter++;
                if (colorCounter === colorCount) {
                    colorCounter = 0;
                }
            }
            else {
                dataClass.color = color(options.minColor).tweenTo(color(options.maxColor), iEnd < 2 ? 0.5 : i / (iEnd - 1) // #3219
                );
            }
        }
    }
    ColorAxisBase.initDataClasses = initDataClasses;
    /**
     * Create initial color stops.
     * @internal
     */
    function initStops() {
        var axis = this,
            options = axis.options,
            stops = axis.stops = options.stops || [
                [0,
            options.minColor || ''],
                [1,
            options.maxColor || '']
            ];
        for (var i = 0, iEnd = stops.length; i < iEnd; ++i) {
            stops[i].color = color(stops[i][1]);
        }
    }
    ColorAxisBase.initStops = initStops;
    /**
     * Normalize logarithmic values.
     * @internal
     */
    function normalizedValue(value) {
        var axis = this,
            max = axis.max || 0,
            min = axis.min || 0;
        if (axis.logarithmic) {
            value = axis.logarithmic.log2lin(value);
        }
        return 1 - ((max - value) /
            ((max - min) || 1));
    }
    ColorAxisBase.normalizedValue = normalizedValue;
    /**
     * Translate from a value to a color.
     * @internal
     */
    function toColor(value, point) {
        var axis = this;
        var dataClasses = axis.dataClasses;
        var stops = axis.stops;
        var pos,
            from,
            to,
            color,
            dataClass,
            i;
        if (dataClasses) {
            i = dataClasses.length;
            while (i--) {
                dataClass = dataClasses[i];
                from = dataClass.from;
                to = dataClass.to;
                if ((typeof from === 'undefined' || value >= from) &&
                    (typeof to === 'undefined' || value <= to)) {
                    color = dataClass.color;
                    if (point) {
                        point.dataClass = i;
                        point.colorIndex = dataClass.colorIndex;
                    }
                    break;
                }
            }
        }
        else {
            pos = axis.normalizedValue(value);
            i = stops.length;
            while (i--) {
                if (pos > stops[i][0]) {
                    break;
                }
            }
            from = stops[i] || stops[i + 1];
            to = stops[i + 1] || from;
            // The position within the gradient
            pos = 1 - (to[0] - pos) / ((to[0] - from[0]) || 1);
            color = from.color.tweenTo(to.color, pos);
        }
        return color;
    }
    ColorAxisBase.toColor = toColor;
})(ColorAxisBase || (ColorAxisBase = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Color_ColorAxisBase = (ColorAxisBase);

;// ./code/es5/es-modules/Core/Axis/Color/ColorAxisComposition.js
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


var ColorAxisComposition_color = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default()).parse;

/* *
 *
 *  Composition
 *
 * */
var ColorAxisComposition;
(function (ColorAxisComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Variables
     *
     * */
    var ColorAxisConstructor;
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(ColorAxisClass, ChartClass, FxClass, LegendClass, SeriesClass) {
        var chartProto = ChartClass.prototype,
            fxProto = FxClass.prototype,
            seriesProto = SeriesClass.prototype;
        if (!chartProto.collectionsWithUpdate.includes('colorAxis')) {
            ColorAxisConstructor = ColorAxisClass;
            chartProto.collectionsWithUpdate.push('colorAxis');
            chartProto.collectionsWithInit.colorAxis = [
                chartProto.addColorAxis
            ];
            addEvent(ChartClass, 'afterCreateAxes', onChartAfterCreateAxes);
            wrapChartCreateAxis(ChartClass);
            fxProto.fillSetter = wrapFxFillSetter;
            fxProto.strokeSetter = wrapFxStrokeSetter;
            addEvent(LegendClass, 'afterGetAllItems', onLegendAfterGetAllItems);
            addEvent(LegendClass, 'afterColorizeItem', onLegendAfterColorizeItem);
            addEvent(LegendClass, 'afterUpdate', onLegendAfterUpdate);
            extend(seriesProto, {
                optionalAxis: 'colorAxis',
                translateColors: seriesTranslateColors
            });
            extend(seriesProto.pointClass.prototype, {
                setVisible: pointSetVisible
            });
            addEvent(SeriesClass, 'afterTranslate', onSeriesAfterTranslate, { order: 1 });
            addEvent(SeriesClass, 'bindAxes', onSeriesBindAxes);
        }
    }
    ColorAxisComposition.compose = compose;
    /**
     * Extend the chart createAxes method to also make the color axis.
     * @internal
     */
    function onChartAfterCreateAxes() {
        var _this = this;
        var userOptions = this.userOptions;
        this.colorAxis = [];
        // If a `colorAxis` config is present in the user options (not in a
        // theme), instantiate it.
        if (userOptions.colorAxis) {
            userOptions.colorAxis = splat(userOptions.colorAxis);
            userOptions.colorAxis.map(function (axisOptions) { return (new ColorAxisConstructor(_this, axisOptions)); });
        }
    }
    /**
     * Add the color axis. This also removes the axis' own series to prevent
     * them from showing up individually.
     * @internal
     */
    function onLegendAfterGetAllItems(e) {
        var _this = this;
        var colorAxes = this.chart.colorAxis || [],
            destroyItem = function (item) {
                var i = e.allItems.indexOf(item);
            if (i !== -1) {
                // #15436
                _this.destroyItem(e.allItems[i]);
                e.allItems.splice(i, 1);
            }
        };
        var colorAxisItems = [],
            options,
            i;
        colorAxes.forEach(function (colorAxis) {
            options = colorAxis.options;
            if (options === null || options === void 0 ? void 0 : options.showInLegend) {
                // Data classes
                if (options.dataClasses && options.visible) {
                    colorAxisItems = colorAxisItems.concat(colorAxis.getDataClassLegendSymbols());
                    // Gradient legend
                }
                else if (options.visible) {
                    // Add this axis on top
                    colorAxisItems.push(colorAxis);
                }
                // If dataClasses are defined or showInLegend option is not set
                // to true, do not add color axis' series to legend.
                colorAxis.series.forEach(function (series) {
                    if (!series.options.showInLegend || options.dataClasses) {
                        if (series.options.legendType === 'point') {
                            series.points.forEach(function (point) {
                                destroyItem(point);
                            });
                        }
                        else {
                            destroyItem(series);
                        }
                    }
                });
            }
        });
        i = colorAxisItems.length;
        while (i--) {
            e.allItems.unshift(colorAxisItems[i]);
        }
    }
    /** @internal */
    function onLegendAfterColorizeItem(e) {
        if (e.visible && e.item.legendColor) {
            e.item.legendItem.symbol.attr({
                fill: e.item.legendColor
            });
        }
    }
    /**
     * Updates in the legend need to be reflected in the color axis. (#6888)
     * @internal
     */
    function onLegendAfterUpdate(e) {
        var _a;
        (_a = this.chart.colorAxis) === null || _a === void 0 ? void 0 : _a.forEach(function (colorAxis) {
            colorAxis.update({}, e.redraw);
        });
    }
    /**
     * Calculate and set colors for points.
     * @internal
     */
    function onSeriesAfterTranslate() {
        var _a;
        if (((_a = this.chart.colorAxis) === null || _a === void 0 ? void 0 : _a.length) ||
            this.colorAttribs) {
            this.translateColors();
        }
    }
    /**
     * Add colorAxis to series axisTypes.
     * @internal
     */
    function onSeriesBindAxes() {
        var axisTypes = this.axisTypes;
        if (!axisTypes) {
            this.axisTypes = ['colorAxis'];
        }
        else if (axisTypes.indexOf('colorAxis') === -1) {
            axisTypes.push('colorAxis');
        }
    }
    /**
     * Set the visibility of a single point
     * @internal
     * @function Highcharts.colorPointMixin.setVisible
     * @param {boolean} visible
     */
    function pointSetVisible(visible) {
        var point = this,
            method = visible ? 'show' : 'hide';
        point.visible = point.options.visible = Boolean(visible);
        // Show and hide associated elements
        ['graphic', 'dataLabel'].forEach(function (key) {
            if (point[key]) {
                point[key][method]();
            }
        });
        this.series.buildKDTree(); // Rebuild kdtree #13195
    }
    ColorAxisComposition.pointSetVisible = pointSetVisible;
    /**
     * In choropleth maps, the color is a result of the value, so this needs
     * translation too
     * @internal
     * @function Highcharts.colorSeriesMixin.translateColors
     */
    function seriesTranslateColors() {
        var series = this,
            points = this.getPointsCollection(), // #17945
            nullColor = this.options.nullColor,
            colorAxis = this.colorAxis,
            colorKey = this.colorKey;
        points.forEach(function (point) {
            var value = point.getNestedProperty(colorKey),
                color = point.options.color || (point.isNull || point.value === null ?
                    nullColor :
                    (colorAxis && typeof value !== 'undefined') ?
                        colorAxis.toColor(value,
                point) :
                        point.color || series.color);
            if (color && point.color !== color) {
                point.color = color;
                if (series.options.legendType === 'point' &&
                    point.legendItem &&
                    point.legendItem.label) {
                    series.chart.legend.colorizeItem(point, point.visible);
                }
            }
        });
    }
    /** @internal */
    function wrapChartCreateAxis(ChartClass) {
        var superCreateAxis = ChartClass.prototype.createAxis;
        ChartClass.prototype.createAxis = function (type, options) {
            var chart = this;
            if (type !== 'colorAxis') {
                return superCreateAxis.apply(chart, arguments);
            }
            var axis = new ColorAxisConstructor(chart,
                merge(options.axis, {
                    index: chart[type].length,
                    isX: false
                }));
            chart.isDirtyLegend = true;
            // Clear before 'bindAxes' (#11924)
            chart.axes.forEach(function (axis) {
                axis.series = [];
            });
            chart.series.forEach(function (series) {
                series.bindAxes();
                series.isDirtyData = true;
            });
            if (pick(options.redraw, true)) {
                chart.redraw(options.animation);
            }
            return axis;
        };
    }
    /**
     * Handle animation of the color attributes directly.
     * @internal
     */
    function wrapFxFillSetter() {
        this.elem.attr('fill', ColorAxisComposition_color(this.start).tweenTo(ColorAxisComposition_color(this.end), this.pos), void 0, true);
    }
    /**
     * Handle animation of the color attributes directly.
     * @internal
     */
    function wrapFxStrokeSetter() {
        this.elem.attr('stroke', ColorAxisComposition_color(this.start).tweenTo(ColorAxisComposition_color(this.end), this.pos), void 0, true);
    }
})(ColorAxisComposition || (ColorAxisComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Color_ColorAxisComposition = (ColorAxisComposition);

;// ./code/es5/es-modules/Core/Axis/Color/ColorAxisDefaults.js
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
 * A color axis for series. Visually, the color
 * axis will appear as a gradient or as separate items inside the
 * legend, depending on whether the axis is scalar or based on data
 * classes.
 *
 * For supported color formats, see the
 * [docs article about colors](https://www.highcharts.com/docs/chart-design-and-style/colors).
 *
 * A scalar color axis is represented by a gradient. The colors either
 * range between the [minColor](#colorAxis.minColor) and the
 * [maxColor](#colorAxis.maxColor), or for more fine grained control the
 * colors can be defined in [stops](#colorAxis.stops). Often times, the
 * color axis needs to be adjusted to get the right color spread for the
 * data. In addition to stops, consider using a logarithmic
 * [axis type](#colorAxis.type), or setting [min](#colorAxis.min) and
 * [max](#colorAxis.max) to avoid the colors being determined by
 * outliers.
 *
 * When [dataClasses](#colorAxis.dataClasses) are used, the ranges are
 * subdivided into separate classes like categories based on their
 * values. This can be used for ranges between two values, but also for
 * a true category. However, when your data is categorized, it may be as
 * convenient to add each category to a separate series.
 *
 * Color axis does not work with: `sankey`, `sunburst`, `dependencywheel`,
 * `networkgraph`, `venn`, `gauge` and `solidgauge` series
 * types.
 *
 * Since v7.2.0 `colorAxis` can also be an array of options objects.
 *
 * See [the Axis object](/class-reference/Highcharts.Axis) for
 * programmatic access to the axis.
 *
 * @sample       {highcharts} highcharts/coloraxis/custom-color-key
 *               Column chart with color axis
 * @sample       {highcharts} highcharts/coloraxis/horizontal-layout
 *               Horizontal layout
 * @sample       {highmaps} maps/coloraxis/dataclasscolor
 *               With data classes
 * @sample       {highmaps} maps/coloraxis/mincolor-maxcolor
 *               Min color and max color
 *
 * @extends      xAxis
 * @excluding    alignTicks, allowDecimals, alternateGridColor, breaks,
 *               categories, crosshair, dateTimeLabelFormats, left,
 *               lineWidth, linkedTo, maxZoom, minRange, minTickInterval,
 *               offset, opposite, pane, plotBands, plotLines,
 *               reversedStacks, scrollbar, showEmpty, top, zoomEnabled
 * @product      highcharts highstock highmaps
 * @requires     modules/coloraxis
 * @type         {*|Array<*>}
 * @optionparent colorAxis
 */
var colorAxisDefaults = {
    /**
     * Whether to allow decimals on the color axis.
     * @type      {boolean}
     * @default   true
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.allowDecimals
     */
    /**
     * Determines how to set each data class' color if no individual
     * color is set. The default value, `tween`, computes intermediate
     * colors between `minColor` and `maxColor`. The other possible
     * value, `category`, pulls colors from the global or chart specific
     * [colors](#colors) array.
     *
     * @sample {highmaps} maps/coloraxis/dataclasscolor/
     *         Category colors
     *
     * @type       {string}
     * @default    tween
     * @product    highcharts highstock highmaps
     * @validvalue ["tween", "category"]
     * @apioption  colorAxis.dataClassColor
     */
    /**
     * An array of data classes or ranges for the choropleth map. If
     * none given, the color axis is scalar and values are distributed
     * as a gradient between the minimum and maximum colors.
     *
     * @sample {highmaps} maps/demo/data-class-ranges/
     *         Multiple ranges
     *
     * @sample {highmaps} maps/demo/data-class-two-ranges/
     *         Two ranges
     *
     * @type      {Array<*>}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses
     */
    /**
     * The color of each data class. If not set, the color is pulled
     * from the global or chart-specific [colors](#colors) array. In
     * styled mode, this option is ignored. Instead, use colors defined
     * in CSS.
     *
     * @sample {highmaps} maps/demo/data-class-two-ranges/
     *         Explicit colors
     *
     * @type      {Highcharts.ColorType}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.color
     */
    /**
     * The start of the value range that the data class represents,
     * relating to the point value.
     *
     * The range of each `dataClass` is closed in both ends, but can be
     * overridden by the next `dataClass`.
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.from
     */
    /**
     * The name of the data class as it appears in the legend.
     * If no name is given, it is automatically created based on the
     * `from` and `to` values. For full programmatic control,
     * [legend.labelFormatter](#legend.labelFormatter) can be used.
     * In the formatter, `this.from` and `this.to` can be accessed.
     *
     * @sample {highmaps} maps/coloraxis/dataclasses-name/
     *         Named data classes
     *
     * @sample {highmaps} maps/coloraxis/dataclasses-labelformatter/
     *         Formatted data classes
     *
     * @type      {string}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.name
     */
    /**
     * The end of the value range that the data class represents,
     * relating to the point value.
     *
     * The range of each `dataClass` is closed in both ends, but can be
     * overridden by the next `dataClass`.
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.to
     */
    /**
     * The layout of the color axis. Can be `'horizontal'` or `'vertical'`.
     * If none given, the color axis has the same layout as the legend.
     *
     * @sample highcharts/coloraxis/horizontal-layout/
     *         Horizontal color axis layout with vertical legend
     *
     * @type      {string|undefined}
     * @since     7.2.0
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.layout
     */
    /** @ignore-option */
    lineWidth: 0,
    /**
     * Padding of the min value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer.
     *
     * @product highcharts highstock highmaps
     */
    minPadding: 0,
    /**
     * The maximum value of the axis in terms of map point values. If
     * `null`, the max value is automatically calculated. If the
     * `endOnTick` option is true, the max value might be rounded up.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Explicit min and max to reduce the effect of outliers
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.max
     */
    /**
     * The minimum value of the axis in terms of map point values. If
     * `null`, the min value is automatically calculated. If the
     * `startOnTick` option is true, the min value might be rounded
     * down.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Explicit min and max to reduce the effect of outliers
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.min
     */
    /**
     * Padding of the max value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer.
     *
     * @product highcharts highstock highmaps
     */
    maxPadding: 0,
    /**
     * Color of the grid lines extending from the axis across the
     * gradient.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Grid lines demonstrated
     *
     * @type      {Highcharts.ColorType}
     * @product   highcharts highstock highmaps
     */
    gridLineColor: 'var(--highcharts-background-color)',
    /**
     * The width of the grid lines extending from the axis across the
     * gradient of a scalar color axis.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Grid lines demonstrated
     *
     * @product highcharts highstock highmaps
     */
    gridLineWidth: 1,
    /**
     * The interval of the tick marks in axis units. When `null`, the
     * tick interval is computed to approximately follow the
     * `tickPixelInterval`.
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.tickInterval
     */
    /**
     * If [tickInterval](#colorAxis.tickInterval) is `null` this option
     * sets the approximate pixel interval of the tick marks.
     *
     * @product highcharts highstock highmaps
     */
    tickPixelInterval: 72,
    /**
     * Whether to force the axis to start on a tick. Use this option
     * with the `maxPadding` option to control the axis start.
     *
     * @product highcharts highstock highmaps
     */
    startOnTick: true,
    /**
     * Whether to force the axis to end on a tick. Use this option with
     * the [maxPadding](#colorAxis.maxPadding) option to control the
     * axis end.
     *
     * @product highcharts highstock highmaps
     */
    endOnTick: true,
    /** @ignore */
    offset: 0,
    /**
     * The triangular marker on a scalar color axis that points to the
     * value of the hovered area. To disable the marker, set
     * `marker: null`.
     *
     * @sample {highmaps} maps/coloraxis/marker/
     *         Black marker
     *
     * @declare Highcharts.PointMarkerOptionsObject
     * @product highcharts highstock highmaps
     */
    marker: {
        /**
         * Animation for the marker as it moves between values. Set to `false`
         * to disable animation.
         *
         * @type    {boolean|Partial<Highcharts.AnimationOptionsObject>}
         * @product highcharts highstock highmaps
         * @default { duration: 50 }
         */
        animation: {
            /** @internal */
            duration: 50
        },
        /**
         * Maps to stroke-width because marker options are passed as crosshair.
         * @internal
         */
        width: 0.01,
        /**
         * The color of the marker.
         *
         * @type    {Highcharts.ColorType}
         * @product highcharts highstock highmaps
         */
        color: 'var(--highcharts-neutral-color-40)'
    },
    /**
     * The axis labels show the number for each tick.
     *
     * For more live examples on label options, see [xAxis.labels in the
     * Highcharts API.](/highcharts#xAxis.labels)
     *
     * @extends xAxis.labels
     * @product highcharts highstock highmaps
     */
    labels: {
        distance: 8,
        /**
         * How to handle overflowing labels on horizontal color axis. If set
         * to `"allow"`, it will not be aligned at all. By default it
         * `"justify"` labels inside the chart area. If there is room to
         * move it, it will be aligned to the edge, else it will be removed.
         *
         * @validvalue ["allow", "justify"]
         * @product    highcharts highstock highmaps
         */
        overflow: 'justify',
        rotation: 0
    },
    /**
     * The color to represent the minimum of the color axis. Unless
     * [dataClasses](#colorAxis.dataClasses) or
     * [stops](#colorAxis.stops) are set, the gradient starts at this
     * value.
     *
     * If dataClasses are set, the color is based on minColor and
     * maxColor unless a color is set for each data class, or the
     * [dataClassColor](#colorAxis.dataClassColor) is set.
     *
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor/
     *         Min and max colors on scalar (gradient) axis
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor-dataclasses/
     *         On data classes
     *
     * @type    {Highcharts.ColorType}
     * @product highcharts highstock highmaps
     */
    minColor: 'var(--highcharts-highlight-color-10)',
    /**
     * The color to represent the maximum of the color axis. Unless
     * [dataClasses](#colorAxis.dataClasses) or
     * [stops](#colorAxis.stops) are set, the gradient ends at this
     * value.
     *
     * If dataClasses are set, the color is based on minColor and
     * maxColor unless a color is set for each data class, or the
     * [dataClassColor](#colorAxis.dataClassColor) is set.
     *
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor/
     *         Min and max colors on scalar (gradient) axis
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor-dataclasses/
     *         On data classes
     *
     * @type    {Highcharts.ColorType}
     * @product highcharts highstock highmaps
     */
    maxColor: 'var(--highcharts-highlight-color-100)',
    /**
     * Color stops for the gradient of a scalar color axis. Use this in
     * cases where a linear gradient between a `minColor` and `maxColor`
     * is not sufficient. The stops is an array of tuples, where the
     * first item is a float between 0 and 1 assigning the relative
     * position in the gradient, and the second item is the color.
     *
     * @sample highcharts/coloraxis/coloraxis-stops/
     *         Color axis stops
     * @sample highcharts/coloraxis/color-key-with-stops/
     *         Color axis stops with custom colorKey
     * @sample {highmaps} maps/demo/heatmap/
     *         Heatmap with three color stops
     *
     * @type      {Array<Array<number,Highcharts.ColorString>>}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.stops
     */
    /**
     * The pixel length of the main tick marks on the color axis.
     */
    tickLength: 5,
    /**
     * The color axis title. Displayed alongside the color axis. When the
     * legend is vertical the title is rotated accordingly.
     *
     * @sample highcharts/coloraxis/coloraxis-title/
     * Color axis with title
     *
     * @type      {Highcharts.AxisTitleOptions}
     * @product   highcharts highstock highmaps
     */
    title: {
        margin: 5
    },
    /**
     * The type of interpolation to use for the color axis. Can be
     * `linear` or `logarithmic`.
     *
     * @sample highcharts/coloraxis/logarithmic-with-emulate-negative-values/
     *         Logarithmic color axis with extension to emulate negative
     *         values
     *
     * @type      {Highcharts.ColorAxisTypeValue}
     * @default   linear
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.type
     */
    /**
     * Whether to reverse the axis so that the highest number is closest
     * to the origin. Defaults to `false`.
     *
     * @type      {boolean}
     * @default   false
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.reversed
     */
    /**
     * @product   highcharts highstock highmaps
     * @excluding afterBreaks, pointBreak, pointInBreak
     * @apioption colorAxis.events
     */
    /**
     * Fires when the legend item belonging to the colorAxis is clicked.
     * One parameter, `event`, is passed to the function.
     *
     * **Note:** This option is deprecated in favor of
     * [legend.events.itemClick](#legend.events.itemClick).
     *
     * @deprecated 11.4.4
     * @type       {Function}
     * @product    highcharts highstock highmaps
     * @apioption  colorAxis.events.legendItemClick
     */
    /**
     * The width of the color axis. If it's a number, it is interpreted as
     * pixels.
     *
     * If it's a percentage string, it is interpreted as percentages of the
     * total plot width.
     *
     * @sample    highcharts/coloraxis/width-and-height
     *            Percentage width and pixel height for color axis
     *
     * @type      {number|string}
     * @since     11.3.0
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.width
     */
    /**
     * The height of the color axis. If it's a number, it is interpreted as
     * pixels.
     *
     * If it's a percentage string, it is interpreted as percentages of the
     * total plot height.
     *
     * @sample    highcharts/coloraxis/width-and-height
     *            Percentage width and pixel height for color axis
     *
     * @type      {number|string}
     * @since     11.3.0
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.height
     */
    /**
     * Whether to display the colorAxis in the legend.
     *
     * @sample highcharts/coloraxis/hidden-coloraxis-with-3d-chart/
     *         Hidden color axis with 3d chart
     *
     * @see [heatmap.showInLegend](#series.heatmap.showInLegend)
     *
     * @since   4.2.7
     * @product highcharts highstock highmaps
     */
    showInLegend: true
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var ColorAxisDefaults = (colorAxisDefaults);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es5/es-modules/Core/Axis/Color/ColorAxis.js
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





var defaultOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defaultOptions;

var Series = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).series;

defaultOptions.colorAxis = merge(defaultOptions.xAxis, ColorAxisDefaults);
/* *
 *
 *  Class
 *
 * */
/**
 * The ColorAxis object for inclusion in gradient legends.
 *
 * @class
 * @name Highcharts.ColorAxis
 * @augments Highcharts.Axis
 *
 * @param {Highcharts.Chart} chart
 * The related chart of the color axis.
 *
 * @param {Highcharts.ColorAxisOptions} userOptions
 * The color axis options for initialization.
 */
var ColorAxis = /** @class */ (function (_super) {
    __extends(ColorAxis, _super);
    /* *
     *
     *  Constructors
     *
     * */
    /** @internal */
    function ColorAxis(chart, userOptions) {
        var _this = _super.call(this,
            chart,
            userOptions) || this;
        /** @internal */
        _this.clippable = false;
        /** @internal */
        _this.coll = 'colorAxis';
        /** @internal */
        _this.visible = true;
        _this.init(chart, userOptions);
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    ColorAxis.compose = function (ChartClass, FxClass, LegendClass, SeriesClass) {
        Color_ColorAxisComposition.compose(ColorAxis, ChartClass, FxClass, LegendClass, SeriesClass);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the color axis.
     *
     * @function Highcharts.ColorAxis#init
     *
     * @param {Highcharts.Chart} chart
     * The related chart of the color axis.
     *
     * @param {Highcharts.ColorAxisOptions} userOptions
     * The color axis options for initialization.
     */
    ColorAxis.prototype.init = function (chart, userOptions) {
        var axis = this;
        var legend = chart.options.legend || {},
            horiz = userOptions.layout ?
                userOptions.layout !== 'vertical' :
                legend.layout !== 'vertical';
        axis.side = userOptions.side || horiz ? 2 : 1;
        axis.reversed = userOptions.reversed;
        axis.opposite = !horiz;
        _super.prototype.init.call(this, chart, userOptions, 'colorAxis');
        // `super.init` saves the extended user options, now replace it with the
        // originals
        this.userOptions = userOptions;
        if (isArray(chart.userOptions.colorAxis)) {
            chart.userOptions.colorAxis[this.index] = userOptions;
        }
        // Prepare data classes
        if (userOptions.dataClasses) {
            axis.initDataClasses(userOptions);
        }
        axis.initStops();
        // Override original axis properties
        axis.horiz = horiz;
        axis.zoomEnabled = false;
    };
    /**
     * Returns true if the series has points at all.
     *
     * @function Highcharts.ColorAxis#hasData
     *
     * @return {boolean}
     * True, if the series has points, otherwise false.
     */
    ColorAxis.prototype.hasData = function () {
        return !!(this.tickPositions || []).length;
    };
    /**
     * Override so that ticks are not added in data class axes (#6914)
     * @internal
     */
    ColorAxis.prototype.setTickPositions = function () {
        if (!this.dataClasses) {
            return _super.prototype.setTickPositions.call(this);
        }
    };
    /**
     * Extend the setOptions method to process title, extreme colors and
     * color stops.
     * @internal
     */
    ColorAxis.prototype.setOptions = function (userOptions) {
        var legend = this.chart.options.legend || {},
            theme = defaultOptions.colorAxis,
            layout = userOptions.layout || legend.layout || theme.layout,
            horiz = layout !== 'vertical';
        var sideSpecific = horiz ? { title: { rotation: 0 } } :
                {
                    title: {
                        rotation: 90,
                        margin: 10
                    }
                };
        var options = merge(sideSpecific,
            theme,
            userOptions, 
            // Forced options
            {
                showEmpty: false,
                visible: this.chart.options.legend.enabled &&
                    userOptions.visible !== false
            });
        _super.prototype.setOptions.call(this, options);
        this.options.crosshair = this.options.marker;
    };
    /** @internal */
    ColorAxis.prototype.setAxisSize = function () {
        var _a;
        var axis = this,
            chart = axis.chart,
            symbol = (_a = axis.legendItem) === null || _a === void 0 ? void 0 : _a.symbol;
        var _b = axis.getSize(),
            width = _b.width,
            height = _b.height;
        if (symbol) {
            this.left = +symbol.attr('x');
            this.top = +symbol.attr('y');
            this.width = width = +symbol.attr('width');
            this.height = height = +symbol.attr('height');
            this.right = chart.chartWidth - this.left - width;
            this.bottom = chart.chartHeight - this.top - height;
            this.pos = this.horiz ? this.left : this.top;
        }
        // Fake length for disabled legend to avoid tick issues
        // and such (#5205)
        this.len = (this.horiz ? width : height) ||
            ColorAxis.defaultLegendLength;
    };
    /**
     * Override the getOffset method to add the whole axis groups inside the
     * legend.
     * @internal
     */
    ColorAxis.prototype.getOffset = function () {
        var _a;
        var axis = this,
            chart = axis.chart,
            group = (_a = axis.legendItem) === null || _a === void 0 ? void 0 : _a.group,
            sideOffset = chart.axisOffset[axis.side],
            clipOffset = chart.clipOffset,
            legend = chart.legend;
        if (group) {
            // Hook for the getOffset method to add groups to this parent group
            axis.axisParent = group;
            // Call the base
            _super.prototype.getOffset.call(this);
            // Adds `maxLabelLength` needed for label padding corrections done
            // by `render()` and `getMargins()` (#15551).
            legend.allItems.forEach(function (item) {
                if (item instanceof ColorAxis) {
                    item.drawLegendSymbol(legend, item);
                }
            });
            legend.render();
            chart.getMargins(true);
            // First time only
            if (!axis.added) {
                axis.added = true;
            }
            axis.labelLeft = 0;
            axis.labelRight = axis.width;
            // Reset it to avoid color axis reserving space
            chart.axisOffset[axis.side] = sideOffset;
            chart.clipOffset = clipOffset;
        }
    };
    /**
     * Create the color gradient.
     * @internal
     */
    ColorAxis.prototype.setLegendColor = function () {
        var axis = this;
        var horiz = axis.horiz;
        var reversed = axis.reversed;
        var one = reversed ? 1 : 0;
        var zero = reversed ? 0 : 1;
        var grad = horiz ? [one, 0,
            zero, 0] : [0,
            zero, 0,
            one]; // #3190
            axis.legendColor = {
                linearGradient: {
                    x1: grad[0],
                    y1: grad[1],
                    x2: grad[2],
                    y2: grad[3]
                },
                stops: axis.stops
            };
    };
    /**
     * The color axis appears inside the legend and has its own legend symbol.
     * @internal
     */
    ColorAxis.prototype.drawLegendSymbol = function (legend, item) {
        var _a,
            _b,
            _c,
            _d,
            _e;
        var axis = this,
            legendItem = item.legendItem || {},
            padding = legend.padding,
            legendOptions = legend.options,
            labelOptions = axis.options.labels,
            itemDistance = pick(legendOptions.itemDistance, 10),
            horiz = axis.horiz,
            _f = axis.getSize(),
            width = _f.width,
            height = _f.height,
            labelPadding = pick(
            // @todo: This option is not documented, nor implemented when
            // vertical
            legendOptions.labelPadding,
            horiz ? 16 : 30);
        this.setLegendColor();
        var titleHeight = 0;
        var titleWidth = 0;
        if (((_a = axis.options.title) === null || _a === void 0 ? void 0 : _a.text) && !axis.axisTitle) {
            if (!axis.axisGroup) {
                axis.axisParent = legendItem.group;
                axis.createGroups();
            }
            // --- THE SVG TRANSFORM FIX ---
            // Provide mock dimensions so getTitlePosition returns valid numbers
            // on Pass 1. This ensures the rotation transform succeeds, allowing
            // getBBox() to read the true ROTATED dimensions!
            var tempLen = axis.len,
                tempTop = axis.top,
                tempLeft = axis.left,
                tempWidth = axis.width;
            axis.len = horiz ? width : height;
            axis.top = 0;
            axis.left = 0;
            axis.width = width;
            axis.addTitle(true);
            // Restore the original undefined values
            // (setAxisSize will overwrite them later)
            axis.len = tempLen;
            axis.top = tempTop;
            axis.left = tempLeft;
            axis.width = tempWidth;
            // -----------------------------
        }
        if (axis.axisTitle) {
            var titleBBox = axis.axisTitle.getBBox();
            titleHeight = titleBBox.height;
            titleWidth = titleBBox.width;
        }
        var titleOptions = axis.options.title || {};
        var titleMargin = axis.axisTitle ? ((_b = titleOptions.margin) !== null && _b !== void 0 ? _b : 0) : 0;
        var yShift = horiz ? (titleHeight + titleMargin) : 0;
        // Create the gradient
        if (!legendItem.symbol) {
            legendItem.symbol = this.chart.renderer.symbol('roundedRect')
                .attr({
                r: (_c = legendOptions.symbolRadius) !== null && _c !== void 0 ? _c : 3,
                zIndex: 1
            }).add(legendItem.group);
        }
        legendItem.symbol.attr({
            x: 0,
            y: (legend.baseline || 0) - 11 + yShift,
            width: width,
            height: height
        });
        // Set how much space this legend item takes up
        if (horiz) {
            legendItem.labelWidth = Math.max(width + padding + itemDistance, titleWidth || 0);
            legendItem.labelHeight = height + padding + labelPadding +
                titleHeight + titleMargin;
        }
        else {
            legendItem.labelWidth = width + padding +
                ((_e = (_d = labelOptions.x) !== null && _d !== void 0 ? _d : labelOptions.distance) !== null && _e !== void 0 ? _e : 0) +
                (this.maxLabelLength || 0) +
                (titleWidth || 0) + titleMargin;
            legendItem.labelHeight = Math.max(height + padding, titleHeight || 0);
        }
    };
    /**
     * Override the title position to place it above the color bar
     * for horizontal layouts, or outside the labels for vertical layouts.
     * @internal
     */
    ColorAxis.prototype.getTitlePosition = function (axisTitle) {
        var _a,
            _b,
            _c,
            _d;
        // Pass the argument down to the base class
        var pos = _super.prototype.getTitlePosition.call(this,
            axisTitle),
            titleMargin = (_b = (_a = this.options.title) === null || _a === void 0 ? void 0 : _a.margin) !== null && _b !== void 0 ? _b : 0;
        if (this.horiz && axisTitle) {
            pos.y = this.top - titleMargin;
        }
        else if (!this.horiz && axisTitle) {
            var labelOptions = this.options.labels || {},
                labelDistance = (_d = (_c = labelOptions.x) !== null && _c !== void 0 ? _c : labelOptions.distance) !== null && _d !== void 0 ? _d : 0;
            pos.x = this.left + this.width + labelDistance +
                (this.maxLabelLength || 0) + titleMargin;
        }
        return pos;
    };
    /**
     * Fool the legend.
     * @internal
     */
    ColorAxis.prototype.setState = function (state) {
        this.series.forEach(function (series) {
            series.setState(state);
        });
    };
    /** @internal */
    ColorAxis.prototype.setVisible = function () {
    };
    /** @internal */
    ColorAxis.prototype.getSeriesExtremes = function () {
        var axis = this;
        var series = axis.series;
        var colorValArray,
            colorKey,
            calculatedExtremes,
            cSeries,
            i = series.length;
        this.dataMin = Infinity;
        this.dataMax = -Infinity;
        while (i--) { // X, y, value, other
            cSeries = series[i];
            colorKey = cSeries.colorKey = pick(cSeries.options.colorKey, cSeries.colorKey, cSeries.pointValKey, cSeries.zoneAxis, 'y');
            calculatedExtremes = cSeries[colorKey + 'Min'] &&
                cSeries[colorKey + 'Max'];
            // Find the first column that has values
            for (var _i = 0, _a = [colorKey, 'value', 'y']; _i < _a.length; _i++) {
                var key = _a[_i];
                colorValArray = cSeries.getColumn(key);
                if (colorValArray.length) {
                    break;
                }
            }
            // If color key extremes are already calculated, use them.
            if (calculatedExtremes) {
                cSeries.minColorValue = cSeries[colorKey + 'Min'];
                cSeries.maxColorValue = cSeries[colorKey + 'Max'];
            }
            else {
                var cExtremes = Series.prototype.getExtremes.call(cSeries,
                    colorValArray);
                cSeries.minColorValue = cExtremes.dataMin;
                cSeries.maxColorValue = cExtremes.dataMax;
            }
            if (defined(cSeries.minColorValue) &&
                defined(cSeries.maxColorValue)) {
                this.dataMin =
                    Math.min(this.dataMin, cSeries.minColorValue);
                this.dataMax =
                    Math.max(this.dataMax, cSeries.maxColorValue);
            }
            if (!calculatedExtremes) {
                Series.prototype.applyExtremes.call(cSeries);
            }
        }
    };
    /**
     * Internal function to draw a crosshair.
     *
     * @function Highcharts.ColorAxis#drawCrosshair
     *
     * @param {Highcharts.PointerEventObject} [e]
     *        The event arguments from the modified pointer event, extended with
     *        `chartX` and `chartY`
     *
     * @param {Highcharts.Point} [point]
     *        The Point object if the crosshair snaps to points.
     *
     * @emits Highcharts.ColorAxis#event:afterDrawCrosshair
     * @emits Highcharts.ColorAxis#event:drawCrosshair
     */
    ColorAxis.prototype.drawCrosshair = function (e, point) {
        var axis = this,
            legendItem = axis.legendItem || {},
            plotX = point === null || point === void 0 ? void 0 : point.plotX,
            plotY = point === null || point === void 0 ? void 0 : point.plotY,
            axisPos = axis.pos,
            axisLen = axis.len;
        var crossPos;
        if (point) {
            crossPos = axis.toPixels(point.getNestedProperty(point.series.colorKey));
            if (crossPos < axisPos) {
                crossPos = axisPos - 2;
            }
            else if (crossPos > axisPos + axisLen) {
                crossPos = axisPos + axisLen + 2;
            }
            point.plotX = crossPos;
            point.plotY = axis.len - crossPos;
            _super.prototype.drawCrosshair.call(this, e, point);
            point.plotX = plotX;
            point.plotY = plotY;
            if (axis.cross &&
                !axis.cross.addedToColorAxis &&
                legendItem.group) {
                axis.cross
                    .addClass('highcharts-coloraxis-marker')
                    .add(legendItem.group);
                axis.cross.addedToColorAxis = true;
                if (!axis.chart.styledMode &&
                    typeof axis.crosshair === 'object') {
                    axis.cross.attr({
                        fill: axis.crosshair.color
                    });
                }
            }
        }
    };
    /** @internal */
    ColorAxis.prototype.getPlotLinePath = function (options) {
        var axis = this,
            left = axis.left,
            pos = options.translatedValue,
            top = axis.top;
        // Crosshairs only
        return isNumber(pos) ? // `pos` can be 0 (#3969)
            (axis.horiz ? [
                ['M', pos - 4, top - 6],
                ['L', pos + 4, top - 6],
                ['L', pos, top],
                ['Z']
            ] : [
                ['M', left, pos],
                ['L', left - 6, pos + 6],
                ['L', left - 6, pos - 6],
                ['Z']
            ]) :
            _super.prototype.getPlotLinePath.call(this, options);
    };
    /**
     * Updates a color axis instance with a new set of options. The options are
     * merged with the existing options, so only new or altered options need to
     * be specified.
     *
     * @function Highcharts.ColorAxis#update
     *
     * @param {Highcharts.ColorAxisOptions} newOptions
     * The new options that will be merged in with existing options on the color
     * axis.
     *
     * @param {boolean} [redraw]
     * Whether to redraw the chart after the color axis is altered. If doing
     * more operations on the chart, it is a good idea to set redraw to `false`
     * and call {@link Highcharts.Chart#redraw} after.
     */
    ColorAxis.prototype.update = function (newOptions, redraw) {
        var _a;
        var axis = this,
            chart = axis.chart,
            legend = chart.legend;
        this.series.forEach(function (series) {
            // Needed for Axis.update when choropleth colors change
            series.isDirtyData = true;
        });
        // When updating data classes, destroy old items and make sure new
        // ones are created (#3207)
        if (newOptions.dataClasses && legend.allItems || axis.dataClasses) {
            axis.destroyItems();
        }
        _super.prototype.update.call(this, newOptions, redraw);
        if ((_a = axis.legendItem) === null || _a === void 0 ? void 0 : _a.label) {
            axis.setLegendColor();
            legend.colorizeItem(this, true);
        }
    };
    /**
     * Destroy color axis legend items.
     * @internal
     */
    ColorAxis.prototype.destroyItems = function () {
        var axis = this,
            chart = axis.chart,
            legendItem = axis.legendItem || {};
        if (legendItem.label) {
            chart.legend.destroyItem(axis);
        }
        else if (legendItem.labels) {
            for (var _i = 0, _a = legendItem.labels; _i < _a.length; _i++) {
                var item = _a[_i];
                chart.legend.destroyItem(item);
            }
        }
        chart.isDirtyLegend = true;
    };
    /**
     * Removing the whole axis (#14283)
     * @internal
     */
    ColorAxis.prototype.destroy = function () {
        this.chart.isDirtyLegend = true;
        this.destroyItems();
        _super.prototype.destroy.apply(this, [].slice.call(arguments));
    };
    /**
     * Removes the color axis and the related legend item.
     *
     * @function Highcharts.ColorAxis#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart following the remove.
     */
    ColorAxis.prototype.remove = function (redraw) {
        this.destroyItems();
        _super.prototype.remove.call(this, redraw);
    };
    /**
     * Get the legend item symbols for data classes.
     * @internal
     */
    ColorAxis.prototype.getDataClassLegendSymbols = function () {
        var axis = this,
            chart = axis.chart,
            legendItems = (axis.legendItem &&
                axis.legendItem.labels ||
                []),
            legendOptions = chart.options.legend,
            valueDecimals = pick(legendOptions.valueDecimals, -1),
            valueSuffix = pick(legendOptions.valueSuffix, '');
        var getPointsInDataClass = function (i) {
                return axis.series.reduce(function (points,
            s) {
                    points.push.apply(points,
            s.points.filter(function (point) {
                        return point.dataClass === i;
                }));
                return points;
            }, []);
        };
        var name;
        if (!legendItems.length) {
            axis.dataClasses.forEach(function (dataClass, i) {
                var from = dataClass.from,
                    to = dataClass.to,
                    numberFormatter = chart.numberFormatter;
                var vis = true;
                // Assemble the default name. This can be overridden
                // by legend.options.labelFormatter
                name = '';
                if (typeof from === 'undefined') {
                    name = '< ';
                }
                else if (typeof to === 'undefined') {
                    name = '> ';
                }
                if (typeof from !== 'undefined') {
                    name += numberFormatter(from, valueDecimals) + valueSuffix;
                }
                if (typeof from !== 'undefined' && typeof to !== 'undefined') {
                    name += ' - ';
                }
                if (typeof to !== 'undefined') {
                    name += numberFormatter(to, valueDecimals) + valueSuffix;
                }
                // Add a mock object to the legend items
                legendItems.push(extend({
                    chart: chart,
                    name: name,
                    options: {},
                    drawLegendSymbol: Series.prototype.drawLegendSymbol,
                    visible: true,
                    isDataClass: true,
                    // Override setState to set either normal or inactive
                    // state to all points in this data class
                    setState: function (state) {
                        for (var _i = 0, _a = getPointsInDataClass(i); _i < _a.length; _i++) {
                            var point = _a[_i];
                            point.setState(state);
                        }
                    },
                    // Override setState to show or hide all points in this
                    // data class
                    setVisible: function () {
                        this.visible = vis = axis.visible = !vis;
                        var affectedSeries = [];
                        for (var _i = 0, _a = getPointsInDataClass(i); _i < _a.length; _i++) {
                            var point = _a[_i];
                            point.setVisible(vis);
                            point.hiddenInDataClass = !vis; // #20441
                            if (affectedSeries.indexOf(point.series) === -1) {
                                affectedSeries.push(point.series);
                            }
                        }
                        chart.legend.colorizeItem(this, vis);
                        affectedSeries.forEach(function (series) {
                            fireEvent(series, 'afterDataClassLegendClick');
                        });
                    }
                }, dataClass));
            });
        }
        return legendItems;
    };
    /**
     * Get size of color axis symbol.
     * @internal
     */
    ColorAxis.prototype.getSize = function () {
        var axis = this,
            chart = axis.chart,
            horiz = axis.horiz,
            _a = axis.options,
            colorAxisHeight = _a.height,
            colorAxisWidth = _a.width,
            legendOptions = chart.options.legend,
            width = pick(defined(colorAxisWidth) ?
                relativeLength(colorAxisWidth,
            chart.chartWidth) : void 0,
            legendOptions === null || legendOptions === void 0 ? void 0 : legendOptions.symbolWidth,
            horiz ? ColorAxis.defaultLegendLength : 12),
            height = pick(defined(colorAxisHeight) ?
                relativeLength(colorAxisHeight,
            chart.chartHeight) : void 0,
            legendOptions === null || legendOptions === void 0 ? void 0 : legendOptions.symbolHeight,
            horiz ? 12 : ColorAxis.defaultLegendLength);
        return {
            width: width,
            height: height
        };
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /** @internal */
    ColorAxis.defaultLegendLength = 200;
    /** @internal */
    ColorAxis.keepProps = [
        'legendItem'
    ];
    return ColorAxis;
}((highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default())));
extend(ColorAxis.prototype, Color_ColorAxisBase);
/* *
 *
 *  Registry
 *
 * */
// Properties to preserve after destroy, for Axis.update (#5881, #6025).
Array.prototype.push.apply((highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default()).keepProps, ColorAxis.keepProps);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Color_ColorAxis = (ColorAxis);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Color axis types
 *
 * @typedef {"linear"|"logarithmic"} Highcharts.ColorAxisTypeValue
 */
''; // Detach doclet above

;// ./code/es5/es-modules/masters/modules/coloraxis.src.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/color-axis
 * @requires highcharts
 *
 * ColorAxis module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Paweł Potaczek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */



var G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.ColorAxis = G.ColorAxis || Color_ColorAxis;
G.ColorAxis.compose(G.Chart, G.Fx, G.Legend, G.Series);
/* harmony default export */ var coloraxis_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es5/es-modules/Series/Contour/ContourPoint.js
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

var ContourPoint_extends = (undefined && undefined.__extends) || (function () {
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

var ScatterPoint = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.scatter.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var ContourPoint = /** @class */ (function (_super) {
    ContourPoint_extends(ContourPoint, _super);
    function ContourPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContourPoint;
}(ScatterPoint));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Contour_ContourPoint = (ContourPoint);

;// ./code/es5/es-modules/Series/Contour/ContourShader.js
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
 *  Shader Code
 *
 * */
/* harmony default export */ var ContourShader = ("\n\nstruct VertexInput {\n    @location(0) pos: vec3f\n}\n\nstruct VertexOutput {\n    @builtin(position) pos: vec4f,\n    @location(0) originalPos: vec3f,\n    @location(1) valExtremes: vec2f,\n}\n\n@group(0) @binding(0) var<uniform> uExtremes: vec4f;\n@group(0) @binding(1) var<uniform> uValueExtremes: vec2f;\n@group(0) @binding(9) var<uniform> uIsInverted: u32;\n\n@vertex\nfn vertexMain(input: VertexInput) -> VertexOutput {\n    var output: VertexOutput;\n    let pos = input.pos;\n\n    let xMin = uExtremes[0];\n    let xMax = uExtremes[1];\n    let yMin = uExtremes[2];\n    let yMax = uExtremes[3];\n\n    var posX: f32;\n    var posY: f32;\n    if (uIsInverted > 0u) {\n        posX = (1.0 - (pos.y - yMin) / (yMax - yMin)) * 2.0 - 1.0;\n        posY = (1.0 - (pos.x - xMin) / (xMax - xMin)) * 2.0 - 1.0;\n    } else {\n        posX = (pos.x - xMin) / (xMax - xMin) * 2.0 - 1.0;\n        posY = (pos.y - yMin) / (yMax - yMin) * 2.0 - 1.0;\n    }\n\n    output.valExtremes = uValueExtremes;\n    output.originalPos = pos.xyz;\n    output.pos = vec4f(posX, posY, 0, 1);\n\n    return output;\n}\n\n// ------------------------------------------------\n\nstruct FragmentInput {\n    @location(0) originalPos: vec3f,\n    @location(1) valExtremes: vec2f\n}\n\n@group(0) @binding(2) var<storage> uColorStops: array<vec4<f32>>;\n@group(0) @binding(3) var<uniform> uColorStopsCount: u32;\n@group(0) @binding(4) var<uniform> uContourInterval: f32;\n@group(0) @binding(5) var<uniform> uContourOffset: f32;\n@group(0) @binding(6) var<uniform> uSmoothColoring: u32;\n@group(0) @binding(7) var<uniform> uContourLineWidth: f32;\n@group(0) @binding(8) var<uniform> uContourLineColor: vec3f;\n\nfn getColor(value: f32) -> vec3<f32> {\n    let stopCount = uColorStopsCount;\n\n    if (stopCount == 0u) {\n        return vec3<f32>(1.0, 1.0, 1.0);\n    }\n\n    for (var i: u32 = 0u; i < stopCount - 1u; i = i + 1u) {\n        if (value < uColorStops[i + 1u].x) {\n            let t = (value - uColorStops[i].x) /\n                (uColorStops[i + 1u].x - uColorStops[i].x);\n\n            return mix(uColorStops[i].yzw, uColorStops[i + 1u].yzw, t);\n        }\n    }\n\n    return uColorStops[stopCount - 1u].yzw;\n}\n\n@fragment\nfn fragmentMain(input: FragmentInput) -> @location(0) vec4f {\n    let val = input.originalPos.z;\n\n    // Contour lines\n    let lineWidth: f32 = uContourLineWidth;\n\n    let val_dx: f32 = dpdx(val);\n    let val_dy: f32 = dpdy(val);\n    let gradient: f32 = length(vec2f(val_dx, val_dy));\n\n    let epsilon: f32 = max(uContourInterval * 1.0e-6, 1.0e-12);\n    let adjustedLineWidth: f32 = lineWidth * gradient + epsilon;\n\n    let adjustedVal: f32 = val - uContourOffset;\n    let valDiv: f32 = adjustedVal / uContourInterval;\n    let valMod: f32 = adjustedVal - uContourInterval * floor(valDiv);\n\n    let lineMask: f32 = smoothstep(0.0, adjustedLineWidth, valMod) * (\n        1.0 - smoothstep(\n            uContourInterval - adjustedLineWidth,\n            uContourInterval,\n            valMod\n        )\n    );\n\n    // Background color\n    let minHeight: f32 = input.valExtremes.x;\n    let maxHeight: f32 = input.valExtremes.y;\n\n    var bgColor: vec3f;\n    if (uSmoothColoring > 0u) {\n        bgColor = getColor((val - minHeight) / (maxHeight - minHeight));\n    } else {\n        let adjustedVal: f32 = val - uContourOffset;\n        let averageValInBand: f32 = floor(\n            adjustedVal / uContourInterval\n        ) * uContourInterval + uContourOffset + uContourInterval / 2.0;\n\n        bgColor = getColor(\n            (averageValInBand - minHeight) /\n            (maxHeight - minHeight)\n        );\n    }\n\n    // Mix\n    var pixelColor = bgColor;\n    if (lineWidth > 0.0) {\n        pixelColor = mix(uContourLineColor, pixelColor, lineMask);\n    }\n\n    return vec4(pixelColor, 1.0);\n}\n\n");

;// ./code/es5/es-modules/Series/Contour/ContourSeriesDefaults.js
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
 *  Definitions
 *
 * */
/**
 * A contour plot is a graphical representation of three-dimensional data
 *
 * @productdesc {highcharts}
 * Requires `modules/contour`.
 *
 * @sample highcharts/demo/contour-mountain/
 *
 * @extends      plotOptions.scatter
 * @excluding    animationLimit, cluster, connectEnds, connectNulls,
 *               cropThreshold, dashStyle, dragDrop, getExtremesFromAll,
 *               jitter, legendSymbolColor, linecap, pointInterval,
 *               pointIntervalUnit, pointRange, pointStart, shadow,
 *               softThreshold, stacking, step, threshold
 *
 * @product      highcharts highmaps
 * @optionparent plotOptions.contour
 */
var ContourSeriesDefaults = {
    /**
     * This must be set to `'value'` to make the colorAxis track with the contour
     * plot.
     */
    colorKey: 'value',
    clip: false,
    /**
     * Whether to use gradually transitioning color gradients between contour
     * levels. When disabled, each contour level is filled with a single flat
     * color.
     *
     * @type      {boolean}
     * @default   false
     * @apioption plotOptions.contour.smoothColoring
     */
    /**
     * This setting controls the visibility and size of contour lines. For now,
     * only '1' and '0' are valid options, effectively controlling the
     * visibility of the lines.
     *
     * @type      {number}
     * @default   1
     * @apioption plotOptions.contour.lineWidth
     */
    /**
     * The interval between contour lines. Determines the spacing of value
     * levels where lines are drawn on the plot. By default, the interval is
     * calculated using the value range.
     *
     * @type      {number}
     * @apioption plotOptions.contour.contourInterval
     */
    /**
     * The offset for contour line positioning. Shifts the contour levels so
     * lines and bands are drawn at `contourOffset + n * contourInterval`
     * instead of `n * contourInterval`.
     *
     * Example: with `contourInterval: 10` and `contourOffset: 5`, levels are
     * at 5, 15, 25, etc. Use this to align levels with a reference value
     * without changing the data. Non-positive values are treated as 0.
     *
     * @type      {number}
     * @default   0
     * @apioption plotOptions.contour.contourOffset
     */
    /**
     * @excluding radius, enabledThreshold, fillColor, lineColor
     */
    marker: {
        /**
         * A predefined shape or symbol for the marker. When undefined, the
         * symbol is pulled from options.symbols. Other possible values are
         * `'circle'`, `'square'`,`'diamond'`, `'triangle'`,
         * `'triangle-down'`, `'rect'`, `'ellipse'`, and `'cross'`.
         *
         * Additionally, the URL to a graphic can be given on this form:
         * `'url(graphic.png)'`. Note that for the image to be applied to
         * exported charts, its URL needs to be accessible by the export
         * server.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
         * used by its method name, as shown in the demo.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-symbol/
         *         Predefined, graphic and custom markers
         * @sample {highstock} highcharts/plotoptions/series-marker-symbol/
         *         Predefined, graphic and custom markers
         */
        symbol: 'cross',
        states: {
            /**
             * @excluding radius, radiusPlus
             */
            hover: {
                /**
                 * Color of the marker outline. Defaults to `'black'`.
                 *
                 * @type    {string}
                 *
                 * @default black
                 *
                 * @apioption plotOptions.contour.marker.states.hover.lineColor
                 */
                lineColor: 'black'
            }
        }
    },
    states: {
        hover: {
            /** @ignore-option */
            halo: void 0
        }
    },
    zIndex: 0
};
/**
 * A contour plot is a graphical representation of three-dimensional data
 * in two dimensions using contour lines or color-coded regions.
 *
 * @productdesc {highcharts}
 * Requires `modules/contour`.
 *
 * @sample highcharts/demo/contour-mountain/
 *         Simple contour
 *
 * @extends      series,plotOptions.contour
 * @excluding    cropThreshold, dataParser, dataURL, dragDrop ,pointRange,
 *               stack, allowPointSelect, boostBlending, boostThreshold, color,
 *               colorIndex, connectEnds, connectNulls, crisp, dashStyle,
 *               inactiveOtherPoints, jitter, linecap, negativeColor,
 *               pointInterval, pointStart, pointIntervalUnit, lineWidth,
 *               onPoint, pointPlacement, shadow, stacking, step, threshold,
 *               zoneAxis, zones, onPoint, grouping, groupPadding,
 *               groupZPadding
 *
 *
 * @product      highcharts highmaps
 * @apioption    series.contour
 */
/**
 * An array of data points for the series. For the `contour` series
 * type, points can be given in the following ways:
 *
 * 1.  An array of arrays with 3 or 2 values. In this case, the values
 * correspond to `x,y,value`. If the first value is a string, it is
 * applied as the name of the point, and the `x` value is inferred.
 * Unlike the heatmap, the contour series data points, do not have to appear
 * in any specific order.
 *
 *  ```js
 *     data: [
 *         [0, 9, 7],
 *         [1, 10, 4],
 *         [2, 6, 3]
 *     ]
 *  ```
 *
 * 2.  An array of objects with named values. The following snippet shows only a
 * few settings, see the complete options set below. If the total number of data
 * points exceeds the series' [turboThreshold](#series.contour.turboThreshold),
 * this option is not available.
 *
 *  ```js
 *     data: [{
 *         x: 1,
 *         y: 3,
 *         value: 10,
 *         name: "Point2"
 *     }, {
 *         x: 1,
 *         y: 7,
 *         value: 10,
 *         name: "Point1"
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
 * @basic
 * @type      {Array<Array<number>|*>}
 * @extends   series.line.data
 * @product   highcharts highmaps
 * @apioption series.contour.data
 */
/**
 * The value of the point, resulting in a color controlled by options
 * as set in the [colorAxis](#colorAxis) configuration.
 *
 * @type      {number}
 * @product   highcharts highmaps
 * @apioption series.contour.data.value
 */
/**
 * The x value of the point. For datetime axes,
 * the X value is the timestamp in milliseconds since 1970.
 *
 * @type      {number}
 * @product   highcharts highmaps
 * @apioption series.contour.data.x
 */
/**
 * The y value of the point.
 *
 * @type      {number}
 * @product   highcharts highmaps
 * @apioption series.contour.data.y
 */
''; // Keeps doclets above separate
/* harmony default export */ var Contour_ContourSeriesDefaults = (ContourSeriesDefaults);

;// ./code/es5/es-modules/Series/CrossSymbol.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Authors: Kamil Musiałowski, Markus Barstad
 *
 *  Shared cross marker symbol registration used by series modules.
 *  This keeps `cross` out of Core SVG symbols while allowing modules
 *  like PointAndFigure and Contour to compose it when needed.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



var composed = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).composed;
/* *
 *
 *  Composition
 *
 * */
var CrossSymbol;
(function (CrossSymbol) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Register the shared `cross` symbol on a renderer class.
     *
     * @private
     */
    function compose(SVGRendererClass) {
        if (pushUnique(composed, 'Series.CrossSymbol')) {
            SVGRendererClass.prototype.symbols.cross = cross;
        }
    }
    CrossSymbol.compose = compose;
    /**
     * Cross marker path.
     * @private
     */
    function cross(x, y, w, h) {
        return [
            ['M', x, y],
            ['L', x + w, y + h],
            ['M', x + w, y],
            ['L', x, y + h],
            ['Z']
        ];
    }
})(CrossSymbol || (CrossSymbol = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Series_CrossSymbol = (CrossSymbol);

;// ./code/es5/es-modules/Core/Delaunay.js
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

/* *
 *
 *  Class
 *
 * */
/**
 * Delaunay triangulation of a 2D point set.
 *
 * @internal
 */
var Delaunay = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Create a new Delaunay triangulation.
     *
     * @param {Float32Array|Float64Array} points
     * A 1D array of points in the format [x0, y0, x1, y1, ...].
     */
    function Delaunay(points) {
        var _this = this;
        this.points = points;
        var n = points.length >>> 1;
        // Floating-point error multiplier used by geometric predicates.
        this.epsilon = 4 * Number.EPSILON;
        var minX = Infinity,
            maxX = -Infinity,
            minY = Infinity,
            maxY = -Infinity;
        for (var i = 0; i < n; i++) {
            var px = points[i << 1],
                py = points[(i << 1) + 1];
            if (px < minX) {
                minX = px;
            }
            if (px > maxX) {
                maxX = px;
            }
            if (py < minY) {
                minY = py;
            }
            if (py > maxY) {
                maxY = py;
            }
        }
        var rangeX = maxX - minX || 1,
            rangeY = maxY - minY || 1;
        this.minX = minX;
        this.minY = minY;
        this.invScaleX = 1 / rangeX;
        this.invScaleY = 1 / rangeY;
        var ids = new Uint32Array(n),
            x = function (i) {
                return (points[i << 1] - minX) * _this.invScaleX;
        }, y = function (i) {
            return (points[(i << 1) + 1] - minY) * _this.invScaleY;
        };
        for (var i = 0; i < n; i++) {
            ids[i] = i;
        }
        ids.sort(function (a, b) { return (x(a) - x(b)) || (y(a) - y(b)); });
        var m = n ? 1 : 0,
            pa,
            pb;
        for (var i = 1; i < n; ++i) {
            pa = ids[m - 1],
                pb = ids[i];
            if (x(pa) !== x(pb) || y(pa) !== y(pb)) {
                ids[m++] = pb;
            }
        }
        this.ids = ids.subarray(0, m);
        this.triangles = this.triangulate();
    }
    /* *
     *
     *  Methods
     *
     * */
    /**
     * Triangulate the points.
     *
     * @return {Uint32Array}
     * A 1D array of triangle vertex indices.
     */
    Delaunay.prototype.triangulate = function () {
        var _this = this;
        var count = this.ids.length;
        if (count < 3) {
            return new Uint32Array(0);
        }
        var points = this.points,
            _a = this,
            minX = _a.minX,
            minY = _a.minY,
            invScaleX = _a.invScaleX,
            invScaleY = _a.invScaleY,
            x = function (i) {
                return (points[i << 1] - minX) * invScaleX;
        }, y = function (i) {
            return (points[(i << 1) + 1] - minY) * invScaleY;
        };
        // Determine if three points are in counter-clockwise order.
        var orient = function (a,
            b,
            c) {
                var ax = x(a),
            ay = y(a),
            bx = x(b) - ax,
            by = y(b) - ay,
            cx = x(c) - ax,
            cy = y(c) - ay,
            det = bx * cy - by * cx,
            err = (Math.abs(bx * cy) + Math.abs(by * cx)) * _this.epsilon;
            return det > err;
        };
        // Determine if a point (d) is inside the circumcircle of a triangle
        // (a, b, c).
        var inCircle = function (a,
            b,
            c,
            d) {
                if (a === d || b === d || c === d) {
                    // Skip if d is one of the triangle vertices.
                    return false;
            }
            var ax = x(a) - x(d),
                ay = y(a) - y(d),
                bx = x(b) - x(d),
                by = y(b) - y(d),
                cx = x(c) - x(d),
                cy = y(c) - y(d),
                aa = ax * ax + ay * ay,
                bb = bx * bx + by * by,
                cc = cx * cx + cy * cy,
                term1 = by * cc - bb * cy,
                term2 = bx * cc - bb * cx,
                term3 = bx * cy - by * cx,
                det = ax * term1 - ay * term2 + aa * term3,
                err = (Math.abs(ax * term1) +
                    Math.abs(ay * term2) +
                    Math.abs(aa * term3)) * _this.epsilon;
            return det > err;
        };
        // Data structures for the quad-edge data structure.
        var cap = Math.max(32, ((8 * count + 7) & ~3)), // Capacity (% 4 = 0)
            on = new Int32Array(cap), // Next edge in same face
            rt = new Int32Array(cap), // Rotation of edge (90 degrees)
            vtx = new Uint32Array(cap), // Origin vertex of edge
            seen = new Uint8Array(cap), // Visited flag for edge traversal
            top = 0; // Next free edge id (% 4 = 0)
            // Ensure the data structures have enough capacity for the required
            // number of edges.
            var ensure = function (need) {
                // If the capacity is sufficient, return.
                if (need <= cap) {
                    return;
            }
            // Double capacity until sufficient.
            var ncap = cap << 1;
            while (ncap < need) {
                ncap <<= 1;
            }
            var on2 = new Int32Array(ncap),
                rt2 = new Int32Array(ncap),
                v2 = new Uint32Array(ncap),
                s2 = new Uint8Array(ncap);
            on2.set(on);
            rt2.set(rt);
            v2.set(vtx);
            s2.set(seen);
            on = on2;
            rt = rt2;
            vtx = v2;
            seen = s2;
            cap = ncap;
        };
        var sym = function (e) { return rt[rt[e]]; },
            rotSym = function (e) { return sym(rt[e]); },
            dest = function (e) { return vtx[sym(e)]; },
            lnext = function (e) { return rt[on[rotSym(e)]]; },
            oprev = function (e) { return rt[on[rt[e]]]; },
            rprev = function (e) { return on[sym(e)]; },
            leftOf = function (p,
            e) {
                return orient(p,
            vtx[e],
            dest(e));
        }, rightOf = function (p, e) {
            return orient(p, dest(e), vtx[e]);
        }, admissible = function (e, base) {
            return rightOf(dest(e), base);
        };
        // Create a new edge between two vertices.
        var makeEdge = function (a,
            b) {
                ensure(top + 4);
            var e0 = top,
                e1 = top + 1,
                e2 = top + 2,
                e3 = top + 3;
            top += 4;
            // Rot cycle
            rt[e0] = e1;
            rt[e1] = e2;
            rt[e2] = e3;
            rt[e3] = e0;
            // Onext initial
            on[e0] = e0;
            on[e2] = e2;
            on[e1] = e3;
            on[e3] = e1;
            // Origins
            vtx[e0] = a;
            vtx[e2] = b;
            vtx[e1] = 0xffffffff;
            vtx[e3] = 0xffffffff;
            return e0;
        };
        // Splice two edges.
        var splice = function (a,
            b) {
                var alpha = rt[on[a]];
            var beta = rt[on[b]];
            var t2 = on[a];
            var t3 = on[beta];
            var t4 = on[alpha];
            on[a] = on[b];
            on[b] = t2;
            on[alpha] = t3;
            on[beta] = t4;
        };
        // Connect two edges.
        var connect = function (a,
            b) {
                var q = makeEdge(dest(a),
            vtx[b]);
            splice(q, lnext(a));
            splice(sym(q), b);
            return q;
        };
        // Removes an edge from both sides.
        var drop = function (e) {
                splice(e,
            oprev(e));
            var es = sym(e);
            splice(es, oprev(es));
        };
        var A = this.ids;
        // Recursively triangulate a range [lo, hi) of points. Returns the
        // two endpoints [left, right] of the lower common tangent.
        var solve = function (lo,
            hi) {
                var len = hi - lo;
            // If there are only two points, create a single edge.
            if (len === 2) {
                var a = makeEdge(A[lo],
                    A[lo + 1]);
                return [a, sym(a)];
            }
            // If there are three points, create two edges and connect them.
            if (len === 3) {
                var a = makeEdge(A[lo],
                    A[lo + 1]),
                    b = makeEdge(A[lo + 1],
                    A[lo + 2]);
                splice(sym(a), b);
                var p0 = A[lo],
                    p1 = A[lo + 1],
                    p2 = A[lo + 2];
                if (orient(p0, p1, p2)) {
                    connect(b, a);
                    return [a, sym(b)];
                }
                if (orient(p0, p2, p1)) {
                    var c = connect(b,
                        a);
                    return [sym(c), c];
                }
                return [a, sym(b)];
            }
            // Find the midpoint of the range.
            var mid = lo + ((len + 1) >>> 1);
            var L = solve(lo,
                mid);
            var R = solve(mid,
                hi);
            var ldo = L[0],
                ldi = L[1],
                rdi = R[0],
                rdo = R[1];
            // Lower common tangent
            for (;;) {
                if (leftOf(vtx[rdi], ldi)) {
                    ldi = lnext(ldi);
                }
                else if (rightOf(vtx[ldi], rdi)) {
                    rdi = rprev(rdi);
                }
                else {
                    break;
                }
            }
            var base = connect(sym(rdi),
                ldi);
            if (vtx[ldi] === vtx[ldo]) {
                ldo = sym(base);
            }
            if (vtx[rdi] === vtx[rdo]) {
                rdo = base;
            }
            // Merge loop - removing bad edges (inCircle) and adding new edges.
            for (;;) {
                // Left candidate
                var lc = on[sym(base)];
                if (admissible(lc, base)) {
                    while (inCircle(dest(base), vtx[base], dest(lc), dest(on[lc]))) {
                        var t_1 = on[lc];
                        drop(lc);
                        lc = t_1;
                    }
                }
                // Right candidate
                var rc = oprev(base);
                if (admissible(rc, base)) {
                    while (inCircle(dest(base), vtx[base], dest(rc), dest(oprev(rc)))) {
                        var t_2 = oprev(rc);
                        drop(rc);
                        rc = t_2;
                    }
                }
                if (!admissible(lc, base) && !admissible(rc, base)) {
                    break;
                }
                if (!admissible(lc, base) || (admissible(rc, base) &&
                    inCircle(dest(lc), vtx[lc], vtx[rc], dest(rc)))) {
                    base = connect(rc, sym(base));
                }
                else {
                    base = connect(sym(base), sym(lc));
                }
            }
            return [ldo, rdo];
        };
        var e0 = solve(0,
            count)[0];
        while (leftOf(dest(on[e0]), e0)) {
            e0 = on[e0];
        }
        var Q = [e0];
        var qi = 0;
        {
            var c = e0;
            do {
                Q.push(sym(c));
                seen[c] = 1;
                c = lnext(c);
            } while (c !== e0);
        }
        var faces = [];
        var cur,
            t;
        while (qi < Q.length) {
            var e = Q[qi++];
            if (seen[e]) {
                continue;
            }
            cur = e;
            do {
                faces.push(vtx[cur]);
                t = sym(cur);
                if (!seen[t]) {
                    Q.push(t);
                }
                seen[cur] = 1;
                cur = lnext(cur);
            } while (cur !== e);
        }
        return new Uint32Array(faces);
    };
    return Delaunay;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Core_Delaunay = (Delaunay);

;// ./code/es5/es-modules/Series/Contour/ContourSeries.js
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
/// <reference types="@webgpu/types" />

var ContourSeries_extends = (undefined && undefined.__extends) || (function () {
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
var ContourSeries_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};









var ScatterSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.scatter;
/* *
 *
 *  Class
 *
 * */
var ContourSeries = /** @class */ (function (_super) {
    ContourSeries_extends(ContourSeries, _super);
    function ContourSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContourSeries.compose = function (SVGRendererClass) {
        Series_CrossSymbol.compose(SVGRendererClass);
    };
    /* Uniforms:
     * - extremesUniform,
     * - valueExtremesUniform,
     * - contourInterval,
     * - contourOffset,
     * - smoothColoring,
     * - lineWidth,
     * - contourLineColor
     * - colorAxisStops
     * - colorAxisStopsCount
     * - isInverted
     */
    /* *
     *
     * Methods
     *
     * */
    ContourSeries.prototype.getContourData = function () {
        var points = this.points,
            len = points.length,
            points3d = new Float32Array(len * 3),
            points2d = new Float64Array(len * 2);
        for (var i = 0; i < len; i++) {
            var _a = points[i],
                x = _a.x,
                _b = _a.y,
                y = _b === void 0 ? 0 : _b,
                value = _a.value,
                index2d = i * 2,
                index3d = i * 3;
            points2d[index2d] = x;
            points2d[index2d + 1] = y;
            points3d[index3d] = x;
            points3d[index3d + 1] = y;
            points3d[index3d + 2] = value !== null && value !== void 0 ? value : 0;
        }
        return [new Core_Delaunay(points2d).triangles, points3d];
    };
    ContourSeries.prototype.update = function (options, redraw) {
        options = diffObjects(options, this.userOptions);
        var uniformOptions = [
                'smoothColoring',
                'contourInterval',
                'contourOffset',
                'lineColor',
                'lineWidth'
            ];
        var isUniformOption = function (key) { return (uniformOptions.includes(key)); };
        var hasNonUniformOptions = Object.keys(options).some(function (key) { return !isUniformOption(key); });
        // Only fetch plotOptions if all options are uniform related.
        var allOptions = (hasNonUniformOptions ?
                void 0 :
                this.setOptions(merge(this.userOptions,
            options))),
            hasNonUniformPlotOptions = allOptions ?
                Object.keys(diffObjects(allOptions,
            this.options)).some(function (key) { return !isUniformOption(key); }) :
                false;
        if (hasNonUniformOptions || hasNonUniformPlotOptions) {
            _super.prototype.update.call(this, options, redraw);
        }
        else {
            this.options = allOptions;
            // If only uniform-related options changed, avoid full series
            // reconstruction and update uniforms only.
            this.setUniforms();
        }
    };
    ContourSeries.prototype.drawPoints = function () {
        var _a;
        var group = this.group;
        if (!group) {
            return;
        }
        if (!this.canvas) {
            this.foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            group.element.appendChild(this.foreignObject);
            this.canvas = document.createElement('canvas');
            this.foreignObject.appendChild(this.canvas);
        }
        var _b = this,
            canvas = _b.canvas,
            xAxis = _b.xAxis,
            yAxis = _b.yAxis,
            foreignObject = this.foreignObject,
            oldWidth = foreignObject.width.baseVal.value,
            oldHeight = foreignObject.height.baseVal.value,
            dpr = window.devicePixelRatio;
        var width = xAxis.len,
            height = yAxis.len;
        if (this.chart.inverted) {
            _a = [height, width], width = _a[0], height = _a[1];
        }
        if (oldWidth !== width) {
            foreignObject.setAttribute('width', width);
            canvas.width = width * dpr;
            canvas.style.width = width + 'px';
        }
        if (oldHeight !== height) {
            foreignObject.setAttribute('height', height);
            canvas.height = height * dpr;
            canvas.style.height = height + 'px';
        }
        if (this.renderFrame) {
            this.renderFrame();
        }
        else {
            /* eslint-disable @typescript-eslint/no-floating-promises */
            this.run();
        }
    };
    ContourSeries.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var series,
                chart,
                renderer,
                canvas,
                gpu,
                context,
                device_1,
                _a,
                _b,
                canvasFormat,
                _c,
                indices_1,
                vertices,
                buffers,
                vertexBuffer_1,
                indexBuffer_1,
                extremesUniformBuffer,
                valueExtremesUniformBuffer,
                contourIntervalUniformBuffer,
                contourOffsetUniformBuffer,
                smoothColoringUniformBuffer,
                lineWidthUniformBuffer,
                contourLineColorBuffer,
                colAxisStopsCountUniformBuffer,
                colorAxisStopsUniformBuffer,
                isInvertedUniformBuffer,
                vertexBufferLayout,
                shaderModule,
                pipeline_1,
                bindGroup_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        series = this, chart = series.chart, renderer = chart.renderer, canvas = series.canvas, gpu = navigator.gpu, context = series.context = canvas.getContext('webgpu');
                        if (!gpu || !context) {
                            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)(37, false, chart);
                            return [2 /*return*/];
                        }
                        renderer.asyncCounter += 1;
                        if (!context) return [3 /*break*/, 5];
                        device_1 = this.device;
                        if (!!this.adapter) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, gpu.requestAdapter()];
                    case 1:
                        _a.adapter = _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!(!device_1 && this.adapter)) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.adapter.requestDevice()];
                    case 3:
                        device_1 = _b.device = _d.sent();
                        _d.label = 4;
                    case 4:
                        canvasFormat = gpu.getPreferredCanvasFormat();
                        if (device_1) {
                            context.configure({
                                device: device_1,
                                format: canvasFormat,
                                colorSpace: 'display-p3',
                                alphaMode: 'premultiplied',
                                usage: (GPUTextureUsage.RENDER_ATTACHMENT |
                                    GPUTextureUsage.COPY_SRC)
                            });
                            _c = this.getContourData(), indices_1 = _c[0], vertices = _c[1];
                            buffers = this.buffers = {
                                vertex: device_1.createBuffer({
                                    size: vertices.byteLength,
                                    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
                                }),
                                index: device_1.createBuffer({
                                    size: indices_1.byteLength,
                                    usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
                                }),
                                extremesUniform: device_1.createBuffer({
                                    size: Float32Array.BYTES_PER_ELEMENT * 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                valueExtremesUniform: device_1.createBuffer({
                                    size: Float32Array.BYTES_PER_ELEMENT * 2,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                contourIntervalUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                contourOffsetUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                smoothColoringUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                lineWidthUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                contourLineColor: device_1.createBuffer({
                                    size: 12,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                colorAxisStopsCountUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                colorAxisStopsUniform: device_1.createBuffer({
                                    size: Float32Array.BYTES_PER_ELEMENT * 64,
                                    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
                                }),
                                isInvertedUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                })
                            };
                            vertexBuffer_1 = buffers.vertex, indexBuffer_1 = buffers.index, extremesUniformBuffer = buffers.extremesUniform, valueExtremesUniformBuffer = buffers.valueExtremesUniform, contourIntervalUniformBuffer = buffers.contourIntervalUniform, contourOffsetUniformBuffer = buffers.contourOffsetUniform, smoothColoringUniformBuffer = buffers.smoothColoringUniform, lineWidthUniformBuffer = buffers.lineWidthUniform, contourLineColorBuffer = buffers.contourLineColor, colAxisStopsCountUniformBuffer = buffers.colorAxisStopsCountUniform, colorAxisStopsUniformBuffer = buffers.colorAxisStopsUniform, isInvertedUniformBuffer = buffers.isInvertedUniform;
                            device_1.queue.writeBuffer(vertexBuffer_1, 0, vertices);
                            device_1.queue.writeBuffer(indexBuffer_1, 0, indices_1);
                            vertexBufferLayout = {
                                arrayStride: 12,
                                attributes: [{
                                        format: 'float32x3',
                                        offset: 0,
                                        shaderLocation: 0
                                    }]
                            };
                            shaderModule = device_1.createShaderModule({
                                code: ContourShader
                            });
                            pipeline_1 = device_1.createRenderPipeline({
                                layout: 'auto',
                                vertex: {
                                    module: shaderModule,
                                    entryPoint: 'vertexMain',
                                    buffers: [vertexBufferLayout]
                                },
                                fragment: {
                                    module: shaderModule,
                                    entryPoint: 'fragmentMain',
                                    targets: [{
                                            format: canvasFormat
                                        }]
                                },
                                primitive: {
                                    topology: 'triangle-list'
                                }
                            });
                            bindGroup_1 = device_1.createBindGroup({
                                layout: pipeline_1.getBindGroupLayout(0),
                                entries: [{
                                        binding: 0,
                                        resource: {
                                            buffer: extremesUniformBuffer,
                                            label: 'extremesUniformBuffer'
                                        }
                                    }, {
                                        binding: 1,
                                        resource: {
                                            buffer: valueExtremesUniformBuffer,
                                            label: 'valueExtremesUniformBuffer'
                                        }
                                    }, {
                                        binding: 2,
                                        resource: {
                                            buffer: colorAxisStopsUniformBuffer,
                                            label: 'colorAxisStopsBuffer'
                                        }
                                    }, {
                                        binding: 3,
                                        resource: {
                                            buffer: colAxisStopsCountUniformBuffer,
                                            label: 'colorAxisStopsCountBuffer'
                                        }
                                    }, {
                                        binding: 4,
                                        resource: {
                                            buffer: contourIntervalUniformBuffer,
                                            label: 'contourIntervalUniformBuffer'
                                        }
                                    }, {
                                        binding: 5,
                                        resource: {
                                            buffer: contourOffsetUniformBuffer,
                                            label: 'contourOffsetUniformBuffer'
                                        }
                                    }, {
                                        binding: 6,
                                        resource: {
                                            buffer: smoothColoringUniformBuffer,
                                            label: 'smoothColoringUniformBuffer'
                                        }
                                    }, {
                                        binding: 7,
                                        resource: {
                                            buffer: lineWidthUniformBuffer,
                                            label: 'lineWidthUniformBuffer'
                                        }
                                    }, {
                                        binding: 8,
                                        resource: {
                                            buffer: contourLineColorBuffer,
                                            label: 'contourLineColorBuffer'
                                        }
                                    }, {
                                        binding: 9,
                                        resource: {
                                            buffer: isInvertedUniformBuffer,
                                            label: 'isInvertedUniformBuffer'
                                        }
                                    }]
                            });
                            this.renderFrame = function () {
                                this.setUniforms(false);
                                var encoder = device_1.createCommandEncoder(),
                                    currentTexture = context.getCurrentTexture(),
                                    pass = encoder.beginRenderPass({
                                        colorAttachments: [{
                                                view: currentTexture.createView(),
                                                loadOp: 'clear',
                                                clearValue: [0, 0, 0, 0],
                                                storeOp: 'store'
                                            }]
                                    });
                                pass.setPipeline(pipeline_1);
                                pass.setVertexBuffer(0, vertexBuffer_1);
                                pass.setIndexBuffer(indexBuffer_1, 'uint32');
                                pass.setBindGroup(0, bindGroup_1);
                                pass.drawIndexed(indices_1.length);
                                pass.end();
                                device_1.queue.submit([encoder.finish()]);
                            };
                            this.renderFrame();
                        }
                        _d.label = 5;
                    case 5:
                        renderer.asyncCounter--;
                        if (!renderer.asyncCounter && chart && !chart.hasLoaded) {
                            chart.onload();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContourSeries.prototype.destroy = function () {
        var _a,
            _b;
        // Remove the foreign object. The canvas will be removed with it.
        // For some reason, `series.update` calls `series.destroy` even if
        // update does not trigger a rerender. This causes the canvas to be
        // removed here (unnecessarily) and that causes the flickering effect
        // when updating.
        (_b = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        _super.prototype.destroy.call(this);
    };
    ContourSeries.prototype.drawGraph = function () {
        // Do nothing
    };
    /**
     * Set all the updateable uniforms.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniforms.
     * Defaults to `true`.
     */
    ContourSeries.prototype.setUniforms = function (renderFrame) {
        if (renderFrame === void 0) { renderFrame = true; }
        this.setFrameExtremesUniform(false);
        this.setValueExtremesUniform(false);
        this.setColorAxisStopsUniforms(false);
        this.setContourIntervalUniform(false);
        this.setContourOffsetUniform(false);
        this.setSmoothColoringUniform(false);
        this.setLineWidthUniform(false);
        this.setContourLineColorUniform(false);
        this.setIsInvertedUniform(renderFrame);
    };
    /**
     * Set the contour interval uniform according to the series options.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniform.
     * Defaults to `true`.
     */
    ContourSeries.prototype.setContourIntervalUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.contourIntervalUniform)) {
            this.device.queue.writeBuffer(this.buffers.contourIntervalUniform, 0, new Float32Array([this.getContourInterval()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the contour offset uniform according to the series options.
     */
    ContourSeries.prototype.setContourOffsetUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.contourOffsetUniform)) {
            this.device.queue.writeBuffer(this.buffers.contourOffsetUniform, 0, new Float32Array([this.getContourOffset()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the smooth coloring uniform according to the series options.
     */
    ContourSeries.prototype.setSmoothColoringUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.smoothColoringUniform)) {
            this.device.queue.writeBuffer(this.buffers.smoothColoringUniform, 0, new Float32Array([this.getSmoothColoring()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the line width uniform according to the series options.
     */
    ContourSeries.prototype.setLineWidthUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.lineWidthUniform)) {
            this.device.queue.writeBuffer(this.buffers.lineWidthUniform, 0, new Float32Array([this.getLineWidth()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the contour line color uniform according to the series options.
     */
    ContourSeries.prototype.setContourLineColorUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.contourLineColor)) {
            this.device.queue.writeBuffer(this.buffers.contourLineColor, 0, new Float32Array(this.getContourLineColor()));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the frame extremes uniform according to the series options.
     */
    ContourSeries.prototype.setFrameExtremesUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.extremesUniform)) {
            this.device.queue.writeBuffer(this.buffers.extremesUniform, 0, new Float32Array(this.getFrameExtremes()));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the value extremes uniform according to the series data.
     */
    ContourSeries.prototype.setValueExtremesUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.valueExtremesUniform)) {
            this.device.queue.writeBuffer(this.buffers.valueExtremesUniform, 0, new Float32Array(this.getValueAxisExtremes()));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the color axis stops uniforms according to the color axis options.
     */
    ContourSeries.prototype.setColorAxisStopsUniforms = function (renderFrame) {
        var _a,
            _b,
            _c;
        if (renderFrame === void 0) { renderFrame = true; }
        var stopsBuffer = (_a = this.buffers) === null || _a === void 0 ? void 0 : _a.colorAxisStopsUniform;
        var countBuffer = (_b = this.buffers) === null || _b === void 0 ? void 0 : _b.colorAxisStopsCountUniform;
        if (this.device && stopsBuffer && countBuffer) {
            var _d = this.getColorAxisStopsData(),
                array = _d.array,
                length_1 = _d.length;
            // Write the stops to the buffer
            this.device.queue.writeBuffer(stopsBuffer, 0, array);
            // Write the count to the buffer
            this.device.queue.writeBuffer(countBuffer, 0, new Uint32Array([length_1]));
            if (renderFrame) {
                (_c = this.renderFrame) === null || _c === void 0 ? void 0 : _c.call(this);
            }
        }
    };
    /**
     * Set the is inverted uniform according to the series options.
     */
    ContourSeries.prototype.setIsInvertedUniform = function (renderFrame) {
        var _a,
            _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.isInvertedUniform)) {
            this.device.queue.writeBuffer(this.buffers.isInvertedUniform, 0, new Uint32Array([this.chart.inverted ? 1 : 0]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Returns the contour interval from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getContourInterval = function () {
        var _this = this;
        var _a;
        var interval = (_a = this.options.contourInterval) !== null && _a !== void 0 ? _a : (function () {
                var _a = _this.getValueAxisExtremes(),
            min = _a[0],
            max = _a[1],
            range = max - min;
            return normalizeTickInterval(range / 10);
        })();
        if (isNaN(interval) || interval <= 0) {
            return -1;
        }
        return interval;
    };
    /**
     * Returns the contour offset from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getContourOffset = function () {
        var _a;
        var offset = (_a = this.options.contourOffset) !== null && _a !== void 0 ? _a : 0;
        if (isNaN(offset) || offset <= 0) {
            return 0;
        }
        return offset;
    };
    /**
     * Returns the smooth coloring from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getSmoothColoring = function () {
        return this.options.smoothColoring ? 1 : 0;
    };
    /**
     * Returns the lineWidth from the series options, which controls the
     * visibility of contour lines, in format of the WebGPU uniform.
     */
    ContourSeries.prototype.getLineWidth = function () {
        var _a;
        return (_a = this.userOptions.lineWidth) !== null && _a !== void 0 ? _a : 1;
    };
    /**
     * Returns the contour line color from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getContourLineColor = function () {
        var _a = this.options.lineColor,
            lineColor = _a === void 0 ? '#000000' : _a;
        return ContourSeries.rgbaAsFrac(new (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default())(lineColor).rgba);
    };
    /**
     * Returns the extremes of the x and y axes in format of the WebGPU uniform.
     */
    ContourSeries.prototype.getFrameExtremes = function () {
        var _a = this,
            xAxis = _a.xAxis,
            yAxis = _a.yAxis;
        return [
            xAxis.toValue(0, true),
            xAxis.toValue(xAxis.len, true),
            yAxis.toValue(yAxis.len, true),
            yAxis.toValue(0, true)
        ];
    };
    /**
     * Returns the extremes of the data in format of the WebGPU uniform.
     */
    ContourSeries.prototype.getValueAxisExtremes = function () {
        var _a,
            _b;
        var series = this;
        var min = series.valueMin;
        if (isNaN(min || NaN)) {
            min = (_a = series.colorAxis) === null || _a === void 0 ? void 0 : _a.min;
            if (isNaN(min || NaN)) {
                min = Math.min.apply(Math, series.points.map(function (point) { return point.value || 0; }));
            }
        }
        var max = series.valueMax;
        if (isNaN(max || NaN)) {
            max = (_b = series.colorAxis) === null || _b === void 0 ? void 0 : _b.max;
            if (isNaN(max || NaN)) {
                max = Math.max.apply(Math, series.points.map(function (point) { return point.value || 0; }));
            }
        }
        return [min || 0, max || 0];
    };
    ContourSeries.prototype.getColorAxisStopsData = function () {
        var _a,
            _b;
        var colorAxisStops = (_a = this.colorAxis) === null || _a === void 0 ? void 0 : _a.stops;
        var flattenedData;
        if (colorAxisStops) {
            flattenedData = [];
            for (var _i = 0, colorAxisStops_1 = colorAxisStops; _i < colorAxisStops_1.length; _i++) {
                var stop_1 = colorAxisStops_1[_i];
                var rgba = (_b = stop_1 === null || stop_1 === void 0 ? void 0 : stop_1.color) === null || _b === void 0 ? void 0 : _b.rgba;
                if (rgba) {
                    flattenedData.push.apply(flattenedData, ContourSeries_spreadArray([stop_1[0]], ContourSeries.rgbaAsFrac(rgba), false));
                }
            }
        }
        return {
            array: new Float32Array(flattenedData !== null && flattenedData !== void 0 ? flattenedData : [
                0, 0, 0, 0,
                1, 1, 1, 1
            ]),
            length: (colorAxisStops === null || colorAxisStops === void 0 ? void 0 : colorAxisStops.length) || 2
        };
    };
    /* *
     *
     * Static Methods
     *
     * */
    /**
     * Returns the RGBA color as a fraction of the 255 range.
     */
    ContourSeries.rgbaAsFrac = function (rgba) {
        return [
            rgba[0],
            rgba[1],
            rgba[2]
        ].map(function (val) { return val / 255; });
    };
    /* *
     *
     * Static Properties
     *
     * */
    ContourSeries.defaultOptions = merge(ScatterSeries.defaultOptions, Contour_ContourSeriesDefaults);
    return ContourSeries;
}(ScatterSeries));
/* harmony default export */ var Contour_ContourSeries = (ContourSeries);
extend(ContourSeries.prototype, {
    pointClass: Contour_ContourPoint,
    pointArrayMap: ['y', 'value'],
    keysAffectYAxis: ['y'],
    invertible: false
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('contour', ContourSeries);

;// ./code/es5/es-modules/masters/modules/contour.src.js





var contour_src_G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
Contour_ContourSeries.compose(contour_src_G.Renderer);
/* harmony default export */ var contour_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});