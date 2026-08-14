!/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/mfi"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],o=t[r++];i.o(e,s)?0===o&&r++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>d});var a=i(944),n=i.n(a),u=i(512),h=i.n(u);let{sma:l}=h().seriesTypes;function f(e){return e.reduce(function(e,t){return e+t})}function p(e){return(e[1]+e[2]+e[3])/3}class c extends l{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,n=t.decimals,u=e.chart.get(t.volumeSeriesID),h=u?.getColumn("y")||[],l=[],c=[],d=[],g=[],y=[],m,x,v,b,S,D,j=!1,H=1;if(!u)return void(0,a.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(s.length<=r)&&(0,a.isArray)(i[0])&&4===i[0].length&&h){for(m=p(i[H]);H<r+1;)x=m,j=(m=p(i[H]))>=x,v=m*h[H],g.push(j?v:0),y.push(j?0:v),H++;for(D=H-1;D<o;D++){var O;D>H-1&&(g.shift(),y.shift(),x=m,j=(m=p(i[D]))>x,v=m*h[D],g.push(j?v:0),y.push(j?0:v)),b=f(y),O=100-100/(1+f(g)/b),S=parseFloat(O.toFixed(n)),l.push([s[D],S]),c.push(s[D]),d.push(S)}return{values:l,xData:c,yData:d}}}}c.defaultOptions=(0,a.merge)(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,a.extend)(c.prototype,{nameBase:"Money Flow Index"}),h().registerSeriesType("mfi",c);let d=n();return o.default})());