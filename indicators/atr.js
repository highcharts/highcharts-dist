!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/atr",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/atr"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>l});var o=i(944),h=i.n(o),n=i(512),u=i.n(n);let{sma:p}=u().seriesTypes;function c(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class d extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,h=[[s[0],i[0]]],n=[],u=[],p=[],d,l,f=0,g=1,y=0;if(!(s.length<=r)&&(0,o.isArray)(i[0])&&4===i[0].length){for(l=1;l<=a;l++){var x,v,b,m,H;!function(e,t,r,s){let i=t[s],a=r[s];e.push([i,a])}(h,s,i,l),r<g?(f=(x=s,v=i,b=l,m=r,H=f,d=[x[b-1],(H*(m-1)+c(v[b-1],v[b-2]))/m])[1],n.push(d),u.push(d[0]),p.push(d[1])):(r===g?(f=y/(l-1),n.push([s[l-1],f]),u.push(s[l-1]),p.push(f)):y+=c(i[l-1],i[l-2]),g++)}return{values:n,xData:u,yData:p}}}}d.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{index:void 0}}),u().registerSeriesType("atr",d);let l=h();return a.default})());