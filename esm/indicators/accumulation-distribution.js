/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/accumulation-distribution
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var s=t.n(o);let{sma:l}=s().seriesTypes;class n extends l{static populateAverage(e,t,r,a,o){let s=t[a][1],l=t[a][2],n=t[a][3],u=r[a],i=n===s&&n===l||s===l?0:(2*n-l-s)/(s-l)*u;return[e[a],i]}getValues(e,t){let a,o,s,l=t.period,u=e.xData,i=e.yData,p=t.volumeSeriesID,d=e.chart.get(p),m=d?.getColumn("y"),c=i?i.length:0,g=[],h=[],v=[];if(!(u.length<=l)||!c||4===i[0].length){if(!d)return void(0,r.error)("Series "+p+" not found! Check `volumeSeriesID`.",!0,e.chart);for(o=l;o<c;o++)a=g.length,s=n.populateAverage(u,i,m,o,l),a>0&&(s[1]+=g[a-1][1]),g.push(s),h.push(s[0]),v.push(s[1]);return{values:g,xData:h,yData:v}}}}n.defaultOptions=(0,r.merge)(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,r.extend)(n.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),s().registerSeriesType("ad",n);let u=a();export{u as default};