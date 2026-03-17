/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafal Sebestjanski
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let n=e.default.SeriesRegistry;var o=t.n(n);let{doc:i,win:s}=a();function l(e){return c(e)&&"number"==typeof e.nodeType}function p(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function c(e,t){return!!e&&"object"==typeof e&&(!t||!p(e))}Array.prototype.find;let{sma:u}=o().seriesTypes;class y extends u{init(){let e=arguments,t=e[1].params,r=t&&t.average?t.average:void 0;this.averageIndicator=o().seriesTypes[r]||u,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,t){var r;return((r=e-t)>1e14?r:parseFloat(r.toPrecision(14)))/t*100}getValues(e,t){let r=t.index,a=e.xData,n=e.yData,o=n?n.length:0,i=[],s=[],l=[],c=this.averageIndicator,u=p(n[0]),y=c.prototype.getValues(e,t),d=y.yData,f=a.indexOf(y.xData[0]);if(d&&0!==d.length&&null!=r&&!(n.length<=f)){for(let e=f;e<o;e++){let t=this.calculateDisparityIndex(u?n[e][r]:n[e],d[e-f]);i.push([a[e],t]),s.push(a[e]),l.push(t)}return{values:i,xData:s,yData:l}}}}y.defaultOptions=function(e,...t){let r,a=[e,...t],n={},o=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,a){if("__proto__"!==a&&"constructor"!==a){let n;!c(r,!0)||(n=r?.constructor,c(r,!0)&&!l(r)&&n?.name&&"Object"!==n.name)||l(r)?e[a]=t[a]:e[a]=o(e[a]||{},r)}}),e};!0===e&&(n=a[1],a=Array.prototype.slice.call(a,2));let i=a.length;for(r=0;r<i;r++)n=o(n,a[r]);return n}(u.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(y.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),o().registerSeriesType("disparityindex",y);let d=a();export{d as default};