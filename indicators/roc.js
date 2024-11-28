!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/roc",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/roc"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var i={};a.d(i,{default:()=>f});var h=a(944),o=/*#__PURE__*/a.n(h),n=a(512),u=/*#__PURE__*/a.n(n);let{sma:p}=u().seriesTypes,{isArray:c,merge:l,extend:g}=o();class d extends p{getValues(e,r){let t=r.period,s=e.xData,a=e.yData,i=a?a.length:0,h=[],o=[],n=[],u,p=-1,l;if(!(s.length<=t)){for(c(a[0])&&(p=r.index),u=t;u<i;u++)l=function(e,r,t,s,a){let i,h;return h=a<0?(i=r[t-s])?(r[t]-i)/i*100:null:(i=r[t-s][a])?(r[t][a]-i)/i*100:null,[e[t],h]}(s,a,u,t,p),h.push(l),o.push(l[0]),n.push(l[1]);return{values:h,xData:o,yData:n}}}}d.defaultOptions=l(p.defaultOptions,{params:{index:3,period:9}}),g(d.prototype,{nameBase:"Rate of Change"}),u().registerSeriesType("roc",d);let f=o();return i.default})());