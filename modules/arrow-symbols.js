!/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/arrow-symbols
 * @requires highcharts
 *
 * Arrow Symbols
 *
 * (c) 2017-2026 Highsoft AS
 * Author: Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(r._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/arrow-symbols",["highcharts/highcharts"],function(r){return e(r)}):"object"==typeof exports?exports["highcharts/modules/arrow-symbols"]=e(r._Highcharts):r.Highcharts=e(r.Highcharts)}("u"<typeof window?this:window,r=>(()=>{"use strict";let e;var t={944:e=>{e.exports=r}},o={};function n(r){var e=o[r];if(void 0!==e)return e.exports;var a=o[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);var a={};n.d(a,{default:()=>h});var i=n(944),s=n.n(i);function f(r,e,t,o){return[["M",r,e+o/2],["L",r+t,e],["L",r,e+o/2],["L",r+t,e+o]]}function u(r,e,t,o){return[["M",r+t,e],["L",r,e+o/2],["L",r+t,e+o],["Z"]]}function l(r,e,t,o){return u(r,e,t/2,o)}(e=s().SVGRenderer.prototype.symbols).arrow=f,e["arrow-filled"]=u,e["arrow-filled-half"]=l,e["arrow-half"]=function(r,e,t,o){return f(r,e,t/2,o)},e["triangle-left"]=u,e["triangle-left-half"]=l;let h=s();return a.default})());