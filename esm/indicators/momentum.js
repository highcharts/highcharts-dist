/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var n=t.n(s);let{sma:l}=n().seriesTypes;function u(e,t,r,a,s){let n=t[r-1][s]-t[r-a-1][s];return[e[r-1],n]}class o extends l{getValues(e,t){let a,s,n=t.period,l=t.index,o=e.xData,p=e.yData,i=p?p.length:0,d=[],m=[],f=[];if(!(o.length<=n)&&(0,r.isArray)(p[0])){for(a=n+1;a<i;a++)s=u(o,p,a,n,l),d.push(s),m.push(s[0]),f.push(s[1]);return s=u(o,p,a,n,l),d.push(s),m.push(s[0]),f.push(s[1]),{values:d,xData:m,yData:f}}}}o.defaultOptions=(0,r.merge)(l.defaultOptions,{params:{index:3}}),(0,r.extend)(o.prototype,{nameBase:"Momentum"}),n().registerSeriesType("momentum",o);let p=a();export{p as default};