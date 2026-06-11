!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/wma",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/wma"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>l});var o=i(944),n=i.n(o),h=i(512),u=i.n(h);let{sma:p}=u().seriesTypes;function c(e,t,r,s,i){let a=t[s],o=i<0?r[s]:r[s][i];e.push([a,o])}function d(e,t,r,s){let i=e.length,a=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((i+1)/2*i),o=t[s-1];return e.shift(),[o,a]}class f extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,n=s[0],h=[],u=[],p=[],f=1,l=-1,g,y,x=i[0];if(s.length<r)return;(0,o.isArray)(i[0])&&(l=t.index,x=i[0][l]);let m=[[n,x]];for(;f!==r;)c(m,s,i,f,l),f++;for(g=f;g<a;g++)h.push(y=d(m,s,i,g)),u.push(y[0]),p.push(y[1]),c(m,s,i,g,l);return h.push(y=d(m,s,i,g)),u.push(y[0]),p.push(y[1]),{values:h,xData:u,yData:p}}}f.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{index:3,period:9}}),u().registerSeriesType("wma",f);let l=n();return a.default})());