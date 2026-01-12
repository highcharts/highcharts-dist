/**
 * Highstock JS v12.5.0 (2026-01-12)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var s=t.n(a);let r=e.default.SeriesRegistry;var i=t.n(r);let{sma:o}=i().seriesTypes,{merge:n,extend:l}=s();class h extends o{getValues(e,t){let a=t.lowIndex,s=t.highIndex,r=t.deviation/100,i={low:1+r,high:1-r},o=e.xData,n=e.yData,l=n?n.length:0,h=[],p=[],d=[],u,g,f,v,x=!1,m=!1;if(!o||o.length<=1||l&&(void 0===n[0][a]||void 0===n[0][s]))return;let y=n[0][a],c=n[0][s];for(u=1;u<l;u++)n[u][a]<=c*i.high?(h.push([o[0],c]),f=[o[u],n[u][a]],v=!0,x=!0):n[u][s]>=y*i.low&&(h.push([o[0],y]),f=[o[u],n[u][s]],v=!1,x=!0),x&&(p.push(h[0][0]),d.push(h[0][1]),g=u++,u=l);for(u=g;u<l;u++)v?(n[u][a]<=f[1]&&(f=[o[u],n[u][a]]),n[u][s]>=f[1]*i.low&&(m=s)):(n[u][s]>=f[1]&&(f=[o[u],n[u][s]]),n[u][a]<=f[1]*i.high&&(m=a)),!1!==m&&(h.push(f),p.push(f[0]),d.push(f[1]),f=[o[u],n[u][m]],v=!v,m=!1);let w=h.length;return 0!==w&&h[w-1][0]<o[l-1]&&(h.push(f),p.push(f[0]),d.push(f[1])),{values:h,xData:p,yData:d}}}h.defaultOptions=n(o.defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),l(h.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),i().registerSeriesType("zigzag",h);let p=s();export{p as default};