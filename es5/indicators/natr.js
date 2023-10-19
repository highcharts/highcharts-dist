/*
 Highstock JS v11.1.0 (2023-10-19)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe? Dalek

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/natr",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,e,c,f){a.hasOwnProperty(e)||(a[e]=f.apply(null,c),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,
module:a[e]}})))}a=a?a._modules:{};c(a,"Stock/Indicators/NATR/NATRIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var c=this&&this.__extends||function(){function a(d,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d])};return a(d,b)}return function(d,b){function c(){this.constructor=d}if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+
String(b)+" is not a constructor or null");a(d,b);d.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}}(),f=a.seriesTypes.atr,k=e.merge;e=function(a){function d(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;return b}c(d,a);d.prototype.getValues=function(b,d){var c=a.prototype.getValues.apply(this,arguments),e=c.values.length,f=b.yData,g=0,h=d.period-1;if(c){for(;g<e;g++)c.yData[g]=c.values[g][1]/f[h][3]*100,c.values[g][1]=c.yData[g],
h++;return c}};d.defaultOptions=k(f.defaultOptions,{tooltip:{valueSuffix:"%"}});return d}(f);a.registerSeriesType("natr",e);"";return e});c(a,"masters/indicators/natr.src.js",[],function(){})});
//# sourceMappingURL=natr.js.map