// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/cylinder
 * @requires highcharts
 * @requires highcharts/highcharts-3d
 *
 * Highcharts cylinder module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SVGRenderer"], root["_Highcharts"]["Color"], root["_Highcharts"]["SVGElement"], root["_Highcharts"]["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/cylinder", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SVGRenderer"],amd1["Color"],amd1["SVGElement"],amd1["SeriesRegistry"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/cylinder"] = factory(root["_Highcharts"], root["_Highcharts"]["SVGRenderer"], root["_Highcharts"]["Color"], root["_Highcharts"]["SVGElement"], root["_Highcharts"]["SeriesRegistry"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["SVGRenderer"], root["Highcharts"]["Color"], root["Highcharts"]["SVGElement"], root["Highcharts"]["SeriesRegistry"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__540__, __WEBPACK_EXTERNAL_MODULE__620__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__512__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 28:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 540:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__540__;

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__620__;

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
  "default": () => (/* binding */ cylinder_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGRenderer"],"commonjs":["highcharts","SVGRenderer"],"commonjs2":["highcharts","SVGRenderer"],"root":["Highcharts","SVGRenderer"]}
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_ = __webpack_require__(540);
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_);
;// ./code/es-modules/Core/Math3D.js
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



const { deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Functions
 *
 * */
/* eslint-disable max-len */
/**
 * Apply 3-D rotation
 * Euler Angles (XYZ):
 *     cosA = cos(Alfa|Roll)
 *     cosB = cos(Beta|Pitch)
 *     cosG = cos(Gamma|Yaw)
 *
 * Composite rotation:
 * |          cosB * cosG             |           cosB * sinG            |    -sinB    |
 * | sinA * sinB * cosG - cosA * sinG | sinA * sinB * sinG + cosA * cosG | sinA * cosB |
 * | cosA * sinB * cosG + sinA * sinG | cosA * sinB * sinG - sinA * cosG | cosA * cosB |
 *
 * Now, Gamma/Yaw is not used (angle=0), so we assume cosG = 1 and sinG = 0, so
 * we get:
 * |     cosB    |   0    |   - sinB    |
 * | sinA * sinB |  cosA  | sinA * cosB |
 * | cosA * sinB | - sinA | cosA * cosB |
 *
 * But in browsers, y is reversed, so we get sinA => -sinA. The general result
 * is:
 * |      cosB     |   0    |    - sinB     |     | x |     | px |
 * | - sinA * sinB |  cosA  | - sinA * cosB |  x  | y |  =  | py |
 * |  cosA * sinB  |  sinA  |  cosA * cosB  |     | z |     | pz |
 *
 * @internal
 * @function rotate3D
 */
/* eslint-enable max-len */
/**
 * Rotates the position as defined in angles.
 * @internal
 * @param {number} x
 *        X coordinate
 * @param {number} y
 *        Y coordinate
 * @param {number} z
 *        Z coordinate
 * @param {Highcharts.Rotation3DObject} angles
 *        Rotation angles
 * @return {Highcharts.Position3DObject}
 *         Rotated position
 */
function rotate3D(x, y, z, angles) {
    return {
        x: angles.cosB * x - angles.sinB * z,
        y: -angles.sinA * angles.sinB * x + angles.cosA * y -
            angles.cosB * angles.sinA * z,
        z: angles.cosA * angles.sinB * x + angles.sinA * y +
            angles.cosA * angles.cosB * z
    };
}
/**
 * Transforms a given array of points according to the angles in chart.options.
 *
 * @internal
 * @function Highcharts.perspective
 *
 * @param {Array<Highcharts.Position3DObject>} points
 * The array of points
 *
 * @param {Highcharts.Chart} chart
 * The chart
 *
 * @param {boolean} [insidePlotArea]
 * Whether to verify that the points are inside the plotArea
 *
 * @param {boolean} [useInvertedPersp]
 * Whether to use inverted perspective in calculations
 *
 * @return {Array<Highcharts.Position3DObject>}
 * An array of transformed points
 *
 * @requires highcharts-3d
 */
function perspective(points, chart, insidePlotArea, useInvertedPersp) {
    const options3d = chart.options.chart.options3d, 
    /* The useInvertedPersp argument is used for inverted charts with
     * already inverted elements, such as dataLabels or tooltip positions.
     */
    inverted = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(useInvertedPersp, insidePlotArea ? chart.inverted : false), origin = {
        x: chart.plotWidth / 2,
        y: chart.plotHeight / 2,
        z: options3d.depth / 2,
        vd: (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(options3d.depth, 1) * (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(options3d.viewDistance, 0)
    }, scale = chart.scale3d || 1, beta = deg2rad * options3d.beta * (inverted ? -1 : 1), alpha = deg2rad * options3d.alpha * (inverted ? -1 : 1), angles = {
        cosA: Math.cos(alpha),
        cosB: Math.cos(-beta),
        sinA: Math.sin(alpha),
        sinB: Math.sin(-beta)
    };
    if (!insidePlotArea) {
        origin.x += chart.plotLeft;
        origin.y += chart.plotTop;
    }
    // Transform each point
    return points.map(function (point) {
        const rotated = rotate3D((inverted ? point.y : point.x) - origin.x, (inverted ? point.x : point.y) - origin.y, (point.z || 0) - origin.z, angles), 
        // Apply perspective
        coordinate = perspective3D(rotated, origin, origin.vd);
        // Apply translation
        coordinate.x = coordinate.x * scale + origin.x;
        coordinate.y = coordinate.y * scale + origin.y;
        coordinate.z = rotated.z * scale + origin.z;
        return {
            x: (inverted ? coordinate.y : coordinate.x),
            y: (inverted ? coordinate.x : coordinate.y),
            z: coordinate.z
        };
    });
}
/**
 * Perspective3D function is available in global Highcharts scope because is
 * needed also outside of perspective() function (#8042).
 * @internal
 * @function Highcharts.perspective3D
 *
 * @param {Highcharts.Position3DObject} coordinate
 * 3D position
 *
 * @param {Highcharts.Position3DObject} origin
 * 3D root position
 *
 * @param {number} distance
 * Perspective distance
 *
 * @return {Highcharts.PositionObject}
 * Perspective 3D Position
 *
 * @requires highcharts-3d
 */
function perspective3D(coordinate, origin, distance) {
    const projection = ((distance > 0) &&
        (distance < Number.POSITIVE_INFINITY)) ?
        distance / (coordinate.z + origin.z + distance) :
        1;
    return {
        x: coordinate.x * projection,
        y: coordinate.y * projection
    };
}
/**
 * Calculate a distance from camera to points - made for calculating zIndex of
 * scatter points.
 *
 * @internal
 * @function Highcharts.pointCameraDistance
 *
 * @param {Highcharts.Dictionary<number>} coordinates
 * Coordinates of the specific point
 *
 * @param {Highcharts.Chart} chart
 * Related chart
 *
 * @return {number}
 * Distance from camera to point
 *
 * @requires highcharts-3d
 */
function pointCameraDistance(coordinates, chart) {
    const options3d = chart.options.chart.options3d, cameraPosition = {
        x: chart.plotWidth / 2,
        y: chart.plotHeight / 2,
        z: (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(options3d.depth, 1) * (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(options3d.viewDistance, 0) +
            options3d.depth
    }, 
    // Added support for objects with plotX or x coordinates.
    distance = Math.sqrt(Math.pow(cameraPosition.x - (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(coordinates.plotX, coordinates.x), 2) +
        Math.pow(cameraPosition.y - (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(coordinates.plotY, coordinates.y), 2) +
        Math.pow(cameraPosition.z - (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(coordinates.plotZ, coordinates.z), 2));
    return distance;
}
/**
 * Calculate area of a 2D polygon using Shoelace algorithm
 * https://en.wikipedia.org/wiki/Shoelace_formula
 *
 * @internal
 * @function Highcharts.shapeArea
 *
 * @param {Array<Highcharts.PositionObject>} vertexes
 * 2D Polygon
 *
 * @return {number}
 * Calculated area
 *
 * @requires highcharts-3d
 */
function shapeArea(vertexes) {
    let area = 0, i, j;
    for (i = 0; i < vertexes.length; i++) {
        j = (i + 1) % vertexes.length;
        area += vertexes[i].x * vertexes[j].y - vertexes[j].x * vertexes[i].y;
    }
    return area / 2;
}
/**
 * Calculate area of a 3D polygon after perspective projection
 *
 * @internal
 * @function Highcharts.shapeArea3d
 *
 * @param {Array<Highcharts.Position3DObject>} vertexes
 * 3D Polygon
 *
 * @param {Highcharts.Chart} chart
 * Related chart
 *
 * @param {boolean} [insidePlotArea]
 * Whether to verify that the points are inside the plotArea
 *
 * @return {number}
 * Calculated area
 *
 * @requires highcharts-3d
 */
function shapeArea3D(vertexes, chart, insidePlotArea) {
    return shapeArea(perspective(vertexes, chart, insidePlotArea));
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const Math3D = {
    perspective,
    perspective3D,
    pointCameraDistance,
    shapeArea,
    shapeArea3D
};
/** @internal */
/* harmony default export */ const Core_Math3D = (Math3D);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Color"],"commonjs":["highcharts","Color"],"commonjs2":["highcharts","Color"],"root":["Highcharts","Color"]}
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_ = __webpack_require__(620);
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default = /*#__PURE__*/__webpack_require__.n(highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGElement"],"commonjs":["highcharts","SVGElement"],"commonjs2":["highcharts","SVGElement"],"root":["Highcharts","SVGElement"]}
var highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_ = __webpack_require__(28);
var highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_);
;// ./code/es-modules/Core/Renderer/SVG/SVGElement3D.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Extensions to the SVGRenderer class to enable 3D shapes
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { parse: color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());


/* *
 *
 *  Class
 *
 * */
/** @internal */
class SVGElement3D extends (highcharts_SVGElement_commonjs_highcharts_SVGElement_commonjs2_highcharts_SVGElement_root_Highcharts_SVGElement_default()) {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        /* *
         *
         *  Properties
         *
         * */
        this.parts = ['front', 'top', 'side'];
        this.pathType = 'cuboid';
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * The init is used by base - renderer.Element
     * @internal
     */
    initArgs(args) {
        const elem3d = this, renderer = elem3d.renderer, paths = renderer[elem3d.pathType + 'Path'](args), zIndexes = paths.zIndexes;
        // Build parts
        for (const part of elem3d.parts) {
            const attribs = {
                'class': 'highcharts-3d-' + part,
                zIndex: zIndexes[part] || 0
            };
            if (renderer.styledMode) {
                if (part === 'top') {
                    attribs.filter = 'url(#highcharts-brighter)';
                }
                else if (part === 'side') {
                    attribs.filter = 'url(#highcharts-darker)';
                }
            }
            elem3d[part] = renderer.path(paths[part])
                .attr(attribs)
                .add(elem3d);
        }
        elem3d.attr({
            'stroke-linejoin': 'round',
            zIndex: zIndexes.group
        });
        // Store information if any side of element was rendered by force.
        elem3d.forcedSides = paths.forcedSides;
    }
    /**
     * Single property setter that applies options to each part
     * @internal
     */
    singleSetterForParts(prop, val, values, verb, duration, complete) {
        const elem3d = this, newAttr = {}, optionsToApply = [null, null, (verb || 'attr'), duration, complete], hasZIndexes = values?.zIndexes;
        if (!values) {
            newAttr[prop] = val;
            optionsToApply[0] = newAttr;
        }
        else {
            // It is needed to deal with the whole group zIndexing
            // in case of graph rotation
            if (hasZIndexes?.group) {
                elem3d.attr({
                    zIndex: hasZIndexes.group
                });
            }
            for (const part of Object.keys(values)) {
                newAttr[part] = {};
                newAttr[part][prop] = values[part];
                // Include zIndexes if provided
                if (hasZIndexes) {
                    newAttr[part].zIndex = values.zIndexes[part] || 0;
                }
            }
            optionsToApply[1] = newAttr;
        }
        return this.processParts.apply(elem3d, optionsToApply);
    }
    /**
     * Calls function for each part. Used for attr, animate and destroy.
     * @internal
     */
    processParts(props, partsProps, verb, duration, complete) {
        const elem3d = this;
        for (const part of elem3d.parts) {
            // If different props for different parts
            if (partsProps) {
                props = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(partsProps[part], false);
            }
            // Only if something to set, but allow undefined
            if (props !== false) {
                elem3d[part][verb](props, duration, complete);
            }
        }
        return elem3d;
    }
    /**
     * Destroy all parts
     * @internal
     */
    destroy() {
        this.processParts(null, null, 'destroy');
        return super.destroy();
    }
    // Following functions are SVGElement3DCuboid (= base)
    /** @internal */
    attr(args, val, complete, continueAnimation) {
        // Resolve setting attributes by string name
        if (typeof args === 'string' && typeof val !== 'undefined') {
            const key = args;
            args = {};
            args[key] = val;
        }
        if (args.shapeArgs || (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(args.x)) {
            return this.singleSetterForParts('d', null, this.renderer[this.pathType + 'Path'](args.shapeArgs || args));
        }
        return super.attr(args, void 0, complete, continueAnimation);
    }
    /** @internal */
    animate(args, duration, complete) {
        if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(args.x) && (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(args.y)) {
            const paths = this.renderer[this.pathType + 'Path'](args), forcedSides = paths.forcedSides;
            this.singleSetterForParts('d', null, paths, 'animate', duration, complete);
            this.attr({
                zIndex: paths.zIndexes.group
            });
            // If sides that are forced to render changed, recalculate colors.
            if (forcedSides !== this.forcedSides) {
                this.forcedSides = forcedSides;
                if (!this.renderer.styledMode) {
                    this.fillSetter(this.fill);
                }
            }
        }
        else {
            super.animate(args, duration, complete);
        }
        return this;
    }
    /** @internal */
    fillSetter(fill) {
        const elem3d = this;
        elem3d.forcedSides = elem3d.forcedSides || [];
        elem3d.singleSetterForParts('fill', null, {
            front: fill,
            // Do not change color if side was forced to render.
            top: color(fill).brighten(elem3d.forcedSides.indexOf('top') >= 0 ? 0 : 0.1).get(),
            side: color(fill).brighten(elem3d.forcedSides.indexOf('side') >= 0 ? 0 : -0.1).get()
        });
        // Fill for animation getter (#6776)
        elem3d.color = elem3d.fill = fill;
        return elem3d;
    }
}
SVGElement3D.types = {
    base: SVGElement3D,
    cuboid: SVGElement3D
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const SVG_SVGElement3D = (SVGElement3D);

;// ./code/es-modules/Series/Cylinder/SVGElement3DCylinder.js
/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { parse: SVGElement3DCylinder_color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());

/* *
 *
 *  Class
 *
 * */
class SVGElement3DCylinder extends SVG_SVGElement3D {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.parts = ['top', 'bottom', 'front', 'back'];
        this.pathType = 'cylinder';
    }
    /* *
     *
     *  Functions
     *
     * */
    fillSetter(fill) {
        this.singleSetterForParts('fill', null, {
            front: fill,
            back: fill,
            top: SVGElement3DCylinder_color(fill).brighten(0.1).get(),
            bottom: SVGElement3DCylinder_color(fill).brighten(-0.1).get()
        });
        // Fill for animation getter (#6776)
        this.color = this.fill = fill;
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Cylinder_SVGElement3DCylinder = (SVGElement3DCylinder);

;// ./code/es-modules/Series/Cylinder/CylinderComposition.js
/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { charts, deg2rad: CylinderComposition_deg2rad } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { perspective: CylinderComposition_perspective } = Core_Math3D;


/* *
 *
 *  Functions
 *
 * */
/**
 *
 */
function compose(SVGRendererClass) {
    const rendererProto = SVGRendererClass.prototype;
    if (!rendererProto.cylinder) {
        rendererProto.Element3D.types.cylinder = Cylinder_SVGElement3DCylinder;
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.extend)(rendererProto, {
            cylinder: rendererCylinder,
            cylinderPath: rendererCylinderPath,
            getCurvedPath: rendererGetCurvedPath,
            getCylinderBack: rendererGetCylinderBack,
            getCylinderEnd: rendererGetCylinderEnd,
            getCylinderFront: rendererGetCylinderFront
        });
    }
}
/**
 * Check if a path is simplified. The simplified path contains only lineTo
 * segments, whereas non-simplified contain curves.
 * @private
 */
function isSimplified(path) {
    return !path.some((seg) => seg[0] === 'C');
}
/** @private */
function rendererCylinder(shapeArgs) {
    return this.element3d('cylinder', shapeArgs);
}
/**
 * Generates paths and zIndexes.
 * @private
 */
function rendererCylinderPath(shapeArgs) {
    const renderer = this, chart = charts[renderer.chartIndex], 
    // Decide zIndexes of parts based on cuboid logic, for consistency.
    cuboidData = this.cuboidPath(shapeArgs), isTopFirst = !cuboidData.isTop, isFrontFirst = !cuboidData.isFront, top = renderer.getCylinderEnd(chart, shapeArgs), bottom = renderer.getCylinderEnd(chart, shapeArgs, true);
    return {
        front: renderer.getCylinderFront(top, bottom),
        back: renderer.getCylinderBack(top, bottom),
        top: top,
        bottom: bottom,
        zIndexes: {
            top: isTopFirst ? 3 : 0,
            bottom: isTopFirst ? 0 : 3,
            front: isFrontFirst ? 2 : 1,
            back: isFrontFirst ? 1 : 2,
            group: cuboidData.zIndexes.group
        }
    };
}
/**
 * Returns curved path in format of:
 * [ M, x, y, ...[C, cp1x, cp2y, cp2x, cp2y, epx, epy]*n_times ]
 * (cp - control point, ep - end point)
 * @private
 */
function rendererGetCurvedPath(points) {
    const path = [['M', points[0].x, points[0].y]], limit = points.length - 2;
    for (let i = 1; i < limit; i += 3) {
        path.push([
            'C',
            points[i].x, points[i].y,
            points[i + 1].x, points[i + 1].y,
            points[i + 2].x, points[i + 2].y
        ]);
    }
    return path;
}
/**
 * Returns cylinder Back path.
 * @private
 */
function rendererGetCylinderBack(topPath, bottomPath) {
    const path = [];
    if (isSimplified(topPath)) {
        const move = topPath[0], line2 = topPath[2];
        if (move[0] === 'M' && line2[0] === 'L') {
            path.push(['M', line2[1], line2[2]]);
            path.push(topPath[3]);
            // End at start
            path.push(['L', move[1], move[2]]);
        }
    }
    else {
        if (topPath[2][0] === 'C') {
            path.push(['M', topPath[2][5], topPath[2][6]]);
        }
        path.push(topPath[3], topPath[4]);
    }
    if (isSimplified(bottomPath)) {
        const move = bottomPath[0];
        if (move[0] === 'M') {
            path.push(['L', move[1], move[2]]);
            path.push(bottomPath[3]);
            path.push(bottomPath[2]);
        }
    }
    else {
        const curve2 = bottomPath[2], curve3 = bottomPath[3], curve4 = bottomPath[4];
        if (curve2[0] === 'C' && curve3[0] === 'C' && curve4[0] === 'C') {
            path.push(['L', curve4[5], curve4[6]]);
            path.push([
                'C',
                curve4[3],
                curve4[4],
                curve4[1],
                curve4[2],
                curve3[5],
                curve3[6]
            ]);
            path.push([
                'C',
                curve3[3],
                curve3[4],
                curve3[1],
                curve3[2],
                curve2[5],
                curve2[6]
            ]);
        }
    }
    path.push(['Z']);
    return path;
}
/**
 * Returns cylinder path for top or bottom.
 * @private
 */
function rendererGetCylinderEnd(chart, shapeArgs, isBottom) {
    const { width = 0, height = 0, alphaCorrection = 0 } = shapeArgs, 
    // A half of the smaller one out of width or depth (optional, because
    // there's no depth for a funnel that reuses the code)
    depth = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pick)(shapeArgs.depth, width, 0), radius = Math.min(width, depth) / 2, 
    // Approximated longest diameter
    angleOffset = CylinderComposition_deg2rad * (chart.options.chart.options3d.beta - 90 +
        alphaCorrection), 
    // Could be top or bottom of the cylinder
    y = (shapeArgs.y || 0) + (isBottom ? height : 0), 
    // Use cubic Bezier curve to draw a circle in x,z (y is constant).
    // More math. at spencermortensen.com/articles/bezier-circle/
    c = 0.5519 * radius, centerX = width / 2 + (shapeArgs.x || 0), centerZ = depth / 2 + (shapeArgs.z || 0), 
    // Points could be generated in a loop, but readability will plummet
    points = [{
            x: 0,
            y: y,
            z: radius
        }, {
            x: c,
            y: y,
            z: radius
        }, {
            x: radius,
            y: y,
            z: c
        }, {
            x: radius,
            y: y,
            z: 0
        }, {
            x: radius,
            y: y,
            z: -c
        }, {
            x: c,
            y: y,
            z: -radius
        }, {
            x: 0,
            y: y,
            z: -radius
        }, {
            x: -c,
            y: y,
            z: -radius
        }, {
            x: -radius,
            y: y,
            z: -c
        }, {
            x: -radius,
            y: y,
            z: 0
        }, {
            x: -radius,
            y: y,
            z: c
        }, {
            x: -c,
            y: y,
            z: radius
        }, {
            x: 0,
            y: y,
            z: radius
        }], cosTheta = Math.cos(angleOffset), sinTheta = Math.sin(angleOffset);
    let path, x, z;
    // Rotate to match chart's beta and translate to the shape center
    for (const point of points) {
        x = point.x;
        z = point.z;
        point.x = (x * cosTheta - z * sinTheta) + centerX;
        point.z = (z * cosTheta + x * sinTheta) + centerZ;
    }
    const perspectivePoints = CylinderComposition_perspective(points, chart, true);
    // Check for sub-pixel curve issue, compare front and back edges
    if (Math.abs(perspectivePoints[3].y - perspectivePoints[9].y) < 2.5 &&
        Math.abs(perspectivePoints[0].y - perspectivePoints[6].y) < 2.5) {
        // Use simplified shape
        path = this.toLinePath([
            perspectivePoints[0],
            perspectivePoints[3],
            perspectivePoints[6],
            perspectivePoints[9]
        ], true);
    }
    else {
        // Or default curved path to imitate ellipse (2D circle)
        path = this.getCurvedPath(perspectivePoints);
    }
    return path;
}
/**
 * Returns cylinder Front path.
 * @private
 */
function rendererGetCylinderFront(topPath, bottomPath) {
    const path = topPath.slice(0, 3);
    if (isSimplified(bottomPath)) {
        const move = bottomPath[0];
        if (move[0] === 'M') {
            path.push(bottomPath[2]);
            path.push(bottomPath[1]);
            path.push(['L', move[1], move[2]]);
        }
    }
    else {
        const move = bottomPath[0], curve1 = bottomPath[1], curve2 = bottomPath[2];
        if (move[0] === 'M' && curve1[0] === 'C' && curve2[0] === 'C') {
            path.push(['L', curve2[5], curve2[6]]);
            path.push([
                'C',
                curve2[3],
                curve2[4],
                curve2[1],
                curve2[2],
                curve1[5],
                curve1[6]
            ]);
            path.push([
                'C',
                curve1[3],
                curve1[4],
                curve1[1],
                curve1[2],
                move[1],
                move[2]
            ]);
        }
    }
    path.push(['Z']);
    return path;
}
/* *
 *
 *  Default Export
 *
 * */
const CylinderComposition = {
    compose
};
/* harmony default export */ const Cylinder_CylinderComposition = (CylinderComposition);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/Cylinder/CylinderPoint.js
/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



const { column: { prototype: { pointClass: ColumnPoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class CylinderPoint extends ColumnPoint {
}
(0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.extend)(CylinderPoint.prototype, {
    shapeType: 'cylinder'
});
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Cylinder_CylinderPoint = (CylinderPoint);

;// ./code/es-modules/Series/Cylinder/CylinderSeriesDefaults.js
/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
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
 * A cylinder graph is a variation of a 3d column graph. The cylinder graph
 * features cylindrical points.
 *
 * @sample {highcharts} highcharts/demo/cylinder/
 *         Cylinder graph
 *
 * @extends      plotOptions.column
 * @since        7.0.0
 * @product      highcharts
 * @excluding    allAreas, boostThreshold, colorAxis, compare, compareBase,
 *               dragDrop, boostBlending
 * @requires     highcharts-3d
 * @requires     modules/cylinder
 * @optionparent plotOptions.cylinder
 */
const CylinderSeriesDefaults = {};
/**
 * A `cylinder` series. If the [type](#series.cylinder.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.cylinder
 * @since     7.0.0
 * @product   highcharts
 * @excluding allAreas, boostThreshold, colorAxis, compare, compareBase,
 *            boostBlending
 * @requires  highcharts-3d
 * @requires  modules/cylinder
 * @apioption series.cylinder
 */
/**
 * An array of data points for the series. For the `cylinder` series type,
 * points can be given in the following ways:
 *
 * 1. An array of numerical values. In this case, the numerical values will be
 *    interpreted as `y` options. The `x` values will be automatically
 *    calculated, either starting at 0 and incremented by 1, or from
 *    `pointStart` and `pointInterval` given in the series options. If the axis
 *    has categories, these will be used. Example:
 *    ```js
 *    data: [0, 5, 3, 5]
 *    ```
 *
 * 2. An array of arrays with 2 values. In this case, the values correspond to
 *    `x,y`. If the first value is a string, it is applied as the name of the
 *    point, and the `x` value is inferred.
 *    ```js
 *    data: [
 *        [0, 0],
 *        [1, 8],
 *        [2, 9]
 *    ]
 *    ```
 *
 * 3. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.cylinder.turboThreshold), this option is not
 *    available.
 *
 *    ```js
 *    data: [{
 *        x: 1,
 *        y: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        y: 4,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
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
 * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
 * @extends   series.column.data
 * @product   highcharts highstock
 * @apioption series.cylinder.data
 */
''; // Detaches doclets above
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Cylinder_CylinderSeriesDefaults = (CylinderSeriesDefaults);

;// ./code/es-modules/Series/Cylinder/CylinderSeries.js
/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */





const { column: ColumnSeries } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

/* *
 *
 *  Class
 *
 * */
/**
 * The cylinder series type.
 *
 * @requires highcharts-3d
 * @requires modules/cylinder
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cylinder
 *
 * @augments Highcharts.Series
 */
class CylinderSeries extends ColumnSeries {
}
/* *
 *
 *  Static Properties
 *
 * */
CylinderSeries.compose = Cylinder_CylinderComposition.compose;
CylinderSeries.defaultOptions = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.merge)(ColumnSeries.defaultOptions, Cylinder_CylinderSeriesDefaults);
(0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.extend)(CylinderSeries.prototype, {
    pointClass: Cylinder_CylinderPoint
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('cylinder', CylinderSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Cylinder_CylinderSeries = (CylinderSeries);

;// ./code/es-modules/masters/modules/cylinder.src.js





Cylinder_CylinderSeries.compose((highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default()));
/* harmony default export */ const cylinder_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});