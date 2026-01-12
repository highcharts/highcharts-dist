!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/williams-r"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return r[e](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};s.d(a,{default:()=>y});var o=s(944),n=s.n(o);let h=function(e,t,r){return e.reduce((e,i)=>[Math.min(e[0],i[t]),Math.max(e[1],i[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])};var p=s(512),u=s.n(p);let{sma:l}=u().seriesTypes,{extend:c,isArray:d,merge:f}=n();class g extends l{getValues(e,t){let r,i,s,a,o,n=t.period,p=e.xData,u=e.yData,l=u?u.length:0,c=[],f=[],g=[];if(!(p.length<n)&&d(u[0])&&4===u[0].length){for(o=n-1;o<l;o++)a=(r=h(u.slice(o-n+1,o+1),2,1))[0],i=-(((s=r[1])-u[o][3])/(s-a)*100),p[o]&&(c.push([p[o],i]),f.push(p[o]),g.push(i));return{values:c,xData:f,yData:g}}}}g.defaultOptions=f(l.defaultOptions,{params:{index:void 0,period:14}}),c(g.prototype,{nameBase:"Williams %R"}),u().registerSeriesType("williamsr",g);let y=n();return a.default})());