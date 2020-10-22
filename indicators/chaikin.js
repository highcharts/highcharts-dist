/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/chaikin",["highcharts","highcharts/modules/stock"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,d,u,f){a.hasOwnProperty(d)||(a[d]=f.apply(null,u))}a=a?a._modules:{};e(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var d=a.error;return{isParentLoaded:function(a,
f,p,g,m){if(a)return g?g(a):!0;d(m||this.generateMessage(p,f));return!1},generateMessage:function(a,f){return'Error: "'+a+'" indicator type requires "'+f+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});e(a,"Stock/Indicators/ADIndicator.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,d){var e=d.error;a.seriesType("ad","sma",{params:{volumeSeriesID:"volume"}},{nameComponents:!1,nameBase:"Accumulation/Distribution",getValues:function(a,
d){var g=d.period,f=a.xData,k=a.yData,b=d.volumeSeriesID,c=a.chart.get(b);d=c&&c.yData;var q=k?k.length:0,n=[],r=[],t=[];if(!(f.length<=g&&q&&4!==k[0].length)){if(c){for(;g<q;g++){a=n.length;b=k[g][1];c=k[g][2];var l=k[g][3],h=d[g];b=[f[g],l===b&&l===c||b===c?0:(2*l-c-b)/(b-c)*h];0<a&&(b[1]+=n[a-1][1]);n.push(b);r.push(b[0]);t.push(b[1])}return{values:n,xData:r,yData:t}}e("Series "+b+" not found! Check `volumeSeriesID`.",!0,a.chart)}}});""});e(a,"Stock/Indicators/ChaikinIndicator.js",[a["Core/Series/Series.js"],
a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,d,e){var f=a.seriesTypes,p=e.correctFloat,g=e.error,m=f.ema,k=f.ad;a.seriesType("chaikin","ema",{params:{volumeSeriesID:"volume",periods:[3,10]}},{nameBase:"Chaikin Osc",nameComponents:["periods"],init:function(){var a=arguments,c=this;d.isParentLoaded(m,"ema",c.type,function(b){b.prototype.init.apply(c,a)})},getValues:function(a,c){var b=c.periods,d=c.period,e=[],f=[],l=[],h;if(2!==b.length||b[1]<=b[0])g('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');
else if(c=k.prototype.getValues.call(this,a,{volumeSeriesID:c.volumeSeriesID,period:d}))if(a=m.prototype.getValues.call(this,c,{period:b[0]}),c=m.prototype.getValues.call(this,c,{period:b[1]}),a&&c){b=b[1]-b[0];for(h=0;h<c.yData.length;h++)d=p(a.yData[h+b]-c.yData[h]),e.push([c.xData[h],d]),f.push(c.xData[h]),l.push(d);return{values:e,xData:f,yData:l}}}});""});e(a,"masters/indicators/chaikin.src.js",[],function(){})});
//# sourceMappingURL=chaikin.js.map