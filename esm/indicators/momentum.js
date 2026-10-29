/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/momentum
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var a=r.n(s);let o=t.default.Series.types.sma;var n=r.n(o);let l=e.default.SeriesRegistry;var u=r.n(l);function p(e,t,r,s,a){let o=t[r-1][a]-t[r-s-1][a];return[e[r-1],o]}class i extends n(){getValues(e,t){let r,a,o=t.period,n=t.index,l=e.xData,u=e.yData,i=u?u.length:0,m=[],d=[],f=[];if(!(l.length<=o)&&(0,s.isArray)(u[0])){for(r=o+1;r<i;r++)a=p(l,u,r,o,n),m.push(a),d.push(a[0]),f.push(a[1]);return a=p(l,u,r,o,n),m.push(a),d.push(a[0]),f.push(a[1]),{values:m,xData:d,yData:f}}}}i.defaultOptions=(0,s.merge)(n().defaultOptions,{params:{index:3}}),(0,s.extend)(i.prototype,{nameBase:"Momentum"}),u().registerSeriesType("momentum",i);let m=a();export{m as default};