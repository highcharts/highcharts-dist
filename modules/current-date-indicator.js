!/**
 * Highcharts Gantt JS v13.1.0 (2026-09-18)
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
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/current-date-indicator",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/current-date-indicator"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("u"<typeof window?this:window,t=>(()=>{"use strict";var e,r,o={944(e){e.exports=t}};let i={};function a(t){let e=i[t];if(void 0!==e)return e.exports;let r=i[t]={exports:{}};return o[t](r,r.exports,a),r.exports}a.n=t=>{let e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let n={};a.d(n,{default:()=>d});var s=a(944),l=a.n(s);let{composed:h}=l(),c={color:"var(--highcharts-highlight-color-20)",width:2,label:{format:"%[abdYHM]",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t,!0)},rotation:0,style:{fontSize:"0.7em"}}},u=l();e=u.Axis,r=u.PlotLineOrBand,(0,s.pushUnique)(h,"CurrentDateIndication")&&((0,s.addEvent)(e,"afterSetOptions",function(){let t=this.options,e=t.currentDateIndicator;if(e){let r="object"==typeof e?(0,s.merge)(c,e):(0,s.merge)(c);r.value=Date.now(),r.className="highcharts-current-date-indicator",t.plotLines??(t.plotLines=[]),t.plotLines.push(r)}}),(0,s.addEvent)(r,"render",function(){this.label?.attr({text:this.getLabelText(this.options.label||{})})}),(0,s.wrap)(r.prototype,"getLabelText",function(t,e){if(this.options.className&&-1!==this.options.className.indexOf("highcharts-current-date-indicator")&&"function"==typeof this.options.label?.formatter){let t=this.options;return t.value=Date.now(),t.label?.formatter?.call(this,t.value,t.label.format,this)||""}return t.call(this,e)}));let d=l();return n.default})());