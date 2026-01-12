/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:u}=l().seriesTypes,{error:o,isArray:i,merge:p}=r();class n extends u{getValues(e,t){let a=e.chart,r=e.xData,s=e.yData,l=t.period,u=!0,p;return(p=a.get(t.volumeSeriesID))?(i(s[0])||(u=!1),this.calculateVWAPValues(u,r,s,p,l)):void o("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,a)}calculateVWAPValues(e,t,a,r,s){let l,u,o,i,p,n,d=r.getColumn("y"),v=d.length,h=t.length,c=[],f=[],m=[],g=[],y=[];for(p=0,l=h<=v?h:v,n=0;p<l;p++)u=(e?(a[p][1]+a[p][2]+a[p][3])/3:a[p])*d[p],o=n?c[p-1]+u:u,i=n?f[p-1]+d[p]:d[p],c.push(o),f.push(i),y.push([t[p],o/i]),m.push(y[p][0]),g.push(y[p][1]),++n===s&&(n=0);return{values:y,xData:m,yData:g}}}n.defaultOptions=p(u.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),l().registerSeriesType("vwap",n);let d=r();export{d as default};