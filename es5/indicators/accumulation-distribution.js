/*
 Highstock JS v11.1.0 (2023-10-12)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Sebastian Bochan

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/accumulation-distribution",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,b,d,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",
{detail:{path:b,module:a[b]}})))}a=a?a._modules:{};d(a,"Stock/Indicators/AD/ADIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){var d=this&&this.__extends||function(){function a(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e])};return a(b,c)}return function(b,c){function e(){this.constructor=b}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+
String(c)+" is not a constructor or null");a(b,c);b.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)}}(),f=a.seriesTypes.sma,q=b.error,r=b.extend,t=b.merge;b=function(a){function b(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}d(b,a);b.populateAverage=function(a,b,d,k){var c=b[k][1],e=b[k][2];b=b[k][3];d=d[k];return[a[k],b===c&&b===e||c===e?0:(2*b-e-c)/(c-e)*d]};b.prototype.getValues=function(a,e){var c=e.period,d=a.xData,
f=a.yData,h=e.volumeSeriesID,g=a.chart.get(h);e=g&&g.yData;var m=f?f.length:0,l=[],n=[],p=[];if(!(d.length<=c&&m&&4!==f[0].length)){if(g){for(h=c;h<m;h++)a=l.length,g=b.populateAverage(d,f,e,h,c),0<a&&(g[1]+=l[a-1][1]),l.push(g),n.push(g[0]),p.push(g[1]);return{values:l,xData:n,yData:p}}q("Series "+h+" not found! Check `volumeSeriesID`.",!0,a.chart)}};b.defaultOptions=t(f.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}});return b}(f);r(b.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"});
a.registerSeriesType("ad",b);"";return b});d(a,"masters/indicators/accumulation-distribution.src.js",[],function(){})});
//# sourceMappingURL=accumulation-distribution.js.map