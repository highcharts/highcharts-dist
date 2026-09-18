!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/rsi",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/rsi"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>l});var o=i(944),n=i.n(o),h=i(512),p=i.n(h);let{sma:u}=p().seriesTypes;function c(e,t){return parseFloat(e.toFixed(t))}class d extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,n=t.decimals,h=[],p=[],u=[],d=0,l=0,f=t.index,g=1,x,y,m,b,H,_;if(!(s.length<r)){for((0,o.isNumber)(i[0])?_=i:(f=Math.min(f,i[0].length-1),_=i.map(e=>e[f]));g<r;)(y=c(_[g]-_[g-1],n))>0?d+=y:l+=Math.abs(y),g++;for(m=c(d/(r-1),n),b=c(l/(r-1),n),H=g;H<a;H++)(y=c(_[H]-_[H-1],n))>0?(d=y,l=0):(d=0,l=Math.abs(y)),m=c((m*(r-1)+d)/r,n),x=0===(b=c((b*(r-1)+l)/r,n))?100:0===m?0:c(100-100/(1+m/b),n),h.push([s[H],x]),p.push(s[H]),u.push(x);return{values:h,xData:p,yData:u}}}}d.defaultOptions=(0,o.merge)(u.defaultOptions,{params:{decimals:4,index:3}}),p().registerSeriesType("rsi",d);let l=n();return a.default})());