!/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/tema
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.tema,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/trix",["highcharts/highcharts"],function(e){return t(e.Series.types.tema,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/trix"]=t(e._Highcharts.Series.types.tema,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.tema,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={352(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};o.d(a,{default:()=>u});var h=o(944),n=o.n(h),c=o(352),p=o.n(c),l=o(512),d=o.n(l);class g extends p(){getTemaPoint(e,t,r,s){if(s>t)return[e[s-3],0!==r.prevLevel3?(0,h.correctFloat)(r.level3-r.prevLevel3)/r.prevLevel3*100:null]}}g.defaultOptions=(0,h.merge)(p().defaultOptions),d().registerSeriesType("trix",g);let u=n();return a.default})());