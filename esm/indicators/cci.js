/**
 * Highstock JS v13.1.1-modified (2026-10-28)
 * @module highcharts/indicators/cci
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
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let l=t.default.Series.types.sma;var o=r.n(l);let i=e.default.SeriesRegistry;var n=r.n(i);class u extends o(){getValues(e,t){let r=t.period,a=e.xData,l=e.yData,o=l?l.length:0,i=[],n=[],u=[],c=[],p,d,f=[],h,g=1,m,y,v,j;if(!(a.length<=r)&&(0,s.isArray)(l[0])&&4===l[0].length){for(;g<r;)d=l[g-1],i.push((d[1]+d[2]+d[3])/3),g++;for(j=r;j<=o;j++)y=((d=l[j-1])[1]+d[2]+d[3])/3,h=i.push(y),m=(f=i.slice(h-r)).reduce(function(e,t){return e+t},0)/r,v=function(e,t){let r=e.length,s=0,a;for(a=0;a<r;a++)s+=Math.abs(t-e[a]);return s}(f,m)/r,p=(y-m)/(.015*v),n.push([a[j-1],p]),u.push(a[j-1]),c.push(p);return{values:n,xData:u,yData:c}}}}u.defaultOptions=(0,s.merge)(o().defaultOptions,{params:{index:void 0}}),n().registerSeriesType("cci",u);let c=a();export{c as default};