/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var n=t.n(s);let{sma:u}=n().seriesTypes;function o(e,t,r,a,s){let n=t[r-1][s]-t[r-a-1][s];return[e[r-1],n]}class l extends u{getValues(e,t){let a,s,n=t.period,u=t.index,l=e.xData,p=e.yData,i=p?p.length:0,d=[],m=[],f=[];if(!(l.length<=n)&&(0,r.isArray)(p[0])){for(a=n+1;a<i;a++)s=o(l,p,a,n,u),d.push(s),m.push(s[0]),f.push(s[1]);return s=o(l,p,a,n,u),d.push(s),m.push(s[0]),f.push(s[1]),{values:d,xData:m,yData:f}}}}l.defaultOptions=(0,r.merge)(u.defaultOptions,{params:{index:3}}),(0,r.extend)(l.prototype,{nameBase:"Momentum"}),n().registerSeriesType("momentum",l);let p=a();export{p as default};