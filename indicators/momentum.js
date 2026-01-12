!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/momentum",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/momentum"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};o.d(i,{default:()=>m});var a=o(944),n=o.n(a),h=o(512),u=o.n(h);let{sma:p}=u().seriesTypes,{extend:c,isArray:d,merge:f}=n();function g(e,t,r,s,o){let i=t[r-1][o]-t[r-s-1][o];return[e[r-1],i]}class l extends p{getValues(e,t){let r,s,o=t.period,i=t.index,a=e.xData,n=e.yData,h=n?n.length:0,u=[],p=[],c=[];if(!(a.length<=o)&&d(n[0])){for(r=o+1;r<h;r++)s=g(a,n,r,o,i),u.push(s),p.push(s[0]),c.push(s[1]);return s=g(a,n,r,o,i),u.push(s),p.push(s[0]),c.push(s[1]),{values:u,xData:p,yData:c}}}}l.defaultOptions=f(p.defaultOptions,{params:{index:3}}),c(l.prototype,{nameBase:"Momentum"}),u().registerSeriesType("momentum",l);let m=n();return i.default})());