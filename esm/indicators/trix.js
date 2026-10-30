/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/tema
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import"./indicators.js";import*as t from"./tema.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var l=r.n(s);let a=t.default.Series.types.tema;var o=r.n(a);let i=e.default.SeriesRegistry;var n=r.n(i);class p extends o(){getTemaPoint(e,t,r,l){if(l>t)return[e[l-3],0!==r.prevLevel3?(0,s.correctFloat)(r.level3-r.prevLevel3)/r.prevLevel3*100:null]}}p.defaultOptions=(0,s.merge)(o().defaultOptions),n().registerSeriesType("trix",p);let c=l();export{c as default};