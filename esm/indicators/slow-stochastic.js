/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{if(Array.isArray(a))for(var r=0;r<a.length;){var s=a[r++],l=a[r++];t.o(e,s)?0===l&&r++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:a[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:o,stochastic:i}=l().seriesTypes;class n extends i{getValues(e,t){let a=t.periods,r=super.getValues.call(this,e,t),s={values:[],xData:[],yData:[]};if(!r)return;s.xData=r.xData.slice(a[1]-1);let l=r.yData.slice(a[1]-1),i=o.prototype.getValues.call(this,{xData:s.xData,yData:l},{index:1,period:a[2]});if(i){for(let e=0,t=s.xData.length;e<t;e++)s.yData[e]=[l[e][1],i.yData[e-a[2]+1]||null],s.values[e]=[s.xData[e],l[e][1],i.yData[e-a[2]+1]||null];return s}}}n.defaultOptions=(0,a.merge)(i.defaultOptions,{params:{periods:[14,3,3]}}),(0,a.extend)(n.prototype,{nameBase:"Slow Stochastic"}),l().registerSeriesType("slowstochastic",n);let u=r();export{u as default};