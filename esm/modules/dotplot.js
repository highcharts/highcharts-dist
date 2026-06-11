/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/dotplot
 * @requires highcharts
 *
 * Dot plot series type for Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=t.n(r);let i=e.default.SeriesRegistry;var o=t.n(i);let{column:a}=o().seriesTypes;class d extends a{drawPoints(){let e=this.options,t=this.chart.renderer,s=e.marker,i=this.points.reduce((e,t)=>e+Math.abs(t.y||0),0),o=this.points.reduce((e,t)=>e+(t.shapeArgs?.height||0),0),a=e.itemPadding||0,d=this.points[0]?.shapeArgs?.width||0,l=e.slotsPerBar,h=d;if(!(0,r.isNumber)(l))for(l=1;l<i&&!(i/l<o/h*1.2);)h=d/++l;let p=o*l/i;for(let e of this.points){let i=e.marker||{},o=i.symbol||s.symbol,d=(0,r.pick)(i.radius,s.radius),n="rect"!==o?p:h,c=e.shapeArgs||{},g=(c.x||0)+((c.width||0)-l*n)/2,y=Math.abs(e.y??0),f=c.y||0,m=c.height||0,u,b=g,v=e.negative?f:f+m-p,A=0;e.graphics=u=e.graphics||[];let k=e.pointAttr?e.pointAttr[e.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(e,e.selected&&"select");if(delete k.r,this.chart.styledMode&&(delete k.stroke,delete k["stroke-width"]),"number"==typeof e.y){e.graphic||(e.graphic=t.g("point").add(this.group));for(let s=0;s<y;s++){let i={x:b+n*a,y:v+p*a,width:n*(1-2*a),height:p*(1-2*a),r:d},h=u[s];h?h.animate(i):h=t.symbol(o).attr((0,r.extend)(i,k)).add(e.graphic),h.isActive=!0,u[s]=h,b+=n,++A>=l&&(A=0,b=g,v=e.negative?v+p:v-p)}}let P=-1;for(let e of u)++P,e&&(e.isActive?e.isActive=!1:(e.destroy(),u.splice(P,1)))}}}d.defaultOptions=(0,r.merge)(a.defaultOptions,{itemPadding:.1,marker:{symbol:"circle",states:{hover:{},select:{}}},slotsPerBar:void 0}),(0,r.extend)(d.prototype,{markerAttribs:void 0}),o().registerSeriesType("dotplot",d);let l=s();export{l as default};