/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/accumulation-distribution
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=e.default.SeriesRegistry;var a=t.n(n);let{doc:l,win:u}=o();function i(e){return s(e)&&"number"==typeof e.nodeType}function s(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{sma:c}=a().seriesTypes;class p extends c{static populateAverage(e,t,r,o,n){let a=t[o][1],l=t[o][2],u=t[o][3],i=r[o],s=u===a&&u===l||a===l?0:(2*u-l-a)/(a-l)*i;return[e[o],s]}getValues(e,t){let o,n,a,l=t.period,u=e.xData,i=e.yData,s=t.volumeSeriesID,c=e.chart.get(s),f=c?.getColumn("y"),y=i?i.length:0,d=[],m=[],h=[];if(!(u.length<=l)||!y||4===i[0].length){if(!c)return void(0,r.error)("Series "+s+" not found! Check `volumeSeriesID`.",!0,e.chart);for(n=l;n<y;n++)o=d.length,a=p.populateAverage(u,i,f,n,l),o>0&&(a[1]+=d[o-1][1]),d.push(a),m.push(a[0]),h.push(a[1]);return{values:d,xData:m,yData:h}}}}p.defaultOptions=function(e,...t){let r,o=[e,...t],n={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!s(r,!0)||(n=r?.constructor,s(r,!0)&&!i(r)&&n?.name&&"Object"!==n.name)||i(r)?e[o]=t[o]:e[o]=a(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let l=o.length;for(r=0;r<l;r++)n=a(n,o[r]);return n}(c.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(p.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),a().registerSeriesType("ad",p);let f=o();export{f as default};