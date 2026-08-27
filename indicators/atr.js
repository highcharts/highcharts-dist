!/**
 * Highstock JS v13.0.2 (2026-08-27)
 * @module highcharts/indicators/atr
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/atr",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/atr"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function a(e){let t=s[e];if(void 0!==t)return t.exports;let i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],i=t[r++];a.o(e,s)?0===i&&r++:0===i?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:i})}else for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};a.d(i,{default:()=>d});var o=a(944),n=a.n(o),h=a(512),u=a.n(h);let{sma:p}=u().seriesTypes;function l(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class c extends p{getValues(e,t){let r=t.period,s=e.xData,a=e.yData,i=a?a.length:0,n=[[s[0],a[0]]],h=[],u=[],p=[],c,d,f=0,g=1,y=0;if(!(s.length<=r)&&(0,o.isArray)(a[0])&&4===a[0].length){for(d=1;d<=i;d++){var x,b,v,m,j;!function(e,t,r,s){let a=t[s],i=r[s];e.push([a,i])}(n,s,a,d),r<g?(f=(x=s,b=a,v=d,m=r,j=f,c=[x[v-1],(j*(m-1)+l(b[v-1],b[v-2]))/m])[1],h.push(c),u.push(c[0]),p.push(c[1])):(r===g?(f=y/(d-1),h.push([s[d-1],f]),u.push(s[d-1]),p.push(f)):y+=l(a[d-1],a[d-2]),g++)}return{values:h,xData:u,yData:p}}}}c.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{index:void 0}}),u().registerSeriesType("atr",c);let d=n();return i.default})());