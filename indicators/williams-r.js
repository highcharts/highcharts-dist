!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/williams-r",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],r):"object"==typeof exports?exports["highcharts/williams-r"]=r(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=r(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,r)=>(()=>{"use strict";var t={512:e=>{e.exports=r},944:r=>{r.exports=e}},s={};function i(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};i.d(a,{default:()=>y});var h=i(944),o=/*#__PURE__*/i.n(h);let n={getArrayExtremes:function(e,r,t){return e.reduce((e,s)=>[Math.min(e[0],s[r]),Math.max(e[1],s[t])],[Number.MAX_VALUE,-Number.MAX_VALUE])}};var u=i(512),l=/*#__PURE__*/i.n(u);let{sma:p}=l().seriesTypes,{extend:c,isArray:g,merge:d}=o();class f extends p{getValues(e,r){let t,s,i,a,h,o;let u=r.period,l=e.xData,p=e.yData,c=p?p.length:0,d=[],f=[],y=[];if(!(l.length<u)&&g(p[0])&&4===p[0].length){for(o=u-1;o<c;o++)t=p.slice(o-u+1,o+1),h=(s=n.getArrayExtremes(t,2,1))[0],i=-(((a=s[1])-p[o][3])/(a-h)*100),l[o]&&(d.push([l[o],i]),f.push(l[o]),y.push(i));return{values:d,xData:f,yData:y}}}}f.defaultOptions=d(p.defaultOptions,{params:{index:void 0,period:14}}),c(f.prototype,{nameBase:"Williams %R"}),l().registerSeriesType("williamsr",f);let y=o();return a.default})());