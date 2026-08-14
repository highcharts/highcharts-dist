/**
 * Highcharts Gantt JS v13.0.0-modified (2026-08-14)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{if(Array.isArray(i))for(var a=0;a<i.length;){var r=i[a++],s=i[a++];t.o(e,r)?0===s&&a++:0===s?Object.defineProperty(e,r,{enumerable:!0,value:i[a++]}):Object.defineProperty(e,r,{enumerable:!0,get:s})}else for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i=e.default;var a=t.n(i);let{composed:r}=a();function s(){let e=this.chart.userOptions.chart;!this.horiz&&(0,i.isNumber)(this.options.staticScale)&&(!e?.height||e.scrollablePlotArea?.minHeight)&&(this.staticScale=this.options.staticScale)}function l(){if("adjustHeight"!==this.redrawTrigger){for(let e of this.axes||[]){let t=e.chart,a=e.options.staticScale;if(e.staticScale&&a&&(0,i.defined)(e.min)&&(0,i.defined)(e.max)){let i=(e.brokenAxis?.unitLength??e.max+e.tickInterval-e.min)*a,r=(i=Math.max(i,a))-t.plotHeight;!t.scrollablePixelsY&&Math.abs(r)>=1&&(t.plotHeight=i,t.redrawTrigger="adjustHeight",t.setSize(void 0,t.chartHeight+r,!!t.initiatedScale&&void 0)),e.series.forEach(function(e){let i=e.sharedClipKey&&t.sharedClips[e.sharedClipKey];i&&i.attr(t.inverted?{width:t.plotHeight}:{height:t.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=void 0}let o=a();!function(e,t){if((0,i.pushUnique)(r,"StaticScale")){let a=t.prototype;(0,i.addEvent)(e,"afterSetOptions",s),a.adjustHeight=l,(0,i.addEvent)(t,"render",a.adjustHeight)}}(o.Axis,o.Chart);let h=a();export{h as default};