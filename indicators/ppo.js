!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/ppo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/ppo",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/ppo"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function i(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};i.d(a,{default:()=>y});var o=i(944),h=/*#__PURE__*/i.n(o),p=i(512),n=/*#__PURE__*/i.n(p);let{ema:u}=n().seriesTypes,{correctFloat:d,extend:l,merge:c,error:g}=h();class f extends u{getValues(e,r){let t,s;let i=r.periods,a=r.index,o=[],h=[],p=[];if(2!==i.length||i[1]<=i[0]){g('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');return}let n=super.getValues.call(this,e,{index:a,period:i[0]}),u=super.getValues.call(this,e,{index:a,period:i[1]});if(!n||!u)return;let l=i[1]-i[0];for(s=0;s<u.yData.length;s++)t=d((n.yData[s+l]-u.yData[s])/u.yData[s]*100),o.push([u.xData[s],t]),h.push(u.xData[s]),p.push(t);return{values:o,xData:h,yData:p}}}f.defaultOptions=c(u.defaultOptions,{params:{period:void 0,periods:[12,26]}}),l(f.prototype,{nameBase:"PPO",nameComponents:["periods"]}),n().registerSeriesType("ppo",f);let y=h();return a.default})());