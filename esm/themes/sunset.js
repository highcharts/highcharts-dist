/**
 * Highcharts JS v13.0.0-modified (2026-08-14)
 * @module highcharts/themes/sunset
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let o={};o.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{if(Array.isArray(r))for(var t=0;t<r.length;){var l=r[t++],a=r[t++];o.o(e,l)?0===a&&t++:0===a?Object.defineProperty(e,l,{enumerable:!0,value:r[t++]}):Object.defineProperty(e,l,{enumerable:!0,get:a})}else for(var l in r)o.o(r,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},o.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);let r=e.default;var t,l,a=o.n(r);let{setOptions:n}=a();(t=l||(l={})).options={colors:["#FDD089","#FF7F79","#A0446E","#251535"],colorAxis:{maxColor:"#60042E",minColor:"#FDD089"},plotOptions:{map:{nullColor:"#fefefc"}},navigator:{series:{color:"#FF7F79",lineColor:"#A0446E"}}},t.apply=function(){n(t.options)};let s=l;a().theme=s.options,s.apply();let i=a();export{i as default};