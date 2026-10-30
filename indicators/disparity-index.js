!/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/disparity-index",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/disparity-index"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var a={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function s(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};s.d(o,{default:()=>y});var n=s(944),p=s.n(n),h=s(80),d=s.n(h),c=s(512),g=s.n(c);class l extends d(){init(){let e=arguments,t=e[1].params,r=t&&t.average?t.average:void 0;this.averageIndicator=g().seriesTypes[r]||d(),this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,t){return(0,n.correctFloat)(e-t)/t*100}getValues(e,t){let r=t.index,a=e.xData,i=e.yData,s=i?i.length:0,o=[],p=[],h=[],d=this.averageIndicator,c=(0,n.isArray)(i[0]),g=d.prototype.getValues(e,t),l=g.yData,y=a.indexOf(g.xData[0]);if(l&&0!==l.length&&(0,n.defined)(r)&&!(i.length<=y)){for(let e=y;e<s;e++){let t=this.calculateDisparityIndex(c?i[e][r]:i[e],l[e-y]);o.push([a[e],t]),p.push(a[e]),h.push(t)}return{values:o,xData:p,yData:h}}}}l.defaultOptions=(0,n.merge)(d().defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),(0,n.extend)(l.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),g().registerSeriesType("disparityindex",l);let y=p();return o.default})());