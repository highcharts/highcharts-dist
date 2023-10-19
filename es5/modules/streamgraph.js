/*
 Highcharts JS v11.1.0 (2023-10-19)

 Streamgraph module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/streamgraph",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,d,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}a=a?a._modules:
{};b(a,"Series/Streamgraph/StreamgraphSeriesDefaults.js",[],function(){"";return{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}});b(a,"Series/Streamgraph/StreamgraphSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Streamgraph/StreamgraphSeriesDefaults.js"],a["Core/Utilities.js"]],function(a,b,d){var e=this&&this.__extends||function(){function a(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)Object.prototype.hasOwnProperty.call(c,
b)&&(a[b]=c[b])};return a(b,c)}return function(b,c){function d(){this.constructor=b}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),g=a.seriesTypes.areaspline,h=d.merge;d=d.extend;var f=function(a){function d(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.points=void 0;c.options=void 0;return c}e(d,a);d.prototype.streamStacker=function(a,
b,d){a[0]-=b.total/2;a[1]-=b.total/2;this.stackedYData[d]=a};d.defaultOptions=h(g.defaultOptions,b);return d}(g);d(f.prototype,{negStacks:!1});a.registerSeriesType("streamgraph",f);return f});b(a,"masters/modules/streamgraph.src.js",[],function(){})});
//# sourceMappingURL=streamgraph.js.map