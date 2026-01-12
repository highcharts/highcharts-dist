/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var n=t.n(s);let{sma:u}=n().seriesTypes,{extend:o,isArray:l,merge:p}=r();function i(e,t,a,r,s){let n=t[a-1][s]-t[a-r-1][s];return[e[a-1],n]}class d extends u{getValues(e,t){let a,r,s=t.period,n=t.index,u=e.xData,o=e.yData,p=o?o.length:0,d=[],m=[],f=[];if(!(u.length<=s)&&l(o[0])){for(a=s+1;a<p;a++)r=i(u,o,a,s,n),d.push(r),m.push(r[0]),f.push(r[1]);return r=i(u,o,a,s,n),d.push(r),m.push(r[0]),f.push(r[1]),{values:d,xData:m,yData:f}}}}d.defaultOptions=p(u.defaultOptions,{params:{index:3}}),o(d.prototype,{nameBase:"Momentum"}),n().registerSeriesType("momentum",d);let m=r();export{m as default};