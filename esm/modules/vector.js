/**
 * Highcharts JS v13.1.0 (2026-09-18)
 * @module highcharts/modules/vector
 * @requires highcharts
 *
 * Vector plot series module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";let e={};e.n=t=>{let r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var i in r)e.o(r,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:r[i]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let r=t.default;var i=e.n(r);let o=t.default.SeriesRegistry;var a=e.n(o);let{series:s,seriesTypes:{scatter:n}}=a();class l extends n{animate(t){t?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},(0,r.animObject)(this.options.animation))}arrow(t){let e=t.length/this.lengthMax*this.options.vectorLength/20,r={start:10*e,center:0,end:-10*e}[this.options.rotationOrigin]||0;return[["M",0,7*e+r],["L",-1.5*e,7*e+r],["L",0,10*e+r],["L",1.5*e,7*e+r],["L",0,7*e+r],["L",0,-10*e+r]]}drawPoints(){let t=this.chart;for(let e of this.points){let r=e.plotX,i=e.plotY;!1===this.options.clip||t.isInsidePlot(r,i,{inverted:t.inverted})?(e.graphic||(e.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+(e.colorIndex??e.series.colorIndex))),e.graphic.attr({d:this.arrow(e),translateX:r,translateY:i,rotation:e.direction}),this.chart.styledMode||e.graphic.attr(this.pointAttribs(e))):e.graphic&&(e.graphic=e.graphic.destroy())}}pointAttribs(t,e){let r=this.options,i=t?.color||this.color,o=this.options.lineWidth;return e&&(i=r.states?.[e]?.color||i,o=(r.states?.[e]?.lineWidthPlus||0)+(r.states?.[e]?.lineWidth||o||0)),{stroke:i,"stroke-width":o}}translate(){s.prototype.translate.call(this),this.lengthMax=(0,r.arrayMax)(this.getColumn("length"))}}l.defaultOptions=(0,r.merge)(n.defaultOptions,{lineWidth:2,marker:void 0,rotationOrigin:"center",states:{hover:{lineWidthPlus:1}},tooltip:{pointFormat:"<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}\xb0</b><br/>"},vectorLength:20}),(0,r.extend)(l.prototype,{drawGraph:i().noop,getSymbol:i().noop,markerAttribs:i().noop,parallelArrays:["x","y","length","direction"],pointArrayMap:["y","length","direction"]}),a().registerSeriesType("vector",l);let h=i();export{h as default};