/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/cci
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:n}=l().seriesTypes;class u extends n{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,n=l?l.length:0,u=[],i=[],o=[],p=[],c,d,f=[],h,g=1,y,v,m,x;if(!(s.length<=a)&&(0,r.isArray)(l[0])&&4===l[0].length){for(;g<a;)d=l[g-1],u.push((d[1]+d[2]+d[3])/3),g++;for(x=a;x<=n;x++)v=((d=l[x-1])[1]+d[2]+d[3])/3,h=u.push(v),y=(f=u.slice(h-a)).reduce(function(e,t){return e+t},0)/a,m=function(e,t){let r=e.length,a=0,s;for(s=0;s<r;s++)a+=Math.abs(t-e[s]);return a}(f,y)/a,c=(v-y)/(.015*m),i.push([s[x-1],c]),o.push(s[x-1]),p.push(c);return{values:i,xData:o,yData:p}}}}u.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:void 0}}),l().registerSeriesType("cci",u);let i=a();export{i as default};