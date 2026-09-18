!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/dpo",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/dpo"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let o={};function s(e){let t=o[e];if(void 0!==t)return t.exports;let i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>u});var a=s(944),n=s.n(a),h=s(512),p=s.n(h);let{sma:c}=p().seriesTypes;function d(e,t,r,o,s){let i=t[r][o]??t[r];return s?(0,a.correctFloat)(e-i):(0,a.correctFloat)(e+i)}class l extends c{getValues(e,t){let r=t.period,o=t.index,s=Math.floor(r/2+1),i=r+s,a=e.xData||[],n=e.yData||[],h=n.length,p=[],c=[],l=[],u,f,g,y,x,m=0;if(!(a.length<=i)){for(y=0;y<r-1;y++)m=d(m,n,y,o);for(x=0;x<=h-i;x++)f=x+r-1,g=x+i-1,m=d(m,n,f,o),u=(n[g][o]??n[g])-m/r,m=d(m,n,x,o,!0),p.push([a[g],u]),c.push(a[g]),l.push(u);return{values:p,xData:c,yData:l}}}}l.defaultOptions=(0,a.merge)(c.defaultOptions,{params:{index:0,period:21}}),(0,a.extend)(l.prototype,{nameBase:"DPO"}),p().registerSeriesType("dpo",l);let u=n();return i.default})());