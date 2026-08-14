!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/ppo
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/ppo"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let o={};function s(e){let t=o[e];if(void 0!==t)return t.exports;let i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var o=t[r++],i=t[r++];s.o(e,o)?0===i&&r++:0===i?Object.defineProperty(e,o,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,o,{enumerable:!0,get:i})}else for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>u});var a=s(944),n=s.n(a),p=s(512),d=s.n(p);let{ema:l}=d().seriesTypes;class h extends l{getValues(e,t){let r,o,s=t.periods,i=t.index,n=[],p=[],d=[];if(2!==s.length||s[1]<=s[0])return void(0,a.error)('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');let l=super.getValues.call(this,e,{index:i,period:s[0]}),h=super.getValues.call(this,e,{index:i,period:s[1]});if(!l||!h)return;let u=s[1]-s[0];for(o=0;o<h.yData.length;o++)r=(0,a.correctFloat)((l.yData[o+u]-h.yData[o])/h.yData[o]*100),n.push([h.xData[o],r]),p.push(h.xData[o]),d.push(r);return{values:n,xData:p,yData:d}}}h.defaultOptions=(0,a.merge)(l.defaultOptions,{params:{period:void 0,periods:[12,26]}}),(0,a.extend)(h.prototype,{nameBase:"PPO",nameComponents:["periods"]}),d().registerSeriesType("ppo",h);let u=n();return i.default})());