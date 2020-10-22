/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/accumulation-distribution",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,h,k){a.hasOwnProperty(b)||(a[b]=k.apply(null,h))}a=a?a._modules:{};b(a,"Stock/Indicators/ADIndicator.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],
function(a,b){var h=b.error;a.seriesType("ad","sma",{params:{volumeSeriesID:"volume"}},{nameComponents:!1,nameBase:"Accumulation/Distribution",getValues:function(a,b){var d=b.period,m=a.xData,f=a.yData,c=b.volumeSeriesID,e=a.chart.get(c);b=e&&e.yData;var n=f?f.length:0,g=[],p=[],q=[];if(!(m.length<=d&&n&&4!==f[0].length)){if(e){for(;d<n;d++){a=g.length;c=f[d][1];e=f[d][2];var l=f[d][3],k=b[d];c=[m[d],l===c&&l===e||c===e?0:(2*l-e-c)/(c-e)*k];0<a&&(c[1]+=g[a-1][1]);g.push(c);p.push(c[0]);q.push(c[1])}return{values:g,
xData:p,yData:q}}h("Series "+c+" not found! Check `volumeSeriesID`.",!0,a.chart)}}});""});b(a,"masters/indicators/accumulation-distribution.src.js",[],function(){})});
//# sourceMappingURL=accumulation-distribution.js.map