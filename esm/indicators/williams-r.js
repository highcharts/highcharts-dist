/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=function(e,t,r){return e.reduce((e,a)=>[Math.min(e[0],a[t]),Math.max(e[1],a[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])},l=e.default.SeriesRegistry;var i=t.n(l);let{sma:n}=i().seriesTypes;class o extends n{getValues(e,t){let a,l,i,n,o,u=t.period,p=e.xData,d=e.yData,m=d?d.length:0,f=[],h=[],c=[];if(!(p.length<u)&&(0,r.isArray)(d[0])&&4===d[0].length){for(o=u-1;o<m;o++)n=(a=s(d.slice(o-u+1,o+1),2,1))[0],l=-(((i=a[1])-d[o][3])/(i-n)*100),p[o]&&(f.push([p[o],l]),h.push(p[o]),c.push(l));return{values:f,xData:h,yData:c}}}}o.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:void 0,period:14}}),(0,r.extend)(o.prototype,{nameBase:"Williams %R"}),i().registerSeriesType("williamsr",o);let u=a();export{u as default};