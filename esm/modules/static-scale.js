/**
 * Highcharts Gantt JS v12.4.0 (2025-09-04)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2025 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */import*as t from"../highcharts.js";var e={};e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let i=t.default;var a=e.n(i);let{addEvent:r,defined:s,isNumber:o}=a();function h(){let t=this.chart.userOptions.chart;!this.horiz&&o(this.options.staticScale)&&(!t?.height||t.scrollablePlotArea?.minHeight)&&(this.staticScale=this.options.staticScale)}function l(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,i=t.options.staticScale;if(t.staticScale&&i&&s(t.min)&&s(t.max)){let a=(t.brokenAxis?.unitLength??t.max+t.tickInterval-t.min)*i,r=(a=Math.max(a,i))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(r)>=1&&(e.plotHeight=a,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+r,!!e.initiatedScale&&void 0)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=void 0}let c=a();({compose:function(t,e){let i=e.prototype;i.adjustHeight||(r(t,"afterSetOptions",h),i.adjustHeight=l,r(e,"render",i.adjustHeight))}}).compose(c.Axis,c.Chart);let n=a();export{n as default};