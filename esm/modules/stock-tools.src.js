// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/modules/stock-tools
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
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

;// external ["../highcharts.src.js","default","Templating"]
const external_highcharts_src_js_default_Templating_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Templating;
var external_highcharts_src_js_default_Templating_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Templating_namespaceObject);
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

const { doc, win } = (external_highcharts_src_js_default_default());
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
    if ((external_highcharts_src_js_default_default()).Point && // Without H a dependency loop occurs
        el instanceof (external_highcharts_src_js_default_default()).Point &&
        el.series &&
        el.series.chart) {
        el.series.chart.runTrackerClick = true;
    }
    // Handle DOM events
    // If the browser supports passive events, add it to improve performance
    // on touch events (#11353).
    const addEventListener = el.addEventListener;
    if (addEventListener) {
        addEventListener.call(el, type, fn, (external_highcharts_src_js_default_default()).supportsPassiveEvents ? {
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
                el !== (external_highcharts_src_js_default_default())))) {
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



const { setOptions } = (external_highcharts_src_js_default_default());

const { format } = (external_highcharts_src_js_default_Templating_default());

const { composed, doc: NavigationBindings_doc, win: NavigationBindings_win } = (external_highcharts_src_js_default_default());


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
function onNavigationBindingsClosePopup() {
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
        if (pushUnique(composed, 'NavigationBindings')) {
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
            addEvent(NavigationBindings, 'closePopup', onNavigationBindingsClosePopup);
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
        navigation.eventsToUnbind.push(addEvent(chart.container, (external_highcharts_src_js_default_default()).isTouchDevice ? 'touchmove' : 'mousemove', function (e) {
            navigation.bindingsContainerMouseMove(this, e);
        }, (external_highcharts_src_js_default_default()).isTouchDevice ? { passive: false } : void 0));
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
                            format(option, annotation.labels[0].points[0]).toString(),
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

;// external ["../highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// ./code/es-modules/Stock/StockTools/StockToolsUtilities.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { getOptions } = (external_highcharts_src_js_default_default());

const { getAssignedAxis: StockToolsUtilities_getAssignedAxis, getFieldType: StockToolsUtilities_getFieldType } = NavigationBindingsUtilities;



/* *
 *
 *  Constants
 *
 * */
/**
 * @private
 */
const indicatorsWithAxes = [
    'apo',
    'ad',
    'aroon',
    'aroonoscillator',
    'atr',
    'ao',
    'cci',
    'chaikin',
    'cmf',
    'cmo',
    'disparityindex',
    'dmi',
    'dpo',
    'linearregressionangle',
    'linearregressionintercept',
    'linearregressionslope',
    'klinger',
    'macd',
    'mfi',
    'momentum',
    'natr',
    'obv',
    'ppo',
    'roc',
    'rsi',
    'slowstochastic',
    'stochastic',
    'trix',
    'williamsr'
];
/**
 * @private
 */
const indicatorsWithVolume = [
    'ad',
    'cmf',
    'klinger',
    'mfi',
    'obv',
    'vbp',
    'vwap'
];
/* *
 *
 *  Functions
 *
 * */
/**
 * Generates function which will add a flag series using modal in GUI.
 * Method fires an event "showPopup" with config:
 * `{type, options, callback}`.
 *
 * Example: NavigationBindings.utils.addFlagFromForm('url(...)') - will
 * generate function that shows modal in GUI.
 *
 * @private
 * @function bindingsUtils.addFlagFromForm
 *
 * @param {Highcharts.FlagsShapeValue} type
 *        Type of flag series, e.g. "squarepin"
 *
 * @return {Function}
 *         Callback to be used in `start` callback
 */
function addFlagFromForm(type) {
    return function (e) {
        const navigation = this, chart = navigation.chart, toolbar = chart.stockTools, point = attractToPoint(e, chart);
        if (!point) {
            return;
        }
        const pointConfig = {
            x: point.x,
            y: point.y
        };
        const seriesOptions = {
            type: 'flags',
            onSeries: point.series.id,
            shape: type,
            data: [pointConfig],
            xAxis: point.xAxis,
            yAxis: point.yAxis,
            point: {
                events: {
                    click: function () {
                        const point = this, options = point.options;
                        fireEvent(navigation, 'showPopup', {
                            point: point,
                            formType: 'annotation-toolbar',
                            options: {
                                langKey: 'flags',
                                type: 'flags',
                                title: [
                                    options.title,
                                    StockToolsUtilities_getFieldType('title', options.title)
                                ],
                                name: [
                                    options.name,
                                    StockToolsUtilities_getFieldType('name', options.name)
                                ]
                            },
                            onSubmit: function (updated) {
                                if (updated.actionType === 'remove') {
                                    point.remove();
                                }
                                else {
                                    point.update(navigation.fieldsToOptions(updated.fields, {}));
                                }
                            }
                        });
                    }
                }
            }
        };
        if (!toolbar || !toolbar.guiEnabled) {
            chart.addSeries(seriesOptions);
        }
        fireEvent(navigation, 'showPopup', {
            formType: 'flag',
            // Enabled options:
            options: {
                langKey: 'flags',
                type: 'flags',
                title: ['A', StockToolsUtilities_getFieldType('label', 'A')],
                name: ['Flag A', StockToolsUtilities_getFieldType('label', 'Flag A')]
            },
            // Callback on submit:
            onSubmit: function (data) {
                navigation.fieldsToOptions(data.fields, seriesOptions.data[0]);
                chart.addSeries(seriesOptions);
            }
        });
    };
}
/**
 * @private
 * @todo
 * Consider using getHoverData(), but always kdTree (columns?)
 */
function attractToPoint(e, chart) {
    const coords = chart.pointer?.getCoordinates(e);
    let coordsX, coordsY, distX = Number.MAX_VALUE, closestPoint;
    if (chart.navigationBindings && coords) {
        coordsX = StockToolsUtilities_getAssignedAxis(coords.xAxis);
        coordsY = StockToolsUtilities_getAssignedAxis(coords.yAxis);
    }
    // Exit if clicked out of axes area.
    if (!coordsX || !coordsY) {
        return;
    }
    const x = coordsX.value;
    const y = coordsY.value;
    // Search by 'x' but only in yAxis' series.
    coordsY.axis.series.forEach((series) => {
        if (series.points) {
            const point = series.searchPoint(e, true);
            if (point && distX > Math.abs(point.x - x)) {
                distX = Math.abs(point.x - x);
                closestPoint = point;
            }
        }
    });
    if (closestPoint && closestPoint.x && closestPoint.y) {
        return {
            x: closestPoint.x,
            y: closestPoint.y,
            below: y < closestPoint.y,
            series: closestPoint.series,
            xAxis: closestPoint.series.xAxis.index || 0,
            yAxis: closestPoint.series.yAxis.index || 0
        };
    }
}
/**
 * Shorthand to check if given yAxis comes from navigator.
 *
 * @private
 * @function bindingsUtils.isNotNavigatorYAxis
 *
 * @param {Highcharts.Axis} axis
 * Axis to check.
 *
 * @return {boolean}
 * True, if axis comes from navigator.
 */
function isNotNavigatorYAxis(axis) {
    return axis.userOptions.className !== 'highcharts-navigator-yaxis';
}
/**
 * Check if any of the price indicators are enabled.
 * @private
 * @function bindingsUtils.isLastPriceEnabled
 *
 * @param {Array} series
 *        Array of series.
 *
 * @return {boolean}
 *         Tells which indicator is enabled.
 */
function isPriceIndicatorEnabled(series) {
    return series.some((s) => s.lastVisiblePrice || s.lastPrice);
}
/**
 * @private
 */
function manageIndicators(data) {
    const chart = this.chart, seriesConfig = {
        linkedTo: data.linkedTo,
        type: data.type
    };
    let yAxis, parentSeries, defaultOptions, series;
    if (data.actionType === 'edit') {
        this.fieldsToOptions(data.fields, seriesConfig);
        series = chart.get(data.seriesId);
        if (series) {
            series.update(seriesConfig, false);
        }
    }
    else if (data.actionType === 'remove') {
        series = chart.get(data.seriesId);
        if (series) {
            yAxis = series.yAxis;
            if (series.linkedSeries) {
                series.linkedSeries.forEach((linkedSeries) => {
                    linkedSeries.remove(false);
                });
            }
            series.remove(false);
            if (indicatorsWithAxes.indexOf(series.type) >= 0) {
                const removedYAxisProps = {
                    height: yAxis.options.height,
                    top: yAxis.options.top
                };
                yAxis.remove(false);
                this.resizeYAxes(removedYAxisProps);
            }
        }
    }
    else {
        seriesConfig.id = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
        this.fieldsToOptions(data.fields, seriesConfig);
        parentSeries = chart.get(seriesConfig.linkedTo);
        defaultOptions = getOptions().plotOptions;
        // Make sure that indicator uses the SUM approx if SUM approx is used
        // by parent series (#13950).
        if (typeof parentSeries !== 'undefined' &&
            parentSeries instanceof (external_highcharts_src_js_default_Series_default()) &&
            parentSeries.getDGApproximation() === 'sum' &&
            // If indicator has defined approx type, use it (e.g. "ranges")
            !defined(defaultOptions && defaultOptions[seriesConfig.type] &&
                defaultOptions.dataGrouping &&
                defaultOptions.dataGrouping.approximation)) {
            seriesConfig.dataGrouping = {
                approximation: 'sum'
            };
        }
        if (indicatorsWithAxes.indexOf(data.type) >= 0) {
            yAxis = chart.addAxis({
                id: (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)(),
                offset: 0,
                opposite: true,
                title: {
                    text: ''
                },
                tickPixelInterval: 40,
                showLastLabel: false,
                labels: {
                    align: 'left',
                    y: -2
                }
            }, false, false);
            seriesConfig.yAxis = yAxis.options.id;
            this.resizeYAxes();
        }
        else {
            seriesConfig.yAxis = chart.get(data.linkedTo).options.yAxis;
        }
        if (indicatorsWithVolume.indexOf(data.type) >= 0) {
            seriesConfig.params.volumeSeriesID = chart.series.filter(function (series) {
                return series.options.type === 'column';
            })[0].options.id;
        }
        chart.addSeries(seriesConfig, false);
    }
    fireEvent(this, 'deselectButton', {
        button: this.selectedButtonElement
    });
    chart.redraw();
}
/**
 * Update height for an annotation. Height is calculated as a difference
 * between last point in `typeOptions` and current position. It's a value,
 * not pixels height.
 *
 * @private
 * @function bindingsUtils.updateHeight
 *
 * @param {Highcharts.PointerEventObject} e
 *        normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 *        Annotation to be updated
 */
function updateHeight(e, annotation) {
    const options = annotation.options.typeOptions, yAxis = isNumber(options.yAxis) && this.chart.yAxis[options.yAxis];
    if (yAxis && options.points) {
        annotation.update({
            typeOptions: {
                height: yAxis.toValue(e[yAxis.horiz ? 'chartX' : 'chartY']) -
                    (options.points[1].y || 0)
            }
        });
    }
}
/**
 * Update each point after specified index, most of the annotations use
 * this. For example crooked line: logic behind updating each point is the
 * same, only index changes when adding an annotation.
 *
 * Example: NavigationBindings.utils.updateNthPoint(1) - will generate
 * function that updates all consecutive points except point with index=0.
 *
 * @private
 * @function bindingsUtils.updateNthPoint
 *
 * @param {number} startIndex
 *        Index from which point should update
 *
 * @return {Function}
 *         Callback to be used in steps array
 */
function updateNthPoint(startIndex) {
    return function (e, annotation) {
        const options = annotation.options.typeOptions, xAxis = isNumber(options.xAxis) && this.chart.xAxis[options.xAxis], yAxis = isNumber(options.yAxis) && this.chart.yAxis[options.yAxis];
        if (xAxis && yAxis) {
            options.points.forEach((point, index) => {
                if (index >= startIndex) {
                    point.x = xAxis.toValue(e[xAxis.horiz ? 'chartX' : 'chartY']);
                    point.y = yAxis.toValue(e[yAxis.horiz ? 'chartX' : 'chartY']);
                }
            });
            annotation.update({
                typeOptions: {
                    points: options.points
                }
            });
        }
    };
}
/**
 * Update size of background (rect) in some annotations: Measure, Simple
 * Rect.
 *
 * @private
 * @function Highcharts.NavigationBindingsUtilsObject.updateRectSize
 *
 * @param {Highcharts.PointerEventObject} event
 * Normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 * Annotation to be updated
 */
function updateRectSize(event, annotation) {
    const chart = annotation.chart, options = annotation.options.typeOptions, xAxis = isNumber(options.xAxis) && chart.xAxis[options.xAxis], yAxis = isNumber(options.yAxis) && chart.yAxis[options.yAxis];
    if (xAxis && yAxis) {
        const x = xAxis.toValue(event[xAxis.horiz ? 'chartX' : 'chartY']), y = yAxis.toValue(event[yAxis.horiz ? 'chartX' : 'chartY']), width = x - options.point.x, height = options.point.y - y;
        annotation.update({
            typeOptions: {
                background: {
                    width: chart.inverted ? height : width,
                    height: chart.inverted ? width : height
                }
            }
        });
    }
}
/**
 * Compares two arrays of strings, checking their length and if corresponding
 * elements are equal.
 *
 * @param {string[]} a
 *        The first array to compare.
 * @param {string[]} b
 *        The second array to compare.
 * @return {boolean}
 *          Return `true` if the arrays are equal, otherwise `false`.
 */
function shallowArraysEqual(a, b) {
    if (!defined(a) || !defined(b)) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Default Export
 *
 * */
const StockToolsUtilities = {
    indicatorsWithAxes,
    indicatorsWithVolume,
    addFlagFromForm,
    attractToPoint,
    getAssignedAxis: StockToolsUtilities_getAssignedAxis,
    isNotNavigatorYAxis,
    isPriceIndicatorEnabled,
    manageIndicators,
    shallowArraysEqual,
    updateHeight,
    updateNthPoint,
    updateRectSize
};
/* harmony default export */ const StockTools_StockToolsUtilities = (StockToolsUtilities);

;// ./code/es-modules/Stock/StockTools/StockToolsBindings.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { addFlagFromForm: StockToolsBindings_addFlagFromForm, attractToPoint: StockToolsBindings_attractToPoint, isNotNavigatorYAxis: StockToolsBindings_isNotNavigatorYAxis, isPriceIndicatorEnabled: StockToolsBindings_isPriceIndicatorEnabled, manageIndicators: StockToolsBindings_manageIndicators, updateHeight: StockToolsBindings_updateHeight, updateNthPoint: StockToolsBindings_updateNthPoint, updateRectSize: StockToolsBindings_updateRectSize } = StockTools_StockToolsUtilities;

/* *
 *
 *  Constants
 *
 * */
/**
 * @sample {highstock} stock/stocktools/custom-stock-tools-bindings
 *         Custom stock tools bindings
 *
 * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>}
 * @since        7.0.0
 * @optionparent navigation.bindings
 */
const StockToolsBindings = {
    // Line type annotations:
    /**
     * A segment annotation bindings. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-segment", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    segment: {
        /** @ignore-option */
        className: 'highcharts-segment',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.segment.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'segment',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.segment.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A segment with an arrow annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-segment", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowSegment: {
        /** @ignore-option */
        className: 'highcharts-arrow-segment',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowSegment.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'arrowSegment',
                type: 'crookedLine',
                typeOptions: {
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowSegment.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A ray annotation bindings. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-ray", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    ray: {
        /** @ignore-option */
        className: 'highcharts-ray',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.ray.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'ray',
                type: 'infinityLine',
                typeOptions: {
                    type: 'ray',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.ray.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A ray with an arrow annotation bindings. Includes `start` and one event
     * in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-ray", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowRay: {
        /** @ignore-option */
        className: 'highcharts-arrow-ray',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowRay.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'arrowRay',
                type: 'infinityLine',
                typeOptions: {
                    type: 'ray',
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowRay.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A line annotation. Includes `start` and one event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-infinity-line", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    infinityLine: {
        /** @ignore-option */
        className: 'highcharts-infinity-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.infinityLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'infinityLine',
                type: 'infinityLine',
                typeOptions: {
                    type: 'line',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.infinityLine.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A line with arrow annotation. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-infinity-line", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowInfinityLine: {
        /** @ignore-option */
        className: 'highcharts-arrow-infinity-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowInfinityLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'arrowInfinityLine',
                type: 'infinityLine',
                typeOptions: {
                    type: 'line',
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowInfinityLine
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A horizontal line annotation. Includes `start` event.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-horizontal-line", "start": function() {}, "annotationsOptions": {}}
     */
    horizontalLine: {
        /** @ignore-option */
        className: 'highcharts-horizontal-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.horizontalLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'horizontalLine',
                type: 'infinityLine',
                draggable: 'y',
                typeOptions: {
                    type: 'horizontalLine',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.horizontalLine.annotationsOptions);
            this.chart.addAnnotation(options);
        }
    },
    /**
     * A vertical line annotation. Includes `start` event.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-line", "start": function() {}, "annotationsOptions": {}}
     */
    verticalLine: {
        /** @ignore-option */
        className: 'highcharts-vertical-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'verticalLine',
                type: 'infinityLine',
                draggable: 'x',
                typeOptions: {
                    type: 'verticalLine',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalLine.annotationsOptions);
            this.chart.addAnnotation(options);
        }
    },
    /**
     * Crooked line (three points) annotation bindings. Includes `start` and two
     * events in `steps` (for second and third points in crooked line) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-crooked3", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    // Crooked Line type annotations:
    crooked3: {
        /** @ignore-option */
        className: 'highcharts-crooked3',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.crooked3.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'crooked3',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.crooked3.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2)
        ]
    },
    /**
     * Crooked line (five points) annotation bindings. Includes `start` and four
     * events in `steps` (for all consequent points in crooked line) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-crooked5", "start": function() {}, "steps": [function() {}, function() {}, function() {}, function() {}], "annotationsOptions": {}}
     */
    crooked5: {
        /** @ignore-option */
        className: 'highcharts-crooked5',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.crooked5.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'crooked5',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.crooked5.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3),
            StockToolsBindings_updateNthPoint(4)
        ]
    },
    /**
     * Elliott wave (three points) annotation bindings. Includes `start` and two
     * events in `steps` (for second and third points) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-elliott3", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    elliott3: {
        /** @ignore-option */
        className: 'highcharts-elliott3',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.elliott3.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'elliott3',
                type: 'elliottWave',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.elliott3.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3)
        ]
    },
    /**
     * Elliott wave (five points) annotation bindings. Includes `start` and four
     * event in `steps` (for all consequent points in Elliott wave) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-elliott3", "start": function() {}, "steps": [function() {}, function() {}, function() {}, function() {}], "annotationsOptions": {}}
     */
    elliott5: {
        /** @ignore-option */
        className: 'highcharts-elliott5',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.elliott5.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'elliott5',
                type: 'elliottWave',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.elliott5.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3),
            StockToolsBindings_updateNthPoint(4),
            StockToolsBindings_updateNthPoint(5)
        ]
    },
    /**
     * A measure (x-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-x", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureX: {
        /** @ignore-option */
        className: 'highcharts-measure-x',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureX.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'x',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    crosshairX: {
                        strokeWidth: 1
                    },
                    crosshairY: {
                        enabled: false,
                        strokeWidth: 0
                    },
                    background: {
                        width: 0,
                        height: 0
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureX.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    /**
     * A measure (y-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-y", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureY: {
        /** @ignore-option */
        className: 'highcharts-measure-y',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureY.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'y',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    crosshairX: {
                        enabled: false,
                        strokeWidth: 0
                    },
                    crosshairY: {
                        strokeWidth: 1
                    },
                    background: {
                        width: 0,
                        height: 0,
                        strokeWidth: 0
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureY.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    /**
     * A measure (xy-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-xy", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureXY: {
        /** @ignore-option */
        className: 'highcharts-measure-xy',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureXY.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'xy',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    background: {
                        width: 0,
                        height: 0,
                        strokeWidth: 0
                    },
                    crosshairX: {
                        strokeWidth: 1
                    },
                    crosshairY: {
                        strokeWidth: 1
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureXY.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    // Advanced type annotations:
    /**
     * A fibonacci annotation bindings. Includes `start` and two events in
     * `steps` array (updates second point, then height).
     *
     *   @sample {highstock} stock/stocktools/custom-stock-tools-bindings
     *     Custom stock tools bindings
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-fibonacci", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": { "typeOptions": { "reversed": false }}}
     */
    fibonacci: {
        className: 'highcharts-fibonacci',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.fibonacci.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'fibonacci',
                type: 'fibonacci',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.fibonacci.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateHeight
        ]
    },
    /**
     * A parallel channel (tunnel) annotation bindings. Includes `start` and
     * two events in `steps` array (updates second point, then height).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-parallel-channel", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    parallelChannel: {
        /** @ignore-option */
        className: 'highcharts-parallel-channel',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.parallelChannel.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'parallelChannel',
                type: 'tunnel',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.parallelChannel
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateHeight
        ]
    },
    /**
     * An Andrew's pitchfork annotation bindings. Includes `start` and two
     * events in `steps` array (sets second and third control points).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-pitchfork", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    pitchfork: {
        /** @ignore-option */
        className: 'highcharts-pitchfork',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.pitchfork.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = merge({
                langKey: 'pitchfork',
                type: 'pitchfork',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value,
                            controlPoint: {
                                style: {
                                    fill: "#f21313" /* Palette.negativeColor */
                                }
                            }
                        },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.pitchfork.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2)
        ]
    },
    // Labels with arrow and auto increments
    /**
     * A vertical counter annotation bindings. Includes `start` event. On click,
     * finds the closest point and marks it with a numeric annotation -
     * incrementing counter on each add.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-counter", "start": function() {}, "annotationsOptions": {}}
     */
    verticalCounter: {
        /** @ignore-option */
        className: 'highcharts-vertical-counter',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalCounter.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            this.verticalCounter = this.verticalCounter || 0;
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'verticalCounter',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40,
                        text: this.verticalCounter.toString()
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalCounter.annotationsOptions), annotation = this.chart.addAnnotation(options);
            this.verticalCounter++;
            (annotation.options.events?.click).call(annotation, {});
        }
    },
    /**
     * A time cycles annotation bindings. Includes `start` event and 1 `step`
     * event. first click marks the beginning of the circle, and the second one
     * sets its diameter.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-time-cycles", "start": function() {}, "steps": [function (){}] "annotationsOptions": {}}
     */
    timeCycles: {
        className: 'highcharts-time-cycles',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.timeCycles.annotationsOptions
         */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'timeCycles',
                type: 'timeCycles',
                typeOptions: {
                    xAxis: closestPoint.xAxis,
                    yAxis: closestPoint.yAxis,
                    points: [{
                            x: closestPoint.x
                        }, {
                            x: closestPoint.x
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.timeCycles.annotationsOptions), annotation = this.chart.addAnnotation(options);
            (annotation.options.events?.click).call(annotation, {});
            return annotation;
        },
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    verticalLabel: {
        /** @ignore-option */
        className: 'highcharts-vertical-label',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalLabel.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'verticalLabel',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalLabel.annotationsOptions), annotation = this.chart.addAnnotation(options);
            (annotation.options.events?.click).call(annotation, {});
        }
    },
    /**
     * A vertical arrow annotation bindings. Includes `start` event. On click,
     * finds the closest point and marks it with an arrow.
     * `${palette.positiveColor}` is the color of the arrow when
     * pointing from above and `${palette.negativeColor}`
     * when pointing from below the point.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-arrow", "start": function() {}, "annotationsOptions": {}}
     */
    verticalArrow: {
        /** @ignore-option */
        className: 'highcharts-vertical-arrow',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalArrow.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                langKey: 'verticalArrow',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40,
                        format: ' '
                    },
                    connector: {
                        fill: 'none',
                        stroke: closestPoint.below ?
                            "#f21313" /* Palette.negativeColor */ :
                            "#06b535" /* Palette.positiveColor */
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalArrow.annotationsOptions), annotation = this.chart.addAnnotation(options);
            (annotation.options.events?.click).call(annotation, {});
        }
    },
    /**
     * The Fibonacci Time Zones annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-fibonacci-time-zones", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    fibonacciTimeZones: {
        /** @ignore-option */
        className: 'highcharts-fibonacci-time-zones',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.fibonacciTimeZones.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = merge({
                type: 'fibonacciTimeZones',
                langKey: 'fibonacciTimeZones',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.fibonacciTimeZones
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        // eslint-disable-next-line valid-jsdoc
        steps: [
            function (e, annotation) {
                const mockPointOpts = annotation.options.typeOptions?.points, x = (mockPointOpts?.[0]).x, [coordsX, coordsY] = this.getCoords(e);
                if (coordsX && coordsY) {
                    annotation.update({
                        typeOptions: {
                            xAxis: coordsX.axis.index,
                            yAxis: coordsY.axis.index,
                            points: [{
                                    x: x
                                }, {
                                    x: coordsX.value
                                }]
                        }
                    });
                }
            }
        ]
    },
    // Flag types:
    /**
     * A flag series bindings. Includes `start` event. On click, finds the
     * closest point and marks it with a flag with `'circlepin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-circlepin", "start": function() {}}
     */
    flagCirclepin: {
        /** @ignore-option */
        className: 'highcharts-flag-circlepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('circlepin')
    },
    /**
     * A flag series bindings. Includes `start` event. On click, finds the
     * closest point and marks it with a flag with `'diamondpin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-diamondpin", "start": function() {}}
     */
    flagDiamondpin: {
        /** @ignore-option */
        className: 'highcharts-flag-diamondpin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('flag')
    },
    /**
     * A flag series bindings. Includes `start` event.
     * On click, finds the closest point and marks it with a flag with
     * `'squarepin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-squarepin", "start": function() {}}
     */
    flagSquarepin: {
        /** @ignore-option */
        className: 'highcharts-flag-squarepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('squarepin')
    },
    /**
     * A flag series bindings. Includes `start` event.
     * On click, finds the closest point and marks it with a flag without pin
     * shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-simplepin", "start": function() {}}
     */
    flagSimplepin: {
        /** @ignore-option */
        className: 'highcharts-flag-simplepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('nopin')
    },
    // Other tools:
    /**
     * Enables zooming in xAxis on a chart. Includes `start` event which
     * changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-x", "init": function() {}}
     */
    zoomX: {
        /** @ignore-option */
        className: 'highcharts-zoom-x',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'x'
                    }
                }
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Enables zooming in yAxis on a chart. Includes `start` event which
     * changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-y", "init": function() {}}
     */
    zoomY: {
        /** @ignore-option */
        className: 'highcharts-zoom-y',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'y'
                    }
                }
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Enables zooming in xAxis and yAxis on a chart. Includes `start` event
     * which changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-xy", "init": function() {}}
     */
    zoomXY: {
        /** @ignore-option */
        className: 'highcharts-zoom-xy',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'xy'
                    }
                }
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'line'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-line", "init": function() {}}
     */
    seriesTypeLine: {
        /** @ignore-option */
        className: 'highcharts-series-type-line',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'line',
                useOhlcData: true
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'ohlc'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-ohlc", "init": function() {}}
     */
    seriesTypeOhlc: {
        /** @ignore-option */
        className: 'highcharts-series-type-ohlc',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'ohlc'
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'candlestick'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-candlestick", "init": function() {}}
     */
    seriesTypeCandlestick: {
        /** @ignore-option */
        className: 'highcharts-series-type-candlestick',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'candlestick'
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'heikinashi'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-heikinashi", "init": function() {}}
     */
    seriesTypeHeikinAshi: {
        /** @ignore-option */
        className: 'highcharts-series-type-heikinashi',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'heikinashi'
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Change main series to `'hlc'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-hlc", "init": function () {}}
     */
    seriesTypeHLC: {
        className: 'highcharts-series-type-hlc',
        init: function (button) {
            this.chart.series[0].update({
                type: 'hlc',
                useOhlcData: true
            });
            fireEvent(this, 'deselectButton', { button });
        }
    },
    /**
     * Changes main series to `'hollowcandlestick'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-hollowcandlestick", "init": function() {}}
     */
    seriesTypeHollowCandlestick: {
        /** @ignore-option */
        className: 'highcharts-series-type-hollowcandlestick',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'hollowcandlestick'
            });
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Displays chart in fullscreen.
     *
     * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "noDataState": "normal", "highcharts-full-screen", "init": function() {}}
     */
    fullScreen: {
        /** @ignore-option */
        className: 'highcharts-full-screen',
        noDataState: 'normal',
        /** @ignore-option */
        init: function (button) {
            if (this.chart.fullscreen) {
                this.chart.fullscreen.toggle();
            }
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Hides/shows two price indicators:
     * - last price in the dataset
     * - last price in the selected range
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-current-price-indicator", "init": function() {}}
     */
    currentPriceIndicator: {
        /** @ignore-option */
        className: 'highcharts-current-price-indicator',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const chart = this.chart, series = chart.series, gui = chart.stockTools, priceIndicatorEnabled = StockToolsBindings_isPriceIndicatorEnabled(chart.series);
            if (gui && gui.guiEnabled) {
                series.forEach(function (series) {
                    series.update({
                        lastPrice: { enabled: !priceIndicatorEnabled },
                        lastVisiblePrice: {
                            enabled: !priceIndicatorEnabled,
                            label: { enabled: true }
                        }
                    }, false);
                });
                chart.redraw();
            }
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Indicators bindings. Includes `init` event to show a popup.
     *
     * Note: In order to show base series from the chart in the popup's
     * dropdown each series requires
     * [series.id](https://api.highcharts.com/highstock/series.line.id) to be
     * defined.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-indicators", "init": function() {}}
     */
    indicators: {
        /** @ignore-option */
        className: 'highcharts-indicators',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function () {
            const navigation = this;
            fireEvent(navigation, 'showPopup', {
                formType: 'indicators',
                options: {},
                // Callback on submit:
                onSubmit: function (data) {
                    StockToolsBindings_manageIndicators.call(navigation, data);
                }
            });
        }
    },
    /**
     * Hides/shows all annotations on a chart.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-toggle-annotations", "init": function() {}}
     */
    toggleAnnotations: {
        /** @ignore-option */
        className: 'highcharts-toggle-annotations',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const chart = this.chart, gui = chart.stockTools, iconsURL = gui.getIconsURL();
            this.toggledAnnotations = !this.toggledAnnotations;
            (chart.annotations || []).forEach(function (annotation) {
                annotation.setVisibility(!this.toggledAnnotations);
            }, this);
            if (gui && gui.guiEnabled) {
                if (this.toggledAnnotations) {
                    button.firstChild.style['background-image'] =
                        'url("' + iconsURL +
                            'annotations-hidden.svg")';
                }
                else {
                    button.firstChild.style['background-image'] =
                        'url("' + iconsURL +
                            'annotations-visible.svg")';
                }
            }
            fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Save a chart in localStorage under `highcharts-chart` key.
     * Stored items:
     * - annotations
     * - indicators (with yAxes)
     * - flags
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-save-chart", "noDataState": "normal", "init": function() {}}
     */
    saveChart: {
        /** @ignore-option */
        className: 'highcharts-save-chart',
        noDataState: 'normal',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const navigation = this, chart = navigation.chart, annotations = [], indicators = [], flags = [], yAxes = [];
            chart.annotations.forEach(function (annotation, index) {
                annotations[index] = annotation.userOptions;
            });
            chart.series.forEach(function (series) {
                if (series.is('sma')) {
                    indicators.push(series.userOptions);
                }
                else if (series.type === 'flags') {
                    flags.push(series.userOptions);
                }
            });
            chart.yAxis.forEach(function (yAxis) {
                if (StockToolsBindings_isNotNavigatorYAxis(yAxis)) {
                    yAxes.push(yAxis.options);
                }
            });
            external_highcharts_src_js_default_default().win.localStorage.setItem('highcharts-chart', JSON.stringify({
                annotations: annotations,
                indicators: indicators,
                flags: flags,
                yAxes: yAxes
            }));
            fireEvent(this, 'deselectButton', { button: button });
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const StockTools_StockToolsBindings = (StockToolsBindings);

;// ./code/es-modules/Stock/StockTools/StockToolsDefaults.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
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
 * @optionparent lang
 */
const StockToolsDefaults_lang = {
    /**
     * Configure the stockTools GUI titles(hints) in the chart. Requires
     * the `stock-tools.js` module to be loaded.
     *
     * @product highstock
     * @since   7.0.0
     */
    stockTools: {
        gui: {
            // Main buttons:
            simpleShapes: 'Simple shapes',
            lines: 'Lines',
            crookedLines: 'Crooked lines',
            measure: 'Measure',
            advanced: 'Advanced',
            toggleAnnotations: 'Toggle annotations',
            verticalLabels: 'Vertical labels',
            flags: 'Flags',
            zoomChange: 'Zoom change',
            typeChange: 'Type change',
            saveChart: 'Save chart',
            indicators: 'Indicators',
            currentPriceIndicator: 'Current Price Indicators',
            // Other features:
            zoomX: 'Zoom X',
            zoomY: 'Zoom Y',
            zoomXY: 'Zooom XY',
            fullScreen: 'Fullscreen',
            typeOHLC: 'OHLC',
            typeLine: 'Line',
            typeCandlestick: 'Candlestick',
            typeHLC: 'HLC',
            typeHollowCandlestick: 'Hollow Candlestick',
            typeHeikinAshi: 'Heikin Ashi',
            // Basic shapes:
            circle: 'Circle',
            ellipse: 'Ellipse',
            label: 'Label',
            rectangle: 'Rectangle',
            // Flags:
            flagCirclepin: 'Flag circle',
            flagDiamondpin: 'Flag diamond',
            flagSquarepin: 'Flag square',
            flagSimplepin: 'Flag simple',
            // Measures:
            measureXY: 'Measure XY',
            measureX: 'Measure X',
            measureY: 'Measure Y',
            // Segment, ray and line:
            segment: 'Segment',
            arrowSegment: 'Arrow segment',
            ray: 'Ray',
            arrowRay: 'Arrow ray',
            line: 'Line',
            arrowInfinityLine: 'Arrow line',
            horizontalLine: 'Horizontal line',
            verticalLine: 'Vertical line',
            infinityLine: 'Infinity line',
            // Crooked lines:
            crooked3: 'Crooked 3 line',
            crooked5: 'Crooked 5 line',
            elliott3: 'Elliott 3 line',
            elliott5: 'Elliott 5 line',
            // Counters:
            verticalCounter: 'Vertical counter',
            verticalLabel: 'Vertical label',
            verticalArrow: 'Vertical arrow',
            // Advanced:
            fibonacci: 'Fibonacci',
            fibonacciTimeZones: 'Fibonacci Time Zones',
            pitchfork: 'Pitchfork',
            parallelChannel: 'Parallel channel',
            timeCycles: 'Time Cycles'
        }
    },
    navigation: {
        popup: {
            // Annotations:
            circle: 'Circle',
            ellipse: 'Ellipse',
            rectangle: 'Rectangle',
            label: 'Label',
            segment: 'Segment',
            arrowSegment: 'Arrow segment',
            ray: 'Ray',
            arrowRay: 'Arrow ray',
            line: 'Line',
            arrowInfinityLine: 'Arrow line',
            horizontalLine: 'Horizontal line',
            verticalLine: 'Vertical line',
            crooked3: 'Crooked 3 line',
            crooked5: 'Crooked 5 line',
            elliott3: 'Elliott 3 line',
            elliott5: 'Elliott 5 line',
            verticalCounter: 'Vertical counter',
            verticalLabel: 'Vertical label',
            verticalArrow: 'Vertical arrow',
            fibonacci: 'Fibonacci',
            fibonacciTimeZones: 'Fibonacci Time Zones',
            pitchfork: 'Pitchfork',
            parallelChannel: 'Parallel channel',
            infinityLine: 'Infinity line',
            measure: 'Measure',
            measureXY: 'Measure XY',
            measureX: 'Measure X',
            measureY: 'Measure Y',
            timeCycles: 'Time Cycles',
            // Flags:
            flags: 'Flags',
            // GUI elements:
            addButton: 'Add',
            saveButton: 'Save',
            editButton: 'Edit',
            removeButton: 'Remove',
            series: 'Series',
            volume: 'Volume',
            connector: 'Connector',
            // Field names:
            innerBackground: 'Inner background',
            outerBackground: 'Outer background',
            crosshairX: 'Crosshair X',
            crosshairY: 'Crosshair Y',
            tunnel: 'Tunnel',
            background: 'Background',
            // Indicators' searchbox (#16019):
            noFilterMatch: 'No match',
            // Indicators' params (#15170):
            searchIndicators: 'Search Indicators',
            clearFilter: '\u2715 clear filter',
            index: 'Index',
            period: 'Period',
            periods: 'Periods',
            standardDeviation: 'Standard deviation',
            periodTenkan: 'Tenkan period',
            periodSenkouSpanB: 'Senkou Span B period',
            periodATR: 'ATR period',
            multiplierATR: 'ATR multiplier',
            shortPeriod: 'Short period',
            longPeriod: 'Long period',
            signalPeriod: 'Signal period',
            decimals: 'Decimals',
            algorithm: 'Algorithm',
            topBand: 'Top band',
            bottomBand: 'Bottom band',
            initialAccelerationFactor: 'Initial acceleration factor',
            maxAccelerationFactor: 'Max acceleration factor',
            increment: 'Increment',
            multiplier: 'Multiplier',
            ranges: 'Ranges',
            highIndex: 'High index',
            lowIndex: 'Low index',
            deviation: 'Deviation',
            xAxisUnit: 'x-axis unit',
            factor: 'Factor',
            fastAvgPeriod: 'Fast average period',
            slowAvgPeriod: 'Slow average period',
            average: 'Average',
            /**
             * Configure the aliases for indicator names.
             *
             * @product highstock
             * @since 9.3.0
             */
            indicatorAliases: {
                // Overlays
                /**
                 * Acceleration Bands alias.
                 *
                 * @default ['Acceleration Bands']
                 * @type    {Array<string>}
                 */
                abands: ['Acceleration Bands'],
                /**
                 * Bollinger Bands alias.
                 *
                 * @default ['Bollinger Bands']
                 * @type    {Array<string>}
                 */
                bb: ['Bollinger Bands'],
                /**
                 * Double Exponential Moving Average alias.
                 *
                 * @default ['Double Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                dema: ['Double Exponential Moving Average'],
                /**
                 *  Exponential Moving Average alias.
                 *
                 * @default ['Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                ema: ['Exponential Moving Average'],
                /**
                 *  Ichimoku Kinko Hyo alias.
                 *
                 * @default ['Ichimoku Kinko Hyo']
                 * @type    {Array<string>}
                 */
                ikh: ['Ichimoku Kinko Hyo'],
                /**
                 *  Keltner Channels alias.
                 *
                 * @default ['Keltner Channels']
                 * @type    {Array<string>}
                 */
                keltnerchannels: ['Keltner Channels'],
                /**
                 *  Linear Regression alias.
                 *
                 * @default ['Linear Regression']
                 * @type    {Array<string>}
                 */
                linearRegression: ['Linear Regression'],
                /**
                 *  Pivot Points alias.
                 *
                 * @default ['Pivot Points']
                 * @type    {Array<string>}
                 */
                pivotpoints: ['Pivot Points'],
                /**
                 *  Price Channel alias.
                 *
                 * @default ['Price Channel']
                 * @type    {Array<string>}
                 */
                pc: ['Price Channel'],
                /**
                 *  Price Envelopes alias.
                 *
                 * @default ['Price Envelopes']
                 * @type    {Array<string>}
                 */
                priceenvelopes: ['Price Envelopes'],
                /**
                 *  Parabolic SAR alias.
                 *
                 * @default ['Parabolic SAR']
                 * @type    {Array<string>}
                 */
                psar: ['Parabolic SAR'],
                /**
                 *  Simple Moving Average alias.
                 *
                 * @default ['Simple Moving Average']
                 * @type    {Array<string>}
                 */
                sma: ['Simple Moving Average'],
                /**
                 *  Super Trend alias.
                 *
                 * @default ['Super Trend']
                 * @type    {Array<string>}
                 */
                supertrend: ['Super Trend'],
                /**
                 *  Triple Exponential Moving Average alias.
                 *
                 * @default ['Triple Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                tema: ['Triple Exponential Moving Average'],
                /**
                 *  Volume by Price alias.
                 *
                 * @default ['Volume by Price']
                 * @type    {Array<string>}
                 */
                vbp: ['Volume by Price'],
                /**
                 *  Volume Weighted Moving Average alias.
                 *
                 * @default ['Volume Weighted Moving Average']
                 * @type    {Array<string>}
                 */
                vwap: ['Volume Weighted Moving Average'],
                /**
                 *  Weighted Moving Average alias.
                 *
                 * @default ['Weighted Moving Average']
                 * @type    {Array<string>}
                 */
                wma: ['Weighted Moving Average'],
                /**
                 *  Zig Zagalias.
                 *
                 * @default ['Zig Zag']
                 * @type    {Array<string>}
                 */
                zigzag: ['Zig Zag'],
                // Oscillators
                /**
                 *  Absolute price indicator alias.
                 *
                 * @default ['Absolute price indicator']
                 * @type    {Array<string>}
                 */
                apo: ['Absolute price indicator'],
                /**
                 * Accumulation/Distribution alias.
                 *
                 * @default ['Accumulation/Distribution’]
                 * @type    {Array<string>}
                 */
                ad: ['Accumulation/Distribution'],
                /**
                 *  Aroon alias.
                 *
                 * @default ['Aroon']
                 * @type    {Array<string>}
                 */
                aroon: ['Aroon'],
                /**
                 *  Aroon oscillator alias.
                 *
                 * @default ['Aroon oscillator']
                 * @type    {Array<string>}
                 */
                aroonoscillator: ['Aroon oscillator'],
                /**
                 *  Average True Range alias.
                 *
                 * @default ['Average True Range’]
                 * @type    {Array<string>}
                 */
                atr: ['Average True Range'],
                /**
                 *  Awesome oscillator alias.
                 *
                 * @default ['Awesome oscillator’]
                 * @type    {Array<string>}
                 */
                ao: ['Awesome oscillator'],
                /**
                 *  Commodity Channel Index alias.
                 *
                 * @default ['Commodity Channel Index’]
                 * @type    {Array<string>}
                 */
                cci: ['Commodity Channel Index'],
                /**
                 *  Chaikin alias.
                 *
                 * @default ['Chaikin’]
                 * @type    {Array<string>}
                 */
                chaikin: ['Chaikin'],
                /**
                 *  Chaikin Money Flow alias.
                 *
                 * @default ['Chaikin Money Flow’]
                 * @type    {Array<string>}
                 */
                cmf: ['Chaikin Money Flow'],
                /**
                 *  Chande Momentum Oscillator alias.
                 *
                 * @default ['Chande Momentum Oscillator’]
                 * @type    {Array<string>}
                 */
                cmo: ['Chande Momentum Oscillator'],
                /**
                 *  Disparity Index alias.
                 *
                 * @default ['Disparity Index’]
                 * @type    {Array<string>}
                 */
                disparityindex: ['Disparity Index'],
                /**
                 *  Directional Movement Index alias.
                 *
                 * @default ['Directional Movement Index’]
                 * @type    {Array<string>}
                 */
                dmi: ['Directional Movement Index'],
                /**
                 *  Detrended price oscillator alias.
                 *
                 * @default ['Detrended price oscillator’]
                 * @type    {Array<string>}
                 */
                dpo: ['Detrended price oscillator'],
                /**
                 *  Klinger Oscillator alias.
                 *
                 * @default [‘Klinger Oscillator’]
                 * @type    {Array<string>}
                 */
                klinger: ['Klinger Oscillator'],
                /**
                 *  Linear Regression Angle alias.
                 *
                 * @default [‘Linear Regression Angle’]
                 * @type    {Array<string>}
                 */
                linearRegressionAngle: ['Linear Regression Angle'],
                /**
                 *  Linear Regression Intercept alias.
                 *
                 * @default [‘Linear Regression Intercept’]
                 * @type    {Array<string>}
                 */
                linearRegressionIntercept: ['Linear Regression Intercept'],
                /**
                 *  Linear Regression Slope alias.
                 *
                 * @default [‘Linear Regression Slope’]
                 * @type    {Array<string>}
                 */
                linearRegressionSlope: ['Linear Regression Slope'],
                /**
                 *  Moving Average Convergence Divergence alias.
                 *
                 * @default ['Moving Average Convergence Divergence’]
                 * @type    {Array<string>}
                 */
                macd: ['Moving Average Convergence Divergence'],
                /**
                 *  Money Flow Index alias.
                 *
                 * @default ['Money Flow Index’]
                 * @type    {Array<string>}
                 */
                mfi: ['Money Flow Index'],
                /**
                 *  Momentum alias.
                 *
                 * @default [‘Momentum’]
                 * @type    {Array<string>}
                 */
                momentum: ['Momentum'],
                /**
                 *  Normalized Average True Range alias.
                 *
                 * @default ['Normalized Average True Range’]
                 * @type    {Array<string>}
                 */
                natr: ['Normalized Average True Range'],
                /**
                 *  On-Balance Volume alias.
                 *
                 * @default ['On-Balance Volume’]
                 * @type    {Array<string>}
                 */
                obv: ['On-Balance Volume'],
                /**
                 * Percentage Price oscillator alias.
                 *
                 * @default ['Percentage Price oscillator’]
                 * @type    {Array<string>}
                 */
                ppo: ['Percentage Price oscillator'],
                /**
                 *  Rate of Change alias.
                 *
                 * @default ['Rate of Change’]
                 * @type    {Array<string>}
                 */
                roc: ['Rate of Change'],
                /**
                 *  Relative Strength Index alias.
                 *
                 * @default ['Relative Strength Index’]
                 * @type    {Array<string>}
                 */
                rsi: ['Relative Strength Index'],
                /**
                 *  Slow Stochastic alias.
                 *
                 * @default [‘Slow Stochastic’]
                 * @type    {Array<string>}
                 */
                slowstochastic: ['Slow Stochastic'],
                /**
                 *  Stochastic alias.
                 *
                 * @default [‘Stochastic’]
                 * @type    {Array<string>}
                 */
                stochastic: ['Stochastic'],
                /**
                 *  TRIX alias.
                 *
                 * @default [‘TRIX’]
                 * @type    {Array<string>}
                 */
                trix: ['TRIX'],
                /**
                 *  Williams %R alias.
                 *
                 * @default [‘Williams %R’]
                 * @type    {Array<string>}
                 */
                williamsr: ['Williams %R']
            }
        }
    }
};
/**
 * Configure the stockTools gui strings in the chart. Requires the
 * [stockTools module]() to be loaded. For a description of the module
 * and information on its features, see [Highcharts StockTools]().
 *
 * @product highstock
 *
 * @sample stock/demo/stock-tools-gui Stock Tools GUI
 *
 * @sample stock/demo/stock-tools-custom-gui Stock Tools customized GUI
 *
 * @since        7.0.0
 * @optionparent stockTools
 */
const stockTools = {
    /**
     * Definitions of buttons in Stock Tools GUI.
     */
    gui: {
        /**
         * Path where Highcharts will look for icons. Change this to use
         * icons from a different server.
         *
         * Since 7.1.3 use [iconsURL](#navigation.iconsURL) for popup and
         * stock tools.
         *
         * @deprecated
         * @apioption stockTools.gui.iconsURL
         *
         */
        /**
         * Enable or disable the stockTools gui.
         */
        enabled: true,
        /**
         * A CSS class name to apply to the stocktools' div,
         * allowing unique CSS styling for each chart.
         */
        className: 'highcharts-bindings-wrapper',
        /**
         * A CSS class name to apply to the container of buttons,
         * allowing unique CSS styling for each chart.
         */
        toolbarClassName: 'stocktools-toolbar',
        /**
         * A collection of strings pointing to config options for the
         * toolbar items. Each name refers to a unique key from the
         * definitions object.
         *
         * @type    {Array<string>}
         * @default [
         *   'indicators',
         *   'separator',
         *   'simpleShapes',
         *   'lines',
         *   'crookedLines',
         *   'measure',
         *   'advanced',
         *   'toggleAnnotations',
         *   'separator',
         *   'verticalLabels',
         *   'flags',
         *   'separator',
         *   'zoomChange',
         *   'fullScreen',
         *   'typeChange',
         *   'separator',
         *   'currentPriceIndicator',
         *   'saveChart'
         * ]
         */
        buttons: [
            'indicators',
            'separator',
            'simpleShapes',
            'lines',
            'crookedLines',
            'measure',
            'advanced',
            'toggleAnnotations',
            'separator',
            'verticalLabels',
            'flags',
            'separator',
            'zoomChange',
            'fullScreen',
            'typeChange',
            'separator',
            'currentPriceIndicator',
            'saveChart'
        ],
        /**
         * An options object of the buttons definitions. Each name refers to
         * unique key from buttons array.
         */
        definitions: {
            separator: {
                elementType: 'span',
                /**
                 * A predefined background symbol for the button.
                 */
                symbol: 'separator.svg'
            },
            simpleShapes: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'label',
                 *   'circle',
                 *   'ellipse',
                 *   'rectangle'
                 * ]
                 *
                 */
                items: [
                    'label',
                    'circle',
                    'ellipse',
                    'rectangle'
                ],
                circle: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'circle.svg'
                },
                ellipse: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'ellipse.svg'
                },
                rectangle: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'rectangle.svg'
                },
                label: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'label.svg'
                }
            },
            flags: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'flagCirclepin',
                 *   'flagDiamondpin',
                 *   'flagSquarepin',
                 *   'flagSimplepin'
                 * ]
                 *
                 */
                items: [
                    'flagCirclepin',
                    'flagDiamondpin',
                    'flagSquarepin',
                    'flagSimplepin'
                ],
                flagSimplepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'flag-basic.svg'
                },
                flagDiamondpin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'flag-diamond.svg'
                },
                flagSquarepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'flag-trapeze.svg'
                },
                flagCirclepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'flag-elipse.svg'
                }
            },
            lines: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'segment',
                 *   'arrowSegment',
                 *   'ray',
                 *   'arrowRay',
                 *   'line',
                 *   'arrowInfinityLine',
                 *   'horizontalLine',
                 *   'verticalLine'
                 * ]
                 */
                items: [
                    'segment',
                    'arrowSegment',
                    'ray',
                    'arrowRay',
                    'line',
                    'arrowInfinityLine',
                    'horizontalLine',
                    'verticalLine'
                ],
                segment: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'segment.svg'
                },
                arrowSegment: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-segment.svg'
                },
                ray: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'ray.svg'
                },
                arrowRay: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-ray.svg'
                },
                line: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'line.svg'
                },
                arrowInfinityLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-line.svg'
                },
                verticalLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-line.svg'
                },
                horizontalLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'horizontal-line.svg'
                }
            },
            crookedLines: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'elliott3',
                 *   'elliott5',
                 *   'crooked3',
                 *   'crooked5'
                 * ]
                 *
                 */
                items: [
                    'elliott3',
                    'elliott5',
                    'crooked3',
                    'crooked5'
                ],
                crooked3: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'crooked-3.svg'
                },
                crooked5: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'crooked-5.svg'
                },
                elliott3: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'elliott-3.svg'
                },
                elliott5: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'elliott-5.svg'
                }
            },
            verticalLabels: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'verticalCounter',
                 *   'verticalLabel',
                 *   'verticalArrow'
                 * ]
                 */
                items: [
                    'verticalCounter',
                    'verticalLabel',
                    'verticalArrow'
                ],
                verticalCounter: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-counter.svg'
                },
                verticalLabel: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-label.svg'
                },
                verticalArrow: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-arrow.svg'
                }
            },
            advanced: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'fibonacci',
                 *   'fibonacciTimeZones',
                 *   'pitchfork',
                 *   'parallelChannel',
                 *   'timeCycles'
                 * ]
                 */
                items: [
                    'fibonacci',
                    'fibonacciTimeZones',
                    'pitchfork',
                    'parallelChannel',
                    'timeCycles'
                ],
                pitchfork: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'pitchfork.svg'
                },
                fibonacci: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'fibonacci.svg'
                },
                fibonacciTimeZones: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'fibonacci-timezone.svg'
                },
                parallelChannel: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'parallel-channel.svg'
                },
                timeCycles: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type {string}
                     */
                    symbol: 'time-cycles.svg'
                }
            },
            measure: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'measureXY',
                 *   'measureX',
                 *   'measureY'
                 * ]
                 */
                items: [
                    'measureXY',
                    'measureX',
                    'measureY'
                ],
                measureX: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-x.svg'
                },
                measureY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-y.svg'
                },
                measureXY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-xy.svg'
                }
            },
            toggleAnnotations: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'annotations-visible.svg'
            },
            currentPriceIndicator: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'current-price-show.svg'
            },
            indicators: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'indicators.svg'
            },
            zoomChange: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'zoomX',
                 *   'zoomY',
                 *   'zoomXY'
                 * ]
                 */
                items: [
                    'zoomX',
                    'zoomY',
                    'zoomXY'
                ],
                zoomX: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-x.svg'
                },
                zoomY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-y.svg'
                },
                zoomXY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-xy.svg'
                }
            },
            typeChange: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'typeOHLC',
                 *   'typeLine',
                 *   'typeCandlestick'
                 *   'typeHollowCandlestick'
                 * ]
                 */
                items: [
                    'typeOHLC',
                    'typeLine',
                    'typeCandlestick',
                    'typeHollowCandlestick',
                    'typeHLC',
                    'typeHeikinAshi'
                ],
                typeOHLC: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-ohlc.svg'
                },
                typeLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-line.svg'
                },
                typeCandlestick: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-candlestick.svg'
                },
                typeHLC: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-hlc.svg'
                },
                typeHeikinAshi: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-heikin-ashi.svg'
                },
                typeHollowCandlestick: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-hollow-candlestick.svg'
                }
            },
            fullScreen: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'fullscreen.svg'
            },
            saveChart: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'save-chart.svg'
            }
        },
        /**
         * Whether the stock tools toolbar is visible.
         *
         * @since 11.4.4
         */
        visible: true
    }
};
/* *
 *
 *  Default Exports
 *
 * */
const StockToolsDefaults = {
    lang: StockToolsDefaults_lang,
    stockTools
};
/* harmony default export */ const StockTools_StockToolsDefaults = (StockToolsDefaults);

;// ./code/es-modules/Stock/StockTools/StockTools.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { setOptions: StockTools_setOptions } = (external_highcharts_src_js_default_default());



const { isNotNavigatorYAxis: StockTools_isNotNavigatorYAxis, isPriceIndicatorEnabled: StockTools_isPriceIndicatorEnabled } = StockTools_StockToolsUtilities;

/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function compose(NavigationBindingsClass) {
    const navigationProto = NavigationBindingsClass.prototype;
    if (!navigationProto.utils?.manageIndicators) {
        // Extends NavigationBindings to support indicators and resizers:
        navigationProto.getYAxisPositions = navigationGetYAxisPositions;
        navigationProto.getYAxisResizers = navigationGetYAxisResizers;
        navigationProto.recalculateYAxisPositions =
            navigationRecalculateYAxisPositions;
        navigationProto.resizeYAxes = navigationResizeYAxes;
        navigationProto.utils = navigationProto.utils || {};
        navigationProto.utils.indicatorsWithAxes = StockTools_StockToolsUtilities.indicatorsWithAxes;
        navigationProto.utils.indicatorsWithVolume = StockTools_StockToolsUtilities.indicatorsWithVolume;
        navigationProto.utils.getAssignedAxis = StockTools_StockToolsUtilities.getAssignedAxis;
        navigationProto.utils.isPriceIndicatorEnabled = StockTools_isPriceIndicatorEnabled;
        navigationProto.utils.manageIndicators = StockTools_StockToolsUtilities.manageIndicators;
        StockTools_setOptions(StockTools_StockToolsDefaults);
        StockTools_setOptions({
            navigation: {
                bindings: StockTools_StockToolsBindings
            }
        });
    }
}
/**
 * Get current positions for all yAxes. If new axis does not have position,
 * returned is default height and last available top place.
 *
 * @private
 * @function Highcharts.NavigationBindings#getYAxisPositions
 *
 * @param {Array<Highcharts.Axis>} yAxes
 *        Array of yAxes available in the chart.
 *
 * @param {number} plotHeight
 *        Available height in the chart.
 *
 * @param {number} defaultHeight
 *        Default height in percents.
 *
 * @param {Highcharts.AxisPositions} removedYAxisProps
 *        Height and top value of the removed yAxis in percents.
 *
 * @return {Highcharts.YAxisPositions}
 *         An object containing an array of calculated positions
 *         in percentages. Format: `{top: Number, height: Number}`
 *         and maximum value of top + height of axes.
 */
function navigationGetYAxisPositions(yAxes, plotHeight, defaultHeight, removedYAxisProps) {
    let allAxesHeight = 0, previousAxisHeight, removedHeight, removedTop;
    /** @private */
    function isPercentage(prop) {
        return defined(prop) && !isNumber(prop) && prop.match('%');
    }
    if (removedYAxisProps) {
        removedTop = correctFloat((parseFloat(removedYAxisProps.top) / 100));
        removedHeight = correctFloat((parseFloat(removedYAxisProps.height) / 100));
    }
    const positions = yAxes.map((yAxis, index) => {
        let height = correctFloat(isPercentage(yAxis.options.height) ?
            parseFloat(yAxis.options.height) / 100 :
            yAxis.height / plotHeight), top = correctFloat(isPercentage(yAxis.options.top) ?
            parseFloat(yAxis.options.top) / 100 :
            (yAxis.top - yAxis.chart.plotTop) / plotHeight);
        if (!removedHeight) {
            // New axis' height is NaN so we can check if
            // the axis is newly created this way
            if (!isNumber(height)) {
                // Check if the previous axis is the
                // indicator axis (every indicator inherits from sma)
                height = yAxes[index - 1].series
                    .every((s) => s.is('sma')) ?
                    previousAxisHeight : defaultHeight / 100;
            }
            if (!isNumber(top)) {
                top = allAxesHeight;
            }
            previousAxisHeight = height;
            allAxesHeight = correctFloat(Math.max(allAxesHeight, (top || 0) + (height || 0)));
        }
        else {
            // Move all axes which were below the removed axis up.
            if (top > removedTop) {
                top -= removedHeight;
            }
            allAxesHeight = Math.max(allAxesHeight, (top || 0) + (height || 0));
        }
        return {
            height: height * 100,
            top: top * 100
        };
    });
    return { positions, allAxesHeight };
}
/**
 * Get current resize options for each yAxis. Note that each resize is
 * linked to the next axis, except the last one which shouldn't affect
 * axes in the navigator. Because indicator can be removed with it's yAxis
 * in the middle of yAxis array, we need to bind closest yAxes back.
 *
 * @private
 * @function Highcharts.NavigationBindings#getYAxisResizers
 *
 * @param {Array<Highcharts.Axis>} yAxes
 *        Array of yAxes available in the chart
 *
 * @return {Array<object>}
 *         An array of resizer options.
 *         Format: `{enabled: Boolean, controlledAxis: { next: [String]}}`
 */
function navigationGetYAxisResizers(yAxes) {
    const resizers = [];
    yAxes.forEach(function (_yAxis, index) {
        const nextYAxis = yAxes[index + 1];
        // We have next axis, bind them:
        if (nextYAxis) {
            resizers[index] = {
                enabled: true,
                controlledAxis: {
                    next: [
                        pick(nextYAxis.options.id, nextYAxis.index)
                    ]
                }
            };
        }
        else {
            // Remove binding:
            resizers[index] = {
                enabled: false
            };
        }
    });
    return resizers;
}
/**
 * Utility to modify calculated positions according to the remaining/needed
 * space. Later, these positions are used in `yAxis.update({ top, height })`
 *
 * @private
 * @function Highcharts.NavigationBindings#recalculateYAxisPositions
 * @param {Array<Highcharts.Dictionary<number>>} positions
 * Default positions of all yAxes.
 * @param {number} changedSpace
 * How much space should be added or removed.
 * @param {boolean} modifyHeight
 * Update only `top` or both `top` and `height`.
 * @param {number} adder
 * `-1` or `1`, to determine whether we should add or remove space.
 *
 * @return {Array<object>}
 *         Modified positions,
 */
function navigationRecalculateYAxisPositions(positions, changedSpace, modifyHeight, adder) {
    positions.forEach(function (position, index) {
        const prevPosition = positions[index - 1];
        position.top = !prevPosition ? 0 :
            correctFloat(prevPosition.height + prevPosition.top);
        if (modifyHeight) {
            position.height = correctFloat(position.height + adder * changedSpace);
        }
    });
    return positions;
}
/**
 * Resize all yAxes (except navigator) to fit the plotting height. Method
 * checks if new axis is added, if the new axis will fit under previous
 * axes it is placed there. If not, current plot area is scaled
 * to make room for new axis.
 *
 * If axis is removed, the current plot area stretches to fit into 100%
 * of the plot area.
 *
 * @private
 */
function navigationResizeYAxes(removedYAxisProps) {
    // The height of the new axis before rescaling. In %, but as a number.
    const defaultHeight = 20;
    const chart = this.chart, 
    // Only non-navigator axes
    yAxes = chart.yAxis.filter(StockTools_isNotNavigatorYAxis), plotHeight = chart.plotHeight, 
    // Gather current heights (in %)
    { positions, allAxesHeight } = this.getYAxisPositions(yAxes, plotHeight, defaultHeight, removedYAxisProps), resizers = this.getYAxisResizers(yAxes);
    // Check if the axis is being either added or removed and
    // if the new indicator axis will fit under existing axes.
    // if so, there is no need to scale them.
    if (!removedYAxisProps &&
        allAxesHeight <= correctFloat(0.8 + defaultHeight / 100)) {
        positions[positions.length - 1] = {
            height: defaultHeight,
            top: correctFloat(allAxesHeight * 100 - defaultHeight)
        };
    }
    else {
        positions.forEach(function (position) {
            position.height = (position.height / (allAxesHeight * 100)) * 100;
            position.top = (position.top / (allAxesHeight * 100)) * 100;
        });
    }
    positions.forEach(function (position, index) {
        yAxes[index].update({
            height: position.height + '%',
            top: position.top + '%',
            resize: resizers[index],
            offset: 0
        }, false);
    });
}
/* *
 *
 *  Default Export
 *
 * */
const StockTools = {
    compose
};
/* harmony default export */ const StockTools_StockTools = (StockTools);

;// external ["../highcharts.src.js","default","AST"]
const external_highcharts_src_js_default_AST_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].AST;
var external_highcharts_src_js_default_AST_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_AST_namespaceObject);
;// ./code/es-modules/Stock/StockTools/StockToolbar.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */




const { shallowArraysEqual: StockToolbar_shallowArraysEqual } = StockTools_StockToolsUtilities;
/* *
 *
 *  Classes
 *
 * */
/**
 * Toolbar Class
 *
 * @private
 * @class
 *
 * @param {object} options
 *        Options of toolbar
 *
 * @param {Highcharts.Dictionary<string>|undefined} langOptions
 *        Language options
 *
 * @param {Highcharts.Chart} chart
 *        Reference to chart
 */
class Toolbar {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options, langOptions, chart) {
        this.width = 0;
        this.isDirty = false;
        this.chart = chart;
        this.options = options;
        this.lang = langOptions;
        // Set url for icons.
        this.iconsURL = this.getIconsURL();
        this.guiEnabled = options.enabled;
        this.visible = pick(options.visible, true);
        this.guiClassName = options.className;
        this.toolbarClassName = options.toolbarClassName;
        // General events collection which should be removed upon
        // destroy/update:
        this.eventsToUnbind = [];
        if (this.guiEnabled) {
            this.createContainer();
            this.createButtons();
            this.showHideNavigation();
        }
        fireEvent(this, 'afterInit');
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create and set up stockTools buttons with their events and submenus.
     * @private
     */
    createButtons() {
        const lang = this.lang, guiOptions = this.options, toolbar = this.toolbar, buttons = guiOptions.buttons, defs = guiOptions.definitions, allButtons = toolbar.childNodes;
        this.buttonList = buttons;
        // Create buttons
        buttons.forEach((btnName) => {
            const button = this.addButton(toolbar, defs, btnName, lang);
            this.eventsToUnbind.push(addEvent(button.buttonWrapper, 'click', () => this.eraseActiveButtons(allButtons, button.buttonWrapper)));
            if (isArray(defs[btnName].items)) {
                // Create submenu buttons
                this.addSubmenu(button, defs[btnName]);
            }
        });
    }
    /**
     * Create submenu (list of buttons) for the option. In example main button
     * is Line, in submenu will be buttons with types of lines.
     *
     * @private
     *
     * @param {Highcharts.Dictionary<Highcharts.HTMLDOMElement>} parentBtn
     *        Button which has submenu
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons
     */
    addSubmenu(parentBtn, button) {
        const submenuArrow = parentBtn.submenuArrow, buttonWrapper = parentBtn.buttonWrapper, buttonWidth = getStyle(buttonWrapper, 'width'), wrapper = this.wrapper, menuWrapper = this.listWrapper, allButtons = this.toolbar.childNodes, title = buttonWrapper.title, 
        // Create submenu container
        submenuWrapper = this.submenu = createElement('ul', {
            className: 'highcharts-submenu-wrapper',
            id: 'highcharts-submenu-wrapper-' +
                title.toLowerCase().replace(/\s+/g, '-')
        }, void 0, buttonWrapper);
        // Create submenu buttons and select the first one
        this.addSubmenuItems(buttonWrapper, button);
        submenuArrow.setAttribute('aria-controls', submenuWrapper.id);
        // Show / hide submenu
        this.eventsToUnbind.push(addEvent(submenuArrow, 'click', (e) => {
            e.stopPropagation();
            // Erase active class on all other buttons
            this.eraseActiveButtons(allButtons, buttonWrapper);
            // Hide menu
            if (buttonWrapper.className
                .indexOf('highcharts-current') >= 0) {
                submenuArrow.setAttribute('aria-expanded', false);
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                buttonWrapper.classList.remove('highcharts-current');
                submenuWrapper.style.display = 'none';
            }
            else {
                submenuArrow.setAttribute('aria-expanded', true);
                // Show menu
                // to calculate height of element
                submenuWrapper.style.display = 'block';
                let topMargin = submenuWrapper.offsetHeight -
                    buttonWrapper.offsetHeight - 3;
                // Calculate position of submenu in the box
                // if submenu is inside, reset top margin
                if (
                // Cut on the bottom
                !(submenuWrapper.offsetHeight +
                    buttonWrapper.offsetTop >
                    wrapper.offsetHeight &&
                    // Cut on the top
                    buttonWrapper.offsetTop > topMargin)) {
                    topMargin = 0;
                }
                // Apply calculated styles
                css(submenuWrapper, {
                    top: -topMargin + 'px',
                    left: buttonWidth + 3 + 'px'
                });
                buttonWrapper.className += ' highcharts-current';
                menuWrapper.startWidth = wrapper.offsetWidth;
                menuWrapper.style.width = menuWrapper.startWidth +
                    getStyle(menuWrapper, 'padding-left') +
                    submenuWrapper.offsetWidth + 3 + 'px';
            }
        }));
    }
    /**
     * Create buttons in submenu
     *
     * @private
     *
     * @param {Highcharts.HTMLDOMElement} buttonWrapper
     *        Button where submenu is placed
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons options
     */
    addSubmenuItems(buttonWrapper, button) {
        const _self = this, submenuWrapper = this.submenu, lang = this.lang, menuWrapper = this.listWrapper, items = button.items;
        let submenuBtn;
        // Add items to submenu
        items.forEach((btnName) => {
            // Add buttons to submenu
            submenuBtn = this.addButton(submenuWrapper, button, btnName, lang);
            this.eventsToUnbind.push(addEvent(submenuBtn.mainButton, 'click', function () {
                _self.switchSymbol(this, buttonWrapper, true);
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                submenuWrapper.style.display = 'none';
            }));
        });
        // Select first submenu item
        const firstSubmenuItem = submenuWrapper.querySelectorAll('li > .highcharts-menu-item-btn')[0];
        // Replace current symbol, in main button, with submenu's button style
        this.switchSymbol(firstSubmenuItem, false);
    }
    /**
     * Erase active class on all other buttons.
     * @private
     */
    eraseActiveButtons(buttons, currentButton, submenuItems) {
        [].forEach.call(buttons, (btn) => {
            if (btn !== currentButton) {
                btn.classList.remove('highcharts-current');
                btn.classList.remove('highcharts-active');
                submenuItems =
                    btn.querySelectorAll('.highcharts-submenu-wrapper');
                // Hide submenu
                if (submenuItems.length > 0) {
                    submenuItems[0].style.display = 'none';
                }
            }
        });
    }
    /**
     * Create single button. Consist of HTML elements `li`, `button`, and (if
     * exists) submenu container.
     *
     * @private
     *
     * @param {Highcharts.HTMLDOMElement} target
     *        HTML reference, where button should be added
     *
     * @param {object} options
     *        All options, by btnName refer to particular button
     *
     * @param {string} btnName
     *        Button name of functionality mapped for specific class
     *
     * @param {Highcharts.Dictionary<string>} lang
     *        All titles, by btnName refer to particular button
     *
     * @return {object}
     *         References to all created HTML elements
     */
    addButton(target, options, btnName, lang = {}) {
        const btnOptions = options[btnName], btnLabelName = lang[btnName] || btnName, arrowLabel = this.chart.options.lang.accessibility
            ?.stockTools.arrowLabel, items = btnOptions.items, classMapping = Toolbar.prototype.classMapping, userClassName = btnOptions.className || '';
        // Main button wrapper
        const buttonWrapper = createElement('li', {
            className: pick(classMapping[btnName], '') + ' ' + userClassName
        }, void 0, target);
        // Single button
        const elementType = (btnOptions.elementType || 'button');
        const mainButton = createElement(elementType, {
            className: 'highcharts-menu-item-btn',
            title: btnLabelName,
            ariaLabel: btnLabelName
        }, void 0, buttonWrapper);
        // Submenu
        if (items && items.length) {
            // Arrow is a hook to show / hide submenu
            const submenuArrow = createElement('button', {
                className: 'highcharts-submenu-item-arrow ' +
                    'highcharts-arrow-right',
                ariaLabel: arrowLabel,
                ariaExpanded: false
            }, void 0, buttonWrapper);
            submenuArrow.style.backgroundImage = 'url(' +
                this.iconsURL + 'arrow-bottom.svg)';
            return {
                buttonWrapper,
                mainButton,
                submenuArrow
            };
        }
        mainButton.style.backgroundImage = 'url(' +
            this.iconsURL + btnOptions.symbol + ')';
        return {
            buttonWrapper,
            mainButton
        };
    }
    /**
     * Create navigation's HTML elements: container and arrows.
     * @private
     */
    addNavigation() {
        const wrapper = this.wrapper;
        // Arrow wrapper
        this.arrowWrapper = createElement('div', {
            className: 'highcharts-arrow-wrapper'
        });
        this.arrowUp = createElement('div', {
            className: 'highcharts-arrow-up'
        }, void 0, this.arrowWrapper);
        this.arrowUp.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        this.arrowDown = createElement('div', {
            className: 'highcharts-arrow-down'
        }, void 0, this.arrowWrapper);
        this.arrowDown.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        wrapper.insertBefore(this.arrowWrapper, wrapper.childNodes[0]);
        // Attach scroll events
        this.scrollButtons();
    }
    /**
     * Add events to navigation (two arrows) which allows user to scroll
     * top/down GUI buttons, if container's height is not enough.
     * @private
     */
    scrollButtons() {
        const wrapper = this.wrapper, toolbar = this.toolbar, step = 0.1 * wrapper.offsetHeight; // 0.1 = 10%
        let targetY = 0;
        this.eventsToUnbind.push(addEvent(this.arrowUp, 'click', () => {
            if (targetY > 0) {
                targetY -= step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
        this.eventsToUnbind.push(addEvent(this.arrowDown, 'click', () => {
            if (wrapper.offsetHeight + targetY <=
                toolbar.offsetHeight + step) {
                targetY += step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
    }
    /*
     * Create the stockTools container and sets up event bindings.
     *
     */
    createContainer() {
        const chart = this.chart, groupLabel = chart.options.lang.accessibility
            ?.stockTools.groupLabel, guiOptions = this.options, container = chart.container, navigation = chart.options.navigation, bindingsClassName = navigation?.bindingsClassName, self = this;
        let listWrapper, toolbar;
        // Create main container
        const wrapper = this.wrapper = createElement('div', {
            className: 'highcharts-stocktools-wrapper ' +
                guiOptions.className + ' ' + bindingsClassName,
            ariaHidden: false
        });
        container.appendChild(wrapper);
        this.showHideBtn = createElement('div', {
            className: 'highcharts-toggle-toolbar highcharts-arrow-left'
        }, void 0, wrapper);
        // Toggle menu
        this.eventsToUnbind.push(addEvent(this.showHideBtn, 'click', () => {
            this.update({
                gui: {
                    visible: !self.visible
                }
            });
        }));
        // Mimic event behavior of being outside chart.container
        [
            'mousedown',
            'mousemove',
            'click',
            'touchstart'
        ].forEach((eventType) => {
            addEvent(wrapper, eventType, (e) => e.stopPropagation());
        });
        addEvent(wrapper, 'mouseover', (e) => chart.pointer?.onContainerMouseLeave(e));
        // Toolbar
        this.toolbar = toolbar = createElement('ul', {
            className: 'highcharts-stocktools-toolbar ' +
                guiOptions.toolbarClassName,
            ariaLabel: groupLabel
        });
        // Add container for list of buttons
        this.listWrapper = listWrapper = createElement('div', {
            className: 'highcharts-menu-wrapper'
        });
        wrapper.insertBefore(listWrapper, wrapper.childNodes[0]);
        listWrapper.insertBefore(toolbar, listWrapper.childNodes[0]);
        this.showHideToolbar();
        // Add navigation which allows user to scroll down / top GUI buttons
        this.addNavigation();
    }
    /**
     * Function called in redraw verifies if the navigation should be visible.
     * @private
     */
    showHideNavigation() {
        // Arrows
        // 50px space for arrows
        if (this.visible &&
            this.toolbar.offsetHeight > (this.wrapper.offsetHeight - 50)) {
            this.arrowWrapper.style.display = 'block';
        }
        else {
            // Reset margin if whole toolbar is visible
            this.toolbar.style.marginTop = '0px';
            // Hide arrows
            this.arrowWrapper.style.display = 'none';
        }
    }
    /**
     * Create button which shows or hides GUI toolbar.
     * @private
     */
    showHideToolbar() {
        const wrapper = this.wrapper, toolbar = this.listWrapper, submenu = this.submenu, 
        // Show hide toolbar
        showHideBtn = this.showHideBtn;
        let visible = this.visible;
        showHideBtn.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        if (!visible) {
            // Hide
            if (submenu) {
                submenu.style.display = 'none';
            }
            showHideBtn.style.left = '0px';
            visible = this.visible = false;
            toolbar.classList.add('highcharts-hide');
            showHideBtn.classList.add('highcharts-arrow-right');
            wrapper.style.height = showHideBtn.offsetHeight + 'px';
        }
        else {
            wrapper.style.height = '100%';
            toolbar.classList.remove('highcharts-hide');
            showHideBtn.classList.remove('highcharts-arrow-right');
            showHideBtn.style.top = getStyle(toolbar, 'padding-top') + 'px';
            showHideBtn.style.left = (wrapper.offsetWidth +
                getStyle(toolbar, 'padding-left')) + 'px';
        }
    }
    /*
     * In main GUI button, replace icon and class with submenu button's
     * class / symbol.
     *
     * @param {HTMLDOMElement} - submenu button
     * @param {Boolean} - true or false
     *
     */
    switchSymbol(button, redraw) {
        const buttonWrapper = button.parentNode, buttonWrapperClass = buttonWrapper.className, 
        // Main button in first level og GUI
        mainNavButton = buttonWrapper.parentNode.parentNode;
        // If the button is disabled, don't do anything
        if (buttonWrapperClass.indexOf('highcharts-disabled-btn') > -1) {
            return;
        }
        // Set class
        mainNavButton.className = '';
        if (buttonWrapperClass) {
            mainNavButton.classList.add(buttonWrapperClass.trim());
        }
        // Set icon
        mainNavButton
            .querySelectorAll('.highcharts-menu-item-btn')[0]
            .style.backgroundImage =
            button.style.backgroundImage;
        // Set active class
        if (redraw) {
            this.toggleButtonActiveClass(mainNavButton);
        }
    }
    /**
     * Set select state (active class) on button.
     * @private
     */
    toggleButtonActiveClass(button) {
        const classList = button.classList;
        if (classList.contains('highcharts-active')) {
            classList.remove('highcharts-active');
        }
        else {
            classList.add('highcharts-active');
        }
    }
    /**
     * Remove active class from all buttons except defined.
     * @private
     */
    unselectAllButtons(button) {
        const activeBtns = button.parentNode
            .querySelectorAll('.highcharts-active');
        [].forEach.call(activeBtns, (activeBtn) => {
            if (activeBtn !== button) {
                activeBtn.classList.remove('highcharts-active');
            }
        });
    }
    /**
     * Update GUI with given options.
     * @private
     */
    update(options, redraw) {
        this.isDirty = !!options.gui.definitions;
        merge(true, this.chart.options.stockTools, options);
        merge(true, this.options, options.gui);
        this.visible = pick(this.options.visible && this.options.enabled, true);
        // If Stock Tools are updated, then bindings should be updated too:
        if (this.chart.navigationBindings) {
            this.chart.navigationBindings.update();
        }
        this.chart.isDirtyBox = true;
        if (pick(redraw, true)) {
            this.chart.redraw();
        }
    }
    /**
     * Destroy all HTML GUI elements.
     * @private
     */
    destroy() {
        const stockToolsDiv = this.wrapper, parent = stockToolsDiv && stockToolsDiv.parentNode;
        this.eventsToUnbind.forEach((unbinder) => unbinder());
        // Remove the empty element
        if (parent) {
            parent.removeChild(stockToolsDiv);
        }
    }
    /**
     * Redraws the toolbar based on the current state of the options.
     * @private
     */
    redraw() {
        if (this.options.enabled !== this.guiEnabled) {
            this.handleGuiEnabledChange();
        }
        else {
            if (!this.guiEnabled) {
                return;
            }
            this.updateClassNames();
            this.updateButtons();
            this.updateVisibility();
            this.showHideNavigation();
            this.showHideToolbar();
        }
    }
    /**
     * Hadles the change of the `enabled` option.
     * @private
     */
    handleGuiEnabledChange() {
        if (this.options.enabled === false) {
            this.destroy();
            this.visible = false;
        }
        if (this.options.enabled === true) {
            this.createContainer();
            this.createButtons();
        }
        this.guiEnabled = this.options.enabled;
    }
    /**
     * Updates the class names of the GUI and toolbar elements.
     * @private
     */
    updateClassNames() {
        if (this.options.className !== this.guiClassName) {
            if (this.guiClassName) {
                this.wrapper.classList.remove(this.guiClassName);
            }
            if (this.options.className) {
                this.wrapper.classList.add(this.options.className);
            }
            this.guiClassName = this.options.className;
        }
        if (this.options.toolbarClassName !== this.toolbarClassName) {
            if (this.toolbarClassName) {
                this.toolbar.classList.remove(this.toolbarClassName);
            }
            if (this.options.toolbarClassName) {
                this.toolbar.classList.add(this.options.toolbarClassName);
            }
            this.toolbarClassName = this.options.toolbarClassName;
        }
    }
    /**
     * Updates the buttons in the toolbar if the button options have changed.
     * @private
     */
    updateButtons() {
        if (!StockToolbar_shallowArraysEqual(this.options.buttons, this.buttonList) ||
            this.isDirty) {
            this.toolbar.innerHTML = (external_highcharts_src_js_default_AST_default()).emptyHTML;
            this.createButtons();
        }
    }
    /**
     * Updates visibility based on current options.
     * @private
     */
    updateVisibility() {
        if (defined(this.options.visible)) {
            this.visible = this.options.visible;
        }
    }
    /**
     * @private
     */
    getIconsURL() {
        return this.chart.options.navigation.iconsURL ||
            this.options.iconsURL ||
            'https://code.highcharts.com/12.6.0/gfx/stock-icons/';
    }
}
Toolbar.prototype.classMapping = {
    circle: 'highcharts-circle-annotation',
    ellipse: 'highcharts-ellipse-annotation',
    rectangle: 'highcharts-rectangle-annotation',
    label: 'highcharts-label-annotation',
    segment: 'highcharts-segment',
    arrowSegment: 'highcharts-arrow-segment',
    ray: 'highcharts-ray',
    arrowRay: 'highcharts-arrow-ray',
    line: 'highcharts-infinity-line',
    arrowInfinityLine: 'highcharts-arrow-infinity-line',
    verticalLine: 'highcharts-vertical-line',
    horizontalLine: 'highcharts-horizontal-line',
    crooked3: 'highcharts-crooked3',
    crooked5: 'highcharts-crooked5',
    elliott3: 'highcharts-elliott3',
    elliott5: 'highcharts-elliott5',
    pitchfork: 'highcharts-pitchfork',
    fibonacci: 'highcharts-fibonacci',
    fibonacciTimeZones: 'highcharts-fibonacci-time-zones',
    parallelChannel: 'highcharts-parallel-channel',
    measureX: 'highcharts-measure-x',
    measureY: 'highcharts-measure-y',
    measureXY: 'highcharts-measure-xy',
    timeCycles: 'highcharts-time-cycles',
    verticalCounter: 'highcharts-vertical-counter',
    verticalLabel: 'highcharts-vertical-label',
    verticalArrow: 'highcharts-vertical-arrow',
    currentPriceIndicator: 'highcharts-current-price-indicator',
    indicators: 'highcharts-indicators',
    flagCirclepin: 'highcharts-flag-circlepin',
    flagDiamondpin: 'highcharts-flag-diamondpin',
    flagSquarepin: 'highcharts-flag-squarepin',
    flagSimplepin: 'highcharts-flag-simplepin',
    zoomX: 'highcharts-zoom-x',
    zoomY: 'highcharts-zoom-y',
    zoomXY: 'highcharts-zoom-xy',
    typeLine: 'highcharts-series-type-line',
    typeOHLC: 'highcharts-series-type-ohlc',
    typeHLC: 'highcharts-series-type-hlc',
    typeCandlestick: 'highcharts-series-type-candlestick',
    typeHollowCandlestick: 'highcharts-series-type-hollowcandlestick',
    typeHeikinAshi: 'highcharts-series-type-heikinashi',
    fullScreen: 'highcharts-full-screen',
    toggleAnnotations: 'highcharts-toggle-annotations',
    saveChart: 'highcharts-save-chart',
    separator: 'highcharts-separator'
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const StockToolbar = (Toolbar);

;// ./code/es-modules/Stock/StockTools/StockToolsGui.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { setOptions: StockToolsGui_setOptions } = (external_highcharts_src_js_default_default());



/* *
 *
 *  Functions
 *
 * */
/**
 * Verify if Toolbar should be added.
 * @private
 */
function chartSetStockTools(options) {
    const chartOptions = this.options, lang = chartOptions.lang, guiOptions = merge(chartOptions.stockTools && chartOptions.stockTools.gui, options && options.gui), langOptions = lang && lang.stockTools && lang.stockTools.gui;
    this.stockTools = new StockToolbar(guiOptions, langOptions, this);
    if (this.stockTools.guiEnabled) {
        this.isDirtyBox = true;
    }
}
/**
 * @private
 */
function StockToolsGui_compose(ChartClass, NavigationBindingsClass) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.setStockTools) {
        addEvent(ChartClass, 'afterGetContainer', onChartAfterGetContainer);
        addEvent(ChartClass, 'beforeRedraw', onChartBeforeRedraw);
        addEvent(ChartClass, 'beforeRender', onChartBeforeRedraw);
        addEvent(ChartClass, 'destroy', StockToolsGui_onChartDestroy);
        addEvent(ChartClass, 'getMargins', onChartGetMargins, { order: 0 });
        addEvent(ChartClass, 'render', StockToolsGui_onChartRender);
        chartProto.setStockTools = chartSetStockTools;
        addEvent(NavigationBindingsClass, 'deselectButton', StockToolsGui_onNavigationBindingsDeselectButton);
        addEvent(NavigationBindingsClass, 'selectButton', onNavigationBindingsSelectButton);
        StockToolsGui_setOptions(StockTools_StockToolsDefaults);
    }
}
/**
 * Run HTML generator
 * @private
 */
function onChartAfterGetContainer() {
    this.setStockTools();
}
/**
 * Handle beforeRedraw and beforeRender
 * @private
 */
function onChartBeforeRedraw() {
    if (this.stockTools) {
        this.stockTools.redraw();
        setOffset(this);
    }
}
/**
 * Function to calculate and set the offset width for stock tools.
 * @private
 */
function setOffset(chart) {
    if (chart.stockTools?.guiEnabled) {
        const optionsChart = chart.options.chart;
        const listWrapper = chart.stockTools.listWrapper;
        const offsetWidth = listWrapper && ((listWrapper.startWidth +
            getStyle(listWrapper, 'padding-left') +
            getStyle(listWrapper, 'padding-right')) || listWrapper.offsetWidth);
        chart.stockTools.width = offsetWidth;
        let dirty = false;
        if (offsetWidth < chart.plotWidth) {
            const nextX = pick(optionsChart.spacingLeft, optionsChart.spacing && optionsChart.spacing[3], 0) + offsetWidth;
            const diff = nextX - chart.spacingBox.x;
            chart.spacingBox.x = nextX;
            chart.spacingBox.width -= diff;
            dirty = true;
        }
        else if (offsetWidth === 0) {
            dirty = true;
        }
        if (offsetWidth !== chart.stockTools.prevOffsetWidth) {
            chart.stockTools.prevOffsetWidth = offsetWidth;
            if (dirty) {
                chart.isDirtyLegend = true;
            }
        }
    }
}
/**
 * @private
 */
function StockToolsGui_onChartDestroy() {
    if (this.stockTools) {
        this.stockTools.destroy();
    }
}
/**
 * @private
 */
function onChartGetMargins() {
    const offsetWidth = this.stockTools?.visible && this.stockTools.guiEnabled ?
        this.stockTools.width : 0;
    if (offsetWidth && offsetWidth < this.plotWidth) {
        this.plotLeft += offsetWidth;
        this.spacing[3] += offsetWidth;
    }
}
/**
 * Check if the correct price indicator button is displayed, #15029.
 * @private
 */
function StockToolsGui_onChartRender() {
    const stockTools = this.stockTools, button = stockTools &&
        stockTools.toolbar &&
        stockTools.toolbar.querySelector('.highcharts-current-price-indicator');
    // Change the initial button background.
    if (stockTools &&
        this.navigationBindings &&
        this.options.series &&
        button) {
        if (this.navigationBindings.utils
            ?.isPriceIndicatorEnabled?.(this.series)) {
            button.firstChild.style['background-image'] =
                'url("' + stockTools.getIconsURL() + 'current-price-hide.svg")';
        }
        else {
            button.firstChild.style['background-image'] =
                'url("' + stockTools.getIconsURL() + 'current-price-show.svg")';
        }
    }
}
/**
 * @private
 */
function StockToolsGui_onNavigationBindingsDeselectButton(event) {
    const className = 'highcharts-submenu-wrapper', gui = this.chart.stockTools;
    if (gui && gui.guiEnabled) {
        let button = event.button;
        // If deselecting a button from a submenu, select state for it's parent
        if (button.parentNode.className.indexOf(className) >= 0) {
            button = button.parentNode.parentNode;
        }
        button.classList.remove('highcharts-active');
    }
}
/**
 * Communication with bindings
 * @private
 */
function onNavigationBindingsSelectButton(event) {
    const className = 'highcharts-submenu-wrapper', gui = this.chart.stockTools;
    if (gui && gui.guiEnabled) {
        let button = event.button;
        // Unselect other active buttons
        gui.unselectAllButtons(event.button);
        // If clicked on a submenu, select state for it's parent
        if (button.parentNode.className.indexOf(className) >= 0) {
            button = button.parentNode.parentNode;
        }
        // Set active class on the current button
        gui.toggleButtonActiveClass(button);
    }
}
/* *
 *
 *  Default Export
 *
 * */
const StockToolsGui = {
    compose: StockToolsGui_compose
};
/* harmony default export */ const StockTools_StockToolsGui = (StockToolsGui);

;// ./code/es-modules/masters/modules/stock-tools.src.js







const G = (external_highcharts_src_js_default_default());
G.NavigationBindings = G.NavigationBindings || Annotations_NavigationBindings;
G.Toolbar = StockToolbar;
StockTools_StockTools.compose(G.NavigationBindings);
StockTools_StockToolsGui.compose(G.Chart, G.NavigationBindings);
/* harmony default export */ const stock_tools_src = ((external_highcharts_src_js_default_default()));

export { stock_tools_src as default };
