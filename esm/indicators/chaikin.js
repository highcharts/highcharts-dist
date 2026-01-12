/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/chaikin
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var o=t.n(s);let{sma:i}=o().seriesTypes,{error:l,extend:n,merge:u}=a();class p extends i{static populateAverage(e,t,r,a,s){let o=t[a][1],i=t[a][2],l=t[a][3],n=r[a],u=l===o&&l===i||o===i?0:(2*l-i-o)/(o-i)*n;return[e[a],u]}getValues(e,t){let r,a,s,o=t.period,i=e.xData,n=e.yData,u=t.volumeSeriesID,d=e.chart.get(u),h=d?.getColumn("y"),m=n?n.length:0,c=[],g=[],v=[];if(!(i.length<=o)||!m||4===n[0].length){if(!d)return void l("Series "+u+" not found! Check `volumeSeriesID`.",!0,e.chart);for(a=o;a<m;a++)r=c.length,s=p.populateAverage(i,n,h,a,o),r>0&&(s[1]+=c[r-1][1]),c.push(s),g.push(s[0]),v.push(s[1]);return{values:c,xData:g,yData:v}}}}p.defaultOptions=u(i.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),n(p.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),o().registerSeriesType("ad",p);let{ema:d}=o().seriesTypes,{correctFloat:h,extend:m,merge:c,error:g}=a();class v extends d{getValues(e,t){let r,a,s=t.periods,o=t.period,i=[],l=[],n=[];if(2!==s.length||s[1]<=s[0])return void g('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');let u=p.prototype.getValues.call(this,e,{volumeSeriesID:t.volumeSeriesID,period:o});if(!u)return;let d=super.getValues.call(this,u,{period:s[0]}),m=super.getValues.call(this,u,{period:s[1]});if(!d||!m)return;let c=s[1]-s[0];for(a=0;a<m.yData.length;a++)r=h(d.yData[a+c]-m.yData[a]),i.push([m.xData[a],r]),l.push(m.xData[a]),n.push(r);return{values:i,xData:l,yData:n}}}v.defaultOptions=c(d.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",period:9,periods:[3,10]}}),m(v.prototype,{nameBase:"Chaikin Osc",nameComponents:["periods"]}),o().registerSeriesType("chaikin",v);let f=a();export{f as default};