// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/venn
 * @requires highcharts
 *
 * (c) 2017-2026 Highsoft AS
 * Authors: Jon Arild Nygard
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
;// external ["../highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// ./code/es-modules/Core/Geometry/GeometryUtilities.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/* *
 *
 *  Namespace
 *
 * */
/** @internal */
var GeometryUtilities;
(function (GeometryUtilities) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Calculates the center between a list of points.
     *
     * @internal
     *
     * @param {Array<Highcharts.PositionObject>} points
     * A list of points to calculate the center of.
     *
     * @return {Highcharts.PositionObject}
     * Calculated center
     */
    function getCenterOfPoints(points) {
        const sum = points.reduce((sum, point) => {
            sum.x += point.x;
            sum.y += point.y;
            return sum;
        }, { x: 0, y: 0 });
        return {
            x: sum.x / points.length,
            y: sum.y / points.length
        };
    }
    GeometryUtilities.getCenterOfPoints = getCenterOfPoints;
    /**
     * Calculates the distance between two points based on their x and y
     * coordinates.
     *
     * @internal
     *
     * @param {Highcharts.PositionObject} p1
     * The x and y coordinates of the first point.
     *
     * @param {Highcharts.PositionObject} p2
     * The x and y coordinates of the second point.
     *
     * @return {number}
     * Returns the distance between the points.
     */
    function getDistanceBetweenPoints(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }
    GeometryUtilities.getDistanceBetweenPoints = getDistanceBetweenPoints;
    /**
     * Calculates the angle between two points.
     * @todo add unit tests.
     * @internal
     * @param {Highcharts.PositionObject} p1 The first point.
     * @param {Highcharts.PositionObject} p2 The second point.
     * @return {number} Returns the angle in radians.
     */
    function getAngleBetweenPoints(p1, p2) {
        return Math.atan2(p2.x - p1.x, p2.y - p1.y);
    }
    GeometryUtilities.getAngleBetweenPoints = getAngleBetweenPoints;
    /**
     * Test for point in polygon. Polygon defined as array of [x,y] points.
     * @internal
     * @param {PositionObject} point The point potentially within a polygon.
     * @param {Array<Array<number>>} polygon The polygon potentially containing the point.
     */
    function pointInPolygon({ x, y }, polygon) {
        const len = polygon.length;
        let i, j, inside = false;
        for (i = 0, j = len - 1; i < len; j = i++) {
            const [x1, y1] = polygon[i], [x2, y2] = polygon[j];
            if (y1 > y !== y2 > y &&
                (x < (x2 - x1) *
                    (y - y1) /
                    (y2 - y1) +
                    x1)) {
                inside = !inside;
            }
        }
        return inside;
    }
    GeometryUtilities.pointInPolygon = pointInPolygon;
})(GeometryUtilities || (GeometryUtilities = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Geometry_GeometryUtilities = (GeometryUtilities);

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

;// ./code/es-modules/Core/Geometry/CircleUtilities.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { getAngleBetweenPoints, getCenterOfPoints, getDistanceBetweenPoints } = Geometry_GeometryUtilities;
/* *
 *
 *  Namespace
 *
 * */
/** @internal */
var CircleUtilities;
(function (CircleUtilities) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     *
     * @param {number} x
     * Number to round
     *
     * @param {number} decimals
     * Number of decimals to round to
     *
     * @return {number}
     * Rounded number
     */
    function round(x, decimals) {
        const a = Math.pow(10, decimals);
        return Math.round(x * a) / a;
    }
    CircleUtilities.round = round;
    /**
     * Calculates the area of a circle based on its radius.
     *
     * @internal
     *
     * @param {number} r
     * The radius of the circle.
     *
     * @return {number}
     * Returns the area of the circle.
     */
    function getAreaOfCircle(r) {
        if (r <= 0) {
            throw new Error('radius of circle must be a positive number.');
        }
        return correctFloat(Math.PI * r * r);
    }
    CircleUtilities.getAreaOfCircle = getAreaOfCircle;
    /**
     * Calculates the area of a circular segment based on the radius of the
     * circle and the height of the segment.
     *
     * @see http://mathworld.wolfram.com/CircularSegment.html
     *
     * @internal
     *
     * @param {number} r
     * The radius of the circle.
     *
     * @param {number} h
     * The height of the circular segment.
     *
     * @return {number}
     * Returns the area of the circular segment.
     */
    function getCircularSegmentArea(r, h) {
        return (r * r * Math.acos(1 - h / r) -
            (r - h) * Math.sqrt(h * (2 * r - h)));
    }
    CircleUtilities.getCircularSegmentArea = getCircularSegmentArea;
    /**
     * Calculates the area of overlap between two circles based on their
     * radiuses and the distance between them.
     *
     * @see http://mathworld.wolfram.com/Circle-CircleIntersection.html
     *
     * @internal
     *
     * @param {number} r1
     * Radius of the first circle.
     *
     * @param {number} r2
     * Radius of the second circle.
     *
     * @param {number} d
     * The distance between the two circles.
     *
     * @return {number}
     * Returns the area of overlap between the two circles.
     */
    function getOverlapBetweenCircles(r1, r2, d) {
        let overlap = 0;
        // If the distance is larger than the sum of the radiuses then the
        // circles does not overlap.
        if (d < r1 + r2) {
            if (d <= Math.abs(r2 - r1)) {
                // If the circles are completely overlapping, then the overlap
                // equals the area of the smallest circle.
                overlap = getAreaOfCircle(r1 < r2 ? r1 : r2);
            }
            else {
                // Height of first triangle segment.
                const d1 = (r1 * r1 - r2 * r2 + d * d) / (2 * d), 
                // Height of second triangle segment.
                d2 = d - d1;
                overlap = (getCircularSegmentArea(r1, r1 - d1) +
                    getCircularSegmentArea(r2, r2 - d2));
            }
            // Round the result to two decimals.
            overlap = round(overlap, 14);
        }
        return overlap;
    }
    CircleUtilities.getOverlapBetweenCircles = getOverlapBetweenCircles;
    /**
     * Calculates the intersection points of two circles.
     *
     * NOTE: does not handle floating errors well.
     *
     * @internal
     *
     * @param {Highcharts.CircleObject} c1
     * The first circle.
     *
     * @param {Highcharts.CircleObject} c2
     * The second circle.
     *
     * @return {Array<Highcharts.PositionObject>}
     * Returns the resulting intersection points.
     */
    function getCircleCircleIntersection(c1, c2) {
        const d = getDistanceBetweenPoints(c1, c2), r1 = c1.r, r2 = c2.r;
        let points = [];
        if (d < r1 + r2 && d > Math.abs(r1 - r2)) {
            // If the circles are overlapping, but not completely overlapping,
            // then it exists intersecting points.
            const r1Square = r1 * r1, r2Square = r2 * r2, 
            // `d^2 - r^2 + R^2 / 2d`
            x = (r1Square - r2Square + d * d) / (2 * d), 
            // `y^2 = R^2 - x^2`
            y = Math.sqrt(r1Square - x * x), x1 = c1.x, x2 = c2.x, y1 = c1.y, y2 = c2.y, x0 = x1 + x * (x2 - x1) / d, y0 = y1 + x * (y2 - y1) / d, rx = -(y2 - y1) * (y / d), ry = -(x2 - x1) * (y / d);
            points = [
                { x: round(x0 + rx, 14), y: round(y0 - ry, 14) },
                { x: round(x0 - rx, 14), y: round(y0 + ry, 14) }
            ];
        }
        return points;
    }
    CircleUtilities.getCircleCircleIntersection = getCircleCircleIntersection;
    /**
     * Calculates all the intersection points for between a list of circles.
     *
     * @internal
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * The circles to calculate the points from.
     *
     * @return {Array<Highcharts.GeometryObject>}
     * Returns a list of intersection points.
     */
    function getCirclesIntersectionPoints(circles) {
        return circles.reduce((points, c1, i, arr) => {
            const additional = arr
                .slice(i + 1)
                .reduce((points, c2, j) => {
                const indexes = [i, j + i + 1];
                return points.concat(getCircleCircleIntersection(c1, c2).map((p) => {
                    p.indexes = indexes;
                    return p;
                }));
            }, []);
            return points.concat(additional);
        }, []);
    }
    CircleUtilities.getCirclesIntersectionPoints = getCirclesIntersectionPoints;
    /**
     * Tests whether the first circle is completely overlapping the second
     * circle.
     *
     * @internal
     *
     * @param {Highcharts.CircleObject} circle1
     * The first circle.
     *
     * @param {Highcharts.CircleObject} circle2
     * The second circle.
     *
     * @return {boolean}
     * Returns true if circle1 is completely overlapping circle2, false if not.
     */
    function isCircle1CompletelyOverlappingCircle2(circle1, circle2) {
        return getDistanceBetweenPoints(circle1, circle2) + circle2.r < circle1.r + 1e-10;
    }
    CircleUtilities.isCircle1CompletelyOverlappingCircle2 = isCircle1CompletelyOverlappingCircle2;
    /**
     * Tests whether a point lies within a given circle.
     * @internal
     * @param {Highcharts.PositionObject} point
     * The point to test for.
     *
     * @param {Highcharts.CircleObject} circle
     * The circle to test if the point is within.
     *
     * @return {boolean}
     * Returns true if the point is inside, false if outside.
     */
    function isPointInsideCircle(point, circle) {
        return getDistanceBetweenPoints(point, circle) <= circle.r + 1e-10;
    }
    CircleUtilities.isPointInsideCircle = isPointInsideCircle;
    /**
     * Tests whether a point lies within a set of circles.
     *
     * @internal
     *
     * @param {Highcharts.PositionObject} point
     * The point to test.
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * The list of circles to test against.
     *
     * @return {boolean}
     * Returns true if the point is inside all the circles, false if not.
     */
    function isPointInsideAllCircles(point, circles) {
        return !circles.some(function (circle) {
            return !isPointInsideCircle(point, circle);
        });
    }
    CircleUtilities.isPointInsideAllCircles = isPointInsideAllCircles;
    /**
     * Tests whether a point lies outside a set of circles.
     *
     * TODO: add unit tests.
     *
     * @internal
     *
     * @param {Highcharts.PositionObject} point
     * The point to test.
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * The list of circles to test against.
     *
     * @return {boolean}
     * Returns true if the point is outside all the circles, false if not.
     */
    function isPointOutsideAllCircles(point, circles) {
        return !circles.some(function (circle) {
            return isPointInsideCircle(point, circle);
        });
    }
    CircleUtilities.isPointOutsideAllCircles = isPointOutsideAllCircles;
    /**
     * Calculates the points for the polygon of the intersection area between
     * a set of circles.
     *
     * @internal
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * List of circles to calculate polygon of.
     *
     * @return {Array<Highcharts.GeometryObject>}
     * Return list of points in the intersection polygon.
     */
    function getCirclesIntersectionPolygon(circles) {
        return getCirclesIntersectionPoints(circles)
            .filter(function (p) {
            return isPointInsideAllCircles(p, circles);
        });
    }
    CircleUtilities.getCirclesIntersectionPolygon = getCirclesIntersectionPolygon;
    /**
     * Calculate the path for the area of overlap between a set of circles.
     *
     * @todo handle cases with only 1 or 0 arcs.
     *
     * @internal
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * List of circles to calculate area of.
     *
     * @return {Highcharts.GeometryIntersectionObject|undefined}
     * Returns the path for the area of overlap. Returns an empty string if
     * there are no intersection between all the circles.
     */
    function getAreaOfIntersectionBetweenCircles(circles) {
        let intersectionPoints = getCirclesIntersectionPolygon(circles), result;
        if (intersectionPoints.length > 1) {
            // Calculate the center of the intersection points.
            const center = getCenterOfPoints(intersectionPoints);
            intersectionPoints = intersectionPoints
                // Calculate the angle between the center and the points.
                .map(function (p) {
                p.angle = getAngleBetweenPoints(center, p);
                return p;
            })
                // Sort the points by the angle to the center.
                .sort(function (a, b) {
                return b.angle - a.angle;
            });
            const startPoint = intersectionPoints[intersectionPoints.length - 1];
            const arcs = intersectionPoints
                .reduce(function (data, p1) {
                const { startPoint } = data, midPoint = getCenterOfPoints([startPoint, p1]);
                // Calculate the arc from the intersection points and their
                // circles.
                const arc = p1.indexes
                    // Filter out circles that are not included in both
                    // intersection points.
                    .filter(function (index) {
                    return startPoint.indexes.indexOf(index) > -1;
                })
                    // Iterate the circles of the intersection points and
                    // calculate arcs.
                    .reduce(function (arc, index) {
                    const circle = circles[index], angle1 = getAngleBetweenPoints(circle, p1), angle2 = getAngleBetweenPoints(circle, startPoint), angleDiff = angle2 - angle1 +
                        (angle2 < angle1 ? 2 * Math.PI : 0), angle = angle2 - angleDiff / 2;
                    let width = getDistanceBetweenPoints(midPoint, {
                        x: circle.x + circle.r * Math.sin(angle),
                        y: circle.y + circle.r * Math.cos(angle)
                    });
                    const { r } = circle;
                    // Width can sometimes become to large due to
                    // floating point errors
                    if (width > r * 2) {
                        width = r * 2;
                    }
                    // Get the arc with the smallest width.
                    if (!arc || arc.width > width) {
                        arc = {
                            r,
                            largeArc: width > r ? 1 : 0,
                            width,
                            x: p1.x,
                            y: p1.y
                        };
                    }
                    // Return the chosen arc.
                    return arc;
                }, null);
                // If we find an arc then add it to the list and update p2.
                if (arc) {
                    const { r } = arc;
                    data.arcs.push(['A', r, r, 0, arc.largeArc, 1, arc.x, arc.y]);
                    data.startPoint = p1;
                }
                return data;
            }, {
                startPoint: startPoint,
                arcs: []
            }).arcs;
            if (arcs.length === 0) {
                // Empty
            }
            else if (arcs.length === 1) {
                // Empty
            }
            else {
                arcs.unshift(['M', startPoint.x, startPoint.y]);
                result = {
                    center,
                    d: arcs
                };
            }
        }
        return result;
    }
    CircleUtilities.getAreaOfIntersectionBetweenCircles = getAreaOfIntersectionBetweenCircles;
})(CircleUtilities || (CircleUtilities = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Geometry_CircleUtilities = (CircleUtilities);

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

;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Series/Venn/VennPoint.js
/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { scatter: { prototype: { pointClass: ScatterPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class VennPoint extends ScatterPoint {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return isNumber(this.value);
    }
    shouldDraw() {
        // Only draw points with single sets.
        return !!this.shapeArgs;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Venn_VennPoint = (VennPoint);

;// ./code/es-modules/Series/Venn/VennSeriesDefaults.js
/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
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
 * A Venn diagram displays all possible logical relations between a
 * collection of different sets. The sets are represented by circles, and
 * the relation between the sets are displayed by the overlap or lack of
 * overlap between them. The venn diagram is a special case of Euler
 * diagrams, which can also be displayed by this series type.
 *
 * @sample {highcharts} highcharts/demo/venn-diagram/
 *         Venn diagram
 * @sample {highcharts} highcharts/demo/euler-diagram/
 *         Euler diagram
 * @sample {highcharts} highcharts/series-venn/point-legend/
 *         Venn diagram with a legend
 *
 * @extends      plotOptions.scatter
 * @excluding    connectEnds, connectNulls, cropThreshold, dragDrop,
 *               findNearestPointBy, getExtremesFromAll, jitter, label,
 *               linecap, lineWidth, linkedTo, marker, negativeColor,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointStart, softThreshold, stacking, steps, threshold,
 *               xAxis, yAxis, zoneAxis, zones, dataSorting, boostThreshold,
 *               boostBlending
 * @product      highcharts
 * @requires     modules/venn
 * @optionparent plotOptions.venn
 */
const VennSeriesDefaults = {
    borderColor: "#cccccc" /* Palette.neutralColor20 */,
    borderDashStyle: 'solid',
    borderWidth: 1,
    brighten: 0,
    clip: false,
    colorByPoint: true,
    dataLabels: {
        enabled: true,
        verticalAlign: 'middle',
        formatter: function () {
            return this.point.name;
        }
    },
    /**
     * @default   true
     * @extends   plotOptions.series.inactiveOtherPoints
     * @private
     */
    inactiveOtherPoints: true,
    /**
     * @ignore-option
     * @private
     */
    marker: false,
    opacity: 0.75,
    showInLegend: false,
    /**
     * @ignore-option
     *
     * @private
     */
    legendType: 'point',
    states: {
        /**
         * @excluding halo
         */
        hover: {
            opacity: 1,
            borderColor: "#333333" /* Palette.neutralColor80 */
        },
        /**
         * @excluding halo
         */
        select: {
            color: "#cccccc" /* Palette.neutralColor20 */,
            borderColor: "#000000" /* Palette.neutralColor100 */,
            animation: false
        },
        inactive: {
            opacity: 0.075
        }
    },
    tooltip: {
        pointFormat: '{point.name}: {point.value}'
    },
    legendSymbol: 'rectangle'
};
/**
 * A `venn` series. If the [type](#series.venn.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.venn
 * @excluding connectEnds, connectNulls, cropThreshold, dataParser, dataURL,
 *            findNearestPointBy, getExtremesFromAll, label, linecap, lineWidth,
 *            linkedTo, marker, negativeColor, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointStart, softThreshold, stack, stacking, steps,
 *            threshold, xAxis, yAxis, zoneAxis, zones, dataSorting,
 *            boostThreshold, boostBlending
 * @product   highcharts
 * @requires  modules/venn
 * @apioption series.venn
 */
/**
 * @type      {Array<*>}
 * @extends   series.scatter.data
 * @excluding marker, x, y
 * @product   highcharts
 * @apioption series.venn.data
 */
/**
 * The name of the point. Used in data labels and tooltip. If name is not
 * defined then it will default to the joined values in
 * [sets](#series.venn.sets).
 *
 * @sample {highcharts} highcharts/demo/venn-diagram/
 *         Venn diagram
 * @sample {highcharts} highcharts/demo/euler-diagram/
 *         Euler diagram
 *
 * @type      {string}
 * @since     7.0.0
 * @product   highcharts
 * @apioption series.venn.data.name
 */
/**
 * The value of the point, resulting in a relative area of the circle, or area
 * of overlap between two sets in the venn or euler diagram.
 *
 * @sample {highcharts} highcharts/demo/venn-diagram/
 *         Venn diagram
 * @sample {highcharts} highcharts/demo/euler-diagram/
 *         Euler diagram
 *
 * @type      {number}
 * @since     7.0.0
 * @product   highcharts
 * @apioption series.venn.data.value
 */
/**
 * The set or sets the options will be applied to. If a single entry is defined,
 * then it will create a new set. If more than one entry is defined, then it
 * will define the overlap between the sets in the array.
 *
 * @sample {highcharts} highcharts/demo/venn-diagram/
 *         Venn diagram
 * @sample {highcharts} highcharts/demo/euler-diagram/
 *         Euler diagram
 *
 * @type      {Array<string>}
 * @since     7.0.0
 * @product   highcharts
 * @apioption series.venn.data.sets
 */
/**
 * @excluding halo
 * @apioption series.venn.states.hover
 */
/**
 * @excluding halo
 * @apioption series.venn.states.select
 */
''; // Detachs doclets above
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Venn_VennSeriesDefaults = (VennSeriesDefaults);

;// ./code/es-modules/Series/Venn/VennUtils.js
/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { getAreaOfCircle, getCircleCircleIntersection, getOverlapBetweenCircles: getOverlapBetweenCirclesByDistance, isPointInsideAllCircles, isPointInsideCircle, isPointOutsideAllCircles } = Geometry_CircleUtilities;

const { getDistanceBetweenPoints: VennUtils_getDistanceBetweenPoints } = Geometry_GeometryUtilities;

/* *
 *
 *  Functions
 *
 * */
/**
 * Takes an array of relations and adds the properties `totalOverlap` and
 * `overlapping` to each set. The property `totalOverlap` is the sum of
 * value for each relation where this set is included. The property
 * `overlapping` is a map of how much this set is overlapping another set.
 * NOTE: This algorithm ignores relations consisting of more than 2 sets.
 * @private
 * @param {Array<Highcharts.VennRelationObject>} relations
 * The list of relations that should be sorted.
 * @return {Array<Highcharts.VennRelationObject>}
 * Returns the modified input relations with added properties `totalOverlap`
 * and `overlapping`.
 */
function addOverlapToSets(relations) {
    // Calculate the amount of overlap per set.
    const mapOfIdToProps = {};
    relations
        // Filter out relations consisting of 2 sets.
        .filter((relation) => (relation.sets.length === 2))
        // Sum up the amount of overlap for each set.
        .forEach((relation) => {
        relation.sets.forEach((set, i, arr) => {
            if (!isObject(mapOfIdToProps[set])) {
                mapOfIdToProps[set] = {
                    totalOverlap: 0,
                    overlapping: {}
                };
            }
            mapOfIdToProps[set] = {
                totalOverlap: (mapOfIdToProps[set].totalOverlap || 0) +
                    relation.value,
                overlapping: {
                    ...(mapOfIdToProps[set].overlapping || {}),
                    [arr[1 - i]]: relation.value
                }
            };
        });
    });
    relations
        // Filter out single sets
        .filter(isSet)
        // Extend the set with the calculated properties.
        .forEach((set) => {
        const properties = mapOfIdToProps[set.sets[0]];
        extend(set, properties);
    });
    // Returns the modified relations.
    return relations;
}
/**
 * Finds the root of a given function. The root is the input value needed
 * for a function to return 0.
 *
 * See https://en.wikipedia.org/wiki/Bisection_method#Algorithm
 *
 * TODO: Add unit tests.
 *
 * @param {Function} f
 * The function to find the root of.
 * @param {number} a
 * The lowest number in the search range.
 * @param {number} b
 * The highest number in the search range.
 * @param {number} [tolerance=1e-10]
 * The allowed difference between the returned value and root.
 * @param {number} [maxIterations=100]
 * The maximum iterations allowed.
 * @return {number}
 * Root number.
 */
function bisect(f, a, b, tolerance, maxIterations) {
    const fA = f(a), fB = f(b), nMax = maxIterations || 100, tol = tolerance || 1e-10;
    let delta = b - a, x, fX, n = 1;
    if (a >= b) {
        throw new Error('a must be smaller than b.');
    }
    else if (fA * fB > 0) {
        throw new Error('f(a) and f(b) must have opposite signs.');
    }
    if (fA === 0) {
        x = a;
    }
    else if (fB === 0) {
        x = b;
    }
    else {
        while (n++ <= nMax && fX !== 0 && delta > tol) {
            delta = (b - a) / 2;
            x = a + delta;
            fX = f(x);
            // Update low and high for next search interval.
            if (fA * fX > 0) {
                a = x;
            }
            else {
                b = x;
            }
        }
    }
    return x;
}
/**
 * @private
 */
function getCentroid(simplex) {
    const arr = simplex.slice(0, -1), length = arr.length, result = [], sum = (data, point) => {
        data.sum += point[data.i];
        return data;
    };
    for (let i = 0; i < length; i++) {
        result[i] = arr.reduce(sum, { sum: 0, i: i }).sum / length;
    }
    return result;
}
/**
 * Uses the bisection method to make a best guess of the ideal distance
 * between two circles too get the desired overlap.
 * Currently there is no known formula to calculate the distance from the
 * area of overlap, which makes the bisection method preferred.
 * @private
 * @param {number} r1
 * Radius of the first circle.
 * @param {number} r2
 * Radius of the second circle.
 * @param {number} overlap
 * The wanted overlap between the two circles.
 * @return {number}
 * Returns the distance needed to get the wanted overlap between the two
 * circles.
 */
function getDistanceBetweenCirclesByOverlap(r1, r2, overlap) {
    const maxDistance = r1 + r2;
    let distance;
    if (overlap <= 0) {
        // If overlap is below or equal to zero, then there is no overlap.
        distance = maxDistance;
    }
    else if (getAreaOfCircle(r1 < r2 ? r1 : r2) <= overlap) {
        // When area of overlap is larger than the area of the smallest
        // circle, then it is completely overlapping.
        distance = 0;
    }
    else {
        distance = bisect((x) => {
            const actualOverlap = getOverlapBetweenCirclesByDistance(r1, r2, x);
            // Return the difference between wanted and actual overlap.
            return overlap - actualOverlap;
        }, 0, maxDistance);
    }
    return distance;
}
/**
 * Finds the available width for a label, by taking the label position and
 * finding the largest distance, which is inside all internal circles, and
 * outside all external circles.
 *
 * @private
 * @param {Highcharts.PositionObject} pos
 * The x and y coordinate of the label.
 * @param {Array<Highcharts.CircleObject>} internal
 * Internal circles.
 * @param {Array<Highcharts.CircleObject>} external
 * External circles.
 * @return {number}
 * Returns available width for the label.
 */
function getLabelWidth(pos, internal, external) {
    const radius = internal.reduce((min, circle) => Math.min(circle.r, min), Infinity), 
    // Filter out external circles that are completely overlapping.
    filteredExternals = external.filter((circle) => !isPointInsideCircle(pos, circle));
    const findDistance = function (maxDistance, direction) {
        return bisect((x) => {
            const testPos = {
                x: pos.x + (direction * x),
                y: pos.y
            }, isValid = (isPointInsideAllCircles(testPos, internal) &&
                isPointOutsideAllCircles(testPos, filteredExternals));
            // If the position is valid, then we want to move towards the
            // max distance. If not, then we want to away from the max distance.
            return -(maxDistance - x) + (isValid ? 0 : Number.MAX_VALUE);
        }, 0, maxDistance);
    };
    // Find the smallest distance of left and right.
    return Math.min(findDistance(radius, -1), findDistance(radius, 1)) * 2;
}
/**
 * Calculates a margin for a point based on the internal and external
 * circles. The margin describes if the point is well placed within the
 * internal circles, and away from the external.
 * @private
 * @todo add unit tests.
 * @param {Highcharts.PositionObject} point
 * The point to evaluate.
 * @param {Array<Highcharts.CircleObject>} internal
 * The internal circles.
 * @param {Array<Highcharts.CircleObject>} external
 * The external circles.
 * @return {number}
 * Returns the margin.
 */
function getMarginFromCircles(point, internal, external) {
    let margin = internal.reduce((margin, circle) => {
        const m = circle.r - VennUtils_getDistanceBetweenPoints(point, circle);
        return (m <= margin) ? m : margin;
    }, Number.MAX_VALUE);
    margin = external.reduce((margin, circle) => {
        const m = VennUtils_getDistanceBetweenPoints(point, circle) - circle.r;
        return (m <= margin) ? m : margin;
    }, margin);
    return margin;
}
/**
 * Calculates the area of overlap between a list of circles.
 * @private
 * @todo add support for calculating overlap between more than 2 circles.
 * @param {Array<Highcharts.CircleObject>} circles
 * List of circles with their given positions.
 * @return {number}
 * Returns the area of overlap between all the circles.
 */
function getOverlapBetweenCircles(circles) {
    let overlap = 0;
    // When there is only two circles we can find the overlap by using their
    // radiuses and the distance between them.
    if (circles.length === 2) {
        const circle1 = circles[0];
        const circle2 = circles[1];
        overlap = getOverlapBetweenCirclesByDistance(circle1.r, circle2.r, VennUtils_getDistanceBetweenPoints(circle1, circle2));
    }
    return overlap;
}
// eslint-disable-next-line require-jsdoc
/**
 *
 */
function isSet(x) {
    return isArray(x.sets) && x.sets.length === 1;
}
// eslint-disable-next-line require-jsdoc
/**
 *
 */
function isValidRelation(x) {
    const map = {};
    return (isObject(x) &&
        (isNumber(x.value) && x.value > -1) &&
        (isArray(x.sets) && x.sets.length > 0) &&
        !x.sets.some(function (set) {
            let invalid = false;
            if (!map[set] && isString(set)) {
                map[set] = true;
            }
            else {
                invalid = true;
            }
            return invalid;
        }));
}
// eslint-disable-next-line require-jsdoc
/**
 *
 */
function isValidSet(x) {
    return (isValidRelation(x) && isSet(x) && x.value > 0);
}
/**
 * Uses a greedy approach to position all the sets. Works well with a small
 * number of sets, and are in these cases a good choice aesthetically.
 * @private
 * @param {Array<object>} relations List of the overlap between two or more
 * sets, or the size of a single set.
 * @return {Array<object>} List of circles and their calculated positions.
 */
function layoutGreedyVenn(relations) {
    const positionedSets = [], mapOfIdToCircles = {};
    // Define a circle for each set.
    relations
        .filter((relation) => (relation.sets.length === 1))
        .forEach((relation) => {
        mapOfIdToCircles[relation.sets[0]] = relation.circle = {
            x: Number.MAX_VALUE,
            y: Number.MAX_VALUE,
            r: Math.sqrt(relation.value / Math.PI)
        };
    });
    /**
     * Takes a set and updates the position, and add the set to the list of
     * positioned sets.
     * @private
     * @param {Object} set
     * The set to add to its final position.
     * @param {Object} coordinates
     * The coordinates to position the set at.
     */
    const positionSet = (set, coordinates) => {
        const circle = set.circle;
        if (circle) {
            circle.x = coordinates.x;
            circle.y = coordinates.y;
        }
        positionedSets.push(set);
    };
    // Find overlap between sets. Ignore relations with more then 2 sets.
    addOverlapToSets(relations);
    // Sort sets by the sum of their size from large to small.
    const sortedByOverlap = relations
        .filter(isSet)
        .sort(sortByTotalOverlap);
    // Position the most overlapped set at 0,0.
    positionSet(sortedByOverlap.shift(), { x: 0, y: 0 });
    const relationsWithTwoSets = relations.filter((x) => (x.sets.length === 2));
    // Iterate and position the remaining sets.
    for (const set of sortedByOverlap) {
        const circle = set.circle;
        if (!circle) {
            continue;
        }
        const radius = circle.r, overlapping = set.overlapping;
        const bestPosition = positionedSets.reduce((best, positionedSet, i) => {
            const positionedCircle = positionedSet.circle;
            if (!positionedCircle || !overlapping) {
                return best;
            }
            const overlap = overlapping[positionedSet.sets[0]];
            // Calculate the distance between the sets to get the
            // correct overlap
            const distance = getDistanceBetweenCirclesByOverlap(radius, positionedCircle.r, overlap);
            // Create a list of possible coordinates calculated from
            // distance.
            let possibleCoordinates = [
                { x: positionedCircle.x + distance, y: positionedCircle.y },
                { x: positionedCircle.x - distance, y: positionedCircle.y },
                { x: positionedCircle.x, y: positionedCircle.y + distance },
                { x: positionedCircle.x, y: positionedCircle.y - distance }
            ];
            // If there are more circles overlapping, then add the
            // intersection points as possible positions.
            for (const positionedSet2 of positionedSets.slice(i + 1)) {
                const positionedCircle2 = positionedSet2.circle, overlap2 = overlapping[positionedSet2.sets[0]];
                if (!positionedCircle2) {
                    continue;
                }
                const distance2 = getDistanceBetweenCirclesByOverlap(radius, positionedCircle2.r, overlap2);
                // Add intersections to list of coordinates.
                possibleCoordinates = possibleCoordinates.concat(getCircleCircleIntersection({
                    x: positionedCircle.x,
                    y: positionedCircle.y,
                    r: distance
                }, {
                    x: positionedCircle2.x,
                    y: positionedCircle2.y,
                    r: distance2
                }));
            }
            // Iterate all suggested coordinates and find the best one.
            for (const coordinates of possibleCoordinates) {
                circle.x = coordinates.x;
                circle.y = coordinates.y;
                // Calculate loss for the suggested coordinates.
                const currentLoss = loss(mapOfIdToCircles, relationsWithTwoSets);
                // If the loss is better, then use these new coordinates
                if (currentLoss < best.loss) {
                    best.loss = currentLoss;
                    best.coordinates = coordinates;
                }
            }
            // Return resulting coordinates.
            return best;
        }, {
            loss: Number.MAX_VALUE,
            coordinates: void 0
        });
        // Add the set to its final position.
        positionSet(set, bestPosition.coordinates);
    }
    // Return the positions of each set.
    return mapOfIdToCircles;
}
/**
 * Calculates the difference between the desired overlap and the actual
 * overlap between two circles.
 * @private
 * @param {Dictionary<Highcharts.CircleObject>} mapOfIdToCircle
 * Map from id to circle.
 * @param {Array<Highcharts.VennRelationObject>} relations
 * List of relations to calculate the loss of.
 * @return {number}
 * Returns the loss between positions of the circles for the given
 * relations.
 */
function loss(mapOfIdToCircle, relations) {
    const precision = 10e10;
    // Iterate all the relations and calculate their individual loss.
    return relations.reduce(function (totalLoss, relation) {
        let loss = 0;
        if (relation.sets.length > 1) {
            const wantedOverlap = relation.value;
            // Calculate the actual overlap between the sets.
            const actualOverlap = getOverlapBetweenCircles(
            // Get the circles for the given sets.
            relation.sets.map(function (set) {
                return mapOfIdToCircle[set];
            }));
            const diff = wantedOverlap - actualOverlap;
            loss = Math.round((diff * diff) * precision) / precision;
        }
        // Add calculated loss to the sum.
        return totalLoss + loss;
    }, 0);
}
/**
 * Finds an optimal position for a given point.
 * @todo add unit tests.
 * @todo add constraints to optimize the algorithm.
 * @private
 * @param {Highcharts.NelderMeadTestFunction} fn
 *        The function to test a point.
 * @param {Highcharts.NelderMeadPointArray} initial
 *        The initial point to optimize.
 * @return {Highcharts.NelderMeadPointArray}
 *         Returns the optimized position of a point.
 */
function nelderMead(fn, initial) {
    const maxIterations = 100, sortByFx = function (a, b) {
        return a.fx - b.fx;
    }, pRef = 1, // Reflection parameter
    pExp = 2, // Expansion parameter
    pCon = -0.5, // Contraction parameter
    pOCon = pCon * pRef, // Outwards contraction parameter
    pShrink = 0.5; // Shrink parameter
    /**
     * @private
     */
    const weightedSum = (weight1, v1, weight2, v2) => v1.map((x, i) => weight1 * x + weight2 * v2[i]);
    /**
     * @private
     */
    const getSimplex = (initial) => {
        const n = initial.length, simplex = new Array(n + 1);
        // Initial point to the simplex.
        simplex[0] = initial;
        simplex[0].fx = fn(initial);
        // Create a set of extra points based on the initial.
        for (let i = 0; i < n; ++i) {
            const point = initial.slice();
            point[i] = point[i] ? point[i] * 1.05 : 0.001;
            point.fx = fn(point);
            simplex[i + 1] = point;
        }
        return simplex;
    };
    const updateSimplex = (simplex, point) => {
        point.fx = fn(point);
        simplex[simplex.length - 1] = point;
        return simplex;
    };
    const shrinkSimplex = (simplex) => {
        const best = simplex[0];
        return simplex.map((point) => {
            const p = weightedSum(1 - pShrink, best, pShrink, point);
            p.fx = fn(p);
            return p;
        });
    };
    const getPoint = (centroid, worst, a, b) => {
        const point = weightedSum(a, centroid, b, worst);
        point.fx = fn(point);
        return point;
    };
    // Create a simplex
    let simplex = getSimplex(initial);
    // Iterate from 0 to max iterations
    for (let i = 0; i < maxIterations; i++) {
        // Sort the simplex
        simplex.sort(sortByFx);
        // Create a centroid from the simplex
        const worst = simplex[simplex.length - 1];
        const centroid = getCentroid(simplex);
        // Calculate the reflected point.
        const reflected = getPoint(centroid, worst, 1 + pRef, -pRef);
        if (reflected.fx < simplex[0].fx) {
            // If reflected point is the best, then possibly expand.
            const expanded = getPoint(centroid, worst, 1 + pExp, -pExp);
            simplex = updateSimplex(simplex, (expanded.fx < reflected.fx) ? expanded : reflected);
        }
        else if (reflected.fx >= simplex[simplex.length - 2].fx) {
            // If the reflected point is worse than the second worse, then
            // contract.
            let contracted;
            if (reflected.fx > worst.fx) {
                // If the reflected is worse than the worst point, do a
                // contraction
                contracted = getPoint(centroid, worst, 1 + pCon, -pCon);
                if (contracted.fx < worst.fx) {
                    simplex = updateSimplex(simplex, contracted);
                }
                else {
                    simplex = shrinkSimplex(simplex);
                }
            }
            else {
                // Otherwise do an outwards contraction
                contracted = getPoint(centroid, worst, 1 - pOCon, pOCon);
                if (contracted.fx < reflected.fx) {
                    simplex = updateSimplex(simplex, contracted);
                }
                else {
                    simplex = shrinkSimplex(simplex);
                }
            }
        }
        else {
            simplex = updateSimplex(simplex, reflected);
        }
    }
    return simplex[0];
}
/**
 * Prepares the venn data so that it is usable for the layout function.
 * Filter out sets, or intersections that includes sets, that are missing in
 * the data or has (value < 1). Adds missing relations between sets in the
 * data as value = 0.
 * @private
 * @param {Array<object>} data The raw input data.
 * @return {Array<object>} Returns an array of valid venn data.
 */
function processVennData(data, splitter) {
    const d = isArray(data) ? data : [];
    const validSets = d
        .reduce(function (arr, x) {
        // Check if x is a valid set, and that it is not an duplicate.
        if (x.sets && isValidSet(x) && arr.indexOf(x.sets[0]) === -1) {
            arr.push(x.sets[0]);
        }
        return arr;
    }, [])
        .sort();
    const mapOfIdToRelation = d.reduce(function (mapOfIdToRelation, relation) {
        if (relation.sets &&
            isValidRelation(relation) &&
            !relation.sets.some(function (set) {
                return validSets.indexOf(set) === -1;
            })) {
            mapOfIdToRelation[relation.sets.sort().join(splitter)] = {
                sets: relation.sets,
                value: relation.value || 0
            };
        }
        return mapOfIdToRelation;
    }, {});
    validSets.reduce(function (combinations, set, i, arr) {
        const remaining = arr.slice(i + 1);
        remaining.forEach(function (set2) {
            combinations.push(set + splitter + set2);
        });
        return combinations;
    }, []).forEach(function (combination) {
        if (!mapOfIdToRelation[combination]) {
            const obj = {
                sets: combination.split(splitter),
                value: 0
            };
            mapOfIdToRelation[combination] = obj;
        }
    });
    // Transform map into array.
    return Object
        .keys(mapOfIdToRelation)
        .map(function (id) {
        return mapOfIdToRelation[id];
    });
}
/**
 * Takes two sets and finds the one with the largest total overlap.
 * @private
 * @param {Object} a
 * The first set to compare.
 * @param {Object} b
 * The second set to compare.
 * @return {number}
 * Returns 0 if a and b are equal, <0 if a is greater, >0 if b is greater.
 */
function sortByTotalOverlap(a, b) {
    if (typeof b.totalOverlap !== 'undefined' &&
        typeof a.totalOverlap !== 'undefined') {
        return b.totalOverlap - a.totalOverlap;
    }
    return NaN;
}
/* *
 *
 *  Default Export
 *
 * */
const VennUtils = {
    geometry: Geometry_GeometryUtilities,
    geometryCircles: Geometry_CircleUtilities,
    addOverlapToSets,
    getCentroid,
    getDistanceBetweenCirclesByOverlap,
    getLabelWidth,
    getMarginFromCircles,
    isSet,
    layoutGreedyVenn,
    loss,
    nelderMead,
    processVennData,
    sortByTotalOverlap
};
/* harmony default export */ const Venn_VennUtils = (VennUtils);

;// ./code/es-modules/Series/Venn/VennSeries.js
/* *
 *
 *  Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject } = (external_highcharts_src_js_default_default());

const { parse: color } = (external_highcharts_src_js_default_Color_default());

const { getAreaOfIntersectionBetweenCircles, getCirclesIntersectionPolygon, isCircle1CompletelyOverlappingCircle2, isPointInsideAllCircles: VennSeries_isPointInsideAllCircles, isPointOutsideAllCircles: VennSeries_isPointOutsideAllCircles } = Geometry_CircleUtilities;


const { getCenterOfPoints: VennSeries_getCenterOfPoints } = Geometry_GeometryUtilities;

const { scatter: ScatterSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;




/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.venn
 *
 * @augments Highcharts.Series
 */
class VennSeries extends ScatterSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Finds the optimal label position by looking for a position that has a low
     * distance from the internal circles, and as large possible distance to the
     * external circles.
     * @private
     * @todo Optimize the intial position.
     * @todo Add unit tests.
     * @param {Array<Highcharts.CircleObject>} internal
     * Internal circles.
     * @param {Array<Highcharts.CircleObject>} external
     * External circles.
     * @return {Highcharts.PositionObject}
     * Returns the found position.
     */
    static getLabelPosition(internal, external) {
        // Get the best label position within the internal circles.
        let best = internal.reduce((best, circle) => {
            const d = circle.r / 2;
            // Give a set of points with the circle to evaluate as the best
            // label position.
            return [
                { x: circle.x, y: circle.y },
                { x: circle.x + d, y: circle.y },
                { x: circle.x - d, y: circle.y },
                { x: circle.x, y: circle.y + d },
                { x: circle.x, y: circle.y - d }
            ]
                // Iterate the given points and return the one with the
                // largest margin.
                .reduce((best, point) => {
                const margin = Venn_VennUtils.getMarginFromCircles(point, internal, external);
                // If the margin better than the current best, then
                // update sbest.
                if (best.margin < margin) {
                    best.point = point;
                    best.margin = margin;
                }
                return best;
            }, best);
        }, {
            point: void 0,
            margin: -Number.MAX_VALUE
        }).point;
        // Use nelder mead to optimize the initial label position.
        const optimal = Venn_VennUtils.nelderMead((p) => -(Venn_VennUtils.getMarginFromCircles({ x: p[0], y: p[1] }, internal, external)), [
            best.x,
            best.y
        ]);
        // Update best to be the point which was found to have the best margin.
        best = {
            x: optimal[0],
            y: optimal[1]
        };
        if (!(VennSeries_isPointInsideAllCircles(best, internal) &&
            VennSeries_isPointOutsideAllCircles(best, external))) {
            // If point was either outside one of the internal, or inside one of
            // the external, then it was invalid and should use a fallback.
            if (internal.length > 1) {
                best = VennSeries_getCenterOfPoints(getCirclesIntersectionPolygon(internal));
            }
            else {
                best = {
                    x: internal[0].x,
                    y: internal[0].y
                };
            }
        }
        // Return the best point.
        return best;
    }
    /**
     * Calculates data label values for a given relations object.
     *
     * @private
     * @todo add unit tests
     * @param {Highcharts.VennRelationObject} relation A relations object.
     * @param {Array<Highcharts.VennRelationObject>} setRelations The list of
     * relations that is a set.
     * @return {Highcharts.VennLabelValuesObject}
     * Returns an object containing position and width of the label.
     */
    static getLabelValues(relation, setRelations) {
        const sets = relation.sets;
        // Create a list of internal and external circles.
        const data = setRelations.reduce((data, set) => {
            // If the set exists in this relation, then it is internal,
            // otherwise it will be external.
            const isInternal = sets.indexOf(set.sets[0]) > -1;
            const property = isInternal ? 'internal' : 'external';
            // Add the circle to the list.
            if (set.circle) {
                data[property].push(set.circle);
            }
            return data;
        }, {
            internal: [],
            external: []
        });
        // Filter out external circles that are completely overlapping all
        // internal
        data.external = data.external.filter((externalCircle) => data.internal.some((internalCircle) => !isCircle1CompletelyOverlappingCircle2(externalCircle, internalCircle)));
        // Calculate the label position.
        const position = VennSeries.getLabelPosition(data.internal, data.external);
        // Calculate the label width
        const width = Venn_VennUtils.getLabelWidth(position, data.internal, data.external);
        return {
            position,
            width
        };
    }
    /**
     * Calculates the positions, and the label values of all the sets in the
     * venn diagram.
     *
     * @private
     * @todo Add support for constrained MDS.
     * @param {Array<Highchats.VennRelationObject>} relations
     * List of the overlap between two or more sets, or the size of a single
     * set.
     * @return {Highcharts.Dictionary<*>}
     * List of circles and their calculated positions.
     */
    static layout(relations) {
        const mapOfIdToShape = {};
        const mapOfIdToLabelValues = {};
        // Calculate best initial positions by using greedy layout.
        if (relations.length > 0) {
            const mapOfIdToCircles = Venn_VennUtils.layoutGreedyVenn(relations);
            const setRelations = relations.filter(Venn_VennUtils.isSet);
            for (const relation of relations) {
                const sets = relation.sets;
                const id = sets.join();
                // Get shape from map of circles, or calculate intersection.
                const shape = Venn_VennUtils.isSet(relation) ?
                    mapOfIdToCircles[id] :
                    getAreaOfIntersectionBetweenCircles(sets.map((set) => mapOfIdToCircles[set]));
                // Calculate label values if the set has a shape
                if (shape) {
                    mapOfIdToShape[id] = shape;
                    mapOfIdToLabelValues[id] = VennSeries.getLabelValues(relation, setRelations);
                }
            }
        }
        return { mapOfIdToShape, mapOfIdToLabelValues };
    }
    /**
     * Calculates the proper scale to fit the cloud inside the plotting area.
     * @private
     * @todo add unit test
     * @param {number} targetWidth
     * Width of target area.
     * @param {number} targetHeight
     * Height of target area.
     * @param {Highcharts.PolygonBoxObject} field
     * The playing field.
     * @return {Highcharts.Dictionary<number>}
     * Returns the value to scale the playing field up to the size of the target
     * area, and center of x and y.
     */
    static getScale(targetWidth, targetHeight, field) {
        const height = field.bottom - field.top, // Top is smaller than bottom
        width = field.right - field.left, scaleX = width > 0 ? 1 / width * targetWidth : 1, scaleY = height > 0 ? 1 / height * targetHeight : 1, adjustX = (field.right + field.left) / 2, adjustY = (field.top + field.bottom) / 2, scale = Math.min(scaleX, scaleY);
        return {
            scale: scale,
            centerX: targetWidth / 2 - adjustX * scale,
            centerY: targetHeight / 2 - adjustY * scale
        };
    }
    /**
     * If a circle is outside a give field, then the boundaries of the field is
     * adjusted accordingly. Modifies the field object which is passed as the
     * first parameter.
     * @private
     * @todo NOTE: Copied from wordcloud, can probably be unified.
     * @param {Highcharts.PolygonBoxObject} field
     * The bounding box of a playing field.
     * @param {Highcharts.CircleObject} circle
     * The bounding box for a placed point.
     * @return {Highcharts.PolygonBoxObject}
     * Returns a modified field object.
     */
    static updateFieldBoundaries(field, circle) {
        const left = circle.x - circle.r, right = circle.x + circle.r, bottom = circle.y + circle.r, top = circle.y - circle.r;
        // TODO improve type checking.
        if (!isNumber(field.left) || field.left > left) {
            field.left = left;
        }
        if (!isNumber(field.right) || field.right < right) {
            field.right = right;
        }
        if (!isNumber(field.top) || field.top > top) {
            field.top = top;
        }
        if (!isNumber(field.bottom) || field.bottom < bottom) {
            field.bottom = bottom;
        }
        return field;
    }
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    animate(init) {
        if (!init) {
            const series = this, animOptions = animObject(series.options.animation);
            for (const point of series.points) {
                const args = point.shapeArgs;
                if (point.graphic && args) {
                    const attr = {}, animate = {};
                    if (args.d) {
                        // If shape is a path, then animate opacity.
                        attr.opacity = 0.001;
                    }
                    else {
                        // If shape is a circle, then animate radius.
                        attr.r = 0;
                        animate.r = args.r;
                    }
                    point.graphic
                        .attr(attr)
                        .animate(animate, animOptions);
                    // If shape is path, then fade it in after the circles
                    // animation
                    if (args.d) {
                        setTimeout(() => {
                            point?.graphic?.animate({
                                opacity: 1
                            });
                        }, animOptions.duration);
                    }
                }
            }
        }
    }
    /**
     * Draw the graphics for each point.
     * @private
     */
    drawPoints() {
        const series = this, 
        // Series properties
        chart = series.chart, group = series.group, points = series.points || [], 
        // Chart properties
        renderer = chart.renderer;
        // Iterate all points and calculate and draw their graphics.
        for (const point of points) {
            const attribs = {
                zIndex: isArray(point.sets) ? point.sets.length : 0
            }, shapeArgs = point.shapeArgs;
            // Add point attribs
            if (!chart.styledMode) {
                extend(attribs, series.pointAttribs(point, point.state));
            }
            // Draw the point graphic.
            Series_DrawPointUtilities.draw(point, {
                isNew: !point.graphic,
                animatableAttribs: shapeArgs,
                attribs: attribs,
                group: group,
                renderer: renderer,
                shapeType: shapeArgs?.d ? 'path' : 'circle'
            });
        }
    }
    init() {
        ScatterSeries.prototype.init.apply(this, arguments);
        // Venn's opacity is a different option from other series
        delete this.opacity;
    }
    /**
     * Calculates the style attributes for a point. The attributes can vary
     * depending on the state of the point.
     * @private
     * @param {Highcharts.Point} point
     * The point which will get the resulting attributes.
     * @param {string} [state]
     * The state of the point.
     * @return {Highcharts.SVGAttributes}
     * Returns the calculated attributes.
     */
    pointAttribs(point, state) {
        const series = this, seriesOptions = series.options || {}, pointOptions = point?.options || {}, stateOptions = (state && seriesOptions.states[state]) || {}, options = merge(seriesOptions, { color: point?.color }, pointOptions, stateOptions);
        // Return resulting values for the attributes.
        return {
            'fill': color(options.color)
                .brighten(options.brightness)
                .get(),
            // Set opacity directly to the SVG element, not to pattern #14372.
            opacity: options.opacity,
            'stroke': options.borderColor,
            'stroke-width': options.borderWidth,
            'dashstyle': options.borderDashStyle
        };
    }
    translate() {
        const chart = this.chart;
        this.dataTable.modified = this.dataTable;
        this.generatePoints();
        // Process the data before passing it into the layout function.
        const relations = Venn_VennUtils.processVennData(this.options.data, VennSeries.splitter);
        // Calculate the positions of each circle.
        const { mapOfIdToShape, mapOfIdToLabelValues } = VennSeries.layout(relations);
        // Calculate the scale, and center of the plot area.
        const field = Object.keys(mapOfIdToShape)
            .filter((key) => {
            const shape = mapOfIdToShape[key];
            return shape && isNumber(shape.r);
        })
            .reduce((field, key) => VennSeries.updateFieldBoundaries(field, mapOfIdToShape[key]), {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }), scaling = VennSeries.getScale(chart.plotWidth, chart.plotHeight, field), scale = scaling.scale, centerX = scaling.centerX, centerY = scaling.centerY;
        // Iterate all points and calculate and draw their graphics.
        for (const point of this.points) {
            const sets = isArray(point.sets) ? point.sets : [], id = sets.join(), shape = mapOfIdToShape[id], dataLabelValues = mapOfIdToLabelValues[id] || {}, dlOptions = point.options?.dataLabels;
            let shapeArgs, dataLabelWidth = dataLabelValues.width, dataLabelPosition = dataLabelValues.position;
            if (shape) {
                if (shape.r) {
                    shapeArgs = {
                        x: centerX + shape.x * scale,
                        y: centerY + shape.y * scale,
                        r: shape.r * scale
                    };
                }
                else if (shape.d) {
                    const d = shape.d;
                    d.forEach((seg) => {
                        if (seg[0] === 'M') {
                            seg[1] = centerX + seg[1] * scale;
                            seg[2] = centerY + seg[2] * scale;
                        }
                        else if (seg[0] === 'A') {
                            seg[1] = seg[1] * scale;
                            seg[2] = seg[2] * scale;
                            seg[6] = centerX + seg[6] * scale;
                            seg[7] = centerY + seg[7] * scale;
                        }
                    });
                    shapeArgs = { d };
                }
                // Scale the position for the data label.
                if (dataLabelPosition) {
                    dataLabelPosition.x = centerX + dataLabelPosition.x * scale;
                    dataLabelPosition.y = centerY + dataLabelPosition.y * scale;
                }
                else {
                    dataLabelPosition = {};
                }
                if (isNumber(dataLabelWidth)) {
                    dataLabelWidth = Math.round(dataLabelWidth * scale);
                }
            }
            point.shapeArgs = shapeArgs;
            // Placement for the data labels
            if (dataLabelPosition && shapeArgs) {
                point.plotX = dataLabelPosition.x;
                point.plotY = dataLabelPosition.y;
            }
            // Add width for the data label
            if (dataLabelWidth && shapeArgs) {
                point.dlOptions = merge(true, {
                    style: {
                        width: dataLabelWidth
                    }
                }, isObject(dlOptions, true) ? dlOptions : void 0, { zIndex: void 0 });
            }
            // Set name for usage in tooltip and in data label.
            point.name = point.options.name || sets.join('∩');
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
VennSeries.splitter = 'highcharts-split';
VennSeries.defaultOptions = merge(ScatterSeries.defaultOptions, Venn_VennSeriesDefaults);
extend(VennSeries.prototype, {
    axisTypes: [],
    directTouch: true,
    isCartesian: false,
    pointArrayMap: ['value'],
    pointClass: Venn_VennPoint,
    utils: Venn_VennUtils
});
// Modify final series options.
addEvent(VennSeries, 'afterSetOptions', function (e) {
    const options = e.options, states = options.states || {};
    if (this.is('venn')) {
        // Explicitly disable all halo options.
        for (const state of Object.keys(states)) {
            states[state].halo = false;
        }
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('venn', VennSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Venn_VennSeries = ((/* unused pure expression or super */ null && (VennSeries)));

;// ./code/es-modules/masters/modules/venn.src.js




/* harmony default export */ const venn_src = ((external_highcharts_src_js_default_default()));

export { venn_src as default };
