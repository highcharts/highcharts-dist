!/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/obv",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/obv"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};s.d(i,{default:()=>c});var a=s(944),n=s.n(a),u=s(512),h=s.n(u);let{sma:p}=h().seriesTypes;class d extends p{getValues(e,t){let r=e.chart.get(t.volumeSeriesID),o=e.xData,s=e.yData,i=[],n=[],u=[],h=!(0,a.isNumber)(s[0]),p=[],d=1,c=0,l=0,f=0,g=0,v;if(!r)return void(0,a.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(v=r.getColumn("y"),p=[o[0],c],f=h?s[0][3]:s[0],i.push(p),n.push(o[0]),u.push(p[1]);d<s.length;d++)l=(g=h?s[d][3]:s[d])>f?c+v[d]:g===f?c:c-v[d],p=[o[d],l],c=l,f=g,i.push(p),n.push(o[d]),u.push(p[1]);return{values:i,xData:n,yData:u}}}d.defaultOptions=(0,a.merge)(p.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,a.extend)(d.prototype,{nameComponents:void 0}),h().registerSeriesType("obv",d);let c=n();return i.default})());