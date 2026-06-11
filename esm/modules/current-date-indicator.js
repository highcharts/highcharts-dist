/**
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
 */import*as t from"../highcharts.js";var e,a,r={};r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let o=t.default;var i=r.n(o);let{composed:n}=i(),l={color:"var(--highcharts-highlight-color-20)",width:2,label:{format:"%[abdYHM]",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t,!0)},rotation:0,style:{fontSize:"0.7em"}}},s=i();e=s.Axis,a=s.PlotLineOrBand,(0,o.pushUnique)(n,"CurrentDateIndication")&&((0,o.addEvent)(e,"afterSetOptions",function(){let t=this.options,e=t.currentDateIndicator;if(e){let a="object"==typeof e?(0,o.merge)(l,e):(0,o.merge)(l);a.value=Date.now(),a.className="highcharts-current-date-indicator",t.plotLines??(t.plotLines=[]),t.plotLines.push(a)}}),(0,o.addEvent)(a,"render",function(){this.label?.attr({text:this.getLabelText(this.options.label||{})})}),(0,o.wrap)(a.prototype,"getLabelText",function(t,e){if(this.options.className&&-1!==this.options.className.indexOf("highcharts-current-date-indicator")&&"function"==typeof this.options.label?.formatter){let t=this.options;return t.value=Date.now(),t.label?.formatter?.call(this,t.value,t.label.format,this)||""}return t.call(this,e)}));let c=i();export{c as default};