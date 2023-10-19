/*
 Highcharts JS v11.1.0 (2023-10-19)

 Pareto series type for Highcharts

 (c) 2010-2021 Sebastian Bochan

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/pareto",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,c,b,l){a.hasOwnProperty(c)||(a[c]=l.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:a[c]}})))}a=a?a._modules:
{};b(a,"Series/DerivedComposition.js",[a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,b,f){const {noop:c}=a,{addEvent:m,defined:n}=f;var d;(function(a){function e(){b.prototype.init.apply(this,arguments);this.initialised=!1;this.baseSeries=null;this.eventRemovers=[];this.addEvents()}function h(){const a=this.chart,b=this.options.baseSeries;this.baseSeries=n(b)&&(a.series[b]||a.get(b))||null}function k(){this.eventRemovers.push(m(this.chart,"afterLinkSeries",()=>
{this.setBaseSeries();this.baseSeries&&!this.initialised&&(this.setDerivedData(),this.addBaseSeriesEvents(),this.initialised=!0)}))}function g(){this.eventRemovers.push(m(this.baseSeries,"updatedData",()=>{this.setDerivedData()}),m(this.baseSeries,"destroy",()=>{this.baseSeries=null;this.initialised=!1}))}function d(){this.eventRemovers.forEach(a=>{a()});b.prototype.destroy.apply(this,arguments)}const q=[];a.hasDerivedData=!0;a.setDerivedData=c;a.compose=function(a){if(f.pushUnique(q,a)){const b=
a.prototype;b.addBaseSeriesEvents=g;b.addEvents=k;b.destroy=d;b.init=e;b.setBaseSeries=h}return a};a.init=e;a.setBaseSeries=h;a.addEvents=k;a.addBaseSeriesEvents=g;a.destroy=d})(d||(d={}));return d});b(a,"Series/ParetoSeries/ParetoSeriesDefaults.js",[],function(){"";return{zIndex:3}});b(a,"Series/ParetoSeries/ParetoSeries.js",[a["Series/DerivedComposition.js"],a["Series/ParetoSeries/ParetoSeriesDefaults.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b,f,l){const {line:c}=
f.seriesTypes,{correctFloat:n,merge:d,extend:p}=l;class e extends c{constructor(){super(...arguments);this.options=this.points=this.data=void 0}sumPointsPercents(a,b,c,d){const e=[];let f=0,h=0,k=0;for(const g of a)null!==g&&(d?h+=g:(a=g/c*100,e.push([b[f],n(k+a)]),k+=a)),++f;return d?h:e}setDerivedData(){const a=this.baseSeries.xData,b=this.baseSeries.yData,c=this.sumPointsPercents(b,a,null,!0);this.setData(this.sumPointsPercents(b,a,c,!1),!1)}}e.defaultOptions=d(c.defaultOptions,b);p(e.prototype,
{hasDerivedData:a.hasDerivedData});a.compose(e);f.registerSeriesType("pareto",e);return e});b(a,"masters/modules/pareto.src.js",[],function(){})});
//# sourceMappingURL=pareto.js.map