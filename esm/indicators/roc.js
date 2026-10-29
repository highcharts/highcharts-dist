/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/roc
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let l=t.default.Series.types.sma;var o=r.n(l);let n=e.default.SeriesRegistry;var i=r.n(n);class u extends o(){getValues(e,t){let r=t.period,s=e.xData,l=e.yData,o=l?l.length:0,n=[],i=[],u=[],p,d=-1,f;if(!(s.length<=r)){for((0,a.isArray)(l[0])&&(d=t.index),p=r;p<o;p++)f=function(e,t,r,a,s){let l,o;return o=s<0?(l=t[r-a])?(t[r]-l)/l*100:null:(l=t[r-a][s])?(t[r][s]-l)/l*100:null,[e[r],o]}(s,l,p,r,d),n.push(f),i.push(f[0]),u.push(f[1]);return{values:n,xData:i,yData:u}}}}u.defaultOptions=(0,a.merge)(o().defaultOptions,{params:{index:3,period:9}}),(0,a.extend)(u.prototype,{nameBase:"Rate of Change"}),i().registerSeriesType("roc",u);let p=s();export{p as default};