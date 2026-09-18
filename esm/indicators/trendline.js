/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/trendline
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var l in r)t.o(r,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var l=t.n(r);let a=e.default.SeriesRegistry;var n=t.n(a);let{sma:s}=n().seriesTypes;class o extends s{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let l=e.xData,a=e.yData,n=[],s=[],o=[],i=[],p=t.index,d=0,u=0,h=0,f=0,g=0;for(let e=0;e<l.length;e++)(0===e||l[e]!==l[e-1])&&g++,n.push(g);for(let e=0;e<n.length;e++)h+=n[e],f+=(0,r.isArray)(a[e])?a[e][p]:a[e];let y=h/n.length,c=f/a.length;for(let e=0;e<n.length;e++){let t=(0,r.isArray)(a[e])?a[e][p]:a[e];d+=(n[e]-y)*(t-c),u+=Math.pow(n[e]-y,2)}for(let e=0;e<n.length;e++){if(l[e]===o[o.length-1])continue;let t=l[e],r=c+d/u*(n[e]-y);s.push([t,r]),o.push(t),i.push(r)}return{xData:o,yData:i,values:s}}}o.defaultOptions=(0,r.merge)(s.defaultOptions,{params:{period:void 0,index:3}}),(0,r.extend)(o.prototype,{nameBase:"Trendline",nameComponents:void 0}),n().registerSeriesType("trendline",o);let i=l();export{i as default};