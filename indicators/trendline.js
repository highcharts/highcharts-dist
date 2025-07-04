!/**
 * Highstock JS v12.3.0 (2025-06-21)
 * @module highcharts/indicators/trendline
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2025 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/trendline",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/trendline"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};n.d(i,{default:()=>g});var o=n(944),a=n.n(o),h=n(512),l=n.n(h);let{sma:p}=l().seriesTypes,{extend:d,merge:u,isArray:c}=a();class f extends p{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,s=e.yData,n=[],i=[],o=[],a=[],h=t.index,l=0,p=0,d=0,u=0,f=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&f++,n.push(f);for(let e=0;e<n.length;e++)d+=n[e],u+=c(s[e])?s[e][h]:s[e];let g=d/n.length,y=u/s.length;for(let e=0;e<n.length;e++){let t=c(s[e])?s[e][h]:s[e];l+=(n[e]-g)*(t-y),p+=Math.pow(n[e]-g,2)}for(let e=0;e<n.length;e++){if(r[e]===o[o.length-1])continue;let t=r[e],s=y+l/p*(n[e]-g);i.push([t,s]),o.push(t),a.push(s)}return{xData:o,yData:a,values:i}}}f.defaultOptions=u(p.defaultOptions,{params:{period:void 0,index:3}}),d(f.prototype,{nameBase:"Trendline",nameComponents:void 0}),l().registerSeriesType("trendline",f);let g=a();return i.default})());