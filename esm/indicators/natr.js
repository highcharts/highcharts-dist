/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let a=e.default.SeriesRegistry;var n=t.n(a);let{doc:l,win:s}=o();function u(e){return c(e)&&"number"==typeof e.nodeType}function c(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{atr:i}=n().seriesTypes;class p extends i{getValues(e,t){let r=super.getValues.apply(this,arguments),o=r.values.length,a=e.yData,n=0,l=t.period-1;if(r){for(;n<o;n++)r.yData[n]=r.values[n][1]/a[l][3]*100,r.values[n][1]=r.yData[n],l++;return r}}}p.defaultOptions=function(e,...t){let r,o=[e,...t],a={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let a;!c(r,!0)||(a=r?.constructor,c(r,!0)&&!u(r)&&a?.name&&"Object"!==a.name)||u(r)?e[o]=t[o]:e[o]=n(e[o]||{},r)}}),e};!0===e&&(a=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)a=n(a,o[r]);return a}(i.defaultOptions,{tooltip:{valueSuffix:"%"}}),n().registerSeriesType("natr",p);let f=o();export{f as default};