// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/dark-unica
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
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
;// ./code/es-modules/Extensions/Themes/DarkUnica.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *  Dark theme for Highcharts JS
 *
 *
 * */



const { setOptions } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Theme
 *
 * */
var DarkUnicaTheme;
(function (DarkUnicaTheme) {
    /* *
     *
     *  Constants
     *
     * */
    DarkUnicaTheme.options = {
        palette: {
            colorScheme: 'dark',
            dark: {
                backgroundColor: '#3e3e40',
                neutralColor: '#f0f0f3',
                highlightColor: '#75fffd',
                colors: [
                    '#2b908f', '#90ee7e', '#f45b5b', '#7798BF',
                    '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B',
                    '#DF5353', '#7798BF', '#aaeeee'
                ]
            }
        },
        chart: {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#2a2a2b'],
                    [1, '#3e3e40']
                ]
            },
            style: {
                fontFamily: '\'Unica One\', sans-serif'
            }
        },
        title: {
            style: {
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                textTransform: 'uppercase'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    style: {
                        fontSize: '13px'
                    }
                }
            }
        },
        legend: {
            backgroundColor: '#00000388'
        },
        global: {
            buttonTheme: {
                states: {
                    hover: {
                        fill: '#707073'
                    },
                    select: {
                        fill: '#000003'
                    }
                }
            }
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Apply the theme.
     */
    function apply() {
        // Load the fonts
        (0,external_highcharts_src_js_default_namespaceObject.createElement)('link', {
            href: 'https://fonts.googleapis.com/css?family=Unica+One',
            rel: 'stylesheet',
            type: 'text/css'
        }, void 0, document.getElementsByTagName('head')[0]);
        // Apply the theme
        setOptions(DarkUnicaTheme.options);
    }
    DarkUnicaTheme.apply = apply;
})(DarkUnicaTheme || (DarkUnicaTheme = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const DarkUnica = (DarkUnicaTheme);

;// ./code/es-modules/masters/themes/dark-unica.src.js




(external_highcharts_src_js_default_default()).theme = DarkUnica.options;
DarkUnica.apply();
/* harmony default export */ const dark_unica_src = ((external_highcharts_src_js_default_default()));

export { dark_unica_src as default };
