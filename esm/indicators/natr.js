/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var l=r[a++],s=r[a++];t.o(e,l)?0===s&&a++:0===s?Object.defineProperty(e,l,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,l,{enumerable:!0,get:s})}else for(var l in r)t.o(r,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let l=e.default.SeriesRegistry;var s=t.n(l);let{atr:o}=s().seriesTypes;class u extends o{getValues(e,t){let r=super.getValues.apply(this,arguments),a=r.values.length,l=e.yData,s=0,o=t.period-1;if(r){for(;s<a;s++)r.yData[s]=r.values[s][1]/l[o][3]*100,r.values[s][1]=r.yData[s],o++;return r}}}u.defaultOptions=(0,r.merge)(o.defaultOptions,{tooltip:{valueSuffix:"%"}}),s().registerSeriesType("natr",u);let i=a();export{i as default};