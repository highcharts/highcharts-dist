!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/disparity-index",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/disparity-index"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let a={};function i(e){let t=a[e];if(void 0!==t)return t.exports;let s=a[e]={exports:{}};return r[e](s,s.exports,i),s.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s={};i.d(s,{default:()=>c});var o=i(944),n=i.n(o),p=i(512),d=i.n(p);let{sma:h}=d().seriesTypes;class l extends h{init(){let e=arguments,t=e[1].params,r=t&&t.average?t.average:void 0;this.averageIndicator=d().seriesTypes[r]||h,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,t){return(0,o.correctFloat)(e-t)/t*100}getValues(e,t){let r=t.index,a=e.xData,i=e.yData,s=i?i.length:0,n=[],p=[],d=[],h=this.averageIndicator,l=(0,o.isArray)(i[0]),c=h.prototype.getValues(e,t),g=c.yData,u=a.indexOf(c.xData[0]);if(g&&0!==g.length&&(0,o.defined)(r)&&!(i.length<=u)){for(let e=u;e<s;e++){let t=this.calculateDisparityIndex(l?i[e][r]:i[e],g[e-u]);n.push([a[e],t]),p.push(a[e]),d.push(t)}return{values:n,xData:p,yData:d}}}}l.defaultOptions=(0,o.merge)(h.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),(0,o.extend)(l.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),d().registerSeriesType("disparityindex",l);let c=n();return s.default})());