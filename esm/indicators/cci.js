/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/cci
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var n=t.n(r);let o=e.default.SeriesRegistry;var a=t.n(o);let{doc:l,win:c}=n();function u(e){return i(e)&&"number"==typeof e.nodeType}function s(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function i(e,t){return!!e&&"object"==typeof e&&(!t||!s(e))}Array.prototype.find;let{sma:f}=a().seriesTypes;class p extends f{getValues(e,t){let r=t.period,n=e.xData,o=e.yData,a=o?o.length:0,l=[],c=[],u=[],i=[],f,p,y=[],d,h=1,b,g,j,O;if(!(n.length<=r)&&s(o[0])&&4===o[0].length){for(;h<r;)p=o[h-1],l.push((p[1]+p[2]+p[3])/3),h++;for(O=r;O<=a;O++)g=((p=o[O-1])[1]+p[2]+p[3])/3,d=l.push(g),b=(y=l.slice(d-r)).reduce(function(e,t){return e+t},0)/r,j=function(e,t){let r=e.length,n=0,o;for(o=0;o<r;o++)n+=Math.abs(t-e[o]);return n}(y,b)/r,f=(g-b)/(.015*j),c.push([n[O-1],f]),u.push(n[O-1]),i.push(f);return{values:c,xData:u,yData:i}}}}p.defaultOptions=function(e,...t){let r,n=[e,...t],o={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,n){if("__proto__"!==n&&"constructor"!==n){let o;!i(r,!0)||(o=r?.constructor,i(r,!0)&&!u(r)&&o?.name&&"Object"!==o.name)||u(r)?e[n]=t[n]:e[n]=a(e[n]||{},r)}}),e};!0===e&&(o=n[1],n=Array.prototype.slice.call(n,2));let l=n.length;for(r=0;r<l;r++)o=a(o,n[r]);return o}(f.defaultOptions,{params:{index:void 0}}),a().registerSeriesType("cci",p);let y=n();export{y as default};