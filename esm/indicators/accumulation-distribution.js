/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var o=r[a++],l=r[a++];t.o(e,o)?0===l&&a++:0===l?Object.defineProperty(e,o,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,o,{enumerable:!0,get:l})}else for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var l=t.n(o);let{sma:s}=l().seriesTypes;class n extends s{static populateAverage(e,t,r,a,o){let l=t[a][1],s=t[a][2],n=t[a][3],i=r[a],u=n===l&&n===s||l===s?0:(2*n-s-l)/(l-s)*i;return[e[a],u]}getValues(e,t){let a,o,l,s=t.period,i=e.xData,u=e.yData,p=t.volumeSeriesID,d=e.chart.get(p),m=d?.getColumn("y"),c=u?u.length:0,f=[],g=[],h=[];if(!(i.length<=s)||!c||4===u[0].length){if(!d)return void(0,r.error)("Series "+p+" not found! Check `volumeSeriesID`.",!0,e.chart);for(o=s;o<c;o++)a=f.length,l=n.populateAverage(i,u,m,o,s),a>0&&(l[1]+=f[a-1][1]),f.push(l),g.push(l[0]),h.push(l[1]);return{values:f,xData:g,yData:h}}}}n.defaultOptions=(0,r.merge)(s.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,r.extend)(n.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),l().registerSeriesType("ad",n);let i=a();export{i as default};