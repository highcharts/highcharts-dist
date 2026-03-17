/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/momentum
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var n=t.n(r);let o=e.default.SeriesRegistry;var a=t.n(o);let{doc:u,win:l}=n();function s(e){return p(e)&&"number"==typeof e.nodeType}function c(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function p(e,t){return!!e&&"object"==typeof e&&(!t||!c(e))}Array.prototype.find;let{sma:i}=a().seriesTypes;function f(e,t,r,n,o){let a=t[r-1][o]-t[r-n-1][o];return[e[r-1],a]}class y extends i{getValues(e,t){let r,n,o=t.period,a=t.index,u=e.xData,l=e.yData,s=l?l.length:0,p=[],i=[],y=[];if(!(u.length<=o)&&c(l[0])){for(r=o+1;r<s;r++)n=f(u,l,r,o,a),p.push(n),i.push(n[0]),y.push(n[1]);return n=f(u,l,r,o,a),p.push(n),i.push(n[0]),y.push(n[1]),{values:p,xData:i,yData:y}}}}y.defaultOptions=function(e,...t){let r,n=[e,...t],o={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,n){if("__proto__"!==n&&"constructor"!==n){let o;!p(r,!0)||(o=r?.constructor,p(r,!0)&&!s(r)&&o?.name&&"Object"!==o.name)||s(r)?e[n]=t[n]:e[n]=a(e[n]||{},r)}}),e};!0===e&&(o=n[1],n=Array.prototype.slice.call(n,2));let u=n.length;for(r=0;r<u;r++)o=a(o,n[r]);return o}(i.defaultOptions,{params:{index:3}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(y.prototype,{nameBase:"Momentum"}),a().registerSeriesType("momentum",y);let m=n();export{m as default};