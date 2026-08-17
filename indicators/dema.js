!/**
 * Highstock JS v13.0.1 (2026-08-17)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/dema",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/dema"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],a=t[r++];i.o(e,s)?0===a&&r++:0===a?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:a})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>d});var o=i(944),n=i.n(o),h=i(512),u=i.n(h);let{ema:c}=u().seriesTypes;class p extends c{getEMA(e,t,r,s,i,a){return super.calculateEma(a||[],e,void 0===i?1:i,this.EMApercent,t,void 0===s?-1:s,r)}getValues(e,t){let r=t.period,s=[],i=2*r,a=e.xData,n=e.yData,h=n?n.length:0,u=[],c=[],p=[],d=0,l=0,f,g,y,x,m=-1,b,v=0;if(this.EMApercent=2/(r+1),!(h<2*r-1)){for((0,o.isArray)(n[0])&&(m=t.index?t.index:0),v=(d=super.accumulatePeriodPoints(r,m,n))/r,d=0,x=r;x<h+2;x++)x<h+1&&(l=this.getEMA(n,g,v,m,x)[1],s.push(l)),g=l,x<i?d+=l:(x===i&&(v=d/r),l=s[x-r-1],f=this.getEMA([l],y,v)[1],b=[a[x-2],(0,o.correctFloat)(2*l-f)],u.push(b),c.push(b[0]),p.push(b[1]),y=f);return{values:u,xData:c,yData:p}}}}p.defaultOptions=(0,o.merge)(c.defaultOptions),u().registerSeriesType("dema",p);let d=n();return a.default})());