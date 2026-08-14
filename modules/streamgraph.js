!/**
 * Highcharts JS v13.0.0-modified (2026-08-14)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/streamgraph",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/streamgraph"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let a={};function s(e){let t=a[e];if(void 0!==t)return t.exports;let i=a[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var a=t[r++],i=t[r++];s.o(e,a)?0===i&&r++:0===i?Object.defineProperty(e,a,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,a,{enumerable:!0,get:i})}else for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>c});var o=s(944),n=s.n(o),h=s(512),d=s.n(h);let{areaspline:l}=d().seriesTypes;class p extends l{streamStacker(e,t,r){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[r]=Math.max.apply(0,e))}}p.defaultOptions=(0,o.merge)(l.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),(0,o.addEvent)(p,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),(0,o.extend)(p.prototype,{negStacks:!1}),d().registerSeriesType("streamgraph",p);let c=n();return i.default})());