!/**
 * Highstock JS v13.1.1-modified (2026-10-27)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.ema,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/dema",["highcharts/highcharts"],function(e){return t(e.Series.types.ema,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/dema"]=t(e._Highcharts.Series.types.ema,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.ema,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={563(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>l});var h=a(944),n=a.n(h),c=a(563),p=a.n(c),u=a(512),d=a.n(u);class g extends p(){getEMA(e,t,r,s,i,a){return super.calculateEma(a||[],e,void 0===i?1:i,this.EMApercent,t,void 0===s?-1:s,r)}getValues(e,t){let r=t.period,s=[],i=2*r,a=e.xData,o=e.yData,n=o?o.length:0,c=[],p=[],u=[],d=0,g=0,l,f,y,x,m=-1,H,S=0;if(this.EMApercent=2/(r+1),!(n<2*r-1)){for((0,h.isArray)(o[0])&&(m=t.index?t.index:0),S=(d=super.accumulatePeriodPoints(r,m,o))/r,d=0,x=r;x<n+2;x++)x<n+1&&(g=this.getEMA(o,f,S,m,x)[1],s.push(g)),f=g,x<i?d+=g:(x===i&&(S=d/r),g=s[x-r-1],l=this.getEMA([g],y,S)[1],H=[a[x-2],(0,h.correctFloat)(2*g-l)],c.push(H),p.push(H[0]),u.push(H[1]),y=l);return{values:c,xData:p,yData:u}}}}g.defaultOptions=(0,h.merge)(p().defaultOptions),d().registerSeriesType("dema",g);let l=n();return o.default})());