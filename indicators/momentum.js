!/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/momentum",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/momentum"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};o.d(a,{default:()=>f});var n=o(944),h=o.n(n),p=o(80),u=o.n(p),c=o(512),d=o.n(c);function g(e,t,r,s,i){let o=t[r-1][i]-t[r-s-1][i];return[e[r-1],o]}class l extends u(){getValues(e,t){let r,s,i=t.period,o=t.index,a=e.xData,h=e.yData,p=h?h.length:0,u=[],c=[],d=[];if(!(a.length<=i)&&(0,n.isArray)(h[0])){for(r=i+1;r<p;r++)s=g(a,h,r,i,o),u.push(s),c.push(s[0]),d.push(s[1]);return s=g(a,h,r,i,o),u.push(s),c.push(s[0]),d.push(s[1]),{values:u,xData:c,yData:d}}}}l.defaultOptions=(0,n.merge)(u().defaultOptions,{params:{index:3}}),(0,n.extend)(l.prototype,{nameBase:"Momentum"}),d().registerSeriesType("momentum",l);let f=h();return a.default})());