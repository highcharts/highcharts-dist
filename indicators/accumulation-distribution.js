!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/accumulation-distribution
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/accumulation-distribution",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/accumulation-distribution"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return r[e](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};s.d(a,{default:()=>f});var o=s(944),h=/*#__PURE__*/s.n(o),u=s(512),n=/*#__PURE__*/s.n(u);let{sma:c}=n().seriesTypes,{error:p,extend:l,merge:g}=h();class d extends c{static populateAverage(e,t,r,i,s){let a=t[i][1],o=t[i][2],h=t[i][3],u=r[i];return[e[i],h===a&&h===o||a===o?0:(2*h-o-a)/(a-o)*u]}getValues(e,t){let r,i,s;let a=t.period,o=e.xData,h=e.yData,u=t.volumeSeriesID,n=e.chart.get(u),c=n?.getColumn("y"),l=h?h.length:0,g=[],f=[],m=[];if(!(o.length<=a)||!l||4===h[0].length){if(!n){p("Series "+u+" not found! Check `volumeSeriesID`.",!0,e.chart);return}for(i=a;i<l;i++)r=g.length,s=d.populateAverage(o,h,c,i,a),r>0&&(s[1]+=g[r-1][1]),g.push(s),f.push(s[0]),m.push(s[1]);return{values:g,xData:f,yData:m}}}}d.defaultOptions=g(c.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),l(d.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),n().registerSeriesType("ad",d);let f=h();return a.default})());