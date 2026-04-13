/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/indicators
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as t from"../highcharts.js";var e={};e.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a:a}),a},e.d=(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let a=t.default;var r=e.n(a);let o=t.default.SeriesRegistry;var l=e.n(o);let{doc:n,win:s}=r();function c(t){return i(t)&&"number"==typeof t.nodeType}function i(t,e){let a;return!!t&&"object"==typeof t&&(!e||"[object Array]"!==(a=Object.prototype.toString.call(t))&&"[object Array Iterator]"!==a)}Array.prototype.find;let{sma:u,stochastic:p}=l().seriesTypes;class f extends p{getValues(t,e){let a=e.periods,r=super.getValues.call(this,t,e),o={values:[],xData:[],yData:[]};if(!r)return;o.xData=r.xData.slice(a[1]-1);let l=r.yData.slice(a[1]-1),n=u.prototype.getValues.call(this,{xData:o.xData,yData:l},{index:1,period:a[2]});if(n){for(let t=0,e=o.xData.length;t<e;t++)o.yData[t]=[l[t][1],n.yData[t-a[2]+1]||null],o.values[t]=[o.xData[t],l[t][1],n.yData[t-a[2]+1]||null];return o}}}f.defaultOptions=function(t,...e){let a,r=[t,...e],o={},l=function(t,e){return"object"!=typeof t&&(t={}),function(t,e,a){for(let a in t)Object.hasOwnProperty.call(t,a)&&e.call((0,t[a]),t[a],a,t)}(e,function(a,r){if("__proto__"!==r&&"constructor"!==r){let o;!i(a,!0)||(o=a?.constructor,i(a,!0)&&!c(a)&&o?.name&&"Object"!==o.name)||c(a)?t[r]=e[r]:t[r]=l(t[r]||{},a)}}),t};!0===t&&(o=r[1],r=Array.prototype.slice.call(r,2));let n=r.length;for(a=0;a<n;a++)o=l(o,r[a]);return o}(p.defaultOptions,{params:{periods:[14,3,3]}}),function(t,e){let a;for(a in t||(t={}),e)t[a]=e[a]}(f.prototype,{nameBase:"Slow Stochastic"}),l().registerSeriesType("slowstochastic",f);let y=r();export{y as default};