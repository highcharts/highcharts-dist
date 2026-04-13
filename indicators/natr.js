!/**
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
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/natr",["highcharts/highcharts"],function(t){return e(t,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/natr"]=e(t._Highcharts,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(t,e)=>(()=>{"use strict";var r={512:t=>{t.exports=e},944:e=>{e.exports=t}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var a=o[t]={exports:{}};return r[t](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};n.d(a,{default:()=>g});var i=n(944),s=n.n(i),c=n(512),u=n.n(c);let{doc:l,win:p}=s();function f(t){return h(t)&&"number"==typeof t.nodeType}function h(t,e){let r;return!!t&&"object"==typeof t&&(!e||"[object Array]"!==(r=Object.prototype.toString.call(t))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{atr:y}=u().seriesTypes;class d extends y{getValues(t,e){let r=super.getValues.apply(this,arguments),o=r.values.length,n=t.yData,a=0,i=e.period-1;if(r){for(;a<o;a++)r.yData[a]=r.values[a][1]/n[i][3]*100,r.values[a][1]=r.yData[a],i++;return r}}}d.defaultOptions=function(t,...e){let r,o=[t,...e],n={},a=function(t,e){return"object"!=typeof t&&(t={}),function(t,e,r){for(let r in t)Object.hasOwnProperty.call(t,r)&&e.call((0,t[r]),t[r],r,t)}(e,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!h(r,!0)||(n=r?.constructor,h(r,!0)&&!f(r)&&n?.name&&"Object"!==n.name)||f(r)?t[o]=e[o]:t[o]=a(t[o]||{},r)}}),t};!0===t&&(n=o[1],o=Array.prototype.slice.call(o,2));let i=o.length;for(r=0;r<i;r++)n=a(n,o[r]);return n}(y.defaultOptions,{tooltip:{valueSuffix:"%"}}),u().registerSeriesType("natr",d);let g=s();return a.default})());