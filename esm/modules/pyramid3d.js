/**
 * Highcharts JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var l=t[a++],s=t[a++];r.o(e,l)?0===s&&a++:0===s?Object.defineProperty(e,l,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,l,{enumerable:!0,get:s})}else for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let l=e.default.SeriesRegistry;var s=r.n(l);let{funnel3d:d}=s().seriesTypes;class i extends d{}i.defaultOptions=(0,t.merge)(d.defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),s().registerSeriesType("pyramid3d",i);let n=a();export{n as default};