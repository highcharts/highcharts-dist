/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var s=r[a++],l=r[a++];t.o(e,s)?0===l&&a++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:i}=l().seriesTypes;function n(e,t){return parseFloat(e.toFixed(t))}class o extends i{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,i=l?l.length:0,o=t.decimals,u=[],d=[],p=[],f=0,h=0,m=t.index,c=1,y,g,b,v,x,O;if(!(s.length<a)){for((0,r.isNumber)(l[0])?O=l:(m=Math.min(m,l[0].length-1),O=l.map(e=>e[m]));c<a;)(g=n(O[c]-O[c-1],o))>0?f+=g:h+=Math.abs(g),c++;for(b=n(f/(a-1),o),v=n(h/(a-1),o),x=c;x<i;x++)(g=n(O[x]-O[x-1],o))>0?(f=g,h=0):(f=0,h=Math.abs(g)),b=n((b*(a-1)+f)/a,o),y=0===(v=n((v*(a-1)+h)/a,o))?100:0===b?0:n(100-100/(1+b/v),o),u.push([s[x],y]),d.push(s[x]),p.push(y);return{values:u,xData:d,yData:p}}}}o.defaultOptions=(0,r.merge)(i.defaultOptions,{params:{decimals:4,index:3}}),l().registerSeriesType("rsi",o);let u=a();export{u as default};