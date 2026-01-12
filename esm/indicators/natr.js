/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{atr:o}=l().seriesTypes,{merge:u}=r();class i extends o{getValues(e,t){let a=super.getValues.apply(this,arguments),r=a.values.length,s=e.yData,l=0,o=t.period-1;if(a){for(;l<r;l++)a.yData[l]=a.values[l][1]/s[o][3]*100,a.values[l][1]=a.yData[l],o++;return a}}}i.defaultOptions=u(o.defaultOptions,{tooltip:{valueSuffix:"%"}}),l().registerSeriesType("natr",i);let n=r();export{n as default};