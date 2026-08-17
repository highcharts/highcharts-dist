/**
 * Highcharts Gantt JS v13.0.1 (2026-08-17)
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
 */import*as t from"../highcharts.js";let e={};e.n=t=>{let r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var o=r[a++],i=r[a++];e.o(t,o)?0===i&&a++:0===i?Object.defineProperty(t,o,{enumerable:!0,value:r[a++]}):Object.defineProperty(t,o,{enumerable:!0,get:i})}else for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let r=t.default;var a,o,i=e.n(r);let{composed:n}=i(),l={color:"var(--highcharts-highlight-color-20)",width:2,label:{format:"%[abdYHM]",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t,!0)},rotation:0,style:{fontSize:"0.7em"}}},s=i();a=s.Axis,o=s.PlotLineOrBand,(0,r.pushUnique)(n,"CurrentDateIndication")&&((0,r.addEvent)(a,"afterSetOptions",function(){let t=this.options,e=t.currentDateIndicator;if(e){let a="object"==typeof e?(0,r.merge)(l,e):(0,r.merge)(l);a.value=Date.now(),a.className="highcharts-current-date-indicator",t.plotLines??(t.plotLines=[]),t.plotLines.push(a)}}),(0,r.addEvent)(o,"render",function(){this.label?.attr({text:this.getLabelText(this.options.label||{})})}),(0,r.wrap)(o.prototype,"getLabelText",function(t,e){if(this.options.className&&-1!==this.options.className.indexOf("highcharts-current-date-indicator")&&"function"==typeof this.options.label?.formatter){let t=this.options;return t.value=Date.now(),t.label?.formatter?.call(this,t.value,t.label.format,this)||""}return t.call(this,e)}));let c=i();export{c as default};