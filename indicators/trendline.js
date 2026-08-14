!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/trendline",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/trendline"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let n=s[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],n=t[r++];i.o(e,s)?0===n&&r++:0===n?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:n})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let n={};i.d(n,{default:()=>u});var o=i(944),a=i.n(o),l=i(512),h=i.n(l);let{sma:p}=h().seriesTypes;class d extends p{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,s=e.yData,i=[],n=[],a=[],l=[],h=t.index,p=0,d=0,u=0,c=0,f=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&f++,i.push(f);for(let e=0;e<i.length;e++)u+=i[e],c+=(0,o.isArray)(s[e])?s[e][h]:s[e];let g=u/i.length,y=c/s.length;for(let e=0;e<i.length;e++){let t=(0,o.isArray)(s[e])?s[e][h]:s[e];p+=(i[e]-g)*(t-y),d+=Math.pow(i[e]-g,2)}for(let e=0;e<i.length;e++){if(r[e]===a[a.length-1])continue;let t=r[e],s=y+p/d*(i[e]-g);n.push([t,s]),a.push(t),l.push(s)}return{xData:a,yData:l,values:n}}}d.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{period:void 0,index:3}}),(0,o.extend)(d.prototype,{nameBase:"Trendline",nameComponents:void 0}),h().registerSeriesType("trendline",d);let u=a();return n.default})());