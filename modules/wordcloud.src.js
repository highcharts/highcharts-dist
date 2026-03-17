// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/wordcloud
 * @requires highcharts
 *
 * (c) 2016-2026 Highsoft AS
 * Authors: Jon Arild Nygard
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/wordcloud", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SeriesRegistry"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/wordcloud"] = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"]);
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
  "default": () => (/* binding */ wordcloud_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Series/DrawPointUtilities.js
/* *
 *
 *
 * */

/* *
 *
 *  Functions
 *
 * */
/**
 * Handles the drawing of a component.
 * Can be used for any type of component that reserves the graphic property,
 * and provides a shouldDraw on its context.
 *
 * @private
 *
 * @todo add type checking.
 * @todo export this function to enable usage
 */
function draw(point, params) {
    const { animatableAttribs, onComplete, css, renderer } = params;
    const animation = (point.series && point.series.chart.hasRendered) ?
        // Chart-level animation on updates
        void 0 :
        // Series-level animation on new points
        (point.series &&
            point.series.options.animation);
    let graphic = point.graphic;
    params.attribs = {
        ...params.attribs,
        'class': point.getClassName()
    };
    if ((point.shouldDraw())) {
        if (!graphic) {
            if (params.shapeType === 'text') {
                graphic = renderer.text();
            }
            else if (params.shapeType === 'image') {
                graphic = renderer.image(params.imageUrl || '')
                    .attr(params.shapeArgs || {});
            }
            else {
                graphic = renderer[params.shapeType](params.shapeArgs || {});
            }
            point.graphic = graphic;
            graphic.add(params.group);
        }
        if (css) {
            graphic.css(css);
        }
        graphic
            .attr(params.attribs)
            .animate(animatableAttribs, params.isNew ? false : animation, onComplete);
    }
    else if (graphic) {
        const destroy = () => {
            point.graphic = graphic = (graphic && graphic.destroy());
            if (typeof onComplete === 'function') {
                onComplete();
            }
        };
        // Animate only runs complete callback if something was animated.
        if (Object.keys(animatableAttribs).length) {
            graphic.animate(animatableAttribs, void 0, () => destroy());
        }
        else {
            destroy();
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
const DrawPointUtilities = {
    draw
};
/* harmony default export */ const Series_DrawPointUtilities = (DrawPointUtilities);

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
    if (H.Point && // Without H a dependency loop occurs
        el instanceof H.Point &&
        el.series &&
        el.series.chart) {
        el.series.chart.runTrackerClick = true;
    }
    // Handle DOM events
    // If the browser supports passive events, add it to improve performance
    // on touch events (#11353).
    const addEventListener = el.addEventListener;
    if (addEventListener) {
        addEventListener.call(el, type, fn, H.supportsPassiveEvents ? {
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

;// ./code/es-modules/Series/Wordcloud/WordcloudPoint.js
/* *
 *
 *  Experimental Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 * */


const { column: { prototype: { pointClass: ColumnPoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

/* *
 *
 *  Class
 *
 * */
class WordcloudPoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return true;
    }
}
extend(WordcloudPoint.prototype, {
    weight: 1
});
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Wordcloud_WordcloudPoint = (WordcloudPoint);

;// ./code/es-modules/Series/Wordcloud/WordcloudSeriesDefaults.js
/* *
 *
 *  Experimental Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * A word cloud is a visualization of a set of words, where the size and
 * placement of a word is determined by how it is weighted.
 *
 * @sample highcharts/demo/wordcloud Word Cloud chart
 *
 * @extends      plotOptions.column
 * @excluding    allAreas, boostThreshold, clip, colorAxis, compare,
 *               compareBase, crisp, cropThreshold, dataGrouping,
 *               dataLabels, depth, dragDrop, edgeColor, findNearestPointBy,
 *               getExtremesFromAll, grouping, groupPadding, groupZPadding,
 *               joinBy, maxPointWidth, minPointLength, navigatorOptions,
 *               negativeColor, pointInterval, pointIntervalUnit,
 *               pointPadding, pointPlacement, pointRange, pointStart,
 *               pointWidth, pointStart, pointWidth, shadow, showCheckbox,
 *               showInNavigator, softThreshold, stacking, threshold,
 *               zoneAxis, zones, dataSorting, boostBlending
 * @product      highcharts
 * @since        6.0.0
 * @requires     modules/wordcloud
 * @optionparent plotOptions.wordcloud
 */
const WordcloudSeriesDefaults = {
    /**
     * If there is no space for a word on the playing field, then this
     * option will allow the playing field to be extended to fit the word.
     * If false then the word will be dropped from the visualization.
     *
     * NB! This option is currently not decided to be published in the API,
     * and is therefore marked as private.
     *
     * @ignore-option
     */
    allowExtendPlayingField: true,
    animation: {
        /** @internal */
        duration: 500
    },
    borderWidth: 0,
    /**
     * @ignore-option
     */
    clip: false, // Something goes wrong with clip. // @todo fix this
    colorByPoint: true,
    cropThreshold: Infinity,
    colorKey: 'weight',
    /**
     * A threshold determining the minimum font size that can be applied to
     * a word.
     */
    minFontSize: 1,
    /**
     * The word with the largest weight will have a font size equal to this
     * value. The font size of a word is the ratio between its weight and
     * the largest occuring weight, multiplied with the value of
     * maxFontSize.
     */
    maxFontSize: 25,
    /**
     * This option decides which algorithm is used for placement, and
     * rotation of a word. The choice of algorith is therefore a crucial
     * part of the resulting layout of the wordcloud. It is possible for
     * users to add their own custom placement strategies for use in word
     * cloud. Read more about it in our
     * [documentation](https://www.highcharts.com/docs/chart-and-series-types/word-cloud-series#custom-placement-strategies)
     *
     * @validvalue ["center", "random"]
     */
    placementStrategy: 'center',
    /**
     * Rotation options for the words in the wordcloud.
     *
     * @sample highcharts/plotoptions/wordcloud-rotation
     *         Word cloud with rotation
     */
    rotation: {
        /**
         * The smallest degree of rotation for a word.
         */
        from: 0,
        /**
         * The number of possible orientations for a word, within the range
         * of `rotation.from` and `rotation.to`. Must be a number larger
         * than 0.
         */
        orientations: 2,
        /**
         * The largest degree of rotation for a word.
         */
        to: 90
    },
    showInLegend: false,
    /**
     * Spiral used for placing a word after the initial position
     * experienced a collision with either another word or the borders.
     * It is possible for users to add their own custom spiralling
     * algorithms for use in word cloud. Read more about it in our
     * [documentation](https://www.highcharts.com/docs/chart-and-series-types/word-cloud-series#custom-spiralling-algorithm)
     *
     * @validvalue ["archimedean", "rectangular", "square"]
     */
    spiral: 'rectangular',
    /**
     * CSS styles for the words.
     *
     * @type    {Highcharts.CSSObject}
     * @default {"fontFamily":"sans-serif", "fontWeight": "900"}
     */
    style: {
        /** @ignore-option */
        fontFamily: 'sans-serif',
        /** @ignore-option */
        fontWeight: '900',
        /** @ignore-option */
        whiteSpace: 'nowrap'
    },
    tooltip: {
        followPointer: true,
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.weight}</b><br/>'
    }
};
/**
 * A `wordcloud` series. If the [type](#series.wordcloud.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.wordcloud
 * @exclude   dataSorting, boostThreshold, boostBlending
 * @product   highcharts
 * @requires  modules/wordcloud
 * @apioption series.wordcloud
 */
/**
 * An array of data points for the series. For the `wordcloud` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 2 values. In this case, the values correspond to
 *    `name,weight`.
 *    ```js
 *    data: [
 *        ['Lorem', 4],
 *        ['Ipsum', 1]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.arearange.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        name: "Lorem",
 *        weight: 4
 *    }, {
 *        name: "Ipsum",
 *        weight: 1
 *    }]
 *    ```
 *
 * @type      {Array<Array<string,number>|*>}
 * @extends   series.line.data
 * @excluding drilldown, marker, x, y
 * @product   highcharts
 * @apioption series.wordcloud.data
 */
/**
 * The name decides the text for a word.
 *
 * @type      {string}
 * @since     6.0.0
 * @product   highcharts
 * @apioption series.wordcloud.data.name
 */
/**
 * The weighting of a word. The weight decides the relative size of a word
 * compared to the rest of the collection.
 *
 * @type      {number}
 * @since     6.0.0
 * @product   highcharts
 * @apioption series.wordcloud.data.weight
 */
''; // Detach doclets above
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Wordcloud_WordcloudSeriesDefaults = (WordcloudSeriesDefaults);

;// ./code/es-modules/Series/Wordcloud/WordcloudUtils.js
/* *
 *
 *  Experimental Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 * */


const { deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 * Functions
 *
 * */
/**
 * Detects if there is a collision between two rectangles.
 *
 * @private
 * @function isRectanglesIntersecting
 *
 * @param {Highcharts.PolygonBoxObject} r1
 * First rectangle.
 *
 * @param {Highcharts.PolygonBoxObject} r2
 * Second rectangle.
 *
 * @return {boolean}
 * Returns true if the rectangles overlap.
 */
function isRectanglesIntersecting(r1, r2) {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}
/**
 * Calculates the normals to a line between two points.
 *
 * @private
 * @function getNormals
 * @param {Highcharts.PolygonPointObject} p1
 *        Start point for the line. Array of x and y value.
 * @param {Highcharts.PolygonPointObject} p2
 *        End point for the line. Array of x and y value.
 * @return {Highcharts.PolygonObject}
 *         Returns the two normals in an array.
 */
function getNormals(p1, p2) {
    const dx = p2[0] - p1[0], // X2 - x1
    dy = p2[1] - p1[1]; // Y2 - y1
    return [
        [-dy, dx],
        [dy, -dx]
    ];
}
/**
 * @private
 */
function getAxesFromPolygon(polygon) {
    let points, axes = polygon.axes || [];
    if (!axes.length) {
        axes = [];
        points = points = polygon.concat([polygon[0]]);
        points.reduce((p1, p2) => {
            const normals = getNormals(p1, p2), axis = normals[0]; // Use the left normal as axis.
            // Check that the axis is unique.
            if (!find(axes, (existing) => existing[0] === axis[0] &&
                existing[1] === axis[1])) {
                axes.push(axis);
            }
            // Return p2 to be used as p1 in next iteration.
            return p2;
        });
        polygon.axes = axes;
    }
    return axes;
}
/**
 * Projects a polygon onto a coordinate.
 *
 * @private
 * @function project
 * @param {Highcharts.PolygonObject} polygon
 * Array of points in a polygon.
 * @param {Highcharts.PolygonPointObject} target
 * The coordinate of pr
 */
function project(polygon, target) {
    const products = polygon.map((point) => {
        const ax = point[0], ay = point[1], bx = target[0], by = target[1];
        return ax * bx + ay * by;
    });
    return {
        min: Math.min.apply(this, products),
        max: Math.max.apply(this, products)
    };
}
/**
 * @private
 */
function isPolygonsOverlappingOnAxis(axis, polygon1, polygon2) {
    const projection1 = project(polygon1, axis), projection2 = project(polygon2, axis), isOverlapping = !(projection2.min > projection1.max ||
        projection2.max < projection1.min);
    return !isOverlapping;
}
/**
 * Checks whether two convex polygons are colliding by using the Separating
 * Axis Theorem.
 *
 * @private
 * @function isPolygonsColliding
 * @param {Highcharts.PolygonObject} polygon1
 *        First polygon.
 *
 * @param {Highcharts.PolygonObject} polygon2
 *        Second polygon.
 *
 * @return {boolean}
 *         Returns true if they are colliding, otherwise false.
 */
function isPolygonsColliding(polygon1, polygon2) {
    // Get the axis from both polygons.
    const axes1 = getAxesFromPolygon(polygon1), axes2 = getAxesFromPolygon(polygon2), axes = axes1.concat(axes2), overlappingOnAllAxes = !find(axes, (axis) => isPolygonsOverlappingOnAxis(axis, polygon1, polygon2));
    return overlappingOnAllAxes;
}
/**
 * Detects if a word collides with any previously placed words.
 *
 * @private
 * @function intersectsAnyWord
 *
 * @param {Highcharts.Point} point
 * Point which the word is connected to.
 *
 * @param {Array<Highcharts.Point>} points
 * Previously placed points to check against.
 *
 * @return {boolean}
 * Returns true if there is collision.
 */
function intersectsAnyWord(point, points) {
    const rect = point.rect, polygon = point.polygon, lastCollidedWith = point.lastCollidedWith, isIntersecting = function (p) {
        let result = isRectanglesIntersecting(rect, p.rect);
        if (result &&
            (point.rotation % 90 || p.rotation % 90)) {
            result = isPolygonsColliding(polygon, p.polygon);
        }
        return result;
    };
    let intersects = false;
    // If the point has already intersected a different point, chances are
    // they are still intersecting. So as an enhancement we check this
    // first.
    if (lastCollidedWith) {
        intersects = isIntersecting(lastCollidedWith);
        // If they no longer intersects, remove the cache from the point.
        if (!intersects) {
            delete point.lastCollidedWith;
        }
    }
    // If not already found, then check if we can find a point that is
    // intersecting.
    if (!intersects) {
        intersects = !!find(points, function (p) {
            const result = isIntersecting(p);
            if (result) {
                point.lastCollidedWith = p;
            }
            return result;
        });
    }
    return intersects;
}
/**
 * Gives a set of cordinates for an Archimedian Spiral.
 *
 * @private
 * @function archimedeanSpiral
 *
 * @param {number} attempt
 * How far along the spiral we have traversed.
 *
 * @param {Highcharts.WordcloudSpiralParamsObject} [params]
 * Additional parameters.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Resulting coordinates, x and y. False if the word should be dropped from
 * the visualization.
 */
function archimedeanSpiral(attempt, params) {
    const field = params.field, maxDelta = (field.width * field.width) + (field.height * field.height), t = attempt * 0.8; // 0.2 * 4 = 0.8. Enlarging the spiral.
    let result = false;
    // Emergency brake. TODO make spiralling logic more foolproof.
    if (attempt <= 10000) {
        result = {
            x: t * Math.cos(t),
            y: t * Math.sin(t)
        };
        if (!(Math.min(Math.abs(result.x), Math.abs(result.y)) < maxDelta)) {
            result = false;
        }
    }
    return result;
}
/**
 * Gives a set of coordinates for an rectangular spiral.
 *
 * @private
 * @function squareSpiral
 *
 * @param {number} attempt
 * How far along the spiral we have traversed.
 *
 * @param {Highcharts.WordcloudSpiralParamsObject} [params]
 * Additional parameters.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Resulting coordinates, x and y. False if the word should be dropped from
 * the visualization.
 */
function squareSpiral(attempt, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
params) {
    const a = attempt * 4, k = Math.ceil((Math.sqrt(a) - 1) / 2), isBoolean = (x) => (typeof x === 'boolean');
    let t = 2 * k + 1, m = Math.pow(t, 2), result = false;
    t -= 1;
    if (attempt <= 10000) {
        if (isBoolean(result) && a >= m - t) {
            result = {
                x: k - (m - a),
                y: -k
            };
        }
        m -= t;
        if (isBoolean(result) && a >= m - t) {
            result = {
                x: -k,
                y: -k + (m - a)
            };
        }
        m -= t;
        if (isBoolean(result)) {
            if (a >= m - t) {
                result = {
                    x: -k + (m - a),
                    y: k
                };
            }
            else {
                result = {
                    x: k,
                    y: k - (m - a - t)
                };
            }
        }
        result.x *= 5;
        result.y *= 5;
    }
    return result;
}
/**
 * Gives a set of coordinates for an rectangular spiral.
 *
 * @private
 * @function rectangularSpiral
 *
 * @param {number} attempt
 * How far along the spiral we have traversed.
 *
 * @param {Highcharts.WordcloudSpiralParamsObject} [params]
 * Additional parameters.
 *
 * @return {boolean|Higcharts.PositionObject}
 * Resulting coordinates, x and y. False if the word should be dropped from
 * the visualization.
 */
function rectangularSpiral(attempt, params) {
    const result = squareSpiral(attempt, params), field = params.field;
    if (result) {
        result.x *= field.ratioX;
        result.y *= field.ratioY;
    }
    return result;
}
/**
 * @private
 * @function getRandomPosition
 *
 * @param {number} size
 * Random factor.
 *
 * @return {number}
 * Random position.
 */
function getRandomPosition(size) {
    return Math.round((size * (Math.random() + 0.5)) / 2);
}
/**
 * Calculates the proper scale to fit the cloud inside the plotting area.
 *
 * @private
 * @function getScale
 *
 * @param {number} targetWidth
 * Width of target area.
 *
 * @param {number} targetHeight
 * Height of target area.
 *
 * @param {Object} field
 * The playing field.
 *
 * @return {number}
 * Returns the value to scale the playing field up to the size of the target
 * area.
 */
function getScale(targetWidth, targetHeight, field) {
    const height = Math.max(Math.abs(field.top), Math.abs(field.bottom)) * 2, width = Math.max(Math.abs(field.left), Math.abs(field.right)) * 2, scaleX = width > 0 ? 1 / width * targetWidth : 1, scaleY = height > 0 ? 1 / height * targetHeight : 1;
    return Math.min(scaleX, scaleY);
}
/**
 * Calculates what is called the playing field. The field is the area which
 * all the words are allowed to be positioned within. The area is
 * proportioned to match the target aspect ratio.
 *
 * @private
 * @function getPlayingField
 *
 * @param {number} targetWidth
 * Width of the target area.
 *
 * @param {number} targetHeight
 * Height of the target area.
 *
 * @param {Array<Highcharts.Point>} data
 * Array of points.
 *
 * @param {Object} data.dimensions
 * The height and width of the word.
 *
 * @return {Object}
 * The width and height of the playing field.
 */
function getPlayingField(targetWidth, targetHeight, data) {
    const info = data.reduce(function (obj, point) {
        const dimensions = point.dimensions, x = Math.max(dimensions.width, dimensions.height);
        // Find largest height.
        obj.maxHeight = Math.max(obj.maxHeight, dimensions.height);
        // Find largest width.
        obj.maxWidth = Math.max(obj.maxWidth, dimensions.width);
        // Sum up the total maximum area of all the words.
        obj.area += x * x;
        return obj;
    }, {
        maxHeight: 0,
        maxWidth: 0,
        area: 0
    }), 
    /**
     * Use largest width, largest height, or root of total area to give
     * size to the playing field.
     */
    x = Math.max(info.maxHeight, // Have enough space for the tallest word
    info.maxWidth, // Have enough space for the broadest word
    // Adjust 15% to account for close packing of words
    Math.sqrt(info.area) * 0.85), ratioX = targetWidth > targetHeight ? targetWidth / targetHeight : 1, ratioY = targetHeight > targetWidth ? targetHeight / targetWidth : 1;
    return {
        width: x * ratioX,
        height: x * ratioY,
        ratioX: ratioX,
        ratioY: ratioY
    };
}
/**
 * Calculates a number of degrees to rotate, based upon a number of
 * orientations within a range from-to.
 *
 * @private
 * @function getRotation
 *
 * @param {number} [orientations]
 * Number of orientations.
 *
 * @param {number} [index]
 * Index of point, used to decide orientation.
 *
 * @param {number} [from]
 * The smallest degree of rotation.
 *
 * @param {number} [to]
 * The largest degree of rotation.
 *
 * @return {boolean|number}
 * Returns the resulting rotation for the word. Returns false if invalid
 * input parameters.
 */
function getRotation(orientations, index, from, to) {
    let result = false, // Default to false
    range, intervals, orientation;
    // Check if we have valid input parameters.
    if (isNumber(orientations) &&
        isNumber(index) &&
        isNumber(from) &&
        isNumber(to) &&
        orientations > 0 &&
        index > -1 &&
        to > from) {
        range = to - from;
        intervals = range / (orientations - 1 || 1);
        orientation = index % orientations;
        result = from + (orientation * intervals);
    }
    return result;
}
/**
 * Calculates the spiral positions and store them in scope for quick access.
 *
 * @private
 * @function getSpiral
 *
 * @param {Function} fn
 * The spiral function.
 *
 * @param {Object} params
 * Additional parameters for the spiral.
 *
 * @return {Function}
 * Function with access to spiral positions.
 */
function getSpiral(fn, params) {
    const length = 10000, arr = [];
    for (let i = 1; i < length; i++) {
        // @todo unnecessary amount of precalculation
        arr.push(fn(i, params));
    }
    return (attempt) => (attempt <= length ? arr[attempt - 1] : false);
}
/**
 * Detects if a word is placed outside the playing field.
 *
 * @private
 * @function outsidePlayingField
 *
 * @param {Highcharts.PolygonBoxObject} rect
 * The word box.
 *
 * @param {Highcharts.WordcloudFieldObject} field
 * The width and height of the playing field.
 *
 * @return {boolean}
 * Returns true if the word is placed outside the field.
 */
function outsidePlayingField(rect, field) {
    const playingField = {
        left: -(field.width / 2),
        right: field.width / 2,
        top: -(field.height / 2),
        bottom: field.height / 2
    };
    return !(playingField.left < rect.left &&
        playingField.right > rect.right &&
        playingField.top < rect.top &&
        playingField.bottom > rect.bottom);
}
/**
 * @private
 */
function movePolygon(deltaX, deltaY, polygon) {
    return polygon.map(function (point) {
        return [
            point[0] + deltaX,
            point[1] + deltaY
        ];
    });
}
/**
 * Check if a point intersects with previously placed words, or if it goes
 * outside the field boundaries. If a collision, then try to adjusts the
 * position.
 *
 * @private
 * @function intersectionTesting
 *
 * @param {Highcharts.Point} point
 * Point to test for intersections.
 *
 * @param {Highcharts.WordcloudTestOptionsObject} options
 * Options object.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Returns an object with how much to correct the positions. Returns false
 * if the word should not be placed at all.
 */
function intersectionTesting(point, options) {
    const placed = options.placed, field = options.field, rectangle = options.rectangle, polygon = options.polygon, spiral = options.spiral, 
    // Make a copy to update values during intersection testing.
    rect = point.rect = extend({}, rectangle);
    let attempt = 1, delta = {
        x: 0,
        y: 0
    };
    point.polygon = polygon;
    point.rotation = options.rotation;
    /* While w intersects any previously placed words:
        do {
        move w a little bit along a spiral path
        } while any part of w is outside the playing field and
                the spiral radius is still smallish */
    while (delta !== false &&
        (intersectsAnyWord(point, placed) ||
            outsidePlayingField(rect, field))) {
        delta = spiral(attempt);
        if (isObject(delta)) {
            // Update the DOMRect with new positions.
            rect.left = rectangle.left + delta.x;
            rect.right = rectangle.right + delta.x;
            rect.top = rectangle.top + delta.y;
            rect.bottom = rectangle.bottom + delta.y;
            point.polygon = movePolygon(delta.x, delta.y, polygon);
        }
        attempt++;
    }
    return delta;
}
/**
 * Extends the playing field to have enough space to fit a given word.
 *
 * @private
 * @function extendPlayingField
 *
 * @param {Highcharts.WordcloudFieldObject} field
 * The width, height and ratios of a playing field.
 *
 * @param {Highcharts.PolygonBoxObject} rectangle
 * The bounding box of the word to add space for.
 *
 * @return {Highcharts.WordcloudFieldObject}
 * Returns the extended playing field with updated height and width.
 */
function extendPlayingField(field, rectangle) {
    let height, width, ratioX, ratioY, x, extendWidth, extendHeight, result;
    if (isObject(field) && isObject(rectangle)) {
        height = (rectangle.bottom - rectangle.top);
        width = (rectangle.right - rectangle.left);
        ratioX = field.ratioX;
        ratioY = field.ratioY;
        // Use the same variable to extend both the height and width.
        x = ((width * ratioX) > (height * ratioY)) ? width : height;
        // Multiply variable with ratios to preserve aspect ratio.
        extendWidth = x * ratioX;
        extendHeight = x * ratioY;
        // Calculate the size of the new field after adding
        // space for the word.
        result = merge(field, {
            // Add space on the left and right.
            width: field.width + (extendWidth * 2),
            // Add space on the top and bottom.
            height: field.height + (extendHeight * 2)
        });
    }
    else {
        result = field;
    }
    // Return the new extended field.
    return result;
}
/**
 * If a rectangle is outside a give field, then the boundaries of the field
 * is adjusted accordingly. Modifies the field object which is passed as the
 * first parameter.
 *
 * @private
 * @function updateFieldBoundaries
 *
 * @param {Highcharts.WordcloudFieldObject} field
 * The bounding box of a playing field.
 *
 * @param {Highcharts.PolygonBoxObject} rectangle
 * The bounding box for a placed point.
 *
 * @return {Highcharts.WordcloudFieldObject}
 * Returns a modified field object.
 */
function updateFieldBoundaries(field, rectangle) {
    // @todo improve type checking.
    if (!isNumber(field.left) || field.left > rectangle.left) {
        field.left = rectangle.left;
    }
    if (!isNumber(field.right) || field.right < rectangle.right) {
        field.right = rectangle.right;
    }
    if (!isNumber(field.top) || field.top > rectangle.top) {
        field.top = rectangle.top;
    }
    if (!isNumber(field.bottom) || field.bottom < rectangle.bottom) {
        field.bottom = rectangle.bottom;
    }
    return field;
}
/**
 * Alternative solution to correctFloat.
 * E.g Highcharts.correctFloat(123, 2) returns 120, when it should be 123.
 *
 * @private
 * @function correctFloat
 */
function WordcloudUtils_correctFloat(number, precision) {
    const p = isNumber(precision) ? precision : 14, magnitude = Math.pow(10, p);
    return Math.round(number * magnitude) / magnitude;
}
/**
 * @private
 */
function getBoundingBoxFromPolygon(points) {
    return points.reduce(function (obj, point) {
        const x = point[0], y = point[1];
        obj.left = Math.min(x, obj.left);
        obj.right = Math.max(x, obj.right);
        obj.bottom = Math.max(y, obj.bottom);
        obj.top = Math.min(y, obj.top);
        return obj;
    }, {
        left: Number.MAX_VALUE,
        right: -Number.MAX_VALUE,
        bottom: -Number.MAX_VALUE,
        top: Number.MAX_VALUE
    });
}
/**
 * @private
 */
function getPolygon(x, y, width, height, rotation) {
    const origin = [x, y], left = x - (width / 2), right = x + (width / 2), top = y - (height / 2), bottom = y + (height / 2), polygon = [
        [left, top],
        [right, top],
        [right, bottom],
        [left, bottom]
    ];
    return polygon.map(function (point) {
        return rotate2DToPoint(point, origin, -rotation);
    });
}
/**
 * Rotates a point clockwise around the origin.
 *
 * @private
 * @function rotate2DToOrigin
 * @param {Highcharts.PolygonPointObject} point
 *        The x and y coordinates for the point.
 * @param {number} angle
 *        The angle of rotation.
 * @return {Highcharts.PolygonPointObject}
 *         The x and y coordinate for the rotated point.
 */
function rotate2DToOrigin(point, angle) {
    const x = point[0], y = point[1], rad = deg2rad * -angle, cosAngle = Math.cos(rad), sinAngle = Math.sin(rad);
    return [
        WordcloudUtils_correctFloat(x * cosAngle - y * sinAngle),
        WordcloudUtils_correctFloat(x * sinAngle + y * cosAngle)
    ];
}
/**
 * Rotate a point clockwise around another point.
 *
 * @private
 * @function rotate2DToPoint
 * @param {Highcharts.PolygonPointObject} point
 *        The x and y coordinates for the point.
 * @param {Highcharts.PolygonPointObject} origin
 *        The point to rotate around.
 * @param {number} angle
 *        The angle of rotation.
 * @return {Highcharts.PolygonPointObject}
 *         The x and y coordinate for the rotated point.
 */
function rotate2DToPoint(point, origin, angle) {
    const x = point[0] - origin[0], y = point[1] - origin[1], rotated = rotate2DToOrigin([x, y], angle);
    return [
        rotated[0] + origin[0],
        rotated[1] + origin[1]
    ];
}
/* *
 *
 *  Default Export
 *
 * */
const WordcloudUtils = {
    archimedeanSpiral,
    extendPlayingField,
    getBoundingBoxFromPolygon,
    getPlayingField,
    getPolygon,
    getRandomPosition,
    getRotation,
    getScale,
    getSpiral,
    intersectionTesting,
    isPolygonsColliding,
    isRectanglesIntersecting,
    rectangularSpiral,
    rotate2DToOrigin,
    rotate2DToPoint,
    squareSpiral,
    updateFieldBoundaries
};
/* harmony default export */ const Wordcloud_WordcloudUtils = (WordcloudUtils);

;// ./code/es-modules/Series/Wordcloud/WordcloudSeries.js
/* *
 *
 *  Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 * */



const { noop } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { column: ColumnSeries } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;




const { archimedeanSpiral: WordcloudSeries_archimedeanSpiral, extendPlayingField: WordcloudSeries_extendPlayingField, getBoundingBoxFromPolygon: WordcloudSeries_getBoundingBoxFromPolygon, getPlayingField: WordcloudSeries_getPlayingField, getPolygon: WordcloudSeries_getPolygon, getRandomPosition: WordcloudSeries_getRandomPosition, getRotation: WordcloudSeries_getRotation, getScale: WordcloudSeries_getScale, getSpiral: WordcloudSeries_getSpiral, intersectionTesting: WordcloudSeries_intersectionTesting, isPolygonsColliding: WordcloudSeries_isPolygonsColliding, rectangularSpiral: WordcloudSeries_rectangularSpiral, rotate2DToOrigin: WordcloudSeries_rotate2DToOrigin, rotate2DToPoint: WordcloudSeries_rotate2DToPoint, squareSpiral: WordcloudSeries_squareSpiral, updateFieldBoundaries: WordcloudSeries_updateFieldBoundaries } = Wordcloud_WordcloudUtils;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.wordcloud
 *
 * @augments Highcharts.Series
 */
class WordcloudSeries extends ColumnSeries {
    /**
     *
     * Functions
     *
     */
    pointAttribs(point, state) {
        const attribs = highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default().seriesTypes.column.prototype
            .pointAttribs.call(this, point, state);
        delete attribs.stroke;
        delete attribs['stroke-width'];
        return attribs;
    }
    /**
     * Calculates the fontSize of a word based on its weight.
     *
     * @private
     * @function Highcharts.Series#deriveFontSize
     *
     * @param {number} [relativeWeight=0]
     * The weight of the word, on a scale 0-1.
     *
     * @param {number} [maxFontSize=1]
     * The maximum font size of a word.
     *
     * @param {number} [minFontSize=1]
     * The minimum font size of a word.
     *
     * @return {number}
     * Returns the resulting fontSize of a word. If minFontSize is larger then
     * maxFontSize the result will equal minFontSize.
     */
    deriveFontSize(relativeWeight, maxFontSize, minFontSize) {
        const weight = isNumber(relativeWeight) ? relativeWeight : 0, max = isNumber(maxFontSize) ? maxFontSize : 1, min = isNumber(minFontSize) ? minFontSize : 1;
        return Math.floor(Math.max(min, weight * max));
    }
    drawPoints() {
        if (this.zooming ||
            (this.defaultScale &&
                this.group.scaleX !== this.defaultScale)) {
            return;
        }
        const series = this, hasRendered = series.hasRendered, xAxis = series.xAxis, yAxis = series.yAxis, chart = series.chart, group = series.group, options = series.options, animation = options.animation, allowExtendPlayingField = options.allowExtendPlayingField, renderer = chart.renderer, placed = [], placementStrategy = series.placementStrategy[options.placementStrategy], rotation = options.rotation, weights = series.points.map(function (p) {
            return p.weight;
        }), maxWeight = Math.max.apply(null, weights), 
        // `concat()` prevents from sorting the original array.
        points = series.points.concat().sort((a, b) => (b.weight - a.weight // Sort descending
        ));
        let testElement = renderer.text().add(group), field;
        // Reset the scale before finding the dimensions (#11993).
        // SVGGRaphicsElement.getBBox() (used in SVGElement.getBBox(boolean))
        // returns slightly different values for the same element depending on
        // whether it is rendered in a group which has already defined scale
        // (e.g. 6) or in the group without a scale (scale = 1).
        series.group.attr({
            scaleX: 1,
            scaleY: 1
        });
        // Get the dimensions for each word.
        // Used in calculating the playing field.
        for (const point of points) {
            const relativeWeight = 1 / maxWeight * point.weight, fontSize = series.deriveFontSize(relativeWeight, options.maxFontSize, options.minFontSize), css = extend({
                fontSize: fontSize + 'px'
            }, options.style);
            testElement.css(css).attr({
                x: 0,
                y: 0,
                text: point.name
            });
            const bBox = testElement.getBBox(true);
            point.dimensions = {
                height: bBox.height,
                width: bBox.width
            };
        }
        // Calculate the playing field.
        field = WordcloudSeries_getPlayingField(xAxis.len, yAxis.len, points);
        const spiral = WordcloudSeries_getSpiral(series.spirals[options.spiral], {
            field: field
        });
        // Draw all the points.
        for (const point of points) {
            const relativeWeight = 1 / maxWeight * point.weight, fontSize = series.deriveFontSize(relativeWeight, options.maxFontSize, options.minFontSize), css = extend({
                fontSize: fontSize + 'px'
            }, options.style), placement = placementStrategy(point, {
                data: points,
                field: field,
                placed: placed,
                rotation: rotation
            }), attr = extend(series.pointAttribs(point, (point.selected && 'select')), {
                align: 'center',
                'alignment-baseline': 'middle',
                'dominant-baseline': 'middle', // #15973: Firefox
                x: placement.x,
                y: placement.y,
                text: point.name,
                rotation: isNumber(placement.rotation) ?
                    placement.rotation :
                    void 0
            }), polygon = WordcloudSeries_getPolygon(placement.x, placement.y, point.dimensions.width, point.dimensions.height, placement.rotation), rectangle = WordcloudSeries_getBoundingBoxFromPolygon(polygon);
            let delta = WordcloudSeries_intersectionTesting(point, {
                rectangle: rectangle,
                polygon: polygon,
                field: field,
                placed: placed,
                spiral: spiral,
                rotation: placement.rotation
            }), animate;
            // If there is no space for the word, extend the playing field.
            if (!delta && allowExtendPlayingField) {
                // Extend the playing field to fit the word.
                field = WordcloudSeries_extendPlayingField(field, rectangle);
                // Run intersection testing one more time to place the word.
                delta = WordcloudSeries_intersectionTesting(point, {
                    rectangle: rectangle,
                    polygon: polygon,
                    field: field,
                    placed: placed,
                    spiral: spiral,
                    rotation: placement.rotation
                });
            }
            // Check if point was placed, if so delete it, otherwise place it
            // on the correct positions.
            if (isObject(delta)) {
                attr.x = (attr.x || 0) + delta.x;
                attr.y = (attr.y || 0) + delta.y;
                rectangle.left += delta.x;
                rectangle.right += delta.x;
                rectangle.top += delta.y;
                rectangle.bottom += delta.y;
                field = WordcloudSeries_updateFieldBoundaries(field, rectangle);
                placed.push(point);
                point.isNull = false;
                point.isInside = true; // #15447
            }
            else {
                point.isNull = true;
            }
            if (animation) {
                // Animate to new positions
                animate = {
                    x: attr.x,
                    y: attr.y
                };
                // Animate from center of chart
                if (!hasRendered) {
                    attr.x = 0;
                    attr.y = 0;
                    // Or animate from previous position
                }
                else {
                    delete attr.x;
                    delete attr.y;
                }
            }
            Series_DrawPointUtilities.draw(point, {
                animatableAttribs: animate,
                attribs: attr,
                css: css,
                group: group,
                renderer: renderer,
                shapeArgs: void 0,
                shapeType: 'text'
            });
        }
        // Destroy the element after use.
        testElement = testElement.destroy();
        // Scale the series group to fit within the plotArea.
        series.defaultScale = WordcloudSeries_getScale(xAxis.len, yAxis.len, field);
        series.field = field;
        series.group.attr({
            scaleX: series.defaultScale,
            scaleY: series.defaultScale
        });
    }
    hasData() {
        const series = this;
        return (isObject(series) &&
            series.visible === true &&
            isArray(series.points) &&
            series.points.length > 0);
    }
    getPlotBox(name) {
        const series = this, { chart, group, zooming } = this, { plotSizeX = 0, plotSizeY = 0, inverted } = chart, 
        // Swap axes for inverted (#2339)
        xAxis = series[(inverted ? 'yAxis' : 'xAxis')], yAxis = series[(inverted ? 'xAxis' : 'yAxis')], width = xAxis ? xAxis.len : chart.plotWidth, height = yAxis ? yAxis.len : chart.plotHeight, x = xAxis ? xAxis.left : chart.plotLeft, y = yAxis ? yAxis.top : chart.plotTop, field = series.field;
        let left = 0, top = 0, translateX = x + width / 2, translateY = y + height / 2, initLeft = translateX, initTop = translateY, scale = series.defaultScale || 1, seriesHeight = 0, seriesWidth = 0;
        if (field) {
            seriesHeight =
                Math.max(Math.abs(field.top), Math.abs(field.bottom)) * 2;
            seriesWidth =
                Math.max(Math.abs(field.left), Math.abs(field.right)) * 2;
        }
        if (inverted) {
            [seriesWidth, seriesHeight] = [seriesHeight, seriesWidth];
        }
        if (group && zooming) {
            // Uncomment this block to visualize the zooming
            // bounding box and the point, which is normalized
            // position to zoom-in
            // chart.renderer.rect(
            //    (plotSizeX - seriesWidth) / 2 + zooming.x * plotSizeX +
            //        chart.plotLeft,
            //    (plotSizeY - seriesHeight) / 2 + zooming.y * plotSizeY +
            //        chart.plotTop,
            //    zooming.width * plotSizeX,
            //    zooming.height * plotSizeY,
            //    0,
            //    2
            // ).attr({
            //    stroke: 'red'
            // }).add();
            // chart.renderer.circle(
            //    (plotSizeX - seriesWidth) / 2 + zooming.zoomX * plotSizeX +
            //        chart.plotLeft,
            //    (plotSizeY - seriesHeight) / 2 + zooming.zoomY * plotSizeY +
            //        chart.plotTop,
            //    2
            // ).attr({
            //    stroke: 'blue'
            // }).add();
            scale = Math.max(zooming.scale, series.defaultScale || 1);
            const newWidth = Math.max(seriesWidth * scale, width), newHeight = Math.max(seriesHeight * scale, height), newMiddleX = x + newWidth / 2, newMiddleY = y + newHeight / 2, scaleDiff = scale - (group.scaleX || 1);
            left = scaleDiff * ((plotSizeX - seriesWidth) / 2 +
                zooming.zoomX * plotSizeX - width / 2);
            top = scaleDiff * ((plotSizeY - seriesHeight) / 2 +
                zooming.zoomY * plotSizeY - height / 2);
            if (name === 'series') {
                zooming.x = Math.max(0, Math.min(1 - zooming.width, zooming.x + (zooming.panX / zooming.scale)));
                left += zooming.panX * plotSizeX;
                zooming.panX = 0;
                zooming.y = Math.max(0, Math.min(1 - zooming.height, zooming.y + (zooming.panY / zooming.scale)));
                top += zooming.panY * plotSizeY;
                zooming.panY = 0;
            }
            if (isNumber(group.translateX) && isNumber(group.translateY)) {
                initLeft = group.translateX;
                initTop = group.translateY;
            }
            translateX = initLeft - left;
            translateY = initTop - top;
            // Do not allow to move outside the chart
            // Vertical lock
            if (translateY > newMiddleY) {
                translateY = newMiddleY;
            }
            else if (translateY < 2 * y + height - newMiddleY) {
                translateY = 2 * y + height - newMiddleY;
            }
            // Horizontal lock
            if (translateX > newMiddleX) {
                translateX = newMiddleX;
            }
            else if (translateX < 2 * x + width - newMiddleX) {
                translateX = 2 * x + width - newMiddleX;
            }
        }
        return {
            translateX: translateX,
            translateY: translateY,
            scaleX: scale,
            scaleY: scale
        };
    }
}
/* *
 *
 *  Static properties
 *
 * */
WordcloudSeries.defaultOptions = merge(ColumnSeries.defaultOptions, Wordcloud_WordcloudSeriesDefaults);
extend(WordcloudSeries.prototype, {
    animate: noop,
    animateDrilldown: noop,
    animateDrillupFrom: noop,
    isCartesian: false,
    pointClass: Wordcloud_WordcloudPoint,
    setClip: noop,
    // Strategies used for deciding rotation and initial position of a word. To
    // implement a custom strategy, have a look at the function random for
    // example.
    placementStrategy: {
        random: function (point, options) {
            const field = options.field, r = options.rotation;
            return {
                x: WordcloudSeries_getRandomPosition(field.width) - (field.width / 2),
                y: WordcloudSeries_getRandomPosition(field.height) - (field.height / 2),
                rotation: WordcloudSeries_getRotation(r.orientations, point.index, r.from, r.to)
            };
        },
        center: function (point, options) {
            const r = options.rotation;
            return {
                x: 0,
                y: 0,
                rotation: WordcloudSeries_getRotation(r.orientations, point.index, r.from, r.to)
            };
        }
    },
    pointArrayMap: ['weight'],
    // Spirals used for placing a word after the initial position experienced a
    // collision with either another word or the borders. To implement a custom
    // spiral, look at the function archimedeanSpiral for example.
    spirals: {
        'archimedean': WordcloudSeries_archimedeanSpiral,
        'rectangular': WordcloudSeries_rectangularSpiral,
        'square': WordcloudSeries_squareSpiral
    },
    utils: {
        extendPlayingField: WordcloudSeries_extendPlayingField,
        getRotation: WordcloudSeries_getRotation,
        isPolygonsColliding: WordcloudSeries_isPolygonsColliding,
        rotate2DToOrigin: WordcloudSeries_rotate2DToOrigin,
        rotate2DToPoint: WordcloudSeries_rotate2DToPoint
    }
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('wordcloud', WordcloudSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Wordcloud_WordcloudSeries = ((/* unused pure expression or super */ null && (WordcloudSeries)));

;// ./code/es-modules/masters/modules/wordcloud.src.js




/* harmony default export */ const wordcloud_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});