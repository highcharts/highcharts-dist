/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/ao",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,f,b,g){a.hasOwnProperty(f)||(a[f]=g.apply(null,b))}a=a?a._modules:{};b(a,"Stock/Indicators/AOIndicator.js",[a["Core/Series/Series.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],
function(a,f,b){var g=b.correctFloat,q=b.isArray;a.seriesType("ao","sma",{greaterBarColor:"#06B535",lowerBarColor:"#F21313",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}},{nameBase:"AO",nameComponents:!1,markerAttribs:f.noop,getColumnMetrics:f.seriesTypes.column.prototype.getColumnMetrics,crispCol:f.seriesTypes.column.prototype.crispCol,translate:f.seriesTypes.column.prototype.translate,drawPoints:f.seriesTypes.column.prototype.drawPoints,drawGraph:function(){var a=
this.options,h=this.points,b=a.greaterBarColor;a=a.lowerBarColor;var d=h[0];if(!this.userOptions.color&&d)for(d.color=b,d=1;d<h.length;d++)h[d].color=h[d].y>h[d-1].y?b:h[d].y<h[d-1].y?a:h[d-1].color},getValues:function(a){var b=a.xData||[];a=a.yData||[];var f=a.length,d=[],n=[],p=[],k=0,l=0,c;if(!(34>=b.length)&&q(a[0])&&4===a[0].length){for(c=0;33>c;c++){var e=(a[c][1]+a[c][2])/2;29<=c&&(k=g(k+e));l=g(l+e)}for(c=33;c<f;c++){e=(a[c][1]+a[c][2])/2;k=g(k+e);l=g(l+e);e=k/5;var m=l/34;e=g(e-m);d.push([b[c],
e]);n.push(b[c]);p.push(e);e=c+1-5;m=c+1-34;k=g(k-(a[e][1]+a[e][2])/2);l=g(l-(a[m][1]+a[m][2])/2)}return{values:d,xData:n,yData:p}}}});""});b(a,"masters/indicators/ao.src.js",[],function(){})});
//# sourceMappingURL=ao.js.map