/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/atr",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,g,h){a.hasOwnProperty(b)||(a[b]=h.apply(null,g))}a=a?a._modules:{};b(a,"Stock/Indicators/ATRIndicator.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,b){function g(a,
d){return Math.max(a[1]-a[2],"undefined"===typeof d?0:Math.abs(a[1]-d[3]),"undefined"===typeof d?0:Math.abs(a[2]-d[3]))}var h=b.isArray;a.seriesType("atr","sma",{params:{period:14}},{getValues:function(a,d){d=d.period;var b=a.xData,q=(a=a.yData)?a.length:0,k=1,f=0,p=0,l=[],m=[],n=[],c;var r=[[b[0],a[0]]];if(!(b.length<=d)&&h(a[0])&&4===a[0].length){for(c=1;c<=q;c++)if(r.push([b[c],a[c]]),d<k){var e=d;var t=b[c-1],u=g(a[c-1],a[c-2]);e=[t,(f*(e-1)+u)/e];f=e[1];l.push(e);m.push(e[0]);n.push(e[1])}else d===
k?(f=p/(c-1),l.push([b[c-1],f]),m.push(b[c-1]),n.push(f)):p+=g(a[c-1],a[c-2]),k++;return{values:l,xData:m,yData:n}}}});""});b(a,"masters/indicators/atr.src.js",[],function(){})});
//# sourceMappingURL=atr.js.map