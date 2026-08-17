!/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/trix",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/trix"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let i={};function s(e){let t=i[e];if(void 0!==t)return t.exports;let o=i[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var i=t[r++],o=t[r++];s.o(e,i)?0===o&&r++:0===o?Object.defineProperty(e,i,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,i,{enumerable:!0,get:o})}else for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};s.d(o,{default:()=>f});var n=s(944),a=s.n(n),l=s(512),c=s.n(l);let{tema:h}=c().seriesTypes;class p extends h{getTemaPoint(e,t,r,i){if(i>t)return[e[i-3],0!==r.prevLevel3?(0,n.correctFloat)(r.level3-r.prevLevel3)/r.prevLevel3*100:null]}}p.defaultOptions=(0,n.merge)(h.defaultOptions),c().registerSeriesType("trix",p);let f=a();return o.default})());