/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:i}=l().seriesTypes;function n(e,t){return parseFloat(e.toFixed(t))}class o extends i{getValues(e,t){let r=t.period,s=e.xData,l=e.yData,i=l?l.length:0,o=t.decimals,u=[],d=[],p=[],f=0,h=0,m=t.index,c=1,g,y,x,b,v,O;if(!(s.length<r)){for((0,a.isNumber)(l[0])?O=l:(m=Math.min(m,l[0].length-1),O=l.map(e=>e[m]));c<r;)(y=n(O[c]-O[c-1],o))>0?f+=y:h+=Math.abs(y),c++;for(x=n(f/(r-1),o),b=n(h/(r-1),o),v=c;v<i;v++)(y=n(O[v]-O[v-1],o))>0?(f=y,h=0):(f=0,h=Math.abs(y)),x=n((x*(r-1)+f)/r,o),g=0===(b=n((b*(r-1)+h)/r,o))?100:0===x?0:n(100-100/(1+x/b),o),u.push([s[v],g]),d.push(s[v]),p.push(g);return{values:u,xData:d,yData:p}}}}o.defaultOptions=(0,a.merge)(i.defaultOptions,{params:{decimals:4,index:3}}),l().registerSeriesType("rsi",o);let u=r();export{u as default};