/**
 * Highcharts JS v13.1.0 (2026-09-18)
 * @module highcharts/themes/high-contrast-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";let e={};e.n=t=>{let o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let o=t.default;var r,l,a=e.n(o);let{setOptions:s}=a();(r=l||(l={})).options={palette:{light:{colors:["#265FB5","#222","#698F01","#F4693E","#4C0684","#0FA388","#B7104A","#AF9023","#1A704C","#B02FDD"]},dark:{colors:["#67B9EE","#CEEDA5","#9F6AE1","#FEA26E","#6BA48F","#EA3535","#8D96B7","#ECCA15","#20AA09","#E0C3E4"]}},credits:{style:{color:"light-dark(#767676, #F0F0F3)"}},navigator:{series:{color:"light-dark(#5f98cf, #7798BF)",lineColor:"light-dark(#5f98cf, #A6C7ED)"}}},r.apply=function(){s(r.options)};let i=l;a().theme=i.options,i.apply();let c=a();export{c as default};