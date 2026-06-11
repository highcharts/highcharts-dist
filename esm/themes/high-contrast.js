/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/high-contrast-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";var r,e,o={};o.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return o.d(r,{a:r}),r},o.d=(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);let l=t.default;var a=o.n(l);let{setOptions:s}=a();(r=e||(e={})).options={palette:{light:{colors:["#265FB5","#222","#698F01","#F4693E","#4C0684","#0FA388","#B7104A","#AF9023","#1A704C","#B02FDD"]},dark:{colors:["#67B9EE","#CEEDA5","#9F6AE1","#FEA26E","#6BA48F","#EA3535","#8D96B7","#ECCA15","#20AA09","#E0C3E4"]}},credits:{style:{color:"light-dark(#767676, #F0F0F3)"}},navigator:{series:{color:"light-dark(#5f98cf, #7798BF)",lineColor:"light-dark(#5f98cf, #A6C7ED)"}}},r.apply=function(){s(r.options)};let i=e;a().theme=i.options,i.apply();let c=a();export{c as default};