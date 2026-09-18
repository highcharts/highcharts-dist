!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts.SeriesRegistry,t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/slow-stochastic",["highcharts/highcharts"],function(t){return e(t.SeriesRegistry,t)}):"object"==typeof exports?exports["highcharts/indicators/slow-stochastic"]=e(t._Highcharts.SeriesRegistry,t._Highcharts):t.Highcharts=e(t.Highcharts.SeriesRegistry,t.Highcharts)}("u"<typeof window?this:window,(t,e)=>(()=>{"use strict";var s={512(e){e.exports=t},944(t){t.exports=e}};let a={};function r(t){let e=a[t];if(void 0!==e)return e.exports;let i=a[t]={exports:{}};return s[t](i,i.exports,r),i.exports}r.n=t=>{let e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let i={};r.d(i,{default:()=>d});var o=r(944),l=r.n(o),c=r(512),n=r.n(c);let{sma:h,stochastic:p}=n().seriesTypes;class u extends p{getValues(t,e){let s=e.periods,a=super.getValues.call(this,t,e),r={values:[],xData:[],yData:[]};if(!a)return;r.xData=a.xData.slice(s[1]-1);let i=a.yData.slice(s[1]-1),o=h.prototype.getValues.call(this,{xData:r.xData,yData:i},{index:1,period:s[2]});if(o){for(let t=0,e=r.xData.length;t<e;t++)r.yData[t]=[i[t][1],o.yData[t-s[2]+1]||null],r.values[t]=[r.xData[t],i[t][1],o.yData[t-s[2]+1]||null];return r}}}u.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{periods:[14,3,3]}}),(0,o.extend)(u.prototype,{nameBase:"Slow Stochastic"}),n().registerSeriesType("slowstochastic",u);let d=l();return i.default})());