/**
 * Highstock JS v12.6.0 (2026-04-13)
 * @module highcharts/indicators/mfi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Grzegorz Blachliński
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var o=t.n(r);let n=e.default.SeriesRegistry;var a=t.n(n);let{doc:u,win:l}=o();function i(e){return c(e)&&"number"==typeof e.nodeType}function s(e){let t=Object.prototype.toString.call(e);return"[object Array]"===t||"[object Array Iterator]"===t}function c(e,t){return!!e&&"object"==typeof e&&(!t||!s(e))}Array.prototype.find;let{sma:f}=a().seriesTypes;function p(e){return e.reduce(function(e,t){return e+t})}function d(e){return(e[1]+e[2]+e[3])/3}class y extends f{getValues(e,t){let o=t.period,n=e.xData,a=e.yData,u=a?a.length:0,l=t.decimals,i=e.chart.get(t.volumeSeriesID),c=i?.getColumn("y")||[],f=[],y=[],h=[],m=[],v=[],g,b,j,O,D,S,x=!1,_=1;if(!i)return void(0,r.error)("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(n.length<=o)&&s(a[0])&&4===a[0].length&&c){for(g=d(a[_]);_<o+1;)b=g,x=(g=d(a[_]))>=b,j=g*c[_],m.push(x?j:0),v.push(x?0:j),_++;for(S=_-1;S<u;S++){var I;S>_-1&&(m.shift(),v.shift(),b=g,x=(g=d(a[S]))>b,j=g*c[S],m.push(x?j:0),v.push(x?0:j)),O=p(v),I=100-100/(1+p(m)/O),D=parseFloat(I.toFixed(l)),f.push([n[S],D]),y.push(n[S]),h.push(D)}return{values:f,xData:y,yData:h}}}}y.defaultOptions=function(e,...t){let r,o=[e,...t],n={},a=function(e,t){return"object"!=typeof e&&(e={}),function(e,t,r){for(let r in e)Object.hasOwnProperty.call(e,r)&&t.call((0,e[r]),e[r],r,e)}(t,function(r,o){if("__proto__"!==o&&"constructor"!==o){let n;!c(r,!0)||(n=r?.constructor,c(r,!0)&&!i(r)&&n?.name&&"Object"!==n.name)||i(r)?e[o]=t[o]:e[o]=a(e[o]||{},r)}}),e};!0===e&&(n=o[1],o=Array.prototype.slice.call(o,2));let u=o.length;for(r=0;r<u;r++)n=a(n,o[r]);return n}(f.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),function(e,t){let r;for(r in e||(e={}),t)e[r]=t[r]}(y.prototype,{nameBase:"Money Flow Index"}),a().registerSeriesType("mfi",y);let h=o();export{h as default};