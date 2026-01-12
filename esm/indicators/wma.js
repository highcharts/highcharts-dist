/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var n=t.n(s);let{sma:u}=n().seriesTypes,{isArray:l,merge:o}=a();function i(e,t,r,a,s){let n=t[a],u=s<0?r[a]:r[a][s];e.push([n,u])}function p(e,t,r,a){let s=e.length,n=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((s+1)/2*s),u=t[a-1];return e.shift(),[u,n]}class d extends u{getValues(e,t){let r=t.period,a=e.xData,s=e.yData,n=s?s.length:0,u=a[0],o=[],d=[],f=[],h=1,c=-1,g,y,m=s[0];if(a.length<r)return;l(s[0])&&(c=t.index,m=s[0][c]);let v=[[u,m]];for(;h!==r;)i(v,a,s,h,c),h++;for(g=h;g<n;g++)o.push(y=p(v,a,s,g)),d.push(y[0]),f.push(y[1]),i(v,a,s,g,c);return o.push(y=p(v,a,s,g)),d.push(y[0]),f.push(y[1]),{values:o,xData:d,yData:f}}}d.defaultOptions=o(u.defaultOptions,{params:{index:3,period:9}}),n().registerSeriesType("wma",d);let f=a();export{f as default};