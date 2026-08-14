/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/dema
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var s=r[a++],l=r[a++];t.o(e,s)?0===l&&a++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{ema:i}=l().seriesTypes;class o extends i{getEMA(e,t,r,a,s,l){return super.calculateEma(l||[],e,void 0===s?1:s,this.EMApercent,t,void 0===a?-1:a,r)}getValues(e,t){let a=t.period,s=[],l=2*a,i=e.xData,o=e.yData,u=o?o.length:0,n=[],d=[],p=[],c=0,f=0,h,y,g,m,v=-1,A,b=0;if(this.EMApercent=2/(a+1),!(u<2*a-1)){for((0,r.isArray)(o[0])&&(v=t.index?t.index:0),b=(c=super.accumulatePeriodPoints(a,v,o))/a,c=0,m=a;m<u+2;m++)m<u+1&&(f=this.getEMA(o,y,b,v,m)[1],s.push(f)),y=f,m<l?c+=f:(m===l&&(b=c/a),f=s[m-a-1],h=this.getEMA([f],g,b)[1],A=[i[m-2],(0,r.correctFloat)(2*f-h)],n.push(A),d.push(A[0]),p.push(A[1]),g=h);return{values:n,xData:d,yData:p}}}}o.defaultOptions=(0,r.merge)(i.defaultOptions),l().registerSeriesType("dema",o);let u=a();export{u as default};