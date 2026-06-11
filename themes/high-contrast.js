!/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/high-contrast-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/themes/high-contrast",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/themes/high-contrast"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("u"<typeof window?this:window,t=>(()=>{"use strict";var e,r,o={944:e=>{e.exports=t}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return o[t](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};s.d(a,{default:()=>p});var h=s(944),n=s.n(h);let{setOptions:c}=n();(e=r||(r={})).options={palette:{light:{colors:["#265FB5","#222","#698F01","#F4693E","#4C0684","#0FA388","#B7104A","#AF9023","#1A704C","#B02FDD"]},dark:{colors:["#67B9EE","#CEEDA5","#9F6AE1","#FEA26E","#6BA48F","#EA3535","#8D96B7","#ECCA15","#20AA09","#E0C3E4"]}},credits:{style:{color:"light-dark(#767676, #F0F0F3)"}},navigator:{series:{color:"light-dark(#5f98cf, #7798BF)",lineColor:"light-dark(#5f98cf, #A6C7ED)"}}},e.apply=function(){c(e.options)};let l=r;n().theme=l.options,l.apply();let p=n();return a.default})());