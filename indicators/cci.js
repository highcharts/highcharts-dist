!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/cci
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/cci",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/cci"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var h=s[e]={exports:{}};return r[e](h,h.exports,i),h.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var h={};i.d(h,{default:()=>l});var a=i(944),o=/*#__PURE__*/i.n(a),n=i(512),c=/*#__PURE__*/i.n(n);let{sma:u}=c().seriesTypes,{isArray:p,merge:f}=o();class g extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,h=i?i.length:0,a=[],o=[],n=[],c=[],u,f,g=[],l,d=1,y,x,v,b;if(!(s.length<=r)&&p(i[0])&&4===i[0].length){for(;d<r;)f=i[d-1],a.push((f[1]+f[2]+f[3])/3),d++;for(b=r;b<=h;b++)x=((f=i[b-1])[1]+f[2]+f[3])/3,l=a.push(x),y=(g=a.slice(l-r)).reduce(function(e,t){return e+t},0)/r,v=function(e,t){let r=e.length,s=0,i;for(i=0;i<r;i++)s+=Math.abs(t-e[i]);return s}(g,y)/r,u=(x-y)/(.015*v),o.push([s[b-1],u]),n.push(s[b-1]),c.push(u);return{values:o,xData:n,yData:c}}}}g.defaultOptions=f(u.defaultOptions,{params:{index:void 0}}),c().registerSeriesType("cci",g);let l=o();return h.default})());