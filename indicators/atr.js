!/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/atr",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/atr"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};a.d(i,{default:()=>f});var o=a(944),h=a.n(o),n=a(512),u=a.n(n);let{sma:p}=u().seriesTypes;function c(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class d extends p{getValues(e,t){let r=t.period,s=e.xData,a=e.yData,i=a?a.length:0,h=[[s[0],a[0]]],n=[],u=[],p=[],d,f,g=0,l=1,y=0;if(!(s.length<=r)&&(0,o.isArray)(a[0])&&4===a[0].length){for(f=1;f<=i;f++){var x,v,b,m,H;!function(e,t,r,s){let a=t[s],i=r[s];e.push([a,i])}(h,s,a,f),r<l?(g=(x=s,v=a,b=f,m=r,H=g,d=[x[b-1],(H*(m-1)+c(v[b-1],v[b-2]))/m])[1],n.push(d),u.push(d[0]),p.push(d[1])):(r===l?(g=y/(f-1),n.push([s[f-1],g]),u.push(s[f-1]),p.push(g)):y+=c(a[f-1],a[f-2]),l++)}return{values:n,xData:u,yData:p}}}}d.defaultOptions=(0,o.merge)(p.defaultOptions,{params:{index:void 0}}),u().registerSeriesType("atr",d);let f=h();return i.default})());