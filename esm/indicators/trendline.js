/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/trendline
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let l=e.default.SeriesRegistry;var n=t.n(l);let{sma:s}=n().seriesTypes,{extend:o,merge:i,isArray:p}=a();class d extends s{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,a=e.yData,l=[],n=[],s=[],o=[],i=t.index,d=0,u=0,h=0,f=0,g=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&g++,l.push(g);for(let e=0;e<l.length;e++)h+=l[e],f+=p(a[e])?a[e][i]:a[e];let c=h/l.length,y=f/a.length;for(let e=0;e<l.length;e++){let t=p(a[e])?a[e][i]:a[e];d+=(l[e]-c)*(t-y),u+=Math.pow(l[e]-c,2)}for(let e=0;e<l.length;e++){if(r[e]===s[s.length-1])continue;let t=r[e],a=y+d/u*(l[e]-c);n.push([t,a]),s.push(t),o.push(a)}return{xData:s,yData:o,values:n}}}d.defaultOptions=i(s.defaultOptions,{params:{period:void 0,index:3}}),o(d.prototype,{nameBase:"Trendline",nameComponents:void 0}),n().registerSeriesType("trendline",d);let u=a();export{u as default};