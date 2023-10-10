/*
 Highcharts Gantt JS v11.1.0 (2023-10-10)

 StaticScale

 (c) 2016-2021 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,c,b,d){a.hasOwnProperty(c)||(a[c]=d.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:a[c]}})))}a=a?
a._modules:{};b(a,"Extensions/StaticScale.js",[a["Core/Utilities.js"]],function(a){function c(){var a=this.chart.options.chart;!this.horiz&&k(this.options.staticScale)&&(!a.height||a.scrollablePlotArea&&a.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)}function b(){if("adjustHeight"!==this.redrawTrigger){for(var a=function(a){var b=a.chart,c=!!b.initiatedScale&&b.options.animation,f=a.options.staticScale;if(a.staticScale&&e(a.min)){var d=l(a.brokenAxis&&a.brokenAxis.unitLength,
a.max+a.tickInterval-a.min)*f;d=Math.max(d,f);f=d-b.plotHeight;!b.scrollablePixelsY&&1<=Math.abs(f)&&(b.plotHeight=d,b.redrawTrigger="adjustHeight",b.setSize(void 0,b.chartHeight+f,c));a.series.forEach(function(a){(a=a.sharedClipKey&&b.sharedClips[a.sharedClipKey])&&a.attr(b.inverted?{width:b.plotHeight}:{height:b.plotHeight})})}},b=0,c=this.axes||[];b<c.length;b++)a(c[b]);this.initiatedScale=!0}this.redrawTrigger=null}var d=a.addEvent,e=a.defined,k=a.isNumber,l=a.pick,g=a.pushUnique,h=[];"";return{compose:function(a,
e){g(h,a)&&d(a,"afterSetOptions",c);g(h,e)&&(a=e.prototype,a.adjustHeight=b,d(e,"render",a.adjustHeight))}}});b(a,"masters/modules/static-scale.src.js",[a["Core/Globals.js"],a["Extensions/StaticScale.js"]],function(a,b){b.compose(a.Axis,a.Chart)})});
//# sourceMappingURL=static-scale.js.map