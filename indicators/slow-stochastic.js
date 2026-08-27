!/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/slow-stochastic",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/slow-stochastic"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let a={};function s(e){let t=a[e];if(void 0!==t)return t.exports;let i=a[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var a=t[r++],i=t[r++];s.o(e,a)?0===i&&r++:0===i?Object.defineProperty(e,a,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,a,{enumerable:!0,get:i})}else for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>d});var o=s(944),l=s.n(o),n=s(512),c=s.n(n);let{sma:h,stochastic:p}=c().seriesTypes;class u extends p{getValues(e,t){let r=t.periods,a=super.getValues.call(this,e,t),s={values:[],xData:[],yData:[]};if(!a)return;s.xData=a.xData.slice(r[1]-1);let i=a.yData.slice(r[1]-1),o=h.prototype.getValues.call(this,{xData:s.xData,yData:i},{index:1,period:r[2]});if(o){for(let e=0,t=s.xData.length;e<t;e++)s.yData[e]=[i[e][1],o.yData[e-r[2]+1]||null],s.values[e]=[s.xData[e],i[e][1],o.yData[e-r[2]+1]||null];return s}}}u.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{periods:[14,3,3]}}),(0,o.extend)(u.prototype,{nameBase:"Slow Stochastic"}),c().registerSeriesType("slowstochastic",u);let d=l();return i.default})());