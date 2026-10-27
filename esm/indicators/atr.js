/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/atr
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let a={};a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=a.n(r);let o=t.default.Series.types.sma;var l=a.n(o);let i=e.default.SeriesRegistry;var u=a.n(i);function n(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class p extends l(){getValues(e,t){let a=t.period,s=e.xData,o=e.yData,l=o?o.length:0,i=[[s[0],o[0]]],u=[],p=[],d=[],h,f,c=0,m=1,g=0;if(!(s.length<=a)&&(0,r.isArray)(o[0])&&4===o[0].length){for(f=1;f<=l;f++){var v,y,x,b,j;!function(e,t,a,r){let s=t[r],o=a[r];e.push([s,o])}(i,s,o,f),a<m?(c=(v=s,y=o,x=f,b=a,j=c,h=[v[x-1],(j*(b-1)+n(y[x-1],y[x-2]))/b])[1],u.push(h),p.push(h[0]),d.push(h[1])):(a===m?(c=g/(f-1),u.push([s[f-1],c]),p.push(s[f-1]),d.push(c)):g+=n(o[f-1],o[f-2]),m++)}return{values:u,xData:p,yData:d}}}}p.defaultOptions=(0,r.merge)(l().defaultOptions,{params:{index:void 0}}),u().registerSeriesType("atr",p);let d=s();export{d as default};