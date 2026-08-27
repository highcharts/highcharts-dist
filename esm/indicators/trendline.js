/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var l=r[a++],n=r[a++];t.o(e,l)?0===n&&a++:0===n?Object.defineProperty(e,l,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,l,{enumerable:!0,get:n})}else for(var l in r)t.o(r,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let l=e.default.SeriesRegistry;var n=t.n(l);let{sma:s}=n().seriesTypes;class o extends s{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let a=e.xData,l=e.yData,n=[],s=[],o=[],i=[],p=t.index,d=0,u=0,f=0,h=0,g=0;for(let e=0;e<a.length;e++)(0===e||a[e]!==a[e-1])&&g++,n.push(g);for(let e=0;e<n.length;e++)f+=n[e],h+=(0,r.isArray)(l[e])?l[e][p]:l[e];let y=f/n.length,c=h/l.length;for(let e=0;e<n.length;e++){let t=(0,r.isArray)(l[e])?l[e][p]:l[e];d+=(n[e]-y)*(t-c),u+=Math.pow(n[e]-y,2)}for(let e=0;e<n.length;e++){if(a[e]===o[o.length-1])continue;let t=a[e],r=c+d/u*(n[e]-y);s.push([t,r]),o.push(t),i.push(r)}return{xData:o,yData:i,values:s}}}o.defaultOptions=(0,r.merge)(s.defaultOptions,{params:{period:void 0,index:3}}),(0,r.extend)(o.prototype,{nameBase:"Trendline",nameComponents:void 0}),n().registerSeriesType("trendline",o);let i=a();export{i as default};