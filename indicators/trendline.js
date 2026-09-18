!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/trendline
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/trendline",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/trendline"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let n=s[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let n={};i.d(n,{default:()=>u});var o=i(944),a=i.n(o),l=i(512),h=i.n(l);let{sma:p}=h().seriesTypes;class d extends p{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,s=e.yData,i=[],n=[],a=[],l=[],h=t.index,p=0,d=0,u=0,c=0,g=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&g++,i.push(g);for(let e=0;e<i.length;e++)u+=i[e],c+=(0,o.isArray)(s[e])?s[e][h]:s[e];let f=u/i.length,y=c/s.length;for(let e=0;e<i.length;e++){let t=(0,o.isArray)(s[e])?s[e][h]:s[e];p+=(i[e]-f)*(t-y),d+=Math.pow(i[e]-f,2)}for(let e=0;e<i.length;e++){if(r[e]===a[a.length-1])continue;let t=r[e],s=y+p/d*(i[e]-f);n.push([t,s]),a.push(t),l.push(s)}return{xData:a,yData:l,values:n}}}d.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{period:void 0,index:3}}),(0,o.extend)(d.prototype,{nameBase:"Trendline",nameComponents:void 0}),h().registerSeriesType("trendline",d);let u=a();return n.default})());