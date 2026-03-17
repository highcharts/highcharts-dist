/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Pawel Lysy
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let a=e.default.SeriesRegistry;var n=t.n(a);let{doc:l,win:s}=o();function p(e){return u(e)&&"number"==typeof e.nodeType}function u(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{sma:c}=n().seriesTypes;class i extends c{getValues(e,t){var r;let o=t.period,a=e.xData,n=e.yData,l=n?n.length:0,s=[],p=[],u=[],c,i=t.index,f;if(a.length<o)return;"number"==typeof(r=n[0])&&!isNaN(r)&&r<1/0&&r>-1/0?f=n:(i=Math.min(i,n[0].length-1),f=n.map(e=>e[i]));let y=0,d=0,h=0,b;for(let e=o;e>0;e--)f[e]>f[e-1]?d+=f[e]-f[e-1]:f[e]<f[e-1]&&(h+=f[e-1]-f[e]);for(b=d+h>0?100*(d-h)/(d+h):0,p.push(a[o]),u.push(b),s.push([a[o],b]),c=o+1;c<l;c++)y=Math.abs(f[c-o-1]-f[c-o]),f[c]>f[c-1]?d+=f[c]-f[c-1]:f[c]<f[c-1]&&(h+=f[c-1]-f[c]),f[c-o]>f[c-o-1]?d-=y:h-=y,b=d+h>0?100*(d-h)/(d+h):0,p.push(a[c]),u.push(b),s.push([a[c],b]);return{values:s,xData:p,yData:u}}}i.defaultOptions=function(e,...t){let r,o=[e,...t],a={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let a;!u(r,!0)||(a=r?.constructor,u(r,!0)&&!p(r)&&a?.name&&"Object"!==a.name)||p(r)?e[o]=t[o]:e[o]=n(e[o]||{},r)}}),e};!0===e&&(a=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)a=n(a,o[r]);return a}(c.defaultOptions,{params:{period:20,index:3}}),n().registerSeriesType("cmo",i);let f=o();export{f as default};