!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/zigzag
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/zigzag",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/zigzag"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var i={512(t){t.exports=e},944(e){e.exports=t}};let r={};function s(e){let t=r[e];if(void 0!==t)return t.exports;let o=r[e]={exports:{}};return i[e](o,o.exports,s),o.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};s.d(o,{default:()=>u});var a=s(944),h=s.n(a),n=s(512),p=s.n(n);let{sma:d}=p().seriesTypes;class g extends d{getValues(e,t){let i=t.lowIndex,r=t.highIndex,s=t.deviation/100,o={low:1+s,high:1-s},a=e.xData,h=e.yData,n=h?h.length:0,p=[],d=[],g=[],u,l,c,f,x=!1,y=!1;if(!a||a.length<=1||n&&(void 0===h[0][i]||void 0===h[0][r]))return;let v=h[0][i],m=h[0][r];for(u=1;u<n;u++)h[u][i]<=m*o.high?(p.push([a[0],m]),c=[a[u],h[u][i]],f=!0,x=!0):h[u][r]>=v*o.low&&(p.push([a[0],v]),c=[a[u],h[u][r]],f=!1,x=!0),x&&(d.push(p[0][0]),g.push(p[0][1]),l=u++,u=n);for(u=l;u<n;u++)f?(h[u][i]<=c[1]&&(c=[a[u],h[u][i]]),h[u][r]>=c[1]*o.low&&(y=r)):(h[u][r]>=c[1]&&(c=[a[u],h[u][r]]),h[u][i]<=c[1]*o.high&&(y=i)),!1!==y&&(p.push(c),d.push(c[0]),g.push(c[1]),c=[a[u],h[u][y]],f=!f,y=!1);let w=p.length;return 0!==w&&p[w-1][0]<a[n-1]&&(p.push(c),d.push(c[0]),g.push(c[1])),{values:p,xData:d,yData:g}}}g.defaultOptions=(0,a.merge)(d.defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),(0,a.extend)(g.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),p().registerSeriesType("zigzag",g);let u=h();return o.default})());