/**
 * Highcharts JS v13.0.2 (2026-08-27)
 * @module highcharts/themes/avocado
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let o={};o.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{if(Array.isArray(r))for(var t=0;t<r.length;){var l=r[t++],a=r[t++];o.o(e,l)?0===a&&t++:0===a?Object.defineProperty(e,l,{enumerable:!0,value:r[t++]}):Object.defineProperty(e,l,{enumerable:!0,get:a})}else for(var l in r)o.o(r,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},o.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);let r=e.default;var t,l,a=o.n(r);let{setOptions:n}=a();(t=l||(l={})).options={colors:["#F3E796","#95C471","#35729E","#251735"],colorAxis:{maxColor:"#05426E",minColor:"#F3E796"},plotOptions:{map:{nullColor:"#FCFEFE"}},navigator:{maskFill:"rgba(170, 205, 170, 0.5)",series:{color:"#95C471",lineColor:"#35729E"}}},t.apply=function(){n(t.options)};let i=l;a().theme=i.options,i.apply();let s=a();export{s as default};