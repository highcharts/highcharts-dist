/*
 Highcharts JS v11.1.0 (2023-10-16)

 Dot plot series type for Highcharts

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/dotplot",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,g,d,b){a.hasOwnProperty(g)||(a[g]=b.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:a[g]}})))}a=a?a._modules:
{};b(a,"Series/DotPlot/DotPlotSeriesDefaults.js",[],function(){return{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}}});b(a,"Series/DotPlot/DotPlotSeries.js",[a["Series/DotPlot/DotPlotSeriesDefaults.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b,d){var g=this&&this.__extends||function(){function a(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var b in e)Object.prototype.hasOwnProperty.call(e,
b)&&(a[b]=e[b])};return a(b,e)}return function(b,e){function d(){this.constructor=b}if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");a(b,e);b.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)}}(),m=b.seriesTypes.column,w=d.extend,z=d.merge,x=d.pick;d=function(b){function d(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}g(d,b);d.prototype.drawPoints=function(){var a=
this.options,b=this.chart.renderer,d=a.marker;a=this.yAxis.transA*a.itemPadding;for(var g=this.borderWidth%2?.5:1,r=0,m=this.points;r<m.length;r++){var c=m[r],h=c.marker||{},k=h.symbol||d.symbol,n=x(h.radius,d.radius),y="rect"!==k,p;c.graphics=h=c.graphics||[];var q=c.pointAttr?c.pointAttr[c.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(c,c.selected&&"select");delete q.r;this.chart.styledMode&&(delete q.stroke,delete q["stroke-width"]);if(null!==c.y){c.graphic||(c.graphic=b.g("point").add(this.group));
var t=x(c.stackY,c.y);var u=Math.min(c.pointWidth,this.yAxis.transA-a);var v=Math.floor(t);for(p=t;p>t-c.y;p--,v--){var f=c.barX+(y?c.pointWidth/2-u/2:0);var l=this.yAxis.toPixels(p,!0)+a/2;this.options.crisp&&(f=Math.round(f)-g,l=Math.round(l)+g);l={x:f,y:l,width:Math.round(y?u:c.pointWidth),height:Math.round(u),r:n};(f=h[v])?f.animate(l):f=b.symbol(k).attr(w(l,q)).add(c.graphic);f.isActive=!0;h[v]=f}}c=-1;k=0;for(n=h;k<n.length;k++)f=n[k],++c,f&&(f.isActive?f.isActive=!1:(f.destroy(),h.splice(c,
1)))}};d.defaultOptions=z(m.defaultOptions,a);return d}(m);w(d.prototype,{markerAttribs:void 0});b.registerSeriesType("dotplot",d);return d});b(a,"masters/modules/dotplot.src.js",[],function(){})});
//# sourceMappingURL=dotplot.js.map