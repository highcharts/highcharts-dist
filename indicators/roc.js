!/**
 * Highstock JS v13.0.1 (2026-08-17)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/roc",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/roc"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],o=t[r++];i.o(e,s)?0===o&&r++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>c});var a=i(944),n=i.n(a),h=i(512),l=i.n(h);let{sma:p}=l().seriesTypes;class u extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,n=[],h=[],l=[],p,u=-1,c;if(!(s.length<=r)){for((0,a.isArray)(i[0])&&(u=t.index),p=r;p<o;p++)c=function(e,t,r,s,i){let o,a;return a=i<0?(o=t[r-s])?(t[r]-o)/o*100:null:(o=t[r-s][i])?(t[r][i]-o)/o*100:null,[e[r],a]}(s,i,p,r,u),n.push(c),h.push(c[0]),l.push(c[1]);return{values:n,xData:h,yData:l}}}}u.defaultOptions=(0,a.merge)(p.defaultOptions,{params:{index:3,period:9}}),(0,a.extend)(u.prototype,{nameBase:"Rate of Change"}),l().registerSeriesType("roc",u);let c=n();return o.default})());