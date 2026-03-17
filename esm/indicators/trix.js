/**
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=e.default.SeriesRegistry;var l=t.n(n);let{doc:a,win:c}=o();function i(e){return p(e)&&"number"==typeof e.nodeType}function p(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{tema:s}=l().seriesTypes;class u extends s{getTemaPoint(e,t,r,o){if(o>t){var n;return[e[o-3],0!==r.prevLevel3?((n=r.level3-r.prevLevel3)>1e14?n:parseFloat(n.toPrecision(14)))/r.prevLevel3*100:null]}}}u.defaultOptions=function(e,...t){let r,o=[e,...t],n={},l=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!p(r,!0)||(n=r?.constructor,p(r,!0)&&!i(r)&&n?.name&&"Object"!==n.name)||i(r)?e[o]=t[o]:e[o]=l(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let a=o.length;for(r=0;r<a;r++)n=l(n,o[r]);return n}(s.defaultOptions),l().registerSeriesType("trix",u);let f=o();export{f as default};