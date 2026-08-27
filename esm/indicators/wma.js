/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var s=t[a++],l=t[a++];r.o(e,s)?0===l&&a++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var l=r.n(s);let{sma:n}=l().seriesTypes;function u(e,r,t,a,s){let l=r[a],n=s<0?t[a]:t[a][s];e.push([l,n])}function i(e,r,t,a){let s=e.length,l=e.reduce(function(e,r,t){return[null,e[1]+r[1]*(t+1)]})[1]/((s+1)/2*s),n=r[a-1];return e.shift(),[n,l]}class o extends n{getValues(e,r){let a=r.period,s=e.xData,l=e.yData,n=l?l.length:0,o=s[0],p=[],f=[],d=[],h=1,c=-1,y,g,m=l[0];if(s.length<a)return;(0,t.isArray)(l[0])&&(c=r.index,m=l[0][c]);let b=[[o,m]];for(;h!==a;)u(b,s,l,h,c),h++;for(y=h;y<n;y++)p.push(g=i(b,s,l,y)),f.push(g[0]),d.push(g[1]),u(b,s,l,y,c);return p.push(g=i(b,s,l,y)),f.push(g[0]),d.push(g[1]),{values:p,xData:f,yData:d}}}o.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{index:3,period:9}}),l().registerSeriesType("wma",o);let p=a();export{p as default};