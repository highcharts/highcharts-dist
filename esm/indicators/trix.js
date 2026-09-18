/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var l in r)t.o(r,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var l=t.n(r);let a=e.default.SeriesRegistry;var s=t.n(a);let{tema:o}=s().seriesTypes;class i extends o{getTemaPoint(e,t,l,a){if(a>t)return[e[a-3],0!==l.prevLevel3?(0,r.correctFloat)(l.level3-l.prevLevel3)/l.prevLevel3*100:null]}}i.defaultOptions=(0,r.merge)(o.defaultOptions),s().registerSeriesType("trix",i);let n=l();export{n as default};