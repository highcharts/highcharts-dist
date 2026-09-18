!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/wma",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/wma"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>f});var n=i(944),a=i.n(n),h=i(512),u=i.n(h);let{sma:p}=u().seriesTypes;function l(e,t,r,s,i){let o=t[s],n=i<0?r[s]:r[s][i];e.push([o,n])}function c(e,t,r,s){let i=e.length,o=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((i+1)/2*i),n=t[s-1];return e.shift(),[n,o]}class d extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,a=s[0],h=[],u=[],p=[],d=1,f=-1,g,y,x=i[0];if(s.length<r)return;(0,n.isArray)(i[0])&&(f=t.index,x=i[0][f]);let m=[[a,x]];for(;d!==r;)l(m,s,i,d,f),d++;for(g=d;g<o;g++)h.push(y=c(m,s,i,g)),u.push(y[0]),p.push(y[1]),l(m,s,i,g,f);return h.push(y=c(m,s,i,g)),u.push(y[0]),p.push(y[1]),{values:h,xData:u,yData:p}}}d.defaultOptions=(0,n.merge)(p.defaultOptions,{params:{index:3,period:9}}),u().registerSeriesType("wma",d);let f=a();return o.default})());