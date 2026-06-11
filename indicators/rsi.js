!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/rsi",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/rsi"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>f});var o=i(944),n=i.n(o),h=i(512),p=i.n(h);let{sma:u}=p().seriesTypes;function c(e,t){return parseFloat(e.toFixed(t))}class d extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,n=t.decimals,h=[],p=[],u=[],d=0,f=0,l=t.index,g=1,x,y,m,b,v,H;if(!(s.length<r)){for((0,o.isNumber)(i[0])?H=i:(l=Math.min(l,i[0].length-1),H=i.map(e=>e[l]));g<r;)(y=c(H[g]-H[g-1],n))>0?d+=y:f+=Math.abs(y),g++;for(m=c(d/(r-1),n),b=c(f/(r-1),n),v=g;v<a;v++)(y=c(H[v]-H[v-1],n))>0?(d=y,f=0):(d=0,f=Math.abs(y)),m=c((m*(r-1)+d)/r,n),x=0===(b=c((b*(r-1)+f)/r,n))?100:0===m?0:c(100-100/(1+m/b),n),h.push([s[v],x]),p.push(s[v]),u.push(x);return{values:h,xData:p,yData:u}}}}d.defaultOptions=(0,o.merge)(u.defaultOptions,{params:{decimals:4,index:3}}),p().registerSeriesType("rsi",d);let f=n();return a.default})());