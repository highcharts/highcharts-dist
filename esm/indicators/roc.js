/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:n}=l().seriesTypes;class o extends n{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,n=l?l.length:0,o=[],u=[],i=[],p,d=-1,f;if(!(s.length<=a)){for((0,r.isArray)(l[0])&&(d=t.index),p=a;p<n;p++)f=function(e,t,r,a,s){let l,n;return n=s<0?(l=t[r-a])?(t[r]-l)/l*100:null:(l=t[r-a][s])?(t[r][s]-l)/l*100:null,[e[r],n]}(s,l,p,a,d),o.push(f),u.push(f[0]),i.push(f[1]);return{values:o,xData:u,yData:i}}}}o.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:3,period:9}}),(0,r.extend)(o.prototype,{nameBase:"Rate of Change"}),l().registerSeriesType("roc",o);let u=a();export{u as default};