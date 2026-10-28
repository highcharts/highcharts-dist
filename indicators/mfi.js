!/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/mfi
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Grzegorz Blachliński
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/mfi"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function o(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a={};o.d(a,{default:()=>y});var n=o(944),h=o.n(n),u=o(80),p=o.n(u),c=o(512),l=o.n(c);function d(e){return e.reduce(function(e,t){return e+t})}function f(e){return(e[1]+e[2]+e[3])/3}class g extends p(){getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,a=t.decimals,h=e.chart.get(t.volumeSeriesID),u=h?.getColumn("y")||[],p=[],c=[],l=[],g=[],y=[],m,x,S,v,H,D,_=!1,b=1;if(!h)return void(0,n.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(s.length<=r)&&(0,n.isArray)(i[0])&&4===i[0].length&&u){for(m=f(i[b]);b<r+1;)x=m,_=(m=f(i[b]))>=x,S=m*u[b],g.push(_?S:0),y.push(_?0:S),b++;for(D=b-1;D<o;D++){var w;D>b-1&&(g.shift(),y.shift(),x=m,_=(m=f(i[D]))>x,S=m*u[D],g.push(_?S:0),y.push(_?0:S)),v=d(y),w=100-100/(1+d(g)/v),H=parseFloat(w.toFixed(a)),p.push([s[D],H]),c.push(s[D]),l.push(H)}return{values:p,xData:c,yData:l}}}}g.defaultOptions=(0,n.merge)(p().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,n.extend)(g.prototype,{nameBase:"Money Flow Index"}),l().registerSeriesType("mfi",g);let y=h();return a.default})());