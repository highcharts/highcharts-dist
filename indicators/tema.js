!/**
 * Highstock JS v13.1.1-modified (2026-10-27)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.ema,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/tema",["highcharts/highcharts"],function(e){return t(e.Series.types.ema,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/tema"]=t(e._Highcharts.Series.types.ema,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.ema,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={563(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let l={};function i(e){let t=l[e];if(void 0!==t)return t.exports;let r=l[e]={exports:{}};return s[e](r,r.exports,i),r.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};i.d(a,{default:()=>g});var o=i(944),h=i.n(o),n=i(563),p=i.n(n),c=i(512),u=i.n(c);class v extends p(){getEMA(e,t,r,s,l,i){return super.calculateEma(i||[],e,void 0===l?1:l,this.EMApercent,t,void 0===s?-1:s,r)}getTemaPoint(e,t,r,s){return[e[s-3],(0,o.correctFloat)(3*r.level1-3*r.level2+r.level3)]}getValues(e,t){let r=t.period,s=2*r,l=3*r,i=e.xData,a=e.yData,h=a?a.length:0,n=[],p=[],c=[],u=[],v=[],g={},d=-1,f=0,y=0,m,x,H,S;if(this.EMApercent=2/(r+1),!(h<3*r-2)){for((0,o.isArray)(a[0])&&(d=t.index?t.index:0),y=(f=super.accumulatePeriodPoints(r,d,a))/r,f=0,H=r;H<h+3;H++)H<h+1&&(g.level1=this.getEMA(a,m,y,d,H)[1],u.push(g.level1)),m=g.level1,H<s?f+=g.level1:(H===s&&(y=f/r,f=0),g.level1=u[H-r-1],g.level2=this.getEMA([g.level1],x,y)[1],v.push(g.level2),x=g.level2,H<l?f+=g.level2:(H===l&&(y=f/r),H===h+1&&(g.level1=u[H-r-1],g.level2=this.getEMA([g.level1],x,y)[1],v.push(g.level2)),g.level1=u[H-r-2],g.level2=v[H-2*r-1],g.level3=this.getEMA([g.level2],g.prevLevel3,y)[1],(S=this.getTemaPoint(i,l,g,H))&&(n.push(S),p.push(S[0]),c.push(S[1])),g.prevLevel3=g.level3));return{values:n,xData:p,yData:c}}}}v.defaultOptions=(0,o.merge)(p().defaultOptions),u().registerSeriesType("tema",v);let g=h();return a.default})());