/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/cmo
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Lysy
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let l=t.default.Series.types.sma;var o=r.n(l);let i=e.default.SeriesRegistry;var p=r.n(i);class u extends o(){getValues(e,t){let r=t.period,a=e.xData,l=e.yData,o=l?l.length:0,i=[],p=[],u=[],n,d=t.index,h;if(a.length<r)return;(0,s.isNumber)(l[0])?h=l:(d=Math.min(d,l[0].length-1),h=l.map(e=>e[d]));let m=0,f=0,c=0,g;for(let e=r;e>0;e--)h[e]>h[e-1]?f+=h[e]-h[e-1]:h[e]<h[e-1]&&(c+=h[e-1]-h[e]);for(g=f+c>0?100*(f-c)/(f+c):0,p.push(a[r]),u.push(g),i.push([a[r],g]),n=r+1;n<o;n++)m=Math.abs(h[n-r-1]-h[n-r]),h[n]>h[n-1]?f+=h[n]-h[n-1]:h[n]<h[n-1]&&(c+=h[n-1]-h[n]),h[n-r]>h[n-r-1]?f-=m:c-=m,g=f+c>0?100*(f-c)/(f+c):0,p.push(a[n]),u.push(g),i.push([a[n],g]);return{values:i,xData:p,yData:u}}}u.defaultOptions=(0,s.merge)(o().defaultOptions,{params:{period:20,index:3}}),p().registerSeriesType("cmo",u);let n=a();export{n as default};