!/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/streamgraph
 * @requires highcharts
 *
 * Streamgraph module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/streamgraph",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/streamgraph"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};s.d(i,{default:()=>l});var o=s(944),n=s.n(o),h=s(512),d=s.n(h);let{areaspline:p}=d().seriesTypes;class c extends p{streamStacker(e,t,r){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[r]=Math.max.apply(0,e))}}c.defaultOptions=(0,o.merge)(p.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),(0,o.addEvent)(c,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),(0,o.extend)(c.prototype,{negStacks:!1}),d().registerSeriesType("streamgraph",c);let l=n();return i.default})());