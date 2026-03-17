/**
 * @license Highmaps JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/contour
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import "./coloraxis.src.js";
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
;// external "./coloraxis.src.js"

;// external ["../highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Series/Contour/ContourPoint.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

const { scatter: { prototype: { pointClass: ScatterPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class ContourPoint extends ScatterPoint {
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Contour_ContourPoint = (ContourPoint);

;// ./code/es-modules/Series/Contour/contourShader.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Shader Code
 *
 * */
/* harmony default export */ const contourShader = (`

struct VertexInput {
    @location(0) pos: vec3f
}

struct VertexOutput {
    @builtin(position) pos: vec4f,
    @location(0) originalPos: vec3f,
    @location(1) valExtremes: vec2f,
}

@group(0) @binding(0) var<uniform> uExtremes: vec4f;
@group(0) @binding(1) var<uniform> uValueExtremes: vec2f;
@group(0) @binding(9) var<uniform> uIsInverted: u32;

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let pos = input.pos;

    let xMin = uExtremes[0];
    let xMax = uExtremes[1];
    let yMin = uExtremes[2];
    let yMax = uExtremes[3];

    var posX: f32;
    var posY: f32;
    if (uIsInverted > 0u) {
        posX = (1.0 - (pos.y - yMin) / (yMax - yMin)) * 2.0 - 1.0;
        posY = (1.0 - (pos.x - xMin) / (xMax - xMin)) * 2.0 - 1.0;
    } else {
        posX = (pos.x - xMin) / (xMax - xMin) * 2.0 - 1.0;
        posY = (pos.y - yMin) / (yMax - yMin) * 2.0 - 1.0;
    }

    output.valExtremes = uValueExtremes;
    output.originalPos = pos.xyz;
    output.pos = vec4f(posX, posY, 0, 1);

    return output;
}

// ------------------------------------------------

struct FragmentInput {
    @location(0) originalPos: vec3f,
    @location(1) valExtremes: vec2f
}

@group(0) @binding(2) var<storage> uColorStops: array<vec4<f32>>;
@group(0) @binding(3) var<uniform> uColorStopsCount: u32;
@group(0) @binding(4) var<uniform> uContourInterval: f32;
@group(0) @binding(5) var<uniform> uContourOffset: f32;
@group(0) @binding(6) var<uniform> uSmoothColoring: u32;
@group(0) @binding(7) var<uniform> uContourLineWidth: f32;
@group(0) @binding(8) var<uniform> uContourLineColor: vec3f;

fn getColor(value: f32) -> vec3<f32> {
    let stopCount = uColorStopsCount;

    if (stopCount == 0u) {
        return vec3<f32>(1.0, 1.0, 1.0);
    }

    for (var i: u32 = 0u; i < stopCount - 1u; i = i + 1u) {
        if (value < uColorStops[i + 1u].x) {
            let t = (value - uColorStops[i].x) /
                (uColorStops[i + 1u].x - uColorStops[i].x);

            return mix(uColorStops[i].yzw, uColorStops[i + 1u].yzw, t);
        }
    }

    return uColorStops[stopCount - 1u].yzw;
}

@fragment
fn fragmentMain(input: FragmentInput) -> @location(0) vec4f {
    let val = input.originalPos.z;

    // Contour lines
    let lineWidth: f32 = uContourLineWidth;

    let val_dx: f32 = dpdx(val);
    let val_dy: f32 = dpdy(val);
    let gradient: f32 = length(vec2f(val_dx, val_dy));

    let epsilon: f32 = max(uContourInterval * 1.0e-6, 1.0e-12);
    let adjustedLineWidth: f32 = lineWidth * gradient + epsilon;

    let adjustedVal: f32 = val - uContourOffset;
    let valDiv: f32 = adjustedVal / uContourInterval;
    let valMod: f32 = adjustedVal - uContourInterval * floor(valDiv);

    let lineMask: f32 = smoothstep(0.0, adjustedLineWidth, valMod) * (
        1.0 - smoothstep(
            uContourInterval - adjustedLineWidth,
            uContourInterval,
            valMod
        )
    );

    // Background color
    let minHeight: f32 = input.valExtremes.x;
    let maxHeight: f32 = input.valExtremes.y;

    var bgColor: vec3f;
    if (uSmoothColoring > 0u) {
        bgColor = getColor((val - minHeight) / (maxHeight - minHeight));
    } else {
        let adjustedVal: f32 = val - uContourOffset;
        let averageValInBand: f32 = floor(
            adjustedVal / uContourInterval
        ) * uContourInterval + uContourOffset + uContourInterval / 2.0;

        bgColor = getColor(
            (averageValInBand - minHeight) /
            (maxHeight - minHeight)
        );
    }

    // Mix
    var pixelColor = bgColor;
    if (lineWidth > 0.0) {
        pixelColor = mix(uContourLineColor, pixelColor, lineMask);
    }

    return vec4(pixelColor, 1.0);
}

`);

;// ./code/es-modules/Series/Contour/ContourSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
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
const ContourSeriesDefaults = {
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
/* harmony default export */ const Contour_ContourSeriesDefaults = (ContourSeriesDefaults);

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

;// ./code/es-modules/Series/CrossSymbol.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Authors: Kamil Musialowski, Markus Barstad
 *
 *  Shared cross marker symbol registration used by series modules.
 *  This keeps `cross` out of Core SVG symbols while allowing modules
 *  like PointAndFigure and Contour to compose it when needed.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */



const { composed } = (external_highcharts_src_js_default_default());
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
/* harmony default export */ const Series_CrossSymbol = (CrossSymbol);

;// ./code/es-modules/Core/Delaunay.js
/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */

/* *
 *
 *  Class
 *
 * */
/**
 * Delaunay triangulation of a 2D point set.
 */
class Delaunay {
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
    constructor(points) {
        this.points = points;
        const n = points.length >>> 1;
        // Floating-point error multiplier used by geometric predicates.
        this.epsilon = 4 * Number.EPSILON;
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        for (let i = 0; i < n; i++) {
            const px = points[i << 1], py = points[(i << 1) + 1];
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
        const rangeX = maxX - minX || 1, rangeY = maxY - minY || 1;
        this.minX = minX;
        this.minY = minY;
        this.invScaleX = 1 / rangeX;
        this.invScaleY = 1 / rangeY;
        const ids = new Uint32Array(n), x = (i) => (points[i << 1] - minX) * this.invScaleX, y = (i) => (points[(i << 1) + 1] - minY) * this.invScaleY;
        for (let i = 0; i < n; i++) {
            ids[i] = i;
        }
        ids.sort((a, b) => (x(a) - x(b)) || (y(a) - y(b)));
        let m = n ? 1 : 0, pa, pb;
        for (let i = 1; i < n; ++i) {
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
    triangulate() {
        const count = this.ids.length;
        if (count < 3) {
            return new Uint32Array(0);
        }
        const points = this.points, { minX, minY, invScaleX, invScaleY } = this, x = (i) => (points[i << 1] - minX) * invScaleX, y = (i) => (points[(i << 1) + 1] - minY) * invScaleY;
        // Determine if three points are in counter-clockwise order.
        const orient = (a, b, c) => {
            const ax = x(a), ay = y(a), bx = x(b) - ax, by = y(b) - ay, cx = x(c) - ax, cy = y(c) - ay, det = bx * cy - by * cx, err = (Math.abs(bx * cy) + Math.abs(by * cx)) * this.epsilon;
            return det > err;
        };
        // Determine if a point (d) is inside the circumcircle of a triangle
        // (a, b, c).
        const inCircle = (a, b, c, d) => {
            if (a === d || b === d || c === d) {
                // Skip if d is one of the triangle vertices.
                return false;
            }
            const ax = x(a) - x(d), ay = y(a) - y(d), bx = x(b) - x(d), by = y(b) - y(d), cx = x(c) - x(d), cy = y(c) - y(d), aa = ax * ax + ay * ay, bb = bx * bx + by * by, cc = cx * cx + cy * cy, term1 = by * cc - bb * cy, term2 = bx * cc - bb * cx, term3 = bx * cy - by * cx, det = ax * term1 - ay * term2 + aa * term3, err = (Math.abs(ax * term1) +
                Math.abs(ay * term2) +
                Math.abs(aa * term3)) * this.epsilon;
            return det > err;
        };
        // Data structures for the quad-edge data structure.
        let cap = Math.max(32, ((8 * count + 7) & ~3)), // Capacity (% 4 = 0)
        on = new Int32Array(cap), // Next edge in same face
        rt = new Int32Array(cap), // Rotation of edge (90 degrees)
        vtx = new Uint32Array(cap), // Origin vertex of edge
        seen = new Uint8Array(cap), // Visited flag for edge traversal
        top = 0; // Next free edge id (% 4 = 0)
        // Ensure the data structures have enough capacity for the required
        // number of edges.
        const ensure = (need) => {
            // If the capacity is sufficient, return.
            if (need <= cap) {
                return;
            }
            // Double capacity until sufficient.
            let ncap = cap << 1;
            while (ncap < need) {
                ncap <<= 1;
            }
            const on2 = new Int32Array(ncap), rt2 = new Int32Array(ncap), v2 = new Uint32Array(ncap), s2 = new Uint8Array(ncap);
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
        const sym = (e) => rt[rt[e]], rotSym = (e) => sym(rt[e]), dest = (e) => vtx[sym(e)], lnext = (e) => rt[on[rotSym(e)]], oprev = (e) => rt[on[rt[e]]], rprev = (e) => on[sym(e)], leftOf = (p, e) => orient(p, vtx[e], dest(e)), rightOf = (p, e) => orient(p, dest(e), vtx[e]), admissible = (e, base) => rightOf(dest(e), base);
        // Create a new edge between two vertices.
        const makeEdge = (a, b) => {
            ensure(top + 4);
            const e0 = top, e1 = top + 1, e2 = top + 2, e3 = top + 3;
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
        const splice = (a, b) => {
            const alpha = rt[on[a]];
            const beta = rt[on[b]];
            const t2 = on[a];
            const t3 = on[beta];
            const t4 = on[alpha];
            on[a] = on[b];
            on[b] = t2;
            on[alpha] = t3;
            on[beta] = t4;
        };
        // Connect two edges.
        const connect = (a, b) => {
            const q = makeEdge(dest(a), vtx[b]);
            splice(q, lnext(a));
            splice(sym(q), b);
            return q;
        };
        // Removes an edge from both sides.
        const drop = (e) => {
            splice(e, oprev(e));
            const es = sym(e);
            splice(es, oprev(es));
        };
        const A = this.ids;
        // Recursively triangulate a range [lo, hi) of points. Returns the
        // two endpoints [left, right] of the lower common tangent.
        const solve = (lo, hi) => {
            const len = hi - lo;
            // If there are only two points, create a single edge.
            if (len === 2) {
                const a = makeEdge(A[lo], A[lo + 1]);
                return [a, sym(a)];
            }
            // If there are three points, create two edges and connect them.
            if (len === 3) {
                const a = makeEdge(A[lo], A[lo + 1]), b = makeEdge(A[lo + 1], A[lo + 2]);
                splice(sym(a), b);
                const p0 = A[lo], p1 = A[lo + 1], p2 = A[lo + 2];
                if (orient(p0, p1, p2)) {
                    connect(b, a);
                    return [a, sym(b)];
                }
                if (orient(p0, p2, p1)) {
                    const c = connect(b, a);
                    return [sym(c), c];
                }
                return [a, sym(b)];
            }
            // Find the midpoint of the range.
            const mid = lo + ((len + 1) >>> 1);
            const L = solve(lo, mid);
            const R = solve(mid, hi);
            let ldo = L[0], ldi = L[1], rdi = R[0], rdo = R[1];
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
            let base = connect(sym(rdi), ldi);
            if (vtx[ldi] === vtx[ldo]) {
                ldo = sym(base);
            }
            if (vtx[rdi] === vtx[rdo]) {
                rdo = base;
            }
            // Merge loop - removing bad edges (inCircle) and adding new edges.
            for (;;) {
                // Left candidate
                let lc = on[sym(base)];
                if (admissible(lc, base)) {
                    while (inCircle(dest(base), vtx[base], dest(lc), dest(on[lc]))) {
                        const t = on[lc];
                        drop(lc);
                        lc = t;
                    }
                }
                // Right candidate
                let rc = oprev(base);
                if (admissible(rc, base)) {
                    while (inCircle(dest(base), vtx[base], dest(rc), dest(oprev(rc)))) {
                        const t = oprev(rc);
                        drop(rc);
                        rc = t;
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
        let e0 = solve(0, count)[0];
        while (leftOf(dest(on[e0]), e0)) {
            e0 = on[e0];
        }
        const Q = [e0];
        let qi = 0;
        {
            let c = e0;
            do {
                Q.push(sym(c));
                seen[c] = 1;
                c = lnext(c);
            } while (c !== e0);
        }
        const faces = [];
        let cur, t;
        while (qi < Q.length) {
            const e = Q[qi++];
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
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_Delaunay = (Delaunay);

;// ./code/es-modules/Series/Contour/ContourSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
/// <reference types="@webgpu/types" />










const { seriesTypes: { scatter: ScatterSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Class
 *
 * */
class ContourSeries extends ScatterSeries {
    static compose(SVGRendererClass) {
        Series_CrossSymbol.compose(SVGRendererClass);
    }
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
    getContourData() {
        const points = this.points, len = points.length, points3d = new Float32Array(len * 3), points2d = new Float64Array(len * 2);
        for (let i = 0; i < len; i++) {
            const { x, y = 0, value } = points[i], index2d = i * 2, index3d = i * 3;
            points2d[index2d] = x;
            points2d[index2d + 1] = y;
            points3d[index3d] = x;
            points3d[index3d + 1] = y;
            points3d[index3d + 2] = value ?? 0;
        }
        return [new Core_Delaunay(points2d).triangles, points3d];
    }
    update(options, redraw) {
        options = diffObjects(options, this.userOptions);
        const uniformOptions = [
            'smoothColoring',
            'contourInterval',
            'contourOffset',
            'lineColor',
            'lineWidth'
        ];
        const isUniformOption = (key) => (uniformOptions.includes(key));
        const hasNonUniformOptions = Object.keys(options).some((key) => !isUniformOption(key));
        // Only fetch plotOptions if all options are uniform related.
        const allOptions = (hasNonUniformOptions ?
            void 0 :
            this.setOptions(merge(this.userOptions, options))), hasNonUniformPlotOptions = allOptions ?
            Object.keys(diffObjects(allOptions, this.options)).some((key) => !isUniformOption(key)) :
            false;
        if (hasNonUniformOptions || hasNonUniformPlotOptions) {
            super.update(options, redraw);
        }
        else {
            this.options = allOptions;
            // If only uniform-related options changed, avoid full series
            // reconstruction and update uniforms only.
            this.setUniforms();
        }
    }
    drawPoints() {
        const { group } = this;
        if (!group) {
            return;
        }
        if (!this.canvas) {
            this.foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            group.element.appendChild(this.foreignObject);
            this.canvas = document.createElement('canvas');
            this.foreignObject.appendChild(this.canvas);
        }
        const { canvas, xAxis, yAxis } = this, foreignObject = this.foreignObject, oldWidth = foreignObject.width.baseVal.value, oldHeight = foreignObject.height.baseVal.value, { devicePixelRatio: dpr } = window;
        let width = xAxis.len, height = yAxis.len;
        if (this.chart.inverted) {
            [width, height] = [height, width];
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
            this.run();
        }
    }
    async run() {
        const series = this, chart = series.chart, renderer = chart.renderer, canvas = series.canvas, gpu = navigator.gpu, context = series.context = canvas.getContext('webgpu');
        renderer.asyncCounter += 1;
        if (!gpu || !context) {
            (0,external_highcharts_src_js_default_namespaceObject.error)(36, false);
            return;
        }
        if (context) {
            let device = this.device;
            if (!this.adapter) {
                this.adapter = await gpu.requestAdapter();
            }
            if (!device && this.adapter) {
                device = this.device = await this.adapter.requestDevice();
            }
            const canvasFormat = gpu.getPreferredCanvasFormat();
            if (device) {
                context.configure({
                    device: device,
                    format: canvasFormat,
                    colorSpace: 'display-p3',
                    alphaMode: 'premultiplied',
                    usage: (GPUTextureUsage.RENDER_ATTACHMENT |
                        GPUTextureUsage.COPY_SRC)
                });
                const [indices, vertices] = this.getContourData();
                // WebGPU Buffers grouped under a single object
                const buffers = this.buffers = {
                    vertex: device.createBuffer({
                        size: vertices.byteLength,
                        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
                    }),
                    index: device.createBuffer({
                        size: indices.byteLength,
                        usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
                    }),
                    extremesUniform: device.createBuffer({
                        size: Float32Array.BYTES_PER_ELEMENT * 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    valueExtremesUniform: device.createBuffer({
                        size: Float32Array.BYTES_PER_ELEMENT * 2,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    contourIntervalUniform: device.createBuffer({
                        size: 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    contourOffsetUniform: device.createBuffer({
                        size: 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    smoothColoringUniform: device.createBuffer({
                        size: 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    lineWidthUniform: device.createBuffer({
                        size: 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    contourLineColor: device.createBuffer({
                        size: 12,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    colorAxisStopsCountUniform: device.createBuffer({
                        size: 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    }),
                    colorAxisStopsUniform: device.createBuffer({
                        size: Float32Array.BYTES_PER_ELEMENT * 64,
                        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
                    }),
                    isInvertedUniform: device.createBuffer({
                        size: 4,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    })
                };
                const { vertex: vertexBuffer, index: indexBuffer, extremesUniform: extremesUniformBuffer, valueExtremesUniform: valueExtremesUniformBuffer, contourIntervalUniform: contourIntervalUniformBuffer, contourOffsetUniform: contourOffsetUniformBuffer, smoothColoringUniform: smoothColoringUniformBuffer, lineWidthUniform: lineWidthUniformBuffer, contourLineColor: contourLineColorBuffer, colorAxisStopsCountUniform: colAxisStopsCountUniformBuffer, colorAxisStopsUniform: colorAxisStopsUniformBuffer, isInvertedUniform: isInvertedUniformBuffer } = buffers;
                device.queue.writeBuffer(vertexBuffer, 0, vertices);
                device.queue.writeBuffer(indexBuffer, 0, indices);
                const vertexBufferLayout = {
                    arrayStride: 12,
                    attributes: [{
                            format: 'float32x3',
                            offset: 0,
                            shaderLocation: 0
                        }]
                };
                const shaderModule = device.createShaderModule({
                    code: contourShader
                });
                const pipeline = device.createRenderPipeline({
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
                const bindGroup = device.createBindGroup({
                    layout: pipeline.getBindGroupLayout(0),
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
                    const encoder = device.createCommandEncoder(), currentTexture = context.getCurrentTexture(), pass = encoder.beginRenderPass({
                        colorAttachments: [{
                                view: currentTexture.createView(),
                                loadOp: 'clear',
                                clearValue: [0, 0, 0, 0],
                                storeOp: 'store'
                            }]
                    });
                    pass.setPipeline(pipeline);
                    pass.setVertexBuffer(0, vertexBuffer);
                    pass.setIndexBuffer(indexBuffer, 'uint32');
                    pass.setBindGroup(0, bindGroup);
                    pass.drawIndexed(indices.length);
                    pass.end();
                    device.queue.submit([encoder.finish()]);
                };
                this.renderFrame();
            }
        }
        renderer.asyncCounter--;
        if (!renderer.asyncCounter && chart && !chart.hasLoaded) {
            chart.onload();
        }
    }
    destroy() {
        // Remove the foreign object. The canvas will be removed with it.
        // For some reason, `series.update` calls `series.destroy` even if
        // update does not trigger a rerender. This causes the canvas to be
        // removed here (unnecessarily) and that causes the flickering effect
        // when updating.
        this.canvas?.parentElement?.remove();
        super.destroy();
    }
    drawGraph() {
        // Do nothing
    }
    /**
     * Set all the updateable uniforms.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniforms.
     * Defaults to `true`.
     */
    setUniforms(renderFrame = true) {
        this.setFrameExtremesUniform(false);
        this.setValueExtremesUniform(false);
        this.setColorAxisStopsUniforms(false);
        this.setContourIntervalUniform(false);
        this.setContourOffsetUniform(false);
        this.setSmoothColoringUniform(false);
        this.setLineWidthUniform(false);
        this.setContourLineColorUniform(false);
        this.setIsInvertedUniform(renderFrame);
    }
    /**
     * Set the contour interval uniform according to the series options.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniform.
     * Defaults to `true`.
     */
    setContourIntervalUniform(renderFrame = true) {
        if (this.device && this.buffers?.contourIntervalUniform) {
            this.device.queue.writeBuffer(this.buffers.contourIntervalUniform, 0, new Float32Array([this.getContourInterval()]));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the contour offset uniform according to the series options.
     */
    setContourOffsetUniform(renderFrame = true) {
        if (this.device && this.buffers?.contourOffsetUniform) {
            this.device.queue.writeBuffer(this.buffers.contourOffsetUniform, 0, new Float32Array([this.getContourOffset()]));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the smooth coloring uniform according to the series options.
     */
    setSmoothColoringUniform(renderFrame = true) {
        if (this.device && this.buffers?.smoothColoringUniform) {
            this.device.queue.writeBuffer(this.buffers.smoothColoringUniform, 0, new Float32Array([this.getSmoothColoring()]));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the line width uniform according to the series options.
     */
    setLineWidthUniform(renderFrame = true) {
        if (this.device && this.buffers?.lineWidthUniform) {
            this.device.queue.writeBuffer(this.buffers.lineWidthUniform, 0, new Float32Array([this.getLineWidth()]));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the contour line color uniform according to the series options.
     */
    setContourLineColorUniform(renderFrame = true) {
        if (this.device && this.buffers?.contourLineColor) {
            this.device.queue.writeBuffer(this.buffers.contourLineColor, 0, new Float32Array(this.getContourLineColor()));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the frame extremes uniform according to the series options.
     */
    setFrameExtremesUniform(renderFrame = true) {
        if (this.device && this.buffers?.extremesUniform) {
            this.device.queue.writeBuffer(this.buffers.extremesUniform, 0, new Float32Array(this.getFrameExtremes()));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the value extremes uniform according to the series data.
     */
    setValueExtremesUniform(renderFrame = true) {
        if (this.device && this.buffers?.valueExtremesUniform) {
            this.device.queue.writeBuffer(this.buffers.valueExtremesUniform, 0, new Float32Array(this.getValueAxisExtremes()));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the color axis stops uniforms according to the color axis options.
     */
    setColorAxisStopsUniforms(renderFrame = true) {
        const stopsBuffer = this.buffers?.colorAxisStopsUniform;
        const countBuffer = this.buffers?.colorAxisStopsCountUniform;
        if (this.device && stopsBuffer && countBuffer) {
            const { array, length } = this.getColorAxisStopsData();
            // Write the stops to the buffer
            this.device.queue.writeBuffer(stopsBuffer, 0, array);
            // Write the count to the buffer
            this.device.queue.writeBuffer(countBuffer, 0, new Uint32Array([length]));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Set the is inverted uniform according to the series options.
     */
    setIsInvertedUniform(renderFrame = true) {
        if (this.device && this.buffers?.isInvertedUniform) {
            this.device.queue.writeBuffer(this.buffers.isInvertedUniform, 0, new Uint32Array([this.chart.inverted ? 1 : 0]));
            if (renderFrame) {
                this.renderFrame?.();
            }
        }
    }
    /**
     * Returns the contour interval from the series options in format of the
     * WebGPU uniform.
     */
    getContourInterval() {
        const interval = this.options.contourInterval ?? (() => {
            const [min, max] = this.getValueAxisExtremes(), range = max - min;
            return normalizeTickInterval(range / 10);
        })();
        if (isNaN(interval) || interval <= 0) {
            return -1;
        }
        return interval;
    }
    /**
     * Returns the contour offset from the series options in format of the
     * WebGPU uniform.
     */
    getContourOffset() {
        const offset = this.options.contourOffset ?? 0;
        if (isNaN(offset) || offset <= 0) {
            return 0;
        }
        return offset;
    }
    /**
     * Returns the smooth coloring from the series options in format of the
     * WebGPU uniform.
     */
    getSmoothColoring() {
        return this.options.smoothColoring ? 1 : 0;
    }
    /**
     * Returns the lineWidth from the series options, which controlls the
     * visibility of contour lines, in format of the WebGPU uniform.
     */
    getLineWidth() {
        return this.userOptions.lineWidth ?? 1;
    }
    /**
     * Returns the contour line color from the series options in format of the
     * WebGPU uniform.
     */
    getContourLineColor() {
        const { lineColor = '#000000' } = this.options;
        return ContourSeries.rgbaAsFrac(new (external_highcharts_src_js_default_Color_default())(lineColor).rgba);
    }
    /**
     * Returns the extremes of the x and y axes in format of the WebGPU uniform.
     */
    getFrameExtremes() {
        const { xAxis, yAxis } = this;
        return [
            xAxis.toValue(0, true),
            xAxis.toValue(xAxis.len, true),
            yAxis.toValue(yAxis.len, true),
            yAxis.toValue(0, true)
        ];
    }
    /**
     * Returns the extremes of the data in format of the WebGPU uniform.
     */
    getValueAxisExtremes() {
        const series = this;
        let min = series.valueMin;
        if (isNaN(min || NaN)) {
            min = series.colorAxis?.min;
            if (isNaN(min || NaN)) {
                min = Math.min(...series.points.map((point) => point.value || 0));
            }
        }
        let max = series.valueMax;
        if (isNaN(max || NaN)) {
            max = series.colorAxis?.max;
            if (isNaN(max || NaN)) {
                max = Math.max(...series.points.map((point) => point.value || 0));
            }
        }
        return [min || 0, max || 0];
    }
    getColorAxisStopsData() {
        const colorAxisStops = this.colorAxis?.stops;
        let flattenedData;
        if (colorAxisStops) {
            flattenedData = [];
            for (const stop of colorAxisStops) {
                const rgba = stop?.color?.rgba;
                if (rgba) {
                    flattenedData.push(stop[0], ...ContourSeries.rgbaAsFrac(rgba));
                }
            }
        }
        return {
            array: new Float32Array(flattenedData ?? [
                0, 0, 0, 0,
                1, 1, 1, 1
            ]),
            length: colorAxisStops?.length || 2
        };
    }
    /* *
     *
     * Static Methods
     *
     * */
    /**
     * Returns the RGBA color as a fraction of the 255 range.
     */
    static rgbaAsFrac(rgba) {
        return [
            rgba[0],
            rgba[1],
            rgba[2]
        ].map((val) => val / 255);
    }
}
/* *
 *
 * Static Properties
 *
 * */
ContourSeries.defaultOptions = merge(ScatterSeries.defaultOptions, Contour_ContourSeriesDefaults);
/* harmony default export */ const Contour_ContourSeries = (ContourSeries);
extend(ContourSeries.prototype, {
    pointClass: Contour_ContourPoint,
    pointArrayMap: ['y', 'value'],
    keysAffectYAxis: ['y'],
    invertible: false
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('contour', ContourSeries);

;// ./code/es-modules/masters/modules/contour.src.js





const G = (external_highcharts_src_js_default_default());
Contour_ContourSeries.compose(G.Renderer);
/* harmony default export */ const contour_src = ((external_highcharts_src_js_default_default()));

export { contour_src as default };
