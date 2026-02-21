/**
 * @license Highmaps JS v12.5.0-modified (2026-02-21)
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

;// external ["../highcharts.src.js","default","SVGRenderer"]
const external_highcharts_src_js_default_SVGRenderer_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SVGRenderer;
var external_highcharts_src_js_default_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGRenderer_namespaceObject);
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
const { diffObjects, error, extend, merge, normalizeTickInterval } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
class ContourSeries extends ScatterSeries {
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
            error(36, false);
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
/* harmony default export */ const Contour_ContourSeries = ((/* unused pure expression or super */ null && (ContourSeries)));
function cross(x, y, w, h) {
    return [
        ['M', x, y],
        ['L', x + w, y + h],
        ['M', x + w, y],
        ['L', x, y + h],
        ['z']
    ];
}
(external_highcharts_src_js_default_SVGRenderer_default()).prototype.symbols.cross = cross;
extend(ContourSeries.prototype, {
    pointClass: Contour_ContourPoint,
    pointArrayMap: ['y', 'value'],
    keysAffectYAxis: ['y'],
    invertible: false
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('contour', ContourSeries);

;// ./code/es-modules/masters/modules/contour.src.js





/* harmony default export */ const contour_src = ((external_highcharts_src_js_default_default()));

export { contour_src as default };
