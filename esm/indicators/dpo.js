/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=e.default.SeriesRegistry;var a=t.n(n);let{doc:l,win:u}=o();function i(e,t){return e>1e14?e:parseFloat(e.toPrecision(t||14))}function c(e){return s(e)&&"number"==typeof e.nodeType}function s(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}function f(){let e=arguments,t=e.length;for(let r=0;r<t;r++){let t=e[r];if(null!=t)return t}}Array.prototype.find;let{sma:p}=a().seriesTypes;function y(e,t,r,o,n){let a=f(t[r][o],t[r]);return n?i(e-a):i(e+a)}class d extends p{getValues(e,t){let r=t.period,o=t.index,n=Math.floor(r/2+1),a=r+n,l=e.xData||[],u=e.yData||[],i=u.length,c=[],s=[],p=[],d,h,b,g,j,O=0;if(!(l.length<=a)){for(g=0;g<r-1;g++)O=y(O,u,g,o);for(j=0;j<=i-a;j++)h=j+r-1,b=j+a-1,O=y(O,u,h,o),d=f(u[b][o],u[b])-O/r,O=y(O,u,j,o,!0),c.push([l[b],d]),s.push(l[b]),p.push(d);return{values:c,xData:s,yData:p}}}}d.defaultOptions=function(e,...t){let r,o=[e,...t],n={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!s(r,!0)||(n=r?.constructor,s(r,!0)&&!c(r)&&n?.name&&"Object"!==n.name)||c(r)?e[o]=t[o]:e[o]=a(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)n=a(n,o[r]);return n}(p.defaultOptions,{params:{index:0,period:21}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(d.prototype,{nameBase:"DPO"}),a().registerSeriesType("dpo",d);let h=o();export{h as default};