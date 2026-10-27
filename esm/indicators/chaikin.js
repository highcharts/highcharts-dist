/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/chaikin
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let o=t.default.Series.types.sma;var i=r.n(o);let l=e.default.SeriesRegistry;var n=r.n(l);class u extends i(){static populateAverage(e,t,r,a,s){let o=t[a][1],i=t[a][2],l=t[a][3],n=r[a],u=l===o&&l===i||o===i?0:(2*l-i-o)/(o-i)*n;return[e[a],u]}getValues(e,t){let r,s,o,i=t.period,l=e.xData,n=e.yData,p=t.volumeSeriesID,d=e.chart.get(p),h=d?.getColumn("y"),m=n?n.length:0,c=[],f=[],g=[];if(!(l.length<=i)||!m||4===n[0].length){if(!d)return void(0,a.error)("Series "+p+" not found! Check `volumeSeriesID`.",!0,e.chart);for(s=i;s<m;s++)r=c.length,o=u.populateAverage(l,n,h,s,i),r>0&&(o[1]+=c[r-1][1]),c.push(o),f.push(o[0]),g.push(o[1]);return{values:c,xData:f,yData:g}}}}u.defaultOptions=(0,a.merge)(i().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),(0,a.extend)(u.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),n().registerSeriesType("ad",u);let p=t.default.Series.types.ema;var d=r.n(p);class h extends d(){getValues(e,t){let r,s,o=t.periods,i=t.period,l=[],n=[],p=[];if(2!==o.length||o[1]<=o[0])return void(0,a.error)('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');let d=u.prototype.getValues.call(this,e,{volumeSeriesID:t.volumeSeriesID,period:i});if(!d)return;let h=super.getValues.call(this,d,{period:o[0]}),m=super.getValues.call(this,d,{period:o[1]});if(!h||!m)return;let c=o[1]-o[0];for(s=0;s<m.yData.length;s++)r=(0,a.correctFloat)(h.yData[s+c]-m.yData[s]),l.push([m.xData[s],r]),n.push(m.xData[s]),p.push(r);return{values:l,xData:n,yData:p}}}h.defaultOptions=(0,a.merge)(d().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",period:9,periods:[3,10]}}),(0,a.extend)(h.prototype,{nameBase:"Chaikin Osc",nameComponents:["periods"]}),n().registerSeriesType("chaikin",h);let m=s();export{m as default};