/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/tema
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
 */import*as e from"../highcharts.js";var l={};l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l);let t=e.default;var r=l.n(t);let a=e.default.SeriesRegistry;var s=l.n(a);let{ema:v}=s().seriesTypes;class i extends v{getEMA(e,l,t,r,a,s){return super.calculateEma(s||[],e,void 0===a?1:a,this.EMApercent,l,void 0===r?-1:r,t)}getTemaPoint(e,l,r,a){return[e[a-3],(0,t.correctFloat)(3*r.level1-3*r.level2+r.level3)]}getValues(e,l){let r=l.period,a=2*r,s=3*r,v=e.xData,i=e.yData,u=i?i.length:0,o=[],p=[],n=[],h=[],d=[],c={},g=-1,f=0,m=0,y,A,E,M;if(this.EMApercent=2/(r+1),!(u<3*r-2)){for((0,t.isArray)(i[0])&&(g=l.index?l.index:0),m=(f=super.accumulatePeriodPoints(r,g,i))/r,f=0,E=r;E<u+3;E++)E<u+1&&(c.level1=this.getEMA(i,y,m,g,E)[1],h.push(c.level1)),y=c.level1,E<a?f+=c.level1:(E===a&&(m=f/r,f=0),c.level1=h[E-r-1],c.level2=this.getEMA([c.level1],A,m)[1],d.push(c.level2),A=c.level2,E<s?f+=c.level2:(E===s&&(m=f/r),E===u+1&&(c.level1=h[E-r-1],c.level2=this.getEMA([c.level1],A,m)[1],d.push(c.level2)),c.level1=h[E-r-2],c.level2=d[E-2*r-1],c.level3=this.getEMA([c.level2],c.prevLevel3,m)[1],(M=this.getTemaPoint(v,s,c,E))&&(o.push(M),p.push(M[0]),n.push(M[1])),c.prevLevel3=c.level3));return{values:o,xData:p,yData:n}}}}i.defaultOptions=(0,t.merge)(v.defaultOptions),s().registerSeriesType("tema",i);let u=r();export{u as default};