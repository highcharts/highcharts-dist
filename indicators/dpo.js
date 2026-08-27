!/**
 * Highstock JS v13.0.2 (2026-08-27)
 * @module highcharts/indicators/dpo
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/dpo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/dpo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let o={};function s(e){let t=o[e];if(void 0!==t)return t.exports;let i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var o=t[r++],i=t[r++];s.o(e,o)?0===i&&r++:0===i?Object.defineProperty(e,o,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,o,{enumerable:!0,get:i})}else for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>u});var a=s(944),n=s.n(a),p=s(512),h=s.n(p);let{sma:l}=h().seriesTypes;function c(e,t,r,o,s){let i=t[r][o]??t[r];return s?(0,a.correctFloat)(e-i):(0,a.correctFloat)(e+i)}class d extends l{getValues(e,t){let r=t.period,o=t.index,s=Math.floor(r/2+1),i=r+s,a=e.xData||[],n=e.yData||[],p=n.length,h=[],l=[],d=[],u,f,g,y,x,b=0;if(!(a.length<=i)){for(y=0;y<r-1;y++)b=c(b,n,y,o);for(x=0;x<=p-i;x++)f=x+r-1,g=x+i-1,b=c(b,n,f,o),u=(n[g][o]??n[g])-b/r,b=c(b,n,x,o,!0),h.push([a[g],u]),l.push(a[g]),d.push(u);return{values:h,xData:l,yData:d}}}}d.defaultOptions=(0,a.merge)(l.defaultOptions,{params:{index:0,period:21}}),(0,a.extend)(d.prototype,{nameBase:"DPO"}),h().registerSeriesType("dpo",d);let u=n();return i.default})());