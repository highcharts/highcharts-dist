/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/ao
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
 */import*as r from"../highcharts.js";let e={};e.n=r=>{let t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},e.d=(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},e.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);let t=r.default;var o=e.n(t);let a=r.default.SeriesRegistry;var l=e.n(a);let{noop:s}=o(),{column:{prototype:i},sma:c}=l().seriesTypes;class n extends c{drawGraph(){let r,e=this.options,t=this.points,o=this.userOptions.color,a=e.greaterBarColor,l=e.lowerBarColor,s=t[0];if(!o&&s)for(s.color=a,r=1;r<t.length;r++)t[r].y>t[r-1].y?t[r].color=a:t[r].y<t[r-1].y?t[r].color=l:t[r].color=t[r-1].color}getValues(r){let e=r.xData||[],o=r.yData||[],a=o.length,l=[],s=[],i=[],c,n,p,d,h,g,u,y,f=0,m=0;if(!(e.length<=34)&&(0,t.isArray)(o[0])&&4===o[0].length){for(u=0;u<33;u++)g=(o[u][1]+o[u][2])/2,u>=29&&(m=(0,t.correctFloat)(m+g)),f=(0,t.correctFloat)(f+g);for(y=33;y<a;y++)g=(o[y][1]+o[y][2])/2,m=(0,t.correctFloat)(m+g),f=(0,t.correctFloat)(f+g),c=m/5,n=f/34,p=(0,t.correctFloat)(c-n),l.push([e[y],p]),s.push(e[y]),i.push(p),d=y+1-5,h=y+1-34,m=(0,t.correctFloat)(m-(o[d][1]+o[d][2])/2),f=(0,t.correctFloat)(f-(o[h][1]+o[h][2])/2);return{values:l,xData:s,yData:i}}}}n.defaultOptions=(0,t.merge)(c.defaultOptions,{params:{index:void 0,period:void 0},greaterBarColor:"var(--highcharts-positive-color)",lowerBarColor:"var(--highcharts-negative-color)",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}}),(0,t.extend)(n.prototype,{nameBase:"AO",nameComponents:void 0,markerAttribs:s,getColumnMetrics:i.getColumnMetrics,crispCol:i.crispCol,translate:i.translate,drawPoints:i.drawPoints}),l().registerSeriesType("ao",n);let p=o();export{p as default};