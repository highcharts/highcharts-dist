// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.2 (2026-08-27)
 * @module highcharts/modules/dependency-wheel
 * @requires highcharts
 * @requires highcharts/modules/sankey
 *
 * Dependency wheel module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGElement"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/dependency-wheel", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SeriesRegistry"],amd1["SVGElement"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/dependency-wheel"] = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGElement"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["SVGElement"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__28__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 28
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ },

/***/ 512
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ },

/***/ 944
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
let __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dependency_wheel_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Extensions/BorderRadius.js
/* unused harmony import specifier */ var relativeLength;
/* unused harmony import specifier */ var isObject;
/* unused harmony import specifier */ var extend;
/* unused harmony import specifier */ var addEvent;
/* *
 *
 *  Highcharts Border Radius module
 *
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { defaultOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { noop } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

/* *
 *
 *  Constants
 *
 * */
const defaultBorderRadiusOptions = {
    radius: 0,
    scope: 'stack',
    where: void 0
};
/* *
 *
 *  Variables
 *
 * */
let oldArc = (/* unused pure expression or super */ null && (noop));
let oldRoundedRect = (/* unused pure expression or super */ null && (noop));
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function applyBorderRadius(path, i, r) {
    const a = path[i];
    let b = path[i + 1];
    if (b[0] === 'Z') {
        b = path[0];
    }
    let line, arc, fromLineToArc;
    // From straight line to arc
    if ((a[0] === 'M' || a[0] === 'L') && b[0] === 'A') {
        line = a;
        arc = b;
        fromLineToArc = true;
        // From arc to straight line
    }
    else if (a[0] === 'A' && (b[0] === 'M' || b[0] === 'L')) {
        line = b;
        arc = a;
    }
    if (line && arc && arc.params) {
        const bigR = arc[1], 
        // In our use cases, outer pie slice arcs are clockwise and inner
        // arcs (donut/sunburst etc) are anti-clockwise
        clockwise = arc[5], params = arc.params, { start, end, cx, cy } = params;
        // Some geometric constants
        const relativeR = clockwise ? (bigR - r) : (bigR + r), 
        // The angle, on the big arc, that the border radius arc takes up
        angleOfBorderRadius = relativeR ? Math.asin(r / relativeR) : 0, angleOffset = clockwise ?
            angleOfBorderRadius :
            -angleOfBorderRadius, 
        // The distance along the radius of the big arc to the starting
        // point of the small border radius arc
        distanceBigCenterToStartArc = (Math.cos(angleOfBorderRadius) *
            relativeR);
        // From line to arc
        if (fromLineToArc) {
            // Update the cache
            params.start = start + angleOffset;
            // First move to the start position at the radial line. We want to
            // start one borderRadius closer to the center.
            line[1] = cx + distanceBigCenterToStartArc * Math.cos(start);
            line[2] = cy + distanceBigCenterToStartArc * Math.sin(start);
            // Now draw an arc towards the point where the small circle touches
            // the great circle.
            path.splice(i + 1, 0, [
                'A',
                r,
                r,
                0, // Slanting,
                0, // Long arc
                1, // Clockwise
                cx + bigR * Math.cos(params.start),
                cy + bigR * Math.sin(params.start)
            ]);
            // From arc to line
        }
        else {
            // Update the cache
            params.end = end - angleOffset;
            // End the big arc a bit earlier
            arc[6] = cx + bigR * Math.cos(params.end);
            arc[7] = cy + bigR * Math.sin(params.end);
            // Draw a small arc towards a point on the end angle, but one
            // borderRadius closer to the center relative to the perimeter.
            path.splice(i + 1, 0, [
                'A',
                r,
                r,
                0,
                0,
                1,
                cx + distanceBigCenterToStartArc * Math.cos(end),
                cy + distanceBigCenterToStartArc * Math.sin(end)
            ]);
        }
        // Long or short arc must be reconsidered because we have modified the
        // start and end points
        arc[4] = Math.abs(params.end - params.start) < Math.PI ? 0 : 1;
    }
}
/**
 * Extend arc with borderRadius.
 * @internal
 */
function arc(x, y, w, h, options = {}) {
    const path = oldArc(x, y, w, h, options), { brStart = true, brEnd = true, innerR = 0, r = w, start = 0, end = 0 } = options;
    if (options.open || !options.borderRadius) {
        return path;
    }
    const alpha = end - start, sinHalfAlpha = Math.sin(alpha / 2), borderRadius = Math.max(Math.min(relativeLength(borderRadiusObject(options.borderRadius).radius, r - innerR), 
    // Cap to half the sector radius
    (r - innerR) / 2, 
    // For smaller pie slices, cap to the largest small circle that
    // can be fitted within the sector
    (r * sinHalfAlpha) / (1 + sinHalfAlpha)), 0), 
    // For the inner radius, we need an extra cap because the inner arc
    // is shorter than the outer arc
    innerBorderRadius = Math.min(borderRadius, 2 * (alpha / Math.PI) * innerR);
    // Apply turn-by-turn border radius. Start at the end since we're
    // splicing in arc segments.
    let i = path.length - 1;
    while (i--) {
        if ((!brStart && (i === 0 || i === 3)) ||
            (!brEnd && (i === 1 || i === 2))) {
            continue;
        }
        applyBorderRadius(path, i, i > 1 ? innerBorderRadius : borderRadius);
    }
    return path;
}
/** @internal */
function seriesOnAfterColumnTranslate() {
    if (this.options.borderRadius &&
        !(this.chart.is3d && this.chart.is3d())) {
        const { options, yAxis } = this, percent = options.stacking === 'percent', seriesDefault = defaultOptions.plotOptions?.[this.type]
            ?.borderRadius, borderRadius = borderRadiusObject(options.borderRadius, isObject(seriesDefault) ? seriesDefault : {}), reversed = yAxis.options.reversed;
        for (const point of this.points) {
            const { shapeArgs } = point;
            if (point.shapeType === 'roundedRect' && shapeArgs) {
                const { width = 0, height = 0, y = 0 } = shapeArgs;
                let brBoxY = y, brBoxHeight = height;
                // It would be nice to refactor StackItem.getStackBox/
                // setOffset so that we could get a reliable box out of
                // it. Currently it is close if we remove the label
                // offset, but we still need to run crispCol and also
                // flip it if inverted, so atm it is simpler to do it
                // like the below.
                if (borderRadius.scope === 'stack' &&
                    point.stackTotal) {
                    const stackEnd = yAxis.translate(percent ? 100 : point.stackTotal, false, true, false, true), stackThreshold = yAxis.translate(options.threshold || 0, false, true, false, true), box = this.crispCol(0, Math.min(stackEnd, stackThreshold), 0, Math.abs(stackEnd - stackThreshold));
                    brBoxY = box.y;
                    brBoxHeight = box.height;
                }
                const flip = (point.negative ? -1 : 1) *
                    (reversed ? -1 : 1) === -1;
                // Handle the where option
                let where = borderRadius.where;
                // Waterfall, hanging columns should have rounding on
                // all sides
                if (!where &&
                    this.is('waterfall') &&
                    Math.abs((point.yBottom || 0) -
                        (this.translatedThreshold || 0)) > this.borderWidth) {
                    where = 'all';
                }
                if (!where) {
                    where = 'end';
                }
                // Get the radius
                const r = Math.min(relativeLength(borderRadius.radius, width), width / 2, 
                // Cap to the height, but not if where is `end`
                where === 'all' ? brBoxHeight / 2 : Infinity) || 0;
                // If the `where` option is 'end', cut off the
                // rectangles by making the border-radius box one r
                // greater, so that the imaginary radius falls outside
                // the rectangle.
                if (where === 'end') {
                    if (flip) {
                        brBoxY -= r;
                        brBoxHeight += r;
                    }
                    else {
                        brBoxHeight += r;
                    }
                }
                extend(shapeArgs, { brBoxHeight, brBoxY, r });
            }
        }
    }
}
/** @internal */
function composeBorderRadius(SeriesClass, SVGElementClass, SVGRendererClass) {
    const PieSeriesClass = SeriesClass.types.pie;
    if (!SVGElementClass.symbolCustomAttribs.includes('borderRadius')) {
        const symbols = SVGRendererClass.prototype.symbols;
        addEvent(SeriesClass, 'afterColumnTranslate', seriesOnAfterColumnTranslate, {
            // After columnrange and polar column modifications
            order: 9
        });
        addEvent(PieSeriesClass, 'afterTranslate', pieSeriesOnAfterTranslate);
        SVGElementClass.symbolCustomAttribs.push('borderRadius', 'brBoxHeight', 'brBoxY', 'brEnd', 'brStart');
        oldArc = symbols.arc;
        oldRoundedRect = symbols.roundedRect;
        symbols.arc = arc;
        symbols.roundedRect = roundedRect;
    }
}
/**
 * Utility function to get the full border radius options object, from a simple
 * number or a partial options object.
 * @internal
 */
function borderRadiusObject(options, seriesBROptions) {
    if (!(0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.isObject)(options)) {
        options = { radius: options || 0 };
    }
    return (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.merge)(defaultBorderRadiusOptions, seriesBROptions, options);
}
/** @internal */
function pieSeriesOnAfterTranslate() {
    const borderRadius = borderRadiusObject(this.options.borderRadius);
    for (const point of this.points) {
        const shapeArgs = point.shapeArgs;
        if (shapeArgs) {
            shapeArgs.borderRadius = relativeLength(borderRadius.radius, (shapeArgs.r || 0) - ((shapeArgs.innerR) || 0));
        }
    }
}
/**
 * Extend roundedRect with individual cutting through rOffset.
 * @internal
 */
function roundedRect(x, y, width, height, options = {}) {
    const path = oldRoundedRect(x, y, width, height, options), { r = 0, brBoxHeight = height, brBoxY = y } = options, brOffsetTop = y - brBoxY, brOffsetBtm = (brBoxY + brBoxHeight) - (y + height), 
    // When the distance to the border-radius box is greater than the r
    // itself, it means no border radius. The -0.1 accounts for float
    // rounding errors.
    rTop = (brOffsetTop - r) > -0.1 ? 0 : r, rBtm = (brOffsetBtm - r) > -0.1 ? 0 : r, cutTop = Math.max(rTop && brOffsetTop, 0), cutBtm = Math.max(rBtm && brOffsetBtm, 0);
    /*

    The naming of control points:

      / a -------- b \
     /                \
    h                  c
    |                  |
    |                  |
    |                  |
    g                  d
     \                /
      \ f -------- e /

    */
    const a = [x + rTop, y], b = [x + width - rTop, y], c = [x + width, y + rTop], d = [
        x + width, y + height - rBtm
    ], e = [
        x + width - rBtm,
        y + height
    ], f = [x + rBtm, y + height], g = [x, y + height - rBtm], h = [x, y + rTop];
    const applyPythagoras = (r, altitude) => Math.sqrt(Math.pow(r, 2) - Math.pow(altitude, 2));
    // Inside stacks, cut off part of the top
    if (cutTop) {
        const base = applyPythagoras(rTop, rTop - cutTop);
        a[0] -= base;
        b[0] += base;
        c[1] = h[1] = y + rTop - cutTop;
    }
    // Column is lower than the radius. Cut off bottom inside the top
    // radius.
    if (height < rTop - cutTop) {
        const base = applyPythagoras(rTop, rTop - cutTop - height);
        c[0] = d[0] = x + width - rTop + base;
        e[0] = Math.min(c[0], e[0]);
        f[0] = Math.max(d[0], f[0]);
        g[0] = h[0] = x + rTop - base;
        c[1] = h[1] = y + height;
    }
    // Inside stacks, cut off part of the bottom
    if (cutBtm) {
        const base = applyPythagoras(rBtm, rBtm - cutBtm);
        e[0] += base;
        f[0] -= base;
        d[1] = g[1] = y + height - rBtm + cutBtm;
    }
    // Cut off top inside the bottom radius
    if (height < rBtm - cutBtm) {
        const base = applyPythagoras(rBtm, rBtm - cutBtm - height);
        c[0] = d[0] = x + width - rBtm + base;
        b[0] = Math.min(c[0], b[0]);
        a[0] = Math.max(d[0], a[0]);
        g[0] = h[0] = x + rBtm - base;
        d[1] = g[1] = y;
    }
    // Preserve the box for data labels
    path.length = 0;
    path.push(['M', ...a], 
    // Top side
    ['L', ...b], 
    // Top right corner
    ['A', rTop, rTop, 0, 0, 1, ...c], 
    // Right side
    ['L', ...d], 
    // Bottom right corner
    ['A', rBtm, rBtm, 0, 0, 1, ...e], 
    // Bottom side
    ['L', ...f], 
    // Bottom left corner
    ['A', rBtm, rBtm, 0, 0, 1, ...g], 
    // Left side
    ['L', ...h], 
    // Top left corner
    ['A', rTop, rTop, 0, 0, 1, ...a], ['Z']);
    return path;
}
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Detailed options for border radius.
 *
 * @sample  {highcharts} highcharts/plotoptions/column-borderradius/
 *          Rounded columns
 * @sample  highcharts/plotoptions/series-border-radius
 *          Column and pie with rounded border
 *
 * @interface Highcharts.BorderRadiusOptionsObject
 */ /**
* The border radius. A number signifies pixels. A percentage string, like for
* example `50%`, signifies a relative size. For columns this is relative to the
* column width, for pies it is relative to the radius and the inner radius.
*
* @sample  {highcharts} highcharts/plotoptions/column-borderradius/
*          Rounded columns
* @sample  highcharts/plotoptions/series-border-radius
*          Column and pie with rounded border
*
* @name Highcharts.BorderRadiusOptionsObject#radius
* @type {string|number|undefined}
*/ /**
* The scope of the rounding for column charts or plot bands. In a stacked
* column chart, the value `point` means each single point will get rounded
* corners. The value `stack` means the rounding will apply to the full
* stack, so that only points close to the top or bottom will receive
* rounding.
*
* Similarly, for plot bands, the `individual` value means each plot band
* will get rounded corners.
*
* @sample  {highcharts} highcharts/plotoptions/column-borderradius/
*          Rounded columns
*
* @name Highcharts.BorderRadiusOptionsObject#scope
* @type {"individual"|"point"|"stack"|undefined}
*/ /**
* For column charts, where in the point or stack to apply rounding. The `end`
* value means only those corners at the point value will be rounded, leaving
* the corners at the base or threshold unrounded. This is the most intuitive
* behavior. The `all` value means also the base will be rounded.
*
* @sample  {highcharts} highcharts/plotoptions/column-borderradius-where-all
*          Rounding on all corners
*
* @name Highcharts.BorderRadiusOptionsObject#where
* @type {"all"|"end"|undefined}
* @default end
*/
(''); // Keeps doclets above in JS file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/DependencyWheel/DependencyWheelPoint.js
/* *
 *
 *  Dependency wheel module
 *
 *  (c) 2018-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { sankey: { prototype: { pointClass: SankeyPoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

/* *
 *
 *  Class
 *
 * */
/** @internal */
class DependencyWheelPoint extends SankeyPoint {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Return the sum of incoming links wieght and outgoing links weightTo.
     * @internal
     */
    getSumTo() {
        let sum = 0;
        for (const link of this.linksFrom) {
            sum += link.weightTo || link.weight || 0;
        }
        for (const link of this.linksTo) {
            sum += link.weight || 0;
        }
        return sum;
    }
    /**
     * Return a text path that the data label uses.
     * @internal
     */
    getDataLabelPath(label) {
        const point = this, renderer = point.series.chart.renderer, shapeArgs = point.shapeArgs, upperHalf = point.angle < 0 || point.angle > Math.PI, start = shapeArgs.start || 0, end = shapeArgs.end || 0;
        // First time
        if (!point.dataLabelPath) {
            // Destroy the path with the label
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.wrap)(label, 'destroy', function (proceed) {
                if (point.dataLabelPath) {
                    point.dataLabelPath = point.dataLabelPath.destroy();
                }
                return proceed.call(this);
            });
            // Subsequent times
        }
        else {
            point.dataLabelPath = point.dataLabelPath.destroy();
            delete point.dataLabelPath;
        }
        // All times
        point.dataLabelPath = renderer
            .arc({
            open: true,
            longArc: Math.abs(Math.abs(start) - Math.abs(end)) < Math.PI ? 0 : 1
        })
            .attr({
            x: shapeArgs.x,
            y: shapeArgs.y,
            r: ((shapeArgs.r || 0) + (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pInt)(label.options?.distance || 0)),
            start: (upperHalf ? start : end),
            end: (upperHalf ? end : start),
            clockwise: +upperHalf
        })
            .add(renderer.defs);
        return point.dataLabelPath;
    }
    isValid() {
        // No null points here
        return true;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const DependencyWheel_DependencyWheelPoint = (DependencyWheelPoint);

;// ./code/es-modules/Series/DependencyWheel/DependencyWheelSeriesDefaults.js
/* *
 *
 *  Dependency wheel module
 *
 *  (c) 2018-2026 Highsoft AS
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
 * A dependency wheel chart is a type of flow diagram, where all nodes are laid
 * out in a circle, and the flow between the are drawn as link bands.
 *
 * @sample highcharts/demo/dependency-wheel/
 *         Dependency wheel
 *
 * @extends      plotOptions.sankey
 * @exclude      dataSorting, nodeAlignment, nodeDistance
 * @since        7.1.0
 * @product      highcharts
 * @requires     modules/sankey
 * @requires     modules/dependency-wheel
 * @optionparent plotOptions.dependencywheel
 */
const DependencyWheelSeriesDefaults = {
    /**
     * The corner radius of the border surrounding each node. A number
     * signifies pixels. A percentage string, like for example `50%`, signifies
     * a relative size. For nodes this is relative to the node width.
     *
     * @type    {number|string|Highcharts.BorderRadiusOptionsObject}
     * @default 3
     * @product highcharts
     * @since   11.0.0
     * @apioption plotOptions.dependencywheel.borderRadius
    */
    /**
     * Distance between the data label and the center of the node.
     *
     * @type      {number}
     * @default   0
     * @apioption plotOptions.dependencywheel.dataLabels.distance
     */
    /**
     * A format string for data labels of the links between nodes. Available
     * variables are the same as for `formatter`.
     *
     * @see [nodeFormat](#nodeFormat) for formatting node labels
     *
     * @apioption plotOptions.dependencywheel.dataLabels.format
     */
    /**
     * Callback to format data labels of the links between nodes. The `format`
     * option takes precedence over the `formatter` option.
     *
     * @see [nodeFormatter](#nodeFormatter) for formatting node labels
     *
     * @apioption plotOptions.dependencywheel.dataLabels.formatter
     */
    /**
     * The format string specifying what to show for nodes in the sankey
     * diagram. By default the nodeFormatter returns `{point.name}`. Available
     * variables are the same as for `nodeFormatter`.
     *
     * @apioption plotOptions.dependencywheel.dataLabels.nodeFormat
     */
    /**
     * Callback to format data labels of nodes in the dependency wheel. The
     * `nodeFormat` option takes precedence over the `nodeFormatter` option.
     *
     * @apioption plotOptions.dependencywheel.dataLabels.nodeFormatter
     */
    /**
     * Size of the wheel in pixel or percent relative to the canvas space.
     *
     * @type      {number|string}
     * @default   100%
     * @apioption plotOptions.dependencywheel.size
     */
    /**
     * The center of the wheel relative to the plot area. Can be
     * percentages or pixel values. The default behavior is to
     * center the wheel inside the plot area.
     *
     * @type    {Array<number|string|null>}
     * @default [null, null]
     * @product highcharts
     */
    center: [null, null],
    curveFactor: 0.6,
    /**
     * The start angle of the dependency wheel, in degrees where 0 is up.
     */
    startAngle: 0,
    dataLabels: {
        allowOverlap: true,
        textPath: {
            enabled: false,
            /**
             * @default { dy: 5 }
            */
            attributes: {
                /** @ignore */
                dy: 5
            }
        }
    },
    tooltip: {
        pointFormat: '{point.fromNode.name} \u2192 ' +
            '{point.toNode.name}: <b>{point.weight}</b><br/>' +
            '{#if point.weightTo}{point.toNode.name} \u2192 ' +
            '{point.fromNode.name}: <b>{point.weightTo}</b><br/>{/if}'
    }
};
/**
 * A `dependencywheel` series. If the [type](#series.dependencywheel.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.dependencywheel
 * @exclude   dataSorting
 * @product   highcharts
 * @requires  modules/sankey
 * @requires  modules/dependency-wheel
 * @apioption series.dependencywheel
 */
/**
 * A collection of options for the individual nodes. The nodes in a dependency
 * diagram are auto-generated instances of `Highcharts.Point`, but options can
 * be applied here and linked by the `id`.
 *
 * @extends   series.sankey.nodes
 * @type      {Array<*>}
 * @product   highcharts
 * @excluding offset
 * @apioption series.dependencywheel.nodes
 */
/**
 * An array of data points for the series. For the `dependencywheel` series
 * type, points can be given in the following way:
 *
 * An array of objects with named values. The following snippet shows only a
 * few settings, see the complete options set below. If the total number of data
 * points exceeds the series' [turboThreshold](#series.area.turboThreshold),
 * this option is not available.
 *
 *  ```js
 *     data: [{
 *         from: 'Category1',
 *         to: 'Category2',
 *         weight: 2,
 *         weightTo: 3
 *     }, {
 *         from: 'Category1',
 *         to: 'Category3',
 *         weight: 5,
 *         weightTo: 6
 *     }]
 *  ```
 *  When you provide the data as tuples, the keys option has to be set as well.
 *
 *  ```js
 *     keys: ['from', 'to', 'weight', 'weightTo'],
 *     data: [
 *         ['Category1', 'Category2', 2, 4],
 *         ['Category1', 'Category3', 5, 2]
 *     ]
 *  ```
 *
 * @sample {highcharts} highcharts/demo/dependency-wheel
 *         Dependency wheel
 * @sample {highcharts} highcharts/demo/chord-diagram
 *         Chord diagram
 *
 * @basic
 * @type      {Array<Array<string,string,number>|*>}
 * @extends   series.sankey.data
 * @product   highcharts
 * @excluding outgoing, dataLabels
 * @apioption series.dependencywheel.data
 */
/**
 * Individual data label for each node. The options are the same as
 * the ones for [series.dependencywheel.dataLabels](#series.dependencywheel.dataLabels).
 *
 * @apioption series.dependencywheel.nodes.dataLabels
 */
/**
 * The weight of the link from the node.
 *
 * @type      {number|null}
 * @product   highcharts
 * @apioption series.dependencywheel.data.weight
 */
/**
 * The weight of the link to the node.
 * When not specified, the `weight` is used.
 *
 * @type      {number|null}
 * @product   highcharts
 * @since     13.0.0
 * @apioption series.dependencywheel.data.weightTo
 */
''; // Keeps doclets above separate
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const DependencyWheel_DependencyWheelSeriesDefaults = (DependencyWheelSeriesDefaults);

;// ./code/es-modules/Series/Sankey/SankeyColumnComposition.js
/* *
 *
 *  Sankey diagram module
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
 *  Composition
 *
 * */
var SankeyColumnComposition;
(function (SankeyColumnComposition) {
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
     * SankeyColumn Composition
     * @private
     * @function Highcharts.SankeyColumn#compose
     *
     * @param {Array<SankeyPoint>} points
     * The array of nodes
     * @param {SankeySeries} series
     * Series connected to column
     * @return {ArrayComposition} SankeyColumnArray
     */
    function compose(points, series) {
        const sankeyColumnArray = points;
        sankeyColumnArray.sankeyColumn =
            new SankeyColumnAdditions(sankeyColumnArray, series);
        return sankeyColumnArray;
    }
    SankeyColumnComposition.compose = compose;
    /* *
     *
     *  Classes
     *
     * */
    class SankeyColumnAdditions {
        /* *
         *
         *  Constructor
         *
         * */
        constructor(points, series) {
            this.points = points;
            this.series = series;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Calculate translation factor used in column and nodes distribution
         * @private
         * @function Highcharts.SankeyColumn#getTranslationFactor
         *
         * @param {SankeySeries} series
         * The Series
         * @return {number} TranslationFactor
         * Translation Factor
         */
        getTranslationFactor(series) {
            const column = this.points, nodes = column.slice(), chart = series.chart, minLinkWidth = series.options.minLinkWidth || 0;
            let skipPoint, factor = 0, i, remainingHeight = ((chart.plotSizeY || 0) -
                (series.options.borderWidth || 0) -
                (column.length - 1) * series.nodePadding);
            // Because the minLinkWidth option doesn't obey the direct
            // translation, we need to run translation iteratively, check
            // node heights, remove those nodes affected by minLinkWidth,
            // check again, etc.
            while (column.length) {
                factor = remainingHeight / column.sankeyColumn.sum();
                skipPoint = false;
                i = column.length;
                while (i--) {
                    if (column[i].getSum() * factor < minLinkWidth) {
                        column.splice(i, 1);
                        remainingHeight =
                            Math.max(0, remainingHeight - minLinkWidth);
                        skipPoint = true;
                    }
                }
                if (!skipPoint) {
                    break;
                }
            }
            // Re-insert original nodes
            column.length = 0;
            for (const node of nodes) {
                column.push(node);
            }
            return factor;
        }
        /**
         * Get the top position of the column in pixels
         * @private
         * @function Highcharts.SankeyColumn#top
         *
         * @param {number} factor
         * The Translation Factor
         * @return {number} top
         * The top position of the column
         */
        top(factor) {
            const series = this.series, nodePadding = series.nodePadding, height = this.points.reduce((height, node) => {
                if (height > 0) {
                    height += nodePadding;
                }
                const nodeHeight = Math.max(node.getSum() * factor, series.options.minLinkWidth || 0);
                height += nodeHeight;
                return height;
            }, 0);
            // Node alignment option handling #19096
            return (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.getAlignFactor)(series.options.nodeAlignment || 'center') * ((series.chart.plotSizeY || 0) - height);
        }
        /**
         * Get the left position of the column in pixels
         * @private
         * @function Highcharts.SankeyColumn#top
         *
         * @param {number} factor
         * The Translation Factor
         * @return {number} left
         * The left position of the column
         */
        left(factor) {
            const series = this.series, chart = series.chart, equalNodes = series.options.equalNodes, maxNodesLength = (chart.inverted ? chart.plotHeight : chart.plotWidth), nodePadding = series.nodePadding, width = this.points.reduce((width, node) => {
                if (width > 0) {
                    width += nodePadding;
                }
                const nodeWidth = equalNodes ?
                    maxNodesLength / node.series.nodes.length -
                        nodePadding :
                    Math.max(node.getSum() * factor, series.options.minLinkWidth || 0);
                width += nodeWidth;
                return width;
            }, 0);
            return ((chart.plotSizeX || 0) - Math.round(width)) / 2;
        }
        /**
         * Calculate sum of all nodes inside specific column
         * @private
         */
        sum() {
            return this.points.reduce((sum, node) => (sum + node.getSum()), 0);
        }
        /**
         * Get the offset in pixels of a node inside the column
         * @private
         * @function Highcharts.SankeyColumn#offset
         *
         * @param {SankeyPoint} node
         * Sankey node
         * @param {number} factor
         * Translation Factor
         * @return {number} offset
         * Offset of a node inside column
         */
        offset(node, factor) {
            const column = this.points, series = this.series, nodePadding = series.nodePadding;
            let offset = 0, totalNodeOffset;
            if (series.is('organization') && node.hangsFrom) {
                return {
                    absoluteTop: node.hangsFrom.nodeY
                };
            }
            for (let i = 0; i < column.length; i++) {
                const sum = column[i].getSum();
                const height = Math.max(sum * factor, series.options.minLinkWidth || 0);
                const directionOffset = node.options[series.chart.inverted ?
                    'offsetHorizontal' :
                    'offsetVertical'], optionOffset = node.options.offset || 0;
                if (sum) {
                    totalNodeOffset = height + nodePadding;
                }
                else {
                    // If node sum equals 0 nodePadding is missed #12453
                    totalNodeOffset = 0;
                }
                if (column[i] === node) {
                    return {
                        relativeTop: offset + ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(directionOffset) ?
                            // `directionOffset` is a percent of the node
                            // height
                            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.relativeLength)(directionOffset, height) :
                            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.relativeLength)(optionOffset, totalNodeOffset))
                    };
                }
                offset += totalNodeOffset;
            }
        }
    }
    SankeyColumnComposition.SankeyColumnAdditions = SankeyColumnAdditions;
})(SankeyColumnComposition || (SankeyColumnComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Sankey_SankeyColumnComposition = (SankeyColumnComposition);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGElement"],"commonjs":["highcharts","SVGElement"],"commonjs2":["highcharts","SVGElement"],"root":["Highcharts","SVGElement"]}
var highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_ = __webpack_require__(28);
var highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_);
;// ./code/es-modules/Extensions/TextPath.js
/* *
 *
 *  Highcharts module with textPath functionality.
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */




const { composed, deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Set a text path for a `text` or `label` element, allowing the text to
 * flow along a path.
 *
 * In order to unset the path for an existing element, call `setTextPath`
 * with `{ enabled: false }` as the second argument.
 *
 * Text path support is not bundled into `highcharts.js`, and requires the
 * `modules/textpath.js` file. However, it is included in the script files of
 * those series types that use it by default.
 *
 * @sample highcharts/members/renderer-textpath/ Text path demonstrated
 *
 * @internal
 * @function Highcharts.SVGElement#setTextPath
 *
 * @param {Highcharts.SVGElement|undefined} path
 *        Path to follow. If undefined, it allows changing options for the
 *        existing path.
 *
 * @param {Highcharts.DataLabelsTextPathOptionsObject} textPathOptions
 *        Options.
 *
 * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
 */
function setTextPath(path, textPathOptions) {
    const url = this.renderer.url, textWrapper = this.text || this, textPath = textWrapper.textPath, { attributes, enabled } = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.merge)(
    // Defaults
    {
        enabled: true,
        attributes: {
            dy: -5,
            startOffset: '50%',
            textAnchor: 'middle'
        }
    }, textPathOptions);
    path = path || (textPath && textPath.path);
    // Remove previously added event
    textPath?.undo();
    if (path && enabled) {
        const undo = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(textWrapper, 'afterModifyTree', (e) => {
            if (path && enabled) {
                // Set ID for the path
                let textPathId = path.attr('id');
                if (!textPathId) {
                    path.attr('id', textPathId = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)());
                }
                // Set attributes for the <text>
                const textAttribs = {
                    // `dx`/`dy` options must by set on <text> (parent), the
                    // rest should be set on <textPath>
                    x: 0,
                    y: 0
                };
                if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(attributes.dx)) {
                    textAttribs.dx = attributes.dx;
                    delete attributes.dx;
                }
                if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(attributes.dy)) {
                    textAttribs.dy = attributes.dy;
                    delete attributes.dy;
                }
                textWrapper.attr(textAttribs);
                // Handle label properties
                this.attr({ transform: '' });
                if (this.box) {
                    this.box = this.box.destroy();
                }
                // Wrap the nodes in a textPath
                const children = e.nodes.slice(0);
                e.nodes.length = 0;
                e.nodes[0] = {
                    tagName: 'textPath',
                    attributes: (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.extend)(attributes, {
                        'text-anchor': attributes.textAnchor,
                        href: `${url}#${textPathId}`
                    }),
                    children
                };
            }
        });
        // Set the reference
        textWrapper.textPath = { path, undo };
    }
    else {
        textWrapper.attr({ dx: 0, dy: 0 });
        delete textWrapper.textPath;
    }
    if (this.added) {
        // Rebuild text after added
        textWrapper.textCache = '';
        this.renderer.buildText(textWrapper);
    }
    return this;
}
/**
 * Attach a polygon to a bounding box if the element contains a textPath.
 *
 * @internal
 * @function Highcharts.SVGElement#setPolygon
 *
 * @param {any} event
 *        An event containing a bounding box object
 *
 * @return {Highcharts.BBoxObject} Returns the bounding box object.
 */
function setPolygon(event) {
    const bBox = event.bBox, tp = this.element?.querySelector('textPath');
    if (tp) {
        const polygon = [], { b, h } = this.renderer.fontMetrics(this.element), descender = h - b, lineCleanerRegex = new RegExp('(<tspan>|' +
            '<tspan(?!\\sclass="highcharts-br")[^>]*>|' +
            '<\\/tspan>)', 'g'), lines = tp
            .innerHTML
            .replace(lineCleanerRegex, '')
            .split(/<tspan class="highcharts-br"[^>]*>/), numOfLines = lines.length;
        // Calculate top and bottom coordinates for
        // either the start or the end of a single
        // character, and append it to the polygon.
        const appendTopAndBottom = (charIndex, positionOfChar) => {
            const { x, y } = positionOfChar, rotation = (tp.getRotationOfChar(charIndex) - 90) * deg2rad, cosRot = Math.cos(rotation), sinRot = Math.sin(rotation);
            return [
                [
                    x - descender * cosRot,
                    y - descender * sinRot
                ],
                [
                    x + b * cosRot,
                    y + b * sinRot
                ]
            ];
        };
        for (let i = 0, lineIndex = 0; lineIndex < numOfLines; lineIndex++) {
            const line = lines[lineIndex], lineLen = line.length;
            for (let lineCharIndex = 0; lineCharIndex < lineLen; lineCharIndex += 5) {
                try {
                    const srcCharIndex = (i +
                        lineCharIndex +
                        lineIndex), [lower, upper] = appendTopAndBottom(srcCharIndex, tp.getStartPositionOfChar(srcCharIndex));
                    if (lineCharIndex === 0) {
                        polygon.push(upper);
                        polygon.push(lower);
                    }
                    else {
                        if (lineIndex === 0) {
                            polygon.unshift(upper);
                        }
                        if (lineIndex === numOfLines - 1) {
                            polygon.push(lower);
                        }
                    }
                }
                catch {
                    // Safari fails on getStartPositionOfChar even if the
                    // character is within the `textContent.length`
                    break;
                }
            }
            i += lineLen - 1;
            try {
                const srcCharIndex = i + lineIndex, charPos = tp.getEndPositionOfChar(srcCharIndex), [lower, upper] = appendTopAndBottom(srcCharIndex, charPos);
                polygon.unshift(upper);
                polygon.unshift(lower);
            }
            catch {
                // Safari fails on getStartPositionOfChar even if the character
                // is within the `textContent.length`
                break;
            }
        }
        // Close it
        if (polygon.length) {
            polygon.push(polygon[0].slice());
        }
        bBox.polygon = polygon;
    }
    return bBox;
}
/**
 * Draw text along a textPath for a dataLabel.
 *
 * @internal
 * @function Highcharts.SVGElement#drawTextPath
 *
 * @param {any} event
 *        An event containing label options
 *
 * @return {void}
 */
function drawTextPath(event) {
    const labelOptions = event.labelOptions, point = event.point, textPathOptions = (labelOptions[point.formatPrefix + 'TextPath'] ||
        labelOptions.textPath);
    if (textPathOptions && !labelOptions.useHTML) {
        this.setTextPath(point.getDataLabelPath?.(this) || point.graphic, textPathOptions);
        if (point.dataLabelPath &&
            !textPathOptions.enabled) {
            // Clean the DOM
            point.dataLabelPath = point.dataLabelPath.destroy();
        }
    }
}
/** @internal */
function composeTextPath(SVGElementClass) {
    if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pushUnique)(composed, 'TextPath')) {
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SVGElementClass, 'afterGetBBox', setPolygon);
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SVGElementClass, 'beforeAddingDataLabel', drawTextPath);
        SVGElementClass.prototype.setTextPath =
            SVGElementClass.prototype.setTextPath ?? setTextPath;
    }
}
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Options for a label text which should follow marker's shape.
 * Border and background are disabled for a label that follows a
 * path.
 *
 * **Note:** Only SVG-based renderer supports this option. Setting
 * `useHTML` to true will disable this option.
 *
 * Text path support is not bundled into `highcharts.js`, and requires the
 * `modules/textpath.js` file. However, it is included in the script files of
 * those series types that use it by default.
 *
 * @declare   Highcharts.DataLabelsTextPathOptionsObject
 * @since     7.1.0
 * @apioption plotOptions.series.dataLabels.textPath
 */
/**
 * Presentation attributes for the text path.
 *
 * @type      {Highcharts.SVGAttributes}
 * @since     7.1.0
 * @default   { dy:-5, startOffset:'50%', textAnchor:'middle' }
 * @apioption plotOptions.series.dataLabels.textPath.attributes
 */
/**
 * Enable or disable `textPath` option for link's or marker's data
 * labels.
 *
 * @type      {boolean}
 * @since     7.1.0
 * @default   true
 * @apioption plotOptions.series.dataLabels.textPath.enabled
 */
(''); // Keep doclets above in transpiled file

;// ./code/es-modules/Series/DependencyWheel/DependencyWheelSeries.js
/* *
 *
 *  Dependency wheel module
 *
 *  (c) 2018-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */






const { deg2rad: DependencyWheelSeries_deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { pie: PieSeries, sankey: SankeySeries } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;



composeTextPath((highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default()));
/* *
 *
 *  Class
 *
 * */
/**
 * @internal
 * @class
 * @name Highcharts.seriesTypes.dependencywheel
 *
 * @augments Highcharts.seriesTypes.sankey
 */
class DependencyWheelSeries extends SankeySeries {
    /* *
     *
     *  Functions
     *
     * */
    animate(init) {
        const series = this;
        if (!init) {
            const duration = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.animObject)(series.options.animation).duration, step = (duration / 2) / series.nodes.length;
            let i = 0;
            for (const point of series.nodes) {
                const graphic = point.graphic;
                if (graphic) {
                    graphic.attr({ opacity: 0 });
                    setTimeout(() => {
                        if (point.graphic) {
                            point.graphic.animate({ opacity: 1 }, { duration: step });
                        }
                    }, step * i++);
                }
            }
            for (const point of series.points) {
                const graphic = point.graphic;
                if (!point.isNode && graphic) {
                    graphic.attr({ opacity: 0 })
                        .animate({
                        opacity: 1
                    }, series.options.animation);
                }
            }
        }
    }
    createNode(id) {
        const node = super.createNode(id);
        /**
         * Return the sum of incoming and outgoing links.
         * @internal
         */
        node.getSum = () => {
            let sum = 0;
            for (const link of node.linksFrom) {
                sum += link.weight || 0;
            }
            for (const link of node.linksTo) {
                sum += link.weightTo || link.weight || 0;
            }
            return sum;
        };
        /**
         * Get the offset in weight values of a point/link.
         * @internal
         */
        node.offset = (point) => {
            const otherNode = (link) => (link.fromNode === node ?
                link.toNode :
                link.fromNode);
            let offset = 0, links = node.linksFrom.concat(node.linksTo), sliced;
            // Sort and slice the links to avoid links going out of each
            // node crossing each other.
            links.sort((a, b) => (otherNode(a).index - otherNode(b).index));
            for (let i = 0; i < links.length; i++) {
                if (otherNode(links[i]).index > node.index) {
                    links = links.slice(0, i).reverse().concat(links.slice(i).reverse());
                    sliced = true;
                    break;
                }
            }
            if (!sliced) {
                links.reverse();
            }
            for (let i = 0; i < links.length; i++) {
                if (links[i] === point) {
                    return offset;
                }
                const baseWeight = links[i].weight || 0;
                offset += links[i].to === node.id ?
                    links[i].weightTo || baseWeight :
                    baseWeight;
            }
        };
        return node;
    }
    /**
     * Dependency wheel has only one column, it runs along the perimeter.
     * @internal
     */
    createNodeColumns() {
        const series = this, columns = [Sankey_SankeyColumnComposition.compose([], series)];
        for (const node of series.nodes) {
            node.column = 0;
            columns[0].push(node);
        }
        return columns;
    }
    /**
     * Translate from vertical pixels to perimeter.
     * @internal
     */
    getNodePadding() {
        return this.options.nodePadding / Math.PI;
    }
    /**
     * @ignore
     * @todo Override the refactored sankey translateLink and translateNode
     * functions instead of the whole translate function.
     */
    translate() {
        const series = this, options = series.options, factor = 2 * Math.PI /
            (series.chart.plotHeight + series.getNodePadding()), center = series.getCenter(), startAngle = ((options.startAngle || 0) - 90) * DependencyWheelSeries_deg2rad, borderRadius = borderRadiusObject(options.borderRadius).radius;
        super.translate();
        for (const node of this.nodeColumns[0]) {
            // Don't render the nodes if sum is 0 #12453
            if (node.sum) {
                const shapeArgs = node.shapeArgs, centerX = center[0], centerY = center[1], r = center[2] / 2, nodeWidth = options.nodeWidth === 'auto' ?
                    20 : options.nodeWidth, innerR = r - (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.relativeLength)(nodeWidth || 0, r), start = startAngle + factor * (shapeArgs.y || 0), end = startAngle +
                    factor * ((shapeArgs.y || 0) + (shapeArgs.height || 0));
                // Middle angle
                node.angle = start + (end - start) / 2;
                node.shapeType = 'arc';
                node.shapeArgs = {
                    x: centerX,
                    y: centerY,
                    r: r,
                    innerR: innerR,
                    start: start,
                    end: end,
                    borderRadius
                };
                node.dlBox = {
                    x: centerX + Math.cos((start + end) / 2) * (r + innerR) / 2,
                    y: centerY + Math.sin((start + end) / 2) * (r + innerR) / 2,
                    width: 1,
                    height: 1
                };
                // Draw the links from this node
                for (const point of node.linksFrom) {
                    if (point.linkBase) {
                        let curveFactor, distance;
                        const corners = point.linkBase.map((top, i) => {
                            const angle = factor * top, x = Math.cos(startAngle + angle) * (innerR + 1), y = Math.sin(startAngle + angle) * (innerR + 1);
                            curveFactor = options.curveFactor || 0;
                            // The distance between the from and to node
                            // along the perimeter. This affect how curved
                            // the link is, so that links between neighbors
                            // don't extend too far towards the center.
                            distance = Math.abs(point.linkBase[3 - i] * factor - angle);
                            if (distance > Math.PI) {
                                distance = 2 * Math.PI - distance;
                            }
                            distance = distance * innerR;
                            if (distance < innerR) {
                                curveFactor *= (distance / innerR);
                            }
                            return {
                                x: centerX + x,
                                y: centerY + y,
                                cpX: centerX + (1 - curveFactor) * x,
                                cpY: centerY + (1 - curveFactor) * y
                            };
                        });
                        point.shapeArgs = {
                            d: [[
                                    'M',
                                    corners[0].x, corners[0].y
                                ], [
                                    'A',
                                    innerR, innerR,
                                    0,
                                    0, // Long arc
                                    1, // Clockwise
                                    corners[1].x, corners[1].y
                                ], [
                                    'C',
                                    corners[1].cpX, corners[1].cpY,
                                    corners[2].cpX, corners[2].cpY,
                                    corners[2].x, corners[2].y
                                ], [
                                    'A',
                                    innerR, innerR,
                                    0,
                                    0,
                                    1,
                                    corners[3].x, corners[3].y
                                ], [
                                    'C',
                                    corners[3].cpX, corners[3].cpY,
                                    corners[0].cpX, corners[0].cpY,
                                    corners[0].x, corners[0].y
                                ]]
                        };
                    }
                }
            }
        }
    }
    /**
     * Run translation operations for one link.
     * @internal
     */
    translateLink(point) {
        const linkToHeight = Math.max((point.weightTo || point.weight || 0) * this.translationFactor, this.options.minLinkWidth || 0);
        const linkToY = this.getY(point, point.toNode, 'linksTo', linkToHeight);
        // Translate the link
        super.translateLink(point, linkToY);
        // Override the last linkBase value
        point.linkBase[3] = linkToY + linkToHeight;
    }
    /**
     * Run translation operations for one node.
     * @internal
     */
    translateNode(node, column) {
        super.translateNode(node, column);
        // Calculate the sum of incoming links weight and
        // outgoing links weightTo.
        node.sumTo = node.getSumTo();
    }
}
/* *
 *
 *  Static Properties
 *
 * */
DependencyWheelSeries.defaultOptions = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.merge)(SankeySeries.defaultOptions, DependencyWheel_DependencyWheelSeriesDefaults);
(0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.extend)(DependencyWheelSeries.prototype, {
    orderNodes: false,
    pointArrayMap: ['from', 'to', 'weight', 'weightTo'],
    getCenter: PieSeries.prototype.getCenter
});
DependencyWheelSeries.prototype.pointClass = DependencyWheel_DependencyWheelPoint;
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('dependencywheel', DependencyWheelSeries);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const DependencyWheel_DependencyWheelSeries = ((/* unused pure expression or super */ null && (DependencyWheelSeries)));

;// ./code/es-modules/masters/modules/dependency-wheel.src.js




/* harmony default export */ const dependency_wheel_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});