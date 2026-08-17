/**
 * Highcharts JS v13.0.1 (2026-08-17)
 * @module highcharts/themes/high-contrast-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var o=0;o<t.length;){var l=t[o++],a=t[o++];r.o(e,l)?0===a&&o++:0===a?Object.defineProperty(e,l,{enumerable:!0,value:t[o++]}):Object.defineProperty(e,l,{enumerable:!0,get:a})}else for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var o,l,a=r.n(t);let{setOptions:i}=a();(o=l||(l={})).options={palette:{light:{colors:["#265FB5","#222","#698F01","#F4693E","#4C0684","#0FA388","#B7104A","#AF9023","#1A704C","#B02FDD"]},dark:{colors:["#67B9EE","#CEEDA5","#9F6AE1","#FEA26E","#6BA48F","#EA3535","#8D96B7","#ECCA15","#20AA09","#E0C3E4"]}},credits:{style:{color:"light-dark(#767676, #F0F0F3)"}},navigator:{series:{color:"light-dark(#5f98cf, #7798BF)",lineColor:"light-dark(#5f98cf, #A6C7ED)"}}},o.apply=function(){i(o.options)};let n=l;a().theme=n.options,n.apply();let s=a();export{s as default};