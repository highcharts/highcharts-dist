// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/marker-clusters
 * @requires highcharts
 *
 * Marker clusters module for Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
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
;// ./code/es-modules/Extensions/MarkerClusters/MarkerClusterDefaults.js
/* *
 *
 *  Marker clusters module.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Wojciech Chmiel
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
 * Options for marker clusters, the concept of sampling the data
 * values into larger blocks in order to ease readability and
 * increase performance of the JavaScript charts.
 *
 * Note: marker clusters module is not working with `boost`
 * and `draggable-points` modules.
 *
 * The marker clusters feature requires the marker-clusters.js
 * file to be loaded, found in the modules directory of the download
 * package, or online at [code.highcharts.com/modules/marker-clusters.js
 * ](code.highcharts.com/modules/marker-clusters.js).
 *
 * @sample maps/marker-clusters/europe
 *         Maps marker clusters
 * @sample highcharts/marker-clusters/basic
 *         Scatter marker clusters
 * @sample maps/marker-clusters/optimized-kmeans
 *         Marker clusters with colorAxis
 *
 * @product      highcharts highmaps
 * @since 8.0.0
 * @requires     modules/marker-clusters
 * @optionparent plotOptions.scatter.cluster
 */
const cluster = {
    /**
     * Whether to enable the marker-clusters module.
     *
     * @sample maps/marker-clusters/basic
     *         Maps marker clusters
     * @sample highcharts/marker-clusters/basic
     *         Scatter marker clusters
     *
     * @requires modules/marker-clusters
     */
    enabled: false,
    /**
     * When set to `false` prevent cluster overlapping - this option
     * works only when `layoutAlgorithm.type = "grid"`.
     *
     * @sample highcharts/marker-clusters/grid
     *         Prevent overlapping
     *
     * @requires modules/marker-clusters
     */
    allowOverlap: true,
    /**
     * Options for the cluster marker animation.
     * @type    {boolean|Partial<Highcharts.AnimationOptionsObject>}
     * @default { "duration": 500 }
     * @requires modules/marker-clusters
     */
    animation: {
        /** @ignore-option */
        duration: 500
    },
    /**
     * Zoom the plot area to the cluster points range when a cluster is clicked.
     *
     * @requires modules/marker-clusters
     */
    drillToCluster: true,
    /**
     * The minimum amount of points to be combined into a cluster.
     * This value has to be greater or equal to 2.
     *
     * @sample highcharts/marker-clusters/basic
     *         At least three points in the cluster
     *
     * @requires modules/marker-clusters
     */
    minimumClusterSize: 2,
    /**
     * Options for layout algorithm. Inside there
     * are options to change the type of the algorithm, gridSize,
     * distance or iterations.
     *
     * @requires modules/marker-clusters
     */
    layoutAlgorithm: {
        /**
         * Type of the algorithm used to combine points into a cluster.
         * There are three available algorithms:
         *
         * 1) `grid` - grid-based clustering technique. Points are assigned
         * to squares of set size depending on their position on the plot
         * area. Points inside the grid square are combined into a cluster.
         * The grid size can be controlled by `gridSize` property
         * (grid size changes at certain zoom levels).
         *
         * 2) `kmeans` - based on K-Means clustering technique. In the
         * first step, points are divided using the grid method (distance
         * property is a grid size) to find the initial amount of clusters.
         * Next, each point is classified by computing the distance between
         * each cluster center and that point. When the closest cluster
         * distance is lower than distance property set by a user the point
         * is added to this cluster otherwise is classified as `noise`. The
         * algorithm is repeated until each cluster center not change its
         * previous position more than one pixel. This technique is more
         * accurate but also more time consuming than the `grid` algorithm,
         * especially for big datasets.
         *
         * 3) `optimizedKmeans` - based on K-Means clustering technique. This
         * algorithm uses k-means algorithm only on the chart initialization
         * or when chart extremes have greater range than on initialization.
         * When a chart is redrawn the algorithm checks only clustered points
         * distance from the cluster center and rebuild it when the point is
         * spaced enough to be outside the cluster. It provides performance
         * improvement and more stable clusters position yet can be used rather
         * on small and sparse datasets.
         *
         * By default, the algorithm depends on visible quantity of points
         * and `kmeansThreshold`. When there are more visible points than the
         * `kmeansThreshold` the `grid` algorithm is used, otherwise `kmeans`.
         *
         * The custom clustering algorithm can be added by assigning a callback
         * function as the type property. This function takes an array of
         * `processedXData`, `processedYData`, `processedXData` indexes and
         * `layoutAlgorithm` options as arguments and should return an object
         * with grouped data.
         *
         * The algorithm should return an object like that:
         * <pre>{
         *  clusterId1: [{
         *      x: 573,
         *      y: 285,
         *      index: 1 // point index in the data array
         *  }, {
         *      x: 521,
         *      y: 197,
         *      index: 2
         *  }],
         *  clusterId2: [{
         *      ...
         *  }]
         *  ...
         * }</pre>
         *
         * `clusterId` (example above - unique id of a cluster or noise)
         * is an array of points belonging to a cluster. If the
         * array has only one point or fewer points than set in
         * `cluster.minimumClusterSize` it won't be combined into a cluster.
         *
         * @sample maps/marker-clusters/optimized-kmeans
         *         Optimized K-Means algorithm
         * @sample highcharts/marker-clusters/kmeans
         *         K-Means algorithm
         * @sample highcharts/marker-clusters/grid
         *         Grid algorithm
         * @sample maps/marker-clusters/custom-alg
         *         Custom algorithm
         *
         * @type {string|Function}
         * @see [cluster.minimumClusterSize](#plotOptions.scatter.cluster.minimumClusterSize)
         * @requires modules/marker-clusters
         * @apioption plotOptions.scatter.cluster.layoutAlgorithm.type
         */
        /**
         * When `type` is set to the `grid`,
         * `gridSize` is a size of a grid square element either as a number
         * defining pixels, or a percentage defining a percentage
         * of the plot area width.
         *
         * @type    {number|string}
         * @requires modules/marker-clusters
         */
        gridSize: 50,
        /**
         * When `type` is set to `kmeans`,
         * `iterations` are the number of iterations that this algorithm will be
         * repeated to find clusters positions.
         *
         * @type    {number}
         * @requires modules/marker-clusters
         * @apioption plotOptions.scatter.cluster.layoutAlgorithm.iterations
         */
        /**
         * When `type` is set to `kmeans`,
         * `distance` is a maximum distance between point and cluster center
         * so that this point will be inside the cluster. The distance
         * is either a number defining pixels or a percentage
         * defining a percentage of the plot area width.
         *
         * @type    {number|string}
         * @requires modules/marker-clusters
         */
        distance: 40,
        /**
         * When `type` is set to `undefined` and there are more visible points
         * than the kmeansThreshold the `grid` algorithm is used to find
         * clusters, otherwise `kmeans`. It ensures good performance on
         * large datasets and better clusters arrangement after the zoom.
         *
         * @requires modules/marker-clusters
         */
        kmeansThreshold: 100
    },
    /**
     * Options for the cluster marker.
     * @type      {Highcharts.PointMarkerOptionsObject}
     * @extends   plotOptions.series.marker
     * @excluding enabledThreshold, states
     * @requires  modules/marker-clusters
     */
    marker: {
        /** @internal */
        symbol: 'cluster',
        /** @internal */
        radius: 15,
        /** @internal */
        lineWidth: 0,
        /** @internal */
        lineColor: "#ffffff" /* Palette.backgroundColor */
    },
    /**
     * Fires when the cluster point is clicked and `drillToCluster` is enabled.
     * One parameter, `event`, is passed to the function. The default action
     * is to zoom to the cluster points range. This can be prevented
     * by calling `event.preventDefault()`.
     *
     * @type      {Highcharts.MarkerClusterDrillCallbackFunction}
     * @product   highcharts highmaps
     * @see [cluster.drillToCluster](#plotOptions.scatter.cluster.drillToCluster)
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.events.drillToCluster
     */
    /**
     * An array defining zones within marker clusters.
     *
     * In styled mode, the color zones are styled with the
     * `.highcharts-cluster-zone-{n}` class, or custom
     * classed from the `className`
     * option.
     *
     * @sample highcharts/marker-clusters/basic
     *         Marker clusters zones
     * @sample maps/marker-clusters/custom-alg
     *         Zones on maps
     *
     * @type      {Array<*>}
     * @product   highcharts highmaps
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.zones
     */
    /**
     * Styled mode only. A custom class name for the zone.
     *
     * @sample highcharts/css/color-zones/
     *         Zones styled by class name
     *
     * @type      {string}
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.zones.className
     */
    /**
     * Settings for the cluster marker belonging to the zone.
     *
     * @see [cluster.marker](#plotOptions.scatter.cluster.marker)
     * @extends   plotOptions.scatter.cluster.marker
     * @product   highcharts highmaps
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.zones.marker
     */
    /**
     * The value where the zone starts.
     *
     * @type      {number}
     * @product   highcharts highmaps
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.zones.from
     */
    /**
     * The value where the zone ends.
     *
     * @type      {number}
     * @product   highcharts highmaps
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.zones.to
     */
    /**
     * The fill color of the cluster marker in hover state. When
     * `undefined`, the series' or point's fillColor for normal
     * state is used.
     *
     * @type      {Highcharts.ColorType}
     * @requires  modules/marker-clusters
     * @apioption plotOptions.scatter.cluster.states.hover.fillColor
     */
    /**
     * Options for the cluster data labels.
     * @type    {Highcharts.DataLabelsOptions}
     * @requires modules/marker-clusters
     */
    dataLabels: {
        /** @internal */
        enabled: true,
        /** @internal */
        format: '{point.clusterPointsAmount}',
        /** @internal */
        verticalAlign: 'middle',
        /** @internal */
        align: 'center',
        /** @internal */
        style: {
            color: 'contrast'
        },
        /** @internal */
        inside: true
    }
};
const tooltip = {
    /**
     * The HTML of the cluster point's in the tooltip. Works only with
     * marker-clusters module and analogously to
     * [pointFormat](#tooltip.pointFormat).
     *
     * The cluster tooltip can be also formatted using
     * `tooltip.formatter` callback function and `point.isCluster` flag.
     *
     * @sample highcharts/marker-clusters/grid
     *         Format tooltip for cluster points.
     *
     * @sample maps/marker-clusters/europe/
     *         Format tooltip for clusters using tooltip.formatter
     *
     * @type      {string}
     * @default   Clustered points: {point.clusterPointsAmount}
     * @requires  modules/marker-clusters
     * @apioption tooltip.clusterFormat
     */
    clusterFormat: '<span>Clustered points: ' +
        '{point.clusterPointsAmount}</span><br/>'
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const MarkerClusterDefaults = {
    cluster,
    tooltip
};
/** @internal */
/* harmony default export */ const MarkerClusters_MarkerClusterDefaults = (MarkerClusterDefaults);

;// ./code/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */
/* *
*
* Functions
*
* */
/**
 * Sets the length of the column array.
 *
 * @param {DataTableColumn} column
 * Column to be modified.
 *
 * @param {number} length
 * New length of the column.
 *
 * @param {boolean} asSubarray
 * If column is a typed array, return a subarray instead of a new array. It
 * is faster `O(1)`, but the entire buffer will be kept in memory until all
 * views of it are destroyed. Default is `false`.
 *
 * @return {DataTableColumn}
 * Modified column.
 *
 * @private
 */
function setLength(column, length, asSubarray) {
    if (Array.isArray(column)) {
        column.length = length;
        return column;
    }
    return column[asSubarray ? 'subarray' : 'slice'](0, length);
}
/**
 * Splices a column array.
 *
 * @param {DataTableColumn} column
 * Column to be modified.
 *
 * @param {number} start
 * Index at which to start changing the array.
 *
 * @param {number} deleteCount
 * An integer indicating the number of old array elements to remove.
 *
 * @param {boolean} removedAsSubarray
 * If column is a typed array, return a subarray instead of a new array. It
 * is faster `O(1)`, but the entire buffer will be kept in memory until all
 * views to it are destroyed. Default is `true`.
 *
 * @param {Array<number>|TypedArray} items
 * The elements to add to the array, beginning at the start index. If you
 * don't specify any elements, `splice()` will only remove elements from the
 * array.
 *
 * @return {SpliceResult}
 * Object containing removed elements and the modified column.
 *
 * @private
 */
function splice(column, start, deleteCount, removedAsSubarray, items = []) {
    if (Array.isArray(column)) {
        if (!Array.isArray(items)) {
            items = Array.from(items);
        }
        return {
            removed: column.splice(start, deleteCount, ...items),
            array: column
        };
    }
    const Constructor = Object.getPrototypeOf(column)
        .constructor;
    const removed = column[removedAsSubarray ? 'subarray' : 'slice'](start, start + deleteCount);
    const newLength = column.length - deleteCount + items.length;
    const result = new Constructor(newLength);
    result.set(column.subarray(0, start), 0);
    result.set(items, start);
    result.set(column.subarray(start + deleteCount), start + items.length);
    return {
        removed: removed,
        array: result
    };
}
/**
 * Converts a cell value to a number.
 *
 * @param {DataTableCellType} value
 * Cell value to convert to a number.
 *
 * @param {boolean} useNaN
 * If `true`, returns `NaN` for non-numeric values; if `false`,
 * returns `null` instead.
 *
 * @return {number | null}
 * Number or `null` if the value is not a number.
 *
 * @private
 */
function convertToNumber(value, useNaN) {
    switch (typeof value) {
        case 'boolean':
            return (value ? 1 : 0);
        case 'number':
            return (isNaN(value) && !useNaN ? null : value);
        default:
            value = parseFloat(`${value ?? ''}`);
            return (isNaN(value) && !useNaN ? null : value);
    }
}
/* *
 *
 *  Default Export
 *
 * */
const ColumnUtils = {
    convertToNumber,
    setLength,
    splice
};
/* harmony default export */ const Data_ColumnUtils = (ColumnUtils);

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

;// ./code/es-modules/Data/DataTableCore.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


const { setLength: DataTableCore_setLength, splice: DataTableCore_splice } = Data_ColumnUtils;


/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTableCore {
    /**
     * Constructs an instance of the DataTable class.
     *
     * @example
     * const dataTable = new Highcharts.DataTableCore({
     *   columns: {
     *     year: [2020, 2021, 2022, 2023],
     *     cost: [11, 13, 12, 14],
     *     revenue: [12, 15, 14, 18]
     *   }
     * });

     *
     * @param {Highcharts.DataTableOptions} [options]
     * Options to initialize the new DataTable instance.
     */
    constructor(options = {}) {
        /**
         * Whether the ID was automatic generated or given in the constructor.
         *
         * @name Highcharts.DataTable#autoId
         * @type {boolean}
         */
        this.autoId = !options.id;
        this.columns = {};
        /**
         * ID of the table for identification purposes.
         *
         * @name Highcharts.DataTable#id
         * @type {string}
         */
        this.id = (options.id || (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)());
        this.rowCount = 0;
        this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
        let rowCount = 0;
        objectEach(options.columns || {}, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = Math.max(rowCount, column.length);
        });
        this.applyRowCount(rowCount);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies a row count to the table by setting the `rowCount` property and
     * adjusting the length of all columns.
     *
     * @private
     * @param {number} rowCount The new row count.
     */
    applyRowCount(rowCount) {
        this.rowCount = rowCount;
        objectEach(this.columns, (column, columnId) => {
            if (column.length !== rowCount) {
                this.columns[columnId] = DataTableCore_setLength(column, rowCount);
            }
        });
    }
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
     *
     * @param {number} rowIndex
     * The start row index
     *
     * @param {number} [rowCount=1]
     * The number of rows to delete
     *
     * @return {void}
     *
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex, rowCount = 1) {
        if (rowCount > 0 && rowIndex < this.rowCount) {
            let length = 0;
            objectEach(this.columns, (column, columnId) => {
                this.columns[columnId] =
                    DataTableCore_splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        fireEvent(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
    }
    /**
     * Fetches the given column by the canonical column name. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @param {string} columnId
     * Name of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    }
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnIds, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return (columnIds || Object.keys(this.columns)).reduce((columns, columnId) => {
            columns[columnId] = this.columns[columnId];
            return columns;
        }, {});
    }
    /**
     * Retrieves the row at a given index.
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnIds]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnIds) {
        return (columnIds || Object.keys(this.columns)).map((key) => this.columns[key]?.[rowIndex]);
    }
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumn(columnId, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnId]: column }, rowIndex, eventDetail);
    }
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTableCore.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the `DataTableCore`, as it
     * always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail) {
        let rowCount = this.rowCount;
        objectEach(columns, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            fireEvent(this, 'afterSetColumns');
            this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
     *
     * @param {Record<string, number|string|undefined>} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #afterSetRows
     */
    setRow(row, rowIndex = this.rowCount, insert, eventDetail) {
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1, rowKeys = Object.keys(row);
        if (eventDetail?.addColumns !== false) {
            for (let i = 0, iEnd = rowKeys.length; i < iEnd; i++) {
                const key = rowKeys[i];
                if (!columns[key]) {
                    columns[key] = [];
                }
            }
        }
        objectEach(columns, (column, columnId) => {
            if (!column && eventDetail?.addColumns !== false) {
                column = new Array(indexRowCount);
            }
            if (column) {
                if (insert) {
                    column = DataTableCore_splice(column, rowIndex, 0, true, [row[columnId] ?? null]).array;
                }
                else {
                    column[rowIndex] = row[columnId] ?? null;
                }
                columns[columnId] = column;
            }
        });
        if (indexRowCount > this.rowCount) {
            this.applyRowCount(indexRowCount);
        }
        if (!eventDetail?.silent) {
            fireEvent(this, 'afterSetRows');
            this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
        }
    }
    /**
     * Returns the modified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTableCore}
     * The modified (clone) or the original data table.
     */
    getModified() {
        return this.modified || this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTableCore = (DataTableCore);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 * //**
 * A column of values in a data table.
 * @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
 */ /**
* A collection of data table columns defined by a object where the key is the
* column name and the value is an array of the column values.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptions
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptions.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptions.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/MarkerClusters/MarkerClusterScatter.js
/* *
 *
 *  Marker clusters module.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Wojciech Chmiel
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject } = (external_highcharts_src_js_default_default());


const { cluster: clusterDefaults } = MarkerClusters_MarkerClusterDefaults;


/* *
 *
 *  Constants
 *
 * */
const markerClusterAlgorithms = {
    grid: function (dataX, dataY, dataIndexes, options) {
        const series = this, grid = {}, gridOffset = series.getGridOffset(), scaledGridSize = series.getScaledGridSize(options);
        let x, y, gridX, gridY, key, i;
        for (i = 0; i < dataX.length; i++) {
            const p = valuesToPixels(series, { x: dataX[i], y: dataY[i] });
            x = p.x - gridOffset.plotLeft;
            y = p.y - gridOffset.plotTop;
            gridX = Math.floor(x / scaledGridSize);
            gridY = Math.floor(y / scaledGridSize);
            key = gridY + ':' + gridX;
            grid[key] ?? (grid[key] = []);
            grid[key].push({
                dataIndex: dataIndexes[i],
                x: dataX[i],
                y: dataY[i]
            });
        }
        return grid;
    },
    kmeans: function (dataX, dataY, dataIndexes, options) {
        const series = this, clusters = [], noise = [], group = {}, pointMaxDistance = Number(options.processedDistance ??
            relativeLength(options.distance ||
                clusterDefaults.layoutAlgorithm.distance, series.chart.plotWidth)), iterations = options.iterations, 
        // Max pixel difference beetwen new and old cluster position.
        maxClusterShift = 1;
        let currentIteration = 0, repeat = true, pointX = 0, pointY = 0, tempPos, pointClusterDistance = [];
        options.processedGridSize = pointMaxDistance;
        // Use grid method to get groupedData object.
        const groupedData = series.markerClusterAlgorithms ?
            series.markerClusterAlgorithms.grid.call(series, dataX, dataY, dataIndexes, options) : {};
        // Find clusters amount and its start positions
        // based on grid grouped data.
        for (const key in groupedData) {
            if (groupedData[key].length > 1) {
                tempPos = getClusterPosition(groupedData[key]);
                clusters.push({
                    posX: tempPos.x,
                    posY: tempPos.y,
                    oldX: 0,
                    oldY: 0,
                    startPointsLen: groupedData[key].length,
                    points: []
                });
            }
        }
        // Start kmeans iteration process.
        while (repeat) {
            for (const c of clusters) {
                c.points.length = 0;
            }
            noise.length = 0;
            for (let i = 0; i < dataX.length; i++) {
                pointX = dataX[i];
                pointY = dataY[i];
                pointClusterDistance = series.getClusterDistancesFromPoint(clusters, pointX, pointY);
                if (pointClusterDistance.length &&
                    pointClusterDistance[0].distance < pointMaxDistance) {
                    clusters[pointClusterDistance[0].clusterIndex].points.push({
                        x: pointX,
                        y: pointY,
                        dataIndex: dataIndexes[i]
                    });
                }
                else {
                    noise.push({
                        x: pointX,
                        y: pointY,
                        dataIndex: dataIndexes[i]
                    });
                }
            }
            // When cluster points array has only one point the
            // point should be classified again.
            for (let i = 0; i < clusters.length; i++) {
                if (clusters[i].points.length === 1) {
                    pointClusterDistance = series.getClusterDistancesFromPoint(clusters, clusters[i].points[0].x, clusters[i].points[0].y);
                    if (pointClusterDistance[1].distance < pointMaxDistance) {
                        // Add point to the next closest cluster.
                        clusters[pointClusterDistance[1].clusterIndex].points
                            .push(clusters[i].points[0]);
                        // Clear points array.
                        clusters[pointClusterDistance[0].clusterIndex]
                            .points.length = 0;
                    }
                }
            }
            // Compute a new clusters position and check if it
            // is different than the old one.
            repeat = false;
            for (let i = 0; i < clusters.length; i++) {
                tempPos = getClusterPosition(clusters[i].points);
                clusters[i].oldX = clusters[i].posX;
                clusters[i].oldY = clusters[i].posY;
                clusters[i].posX = tempPos.x;
                clusters[i].posY = tempPos.y;
                // Repeat the algorithm if at least one cluster
                // is shifted more than maxClusterShift property.
                if (clusters[i].posX > clusters[i].oldX + maxClusterShift ||
                    clusters[i].posX < clusters[i].oldX - maxClusterShift ||
                    clusters[i].posY > clusters[i].oldY + maxClusterShift ||
                    clusters[i].posY < clusters[i].oldY - maxClusterShift) {
                    repeat = true;
                }
            }
            // If iterations property is set repeat the algorithm
            // specified amount of times.
            if (iterations) {
                repeat = currentIteration < iterations - 1;
            }
            currentIteration++;
        }
        for (let i = 0, iEnd = clusters.length; i < iEnd; ++i) {
            group['cluster' + i] = clusters[i].points;
        }
        for (let i = 0, iEnd = noise.length; i < iEnd; ++i) {
            group['noise' + i] = [noise[i]];
        }
        return group;
    },
    optimizedKmeans: function (processedXData, processedYData, dataIndexes, options) {
        const series = this, pointMaxDistance = Number(options.processedDistance ??
            relativeLength(options.distance ||
                clusterDefaults.layoutAlgorithm.gridSize, series.chart.plotWidth)), extremes = series.getRealExtremes(), clusterMarkerOptions = (series.options.cluster || {}).marker;
        let distance, group = {};
        if (!series.markerClusterInfo || (series.initMaxX && series.initMaxX < extremes.maxX ||
            series.initMinX && series.initMinX > extremes.minX ||
            series.initMaxY && series.initMaxY < extremes.maxY ||
            series.initMinY && series.initMinY > extremes.minY)) {
            series.initMaxX = extremes.maxX;
            series.initMinX = extremes.minX;
            series.initMaxY = extremes.maxY;
            series.initMinY = extremes.minY;
            group = series.markerClusterAlgorithms ?
                series.markerClusterAlgorithms.kmeans.call(series, processedXData, processedYData, dataIndexes, options) : {};
            series.baseClusters = null;
        }
        else {
            series.baseClusters ?? (series.baseClusters = {
                clusters: series.markerClusterInfo.clusters,
                noise: series.markerClusterInfo.noise
            });
            for (const cluster of series.baseClusters.clusters) {
                cluster.pointsOutside = [];
                cluster.pointsInside = [];
                for (const dataPoint of cluster.data) {
                    const dataPointPx = valuesToPixels(series, dataPoint), clusterPx = valuesToPixels(series, cluster);
                    distance = Math.sqrt(Math.pow(dataPointPx.x - clusterPx.x, 2) +
                        Math.pow(dataPointPx.y - clusterPx.y, 2));
                    const radius = (cluster.clusterZone?.marker?.radius ??
                        clusterMarkerOptions?.radius ??
                        clusterDefaults.marker.radius ??
                        0);
                    const offset = pointMaxDistance - radius >= 0 ?
                        pointMaxDistance - radius : radius;
                    if (distance > radius + offset &&
                        defined(cluster.pointsOutside)) {
                        cluster.pointsOutside.push(dataPoint);
                    }
                    else if (defined(cluster.pointsInside)) {
                        cluster.pointsInside.push(dataPoint);
                    }
                }
                if (cluster.pointsInside.length) {
                    group[cluster.id] = cluster.pointsInside;
                }
                let i = 0;
                for (const p of cluster.pointsOutside) {
                    group[cluster.id + '_noise' + i++] = [p];
                }
            }
            for (const noise of series.baseClusters.noise) {
                group[noise.id] = noise.data;
            }
        }
        return group;
    }
};
/* *
 *
 *  Variables
 *
 * */
let baseGeneratePoints, 
/**
 * Points that ids are included in the oldPointsStateId array are hidden
 * before animation. Other ones are destroyed.
 * @internal
 */
oldPointsStateId = [], stateIdCounter = 0;
/* *
 *
 *  Functions
 *
 * */
/**
 * Compose marker cluster scatter hooks.
 * @internal
 */
function compose(highchartsDefaultOptions, ScatterSeriesClass) {
    const scatterProto = ScatterSeriesClass.prototype;
    if (!scatterProto.markerClusterAlgorithms) {
        baseGeneratePoints = scatterProto.generatePoints;
        scatterProto.markerClusterAlgorithms = markerClusterAlgorithms;
        scatterProto.animateClusterPoint = seriesAnimateClusterPoint;
        scatterProto.destroyClusteredData = seriesDestroyClusteredData;
        scatterProto.generatePoints = seriesGeneratePoints;
        scatterProto.getClusterDistancesFromPoint =
            seriesGetClusterDistancesFromPoint;
        scatterProto.getClusteredData = seriesGetClusteredData;
        scatterProto.getGridOffset = seriesGetGridOffset;
        scatterProto.getPointsState = seriesGetPointsState;
        scatterProto.getRealExtremes = seriesGetRealExtremes;
        scatterProto.getScaledGridSize = seriesGetScaledGridSize;
        scatterProto.hideClusteredData = seriesHideClusteredData;
        scatterProto.isValidGroupedDataObject = seriesIsValidGroupedDataObject;
        scatterProto.preventClusterCollisions = seriesPreventClusterCollisions;
        // Destroy grouped data on series destroy.
        addEvent(ScatterSeriesClass, 'destroy', scatterProto.destroyClusteredData);
        if (highchartsDefaultOptions.plotOptions) {
            highchartsDefaultOptions.plotOptions.series = merge(highchartsDefaultOptions.plotOptions.series, MarkerClusters_MarkerClusterDefaults);
        }
    }
}
/**
 * Util function.
 * @internal
 */
function destroyOldPoints(oldState) {
    for (const key of Object.keys(oldState)) {
        oldState[key].point?.destroy?.();
    }
}
/**
 * Util function.
 * @internal
 */
function fadeInElement(elem, opacity, animation) {
    elem.attr({ opacity }).animate({ opacity: 1 }, animation);
}
/**
 * Util function.
 * @internal
 */
function fadeInNewPointAndDestoryOld(newPointObj, oldPoints, animation, opacity) {
    // Fade in new point.
    fadeInStatePoint(newPointObj, opacity, animation, true, true);
    // Destroy old animated points.
    for (const p of oldPoints) {
        p.point?.destroy?.();
    }
}
/**
 * Util function.
 * @internal
 */
function fadeInStatePoint(stateObj, opacity, animation, fadeinGraphic, fadeinDataLabel) {
    if (stateObj.point) {
        if (fadeinGraphic && stateObj.point.graphic) {
            stateObj.point.graphic.show();
            fadeInElement(stateObj.point.graphic, opacity, animation);
        }
        if (fadeinDataLabel && stateObj.point.dataLabel) {
            stateObj.point.dataLabel.show();
            fadeInElement(stateObj.point.dataLabel, opacity, animation);
        }
    }
}
/**
 * Util function.
 * @internal
 */
function getClusterPosition(points) {
    const pointsLen = points.length;
    let sumX = 0, sumY = 0;
    for (let i = 0; i < pointsLen; i++) {
        sumX += points[i].x;
        sumY += points[i].y;
    }
    return {
        x: sumX / pointsLen,
        y: sumY / pointsLen
    };
}
/**
 * Util function.Prepare array with sorted data objects to be compared in
 * getPointsState method.
 * @internal
 */
function getDataState(clusteredData, stateDataLen) {
    const state = [];
    state.length = stateDataLen;
    clusteredData.clusters.forEach(function (cluster) {
        cluster.data.forEach(function (elem) {
            state[elem.dataIndex] = elem;
        });
    });
    clusteredData.noise.forEach(function (noise) {
        state[noise.data[0].dataIndex] = noise.data[0];
    });
    return state;
}
/**
 * Util function. Generate unique stateId for a state element.
 * @internal
 */
function getStateId() {
    return Math.random().toString(36).substring(2, 7) + '-' + stateIdCounter++;
}
/**
 * Util function.
 * @internal
 */
function hideStatePoint(stateObj, hideGraphic, hideDataLabel) {
    if (stateObj.point) {
        if (hideGraphic && stateObj.point.graphic) {
            stateObj.point.graphic.hide();
        }
        if (hideDataLabel && stateObj.point.dataLabel) {
            stateObj.point.dataLabel.hide();
        }
    }
}
/**
 * Handle point drill-to-cluster click.
 * @internal
 */
function onPointDrillToCluster(event) {
    const point = event.point || event.target;
    point.firePointEvent('drillToCluster', event, function (e) {
        const point = e.point || e.target, series = point.series, { xAxis, yAxis, chart } = series, { inverted, mapView, pointer } = chart, drillToCluster = series.options
            .cluster?.drillToCluster;
        if (drillToCluster && point.clusteredData) {
            const sortedDataX = point.clusteredData
                .map((data) => data.x)
                .sort((a, b) => a - b), sortedDataY = point.clusteredData
                .map((data) => data.y)
                .sort((a, b) => a - b), minX = sortedDataX[0], maxX = sortedDataX[sortedDataX.length - 1], minY = sortedDataY[0], maxY = sortedDataY[sortedDataY.length - 1], offsetX = Math.abs((maxX - minX) * 0.1), offsetY = Math.abs((maxY - minY) * 0.1), x1 = Math.min(minX, maxX) - offsetX, x2 = Math.max(minX, maxX) + offsetX, y1 = Math.min(minY, maxY) - offsetY, y2 = Math.max(minY, maxY) + offsetY;
            if (mapView) {
                mapView.fitToBounds({ x1, x2, y1, y2 });
            }
            else if (xAxis && yAxis) {
                let x1Px = xAxis.toPixels(x1), x2Px = xAxis.toPixels(x2), y1Px = yAxis.toPixels(y1), y2Px = yAxis.toPixels(y2);
                if (inverted) {
                    [x1Px, x2Px, y1Px, y2Px] = [y1Px, y2Px, x1Px, x2Px];
                }
                if (x1Px > x2Px) {
                    [x1Px, x2Px] = [x2Px, x1Px];
                }
                if (y1Px > y2Px) {
                    [y1Px, y2Px] = [y2Px, y1Px];
                }
                if (pointer) {
                    pointer.zoomX = true;
                    pointer.zoomY = true;
                }
                chart.transform({
                    from: {
                        x: x1Px,
                        y: y1Px,
                        width: x2Px - x1Px,
                        height: y2Px - y1Px
                    }
                });
            }
        }
    });
}
/**
 * Util function.
 * @internal
 */
function pixelsToValues(series, pos) {
    const { chart, xAxis, yAxis } = series;
    if (chart.mapView) {
        return chart.mapView.pixelsToProjectedUnits(pos);
    }
    return {
        x: xAxis ? xAxis.toValue(pos.x) : 0,
        y: yAxis ? yAxis.toValue(pos.y) : 0
    };
}
/**
 * Animate cluster point transitions.
 * @internal
 */
function seriesAnimateClusterPoint(clusterObj) {
    const series = this, chart = series.chart, mapView = chart.mapView, animation = animObject(series.options.cluster?.animation), animDuration = animation.duration || 500, pointsState = series.markerClusterInfo?.pointsState, newState = pointsState?.newState, oldState = pointsState?.oldState, oldPoints = [];
    let parentId, oldPointObj, newPointObj, newPointBBox, offset = 0, newX = 0, newY = 0, isOldPointGrahic = false, isCbHandled = false;
    if (oldState && newState) {
        newPointObj = newState[clusterObj.stateId];
        const newPos = valuesToPixels(series, newPointObj);
        newX = newPos.x - (mapView ? 0 : chart.plotLeft);
        newY = newPos.y - (mapView ? 0 : chart.plotTop);
        // Point has one ancestor.
        if (newPointObj.parentsId.length === 1) {
            parentId = newState?.[clusterObj.stateId].parentsId[0];
            oldPointObj = oldState[parentId];
            // If old and new positions are the same do not animate.
            if (newPointObj.point?.graphic &&
                oldPointObj.point?.plotX &&
                oldPointObj.point.plotY &&
                (oldPointObj.point.plotX !== newPointObj.point.plotX ||
                    oldPointObj.point.plotY !== newPointObj.point.plotY)) {
                newPointBBox = newPointObj.point.graphic.getBBox();
                // Marker image does not have the offset (#14342).
                offset = newPointObj.point.graphic?.isImg ?
                    0 : newPointBBox.width / 2;
                newPointObj.point.graphic.attr({
                    x: oldPointObj.point.plotX - offset,
                    y: oldPointObj.point.plotY - offset
                });
                newPointObj.point.graphic.animate({
                    x: newX - (newPointObj.point.graphic.radius || 0),
                    y: newY - (newPointObj.point.graphic.radius || 0)
                }, animation, function () {
                    isCbHandled = true;
                    // Destroy old point.
                    oldPointObj.point?.destroy?.();
                });
                // Data label animation.
                if (newPointObj.point.dataLabel?.alignAttr &&
                    oldPointObj.point.dataLabel?.alignAttr) {
                    newPointObj.point.dataLabel.attr({
                        x: oldPointObj.point.dataLabel.alignAttr.x,
                        y: oldPointObj.point.dataLabel.alignAttr.y
                    });
                    newPointObj.point.dataLabel.animate({
                        x: newPointObj.point.dataLabel.alignAttr.x,
                        y: newPointObj.point.dataLabel.alignAttr.y
                    }, animation);
                }
            }
        }
        else if (newPointObj.parentsId.length === 0) {
            // Point has no ancestors - new point.
            // Hide new point.
            hideStatePoint(newPointObj, true, true);
            syncTimeout(function () {
                // Fade in new point.
                fadeInStatePoint(newPointObj, 0.1, animation, true, true);
            }, animDuration / 2);
        }
        else {
            // Point has many ancestors.
            // Hide new point before animation.
            hideStatePoint(newPointObj, true, true);
            newPointObj.parentsId.forEach(function (elem) {
                if (oldState?.[elem]) {
                    oldPointObj = oldState[elem];
                    oldPoints.push(oldPointObj);
                    if (oldPointObj.point?.graphic) {
                        isOldPointGrahic = true;
                        oldPointObj.point.graphic.show();
                        oldPointObj.point.graphic.animate({
                            x: newX - (oldPointObj.point.graphic.radius || 0),
                            y: newY - (oldPointObj.point.graphic.radius || 0),
                            opacity: 0.4
                        }, animation, function () {
                            isCbHandled = true;
                            fadeInNewPointAndDestoryOld(newPointObj, oldPoints, animation, 0.7);
                        });
                        if (oldPointObj.point.dataLabel &&
                            oldPointObj.point.dataLabel.y !== -9999 &&
                            newPointObj.point?.dataLabel?.alignAttr) {
                            oldPointObj.point.dataLabel.show();
                            oldPointObj.point.dataLabel.animate({
                                x: newPointObj.point.dataLabel.alignAttr.x,
                                y: newPointObj.point.dataLabel.alignAttr.y,
                                opacity: 0.4
                            }, animation);
                        }
                    }
                }
            });
            // Make sure point is faded in.
            syncTimeout(function () {
                if (!isCbHandled) {
                    fadeInNewPointAndDestoryOld(newPointObj, oldPoints, animation, 0.85);
                }
            }, animDuration);
            if (!isOldPointGrahic) {
                syncTimeout(function () {
                    fadeInNewPointAndDestoryOld(newPointObj, oldPoints, animation, 0.1);
                }, animDuration / 2);
            }
        }
    }
}
/**
 * Destroy clustered data points.
 * @internal
 */
function seriesDestroyClusteredData() {
    // Clear previous groups.
    this.markerClusterSeriesData?.forEach((point) => {
        point?.destroy?.();
    });
    this.markerClusterSeriesData = null;
}
/**
 * Override the generatePoints method by adding a reference to grouped data.
 * @internal
 */
function seriesGeneratePoints() {
    const series = this, { chart } = series, mapView = chart.mapView, xData = series.getColumn('x'), yData = series.getColumn('y'), clusterOptions = series.options.cluster, realExtremes = series.getRealExtremes(), visibleXData = [], visibleYData = [], visibleDataIndexes = [];
    let oldPointsState, oldDataLen, oldMarkerClusterInfo, kmeansThreshold, cropDataOffsetX, cropDataOffsetY, seriesMinX, seriesMaxX, seriesMinY, seriesMaxY, type, algorithm, clusteredData, groupedData, layoutAlgOptions, point;
    // For map point series, we need to resolve lon, lat and geometry options
    // and project them on the plane in order to get x and y. In the regular
    // series flow, this is not done until the `translate` method because the
    // resulting [x, y] position depends on inset positions in the MapView.
    if (mapView && series.is('mappoint') && xData && yData) {
        series.options.data?.forEach((p, i) => {
            const xy = series.projectPoint(p);
            if (xy) {
                xData[i] = xy.x;
                yData[i] = xy.y;
            }
        });
    }
    if (clusterOptions?.enabled &&
        xData?.length &&
        yData?.length &&
        !chart.polar) {
        type = clusterOptions.layoutAlgorithm.type;
        layoutAlgOptions = clusterOptions.layoutAlgorithm;
        // Get processed algorithm properties.
        layoutAlgOptions.processedGridSize = relativeLength(layoutAlgOptions.gridSize ||
            clusterDefaults.layoutAlgorithm.gridSize, chart.plotWidth);
        layoutAlgOptions.processedDistance = relativeLength(layoutAlgOptions.distance ||
            clusterDefaults.layoutAlgorithm.distance, chart.plotWidth);
        kmeansThreshold = layoutAlgOptions.kmeansThreshold ||
            clusterDefaults.layoutAlgorithm.kmeansThreshold;
        // Offset to prevent cluster size changes.
        const halfGrid = layoutAlgOptions.processedGridSize / 2, p1 = pixelsToValues(series, { x: 0, y: 0 }), p2 = pixelsToValues(series, { x: halfGrid, y: halfGrid });
        cropDataOffsetX = Math.abs(p1.x - p2.x);
        cropDataOffsetY = Math.abs(p1.y - p2.y);
        // Get only visible data.
        for (let i = 0; i < xData.length; i++) {
            if (!series.dataMaxX) {
                if (!defined(seriesMaxX) ||
                    !defined(seriesMinX) ||
                    !defined(seriesMaxY) ||
                    !defined(seriesMinY)) {
                    seriesMaxX = seriesMinX = xData[i];
                    seriesMaxY = seriesMinY = yData[i];
                }
                else if (isNumber(yData[i]) &&
                    isNumber(seriesMaxY) &&
                    isNumber(seriesMinY)) {
                    seriesMaxX = Math.max(xData[i], seriesMaxX);
                    seriesMinX = Math.min(xData[i], seriesMinX);
                    seriesMaxY = Math.max(yData[i] || seriesMaxY, seriesMaxY);
                    seriesMinY = Math.min(yData[i] || seriesMinY, seriesMinY);
                }
            }
            // Crop data to visible ones with appropriate offset to prevent
            // cluster size changes on the edge of the plot area.
            if (xData[i] >= (realExtremes.minX - cropDataOffsetX) &&
                xData[i] <= (realExtremes.maxX + cropDataOffsetX) &&
                (yData[i] || realExtremes.minY) >=
                    (realExtremes.minY - cropDataOffsetY) &&
                (yData[i] || realExtremes.maxY) <=
                    (realExtremes.maxY + cropDataOffsetY)) {
                visibleXData.push(xData[i]);
                visibleYData.push(yData[i]);
                visibleDataIndexes.push(i);
            }
        }
        // Save data max values.
        if (defined(seriesMaxX) && defined(seriesMinX) &&
            isNumber(seriesMaxY) && isNumber(seriesMinY)) {
            series.dataMaxX = seriesMaxX;
            series.dataMinX = seriesMinX;
            series.dataMaxY = seriesMaxY;
            series.dataMinY = seriesMinY;
        }
        if (isFunction(type)) {
            algorithm = type;
        }
        else if (series.markerClusterAlgorithms) {
            if (type && series.markerClusterAlgorithms[type]) {
                algorithm = series.markerClusterAlgorithms[type];
            }
            else {
                algorithm = visibleXData.length < kmeansThreshold ?
                    series.markerClusterAlgorithms.kmeans :
                    series.markerClusterAlgorithms.grid;
            }
        }
        else {
            algorithm = () => false;
        }
        groupedData = algorithm.call(this, visibleXData, visibleYData, visibleDataIndexes, layoutAlgOptions);
        clusteredData = groupedData ? series.getClusteredData(groupedData, clusterOptions) : groupedData;
        // When animation is enabled get old points state.
        if (clusterOptions.animation &&
            series.markerClusterInfo?.pointsState?.oldState) {
            // Destroy old points.
            destroyOldPoints(series.markerClusterInfo.pointsState.oldState);
            oldPointsState = series.markerClusterInfo.pointsState.newState;
        }
        else {
            oldPointsState = {};
        }
        // Save points old state info.
        oldDataLen = xData.length;
        oldMarkerClusterInfo = series.markerClusterInfo;
        if (clusteredData) {
            series.dataTable.modified = new Data_DataTableCore({
                columns: {
                    x: clusteredData.groupedXData,
                    y: clusteredData.groupedYData
                }
            });
            series.hasGroupedData = true;
            series.markerClusterInfo = clusteredData;
            series.groupMap = clusteredData.groupMap;
        }
        baseGeneratePoints.apply(this);
        if (clusteredData && series.markerClusterInfo) {
            // Mark cluster points. Safe point reference in the cluster object.
            series.markerClusterInfo.clusters?.forEach((cluster) => {
                point = series.points[cluster.index];
                point.isCluster = true;
                point.clusteredData = cluster.data;
                point.clusterPointsAmount = cluster.data.length;
                cluster.point = point;
                // Add zoom to cluster range.
                addEvent(point, 'click', onPointDrillToCluster);
            });
            // Safe point reference in the noise object.
            series.markerClusterInfo.noise?.forEach((noise) => {
                noise.point = series.points[noise.index];
            });
            // When animation is enabled save points state.
            if (clusterOptions.animation &&
                series.markerClusterInfo) {
                series.markerClusterInfo.pointsState = {
                    oldState: oldPointsState,
                    newState: series.getPointsState(clusteredData, oldMarkerClusterInfo, oldDataLen)
                };
            }
            // Record grouped data in order to let it be destroyed the next time
            // processData runs.
            if (!clusterOptions.animation) {
                this.destroyClusteredData();
            }
            else {
                this.hideClusteredData();
            }
            this.markerClusterSeriesData =
                this.hasGroupedData ? this.points : null;
        }
    }
    else {
        baseGeneratePoints.apply(this);
    }
}
/**
 * Calculate distances from a point to all clusters.
 * @internal
 */
function seriesGetClusterDistancesFromPoint(clusters, pointX, pointY) {
    const pointClusterDistance = [];
    for (let clusterIndex = 0; clusterIndex < clusters.length; clusterIndex++) {
        const p1 = valuesToPixels(this, { x: pointX, y: pointY }), p2 = valuesToPixels(this, {
            x: clusters[clusterIndex].posX,
            y: clusters[clusterIndex].posY
        }), distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) +
            Math.pow(p1.y - p2.y, 2));
        pointClusterDistance.push({ clusterIndex, distance });
    }
    return pointClusterDistance.sort((a, b) => a.distance - b.distance);
}
/**
 * Build clustered data from grouped data.
 * @internal
 */
function seriesGetClusteredData(groupedData, options) {
    const series = this, data = series.options.data, groupedXData = [], groupedYData = [], clusters = [], // Container for clusters.
    noise = [], // Container for points not belonging to any cluster.
    groupMap = [], 
    // Prevent minimumClusterSize lower than 2.
    minimumClusterSize = Math.max(2, options.minimumClusterSize || 2);
    let index = 0, stateId, point, points, pointUserOptions, pointsLen, marker, clusterPos, pointOptions, clusterTempPos, zoneOptions, clusterZone, clusterZoneClassName;
    // Check if groupedData is valid when user uses a custom algorithm.
    if (isFunction(options.layoutAlgorithm.type) &&
        !series.isValidGroupedDataObject(groupedData)) {
        (0,external_highcharts_src_js_default_namespaceObject.error)('Highcharts marker-clusters module: ' +
            'The custom algorithm result is not valid!', false, series.chart);
        return false;
    }
    for (const k in groupedData) {
        if (groupedData[k].length >= minimumClusterSize) {
            points = groupedData[k];
            stateId = getStateId();
            pointsLen = points.length;
            // Get zone options for cluster.
            if (options.zones) {
                for (let i = 0; i < options.zones.length; i++) {
                    if (pointsLen >= options.zones[i].from &&
                        pointsLen <= options.zones[i].to) {
                        clusterZone = options.zones[i];
                        clusterZone.zoneIndex = i;
                        zoneOptions = options.zones[i].marker;
                        clusterZoneClassName = options.zones[i].className;
                    }
                }
            }
            clusterTempPos = getClusterPosition(points);
            if (options.layoutAlgorithm.type === 'grid' &&
                !options.allowOverlap) {
                marker = series.options.marker || {};
                clusterPos = series.preventClusterCollisions({
                    x: clusterTempPos.x,
                    y: clusterTempPos.y,
                    key: k,
                    groupedData: groupedData,
                    gridSize: series.getScaledGridSize(options.layoutAlgorithm),
                    defaultRadius: marker.radius || 3 + (marker.lineWidth || 0),
                    clusterRadius: zoneOptions?.radius ??
                        options.marker?.radius ??
                        clusterDefaults.marker.radius ??
                        0
                });
            }
            else {
                clusterPos = {
                    x: clusterTempPos.x,
                    y: clusterTempPos.y
                };
            }
            for (let i = 0; i < pointsLen; i++) {
                points[i].parentStateId = stateId;
            }
            clusters.push({
                x: clusterPos.x,
                y: clusterPos.y,
                id: k,
                stateId,
                index,
                data: points,
                clusterZone,
                clusterZoneClassName
            });
            groupedXData.push(clusterPos.x);
            groupedYData.push(clusterPos.y);
            groupMap.push({
                options: {
                    formatPrefix: 'cluster',
                    dataLabels: options.dataLabels,
                    marker: merge(options.marker, {
                        states: options.states
                    }, zoneOptions || {})
                }
            });
            // Save cluster data points options.
            if (data?.length) {
                for (let i = 0; i < pointsLen; i++) {
                    if (isObject(data[points[i].dataIndex])) {
                        points[i].options = data[points[i].dataIndex];
                    }
                }
            }
            index++;
            zoneOptions = null;
        }
        else {
            for (let i = 0; i < groupedData[k].length; i++) {
                // Points not belonging to any cluster.
                point = groupedData[k][i];
                stateId = getStateId();
                pointOptions = null;
                pointUserOptions = data?.[point.dataIndex];
                groupedXData.push(point.x);
                groupedYData.push(point.y);
                point.parentStateId = stateId;
                noise.push({
                    x: point.x,
                    y: point.y,
                    id: k,
                    stateId,
                    index,
                    data: groupedData[k]
                });
                if (pointUserOptions &&
                    typeof pointUserOptions === 'object' &&
                    !isArray(pointUserOptions)) {
                    pointOptions = merge(pointUserOptions, { x: point.x, y: point.y });
                }
                else {
                    pointOptions = {
                        userOptions: pointUserOptions,
                        x: point.x,
                        y: point.y
                    };
                }
                groupMap.push({ options: pointOptions });
                index++;
            }
        }
    }
    return {
        clusters,
        noise,
        groupedXData,
        groupedYData,
        groupMap
    };
}
/**
 * Resolve plot offsets for clustering calculations.
 * @internal
 */
function seriesGetGridOffset() {
    const series = this, { chart, xAxis, yAxis } = series;
    let plotLeft = 0, plotTop = 0;
    if (xAxis && series.dataMinX && series.dataMaxX) {
        plotLeft = xAxis.reversed ?
            xAxis.toPixels(series.dataMaxX) : xAxis.toPixels(series.dataMinX);
    }
    else {
        plotLeft = chart.plotLeft;
    }
    if (yAxis && series.dataMinY && series.dataMaxY) {
        plotTop = yAxis.reversed ?
            yAxis.toPixels(series.dataMinY) : yAxis.toPixels(series.dataMaxY);
    }
    else {
        plotTop = chart.plotTop;
    }
    return { plotLeft, plotTop };
}
/**
 * Point state used when animation is enabled to compare and bind old points
 * with new ones.
 * @internal
 */
function seriesGetPointsState(clusteredData, oldMarkerClusterInfo, dataLength) {
    const oldDataStateArr = oldMarkerClusterInfo ?
        getDataState(oldMarkerClusterInfo, dataLength) : [], newDataStateArr = getDataState(clusteredData, dataLength), state = {};
    // Clear global array before populate with new ids.
    oldPointsStateId = [];
    // Build points state structure.
    clusteredData.clusters.forEach((cluster) => {
        state[cluster.stateId] = {
            x: cluster.x,
            y: cluster.y,
            id: cluster.stateId,
            point: cluster.point,
            parentsId: []
        };
    });
    clusteredData.noise.forEach((noise) => {
        state[noise.stateId] = {
            x: noise.x,
            y: noise.y,
            id: noise.stateId,
            point: noise.point,
            parentsId: []
        };
    });
    let newState, oldState;
    // Bind new and old state.
    for (let i = 0; i < newDataStateArr.length; i++) {
        newState = newDataStateArr[i];
        oldState = oldDataStateArr[i];
        if (newState?.parentStateId &&
            oldState?.parentStateId &&
            state[newState.parentStateId]?.parentsId.indexOf(oldState.parentStateId) === -1) {
            state[newState.parentStateId].parentsId.push(oldState.parentStateId);
            if (oldPointsStateId.indexOf(oldState.parentStateId) === -1) {
                oldPointsStateId.push(oldState.parentStateId);
            }
        }
    }
    return state;
}
/**
 * Resolve the real extremes for the cluster calculations.
 * @internal
 */
function seriesGetRealExtremes() {
    const chart = this.chart, x = chart.mapView ? 0 : chart.plotLeft, y = chart.mapView ? 0 : chart.plotTop, p1 = pixelsToValues(this, {
        x,
        y
    }), p2 = pixelsToValues(this, {
        x: x + chart.plotWidth,
        y: x + chart.plotHeight
    }), realMinX = p1.x, realMaxX = p2.x, realMinY = p1.y, realMaxY = p2.y;
    return {
        minX: Math.min(realMinX, realMaxX),
        maxX: Math.max(realMinX, realMaxX),
        minY: Math.min(realMinY, realMaxY),
        maxY: Math.max(realMinY, realMaxY)
    };
}
/**
 * Normalize grid size based on the current scale.
 * @internal
 */
function seriesGetScaledGridSize(options) {
    const series = this, xAxis = series.xAxis, mapView = series.chart.mapView, processedGridSize = Number(options.processedGridSize ??
        relativeLength(options.gridSize || clusterDefaults.layoutAlgorithm.gridSize, series.chart.plotWidth));
    let search = true, k = 1, divider = 1;
    if (!series.gridValueSize) {
        if (mapView) {
            series.gridValueSize = processedGridSize / mapView.getScale();
        }
        else {
            series.gridValueSize = Math.abs(xAxis.toValue(processedGridSize) - xAxis.toValue(0));
        }
    }
    const gridSize = mapView ?
        series.gridValueSize * mapView.getScale() :
        xAxis.toPixels(series.gridValueSize) - xAxis.toPixels(0);
    const scale = +(processedGridSize / gridSize).toFixed(14);
    // Find the level and its divider.
    while (search && scale !== 1) {
        const level = Math.pow(2, k);
        if (scale > 0.75 && scale < 1.25) {
            search = false;
        }
        else if (scale >= (1 / level) && scale < 2 * (1 / level)) {
            search = false;
            divider = level;
        }
        else if (scale <= level && scale > level / 2) {
            search = false;
            divider = 1 / level;
        }
        k++;
    }
    return (processedGridSize / divider) / scale;
}
/**
 * Hide clustered data points.
 * @internal
 */
function seriesHideClusteredData() {
    const clusteredSeriesData = this.markerClusterSeriesData, oldState = this.markerClusterInfo?.pointsState?.oldState, oldPointsId = oldPointsStateId.map((elem) => oldState?.[elem].point?.id || '');
    clusteredSeriesData?.forEach((point) => {
        // If an old point is used in animation hide it, otherwise destroy.
        if (point &&
            oldPointsId.indexOf(point.id) !== -1) {
            if (point.graphic) {
                point.graphic.hide();
            }
            if (point.dataLabel) {
                point.dataLabel.hide();
            }
        }
        else {
            point?.destroy?.();
        }
    });
}
/**
 * Check if user algorithm result is valid groupedDataObject.
 * @internal
 */
function seriesIsValidGroupedDataObject(groupedData) {
    let result = false;
    if (!isObject(groupedData)) {
        return false;
    }
    objectEach(groupedData, (elem) => {
        result = true;
        if (!isArray(elem) || !elem.length) {
            result = false;
            return;
        }
        for (let i = 0; i < elem.length; i++) {
            if (!isObject(elem[i]) || (!elem[i].x || !elem[i].y)) {
                result = false;
                return;
            }
        }
    });
    return result;
}
/**
 * Resolve a collision-free cluster position.
 * @internal
 */
function seriesPreventClusterCollisions(props) {
    const series = this, [gridY, gridX] = props.key.split(':').map(parseFloat), gridSize = props.gridSize, groupedData = props.groupedData, defaultRadius = props.defaultRadius, clusterRadius = props.clusterRadius, gridXPx = gridX * gridSize, gridYPx = gridY * gridSize, propsPx = valuesToPixels(series, props), gridsToCheckCollision = [], clusterMarkerOptions = series.options.cluster?.marker, zoneOptions = series.options.cluster?.zones, gridOffset = series.getGridOffset();
    let xPixel = propsPx.x, yPixel = propsPx.y, pointsLen = 0, radius = 0, nextXPixel, nextYPixel, signX, signY, cornerGridX, cornerGridY, j, itemX, itemY, nextClusterPos, maxDist, keys;
    // Distance to the grid start.
    xPixel -= gridOffset.plotLeft;
    yPixel -= gridOffset.plotTop;
    for (let i = 1; i < 5; i++) {
        signX = i % 2 ? -1 : 1;
        signY = i < 3 ? -1 : 1;
        cornerGridX = Math.floor((xPixel + signX * clusterRadius) / gridSize);
        cornerGridY = Math.floor((yPixel + signY * clusterRadius) / gridSize);
        keys = [
            cornerGridY + ':' + cornerGridX,
            cornerGridY + ':' + gridX,
            gridY + ':' + cornerGridX
        ];
        for (j = 0; j < keys.length; j++) {
            if (gridsToCheckCollision.indexOf(keys[j]) === -1 &&
                keys[j] !== props.key) {
                gridsToCheckCollision.push(keys[j]);
            }
        }
    }
    for (const item of gridsToCheckCollision) {
        if (groupedData[item]) {
            // Cluster or noise position is already computed.
            if (!groupedData[item].posX) {
                nextClusterPos = getClusterPosition(groupedData[item]);
                groupedData[item].posX = nextClusterPos.x;
                groupedData[item].posY = nextClusterPos.y;
            }
            const pos = valuesToPixels(series, {
                x: groupedData[item].posX || 0,
                y: groupedData[item].posY || 0
            });
            nextXPixel = pos.x - gridOffset.plotLeft;
            nextYPixel = pos.y - gridOffset.plotTop;
            [itemY, itemX] = item.split(':').map(parseFloat);
            if (zoneOptions) {
                pointsLen = groupedData[item].length;
                for (let i = 0; i < zoneOptions.length; i++) {
                    if (pointsLen >= zoneOptions[i].from &&
                        pointsLen <= zoneOptions[i].to) {
                        if (defined(zoneOptions[i].marker?.radius)) {
                            radius = zoneOptions[i].marker.radius || 0;
                        }
                        else if (clusterMarkerOptions?.radius) {
                            radius = clusterMarkerOptions.radius;
                        }
                        else {
                            radius = clusterDefaults.marker.radius ?? 0;
                        }
                    }
                }
            }
            if (groupedData[item].length > 1 &&
                radius === 0 &&
                clusterMarkerOptions?.radius) {
                radius = clusterMarkerOptions.radius;
            }
            else if (groupedData[item].length === 1) {
                radius = defaultRadius;
            }
            maxDist = clusterRadius + radius;
            radius = 0;
            if (itemX !== gridX &&
                Math.abs(xPixel - nextXPixel) < maxDist) {
                xPixel = itemX - gridX < 0 ? gridXPx + clusterRadius :
                    gridXPx + gridSize - clusterRadius;
            }
            if (itemY !== gridY &&
                Math.abs(yPixel - nextYPixel) < maxDist) {
                yPixel = itemY - gridY < 0 ? gridYPx + clusterRadius :
                    gridYPx + gridSize - clusterRadius;
            }
        }
    }
    const pos = pixelsToValues(series, {
        x: xPixel + gridOffset.plotLeft,
        y: yPixel + gridOffset.plotTop
    });
    groupedData[props.key].posX = pos.x;
    groupedData[props.key].posY = pos.y;
    return pos;
}
/**
 * Util function.
 * @internal
 */
function valuesToPixels(series, pos) {
    const { chart, xAxis, yAxis } = series;
    if (chart.mapView) {
        return chart.mapView.projectedUnitsToPixels(pos);
    }
    return {
        x: xAxis ? xAxis.toPixels(pos.x) : 0,
        y: yAxis ? yAxis.toPixels(pos.y) : 0
    };
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const MarkerClusterScatter = {
    compose
};
/** @internal */
/* harmony default export */ const MarkerClusters_MarkerClusterScatter = (MarkerClusterScatter);

;// ./code/es-modules/Extensions/MarkerClusters/MarkerClusters.js
/* *
 *
 *  Marker clusters module.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Wojciech Chmiel
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { animObject: MarkerClusters_animObject } = (external_highcharts_src_js_default_default());

const { defaultOptions } = (external_highcharts_src_js_default_default());

const { composed } = (external_highcharts_src_js_default_default());




/* *
 *
 *  Constants
 *
 * */
(defaultOptions.plotOptions || {}).series = merge((defaultOptions.plotOptions || {}).series, MarkerClusters_MarkerClusterDefaults);
/* *
 *
 *  Functions
 *
 * */
/**
 * Compose marker cluster module hooks.
 * @internal
 */
function MarkerClusters_compose(AxisClass, ChartClass, highchartsDefaultOptions, SeriesClass) {
    if (pushUnique(composed, 'MarkerClusters')) {
        const PointClass = SeriesClass.prototype.pointClass, { scatter: ScatterSeries } = SeriesClass.types;
        addEvent(AxisClass, 'setExtremes', onAxisSetExtremes);
        addEvent(ChartClass, 'render', onChartRender);
        addEvent(PointClass, 'drillToCluster', MarkerClusters_onPointDrillToCluster);
        addEvent(PointClass, 'update', onPointUpdate);
        addEvent(SeriesClass, 'afterRender', onSeriesAfterRender);
        if (ScatterSeries) {
            MarkerClusters_MarkerClusterScatter
                .compose(highchartsDefaultOptions, ScatterSeries);
        }
    }
}
/**
 * Destroy the old tooltip after zoom.
 * @internal
 */
function onAxisSetExtremes() {
    const chart = this.chart;
    let animationDuration = 0;
    for (const series of chart.series) {
        if (series.markerClusterInfo) {
            const clusterOptions = series.options.cluster;
            animationDuration = (MarkerClusters_animObject((clusterOptions || {}).animation).duration ||
                0);
        }
    }
    syncTimeout(() => {
        if (chart.tooltip) {
            chart.tooltip.destroy();
        }
    }, animationDuration);
}
/**
 * Handle animation.
 * @internal
 */
function onChartRender() {
    const chart = this;
    for (const series of (chart.series || [])) {
        if (series.markerClusterInfo) {
            const clusterOptions = series.options.cluster, pointsState = (series.markerClusterInfo || {}).pointsState, oldState = (pointsState || {}).oldState;
            if ((clusterOptions || {}).animation &&
                series.markerClusterInfo &&
                (series.chart.pointer?.pinchDown || []).length === 0 &&
                ((series.xAxis || {}).eventArgs || {}).trigger !== 'pan' &&
                oldState &&
                Object.keys(oldState).length) {
                for (const cluster of series.markerClusterInfo.clusters) {
                    series.animateClusterPoint(cluster);
                }
                for (const noise of series.markerClusterInfo.noise) {
                    series.animateClusterPoint(noise);
                }
            }
        }
    }
}
/**
 * Handle drill-to-cluster event.
 * @internal
 */
function MarkerClusters_onPointDrillToCluster(event) {
    const point = event.point || event.target, series = point.series, clusterOptions = series.options.cluster, onDrillToCluster = ((clusterOptions || {}).events || {}).drillToCluster;
    if (isFunction(onDrillToCluster)) {
        onDrillToCluster.call(this, event);
    }
}
/**
 * Override point prototype to throw a warning when trying to update
 * clustered point.
 * @internal
 */
function onPointUpdate() {
    const point = this;
    if (point.dataGroup) {
        (0,external_highcharts_src_js_default_namespaceObject.error)('Highcharts marker-clusters module: ' +
            'Running `Point.update` when point belongs to clustered series' +
            ' is not supported.', false, point.series.chart);
        return false;
    }
}
/**
 * Add classes, change mouse cursor.
 * @internal
 */
function onSeriesAfterRender() {
    const series = this, clusterZoomEnabled = (series.options.cluster || {})
        .drillToCluster;
    if (series.markerClusterInfo && series.markerClusterInfo.clusters) {
        for (const cluster of series.markerClusterInfo.clusters) {
            if (cluster.point && cluster.point.graphic) {
                cluster.point.graphic.addClass('highcharts-cluster-point');
                // Change cursor to pointer when drillToCluster is enabled.
                if (clusterZoomEnabled && cluster.point) {
                    cluster.point.graphic.css({
                        cursor: 'pointer'
                    });
                    if (cluster.point.dataLabel) {
                        cluster.point.dataLabel.css({
                            cursor: 'pointer'
                        });
                    }
                }
                if (defined(cluster.clusterZone)) {
                    cluster.point.graphic.addClass(cluster.clusterZoneClassName ||
                        'highcharts-cluster-zone-' +
                            cluster.clusterZone.zoneIndex);
                }
            }
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const MarkerClusters = {
    compose: MarkerClusters_compose
};
/** @internal */
/* harmony default export */ const MarkerClusters_MarkerClusters = (MarkerClusters);
/* *
 *
 *  API Options
 *
 * */
/**
 * Function callback when a cluster is clicked.
 *
 * @callback Highcharts.MarkerClusterDrillCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        The point where the event occurred.
 *
 * @param {Highcharts.PointClickEventObject} event
 *        Event arguments.
 */
''; // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/MarkerClusters/MarkerClusterSymbols.js
/* *
 *
 *  Marker clusters module.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Wojciech Chmiel
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/* *
 *
 *  Variables
 *
 * */
let symbols;
/* *
 *
 *  Functions
 *
 * */
/**
 * Cluster symbol.
 * @internal
 */
function MarkerClusterSymbols_cluster(x, y, width, height) {
    const w = width / 2, h = height / 2, outerWidth = 1, space = 1, inner = symbols.arc(x + w, y + h, w - space * 4, h - space * 4, {
        start: Math.PI * 0.5,
        end: Math.PI * 2.5,
        open: false
    }), outer1 = symbols.arc(x + w, y + h, w - space * 3, h - space * 3, {
        start: Math.PI * 0.5,
        end: Math.PI * 2.5,
        innerR: w - outerWidth * 2,
        open: false
    }), outer2 = symbols.arc(x + w, y + h, w - space, h - space, {
        start: Math.PI * 0.5,
        end: Math.PI * 2.5,
        innerR: w,
        open: false
    });
    return outer2.concat(outer1, inner);
}
/**
 * Register marker cluster symbols.
 * @internal
 */
function MarkerClusterSymbols_compose(SVGRendererClass) {
    symbols = SVGRendererClass.prototype.symbols;
    symbols.cluster = MarkerClusterSymbols_cluster;
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const MarkerClusterSymbols = {
    compose: MarkerClusterSymbols_compose
};
/** @internal */
/* harmony default export */ const MarkerClusters_MarkerClusterSymbols = (MarkerClusterSymbols);

;// ./code/es-modules/masters/modules/marker-clusters.src.js





const G = (external_highcharts_src_js_default_default());
MarkerClusters_MarkerClusters.compose(G.Axis, G.Chart, G.defaultOptions, G.Series);
MarkerClusters_MarkerClusterSymbols.compose(G.SVGRenderer);
/* harmony default export */ const marker_clusters_src = ((external_highcharts_src_js_default_default()));

export { marker_clusters_src as default };
