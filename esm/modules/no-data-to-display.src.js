// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/no-data-to-display
 * @requires highcharts
 *
 * Plugin for displaying a message when there is no data visible in chart.
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
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
;// external ["../highcharts.src.js","default","AST"]
const external_highcharts_src_js_default_AST_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].AST;
var external_highcharts_src_js_default_AST_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_AST_namespaceObject);
;// ./code/es-modules/Extensions/NoDataToDisplay/NoDataDefaults.js
/* *
 *
 *  Plugin for displaying a message when there is no data visible in chart.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Øystein Moseng
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
 * @optionparent lang
 */
const lang = {
    /**
     * The text to display when the chart contains no data.
     *
     * @see [noData](#noData)
     *
     * @sample highcharts/no-data-to-display/no-data-line
     *         No-data text
     *
     * @since    3.0.8
     * @product  highcharts highstock
     * @requires modules/no-data-to-display
     */
    noData: 'No data to display'
};
/**
 * Options for displaying a message like "No data to display".
 * This feature requires the file no-data-to-display.js to be loaded in the
 * page. The actual text to display is set in the lang.noData option.
 *
 * @sample highcharts/no-data-to-display/no-data-line
 *         Line chart with no-data module
 * @sample highcharts/no-data-to-display/no-data-pie
 *         Pie chart with no-data module
 *
 * @product      highcharts highstock gantt
 * @requires     modules/no-data-to-display
 * @since        3.0.8
 * @optionparent noData
 */
const noData = {
    /**
     * An object of additional SVG attributes for the no-data label.
     *
     * @type      {Highcharts.SVGAttributes}
     * @product   highcharts highstock gantt
     * @requires  modules/no-data-to-display
     * @apioption noData.attr
     */
    attr: {
        zIndex: 1
    },
    /**
     * Whether to insert the label as HTML, or as pseudo-HTML rendered with
     * SVG.
     *
     * @type      {boolean}
     * @default   false
     * @since     4.1.10
     * @product   highcharts highstock gantt
     * @requires  modules/no-data-to-display
     * @apioption noData.useHTML
     */
    /**
     * The position of the no-data label, relative to the plot area.
     *
     * @type  {Highcharts.AlignObject}
     * @requires modules/no-data-to-display
     */
    position: {
        /**
         * Horizontal offset of the label, in pixels.
         *
         * @requires modules/no-data-to-display
         */
        x: 0,
        /**
         * Vertical offset of the label, in pixels.
         *
         * @requires modules/no-data-to-display
         */
        y: 0,
        /**
         * Horizontal alignment of the label.
         *
         * @type {Highcharts.AlignValue}
         * @requires modules/no-data-to-display
         */
        align: 'center',
        /**
         * Vertical alignment of the label.
         *
         * @type {Highcharts.VerticalAlignValue}
         * @requires modules/no-data-to-display
         */
        verticalAlign: 'middle'
    },
    /**
     * CSS styles for the no-data label.
     *
     * @sample highcharts/no-data-to-display/no-data-line
     *         Styled no-data text
     *
     * @type {Highcharts.CSSObject}
     * @requires modules/no-data-to-display
     */
    style: {
        /** @ignore */
        fontWeight: 'bold',
        /** @ignore */
        fontSize: '0.8em',
        /** @ignore */
        color: 'var(--highcharts-neutral-color-60)'
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const NoDataDefaults = {
    lang,
    noData
};
/** @internal */
/* harmony default export */ const NoDataToDisplay_NoDataDefaults = (NoDataDefaults);

;// ./code/es-modules/Extensions/NoDataToDisplay/NoDataToDisplay.js
/* *
 *
 *  Plugin for displaying a message when there is no data visible in chart.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Øystein Moseng
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */




/* *
 *
 *  Functions
 *
 * */
/**
 * Returns true if there are data points within the plot area now.
 *
 * @internal
 * @function Highcharts.Chart#hasData
 * @return {boolean|undefined}
 * True, if there are data points.
 * @requires modules/no-data-to-display
 */
function chartHasData() {
    const chart = this, series = chart.series || [];
    let i = series.length;
    while (i--) {
        if (series[i].hasData() && !series[i].options.isInternal) {
            return true;
        }
    }
    return chart.loadingShown; // #4588
}
/**
 * Hide the no-data message.
 *
 * @internal
 * @function Highcharts.Chart#hideNoData
 * @return {void}
 * @requires modules/no-data-to-display
 */
function chartHideNoData() {
    const chart = this;
    if (chart.noDataLabel) {
        chart.noDataLabel = chart.noDataLabel.destroy();
    }
}
/**
 * Display the no-data message.
 *
 * @internal
 * @function Highcharts.Chart#showNoData
 * @param {string} [str]
 * An optional message to show in place of the default one
 * @return {void}
 * @requires modules/no-data-to-display
 */
function chartShowNoData(str) {
    const chart = this, options = chart.options, text = str || (options && options.lang.noData) || '', noDataOptions = options && (options.noData || {});
    if (chart.renderer) { // Meaning chart is not destroyed
        if (!chart.noDataLabel) {
            chart.noDataLabel = chart.renderer
                .label(text, 0, 0, void 0, void 0, void 0, noDataOptions.useHTML, void 0, 'no-data')
                .add();
        }
        if (!chart.styledMode) {
            chart.noDataLabel
                .attr(external_highcharts_src_js_default_AST_default().filterUserAttributes(noDataOptions.attr || {}))
                .css(noDataOptions.style || {});
        }
        chart.noDataLabel.align((0,external_highcharts_src_js_default_namespaceObject.extend)(chart.noDataLabel.getBBox(), noDataOptions.position || {}), false, 'plotBox');
    }
}
/** @internal */
function compose(ChartClass, highchartsDefaultOptions) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.showNoData) {
        chartProto.hasData = chartHasData;
        chartProto.hideNoData = chartHideNoData;
        chartProto.showNoData = chartShowNoData;
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'render', onChartRender);
        (0,external_highcharts_src_js_default_namespaceObject.merge)(true, highchartsDefaultOptions, NoDataToDisplay_NoDataDefaults);
    }
}
/**
 * Add event listener to handle automatic show or hide the no-data message.
 * @internal
 */
function onChartRender() {
    const chart = this;
    if (chart.hasData()) {
        chart.hideNoData();
    }
    else {
        chart.showNoData();
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const NoDataToDisplay = {
    compose
};
/** @internal */
/* harmony default export */ const NoDataToDisplay_NoDataToDisplay = (NoDataToDisplay);

;// ./code/es-modules/masters/modules/no-data-to-display.src.js




const G = (external_highcharts_src_js_default_default());
NoDataToDisplay_NoDataToDisplay.compose(G.Chart, G.defaultOptions);
/* harmony default export */ const no_data_to_display_src = ((external_highcharts_src_js_default_default()));

export { no_data_to_display_src as default };
