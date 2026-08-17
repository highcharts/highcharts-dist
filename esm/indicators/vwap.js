/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/vwap
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var l=t[a++],s=t[a++];r.o(e,l)?0===s&&a++:0===s?Object.defineProperty(e,l,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,l,{enumerable:!0,get:s})}else for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var a=r.n(t);let l=e.default.SeriesRegistry;var s=r.n(l);let{sma:o}=s().seriesTypes;class u extends o{getValues(e,r){let a=e.chart,l=e.xData,s=e.yData,o=r.period,u=!0,i;return(i=a.get(r.volumeSeriesID))?((0,t.isArray)(s[0])||(u=!1),this.calculateVWAPValues(u,l,s,i,o)):void(0,t.error)("Series "+r.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,a)}calculateVWAPValues(e,r,t,a,l){let s,o,u,i,n,p,d=a.getColumn("y"),v=d.length,c=r.length,f=[],h=[],m=[],y=[],g=[];for(n=0,s=c<=v?c:v,p=0;n<s;n++)o=(e?(t[n][1]+t[n][2]+t[n][3])/3:t[n])*d[n],u=p?f[n-1]+o:o,i=p?h[n-1]+d[n]:d[n],f.push(u),h.push(i),g.push([r[n],u/i]),m.push(g[n][0]),y.push(g[n][1]),++p===l&&(p=0);return{values:g,xData:m,yData:y}}}u.defaultOptions=(0,t.merge)(o.defaultOptions,{params:{index:void 0,period:30,volumeSeriesID:"volume"}}),s().registerSeriesType("vwap",u);let i=a();export{i as default};