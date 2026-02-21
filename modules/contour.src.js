/**
 * @license Highmaps JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/contour
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Color"], root["_Highcharts"]["LegendSymbol"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/contour", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Axis"],amd1["Color"],amd1["LegendSymbol"],amd1["SeriesRegistry"],amd1["SVGRenderer"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/contour"] = factory(root["_Highcharts"], root["_Highcharts"]["Axis"], root["_Highcharts"]["Color"], root["_Highcharts"]["LegendSymbol"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Axis"], root["Highcharts"]["Color"], root["Highcharts"]["LegendSymbol"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["SVGRenderer"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__620__, __WEBPACK_EXTERNAL_MODULE__500__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__540__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 500:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__500__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 532:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

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
  "default": () => (/* binding */ contour_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Color"],"commonjs":["highcharts","Color"],"commonjs2":["highcharts","Color"],"root":["Highcharts","Color"]}
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_ = __webpack_require__(620);
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default = /*#__PURE__*/__webpack_require__.n(highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_);
;// ./code/es-modules/Core/Axis/Color/ColorAxisBase.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { parse: color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());

const { merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Namespace
 *
 * */
/** @internal */
var ColorAxisBase;
(function (ColorAxisBase) {
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
     * Initialize defined data classes.
     * @internal
     */
    function initDataClasses(userOptions) {
        const axis = this, chart = axis.chart, legendItem = axis.legendItem = axis.legendItem || {}, options = axis.options, userDataClasses = userOptions.dataClasses || [];
        let dataClass, dataClasses, colorCount = chart.options.chart.colorCount, colorCounter = 0, colors;
        axis.dataClasses = dataClasses = [];
        legendItem.labels = [];
        for (let i = 0, iEnd = userDataClasses.length; i < iEnd; ++i) {
            dataClass = userDataClasses[i];
            dataClass = merge(dataClass);
            dataClasses.push(dataClass);
            if (!chart.styledMode && dataClass.color) {
                continue;
            }
            if (options.dataClassColor === 'category') {
                if (!chart.styledMode) {
                    colors = chart.options.colors || [];
                    colorCount = colors.length;
                    dataClass.color = colors[colorCounter];
                }
                dataClass.colorIndex = colorCounter;
                // Loop back to zero
                colorCounter++;
                if (colorCounter === colorCount) {
                    colorCounter = 0;
                }
            }
            else {
                dataClass.color = color(options.minColor).tweenTo(color(options.maxColor), iEnd < 2 ? 0.5 : i / (iEnd - 1) // #3219
                );
            }
        }
    }
    ColorAxisBase.initDataClasses = initDataClasses;
    /**
     * Create initial color stops.
     * @internal
     */
    function initStops() {
        const axis = this, options = axis.options, stops = axis.stops = options.stops || [
            [0, options.minColor || ''],
            [1, options.maxColor || '']
        ];
        for (let i = 0, iEnd = stops.length; i < iEnd; ++i) {
            stops[i].color = color(stops[i][1]);
        }
    }
    ColorAxisBase.initStops = initStops;
    /**
     * Normalize logarithmic values.
     * @internal
     */
    function normalizedValue(value) {
        const axis = this, max = axis.max || 0, min = axis.min || 0;
        if (axis.logarithmic) {
            value = axis.logarithmic.log2lin(value);
        }
        return 1 - ((max - value) /
            ((max - min) || 1));
    }
    ColorAxisBase.normalizedValue = normalizedValue;
    /**
     * Translate from a value to a color.
     * @internal
     */
    function toColor(value, point) {
        const axis = this;
        const dataClasses = axis.dataClasses;
        const stops = axis.stops;
        let pos, from, to, color, dataClass, i;
        if (dataClasses) {
            i = dataClasses.length;
            while (i--) {
                dataClass = dataClasses[i];
                from = dataClass.from;
                to = dataClass.to;
                if ((typeof from === 'undefined' || value >= from) &&
                    (typeof to === 'undefined' || value <= to)) {
                    color = dataClass.color;
                    if (point) {
                        point.dataClass = i;
                        point.colorIndex = dataClass.colorIndex;
                    }
                    break;
                }
            }
        }
        else {
            pos = axis.normalizedValue(value);
            i = stops.length;
            while (i--) {
                if (pos > stops[i][0]) {
                    break;
                }
            }
            from = stops[i] || stops[i + 1];
            to = stops[i + 1] || from;
            // The position within the gradient
            pos = 1 - (to[0] - pos) / ((to[0] - from[0]) || 1);
            color = from.color.tweenTo(to.color, pos);
        }
        return color;
    }
    ColorAxisBase.toColor = toColor;
})(ColorAxisBase || (ColorAxisBase = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Color_ColorAxisBase = (ColorAxisBase);

;// ./code/es-modules/Core/Axis/Color/ColorAxisComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { parse: ColorAxisComposition_color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());

const { addEvent, extend, merge: ColorAxisComposition_merge, pick, splat } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Composition
 *
 * */
var ColorAxisComposition;
(function (ColorAxisComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Variables
     *
     * */
    let ColorAxisConstructor;
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(ColorAxisClass, ChartClass, FxClass, LegendClass, SeriesClass) {
        const chartProto = ChartClass.prototype, fxProto = FxClass.prototype, seriesProto = SeriesClass.prototype;
        if (!chartProto.collectionsWithUpdate.includes('colorAxis')) {
            ColorAxisConstructor = ColorAxisClass;
            chartProto.collectionsWithUpdate.push('colorAxis');
            chartProto.collectionsWithInit.colorAxis = [
                chartProto.addColorAxis
            ];
            addEvent(ChartClass, 'afterCreateAxes', onChartAfterCreateAxes);
            wrapChartCreateAxis(ChartClass);
            fxProto.fillSetter = wrapFxFillSetter;
            fxProto.strokeSetter = wrapFxStrokeSetter;
            addEvent(LegendClass, 'afterGetAllItems', onLegendAfterGetAllItems);
            addEvent(LegendClass, 'afterColorizeItem', onLegendAfterColorizeItem);
            addEvent(LegendClass, 'afterUpdate', onLegendAfterUpdate);
            extend(seriesProto, {
                optionalAxis: 'colorAxis',
                translateColors: seriesTranslateColors
            });
            extend(seriesProto.pointClass.prototype, {
                setVisible: pointSetVisible
            });
            addEvent(SeriesClass, 'afterTranslate', onSeriesAfterTranslate, { order: 1 });
            addEvent(SeriesClass, 'bindAxes', onSeriesBindAxes);
        }
    }
    ColorAxisComposition.compose = compose;
    /**
     * Extend the chart createAxes method to also make the color axis.
     * @internal
     */
    function onChartAfterCreateAxes() {
        const { userOptions } = this;
        this.colorAxis = [];
        // If a `colorAxis` config is present in the user options (not in a
        // theme), instanciate it.
        if (userOptions.colorAxis) {
            userOptions.colorAxis = splat(userOptions.colorAxis);
            userOptions.colorAxis.map((axisOptions) => (new ColorAxisConstructor(this, axisOptions)));
        }
    }
    /**
     * Add the color axis. This also removes the axis' own series to prevent
     * them from showing up individually.
     * @internal
     */
    function onLegendAfterGetAllItems(e) {
        const colorAxes = this.chart.colorAxis || [], destroyItem = (item) => {
            const i = e.allItems.indexOf(item);
            if (i !== -1) {
                // #15436
                this.destroyItem(e.allItems[i]);
                e.allItems.splice(i, 1);
            }
        };
        let colorAxisItems = [], options, i;
        colorAxes.forEach(function (colorAxis) {
            options = colorAxis.options;
            if (options?.showInLegend) {
                // Data classes
                if (options.dataClasses && options.visible) {
                    colorAxisItems = colorAxisItems.concat(colorAxis.getDataClassLegendSymbols());
                    // Gradient legend
                }
                else if (options.visible) {
                    // Add this axis on top
                    colorAxisItems.push(colorAxis);
                }
                // If dataClasses are defined or showInLegend option is not set
                // to true, do not add color axis' series to legend.
                colorAxis.series.forEach(function (series) {
                    if (!series.options.showInLegend || options.dataClasses) {
                        if (series.options.legendType === 'point') {
                            series.points.forEach(function (point) {
                                destroyItem(point);
                            });
                        }
                        else {
                            destroyItem(series);
                        }
                    }
                });
            }
        });
        i = colorAxisItems.length;
        while (i--) {
            e.allItems.unshift(colorAxisItems[i]);
        }
    }
    /** @internal */
    function onLegendAfterColorizeItem(e) {
        if (e.visible && e.item.legendColor) {
            e.item.legendItem.symbol.attr({
                fill: e.item.legendColor
            });
        }
    }
    /**
     * Updates in the legend need to be reflected in the color axis. (#6888)
     * @internal
     */
    function onLegendAfterUpdate(e) {
        this.chart.colorAxis?.forEach((colorAxis) => {
            colorAxis.update({}, e.redraw);
        });
    }
    /**
     * Calculate and set colors for points.
     * @internal
     */
    function onSeriesAfterTranslate() {
        if (this.chart.colorAxis?.length ||
            this.colorAttribs) {
            this.translateColors();
        }
    }
    /**
     * Add colorAxis to series axisTypes.
     * @internal
     */
    function onSeriesBindAxes() {
        const axisTypes = this.axisTypes;
        if (!axisTypes) {
            this.axisTypes = ['colorAxis'];
        }
        else if (axisTypes.indexOf('colorAxis') === -1) {
            axisTypes.push('colorAxis');
        }
    }
    /**
     * Set the visibility of a single point
     * @internal
     * @function Highcharts.colorPointMixin.setVisible
     * @param {boolean} visible
     */
    function pointSetVisible(vis) {
        const point = this, method = vis ? 'show' : 'hide';
        point.visible = point.options.visible = Boolean(vis);
        // Show and hide associated elements
        ['graphic', 'dataLabel'].forEach(function (key) {
            if (point[key]) {
                point[key][method]();
            }
        });
        this.series.buildKDTree(); // Rebuild kdtree #13195
    }
    ColorAxisComposition.pointSetVisible = pointSetVisible;
    /**
     * In choropleth maps, the color is a result of the value, so this needs
     * translation too
     * @internal
     * @function Highcharts.colorSeriesMixin.translateColors
     */
    function seriesTranslateColors() {
        const series = this, points = this.getPointsCollection(), // #17945
        nullColor = this.options.nullColor, colorAxis = this.colorAxis, colorKey = this.colorKey;
        points.forEach((point) => {
            const value = point.getNestedProperty(colorKey), color = point.options.color || (point.isNull || point.value === null ?
                nullColor :
                (colorAxis && typeof value !== 'undefined') ?
                    colorAxis.toColor(value, point) :
                    point.color || series.color);
            if (color && point.color !== color) {
                point.color = color;
                if (series.options.legendType === 'point' &&
                    point.legendItem &&
                    point.legendItem.label) {
                    series.chart.legend.colorizeItem(point, point.visible);
                }
            }
        });
    }
    /** @internal */
    function wrapChartCreateAxis(ChartClass) {
        const superCreateAxis = ChartClass.prototype.createAxis;
        ChartClass.prototype.createAxis = function (type, options) {
            const chart = this;
            if (type !== 'colorAxis') {
                return superCreateAxis.apply(chart, arguments);
            }
            const axis = new ColorAxisConstructor(chart, ColorAxisComposition_merge(options.axis, {
                index: chart[type].length,
                isX: false
            }));
            chart.isDirtyLegend = true;
            // Clear before 'bindAxes' (#11924)
            chart.axes.forEach((axis) => {
                axis.series = [];
            });
            chart.series.forEach((series) => {
                series.bindAxes();
                series.isDirtyData = true;
            });
            if (pick(options.redraw, true)) {
                chart.redraw(options.animation);
            }
            return axis;
        };
    }
    /**
     * Handle animation of the color attributes directly.
     * @internal
     */
    function wrapFxFillSetter() {
        this.elem.attr('fill', ColorAxisComposition_color(this.start).tweenTo(ColorAxisComposition_color(this.end), this.pos), void 0, true);
    }
    /**
     * Handle animation of the color attributes directly.
     * @internal
     */
    function wrapFxStrokeSetter() {
        this.elem.attr('stroke', ColorAxisComposition_color(this.start).tweenTo(ColorAxisComposition_color(this.end), this.pos), void 0, true);
    }
})(ColorAxisComposition || (ColorAxisComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Color_ColorAxisComposition = (ColorAxisComposition);

;// ./code/es-modules/Core/Axis/Color/ColorAxisDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
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
 * A color axis for series. Visually, the color
 * axis will appear as a gradient or as separate items inside the
 * legend, depending on whether the axis is scalar or based on data
 * classes.
 *
 * For supported color formats, see the
 * [docs article about colors](https://www.highcharts.com/docs/chart-design-and-style/colors).
 *
 * A scalar color axis is represented by a gradient. The colors either
 * range between the [minColor](#colorAxis.minColor) and the
 * [maxColor](#colorAxis.maxColor), or for more fine grained control the
 * colors can be defined in [stops](#colorAxis.stops). Often times, the
 * color axis needs to be adjusted to get the right color spread for the
 * data. In addition to stops, consider using a logarithmic
 * [axis type](#colorAxis.type), or setting [min](#colorAxis.min) and
 * [max](#colorAxis.max) to avoid the colors being determined by
 * outliers.
 *
 * When [dataClasses](#colorAxis.dataClasses) are used, the ranges are
 * subdivided into separate classes like categories based on their
 * values. This can be used for ranges between two values, but also for
 * a true category. However, when your data is categorized, it may be as
 * convenient to add each category to a separate series.
 *
 * Color axis does not work with: `sankey`, `sunburst`, `dependencywheel`,
 * `networkgraph`, `venn`, `gauge` and `solidgauge` series
 * types.
 *
 * Since v7.2.0 `colorAxis` can also be an array of options objects.
 *
 * See [the Axis object](/class-reference/Highcharts.Axis) for
 * programmatic access to the axis.
 *
 * @sample       {highcharts} highcharts/coloraxis/custom-color-key
 *               Column chart with color axis
 * @sample       {highcharts} highcharts/coloraxis/horizontal-layout
 *               Horizontal layout
 * @sample       {highmaps} maps/coloraxis/dataclasscolor
 *               With data classes
 * @sample       {highmaps} maps/coloraxis/mincolor-maxcolor
 *               Min color and max color
 *
 * @extends      xAxis
 * @excluding    alignTicks, allowDecimals, alternateGridColor, breaks,
 *               categories, crosshair, dateTimeLabelFormats, left,
 *               lineWidth, linkedTo, maxZoom, minRange, minTickInterval,
 *               offset, opposite, pane, plotBands, plotLines,
 *               reversedStacks, scrollbar, showEmpty, title, top,
 *               zoomEnabled
 * @product      highcharts highstock highmaps
 * @type         {*|Array<*>}
 * @optionparent colorAxis
 */
const colorAxisDefaults = {
    /**
     * Whether to allow decimals on the color axis.
     * @type      {boolean}
     * @default   true
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.allowDecimals
     */
    /**
     * Determines how to set each data class' color if no individual
     * color is set. The default value, `tween`, computes intermediate
     * colors between `minColor` and `maxColor`. The other possible
     * value, `category`, pulls colors from the global or chart specific
     * [colors](#colors) array.
     *
     * @sample {highmaps} maps/coloraxis/dataclasscolor/
     *         Category colors
     *
     * @type       {string}
     * @default    tween
     * @product    highcharts highstock highmaps
     * @validvalue ["tween", "category"]
     * @apioption  colorAxis.dataClassColor
     */
    /**
     * An array of data classes or ranges for the choropleth map. If
     * none given, the color axis is scalar and values are distributed
     * as a gradient between the minimum and maximum colors.
     *
     * @sample {highmaps} maps/demo/data-class-ranges/
     *         Multiple ranges
     *
     * @sample {highmaps} maps/demo/data-class-two-ranges/
     *         Two ranges
     *
     * @type      {Array<*>}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses
     */
    /**
     * The color of each data class. If not set, the color is pulled
     * from the global or chart-specific [colors](#colors) array. In
     * styled mode, this option is ignored. Instead, use colors defined
     * in CSS.
     *
     * @sample {highmaps} maps/demo/data-class-two-ranges/
     *         Explicit colors
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.color
     */
    /**
     * The start of the value range that the data class represents,
     * relating to the point value.
     *
     * The range of each `dataClass` is closed in both ends, but can be
     * overridden by the next `dataClass`.
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.from
     */
    /**
     * The name of the data class as it appears in the legend.
     * If no name is given, it is automatically created based on the
     * `from` and `to` values. For full programmatic control,
     * [legend.labelFormatter](#legend.labelFormatter) can be used.
     * In the formatter, `this.from` and `this.to` can be accessed.
     *
     * @sample {highmaps} maps/coloraxis/dataclasses-name/
     *         Named data classes
     *
     * @sample {highmaps} maps/coloraxis/dataclasses-labelformatter/
     *         Formatted data classes
     *
     * @type      {string}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.name
     */
    /**
     * The end of the value range that the data class represents,
     * relating to the point value.
     *
     * The range of each `dataClass` is closed in both ends, but can be
     * overridden by the next `dataClass`.
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.dataClasses.to
     */
    /**
     * The layout of the color axis. Can be `'horizontal'` or `'vertical'`.
     * If none given, the color axis has the same layout as the legend.
     *
     * @sample highcharts/coloraxis/horizontal-layout/
     *         Horizontal color axis layout with vertical legend
     *
     * @type      {string|undefined}
     * @since     7.2.0
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.layout
     */
    /** @ignore-option */
    lineWidth: 0,
    /**
     * Padding of the min value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer.
     *
     * @product highcharts highstock highmaps
     */
    minPadding: 0,
    /**
     * The maximum value of the axis in terms of map point values. If
     * `null`, the max value is automatically calculated. If the
     * `endOnTick` option is true, the max value might be rounded up.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Explicit min and max to reduce the effect of outliers
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.max
     */
    /**
     * The minimum value of the axis in terms of map point values. If
     * `null`, the min value is automatically calculated. If the
     * `startOnTick` option is true, the min value might be rounded
     * down.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Explicit min and max to reduce the effect of outliers
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.min
     */
    /**
     * Padding of the max value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer.
     *
     * @product highcharts highstock highmaps
     */
    maxPadding: 0,
    /**
     * Color of the grid lines extending from the axis across the
     * gradient.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Grid lines demonstrated
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product   highcharts highstock highmaps
     */
    gridLineColor: "#ffffff" /* Palette.backgroundColor */,
    /**
     * The width of the grid lines extending from the axis across the
     * gradient of a scalar color axis.
     *
     * @sample {highmaps} maps/coloraxis/gridlines/
     *         Grid lines demonstrated
     *
     * @product highcharts highstock highmaps
     */
    gridLineWidth: 1,
    /**
     * The interval of the tick marks in axis units. When `null`, the
     * tick interval is computed to approximately follow the
     * `tickPixelInterval`.
     *
     * @type      {number}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.tickInterval
     */
    /**
     * If [tickInterval](#colorAxis.tickInterval) is `null` this option
     * sets the approximate pixel interval of the tick marks.
     *
     * @product highcharts highstock highmaps
     */
    tickPixelInterval: 72,
    /**
     * Whether to force the axis to start on a tick. Use this option
     * with the `maxPadding` option to control the axis start.
     *
     * @product highcharts highstock highmaps
     */
    startOnTick: true,
    /**
     * Whether to force the axis to end on a tick. Use this option with
     * the [maxPadding](#colorAxis.maxPadding) option to control the
     * axis end.
     *
     * @product highcharts highstock highmaps
     */
    endOnTick: true,
    /** @ignore */
    offset: 0,
    /**
     * The triangular marker on a scalar color axis that points to the
     * value of the hovered area. To disable the marker, set
     * `marker: null`.
     *
     * @sample {highmaps} maps/coloraxis/marker/
     *         Black marker
     *
     * @declare Highcharts.PointMarkerOptionsObject
     * @product highcharts highstock highmaps
     */
    marker: {
        /**
         * Animation for the marker as it moves between values. Set to
         * `false` to disable animation. Defaults to `{ duration: 50 }`.
         *
         * @type    {boolean|Partial<Highcharts.AnimationOptionsObject>}
         * @product highcharts highstock highmaps
         */
        animation: {
            /** @internal */
            duration: 50
        },
        /** @internal */
        width: 0.01,
        /**
         * The color of the marker.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @product highcharts highstock highmaps
         */
        color: "#999999" /* Palette.neutralColor40 */
    },
    /**
     * The axis labels show the number for each tick.
     *
     * For more live examples on label options, see [xAxis.labels in the
     * Highcharts API.](/highcharts#xAxis.labels)
     *
     * @extends xAxis.labels
     * @product highcharts highstock highmaps
     */
    labels: {
        distance: 8,
        /**
         * How to handle overflowing labels on horizontal color axis. If set
         * to `"allow"`, it will not be aligned at all. By default it
         * `"justify"` labels inside the chart area. If there is room to
         * move it, it will be aligned to the edge, else it will be removed.
         *
         * @validvalue ["allow", "justify"]
         * @product    highcharts highstock highmaps
         */
        overflow: 'justify',
        rotation: 0
    },
    /**
     * The color to represent the minimum of the color axis. Unless
     * [dataClasses](#colorAxis.dataClasses) or
     * [stops](#colorAxis.stops) are set, the gradient starts at this
     * value.
     *
     * If dataClasses are set, the color is based on minColor and
     * maxColor unless a color is set for each data class, or the
     * [dataClassColor](#colorAxis.dataClassColor) is set.
     *
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor/
     *         Min and max colors on scalar (gradient) axis
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor-dataclasses/
     *         On data classes
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product highcharts highstock highmaps
     */
    minColor: "#e6e9ff" /* Palette.highlightColor10 */,
    /**
     * The color to represent the maximum of the color axis. Unless
     * [dataClasses](#colorAxis.dataClasses) or
     * [stops](#colorAxis.stops) are set, the gradient ends at this
     * value.
     *
     * If dataClasses are set, the color is based on minColor and
     * maxColor unless a color is set for each data class, or the
     * [dataClassColor](#colorAxis.dataClassColor) is set.
     *
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor/
     *         Min and max colors on scalar (gradient) axis
     * @sample {highmaps} maps/coloraxis/mincolor-maxcolor-dataclasses/
     *         On data classes
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product highcharts highstock highmaps
     */
    maxColor: "#0022ff" /* Palette.highlightColor100 */,
    /**
     * Color stops for the gradient of a scalar color axis. Use this in
     * cases where a linear gradient between a `minColor` and `maxColor`
     * is not sufficient. The stops is an array of tuples, where the
     * first item is a float between 0 and 1 assigning the relative
     * position in the gradient, and the second item is the color.
     *
     * @sample highcharts/coloraxis/coloraxis-stops/
     *         Color axis stops
     * @sample highcharts/coloraxis/color-key-with-stops/
     *         Color axis stops with custom colorKey
     * @sample {highmaps} maps/demo/heatmap/
     *         Heatmap with three color stops
     *
     * @type      {Array<Array<number,Highcharts.ColorString>>}
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.stops
     */
    /**
     * The pixel length of the main tick marks on the color axis.
     */
    tickLength: 5,
    /**
     * The type of interpolation to use for the color axis. Can be
     * `linear` or `logarithmic`.
     *
     * @sample highcharts/coloraxis/logarithmic-with-emulate-negative-values/
     *         Logarithmic color axis with extension to emulate negative
     *         values
     *
     * @type      {Highcharts.ColorAxisTypeValue}
     * @default   linear
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.type
     */
    /**
     * Whether to reverse the axis so that the highest number is closest
     * to the origin. Defaults to `false`.
     *
     * @type      {boolean}
     * @default   false
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.reversed
     */
    /**
     * @product   highcharts highstock highmaps
     * @excluding afterBreaks, pointBreak, pointInBreak
     * @apioption colorAxis.events
     */
    /**
     * Fires when the legend item belonging to the colorAxis is clicked.
     * One parameter, `event`, is passed to the function.
     *
     * **Note:** This option is deprecated in favor of
     * [legend.events.itemClick](#legend.events.itemClick).
     *
     * @deprecated 11.4.4
     * @type       {Function}
     * @product    highcharts highstock highmaps
     * @apioption  colorAxis.events.legendItemClick
     */
    /**
     * The width of the color axis. If it's a number, it is interpreted as
     * pixels.
     *
     * If it's a percentage string, it is interpreted as percentages of the
     * total plot width.
     *
     * @sample    highcharts/coloraxis/width-and-height
     *            Percentage width and pixel height for color axis
     *
     * @type      {number|string}
     * @since     11.3.0
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.width
     */
    /**
     * The height of the color axis. If it's a number, it is interpreted as
     * pixels.
     *
     * If it's a percentage string, it is interpreted as percentages of the
     * total plot height.
     *
     * @sample    highcharts/coloraxis/width-and-height
     *            Percentage width and pixel height for color axis
     *
     * @type      {number|string}
     * @since     11.3.0
     * @product   highcharts highstock highmaps
     * @apioption colorAxis.height
     */
    /**
     * Whether to display the colorAxis in the legend.
     *
     * @sample highcharts/coloraxis/hidden-coloraxis-with-3d-chart/
     *         Hidden color axis with 3d chart
     *
     * @see [heatmap.showInLegend](#series.heatmap.showInLegend)
     *
     * @since   4.2.7
     * @product highcharts highstock highmaps
     */
    showInLegend: true
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const ColorAxisDefaults = (colorAxisDefaults);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","LegendSymbol"],"commonjs":["highcharts","LegendSymbol"],"commonjs2":["highcharts","LegendSymbol"],"root":["Highcharts","LegendSymbol"]}
var highcharts_LegendSymbol_commonjs_highcharts_LegendSymbol_commonjs2_highcharts_LegendSymbol_root_Highcharts_LegendSymbol_ = __webpack_require__(500);
var highcharts_LegendSymbol_commonjs_highcharts_LegendSymbol_commonjs2_highcharts_LegendSymbol_root_Highcharts_LegendSymbol_default = /*#__PURE__*/__webpack_require__.n(highcharts_LegendSymbol_commonjs_highcharts_LegendSymbol_commonjs2_highcharts_LegendSymbol_root_Highcharts_LegendSymbol_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Core/Axis/Color/ColorAxis.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */






const { defaultOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { series: Series } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default());

const { defined, extend: ColorAxis_extend, fireEvent, isArray, isNumber, merge: ColorAxis_merge, pick: ColorAxis_pick, relativeLength } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
defaultOptions.colorAxis = ColorAxis_merge(defaultOptions.xAxis, ColorAxisDefaults);
/* *
 *
 *  Class
 *
 * */
/**
 * The ColorAxis object for inclusion in gradient legends.
 *
 * @class
 * @name Highcharts.ColorAxis
 * @augments Highcharts.Axis
 *
 * @param {Highcharts.Chart} chart
 * The related chart of the color axis.
 *
 * @param {Highcharts.ColorAxisOptions} userOptions
 * The color axis options for initialization.
 */
class ColorAxis extends (highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default()) {
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    static compose(ChartClass, FxClass, LegendClass, SeriesClass) {
        Color_ColorAxisComposition.compose(ColorAxis, ChartClass, FxClass, LegendClass, SeriesClass);
    }
    /* *
     *
     *  Constructors
     *
     * */
    /** @internal */
    constructor(chart, userOptions) {
        super(chart, userOptions);
        /** @internal */
        this.coll = 'colorAxis';
        /** @internal */
        this.visible = true;
        this.init(chart, userOptions);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the color axis.
     *
     * @function Highcharts.ColorAxis#init
     *
     * @param {Highcharts.Chart} chart
     * The related chart of the color axis.
     *
     * @param {Highcharts.ColorAxisOptions} userOptions
     * The color axis options for initialization.
     */
    init(chart, userOptions) {
        const axis = this;
        const legend = chart.options.legend || {}, horiz = userOptions.layout ?
            userOptions.layout !== 'vertical' :
            legend.layout !== 'vertical';
        axis.side = userOptions.side || horiz ? 2 : 1;
        axis.reversed = userOptions.reversed;
        axis.opposite = !horiz;
        super.init(chart, userOptions, 'colorAxis');
        // `super.init` saves the extended user options, now replace it with the
        // originals
        this.userOptions = userOptions;
        if (isArray(chart.userOptions.colorAxis)) {
            chart.userOptions.colorAxis[this.index] = userOptions;
        }
        // Prepare data classes
        if (userOptions.dataClasses) {
            axis.initDataClasses(userOptions);
        }
        axis.initStops();
        // Override original axis properties
        axis.horiz = horiz;
        axis.zoomEnabled = false;
    }
    /**
     * Returns true if the series has points at all.
     *
     * @function Highcharts.ColorAxis#hasData
     *
     * @return {boolean}
     * True, if the series has points, otherwise false.
     */
    hasData() {
        return !!(this.tickPositions || []).length;
    }
    /**
     * Override so that ticks are not added in data class axes (#6914)
     * @internal
     */
    setTickPositions() {
        if (!this.dataClasses) {
            return super.setTickPositions();
        }
    }
    /**
     * Extend the setOptions method to process extreme colors and color stops.
     * @internal
     */
    setOptions(userOptions) {
        const options = ColorAxis_merge(defaultOptions.colorAxis, userOptions, 
        // Forced options
        {
            showEmpty: false,
            title: null,
            visible: this.chart.options.legend.enabled &&
                userOptions.visible !== false
        });
        super.setOptions(options);
        this.options.crosshair = this.options.marker;
    }
    /** @internal */
    setAxisSize() {
        const axis = this, chart = axis.chart, symbol = axis.legendItem?.symbol;
        let { width, height } = axis.getSize();
        if (symbol) {
            this.left = +symbol.attr('x');
            this.top = +symbol.attr('y');
            this.width = width = +symbol.attr('width');
            this.height = height = +symbol.attr('height');
            this.right = chart.chartWidth - this.left - width;
            this.bottom = chart.chartHeight - this.top - height;
            this.pos = this.horiz ? this.left : this.top;
        }
        // Fake length for disabled legend to avoid tick issues
        // and such (#5205)
        this.len = (this.horiz ? width : height) ||
            ColorAxis.defaultLegendLength;
    }
    /**
     * Override the getOffset method to add the whole axis groups inside the
     * legend.
     * @internal
     */
    getOffset() {
        const axis = this;
        const group = axis.legendItem?.group;
        const sideOffset = axis.chart.axisOffset[axis.side];
        if (group) {
            // Hook for the getOffset method to add groups to this parent
            // group
            axis.axisParent = group;
            // Call the base
            super.getOffset();
            const legend = this.chart.legend;
            // Adds `maxLabelLength` needed for label padding corrections done
            // by `render()` and `getMargins()` (#15551).
            legend.allItems.forEach(function (item) {
                if (item instanceof ColorAxis) {
                    item.drawLegendSymbol(legend, item);
                }
            });
            legend.render();
            this.chart.getMargins(true);
            // First time only
            if (!axis.added) {
                axis.added = true;
            }
            axis.labelLeft = 0;
            axis.labelRight = axis.width;
            // Reset it to avoid color axis reserving space
            axis.chart.axisOffset[axis.side] = sideOffset;
        }
    }
    /**
     * Create the color gradient.
     * @internal
     */
    setLegendColor() {
        const axis = this;
        const horiz = axis.horiz;
        const reversed = axis.reversed;
        const one = reversed ? 1 : 0;
        const zero = reversed ? 0 : 1;
        const grad = horiz ? [one, 0, zero, 0] : [0, zero, 0, one]; // #3190
        axis.legendColor = {
            linearGradient: {
                x1: grad[0],
                y1: grad[1],
                x2: grad[2],
                y2: grad[3]
            },
            stops: axis.stops
        };
    }
    /**
     * The color axis appears inside the legend and has its own legend symbol.
     * @internal
     */
    drawLegendSymbol(legend, item) {
        const axis = this, legendItem = item.legendItem || {}, padding = legend.padding, legendOptions = legend.options, labelOptions = axis.options.labels, itemDistance = ColorAxis_pick(legendOptions.itemDistance, 10), horiz = axis.horiz, { width, height } = axis.getSize(), labelPadding = ColorAxis_pick(
        // @todo: This option is not documented, nor implemented when
        // vertical
        legendOptions.labelPadding, horiz ? 16 : 30);
        this.setLegendColor();
        // Create the gradient
        if (!legendItem.symbol) {
            legendItem.symbol = this.chart.renderer.symbol('roundedRect')
                .attr({
                r: legendOptions.symbolRadius ?? 3,
                zIndex: 1
            }).add(legendItem.group);
        }
        legendItem.symbol.attr({
            x: 0,
            y: (legend.baseline || 0) - 11,
            width: width,
            height: height
        });
        // Set how much space this legend item takes up
        legendItem.labelWidth = (width +
            padding +
            (horiz ?
                itemDistance :
                ColorAxis_pick(labelOptions.x, labelOptions.distance) +
                    (this.maxLabelLength || 0)));
        legendItem.labelHeight = height + padding + (horiz ? labelPadding : 0);
    }
    /**
     * Fool the legend.
     * @internal
     */
    setState(state) {
        this.series.forEach(function (series) {
            series.setState(state);
        });
    }
    /** @internal */
    setVisible() {
    }
    /** @internal */
    getSeriesExtremes() {
        const axis = this;
        const series = axis.series;
        let colorValArray, colorKey, calculatedExtremes, cSeries, i = series.length;
        this.dataMin = Infinity;
        this.dataMax = -Infinity;
        while (i--) { // X, y, value, other
            cSeries = series[i];
            colorKey = cSeries.colorKey = ColorAxis_pick(cSeries.options.colorKey, cSeries.colorKey, cSeries.pointValKey, cSeries.zoneAxis, 'y');
            calculatedExtremes = cSeries[colorKey + 'Min'] &&
                cSeries[colorKey + 'Max'];
            // Find the first column that has values
            for (const key of [colorKey, 'value', 'y']) {
                colorValArray = cSeries.getColumn(key);
                if (colorValArray.length) {
                    break;
                }
            }
            // If color key extremes are already calculated, use them.
            if (calculatedExtremes) {
                cSeries.minColorValue = cSeries[colorKey + 'Min'];
                cSeries.maxColorValue = cSeries[colorKey + 'Max'];
            }
            else {
                const cExtremes = Series.prototype.getExtremes.call(cSeries, colorValArray);
                cSeries.minColorValue = cExtremes.dataMin;
                cSeries.maxColorValue = cExtremes.dataMax;
            }
            if (defined(cSeries.minColorValue) &&
                defined(cSeries.maxColorValue)) {
                this.dataMin =
                    Math.min(this.dataMin, cSeries.minColorValue);
                this.dataMax =
                    Math.max(this.dataMax, cSeries.maxColorValue);
            }
            if (!calculatedExtremes) {
                Series.prototype.applyExtremes.call(cSeries);
            }
        }
    }
    /**
     * Internal function to draw a crosshair.
     *
     * @function Highcharts.ColorAxis#drawCrosshair
     *
     * @param {Highcharts.PointerEventObject} [e]
     *        The event arguments from the modified pointer event, extended with
     *        `chartX` and `chartY`
     *
     * @param {Highcharts.Point} [point]
     *        The Point object if the crosshair snaps to points.
     *
     * @emits Highcharts.ColorAxis#event:afterDrawCrosshair
     * @emits Highcharts.ColorAxis#event:drawCrosshair
     */
    drawCrosshair(e, point) {
        const axis = this, legendItem = axis.legendItem || {}, plotX = point?.plotX, plotY = point?.plotY, axisPos = axis.pos, axisLen = axis.len;
        let crossPos;
        if (point) {
            crossPos = axis.toPixels(point.getNestedProperty(point.series.colorKey));
            if (crossPos < axisPos) {
                crossPos = axisPos - 2;
            }
            else if (crossPos > axisPos + axisLen) {
                crossPos = axisPos + axisLen + 2;
            }
            point.plotX = crossPos;
            point.plotY = axis.len - crossPos;
            super.drawCrosshair(e, point);
            point.plotX = plotX;
            point.plotY = plotY;
            if (axis.cross &&
                !axis.cross.addedToColorAxis &&
                legendItem.group) {
                axis.cross
                    .addClass('highcharts-coloraxis-marker')
                    .add(legendItem.group);
                axis.cross.addedToColorAxis = true;
                if (!axis.chart.styledMode &&
                    typeof axis.crosshair === 'object') {
                    axis.cross.attr({
                        fill: axis.crosshair.color
                    });
                }
            }
        }
    }
    /** @internal */
    getPlotLinePath(options) {
        const axis = this, left = axis.left, pos = options.translatedValue, top = axis.top;
        // Crosshairs only
        return isNumber(pos) ? // `pos` can be 0 (#3969)
            (axis.horiz ? [
                ['M', pos - 4, top - 6],
                ['L', pos + 4, top - 6],
                ['L', pos, top],
                ['Z']
            ] : [
                ['M', left, pos],
                ['L', left - 6, pos + 6],
                ['L', left - 6, pos - 6],
                ['Z']
            ]) :
            super.getPlotLinePath(options);
    }
    /**
     * Updates a color axis instance with a new set of options. The options are
     * merged with the existing options, so only new or altered options need to
     * be specified.
     *
     * @function Highcharts.ColorAxis#update
     *
     * @param {Highcharts.ColorAxisOptions} newOptions
     * The new options that will be merged in with existing options on the color
     * axis.
     *
     * @param {boolean} [redraw]
     * Whether to redraw the chart after the color axis is altered. If doing
     * more operations on the chart, it is a good idea to set redraw to `false`
     * and call {@link Highcharts.Chart#redraw} after.
     */
    update(newOptions, redraw) {
        const axis = this, chart = axis.chart, legend = chart.legend;
        this.series.forEach((series) => {
            // Needed for Axis.update when choropleth colors change
            series.isDirtyData = true;
        });
        // When updating data classes, destroy old items and make sure new
        // ones are created (#3207)
        if (newOptions.dataClasses && legend.allItems || axis.dataClasses) {
            axis.destroyItems();
        }
        super.update(newOptions, redraw);
        if (axis.legendItem?.label) {
            axis.setLegendColor();
            legend.colorizeItem(this, true);
        }
    }
    /**
     * Destroy color axis legend items.
     * @internal
     */
    destroyItems() {
        const axis = this, chart = axis.chart, legendItem = axis.legendItem || {};
        if (legendItem.label) {
            chart.legend.destroyItem(axis);
        }
        else if (legendItem.labels) {
            for (const item of legendItem.labels) {
                chart.legend.destroyItem(item);
            }
        }
        chart.isDirtyLegend = true;
    }
    /**
     * Removing the whole axis (#14283)
     * @internal
     */
    destroy() {
        this.chart.isDirtyLegend = true;
        this.destroyItems();
        super.destroy(...[].slice.call(arguments));
    }
    /**
     * Removes the color axis and the related legend item.
     *
     * @function Highcharts.ColorAxis#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart following the remove.
     */
    remove(redraw) {
        this.destroyItems();
        super.remove(redraw);
    }
    /**
     * Get the legend item symbols for data classes.
     * @internal
     */
    getDataClassLegendSymbols() {
        const axis = this, chart = axis.chart, legendItems = (axis.legendItem &&
            axis.legendItem.labels ||
            []), legendOptions = chart.options.legend, valueDecimals = ColorAxis_pick(legendOptions.valueDecimals, -1), valueSuffix = ColorAxis_pick(legendOptions.valueSuffix, '');
        const getPointsInDataClass = (i) => axis.series.reduce((points, s) => {
            points.push(...s.points.filter((point) => point.dataClass === i));
            return points;
        }, []);
        let name;
        if (!legendItems.length) {
            axis.dataClasses.forEach((dataClass, i) => {
                const from = dataClass.from, to = dataClass.to, { numberFormatter } = chart;
                let vis = true;
                // Assemble the default name. This can be overridden
                // by legend.options.labelFormatter
                name = '';
                if (typeof from === 'undefined') {
                    name = '< ';
                }
                else if (typeof to === 'undefined') {
                    name = '> ';
                }
                if (typeof from !== 'undefined') {
                    name += numberFormatter(from, valueDecimals) + valueSuffix;
                }
                if (typeof from !== 'undefined' && typeof to !== 'undefined') {
                    name += ' - ';
                }
                if (typeof to !== 'undefined') {
                    name += numberFormatter(to, valueDecimals) + valueSuffix;
                }
                // Add a mock object to the legend items
                legendItems.push(ColorAxis_extend({
                    chart,
                    name,
                    options: {},
                    drawLegendSymbol: (highcharts_LegendSymbol_commonjs_highcharts_LegendSymbol_commonjs2_highcharts_LegendSymbol_root_Highcharts_LegendSymbol_default()).rectangle,
                    visible: true,
                    isDataClass: true,
                    // Override setState to set either normal or inactive
                    // state to all points in this data class
                    setState: (state) => {
                        for (const point of getPointsInDataClass(i)) {
                            point.setState(state);
                        }
                    },
                    // Override setState to show or hide all points in this
                    // data class
                    setVisible: function () {
                        this.visible = vis = axis.visible = !vis;
                        const affectedSeries = [];
                        for (const point of getPointsInDataClass(i)) {
                            point.setVisible(vis);
                            point.hiddenInDataClass = !vis; // #20441
                            if (affectedSeries.indexOf(point.series) === -1) {
                                affectedSeries.push(point.series);
                            }
                        }
                        chart.legend.colorizeItem(this, vis);
                        affectedSeries.forEach((series) => {
                            fireEvent(series, 'afterDataClassLegendClick');
                        });
                    }
                }, dataClass));
            });
        }
        return legendItems;
    }
    /**
     * Get size of color axis symbol.
     * @internal
     */
    getSize() {
        const axis = this, { chart, horiz } = axis, { height: colorAxisHeight, width: colorAxisWidth } = axis.options, { legend: legendOptions } = chart.options, width = ColorAxis_pick(defined(colorAxisWidth) ?
            relativeLength(colorAxisWidth, chart.chartWidth) : void 0, legendOptions?.symbolWidth, horiz ? ColorAxis.defaultLegendLength : 12), height = ColorAxis_pick(defined(colorAxisHeight) ?
            relativeLength(colorAxisHeight, chart.chartHeight) : void 0, legendOptions?.symbolHeight, horiz ? 12 : ColorAxis.defaultLegendLength);
        return {
            width,
            height
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/** @internal */
ColorAxis.defaultLegendLength = 200;
/** @internal */
ColorAxis.keepProps = [
    'legendItem'
];
ColorAxis_extend(ColorAxis.prototype, Color_ColorAxisBase);
/* *
 *
 *  Registry
 *
 * */
// Properties to preserve after destroy, for Axis.update (#5881, #6025).
Array.prototype.push.apply((highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default()).keepProps, ColorAxis.keepProps);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Color_ColorAxis = (ColorAxis);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Color axis types
 *
 * @typedef {"linear"|"logarithmic"} Highcharts.ColorAxisTypeValue
 */
''; // Detach doclet above

;// ./code/es-modules/masters/modules/coloraxis.src.js
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/color-axis
 * @requires highcharts
 *
 * ColorAxis module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Pawel Potaczek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */



const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.ColorAxis = G.ColorAxis || Color_ColorAxis;
G.ColorAxis.compose(G.Chart, G.Fx, G.Legend, G.Series);
/* harmony default export */ const coloraxis_src = ((/* unused pure expression or super */ null && (Highcharts)));

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

const { scatter: { prototype: { pointClass: ScatterPoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;
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

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGRenderer"],"commonjs":["highcharts","SVGRenderer"],"commonjs2":["highcharts","SVGRenderer"],"root":["Highcharts","SVGRenderer"]}
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_ = __webpack_require__(540);
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_);
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









const { seriesTypes: { scatter: ScatterSeries } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default());
const { diffObjects, error, extend: ContourSeries_extend, merge: ContourSeries_merge, normalizeTickInterval } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
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
            this.setOptions(ContourSeries_merge(this.userOptions, options))), hasNonUniformPlotOptions = allOptions ?
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
        return ContourSeries.rgbaAsFrac(new (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default())(lineColor).rgba);
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
ContourSeries.defaultOptions = ContourSeries_merge(ScatterSeries.defaultOptions, Contour_ContourSeriesDefaults);
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
(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default()).prototype.symbols.cross = cross;
ContourSeries_extend(ContourSeries.prototype, {
    pointClass: Contour_ContourPoint,
    pointArrayMap: ['y', 'value'],
    keysAffectYAxis: ['y'],
    invertible: false
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('contour', ContourSeries);

;// ./code/es-modules/masters/modules/contour.src.js





/* harmony default export */ const contour_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});