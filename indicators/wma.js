!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/wma",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/wma"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>y});var o=i(944),n=i.n(o),h=i(512),u=i.n(h);let{sma:p}=u().seriesTypes,{isArray:c,merge:d}=n();function f(e,t,r,s,i){let a=t[s],o=i<0?r[s]:r[s][i];e.push([a,o])}function l(e,t,r,s){let i=e.length,a=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((i+1)/2*i),o=t[s-1];return e.shift(),[o,a]}class g extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=s[0],n=[],h=[],u=[],p=1,d=-1,g,y,x=i[0];if(s.length<r)return;c(i[0])&&(d=t.index,x=i[0][d]);let m=[[o,x]];for(;p!==r;)f(m,s,i,p,d),p++;for(g=p;g<a;g++)n.push(y=l(m,s,i,g)),h.push(y[0]),u.push(y[1]),f(m,s,i,g,d);return n.push(y=l(m,s,i,g)),h.push(y[0]),u.push(y[1]),{values:n,xData:h,yData:u}}}g.defaultOptions=d(p.defaultOptions,{params:{index:3,period:9}}),u().registerSeriesType("wma",g);let y=n();return a.default})());