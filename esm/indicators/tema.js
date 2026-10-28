/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/tema
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
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as l from"./indicators.js";let t={};t.n=e=>{let l=e&&e.__esModule?()=>e.default:()=>e;return t.d(l,{a:l}),l},t.d=(e,l)=>{for(var r in l)t.o(l,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:l[r]})},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l);let r=e.default;var s=t.n(r);let a=l.default.Series.types.ema;var i=t.n(a);let v=e.default.SeriesRegistry;var o=t.n(v);class u extends i(){getEMA(e,l,t,r,s,a){return super.calculateEma(a||[],e,void 0===s?1:s,this.EMApercent,l,void 0===r?-1:r,t)}getTemaPoint(e,l,t,s){return[e[s-3],(0,r.correctFloat)(3*t.level1-3*t.level2+t.level3)]}getValues(e,l){let t=l.period,s=2*t,a=3*t,i=e.xData,v=e.yData,o=v?v.length:0,u=[],p=[],n=[],d=[],c=[],h={},m=-1,g=0,f=0,y,A,E,M;if(this.EMApercent=2/(t+1),!(o<3*t-2)){for((0,r.isArray)(v[0])&&(m=l.index?l.index:0),f=(g=super.accumulatePeriodPoints(t,m,v))/t,g=0,E=t;E<o+3;E++)E<o+1&&(h.level1=this.getEMA(v,y,f,m,E)[1],d.push(h.level1)),y=h.level1,E<s?g+=h.level1:(E===s&&(f=g/t,g=0),h.level1=d[E-t-1],h.level2=this.getEMA([h.level1],A,f)[1],c.push(h.level2),A=h.level2,E<a?g+=h.level2:(E===a&&(f=g/t),E===o+1&&(h.level1=d[E-t-1],h.level2=this.getEMA([h.level1],A,f)[1],c.push(h.level2)),h.level1=d[E-t-2],h.level2=c[E-2*t-1],h.level3=this.getEMA([h.level2],h.prevLevel3,f)[1],(M=this.getTemaPoint(i,a,h,E))&&(u.push(M),p.push(M[0]),n.push(M[1])),h.prevLevel3=h.level3));return{values:u,xData:p,yData:n}}}}u.defaultOptions=(0,r.merge)(i().defaultOptions),o().registerSeriesType("tema",u);let p=s();export{p as default};