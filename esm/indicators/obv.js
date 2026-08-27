/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var o=t[a++],s=t[a++];r.o(e,o)?0===s&&a++:0===s?Object.defineProperty(e,o,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,o,{enumerable:!0,get:s})}else for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let o=e.default.SeriesRegistry;var s=r.n(o);let{sma:l}=s().seriesTypes;class u extends l{getValues(e,r){let a=e.chart.get(r.volumeSeriesID),o=e.xData,s=e.yData,l=[],u=[],i=[],n=!(0,t.isNumber)(s[0]),p=[],d=1,m=0,v=0,f=0,h=0,y;if(!a)return void(0,t.error)("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(y=a.getColumn("y"),p=[o[0],m],f=n?s[0][3]:s[0],l.push(p),u.push(o[0]),i.push(p[1]);d<s.length;d++)v=(h=n?s[d][3]:s[d])>f?m+y[d]:h===f?m:m-y[d],p=[o[d],v],m=v,f=h,l.push(p),u.push(o[d]),i.push(p[1]);return{values:l,xData:u,yData:i}}}u.defaultOptions=(0,t.merge)(l.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),(0,t.extend)(u.prototype,{nameComponents:void 0}),s().registerSeriesType("obv",u);let i=a();export{i as default};