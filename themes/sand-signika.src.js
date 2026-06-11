// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/sand-signika
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/themes/sand-signika", ["highcharts/highcharts"], function (amd1) {return factory(amd1);});
	else if(typeof exports === 'object')
		exports["highcharts/themes/sand-signika"] = factory(root["_Highcharts"]);
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
  "default": () => (/* binding */ sand_signika_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Extensions/Themes/SandSignika.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *  Sand-Signika theme for Highcharts JS
 *
 *
 * */


const { setOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


/* *
 *
 *  Theme
 *
 * */
var SandSignikaTheme;
(function (SandSignikaTheme) {
    /* *
     *
     *  Constants
     *
     * */
    SandSignikaTheme.options = {
        palette: {
            light: {
                backgroundColor: '#f7f7f7',
                colors: [
                    '#f45b5b', '#8085e9', '#8d4654', '#7798BF',
                    '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B',
                    '#DF5353', '#7798BF', '#aaeeee'
                ]
            }
        },
        chart: {
            backgroundColor: 'light-dark(transparent, #141414)',
            style: {
                fontFamily: 'Signika, serif'
            }
        },
        title: {
            style: {
                color: 'var(--highcharts-neutral-color-100)',
                fontSize: '16px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            style: {
                color: 'var(--highcharts-neutral-color-100)'
            }
        },
        tooltip: {
            borderWidth: 0,
            // Inverted tooltip colors
            backgroundColor: 'var(--highcharts-neutral-color-80)',
            style: {
                color: 'var(--highcharts-background-color)'
            }
        },
        legend: {
            backgroundColor: 'var(--highcharts-neutral-color-10)',
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '13px'
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: 'var(--highcharts-neutral-color-60)'
                }
            }
        },
        yAxis: {
            labels: {
                style: {
                    color: 'var(--highcharts-neutral-color-60)'
                }
            }
        },
        plotOptions: {
            series: {
                shadow: true,
                dataLabels: {
                    color: 'light-dark(#000, #fff)',
                    style: {
                        textOutline: 'none'
                    }
                }
            },
            map: {
                shadow: false
            }
        },
        // Highcharts Stock specific
        global: {
            buttonTheme: {
                fill: 'light-dark(#fff, #000)',
                stroke: 'var(--highcharts-neutral-color-20)',
                states: {
                    select: {
                        fill: 'var(--highcharts-neutral-color-10)'
                    }
                }
            }
        },
        rangeSelector: {
            buttonTheme: {
                'stroke-width': 1
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
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.createElement)('link', {
            href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);
        // Add the background image to the container
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).Chart, 'afterGetContainer', function () {
            // eslint-disable-next-line no-invalid-this
            this.container.style.background =
                'url(https://www.highcharts.com/samples/graphics/sand.png)';
        });
        // Apply the theme
        setOptions(SandSignikaTheme.options);
    }
    SandSignikaTheme.apply = apply;
})(SandSignikaTheme || (SandSignikaTheme = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const SandSignika = (SandSignikaTheme);

;// ./code/es-modules/masters/themes/sand-signika.src.js




(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).theme = SandSignika.options;
SandSignika.apply();
/* harmony default export */ const sand_signika_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});