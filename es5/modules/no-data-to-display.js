/*
 Highcharts JS v11.1.0 (2023-10-19)

 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2021 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/no-data-to-display",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,e,b,k){a.hasOwnProperty(e)||(a[e]=k.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}
a=a?a._modules:{};b(a,"Extensions/NoDataToDisplay/NoDataDefaults.js",[],function(){return{lang:{noData:"No data to display"},noData:{attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"0.8em",color:"#666666"}}}});b(a,"Extensions/NoDataToDisplay/NoDataToDisplay.js",[a["Core/Renderer/HTML/AST.js"],a["Extensions/NoDataToDisplay/NoDataDefaults.js"],a["Core/Utilities.js"]],function(a,b,d){function e(){for(var a=this.series||[],c=a.length;c--;)if(a[c].hasData()&&
!a[c].options.isInternal)return!0;return this.loadingShown}function h(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())}function l(b){var c=this.options;b=b||c&&c.lang.noData||"";c=c&&(c.noData||{});this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(b,0,0,void 0,void 0,void 0,c.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(a.filterUserAttributes(c.attr||{})).css(c.style||{}),this.noDataLabel.align(m(this.noDataLabel.getBBox(),c.position||
{}),!1,"plotBox"))}function n(){this.hasData()?this.hideNoData():this.showNoData()}var p=d.addEvent,m=d.extend,q=d.merge,f=d.pushUnique,g=[];return{compose:function(a,c){if(f(g,a)){var d=a.prototype;d.hasData=e;d.hideNoData=h;d.showNoData=l;p(a,"render",n)}f(g,c)&&q(!0,c,b)}}});b(a,"masters/modules/no-data-to-display.src.js",[a["Core/Globals.js"],a["Extensions/NoDataToDisplay/NoDataToDisplay.js"]],function(a,b){b.compose(a.Chart,a.defaultOptions)})});
//# sourceMappingURL=no-data-to-display.js.map