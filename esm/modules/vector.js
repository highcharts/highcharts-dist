/**
 * Highcharts JS v13.0.0 (2026-06-11)
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
 */import*as t from"../highcharts.js";var r={};r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);let e=t.default;var i=r.n(e);let o=t.default.SeriesRegistry;var a=r.n(o);let{animObject:s}=i(),{series:n,seriesTypes:{scatter:h}}=a();class l extends h{animate(t){t?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},s(this.options.animation))}arrow(t){let r=t.length/this.lengthMax*this.options.vectorLength/20,e={start:10*r,center:0,end:-10*r}[this.options.rotationOrigin]||0;return[["M",0,7*r+e],["L",-1.5*r,7*r+e],["L",0,10*r+e],["L",1.5*r,7*r+e],["L",0,7*r+e],["L",0,-10*r+e]]}drawPoints(){let t=this.chart;for(let r of this.points){let i=r.plotX,o=r.plotY;!1===this.options.clip||t.isInsidePlot(i,o,{inverted:t.inverted})?(r.graphic||(r.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+(0,e.pick)(r.colorIndex,r.series.colorIndex))),r.graphic.attr({d:this.arrow(r),translateX:i,translateY:o,rotation:r.direction}),this.chart.styledMode||r.graphic.attr(this.pointAttribs(r))):r.graphic&&(r.graphic=r.graphic.destroy())}}pointAttribs(t,r){let e=this.options,i=t?.color||this.color,o=this.options.lineWidth;return r&&(i=e.states[r].color||i,o=(e.states[r].lineWidth||o)+(e.states[r].lineWidthPlus||0)),{stroke:i,"stroke-width":o}}translate(){n.prototype.translate.call(this),this.lengthMax=(0,e.arrayMax)(this.getColumn("length"))}}l.defaultOptions=(0,e.merge)(h.defaultOptions,{lineWidth:2,marker:void 0,rotationOrigin:"center",states:{hover:{lineWidthPlus:1}},tooltip:{pointFormat:"<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}\xb0</b><br/>"},vectorLength:20}),(0,e.extend)(l.prototype,{drawGraph:i().noop,getSymbol:i().noop,markerAttribs:i().noop,parallelArrays:["x","y","length","direction"],pointArrayMap:["y","length","direction"]}),a().registerSeriesType("vector",l);let p=i();export{p as default};