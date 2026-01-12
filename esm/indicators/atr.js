/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/atr
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:u}=l().seriesTypes,{isArray:n,merge:o}=r();function i(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class p extends u{getValues(e,t){let a=t.period,r=e.xData,s=e.yData,l=s?s.length:0,u=[[r[0],s[0]]],o=[],p=[],h=[],d,f,v=0,c=1,g=0;if(!(r.length<=a)&&n(s[0])&&4===s[0].length){for(f=1;f<=l;f++){var y,m,x,b,O;!function(e,t,a,r){let s=t[r],l=a[r];e.push([s,l])}(u,r,s,f),a<c?(v=(y=r,m=s,x=f,b=a,O=v,d=[y[x-1],(O*(b-1)+i(m[x-1],m[x-2]))/b])[1],o.push(d),p.push(d[0]),h.push(d[1])):(a===c?(v=g/(f-1),o.push([r[f-1],v]),p.push(r[f-1]),h.push(v)):g+=i(s[f-1],s[f-2]),c++)}return{values:o,xData:p,yData:h}}}}p.defaultOptions=o(u.defaultOptions,{params:{index:void 0}}),l().registerSeriesType("atr",p);let h=r();export{h as default};