!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Lysy
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/cmo",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/cmo"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>l});var a=i(944),h=i.n(a),n=i(512),p=i.n(n);let{sma:u}=p().seriesTypes;class c extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,h=[],n=[],p=[],u,c=t.index,l;if(s.length<r)return;(0,a.isNumber)(i[0])?l=i:(c=Math.min(c,i[0].length-1),l=i.map(e=>e[c]));let d=0,f=0,g=0,y;for(let e=r;e>0;e--)l[e]>l[e-1]?f+=l[e]-l[e-1]:l[e]<l[e-1]&&(g+=l[e-1]-l[e]);for(y=f+g>0?100*(f-g)/(f+g):0,n.push(s[r]),p.push(y),h.push([s[r],y]),u=r+1;u<o;u++)d=Math.abs(l[u-r-1]-l[u-r]),l[u]>l[u-1]?f+=l[u]-l[u-1]:l[u]<l[u-1]&&(g+=l[u-1]-l[u]),l[u-r]>l[u-r-1]?f-=d:g-=d,y=f+g>0?100*(f-g)/(f+g):0,n.push(s[u]),p.push(y),h.push([s[u],y]);return{values:h,xData:n,yData:p}}}c.defaultOptions=(0,a.merge)(u.defaultOptions,{params:{period:20,index:3}}),p().registerSeriesType("cmo",c);let l=h();return o.default})());