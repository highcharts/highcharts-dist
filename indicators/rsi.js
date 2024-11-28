!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Fus
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/rsi",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/rsi"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};a.d(i,{default:()=>f});var h=a(944),o=/*#__PURE__*/a.n(h),n=a(512),p=/*#__PURE__*/a.n(n);let{sma:u}=p().seriesTypes,{isNumber:c,merge:d}=o();function g(e,t){return parseFloat(e.toFixed(t))}class l extends u{getValues(e,t){let r=t.period,s=e.xData,a=e.yData,i=a?a.length:0,h=t.decimals,o=[],n=[],p=[],u=0,d=0,l=t.index,f=1,x,y,m,v,b,j;if(!(s.length<r)){for(c(a[0])?j=a:(l=Math.min(l,a[0].length-1),j=a.map(e=>e[l]));f<r;)(y=g(j[f]-j[f-1],h))>0?u+=y:d+=Math.abs(y),f++;for(m=g(u/(r-1),h),v=g(d/(r-1),h),b=f;b<i;b++)(y=g(j[b]-j[b-1],h))>0?(u=y,d=0):(u=0,d=Math.abs(y)),m=g((m*(r-1)+u)/r,h),x=0===(v=g((v*(r-1)+d)/r,h))?100:0===m?0:g(100-100/(1+m/v),h),o.push([s[b],x]),n.push(s[b]),p.push(x);return{values:o,xData:n,yData:p}}}}l.defaultOptions=d(u.defaultOptions,{params:{decimals:4,index:3}}),p().registerSeriesType("rsi",l);let f=o();return i.default})());