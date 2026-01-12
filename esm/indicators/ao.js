/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/ao
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
 */import*as e from"../highcharts.js";var r={};r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);let o=e.default;var t=r.n(o);let a=e.default.SeriesRegistry;var s=r.n(a);let{noop:l}=t(),{column:{prototype:i},sma:n}=s().seriesTypes,{extend:p,merge:d,correctFloat:u,isArray:c}=t();class h extends n{drawGraph(){let e,r=this.options,o=this.points,t=this.userOptions.color,a=r.greaterBarColor,s=r.lowerBarColor,l=o[0];if(!t&&l)for(e=1,l.color=a;e<o.length;e++)o[e].y>o[e-1].y?o[e].color=a:o[e].y<o[e-1].y?o[e].color=s:o[e].color=o[e-1].color}getValues(e){let r=e.xData||[],o=e.yData||[],t=o.length,a=[],s=[],l=[],i,n,p,d,h,g,f=0,y=0;if(!(r.length<=34)&&c(o[0])&&4===o[0].length){for(h=0;h<33;h++)d=(o[h][1]+o[h][2])/2,h>=29&&(y=u(y+d)),f=u(f+d);for(g=33;g<t;g++)y=u(y+(d=(o[g][1]+o[g][2])/2)),f=u(f+d),i=u(y/5-f/34),a.push([r[g],i]),s.push(r[g]),l.push(i),n=g+1-5,p=g+1-34,y=u(y-(o[n][1]+o[n][2])/2),f=u(f-(o[p][1]+o[p][2])/2);return{values:a,xData:s,yData:l}}}}h.defaultOptions=d(n.defaultOptions,{params:{index:void 0,period:void 0},greaterBarColor:"#06b535",lowerBarColor:"#f21313",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}}),p(h.prototype,{nameBase:"AO",nameComponents:void 0,markerAttribs:l,getColumnMetrics:i.getColumnMetrics,crispCol:i.crispCol,translate:i.translate,drawPoints:i.drawPoints}),s().registerSeriesType("ao",h);let g=t();export{g as default};