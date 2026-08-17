/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/atr
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var s=r[a++],l=r[a++];t.o(e,s)?0===l&&a++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:n}=l().seriesTypes;function o(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class u extends n{getValues(e,t){let a=t.period,s=e.xData,l=e.yData,n=l?l.length:0,u=[[s[0],l[0]]],i=[],p=[],d=[],h,f,y=0,c=1,g=0;if(!(s.length<=a)&&(0,r.isArray)(l[0])&&4===l[0].length){for(f=1;f<=n;f++){var v,b,m,O,x;!function(e,t,r,a){let s=t[a],l=r[a];e.push([s,l])}(u,s,l,f),a<c?(y=(v=s,b=l,m=f,O=a,x=y,h=[v[m-1],(x*(O-1)+o(b[m-1],b[m-2]))/O])[1],i.push(h),p.push(h[0]),d.push(h[1])):(a===c?(y=g/(f-1),i.push([s[f-1],y]),p.push(s[f-1]),d.push(y)):g+=o(l[f-1],l[f-2]),c++)}return{values:i,xData:p,yData:d}}}}u.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:void 0}}),l().registerSeriesType("atr",u);let i=a();export{i as default};