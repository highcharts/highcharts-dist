/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/vwap
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let a=e.default.SeriesRegistry;var l=t.n(a);let{doc:n,win:u}=o();function s(e){return i(e)&&"number"==typeof e.nodeType}function c(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function i(e,t){return!!e&&"object"==typeof e&&(!t||!c(e))}Array.prototype.find;let{sma:p}=l().seriesTypes;class f extends p{getValues(e,t){let o=e.chart,a=e.xData,l=e.yData,n=t.period,u=!0,s;return(s=o.get(t.volumeSeriesID))?(c(l[0])||(u=!1),this.calculateVWAPValues(u,a,l,s,n)):void(0,r.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,o)}calculateVWAPValues(e,t,r,o,a){let l,n,u,s,c,i,p=o.getColumn("y"),f=p.length,y=t.length,d=[],h=[],v=[],m=[],b=[];for(c=0,l=y<=f?y:f,i=0;c<l;c++)n=(e?(r[c][1]+r[c][2]+r[c][3])/3:r[c])*p[c],u=i?d[c-1]+n:n,s=i?h[c-1]+p[c]:p[c],d.push(u),h.push(s),b.push([t[c],u/s]),v.push(b[c][0]),m.push(b[c][1]),++i===a&&(i=0);return{values:b,xData:v,yData:m}}}f.defaultOptions=function(e,...t){let r,o=[e,...t],a={},l=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let a;!i(r,!0)||(a=r?.constructor,i(r,!0)&&!s(r)&&a?.name&&"Object"!==a.name)||s(r)?e[o]=t[o]:e[o]=l(e[o]||{},r)}}),e};!0===e&&(a=o[1],o=Array.prototype.slice.call(o,2));let n=o.length;for(r=0;r<n;r++)a=l(a,o[r]);return a}(p.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),l().registerSeriesType("vwap",f);let y=o();export{y as default};