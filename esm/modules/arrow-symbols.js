let r;/**
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
 */import*as e from"../highcharts.js";let t={};t.n=r=>{let e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var l in e)t.o(e,l)&&!t.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:e[l]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);let l=e.default;var o=t.n(l);function a(r,e,t,l){return[["M",r,e+l/2],["L",r+t,e],["L",r,e+l/2],["L",r+t,e+l]]}function n(r,e,t,l){return[["M",r+t,e],["L",r,e+l/2],["L",r+t,e+l],["Z"]]}function f(r,e,t,l){return n(r,e,t/2,l)}(r=o().SVGRenderer.prototype.symbols).arrow=a,r["arrow-filled"]=n,r["arrow-filled-half"]=f,r["arrow-half"]=function(r,e,t,l){return a(r,e,t/2,l)},r["triangle-left"]=n,r["triangle-left-half"]=f;let u=o();export{u as default};