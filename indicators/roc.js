!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/roc",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/roc"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>l});var a=i(944),n=i.n(a),h=i(512),p=i.n(h);let{sma:u}=p().seriesTypes;class c extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,n=[],h=[],p=[],u,c=-1,l;if(!(s.length<=r)){for((0,a.isArray)(i[0])&&(c=t.index),u=r;u<o;u++)l=function(e,t,r,s,i){let o,a;return a=i<0?(o=t[r-s])?(t[r]-o)/o*100:null:(o=t[r-s][i])?(t[r][i]-o)/o*100:null,[e[r],a]}(s,i,u,r,c),n.push(l),h.push(l[0]),p.push(l[1]);return{values:n,xData:h,yData:p}}}}c.defaultOptions=(0,a.merge)(u.defaultOptions,{params:{index:3,period:9}}),(0,a.extend)(c.prototype,{nameBase:"Rate of Change"}),p().registerSeriesType("roc",c);let l=n();return o.default})());