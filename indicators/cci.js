!/**
 * Highstock JS v12.3.0 (2025-06-21)
 * @module highcharts/indicators/cci
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2025 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/cci",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/cci"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};i.d(o,{default:()=>l});var a=i(944),n=i.n(a),h=i(512),c=i.n(h);let{sma:u}=c().seriesTypes,{isArray:p,merge:d}=n();class f extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,a=[],n=[],h=[],c=[],u,d,f=[],l,g=1,y,x,v,b;if(!(s.length<=r)&&p(i[0])&&4===i[0].length){for(;g<r;)d=i[g-1],a.push((d[1]+d[2]+d[3])/3),g++;for(b=r;b<=o;b++)x=((d=i[b-1])[1]+d[2]+d[3])/3,l=a.push(x),y=(f=a.slice(l-r)).reduce(function(e,t){return e+t},0)/r,v=function(e,t){let r=e.length,s=0,i;for(i=0;i<r;i++)s+=Math.abs(t-e[i]);return s}(f,y)/r,u=(x-y)/(.015*v),n.push([s[b-1],u]),h.push(s[b-1]),c.push(u);return{values:n,xData:h,yData:c}}}}f.defaultOptions=d(u.defaultOptions,{params:{index:void 0}}),c().registerSeriesType("cci",f);let l=n();return o.default})());