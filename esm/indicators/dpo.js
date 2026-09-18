/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var s=t.n(o);let{sma:l}=s().seriesTypes;function n(e,t,a,o,s){let l=t[a][o]??t[a];return s?(0,r.correctFloat)(e-l):(0,r.correctFloat)(e+l)}class p extends l{getValues(e,t){let r=t.period,a=t.index,o=Math.floor(r/2+1),s=r+o,l=e.xData||[],p=e.yData||[],d=p.length,i=[],u=[],f=[],c,h,y,g,m,x=0;if(!(l.length<=s)){for(g=0;g<r-1;g++)x=n(x,p,g,a);for(m=0;m<=d-s;m++)h=m+r-1,y=m+s-1,x=n(x,p,h,a),c=(p[y][a]??p[y])-x/r,x=n(x,p,m,a,!0),i.push([l[y],c]),u.push(l[y]),f.push(c);return{values:i,xData:u,yData:f}}}}p.defaultOptions=(0,r.merge)(l.defaultOptions,{params:{index:0,period:21}}),(0,r.extend)(p.prototype,{nameBase:"DPO"}),s().registerSeriesType("dpo",p);let d=a();export{d as default};