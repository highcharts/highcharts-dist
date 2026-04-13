/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/wma
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var n=t.n(r);let o=e.default.SeriesRegistry;var a=t.n(o);let{doc:l,win:u}=n();function s(e){return i(e)&&"number"==typeof e.nodeType}function c(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function i(e,t){return!!e&&"object"==typeof e&&(!t||!c(e))}Array.prototype.find;let{sma:p}=a().seriesTypes;function f(e,t,r,n,o){let a=t[n],l=o<0?r[n]:r[n][o];e.push([a,l])}function y(e,t,r,n){let o=e.length,a=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((o+1)/2*o),l=t[n-1];return e.shift(),[l,a]}class d extends p{getValues(e,t){let r=t.period,n=e.xData,o=e.yData,a=o?o.length:0,l=n[0],u=[],s=[],i=[],p=1,d=-1,h,b,g=o[0];if(n.length<r)return;c(o[0])&&(d=t.index,g=o[0][d]);let j=[[l,g]];for(;p!==r;)f(j,n,o,p,d),p++;for(h=p;h<a;h++)u.push(b=y(j,n,o,h)),s.push(b[0]),i.push(b[1]),f(j,n,o,h,d);return u.push(b=y(j,n,o,h)),s.push(b[0]),i.push(b[1]),{values:u,xData:s,yData:i}}}d.defaultOptions=function(e,...t){let r,n=[e,...t],o={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,n){if("__proto__"!==n&&"constructor"!==n){let o;!i(r,!0)||(o=r?.constructor,i(r,!0)&&!s(r)&&o?.name&&"Object"!==o.name)||s(r)?e[n]=t[n]:e[n]=a(e[n]||{},r)}}),e};!0===e&&(o=n[1],n=Array.prototype.slice.call(n,2));let l=n.length;for(r=0;r<l;r++)o=a(o,n[r]);return o}(p.defaultOptions,{params:{index:3,period:9}}),a().registerSeriesType("wma",d);let h=n();export{h as default};