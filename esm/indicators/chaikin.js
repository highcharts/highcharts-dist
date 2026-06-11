/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/chaikin
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var o=t.n(s);let{sma:i}=o().seriesTypes;class l extends i{static populateAverage(e,t,r,a,s){let o=t[a][1],i=t[a][2],l=t[a][3],n=r[a],u=l===o&&l===i||o===i?0:(2*l-i-o)/(o-i)*n;return[e[a],u]}getValues(e,t){let a,s,o,i=t.period,n=e.xData,u=e.yData,p=t.volumeSeriesID,d=e.chart.get(p),h=d?.getColumn("y"),m=u?u.length:0,c=[],g=[],v=[];if(!(n.length<=i)||!m||4===u[0].length){if(!d)return void(0,r.error)("Series "+p+" not found! Check `volumeSeriesID`.",!0,e.chart);for(s=i;s<m;s++)a=c.length,o=l.populateAverage(n,u,h,s,i),a>0&&(o[1]+=c[a-1][1]),c.push(o),g.push(o[0]),v.push(o[1]);return{values:c,xData:g,yData:v}}}}l.defaultOptions=(0,r.merge)(i.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,r.extend)(l.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),o().registerSeriesType("ad",l);let{ema:n}=o().seriesTypes;class u extends n{getValues(e,t){let a,s,o=t.periods,i=t.period,n=[],u=[],p=[];if(2!==o.length||o[1]<=o[0])return void(0,r.error)('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');let d=l.prototype.getValues.call(this,e,{volumeSeriesID:t.volumeSeriesID,period:i});if(!d)return;let h=super.getValues.call(this,d,{period:o[0]}),m=super.getValues.call(this,d,{period:o[1]});if(!h||!m)return;let c=o[1]-o[0];for(s=0;s<m.yData.length;s++)a=(0,r.correctFloat)(h.yData[s+c]-m.yData[s]),n.push([m.xData[s],a]),u.push(m.xData[s]),p.push(a);return{values:n,xData:u,yData:p}}}u.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",period:9,periods:[3,10]}}),(0,r.extend)(u.prototype,{nameBase:"Chaikin Osc",nameComponents:["periods"]}),o().registerSeriesType("chaikin",u);let p=a();export{p as default};