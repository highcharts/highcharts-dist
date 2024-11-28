!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/apo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/apo",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/apo"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var i={};a.d(i,{default:()=>f});var o=a(944),h=/*#__PURE__*/a.n(o),p=a(512),n=/*#__PURE__*/a.n(p);let{ema:u}=n().seriesTypes,{extend:d,merge:l,error:c}=h();class g extends u{getValues(e,r){let t,s;let a=r.periods,i=r.index,o=[],h=[],p=[];if(2!==a.length||a[1]<=a[0]){c('Error: "APO requires two periods. Notice, first period should be lower than the second one."');return}let n=super.getValues.call(this,e,{index:i,period:a[0]}),u=super.getValues.call(this,e,{index:i,period:a[1]});if(!n||!u)return;let d=a[1]-a[0];for(s=0;s<u.yData.length;s++)t=n.yData[s+d]-u.yData[s],o.push([u.xData[s],t]),h.push(u.xData[s]),p.push(t);return{values:o,xData:h,yData:p}}}g.defaultOptions=l(u.defaultOptions,{params:{period:void 0,periods:[10,20]}}),d(g.prototype,{nameBase:"APO",nameComponents:["periods"]}),n().registerSeriesType("apo",g);let f=h();return i.default})());