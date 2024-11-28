!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/atr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/atr",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/atr"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var h=s[e]={exports:{}};return r[e](h,h.exports,a),h.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var h={};a.d(h,{default:()=>l});var i=a(944),o=/*#__PURE__*/a.n(i),u=a(512),n=/*#__PURE__*/a.n(u);let{sma:p}=n().seriesTypes,{isArray:c,merge:d}=o();function g(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class f extends p{getValues(e,t){let r=t.period,s=e.xData,a=e.yData,h=a?a.length:0,i=[[s[0],a[0]]],o=[],u=[],n=[],p,d,f=0,l=1,x=0;if(!(s.length<=r)&&c(a[0])&&4===a[0].length){for(d=1;d<=h;d++){var y,v;!function(e,t,r,s){let a=t[s],h=r[s];e.push([a,h])}(i,s,a,d),r<l?(f=(y=d,v=f,p=[s[y-1],(v*(r-1)+g(a[y-1],a[y-2]))/r])[1],o.push(p),u.push(p[0]),n.push(p[1])):(r===l?(f=x/(d-1),o.push([s[d-1],f]),u.push(s[d-1]),n.push(f)):x+=g(a[d-1],a[d-2]),l++)}return{values:o,xData:u,yData:n}}}}f.defaultOptions=d(p.defaultOptions,{params:{index:void 0}}),n().registerSeriesType("atr",f);let l=o();return h.default})());