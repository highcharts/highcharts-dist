!/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/ppo
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.ema,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts/highcharts"],function(e){return t(e.Series.types.ema,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/ppo"]=t(e._Highcharts.Series.types.ema,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.ema,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={563(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};o.d(a,{default:()=>g});var p=o(944),n=o.n(p),h=o(563),d=o.n(h),c=o(512),l=o.n(c);class u extends d(){getValues(e,t){let r,s,i=t.periods,o=t.index,a=[],n=[],h=[];if(2!==i.length||i[1]<=i[0])return void(0,p.error)('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');let d=super.getValues.call(this,e,{index:o,period:i[0]}),c=super.getValues.call(this,e,{index:o,period:i[1]});if(!d||!c)return;let l=i[1]-i[0];for(s=0;s<c.yData.length;s++)r=(0,p.correctFloat)((d.yData[s+l]-c.yData[s])/c.yData[s]*100),a.push([c.xData[s],r]),n.push(c.xData[s]),h.push(r);return{values:a,xData:n,yData:h}}}u.defaultOptions=(0,p.merge)(d().defaultOptions,{params:{period:void 0,periods:[12,26]}}),(0,p.extend)(u.prototype,{nameBase:"PPO",nameComponents:["periods"]}),l().registerSeriesType("ppo",u);let g=n();return a.default})());