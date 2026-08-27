/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var o=t[a++],s=t[a++];r.o(e,o)?0===s&&a++:0===s?Object.defineProperty(e,o,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,o,{enumerable:!0,get:s})}else for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let o=e.default.SeriesRegistry;var s=r.n(o);let{ema:l}=s().seriesTypes;class i extends l{getValues(e,r){let a,o,s=r.periods,l=r.index,i=[],p=[],n=[];if(2!==s.length||s[1]<=s[0])return void(0,t.error)('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');let d=super.getValues.call(this,e,{index:l,period:s[0]}),u=super.getValues.call(this,e,{index:l,period:s[1]});if(!d||!u)return;let f=s[1]-s[0];for(o=0;o<u.yData.length;o++)a=(0,t.correctFloat)((d.yData[o+f]-u.yData[o])/u.yData[o]*100),i.push([u.xData[o],a]),p.push(u.xData[o]),n.push(a);return{values:i,xData:p,yData:n}}}i.defaultOptions=(0,t.merge)(l.defaultOptions,{params:{period:void 0,periods:[12,26]}}),(0,t.extend)(i.prototype,{nameBase:"PPO",nameComponents:["periods"]}),s().registerSeriesType("ppo",i);let p=a();export{p as default};