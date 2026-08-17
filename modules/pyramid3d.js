!/**
 * Highcharts JS v13.0.1 (2026-08-17)
 * @module highcharts/modules/pyramid3d
 * @requires highcharts
 * @requires highcharts/highcharts-3d
 * @requires highcharts/modules/cylinder
 * @requires highcharts/modules/funnel3d
 *
 * Highcharts 3D funnel module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/pyramid3d",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/pyramid3d"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let i={};function s(e){let t=i[e];if(void 0!==t)return t.exports;let o=i[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var i=t[r++],o=t[r++];s.o(e,i)?0===o&&r++:0===o?Object.defineProperty(e,i,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,i,{enumerable:!0,get:o})}else for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};s.d(o,{default:()=>c});var a=s(944),n=s.n(a),d=s(512),h=s.n(d);let{funnel3d:l}=h().seriesTypes;class p extends l{}p.defaultOptions=(0,a.merge)(l.defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),h().registerSeriesType("pyramid3d",p);let c=n();return o.default})());