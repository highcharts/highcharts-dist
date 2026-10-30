/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/dema
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let i=t.default.Series.types.ema;var o=r.n(i);let l=e.default.SeriesRegistry;var u=r.n(l);class d extends o(){getEMA(e,t,r,a,s,i){return super.calculateEma(i||[],e,void 0===s?1:s,this.EMApercent,t,void 0===a?-1:a,r)}getValues(e,t){let r=t.period,s=[],i=2*r,o=e.xData,l=e.yData,u=l?l.length:0,d=[],n=[],p=[],c=0,f=0,h,m,g,y,v=-1,x,A=0;if(this.EMApercent=2/(r+1),!(u<2*r-1)){for((0,a.isArray)(l[0])&&(v=t.index?t.index:0),A=(c=super.accumulatePeriodPoints(r,v,l))/r,c=0,y=r;y<u+2;y++)y<u+1&&(f=this.getEMA(l,m,A,v,y)[1],s.push(f)),m=f,y<i?c+=f:(y===i&&(A=c/r),f=s[y-r-1],h=this.getEMA([f],g,A)[1],x=[o[y-2],(0,a.correctFloat)(2*f-h)],d.push(x),n.push(x[0]),p.push(x[1]),g=h);return{values:d,xData:n,yData:p}}}}d.defaultOptions=(0,a.merge)(o().defaultOptions),u().registerSeriesType("dema",d);let n=s();export{n as default};