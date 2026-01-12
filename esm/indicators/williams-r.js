/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=function(e,t,a){return e.reduce((e,r)=>[Math.min(e[0],r[t]),Math.max(e[1],r[a])],[Number.MAX_VALUE,-Number.MAX_VALUE])},l=e.default.SeriesRegistry;var i=t.n(l);let{sma:n}=i().seriesTypes,{extend:o,isArray:u,merge:p}=r();class d extends n{getValues(e,t){let a,r,l,i,n,o=t.period,p=e.xData,d=e.yData,m=d?d.length:0,f=[],h=[],c=[];if(!(p.length<o)&&u(d[0])&&4===d[0].length){for(n=o-1;n<m;n++)i=(a=s(d.slice(n-o+1,n+1),2,1))[0],r=-(((l=a[1])-d[n][3])/(l-i)*100),p[n]&&(f.push([p[n],r]),h.push(p[n]),c.push(r));return{values:f,xData:h,yData:c}}}}d.defaultOptions=p(n.defaultOptions,{params:{index:void 0,period:14}}),o(d.prototype,{nameBase:"Williams %R"}),i().registerSeriesType("williamsr",d);let m=r();export{m as default};