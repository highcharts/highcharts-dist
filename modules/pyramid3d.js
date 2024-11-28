!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/pyramid3d
 * @requires highcharts
 * @requires highcharts/highcharts-3d
 * @requires highcharts/modules/cylinder
 * @requires highcharts/modules/funnel3d
 *
 * Highcharts 3D funnel module
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/pyramid3d",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/pyramid3d"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},i={};function s(e){var r=i[e];if(void 0!==r)return r.exports;var h=i[e]={exports:{}};return t[e](h,h.exports,s),h.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var h={};s.d(h,{default:()=>g});var a=s(944),o=/*#__PURE__*/s.n(a),d=s(512),n=/*#__PURE__*/s.n(d);let{funnel3d:c}=n().seriesTypes,{merge:p}=o();class u extends c{}u.defaultOptions=p(c.defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),n().registerSeriesType("pyramid3d",u);let g=o();return h.default})());