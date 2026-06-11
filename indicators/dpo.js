!/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/dpo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/dpo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};s.d(i,{default:()=>f});var a=s(944),n=s.n(a),p=s(512),h=s.n(p);let{sma:c}=h().seriesTypes;function d(e,t,r,o,s){let i=(0,a.pick)(t[r][o],t[r]);return s?(0,a.correctFloat)(e-i):(0,a.correctFloat)(e+i)}class u extends c{getValues(e,t){let r=t.period,o=t.index,s=Math.floor(r/2+1),i=r+s,n=e.xData||[],p=e.yData||[],h=p.length,c=[],u=[],f=[],l,g,y,x,v,m=0;if(!(n.length<=i)){for(x=0;x<r-1;x++)m=d(m,p,x,o);for(v=0;v<=h-i;v++)g=v+r-1,y=v+i-1,m=d(m,p,g,o),l=(0,a.pick)(p[y][o],p[y])-m/r,m=d(m,p,v,o,!0),c.push([n[y],l]),u.push(n[y]),f.push(l);return{values:c,xData:u,yData:f}}}}u.defaultOptions=(0,a.merge)(c.defaultOptions,{params:{index:0,period:21}}),(0,a.extend)(u.prototype,{nameBase:"DPO"}),h().registerSeriesType("dpo",u);let f=n();return i.default})());