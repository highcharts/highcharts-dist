!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/rsi",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/rsi"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],a=t[r++];i.o(e,s)?0===a&&r++:0===a?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:a})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>d});var o=i(944),n=i.n(o),h=i(512),l=i.n(h);let{sma:p}=l().seriesTypes;function u(e,t){return parseFloat(e.toFixed(t))}class c extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,n=t.decimals,h=[],l=[],p=[],c=0,d=0,f=t.index,g=1,y,x,m,b,v,j;if(!(s.length<r)){for((0,o.isNumber)(i[0])?j=i:(f=Math.min(f,i[0].length-1),j=i.map(e=>e[f]));g<r;)(x=u(j[g]-j[g-1],n))>0?c+=x:d+=Math.abs(x),g++;for(m=u(c/(r-1),n),b=u(d/(r-1),n),v=g;v<a;v++)(x=u(j[v]-j[v-1],n))>0?(c=x,d=0):(c=0,d=Math.abs(x)),m=u((m*(r-1)+c)/r,n),y=0===(b=u((b*(r-1)+d)/r,n))?100:0===m?0:u(100-100/(1+m/b),n),h.push([s[v],y]),l.push(s[v]),p.push(y);return{values:h,xData:l,yData:p}}}}c.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{decimals:4,index:3}}),l().registerSeriesType("rsi",c);let d=n();return a.default})());