/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let s=e.default.SeriesRegistry;var o=t.n(s);let{sma:l}=o().seriesTypes,{extend:n,merge:p,correctFloat:d,pick:i}=a();function u(e,t,r,a,s){let o=i(t[r][a],t[r]);return s?d(e-o):d(e+o)}class f extends l{getValues(e,t){let r=t.period,a=t.index,s=Math.floor(r/2+1),o=r+s,l=e.xData||[],n=e.yData||[],p=n.length,d=[],f=[],h=[],y,c,g,m,v,x=0;if(!(l.length<=o)){for(m=0;m<r-1;m++)x=u(x,n,m,a);for(v=0;v<=p-o;v++)c=v+r-1,g=v+o-1,x=u(x,n,c,a),y=i(n[g][a],n[g])-x/r,x=u(x,n,v,a,!0),d.push([l[g],y]),f.push(l[g]),h.push(y);return{values:d,xData:f,yData:h}}}}f.defaultOptions=p(l.defaultOptions,{params:{index:0,period:21}}),n(f.prototype,{nameBase:"DPO"}),o().registerSeriesType("dpo",f);let h=a();export{h as default};