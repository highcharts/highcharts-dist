!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/indicators
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Fus
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/slow-stochastic",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/slow-stochastic"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};s.d(i,{default:()=>f});var o=s(944),h=/*#__PURE__*/s.n(o),c=s(512),l=/*#__PURE__*/s.n(c);let{sma:p,stochastic:u}=l().seriesTypes,{extend:n,merge:g}=h();class d extends u{getValues(e,t){let r=t.periods,a=super.getValues.call(this,e,t),s={values:[],xData:[],yData:[]};if(!a)return;s.xData=a.xData.slice(r[1]-1);let i=a.yData.slice(r[1]-1),o=p.prototype.getValues.call(this,{xData:s.xData,yData:i},{index:1,period:r[2]});if(o){for(let e=0,t=s.xData.length;e<t;e++)s.yData[e]=[i[e][1],o.yData[e-r[2]+1]||null],s.values[e]=[s.xData[e],i[e][1],o.yData[e-r[2]+1]||null];return s}}}d.defaultOptions=g(u.defaultOptions,{params:{periods:[14,3,3]}}),n(d.prototype,{nameBase:"Slow Stochastic"}),l().registerSeriesType("slowstochastic",d);let f=h();return i.default})());