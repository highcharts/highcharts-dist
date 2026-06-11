!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/accumulation-distribution
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/accumulation-distribution",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/accumulation-distribution"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var s=i[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};o.d(s,{default:()=>l});var a=o(944),n=o.n(a),u=o(512),h=o.n(u);let{sma:c}=h().seriesTypes;class p extends c{static populateAverage(e,t,r,i,o){let s=t[i][1],a=t[i][2],n=t[i][3],u=r[i],h=n===s&&n===a||s===a?0:(2*n-a-s)/(s-a)*u;return[e[i],h]}getValues(e,t){let r,i,o,s=t.period,n=e.xData,u=e.yData,h=t.volumeSeriesID,c=e.chart.get(h),l=c?.getColumn("y"),d=u?u.length:0,g=[],f=[],m=[];if(!(n.length<=s)||!d||4===u[0].length){if(!c)return void(0,a.error)("Series "+h+" not found! Check `volumeSeriesID`.",!0,e.chart);for(i=s;i<d;i++)r=g.length,o=p.populateAverage(n,u,l,i,s),r>0&&(o[1]+=g[r-1][1]),g.push(o),f.push(o[0]),m.push(o[1]);return{values:g,xData:f,yData:m}}}}p.defaultOptions=(0,a.merge)(c.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,a.extend)(p.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),h().registerSeriesType("ad",p);let l=n();return s.default})());