/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as r from"../highcharts.js";var e={};e.n=r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},e.d=(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},e.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);let o=r.default;var t=e.n(o);let a=r.default.SeriesRegistry;var s=e.n(a);let{noop:l}=t(),{column:{prototype:i},sma:c}=s().seriesTypes;class n extends c{drawGraph(){let r,e=this.options,o=this.points,t=this.userOptions.color,a=e.greaterBarColor,s=e.lowerBarColor,l=o[0];if(!t&&l)for(r=1,l.color=a;r<o.length;r++)o[r].y>o[r-1].y?o[r].color=a:o[r].y<o[r-1].y?o[r].color=s:o[r].color=o[r-1].color}getValues(r){let e=r.xData||[],t=r.yData||[],a=t.length,s=[],l=[],i=[],c,n,p,d,h,g,u,y,f=0,v=0;if(!(e.length<=34)&&(0,o.isArray)(t[0])&&4===t[0].length){for(u=0;u<33;u++)g=(t[u][1]+t[u][2])/2,u>=29&&(v=(0,o.correctFloat)(v+g)),f=(0,o.correctFloat)(f+g);for(y=33;y<a;y++)g=(t[y][1]+t[y][2])/2,v=(0,o.correctFloat)(v+g),f=(0,o.correctFloat)(f+g),c=v/5,n=f/34,p=(0,o.correctFloat)(c-n),s.push([e[y],p]),l.push(e[y]),i.push(p),d=y+1-5,h=y+1-34,v=(0,o.correctFloat)(v-(t[d][1]+t[d][2])/2),f=(0,o.correctFloat)(f-(t[h][1]+t[h][2])/2);return{values:s,xData:l,yData:i}}}}n.defaultOptions=(0,o.merge)(c.defaultOptions,{params:{index:void 0,period:void 0},greaterBarColor:"var(--highcharts-positive-color)",lowerBarColor:"var(--highcharts-negative-color)",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}}),(0,o.extend)(n.prototype,{nameBase:"AO",nameComponents:void 0,markerAttribs:l,getColumnMetrics:i.getColumnMetrics,crispCol:i.crispCol,translate:i.translate,drawPoints:i.drawPoints}),s().registerSeriesType("ao",n);let p=t();export{p as default};