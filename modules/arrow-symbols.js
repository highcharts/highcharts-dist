!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/arrow-symbols
 * @requires highcharts
 *
 * Arrow Symbols
 *
 * (c) 2017-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/arrow-symbols",[["highcharts/highcharts"]],e):"object"==typeof exports?exports["highcharts/arrow-symbols"]=e(require("highcharts")):r.Highcharts=e(r.Highcharts)}(this,r=>(()=>{"use strict";var e={944:e=>{e.exports=r}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return o.d(e,{a:e}),e},o.d=(r,e)=>{for(var t in e)o.o(e,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},o.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);var n={};o.d(n,{default:()=>c});var a=o(944),i=/*#__PURE__*/o.n(a);function s(r,e,t,o){return[["M",r,e+o/2],["L",r+t,e],["L",r,e+o/2],["L",r+t,e+o]]}function f(r,e,t,o){return s(r,e,t/2,o)}function h(r,e,t,o){return[["M",r+t,e],["L",r,e+o/2],["L",r+t,e+o],["Z"]]}function u(r,e,t,o){return h(r,e,t/2,o)}({compose:function(r){let e=r.prototype.symbols;e.arrow=s,e["arrow-filled"]=h,e["arrow-filled-half"]=u,e["arrow-half"]=f,e["triangle-left"]=h,e["triangle-left-half"]=u}}).compose(i().SVGRenderer);let c=i();return n.default})());