!/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/ppo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/ppo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};o.d(i,{default:()=>y});var a=o(944),p=o.n(a),n=o(512),h=o.n(n);let{ema:d}=h().seriesTypes,{correctFloat:u,extend:c,merge:l,error:f}=p();class g extends d{getValues(e,t){let r,s,o=t.periods,i=t.index,a=[],p=[],n=[];if(2!==o.length||o[1]<=o[0])return void f('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');let h=super.getValues.call(this,e,{index:i,period:o[0]}),d=super.getValues.call(this,e,{index:i,period:o[1]});if(!h||!d)return;let c=o[1]-o[0];for(s=0;s<d.yData.length;s++)r=u((h.yData[s+c]-d.yData[s])/d.yData[s]*100),a.push([d.xData[s],r]),p.push(d.xData[s]),n.push(r);return{values:a,xData:p,yData:n}}}g.defaultOptions=l(d.defaultOptions,{params:{period:void 0,periods:[12,26]}}),c(g.prototype,{nameBase:"PPO",nameComponents:["periods"]}),h().registerSeriesType("ppo",g);let y=p();return i.default})());