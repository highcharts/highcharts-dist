!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/dema
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/dema",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/dema"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>d});var o=i(944),n=i.n(o),h=i(512),c=i.n(h);let{ema:u}=c().seriesTypes;class p extends u{getEMA(e,t,r,s,i,a){return super.calculateEma(a||[],e,void 0===i?1:i,this.EMApercent,t,void 0===s?-1:s,r)}getValues(e,t){let r=t.period,s=[],i=2*r,a=e.xData,n=e.yData,h=n?n.length:0,c=[],u=[],p=[],d=0,g=0,f,l,y,x,m=-1,v,H=0;if(this.EMApercent=2/(r+1),!(h<2*r-1)){for((0,o.isArray)(n[0])&&(m=t.index?t.index:0),H=(d=super.accumulatePeriodPoints(r,m,n))/r,d=0,x=r;x<h+2;x++)x<h+1&&(g=this.getEMA(n,l,H,m,x)[1],s.push(g)),l=g,x<i?d+=g:(x===i&&(H=d/r),g=s[x-r-1],f=this.getEMA([g],y,H)[1],v=[a[x-2],(0,o.correctFloat)(2*g-f)],c.push(v),u.push(v[0]),p.push(v[1]),y=f);return{values:c,xData:u,yData:p}}}}p.defaultOptions=(0,o.merge)(u.defaultOptions),c().registerSeriesType("dema",p);let d=n();return a.default})());