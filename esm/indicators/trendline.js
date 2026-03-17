/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/trendline
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var n=t.n(r);let o=e.default.SeriesRegistry;var l=t.n(o);let{doc:a,win:s}=n();function i(e){return c(e)&&"number"==typeof e.nodeType}function u(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function c(e,t){return!!e&&"object"==typeof e&&(!t||!u(e))}Array.prototype.find;let{sma:p}=l().seriesTypes;class f extends p{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,n=e.yData,o=[],l=[],a=[],s=[],i=t.index,c=0,p=0,f=0,d=0,y=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&y++,o.push(y);for(let e=0;e<o.length;e++)f+=o[e],d+=u(n[e])?n[e][i]:n[e];let h=f/o.length,g=d/n.length;for(let e=0;e<o.length;e++){let t=u(n[e])?n[e][i]:n[e];c+=(o[e]-h)*(t-g),p+=Math.pow(o[e]-h,2)}for(let e=0;e<o.length;e++){if(r[e]===a[a.length-1])continue;let t=r[e],n=g+c/p*(o[e]-h);l.push([t,n]),a.push(t),s.push(n)}return{xData:a,yData:s,values:l}}}f.defaultOptions=function(e,...t){let r,n=[e,...t],o={},l=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,n){if("__proto__"!==n&&"constructor"!==n){let o;!c(r,!0)||(o=r?.constructor,c(r,!0)&&!i(r)&&o?.name&&"Object"!==o.name)||i(r)?e[n]=t[n]:e[n]=l(e[n]||{},r)}}),e};!0===e&&(o=n[1],n=Array.prototype.slice.call(n,2));let a=n.length;for(r=0;r<a;r++)o=l(o,n[r]);return o}(p.defaultOptions,{params:{period:void 0,index:3}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(f.prototype,{nameBase:"Trendline",nameComponents:void 0}),l().registerSeriesType("trendline",f);let d=n();export{d as default};