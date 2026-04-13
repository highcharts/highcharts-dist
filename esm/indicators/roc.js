/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=e.default.SeriesRegistry;var a=t.n(n);let{doc:l,win:u}=o();function c(e){return i(e)&&"number"==typeof e.nodeType}function s(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function i(e,t){return!!e&&"object"==typeof e&&(!t||!s(e))}Array.prototype.find;let{sma:p}=a().seriesTypes;class f extends p{getValues(e,t){let r=t.period,o=e.xData,n=e.yData,a=n?n.length:0,l=[],u=[],c=[],i,p=-1,f;if(!(o.length<=r)){for(s(n[0])&&(p=t.index),i=r;i<a;i++)f=function(e,t,r,o,n){let a,l;return l=n<0?(a=t[r-o])?(t[r]-a)/a*100:null:(a=t[r-o][n])?(t[r][n]-a)/a*100:null,[e[r],l]}(o,n,i,r,p),l.push(f),u.push(f[0]),c.push(f[1]);return{values:l,xData:u,yData:c}}}}f.defaultOptions=function(e,...t){let r,o=[e,...t],n={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!i(r,!0)||(n=r?.constructor,i(r,!0)&&!c(r)&&n?.name&&"Object"!==n.name)||c(r)?e[o]=t[o]:e[o]=a(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)n=a(n,o[r]);return n}(p.defaultOptions,{params:{index:3,period:9}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(f.prototype,{nameBase:"Rate of Change"}),a().registerSeriesType("roc",f);let y=o();export{y as default};