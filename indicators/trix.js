!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/trix",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/trix"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let i={};function s(e){let t=i[e];if(void 0!==t)return t.exports;let o=i[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};s.d(o,{default:()=>d});var n=s(944),a=s.n(n),h=s(512),c=s.n(h);let{tema:l}=c().seriesTypes;class p extends l{getTemaPoint(e,t,r,i){if(i>t)return[e[i-3],0!==r.prevLevel3?(0,n.correctFloat)(r.level3-r.prevLevel3)/r.prevLevel3*100:null]}}p.defaultOptions=(0,n.merge)(l.defaultOptions),c().registerSeriesType("trix",p);let d=a();return o.default})());