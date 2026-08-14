!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kołodziej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/obv",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/obv"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let o={};function s(e){let t=o[e];if(void 0!==t)return t.exports;let i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var o=t[r++],i=t[r++];s.o(e,o)?0===i&&r++:0===i?Object.defineProperty(e,o,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,o,{enumerable:!0,get:i})}else for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>d});var a=s(944),n=s.n(a),u=s(512),h=s.n(u);let{sma:l}=h().seriesTypes;class p extends l{getValues(e,t){let r=e.chart.get(t.volumeSeriesID),o=e.xData,s=e.yData,i=[],n=[],u=[],h=!(0,a.isNumber)(s[0]),l=[],p=1,d=0,c=0,f=0,g=0,y;if(!r)return void(0,a.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(y=r.getColumn("y"),l=[o[0],d],f=h?s[0][3]:s[0],i.push(l),n.push(o[0]),u.push(l[1]);p<s.length;p++)c=(g=h?s[p][3]:s[p])>f?d+y[p]:g===f?d:d-y[p],l=[o[p],c],d=c,f=g,i.push(l),n.push(o[p]),u.push(l[1]);return{values:i,xData:n,yData:u}}}p.defaultOptions=(0,a.merge)(l.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,a.extend)(p.prototype,{nameComponents:void 0}),h().registerSeriesType("obv",p);let d=n();return i.default})());