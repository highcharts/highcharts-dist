!/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/momentum",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/momentum"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],o=t[r++];i.o(e,s)?0===o&&r++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>d});var a=i(944),n=i.n(a),u=i(512),h=i.n(u);let{sma:p}=h().seriesTypes;function l(e,t,r,s,i){let o=t[r-1][i]-t[r-s-1][i];return[e[r-1],o]}class c extends p{getValues(e,t){let r,s,i=t.period,o=t.index,n=e.xData,u=e.yData,h=u?u.length:0,p=[],c=[],d=[];if(!(n.length<=i)&&(0,a.isArray)(u[0])){for(r=i+1;r<h;r++)s=l(n,u,r,i,o),p.push(s),c.push(s[0]),d.push(s[1]);return s=l(n,u,r,i,o),p.push(s),c.push(s[0]),d.push(s[1]),{values:p,xData:c,yData:d}}}}c.defaultOptions=(0,a.merge)(p.defaultOptions,{params:{index:3}}),(0,a.extend)(c.prototype,{nameBase:"Momentum"}),h().registerSeriesType("momentum",c);let d=n();return o.default})());