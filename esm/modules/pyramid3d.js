/**
 * Highcharts JS v13.1.1-modified (2026-10-30)
 * @module highcharts/modules/pyramid3d
 * @requires highcharts
 * @requires highcharts/highcharts-3d
 * @requires highcharts/modules/cylinder
 * @requires highcharts/modules/funnel3d
 *
 * Highcharts 3D funnel module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../highcharts-3d.js";import"./cylinder.js";import*as r from"./funnel3d.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let s=e.default;var a=t.n(s);let l=r.default.Series.types.funnel3d;var d=t.n(l);let i=e.default.SeriesRegistry;var n=t.n(i);class o extends d(){}o.defaultOptions=(0,s.merge)(d().defaultOptions,{center:["50%","50%"],reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),n().registerSeriesType("pyramid3d",o);let c=a();export{c as default};