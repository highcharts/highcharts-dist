!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Lysy
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/cmo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/cmo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>d});var o=i(944),h=i.n(o),n=i(512),p=i.n(n);let{sma:u}=p().seriesTypes;class c extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,h=[],n=[],p=[],u,c=t.index,d;if(s.length<r)return;(0,o.isNumber)(i[0])?d=i:(c=Math.min(c,i[0].length-1),d=i.map(e=>e[c]));let f=0,g=0,l=0,y;for(let e=r;e>0;e--)d[e]>d[e-1]?g+=d[e]-d[e-1]:d[e]<d[e-1]&&(l+=d[e-1]-d[e]);for(y=g+l>0?100*(g-l)/(g+l):0,n.push(s[r]),p.push(y),h.push([s[r],y]),u=r+1;u<a;u++)f=Math.abs(d[u-r-1]-d[u-r]),d[u]>d[u-1]?g+=d[u]-d[u-1]:d[u]<d[u-1]&&(l+=d[u-1]-d[u]),d[u-r]>d[u-r-1]?g-=f:l-=f,y=g+l>0?100*(g-l)/(g+l):0,n.push(s[u]),p.push(y),h.push([s[u],y]);return{values:h,xData:n,yData:p}}}c.defaultOptions=(0,o.merge)(u.defaultOptions,{params:{period:20,index:3}}),p().registerSeriesType("cmo",c);let d=h();return a.default})());