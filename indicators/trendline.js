!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/trendline
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/trendline",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/trendline"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};i.d(n,{default:()=>g});var o=i(944),a=i.n(o),h=i(512),l=i.n(h);let{sma:p}=l().seriesTypes,{extend:d,merge:u,isArray:c}=a();class f extends p{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,s=e.yData,i=[],n=[],o=[],a=[],h=t.index,l=0,p=0,d=0,u=0,f=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&f++,i.push(f);for(let e=0;e<i.length;e++)d+=i[e],u+=c(s[e])?s[e][h]:s[e];let g=d/i.length,y=u/s.length;for(let e=0;e<i.length;e++){let t=c(s[e])?s[e][h]:s[e];l+=(i[e]-g)*(t-y),p+=Math.pow(i[e]-g,2)}for(let e=0;e<i.length;e++){if(r[e]===o[o.length-1])continue;let t=r[e],s=y+l/p*(i[e]-g);n.push([t,s]),o.push(t),a.push(s)}return{xData:o,yData:a,values:n}}}f.defaultOptions=u(p.defaultOptions,{params:{period:void 0,index:3}}),d(f.prototype,{nameBase:"Trendline",nameComponents:void 0}),l().registerSeriesType("trendline",f);let g=a();return n.default})());