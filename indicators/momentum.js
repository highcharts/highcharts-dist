!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/momentum",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/momentum"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>l});var n=i(944),a=i.n(n),h=i(512),u=i.n(h);let{sma:p}=u().seriesTypes;function c(e,t,r,s,i){let o=t[r-1][i]-t[r-s-1][i];return[e[r-1],o]}class d extends p{getValues(e,t){let r,s,i=t.period,o=t.index,a=e.xData,h=e.yData,u=h?h.length:0,p=[],d=[],l=[];if(!(a.length<=i)&&(0,n.isArray)(h[0])){for(r=i+1;r<u;r++)s=c(a,h,r,i,o),p.push(s),d.push(s[0]),l.push(s[1]);return s=c(a,h,r,i,o),p.push(s),d.push(s[0]),l.push(s[1]),{values:p,xData:d,yData:l}}}}d.defaultOptions=(0,n.merge)(p.defaultOptions,{params:{index:3}}),(0,n.extend)(d.prototype,{nameBase:"Momentum"}),u().registerSeriesType("momentum",d);let l=a();return o.default})());