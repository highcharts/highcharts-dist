!/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/mfi"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};i.d(o,{default:()=>l});var a=i(944),n=i.n(a),u=i(512),h=i.n(u);let{sma:p}=h().seriesTypes;function c(e){return e.reduce(function(e,t){return e+t})}function d(e){return(e[1]+e[2]+e[3])/3}class f extends p{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,n=t.decimals,u=e.chart.get(t.volumeSeriesID),h=u?.getColumn("y")||[],p=[],f=[],l=[],g=[],y=[],m,v,x,S,D,H,b=!1,w=1;if(!u)return void(0,a.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(s.length<=r)&&(0,a.isArray)(i[0])&&4===i[0].length&&h){for(m=d(i[w]);w<r+1;)v=m,b=(m=d(i[w]))>=v,x=m*h[w],g.push(b?x:0),y.push(b?0:x),w++;for(H=w-1;H<o;H++){var _;H>w-1&&(g.shift(),y.shift(),v=m,b=(m=d(i[H]))>v,x=m*h[H],g.push(b?x:0),y.push(b?0:x)),S=c(y),_=100-100/(1+c(g)/S),D=parseFloat(_.toFixed(n)),p.push([s[H],D]),f.push(s[H]),l.push(D)}return{values:p,xData:f,yData:l}}}}f.defaultOptions=(0,a.merge)(p.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,a.extend)(f.prototype,{nameBase:"Money Flow Index"}),h().registerSeriesType("mfi",f);let l=n();return o.default})());