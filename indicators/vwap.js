!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/vwap",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/vwap"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],a=t[r++];i.o(e,s)?0===a&&r++:0===a?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:a})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>c});var o=i(944),n=i.n(o),u=i(512),l=i.n(u);let{sma:h}=l().seriesTypes;class p extends h{getValues(e,t){let r=e.chart,s=e.xData,i=e.yData,a=t.period,n=!0,u;return(u=r.get(t.volumeSeriesID))?((0,o.isArray)(i[0])||(n=!1),this.calculateVWAPValues(n,s,i,u,a)):void(0,o.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,r)}calculateVWAPValues(e,t,r,s,i){let a,o,n,u,l,h,p=s.getColumn("y"),c=p.length,d=t.length,f=[],g=[],y=[],v=[],m=[];for(l=0,a=d<=c?d:c,h=0;l<a;l++)o=(e?(r[l][1]+r[l][2]+r[l][3])/3:r[l])*p[l],n=h?f[l-1]+o:o,u=h?g[l-1]+p[l]:p[l],f.push(n),g.push(u),m.push([t[l],n/u]),y.push(m[l][0]),v.push(m[l][1]),++h===i&&(h=0);return{values:m,xData:y,yData:v}}}p.defaultOptions=(0,o.merge)(h.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),l().registerSeriesType("vwap",p);let c=n();return a.default})());