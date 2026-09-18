!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/ppo"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let o={};function s(e){let t=o[e];if(void 0!==t)return t.exports;let i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>u});var a=s(944),n=s.n(a),p=s(512),d=s.n(p);let{ema:h}=d().seriesTypes;class l extends h{getValues(e,t){let r,o,s=t.periods,i=t.index,n=[],p=[],d=[];if(2!==s.length||s[1]<=s[0])return void(0,a.error)('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');let h=super.getValues.call(this,e,{index:i,period:s[0]}),l=super.getValues.call(this,e,{index:i,period:s[1]});if(!h||!l)return;let u=s[1]-s[0];for(o=0;o<l.yData.length;o++)r=(0,a.correctFloat)((h.yData[o+u]-l.yData[o])/l.yData[o]*100),n.push([l.xData[o],r]),p.push(l.xData[o]),d.push(r);return{values:n,xData:p,yData:d}}}l.defaultOptions=(0,a.merge)(h.defaultOptions,{params:{period:void 0,periods:[12,26]}}),(0,a.extend)(l.prototype,{nameBase:"PPO",nameComponents:["periods"]}),d().registerSeriesType("ppo",l);let u=n();return i.default})());