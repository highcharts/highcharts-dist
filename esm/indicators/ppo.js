/**
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var o=t.n(s);let{ema:l}=o().seriesTypes;class i extends l{getValues(e,t){let a,s,o=t.periods,l=t.index,i=[],p=[],d=[];if(2!==o.length||o[1]<=o[0])return void(0,r.error)('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');let n=super.getValues.call(this,e,{index:l,period:o[0]}),u=super.getValues.call(this,e,{index:l,period:o[1]});if(!n||!u)return;let h=o[1]-o[0];for(s=0;s<u.yData.length;s++)a=(0,r.correctFloat)((n.yData[s+h]-u.yData[s])/u.yData[s]*100),i.push([u.xData[s],a]),p.push(u.xData[s]),d.push(a);return{values:i,xData:p,yData:d}}}i.defaultOptions=(0,r.merge)(l.defaultOptions,{params:{period:void 0,periods:[12,26]}}),(0,r.extend)(i.prototype,{nameBase:"PPO",nameComponents:["periods"]}),o().registerSeriesType("ppo",i);let p=a();export{p as default};