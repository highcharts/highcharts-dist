/**
 * Highstock JS v13.0.2 (2026-08-27)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var o=r[a++],l=r[a++];t.o(e,o)?0===l&&a++:0===l?Object.defineProperty(e,o,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,o,{enumerable:!0,get:l})}else for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var l=t.n(o);let{sma:s}=l().seriesTypes;function n(e,t,a,o,l){let s=t[a][o]??t[a];return l?(0,r.correctFloat)(e-s):(0,r.correctFloat)(e+s)}class p extends s{getValues(e,t){let r=t.period,a=t.index,o=Math.floor(r/2+1),l=r+o,s=e.xData||[],p=e.yData||[],i=p.length,d=[],u=[],f=[],c,y,h,g,m,O=0;if(!(s.length<=l)){for(g=0;g<r-1;g++)O=n(O,p,g,a);for(m=0;m<=i-l;m++)y=m+r-1,h=m+l-1,O=n(O,p,y,a),c=(p[h][a]??p[h])-O/r,O=n(O,p,m,a,!0),d.push([s[h],c]),u.push(s[h]),f.push(c);return{values:d,xData:u,yData:f}}}}p.defaultOptions=(0,r.merge)(s.defaultOptions,{params:{index:0,period:21}}),(0,r.extend)(p.prototype,{nameBase:"DPO"}),l().registerSeriesType("dpo",p);let i=a();export{i as default};