let r;/**
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
 */import*as e from"../highcharts.js";var t={};t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);let o=e.default;var a=t.n(o);function l(r,e,t,o){return[["M",r,e+o/2],["L",r+t,e],["L",r,e+o/2],["L",r+t,e+o]]}function n(r,e,t,o){return[["M",r+t,e],["L",r,e+o/2],["L",r+t,e+o],["Z"]]}function f(r,e,t,o){return n(r,e,t/2,o)}(r=a().SVGRenderer.prototype.symbols).arrow=l,r["arrow-filled"]=n,r["arrow-filled-half"]=f,r["arrow-half"]=function(r,e,t,o){return l(r,e,t/2,o)},r["triangle-left"]=n,r["triangle-left-half"]=f;let u=a();export{u as default};