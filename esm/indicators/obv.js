/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/obv
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kolodziej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let a=e.default.SeriesRegistry;var n=t.n(a);let{doc:l,win:s}=o();function u(e){return i(e)&&"number"==typeof e.nodeType}function i(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{sma:p}=n().seriesTypes;class c extends p{getValues(e,t){var o;let a=e.chart.get(t.volumeSeriesID),n=e.xData,l=e.yData,s=[],u=[],i=[],p=!("number"==typeof(o=l[0])&&!isNaN(o)&&o<1/0&&o>-1/0),c=[],f=1,y=0,d=0,m=0,v=0,h;if(!a)return void(0,r.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);for(h=a.getColumn("y"),c=[n[0],y],m=p?l[0][3]:l[0],s.push(c),u.push(n[0]),i.push(c[1]);f<l.length;f++)d=(v=p?l[f][3]:l[f])>m?y+h[f]:v===m?y:y-h[f],c=[n[f],d],y=d,m=v,s.push(c),u.push(n[f]),i.push(c[1]);return{values:s,xData:u,yData:i}}}c.defaultOptions=function(e,...t){let r,o=[e,...t],a={},n=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let a;!i(r,!0)||(a=r?.constructor,i(r,!0)&&!u(r)&&a?.name&&"Object"!==a.name)||u(r)?e[o]=t[o]:e[o]=n(e[o]||{},r)}}),e};!0===e&&(a=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)a=n(a,o[r]);return a}(p.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(c.prototype,{nameComponents:void 0}),n().registerSeriesType("obv",c);let f=o();export{f as default};