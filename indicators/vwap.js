!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/vwap",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/vwap"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};a.d(i,{default:()=>g});var o=a(944),u=a.n(o),h=a(512),n=a.n(h);let{sma:p}=n().seriesTypes,{error:l,isArray:c,merge:d}=u();class f extends p{getValues(e,t){let r=e.chart,s=e.xData,a=e.yData,i=t.period,o=!0,u;return(u=r.get(t.volumeSeriesID))?(c(a[0])||(o=!1),this.calculateVWAPValues(o,s,a,u,i)):void l("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,r)}calculateVWAPValues(e,t,r,s,a){let i,o,u,h,n,p,l=s.getColumn("y"),c=l.length,d=t.length,f=[],g=[],v=[],y=[],x=[];for(n=0,i=d<=c?d:c,p=0;n<i;n++)o=(e?(r[n][1]+r[n][2]+r[n][3])/3:r[n])*l[n],u=p?f[n-1]+o:o,h=p?g[n-1]+l[n]:l[n],f.push(u),g.push(h),x.push([t[n],u/h]),v.push(x[n][0]),y.push(x[n][1]),++p===a&&(p=0);return{values:x,xData:v,yData:y}}}f.defaultOptions=d(p.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),n().registerSeriesType("vwap",f);let g=u();return i.default})());