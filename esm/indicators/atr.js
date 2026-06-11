/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{sma:u}=l().seriesTypes;function n(e,t){return Math.max(e[1]-e[2],void 0===t?0:Math.abs(e[1]-t[3]),void 0===t?0:Math.abs(e[2]-t[3]))}class o extends u{getValues(e,t){let r=t.period,s=e.xData,l=e.yData,u=l?l.length:0,o=[[s[0],l[0]]],i=[],p=[],h=[],d,f,v=0,c=1,g=0;if(!(s.length<=r)&&(0,a.isArray)(l[0])&&4===l[0].length){for(f=1;f<=u;f++){var y,m,x,b,O;!function(e,t,a,r){let s=t[r],l=a[r];e.push([s,l])}(o,s,l,f),r<c?(v=(y=s,m=l,x=f,b=r,O=v,d=[y[x-1],(O*(b-1)+n(m[x-1],m[x-2]))/b])[1],i.push(d),p.push(d[0]),h.push(d[1])):(r===c?(v=g/(f-1),i.push([s[f-1],v]),p.push(s[f-1]),h.push(v)):g+=n(l[f-1],l[f-2]),c++)}return{values:i,xData:p,yData:h}}}}o.defaultOptions=(0,a.merge)(u.defaultOptions,{params:{index:void 0}}),l().registerSeriesType("atr",o);let i=r();export{i as default};