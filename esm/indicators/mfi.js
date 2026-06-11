/**
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
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var s=r.n(t);let a=e.default.SeriesRegistry;var o=r.n(a);let{sma:u}=o().seriesTypes;function i(e){return e.reduce(function(e,r){return e+r})}function n(e){return(e[1]+e[2]+e[3])/3}class l extends u{getValues(e,r){let s=r.period,a=e.xData,o=e.yData,u=o?o.length:0,l=r.decimals,d=e.chart.get(r.volumeSeriesID),p=d?.getColumn("y")||[],f=[],h=[],m=[],c=[],v=[],y,g,x,D,S,I,O=!1,b=1;if(!d)return void(0,t.error)("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(a.length<=s)&&(0,t.isArray)(o[0])&&4===o[0].length&&p){for(y=n(o[b]);b<s+1;)g=y,O=(y=n(o[b]))>=g,x=y*p[b],c.push(O?x:0),v.push(O?0:x),b++;for(I=b-1;I<u;I++){var j;I>b-1&&(c.shift(),v.shift(),g=y,O=(y=n(o[I]))>g,x=y*p[I],c.push(O?x:0),v.push(O?0:x)),D=i(v),j=100-100/(1+i(c)/D),S=parseFloat(j.toFixed(l)),f.push([a[I],S]),h.push(a[I]),m.push(S)}return{values:f,xData:h,yData:m}}}}l.defaultOptions=(0,t.merge)(u.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,t.extend)(l.prototype,{nameBase:"Money Flow Index"}),o().registerSeriesType("mfi",l);let d=s();export{d as default};