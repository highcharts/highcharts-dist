/**
 * Highcharts JS v13.1.0 (2026-09-18)
 * @module highcharts/themes/sunset
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as o from"../highcharts.js";let e={};e.n=o=>{let t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},e.d=(o,t)=>{for(var l in t)e.o(t,l)&&!e.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:t[l]})},e.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e);let t=o.default;var l,r,a=e.n(t);let{setOptions:n}=a();(l=r||(r={})).options={colors:["#FDD089","#FF7F79","#A0446E","#251535"],colorAxis:{maxColor:"#60042E",minColor:"#FDD089"},plotOptions:{map:{nullColor:"#fefefc"}},navigator:{series:{color:"#FF7F79",lineColor:"#A0446E"}}},l.apply=function(){n(l.options)};let s=r;a().theme=s.options,s.apply();let p=a();export{p as default};