/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/dema
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var i=t.n(s);let{ema:l}=i().seriesTypes,{correctFloat:u,isArray:o,merge:d}=r();class n extends l{getEMA(e,t,a,r,s,i){return super.calculateEma(i||[],e,void 0===s?1:s,this.EMApercent,t,void 0===r?-1:r,a)}getValues(e,t){let a=t.period,r=[],s=2*a,i=e.xData,l=e.yData,d=l?l.length:0,n=[],p=[],c=[],h=0,f=0,g,m,v,y,x=-1,E,M=0;if(this.EMApercent=2/(a+1),!(d<2*a-1)){for(o(l[0])&&(x=t.index?t.index:0),M=(h=super.accumulatePeriodPoints(a,x,l))/a,h=0,y=a;y<d+2;y++)y<d+1&&(f=this.getEMA(l,m,M,x,y)[1],r.push(f)),m=f,y<s?h+=f:(y===s&&(M=h/a),f=r[y-a-1],g=this.getEMA([f],v,M)[1],E=[i[y-2],u(2*f-g)],n.push(E),p.push(E[0]),c.push(E[1]),v=g);return{values:n,xData:p,yData:c}}}}n.defaultOptions=d(l.defaultOptions),i().registerSeriesType("dema",n);let p=r();export{p as default};