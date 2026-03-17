/**
 * Highstock JS v12.5.0-modified (2026-03-17)
 * @module highcharts/indicators/zigzag
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=e.default.SeriesRegistry;var a=t.n(n);let{doc:i,win:l}=o();function s(e){return u(e)&&"number"==typeof e.nodeType}function u(e,t){let r;return!!e&&"object"==typeof e&&(!t||"[object Array]"!==(r=Object.prototype.toString.call(e))&&"[object Array Iterator]"!==r)}Array.prototype.find;let{sma:p}=a().seriesTypes;class c extends p{getValues(e,t){let r=t.lowIndex,o=t.highIndex,n=t.deviation/100,a={low:1+n,high:1-n},i=e.xData,l=e.yData,s=l?l.length:0,u=[],p=[],c=[],f,h,d,g,y=!1,v=!1;if(!i||i.length<=1||s&&(void 0===l[0][r]||void 0===l[0][o]))return;let m=l[0][r],b=l[0][o];for(f=1;f<s;f++)l[f][r]<=b*a.high?(u.push([i[0],b]),d=[i[f],l[f][r]],g=!0,y=!0):l[f][o]>=m*a.low&&(u.push([i[0],m]),d=[i[f],l[f][o]],g=!1,y=!0),y&&(p.push(u[0][0]),c.push(u[0][1]),h=f++,f=s);for(f=h;f<s;f++)g?(l[f][r]<=d[1]&&(d=[i[f],l[f][r]]),l[f][o]>=d[1]*a.low&&(v=o)):(l[f][o]>=d[1]&&(d=[i[f],l[f][o]]),l[f][r]<=d[1]*a.high&&(v=r)),!1!==v&&(u.push(d),p.push(d[0]),c.push(d[1]),d=[i[f],l[f][v]],g=!g,v=!1);let j=u.length;return 0!==j&&u[j-1][0]<i[s-1]&&(u.push(d),p.push(d[0]),c.push(d[1])),{values:u,xData:p,yData:c}}}c.defaultOptions=function(e,...t){let r,o=[e,...t],n={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!u(r,!0)||(n=r?.constructor,u(r,!0)&&!s(r)&&n?.name&&"Object"!==n.name)||s(r)?e[o]=t[o]:e[o]=a(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let i=o.length;for(r=0;r<i;r++)n=a(n,o[r]);return n}(p.defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(c.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),a().registerSeriesType("zigzag",c);let f=o();export{f as default};