/**
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
 */import*as t from"../highcharts.js";let e={};e.n=t=>{let a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a:a}),a},e.d=(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let a=t.default;var r,o,i=e.n(a);let{composed:n}=i(),l={color:"var(--highcharts-highlight-color-20)",width:2,label:{format:"%[abdYHM]",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t,!0)},rotation:0,style:{fontSize:"0.7em"}}},s=i();r=s.Axis,o=s.PlotLineOrBand,(0,a.pushUnique)(n,"CurrentDateIndication")&&((0,a.addEvent)(r,"afterSetOptions",function(){let t=this.options,e=t.currentDateIndicator;if(e){let r="object"==typeof e?(0,a.merge)(l,e):(0,a.merge)(l);r.value=Date.now(),r.className="highcharts-current-date-indicator",t.plotLines??(t.plotLines=[]),t.plotLines.push(r)}}),(0,a.addEvent)(o,"render",function(){this.label?.attr({text:this.getLabelText(this.options.label||{})})}),(0,a.wrap)(o.prototype,"getLabelText",function(t,e){if(this.options.className&&-1!==this.options.className.indexOf("highcharts-current-date-indicator")&&"function"==typeof this.options.label?.formatter){let t=this.options;return t.value=Date.now(),t.label?.formatter?.call(this,t.value,t.label.format,this)||""}return t.call(this,e)}));let c=i();export{c as default};