/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/streamgraph
 * @requires highcharts
 *
 * Streamgraph module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{areaspline:d}=l().seriesTypes;class i extends d{streamStacker(e,t,a){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[a]=Math.max.apply(0,e))}}i.defaultOptions=(0,a.merge)(d.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),(0,a.addEvent)(i,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),(0,a.extend)(i.prototype,{negStacks:!1}),l().registerSeriesType("streamgraph",i);let n=r();export{n as default};