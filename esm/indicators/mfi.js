/**
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var s=t[a++],o=t[a++];r.o(e,s)?0===o&&a++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var o=r.n(s);let{sma:l}=o().seriesTypes;function n(e){return e.reduce(function(e,r){return e+r})}function i(e){return(e[1]+e[2]+e[3])/3}class u extends l{getValues(e,r){let a=r.period,s=e.xData,o=e.yData,l=o?o.length:0,u=r.decimals,f=e.chart.get(r.volumeSeriesID),d=f?.getColumn("y")||[],p=[],h=[],m=[],c=[],y=[],v,g,x,D,b,O,S=!1,j=1;if(!f)return void(0,t.error)("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(s.length<=a)&&(0,t.isArray)(o[0])&&4===o[0].length&&d){for(v=i(o[j]);j<a+1;)g=v,S=(v=i(o[j]))>=g,x=v*d[j],c.push(S?x:0),y.push(S?0:x),j++;for(O=j-1;O<l;O++){var I;O>j-1&&(c.shift(),y.shift(),g=v,S=(v=i(o[O]))>g,x=v*d[O],c.push(S?x:0),y.push(S?0:x)),D=n(y),I=100-100/(1+n(c)/D),b=parseFloat(I.toFixed(u)),p.push([s[O],b]),h.push(s[O]),m.push(b)}return{values:p,xData:h,yData:m}}}}u.defaultOptions=(0,t.merge)(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),(0,t.extend)(u.prototype,{nameBase:"Money Flow Index"}),o().registerSeriesType("mfi",u);let f=a();export{f as default};