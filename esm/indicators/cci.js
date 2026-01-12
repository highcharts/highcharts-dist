/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/cci
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:n}=l().seriesTypes,{isArray:u,merge:o}=a();class i extends n{getValues(e,t){let r=t.period,a=e.xData,s=e.yData,l=s?s.length:0,n=[],o=[],i=[],p=[],c,d,f=[],h,g=1,y,v,m,x;if(!(a.length<=r)&&u(s[0])&&4===s[0].length){for(;g<r;)d=s[g-1],n.push((d[1]+d[2]+d[3])/3),g++;for(x=r;x<=l;x++)v=((d=s[x-1])[1]+d[2]+d[3])/3,h=n.push(v),y=(f=n.slice(h-r)).reduce(function(e,t){return e+t},0)/r,m=function(e,t){let r=e.length,a=0,s;for(s=0;s<r;s++)a+=Math.abs(t-e[s]);return a}(f,y)/r,c=(v-y)/(.015*m),o.push([a[x-1],c]),i.push(a[x-1]),p.push(c);return{values:o,xData:i,yData:p}}}}i.defaultOptions=o(n.defaultOptions,{params:{index:void 0}}),l().registerSeriesType("cci",i);let p=a();export{p as default};