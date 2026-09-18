/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/indicators
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=t.n(a);let l=e.default.SeriesRegistry;var r=t.n(l);let{sma:o,stochastic:i}=r().seriesTypes;class c extends i{getValues(e,t){let a=t.periods,s=super.getValues.call(this,e,t),l={values:[],xData:[],yData:[]};if(!s)return;l.xData=s.xData.slice(a[1]-1);let r=s.yData.slice(a[1]-1),i=o.prototype.getValues.call(this,{xData:l.xData,yData:r},{index:1,period:a[2]});if(i){for(let e=0,t=l.xData.length;e<t;e++)l.yData[e]=[r[e][1],i.yData[e-a[2]+1]||null],l.values[e]=[l.xData[e],r[e][1],i.yData[e-a[2]+1]||null];return l}}}c.defaultOptions=(0,a.merge)(i.defaultOptions,{params:{periods:[14,3,3]}}),(0,a.extend)(c.prototype,{nameBase:"Slow Stochastic"}),r().registerSeriesType("slowstochastic",c);let n=s();export{n as default};