/**
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
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var o=r.n(s);let{ema:i}=o().seriesTypes;class l extends i{getValues(e,r){let a,s,o=r.periods,i=r.index,l=[],p=[],d=[];if(2!==o.length||o[1]<=o[0])return void(0,t.error)('Error: "APO requires two periods. Notice, first period should be lower than the second one."');let n=super.getValues.call(this,e,{index:i,period:o[0]}),u=super.getValues.call(this,e,{index:i,period:o[1]});if(!n||!u)return;let h=o[1]-o[0];for(s=0;s<u.yData.length;s++)a=n.yData[s+h]-u.yData[s],l.push([u.xData[s],a]),p.push(u.xData[s]),d.push(a);return{values:l,xData:p,yData:d}}}l.defaultOptions=(0,t.merge)(i.defaultOptions,{params:{period:void 0,periods:[10,20]}}),(0,t.extend)(l.prototype,{nameBase:"APO",nameComponents:["periods"]}),o().registerSeriesType("apo",l);let p=a();export{p as default};