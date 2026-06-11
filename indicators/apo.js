!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/apo
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/apo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/apo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};o.d(i,{default:()=>c});var a=o(944),n=o.n(a),p=o(512),d=o.n(p);let{ema:h}=d().seriesTypes;class u extends h{getValues(e,t){let r,s,o=t.periods,i=t.index,n=[],p=[],d=[];if(2!==o.length||o[1]<=o[0])return void(0,a.error)('Error: "APO requires two periods. Notice, first period should be lower than the second one."');let h=super.getValues.call(this,e,{index:i,period:o[0]}),u=super.getValues.call(this,e,{index:i,period:o[1]});if(!h||!u)return;let c=o[1]-o[0];for(s=0;s<u.yData.length;s++)r=h.yData[s+c]-u.yData[s],n.push([u.xData[s],r]),p.push(u.xData[s]),d.push(r);return{values:n,xData:p,yData:d}}}u.defaultOptions=(0,a.merge)(h.defaultOptions,{params:{period:void 0,periods:[10,20]}}),(0,a.extend)(u.prototype,{nameBase:"APO",nameComponents:["periods"]}),d().registerSeriesType("apo",u);let c=n();return i.default})());