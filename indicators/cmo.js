!/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/cmo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/cmo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],a=t[r++];i.o(e,s)?0===a&&r++:0===a?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:a})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>c});var o=i(944),n=i.n(o),h=i(512),p=i.n(h);let{sma:u}=p().seriesTypes;class l extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,n=[],h=[],p=[],u,l=t.index,c;if(s.length<r)return;(0,o.isNumber)(i[0])?c=i:(l=Math.min(l,i[0].length-1),c=i.map(e=>e[l]));let d=0,f=0,g=0,y;for(let e=r;e>0;e--)c[e]>c[e-1]?f+=c[e]-c[e-1]:c[e]<c[e-1]&&(g+=c[e-1]-c[e]);for(y=f+g>0?100*(f-g)/(f+g):0,h.push(s[r]),p.push(y),n.push([s[r],y]),u=r+1;u<a;u++)d=Math.abs(c[u-r-1]-c[u-r]),c[u]>c[u-1]?f+=c[u]-c[u-1]:c[u]<c[u-1]&&(g+=c[u-1]-c[u]),c[u-r]>c[u-r-1]?f-=d:g-=d,y=f+g>0?100*(f-g)/(f+g):0,h.push(s[u]),p.push(y),n.push([s[u],y]);return{values:n,xData:h,yData:p}}}l.defaultOptions=(0,o.merge)(u.defaultOptions,{params:{period:20,index:3}}),p().registerSeriesType("cmo",l);let c=n();return a.default})());