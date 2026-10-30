!/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kołodziej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/obv",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/obv"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let o={};function i(e){let t=o[e];if(void 0!==t)return t.exports;let r=o[e]={exports:{}};return s[e](r,r.exports,i),r.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>g});var h=i(944),n=i.n(h),p=i(80),u=i.n(p),c=i(512),l=i.n(c);class d extends u(){getValues(e,t){let r=e.chart.get(t.volumeSeriesID),s=e.xData,o=e.yData,i=[],a=[],n=[],p=!(0,h.isNumber)(o[0]),u=[],c=1,l=0,d=0,g=0,f=0,m;if(!r)return void(0,h.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(m=r.getColumn("y"),u=[s[0],l],g=p?o[0][3]:o[0],i.push(u),a.push(s[0]),n.push(u[1]);c<o.length;c++)d=(f=p?o[c][3]:o[c])>g?l+m[c]:f===g?l:l-m[c],u=[s[c],d],l=d,g=f,i.push(u),a.push(s[c]),n.push(u[1]);return{values:i,xData:a,yData:n}}}d.defaultOptions=(0,h.merge)(u().defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,h.extend)(d.prototype,{nameComponents:void 0}),l().registerSeriesType("obv",d);let g=n();return a.default})());