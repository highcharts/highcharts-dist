/**
 * Highcharts JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{if(Array.isArray(a))for(var r=0;r<a.length;){var s=a[r++],l=a[r++];t.o(e,s)?0===l&&r++:0===l?Object.defineProperty(e,s,{enumerable:!0,value:a[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:l})}else for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var l=t.n(s);let{areaspline:d}=l().seriesTypes;class i extends d{streamStacker(e,t,a){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[a]=Math.max.apply(0,e))}}i.defaultOptions=(0,a.merge)(d.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),(0,a.addEvent)(i,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),(0,a.extend)(i.prototype,{negStacks:!1}),l().registerSeriesType("streamgraph",i);let n=r();export{n as default};