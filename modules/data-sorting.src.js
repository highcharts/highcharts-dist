/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/data-sorting
 * @requires highcharts
 *
 * Data sorting module
 *
 * (c) 2025-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/data-sorting", ["highcharts/highcharts"], function (amd1) {return factory(amd1);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/data-sorting"] = factory(root["_Highcharts"]);
	else
		root["Highcharts"] = factory(root["Highcharts"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  "default": () => (/* binding */ data_sorting_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Extensions/DataSorting/DataSortingComposition.js
/* *
 *
 *  (c) 2025-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


/* *
 *
 *  Variables
 *
 * */
/* *
 *
 *  Functions
 *
 * */
/**
 * Internal function to sort series data
 *
 * @internal
 */
function sortData(series, data) {
    const options = series.options, { sortKey = 'y' } = options.dataSorting || {}, getPointOptionsObject = function (series, pointOptions) {
        return ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(pointOptions) &&
            series.pointClass.prototype.optionsToObject.call({
                series: series
            }, pointOptions)) || {};
    };
    data.forEach((pointOptions, i) => {
        data[i] = getPointOptionsObject(series, pointOptions);
        data[i].index = i;
    });
    // Sorting
    const sortedData = data.concat().sort((a, b) => {
        const aValue = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.getNestedProperty)(sortKey, a);
        const bValue = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.getNestedProperty)(sortKey, b);
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    });
    // Set x value depending on the position in the array
    sortedData.forEach((point, i) => {
        point.x = i;
    });
    // Set the same x for linked series points if they don't have their
    // own sorting
    if (series.linkedSeries) {
        series.linkedSeries.forEach((linkedSeries) => {
            const options = linkedSeries.options, seriesData = options.data;
            if (!options.dataSorting?.enabled &&
                seriesData) {
                seriesData.forEach((pointOptions, i) => {
                    seriesData[i] = getPointOptionsObject(linkedSeries, pointOptions);
                    if (data[i]) {
                        seriesData[i].x = data[i].x;
                        seriesData[i].index = i;
                    }
                });
                linkedSeries.setData(seriesData, false);
            }
        });
    }
    return data;
}
/**
 * Sort and return chart series in order depending on the number of linked
 * series.
 */
function getSeriesOrderByLinks(chart) {
    return chart.series.concat().sort((a, b) => {
        if (a.linkedSeries.length || b.linkedSeries.length) {
            return b.linkedSeries.length - a.linkedSeries.length;
        }
        return 0;
    });
}
/**
 * Set data for all series with enabled sorting.
 */
function setSortedData(chart) {
    getSeriesOrderByLinks(chart).forEach((series) => {
        // We need to set data for series with sorting after series init
        if (!series.points && !series.data && series.enabledDataSorting) {
            series.setData(series.options.data, false);
        }
    });
}
/**
 * Set properties for a series if data sorting is enabled.
 */
function setDataSortingProperties(series) {
    var _a;
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.extend)(series, {
        requireSorting: false,
        sorted: false,
        enabledDataSorting: true,
        allowDG: false
    });
    // To allow unsorted data for column series.
    (_a = series.options).pointRange ?? (_a.pointRange = 1);
}
/**
 * @private
 */
function compose(ChartClass, SeriesClass) {
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.wrap)(SeriesClass.prototype, 'setData', function (proceed, data, ...args) {
        if (this.options.dataSorting?.enabled) {
            // Not ready until we have linked series. Instead, call
            // `setData` again on `beforeRender`.
            if (!this.chart.hasInitializedLinkedSeries) {
                return this;
            }
            if (Array.isArray(data)) {
                data = sortData(this, data);
            }
        }
        return proceed.apply(this, [data].concat(args));
    });
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(ChartClass, 'beforeRender', function () {
        setSortedData(this);
    });
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(ChartClass, 'afterLinkSeries', function () {
        this.series.forEach((series) => {
            if (series.linkedParent?.enabledDataSorting) {
                setDataSortingProperties(series);
            }
        });
        this.hasInitializedLinkedSeries = true;
    });
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(ChartClass, 'afterAddSeries', function ({ series }) {
        if (series.enabledDataSorting) {
            // We need to call `setData` after `linkSeries`
            series.setData(series.options.data, false);
        }
    });
    // Set data for series with sorting enabled if it isn't set yet
    // (#19715, #20318)
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'afterUpdate', function () {
        setSortedData(this.chart);
    });
    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'afterInit', function () {
        if (this.options.dataSorting?.enabled) {
            setDataSortingProperties(this);
        }
    });
}
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Options for series data sorting.
 *
 * @since     8.0.0
 * @product   highcharts highstock
 * @requires  modules/data-sorting
 * @apioption plotOptions.series.dataSorting
 */
/**
 * Enable or disable data sorting for the series. Use [xAxis.reversed](
 * #xAxis.reversed) to change the sorting order.
 *
 * @sample {highcharts} highcharts/datasorting/animation/
 *         Data sorting in scatter-3d
 * @sample {highcharts} highcharts/datasorting/labels-animation/
 *         Axis labels animation
 * @sample {highcharts} highcharts/datasorting/dependent-sorting/
 *         Dependent series sorting
 * @sample {highcharts} highcharts/datasorting/independent-sorting/
 *         Independent series sorting
 *
 * @type      {boolean}
 * @since     8.0.0
 * @apioption plotOptions.series.dataSorting.enabled
 */
/**
 * Whether to allow matching points by name in an update. If this option
 * is disabled, points will be matched by order.
 *
 * @sample {highcharts} highcharts/datasorting/match-by-name/
 *         Enabled match by name
 *
 * @type      {boolean}
 * @since     8.0.0
 * @apioption plotOptions.series.dataSorting.matchByName
 */
/**
 * Determines what data value should be used to sort by.
 *
 * @sample {highcharts} highcharts/datasorting/sort-key/
 *         Sort key as `z` value
 *
 * @type      {string}
 * @since     8.0.0
 * @default   y
 * @apioption plotOptions.series.dataSorting.sortKey
 */
/* *
 *
 *  Default Export
 *
 * */
const DataSortingComposition = {
    compose
};
/* harmony default export */ const DataSorting_DataSortingComposition = (DataSortingComposition);

;// ./code/es-modules/masters/modules/data-sorting.src.js




const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Compose
DataSorting_DataSortingComposition.compose(G.Chart, G.Series);
/* harmony default export */ const data_sorting_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});