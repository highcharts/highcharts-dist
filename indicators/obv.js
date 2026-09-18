!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/obv",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/obv"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let o={};function s(e){let t=o[e];if(void 0!==t)return t.exports;let i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>d});var a=s(944),n=s.n(a),u=s(512),h=s.n(u);let{sma:p}=h().seriesTypes;class l extends p{getValues(e,t){let r=e.chart.get(t.volumeSeriesID),o=e.xData,s=e.yData,i=[],n=[],u=[],h=!(0,a.isNumber)(s[0]),p=[],l=1,d=0,c=0,f=0,g=0,m;if(!r)return void(0,a.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(m=r.getColumn("y"),p=[o[0],d],f=h?s[0][3]:s[0],i.push(p),n.push(o[0]),u.push(p[1]);l<s.length;l++)c=(g=h?s[l][3]:s[l])>f?d+m[l]:g===f?d:d-m[l],p=[o[l],c],d=c,f=g,i.push(p),n.push(o[l]),u.push(p[1]);return{values:i,xData:n,yData:u}}}l.defaultOptions=(0,a.merge)(p.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,a.extend)(l.prototype,{nameComponents:void 0}),h().registerSeriesType("obv",l);let d=n();return i.default})());