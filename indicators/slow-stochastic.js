!/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/slow-stochastic
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/stochastic
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.Series.types.stochastic,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/slow-stochastic",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.Series.types.stochastic,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/slow-stochastic"]=t(e._Highcharts.Series.types.sma,e._Highcharts.Series.types.stochastic,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.Series.types.stochastic,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,s,r)=>(()=>{"use strict";var a={80(t){t.exports=e},532(e){e.exports=t},512(e){e.exports=s},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let s=i[e]={exports:{}};return a[e](s,s.exports,o),s.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let c={};o.d(c,{default:()=>x});var h=o(944),l=o.n(h),p=o(80),n=o.n(p),u=o(532),y=o.n(u),g=o(512),d=o.n(g);class f extends y(){getValues(e,t){let s=t.periods,r=super.getValues.call(this,e,t),a={values:[],xData:[],yData:[]};if(!r)return;a.xData=r.xData.slice(s[1]-1);let i=r.yData.slice(s[1]-1),o=n().prototype.getValues.call(this,{xData:a.xData,yData:i},{index:1,period:s[2]});if(o){for(let e=0,t=a.xData.length;e<t;e++)a.yData[e]=[i[e][1],o.yData[e-s[2]+1]||null],a.values[e]=[a.xData[e],i[e][1],o.yData[e-s[2]+1]||null];return a}}}f.defaultOptions=(0,h.merge)(y().defaultOptions,{params:{periods:[14,3,3]}}),(0,h.extend)(f.prototype,{nameBase:"Slow Stochastic"}),d().registerSeriesType("slowstochastic",f);let x=l();return c.default})());