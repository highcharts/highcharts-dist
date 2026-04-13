/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/dema
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let a=e.default.SeriesRegistry;var n=t.n(a);let{doc:l,win:s}=o();function i(e){return u(e)&&"number"==typeof e.nodeType}function c(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function u(e,t){return!!e&&"object"==typeof e&&(!t||!c(e))}Array.prototype.find;let{ema:p}=n().seriesTypes;class f extends p{getEMA(e,t,r,o,a,n){return super.calculateEma(n||[],e,void 0===a?1:a,this.EMApercent,t,void 0===o?-1:o,r)}getValues(e,t){let r=t.period,o=[],a=2*r,n=e.xData,l=e.yData,s=l?l.length:0,i=[],u=[],p=[],f=0,d=0,y,h,b,g,m=-1,j,v=0;if(this.EMApercent=2/(r+1),!(s<2*r-1)){for(c(l[0])&&(m=t.index?t.index:0),v=(f=super.accumulatePeriodPoints(r,m,l))/r,f=0,g=r;g<s+2;g++)if(g<s+1&&(d=this.getEMA(l,h,v,m,g)[1],o.push(d)),h=d,g<a)f+=d;else{var A;g===a&&(v=f/r),d=o[g-r-1],y=this.getEMA([d],b,v)[1],j=[n[g-2],(A=2*d-y)>1e14?A:parseFloat(A.toPrecision(14))],i.push(j),u.push(j[0]),p.push(j[1]),b=y}return{values:i,xData:u,yData:p}}}}f.defaultOptions=function(e,...t){let r,o=[e,...t],a={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let a;!u(r,!0)||(a=r?.constructor,u(r,!0)&&!i(r)&&a?.name&&"Object"!==a.name)||i(r)?e[o]=t[o]:e[o]=n(e[o]||{},r)}}),e};!0===e&&(a=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)a=n(a,o[r]);return a}(p.defaultOptions),n().registerSeriesType("dema",f);let d=o();export{d as default};