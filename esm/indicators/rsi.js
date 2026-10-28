/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/rsi
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let a={};a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=a.n(r);let l=t.default.Series.types.sma;var i=a.n(l);let o=e.default.SeriesRegistry;var n=a.n(o);function d(e,t){return parseFloat(e.toFixed(t))}class u extends i(){getValues(e,t){let a=t.period,s=e.xData,l=e.yData,i=l?l.length:0,o=t.decimals,n=[],u=[],p=[],f=0,m=0,c=t.index,h=1,g,y,x,b,j,v;if(!(s.length<a)){for((0,r.isNumber)(l[0])?v=l:(c=Math.min(c,l[0].length-1),v=l.map(e=>e[c]));h<a;)(y=d(v[h]-v[h-1],o))>0?f+=y:m+=Math.abs(y),h++;for(x=d(f/(a-1),o),b=d(m/(a-1),o),j=h;j<i;j++)(y=d(v[j]-v[j-1],o))>0?(f=y,m=0):(f=0,m=Math.abs(y)),x=d((x*(a-1)+f)/a,o),g=0===(b=d((b*(a-1)+m)/a,o))?100:0===x?0:d(100-100/(1+x/b),o),n.push([s[j],g]),u.push(s[j]),p.push(g);return{values:n,xData:u,yData:p}}}}u.defaultOptions=(0,r.merge)(i().defaultOptions,{params:{decimals:4,index:3}}),n().registerSeriesType("rsi",u);let p=s();export{p as default};