/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/accumulation-distribution
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let o=t.default.Series.types.sma;var l=r.n(o);let i=e.default.SeriesRegistry;var n=r.n(i);class u extends l(){static populateAverage(e,t,r,a,s){let o=t[a][1],l=t[a][2],i=t[a][3],n=r[a],u=i===o&&i===l||o===l?0:(2*i-l-o)/(o-l)*n;return[e[a],u]}getValues(e,t){let r,s,o,l=t.period,i=e.xData,n=e.yData,p=t.volumeSeriesID,d=e.chart.get(p),m=d?.getColumn("y"),c=n?n.length:0,f=[],g=[],h=[];if(!(i.length<=l)||!c||4===n[0].length){if(!d)return void(0,a.error)("Series "+p+" not found! Check `volumeSeriesID`.",!0,e.chart);for(s=l;s<c;s++)r=f.length,o=u.populateAverage(i,n,m,s,l),r>0&&(o[1]+=f[r-1][1]),f.push(o),g.push(o[0]),h.push(o[1]);return{values:f,xData:g,yData:h}}}}u.defaultOptions=(0,a.merge)(l().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,a.extend)(u.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),n().registerSeriesType("ad",u);let p=s();export{p as default};