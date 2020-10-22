/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,c,k,e){a.hasOwnProperty(c)||(a[c]=e.apply(null,k))}a=a?a._modules:{};b(a,"Mixins/ReduceArray.js",[],function(){return{minInArray:function(a,c){return a.reduce(function(a,
e){return Math.min(a,e[c])},Number.MAX_VALUE)},maxInArray:function(a,c){return a.reduce(function(a,e){return Math.max(a,e[c])},-Number.MAX_VALUE)},getArrayExtremes:function(a,c,b){return a.reduce(function(a,h){return[Math.min(a[0],h[c]),Math.max(a[1],h[b])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});b(a,"Stock/Indicators/WilliamsRIndicator.js",[a["Core/Series/Series.js"],a["Mixins/ReduceArray.js"],a["Core/Utilities.js"]],function(a,c,b){var e=c.getArrayExtremes,h=b.isArray;a.seriesType("williamsr",
"sma",{params:{period:14}},{nameBase:"Williams %R",getValues:function(a,b){b=b.period;var c=a.xData,k=(a=a.yData)?a.length:0,l=[],m=[],n=[],d;if(!(c.length<b)&&h(a[0])&&4===a[0].length){for(d=b-1;d<k;d++){var f=a.slice(d-b+1,d+1);var g=e(f,2,1);f=g[0];g=g[1];var p=a[d][3];f=(g-p)/(g-f)*-100;c[d]&&(l.push([c[d],f]),m.push(c[d]),n.push(f))}return{values:l,xData:m,yData:n}}}});""});b(a,"masters/indicators/williams-r.src.js",[],function(){})});
//# sourceMappingURL=williams-r.js.map