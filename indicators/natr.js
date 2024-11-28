!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Dalek
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/natr",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/natr"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};a.d(i,{default:()=>f});var h=a(944),o=/*#__PURE__*/a.n(h),u=a(512),n=/*#__PURE__*/a.n(u);let{atr:p}=n().seriesTypes,{merge:c}=o();class l extends p{getValues(e,t){let r=super.getValues.apply(this,arguments),s=r.values.length,a=e.yData,i=0,h=t.period-1;if(r){for(;i<s;i++)r.yData[i]=r.values[i][1]/a[h][3]*100,r.values[i][1]=r.yData[i],h++;return r}}}l.defaultOptions=c(p.defaultOptions,{tooltip:{valueSuffix:"%"}}),n().registerSeriesType("natr",l);let f=o();return i.default})());