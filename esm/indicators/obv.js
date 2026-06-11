/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var o=r.n(s);let{sma:l}=o().seriesTypes;class u extends l{getValues(e,r){let a=e.chart.get(r.volumeSeriesID),s=e.xData,o=e.yData,l=[],u=[],i=[],n=!(0,t.isNumber)(o[0]),p=[],d=1,v=0,m=0,h=0,f=0,c;if(!a)return void(0,t.error)("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(c=a.getColumn("y"),p=[s[0],v],h=n?o[0][3]:o[0],l.push(p),u.push(s[0]),i.push(p[1]);d<o.length;d++)m=(f=n?o[d][3]:o[d])>h?v+c[d]:f===h?v:v-c[d],p=[s[d],m],v=m,h=f,l.push(p),u.push(s[d]),i.push(p[1]);return{values:l,xData:u,yData:i}}}u.defaultOptions=(0,t.merge)(l.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,t.extend)(u.prototype,{nameComponents:void 0}),o().registerSeriesType("obv",u);let i=a();export{i as default};