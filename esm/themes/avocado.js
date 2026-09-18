/**
 * Highcharts JS v13.1.0 (2026-09-18)
 * @module highcharts/themes/avocado
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as o from"../highcharts.js";let e={};e.n=o=>{let l=o&&o.__esModule?()=>o.default:()=>o;return e.d(l,{a:l}),l},e.d=(o,l)=>{for(var t in l)e.o(l,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:l[t]})},e.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e);let l=o.default;var t,r,a=e.n(l);let{setOptions:n}=a();(t=r||(r={})).options={colors:["#F3E796","#95C471","#35729E","#251735"],colorAxis:{maxColor:"#05426E",minColor:"#F3E796"},plotOptions:{map:{nullColor:"#FCFEFE"}},navigator:{maskFill:"rgba(170, 205, 170, 0.5)",series:{color:"#95C471",lineColor:"#35729E"}}},t.apply=function(){n(t.options)};let s=r;a().theme=s.options,s.apply();let p=a();export{p as default};