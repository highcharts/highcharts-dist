/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kołodziej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var o=r.n(s);let a=t.default.Series.types.sma;var l=r.n(a);let i=e.default.SeriesRegistry;var u=r.n(i);class n extends l(){getValues(e,t){let r=e.chart.get(t.volumeSeriesID),o=e.xData,a=e.yData,l=[],i=[],u=[],n=!(0,s.isNumber)(a[0]),p=[],d=1,m=0,v=0,c=0,f=0,h;if(!r)return void(0,s.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(h=r.getColumn("y"),p=[o[0],m],c=n?a[0][3]:a[0],l.push(p),i.push(o[0]),u.push(p[1]);d<a.length;d++)v=(f=n?a[d][3]:a[d])>c?m+h[d]:f===c?m:m-h[d],p=[o[d],v],m=v,c=f,l.push(p),i.push(o[d]),u.push(p[1]);return{values:l,xData:i,yData:u}}}n.defaultOptions=(0,s.merge)(l().defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,s.extend)(n.prototype,{nameComponents:void 0}),u().registerSeriesType("obv",n);let p=o();export{p as default};