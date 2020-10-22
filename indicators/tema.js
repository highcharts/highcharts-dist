/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/tema",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,k,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,k))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
f,q,h,r){if(a)return h?h(a):!0;b(r||this.generateMessage(q,f));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/TEMAIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,k){var f=k.correctFloat,q=k.isArray,h=a.seriesTypes.ema;a.seriesType("tema","ema",{},{init:function(){var a=
arguments,g=this;b.isParentLoaded(h,"ema",g.type,function(d){d.prototype.init.apply(g,a)})},getEMA:function(a,g,d,b,l,f){return h.prototype.calculateEma(f||[],a,"undefined"===typeof l?1:l,this.chart.series[0].EMApercent,g,"undefined"===typeof b?-1:b,d)},getTemaPoint:function(a,b,d,h){return[a[h-3],f(3*d.level1-3*d.level2+d.level3)]},getValues:function(a,b){var d=b.period,f=2*d,l=3*d,k=a.xData,m=a.yData,g=m?m.length:0,t=-1,v=[],w=[],x=[],n=[],u=[],e,p,c={};a.EMApercent=2/(d+1);if(!(g<3*d-2)){q(m[0])&&
(t=b.index?b.index:0);a=h.prototype.accumulatePeriodPoints(d,t,m);b=a/d;a=0;for(e=d;e<g+3;e++){e<g+1&&(c.level1=this.getEMA(m,r,b,t,e)[1],n.push(c.level1));var r=c.level1;if(e<f)a+=c.level1;else{e===f&&(b=a/d,a=0);c.level1=n[e-d-1];c.level2=this.getEMA([c.level1],y,b)[1];u.push(c.level2);var y=c.level2;if(e<l)a+=c.level2;else{e===l&&(b=a/d);e===g+1&&(c.level1=n[e-d-1],c.level2=this.getEMA([c.level1],y,b)[1],u.push(c.level2));c.level1=n[e-d-2];c.level2=u[e-2*d-1];c.level3=this.getEMA([c.level2],c.prevLevel3,
b)[1];if(p=this.getTemaPoint(k,l,c,e))v.push(p),w.push(p[0]),x.push(p[1]);c.prevLevel3=c.level3}}}return{values:v,xData:w,yData:x}}}});""});b(a,"masters/indicators/tema.src.js",[],function(){})});
//# sourceMappingURL=tema.js.map