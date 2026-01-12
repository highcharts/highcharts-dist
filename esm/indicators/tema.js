/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/tema
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafal Sebestjanski
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var l={};l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l);let t=e.default;var r=l.n(t);let a=e.default.SeriesRegistry;var s=l.n(a);let{ema:v}=s().seriesTypes,{correctFloat:i,isArray:u,merge:p}=r();class n extends v{getEMA(e,l,t,r,a,s){return super.calculateEma(s||[],e,void 0===a?1:a,this.EMApercent,l,void 0===r?-1:r,t)}getTemaPoint(e,l,t,r){return[e[r-3],i(3*t.level1-3*t.level2+t.level3)]}getValues(e,l){let t=l.period,r=2*t,a=3*t,s=e.xData,v=e.yData,i=v?v.length:0,p=[],n=[],o=[],h=[],d=[],c={},g=-1,f=0,m=0,y,E,M,A;if(this.EMApercent=2/(t+1),!(i<3*t-2)){for(u(v[0])&&(g=l.index?l.index:0),m=(f=super.accumulatePeriodPoints(t,g,v))/t,f=0,M=t;M<i+3;M++)M<i+1&&(c.level1=this.getEMA(v,y,m,g,M)[1],h.push(c.level1)),y=c.level1,M<r?f+=c.level1:(M===r&&(m=f/t,f=0),c.level1=h[M-t-1],c.level2=this.getEMA([c.level1],E,m)[1],d.push(c.level2),E=c.level2,M<a?f+=c.level2:(M===a&&(m=f/t),M===i+1&&(c.level1=h[M-t-1],c.level2=this.getEMA([c.level1],E,m)[1],d.push(c.level2)),c.level1=h[M-t-2],c.level2=d[M-2*t-1],c.level3=this.getEMA([c.level2],c.prevLevel3,m)[1],(A=this.getTemaPoint(s,a,c,M))&&(p.push(A),n.push(A[0]),o.push(A[1])),c.prevLevel3=c.level3));return{values:p,xData:n,yData:o}}}}n.defaultOptions=p(v.defaultOptions),s().registerSeriesType("tema",n);let o=r();export{o as default};