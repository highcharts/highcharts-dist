/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/zigzag
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{if(Array.isArray(a))for(var r=0;r<a.length;){var s=a[r++],i=a[r++];t.o(e,s)?0===i&&r++:0===i?Object.defineProperty(e,s,{enumerable:!0,value:a[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:i})}else for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let s=e.default.SeriesRegistry;var i=t.n(s);let{sma:o}=i().seriesTypes;class l extends o{getValues(e,t){let a=t.lowIndex,r=t.highIndex,s=t.deviation/100,i={low:1+s,high:1-s},o=e.xData,l=e.yData,n=l?l.length:0,h=[],d=[],p=[],u,g,f,v,y=!1,m=!1;if(!o||o.length<=1||n&&(void 0===l[0][a]||void 0===l[0][r]))return;let x=l[0][a],c=l[0][r];for(u=1;u<n;u++)l[u][a]<=c*i.high?(h.push([o[0],c]),f=[o[u],l[u][a]],v=!0,y=!0):l[u][r]>=x*i.low&&(h.push([o[0],x]),f=[o[u],l[u][r]],v=!1,y=!0),y&&(d.push(h[0][0]),p.push(h[0][1]),g=u++,u=n);for(u=g;u<n;u++)v?(l[u][a]<=f[1]&&(f=[o[u],l[u][a]]),l[u][r]>=f[1]*i.low&&(m=r)):(l[u][r]>=f[1]&&(f=[o[u],l[u][r]]),l[u][a]<=f[1]*i.high&&(m=a)),!1!==m&&(h.push(f),d.push(f[0]),p.push(f[1]),f=[o[u],l[u][m]],v=!v,m=!1);let b=h.length;return 0!==b&&h[b-1][0]<o[n-1]&&(h.push(f),d.push(f[0]),p.push(f[1])),{values:h,xData:d,yData:p}}}l.defaultOptions=(0,a.merge)(o.defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),(0,a.extend)(l.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),i().registerSeriesType("zigzag",l);let n=r();export{n as default};