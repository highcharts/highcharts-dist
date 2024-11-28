!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/momentum",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/momentum"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>m});var h=i(944),o=/*#__PURE__*/i.n(h),n=i(512),u=/*#__PURE__*/i.n(n);let{sma:p}=u().seriesTypes,{extend:c,isArray:g,merge:d}=o();function f(e,t,r,s,i){let a=t[r-1][i]-t[r-s-1][i];return[e[r-1],a]}class l extends p{getValues(e,t){let r,s;let i=t.period,a=t.index,h=e.xData,o=e.yData,n=o?o.length:0,u=[],p=[],c=[];if(!(h.length<=i)&&g(o[0])){for(r=i+1;r<n;r++)s=f(h,o,r,i,a),u.push(s),p.push(s[0]),c.push(s[1]);return s=f(h,o,r,i,a),u.push(s),p.push(s[0]),c.push(s[1]),{values:u,xData:p,yData:c}}}}l.defaultOptions=d(p.defaultOptions,{params:{index:3}}),c(l.prototype,{nameBase:"Momentum"}),u().registerSeriesType("momentum",l);let m=o();return a.default})());