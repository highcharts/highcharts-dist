/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var l=r.n(s);let{sma:u}=l().seriesTypes;class o extends u{getValues(e,r){let a=e.chart,s=e.xData,l=e.yData,u=r.period,o=!0,i;return(i=a.get(r.volumeSeriesID))?((0,t.isArray)(l[0])||(o=!1),this.calculateVWAPValues(o,s,l,i,u)):void(0,t.error)("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,a)}calculateVWAPValues(e,r,t,a,s){let l,u,o,i,p,n,d=a.getColumn("y"),v=d.length,h=r.length,c=[],m=[],f=[],g=[],y=[];for(p=0,l=h<=v?h:v,n=0;p<l;p++)u=(e?(t[p][1]+t[p][2]+t[p][3])/3:t[p])*d[p],o=n?c[p-1]+u:u,i=n?m[p-1]+d[p]:d[p],c.push(o),m.push(i),y.push([r[p],o/i]),f.push(y[p][0]),g.push(y[p][1]),++n===s&&(n=0);return{values:y,xData:f,yData:g}}}o.defaultOptions=(0,t.merge)(u.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),l().registerSeriesType("vwap",o);let i=a();export{i as default};