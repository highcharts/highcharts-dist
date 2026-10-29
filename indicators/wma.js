!/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/wma
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/wma",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/wma"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function a(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};a.d(o,{default:()=>y});var n=a(944),h=a.n(n),u=a(80),p=a.n(u),c=a(512),l=a.n(c);function d(e,t,r,s,i){let a=t[s],o=i<0?r[s]:r[s][i];e.push([a,o])}function f(e,t,r,s){let i=e.length,a=e.reduce(function(e,t,r){return[null,e[1]+t[1]*(r+1)]})[1]/((i+1)/2*i),o=t[s-1];return e.shift(),[o,a]}class g extends p(){getValues(e,t){let r=t.period,s=e.xData,i=e.yData,a=i?i.length:0,o=s[0],h=[],u=[],p=[],c=1,l=-1,g,y,x=i[0];if(s.length<r)return;(0,n.isArray)(i[0])&&(l=t.index,x=i[0][l]);let m=[[o,x]];for(;c!==r;)d(m,s,i,c,l),c++;for(g=c;g<a;g++)h.push(y=f(m,s,i,g)),u.push(y[0]),p.push(y[1]),d(m,s,i,g,l);return h.push(y=f(m,s,i,g)),u.push(y[0]),p.push(y[1]),{values:h,xData:u,yData:p}}}g.defaultOptions=(0,n.merge)(p().defaultOptions,{params:{index:3,period:9}}),l().registerSeriesType("wma",g);let y=h();return o.default})());