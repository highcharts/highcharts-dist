/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var s=r[a++],l=r[a++];t.o(e,s)?0===l&&a++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:n}=l().seriesTypes;class o extends n{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,n=l?l.length:0,o=[],u=[],i=[],p,d=t.index,f;if(s.length<a)return;(0,r.isNumber)(l[0])?f=l:(d=Math.min(d,l[0].length-1),f=l.map(e=>e[d]));let h=0,m=0,y=0,c;for(let e=a;e>0;e--)f[e]>f[e-1]?m+=f[e]-f[e-1]:f[e]<f[e-1]&&(y+=f[e-1]-f[e]);for(c=m+y>0?100*(m-y)/(m+y):0,u.push(s[a]),i.push(c),o.push([s[a],c]),p=a+1;p<n;p++)h=Math.abs(f[p-a-1]-f[p-a]),f[p]>f[p-1]?m+=f[p]-f[p-1]:f[p]<f[p-1]&&(y+=f[p-1]-f[p]),f[p-a]>f[p-a-1]?m-=h:y-=h,c=m+y>0?100*(m-y)/(m+y):0,u.push(s[p]),i.push(c),o.push([s[p],c]);return{values:o,xData:u,yData:i}}}o.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{period:20,index:3}}),l().registerSeriesType("cmo",o);let u=a();export{u as default};