/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Dalek

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/vwap",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,m,g){a.hasOwnProperty(b)||(a[b]=g.apply(null,m))}a=a?a._modules:{};b(a,"Stock/Indicators/VWAPIndicator.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,b){var m=
b.error,g=b.isArray;a.seriesType("vwap","sma",{params:{period:30,volumeSeriesID:"volume"}},{getValues:function(a,b){var d=a.chart,e=a.xData;a=a.yData;var t=b.period,h=!0,f;if(f=d.get(b.volumeSeriesID))return g(a[0])||(h=!1),this.calculateVWAPValues(h,e,a,f,t);m("Series "+b.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,d)},calculateVWAPValues:function(a,b,d,e,m){var h=e.yData,f=e.xData.length,c=b.length;e=[];var g=[],p=[],q=[],n=[],k;f=c<=f?c:f;for(k=c=0;c<f;c++){var l=a?(d[c][1]+d[c][2]+
d[c][3])/3:d[c];l*=h[c];l=k?e[c-1]+l:l;var r=k?g[c-1]+h[c]:h[c];e.push(l);g.push(r);n.push([b[c],l/r]);p.push(n[c][0]);q.push(n[c][1]);k++;k===m&&(k=0)}return{values:n,xData:p,yData:q}}});""});b(a,"masters/indicators/vwap.src.js",[],function(){})});
//# sourceMappingURL=vwap.js.map