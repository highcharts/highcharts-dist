/*
 Highstock JS v11.1.0 (2023-10-03)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/chaikin",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,g,b,n){a.hasOwnProperty(g)||(a[g]=n.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,
module:a[g]}})))}a=a?a._modules:{};b(a,"Stock/Indicators/AD/ADIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,g){const {sma:b}=a.seriesTypes,{error:n,extend:m,merge:p}=g;class h extends b{constructor(){super(...arguments);this.points=this.options=this.data=void 0}static populateAverage(a,d,k,c){const e=d[c][1],f=d[c][2];d=d[c][3];k=k[c];return[a[c],d===e&&d===f||e===f?0:(2*d-f-e)/(e-f)*k]}getValues(a,d){const k=d.period,c=a.xData,e=a.yData;var f=d.volumeSeriesID,
l=a.chart.get(f);d=l&&l.yData;const b=e?e.length:0,g=[],q=[],m=[];if(!(c.length<=k&&b&&4!==e[0].length)){if(l){for(f=k;f<b;f++)a=g.length,l=h.populateAverage(c,e,d,f,k),0<a&&(l[1]+=g[a-1][1]),g.push(l),q.push(l[0]),m.push(l[1]);return{values:g,xData:q,yData:m}}n("Series "+f+" not found! Check `volumeSeriesID`.",!0,a.chart)}}}h.defaultOptions=p(b.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}});m(h.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"});a.registerSeriesType("ad",
h);"";return h});b(a,"Stock/Indicators/Chaikin/ChaikinIndicator.js",[a["Stock/Indicators/AD/ADIndicator.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b,r){const {ema:g}=b.seriesTypes,{correctFloat:m,extend:p,merge:h,error:t}=r;class d extends g{constructor(){super(...arguments);this.points=this.options=this.data=void 0}getValues(b,c){var e=c.periods,f=c.period;const d=[],g=[],h=[];if(2!==e.length||e[1]<=e[0])t('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');
else if(c=a.prototype.getValues.call(this,b,{volumeSeriesID:c.volumeSeriesID,period:f}))if(b=super.getValues.call(this,c,{period:e[0]}),c=super.getValues.call(this,c,{period:e[1]}),b&&c){var k=e[1]-e[0];for(f=0;f<c.yData.length;f++)e=m(b.yData[f+k]-c.yData[f]),d.push([c.xData[f],e]),g.push(c.xData[f]),h.push(e);return{values:d,xData:g,yData:h}}}}d.defaultOptions=h(g.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",period:9,periods:[3,10]}});p(d.prototype,{nameBase:"Chaikin Osc",nameComponents:["periods"]});
b.registerSeriesType("chaikin",d);"";return d});b(a,"masters/indicators/chaikin.src.js",[],function(){})});
//# sourceMappingURL=chaikin.js.map