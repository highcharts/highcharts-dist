/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kolodziej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var o=t.n(s);let{sma:l}=o().seriesTypes,{isNumber:u,error:i,extend:n,merge:p}=a();class d extends l{getValues(e,t){let r=e.chart.get(t.volumeSeriesID),a=e.xData,s=e.yData,o=[],l=[],n=[],p=!u(s[0]),d=[],v=1,m=0,h=0,f=0,c=0,y;if(!r)return void i("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(y=r.getColumn("y"),d=[a[0],m],f=p?s[0][3]:s[0],o.push(d),l.push(a[0]),n.push(d[1]);v<s.length;v++)h=(c=p?s[v][3]:s[v])>f?m+y[v]:c===f?m:m-y[v],d=[a[v],h],m=h,f=c,o.push(d),l.push(a[v]),n.push(d[1]);return{values:o,xData:l,yData:n}}}d.defaultOptions=p(l.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),n(d.prototype,{nameComponents:void 0}),o().registerSeriesType("obv",d);let v=a();export{v as default};