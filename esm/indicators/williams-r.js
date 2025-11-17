/**
 * Highstock JS v12.4.0-modified (2025-11-17)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2025 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=function(e,t,r){return e.reduce((e,a)=>[Math.min(e[0],a[t]),Math.max(e[1],a[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])},l=e.default.SeriesRegistry;var i=t.n(l);let{sma:o}=i().seriesTypes,{extend:n,isArray:u,merge:p}=a();class d extends o{getValues(e,t){let r,a,l,i,o,n=t.period,p=e.xData,d=e.yData,m=d?d.length:0,c=[],f=[],h=[];if(!(p.length<n)&&u(d[0])&&4===d[0].length){for(o=n-1;o<m;o++)i=(r=s(d.slice(o-n+1,o+1),2,1))[0],a=-(((l=r[1])-d[o][3])/(l-i)*100),p[o]&&(c.push([p[o],a]),f.push(p[o]),h.push(a));return{values:c,xData:f,yData:h}}}}d.defaultOptions=p(o.defaultOptions,{params:{index:void 0,period:14}}),n(d.prototype,{nameBase:"Williams %R"}),i().registerSeriesType("williamsr",d);let m=a();export{m as default};