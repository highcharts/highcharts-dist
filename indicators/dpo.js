!/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/dpo",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/dpo"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let o={};function i(e){let t=o[e];if(void 0!==t)return t.exports;let r=o[e]={exports:{}};return s[e](r,r.exports,i),r.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>g});var n=i(944),h=i.n(n),p=i(80),c=i.n(p),d=i(512),u=i.n(d);function l(e,t,r,s,o){let i=t[r][s]??t[r];return o?(0,n.correctFloat)(e-i):(0,n.correctFloat)(e+i)}class f extends c(){getValues(e,t){let r=t.period,s=t.index,o=Math.floor(r/2+1),i=r+o,a=e.xData||[],n=e.yData||[],h=n.length,p=[],c=[],d=[],u,f,g,y,x,m=0;if(!(a.length<=i)){for(y=0;y<r-1;y++)m=l(m,n,y,s);for(x=0;x<=h-i;x++)f=x+r-1,g=x+i-1,m=l(m,n,f,s),u=(n[g][s]??n[g])-m/r,m=l(m,n,x,s,!0),p.push([a[g],u]),c.push(a[g]),d.push(u);return{values:p,xData:c,yData:d}}}}f.defaultOptions=(0,n.merge)(c().defaultOptions,{params:{index:0,period:21}}),(0,n.extend)(f.prototype,{nameBase:"DPO"}),u().registerSeriesType("dpo",f);let g=h();return a.default})());