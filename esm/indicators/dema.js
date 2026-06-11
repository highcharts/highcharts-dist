/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var i=t.n(s);let{ema:l}=i().seriesTypes;class o extends l{getEMA(e,t,r,a,s,i){return super.calculateEma(i||[],e,void 0===s?1:s,this.EMApercent,t,void 0===a?-1:a,r)}getValues(e,t){let a=t.period,s=[],i=2*a,l=e.xData,o=e.yData,u=o?o.length:0,d=[],n=[],p=[],c=0,h=0,f,g,m,y,v=-1,x,A=0;if(this.EMApercent=2/(a+1),!(u<2*a-1)){for((0,r.isArray)(o[0])&&(v=t.index?t.index:0),A=(c=super.accumulatePeriodPoints(a,v,o))/a,c=0,y=a;y<u+2;y++)y<u+1&&(h=this.getEMA(o,g,A,v,y)[1],s.push(h)),g=h,y<i?c+=h:(y===i&&(A=c/a),h=s[y-a-1],f=this.getEMA([h],m,A)[1],x=[l[y-2],(0,r.correctFloat)(2*h-f)],d.push(x),n.push(x[0]),p.push(x[1]),m=f);return{values:d,xData:n,yData:p}}}}o.defaultOptions=(0,r.merge)(l.defaultOptions),i().registerSeriesType("dema",o);let u=a();export{u as default};