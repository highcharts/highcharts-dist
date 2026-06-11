/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/lollipop
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Sebastian Bochan, Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";var e={};e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let o=t.default;var r=e.n(o);let s=t.default.SeriesRegistry;var a=e.n(s);let{series:{prototype:{pointClass:l}},seriesTypes:{scatter:{prototype:{pointClass:n}},dumbbell:{prototype:{pointClass:i}}}}=a();class p extends l{}(0,o.extend)(p.prototype,{destroy:i.prototype.destroy,pointSetState:n.prototype.setState,setState:i.prototype.setState});let d=t.default.Series;var c=e.n(d);let{seriesTypes:{column:{prototype:y},dumbbell:{prototype:h},scatter:u}}=a();class g extends c(){drawPoints(){let t=this.points.length,e=0,o;for(super.drawPoints.apply(this,arguments);e<t;)o=this.points[e],this.drawConnector(o),e++}translate(){for(let t of(y.translate.apply(this,arguments),this.points)){let{pointWidth:e,shapeArgs:o}=t;o?.x&&(o.x+=e/2,t.plotX=o.x||0)}}}g.defaultOptions=(0,o.merge)(c().defaultOptions,{threshold:0,connectorWidth:1,groupPadding:.2,pointPadding:.1,states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}},lineWidth:0,dataLabels:{align:void 0,verticalAlign:void 0},pointRange:1}),(0,o.extend)(g.prototype,{alignDataLabel:y.alignDataLabel,crispCol:y.crispCol,drawConnector:h.drawConnector,drawDataLabels:y.drawDataLabels,getColumnMetrics:y.getColumnMetrics,getConnectorAttribs:h.getConnectorAttribs,pointClass:p}),a().registerSeriesType("lollipop",g);let b=r();export{b as default};