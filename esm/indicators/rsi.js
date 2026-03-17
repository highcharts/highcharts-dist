/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var n=t.n(o);let{doc:l,win:s}=a();function i(e){return c(e)&&"number"==typeof e.nodeType}function c(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{sma:u}=n().seriesTypes;function p(e,t){return parseFloat(e.toFixed(t))}class f extends u{getValues(e,t){let r=t.period,a=e.xData,o=e.yData,n=o?o.length:0,l=t.decimals,s=[],i=[],c=[],u=0,f=0,y=t.index,d=1,h,b,m,g,j,O;if(!(a.length<r)){var v;for("number"==typeof(v=o[0])&&!isNaN(v)&&v<1/0&&v>-1/0?O=o:(y=Math.min(y,o[0].length-1),O=o.map(e=>e[y]));d<r;)(b=p(O[d]-O[d-1],l))>0?u+=b:f+=Math.abs(b),d++;for(m=p(u/(r-1),l),g=p(f/(r-1),l),j=d;j<n;j++)(b=p(O[j]-O[j-1],l))>0?(u=b,f=0):(u=0,f=Math.abs(b)),m=p((m*(r-1)+u)/r,l),h=0===(g=p((g*(r-1)+f)/r,l))?100:0===m?0:p(100-100/(1+m/g),l),s.push([a[j],h]),i.push(a[j]),c.push(h);return{values:s,xData:i,yData:c}}}}f.defaultOptions=function(e,...t){let r,a=[e,...t],o={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,a){if("__proto__"!==a&&"constructor"!==a){let o;!c(r,!0)||(o=r?.constructor,c(r,!0)&&!i(r)&&o?.name&&"Object"!==o.name)||i(r)?e[a]=t[a]:e[a]=n(e[a]||{},r)}}),e};!0===e&&(o=a[1],a=Array.prototype.slice.call(a,2));let l=a.length;for(r=0;r<l;r++)o=n(o,a[r]);return o}(u.defaultOptions,{params:{decimals:4,index:3}}),n().registerSeriesType("rsi",f);let y=a();export{y as default};