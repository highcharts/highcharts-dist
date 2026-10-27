!/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/zigzag
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/zigzag",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/zigzag"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,s)=>(()=>{"use strict";var r={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=s}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let s=i[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};o.d(a,{default:()=>c});var h=o(944),n=o.n(h),p=o(80),g=o.n(p),d=o(512),u=o.n(d);class l extends g(){getValues(e,t){let s=t.lowIndex,r=t.highIndex,i=t.deviation/100,o={low:1+i,high:1-i},a=e.xData,h=e.yData,n=h?h.length:0,p=[],g=[],d=[],u,l,c,f,x=!1,y=!1;if(!a||a.length<=1||n&&(void 0===h[0][s]||void 0===h[0][r]))return;let m=h[0][s],v=h[0][r];for(u=1;u<n;u++)h[u][s]<=v*o.high?(p.push([a[0],v]),c=[a[u],h[u][s]],f=!0,x=!0):h[u][r]>=m*o.low&&(p.push([a[0],m]),c=[a[u],h[u][r]],f=!1,x=!0),x&&(g.push(p[0][0]),d.push(p[0][1]),l=u++,u=n);for(u=l;u<n;u++)f?(h[u][s]<=c[1]&&(c=[a[u],h[u][s]]),h[u][r]>=c[1]*o.low&&(y=r)):(h[u][r]>=c[1]&&(c=[a[u],h[u][r]]),h[u][s]<=c[1]*o.high&&(y=s)),!1!==y&&(p.push(c),g.push(c[0]),d.push(c[1]),c=[a[u],h[u][y]],f=!f,y=!1);let w=p.length;return 0!==w&&p[w-1][0]<a[n-1]&&(p.push(c),g.push(c[0]),d.push(c[1])),{values:p,xData:g,yData:d}}}l.defaultOptions=(0,h.merge)(g().defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),(0,h.extend)(l.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),u().registerSeriesType("zigzag",l);let c=n();return a.default})());