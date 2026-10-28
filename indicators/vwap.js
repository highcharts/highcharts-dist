!/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/vwap",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/vwap"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>g});var h=a(944),u=a.n(h),n=a(80),p=a.n(n),l=a(512),c=a.n(l);class d extends p(){getValues(e,t){let r=e.chart,s=e.xData,i=e.yData,a=t.period,o=!0,u;return(u=r.get(t.volumeSeriesID))?((0,h.isArray)(i[0])||(o=!1),this.calculateVWAPValues(o,s,i,u,a)):void(0,h.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,r)}calculateVWAPValues(e,t,r,s,i){let a,o,h,u,n,p,l=s.getColumn("y"),c=l.length,d=t.length,g=[],f=[],y=[],m=[],v=[];for(a=d<=c?d:c,n=0,p=0;n<a;n++)o=(e?(r[n][1]+r[n][2]+r[n][3])/3:r[n])*l[n],h=p?g[n-1]+o:o,u=p?f[n-1]+l[n]:l[n],g.push(h),f.push(u),v.push([t[n],h/u]),y.push(v[n][0]),m.push(v[n][1]),++p===i&&(p=0);return{values:v,xData:y,yData:m}}}d.defaultOptions=(0,h.merge)(p().defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),c().registerSeriesType("vwap",d);let g=u();return o.default})());