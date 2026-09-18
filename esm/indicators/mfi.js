/**
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=t.n(r);let a=e.default.SeriesRegistry;var o=t.n(a);let{sma:u}=o().seriesTypes;function i(e){return e.reduce(function(e,t){return e+t})}function l(e){return(e[1]+e[2]+e[3])/3}class n extends u{getValues(e,t){let s=t.period,a=e.xData,o=e.yData,u=o?o.length:0,n=t.decimals,d=e.chart.get(t.volumeSeriesID),p=d?.getColumn("y")||[],f=[],h=[],m=[],c=[],v=[],y,g,x,D,S,I,O=!1,b=1;if(!d)return void(0,r.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(a.length<=s)&&(0,r.isArray)(o[0])&&4===o[0].length&&p){for(y=l(o[b]);b<s+1;)g=y,O=(y=l(o[b]))>=g,x=y*p[b],c.push(O?x:0),v.push(O?0:x),b++;for(I=b-1;I<u;I++){var j;I>b-1&&(c.shift(),v.shift(),g=y,O=(y=l(o[I]))>g,x=y*p[I],c.push(O?x:0),v.push(O?0:x)),D=i(v),j=100-100/(1+i(c)/D),S=parseFloat(j.toFixed(n)),f.push([a[I],S]),h.push(a[I]),m.push(S)}return{values:f,xData:h,yData:m}}}}n.defaultOptions=(0,r.merge)(u.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,r.extend)(n.prototype,{nameBase:"Money Flow Index"}),o().registerSeriesType("mfi",n);let d=s();export{d as default};