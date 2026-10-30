!/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/accumulation-distribution
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/accumulation-distribution",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/accumulation-distribution"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};o.d(a,{default:()=>g});var n=o(944),u=o.n(n),h=o(80),p=o.n(h),c=o(512),l=o.n(c);class d extends p(){static populateAverage(e,t,r,s,i){let o=t[s][1],a=t[s][2],n=t[s][3],u=r[s],h=n===o&&n===a||o===a?0:(2*n-a-o)/(o-a)*u;return[e[s],h]}getValues(e,t){let r,s,i,o=t.period,a=e.xData,u=e.yData,h=t.volumeSeriesID,p=e.chart.get(h),c=p?.getColumn("y"),l=u?u.length:0,g=[],f=[],m=[];if(!(a.length<=o)||!l||4===u[0].length){if(!p)return void(0,n.error)("Series "+h+" not found! Check `volumeSeriesID`.",!0,e.chart);for(s=o;s<l;s++)r=g.length,i=d.populateAverage(a,u,c,s,o),r>0&&(i[1]+=g[r-1][1]),g.push(i),f.push(i[0]),m.push(i[1]);return{values:g,xData:f,yData:m}}}}d.defaultOptions=(0,n.merge)(p().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,n.extend)(d.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),l().registerSeriesType("ad",d);let g=u();return a.default})());