!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/cci
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/cci",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/cci"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>d});var o=i(944),n=i.n(o),h=i(512),c=i.n(h);let{sma:u}=c().seriesTypes;class p extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,n=[],h=[],c=[],u=[],p,d,f=[],g,l=1,y,x,v,b;if(!(s.length<=r)&&(0,o.isArray)(i[0])&&4===i[0].length){for(;l<r;)d=i[l-1],n.push((d[1]+d[2]+d[3])/3),l++;for(b=r;b<=a;b++)x=((d=i[b-1])[1]+d[2]+d[3])/3,g=n.push(x),y=(f=n.slice(g-r)).reduce(function(e,t){return e+t},0)/r,v=function(e,t){let r=e.length,s=0,i;for(i=0;i<r;i++)s+=Math.abs(t-e[i]);return s}(f,y)/r,p=(x-y)/(.015*v),h.push([s[b-1],p]),c.push(s[b-1]),u.push(p);return{values:h,xData:c,yData:u}}}}p.defaultOptions=(0,o.merge)(u.defaultOptions,{params:{index:void 0}}),c().registerSeriesType("cci",p);let d=n();return a.default})());