!/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/williams-r"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>f});var h=a(944),n=a.n(h);let p=function(e,t,r){return e.reduce((e,s)=>[Math.min(e[0],s[t]),Math.max(e[1],s[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])};var l=a(80),c=a.n(l),u=a(512),d=a.n(u);class g extends c(){getValues(e,t){let r,s,i,a,o,n=t.period,l=e.xData,c=e.yData,u=c?c.length:0,d=[],g=[],f=[];if(!(l.length<n)&&(0,h.isArray)(c[0])&&4===c[0].length){for(o=n-1;o<u;o++)a=(r=p(c.slice(o-n+1,o+1),2,1))[0],s=-(((i=r[1])-c[o][3])/(i-a)*100),l[o]&&(d.push([l[o],s]),g.push(l[o]),f.push(s));return{values:d,xData:g,yData:f}}}}g.defaultOptions=(0,h.merge)(c().defaultOptions,{params:{index:void 0,period:14}}),(0,h.extend)(g.prototype,{nameBase:"Williams %R"}),d().registerSeriesType("williamsr",g);let f=n();return o.default})());