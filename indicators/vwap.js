!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Dalek
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/vwap",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/vwap"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var i={};a.d(i,{default:()=>f});var h=a(944),o=/*#__PURE__*/a.n(h),u=a(512),l=/*#__PURE__*/a.n(u);let{sma:p}=l().seriesTypes,{error:n,isArray:c,merge:g}=o();class d extends p{getValues(e,r){let t=e.chart,s=e.xData,a=e.yData,i=r.period,h=!0,o;if(!(o=t.get(r.volumeSeriesID))){n("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,t);return}return c(a[0])||(h=!1),this.calculateVWAPValues(h,s,a,o,i)}calculateVWAPValues(e,r,t,s,a){let i,h,o,u,l,p;let n=s.getColumn("y"),c=n.length,g=r.length,d=[],f=[],v=[],y=[],x=[];for(l=0,i=g<=c?g:c,p=0;l<i;l++)h=(e?(t[l][1]+t[l][2]+t[l][3])/3:t[l])*n[l],o=p?d[l-1]+h:h,u=p?f[l-1]+n[l]:n[l],d.push(o),f.push(u),x.push([r[l],o/u]),v.push(x[l][0]),y.push(x[l][1]),++p===a&&(p=0);return{values:x,xData:v,yData:y}}}d.defaultOptions=g(p.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),l().registerSeriesType("vwap",d);let f=o();return i.default})());