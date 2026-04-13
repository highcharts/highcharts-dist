/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/tema
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return t.d(l,{a:l}),l},t.d=(e,l)=>{for(var r in l)t.o(l,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:l[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let l=e.default;var r=t.n(l);let o=e.default.SeriesRegistry;var a=t.n(o);let{doc:n,win:s}=r();function i(e){return c(e)&&"number"==typeof e.nodeType}function u(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function c(e,t){return!!e&&"object"==typeof e&&(!t||!u(e))}Array.prototype.find;let{ema:p}=a().seriesTypes;class v extends p{getEMA(e,t,l,r,o,a){return super.calculateEma(a||[],e,void 0===o?1:o,this.EMApercent,t,void 0===r?-1:r,l)}getTemaPoint(e,t,l,r){var o;return[e[r-3],(o=3*l.level1-3*l.level2+l.level3)>1e14?o:parseFloat(o.toPrecision(14))]}getValues(e,t){let l=t.period,r=2*l,o=3*l,a=e.xData,n=e.yData,s=n?n.length:0,i=[],c=[],p=[],v=[],f=[],h={},y=-1,d=0,g=0,m,b,A,j;if(this.EMApercent=2/(l+1),!(s<3*l-2)){for(u(n[0])&&(y=t.index?t.index:0),g=(d=super.accumulatePeriodPoints(l,y,n))/l,d=0,A=l;A<s+3;A++)A<s+1&&(h.level1=this.getEMA(n,m,g,y,A)[1],v.push(h.level1)),m=h.level1,A<r?d+=h.level1:(A===r&&(g=d/l,d=0),h.level1=v[A-l-1],h.level2=this.getEMA([h.level1],b,g)[1],f.push(h.level2),b=h.level2,A<o?d+=h.level2:(A===o&&(g=d/l),A===s+1&&(h.level1=v[A-l-1],h.level2=this.getEMA([h.level1],b,g)[1],f.push(h.level2)),h.level1=v[A-l-2],h.level2=f[A-2*l-1],h.level3=this.getEMA([h.level2],h.prevLevel3,g)[1],(j=this.getTemaPoint(a,o,h,A))&&(i.push(j),c.push(j[0]),p.push(j[1])),h.prevLevel3=h.level3));return{values:i,xData:c,yData:p}}}}v.defaultOptions=function(e,...t){let l,r=[e,...t],o={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,l){for(let l in e)Object.hasOwnProperty.call(e,l)&&t.call((0,e[l]),e[l],l,e)}(t,function(l,r){if("__proto__"!==r&&"constructor"!==r){let o;!c(l,!0)||(o=l?.constructor,c(l,!0)&&!i(l)&&o?.name&&"Object"!==o.name)||i(l)?e[r]=t[r]:e[r]=a(e[r]||{},l)}}),e};!0===e&&(o=r[1],r=Array.prototype.slice.call(r,2));let n=r.length;for(l=0;l<n;l++)o=a(o,r[l]);return o}(p.defaultOptions),a().registerSeriesType("tema",v);let f=r();export{f as default};