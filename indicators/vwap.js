!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/vwap",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/vwap"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>c});var a=i(944),u=i.n(a),h=i(512),n=i.n(h);let{sma:l}=n().seriesTypes;class p extends l{getValues(e,t){let r=e.chart,s=e.xData,i=e.yData,o=t.period,u=!0,h;return(h=r.get(t.volumeSeriesID))?((0,a.isArray)(i[0])||(u=!1),this.calculateVWAPValues(u,s,i,h,o)):void(0,a.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,r)}calculateVWAPValues(e,t,r,s,i){let o,a,u,h,n,l,p=s.getColumn("y"),c=p.length,d=t.length,g=[],f=[],y=[],v=[],x=[];for(o=d<=c?d:c,n=0,l=0;n<o;n++)a=(e?(r[n][1]+r[n][2]+r[n][3])/3:r[n])*p[n],u=l?g[n-1]+a:a,h=l?f[n-1]+p[n]:p[n],g.push(u),f.push(h),x.push([t[n],u/h]),y.push(x[n][0]),v.push(x[n][1]),++l===i&&(l=0);return{values:x,xData:y,yData:v}}}p.defaultOptions=(0,a.merge)(l.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),n().registerSeriesType("vwap",p);let c=u();return o.default})());