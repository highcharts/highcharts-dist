/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/atr
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import"./indicators.js";import*as t from"./atr.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let l=t.default.Series.types.atr;var o=r.n(l);let i=e.default.SeriesRegistry;var u=r.n(i);class p extends o(){getValues(e,t){let r=super.getValues.apply(this,arguments),a=r.values.length,s=e.yData,l=0,o=t.period-1;if(r){for(;l<a;l++)r.yData[l]=r.values[l][1]/s[o][3]*100,r.values[l][1]=r.yData[l],o++;return r}}}p.defaultOptions=(0,a.merge)(o().defaultOptions,{tooltip:{valueSuffix:"%"}}),u().registerSeriesType("natr",p);let n=s();export{n as default};