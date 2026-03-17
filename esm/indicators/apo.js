/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/apo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let a=e.default.SeriesRegistry;var n=t.n(a);let{doc:l,win:s}=o();function i(e){return p(e)&&"number"==typeof e.nodeType}function p(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{ema:u}=n().seriesTypes;class c extends u{getValues(e,t){let o,a,n=t.periods,l=t.index,s=[],i=[],p=[];if(2!==n.length||n[1]<=n[0])return void(0,r.error)('Error: "APO requires two periods. Notice, first period should be lower than the second one."');let u=super.getValues.call(this,e,{index:l,period:n[0]}),c=super.getValues.call(this,e,{index:l,period:n[1]});if(!u||!c)return;let d=n[1]-n[0];for(a=0;a<c.yData.length;a++)o=u.yData[a+d]-c.yData[a],s.push([c.xData[a],o]),i.push(c.xData[a]),p.push(o);return{values:s,xData:i,yData:p}}}c.defaultOptions=function(e,...t){let r,o=[e,...t],a={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let a;!p(r,!0)||(a=r?.constructor,p(r,!0)&&!i(r)&&a?.name&&"Object"!==a.name)||i(r)?e[o]=t[o]:e[o]=n(e[o]||{},r)}}),e};!0===e&&(a=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)a=n(a,o[r]);return a}(u.defaultOptions,{params:{period:void 0,periods:[10,20]}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(c.prototype,{nameBase:"APO",nameComponents:["periods"]}),n().registerSeriesType("apo",c);let d=o();export{d as default};