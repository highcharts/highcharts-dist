/*
 Highcharts JS v11.1.0 (2023-10-18)

 Dot plot series type for Highcharts

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/dotplot",["highcharts"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,d,c,v){a.hasOwnProperty(d)||(a[d]=v.apply(null,c),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:a[d]}})))}a=a?a._modules:
{};c(a,"Series/DotPlot/DotPlotSeriesDefaults.js",[],function(){return{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}}});c(a,"Series/DotPlot/DotPlotSeries.js",[a["Series/DotPlot/DotPlotSeriesDefaults.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c,q){const {column:d}=c.seriesTypes,{extend:r,merge:w,pick:t}=q;class f extends d{constructor(){super(...arguments);this.points=this.options=this.data=void 0}drawPoints(){var a=this.options;const c=this.chart.renderer,
d=a.marker;a=this.yAxis.transA*a.itemPadding;const f=this.borderWidth%2?.5:1;for(const b of this.points){var g=b.marker||{},k=g.symbol||d.symbol;const q=t(g.radius,d.radius),u="rect"!==k;let l;var h=void 0;let m,n;var e=void 0;b.graphics=g=b.graphics||[];const p=b.pointAttr?b.pointAttr[b.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(b,b.selected&&"select");delete p.r;this.chart.styledMode&&(delete p.stroke,delete p["stroke-width"]);if(null!==b.y){b.graphic||(b.graphic=c.g("point").add(this.group));
n=t(b.stackY,b.y);m=Math.min(b.pointWidth,this.yAxis.transA-a);let d=Math.floor(n);for(l=n;l>n-b.y;l--,d--)h=b.barX+(u?b.pointWidth/2-m/2:0),e=this.yAxis.toPixels(l,!0)+a/2,this.options.crisp&&(h=Math.round(h)-f,e=Math.round(e)+f),h={x:h,y:e,width:Math.round(u?m:b.pointWidth),height:Math.round(m),r:q},(e=g[d])?e.animate(h):e=c.symbol(k).attr(r(h,p)).add(b.graphic),e.isActive=!0,g[d]=e}k=-1;for(const a of g)++k,a&&(a.isActive?a.isActive=!1:(a.destroy(),g.splice(k,1)))}}}f.defaultOptions=w(d.defaultOptions,
a);r(f.prototype,{markerAttribs:void 0});c.registerSeriesType("dotplot",f);return f});c(a,"masters/modules/dotplot.src.js",[],function(){})});
//# sourceMappingURL=dotplot.js.map