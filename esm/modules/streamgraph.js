/**
 * Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/streamgraph
 * @requires highcharts
 *
 * Streamgraph module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var n=t.n(o);let{doc:s,win:c}=a();function i(e){return l(e)&&"number"==typeof e.nodeType}function l(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{areaspline:p}=n().seriesTypes;class f extends p{streamStacker(e,t,r){e[0]-=t.total/2,e[1]-=t.total/2,this.stackedYData&&(this.stackedYData[r]=Math.max.apply(0,e))}}f.defaultOptions=function(e,...t){let r,a=[e,...t],o={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,a){if("__proto__"!==a&&"constructor"!==a){let o;!l(r,!0)||(o=r?.constructor,l(r,!0)&&!i(r)&&o?.name&&"Object"!==o.name)||i(r)?e[a]=t[a]:e[a]=n(e[a]||{},r)}}),e};!0===e&&(o=a[1],a=Array.prototype.slice.call(a,2));let s=a.length;for(r=0;r<s;r++)o=n(o,a[r]);return o}(p.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),function(e,t,r,o={}){let n="function"==typeof e&&e.prototype||e;Object.hasOwnProperty.call(n,"hcEvents")||(n.hcEvents={});let s=n.hcEvents;a().Point&&e instanceof a().Point&&e.series&&e.series.chart&&(e.series.chart.runTrackerClick=!0);let c=e.addEventListener;c&&c.call(e,t,r,!!a().supportsPassiveEvents&&{passive:void 0===o.passive?-1!==t.indexOf("touch"):o.passive,capture:!1}),s[t]||(s[t]=[]);let i={fn:r,order:"number"==typeof o.order?o.order:1/0};s[t].push(i),s[t].sort((e,t)=>e.order-t.order)}(f,"afterGetExtremes",e=>{e.dataExtremes.dataMin=-e.dataExtremes.dataMax}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(f.prototype,{negStacks:!1}),n().registerSeriesType("streamgraph",f);let u=a();export{u as default};