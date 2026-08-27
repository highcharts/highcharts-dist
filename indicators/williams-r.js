!/**
 * Highstock JS v13.0.2 (2026-08-27)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/williams-r"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let i={};function s(e){let t=i[e];if(void 0!==t)return t.exports;let a=i[e]={exports:{}};return r[e](a,a.exports,s),a.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var i=t[r++],a=t[r++];s.o(e,i)?0===a&&r++:0===a?Object.defineProperty(e,i,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,i,{enumerable:!0,get:a})}else for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};s.d(a,{default:()=>d});var o=s(944),n=s.n(o);let l=function(e,t,r){return e.reduce((e,i)=>[Math.min(e[0],i[t]),Math.max(e[1],i[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])};var h=s(512),u=s.n(h);let{sma:p}=u().seriesTypes;class c extends p{getValues(e,t){let r,i,s,a,n,h=t.period,u=e.xData,p=e.yData,c=p?p.length:0,d=[],f=[],g=[];if(!(u.length<h)&&(0,o.isArray)(p[0])&&4===p[0].length){for(n=h-1;n<c;n++)a=(r=l(p.slice(n-h+1,n+1),2,1))[0],i=-(((s=r[1])-p[n][3])/(s-a)*100),u[n]&&(d.push([u[n],i]),f.push(u[n]),g.push(i));return{values:d,xData:f,yData:g}}}}c.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{index:void 0,period:14}}),(0,o.extend)(c.prototype,{nameBase:"Williams %R"}),u().registerSeriesType("williamsr",c);let d=n();return a.default})());