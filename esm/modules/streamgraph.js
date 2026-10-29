/**
 * Highcharts JS v13.1.1-modified (2026-10-29)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.Series.types.areaspline;var l=t.n(s);let d=e.default.SeriesRegistry;var i=t.n(d);class n extends l(){streamStacker(e,t,a){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[a]=Math.max.apply(0,e))}}n.defaultOptions=(0,a.merge)(l().defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),(0,a.addEvent)(n,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),(0,a.extend)(n.prototype,{negStacks:!1}),i().registerSeriesType("streamgraph",n);let o=r();export{o as default};