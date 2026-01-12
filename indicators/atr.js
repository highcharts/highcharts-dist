!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/atr
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/atr",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/atr"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};a.d(i,{default:()=>l});var o=a(944),h=a.n(o),n=a(512),u=a.n(n);let{sma:p}=u().seriesTypes,{isArray:c,merge:d}=h();function f(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class g extends p{getValues(e,t){let r=t.period,s=e.xData,a=e.yData,i=a?a.length:0,o=[[s[0],a[0]]],h=[],n=[],u=[],p,d,g=0,l=1,y=0;if(!(s.length<=r)&&c(a[0])&&4===a[0].length){for(d=1;d<=i;d++){var x,v,b,m,H;!function(e,t,r,s){let a=t[s],i=r[s];e.push([a,i])}(o,s,a,d),r<l?(g=(x=s,v=a,b=d,m=r,H=g,p=[x[b-1],(H*(m-1)+f(v[b-1],v[b-2]))/m])[1],h.push(p),n.push(p[0]),u.push(p[1])):(r===l?(g=y/(d-1),h.push([s[d-1],g]),n.push(s[d-1]),u.push(g)):y+=f(a[d-1],a[d-2]),l++)}return{values:h,xData:n,yData:u}}}}g.defaultOptions=d(p.defaultOptions,{params:{index:void 0}}),u().registerSeriesType("atr",g);let l=h();return i.default})());