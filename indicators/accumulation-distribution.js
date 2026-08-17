!/**
 * Highstock JS v13.0.1 (2026-08-17)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/accumulation-distribution",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/accumulation-distribution"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let s=i[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var i=t[r++],s=t[r++];o.o(e,i)?0===s&&r++:0===s?Object.defineProperty(e,i,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,i,{enumerable:!0,get:s})}else for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s={};o.d(s,{default:()=>p});var a=o(944),n=o.n(a),u=o(512),l=o.n(u);let{sma:h}=l().seriesTypes;class c extends h{static populateAverage(e,t,r,i,o){let s=t[i][1],a=t[i][2],n=t[i][3],u=r[i],l=n===s&&n===a||s===a?0:(2*n-a-s)/(s-a)*u;return[e[i],l]}getValues(e,t){let r,i,o,s=t.period,n=e.xData,u=e.yData,l=t.volumeSeriesID,h=e.chart.get(l),p=h?.getColumn("y"),d=u?u.length:0,g=[],f=[],y=[];if(!(n.length<=s)||!d||4===u[0].length){if(!h)return void(0,a.error)("Series "+l+" not found! Check `volumeSeriesID`.",!0,e.chart);for(i=s;i<d;i++)r=g.length,o=c.populateAverage(n,u,p,i,s),r>0&&(o[1]+=g[r-1][1]),g.push(o),f.push(o[0]),y.push(o[1]);return{values:g,xData:f,yData:y}}}}c.defaultOptions=(0,a.merge)(h.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,a.extend)(c.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),l().registerSeriesType("ad",c);let p=n();return s.default})());