/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var n=t.n(s);let{sma:u}=n().seriesTypes;function l(e,t,r,a,s){let n=t[a],u=s<0?r[a]:r[a][s];e.push([n,u])}function i(e,t,r,a){let s=e.length,n=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((s+1)/2*s),u=t[a-1];return e.shift(),[u,n]}class o extends u{getValues(e,t){let a=t.period,s=e.xData,n=e.yData,u=n?n.length:0,o=s[0],p=[],d=[],f=[],h=1,c=-1,g,y,m=n[0];if(s.length<a)return;(0,r.isArray)(n[0])&&(c=t.index,m=n[0][c]);let v=[[o,m]];for(;h!==a;)l(v,s,n,h,c),h++;for(g=h;g<u;g++)p.push(y=i(v,s,n,g)),d.push(y[0]),f.push(y[1]),l(v,s,n,g,c);return p.push(y=i(v,s,n,g)),d.push(y[0]),f.push(y[1]),{values:p,xData:d,yData:f}}}o.defaultOptions=(0,r.merge)(u.defaultOptions,{params:{index:3,period:9}}),n().registerSeriesType("wma",o);let p=a();export{p as default};