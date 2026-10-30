/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let l=t.default.Series.types.sma;var o=r.n(l);let u=e.default.SeriesRegistry;var i=r.n(u);class p extends o(){getValues(e,t){let r=e.chart,a=e.xData,l=e.yData,o=t.period,u=!0,i;return(i=r.get(t.volumeSeriesID))?((0,s.isArray)(l[0])||(u=!1),this.calculateVWAPValues(u,a,l,i,o)):void(0,s.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,r)}calculateVWAPValues(e,t,r,s,a){let l,o,u,i,p,n,d=s.getColumn("y"),c=d.length,m=t.length,h=[],v=[],f=[],g=[],y=[];for(l=m<=c?m:c,p=0,n=0;p<l;p++)o=(e?(r[p][1]+r[p][2]+r[p][3])/3:r[p])*d[p],u=n?h[p-1]+o:o,i=n?v[p-1]+d[p]:d[p],h.push(u),v.push(i),y.push([t[p],u/i]),f.push(y[p][0]),g.push(y[p][1]),++n===a&&(n=0);return{values:y,xData:f,yData:g}}}p.defaultOptions=(0,s.merge)(o().defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),i().registerSeriesType("vwap",p);let n=a();export{n as default};