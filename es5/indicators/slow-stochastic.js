/*
 Highstock JS v11.1.0 (2023-10-10)

 Slow Stochastic series type for Highcharts Stock

 (c) 2010-2021 Pawel Fus

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/indicators/indicators",["highcharts","highcharts/modules/stock"],function(d){b(d);b.Highcharts=d;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function d(b,a,d,e){b.hasOwnProperty(a)||(b[a]=e.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:a,
module:b[a]}})))}b=b?b._modules:{};d(b,"Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,a){var d=this&&this.__extends||function(){function b(a,c){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,c){b.__proto__=c}||function(b,c){for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(b[a]=c[a])};return b(a,c)}return function(a,c){function g(){this.constructor=a}if("function"!==typeof c&&null!==
c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");b(a,c);a.prototype=null===c?Object.create(c):(g.prototype=c.prototype,new g)}}(),e=b.seriesTypes,k=e.sma,h=e.stochastic;e=a.extend;var l=a.merge;a=function(b){function a(){var c=null!==b&&b.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}d(a,b);a.prototype.getValues=function(c,a){var d=a.periods;a=b.prototype.getValues.call(this,c,a);c={values:[],xData:[],yData:[]};if(a){c.xData=
a.xData.slice(d[1]-1);a=a.yData.slice(d[1]-1);var e=k.prototype.getValues.call(this,{xData:c.xData,yData:a},{index:1,period:d[2]});if(e){for(var f=0,g=c.xData.length;f<g;f++)c.yData[f]=[a[f][1],e.yData[f-d[2]+1]||null],c.values[f]=[c.xData[f],a[f][1],e.yData[f-d[2]+1]||null];return c}}};a.defaultOptions=l(h.defaultOptions,{params:{periods:[14,3,3]}});return a}(h);e(a.prototype,{nameBase:"Slow Stochastic"});b.registerSeriesType("slowstochastic",a);"";return a});d(b,"masters/indicators/slow-stochastic.src.js",
[],function(){})});
//# sourceMappingURL=slow-stochastic.js.map