/*
 Highstock JS v8.2.2 (2020-10-22)

 Indicator series type for Highstock

 (c) 2010-2019 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/trix",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,c,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,c))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
e,g,h,d){if(a)return h?h(a):!0;b(d||this.generateMessage(g,e));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/TRIXIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,c){var e=c.correctFloat,g=a.seriesTypes.tema;a.seriesType("trix","tema",{},{init:function(){var a=arguments,
d=this;b.isParentLoaded(g,"tema",d.type,function(b){b.prototype.init.apply(d,a)})},getTemaPoint:function(a,b,f,c){if(c>b)var d=[a[c-3],0!==f.prevLevel3?e(f.level3-f.prevLevel3)/f.prevLevel3*100:null];return d}});""});b(a,"masters/indicators/trix.src.js",[],function(){})});
//# sourceMappingURL=trix.js.map