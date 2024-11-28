!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/trendline
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/trendline",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/trendline"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var h=s[e]={exports:{}};return r[e](h,h.exports,i),h.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var h={};i.d(h,{default:()=>f});var o=i(944),a=/*#__PURE__*/i.n(o),n=i(512),l=/*#__PURE__*/i.n(n);let{sma:p}=l().seriesTypes,{extend:u,merge:d,isArray:c}=a();class g extends p{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,s=e.yData,i=[],h=[],o=[],a=[],n=t.index,l=0,p=0,u=0,d=0,g=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&g++,i.push(g);for(let e=0;e<i.length;e++)u+=i[e],d+=c(s[e])?s[e][n]:s[e];let f=u/i.length,y=d/s.length;for(let e=0;e<i.length;e++){let t=c(s[e])?s[e][n]:s[e];l+=(i[e]-f)*(t-y),p+=Math.pow(i[e]-f,2)}for(let e=0;e<i.length;e++){if(r[e]===o[o.length-1])continue;let t=r[e],s=y+l/p*(i[e]-f);h.push([t,s]),o.push(t),a.push(s)}return{xData:o,yData:a,values:h}}}g.defaultOptions=d(p.defaultOptions,{params:{period:void 0,index:3}}),u(g.prototype,{nameBase:"Trendline",nameComponents:void 0}),l().registerSeriesType("trendline",g);let f=a();return h.default})());