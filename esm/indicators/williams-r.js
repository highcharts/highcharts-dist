/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var l=t[a++],s=t[a++];r.o(e,l)?0===s&&a++:0===s?Object.defineProperty(e,l,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,l,{enumerable:!0,get:s})}else for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let l=function(e,r,t){return e.reduce((e,a)=>[Math.min(e[0],a[r]),Math.max(e[1],a[t])],[Number.MAX_VALUE,-Number.MAX_VALUE])},s=e.default.SeriesRegistry;var i=r.n(s);let{sma:n}=i().seriesTypes;class o extends n{getValues(e,r){let a,s,i,n,o,u=r.period,p=e.xData,d=e.yData,f=d?d.length:0,m=[],y=[],h=[];if(!(p.length<u)&&(0,t.isArray)(d[0])&&4===d[0].length){for(o=u-1;o<f;o++)n=(a=l(d.slice(o-u+1,o+1),2,1))[0],s=-(((i=a[1])-d[o][3])/(i-n)*100),p[o]&&(m.push([p[o],s]),y.push(p[o]),h.push(s));return{values:m,xData:y,yData:h}}}}o.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{index:void 0,period:14}}),(0,t.extend)(o.prototype,{nameBase:"Williams %R"}),i().registerSeriesType("williamsr",o);let u=a();export{u as default};