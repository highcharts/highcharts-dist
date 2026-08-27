!/**
 * Highstock JS v13.0.2 (2026-08-27)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/disparity-index",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/disparity-index"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let a={};function i(e){let t=a[e];if(void 0!==t)return t.exports;let s=a[e]={exports:{}};return r[e](s,s.exports,i),s.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var a=t[r++],s=t[r++];i.o(e,a)?0===s&&r++:0===s?Object.defineProperty(e,a,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,a,{enumerable:!0,get:s})}else for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s={};i.d(s,{default:()=>c});var n=i(944),o=i.n(n),p=i(512),d=i.n(p);let{sma:l}=d().seriesTypes;class h extends l{init(){let e=arguments,t=e[1].params,r=t&&t.average?t.average:void 0;this.averageIndicator=d().seriesTypes[r]||l,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,t){return(0,n.correctFloat)(e-t)/t*100}getValues(e,t){let r=t.index,a=e.xData,i=e.yData,s=i?i.length:0,o=[],p=[],d=[],l=this.averageIndicator,h=(0,n.isArray)(i[0]),c=l.prototype.getValues(e,t),g=c.yData,u=a.indexOf(c.xData[0]);if(g&&0!==g.length&&(0,n.defined)(r)&&!(i.length<=u)){for(let e=u;e<s;e++){let t=this.calculateDisparityIndex(h?i[e][r]:i[e],g[e-u]);o.push([a[e],t]),p.push(a[e]),d.push(t)}return{values:o,xData:p,yData:d}}}}h.defaultOptions=(0,n.merge)(l.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),(0,n.extend)(h.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),d().registerSeriesType("disparityindex",h);let c=o();return s.default})());