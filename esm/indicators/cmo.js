/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Pawel Lysy
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:o}=l().seriesTypes,{isNumber:p,merge:n}=r();class u extends o{getValues(e,t){let a=t.period,r=e.xData,s=e.yData,l=s?s.length:0,o=[],n=[],u=[],i,d=t.index,h;if(r.length<a)return;p(s[0])?h=s:(d=Math.min(d,s[0].length-1),h=s.map(e=>e[d]));let f=0,c=0,m=0,g;for(let e=a;e>0;e--)h[e]>h[e-1]?c+=h[e]-h[e-1]:h[e]<h[e-1]&&(m+=h[e-1]-h[e]);for(g=c+m>0?100*(c-m)/(c+m):0,n.push(r[a]),u.push(g),o.push([r[a],g]),i=a+1;i<l;i++)f=Math.abs(h[i-a-1]-h[i-a]),h[i]>h[i-1]?c+=h[i]-h[i-1]:h[i]<h[i-1]&&(m+=h[i-1]-h[i]),h[i-a]>h[i-a-1]?c-=f:m-=f,g=c+m>0?100*(c-m)/(c+m):0,n.push(r[i]),u.push(g),o.push([r[i],g]);return{values:o,xData:n,yData:u}}}u.defaultOptions=n(o.defaultOptions,{params:{period:20,index:3}}),l().registerSeriesType("cmo",u);let i=r();export{i as default};