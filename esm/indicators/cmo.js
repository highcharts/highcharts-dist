/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Lysy
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:o}=l().seriesTypes;class p extends o{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,o=l?l.length:0,p=[],u=[],n=[],i,d=t.index,h;if(s.length<a)return;(0,r.isNumber)(l[0])?h=l:(d=Math.min(d,l[0].length-1),h=l.map(e=>e[d]));let f=0,m=0,c=0,g;for(let e=a;e>0;e--)h[e]>h[e-1]?m+=h[e]-h[e-1]:h[e]<h[e-1]&&(c+=h[e-1]-h[e]);for(g=m+c>0?100*(m-c)/(m+c):0,u.push(s[a]),n.push(g),p.push([s[a],g]),i=a+1;i<o;i++)f=Math.abs(h[i-a-1]-h[i-a]),h[i]>h[i-1]?m+=h[i]-h[i-1]:h[i]<h[i-1]&&(c+=h[i-1]-h[i]),h[i-a]>h[i-a-1]?m-=f:c-=f,g=m+c>0?100*(m-c)/(m+c):0,u.push(s[i]),n.push(g),p.push([s[i],g]);return{values:p,xData:u,yData:n}}}p.defaultOptions=(0,r.merge)(o.defaultOptions,{params:{period:20,index:3}}),l().registerSeriesType("cmo",p);let u=a();export{u as default};