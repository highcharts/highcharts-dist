/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/williams-r
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=r.n(a);let l=function(e,t,r){return e.reduce((e,a)=>[Math.min(e[0],a[t]),Math.max(e[1],a[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])},i=t.default.Series.types.sma;var o=r.n(i);let n=e.default.SeriesRegistry;var u=r.n(n);class d extends o(){getValues(e,t){let r,s,i,o,n,u=t.period,d=e.xData,p=e.yData,m=p?p.length:0,c=[],f=[],h=[];if(!(d.length<u)&&(0,a.isArray)(p[0])&&4===p[0].length){for(n=u-1;n<m;n++)o=(r=l(p.slice(n-u+1,n+1),2,1))[0],s=-(((i=r[1])-p[n][3])/(i-o)*100),d[n]&&(c.push([d[n],s]),f.push(d[n]),h.push(s));return{values:c,xData:f,yData:h}}}}d.defaultOptions=(0,a.merge)(o().defaultOptions,{params:{index:void 0,period:14}}),(0,a.extend)(d.prototype,{nameBase:"Williams %R"}),u().registerSeriesType("williamsr",d);let p=s();export{p as default};