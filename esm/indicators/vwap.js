/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:u}=l().seriesTypes;class o extends u{getValues(e,t){let a=e.chart,s=e.xData,l=e.yData,u=t.period,o=!0,i;return(i=a.get(t.volumeSeriesID))?((0,r.isArray)(l[0])||(o=!1),this.calculateVWAPValues(o,s,l,i,u)):void(0,r.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,a)}calculateVWAPValues(e,t,r,a,s){let l,u,o,i,p,n,d=a.getColumn("y"),h=d.length,c=t.length,v=[],m=[],f=[],g=[],y=[];for(l=c<=h?c:h,p=0,n=0;p<l;p++)u=(e?(r[p][1]+r[p][2]+r[p][3])/3:r[p])*d[p],o=n?v[p-1]+u:u,i=n?m[p-1]+d[p]:d[p],v.push(o),m.push(i),y.push([t[p],o/i]),f.push(y[p][0]),g.push(y[p][1]),++n===s&&(n=0);return{values:y,xData:f,yData:g}}}o.defaultOptions=(0,r.merge)(u.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),l().registerSeriesType("vwap",o);let i=a();export{i as default};