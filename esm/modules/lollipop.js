/**
 * Highcharts JS v13.1.1-modified (2026-10-30)
 * @module highcharts/modules/lollipop
 * @requires highcharts
 * @requires highcharts/highcharts-more
 * @requires highcharts/modules/dumbbell
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Sebastian Bochan, Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";import"../highcharts-more.js";import*as e from"./dumbbell.js";let o={};o.n=t=>{let e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let r=t.default;var s=o.n(r);let a=e.default.Series.types.dumbbell;var l=o.n(a);let p=t.default.Series.types.scatter;var n=o.n(p);let i=t.default.Series;var d=o.n(i);let c=d().prototype.pointClass,y=n().prototype.pointClass,h=l().prototype.pointClass;class u extends c{}(0,r.extend)(u.prototype,{destroy:h.prototype.destroy,pointSetState:y.prototype.setState,setState:h.prototype.setState});let g=t.default.Series.types.column;var f=o.n(g);let b=t.default.SeriesRegistry;var m=o.n(b);class C extends d(){drawPoints(){let t=this.points.length,e=0,o;for(super.drawPoints.apply(this,arguments);e<t;)o=this.points[e],this.drawConnector(o),e++}translate(){for(let t of(f().prototype.translate.apply(this,arguments),this.points)){let{pointWidth:e,shapeArgs:o}=t;o?.x&&(o.x+=e/2,t.plotX=o.x||0)}}}C.defaultOptions=(0,r.merge)(d().defaultOptions,{threshold:0,connectorWidth:1,groupPadding:.2,pointPadding:.1,states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}},lineWidth:0,dataLabels:{align:void 0,verticalAlign:void 0},pointRange:1}),(0,r.extend)(C.prototype,{alignDataLabel:f().prototype.alignDataLabel,crispCol:f().prototype.crispCol,drawConnector:l().prototype.drawConnector,drawDataLabels:f().prototype.drawDataLabels,getColumnMetrics:f().prototype.getColumnMetrics,getConnectorAttribs:l().prototype.getConnectorAttribs,pointClass:u}),m().registerSeriesType("lollipop",C);let v=s();export{v as default};