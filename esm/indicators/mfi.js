/**
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
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let o=t.default.Series.types.sma;var i=r.n(o);let u=e.default.SeriesRegistry;var l=r.n(u);function n(e){return e.reduce(function(e,t){return e+t})}function d(e){return(e[1]+e[2]+e[3])/3}class p extends i(){getValues(e,t){let r=t.period,a=e.xData,o=e.yData,i=o?o.length:0,u=t.decimals,l=e.chart.get(t.volumeSeriesID),p=l?.getColumn("y")||[],f=[],m=[],c=[],h=[],v=[],y,g,x,D,S,j,I=!1,O=1;if(!l)return void(0,s.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(a.length<=r)&&(0,s.isArray)(o[0])&&4===o[0].length&&p){for(y=d(o[O]);O<r+1;)g=y,I=(y=d(o[O]))>=g,x=y*p[O],h.push(I?x:0),v.push(I?0:x),O++;for(j=O-1;j<i;j++){var b;j>O-1&&(h.shift(),v.shift(),g=y,I=(y=d(o[j]))>g,x=y*p[j],h.push(I?x:0),v.push(I?0:x)),D=n(v),b=100-100/(1+n(h)/D),S=parseFloat(b.toFixed(u)),f.push([a[j],S]),m.push(a[j]),c.push(S)}return{values:f,xData:m,yData:c}}}}p.defaultOptions=(0,s.merge)(i().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,s.extend)(p.prototype,{nameBase:"Money Flow Index"}),l().registerSeriesType("mfi",p);let f=a();export{f as default};