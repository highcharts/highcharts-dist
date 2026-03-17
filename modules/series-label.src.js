// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/series-label
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Templating"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/series-label", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Templating"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/series-label"] = factory(root["_Highcharts"], root["_Highcharts"]["Templating"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Templating"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__984__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  "default": () => (/* binding */ series_label_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Templating"],"commonjs":["highcharts","Templating"],"commonjs2":["highcharts","Templating"],"root":["Highcharts","Templating"]}
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_ = __webpack_require__(984);
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default = /*#__PURE__*/__webpack_require__.n(highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_);
;// ./code/es-modules/Extensions/SeriesLabel/SeriesLabelDefaults.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Torstein Honsi
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
 * Series labels are placed as close to the series as possible in a
 * natural way, seeking to avoid other series. The goal of this
 * feature is to make the chart more easily readable, like if a
 * human designer placed the labels in the optimal position.
 *
 * The series labels currently work with series types having a
 * `graph` or an `area`.
 *
 * @sample highcharts/series-label/line-chart
 *         Line chart
 * @sample highcharts/demo/streamgraph
 *         Stream graph
 * @sample highcharts/series-label/stock-chart
 *         Stock chart
 *
 * @declare  Highcharts.SeriesLabelOptionsObject
 * @since    6.0.0
 * @product  highcharts highstock gantt
 * @requires modules/series-label
 * @optionparent plotOptions.series.label
 */
const SeriesLabelDefaults = {
    /**
     * Enable the series label per series.
     */
    enabled: true,
    /**
     * Allow labels to be placed distant to the graph if necessary,
     * and draw a connector line to the graph. Setting this option
     * to true may decrease the performance significantly, since the
     * algorithm with systematically search for open spaces in the
     * whole plot area. Visually, it may also result in a more
     * cluttered chart, though more of the series will be labeled.
     */
    connectorAllowed: false,
    /**
     * If the label is closer than this to a neighbour graph, draw a
     * connector.
     */
    connectorNeighbourDistance: 24,
    /**
     * A format string for the label, with support for a subset of
     * HTML. Variables are enclosed by curly brackets. Available
     * variables are `name`, `options.xxx`, `color` and other
     * members from the `series` object. Use this option also to set
     * a static text for the label.
     *
     * @type string
     * @since 8.1.0
     */
    format: void 0,
    /**
     * Callback function to format each of the series' labels. The
     * `this` keyword refers to the series object. By default the
     * `formatter` is undefined and the `series.name` is rendered.
     * Since v12.5.0, the callback also receives `ctx` as the first argument,
     * so that arrow functions can access the same context as regular
     * functions using `this`.
     *
     * @type {Highcharts.FormatterCallbackFunction<Series>}
     * @since 8.1.0
     */
    formatter: void 0,
    /**
     * For area-like series, allow the font size to vary so that
     * small areas get a smaller font size. The default applies this
     * effect to area-like series but not line-like series.
     *
     * @sample highcharts/demo/streamgraph
     *         Min and max font size on a streamgraph
     * @type   {number|null}
     */
    minFontSize: null,
    /**
     * For area-like series, allow the font size to vary so that
     * small areas get a smaller font size. The default applies this
     * effect to area-like series but not line-like series.
     *
     * @sample highcharts/demo/streamgraph
     *         Min and max font size on a streamgraph
     *
     * @type   {number|null}
     */
    maxFontSize: null,
    /**
     * Draw the label on the area of an area series. By default it
     * is drawn on the area. Set it to `false` to draw it next to
     * the graph instead.
     *
     * @type {boolean|null}
     */
    onArea: null,
    /**
     * Styles for the series label. The color defaults to the series
     * color, or a contrast color if `onArea`.
     *
     * @type {Highcharts.CSSObject}
     */
    style: {
        /**
         * @type {number|string}
         */
        fontSize: '0.8em',
        /** @internal */
        fontWeight: 'bold'
    },
    /**
     * Whether to use HTML to render the series label.
     */
    useHTML: false,
    /**
     * An array of boxes to avoid when laying out the labels. Each
     * item has a `left`, `right`, `top` and `bottom` property.
     *
     * @type {Array<Highcharts.LabelIntersectBoxObject>}
     */
    boxesToAvoid: []
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const SeriesLabel_SeriesLabelDefaults = (SeriesLabelDefaults);

;// ./code/es-modules/Extensions/SeriesLabel/SeriesLabelUtilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Torstein Honsi
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
 * Counter-clockwise, part of the fast line intersection logic.
 *
 * @internal
 * @function ccw
 */
function ccw(x1, y1, x2, y2, x3, y3) {
    const cw = ((y3 - y1) * (x2 - x1)) - ((y2 - y1) * (x3 - x1));
    return cw > 0 ? true : !(cw < 0);
}
/**
 * Detect if two lines intersect.
 *
 * @internal
 * @function intersectLine
 */
function intersectLine(x1, y1, x2, y2, x3, y3, x4, y4) {
    return ccw(x1, y1, x3, y3, x4, y4) !== ccw(x2, y2, x3, y3, x4, y4) &&
        ccw(x1, y1, x2, y2, x3, y3) !== ccw(x1, y1, x2, y2, x4, y4);
}
/**
 * Detect if a box intersects with a line.
 *
 * @internal
 * @function boxIntersectLine
 */
function boxIntersectLine(x, y, w, h, x1, y1, x2, y2) {
    return (intersectLine(x, y, x + w, y, x1, y1, x2, y2) || // Top of label
        intersectLine(x + w, y, x + w, y + h, x1, y1, x2, y2) || // Right
        intersectLine(x, y + h, x + w, y + h, x1, y1, x2, y2) || // Bottom
        intersectLine(x, y, x, y + h, x1, y1, x2, y2) // Left of label
    );
}
/** @internal */
function intersectRect(r1, r2) {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const SeriesLabelUtilities = {
    boxIntersectLine,
    intersectRect
};
/** @internal */
/* harmony default export */ const SeriesLabel_SeriesLabelUtilities = (SeriesLabelUtilities);

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

;// ./code/es-modules/Extensions/SeriesLabel/SeriesLabel.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
/*
 * Highcharts module to place labels next to a series in a natural position.
 *
 * TODO:
 * - add column support (box collision detection, boxesToAvoid logic)
 * - add more options (connector, format, formatter)
 *
 * https://jsfiddle.net/highcharts/L2u9rpwr/
 * https://jsfiddle.net/highcharts/y5A37/
 * https://jsfiddle.net/highcharts/264Nm/
 * https://jsfiddle.net/highcharts/y5A37/
 */


const { animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { format } = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default());

const { setOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { boxIntersectLine: SeriesLabel_boxIntersectLine, intersectRect: SeriesLabel_intersectRect } = SeriesLabel_SeriesLabelUtilities;

/* *
 *
 *  Constants
 *
 * */
const labelDistance = 3;
/* *
 *
 *  Functions
 *
 * */
/**
 * Check whether a proposed label position is clear of other elements.
 * @internal
 */
function checkClearPoint(series, x, y, bBox, checkDistance) {
    const chart = series.chart, seriesLabelOptions = series.options.label || {}, onArea = pick(seriesLabelOptions.onArea, !!series.area), findDistanceToOthers = (onArea || seriesLabelOptions.connectorAllowed), leastDistance = 16, boxesToAvoid = chart.boxesToAvoid;
    let distToOthersSquared = Number.MAX_VALUE, // Distance to other graphs
    distToPointSquared = Number.MAX_VALUE, dist, connectorPoint, withinRange, xDist, yDist, i, j;
    /**
     * Get the weight in order to determine the ideal position. Larger distance
     * to other series gives more weight. Smaller distance to the actual point
     * (connector points only) gives more weight.
     * @internal
     */
    function getWeight(distToOthersSquared, distToPointSquared) {
        return distToOthersSquared - distToPointSquared;
    }
    // First check for collision with existing labels
    for (i = 0; boxesToAvoid && i < boxesToAvoid.length; i += 1) {
        if (SeriesLabel_intersectRect(boxesToAvoid[i], {
            left: x,
            right: x + bBox.width,
            top: y,
            bottom: y + bBox.height
        })) {
            return false;
        }
    }
    // For each position, check if the lines around the label intersect with any
    // of the graphs.
    for (i = 0; i < chart.series.length; i += 1) {
        const serie = chart.series[i], points = serie.interpolatedPoints && [...serie.interpolatedPoints];
        if (serie.visible && points) {
            // Avoid the sides of the plot area
            const stepY = chart.plotHeight / 10;
            for (let chartY = chart.plotTop; chartY <= chart.plotTop + chart.plotHeight; chartY += stepY) {
                points.unshift({
                    chartX: chart.plotLeft,
                    chartY
                });
                points.push({
                    chartX: chart.plotLeft + chart.plotWidth,
                    chartY
                });
            }
            for (j = 1; j < points.length; j += 1) {
                if (
                // To avoid processing, only check intersection if the X
                // values are close to the box.
                points[j].chartX >= x - leastDistance &&
                    points[j - 1].chartX <= x + bBox.width +
                        leastDistance
                /* @todo condition above is not the same as below
                (
                    points[j].chartX >=
                    (x - leastDistance)
                ) && (
                    points[j - 1].chartX <=
                    (x + bBox.width + leastDistance)
                ) */
                ) {
                    // If any of the box sides intersect with the line, return.
                    if (SeriesLabel_boxIntersectLine(x, y, bBox.width, bBox.height, points[j - 1].chartX, points[j - 1].chartY, points[j].chartX, points[j].chartY)) {
                        return false;
                    }
                    // But if it is too far away (a padded box doesn't
                    // intersect), also return.
                    if (series === serie && !withinRange && checkDistance) {
                        withinRange = SeriesLabel_boxIntersectLine(x - leastDistance, y - leastDistance, bBox.width + 2 * leastDistance, bBox.height + 2 * leastDistance, points[j - 1].chartX, points[j - 1].chartY, points[j].chartX, points[j].chartY);
                    }
                }
                // Find the squared distance from the center of the label. On
                // area series, avoid its own graph.
                if ((findDistanceToOthers || withinRange) &&
                    (series !== serie || onArea)) {
                    xDist = x + bBox.width / 2 - points[j].chartX;
                    yDist = y + bBox.height / 2 - points[j].chartY;
                    distToOthersSquared = Math.min(distToOthersSquared, xDist * xDist + yDist * yDist);
                }
            }
            // Do we need a connector?
            if (!onArea &&
                findDistanceToOthers &&
                series === serie &&
                ((checkDistance && !withinRange) ||
                    distToOthersSquared < Math.pow(seriesLabelOptions.connectorNeighbourDistance || 1, 2))) {
                for (j = 1; j < points.length; j += 1) {
                    dist = Math.min((Math.pow(x + bBox.width / 2 - points[j].chartX, 2) +
                        Math.pow(y + bBox.height / 2 - points[j].chartY, 2)), (Math.pow(x - points[j].chartX, 2) +
                        Math.pow(y - points[j].chartY, 2)), (Math.pow(x + bBox.width - points[j].chartX, 2) +
                        Math.pow(y - points[j].chartY, 2)), (Math.pow(x + bBox.width - points[j].chartX, 2) +
                        Math.pow(y + bBox.height - points[j].chartY, 2)), (Math.pow(x - points[j].chartX, 2) +
                        Math.pow(y + bBox.height - points[j].chartY, 2)));
                    if (dist < distToPointSquared) {
                        distToPointSquared = dist;
                        connectorPoint = points[j];
                    }
                }
                withinRange = true;
            }
        }
    }
    return !checkDistance || withinRange ? {
        x,
        y,
        weight: getWeight(distToOthersSquared, connectorPoint ? distToPointSquared : 0),
        connectorPoint
    } : false;
}
/** @internal */
function compose(ChartClass, SVGRendererClass) {
    if (pushUnique(composed, 'SeriesLabel')) {
        // Leave both events, we handle animation differently (#9815)
        addEvent(ChartClass, 'load', onChartRedraw);
        addEvent(ChartClass, 'redraw', onChartRedraw);
        SVGRendererClass.prototype.symbols.connector = symbolConnector;
        setOptions({ plotOptions: { series: { label: SeriesLabel_SeriesLabelDefaults } } });
    }
}
/**
 * The main initialize method that runs on chart level after initialization and
 * redraw. It runs in  a timeout to prevent locking, and loops over all series,
 * taking all series and labels into account when placing the labels.
 *
 * @internal
 * @function Highcharts.Chart#drawSeriesLabels
 */
function drawSeriesLabels(chart) {
    // Console.time('drawSeriesLabels');
    chart.boxesToAvoid = [];
    const labelSeries = chart.labelSeries || [], boxesToAvoid = chart.boxesToAvoid;
    // Avoid data labels
    chart.series.forEach((s) => (s.points || []).forEach((p) => (p.dataLabels || []).forEach((label) => {
        const { width, height } = label.getBBox(), left = (label.translateX || 0) + (s.xAxis ? s.xAxis.pos : s.chart.plotLeft), top = (label.translateY || 0) + (s.yAxis ? s.yAxis.pos : s.chart.plotTop);
        boxesToAvoid.push({
            left,
            top,
            right: left + width,
            bottom: top + height
        });
    })));
    // Build the interpolated points
    labelSeries.forEach(function (series) {
        const seriesLabelOptions = series.options.label || {};
        series.interpolatedPoints = getPointsOnGraph(series);
        boxesToAvoid.push(...(seriesLabelOptions.boxesToAvoid || []));
    });
    chart.series.forEach(function (series) {
        const labelOptions = series.options.label;
        if (!labelOptions || (!series.xAxis && !series.yAxis)) {
            return;
        }
        const colorClass = ('highcharts-color-' + pick(series.colorIndex, 'none')), isNew = !series.labelBySeries, minFontSize = labelOptions.minFontSize, maxFontSize = labelOptions.maxFontSize, inverted = chart.inverted, paneLeft = (inverted ? series.yAxis.pos : series.xAxis.pos), paneTop = (inverted ? series.xAxis.pos : series.yAxis.pos), paneWidth = chart.inverted ? series.yAxis.len : series.xAxis.len, paneHeight = chart.inverted ? series.xAxis.len : series.yAxis.len, points = series.interpolatedPoints, onArea = pick(labelOptions.onArea, !!series.area), results = [], xData = series.getColumn('x');
        let bBox, x, y, clearPoint, i, best, label = series.labelBySeries, dataExtremes, areaMin, areaMax;
        // Stay within the area data bounds (#10038)
        if (onArea && !inverted) {
            dataExtremes = [
                series.xAxis.toPixels(xData[0]),
                series.xAxis.toPixels(xData[xData.length - 1])
            ];
            areaMin = Math.min.apply(Math, dataExtremes);
            areaMax = Math.max.apply(Math, dataExtremes);
        }
        /**
         * @internal
         */
        function insidePane(x, y, bBox) {
            const leftBound = Math.max(paneLeft, pick(areaMin, -Infinity)), rightBound = Math.min(paneLeft + paneWidth, pick(areaMax, Infinity));
            return (x > leftBound &&
                x <= rightBound - bBox.width &&
                y >= paneTop &&
                y <= paneTop + paneHeight - bBox.height);
        }
        /**
         * @internal
         */
        function destroyLabel() {
            if (label) {
                series.labelBySeries = label.destroy();
            }
        }
        if (series.visible && !series.boosted && points) {
            if (!label) {
                let labelText = series.name;
                if (typeof labelOptions.format === 'string') {
                    labelText = format(labelOptions.format, series, chart);
                }
                else if (labelOptions.formatter) {
                    labelText = labelOptions.formatter.call(series, series);
                }
                series.labelBySeries = label = chart.renderer
                    .label(labelText, 0, 0, 'connector', 0, 0, labelOptions.useHTML)
                    .addClass('highcharts-series-label ' +
                    'highcharts-series-label-' + series.index + ' ' +
                    (series.options.className || '') + ' ' +
                    colorClass);
                if (!chart.renderer.styledMode) {
                    const color = typeof series.color === 'string' ?
                        series.color : "#666666" /* Palette.neutralColor60 */;
                    label.css(extend({
                        color: onArea ?
                            chart.renderer.getContrast(color) :
                            color
                    }, labelOptions.style || {}));
                    label.attr({
                        opacity: chart.renderer.forExport ? 1 : 0,
                        stroke: series.color,
                        'stroke-width': 1
                    });
                }
                // Adapt label sizes to the sum of the data
                if (minFontSize && maxFontSize) {
                    label.css({
                        fontSize: labelFontSize(series, minFontSize, maxFontSize)
                    });
                }
                label
                    .attr({
                    padding: 0,
                    zIndex: 3
                })
                    .add();
            }
            bBox = label.getBBox();
            bBox.width = Math.round(bBox.width);
            // Ideal positions are centered above or below a point on right side
            // of chart
            for (i = points.length - 1; i > 0; i -= 1) {
                if (onArea) {
                    // Centered
                    x = (points[i].chartCenterX ?? points[i].chartX) -
                        bBox.width / 2;
                    y = (points[i].chartCenterY ?? points[i].chartY) -
                        bBox.height / 2;
                    if (insidePane(x, y, bBox)) {
                        best = checkClearPoint(series, x, y, bBox);
                    }
                    if (best) {
                        results.push(best);
                    }
                }
                else {
                    // Right - up
                    x = points[i].chartX + labelDistance;
                    y = points[i].chartY - bBox.height - labelDistance;
                    if (insidePane(x, y, bBox)) {
                        best = checkClearPoint(series, x, y, bBox, true);
                    }
                    if (best) {
                        results.push(best);
                    }
                    // Right - down
                    x = points[i].chartX + labelDistance;
                    y = points[i].chartY + labelDistance;
                    if (insidePane(x, y, bBox)) {
                        best = checkClearPoint(series, x, y, bBox, true);
                    }
                    if (best) {
                        results.push(best);
                    }
                    // Left - down
                    x = points[i].chartX - bBox.width - labelDistance;
                    y = points[i].chartY + labelDistance;
                    if (insidePane(x, y, bBox)) {
                        best = checkClearPoint(series, x, y, bBox, true);
                    }
                    if (best) {
                        results.push(best);
                    }
                    // Left - up
                    x = points[i].chartX - bBox.width - labelDistance;
                    y = points[i].chartY - bBox.height - labelDistance;
                    if (insidePane(x, y, bBox)) {
                        best = checkClearPoint(series, x, y, bBox, true);
                    }
                    if (best) {
                        results.push(best);
                    }
                }
            }
            // Brute force, try all positions on the chart in a 16x16 grid
            if (labelOptions.connectorAllowed && !results.length && !onArea) {
                for (x = paneLeft + paneWidth - bBox.width; x >= paneLeft; x -= 16) {
                    for (y = paneTop; y < paneTop + paneHeight - bBox.height; y += 16) {
                        clearPoint = checkClearPoint(series, x, y, bBox, true);
                        if (clearPoint) {
                            results.push(clearPoint);
                        }
                    }
                }
            }
            if (results.length) {
                results.sort((a, b) => b.weight - a.weight);
                best = results[0];
                (chart.boxesToAvoid || []).push({
                    left: best.x,
                    right: best.x + bBox.width,
                    top: best.y,
                    bottom: best.y + bBox.height
                });
                // Move it if needed
                const dist = Math.sqrt(Math.pow(Math.abs(best.x - (label.x || 0)), 2) +
                    Math.pow(Math.abs(best.y - (label.y || 0)), 2));
                if (dist && series.labelBySeries) {
                    // Move fast and fade in - pure animation movement is
                    // distractive...
                    let attr = {
                        opacity: chart.renderer.forExport ? 1 : 0,
                        x: best.x,
                        y: best.y
                    }, anim = {
                        opacity: 1
                    };
                    // ... unless we're just moving a short distance
                    if (dist <= 10) {
                        anim = {
                            x: attr.x,
                            y: attr.y
                        };
                        attr = {};
                    }
                    // Default initial animation to a fraction of the series
                    // animation (#9396)
                    let animationOptions;
                    if (isNew) {
                        animationOptions = animObject(series.options.animation);
                        animationOptions.duration *= 0.2;
                    }
                    series.labelBySeries
                        .attr(extend(attr, {
                        anchorX: best.connectorPoint &&
                            (best.connectorPoint.plotX || 0) + paneLeft,
                        anchorY: best.connectorPoint &&
                            (best.connectorPoint.plotY || 0) + paneTop
                    }))
                        .animate(anim, animationOptions);
                    // Record closest point to stick to for sync redraw
                    series.options.kdNow = true;
                    series.buildKDTree();
                    const closest = series.searchPoint({
                        chartX: best.x,
                        chartY: best.y
                    }, true);
                    if (closest) {
                        label.closest = [
                            closest,
                            best.x - (closest.plotX || 0),
                            best.y - (closest.plotY || 0)
                        ];
                    }
                }
            }
            else {
                destroyLabel();
            }
        }
        else {
            destroyLabel();
        }
    });
    fireEvent(chart, 'afterDrawSeriesLabels');
    // Console.timeEnd('drawSeriesLabels');
}
/**
 * Points to avoid. In addition to actual data points, the label should avoid
 * interpolated positions.
 *
 * @internal
 * @function Highcharts.Series#getPointsOnGraph
 */
function getPointsOnGraph(series) {
    if (!series.xAxis && !series.yAxis) {
        return;
    }
    const distance = 16, points = series.points, interpolated = [], graph = series.graph || series.area, node = graph && graph.element, inverted = series.chart.inverted, xAxis = series.xAxis, yAxis = series.yAxis, paneLeft = inverted ? yAxis.pos : xAxis.pos, paneTop = inverted ? xAxis.pos : yAxis.pos, paneHeight = inverted ? xAxis.len : yAxis.len, paneWidth = inverted ? yAxis.len : xAxis.len, seriesLabelOptions = series.options.label || {}, onArea = pick(seriesLabelOptions.onArea, !!series.area), translatedThreshold = yAxis.getThreshold(series.options.threshold), grid = {}, chartCenterKey = inverted ? 'chartCenterX' : 'chartCenterY';
    let i, deltaX, deltaY, delta, len, n, j;
    /**
     * Push the point to the interpolated points, but only if that position in
     * the grid has not been occupied. As a performance optimization, we divide
     * the plot area into a grid and only add one point per series (#9815).
     * @internal
     */
    function pushDiscrete(point) {
        const cellSize = 8, key = Math.round((point.plotX || 0) / cellSize) + ',' +
            Math.round((point.plotY || 0) / cellSize);
        if (!grid[key]) {
            grid[key] = 1;
            interpolated.push(point);
        }
    }
    // For splines, get the point at length (possible caveat: peaks are not
    // correctly detected)
    if (series.getPointSpline &&
        node &&
        node.getPointAtLength &&
        !onArea &&
        // Not performing well on complex series, node.getPointAtLength is too
        // heavy (#9815)
        points.length < (series.chart.plotSizeX || 0) / distance) {
        // If it is animating towards a path definition, use that briefly, and
        // reset
        const d = graph.toD && graph.attr('d');
        if (graph.toD) {
            graph.attr({ d: graph.toD });
        }
        len = node.getTotalLength();
        for (i = 0; i < len; i += distance) {
            const domPoint = node.getPointAtLength(i), plotX = inverted ? paneWidth - domPoint.y : domPoint.x, plotY = inverted ? paneHeight - domPoint.x : domPoint.y;
            pushDiscrete({
                chartX: paneLeft + plotX,
                chartY: paneTop + plotY,
                plotX,
                plotY
            });
        }
        if (d) {
            graph.attr({ d });
        }
        // Last point
        const point = points[points.length - 1], pos = point.pos();
        pushDiscrete({
            chartX: paneLeft + (pos?.[0] || 0),
            chartY: paneTop + (pos?.[1] || 0)
        });
        // Interpolate
    }
    else {
        len = points.length;
        let last;
        for (i = 0; i < len; i += 1) {
            const point = points[i], [plotX, plotY] = point.pos() || [], { plotHigh } = point;
            if (isNumber(plotX) && isNumber(plotY)) {
                const ctlPoint = {
                    plotX,
                    plotY,
                    // Absolute coordinates so we can compare different panes
                    chartX: paneLeft + plotX,
                    chartY: paneTop + plotY
                };
                if (onArea) {
                    // Vertically centered inside area
                    if (plotHigh) {
                        ctlPoint.plotY = plotHigh;
                        ctlPoint.chartY = paneTop + plotHigh;
                    }
                    if (inverted) {
                        ctlPoint.chartCenterX = paneLeft + paneWidth - ((plotHigh ? plotHigh : point.plotY || 0) +
                            pick(point.yBottom, translatedThreshold)) / 2;
                    }
                    else {
                        ctlPoint.chartCenterY = paneTop + ((plotHigh ? plotHigh : plotY) +
                            pick(point.yBottom, translatedThreshold)) / 2;
                    }
                }
                // Add interpolated points
                if (last) {
                    deltaX = Math.abs(ctlPoint.chartX - last.chartX);
                    deltaY = Math.abs(ctlPoint.chartY - last.chartY);
                    delta = Math.max(deltaX, deltaY);
                    if (delta > distance && delta < 999) {
                        n = Math.ceil(delta / distance);
                        for (j = 1; j < n; j += 1) {
                            pushDiscrete({
                                chartX: last.chartX +
                                    (ctlPoint.chartX - last.chartX) * (j / n),
                                chartY: last.chartY +
                                    (ctlPoint.chartY - last.chartY) * (j / n),
                                [chartCenterKey]: (last[chartCenterKey] || 0) +
                                    ((ctlPoint[chartCenterKey] || 0) -
                                        (last[chartCenterKey] || 0)) * (j / n),
                                plotX: (last.plotX || 0) +
                                    (plotX - (last.plotX || 0)) * (j / n),
                                plotY: (last.plotY || 0) +
                                    (plotY - (last.plotY || 0)) * (j / n)
                            });
                        }
                    }
                }
                // Add the real point in order to find positive and negative
                // peaks
                pushDiscrete(ctlPoint);
                last = ctlPoint;
            }
        }
    }
    // Get the bounding box so we can do a quick check first if the bounding
    // boxes overlap.
    /*
    interpolated.bBox = node.getBBox();
    interpolated.bBox.x += paneLeft;
    interpolated.bBox.y += paneTop;
    */
    return interpolated;
}
/**
 * Overridable function to return series-specific font sizes for the labels. By
 * default it returns bigger font sizes for series with the greater sum of y
 * values.
 * @internal
 */
function labelFontSize(series, minFontSize, maxFontSize) {
    return minFontSize + (((series.sum || 0) / (series.chart.labelSeriesMaxSum || 0)) *
        (maxFontSize - minFontSize)) + 'px';
}
/**
 * Prepare drawing series labels.
 * @internal
 */
function onChartRedraw(e) {
    if (this.renderer) {
        const chart = this;
        let delay = animObject(chart.renderer.globalAnimation).duration;
        chart.labelSeries = [];
        chart.labelSeriesMaxSum = 0;
        if (chart.seriesLabelTimer) {
            internalClearTimeout(chart.seriesLabelTimer);
        }
        // Which series should have labels
        chart.series.forEach(function (series) {
            const seriesLabelOptions = series.options.label || {}, label = series.labelBySeries, closest = label && label.closest, yData = series.getColumn('y');
            if (seriesLabelOptions.enabled &&
                series.visible &&
                (series.graph || series.area) &&
                !series.boosted &&
                chart.labelSeries) {
                chart.labelSeries.push(series);
                if (seriesLabelOptions.minFontSize &&
                    seriesLabelOptions.maxFontSize &&
                    yData.length) {
                    series.sum = yData.reduce((pv, cv) => (pv || 0) + (cv || 0), 0);
                    chart.labelSeriesMaxSum = Math.max(chart.labelSeriesMaxSum || 0, series.sum || 0);
                }
                // The labels are processing heavy, wait until the animation is
                // done
                if (e.type === 'load') {
                    delay = Math.max(delay, animObject(series.options.animation).duration);
                }
                // Keep the position updated to the axis while redrawing
                if (closest) {
                    if (typeof closest[0].plotX !== 'undefined') {
                        label.animate({
                            x: closest[0].plotX + closest[1],
                            y: closest[0].plotY + closest[2]
                        });
                    }
                    else {
                        label.attr({ opacity: 0 });
                    }
                }
            }
        });
        chart.seriesLabelTimer = syncTimeout(function () {
            if (chart.series && chart.labelSeries) { // #7931, chart destroyed
                drawSeriesLabels(chart);
            }
        }, chart.renderer.forExport || !delay ? 0 : delay);
    }
}
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
 *  Default Export
 *
 * */
/** @internal */
const SeriesLabel = {
    compose
};
/** @internal */
/* harmony default export */ const SeriesLabel_SeriesLabel = (SeriesLabel);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Containing the position of a box that should be avoided by labels.
 *
 * @interface Highcharts.LabelIntersectBoxObject
 */ /**
* @name Highcharts.LabelIntersectBoxObject#bottom
* @type {number}
*/ /**
* @name Highcharts.LabelIntersectBoxObject#left
* @type {number}
*/ /**
* @name Highcharts.LabelIntersectBoxObject#right
* @type {number}
*/ /**
* @name Highcharts.LabelIntersectBoxObject#top
* @type {number}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/series-label.src.js




const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
SeriesLabel_SeriesLabel.compose(G.Chart, G.SVGRenderer);
/* harmony default export */ const series_label_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});