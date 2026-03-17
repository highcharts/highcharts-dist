/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/williams-r
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=function(e,t,r){return e.reduce((e,o)=>[Math.min(e[0],o[t]),Math.max(e[1],o[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])},a=e.default.SeriesRegistry;var l=t.n(a);let{doc:i,win:s}=o();function u(e){return p(e)&&"number"==typeof e.nodeType}function c(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function p(e,t){return!!e&&"object"==typeof e&&(!t||!c(e))}Array.prototype.find;let{sma:f}=l().seriesTypes;class y extends f{getValues(e,t){let r,o,a,l,i,s=t.period,u=e.xData,p=e.yData,f=p?p.length:0,y=[],d=[],m=[];if(!(u.length<s)&&c(p[0])&&4===p[0].length){for(i=s-1;i<f;i++)l=(r=n(p.slice(i-s+1,i+1),2,1))[0],o=-(((a=r[1])-p[i][3])/(a-l)*100),u[i]&&(y.push([u[i],o]),d.push(u[i]),m.push(o));return{values:y,xData:d,yData:m}}}}y.defaultOptions=function(e,...t){let r,o=[e,...t],n={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!p(r,!0)||(n=r?.constructor,p(r,!0)&&!u(r)&&n?.name&&"Object"!==n.name)||u(r)?e[o]=t[o]:e[o]=a(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)n=a(n,o[r]);return n}(f.defaultOptions,{params:{index:void 0,period:14}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(y.prototype,{nameBase:"Williams %R"}),l().registerSeriesType("williamsr",y);let d=o();export{d as default};