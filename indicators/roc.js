!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/roc",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/roc"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};o.d(i,{default:()=>g});var a=o(944),n=o.n(a),h=o(512),p=o.n(h);let{sma:u}=p().seriesTypes,{isArray:c,merge:d,extend:f}=n();class l extends u{getValues(e,t){let r=t.period,s=e.xData,o=e.yData,i=o?o.length:0,a=[],n=[],h=[],p,u=-1,d;if(!(s.length<=r)){for(c(o[0])&&(u=t.index),p=r;p<i;p++)d=function(e,t,r,s,o){let i,a;return a=o<0?(i=t[r-s])?(t[r]-i)/i*100:null:(i=t[r-s][o])?(t[r][o]-i)/i*100:null,[e[r],a]}(s,o,p,r,u),a.push(d),n.push(d[0]),h.push(d[1]);return{values:a,xData:n,yData:h}}}}l.defaultOptions=d(u.defaultOptions,{params:{index:3,period:9}}),f(l.prototype,{nameBase:"Rate of Change"}),p().registerSeriesType("roc",l);let g=n();return i.default})());