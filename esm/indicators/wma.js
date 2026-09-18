/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:n}=l().seriesTypes;function u(e,t,r,a,s){let l=t[a],n=s<0?r[a]:r[a][s];e.push([l,n])}function i(e,t,r,a){let s=e.length,l=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((s+1)/2*s),n=t[a-1];return e.shift(),[n,l]}class o extends n{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,n=l?l.length:0,o=s[0],p=[],d=[],f=[],h=1,c=-1,g,y,m=l[0];if(s.length<a)return;(0,r.isArray)(l[0])&&(c=t.index,m=l[0][c]);let x=[[o,m]];for(;h!==a;)u(x,s,l,h,c),h++;for(g=h;g<n;g++)p.push(y=i(x,s,l,g)),d.push(y[0]),f.push(y[1]),u(x,s,l,g,c);return p.push(y=i(x,s,l,g)),d.push(y[0]),f.push(y[1]),{values:p,xData:d,yData:f}}}o.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:3,period:9}}),l().registerSeriesType("wma",o);let p=a();export{p as default};