/*
 Highcharts JS v11.1.0 (2023-10-19)

 Streamgraph module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/streamgraph",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,e,c){a.hasOwnProperty(b)||(a[b]=c.apply(null,e),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}a=a?a._modules:
{};b(a,"Series/Streamgraph/StreamgraphSeriesDefaults.js",[],function(){"";return{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}});b(a,"Series/Streamgraph/StreamgraphSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Streamgraph/StreamgraphSeriesDefaults.js"],a["Core/Utilities.js"]],function(a,b,e){const {areaspline:c}=a.seriesTypes,{merge:f,extend:g}=e;class d extends c{constructor(){super(...arguments);this.options=this.points=this.data=void 0}streamStacker(a,b,c){a[0]-=b.total/
2;a[1]-=b.total/2;this.stackedYData[c]=a}}d.defaultOptions=f(c.defaultOptions,b);g(d.prototype,{negStacks:!1});a.registerSeriesType("streamgraph",d);return d});b(a,"masters/modules/streamgraph.src.js",[],function(){})});
//# sourceMappingURL=streamgraph.js.map