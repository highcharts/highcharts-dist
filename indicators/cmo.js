!/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Lysy
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/cmo",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/cmo"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>g});var h=a(944),n=a.n(h),p=a(80),c=a.n(p),u=a(512),d=a.n(u);class l extends c(){getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=[],n=[],p=[],c,u=t.index,d;if(s.length<r)return;(0,h.isNumber)(i[0])?d=i:(u=Math.min(u,i[0].length-1),d=i.map(e=>e[u]));let l=0,g=0,f=0,y;for(let e=r;e>0;e--)d[e]>d[e-1]?g+=d[e]-d[e-1]:d[e]<d[e-1]&&(f+=d[e-1]-d[e]);for(y=g+f>0?100*(g-f)/(g+f):0,n.push(s[r]),p.push(y),o.push([s[r],y]),c=r+1;c<a;c++)l=Math.abs(d[c-r-1]-d[c-r]),d[c]>d[c-1]?g+=d[c]-d[c-1]:d[c]<d[c-1]&&(f+=d[c-1]-d[c]),d[c-r]>d[c-r-1]?g-=l:f-=l,y=g+f>0?100*(g-f)/(g+f):0,n.push(s[c]),p.push(y),o.push([s[c],y]);return{values:o,xData:n,yData:p}}}l.defaultOptions=(0,h.merge)(c().defaultOptions,{params:{period:20,index:3}}),d().registerSeriesType("cmo",l);let g=n();return o.default})());