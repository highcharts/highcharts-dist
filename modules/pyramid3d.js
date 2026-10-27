!/**
 * Highcharts JS v13.1.1-modified (2026-10-27)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.funnel3d,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/pyramid3d",["highcharts/highcharts"],function(e){return t(e.Series.types.funnel3d,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/modules/pyramid3d"]=t(e._Highcharts.Series.types.funnel3d,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.funnel3d,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={68(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let n={};o.d(n,{default:()=>f});var h=o(944),a=o.n(h),d=o(68),p=o.n(d),c=o(512),l=o.n(c);class u extends p(){}u.defaultOptions=(0,h.merge)(p().defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),l().registerSeriesType("pyramid3d",u);let f=a();return n.default})());