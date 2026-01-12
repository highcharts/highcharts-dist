!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/natr",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/natr"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};a.d(i,{default:()=>l});var o=a(944),n=a.n(o),h=a(512),u=a.n(h);let{atr:p}=u().seriesTypes,{merge:c}=n();class f extends p{getValues(e,t){let r=super.getValues.apply(this,arguments),s=r.values.length,a=e.yData,i=0,o=t.period-1;if(r){for(;i<s;i++)r.yData[i]=r.values[i][1]/a[o][3]*100,r.values[i][1]=r.yData[i],o++;return r}}}f.defaultOptions=c(p.defaultOptions,{tooltip:{valueSuffix:"%"}}),u().registerSeriesType("natr",f);let l=n();return i.default})());