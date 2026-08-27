/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let l={};l.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var a=t[r++],s=t[r++];l.o(e,a)?0===s&&r++:0===s?Object.defineProperty(e,a,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,a,{enumerable:!0,get:s})}else for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l);let t=e.default;var r=l.n(t);let a=e.default.SeriesRegistry;var s=l.n(a);let{ema:v}=s().seriesTypes;class i extends v{getEMA(e,l,t,r,a,s){return super.calculateEma(s||[],e,void 0===a?1:a,this.EMApercent,l,void 0===r?-1:r,t)}getTemaPoint(e,l,r,a){return[e[a-3],(0,t.correctFloat)(3*r.level1-3*r.level2+r.level3)]}getValues(e,l){let r=l.period,a=2*r,s=3*r,v=e.xData,i=e.yData,o=i?i.length:0,u=[],n=[],p=[],d=[],h=[],c={},g=-1,f=0,m=0,y,A,E,M;if(this.EMApercent=2/(r+1),!(o<3*r-2)){for((0,t.isArray)(i[0])&&(g=l.index?l.index:0),m=(f=super.accumulatePeriodPoints(r,g,i))/r,f=0,E=r;E<o+3;E++)E<o+1&&(c.level1=this.getEMA(i,y,m,g,E)[1],d.push(c.level1)),y=c.level1,E<a?f+=c.level1:(E===a&&(m=f/r,f=0),c.level1=d[E-r-1],c.level2=this.getEMA([c.level1],A,m)[1],h.push(c.level2),A=c.level2,E<s?f+=c.level2:(E===s&&(m=f/r),E===o+1&&(c.level1=d[E-r-1],c.level2=this.getEMA([c.level1],A,m)[1],h.push(c.level2)),c.level1=d[E-r-2],c.level2=h[E-2*r-1],c.level3=this.getEMA([c.level2],c.prevLevel3,m)[1],(M=this.getTemaPoint(v,s,c,E))&&(u.push(M),n.push(M[0]),p.push(M[1])),c.prevLevel3=c.level3));return{values:u,xData:n,yData:p}}}}i.defaultOptions=(0,t.merge)(v.defaultOptions),s().registerSeriesType("tema",i);let o=r();export{o as default};