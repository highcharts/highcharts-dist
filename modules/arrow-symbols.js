!/**
 * Highcharts JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/arrow-symbols",["highcharts/highcharts"],function(e){return t(e)}):"object"==typeof exports?exports["highcharts/modules/arrow-symbols"]=t(e._Highcharts):e.Highcharts=t(e.Highcharts)}("u"<typeof window?this:window,e=>(()=>{"use strict";let t;var r={944(t){t.exports=e}};let o={};function n(e){let t=o[e];if(void 0!==t)return t.exports;let l=o[e]={exports:{}};return r[e](l,l.exports,n),l.exports}n.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let l={};n.d(l,{default:()=>h});var i=n(944),a=n.n(i);function s(e,t,r,o){return[["M",e,t+o/2],["L",e+r,t],["L",e,t+o/2],["L",e+r,t+o]]}function f(e,t,r,o){return[["M",e+r,t],["L",e,t+o/2],["L",e+r,t+o],["Z"]]}function u(e,t,r,o){return f(e,t,r/2,o)}(t=a().SVGRenderer.prototype.symbols).arrow=s,t["arrow-filled"]=f,t["arrow-filled-half"]=u,t["arrow-half"]=function(e,t,r,o){return s(e,t,r/2,o)},t["triangle-left"]=f,t["triangle-left-half"]=u;let h=a();return l.default})());