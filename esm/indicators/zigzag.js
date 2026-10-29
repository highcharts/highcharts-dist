/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/zigzag
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Kacper Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let a={};a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var r=a.n(s);let o=t.default.Series.types.sma;var i=a.n(o);let l=e.default.SeriesRegistry;var n=a.n(l);class d extends i(){getValues(e,t){let a=t.lowIndex,s=t.highIndex,r=t.deviation/100,o={low:1+r,high:1-r},i=e.xData,l=e.yData,n=l?l.length:0,d=[],h=[],p=[],u,g,f,m,v=!1,c=!1;if(!i||i.length<=1||n&&(void 0===l[0][a]||void 0===l[0][s]))return;let x=l[0][a],y=l[0][s];for(u=1;u<n;u++)l[u][a]<=y*o.high?(d.push([i[0],y]),f=[i[u],l[u][a]],m=!0,v=!0):l[u][s]>=x*o.low&&(d.push([i[0],x]),f=[i[u],l[u][s]],m=!1,v=!0),v&&(h.push(d[0][0]),p.push(d[0][1]),g=u++,u=n);for(u=g;u<n;u++)m?(l[u][a]<=f[1]&&(f=[i[u],l[u][a]]),l[u][s]>=f[1]*o.low&&(c=s)):(l[u][s]>=f[1]&&(f=[i[u],l[u][s]]),l[u][a]<=f[1]*o.high&&(c=a)),!1!==c&&(d.push(f),h.push(f[0]),p.push(f[1]),f=[i[u],l[u][c]],m=!m,c=!1);let w=d.length;return 0!==w&&d[w-1][0]<i[n-1]&&(d.push(f),h.push(f[0]),p.push(f[1])),{values:d,xData:h,yData:p}}}d.defaultOptions=(0,s.merge)(i().defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),(0,s.extend)(d.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),n().registerSeriesType("zigzag",d);let h=r();export{h as default};