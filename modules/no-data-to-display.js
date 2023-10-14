/*
 Highcharts JS v11.1.0 (2023-10-14)

 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2021 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/no-data-to-display",["highcharts"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,d,c,k){a.hasOwnProperty(d)||(a[d]=k.apply(null,c),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:a[d]}})))}
a=a?a._modules:{};c(a,"Extensions/NoDataToDisplay/NoDataDefaults.js",[],function(){return{lang:{noData:"No data to display"},noData:{attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"0.8em",color:"#666666"}}}});c(a,"Extensions/NoDataToDisplay/NoDataToDisplay.js",[a["Core/Renderer/HTML/AST.js"],a["Extensions/NoDataToDisplay/NoDataDefaults.js"],a["Core/Utilities.js"]],function(a,c,h){function d(){const a=this.series||[];let b=a.length;for(;b--;)if(a[b].hasData()&&
!a[b].options.isInternal)return!0;return this.loadingShown}function g(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())}function l(c){var b=this.options;c=c||b&&b.lang.noData||"";b=b&&(b.noData||{});this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(c,0,0,void 0,void 0,void 0,b.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(a.filterUserAttributes(b.attr||{})).css(b.style||{}),this.noDataLabel.align(m(this.noDataLabel.getBBox(),b.position||
{}),!1,"plotBox"))}function n(){this.hasData()?this.hideNoData():this.showNoData()}const {addEvent:p,extend:m,merge:q,pushUnique:e}=h,f=[];return{compose:function(a,b){if(e(f,a)){const b=a.prototype;b.hasData=d;b.hideNoData=g;b.showNoData=l;p(a,"render",n)}e(f,b)&&q(!0,b,c)}}});c(a,"masters/modules/no-data-to-display.src.js",[a["Core/Globals.js"],a["Extensions/NoDataToDisplay/NoDataToDisplay.js"]],function(a,c){c.compose(a.Chart,a.defaultOptions)})});
//# sourceMappingURL=no-data-to-display.js.map