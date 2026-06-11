// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/high-contrast-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
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
;// ./code/es-modules/Extensions/Themes/HighContrast.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Øystein Moseng, Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *  Accessible high-contrast theme for Highcharts. Specifically tailored
 *  towards 3:1 contrast against white/off-white backgrounds. Neighboring
 *  colors are tested for color blindness.
 *
 *
 * */


const { setOptions } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Theme
 *
 * */
var HighContrastLightTheme;
(function (HighContrastLightTheme) {
    /* *
     *
     *  Constants
     *
     * */
    HighContrastLightTheme.options = {
        palette: {
            light: {
                colors: [
                    '#265FB5',
                    '#222',
                    '#698F01',
                    '#F4693E',
                    '#4C0684',
                    '#0FA388',
                    '#B7104A',
                    '#AF9023',
                    '#1A704C',
                    '#B02FDD'
                ]
            },
            dark: {
                colors: [
                    '#67B9EE',
                    '#CEEDA5',
                    '#9F6AE1',
                    '#FEA26E',
                    '#6BA48F',
                    '#EA3535',
                    '#8D96B7',
                    '#ECCA15',
                    '#20AA09',
                    '#E0C3E4'
                ]
            }
        },
        credits: {
            style: {
                color: 'light-dark(#767676, #F0F0F3)'
            }
        },
        navigator: {
            series: {
                color: 'light-dark(#5f98cf, #7798BF)',
                lineColor: 'light-dark(#5f98cf, #A6C7ED)'
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
        setOptions(HighContrastLightTheme.options);
    }
    HighContrastLightTheme.apply = apply;
})(HighContrastLightTheme || (HighContrastLightTheme = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HighContrast = (HighContrastLightTheme);

;// ./code/es-modules/masters/themes/high-contrast.src.js




(external_highcharts_src_js_default_default()).theme = HighContrast.options;
HighContrast.apply();
/* harmony default export */ const high_contrast_src = ((external_highcharts_src_js_default_default()));

export { high_contrast_src as default };
