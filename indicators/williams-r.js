!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/williams-r"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let i={};function s(e){let t=i[e];if(void 0!==t)return t.exports;let a=i[e]={exports:{}};return r[e](a,a.exports,s),a.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};s.d(a,{default:()=>d});var o=s(944),n=s.n(o);let h=function(e,t,r){return e.reduce((e,i)=>[Math.min(e[0],i[t]),Math.max(e[1],i[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])};var l=s(512),p=s.n(l);let{sma:u}=p().seriesTypes;class c extends u{getValues(e,t){let r,i,s,a,n,l=t.period,p=e.xData,u=e.yData,c=u?u.length:0,d=[],f=[],g=[];if(!(p.length<l)&&(0,o.isArray)(u[0])&&4===u[0].length){for(n=l-1;n<c;n++)a=(r=h(u.slice(n-l+1,n+1),2,1))[0],i=-(((s=r[1])-u[n][3])/(s-a)*100),p[n]&&(d.push([p[n],i]),f.push(p[n]),g.push(i));return{values:d,xData:f,yData:g}}}}c.defaultOptions=(0,o.merge)(u.defaultOptions,{params:{index:void 0,period:14}}),(0,o.extend)(c.prototype,{nameBase:"Williams %R"}),p().registerSeriesType("williamsr",c);let d=n();return a.default})());