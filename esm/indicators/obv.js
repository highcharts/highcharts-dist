/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kołodziej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=t.n(r);let a=e.default.SeriesRegistry;var o=t.n(a);let{sma:l}=o().seriesTypes;class u extends l{getValues(e,t){let s=e.chart.get(t.volumeSeriesID),a=e.xData,o=e.yData,l=[],u=[],i=[],n=!(0,r.isNumber)(o[0]),p=[],d=1,m=0,v=0,h=0,f=0,c;if(!s)return void(0,r.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(c=s.getColumn("y"),p=[a[0],m],h=n?o[0][3]:o[0],l.push(p),u.push(a[0]),i.push(p[1]);d<o.length;d++)v=(f=n?o[d][3]:o[d])>h?m+c[d]:f===h?m:m-c[d],p=[a[d],v],m=v,h=f,l.push(p),u.push(a[d]),i.push(p[1]);return{values:l,xData:u,yData:i}}}u.defaultOptions=(0,r.merge)(l.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,r.extend)(u.prototype,{nameComponents:void 0}),o().registerSeriesType("obv",u);let i=s();export{i as default};