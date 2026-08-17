/**
 * Highstock JS v13.0.1 (2026-08-17)
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
 */import*as e from"../highcharts.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var o=0;o<t.length;){var a=t[o++],l=t[o++];r.o(e,a)?0===l&&o++:0===l?Object.defineProperty(e,a,{enumerable:!0,value:t[o++]}):Object.defineProperty(e,a,{enumerable:!0,get:l})}else for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let t=e.default;var o=r.n(t);let a=e.default.SeriesRegistry;var l=r.n(a);let{noop:s}=o(),{column:{prototype:i},sma:n}=l().seriesTypes;class c extends n{drawGraph(){let e,r=this.options,t=this.points,o=this.userOptions.color,a=r.greaterBarColor,l=r.lowerBarColor,s=t[0];if(!o&&s)for(e=1,s.color=a;e<t.length;e++)t[e].y>t[e-1].y?t[e].color=a:t[e].y<t[e-1].y?t[e].color=l:t[e].color=t[e-1].color}getValues(e){let r=e.xData||[],o=e.yData||[],a=o.length,l=[],s=[],i=[],n,c,p,d,h,u,g,y,f=0,m=0;if(!(r.length<=34)&&(0,t.isArray)(o[0])&&4===o[0].length){for(g=0;g<33;g++)u=(o[g][1]+o[g][2])/2,g>=29&&(m=(0,t.correctFloat)(m+u)),f=(0,t.correctFloat)(f+u);for(y=33;y<a;y++)u=(o[y][1]+o[y][2])/2,m=(0,t.correctFloat)(m+u),f=(0,t.correctFloat)(f+u),n=m/5,c=f/34,p=(0,t.correctFloat)(n-c),l.push([r[y],p]),s.push(r[y]),i.push(p),d=y+1-5,h=y+1-34,m=(0,t.correctFloat)(m-(o[d][1]+o[d][2])/2),f=(0,t.correctFloat)(f-(o[h][1]+o[h][2])/2);return{values:l,xData:s,yData:i}}}}c.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{index:void 0,period:void 0},greaterBarColor:"var(--highcharts-positive-color)",lowerBarColor:"var(--highcharts-negative-color)",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}}),(0,t.extend)(c.prototype,{nameBase:"AO",nameComponents:void 0,markerAttribs:s,getColumnMetrics:i.getColumnMetrics,crispCol:i.crispCol,translate:i.translate,drawPoints:i.drawPoints}),l().registerSeriesType("ao",c);let p=o();export{p as default};