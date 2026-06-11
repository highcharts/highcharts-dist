!/**
 * Highcharts Gantt JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/current-date-indicator
 * @requires highcharts
 *
 * CurrentDateIndicator
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/current-date-indicator",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/current-date-indicator"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("u"<typeof window?this:window,t=>(()=>{"use strict";var e,r,o={944:e=>{e.exports=t}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={exports:{}};return o[t](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n={};i.d(n,{default:()=>d});var s=i(944),h=i.n(s);let{composed:l}=h(),c={color:"var(--highcharts-highlight-color-20)",width:2,label:{format:"%[abdYHM]",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t,!0)},rotation:0,style:{fontSize:"0.7em"}}},u=h();e=u.Axis,r=u.PlotLineOrBand,(0,s.pushUnique)(l,"CurrentDateIndication")&&((0,s.addEvent)(e,"afterSetOptions",function(){let t=this.options,e=t.currentDateIndicator;if(e){let r="object"==typeof e?(0,s.merge)(c,e):(0,s.merge)(c);r.value=Date.now(),r.className="highcharts-current-date-indicator",t.plotLines??(t.plotLines=[]),t.plotLines.push(r)}}),(0,s.addEvent)(r,"render",function(){this.label?.attr({text:this.getLabelText(this.options.label||{})})}),(0,s.wrap)(r.prototype,"getLabelText",function(t,e){if(this.options.className&&-1!==this.options.className.indexOf("highcharts-current-date-indicator")&&"function"==typeof this.options.label?.formatter){let t=this.options;return t.value=Date.now(),t.label?.formatter?.call(this,t.value,t.label.format,this)||""}return t.call(this,e)}));let d=h();return n.default})());