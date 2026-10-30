/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/trendline
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
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let l=t.default.Series.types.sma;var n=r.n(l);let o=e.default.SeriesRegistry;var i=r.n(o);class d extends n(){constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,a=e.yData,l=[],n=[],o=[],i=[],d=t.index,p=0,u=0,h=0,f=0,c=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&c++,l.push(c);for(let e=0;e<l.length;e++)h+=l[e],f+=(0,s.isArray)(a[e])?a[e][d]:a[e];let g=h/l.length,m=f/a.length;for(let e=0;e<l.length;e++){let t=(0,s.isArray)(a[e])?a[e][d]:a[e];p+=(l[e]-g)*(t-m),u+=Math.pow(l[e]-g,2)}for(let e=0;e<l.length;e++){if(r[e]===o[o.length-1])continue;let t=r[e],s=m+p/u*(l[e]-g);n.push([t,s]),o.push(t),i.push(s)}return{xData:o,yData:i,values:n}}}d.defaultOptions=(0,s.merge)(n().defaultOptions,{params:{period:void 0,index:3}}),(0,s.extend)(d.prototype,{nameBase:"Trendline",nameComponents:void 0}),i().registerSeriesType("trendline",d);let p=a();export{p as default};