/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var o=r.n(a);let s=t.default.Series.types.sma;var l=r.n(s);let n=e.default.SeriesRegistry;var p=r.n(n);function d(e,t,r,o,s){let l=t[r][o]??t[r];return s?(0,a.correctFloat)(e-l):(0,a.correctFloat)(e+l)}class i extends l(){getValues(e,t){let r=t.period,a=t.index,o=Math.floor(r/2+1),s=r+o,l=e.xData||[],n=e.yData||[],p=n.length,i=[],u=[],c=[],f,m,h,y,g,x=0;if(!(l.length<=s)){for(y=0;y<r-1;y++)x=d(x,n,y,a);for(g=0;g<=p-s;g++)m=g+r-1,h=g+s-1,x=d(x,n,m,a),f=(n[h][a]??n[h])-x/r,x=d(x,n,g,a,!0),i.push([l[h],f]),u.push(l[h]),c.push(f);return{values:i,xData:u,yData:c}}}}i.defaultOptions=(0,a.merge)(l().defaultOptions,{params:{index:0,period:21}}),(0,a.extend)(i.prototype,{nameBase:"DPO"}),p().registerSeriesType("dpo",i);let u=o();export{u as default};