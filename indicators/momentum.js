!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/momentum",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/momentum"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};i.d(o,{default:()=>f});var a=i(944),n=i.n(a),h=i(512),u=i.n(h);let{sma:p}=u().seriesTypes;function c(e,t,r,s,i){let o=t[r-1][i]-t[r-s-1][i];return[e[r-1],o]}class d extends p{getValues(e,t){let r,s,i=t.period,o=t.index,n=e.xData,h=e.yData,u=h?h.length:0,p=[],d=[],f=[];if(!(n.length<=i)&&(0,a.isArray)(h[0])){for(r=i+1;r<u;r++)s=c(n,h,r,i,o),p.push(s),d.push(s[0]),f.push(s[1]);return s=c(n,h,r,i,o),p.push(s),d.push(s[0]),f.push(s[1]),{values:p,xData:d,yData:f}}}}d.defaultOptions=(0,a.merge)(p.defaultOptions,{params:{index:3}}),(0,a.extend)(d.prototype,{nameBase:"Momentum"}),u().registerSeriesType("momentum",d);let f=n();return o.default})());