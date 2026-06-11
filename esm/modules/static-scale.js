/**
 * Highcharts Gantt JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Torstein Hønsi, Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";var e={};e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let i=t.default;var a=e.n(i);let{composed:r}=a();function s(){let t=this.chart.userOptions.chart;!this.horiz&&(0,i.isNumber)(this.options.staticScale)&&(!t?.height||t.scrollablePlotArea?.minHeight)&&(this.staticScale=this.options.staticScale)}function h(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,a=t.options.staticScale;if(t.staticScale&&a&&(0,i.defined)(t.min)&&(0,i.defined)(t.max)){let i=(t.brokenAxis?.unitLength??t.max+t.tickInterval-t.min)*a,r=(i=Math.max(i,a))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(r)>=1&&(e.plotHeight=i,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+r,!!e.initiatedScale&&void 0)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=void 0}let l=a();!function(t,e){if((0,i.pushUnique)(r,"StaticScale")){let a=e.prototype;(0,i.addEvent)(t,"afterSetOptions",s),a.adjustHeight=h,(0,i.addEvent)(e,"render",a.adjustHeight)}}(l.Axis,l.Chart);let o=a();export{o as default};