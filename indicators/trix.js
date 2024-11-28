!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/trix",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/trix"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},i={};function s(e){var r=i[e];if(void 0!==r)return r.exports;var h=i[e]={exports:{}};return t[e](h,h.exports,s),h.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var h={};s.d(h,{default:()=>f});var o=s(944),a=/*#__PURE__*/s.n(o),n=s(512),p=/*#__PURE__*/s.n(n);let{tema:c}=p().seriesTypes,{correctFloat:u,merge:l}=a();class g extends c{getTemaPoint(e,r,t,i){if(i>r)return[e[i-3],0!==t.prevLevel3?u(t.level3-t.prevLevel3)/t.prevLevel3*100:null]}}g.defaultOptions=l(c.defaultOptions),p().registerSeriesType("trix",g);let f=a();return h.default})());