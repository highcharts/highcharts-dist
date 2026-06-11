/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var l=r.n(t);let a=e.default.SeriesRegistry;var s=r.n(a);let{tema:o}=s().seriesTypes;class i extends o{getTemaPoint(e,r,l,a){if(a>r)return[e[a-3],0!==l.prevLevel3?(0,t.correctFloat)(l.level3-l.prevLevel3)/l.prevLevel3*100:null]}}i.defaultOptions=(0,t.merge)(o.defaultOptions),s().registerSeriesType("trix",i);let n=l();export{n as default};