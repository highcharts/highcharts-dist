/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/atr
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
 */import*as t from"../highcharts.js";var e={};e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let r=t.default;var a=e.n(r);let o=t.default.SeriesRegistry;var n=e.n(o);let{doc:l,win:s}=a();function u(t){return i(t)&&"number"==typeof t.nodeType}function c(t){let e=Object.prototype.toString.call(t);return"[object Array]"===e||"[object Array Iterator]"===e}function i(t,e){return!!t&&"object"==typeof t&&(!e||!c(t))}Array.prototype.find;let{sma:p}=n().seriesTypes;function f(t,e){return Math.max(t[1]-t[2],void 0===e?0:Math.abs(t[1]-e[3]),void 0===e?0:Math.abs(t[2]-e[3]))}class y extends p{getValues(t,e){let r=e.period,a=t.xData,o=t.yData,n=o?o.length:0,l=[[a[0],o[0]]],s=[],u=[],i=[],p,y,h=0,d=1,b=0;if(!(a.length<=r)&&c(o[0])&&4===o[0].length){for(y=1;y<=n;y++){var g,j,v,m,O;!function(t,e,r,a){let o=e[a],n=r[a];t.push([o,n])}(l,a,o,y),r<d?(h=(g=a,j=o,v=y,m=r,O=h,p=[g[v-1],(O*(m-1)+f(j[v-1],j[v-2]))/m])[1],s.push(p),u.push(p[0]),i.push(p[1])):(r===d?(h=b/(y-1),s.push([a[y-1],h]),u.push(a[y-1]),i.push(h)):b+=f(o[y-1],o[y-2]),d++)}return{values:s,xData:u,yData:i}}}}y.defaultOptions=function(t,...e){let r,a=[t,...e],o={},n=function(t,e){return"object"!=typeof t&&(t={}),function(t,e,r){for(let r in t)Object.hasOwnProperty.call(t,r)&&e.call((0,t[r]),t[r],r,t)}(e,function(r,a){if("__proto__"!==a&&"constructor"!==a){let o;!i(r,!0)||(o=r?.constructor,i(r,!0)&&!u(r)&&o?.name&&"Object"!==o.name)||u(r)?t[a]=e[a]:t[a]=n(t[a]||{},r)}}),t};!0===t&&(o=a[1],a=Array.prototype.slice.call(a,2));let l=a.length;for(r=0;r<l;r++)o=n(o,a[r]);return o}(p.defaultOptions,{params:{index:void 0}}),n().registerSeriesType("atr",y);let h=a();export{h as default};