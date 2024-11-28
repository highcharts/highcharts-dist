!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/dema
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Rafał Sebestjański
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/dema",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/dema"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>f});var h=i(944),o=/*#__PURE__*/i.n(h),u=i(512),n=/*#__PURE__*/i.n(u);let{ema:p}=n().seriesTypes,{correctFloat:c,isArray:d,merge:g}=o();class l extends p{getEMA(e,t,r,s,i,a){return super.calculateEma(a||[],e,void 0===i?1:i,this.EMApercent,t,void 0===s?-1:s,r)}getValues(e,t){let r=t.period,s=[],i=2*r,a=e.xData,h=e.yData,o=h?h.length:0,u=[],n=[],p=[],g=0,l=0,f,x,y,v,m=-1,b,E=0;if(this.EMApercent=2/(r+1),!(o<2*r-1)){for(d(h[0])&&(m=t.index?t.index:0),E=(g=super.accumulatePeriodPoints(r,m,h))/r,g=0,v=r;v<o+2;v++)v<o+1&&(l=this.getEMA(h,x,E,m,v)[1],s.push(l)),x=l,v<i?g+=l:(v===i&&(E=g/r),l=s[v-r-1],f=this.getEMA([l],y,E)[1],b=[a[v-2],c(2*l-f)],u.push(b),n.push(b[0]),p.push(b[1]),y=f);return{values:u,xData:n,yData:p}}}}l.defaultOptions=g(p.defaultOptions),n().registerSeriesType("dema",l);let f=o();return a.default})());