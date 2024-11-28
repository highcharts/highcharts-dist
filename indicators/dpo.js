!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/dpo",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/dpo"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function i(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};i.d(a,{default:()=>x});var o=i(944),h=/*#__PURE__*/i.n(o),p=i(512),n=/*#__PURE__*/i.n(p);let{sma:u}=n().seriesTypes,{extend:c,merge:d,correctFloat:f,pick:g}=h();function l(e,r,t,s,i){let a=g(r[t][s],r[t]);return i?f(e-a):f(e+a)}class y extends u{getValues(e,r){let t=r.period,s=r.index,i=Math.floor(t/2+1),a=t+i,o=e.xData||[],h=e.yData||[],p=h.length,n=[],u=[],c=[],d,f,y,x,v,m=0;if(!(o.length<=a)){for(x=0;x<t-1;x++)m=l(m,h,x,s);for(v=0;v<=p-a;v++)f=v+t-1,y=v+a-1,m=l(m,h,f,s),d=g(h[y][s],h[y])-m/t,m=l(m,h,v,s,!0),n.push([o[y],d]),u.push(o[y]),c.push(d);return{values:n,xData:u,yData:c}}}}y.defaultOptions=d(u.defaultOptions,{params:{index:0,period:21}}),c(y.prototype,{nameBase:"DPO"}),n().registerSeriesType("dpo",y);let x=h();return a.default})());