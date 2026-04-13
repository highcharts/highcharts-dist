// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.0 (2026-04-13)
 * @module highcharts/modules/drilldown
 * @requires highcharts
 *
 * Highcharts Drilldown module
 *
 * (c) 2009-2026 Highsoft AS
 *
 * Author: Torstein Hønsi
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Templating"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/drilldown", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Templating"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/drilldown"] = factory(root["_Highcharts"], root["_Highcharts"]["Templating"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Templating"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__603__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 603:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__603__;

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
  "default": () => (/* binding */ drilldown_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Extensions/Breadcrumbs/BreadcrumbsDefaults.js
/* *
 *
 *  Highcharts Breadcrumbs module
 *
 *  Authors: Grzegorz Blachliński, Karol Kołodziej
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
const lang = {
    /**
     * The text for the main breadcrumb.
     *
     * @since   10.0.0
     * @product highcharts highmaps
     */
    mainBreadcrumb: 'Main'
};
/**
 * Options for breadcrumbs. Breadcrumbs general options are defined in
 * `navigation.breadcrumbs`. Specific options for drilldown are set in
 * `drilldown.breadcrumbs` and for tree-like series traversing, in
 * `plotOptions[series].breadcrumbs`.
 *
 * @since        10.0.0
 * @product      highcharts
 * @optionparent navigation.breadcrumbs
 */
const options = {
    /**
     * The default padding for each button and separator in each direction.
     *
     * @type  {number}
     * @since 10.0.0
     */
    buttonSpacing: 5,
    /**
     * A collection of attributes for the buttons. The object takes SVG
     * attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button
     * states.
     *
     * @sample {highcharts} highcharts/breadcrumbs/single-button
     *         Themed, single button
     *
     * @type    {Highcharts.SVGAttributes}
     * @since   10.0.0
     * @product highcharts
     */
    buttonTheme: {
        /** @ignore */
        fill: 'none',
        /** @ignore */
        height: 18,
        /** @ignore */
        padding: 2,
        /** @ignore */
        'stroke-width': 0,
        /** @ignore */
        zIndex: 7,
        /** @ignore */
        states: {
            select: {
                fill: 'none'
            }
        },
        style: {
            color: "#334eff" /* Palette.highlightColor80 */
        }
    },
    /**
     * Fires when clicking on a breadcrumb button. Two arguments are passed
     * to the function. First is the click event. Second is the breadcrumb
     * options for the clicked button.
     *
     * ```js
     * click: function (e, breadcrumb) {
     *   console.log(breadcrumb.level);
     * }
     * ```
     *
     * Return false to stop default buttons click action.
     *
     * @type      {Highcharts.BreadcrumbsClickCallbackFunction}
     * @since     10.0.0
     * @apioption navigation.breadcrumbs.events.click
     */
    /**
     * When the breadcrumbs are floating, the plot area will not move to
     * make space for it. By default, the chart will not make space for the
     * buttons. This property won't work when positioned in the middle.
     *
     * @sample highcharts/breadcrumbs/single-button
     *         Floating button
     *
     * @type  {boolean}
     * @since 10.0.0
     */
    floating: false,
    /**
     * A format string for the breadcrumbs button. Variables are enclosed by
     * curly brackets. Available values are passed in the declared point
     * options.
     *
     * @type      {string|undefined}
     * @since 10.0.0
     * @default   undefined
     * @sample {highcharts} highcharts/breadcrumbs/format Display custom
     *          values in breadcrumb button.
     */
    format: void 0,
    /**
     * Callback function to format the breadcrumb text from scratch.
     *
     * @type      {Highcharts.BreadcrumbsFormatterCallbackFunction}
     * @since     10.0.0
     * @default   undefined
     * @apioption navigation.breadcrumbs.formatter
     */
    /**
     * What box to align the button to. Can be either `plotBox` or
     * `spacingBox`.
     *
     * @type    {Highcharts.ButtonRelativeToValue}
     * @default plotBox
     * @since   10.0.0
     * @product highcharts highmaps
     */
    relativeTo: 'plotBox',
    /**
     * Whether to reverse the order of buttons. This is common in Arabic
     * and Hebrew.
     *
     * @sample {highcharts} highcharts/breadcrumbs/rtl
     *         Breadcrumbs in RTL
     *
     * @type  {boolean}
     * @since 10.2.0
     */
    rtl: false,
    /**
     * Positioning for the button row. The breadcrumbs buttons will be
     * aligned properly for the default chart layout (title,  subtitle,
     * legend, range selector) for the custom chart layout set the position
     * properties.
     *
     * @sample  {highcharts} highcharts/breadcrumbs/single-button
     *          Single, right aligned button
     *
     * @type    {Highcharts.BreadcrumbsAlignOptions}
     * @since   10.0.0
     * @product highcharts highmaps
     */
    position: {
        /**
         * Horizontal alignment of the breadcrumbs buttons.
         *
         * @type {Highcharts.AlignValue}
         */
        align: 'left',
        /**
         * Vertical alignment of the breadcrumbs buttons.
         *
         * @type {Highcharts.VerticalAlignValue}
         */
        verticalAlign: 'top',
        /**
         * The X offset of the breadcrumbs button group.
         *
         * @type {number}
         */
        x: 0,
        /**
         * The Y offset of the breadcrumbs button group. When `undefined`,
         * and `floating` is `false`, the `y` position is adapted so that
         * the breadcrumbs are rendered outside the target area.
         *
         * @type {number|undefined}
         */
        y: void 0
    },
    /**
     * Options object for Breadcrumbs separator.
     *
     * @since 10.0.0
     */
    separator: {
        /**
         * @type    {string}
         * @since   10.0.0
         * @product highcharts
         */
        text: '/',
        /**
         * CSS styles for the breadcrumbs separator.
         *
         * In styled mode, the breadcrumbs separators are styled by the
         * `.highcharts-separator` rule with its different states.
         *
         *  @type  {Highcharts.CSSObject}
         *  @since 10.0.0
         */
        style: {
            color: "#666666" /* Palette.neutralColor60 */,
            fontSize: '0.8em'
        }
    },
    /**
     * Show full path or only a single button.
     *
     * @sample {highcharts} highcharts/breadcrumbs/single-button
     *         Single, styled button
     *
     * @type  {boolean}
     * @since 10.0.0
     */
    showFullPath: true,
    /**
     * CSS styles for all breadcrumbs.
     *
     * In styled mode, the breadcrumbs buttons are styled by the
     * `.highcharts-breadcrumbs-buttons .highcharts-button` rule with its
     * different states.
     *
     * @type  {Highcharts.SVGAttributes}
     * @since 10.0.0
     */
    style: {},
    /**
     * Whether to use HTML to render the breadcrumbs items texts.
     *
     * @type  {boolean}
     * @since 10.0.0
     */
    useHTML: false,
    /**
     * The z index of the breadcrumbs group.
     *
     * @type  {number}
     * @since 10.0.0
     */
    zIndex: 7
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const BreadcrumbsDefaults = {
    lang,
    options
};
/** @internal */
/* harmony default export */ const Breadcrumbs_BreadcrumbsDefaults = (BreadcrumbsDefaults);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Templating"],"commonjs":["highcharts","Templating"],"commonjs2":["highcharts","Templating"],"root":["Highcharts","Templating"]}
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_ = __webpack_require__(603);
var highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default = /*#__PURE__*/__webpack_require__.n(highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_);
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

;// ./code/es-modules/Extensions/Breadcrumbs/Breadcrumbs.js
/* *
 *
 *  Highcharts Breadcrumbs module
 *
 *  Authors: Grzegorz Blachliński, Karol Kołodziej
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { format } = (highcharts_Templating_commonjs_highcharts_Templating_commonjs2_highcharts_Templating_root_Highcharts_Templating_default());

const { composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Functions
 *
 * */
/**
 * Shift the drillUpButton to make the space for resetZoomButton, #8095.
 * @internal
 */
function onChartAfterShowResetZoom() {
    const chart = this;
    if (chart.breadcrumbs) {
        const bbox = chart.resetZoomButton &&
            chart.resetZoomButton.getBBox(), breadcrumbsOptions = chart.breadcrumbs.options;
        if (bbox &&
            breadcrumbsOptions.position.align === 'right' &&
            breadcrumbsOptions.relativeTo === 'plotBox') {
            chart.breadcrumbs.alignBreadcrumbsGroup(-bbox.width - breadcrumbsOptions.buttonSpacing);
        }
    }
}
/**
 * Remove resize/afterSetExtremes at chart destroy.
 * @internal
 */
function onChartDestroy() {
    if (this.breadcrumbs) {
        this.breadcrumbs.destroy();
        this.breadcrumbs = void 0;
    }
}
/**
 * Logic for making space for the buttons above the plot area
 * @internal
 */
function onChartGetMargins() {
    const breadcrumbs = this.breadcrumbs;
    if (breadcrumbs &&
        !breadcrumbs.options.floating &&
        breadcrumbs.level) {
        const breadcrumbsOptions = breadcrumbs.options, buttonTheme = breadcrumbsOptions.buttonTheme, breadcrumbsHeight = ((buttonTheme.height || 0) +
            2 * (buttonTheme.padding || 0) +
            breadcrumbsOptions.buttonSpacing), verticalAlign = breadcrumbsOptions.position.verticalAlign;
        if (verticalAlign === 'bottom') {
            this.marginBottom = (this.marginBottom || 0) + breadcrumbsHeight;
            breadcrumbs.yOffset = breadcrumbsHeight;
        }
        else if (verticalAlign !== 'middle') {
            this.plotTop += breadcrumbsHeight;
            breadcrumbs.yOffset = -breadcrumbsHeight;
        }
        else {
            breadcrumbs.yOffset = void 0;
        }
    }
}
/** @internal */
function onChartRedraw() {
    this.breadcrumbs && this.breadcrumbs.redraw();
}
/**
 * After zooming out, shift the drillUpButton to the previous position, #8095.
 * @internal
 */
function onChartSelection(event) {
    if (event.resetSelection === true &&
        this.breadcrumbs) {
        this.breadcrumbs.alignBreadcrumbsGroup();
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Breadcrumbs class
 *
 * @internal
 * @class
 * @name Highcharts.Breadcrumbs
 *
 * @param {Highcharts.Chart} chart
 *        Chart object
 * @param {Highcharts.Options} userOptions
 *        User options
 */
class Breadcrumbs {
    /* *
     *
     *  Functions
     *
     * */
    static compose(ChartClass, highchartsDefaultOptions) {
        if (pushUnique(composed, 'Breadcrumbs')) {
            addEvent(ChartClass, 'destroy', onChartDestroy);
            addEvent(ChartClass, 'afterShowResetZoom', onChartAfterShowResetZoom);
            addEvent(ChartClass, 'getMargins', onChartGetMargins);
            addEvent(ChartClass, 'redraw', onChartRedraw);
            addEvent(ChartClass, 'selection', onChartSelection);
            // Add language support.
            extend(highchartsDefaultOptions.lang, Breadcrumbs_BreadcrumbsDefaults.lang);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, userOptions) {
        this.elementList = {};
        this.isDirty = true;
        this.level = 0;
        this.list = [];
        const chartOptions = merge(chart.options.drilldown &&
            chart.options.drilldown.drillUpButton, Breadcrumbs.defaultOptions, chart.options.navigation && chart.options.navigation.breadcrumbs, userOptions);
        this.chart = chart;
        this.options = chartOptions || {};
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Update Breadcrumbs properties, like level and list.
     *
     * @function Highcharts.Breadcrumbs#updateProperties
     */
    updateProperties(list) {
        this.setList(list);
        this.setLevel();
        this.isDirty = true;
    }
    /**
     * Set breadcrumbs list.
     */
    setList(list) {
        this.list = list;
    }
    /**
     * Calculate level on which chart currently is.
     *
     * @function Highcharts.Breadcrumbs#setLevel
     */
    setLevel() {
        this.level = this.list.length && this.list.length - 1;
    }
    /**
     * Get Breadcrumbs level
     *
     * @function Highcharts.Breadcrumbs#getLevel
     */
    getLevel() {
        return this.level;
    }
    /**
     * Default button text formatter.
     *
     * @function Highcharts.Breadcrumbs#getButtonText
     * @param {Highcharts.BreadcrumbsOptions} breadcrumb
     *        Breadcrumb.
     * @return {string}
     *         Formatted text.
     */
    getButtonText(breadcrumb) {
        const breadcrumbs = this, chart = breadcrumbs.chart, breadcrumbsOptions = breadcrumbs.options, lang = chart.options.lang, textFormat = pick(breadcrumbsOptions.format, breadcrumbsOptions.showFullPath ?
            '{level.name}' : '← {level.name}'), defaultText = lang && pick(lang.drillUpText, lang.mainBreadcrumb);
        let returnText = breadcrumbsOptions.formatter &&
            breadcrumbsOptions.formatter(breadcrumb) ||
            format(textFormat, { level: breadcrumb.levelOptions }, chart) || '';
        if (((isString(returnText) &&
            !returnText.length) ||
            returnText === '← ') &&
            defined(defaultText)) {
            returnText = !breadcrumbsOptions.showFullPath ?
                '← ' + defaultText :
                defaultText;
        }
        return returnText;
    }
    /**
     * Redraw.
     *
     * @function Highcharts.Breadcrumbs#redraw
     */
    redraw() {
        if (this.isDirty) {
            this.render();
        }
        if (this.group) {
            this.group.align();
        }
        this.isDirty = false;
    }
    /**
     * Create a group, then draw breadcrumbs together with the separators.
     *
     * @function Highcharts.Breadcrumbs#render
     */
    render() {
        const breadcrumbs = this, chart = breadcrumbs.chart, breadcrumbsOptions = breadcrumbs.options;
        // A main group for the breadcrumbs.
        if (!breadcrumbs.group && breadcrumbsOptions) {
            breadcrumbs.group = chart.renderer
                .g('breadcrumbs-group')
                .addClass('highcharts-no-tooltip highcharts-breadcrumbs')
                .attr({
                zIndex: breadcrumbsOptions.zIndex
            })
                .add();
        }
        // Draw breadcrumbs.
        if (breadcrumbsOptions.showFullPath) {
            this.renderFullPathButtons();
        }
        else {
            this.renderSingleButton();
        }
        this.alignBreadcrumbsGroup();
    }
    /**
     * Draw breadcrumbs together with the separators.
     *
     * @function Highcharts.Breadcrumbs#renderFullPathButtons
     */
    renderFullPathButtons() {
        // Make sure that only one type of button is visible.
        this.destroySingleButton();
        this.resetElementListState();
        this.updateListElements();
        this.destroyListElements();
    }
    /**
     * Render Single button - when showFullPath is not used. The button is
     * similar to the old drillUpButton
     *
     * @function Highcharts.Breadcrumbs#renderSingleButton
     */
    renderSingleButton() {
        const breadcrumbs = this, chart = breadcrumbs.chart, list = breadcrumbs.list, breadcrumbsOptions = breadcrumbs.options, buttonSpacing = breadcrumbsOptions.buttonSpacing;
        // Make sure that only one type of button is visible.
        this.destroyListElements();
        // Draw breadcrumbs. Initial position for calculating the breadcrumbs
        // group.
        const posX = breadcrumbs.group ?
            breadcrumbs.group.getBBox().width :
            buttonSpacing, posY = buttonSpacing;
        const previousBreadcrumb = list[list.length - 2];
        if (!chart.drillUpButton && (this.level > 0)) {
            chart.drillUpButton = breadcrumbs.renderButton(previousBreadcrumb, posX, posY);
        }
        else if (chart.drillUpButton) {
            if (this.level > 0) {
                // Update button.
                this.updateSingleButton();
            }
            else {
                this.destroySingleButton();
            }
        }
    }
    /**
     * Update group position based on align and it's width.
     *
     * @function Highcharts.Breadcrumbs#alignBreadcrumbsGroup
     * @param {number} [xOffset]
     *        Optional horizontal offset.
     */
    alignBreadcrumbsGroup(xOffset) {
        const breadcrumbs = this;
        if (breadcrumbs.group) {
            const breadcrumbsOptions = breadcrumbs.options, buttonTheme = breadcrumbsOptions.buttonTheme, positionOptions = breadcrumbsOptions.position, alignTo = (breadcrumbsOptions.relativeTo === 'chart' ||
                breadcrumbsOptions.relativeTo === 'spacingBox' ?
                void 0 :
                'plotBox'), bBox = breadcrumbs.group.getBBox(), additionalSpace = 2 * (buttonTheme.padding || 0) +
                breadcrumbsOptions.buttonSpacing;
            // Store positionOptions
            positionOptions.width = bBox.width + additionalSpace;
            positionOptions.height = bBox.height + additionalSpace;
            const newPositions = merge(positionOptions);
            // Add x offset if specified.
            if (xOffset) {
                newPositions.x += xOffset;
            }
            if (breadcrumbs.options.rtl) {
                newPositions.x += positionOptions.width;
            }
            newPositions.y = pick(newPositions.y, this.yOffset, 0);
            breadcrumbs.group.align(newPositions, true, alignTo);
        }
    }
    /**
     * Render a button.
     *
     * @function Highcharts.Breadcrumbs#renderButton
     * @param {Highcharts.Breadcrumbs} breadcrumb
     *        Current breadcrumb
     * @param {number} posX
     *        Initial horizontal position
     * @param {number} posY
     *        Initial vertical position
     * @return {SVGElement|void}
     *        Returns the SVG button
     */
    renderButton(breadcrumb, posX, posY) {
        const breadcrumbs = this, chart = this.chart, breadcrumbsOptions = breadcrumbs.options, buttonTheme = merge(breadcrumbsOptions.buttonTheme);
        const button = chart.renderer
            .button(breadcrumbs.getButtonText(breadcrumb), posX, posY, function (e /* @todo (Event|any) */) {
            // Extract events from button object and call
            const buttonEvents = breadcrumbsOptions.events &&
                breadcrumbsOptions.events.click;
            let callDefaultEvent;
            if (buttonEvents) {
                callDefaultEvent = buttonEvents.call(breadcrumbs, e, breadcrumb, 
                // Keep `ctx` for callback parity with arrow functions.
                // Not documented in public API because Breadcrumbs
                // is an internal class.
                breadcrumbs);
            }
            // (difference in behavior of showFullPath and drillUp)
            if (callDefaultEvent !== false) {
                // For single button we are not going to the button
                // level, but the one level up
                if (!breadcrumbsOptions.showFullPath) {
                    e.newLevel = breadcrumbs.level - 1;
                }
                else {
                    e.newLevel = breadcrumb.level;
                }
                fireEvent(breadcrumbs, 'up', e);
            }
        }, buttonTheme)
            .addClass('highcharts-breadcrumbs-button')
            .add(breadcrumbs.group);
        if (!chart.styledMode) {
            button.attr(breadcrumbsOptions.style);
        }
        return button;
    }
    /**
     * Render a separator.
     *
     * @function Highcharts.Breadcrumbs#renderSeparator
     * @param {number} posX
     *        Initial horizontal position
     * @param {number} posY
     *        Initial vertical position
     * @return {Highcharts.SVGElement}
     *        Returns the SVG button
     */
    renderSeparator(posX, posY) {
        const breadcrumbs = this, chart = this.chart, breadcrumbsOptions = breadcrumbs.options, separatorOptions = breadcrumbsOptions.separator;
        const separator = chart.renderer
            .label(separatorOptions.text, posX, posY, void 0, void 0, void 0, false)
            .addClass('highcharts-breadcrumbs-separator')
            .add(breadcrumbs.group);
        if (!chart.styledMode) {
            separator.css(separatorOptions.style);
        }
        return separator;
    }
    update(options) {
        merge(true, this.options, options);
        this.destroy();
        this.isDirty = true;
    }
    /**
     * Update button text when the showFullPath set to false.
     * @function Highcharts.Breadcrumbs#updateSingleButton
     */
    updateSingleButton() {
        const chart = this.chart, currentBreadcrumb = this.list[this.level - 1];
        if (chart.drillUpButton) {
            chart.drillUpButton.attr({
                text: this.getButtonText(currentBreadcrumb)
            });
        }
    }
    /**
     * Destroy the chosen breadcrumbs group
     *
     * @function Highcharts.Breadcrumbs#destroy
     */
    destroy() {
        this.destroySingleButton();
        // Destroy elements one by one. It's necessary because
        // g().destroy() does not remove added HTML
        this.destroyListElements(true);
        // Then, destroy the group itself.
        if (this.group) {
            this.group.destroy();
        }
        this.group = void 0;
    }
    /**
     * Destroy the elements' buttons and separators.
     *
     * @function Highcharts.Breadcrumbs#destroyListElements
     */
    destroyListElements(force) {
        const elementList = this.elementList;
        objectEach(elementList, (element, level) => {
            if (force ||
                !elementList[level].updated) {
                element = elementList[level];
                element.button && element.button.destroy();
                element.separator && element.separator.destroy();
                delete element.button;
                delete element.separator;
                delete elementList[level];
            }
        });
        if (force) {
            this.elementList = {};
        }
    }
    /**
     * Destroy the single button if exists.
     *
     * @function Highcharts.Breadcrumbs#destroySingleButton
     */
    destroySingleButton() {
        if (this.chart.drillUpButton) {
            this.chart.drillUpButton.destroy();
            this.chart.drillUpButton = void 0;
        }
    }
    /**
     * Reset state for all buttons in elementList.
     *
     * @function Highcharts.Breadcrumbs#resetElementListState
     */
    resetElementListState() {
        objectEach(this.elementList, (element) => {
            element.updated = false;
        });
    }
    /**
     * Update rendered elements inside the elementList.
     *
     * @function Highcharts.Breadcrumbs#updateListElements
     */
    updateListElements() {
        const breadcrumbs = this, elementList = breadcrumbs.elementList, buttonSpacing = breadcrumbs.options.buttonSpacing, posY = buttonSpacing, list = breadcrumbs.list, rtl = breadcrumbs.options.rtl, rtlFactor = rtl ? -1 : 1, updateXPosition = function (element, spacing) {
            return rtlFactor * element.getBBox().width +
                rtlFactor * spacing;
        }, adjustToRTL = function (element, posX, posY) {
            element.translate(posX - element.getBBox().width, posY);
        };
        // Initial position for calculating the breadcrumbs group.
        let posX = breadcrumbs.group ?
            updateXPosition(breadcrumbs.group, buttonSpacing) :
            buttonSpacing, currentBreadcrumb, breadcrumb;
        for (let i = 0, iEnd = list.length; i < iEnd; ++i) {
            const isLast = i === iEnd - 1;
            let button, separator;
            breadcrumb = list[i];
            if (elementList[breadcrumb.level]) {
                currentBreadcrumb = elementList[breadcrumb.level];
                button = currentBreadcrumb.button;
                // Render a separator if it was not created before.
                if (!currentBreadcrumb.separator &&
                    !isLast) {
                    // Add spacing for the next separator
                    posX += rtlFactor * buttonSpacing;
                    currentBreadcrumb.separator =
                        breadcrumbs.renderSeparator(posX, posY);
                    if (rtl) {
                        adjustToRTL(currentBreadcrumb.separator, posX, posY);
                    }
                    posX += updateXPosition(currentBreadcrumb.separator, buttonSpacing);
                }
                else if (currentBreadcrumb.separator &&
                    isLast) {
                    currentBreadcrumb.separator.destroy();
                    delete currentBreadcrumb.separator;
                }
                elementList[breadcrumb.level].updated = true;
            }
            else {
                // Render a button.
                button = breadcrumbs.renderButton(breadcrumb, posX, posY);
                if (rtl) {
                    adjustToRTL(button, posX, posY);
                }
                posX += updateXPosition(button, buttonSpacing);
                // Render a separator.
                if (!isLast) {
                    separator = breadcrumbs.renderSeparator(posX, posY);
                    if (rtl) {
                        adjustToRTL(separator, posX, posY);
                    }
                    posX += updateXPosition(separator, buttonSpacing);
                }
                elementList[breadcrumb.level] = {
                    button,
                    separator,
                    updated: true
                };
            }
            if (button) {
                button.setState(isLast ? 2 : 0);
            }
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
Breadcrumbs.defaultOptions = Breadcrumbs_BreadcrumbsDefaults.options;
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback function to react on button clicks.
 *
 * @callback Highcharts.BreadcrumbsClickCallbackFunction
 *
 * @param {Highcharts.Event} event
 * Event.
 *
 * @param {Highcharts.BreadcrumbOptions} breadcrumb
 * Breadcrumb options.
 */
/**
 * Callback function to format the breadcrumb text from scratch.
 *
 * @callback Highcharts.BreadcrumbsFormatterCallbackFunction
 *
 * @param {Highcharts.BreadcrumbOptions} options
 * Breadcrumb options.
 *
 * @return {string}
 * Formatted text or false
 */
/**
 * Options for the one breadcrumb.
 *
 * @interface Highcharts.BreadcrumbOptions
 */
/**
 * Level connected to a specific breadcrumb.
 * @name Highcharts.BreadcrumbOptions#level
 * @type {number}
 */
/**
 * Options for series or point connected to a specific breadcrumb.
 * @name Highcharts.BreadcrumbOptions#levelOptions
 * @type {SeriesOptions|PointOptionsObject}
 */
/**
 * Options for aligning breadcrumbs group.
 *
 * @interface Highcharts.BreadcrumbsAlignOptions
 */
/**
 * Align of a Breadcrumb group.
 * @default right
 * @name Highcharts.BreadcrumbsAlignOptions#align
 * @type {AlignValue}
 */
/**
 * Vertical align of a Breadcrumb group.
 * @default top
 * @name Highcharts.BreadcrumbsAlignOptions#verticalAlign
 * @type {VerticalAlignValue}
 */
/**
 * X offset of a Breadcrumbs group.
 * @name Highcharts.BreadcrumbsAlignOptions#x
 * @type {number}
 */
/**
 * Y offset of a Breadcrumbs group.
 * @name Highcharts.BreadcrumbsAlignOptions#y
 * @type {number}
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/Drilldown/DrilldownDefaults.js
/* *
 *
 *  Highcharts Drilldown module
 *
 *  Author: Torstein Hønsi
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
 * Options for drill down, the concept of inspecting increasingly high
 * resolution data through clicking on chart items like columns or pie slices.
 *
 * @sample {highcharts} highcharts/series-organization/drilldown
 *         Organization chart drilldown
 *
 * @product      highcharts highmaps
 * @requires     modules/drilldown
 * @optionparent drilldown
 * @internal
 */
const DrilldownDefaults = {
    /**
     * When this option is false, clicking a single point will drill down
     * all points in the same category, equivalent to clicking the X axis
     * label.
     *
     * @sample {highcharts} highcharts/drilldown/allowpointdrilldown-false/
     *         Don't allow point drilldown
     *
     * @type      {boolean}
     * @default   true
     * @since     4.1.7
     * @product   highcharts
     * @apioption drilldown.allowPointDrilldown
     */
    /**
     * Options for the breadcrumbs, the navigation at the top leading the way
     * up through the drilldown levels.
     *
     * @since 10.0.0
     * @product   highcharts highmaps
     * @extends   navigation.breadcrumbs
     * @optionparent drilldown.breadcrumbs
     */
    /**
     * An array of series configurations for the drill down. Each series
     * configuration uses the same syntax as the [series](#series) option set.
     * These drilldown series are hidden by default. The drilldown series is
     * linked to the parent series' point by its `id`.
     *
     * @type      {Array<Highcharts.SeriesOptionsType>}
     * @since     3.0.8
     * @product   highcharts highmaps
     * @apioption drilldown.series
     */
    /**
     * Additional styles to apply to the X axis label for a point that
     * has drilldown data. By default it is underlined and blue to invite
     * to interaction.
     *
     * In styled mode, active label styles can be set with the
     * `.highcharts-drilldown-axis-label` class.
     *
     * @sample {highcharts} highcharts/drilldown/labels/
     *         Label styles
     *
     * @type    {Highcharts.CSSObject}
     * @default { "cursor": "pointer", "color": "#003399", "fontWeight": "bold", "textDecoration": "underline" }
     * @since   3.0.8
     * @product highcharts highmaps
     */
    activeAxisLabelStyle: {
        /** @ignore-option */
        cursor: 'pointer',
        /** @ignore-option */
        color: "#0022ff" /* Palette.highlightColor100 */,
        /** @ignore-option */
        fontWeight: 'bold',
        /** @ignore-option */
        textDecoration: 'underline'
    },
    /**
     * Additional styles to apply to the data label of a point that has
     * drilldown data. By default it is underlined and blue to invite to
     * interaction.
     *
     * In styled mode, active data label styles can be applied with the
     * `.highcharts-drilldown-data-label` class.
     *
     * @sample {highcharts} highcharts/drilldown/labels/
     *         Label styles
     *
     * @type    {Highcharts.CSSObject}
     * @default { "cursor": "pointer", "color": "#003399", "fontWeight": "bold", "textDecoration": "underline" }
     * @since   3.0.8
     * @product highcharts highmaps
     */
    activeDataLabelStyle: {
        cursor: 'pointer',
        color: "#0022ff" /* Palette.highlightColor100 */,
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    /**
     * Set the animation for all drilldown animations. Animation of a drilldown
     * occurs when drilling between a column point and a column series, or a pie
     * slice and a full pie series. Drilldown can still be used between series
     * and points of different types, but animation will not occur.
     *
     * The animation can either be set as a boolean or a configuration object.
     * If `true`, it will use a duration of 500 ms. If used as a configuration
     * object, the following properties are supported:
     *
     * - `duration`: The duration of the animation in milliseconds.
     *
     * - `easing`: A string reference to an easing function set on the `Math`
     *   object. See [the easing
     *   demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-animation-easing/).
     *
     * @type    {boolean|Highcharts.AnimationOptionsObject}
     * @since   3.0.8
     * @product highcharts highmaps
     */
    animation: {
        /** @ignore-option */
        duration: 500
    },
    /**
     * Drill up button is deprecated since Highcharts v9.3.2. Use
     * [drilldown.breadcrumbs](#drilldown.breadcrumbs) instead.
     *
     * Options for the drill up button that appears when drilling down on a
     * series. The text for the button is defined in
     * [lang.drillUpText](#lang.drillUpText).
     *
     * @sample highcharts/breadcrumbs/single-button
     *         Breadcrumbs set up like a legacy button
     * @sample {highcharts} highcharts/drilldown/drillupbutton/ Drill up button
     * @sample {highmaps} highcharts/drilldown/drillupbutton/ Drill up button
     *
     * @since   3.0.8
     * @product highcharts highmaps
     *
     * @deprecated 9.3.2
     */
    drillUpButton: {
        /**
         * What box to align the button to. Can be either `plotBox` or
         * `spacingBox`.
         *
         * @type       {Highcharts.ButtonRelativeToValue}
         * @default    plotBox
         * @since      3.0.8
         * @deprecated 9.3.2
         * @product    highcharts highmaps
         * @apioption  drilldown.drillUpButton.relativeTo
         */
        /**
         * A collection of attributes for the button. The object takes SVG
         * attributes like `fill`, `stroke`, `stroke-width` or `r`, the border
         * radius. The theme also supports `style`, a collection of CSS
         * properties for the text. Equivalent attributes for the hover state
         * are given in `theme.states.hover`.
         *
         * In styled mode, drill-up button styles can be applied with the
         * `.highcharts-drillup-button` class.
         *
         * @sample {highcharts} highcharts/drilldown/drillupbutton/
         *         Button theming
         * @sample {highmaps} highcharts/drilldown/drillupbutton/
         *         Button theming
         *
         * @type      {Object}
         * @since     3.0.8
         * @deprecated 9.3.2
         * @product   highcharts highmaps
         * @apioption drilldown.drillUpButton.theme
         */
        /**
         * Positioning options for the button within the `relativeTo` box.
         * Available properties are `x`, `y`, `align` and `verticalAlign`.
         *
         * @type    {Highcharts.AlignObject}
         * @since   3.0.8
         * @deprecated 9.3.2
         * @product highcharts highmaps
         */
        position: {
            /**
             * Vertical alignment of the button.
             *
             * @type      {Highcharts.VerticalAlignValue}
             * @deprecated 9.3.2
             * @default   top
             * @product   highcharts highmaps
             * @apioption drilldown.drillUpButton.position.verticalAlign
             */
            /**
             * Horizontal alignment.
             *
             * @type {Highcharts.AlignValue}
             * @deprecated 9.3.2
             */
            align: 'right',
            /**
             * The X offset of the button.
             *
             * @deprecated 9.3.2
             */
            x: -10,
            /**
             * The Y offset of the button.
             *
             * @deprecated 9.3.2
             */
            y: 10
        }
    },
    /**
     * Enable or disable zooming into a region of clicked map point you want to
     * drill into. If mapZooming is set to false the drilldown/drillup
     * animations only fade in/fade out without zooming to a specific map point.
     *
     * @sample    maps/demo/map-drilldown-preloaded/
     *            Map drilldown without async maps loading
     *
     * @type      {boolean}
     * @default   true
     * @since 11.0.0
     * @product   highmaps
     * @apioption drilldown.mapZooming
     */
    mapZooming: true
};
/**
 * Fires when a drilldown point is clicked, before the new series is added. This
 * event is also utilized for async drilldown, where the seriesOptions are not
 * added by option, but rather loaded async. Note that when clicking a category
 * label to trigger multiple series drilldown, one `drilldown` event is
 * triggered per point in the category.
 *
 * Event arguments:
 *
 * - `category`: If a category label was clicked, which index.
 *
 * - `originalEvent`: The original browser event (usually click) that triggered
 *   the drilldown.
 *
 * - `point`: The originating point.
 *
 * - `points`: If a category label was clicked, this array holds all points
 *   corresponding to the category.
 *
 * - `seriesOptions`: Options for the new series.
 *
 * @sample {highcharts} highcharts/drilldown/async/
 *         Async drilldown
 *
 * @type      {Highcharts.DrilldownCallbackFunction}
 * @since     3.0.8
 * @product   highcharts highmaps
 * @context   Highcharts.Chart
 * @requires  modules/drilldown
 * @apioption chart.events.drilldown
 */
/**
 * Fires when drilling up from a drilldown series.
 *
 * @type      {Highcharts.DrillupCallbackFunction}
 * @since     3.0.8
 * @product   highcharts highmaps
 * @context   Highcharts.Chart
 * @requires  modules/drilldown
 * @apioption chart.events.drillup
 */
/**
 * In a chart with multiple drilldown series, this event fires after all the
 * series have been drilled up.
 *
 * @type      {Highcharts.DrillupAllCallbackFunction}
 * @since     4.2.4
 * @product   highcharts highmaps
 * @context   Highcharts.Chart
 * @requires  modules/drilldown
 * @apioption chart.events.drillupall
 */
/**
 * The `id` of a series in the [drilldown.series](#drilldown.series) array to
 * use for a drilldown for this point.
 *
 * @sample {highcharts} highcharts/drilldown/basic/
 *         Basic drilldown
 *
 * @type      {string}
 * @since     3.0.8
 * @product   highcharts
 * @requires  modules/drilldown
 * @apioption series.line.data.drilldown
 */
/**
 * Drill up button is deprecated since Highcharts v9.3.2. Use
 * [drilldown.breadcrumbs](#drilldown.breadcrumbs) instead.
 *
 * The text for the button that appears when drilling down, linking back
 * to the parent series. The parent series' name is inserted for
 * `{series.name}`.
 *
 * @deprecated 9.3.2
 * @since    3.0.8
 * @product  highcharts highmaps
 * @requires modules/drilldown
 * @apioption lang.drillUpText
 */
''; // Keep doclets above detached in JS file
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Drilldown_DrilldownDefaults = (DrilldownDefaults);

;// ./code/es-modules/Extensions/Drilldown/DrilldownSeries.js
/* *
 *
 *  Highcharts Drilldown module
 *
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Functions
 *
 * */
/** @internal */
function applyCursorCSS(element, cursor, addClass, styledMode) {
    element[addClass ? 'addClass' : 'removeClass']('highcharts-drilldown-point');
    if (!styledMode) {
        element.css({ cursor: cursor });
    }
}
/** @internal */
function columnAnimateDrilldown(init) {
    const series = this, chart = series.chart, { drilldownLevels, styledMode } = chart, animationOptions = animObject(chart.options.drilldown?.animation), { xAxis, yAxis } = this;
    if (!init) {
        let animateFrom;
        drilldownLevels?.forEach((level) => {
            if (series.options._ddSeriesId ===
                level.lowerSeriesOptions._ddSeriesId) {
                animateFrom = level.shapeArgs;
                if (animateFrom) {
                    // Adjust for changing axis positions
                    animateFrom.x = (animateFrom.x || 0) +
                        (level.plotLeft ?? xAxis.pos) - xAxis.pos;
                    animateFrom.y = (animateFrom.y || 0) +
                        (level.plotTop ?? yAxis.pos) - yAxis.pos;
                    if (!styledMode) {
                        // Add the point colors to animate from
                        animateFrom.fill = level.color;
                    }
                }
            }
        });
        series.points.forEach((point) => {
            point.graphic
                ?.attr(animateFrom)
                .animate(extend(point.shapeArgs, { fill: point.color || series.color }), animationOptions);
        });
        this.dataLabelsGroups?.forEach((g) => chart.drilldown?.fadeInGroup(g));
        // Reset to prototype
        delete this.animate;
    }
}
/**
 * When drilling up, pull out the individual point graphics from the lower
 * series and animate them into the origin point in the upper series.
 *
 * @internal
 * @function Highcharts.ColumnSeries#animateDrillupFrom
 * @param {Highcharts.DrilldownLevelObject} level
 *        Level container
 * @return {void}
 */
function columnAnimateDrillupFrom(level) {
    const series = this, animationOptions = animObject((series.chart.options.drilldown || {}).animation);
    // Cancel mouse events on the series group (#2787)
    series.trackerGroups?.forEach((key) => {
        if (key === 'dataLabelsGroup') {
            series.dataLabelsGroups?.forEach((g) => {
                g?.on('mouseover', () => { });
            });
        }
        else {
            series[key]?.on('mouseover');
        }
    });
    let group = series.group;
    // For 3d column series all columns are added to one group
    // so we should not delete the whole group. #5297
    const removeGroup = group !== series.chart.columnGroup;
    if (removeGroup) {
        delete series.group;
    }
    (this.points || this.data).forEach((point) => {
        const graphic = point.graphic, animateTo = level.shapeArgs;
        if (graphic && animateTo) {
            const complete = () => {
                graphic.destroy();
                if (group && removeGroup) {
                    group = group.destroy();
                }
            };
            delete point.graphic;
            if (!series.chart.styledMode) {
                animateTo.fill = level.color;
            }
            if (animationOptions.duration) {
                graphic.animate(animateTo, merge(animationOptions, { complete: complete }));
            }
            else {
                graphic.attr(animateTo);
                complete();
            }
        }
    });
}
/**
 * When drilling up, keep the upper series invisible until the lower series has
 * moved into place.
 *
 * @internal
 * @function Highcharts.ColumnSeries#animateDrillupTo
 * @param {boolean} [init=false]
 * Whether to initialize animation
 */
function columnAnimateDrillupTo(init) {
    const series = this, level = series.drilldownLevel, animation = animObject(series.chart.options.drilldown?.animation);
    if (!init) {
        // First hide all items before animating in again
        series.points.forEach((point) => {
            const dataLabel = point.dataLabel;
            if (point.graphic) { // #3407
                point.graphic.hide();
            }
            if (dataLabel) {
                // The data label is initially hidden, make sure it is not faded
                // in (#6127)
                dataLabel.hidden = dataLabel.attr('visibility') === 'hidden';
                if (!dataLabel.hidden) {
                    dataLabel.hide();
                    dataLabel.connector?.hide();
                }
            }
        });
        // Do dummy animation on first point to get to complete
        syncTimeout(() => {
            if (series.points) { // May be destroyed in the meantime, #3389
                // Unable to drillup with nodes, #13711
                let pointsWithNodes = [];
                series.data.forEach((el) => {
                    pointsWithNodes.push(el);
                });
                if (series.nodes) {
                    pointsWithNodes = pointsWithNodes.concat(series.nodes);
                }
                pointsWithNodes.forEach((point, i) => {
                    // Fade in other points
                    const verb = i === (level && level.pointIndex) ? 'show' : 'fadeIn', inherit = verb === 'show' ? true : void 0, dataLabel = point.dataLabel;
                    if (point.graphic && // #3407
                        point.visible // Don't show if invisible (#18303)
                    ) {
                        point.graphic[verb](inherit);
                    }
                    if (dataLabel && !dataLabel.hidden) { // #6127
                        dataLabel.fadeIn(); // #7384
                        dataLabel.connector?.fadeIn();
                    }
                });
            }
        }, Math.max(animation.duration - 50, 0));
        // Reset to prototype
        delete this.animate;
    }
}
/** @internal */
function compose(SeriesClass, seriesTypes) {
    const PointClass = SeriesClass.prototype.pointClass, pointProto = PointClass.prototype;
    if (!pointProto.doDrilldown) {
        const { column: ColumnSeriesClass, map: MapSeriesClass, pie: PieSeriesClass } = seriesTypes;
        addEvent(PointClass, 'afterInit', onPointAfterInit);
        addEvent(PointClass, 'afterSetState', onPointAfterSetState);
        addEvent(PointClass, 'update', onPointUpdate);
        pointProto.doDrilldown = pointDoDrilldown;
        pointProto.runDrilldown = pointRunDrilldown;
        addEvent(SeriesClass, 'afterDrawDataLabels', onSeriesAfterDrawDataLabels);
        addEvent(SeriesClass, 'afterDrawTracker', onSeriesAfterDrawTracker);
        if (ColumnSeriesClass) {
            const columnProto = ColumnSeriesClass.prototype;
            columnProto.animateDrilldown = columnAnimateDrilldown;
            columnProto.animateDrillupFrom = columnAnimateDrillupFrom;
            columnProto.animateDrillupTo = columnAnimateDrillupTo;
        }
        if (MapSeriesClass) {
            const mapProto = MapSeriesClass.prototype;
            mapProto.animateDrilldown = mapAnimateDrilldown;
            mapProto.animateDrillupFrom = mapAnimateDrillupFrom;
            mapProto.animateDrillupTo = mapAnimateDrillupTo;
        }
        if (PieSeriesClass) {
            const pieProto = PieSeriesClass.prototype;
            pieProto.animateDrilldown = pieAnimateDrilldown;
            pieProto.animateDrillupFrom = columnAnimateDrillupFrom;
            pieProto.animateDrillupTo = columnAnimateDrillupTo;
        }
    }
}
/**
 * Animate in the new series.
 * @internal
 */
function mapAnimateDrilldown(init) {
    const series = this, chart = series.chart, group = series.group;
    if (chart &&
        group &&
        series.options &&
        chart.options.drilldown?.animation) {
        // Initialize the animation
        if (init && chart.mapView) {
            group.attr({ opacity: 0.01 });
            chart.mapView.allowTransformAnimation = false;
            // Stop duplicating and overriding animations
            series.options.inactiveOtherPoints = true;
            series.options.enableMouseTracking = false;
            // Run the animation
        }
        else {
            group.animate({ opacity: 1 }, chart.options.drilldown.animation, () => {
                if (series.options) {
                    series.options.inactiveOtherPoints = false;
                    series.options.enableMouseTracking = (series.userOptions?.enableMouseTracking ??
                        true);
                }
            });
            series.dataLabelsGroups?.forEach((g) => chart.drilldown?.fadeInGroup(g));
        }
    }
}
/**
 * When drilling up, pull out the individual point graphics from the
 * lower series and animate them into the origin point in the upper
 * series.
 * @internal
 */
function mapAnimateDrillupFrom() {
    const series = this, chart = series.chart;
    if (chart?.mapView) {
        chart.mapView.allowTransformAnimation = false;
    }
    // Stop duplicating and overriding animations
    if (series.options) {
        series.options.inactiveOtherPoints = true;
    }
}
/**
 * When drilling up, keep the upper series invisible until the lower
 * series has moved into place.
 * @internal
 */
function mapAnimateDrillupTo(init) {
    const series = this, chart = series.chart, group = series.group;
    if (chart && group) {
        // Initialize the animation
        if (init) {
            group.attr({
                opacity: 0.01
            });
            // Stop duplicating and overriding animations
            if (series.options) {
                series.options.inactiveOtherPoints = true;
            }
            // Run the animation
        }
        else {
            group.animate({ opacity: 1 }, (chart.options.drilldown || {}).animation);
            series.dataLabelsGroups?.forEach((g) => chart.drilldown?.fadeInGroup(g));
        }
    }
}
/**
 * On initialization of each point, identify its label and make it clickable.
 * Also, provide a list of points associated to that label.
 * @internal
 */
function onPointAfterInit() {
    const point = this;
    if (point.drilldown && !point.unbindDrilldownClick) {
        // Add the click event to the point
        point.unbindDrilldownClick = addEvent(point, 'click', onPointClick);
    }
    return point;
}
/** @internal */
function onPointAfterSetState() {
    const point = this, series = point.series, styledMode = series.chart.styledMode;
    if (point.drilldown && series.halo && point.state === 'hover') {
        applyCursorCSS(series.halo, 'pointer', true, styledMode);
    }
    else if (series.halo) {
        applyCursorCSS(series.halo, 'auto', false, styledMode);
    }
}
/** @internal */
function onPointClick(e) {
    const point = this, series = point.series;
    if (series.xAxis &&
        (series.chart.options.drilldown || {}).allowPointDrilldown ===
            false) {
        // #5822, x changed
        series.xAxis.drilldownCategory(point.x, e);
    }
    else {
        point.runDrilldown(void 0, void 0, e);
    }
}
/** @internal */
function onPointUpdate(e) {
    const point = this, options = e.options || {};
    if (options.drilldown && !point.unbindDrilldownClick) {
        // Add the click event to the point
        point.unbindDrilldownClick = addEvent(point, 'click', onPointClick);
    }
    else if (!options.drilldown &&
        options.drilldown !== void 0 &&
        point.unbindDrilldownClick) {
        point.unbindDrilldownClick = point.unbindDrilldownClick();
    }
}
/** @internal */
function onSeriesAfterDrawDataLabels() {
    const series = this, chart = series.chart, css = chart.options.drilldown?.activeDataLabelStyle || {}, renderer = chart.renderer, styledMode = chart.styledMode;
    for (const point of series.points) {
        const dataLabelsOptions = splat(point.options.dataLabels)[0] || {}, pointCSS = (point.dlOptions ||
            dataLabelsOptions.style ||
            {});
        if (point.drilldown && point.dataLabel) {
            if (css.color === 'contrast' && !styledMode) {
                const itemColor = ((isString(point.color) && point.color) ||
                    (isString(series.color) && series.color));
                if (isString(itemColor)) {
                    pointCSS.color = renderer.getContrast(itemColor);
                }
            }
            if (dataLabelsOptions && dataLabelsOptions.color) {
                pointCSS.color = dataLabelsOptions.color;
            }
            point.dataLabel.addClass('highcharts-drilldown-data-label');
            if (!styledMode) {
                point.dataLabel
                    .css(css)
                    .css(pointCSS);
            }
        }
    }
}
/**
 * Mark the trackers with a pointer.
 * @internal
 */
function onSeriesAfterDrawTracker() {
    const series = this, styledMode = series.chart.styledMode;
    for (const point of series.points) {
        if (point.drilldown && point.graphic) {
            applyCursorCSS(point.graphic, 'pointer', true, styledMode);
        }
    }
}
/** @internal */
function pieAnimateDrilldown(init) {
    const series = this, chart = series.chart, points = series.points, drilldownLevels = chart.drilldownLevels || [], level = drilldownLevels[drilldownLevels.length - 1], animation = animObject(chart.options.drilldown?.animation);
    if (series.is('item')) {
        animation.duration = 0;
    }
    // Unable to drill down in the horizontal item series #13372
    if (series.center) {
        const animateFrom = level.shapeArgs || {}, start = animateFrom.start || 0, angle = (animateFrom.end || 0) - start, startAngle = angle / series.points.length, styledMode = chart.styledMode;
        // Adjust for moving plot area, typically adjusting to breadcrumbs
        animateFrom.y = (animateFrom.y || 0) +
            ((level.plotTop ?? chart.plotTop) - chart.plotTop) / 2;
        if (!init) {
            let animateTo, point;
            for (let i = 0, iEnd = points.length; i < iEnd; ++i) {
                point = points[i];
                animateTo = point.shapeArgs || {};
                if (!styledMode) {
                    animateFrom.fill = level.color;
                    animateTo.fill = point.color;
                }
                const attr = merge(animateFrom, {
                    start: start + i * startAngle,
                    end: start + (i + 1) * startAngle
                });
                point.graphic?.attr(attr).animate(animateTo, animation);
            }
            series.dataLabelsGroups?.forEach((g) => chart.drilldown?.fadeInGroup(g));
            // Reset to prototype
            delete series.animate;
        }
    }
}
/**
 * Perform drilldown on a point instance. The [drilldown](https://api.highcharts.com/highcharts/series.line.data.drilldown)
 * property must be set on the point options.
 *
 * To drill down multiple points in the same category, use
 * `Axis.drilldownCategory` instead.
 *
 * @requires  modules/drilldown
 *
 * @function Highcharts.Point#doDrilldown
 *
 * @sample highcharts/drilldown/programmatic
 *         Programmatic drilldown
 */
function pointDoDrilldown() {
    this.runDrilldown();
}
/** @internal */
function pointRunDrilldown(holdRedraw, category, originalEvent) {
    const point = this, series = point.series, chart = series.chart, drilldown = chart.options.drilldown || {};
    let i = (drilldown.series || []).length, seriesOptions;
    if (!chart.ddDupes) {
        chart.ddDupes = [];
    }
    // Reset the color and symbol counters after every drilldown. (#19134)
    chart.colorCounter = chart.symbolCounter = 0;
    while (i-- && !seriesOptions) {
        if (drilldown.series &&
            drilldown.series[i].id === point.drilldown &&
            point.drilldown &&
            chart.ddDupes.indexOf(point.drilldown) === -1) {
            seriesOptions = drilldown.series[i];
            chart.ddDupes.push(point.drilldown);
        }
    }
    // Fire the event. If seriesOptions is undefined, the implementer can check
    // for seriesOptions, and call addSeriesAsDrilldown async if necessary.
    fireEvent(chart, 'drilldown', {
        point,
        seriesOptions,
        category,
        originalEvent,
        points: (typeof category !== 'undefined' &&
            series.xAxis.getDDPoints(category).slice(0))
    }, (e) => {
        const chart = e.point.series?.chart, seriesOptions = e.seriesOptions;
        if (chart && seriesOptions) {
            if (holdRedraw) {
                chart.addSingleSeriesAsDrilldown(e.point, seriesOptions);
            }
            else {
                chart.addSeriesAsDrilldown(e.point, seriesOptions);
            }
        }
    });
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const DrilldownSeries = {
    compose
};
/** @internal */
/* harmony default export */ const Drilldown_DrilldownSeries = (DrilldownSeries);

;// ./code/es-modules/Extensions/Drilldown/Drilldown.js
/* *
 *
 *  Highcharts Drilldown module
 *
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject: Drilldown_animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { noop } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());



/* *
 *
 *  Variables
 *
 * */
let ddSeriesId = 1;
/* *
 *
 *  Functions
 *
 * */
/**
 * Drill down to a given category. This is the same as clicking on an axis
 * label. If multiple series with drilldown are present, all will drill down to
 * the given category.
 *
 * See also `Point.doDrilldown` for drilling down on a single point instance.
 *
 * @function Highcharts.Axis#drilldownCategory
 *
 * @sample highcharts/drilldown/programmatic
 *         Programmatic drilldown
 *
 * @param {number} x
 *        The index of the category
 * @param {global.MouseEvent} [originalEvent]
 *        The original event, used internally.
 *
 * @requires modules/drilldown
 */
function axisDrilldownCategory(x, originalEvent) {
    this.getDDPoints(x).forEach(function (point) {
        if (isObject(point) &&
            point.series &&
            point.series.visible &&
            point.runDrilldown) { // #3197
            point.runDrilldown(true, x, originalEvent);
        }
    });
    this.chart.applyDrilldown();
}
/**
 * Return drillable points for this specific X value.
 *
 * @internal
 * @function Highcharts.Axis#getDDPoints
 * @param {number} x
 *        Tick position
 * @return {Array<(false|Highcharts.Point)>}
 *         Drillable points
 */
function axisGetDDPoints(x) {
    return this.ddPoints && this.ddPoints[x] || [];
}
/**
 * This method creates an array of arrays containing a level number
 * with the corresponding series/point.
 *
 * @internal
 * @param {Highcharts.Chart} chart
 *        Highcharts Chart object.
 * @return {Array<Breadcrumbs.BreadcrumbOptions>}
 * List for Highcharts Breadcrumbs.
 */
function createBreadcrumbsList(chart) {
    const list = [], drilldownLevels = chart.drilldownLevels;
    // The list is based on drilldown levels from the chart object
    if (drilldownLevels && drilldownLevels.length) {
        // Add the initial series as the first element.
        if (!list[0]) {
            list.push({
                level: 0,
                levelOptions: drilldownLevels[0].seriesOptions
            });
        }
        drilldownLevels.forEach(function (level) {
            const lastBreadcrumb = list[list.length - 1];
            // If level is already added to breadcrumbs list,
            // don't add it again- drilling categories
            // + 1 because of the wrong levels numeration
            // in drilldownLevels array.
            if (level.levelNumber + 1 > lastBreadcrumb.level) {
                list.push({
                    level: level.levelNumber + 1,
                    levelOptions: merge({
                        name: level.lowerSeries.name
                    }, level.pointOptions)
                });
            }
        });
    }
    return list;
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
class ChartAdditions {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart) {
        this.chart = chart;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Add a series to the chart as drilldown from a specific point in the
     * parent series. This method is used for async drilldown, when clicking a
     * point in a series should result in loading and displaying a more
     * high-resolution series. When not async, the setup is simpler using the
     * [drilldown.series](https://api.highcharts.com/highcharts/drilldown.series)
     * options structure.
     *
     * @sample highcharts/drilldown/async/
     *         Async drilldown
     *
     * @function Highcharts.Chart#addSeriesAsDrilldown
     *
     * @param {Highcharts.Point} point
     * The point from which the drilldown will start.
     *
     * @param {Highcharts.SeriesOptionsType} options
     * The series options for the new, detailed series.
     *
     * @requires modules/drilldown
     */
    addSeriesAsDrilldown(point, options) {
        const chart = (this.chart ||
            this);
        fireEvent(this, 'addSeriesAsDrilldown', { seriesOptions: options });
        if (chart.mapView) {
            // Stop hovering while drilling down
            point.series.isDrilling = true;
            chart.series.forEach((series) => {
                // Stop duplicating and overriding animations
                series.options.inactiveOtherPoints = true;
                // Hide and disable dataLabels
                series.dataLabelsGroups?.forEach((g) => g?.destroy());
                series.dataLabelsGroups = [];
                // Clear point.dataLabels for drill up (#23850)
                series.points?.forEach((p) => {
                    if (p.dataLabels) {
                        p.dataLabels = [];
                    }
                });
            });
            // #18925 map zooming is not working with geoJSON maps
            if (chart.options.drilldown &&
                !chart.mapView.projection.hasGeoProjection &&
                Drilldown_DrilldownDefaults) {
                const userDrilldown = diffObjects(chart.options.drilldown, Drilldown_DrilldownDefaults);
                // Set mapZooming to false if user didn't set any in chart
                // config
                if (!defined(userDrilldown.mapZooming)) {
                    chart.options.drilldown.mapZooming = false;
                }
            }
            if (chart.options.drilldown &&
                chart.options.drilldown.animation &&
                chart.options.drilldown.mapZooming) {
                // First zoomTo then crossfade series
                chart.mapView.allowTransformAnimation = true;
                const animOptions = Drilldown_animObject(chart.options.drilldown.animation);
                if (typeof animOptions !== 'boolean') {
                    const userComplete = animOptions.complete, drilldownComplete = function (obj) {
                        if (obj && obj.applyDrilldown && chart.mapView) {
                            chart
                                .addSingleSeriesAsDrilldown(point, options);
                            chart.applyDrilldown();
                            chart.mapView.allowTransformAnimation = false;
                        }
                    };
                    animOptions.complete =
                        function () {
                            if (userComplete) {
                                userComplete.apply(this, arguments);
                            }
                            drilldownComplete.apply(this, arguments);
                        };
                }
                point.zoomTo(animOptions);
            }
            else {
                chart.addSingleSeriesAsDrilldown(point, options);
                chart.applyDrilldown();
            }
        }
        else {
            chart.addSingleSeriesAsDrilldown(point, options);
            chart.applyDrilldown();
        }
    }
    /** @internal */
    addSingleSeriesAsDrilldown(point, ddOptions) {
        const chart = (this.chart ||
            this), oldSeries = point.series, xAxis = oldSeries.xAxis, yAxis = oldSeries.yAxis, horizAxis = xAxis && chart.inverted ? yAxis : xAxis, vertAxis = xAxis && chart.inverted ? xAxis : yAxis, colorProp = chart.styledMode ?
            { colorIndex: point.colorIndex ?? oldSeries.colorIndex } :
            { color: point.color || oldSeries.color }, levelNumber = oldSeries.options._levelNumber || 0;
        if (!chart.drilldownLevels) {
            chart.drilldownLevels = [];
        }
        ddOptions = extend(extend({
            _ddSeriesId: ddSeriesId++
        }, colorProp), ddOptions);
        let levelSeries = [], levelSeriesOptions = [], last;
        // See if we can reuse the registered series from last run
        last = chart.drilldownLevels[chart.drilldownLevels.length - 1];
        if (last && last.levelNumber !== levelNumber) {
            last = void 0;
        }
        // Record options for all current series
        oldSeries.chart.series.forEach((series) => {
            if (series.xAxis === xAxis) {
                series.options._ddSeriesId =
                    series.options._ddSeriesId || ddSeriesId++;
                series.options.colorIndex = series.colorIndex;
                series.options._levelNumber =
                    series.options._levelNumber || levelNumber; // #3182
                if (last) {
                    levelSeries = last.levelSeries;
                    levelSeriesOptions = last.levelSeriesOptions;
                }
                else {
                    levelSeries.push(series);
                    // (#10597)
                    series.purgedOptions = merge({
                        _ddSeriesId: series.options._ddSeriesId,
                        _levelNumber: series.options._levelNumber,
                        selected: series.options.selected
                    }, series.userOptions);
                    levelSeriesOptions.push(series.purgedOptions);
                }
            }
        });
        // Reset names to prevent extending (#6704)
        if (xAxis?.names) {
            xAxis.names.length = 0;
        }
        // Crate the new series
        const newSeries = chart.addSeries(ddOptions, false);
        newSeries.options._levelNumber = levelNumber + 1;
        if (xAxis) {
            xAxis.userMin = xAxis.userMax = void 0;
            yAxis.userMin = yAxis.userMax = void 0;
        }
        newSeries.isDrilling = true;
        // Add a record of properties for each drilldown level
        const level = extend({
            levelNumber: levelNumber,
            seriesOptions: oldSeries.options,
            seriesPurgedOptions: oldSeries.purgedOptions,
            levelSeriesOptions: levelSeriesOptions,
            levelSeries: levelSeries,
            shapeArgs: point.shapeArgs,
            // No graphic in line series with markers disabled
            bBox: point.graphic ? point.graphic.getBBox() : {},
            color: point.isNull ? 'rgba(0,0,0,0)' : colorProp.color,
            lowerSeries: newSeries,
            lowerSeriesOptions: ddOptions,
            plotTop: vertAxis?.pos ?? chart.plotTop,
            plotLeft: horizAxis?.pos ?? chart.plotLeft,
            pointOptions: point.options,
            pointIndex: point.index,
            oldExtremes: {
                xMin: xAxis?.userMin,
                xMax: xAxis?.userMax,
                yMin: yAxis?.userMin,
                yMax: yAxis?.userMax
            },
            resetZoomButton: last && last.levelNumber === levelNumber ?
                void 0 : chart.resetZoomButton
        }, colorProp);
        // Push it to the lookup array
        chart.drilldownLevels.push(level);
        // Run fancy cross-animation on supported and equal types
        if (oldSeries.type === newSeries.type) {
            newSeries.animate = (newSeries.animateDrilldown || noop);
            newSeries.options.animation = true;
        }
    }
    applyDrilldown() {
        const chart = (this.chart ||
            this), drilldownOptions = chart.options.drilldown, drilldownLevels = chart.drilldownLevels;
        let levelToRemove;
        if (drilldownLevels && drilldownLevels.length > 0) {
            // #3352, async loading
            levelToRemove =
                drilldownLevels[drilldownLevels.length - 1].levelNumber;
            chart.hasCartesianSeries = drilldownLevels.some((level) => level.lowerSeries?.isCartesian // #19725
            );
            (chart.drilldownLevels || []).forEach((level) => {
                if (chart.mapView &&
                    drilldownOptions?.mapZooming) {
                    chart.redraw();
                    level.lowerSeries.isDrilling = false;
                    chart.mapView.fitToBounds(level.lowerSeries.bounds);
                    level.lowerSeries.isDrilling = true;
                }
                if (level.levelNumber === levelToRemove) {
                    level.levelSeries.forEach((series) => {
                        // Not removed, not added as part of a multi-series
                        // drilldown
                        if (!chart.mapView) {
                            if (series.options &&
                                series.options._levelNumber === levelToRemove) {
                                series.remove(false);
                            }
                            // Deal with asynchronous removing of map series
                            // after zooming into
                        }
                        else if (series.options &&
                            series.options._levelNumber === levelToRemove &&
                            series.group) {
                            let animOptions = {};
                            if (drilldownOptions) {
                                animOptions = drilldownOptions.animation;
                            }
                            series.group.animate({
                                opacity: 0
                            }, animOptions, () => {
                                series.remove(false);
                                // If it is the last series
                                if (!(level.levelSeries.filter((el) => Object.keys(el).length)).length) {
                                    // We have a reset zoom button. Hide it and
                                    // detach it from the chart. It is
                                    // preserved to the layer config above.
                                    if (chart.resetZoomButton) {
                                        chart.resetZoomButton.hide();
                                        delete chart.resetZoomButton;
                                    }
                                    chart.pointer?.reset();
                                    fireEvent(chart, 'afterDrilldown');
                                    if (chart.mapView) {
                                        chart.series.forEach((series) => {
                                            series.isDirtyData = true;
                                            series.isDrilling = false;
                                        });
                                        chart.mapView
                                            .fitToBounds(void 0, void 0);
                                        chart.mapView.allowTransformAnimation =
                                            true; // #20857
                                    }
                                    fireEvent(chart, 'afterApplyDrilldown');
                                }
                            });
                        }
                    });
                }
            });
        }
        if (!chart.mapView) {
            // We have a reset zoom button. Hide it and detach it from the
            // chart. It is preserved to the layer config above.
            if (chart.resetZoomButton) {
                chart.resetZoomButton.hide();
                delete chart.resetZoomButton;
            }
            chart.pointer?.reset();
            fireEvent(chart, 'afterDrilldown');
            // Axes shouldn't be visible after drilling into non-cartesian
            // (#19725)
            if (!chart.hasCartesianSeries) {
                chart.axes.forEach((axis) => {
                    axis.destroy(true);
                    axis.init(chart, merge(axis.userOptions, axis.options));
                });
            }
            chart.redraw(drilldownOptions?.animation);
            fireEvent(chart, 'afterApplyDrilldown');
        }
    }
    /**
     * When the chart is drilled down to a child series, calling
     * `chart.drillUp()` will drill up to the parent series.
     *
     * @function Highcharts.Chart#drillUp
     *
     * @sample highcharts/drilldown/programmatic
     *         Programmatic drilldown
     *
     * @requires modules/drilldown
     */
    drillUp(isMultipleDrillUp) {
        const chart = (this.chart ||
            this);
        if (!chart.drilldownLevels || chart.drilldownLevels.length === 0) {
            return;
        }
        fireEvent(chart, 'beforeDrillUp');
        const drilldownLevels = chart.drilldownLevels, levelNumber = drilldownLevels[drilldownLevels.length - 1].levelNumber, chartSeries = chart.series, drilldownLevelsNumber = chart.drilldownLevels.length, drilldownOptions = chart.options.drilldown || {}, addSeries = (seriesOptions, oldSeries) => {
            let addedSeries;
            chartSeries.forEach((series) => {
                if (series.options._ddSeriesId ===
                    seriesOptions._ddSeriesId) {
                    addedSeries = series;
                }
            });
            addedSeries =
                addedSeries || chart.addSeries(seriesOptions, false);
            if (addedSeries.type === oldSeries.type &&
                addedSeries.animateDrillupTo) {
                addedSeries.animate = addedSeries.animateDrillupTo;
            }
            if (seriesOptions === level.seriesPurgedOptions) {
                return addedSeries;
            }
        }, removeSeries = (oldSeries) => {
            oldSeries.remove(false);
            chart.series.forEach((series) => {
                // Ensures to redraw series to get correct colors
                if (series.colorAxis) {
                    series.isDirtyData = true;
                }
                series.options.inactiveOtherPoints = false;
                // Restore opacity for series hidden during map drilldown
                if (series.group && series.visible) {
                    series.group.attr({ opacity: 1 });
                }
            });
            chart.redraw();
        };
        let i = drilldownLevels.length, seriesI, level, oldExtremes;
        // Reset symbol and color counters after every drill-up. (#19134)
        chart.symbolCounter = chart.colorCounter = 0;
        while (i--) {
            let oldSeries, newSeries;
            level = drilldownLevels[i];
            if (level.levelNumber === levelNumber) {
                drilldownLevels.pop();
                // Get the lower series by reference or id
                oldSeries = level.lowerSeries;
                if (!oldSeries.chart) { // #2786
                    seriesI = chartSeries.length; // #2919
                    while (seriesI--) {
                        if (chartSeries[seriesI].options.id ===
                            level.lowerSeriesOptions.id &&
                            chartSeries[seriesI].options._levelNumber ===
                                levelNumber + 1) { // #3867
                            oldSeries = chartSeries[seriesI];
                            break;
                        }
                    }
                }
                // Overcome problems with minRange (#2898)
                oldSeries.dataTable.setColumn('x', []);
                // Reset the names to start new series from the beginning.
                // Do it once to preserve names when multiple
                // series are added for the same axis, #16135.
                if (oldSeries.xAxis &&
                    oldSeries.xAxis.names &&
                    (drilldownLevelsNumber === 0 ||
                        i === drilldownLevelsNumber - 1)) {
                    oldSeries.xAxis.names.length = 0;
                }
                level.levelSeriesOptions.forEach((el) => {
                    const addedSeries = addSeries(el, oldSeries);
                    if (addedSeries) {
                        newSeries = addedSeries;
                    }
                });
                fireEvent(chart, 'drillup', {
                    seriesOptions: level.seriesPurgedOptions ||
                        level.seriesOptions
                });
                if (newSeries) {
                    if (newSeries.type === oldSeries.type) {
                        newSeries.drilldownLevel = level;
                        newSeries.options.animation =
                            drilldownOptions.animation;
                        // #2919
                        if (oldSeries.chart) {
                            oldSeries.animateDrillupFrom?.(level);
                        }
                    }
                    newSeries.options._levelNumber = levelNumber;
                }
                const seriesToRemove = oldSeries;
                // Cannot access variable changed in loop
                if (!chart.mapView) {
                    seriesToRemove.remove(false);
                }
                // Reset the zoom level of the upper series
                if (newSeries?.xAxis) {
                    oldExtremes = level.oldExtremes;
                    newSeries.xAxis.setExtremes(oldExtremes.xMin, oldExtremes.xMax, false);
                    newSeries.yAxis.setExtremes(oldExtremes.yMin, oldExtremes.yMax, false);
                }
                // We have a resetZoomButton tucked away for this level. Attach
                // it to the chart and show it.
                if (level.resetZoomButton) {
                    chart.resetZoomButton = level.resetZoomButton;
                }
                if (!chart.mapView) {
                    fireEvent(chart, 'afterDrillUp');
                }
                else {
                    const shouldAnimate = (level.levelNumber === levelNumber &&
                        isMultipleDrillUp), zoomingDrill = drilldownOptions.animation &&
                        drilldownOptions.mapZooming;
                    if (shouldAnimate) {
                        oldSeries.remove(false);
                    }
                    else {
                        // Hide and disable dataLabels
                        oldSeries.dataLabelsGroups?.forEach((g) => {
                            g?.destroy();
                        });
                        oldSeries.dataLabelsGroups = [];
                        if (chart.mapView && newSeries) {
                            if (zoomingDrill) {
                                // Stop hovering while drilling down
                                oldSeries.isDrilling = true;
                                newSeries.isDrilling = true;
                                chart.redraw(false);
                                // Fit to previous bounds
                                chart.mapView.fitToBounds(oldSeries.bounds, void 0, true, false);
                            }
                            chart.mapView.allowTransformAnimation = true;
                            fireEvent(chart, 'afterDrillUp', {
                                seriesOptions: newSeries ? newSeries.userOptions : void 0
                            });
                            if (zoomingDrill) {
                                // Fit to natural bounds
                                chart.mapView.setView(void 0, chart.mapView.minZoom ?? 1, true, {
                                    complete: function () {
                                        // Fire it only on complete in this
                                        // place (once)
                                        if (Object.prototype.hasOwnProperty
                                            .call(this, 'complete')) {
                                            removeSeries(oldSeries);
                                        }
                                    }
                                });
                                newSeries._hasTracking = false;
                            }
                            else {
                                // When user don't want to zoom into region only
                                // fade out
                                chart.mapView.allowTransformAnimation = false;
                                if (oldSeries.group) {
                                    oldSeries.group.animate({
                                        opacity: 0
                                    }, drilldownOptions.animation, () => {
                                        removeSeries(oldSeries);
                                        if (chart.mapView) {
                                            chart.mapView
                                                .allowTransformAnimation = true;
                                        }
                                    });
                                }
                                else {
                                    removeSeries(oldSeries);
                                    chart.mapView
                                        .allowTransformAnimation = true;
                                }
                            }
                            newSeries.isDrilling = false;
                        }
                    }
                }
            }
        }
        if (!chart.mapView && !isMultipleDrillUp) {
            chart.redraw(drilldownOptions.animation);
        }
        // #3315, #8324
        if (chart.ddDupes) {
            chart.ddDupes.length = 0;
        }
        // Fire a once-off event after all series have been
        // drilled up (#5158)
        fireEvent(chart, 'drillupall');
    }
    /**
     * A function to fade in a group. First, the element is being hidden, then,
     * using `opacity`, is faded in. Used for example by `dataLabelsGroup` where
     * simple SVGElement.fadeIn() is not enough, because of other features (e.g.
     * InactiveState) using `opacity` to fadeIn/fadeOut.
     *
     * @requires modules/drilldown
     *
     * @internal
     * @param {SVGElement} [group]
     *        The SVG element to be faded in.
     */
    fadeInGroup(group) {
        const animationOptions = Drilldown_animObject(this.chart.options.drilldown?.animation);
        if (group) {
            group.hide();
            syncTimeout(() => {
                // Make sure neither group nor chart were destroyed
                if (group?.added) {
                    group.fadeIn();
                }
            }, Math.max(animationOptions.duration - 50, 0));
        }
    }
    /**
     * Update function to be called internally from Chart.update (#7600, #12855)
     * @internal
     */
    update(options, redraw = true) {
        const chart = this.chart;
        merge(true, chart.options.drilldown, options);
        if (redraw) {
            chart.redraw();
        }
    }
}
/* *
 *
 *  Composition
 *
 * */
var Drilldown;
(function (Drilldown) {
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
    function compose(AxisClass, ChartClass, highchartsDefaultOptions, SeriesClass, seriesTypes, SVGRendererClass, TickClass) {
        Drilldown_DrilldownSeries.compose(SeriesClass, seriesTypes);
        const DrilldownChart = ChartClass, chartProto = DrilldownChart.prototype;
        if (!chartProto.drillUp) {
            const SVGElementClass = SVGRendererClass.prototype.Element, addonProto = ChartAdditions.prototype, axisProto = AxisClass.prototype, elementProto = SVGElementClass.prototype, tickProto = TickClass.prototype;
            axisProto.drilldownCategory = axisDrilldownCategory;
            axisProto.getDDPoints = axisGetDDPoints;
            Breadcrumbs_Breadcrumbs.compose(ChartClass, highchartsDefaultOptions);
            addEvent(Breadcrumbs_Breadcrumbs, 'up', onBreadcrumbsUp);
            chartProto.addSeriesAsDrilldown = addonProto.addSeriesAsDrilldown;
            chartProto.addSingleSeriesAsDrilldown =
                addonProto.addSingleSeriesAsDrilldown;
            chartProto.applyDrilldown = addonProto.applyDrilldown;
            chartProto.drillUp = addonProto.drillUp;
            addEvent(DrilldownChart, 'afterDrilldown', onChartAfterDrilldown);
            addEvent(DrilldownChart, 'afterDrillUp', onChartAfterDrillUp);
            addEvent(DrilldownChart, 'afterInit', onChartAfterInit);
            addEvent(DrilldownChart, 'drillup', onChartDrillup);
            addEvent(DrilldownChart, 'drillupall', onChartDrillupall);
            addEvent(DrilldownChart, 'render', onChartRender);
            addEvent(DrilldownChart, 'update', onChartUpdate);
            highchartsDefaultOptions.drilldown = Drilldown_DrilldownDefaults;
            elementProto.fadeIn = svgElementFadeIn;
            tickProto.drillable = tickDrillable;
        }
    }
    Drilldown.compose = compose;
    /** @internal */
    function onBreadcrumbsUp(e) {
        const chart = this.chart, drillUpsNumber = this.getLevel() - e.newLevel;
        let isMultipleDrillUp = drillUpsNumber > 1;
        for (let i = 0; i < drillUpsNumber; i++) {
            if (i === drillUpsNumber - 1) {
                isMultipleDrillUp = false;
            }
            chart.drillUp(isMultipleDrillUp);
        }
    }
    /** @internal */
    function onChartAfterDrilldown() {
        const chart = this, drilldownOptions = chart.options.drilldown, breadcrumbsOptions = drilldownOptions && drilldownOptions.breadcrumbs;
        if (!chart.breadcrumbs) {
            chart.breadcrumbs = new Breadcrumbs_Breadcrumbs(chart, breadcrumbsOptions);
        }
        chart.breadcrumbs.updateProperties(createBreadcrumbsList(chart));
    }
    /** @internal */
    function onChartAfterDrillUp() {
        const chart = this;
        if (chart.breadcrumbs) {
            chart.breadcrumbs.updateProperties(createBreadcrumbsList(chart));
        }
    }
    /**
     * Add update function to be called internally from Chart.update (#7600,
     * #12855)
     * @internal
     */
    function onChartAfterInit() {
        this.drilldown = new ChartAdditions(this);
    }
    /** @internal */
    function onChartDrillup() {
        const chart = this;
        if (chart.resetZoomButton) {
            chart.resetZoomButton = chart.resetZoomButton.destroy();
        }
    }
    /** @internal */
    function onChartDrillupall() {
        const chart = this;
        if (chart.resetZoomButton) {
            chart.showResetZoom();
        }
    }
    /** @internal */
    function onChartRender() {
        (this.xAxis || []).forEach((axis) => {
            const ddPoints = {};
            axis.ddPoints = ddPoints;
            axis.series.forEach((series) => {
                const xData = series.getColumn('x'), points = series.points, data = series.options.data || [];
                for (let i = 0, iEnd = xData.length, p; i < iEnd; i++) {
                    p = data[i];
                    // The `drilldown` property can only be set on an array or an
                    // object
                    if (typeof p !== 'number') {
                        // Convert array to object (#8008)
                        p = series.pointClass.prototype.optionsToObject
                            .call({ series }, p);
                        if (p.drilldown) {
                            if (!ddPoints[xData[i]]) {
                                ddPoints[xData[i]] = [];
                            }
                            const index = i - (series.cropStart || 0);
                            ddPoints[xData[i]].push(points && index >= 0 && index < points.length ?
                                points[index] :
                                true);
                        }
                    }
                }
            });
            // Add drillability to ticks, and always keep it drillability
            // updated (#3951)
            objectEach(axis.ticks, (tick) => tick.drillable());
        });
    }
    /** @internal */
    function onChartUpdate(e) {
        const breadcrumbs = this.breadcrumbs, breadcrumbOptions = e.options.drilldown && e.options.drilldown.breadcrumbs;
        if (breadcrumbs && breadcrumbOptions) {
            breadcrumbs.update(breadcrumbOptions);
        }
    }
    /**
     * A general fadeIn method.
     *
     * @requires modules/drilldown
     *
     * @function Highcharts.SVGElement#fadeIn
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     * The animation options for the element fade.
     */
    function svgElementFadeIn(animation) {
        const elem = this;
        elem
            .attr({
            opacity: 0.1,
            visibility: 'inherit'
        })
            .animate({
            opacity: elem.newOpacity ?? 1 // `newOpacity` used in maps
        }, animation || {
            duration: 250
        });
    }
    /**
     * Make a tick label drillable, or remove drilling on update.
     * @internal
     */
    function tickDrillable() {
        const pos = this.pos, label = this.label, axis = this.axis, isDrillable = axis.coll === 'xAxis' && axis.getDDPoints, ddPointsX = isDrillable && axis.getDDPoints(pos), styledMode = axis.chart.styledMode;
        if (isDrillable) {
            if (label && ddPointsX && ddPointsX.length) {
                label.drillable = true;
                if (!label.basicStyles && !styledMode) {
                    label.basicStyles = merge(label.styles);
                }
                label.addClass('highcharts-drilldown-axis-label');
                // #12656 - avoid duplicate of attach event
                if (label.removeOnDrillableClick) {
                    removeEvent(label.element, 'click');
                }
                label.removeOnDrillableClick = addEvent(label.element, 'click', function (e) {
                    e.preventDefault();
                    axis.drilldownCategory(pos, e);
                });
                if (!styledMode && axis.chart.options.drilldown) {
                    label.css(axis.chart.options.drilldown.activeAxisLabelStyle || {});
                }
            }
            else if (label &&
                label.drillable && label.removeOnDrillableClick) {
                if (!styledMode) {
                    label.styles = {}; // Reset for full overwrite of styles
                    label.element.removeAttribute('style'); // #17933
                    label.css(label.basicStyles);
                }
                label.removeOnDrillableClick(); // #3806
                label.removeClass('highcharts-drilldown-axis-label');
            }
        }
    }
})(Drilldown || (Drilldown = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Drilldown_Drilldown = (Drilldown);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Gets fired when a drilldown point is clicked, before the new series is added.
 * Note that when clicking a category label to trigger multiple series
 * drilldown, one `drilldown` event is triggered per point in the category.
 *
 * @callback Highcharts.DrilldownCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart where the event occurs.
 *
 * @param {Highcharts.DrilldownEventObject} e
 *        The drilldown event.
 */
/**
 * The event arguments when a drilldown point is clicked.
 *
 * @interface Highcharts.DrilldownEventObject
 */ /**
* If a category label was clicked, which index.
* @name Highcharts.DrilldownEventObject#category
* @type {number|undefined}
*/ /**
* The original browser event (usually click) that triggered the drilldown.
* @name Highcharts.DrilldownEventObject#originalEvent
* @type {global.Event|undefined}
*/ /**
* Prevents the default behavior of the event.
* @name Highcharts.DrilldownEventObject#preventDefault
* @type {Function}
*/ /**
* The originating point.
* @name Highcharts.DrilldownEventObject#point
* @type {Highcharts.Point}
*/ /**
* If a category label was clicked, this array holds all points corresponding to
* the category. Otherwise it is set to false.
* @name Highcharts.DrilldownEventObject#points
* @type {boolean|Array<Highcharts.Point>|undefined}
*/ /**
* Options for the new series. If the event is utilized for async drilldown, the
* seriesOptions are not added, but rather loaded async.
* @name Highcharts.DrilldownEventObject#seriesOptions
* @type {Highcharts.SeriesOptionsType|undefined}
*/ /**
* The event target.
* @name Highcharts.DrilldownEventObject#target
* @type {Highcharts.Chart}
*/ /**
* The event type.
* @name Highcharts.DrilldownEventObject#type
* @type {"drilldown"}
*/
/**
 * This gets fired after all the series have been drilled up. This is especially
 * useful in a chart with multiple drilldown series.
 *
 * @callback Highcharts.DrillupAllCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart where the event occurs.
 *
 * @param {Highcharts.DrillupAllEventObject} e
 *        The final drillup event.
 */
/**
 * The event arguments when all the series have been drilled up.
 *
 * @interface Highcharts.DrillupAllEventObject
 */ /**
* Prevents the default behavior of the event.
* @name Highcharts.DrillupAllEventObject#preventDefault
* @type {Function}
*/ /**
* The event target.
* @name Highcharts.DrillupAllEventObject#target
* @type {Highcharts.Chart}
*/ /**
* The event type.
* @name Highcharts.DrillupAllEventObject#type
* @type {"drillupall"}
*/
/**
 * Gets fired when drilling up from a drilldown series.
 *
 * @callback Highcharts.DrillupCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart where the event occurs.
 *
 * @param {Highcharts.DrillupEventObject} e
 *        The drillup event.
 */
/**
 * The event arguments when drilling up from a drilldown series.
 *
 * @interface Highcharts.DrillupEventObject
 */ /**
* Prevents the default behavior of the event.
* @name Highcharts.DrillupEventObject#preventDefault
* @type {Function}
*/ /**
* Options for the new series.
* @name Highcharts.DrillupEventObject#seriesOptions
* @type {Highcharts.SeriesOptionsType|undefined}
*/ /**
* The event target.
* @name Highcharts.DrillupEventObject#target
* @type {Highcharts.Chart}
*/ /**
* The event type.
* @name Highcharts.DrillupEventObject#type
* @type {"drillup"}
*/
''; // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/drilldown.src.js





const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.Breadcrumbs = G.Breadcrumbs || Breadcrumbs_Breadcrumbs;
Drilldown_Drilldown.compose(G.Axis, G.Chart, G.defaultOptions, G.Series, G.seriesTypes, G.SVGRenderer, G.Tick);
/* harmony default export */ const drilldown_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});