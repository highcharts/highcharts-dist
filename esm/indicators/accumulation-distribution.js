/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/accumulation-distribution
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var o=t.n(s);let{sma:l}=o().seriesTypes,{error:u,extend:i,merge:n}=r();class p extends l{static populateAverage(e,t,a,r,s){let o=t[r][1],l=t[r][2],u=t[r][3],i=a[r],n=u===o&&u===l||o===l?0:(2*u-l-o)/(o-l)*i;return[e[r],n]}getValues(e,t){let a,r,s,o=t.period,l=e.xData,i=e.yData,n=t.volumeSeriesID,d=e.chart.get(n),c=d?.getColumn("y"),m=i?i.length:0,h=[],v=[],f=[];if(!(l.length<=o)||!m||4===i[0].length){if(!d)return void u("Series "+n+" not found! Check `volumeSeriesID`.",!0,e.chart);for(r=o;r<m;r++)a=h.length,s=p.populateAverage(l,i,c,r,o),a>0&&(s[1]+=h[a-1][1]),h.push(s),v.push(s[0]),f.push(s[1]);return{values:h,xData:v,yData:f}}}}p.defaultOptions=n(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),i(p.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),o().registerSeriesType("ad",p);let d=r();export{d as default};