!/**
 * Highcharts JS v13.0.0-beta.0 (2026-05-19)
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
 */function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(r._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/arrow-symbols",["highcharts/highcharts"],function(r){return t(r)}):"object"==typeof exports?exports["highcharts/modules/arrow-symbols"]=t(r._Highcharts):r.Highcharts=t(r.Highcharts)}("u"<typeof window?this:window,function(r){return function(){"use strict";var t,e={944:function(t){t.exports=r}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var u=n[r]={exports:{}};return e[r](u,u.exports,o),u.exports}o.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(t,{a:t}),t},o.d=function(r,t){for(var e in t)o.o(t,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},o.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)};var u={};o.d(u,{default:function(){return h}});var i=o(944),f=o.n(i);function a(r,t,e,n){return[["M",r,t+n/2],["L",r+e,t],["L",r,t+n/2],["L",r+e,t+n]]}function c(r,t,e,n){return[["M",r+e,t],["L",r,t+n/2],["L",r+e,t+n],["Z"]]}function s(r,t,e,n){return c(r,t,e/2,n)}(t=f().SVGRenderer.prototype.symbols).arrow=a,t["arrow-filled"]=c,t["arrow-filled-half"]=s,t["arrow-half"]=function(r,t,e,n){return a(r,t,e/2,n)},t["triangle-left"]=c,t["triangle-left-half"]=s;var h=f();return u.default}()});