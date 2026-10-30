!/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/cci
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/cci",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/cci"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>f});var h=a(944),n=a.n(h),c=a(80),p=a.n(c),u=a(512),l=a.n(u);class d extends p(){getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=[],n=[],c=[],p=[],u,l,d=[],f,g=1,y,x,m,H;if(!(s.length<=r)&&(0,h.isArray)(i[0])&&4===i[0].length){for(;g<r;)l=i[g-1],o.push((l[1]+l[2]+l[3])/3),g++;for(H=r;H<=a;H++)x=((l=i[H-1])[1]+l[2]+l[3])/3,f=o.push(x),y=(d=o.slice(f-r)).reduce(function(e,t){return e+t},0)/r,m=function(e,t){let r=e.length,s=0,i;for(i=0;i<r;i++)s+=Math.abs(t-e[i]);return s}(d,y)/r,u=(x-y)/(.015*m),n.push([s[H-1],u]),c.push(s[H-1]),p.push(u);return{values:n,xData:c,yData:p}}}}d.defaultOptions=(0,h.merge)(p().defaultOptions,{params:{index:void 0}}),l().registerSeriesType("cci",d);let f=n();return o.default})());