!/**
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
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/static-scale"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("u"<typeof window?this:window,t=>(()=>{"use strict";var e={944:e=>{e.exports=t}},i={};function r(t){var a=i[t];if(void 0!==a)return a.exports;var s=i[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};r.d(a,{default:()=>d});var s=r(944),o=r.n(s);let{composed:h}=o();function n(){let t=this.chart.userOptions.chart;!this.horiz&&(0,s.isNumber)(this.options.staticScale)&&(!t?.height||t.scrollablePlotArea?.minHeight)&&(this.staticScale=this.options.staticScale)}function c(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,i=t.options.staticScale;if(t.staticScale&&i&&(0,s.defined)(t.min)&&(0,s.defined)(t.max)){let r=(t.brokenAxis?.unitLength??t.max+t.tickInterval-t.min)*i,a=(r=Math.max(r,i))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(a)>=1&&(e.plotHeight=r,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+a,!!e.initiatedScale&&void 0)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=void 0}let l=o();!function(t,e){if((0,s.pushUnique)(h,"StaticScale")){let i=e.prototype;(0,s.addEvent)(t,"afterSetOptions",n),i.adjustHeight=c,(0,s.addEvent)(e,"render",i.adjustHeight)}}(l.Axis,l.Chart);let d=o();return a.default})());