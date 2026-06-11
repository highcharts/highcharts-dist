/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var s=t.n(o);let{sma:l}=s().seriesTypes;function p(e,t,a,o,s){let l=(0,r.pick)(t[a][o],t[a]);return s?(0,r.correctFloat)(e-l):(0,r.correctFloat)(e+l)}class n extends l{getValues(e,t){let a=t.period,o=t.index,s=Math.floor(a/2+1),l=a+s,n=e.xData||[],i=e.yData||[],d=i.length,u=[],c=[],f=[],h,y,g,m,x,v=0;if(!(n.length<=l)){for(m=0;m<a-1;m++)v=p(v,i,m,o);for(x=0;x<=d-l;x++)y=x+a-1,g=x+l-1,v=p(v,i,y,o),h=(0,r.pick)(i[g][o],i[g])-v/a,v=p(v,i,x,o,!0),u.push([n[g],h]),c.push(n[g]),f.push(h);return{values:u,xData:c,yData:f}}}}n.defaultOptions=(0,r.merge)(l.defaultOptions,{params:{index:0,period:21}}),(0,r.extend)(n.prototype,{nameBase:"DPO"}),s().registerSeriesType("dpo",n);let i=a();export{i as default};