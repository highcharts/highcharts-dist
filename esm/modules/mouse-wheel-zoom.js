let e;/**
 * Highcharts JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/mouse-wheel-zoom
 * @requires highcharts
 *
 * Mousewheel zoom module
 *
 * (c) 2023-2026 Highsoft AS
 * Author: Askel Eirik Johansson
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as t from"../highcharts.js";var i={};i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o=t.default;var s=i.n(o);let{defined:r,isNumber:n,pick:l}=s(),a={backgroundColor:"string",borderColor:"string",borderRadius:"string",color:"string",fill:"string",fontSize:"string",labels:"string",name:"string",stroke:"string",title:"string"},{addEvent:h,isObject:u,pick:g,defined:d,merge:m}=s(),{getAssignedAxis:c}={annotationsFieldsTypes:a,getAssignedAxis:function(e){return e.filter(e=>{let t=e.axis.getExtremes(),i=t.min,o=t.max,s=l(e.axis.minPointOffset,0);return n(i)&&n(o)&&e.value>=i-s&&e.value<=o+s&&!e.axis.options.isInternal})[0]},getFieldType:function(e,t){let i=a[e],o=typeof t;return r(i)&&(o=i),({string:"text",number:"number",boolean:"checkbox"})[o]}},f=[],x={enabled:!0,sensitivity:1.1,showResetButton:!1},p=function(t,i,o,s,r,n,l){let a=g(l.type,t.zooming.type,""),h=[];"x"===a?h=o:"y"===a?h=s:"xy"===a&&(h=t.axes);let u=t.transform({axes:h,to:{x:r-5,y:n-5,width:10,height:10},from:{x:r-5*i,y:n-5*i,width:10*i,height:10*i},trigger:"mousewheel",allowResetButton:l.showResetButton});return u&&(d(e)&&clearTimeout(e),e=setTimeout(()=>{t.pointer?.drop()},400)),u};function y(){var e;let t=(u(e=this.zooming.mouseWheel)||(e={enabled:e??!0}),m(x,e));t.enabled&&h(this.container,"wheel",e=>{e=this.pointer?.normalize(e)||e;let{pointer:i}=this,o=i&&!i.inClass(e.target,"highcharts-no-mousewheel");if(this.isInsidePlot(e.chartX-this.plotLeft,e.chartY-this.plotTop)&&o){let o=t.sensitivity||1.1,s=e.detail||(e.deltaY||0)/120,r=c(i.getCoordinates(e).xAxis),n=c(i.getCoordinates(e).yAxis);p(this,Math.pow(o,s),r?[r.axis]:this.xAxis,n?[n.axis]:this.yAxis,e.chartX,e.chartY,t)&&e.preventDefault?.()}})}let b=s();b.MouseWheelZoom=b.MouseWheelZoom||{compose:function(e){-1===f.indexOf(e)&&(f.push(e),h(e,"afterGetContainer",y))}},b.MouseWheelZoom.compose(b.Chart);let w=s();export{w as default};