!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/indicators
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/slow-stochastic",["highcharts/highcharts"],function(t){return e(t,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/slow-stochastic"]=e(t._Highcharts,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(t,e)=>(()=>{"use strict";var a={512:t=>{t.exports=e},944:e=>{e.exports=t}},r={};function s(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return a[t](i,i.exports,s),i.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};s.d(i,{default:()=>d});var o=s(944),c=s.n(o),n=s(512),l=s.n(n);let{sma:h,stochastic:p}=l().seriesTypes;class u extends p{getValues(t,e){let a=e.periods,r=super.getValues.call(this,t,e),s={values:[],xData:[],yData:[]};if(!r)return;s.xData=r.xData.slice(a[1]-1);let i=r.yData.slice(a[1]-1),o=h.prototype.getValues.call(this,{xData:s.xData,yData:i},{index:1,period:a[2]});if(o){for(let t=0,e=s.xData.length;t<e;t++)s.yData[t]=[i[t][1],o.yData[t-a[2]+1]||null],s.values[t]=[s.xData[t],i[t][1],o.yData[t-a[2]+1]||null];return s}}}u.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{periods:[14,3,3]}}),(0,o.extend)(u.prototype,{nameBase:"Slow Stochastic"}),l().registerSeriesType("slowstochastic",u);let d=c();return i.default})());