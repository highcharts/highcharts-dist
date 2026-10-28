!/**
 * Highcharts JS v13.1.1-modified (2026-10-28)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.areaspline,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/streamgraph",["highcharts/highcharts"],function(e){return t(e.Series.types.areaspline,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/modules/streamgraph"]=t(e._Highcharts.Series.types.areaspline,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.areaspline,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={908(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let a={};function i(e){let t=a[e];if(void 0!==t)return t.exports;let r=a[e]={exports:{}};return s[e](r,r.exports,i),r.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>f});var h=i(944),n=i.n(h),p=i(908),d=i.n(p),c=i(512),l=i.n(c);class g extends d(){streamStacker(e,t,r){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[r]=Math.max.apply(0,e))}}g.defaultOptions=(0,h.merge)(d().defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),(0,h.addEvent)(g,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),(0,h.extend)(g.prototype,{negStacks:!1}),l().registerSeriesType("streamgraph",g);let f=n();return o.default})());