/*
 Highcharts Gantt JS v11.1.0 (2023-10-19)

 StaticScale

 (c) 2016-2021 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,c,e,f){a.hasOwnProperty(c)||(a[c]=f.apply(null,e),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:a[c]}})))}a=a?
a._modules:{};e(a,"Extensions/StaticScale.js",[a["Core/Utilities.js"]],function(a){function c(){const a=this.chart.options.chart;!this.horiz&&l(this.options.staticScale)&&(!a.height||a.scrollablePlotArea&&a.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)}function e(){if("adjustHeight"!==this.redrawTrigger){for(const b of this.axes||[]){const d=b.chart,e=!!d.initiatedScale&&d.options.animation;var a=b.options.staticScale;if(b.staticScale&&k(b.min)){let c=m(b.brokenAxis&&
b.brokenAxis.unitLength,b.max+b.tickInterval-b.min)*a;c=Math.max(c,a);a=c-d.plotHeight;!d.scrollablePixelsY&&1<=Math.abs(a)&&(d.plotHeight=c,d.redrawTrigger="adjustHeight",d.setSize(void 0,d.chartHeight+a,e));b.series.forEach(function(a){(a=a.sharedClipKey&&d.sharedClips[a.sharedClipKey])&&a.attr(d.inverted?{width:d.plotHeight}:{height:d.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=null}const {addEvent:f,defined:k,isNumber:l,pick:m,pushUnique:g}=a,h=[];"";return{compose:function(a,b){g(h,
a)&&f(a,"afterSetOptions",c);g(h,b)&&(a=b.prototype,a.adjustHeight=e,f(b,"render",a.adjustHeight))}}});e(a,"masters/modules/static-scale.src.js",[a["Core/Globals.js"],a["Extensions/StaticScale.js"]],function(a,c){c.compose(a.Axis,a.Chart)})});
//# sourceMappingURL=static-scale.js.map