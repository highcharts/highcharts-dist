/**
 * Highcharts JS v11.1.0 (2023-10-20)
 *
 * Highcharts 3D funnel module
 *
 * (c) 2010-2021 Kacper Madej
 *
 * License: www.highcharts.com/license
 */!function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/modules/pyramid3d",["highcharts","highcharts/highcharts-3d","highcharts/modules/cylinder","highcharts/modules/funnel3d"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function i(e,t,i,s){e.hasOwnProperty(t)||(e[t]=s.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}i(t,"Series/Pyramid3D/Pyramid3DSeries.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{seriesTypes:{funnel3d:i}}=e,{merge:s}=t;class d extends i{constructor(){super(...arguments),this.data=void 0,this.options=void 0,this.points=void 0}}return d.defaultOptions=s(i.defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),e.registerSeriesType("pyramid3d",d),d}),i(t,"masters/modules/pyramid3d.src.js",[],function(){})});//# sourceMappingURL=pyramid3d.js.map