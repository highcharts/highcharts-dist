/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=function(e,r,t){return e.reduce((e,a)=>[Math.min(e[0],a[r]),Math.max(e[1],a[t])],[Number.MAX_VALUE,-Number.MAX_VALUE])},l=e.default.SeriesRegistry;var i=r.n(l);let{sma:n}=i().seriesTypes;class o extends n{getValues(e,r){let a,l,i,n,o,u=r.period,p=e.xData,d=e.yData,m=d?d.length:0,f=[],h=[],c=[];if(!(p.length<u)&&(0,t.isArray)(d[0])&&4===d[0].length){for(o=u-1;o<m;o++)n=(a=s(d.slice(o-u+1,o+1),2,1))[0],l=-(((i=a[1])-d[o][3])/(i-n)*100),p[o]&&(f.push([p[o],l]),h.push(p[o]),c.push(l));return{values:f,xData:h,yData:c}}}}o.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{index:void 0,period:14}}),(0,t.extend)(o.prototype,{nameBase:"Williams %R"}),i().registerSeriesType("williamsr",o);let u=a();export{u as default};