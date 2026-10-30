/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/apo
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
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let o=t.default.Series.types.ema;var i=r.n(o);let l=e.default.SeriesRegistry;var p=r.n(l);class d extends i(){getValues(e,t){let r,s,o=t.periods,i=t.index,l=[],p=[],d=[];if(2!==o.length||o[1]<=o[0])return void(0,a.error)('Error: "APO requires two periods. Notice, first period should be lower than the second one."');let n=super.getValues.call(this,e,{index:i,period:o[0]}),u=super.getValues.call(this,e,{index:i,period:o[1]});if(!n||!u)return;let c=o[1]-o[0];for(s=0;s<u.yData.length;s++)r=n.yData[s+c]-u.yData[s],l.push([u.xData[s],r]),p.push(u.xData[s]),d.push(r);return{values:l,xData:p,yData:d}}}d.defaultOptions=(0,a.merge)(i().defaultOptions,{params:{period:void 0,periods:[10,20]}}),(0,a.extend)(d.prototype,{nameBase:"APO",nameComponents:["periods"]}),p().registerSeriesType("apo",d);let n=s();export{n as default};