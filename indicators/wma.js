!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/wma",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/wma"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var h=s[e]={exports:{}};return r[e](h,h.exports,i),h.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var h={};i.d(h,{default:()=>x});var a=i(944),o=/*#__PURE__*/i.n(a),n=i(512),u=/*#__PURE__*/i.n(n);let{sma:p}=u().seriesTypes,{isArray:c,merge:f}=o();function l(e,t,r,s,i){let h=t[s],a=i<0?r[s]:r[s][i];e.push([h,a])}function d(e,t,r,s){let i=e.length,h=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((i+1)/2*i),a=t[s-1];return e.shift(),[a,h]}class g extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,h=i?i.length:0,a=s[0],o=[],n=[],u=[],p=1,f=-1,g,x,y=i[0];if(s.length<r)return;c(i[0])&&(f=t.index,y=i[0][f]);let m=[[a,y]];for(;p!==r;)l(m,s,i,p,f),p++;for(g=p;g<h;g++)o.push(x=d(m,s,i,g)),n.push(x[0]),u.push(x[1]),l(m,s,i,g,f);return o.push(x=d(m,s,i,g)),n.push(x[0]),u.push(x[1]),{values:o,xData:n,yData:u}}}g.defaultOptions=f(p.defaultOptions,{params:{index:3,period:9}}),u().registerSeriesType("wma",g);let x=o();return h.default})());