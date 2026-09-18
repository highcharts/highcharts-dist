!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/accumulation-distribution",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/accumulation-distribution"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let s=i[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s={};o.d(s,{default:()=>p});var a=o(944),n=o.n(a),u=o(512),h=o.n(u);let{sma:l}=h().seriesTypes;class c extends l{static populateAverage(e,t,r,i,o){let s=t[i][1],a=t[i][2],n=t[i][3],u=r[i],h=n===s&&n===a||s===a?0:(2*n-a-s)/(s-a)*u;return[e[i],h]}getValues(e,t){let r,i,o,s=t.period,n=e.xData,u=e.yData,h=t.volumeSeriesID,l=e.chart.get(h),p=l?.getColumn("y"),d=u?u.length:0,g=[],f=[],m=[];if(!(n.length<=s)||!d||4===u[0].length){if(!l)return void(0,a.error)("Series "+h+" not found! Check `volumeSeriesID`.",!0,e.chart);for(i=s;i<d;i++)r=g.length,o=c.populateAverage(n,u,p,i,s),r>0&&(o[1]+=g[r-1][1]),g.push(o),f.push(o[0]),m.push(o[1]);return{values:g,xData:f,yData:m}}}}c.defaultOptions=(0,a.merge)(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,a.extend)(c.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),h().registerSeriesType("ad",c);let p=n();return s.default})());