!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/obv",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/obv"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function o(e){var r=s[e];if(void 0!==r)return r.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var i={};o.d(i,{default:()=>v});var a=o(944),h=/*#__PURE__*/o.n(a),u=o(512),n=/*#__PURE__*/o.n(u);let{sma:p}=n().seriesTypes,{isNumber:l,error:c,extend:d,merge:g}=h();class f extends p{getValues(e,r){let t=e.chart.get(r.volumeSeriesID),s=e.xData,o=e.yData,i=[],a=[],h=[],u=!l(o[0]),n=[],p=1,d=0,g=0,f=0,v=0,y;if(t)for(y=t.getColumn("y"),n=[s[0],d],f=u?o[0][3]:o[0],i.push(n),a.push(s[0]),h.push(n[1]);p<o.length;p++)g=(v=u?o[p][3]:o[p])>f?d+y[p]:v===f?d:d-y[p],n=[s[p],g],d=g,f=v,i.push(n),a.push(s[p]),h.push(n[1]);else{c("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);return}return{values:i,xData:a,yData:h}}}f.defaultOptions=g(p.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),d(f.prototype,{nameComponents:void 0}),n().registerSeriesType("obv",f);let v=h();return i.default})());