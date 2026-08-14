!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/wma",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/wma"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],a=t[r++];i.o(e,s)?0===a&&r++:0===a?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:a})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>d});var n=i(944),o=i.n(n),u=i(512),h=i.n(u);let{sma:l}=h().seriesTypes;function p(e,t,r,s,i){let a=t[s],n=i<0?r[s]:r[s][i];e.push([a,n])}function c(e,t,r,s){let i=e.length,a=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((i+1)/2*i),n=t[s-1];return e.shift(),[n,a]}class f extends l{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=s[0],u=[],h=[],l=[],f=1,d=-1,g,y,x=i[0];if(s.length<r)return;(0,n.isArray)(i[0])&&(d=t.index,x=i[0][d]);let m=[[o,x]];for(;f!==r;)p(m,s,i,f,d),f++;for(g=f;g<a;g++)u.push(y=c(m,s,i,g)),h.push(y[0]),l.push(y[1]),p(m,s,i,g,d);return u.push(y=c(m,s,i,g)),h.push(y[0]),l.push(y[1]),{values:u,xData:h,yData:l}}}f.defaultOptions=(0,n.merge)(l.defaultOptions,{params:{index:3,period:9}}),h().registerSeriesType("wma",f);let d=o();return a.default})());