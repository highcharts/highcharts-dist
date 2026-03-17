!/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafal Sebestjanski
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/trix",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/trix"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};i.d(n,{default:()=>g});var s=i(944),a=i.n(s),c=i(512),p=i.n(c);let{doc:l,win:u}=a();function f(e){return h(e)&&"number"==typeof e.nodeType}function h(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{tema:y}=p().seriesTypes;class d extends y{getTemaPoint(e,t,r,o){if(o>t){var i;return[e[o-3],0!==r.prevLevel3?((i=r.level3-r.prevLevel3)>1e14?i:parseFloat(i.toPrecision(14)))/r.prevLevel3*100:null]}}}d.defaultOptions=function(e,...t){let r,o=[e,...t],i={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let i;!h(r,!0)||(i=r?.constructor,h(r,!0)&&!f(r)&&i?.name&&"Object"!==i.name)||f(r)?e[o]=t[o]:e[o]=n(e[o]||{},r)}}),e};!0===e&&(i=o[1],o=Array.prototype.slice.call(o,2));let s=o.length;for(r=0;r<s;r++)i=n(i,o[r]);return i}(y.defaultOptions),p().registerSeriesType("trix",d);let g=a();return n.default})());