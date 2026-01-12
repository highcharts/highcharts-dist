!/**
 * Highcharts Gantt JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Torstein Honsi, Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/static-scale"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("u"<typeof window?this:window,t=>(()=>{"use strict";var e={944:e=>{e.exports=t}},i={};function r(t){var a=i[t];if(void 0!==a)return a.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};r.d(a,{default:()=>u});var o=r(944),s=r.n(o);let{addEvent:h,defined:c,isNumber:n}=s();function l(){let t=this.chart.userOptions.chart;!this.horiz&&n(this.options.staticScale)&&(!t?.height||t.scrollablePlotArea?.minHeight)&&(this.staticScale=this.options.staticScale)}function d(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,i=t.options.staticScale;if(t.staticScale&&i&&c(t.min)&&c(t.max)){let r=(t.brokenAxis?.unitLength??t.max+t.tickInterval-t.min)*i,a=(r=Math.max(r,i))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(a)>=1&&(e.plotHeight=r,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+a,!!e.initiatedScale&&void 0)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=void 0}let p=s();({compose:function(t,e){let i=e.prototype;i.adjustHeight||(h(t,"afterSetOptions",l),i.adjustHeight=d,h(e,"render",i.adjustHeight))}}).compose(p.Axis,p.Chart);let u=s();return a.default})());