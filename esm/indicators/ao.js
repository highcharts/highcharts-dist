/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/ao
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
 */import*as r from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let e={};e.n=r=>{let t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},e.d=(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t);let o=r.default;var a=e.n(o);let s=r.default.Series.types.column;var l=e.n(s);let i=t.default.Series.types.sma;var c=e.n(i);let n=r.default.SeriesRegistry;var p=e.n(n);let{noop:d}=a();class h extends c(){drawGraph(){let r,t=this.options,e=this.points,o=this.userOptions.color,a=t.greaterBarColor,s=t.lowerBarColor,l=e[0];if(!o&&l)for(l.color=a,r=1;r<e.length;r++)e[r].y>e[r-1].y?e[r].color=a:e[r].y<e[r-1].y?e[r].color=s:e[r].color=e[r-1].color}getValues(r){let t=r.xData||[],e=r.yData||[],a=e.length,s=[],l=[],i=[],c,n,p,d,h,u,g,y,f=0,m=0;if(!(t.length<=34)&&(0,o.isArray)(e[0])&&4===e[0].length){for(g=0;g<33;g++)u=(e[g][1]+e[g][2])/2,g>=29&&(m=(0,o.correctFloat)(m+u)),f=(0,o.correctFloat)(f+u);for(y=33;y<a;y++)u=(e[y][1]+e[y][2])/2,m=(0,o.correctFloat)(m+u),f=(0,o.correctFloat)(f+u),c=m/5,n=f/34,p=(0,o.correctFloat)(c-n),s.push([t[y],p]),l.push(t[y]),i.push(p),d=y+1-5,h=y+1-34,m=(0,o.correctFloat)(m-(e[d][1]+e[d][2])/2),f=(0,o.correctFloat)(f-(e[h][1]+e[h][2])/2);return{values:s,xData:l,yData:i}}}}h.defaultOptions=(0,o.merge)(c().defaultOptions,{params:{index:void 0,period:void 0},greaterBarColor:"var(--highcharts-positive-color)",lowerBarColor:"var(--highcharts-negative-color)",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}}),(0,o.extend)(h.prototype,{nameBase:"AO",nameComponents:void 0,markerAttribs:d,getColumnMetrics:l().prototype.getColumnMetrics,crispCol:l().prototype.crispCol,translate:l().prototype.translate,drawPoints:l().prototype.drawPoints}),p().registerSeriesType("ao",h);let u=a();export{u as default};