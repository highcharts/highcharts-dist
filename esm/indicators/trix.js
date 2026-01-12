/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafal Sebestjanski
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var l=r.n(t);let a=e.default.SeriesRegistry;var s=r.n(a);let{tema:i}=s().seriesTypes,{correctFloat:o,merge:n}=l();class p extends i{getTemaPoint(e,r,t,l){if(l>r)return[e[l-3],0!==t.prevLevel3?o(t.level3-t.prevLevel3)/t.prevLevel3*100:null]}}p.defaultOptions=n(i.defaultOptions),s().registerSeriesType("trix",p);let v=l();export{v as default};