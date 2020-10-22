/*
 Highstock JS v8.2.2 (2020-10-22)

 Money Flow Index indicator for Highstock

 (c) 2010-2019 Grzegorz Blachliski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,c,h,g){a.hasOwnProperty(c)||(a[c]=g.apply(null,h))}a=a?a._modules:{};c(a,"Stock/Indicators/MFIIndicator.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,c){function h(a){return a.reduce(function(b,
a){return b+a})}function g(a){return(a[1]+a[2]+a[3])/3}var t=c.error,u=c.isArray;a.seriesType("mfi","sma",{params:{period:14,volumeSeriesID:"volume",decimals:4}},{nameBase:"Money Flow Index",getValues:function(a,b){var c=b.period,m=a.xData,e=a.yData,v=e?e.length:0,w=b.decimals,f=1,d=a.chart.get(b.volumeSeriesID),n=d&&d.yData,p=[],q=[],r=[],k=[],l=[];if(!d)t("Series "+b.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,a.chart);else if(!(m.length<=c)&&u(e[0])&&4===e[0].length&&n){for(a=g(e[f]);f<
c+1;)b=a,a=g(e[f]),b=a>=b,d=a*n[f],k.push(b?d:0),l.push(b?0:d),f++;for(c=f-1;c<v;c++)c>f-1&&(k.shift(),l.shift(),b=a,a=g(e[c]),b=a>b,d=a*n[c],k.push(b?d:0),l.push(b?0:d)),b=h(l),d=h(k),b=d/b,b=parseFloat((100-100/(1+b)).toFixed(w)),p.push([m[c],b]),q.push(m[c]),r.push(b);return{values:p,xData:q,yData:r}}}});""});c(a,"masters/indicators/mfi.src.js",[],function(){})});
//# sourceMappingURL=mfi.js.map