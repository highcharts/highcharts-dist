/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var s=t[a++],o=t[a++];r.o(e,s)?0===o&&a++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var o=r.n(s);let{ema:l}=o().seriesTypes;class i extends l{getValues(e,r){let a,s,o=r.periods,l=r.index,i=[],n=[],p=[];if(2!==o.length||o[1]<=o[0])return void(0,t.error)('Error: "APO requires two periods. Notice, first period should be lower than the second one."');let d=super.getValues.call(this,e,{index:l,period:o[0]}),u=super.getValues.call(this,e,{index:l,period:o[1]});if(!d||!u)return;let f=o[1]-o[0];for(s=0;s<u.yData.length;s++)a=d.yData[s+f]-u.yData[s],i.push([u.xData[s],a]),n.push(u.xData[s]),p.push(a);return{values:i,xData:n,yData:p}}}i.defaultOptions=(0,t.merge)(l.defaultOptions,{params:{period:void 0,periods:[10,20]}}),(0,t.extend)(i.prototype,{nameBase:"APO",nameComponents:["periods"]}),o().registerSeriesType("apo",i);let n=a();export{n as default};