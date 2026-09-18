!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/tema",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/tema"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let l={};function s(e){let t=l[e];if(void 0!==t)return t.exports;let i=l[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i={};s.d(i,{default:()=>c});var a=s(944),o=s.n(a),h=s(512),n=s.n(h);let{ema:p}=n().seriesTypes;class u extends p{getEMA(e,t,r,l,s,i){return super.calculateEma(i||[],e,void 0===s?1:s,this.EMApercent,t,void 0===l?-1:l,r)}getTemaPoint(e,t,r,l){return[e[l-3],(0,a.correctFloat)(3*r.level1-3*r.level2+r.level3)]}getValues(e,t){let r=t.period,l=2*r,s=3*r,i=e.xData,o=e.yData,h=o?o.length:0,n=[],p=[],u=[],c=[],v=[],d={},g=-1,f=0,y=0,x,m,A,E;if(this.EMApercent=2/(r+1),!(h<3*r-2)){for((0,a.isArray)(o[0])&&(g=t.index?t.index:0),y=(f=super.accumulatePeriodPoints(r,g,o))/r,f=0,A=r;A<h+3;A++)A<h+1&&(d.level1=this.getEMA(o,x,y,g,A)[1],c.push(d.level1)),x=d.level1,A<l?f+=d.level1:(A===l&&(y=f/r,f=0),d.level1=c[A-r-1],d.level2=this.getEMA([d.level1],m,y)[1],v.push(d.level2),m=d.level2,A<s?f+=d.level2:(A===s&&(y=f/r),A===h+1&&(d.level1=c[A-r-1],d.level2=this.getEMA([d.level1],m,y)[1],v.push(d.level2)),d.level1=c[A-r-2],d.level2=v[A-2*r-1],d.level3=this.getEMA([d.level2],d.prevLevel3,y)[1],(E=this.getTemaPoint(i,s,d,A))&&(n.push(E),p.push(E[0]),u.push(E[1])),d.prevLevel3=d.level3));return{values:n,xData:p,yData:u}}}}u.defaultOptions=(0,a.merge)(p.defaultOptions),n().registerSeriesType("tema",u);let c=o();return i.default})());