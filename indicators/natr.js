!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/natr",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/natr"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>c});var o=i(944),n=i.n(o),h=i(512),l=i.n(h);let{atr:u}=l().seriesTypes;class p extends u{getValues(e,t){let r=super.getValues.apply(this,arguments),s=r.values.length,i=e.yData,a=0,o=t.period-1;if(r){for(;a<s;a++)r.yData[a]=r.values[a][1]/i[o][3]*100,r.values[a][1]=r.yData[a],o++;return r}}}p.defaultOptions=(0,o.merge)(u.defaultOptions,{tooltip:{valueSuffix:"%"}}),l().registerSeriesType("natr",p);let c=n();return a.default})());