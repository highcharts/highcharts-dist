/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let l=t.default.Series.types.sma;var n=r.n(l);let u=e.default.SeriesRegistry;var o=r.n(u);function i(e,t,r,s,a){let l=t[s],n=a<0?r[s]:r[s][a];e.push([l,n])}function p(e,t,r,s){let a=e.length,l=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((a+1)/2*a),n=t[s-1];return e.shift(),[n,l]}class d extends n(){getValues(e,t){let r=t.period,a=e.xData,l=e.yData,n=l?l.length:0,u=a[0],o=[],d=[],f=[],c=1,h=-1,m,g,y=l[0];if(a.length<r)return;(0,s.isArray)(l[0])&&(h=t.index,y=l[0][h]);let x=[[u,y]];for(;c!==r;)i(x,a,l,c,h),c++;for(m=c;m<n;m++)o.push(g=p(x,a,l,m)),d.push(g[0]),f.push(g[1]),i(x,a,l,m,h);return o.push(g=p(x,a,l,m)),d.push(g[0]),f.push(g[1]),{values:o,xData:d,yData:f}}}d.defaultOptions=(0,s.merge)(n().defaultOptions,{params:{index:3,period:9}}),o().registerSeriesType("wma",d);let f=a();export{f as default};