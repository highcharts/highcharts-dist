/**
 * Highstock JS v13.0.2 (2026-08-27)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var s=r[a++],n=r[a++];t.o(e,s)?0===n&&a++:0===n?Object.defineProperty(e,s,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:n})}else for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var n=t.n(s);let{sma:l}=n().seriesTypes;function o(e,t,r,a,s){let n=t[r-1][s]-t[r-a-1][s];return[e[r-1],n]}class u extends l{getValues(e,t){let a,s,n=t.period,l=t.index,u=e.xData,p=e.yData,i=p?p.length:0,d=[],m=[],f=[];if(!(u.length<=n)&&(0,r.isArray)(p[0])){for(a=n+1;a<i;a++)s=o(u,p,a,n,l),d.push(s),m.push(s[0]),f.push(s[1]);return s=o(u,p,a,n,l),d.push(s),m.push(s[0]),f.push(s[1]),{values:d,xData:m,yData:f}}}}u.defaultOptions=(0,r.merge)(l.defaultOptions,{params:{index:3}}),(0,r.extend)(u.prototype,{nameBase:"Momentum"}),n().registerSeriesType("momentum",u);let p=a();export{p as default};