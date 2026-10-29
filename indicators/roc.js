!/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/roc",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/roc"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>g});var n=a(944),h=a.n(n),p=a(80),c=a.n(p),u=a(512),l=a.n(u);class d extends c(){getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=[],h=[],p=[],c,u=-1,l;if(!(s.length<=r)){for((0,n.isArray)(i[0])&&(u=t.index),c=r;c<a;c++)l=function(e,t,r,s,i){let a,o;return o=i<0?(a=t[r-s])?(t[r]-a)/a*100:null:(a=t[r-s][i])?(t[r][i]-a)/a*100:null,[e[r],o]}(s,i,c,r,u),o.push(l),h.push(l[0]),p.push(l[1]);return{values:o,xData:h,yData:p}}}}d.defaultOptions=(0,n.merge)(c().defaultOptions,{params:{index:3,period:9}}),(0,n.extend)(d.prototype,{nameBase:"Rate of Change"}),l().registerSeriesType("roc",d);let g=h();return o.default})());