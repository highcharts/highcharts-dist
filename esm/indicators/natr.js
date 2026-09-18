/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let l=e.default.SeriesRegistry;var s=t.n(l);let{atr:o}=s().seriesTypes;class u extends o{getValues(e,t){let a=super.getValues.apply(this,arguments),r=a.values.length,l=e.yData,s=0,o=t.period-1;if(a){for(;s<r;s++)a.yData[s]=a.values[s][1]/l[o][3]*100,a.values[s][1]=a.yData[s],o++;return a}}}u.defaultOptions=(0,a.merge)(o.defaultOptions,{tooltip:{valueSuffix:"%"}}),s().registerSeriesType("natr",u);let i=r();export{i as default};