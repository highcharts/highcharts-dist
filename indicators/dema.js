/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Rafa Sebestjaski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/dema",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,c,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,c))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
f,m,k,n){if(a)return k?k(a):!0;b(n||this.generateMessage(m,f));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/DEMAIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,c){var f=c.correctFloat,m=c.isArray,k=a.seriesTypes.ema;a.seriesType("dema","ema",{},{init:function(){var a=
arguments,l=this;b.isParentLoaded(k,"ema",l.type,function(b){b.prototype.init.apply(l,a)})},getEMA:function(a,b,d,f,c,g){return k.prototype.calculateEma(g||[],a,"undefined"===typeof c?1:c,this.chart.series[0].EMApercent,b,"undefined"===typeof f?-1:f,d)},getValues:function(a,b){var d=b.period,c=2*d,l=a.xData,g=a.yData,p=g?g.length:0,q=-1,t=[],u=[],v=[],h=0,w=[],e;a.EMApercent=2/(d+1);if(!(p<2*d-1)){m(g[0])&&(q=b.index?b.index:0);a=k.prototype.accumulatePeriodPoints(d,q,g);b=a/d;a=0;for(e=d;e<p+2;e++){e<
p+1&&(h=this.getEMA(g,n,b,q,e)[1],w.push(h));var n=h;if(e<c)a+=h;else{e===c&&(b=a/d);h=w[e-d-1];var x=this.getEMA([h],x,b)[1];var r=[l[e-2],f(2*h-x)];t.push(r);u.push(r[0]);v.push(r[1])}}return{values:t,xData:u,yData:v}}}});""});b(a,"masters/indicators/dema.src.js",[],function(){})});
//# sourceMappingURL=dema.js.map