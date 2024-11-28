!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Lysy
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/cmo",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/cmo"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function h(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,h),a.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};h.d(a,{default:()=>l});var i=h(944),o=/*#__PURE__*/h.n(i),p=h(512),n=/*#__PURE__*/h.n(p);let{sma:u}=n().seriesTypes,{isNumber:c,merge:g}=o();class d extends u{getValues(e,t){let r=t.period,s=e.xData,h=e.yData,a=h?h.length:0,i=[],o=[],p=[],n,u=t.index,g;if(s.length<r)return;c(h[0])?g=h:(u=Math.min(u,h[0].length-1),g=h.map(e=>e[u]));let d=0,l=0,f=0,x;for(let e=r;e>0;e--)g[e]>g[e-1]?l+=g[e]-g[e-1]:g[e]<g[e-1]&&(f+=g[e-1]-g[e]);for(x=l+f>0?100*(l-f)/(l+f):0,o.push(s[r]),p.push(x),i.push([s[r],x]),n=r+1;n<a;n++)d=Math.abs(g[n-r-1]-g[n-r]),g[n]>g[n-1]?l+=g[n]-g[n-1]:g[n]<g[n-1]&&(f+=g[n-1]-g[n]),g[n-r]>g[n-r-1]?l-=d:f-=d,x=l+f>0?100*(l-f)/(l+f):0,o.push(s[n]),p.push(x),i.push([s[n],x]);return{values:i,xData:o,yData:p}}}d.defaultOptions=g(u.defaultOptions,{params:{period:20,index:3}}),n().registerSeriesType("cmo",d);let l=o();return a.default})());