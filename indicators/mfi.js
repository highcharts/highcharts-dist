!/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/mfi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Grzegorz Blachliński
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/mfi"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>f});var n=i(944),a=i.n(n),u=i(512),h=i.n(u);let{sma:l}=h().seriesTypes;function p(e){return e.reduce(function(e,t){return e+t})}function c(e){return(e[1]+e[2]+e[3])/3}class d extends l{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,a=t.decimals,u=e.chart.get(t.volumeSeriesID),h=u?.getColumn("y")||[],l=[],d=[],f=[],g=[],y=[],m,x,v,S,D,H,b=!1,w=1;if(!u)return void(0,n.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(s.length<=r)&&(0,n.isArray)(i[0])&&4===i[0].length&&h){for(m=c(i[w]);w<r+1;)x=m,b=(m=c(i[w]))>=x,v=m*h[w],g.push(b?v:0),y.push(b?0:v),w++;for(H=w-1;H<o;H++){var _;H>w-1&&(g.shift(),y.shift(),x=m,b=(m=c(i[H]))>x,v=m*h[H],g.push(b?v:0),y.push(b?0:v)),S=p(y),_=100-100/(1+p(g)/S),D=parseFloat(_.toFixed(a)),l.push([s[H],D]),d.push(s[H]),f.push(D)}return{values:l,xData:d,yData:f}}}}d.defaultOptions=(0,n.merge)(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,n.extend)(d.prototype,{nameBase:"Money Flow Index"}),h().registerSeriesType("mfi",d);let f=a();return o.default})());