/**
 * Highcharts JS v13.0.1 (2026-08-17)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var s=0;s<r.length;){var i=r[s++],o=r[s++];t.o(e,i)?0===o&&s++:0===o?Object.defineProperty(e,i,{enumerable:!0,value:r[s++]}):Object.defineProperty(e,i,{enumerable:!0,get:o})}else for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=t.n(r);let i=e.default.SeriesRegistry;var o=t.n(i);let{column:a}=o().seriesTypes;class l extends a{drawPoints(){let e=this.options,t=this.chart.renderer,s=e.marker,i=this.points.reduce((e,t)=>e+Math.abs(t.y||0),0),o=this.points.reduce((e,t)=>e+(t.shapeArgs?.height||0),0),a=e.itemPadding||0,l=this.points[0]?.shapeArgs?.width||0,d=e.slotsPerBar,h=l;if(!(0,r.isNumber)(d))for(d=1;d<i&&!(i/d<o/h*1.2);)h=l/++d;let p=o*d/i;for(let e of this.points){let i=e.marker||{},o=i.symbol||s.symbol,l=(0,r.pick)(i.radius,s.radius),n="rect"!==o?p:h,c=e.shapeArgs||{},g=(c.x||0)+((c.width||0)-d*n)/2,y=Math.abs(e.y??0),f=c.y||0,m=c.height||0,u,b=g,v=e.negative?f:f+m-p,A=0;e.graphics=u=e.graphics||[];let P=e.pointAttr?e.pointAttr[e.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(e,e.selected&&"select");if(delete P.r,this.chart.styledMode&&(delete P.stroke,delete P["stroke-width"]),"number"==typeof e.y){e.graphic||(e.graphic=t.g("point").add(this.group));for(let s=0;s<y;s++){let i={x:b+n*a,y:v+p*a,width:n*(1-2*a),height:p*(1-2*a),r:l},h=u[s];h?h.animate(i):h=t.symbol(o).attr((0,r.extend)(i,P)).add(e.graphic),h.isActive=!0,u[s]=h,b+=n,++A>=d&&(A=0,b=g,v=e.negative?v+p:v-p)}}let k=-1;for(let e of u)++k,e&&(e.isActive?e.isActive=!1:(e.destroy(),u.splice(k,1)))}}}l.defaultOptions=(0,r.merge)(a.defaultOptions,{itemPadding:.1,marker:{symbol:"circle",states:{hover:{},select:{}}},slotsPerBar:void 0}),(0,r.extend)(l.prototype,{markerAttribs:void 0}),o().registerSeriesType("dotplot",l);let d=s();export{d as default};