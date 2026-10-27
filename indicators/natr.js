!/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/atr
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.atr,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/natr",["highcharts/highcharts"],function(e){return t(e.Series.types.atr,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/natr"]=t(e._Highcharts.Series.types.atr,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.atr,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={300(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>g});var h=a(944),n=a.n(h),p=a(300),u=a.n(p),c=a(512),l=a.n(c);class f extends u(){getValues(e,t){let r=super.getValues.apply(this,arguments),s=r.values.length,i=e.yData,a=0,o=t.period-1;if(r){for(;a<s;a++)r.yData[a]=r.values[a][1]/i[o][3]*100,r.values[a][1]=r.yData[a],o++;return r}}}f.defaultOptions=(0,h.merge)(u().defaultOptions,{tooltip:{valueSuffix:"%"}}),l().registerSeriesType("natr",f);let g=n();return o.default})());