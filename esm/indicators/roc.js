/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var l=t[a++],s=t[a++];r.o(e,l)?0===s&&a++:0===s?Object.defineProperty(e,l,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,l,{enumerable:!0,get:s})}else for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let l=e.default.SeriesRegistry;var s=r.n(l);let{sma:n}=s().seriesTypes;class o extends n{getValues(e,r){let a=r.period,l=e.xData,s=e.yData,n=s?s.length:0,o=[],i=[],u=[],p,d=-1,f;if(!(l.length<=a)){for((0,t.isArray)(s[0])&&(d=r.index),p=a;p<n;p++)f=function(e,r,t,a,l){let s,n;return n=l<0?(s=r[t-a])?(r[t]-s)/s*100:null:(s=r[t-a][l])?(r[t][l]-s)/s*100:null,[e[t],n]}(l,s,p,a,d),o.push(f),i.push(f[0]),u.push(f[1]);return{values:o,xData:i,yData:u}}}}o.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{index:3,period:9}}),(0,t.extend)(o.prototype,{nameBase:"Rate of Change"}),s().registerSeriesType("roc",o);let i=a();export{i as default};