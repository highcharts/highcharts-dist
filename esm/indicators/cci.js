/**
 * Highstock JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var s=t[a++],l=t[a++];r.o(e,s)?0===l&&a++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let s=e.default.SeriesRegistry;var l=r.n(s);let{sma:n}=l().seriesTypes;class i extends n{getValues(e,r){let a=r.period,s=e.xData,l=e.yData,n=l?l.length:0,i=[],o=[],u=[],f=[],p,c,d=[],h,y=1,g,b,m,v;if(!(s.length<=a)&&(0,t.isArray)(l[0])&&4===l[0].length){for(;y<a;)c=l[y-1],i.push((c[1]+c[2]+c[3])/3),y++;for(v=a;v<=n;v++)b=((c=l[v-1])[1]+c[2]+c[3])/3,h=i.push(b),g=(d=i.slice(h-a)).reduce(function(e,r){return e+r},0)/a,m=function(e,r){let t=e.length,a=0,s;for(s=0;s<t;s++)a+=Math.abs(r-e[s]);return a}(d,g)/a,p=(b-g)/(.015*m),o.push([s[v-1],p]),u.push(s[v-1]),f.push(p);return{values:o,xData:u,yData:f}}}}i.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{index:void 0}}),l().registerSeriesType("cci",i);let o=a();export{o as default};