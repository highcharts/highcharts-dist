!/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/rsi",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/rsi"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>f});var h=a(944),n=a.n(h),p=a(80),c=a.n(p),u=a(512),d=a.n(u);function l(e,t){return parseFloat(e.toFixed(t))}class g extends c(){getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=t.decimals,n=[],p=[],c=[],u=0,d=0,g=t.index,f=1,y,x,m,H,b,S;if(!(s.length<r)){for((0,h.isNumber)(i[0])?S=i:(g=Math.min(g,i[0].length-1),S=i.map(e=>e[g]));f<r;)(x=l(S[f]-S[f-1],o))>0?u+=x:d+=Math.abs(x),f++;for(m=l(u/(r-1),o),H=l(d/(r-1),o),b=f;b<a;b++)(x=l(S[b]-S[b-1],o))>0?(u=x,d=0):(u=0,d=Math.abs(x)),m=l((m*(r-1)+u)/r,o),y=0===(H=l((H*(r-1)+d)/r,o))?100:0===m?0:l(100-100/(1+m/H),o),n.push([s[b],y]),p.push(s[b]),c.push(y);return{values:n,xData:p,yData:c}}}}g.defaultOptions=(0,h.merge)(c().defaultOptions,{params:{decimals:4,index:3}}),d().registerSeriesType("rsi",g);let f=n();return o.default})());