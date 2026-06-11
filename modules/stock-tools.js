!/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/stock-tools
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(t._Highcharts,t._Highcharts.Templating,t._Highcharts.Series,t._Highcharts.AST):"function"==typeof define&&define.amd?define("highcharts/modules/stock-tools",["highcharts/highcharts"],function(t){return i(t,t.Templating,t.Series,t.AST)}):"object"==typeof exports?exports["highcharts/modules/stock-tools"]=i(t._Highcharts,t._Highcharts.Templating,t._Highcharts.Series,t._Highcharts.AST):t.Highcharts=i(t.Highcharts,t.Highcharts.Templating,t.Highcharts.Series,t.Highcharts.AST)}("u"<typeof window?this:window,(t,i,e,s)=>(()=>{"use strict";var n,o={660:t=>{t.exports=s},820:t=>{t.exports=e},944:i=>{i.exports=t},984:t=>{t.exports=i}},a={};function l(t){var i=a[t];if(void 0!==i)return i.exports;var e=a[t]={exports:{}};return o[t](e,e.exports,l),e.exports}l.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return l.d(i,{a:i}),i},l.d=(t,i)=>{for(var e in i)l.o(i,e)&&!l.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})},l.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i);var r={};l.d(r,{default:()=>tk});var c=l(944),h=l.n(c),g=n||(n={});g.compose=function(t){return t.navigation||(t.navigation=new p(t)),t};class p{constructor(t){this.updates=[],this.chart=t}addUpdate(t){this.chart.navigation.updates.push(t)}update(t,i){this.updates.forEach(e=>{e.call(this.chart,t,i)})}}g.Additions=p;let d=n;var u=l(984),f=l.n(u);let v={backgroundColor:"color",backgroundColors:"color",borderColor:"color",borderRadius:"string",color:"color",fill:"color",fontSize:"string",labels:"string",name:"string",stroke:"color",title:"string"},y={annotationsFieldsTypes:v,getAssignedAxis:function(t){return t.filter(t=>{let i=t.axis.getExtremes(),e=i.min,s=i.max,n=(0,c.pick)(t.axis.minPointOffset,0);return(0,c.isNumber)(e)&&(0,c.isNumber)(s)&&t.value>=e-n&&t.value<=s+n&&!t.axis.options.isInternal})[0]},getFieldType:function(t,i){let e=v[t],s=typeof i;return(0,c.defined)(e)&&(s=e),({string:"text",number:"number",boolean:"checkbox",color:"color"})[s]}},{getAssignedAxis:m}=y,x={lang:{navigation:{popup:{simpleShapes:"Simple shapes",lines:"Lines",circle:"Circle",ellipse:"Ellipse",rectangle:"Rectangle",label:"Label",shapeOptions:"Shape options",typeOptions:"Details",fill:"Fill",format:"Text",strokeWidth:"Line width",stroke:"Line color",title:"Title",name:"Name",labelOptions:"Label options",labels:"Labels",backgroundColor:"Background color",backgroundColors:"Background colors",borderColor:"Border color",borderRadius:"Border radius",borderWidth:"Border width",style:"Style",padding:"Padding",fontSize:"Font size",color:"Color",height:"Height",shapes:"Shape options"}}},navigation:{bindingsClassName:"highcharts-bindings-container",bindings:{circleAnnotation:{className:"highcharts-circle-annotation",start:function(t){let i=this.chart.pointer?.getCoordinates(t),e=i&&m(i.xAxis),s=i&&m(i.yAxis),n=this.chart.options.navigation;if(e&&s)return this.chart.addAnnotation((0,c.merge)({langKey:"circle",type:"basicAnnotation",shapes:[{type:"circle",point:{x:e.value,y:s.value,xAxis:e.axis.index,yAxis:s.axis.index},r:5}]},n.annotationsOptions,n.bindings.circleAnnotation.annotationsOptions))},steps:[function(t,i){let e,s=i.options.shapes,n=s&&s[0]&&s[0].point||{};if((0,c.isNumber)(n.xAxis)&&(0,c.isNumber)(n.yAxis)){let i=this.chart.inverted,s=this.chart.xAxis[n.xAxis].toPixels(n.x),o=this.chart.yAxis[n.yAxis].toPixels(n.y);e=Math.max(Math.sqrt(Math.pow(i?o-t.chartX:s-t.chartX,2)+Math.pow(i?s-t.chartY:o-t.chartY,2)),5)}i.update({shapes:[{r:e}]})}]},ellipseAnnotation:{className:"highcharts-ellipse-annotation",start:function(t){let i=this.chart.pointer?.getCoordinates(t),e=i&&m(i.xAxis),s=i&&m(i.yAxis),n=this.chart.options.navigation;if(e&&s)return this.chart.addAnnotation((0,c.merge)({langKey:"ellipse",type:"basicAnnotation",shapes:[{type:"ellipse",xAxis:e.axis.index,yAxis:s.axis.index,points:[{x:e.value,y:s.value},{x:e.value,y:s.value}],ry:1}]},n.annotationsOptions,n.bindings.ellipseAnnotation.annotationsOptions))},steps:[function(t,i){let e=i.shapes[0],s=e.getAbsolutePosition(e.points[1]);e.translatePoint(t.chartX-s.x,t.chartY-s.y,1),e.redraw(!1)},function(t,i){let e=i.shapes[0],s=e.getAbsolutePosition(e.points[0]),n=e.getAbsolutePosition(e.points[1]),o=e.getDistanceFromLine(s,n,t.chartX,t.chartY),a=e.getYAxis(),l=Math.abs(a.toValue(0)-a.toValue(o));e.setYRadius(l),e.redraw(!1)}]},rectangleAnnotation:{className:"highcharts-rectangle-annotation",start:function(t){let i=this.chart.pointer?.getCoordinates(t),e=i&&m(i.xAxis),s=i&&m(i.yAxis);if(!e||!s)return;let n=e.value,o=s.value,a=e.axis.index,l=s.axis.index,r=this.chart.options.navigation;return this.chart.addAnnotation((0,c.merge)({langKey:"rectangle",type:"basicAnnotation",shapes:[{type:"path",points:[{xAxis:a,yAxis:l,x:n,y:o},{xAxis:a,yAxis:l,x:n,y:o},{xAxis:a,yAxis:l,x:n,y:o},{xAxis:a,yAxis:l,x:n,y:o},{command:"Z"}]}]},r.annotationsOptions,r.bindings.rectangleAnnotation.annotationsOptions))},steps:[function(t,i){let e=i.options.shapes,s=e&&e[0]&&e[0].points||[],n=this.chart.pointer?.getCoordinates(t),o=n&&m(n.xAxis),a=n&&m(n.yAxis);if(o&&a){let t=o.value,e=a.value;s[1].x=t,s[2].x=t,s[2].y=e,s[3].y=e,i.update({shapes:[{points:s}]})}}]},labelAnnotation:{className:"highcharts-label-annotation",start:function(t){let i=this.chart.pointer?.getCoordinates(t),e=i&&m(i.xAxis),s=i&&m(i.yAxis),n=this.chart.options.navigation;if(e&&s)return this.chart.addAnnotation((0,c.merge)({langKey:"label",type:"basicAnnotation",labelOptions:{format:"{y:.2f}",overflow:"none",crop:!0},labels:[{point:{xAxis:e.axis.index,yAxis:s.axis.index,x:e.value,y:s.value}}]},n.annotationsOptions,n.bindings.labelAnnotation.annotationsOptions))}}},events:{},annotationsOptions:{animation:{defer:0}}}},{setOptions:b}=h(),{format:w}=f(),{composed:A,doc:$,win:C}=h(),{getAssignedAxis:k,getFieldType:L}=y;function z(){this.chart.navigationBindings&&this.chart.navigationBindings.deselectAnnotation()}function M(){this.navigationBindings&&this.navigationBindings.destroy()}function E(){let t=this.options;t&&t.navigation&&t.navigation.bindings&&(this.navigationBindings=new B(this,t.navigation),this.navigationBindings.initEvents(),this.navigationBindings.initUpdate())}function N(){let t=this.navigationBindings,i="highcharts-disabled-btn";if(this&&t){let e=!1;if(this.series.forEach(t=>{!t.options.isInternal&&t.visible&&(e=!0)}),this.navigationBindings&&this.navigationBindings.container&&this.navigationBindings.container[0]){let s=this.navigationBindings.container[0];(0,c.objectEach)(t.boundClassNames,(t,n)=>{let o=s.querySelectorAll("."+n);if(o)for(let s=0;s<o.length;s++){let n=o[s],a=n.className;"normal"===t.noDataState||e?-1!==a.indexOf(i)&&n.classList.remove(i):-1===a.indexOf(i)&&(n.className+=" "+i)}})}}}function O(){this.deselectAnnotation()}function T(){this.selectedButtonElement=null}function S(t){let i,e,s=t.prototype.defaultOptions.events&&t.prototype.defaultOptions.events.click;function n(t){let i=this,e=i.chart.navigationBindings,n=e.activeAnnotation;s&&s.call(i,t),n!==i?(e.deselectAnnotation(),e.activeAnnotation=i,i.setControlPointsVisibility(!0),(0,c.fireEvent)(e,"showPopup",{annotation:i,formType:"annotation-toolbar",options:e.annotationToFields(i),onSubmit:function(t){if("remove"===t.actionType)e.activeAnnotation=!1,e.chart.removeAnnotation(i);else{let s={};e.fieldsToOptions(t.fields,s),e.deselectAnnotation();let n=s.typeOptions;"measure"===i.options.type&&(n.crosshairY.enabled=0!==n.crosshairY.strokeWidth,n.crosshairX.enabled=0!==n.crosshairX.strokeWidth),i.update(s)}}})):(0,c.fireEvent)(e,"closePopup"),t.activeAnnotation=!0}(0,c.merge)(!0,t.prototype.defaultOptions.events,{click:n,touchstart:function(t){i=t.touches[0].clientX,e=t.touches[0].clientY},touchend:function(t){i&&Math.sqrt(Math.pow(i-t.changedTouches[0].clientX,2)+Math.pow(e-t.changedTouches[0].clientY,2))>=4||n.call(this,t)}})}class B{static compose(t,i){(0,c.pushUnique)(A,"NavigationBindings")&&((0,c.addEvent)(t,"remove",z),S(t),(0,c.objectEach)(t.types,t=>{S(t)}),(0,c.addEvent)(i,"destroy",M),(0,c.addEvent)(i,"load",E),(0,c.addEvent)(i,"render",N),(0,c.addEvent)(B,"closePopup",O),(0,c.addEvent)(B,"deselectButton",T),b(x))}constructor(t,i){this.boundClassNames=void 0,this.chart=t,this.options=i,this.eventsToUnbind=[],this.container=this.chart.container.getElementsByClassName(this.options.bindingsClassName||""),this.container.length||(this.container=$.getElementsByClassName(this.options.bindingsClassName||""))}getCoords(t){let i=this.chart.pointer?.getCoordinates(t);return[i&&k(i.xAxis),i&&k(i.yAxis)]}initEvents(){let t=this,i=t.chart,e=t.container,s=t.options;t.boundClassNames={},(0,c.objectEach)(s.bindings||{},i=>{t.boundClassNames[i.className]=i}),[].forEach.call(e,i=>{t.eventsToUnbind.push((0,c.addEvent)(i,"click",e=>{let s=t.getButtonEvents(i,e);s&&!s.button.classList.contains("highcharts-disabled-btn")&&t.bindingsButtonClick(s.button,s.events,e)}))}),(0,c.objectEach)(s.events||{},(i,e)=>{(0,c.isFunction)(i)&&t.eventsToUnbind.push((0,c.addEvent)(t,e,i,{passive:!1}))}),t.eventsToUnbind.push((0,c.addEvent)(i.container,"click",function(e){!i.cancelClick&&i.isInsidePlot(e.chartX-i.plotLeft,e.chartY-i.plotTop,{visiblePlotOnly:!0})&&t.bindingsChartClick(this,e)})),t.eventsToUnbind.push((0,c.addEvent)(i.container,h().isTouchDevice?"touchmove":"mousemove",function(i){t.bindingsContainerMouseMove(this,i)},h().isTouchDevice?{passive:!1}:void 0))}initUpdate(){let t=this;d.compose(this.chart).navigation.addUpdate(i=>{t.update(i)})}bindingsButtonClick(t,i,e){let s=this.chart,n=s.renderer.boxWrapper,o=!0;this.selectedButtonElement&&(this.selectedButtonElement.classList===t.classList&&(o=!1),(0,c.fireEvent)(this,"deselectButton",{button:this.selectedButtonElement}),this.nextEvent&&(this.currentUserDetails&&"annotations"===this.currentUserDetails.coll&&s.removeAnnotation(this.currentUserDetails),this.mouseMoveEvent=this.nextEvent=!1)),o?(this.selectedButton=i,this.selectedButtonElement=t,(0,c.fireEvent)(this,"selectButton",{button:t}),i.init&&i.init.call(this,t,e),(i.start||i.steps)&&s.renderer.boxWrapper.addClass("highcharts-draw-mode")):(s.stockTools&&t.classList.remove("highcharts-active"),n.removeClass("highcharts-draw-mode"),this.nextEvent=!1,this.mouseMoveEvent=!1,this.selectedButton=null)}bindingsChartClick(t,i){t=this.chart;let e=this.activeAnnotation,s=this.selectedButton,n=t.renderer.boxWrapper;e&&(e.cancelClick||i.activeAnnotation||!i.target.parentNode||function(t,i){let e=C.Element.prototype,s=e.matches||e.msMatchesSelector||e.webkitMatchesSelector,n=null;if(e.closest)n=e.closest.call(t,i);else do{if(s.call(t,i))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return n}(i.target,".highcharts-popup")?e.cancelClick&&setTimeout(()=>{e.cancelClick=!1},0):(0,c.fireEvent)(this,"closePopup")),s&&s.start&&(this.nextEvent?(this.nextEvent(i,this.currentUserDetails),this.steps&&(this.stepIndex++,s.steps[this.stepIndex]?this.mouseMoveEvent=this.nextEvent=s.steps[this.stepIndex]:((0,c.fireEvent)(this,"deselectButton",{button:this.selectedButtonElement}),n.removeClass("highcharts-draw-mode"),s.end&&s.end.call(this,i,this.currentUserDetails),this.nextEvent=!1,this.mouseMoveEvent=!1,this.selectedButton=null))):(this.currentUserDetails=s.start.call(this,i),this.currentUserDetails&&s.steps?(this.stepIndex=0,this.steps=!0,this.mouseMoveEvent=this.nextEvent=s.steps[this.stepIndex]):((0,c.fireEvent)(this,"deselectButton",{button:this.selectedButtonElement}),n.removeClass("highcharts-draw-mode"),this.steps=!1,this.selectedButton=null,s.end&&s.end.call(this,i,this.currentUserDetails))))}bindingsContainerMouseMove(t,i){this.mouseMoveEvent&&this.mouseMoveEvent(i,this.currentUserDetails)}fieldsToOptions(t,i){return(0,c.objectEach)(t,(t,e)=>{let s=parseFloat(t),n=e.split("."),o=n.length-1;if(!(0,c.isNumber)(s)||t.match(/px|em/g)||e.match(/format/g)||e.match(/title/g)||(t=s),"undefined"!==t){let e=i;n.forEach((i,s)=>{if("__proto__"!==i&&"constructor"!==i){let a=(0,c.pick)(n[s+1],"");o===s?e[i]=t:(e[i]||(e[i]=a.match(/\d/g)?[]:{}),e=e[i])}})}}),i}deselectAnnotation(){this.activeAnnotation&&(this.activeAnnotation.setControlPointsVisibility(!1),this.activeAnnotation=!1)}annotationToFields(t){let i=t.options,e=B.annotationsEditable,s=e.nestedOptions,n=(0,c.pick)(i.type,i.shapes?.[0]?.type,i.labels?.[0]?.type,"label"),o=B.annotationsNonEditable[i.langKey]||[],a={langKey:i.langKey,type:n};function l(i,e,n,a,r){let h;n&&(0,c.defined)(i)&&-1===o.indexOf(e)&&((n.indexOf&&n.indexOf(e))>=0||n[e]||!0===n)&&((0,c.isArray)(i)?(a[e]=[],i.forEach((t,i)=>{(0,c.isObject)(t)?(a[e][i]={},(0,c.objectEach)(t,(t,n)=>{l(t,n,s[e],a[e][i],e)})):l(t,0,s[e],a[e],e)})):(0,c.isObject)(i)?(h={},(0,c.isArray)(a)?(a.push(h),h[e]={},h=h[e]):a[e]=h,(0,c.objectEach)(i,(t,i)=>{l(t,i,0===e?n:s[e],h,e)})):"format"===e?a[e]=[w(i,t.labels[0].points[0]).toString(),"text"]:(0,c.isArray)(a)?a.push([i,L(r,i)]):a[e]=[i,L(e,i)])}return(0,c.objectEach)(i,(t,o)=>{"typeOptions"===o&&"basicAnnotation"!==a.type?(a[o]={},(0,c.objectEach)(i[o],(t,i)=>{l(t,i,s,a[o],i)})):l(t,o,e[n],a,o)}),a}getClickedClassNames(t,i){let e=i.target,s=[],n;for(;e&&e.tagName&&((n=(0,c.attr)(e,"class"))&&(s=s.concat(n.split(" ").map(t=>[t,e]))),(e=e.parentNode)!==t););return s}getButtonEvents(t,i){let e,s=this;return this.getClickedClassNames(t,i).forEach(t=>{s.boundClassNames[t[0]]&&!e&&(e={events:s.boundClassNames[t[0]],button:t[1]})}),e}update(t){this.options=(0,c.merge)(!0,this.options,t),this.removeEvents(),this.initEvents()}removeEvents(){this.eventsToUnbind.forEach(t=>t())}destroy(){this.removeEvents()}}B.annotationsEditable={nestedOptions:{labelOptions:["style","format","backgroundColor"],labels:["style"],label:["style"],style:["fontSize","color"],background:["fill","strokeWidth","stroke"],innerBackground:["fill","strokeWidth","stroke"],outerBackground:["fill","strokeWidth","stroke"],shapeOptions:["fill","strokeWidth","stroke"],shapes:["fill","strokeWidth","stroke"],line:["strokeWidth","stroke"],backgroundColors:[!0],connector:["fill","strokeWidth","stroke"],crosshairX:["strokeWidth","stroke"],crosshairY:["strokeWidth","stroke"]},circle:["shapes"],ellipse:["shapes"],verticalLine:[],label:["labelOptions"],measure:["background","crosshairY","crosshairX"],fibonacci:[],tunnel:["background","line","height"],pitchfork:["innerBackground","outerBackground"],rect:["shapes"],crookedLine:[],basicAnnotation:["shapes","labelOptions"]},B.annotationsNonEditable={rectangle:["crosshairX","crosshairY","labelOptions"],ellipse:["labelOptions"],circle:["labelOptions"]};var H=l(820),I=l.n(H);let{getOptions:V}=h(),{getAssignedAxis:P,getFieldType:Y}=y,W=["apo","ad","aroon","aroonoscillator","atr","ao","cci","chaikin","cmf","cmo","disparityindex","dmi","dpo","linearregressionangle","linearregressionintercept","linearregressionslope","klinger","macd","mfi","momentum","natr","obv","ppo","roc","rsi","slowstochastic","stochastic","trix","williamsr"],R=["ad","cmf","klinger","mfi","obv","vbp","vwap"];function X(t,i){let e=i.pointer?.getCoordinates(t),s,n,o=Number.MAX_VALUE,a;if(i.navigationBindings&&e&&(s=P(e.xAxis),n=P(e.yAxis)),!s||!n)return;let l=s.value,r=n.value;if(n.axis.series.forEach(i=>{if(i.points){let e=i.searchPoint(t,!0);e&&o>Math.abs(e.x-l)&&(o=Math.abs(e.x-l),a=e)}}),a&&a.x&&a.y)return{x:a.x,y:a.y,below:r<a.y,series:a.series,xAxis:a.series.xAxis.index||0,yAxis:a.series.yAxis.index||0}}let F={indicatorsWithAxes:W,indicatorsWithVolume:R,addFlagFromForm:function(t){return function(i){let e=this,s=e.chart,n=s.stockTools,o=X(i,s);if(!o)return;let a={x:o.x,y:o.y},l={type:"flags",onSeries:o.series.id,shape:t,data:[a],xAxis:o.xAxis,yAxis:o.yAxis,point:{events:{click:function(){let t=this,i=t.options;(0,c.fireEvent)(e,"showPopup",{point:t,formType:"annotation-toolbar",options:{langKey:"flags",type:"flags",title:[i.title,Y("title",i.title)],name:[i.name,Y("name",i.name)]},onSubmit:function(i){"remove"===i.actionType?t.remove():t.update(e.fieldsToOptions(i.fields,{}))}})}}}};n&&n.guiEnabled||s.addSeries(l),(0,c.fireEvent)(e,"showPopup",{formType:"flag",options:{langKey:"flags",type:"flags",title:["A",Y("label","A")],name:["Flag A",Y("label","Flag A")]},onSubmit:function(t){e.fieldsToOptions(t.fields,l.data?.[0]),s.addSeries(l)}})}},attractToPoint:X,getAssignedAxis:P,isNotNavigatorYAxis:function(t){return"highcharts-navigator-yaxis"!==t.userOptions.className},isPriceIndicatorEnabled:function(t){return t.some(t=>t.lastVisiblePrice||t.lastPrice)},manageIndicators:function(t){let i,e,s,n,o=this.chart,a={linkedTo:t.linkedTo,type:t.type};if("edit"===t.actionType)this.fieldsToOptions(t.fields,a),(n=o.get(t.seriesId))&&n.update(a,!1);else if("remove"===t.actionType){if((n=o.get(t.seriesId))&&(i=n.yAxis,n.linkedSeries&&n.linkedSeries.forEach(t=>{t.remove(!1)}),n.remove(!1),W.indexOf(n.type)>=0)){let t={height:i.options.height,top:i.options.top};i.remove(!1),this.resizeYAxes(t)}}else a.id=(0,c.uniqueKey)(),this.fieldsToOptions(t.fields,a),e=o.get(a.linkedTo),s=V().plotOptions,void 0!==e&&e instanceof I()&&"sum"===e.getDGApproximation()&&!(0,c.defined)(s&&s[a.type]&&s.dataGrouping&&s.dataGrouping.approximation)&&(a.dataGrouping={approximation:"sum"}),W.indexOf(t.type)>=0?(a.yAxis=(i=o.addAxis({id:(0,c.uniqueKey)(),offset:0,opposite:!0,title:{text:""},tickPixelInterval:40,showLastLabel:!1,labels:{align:"left",y:-2}},!1,!1)).options.id,this.resizeYAxes()):a.yAxis=o.get(t.linkedTo).options.yAxis,R.indexOf(t.type)>=0&&(a.params.volumeSeriesID=o.series.filter(function(t){return"column"===t.options.type})[0].options.id),o.addSeries(a,!1);(0,c.fireEvent)(this,"deselectButton",{button:this.selectedButtonElement}),o.redraw()},shallowArraysEqual:function(t,i){if(!(0,c.defined)(t)||!(0,c.defined)(i)||t.length!==i.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==i[e])return!1;return!0},updateHeight:function(t,i){let e=i.options.typeOptions,s=(0,c.isNumber)(e.yAxis)&&this.chart.yAxis[e.yAxis];s&&e.points&&i.update({typeOptions:{height:s.toValue(t[s.horiz?"chartX":"chartY"])-(e.points[1].y||0)}})},updateNthPoint:function(t){return function(i,e){let s=e.options.typeOptions,n=(0,c.isNumber)(s.xAxis)&&this.chart.xAxis[s.xAxis],o=(0,c.isNumber)(s.yAxis)&&this.chart.yAxis[s.yAxis];n&&o&&(s.points.forEach((e,s)=>{s>=t&&(e.x=n.toValue(i[n.horiz?"chartX":"chartY"]),e.y=o.toValue(i[o.horiz?"chartX":"chartY"]))}),e.update({typeOptions:{points:s.points}}))}},updateRectSize:function(t,i){let e=i.chart,s=i.options.typeOptions,n=(0,c.isNumber)(s.xAxis)&&e.xAxis[s.xAxis],o=(0,c.isNumber)(s.yAxis)&&e.yAxis[s.yAxis];if(n&&o){let a=n.toValue(t[n.horiz?"chartX":"chartY"]),l=o.toValue(t[o.horiz?"chartX":"chartY"]),r=a-s.point.x,c=s.point.y-l;i.update({typeOptions:{background:{width:e.inverted?c:r,height:e.inverted?r:c}}})}}},D=(t,i,e)=>{let s,n=e[t];return"renderer"===i&&n?(n=encodeURIComponent(n),s=`url("data:image/svg+xml;charset=utf-8,${n}")`):s=i.startsWith("http")&&i.match(/\.(png|svg|jpe?g|gif)$/ig)?'url("'+i+'")':`url("${i}${t}")`,s},U=t=>`<?xml version="1.0" encoding="utf-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ${t} ${t}">`,K="#4B4B4D",q={"annotations-hidden.svg":`${U(32)}
<g>
    <g>
        <path fill="${K}" d="M16.001,20.25c-2.344,0-4.25-1.906-4.25-4.25c0-2.343,1.906-4.25,4.25-4.25s4.25,1.907,4.25,4.25
            C20.251,18.344,18.345,20.25,16.001,20.25z M16.001,13.25c-1.517,0-2.75,1.233-2.75,2.75s1.233,2.75,2.75,2.75
            s2.75-1.233,2.75-2.75S17.518,13.25,16.001,13.25z"/>
    </g>
    <g>
        <path fill="${K}" d="M16.001,23.238L16.001,23.238c-2.729-0.001-5.302-1.062-7.246-2.988L4.465,16l4.29-4.25
            c1.945-1.926,4.519-2.987,7.246-2.987c2.729,0,5.302,1.061,7.246,2.987L27.537,16l-4.29,4.25
            C21.302,22.177,18.729,23.238,16.001,23.238z M6.454,16l3.357,3.186c1.661,1.646,3.859,2.553,6.189,2.553s4.528-0.907,6.19-2.553
            L25.548,16l-3.357-3.186c-1.661-1.646-3.859-2.553-6.189-2.553s-4.528,0.907-6.19,2.553L6.454,16z"/>
    </g>
</g>
</svg>
`,"annotations-visible.svg":`${U(32)}
<g>
    <path fill="${K}" d="M11.751,16c0,0.427,0.082,0.831,0.2,1.22l1.309-1.31c0.048-1.443,1.208-2.604,2.652-2.651l1.309-1.309
        c-0.389-0.118-0.793-0.2-1.22-0.2C13.657,11.75,11.751,13.656,11.751,16z"/>
    <path fill="${K}" d="M16.087,18.741l-1.308,1.308c0.389,0.119,0.794,0.201,1.222,0.201c2.344,0,4.25-1.906,4.25-4.25
        c0-0.428-0.083-0.832-0.2-1.223l-1.309,1.309C18.696,17.533,17.533,18.695,16.087,18.741z"/>
    <path fill="${K}" d="M23.247,11.75c-0.028-0.028-0.06-0.052-0.089-0.08l-1.061,1.062c0.029,0.029,0.062,0.054,0.093,0.083
        L25.548,16l-3.356,3.186c-1.662,1.646-3.86,2.553-6.19,2.553c-0.872,0-1.725-0.128-2.538-0.373l-1.174,1.174
        c1.17,0.453,2.422,0.698,3.712,0.699c2.728,0,5.301-1.062,7.246-2.988l4.29-4.25L23.247,11.75z"/>
    <path fill="${K}" d="M8.842,20.328l1.062-1.061c-0.03-0.029-0.062-0.053-0.092-0.082L6.454,16l3.356-3.185
        c1.662-1.646,3.86-2.553,6.19-2.553c0.87,0,1.724,0.127,2.536,0.372l1.174-1.174c-1.17-0.453-2.421-0.698-3.71-0.698
        c-2.728,0-5.301,1.061-7.246,2.987L4.465,16l4.29,4.25C8.783,20.278,8.813,20.301,8.842,20.328z"/>

        <rect x="3.272" y="15.25" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6276 15.9997)" fill="${K}" width="25.456" height="1.501"/>
</g>
</svg>
`,"arrow-bottom.svg":`${U(32)}
<g>
    <polygon fill="${K}" transform="rotate(45,15,15)" points="12.78,25.03 11.72,23.97 19.689,16 11.72,8.03 12.78,6.97 21.811,16"/>
</g>
</svg>
`,"arrow-left.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="19.22,25.03 10.189,16 19.22,6.97 20.28,8.03 12.311,16 20.28,23.97"/>
</g>
</svg>
`,"arrow-line.svg":`${U(32)}
<path fill="${K}" d="M26.679,8.25L28,4l-4.25,1.321l0.934,0.935l-3.502,3.502c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682l-7.576,7.576c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682L4.97,25.97L6.03,27.03l3.788-3.788
    c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l7.576-7.576
    c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l3.502-3.502L26.679,8.25z"/>
</svg>
`,"arrow-ray.svg":`${U(32)}
<path fill="${K}" d="M25.429,9.5L27,5l-4.5,1.571l0.934,0.935l-5.252,5.252c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682l-7.576,7.576c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l7.576-7.576
    c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l5.252-5.252L25.429,9.5z"/>
</svg>
`,"arrow-right.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="12.78,25.03 11.72,23.97 19.689,16 11.72,8.03 12.78,6.97 21.811,16"/>
</g>
</svg>
`,"arrow-segment.svg":`${U(32)}
<g>
    <circle fill="${K}" cx="24.5" cy="7.5" r="1.875"/>
    <path fill="${K}" d="M19.684,11.256L8.182,22.758c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
        s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l11.502-11.502l0.935,0.934L23,9l-4.25,1.321
        L19.684,11.256z"/>
</g>
</svg>
`,"arrow.svg":`${U(60)}
<g>
    <polyline fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" points="49,26 49,11 34,11"/>
    <line fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" x1="20" y1="40.7" x2="49" y2="11"/>
    <circle fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" cx="17" cy="44" r="5"/>
</g>
</svg>
`,"circle.svg":`${U(32)}
<path fill="${K}" d="M26.249,15.999c0.001-2.737-1.065-5.312-3.002-7.248C21.312,6.815,18.737,5.749,16,5.75
    c-2.738,0-5.312,1.065-7.248,3.002C6.816,10.688,5.75,13.262,5.75,16c0,2.736,1.065,5.312,3.002,7.248
    c1.937,1.935,4.511,3.001,7.249,3.001c1.993,0,3.898-0.572,5.536-1.628c0.864,0.73,2.154,0.697,2.968-0.116
    c0.815-0.815,0.849-2.104,0.117-2.97C25.678,19.897,26.25,17.993,26.249,15.999z M9.813,22.186C8.16,20.533,7.25,18.336,7.25,16
    c-0.001-2.337,0.909-4.534,2.562-6.188c1.652-1.652,3.851-2.563,6.188-2.563c2.336,0,4.533,0.91,6.186,2.563
    c1.653,1.653,2.563,3.85,2.564,6.187c-0.001,1.727-0.501,3.376-1.427,4.787c-0.682-0.115-1.406,0.084-1.931,0.609
    s-0.726,1.249-0.608,1.929c-1.41,0.926-3.059,1.426-4.784,1.426C13.663,24.749,11.466,23.839,9.813,22.186z"/>
</svg>
`,"close.svg":`${U(32)}
<polygon fill="${K}" points="24.308,8.756 23.248,7.695 16.002,14.941 8.757,7.695 7.695,8.754 14.941,16.001 7.696,23.246
    8.755,24.308 16.002,17.061 23.247,24.307 24.308,23.248 17.062,16.001"/>
</svg>
`,"crooked-3.svg":`${U(32)}
<g>
    <g>
        <path fill="${K}" d="M5.048,22.258c-0.234,0-0.464-0.109-0.61-0.312c-0.241-0.338-0.164-0.806,0.173-1.047l14.468-10.37
            l7.497,7.447c0.294,0.292,0.296,0.767,0.004,1.061c-0.292,0.296-0.767,0.294-1.061,0.004l-6.597-6.553l-13.438,9.63
            C5.352,22.213,5.199,22.258,5.048,22.258z"/>
    </g>
</g>
</svg>
`,"crooked-5.svg":`${U(32)}
<g>
    <path fill="${K}" d="M27.53,14.03c0.293-0.293,0.293-0.768,0-1.061l-5.064-5.064l-7.5,8.5L10.461,11.9l-7.027,8.109
        c-0.271,0.313-0.238,0.786,0.075,1.058C3.65,21.189,3.825,21.25,4,21.25c0.21,0,0.419-0.088,0.566-0.259l5.973-6.891l4.495,4.495
        l7.5-8.5l3.936,3.936C26.763,14.323,27.237,14.323,27.53,14.03z"/>
</g>
</svg>
`,"current-price-hide.svg":`${U(32)}
<g>
    <g opacity="0.5">
        <polygon fill="${K}" points="12.509,22.893 12.509,17.428 11.409,17.428 9.651,18.718 10.229,19.507 11.363,18.628
            11.363,22.893"/>
        <path fill="${K}" d="M17.962,19.832c-0.341-0.326-0.759-0.492-1.242-0.492c-0.141,0-0.264,0.02-0.365,0.058l-0.276,0.104
            l0.181-0.289l1.281-1.784h-1.375l-1.339,1.996c-0.408,0.61-0.615,1.182-0.615,1.696c0,0.583,0.198,1.038,0.606,1.393
            c0.405,0.353,0.919,0.532,1.526,0.532c0.606,0,1.12-0.181,1.526-0.536c0.401-0.352,0.605-0.829,0.605-1.421
            C18.476,20.573,18.308,20.162,17.962,19.832z M17.055,21.843c-0.184,0.187-0.423,0.281-0.711,0.281s-0.527-0.098-0.713-0.29
            c-0.183-0.192-0.274-0.43-0.274-0.706c0-0.287,0.094-0.527,0.281-0.714c0.187-0.188,0.427-0.281,0.714-0.281
            c0.289,0,0.526,0.095,0.708,0.282c0.181,0.186,0.271,0.423,0.271,0.705C17.331,21.413,17.238,21.655,17.055,21.843z"/>
        <path fill="${K}" d="M20.639,21.805c-0.141-0.135-0.302-0.201-0.495-0.201c-0.198,0-0.364,0.067-0.507,0.205
            c-0.141,0.136-0.21,0.295-0.21,0.487c0,0.191,0.068,0.349,0.209,0.479c0.143,0.133,0.309,0.197,0.508,0.197
            c0.193,0,0.354-0.066,0.495-0.201c0.138-0.133,0.205-0.291,0.205-0.483S20.776,21.938,20.639,21.805z"/>
        <path fill="${K}" d="M22.962,19.063c0.04-0.23,0.13-0.423,0.268-0.574c0.164-0.179,0.372-0.269,0.618-0.269
            c0.24,0,0.436,0.072,0.583,0.216c0.146,0.145,0.221,0.334,0.221,0.563c0,0.316-0.166,0.634-0.495,0.944l-2.177,1.972v0.977h3.896
            v-0.969h-2.475l1.508-1.342c0.317-0.282,0.561-0.55,0.723-0.797c0.156-0.238,0.236-0.532,0.236-0.873
            c0-0.531-0.184-0.927-0.56-1.208c-0.381-0.284-0.849-0.429-1.389-0.429c-0.539,0-1.008,0.158-1.394,0.471
            c-0.358,0.29-0.578,0.683-0.654,1.168L22.962,19.063z"/>
    </g>
    <path opacity="0.5" fill="${K}" d="M17.486,12.742c-0.809,0.626-1.691,1.131-2.631,1.5H27.75v11.5H8.25v-3.061l-2.939-2.689
        l2.939-2.689l0.001-2.122l-4.812,4.812l3.311,3.311v3.939h22.5v-14.5H17.486z"/>
    <g>
        <path fill="${K}" d="M17.121,10.432c-1.659,1.659-3.865,2.573-6.211,2.573l0,0c-0.723,0-1.43-0.097-2.113-0.266l1.096-1.097
            c0.335,0.046,0.675,0.077,1.018,0.077c2.003,0,3.885-0.781,5.302-2.196c0.25-0.25,0.638-0.691,0.922-1.018
            c-0.284-0.327-0.672-0.769-0.922-1.018c-0.368-0.368-0.769-0.691-1.194-0.972l0.922-0.921c0.417,0.292,0.814,0.616,1.182,0.983
            c0.467,0.467,1.313,1.469,1.351,1.512l0.35,0.415l-0.35,0.414C18.435,8.963,17.588,9.964,17.121,10.432z"/>
        <path fill="${K}" d="M3.351,8.091c0.035-0.043,0.882-1.045,1.351-1.512c1.658-1.66,3.864-2.574,6.209-2.574
            c0.723,0,1.43,0.098,2.114,0.266l-1.097,1.097c-0.336-0.046-0.674-0.076-1.018-0.076c-2.002,0-3.884,0.779-5.301,2.197
            c-0.25,0.249-0.639,0.69-0.922,1.018c0.283,0.326,0.672,0.767,0.922,1.017c0.367,0.367,0.768,0.69,1.192,0.97L5.88,11.414
            c-0.415-0.293-0.812-0.616-1.179-0.982C4.232,9.965,3.386,8.963,3.351,8.92L3,8.506L3.351,8.091z"/>

            <rect x="2.731" y="7.861" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8175 10.2057)" fill="${K}" width="16.359" height="1.286"/>
    </g>
</g>
</svg>
`,"current-price-show.svg":`${U(32)}
<g>
    <g>
        <polygon fill="${K}" points="12.509,22.893 12.509,17.428 11.409,17.428 9.651,18.718 10.229,19.507 11.363,18.628
            11.363,22.893"/>
        <path fill="${K}" d="M17.962,19.832c-0.341-0.326-0.759-0.492-1.242-0.492c-0.141,0-0.264,0.02-0.365,0.058l-0.276,0.104
            l0.181-0.289l1.281-1.784h-1.375l-1.339,1.996c-0.408,0.61-0.615,1.182-0.615,1.696c0,0.583,0.198,1.038,0.606,1.393
            c0.405,0.353,0.919,0.532,1.526,0.532c0.606,0,1.12-0.181,1.526-0.536c0.401-0.352,0.605-0.829,0.605-1.421
            C18.476,20.573,18.308,20.162,17.962,19.832z M17.055,21.843c-0.184,0.187-0.423,0.281-0.711,0.281s-0.527-0.098-0.713-0.29
            c-0.183-0.192-0.274-0.43-0.274-0.706c0-0.287,0.094-0.527,0.281-0.714c0.187-0.188,0.427-0.281,0.714-0.281
            c0.289,0,0.526,0.095,0.708,0.282c0.181,0.186,0.271,0.423,0.271,0.705C17.331,21.413,17.238,21.655,17.055,21.843z"/>
        <path fill="${K}" d="M20.639,21.805c-0.141-0.135-0.302-0.201-0.495-0.201c-0.198,0-0.364,0.067-0.507,0.205
            c-0.141,0.136-0.21,0.295-0.21,0.487c0,0.191,0.068,0.349,0.209,0.479c0.143,0.133,0.309,0.197,0.508,0.197
            c0.193,0,0.354-0.066,0.495-0.201c0.138-0.133,0.205-0.291,0.205-0.483S20.776,21.938,20.639,21.805z"/>
        <path fill="${K}" d="M22.962,19.063c0.04-0.23,0.13-0.423,0.268-0.574c0.164-0.179,0.372-0.269,0.618-0.269
            c0.24,0,0.436,0.072,0.583,0.216c0.146,0.145,0.221,0.334,0.221,0.563c0,0.316-0.166,0.634-0.495,0.944l-2.177,1.972v0.977h3.896
            v-0.969h-2.475l1.508-1.342c0.317-0.282,0.561-0.55,0.723-0.797c0.156-0.238,0.236-0.532,0.236-0.873
            c0-0.531-0.184-0.927-0.56-1.208c-0.381-0.284-0.849-0.429-1.389-0.429c-0.539,0-1.008,0.158-1.394,0.471
            c-0.358,0.29-0.578,0.683-0.654,1.168L22.962,19.063z"/>
    </g>
    <path fill="${K}" d="M17.486,12.742c-0.809,0.626-1.691,1.131-2.631,1.5H27.75v11.5H8.25v-3.061l-2.939-2.689l2.939-2.689V14.65
        c-0.512-0.131-1.015-0.287-1.5-0.489v2.521l-3.311,3.311l3.311,3.311v3.939h22.5v-14.5H17.486z"/>
    <g>
        <path fill="${K}" d="M10.911,10.741c-1.24,0-2.249-1.009-2.249-2.249s1.009-2.249,2.249-2.249s2.249,1.009,2.249,2.249
            S12.151,10.741,10.911,10.741z M10.911,7.528c-0.532,0-0.964,0.432-0.964,0.964c0,0.531,0.432,0.964,0.964,0.964
            c0.531,0,0.964-0.433,0.964-0.964C11.875,7.96,11.442,7.528,10.911,7.528z"/>
    </g>
    <g>
        <path fill="${K}" d="M10.911,12.992L10.911,12.992c-2.346,0-4.553-0.915-6.211-2.573C4.233,9.951,3.387,8.949,3.35,8.906
            L3,8.492l0.35-0.415C3.387,8.034,4.233,7.033,4.7,6.565c1.658-1.66,3.865-2.573,6.211-2.573c2.345,0,4.551,0.913,6.209,2.573
            c0.469,0.468,1.315,1.469,1.351,1.512l0.351,0.415l-0.351,0.414c-0.035,0.043-0.882,1.045-1.351,1.513
            C15.462,12.077,13.256,12.992,10.911,12.992z M4.687,8.492C4.972,8.818,5.36,9.261,5.608,9.51c1.417,1.416,3.3,2.196,5.303,2.196
            c2.001,0,3.885-0.78,5.302-2.197c0.249-0.25,0.638-0.69,0.921-1.017c-0.283-0.327-0.672-0.769-0.921-1.018
            c-1.417-1.418-3.301-2.197-5.302-2.197c-2.003,0-3.886,0.779-5.303,2.197C5.36,7.724,4.972,8.165,4.687,8.492z"/>
    </g>
</g>
</svg>
`,"destroy.svg":`${U(32)}
<g>
    <rect x="12.75" y="14" fill="${K}" width="1.5" height="10"/>
    <rect x="17.75" y="14" fill="${K}" width="1.5" height="10"/>
    <path fill="${K}" d="M25.25,10.5c0-1.517-1.233-2.75-2.75-2.75h-3.25V7c0-1.24-1.01-2.25-2.25-2.25h-2
        c-1.24,0-2.25,1.01-2.25,2.25v0.75H9.5c-1.517,0-2.75,1.233-2.75,2.75v1.751h2V27.25h14.5V12.251h2V10.5z M14.25,7
        c0-0.413,0.337-0.75,0.75-0.75h2c0.413,0,0.75,0.337,0.75,0.75v0.75h-3.5V7z M21.75,25.75h-11.5V12.251h11.5V25.75z M23.75,10.751
        H8.25V10.5c0-0.689,0.561-1.25,1.25-1.25h13c0.689,0,1.25,0.561,1.25,1.25V10.751z"/>
</g>
</svg>
`,"drawing.svg":`${U(32)}<path fill="${K}" d="M18.3,8.6c-0.5,0.2-0.8,0.7-0.9,1.2l-1,7.6l0.5,0.3l3.1-4.5c-0.1-0.1-0.2-0.3-0.2-0.5c-0.1-0.7,0.3-1.3,1-1.4
    s1.3,0.3,1.4,1s-0.3,1.3-1,1.4c-0.2,0-0.4,0-0.5,0l-3.1,4.5l0.5,0.3l6.7-3.7c0.5-0.3,0.8-0.8,0.8-1.3L26,9.4l-4-2.6L18.3,8.6z
     M27.2,5.2L25.4,4c-0.6-0.4-1.3-0.2-1.7,0.3L22.5,6l3.9,2.6L27.5,7C27.9,6.4,27.8,5.7,27.2,5.2C27.2,5.3,27.2,5.2,27.2,5.2z"/>
<rect fill="none" width="32.3" height="32.3"/>
<path fill="#1A1A8E" d="M18,23.5c0,0.1,0,0.1-0.1,0.2"/>
<path fill="${K}" d="M17.1,18.9c-0.8-0.2-3.8-0.2-4,1.6c0,0.9,0.1,1.9,0.5,2.7c0.4,0.7,0.7,0.9,0.7,1.4c0,0.8-0.5,1.5-1.2,1.8
    c-0.3,0.2-0.6,0.2-0.9,0.2c-1.2-0.1-1.2,0-1.4,0.1c-1,0.5-0.4,2.7-1.3,3.1c-0.4,0.1-0.7,0-1-0.2c-0.7-0.8-0.1-3.1,1.4-4.1
    c0.5-0.4,1.1-0.6,1.7-0.7c0.6,0,0.9,0.1,1-0.1s-0.1-1.1-0.4-2c-0.4-1.1-0.5-2.2-0.4-3.4c0.5-1.9,3.6-1.8,5.2-1.7
    C17.6,17.7,17.8,19.1,17.1,18.9z"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,"edit.svg":`${U(32)}
<path fill="${K}" d="M22.125,3.814L5.817,20.122l-1.818,7.879l7.879-1.818L28.186,9.875L22.125,3.814z M26.064,9.875
    l-1.439,1.439l-3.939-3.939l1.439-1.439L26.064,9.875z M10.186,22.875l9.939-9.939l1.439,1.439l-9.939,9.939L10.186,22.875z
     M7.686,20.375l9.939-9.939l1.439,1.439l-9.939,9.939L7.686,20.375z M18.686,9.375l0.939-0.939l3.939,3.939l-0.939,0.939
    L18.686,9.375z M6.974,21.784l3.242,3.242l-4.215,0.973L6.974,21.784z"/>
</svg>
`,"elliott-3.svg":`${U(32)}
<g>
    <g>
        <path fill="${K}" d="M5.048,22.258c-0.234,0-0.464-0.109-0.61-0.312c-0.241-0.338-0.164-0.806,0.173-1.047l14.468-10.37
            l7.497,7.447c0.294,0.292,0.296,0.767,0.004,1.061c-0.292,0.296-0.767,0.294-1.061,0.004l-6.597-6.553l-13.438,9.63
            C5.352,22.213,5.199,22.258,5.048,22.258z"/>
    </g>
    <g>
        <g>
            <path fill="${K}" d="M6.483,24.807c0.35,0.532,0.524,1.266,0.524,2.201s-0.175,1.67-0.524,2.201
                C6.134,29.742,5.64,30.008,5,30.008c-0.646,0-1.144-0.266-1.496-0.799c-0.353-0.531-0.527-1.266-0.527-2.201
                s0.175-1.669,0.527-2.201C3.856,24.273,4.354,24.008,5,24.008C5.64,24.008,6.134,24.273,6.483,24.807z M5.976,27.693
                c0.026-0.221,0.04-0.449,0.04-0.686s-0.014-0.467-0.04-0.689s-0.074-0.455-0.141-0.697c-0.068-0.242-0.173-0.438-0.315-0.585
                S5.204,24.814,5,24.814c-0.205,0-0.379,0.074-0.524,0.222c-0.145,0.147-0.252,0.343-0.322,0.585
                c-0.069,0.242-0.119,0.475-0.146,0.697s-0.04,0.453-0.04,0.689c0,0.231,0.014,0.459,0.04,0.686
                c0.026,0.226,0.076,0.459,0.146,0.697c0.07,0.24,0.178,0.432,0.322,0.576C4.621,29.112,4.795,29.186,5,29.186
                c0.204,0,0.377-0.073,0.52-0.219c0.143-0.145,0.247-0.338,0.315-0.58C5.901,28.145,5.949,27.914,5.976,27.693z"/>
            <path fill="${K}" d="M5,30.058c-0.659,0-1.177-0.276-1.538-0.82c-0.355-0.536-0.535-1.286-0.535-2.229
                c0-0.942,0.18-1.692,0.535-2.229c0.361-0.544,0.879-0.82,1.538-0.82c0.654,0,1.167,0.276,1.525,0.821
                c0.354,0.538,0.532,1.288,0.532,2.229c0,0.941-0.179,1.691-0.532,2.229C6.167,29.781,5.654,30.058,5,30.058z M5,24.058
                c-0.633,0-1.108,0.254-1.454,0.776c-0.345,0.52-0.52,1.252-0.52,2.174c0,0.923,0.175,1.654,0.52,2.174
                C3.892,29.704,4.367,29.958,5,29.958c0.618,0,1.104-0.261,1.441-0.776c0.343-0.521,0.517-1.252,0.517-2.174
                c0-0.921-0.174-1.652-0.517-2.174C6.104,24.318,5.618,24.058,5,24.058z M5,29.235c-0.217,0-0.404-0.078-0.56-0.232
                c-0.15-0.151-0.263-0.352-0.335-0.598c-0.072-0.249-0.121-0.485-0.147-0.706c-0.026-0.23-0.04-0.463-0.04-0.691
                c0-0.234,0.014-0.469,0.04-0.695c0.026-0.22,0.074-0.451,0.147-0.705c0.072-0.249,0.185-0.453,0.334-0.606
                C4.595,24.844,4.783,24.765,5,24.765s0.404,0.079,0.556,0.237c0.146,0.152,0.257,0.355,0.327,0.605
                c0.07,0.254,0.116,0.484,0.143,0.705c0.026,0.227,0.04,0.461,0.04,0.695s-0.014,0.468-0.04,0.691
                c-0.026,0.219-0.072,0.447-0.143,0.701c-0.07,0.25-0.181,0.453-0.327,0.602C5.403,29.157,5.216,29.235,5,29.235z M5,24.864
                c-0.192,0-0.352,0.067-0.488,0.207c-0.139,0.142-0.243,0.331-0.311,0.563c-0.071,0.25-0.118,0.475-0.144,0.689
                c-0.026,0.223-0.04,0.453-0.04,0.684c0,0.225,0.014,0.454,0.04,0.68c0.025,0.215,0.073,0.447,0.144,0.689
                c0.067,0.23,0.172,0.416,0.31,0.555C4.648,29.068,4.809,29.136,5,29.136s0.35-0.067,0.483-0.204
                c0.136-0.137,0.237-0.324,0.304-0.559C5.854,28.125,5.9,27.9,5.926,27.688c0.026-0.221,0.04-0.449,0.04-0.68
                s-0.014-0.461-0.04-0.684c-0.025-0.217-0.071-0.441-0.139-0.69C5.721,25.4,5.619,25.211,5.483,25.07
                C5.35,24.932,5.191,24.864,5,24.864z"/>
        </g>
    </g>
    <g>
        <g>
            <path fill="${K}" d="M24,27.008v-6h2.339c0.508,0,0.942,0.125,1.301,0.373s0.538,0.627,0.538,1.135
                c0,0.328-0.093,0.605-0.28,0.831c-0.186,0.226-0.44,0.388-0.762,0.483v0.017c0.39,0.051,0.703,0.201,0.94,0.449
                c0.237,0.249,0.355,0.57,0.355,0.966c0,0.311-0.063,0.584-0.19,0.818s-0.301,0.416-0.521,0.547
                c-0.22,0.129-0.46,0.226-0.72,0.287c-0.26,0.062-0.54,0.094-0.839,0.094H24z M25.067,21.889v1.561h0.95
                c0.355,0,0.627-0.071,0.812-0.213c0.187-0.141,0.279-0.342,0.279-0.602c0-0.266-0.095-0.456-0.287-0.572
                c-0.192-0.115-0.491-0.174-0.898-0.174H25.067z M25.067,24.363v1.746h0.958c0.893,0,1.339-0.299,1.339-0.898
                c0-0.305-0.104-0.522-0.313-0.652s-0.537-0.195-0.982-0.195H25.067z"/>
        </g>
    </g>
    <g>
        <g>
            <path fill="${K}" d="M15.958,9.008l2.61-6h0.924l2.584,6h-1.221l-0.559-1.373h-2.602l-0.542,1.373H15.958z M18.06,6.72h1.864
                L19,4.279L18.06,6.72z"/>
        </g>
    </g>
</g>
</svg>
`,"elliott-5.svg":`${U(32)}
<g>
    <path fill="${K}" d="M27.53,14.03c0.293-0.293,0.293-0.768,0-1.061l-5.064-5.064l-7.5,8.5L10.461,11.9l-7.027,8.109
        c-0.271,0.313-0.238,0.786,0.075,1.058C3.65,21.189,3.825,21.25,4,21.25c0.21,0,0.419-0.088,0.566-0.259l5.973-6.891l4.495,4.495
        l7.5-8.5l3.936,3.936C26.763,14.323,27.237,14.323,27.53,14.03z"/>
    <path fill="${K}" d="M3.999,22.9c-0.569,0-1.017,0.238-1.327,0.709c-0.304,0.459-0.457,1.096-0.457,1.891
        c0,0.796,0.153,1.432,0.457,1.891C2.982,27.861,3.43,28.1,3.999,28.1c0.567,0,1.011-0.238,1.319-0.709
        c0.301-0.457,0.501-1.094,0.501-1.891s-0.2-1.433-0.501-1.891C5.01,23.139,4.566,22.9,3.999,22.9z M4.692,26.039
        c-0.021,0.17-0.058,0.354-0.111,0.543c-0.05,0.178-0.126,0.321-0.229,0.426c-0.098,0.1-0.212,0.146-0.353,0.146
        c-0.139,0-0.255-0.048-0.355-0.146c-0.104-0.105-0.183-0.247-0.234-0.424c-0.055-0.186-0.092-0.369-0.113-0.545
        c-0.021-0.177-0.032-0.357-0.032-0.539c0-0.186,0.011-0.367,0.032-0.542c0.021-0.174,0.059-0.357,0.113-0.546
        c0.052-0.178,0.131-0.322,0.235-0.43c0.101-0.101,0.216-0.15,0.354-0.15c0.14,0,0.255,0.049,0.352,0.15
        c0.104,0.106,0.18,0.251,0.229,0.43c0.054,0.188,0.09,0.372,0.111,0.546c0.021,0.175,0.032,0.356,0.032,0.542
        S4.714,25.867,4.692,26.039z"/>
    <path fill="${K}" d="M9.522,9.9h1.952l0.448,1.1h1.19l-2.129-4.941L10.959,6h-0.867l-2.116,4.864L7.917,11h1.171L9.522,9.9z
         M10.5,7.337l0.639,1.686H9.851L10.5,7.337z"/>
    <path fill="${K}" d="M16.416,22.34c0.151-0.079,0.279-0.182,0.383-0.307c0.163-0.198,0.246-0.443,0.246-0.729
        c0-0.438-0.158-0.771-0.473-0.988C16.27,20.106,15.899,20,15.475,20h-1.97v5h1.827c0.248,0,0.482-0.025,0.695-0.078
        c0.216-0.051,0.42-0.133,0.604-0.241c0.191-0.112,0.344-0.272,0.453-0.476c0.109-0.201,0.164-0.437,0.164-0.7
        c0-0.341-0.104-0.624-0.312-0.841C16.795,22.516,16.62,22.406,16.416,22.34z M14.553,20.9h0.59c0.307,0,0.531,0.042,0.669,0.125
        c0.124,0.075,0.185,0.197,0.185,0.375s-0.062,0.311-0.187,0.404c-0.131,0.1-0.33,0.15-0.593,0.15h-0.664V20.9z M15.224,24.086
        h-0.671v-1.203h0.705c0.338,0,0.585,0.047,0.736,0.141c0.139,0.086,0.206,0.23,0.206,0.44C16.2,23.617,16.2,24.086,15.224,24.086z"
        />
    <path fill="${K}" d="M22.539,7c0.78,0,1.401-0.282,1.845-0.837l0.062-0.077l-0.808-0.568l-0.055,0.073
        c-0.242,0.331-0.582,0.492-1.038,0.492c-0.447,0-0.794-0.144-1.061-0.438c-0.266-0.293-0.4-0.684-0.4-1.159
        c0-0.453,0.141-0.834,0.419-1.134c0.276-0.298,0.638-0.449,1.074-0.449c0.186,0,0.37,0.038,0.551,0.113
        c0.176,0.073,0.315,0.182,0.416,0.321l0.058,0.079l0.768-0.608l-0.055-0.072c-0.183-0.242-0.438-0.427-0.762-0.552
        C23.233,2.062,22.905,2,22.577,2c-0.741,0-1.362,0.229-1.846,0.682C20.245,3.136,20,3.744,20,4.487c0,0.734,0.24,1.343,0.713,1.811
        C21.187,6.764,21.801,7,22.539,7z"/>
    <path fill="${K}" d="M29.075,17.328c-0.163-0.338-0.386-0.604-0.66-0.792c-0.271-0.185-0.563-0.321-0.871-0.407
        C27.237,16.043,26.908,16,26.567,16h-1.8v5h1.8c0.335,0,0.664-0.05,0.976-0.146c0.314-0.098,0.609-0.246,0.877-0.439
        c0.272-0.195,0.493-0.463,0.655-0.792c0.162-0.327,0.243-0.706,0.243-1.122C29.318,18.057,29.237,17.662,29.075,17.328z
         M28.103,19.134c-0.069,0.184-0.16,0.331-0.269,0.441c-0.112,0.111-0.248,0.205-0.404,0.279c-0.159,0.075-0.321,0.129-0.482,0.159
        c-0.163,0.03-0.336,0.045-0.515,0.045h-0.617v-3.131h0.617c1.194,0,1.776,0.514,1.776,1.573
        C28.209,18.736,28.173,18.949,28.103,19.134z"/>
</g>
</svg>
`,"ellipse.svg":`${U(32)}<path fill="${K}" d="M16.3,7.2C10.1,7.2,5,11.1,5,15.9s5.1,8.7,11.3,8.7s11.3-3.9,11.3-8.7S22.5,7.2,16.3,7.2z M16.3,23.3
    c-5.5,0-9.9-3.3-9.9-7.4s4.4-7.4,9.9-7.4s9.9,3.3,9.9,7.4S21.8,23.3,16.3,23.3L16.3,23.3z"/>
<circle fill="${K}" cx="23.5" cy="22.2" r="2.3"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,"fibonacci-timezone.svg":`${U(32)}
<polyline fill="${K}" points="5.2,7.3 5.2,5.6 3.6,5.6 3.6,23.3 3.6,24.8 3.6,27.5 5.2,27.5 5.2,8.8"/>
<polyline fill="${K}" points="9.6,7.3 9.6,5.6 8,5.6 8,23.3 8,24.8 8,27.5 9.6,27.5 9.6,8.8"/>
<polyline fill="${K}" points="11.6,7.3 11.6,5.6 10,5.6 10,23.3 10,24.8 10,27.5 11.6,27.5 11.6,8.8"/>
<polyline fill="${K}" points="14.2,7.3 14.2,5.6 12.6,5.6 12.6,23.3 12.6,24.8 12.6,27.5 14.2,27.5 14.2,8.8"/>
<polyline fill="${K}" points="19,7.3 19,5.6 17.4,5.6 17.4,23.3 17.4,24.8 17.4,27.5 19,27.5 19,8.8"/>
<polyline fill="${K}" points="27.5,7.3 27.5,5.6 25.9,5.6 25.9,23.3 25.9,24.8 25.9,27.5 27.5,27.5 27.5,8.8"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,"fibonacci.svg":`${U(32)}
<g>
    <rect x="19.5" y="19.75" fill="${K}" width="3" height="1.5"/>
    <rect x="24.5" y="19.75" fill="${K}" width="3" height="1.5"/>
    <rect x="9.5" y="19.75" fill="${K}" width="3" height="1.5"/>
    <rect x="14.5" y="19.75" fill="${K}" width="3" height="1.5"/>
    <rect x="4.5" y="19.75" fill="${K}" width="3" height="1.5"/>
    <rect x="19.5" y="15.75" fill="${K}" width="3" height="1.5"/>
    <rect x="24.5" y="15.75" fill="${K}" width="3" height="1.5"/>
    <rect x="9.5" y="15.75" fill="${K}" width="3" height="1.5"/>
    <rect x="14.5" y="15.75" fill="${K}" width="3" height="1.5"/>
    <rect x="4.5" y="15.75" fill="${K}" width="3" height="1.5"/>
    <rect x="19.5" y="10.75" fill="${K}" width="3" height="1.5"/>
    <rect x="24.5" y="10.75" fill="${K}" width="3" height="1.5"/>
    <rect x="9.5" y="10.75" fill="${K}" width="3" height="1.5"/>
    <rect x="14.5" y="10.75" fill="${K}" width="3" height="1.5"/>
    <rect x="4.5" y="10.75" fill="${K}" width="3" height="1.5"/>
    <rect x="4" y="4.75" fill="${K}" width="24" height="1.5"/>
    <rect x="4" y="25.75" fill="${K}" width="24" height="1.5"/>
</g>
</svg>
`,"flag-basic.svg":`${U(32)}
<g>
    <path fill="${K}" d="M27.25,4.75H15V3h-1.65v22.175c0,0.456,0.369,0.825,0.825,0.825S15,25.631,15,25.175V16.25h12.25L21.5,10.5
        L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
</g>
</svg>
`,"flag-diamond.svg":`${U(32)}
<g>
    <path fill="${K}" d="M27.25,4.75H15V3h-1.65v20.175c0,0.456,0.369,0.825,0.825,0.825S15,23.631,15,23.175V16.25h12.25L21.5,10.5
        L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
    <polygon fill="${K}" points="17,22.604 21.65,24 14,26.295 6.349,24 11,22.604 11,21.195 1.651,24 14,27.705 26.35,24
        17,21.195"/>
</g>
</svg>
`,"flag-elipse.svg":`${U(32)}
<g>
    <path fill="${K}" d="M17,20.385v1.506c4.129,0.398,6.25,1.558,6.25,2.109c0,0.673-3.146,2.5-9.25,2.5S4.75,24.673,4.75,24
        c0-0.552,2.121-1.711,6.25-2.109v-1.506C6.879,20.757,3.25,21.922,3.25,24c0,2.576,5.572,4,10.75,4s10.75-1.424,10.75-4
        C24.75,21.922,21.121,20.757,17,20.385z"/>
    <path fill="${K}" d="M27.25,4.75H15V3h-1.65v20.175c0,0.456,0.369,0.825,0.825,0.825S15,23.631,15,23.175V16.25h12.25L21.5,10.5
        L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
</g>
</svg>
`,"flag-trapeze.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="19.29,20.3 17,20.3 17,21.7 18.71,21.7 23.311,26.3 6.133,26.3 8.433,21.7 11,21.7 11,20.3
        7.567,20.3 3.867,27.7 26.69,27.7"/>
    <g>
        <path fill="${K}" d="M27.25,4.75H15V3h-1.65v20.175c0,0.456,0.369,0.825,0.825,0.825S15,23.631,15,23.175V16.25h12.25
            L21.5,10.5L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
    </g>
</g>
</svg>
`,"fullscreen.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="22.593,21.657 19.297,18.361 18.413,19.244 21.71,22.541 20.465,23.786 24.75,24.75 23.786,20.464"/>
    <polygon fill="${K}" points="11.535,8.214 7.25,7.25 8.214,11.536 9.459,10.291 12.756,13.588 13.641,12.703 10.343,9.406"/>
    <polygon fill="${K}" points="19.27,13.613 22.566,10.316 23.786,11.535 24.75,7.25 20.464,8.214 21.684,9.433 18.387,12.729"/>
    <polygon fill="${K}" points="12.729,18.386 9.432,21.683 8.214,20.465 7.25,24.75 11.536,23.786 10.316,22.567 13.613,19.271"/>
</g>
</svg>
`,"horizontal-line.svg":`${U(32)}
<path fill="${K}" d="M27,14.751H15.143c-0.289-0.663-0.948-1.126-1.718-1.126s-1.429,0.463-1.718,1.126H5v1.5h6.709
    c0.289,0.661,0.947,1.124,1.716,1.124s1.427-0.463,1.716-1.124H27V14.751z"/>
</svg>
`,"indicators.svg":`${U(32)}
<g>
</g>
<g>
    <g>
        <g>
            <polygon fill="${K}" points="14.138,14.794 14.697,16.26 21.328,11.074 22.156,12.134 23.723,8.25 19.576,8.834 20.404,9.893"/>
            <polygon fill="${K}" points="10.841,17.372 3.761,22.909 4.685,24.091 11.401,18.838"/>
        </g>
        <g>
            <path fill="${K}" d="M17.075,24.159c-0.11,0-0.221-0.006-0.332-0.019c-1.334-0.154-2.439-1.211-3.113-2.976l-2.215-5.793
                c-0.469-1.226-1.177-1.967-1.995-2.087c-0.816-0.111-1.723,0.401-2.511,1.428l-3.842,4.994c-0.254,0.328-0.723,0.39-1.052,0.138
                c-0.328-0.253-0.39-0.724-0.138-1.052l3.842-4.994c1.146-1.489,2.541-2.203,3.917-1.997c1.38,0.201,2.509,1.279,3.179,3.035
                l2.215,5.793c0.458,1.199,1.146,1.936,1.885,2.021c0.736,0.08,1.576-0.477,2.296-1.54l9.141-13.53
                c0.231-0.344,0.697-0.433,1.041-0.201c0.343,0.231,0.434,0.697,0.201,1.041l-9.141,13.53
                C19.483,23.386,18.295,24.159,17.075,24.159z"/>
        </g>
    </g>
</g>
<g>
</g>
</svg>
`,"label.svg":`${U(32)}
<g>
    <path fill="${K}" d="M3.75,7.749v14.5h7.939L16,26.561l4.31-4.312h7.94v-14.5H3.75z M26.75,20.749h-7.062L16,24.439l-3.689-3.69
        H5.25v-11.5h21.5V20.749z"/>
    <polygon fill="${K}" points="9.291,18 10.735,18 10.735,13.251 12.426,13.251 12.426,12.018 7.601,12.018 7.601,13.251
        9.291,13.251"/>
    <polygon fill="${K}" points="14.712,18 15.971,15.888 17.28,18 19.063,18 16.9,14.84 18.793,12.018 17.111,12.018
        16.013,13.876 14.897,12.018 13.157,12.018 15.084,14.84 12.988,18"/>
    <polygon fill="${K}" points="21.265,18 22.709,18 22.709,13.251 24.399,13.251 24.399,12.018 19.574,12.018 19.574,13.251
        21.265,13.251"/>
</g>
</svg>
`,"line.svg":`${U(32)}
<path fill="${K}" d="M27.03,6.03L25.97,4.97l-3.788,3.788c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    c0,0.241,0.05,0.47,0.133,0.682l-8.576,8.576c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    c0,0.241,0.05,0.47,0.133,0.682L4.97,25.97L6.03,27.03l3.788-3.788c0.212,0.083,0.44,0.133,0.682,0.133
    c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l8.576-8.576c0.212,0.083,0.44,0.133,0.682,0.133
    c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682L27.03,6.03z"/>
</svg>
`,"linear.svg":`${U(32)}<polyline fill="${K}" points="8.4,7 8.4,5.3 6.8,5.3 6.8,23 6.8,24.5 6.8,27.3 8.4,27.3 8.4,8.5"/>
<polyline fill="${K}" points="22.8,10.3 24.1,9 22.9,7.9 10.4,20.5 9.3,21.5 7.4,23.5 8.5,24.6 21.8,11.3"/>
<polyline fill="${K}" points="25.2,25.4 26.9,25.4 26.9,23.8 9.2,23.8 7.7,23.8 4.9,23.8 4.9,25.4 23.7,25.4"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,"logarithmic.svg":`${U(32)}<g data-name="Layer 2"><g data-name="Layer 7"><g><polyline fill="${K}" points="8.41 7.01 8.41 5.26 6.81 5.26 6.81 23.01 6.81 24.51 6.81 27.26 8.41 27.26 8.41 8.51"/><polyline fill="${K}" points="25.17 25.37 26.92 25.37 26.92 23.77 9.17 23.77 7.67 23.77 4.92 23.77 4.92 25.37 23.67 25.37"/><path fill="${K}" d="M24.66,12a2.18,2.18,0,0,0-.27-.11,12.35,12.35,0,0,0-16.64,12,9.8,9.8,0,0,0,1.88.14A10.51,10.51,0,0,1,23.77,13.61"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,"measure-x.svg":`${U(32)}
<g>
    <g>
        <polygon fill="${K}" points="14.673,21 15.984,19.177 17.287,21 18.808,21 16.766,18.344 18.559,16 17.12,16 16.006,17.553
            14.923,16 13.422,16 15.225,18.344 13.193,21"/>
        <rect x="25.75" y="9.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="25.75" y="24.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="25.75" y="14.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="25.75" y="19.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="4.75" y="9.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="4.75" y="4.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="4.75" y="19.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="4.75" y="14.014" fill="${K}" width="1.5" height="2.986"/>
        <rect x="25.75" y="4" fill="${K}" width="1.5" height="3"/>
        <rect x="4.75" y="24" fill="${K}" width="1.5" height="2.986"/>
        <polygon fill="${K}" points="24.465,13.5 21,11.5 21,13 11,13 11,11.5 7.535,13.5 11,15.5 11,14 21,14 21,15.5"/>
    </g>
</g>
</svg>
`,"measure-xy.svg":`${U(32)}
<g>
    <g>
        <rect x="26.75" y="19" fill="${K}" width="1.5" height="3"/>
        <rect x="26.75" y="14" fill="${K}" width="1.5" height="3"/>
        <rect x="26.75" y="9" fill="${K}" width="1.5" height="3"/>
        <rect x="20" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="15" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="10" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="4.75" y="9.001" fill="${K}" width="1.5" height="2.999"/>
        <rect x="4.75" y="14.001" fill="${K}" width="1.5" height="2.999"/>
        <rect x="4.75" y="19.001" fill="${K}" width="1.5" height="2.999"/>
        <rect x="10" y="3.751" fill="${K}" width="3" height="1.5"/>
        <rect x="15" y="3.751" fill="${K}" width="3" height="1.5"/>
        <rect x="20" y="3.751" fill="${K}" width="3" height="1.5"/>
    </g>
    <polygon fill="${K}" points="25,3.75 25,5.25 26.75,5.25 26.75,7 28.25,7 28.25,3.75"/>
    <polygon fill="${K}" points="4.75,7 6.25,7 6.25,5.25 8,5.25 8,3.75 4.75,3.75"/>
    <polygon fill="${K}" points="8,27.25 8,25.75 6.25,25.75 6.25,24 4.75,24 4.75,27.25"/>
    <polygon fill="${K}" points="28.25,24 26.75,24 26.75,25.75 25,25.75 25,27.25 28.25,27.25"/>
    <polygon fill="${K}" points="16.5,6.535 14.5,10 16,10 16,21 14.5,21 16.5,24.465 18.5,21 17,21 17,10 18.5,10"/>
    <polygon fill="${K}" points="25.465,15.5 22,13.5 22,15 11,15 11,13.5 7.535,15.5 11,17.5 11,16 22,16 22,17.5"/>
</g>
</svg>
`,"measure-y.svg":`${U(32)}
<g>
    <g>
        <rect x="24" y="4.75" fill="${K}" width="3" height="1.5"/>
        <rect x="19" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="9" y="4.75" fill="${K}" width="3" height="1.5"/>
        <rect x="4" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="19" y="4.75" fill="${K}" width="3" height="1.5"/>
        <rect x="14" y="4.75" fill="${K}" width="3" height="1.5"/>
        <path fill="${K}" d="M18.13,19.851c-0.113,0.116-0.297,0.175-0.552,0.175c-0.163,0-0.321-0.024-0.478-0.074l-0.106,1.104
            c0.205,0.05,0.425,0.074,0.658,0.074c0.531,0,0.936-0.116,1.216-0.35c0.279-0.234,0.518-0.602,0.716-1.104l2.409-6.187h-1.326
            l-1.264,3.703h-0.021l-1.423-3.703h-1.411l2.187,5.094l-0.255,0.647C18.36,19.526,18.243,19.733,18.13,19.851z"/>
        <rect x="14" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="8.995" y="25.75" fill="${K}" width="3" height="1.5"/>
        <rect x="4" y="4.75" fill="${K}" width="3" height="1.5"/>
        <rect x="24" y="25.75" fill="${K}" width="3" height="1.5"/>
        <polygon fill="${K}" points="13.5,7.535 11.5,11 13,11 13,21 11.5,21 13.5,24.465 15.5,21 14,21 14,11 15.5,11"/>
    </g>
</g>
</svg>
`,"panning.svg":`${U(32)}<path fill="${K}" d="M20.8,10.7v-0.4c0-1.4-1.1-2.6-2.5-2.6c-0.2,0-0.4,0-0.7,0.1C17,6.5,15.5,6,14.3,6.6
    c-0.5,0.2-0.9,0.7-1.2,1.2c-1.4-0.3-2.8,0.5-3.1,1.9C9.9,9.8,9.9,10,9.9,10.2v4.9c-0.8-0.3-1.7-0.2-2.4,0.3C6.4,16.3,6.2,17.9,7,19
    l4.6,6.5c0.2,0.3,0.6,0.5,1,0.5h8.6c0.6,0,1.1-0.4,1.2-1l1.2-5.1c0.1-0.6,0.2-1.2,0.2-1.8v-5c0-1.4-1.1-2.6-2.5-2.6
    C21.1,10.6,21,10.6,20.8,10.7z M21.9,18.3c0,0.5,0,0.9-0.1,1.3l-1.1,4.6h-7.8L8.5,18c-0.6-0.8,0.6-1.6,1.1-0.9l1,1.5
    c0.2,0.3,0.6,0.3,0.9,0.1c0.2-0.1,0.3-0.3,0.3-0.5v-8c0-0.4,0.2-0.7,0.6-0.8c0.4,0,0.7,0.2,0.8,0.6c0,0.1,0,0.1,0,0.2v5.9
    c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0,0H14c0.3,0,0.6-0.3,0.6-0.6c0,0,0,0,0,0V8.9c0-0.4,0.2-0.7,0.6-0.8c0.4,0,0.7,0.2,0.8,0.6
    c0,0.1,0,0.1,0,0.2v7.3c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0,0H17c0.3,0,0.6-0.3,0.6-0.6c0,0,0,0,0,0v-6c0-0.4,0.2-0.7,0.6-0.8
    c0.4,0,0.7,0.2,0.8,0.6c0,0.1,0,0.1,0,0.2v6c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0,0h0.3c0.3,0,0.6-0.3,0.6-0.6c0,0,0,0,0,0v-2.9
    c0-0.4,0.2-0.7,0.6-0.8c0.4,0,0.7,0.2,0.8,0.6c0,0.1,0,0.1,0,0.2L21.9,18.3L21.9,18.3z"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,"parallel-channel.svg":`${U(32)}
<g>
    <path fill="${K}" d="M17.258,7.802C17.487,7.896,17.737,7.95,18,7.95c1.077,0,1.95-0.873,1.95-1.95S19.077,4.05,18,4.05
        c-1.076,0-1.95,0.873-1.95,1.95c0,0.263,0.054,0.513,0.147,0.742l-9.455,9.456C6.513,16.104,6.263,16.05,6,16.05
        c-1.076,0-1.95,0.873-1.95,1.95S4.924,19.95,6,19.95c1.077,0,1.95-0.873,1.95-1.95c0-0.263-0.054-0.513-0.147-0.742L17.258,7.802z"
        />
    <path fill="${K}" d="M28.03,13.03L26.97,11.97l-6.228,6.228C20.513,18.104,20.263,18.05,20,18.05c-1.077,0-1.95,0.873-1.95,1.95
        c0,0.263,0.054,0.513,0.147,0.742L11.97,26.97l1.061,1.061l6.228-6.228c0.229,0.094,0.479,0.147,0.742,0.147
        c1.077,0,1.95-0.873,1.95-1.95c0-0.263-0.054-0.513-0.147-0.742L28.03,13.03z"/>
</g>
</svg>
`,"pitchfork.svg":`${U(32)}
<path fill="${K}" d="M28.057,15.006l-1.059-1.062l-7.865,7.863c-0.212-0.083-0.441-0.133-0.683-0.133
    c-0.243,0-0.474,0.05-0.687,0.134l-3.254-3.255l8.548-8.548l-1.06-1.061l-8.549,8.548l-3.257-3.259
    c0.083-0.213,0.133-0.442,0.133-0.685c0-0.241-0.05-0.47-0.132-0.682l7.863-7.862l-1.059-1.061l-7.865,7.862
    c-0.212-0.083-0.441-0.133-0.683-0.133c-1.036,0-1.875,0.839-1.875,1.875s0.839,1.875,1.875,1.875c0.241,0,0.47-0.05,0.681-0.132
    l3.26,3.26l-5.206,5.205c-0.213-0.083-0.442-0.133-0.685-0.133c-1.036,0-1.875,0.84-1.875,1.875c0,1.036,0.839,1.875,1.875,1.875
    s1.875-0.839,1.875-1.875c0-0.24-0.049-0.469-0.132-0.681l5.207-5.206l3.257,3.257c-0.082,0.211-0.132,0.439-0.132,0.68
    c0,1.036,0.839,1.875,1.875,1.875s1.875-0.839,1.875-1.875c0-0.241-0.05-0.47-0.132-0.682L28.057,15.006z"/>
</svg>
`,"ray.svg":`${U(32)}
<path fill="${K}" d="M27.03,6.03L25.97,4.97l-7.788,7.788c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    c0,0.241,0.05,0.47,0.133,0.682l-7.576,7.576c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l7.576-7.576c0.212,0.083,0.44,0.133,0.682,0.133
    c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682L27.03,6.03z"/>
</svg>
`,"rectangle.svg":`${U(32)}
<path fill="${K}" d="M25.25,22.783V6.75H6.75v18.5h16.033c0.29,0.662,0.949,1.125,1.717,1.125c1.035,0,1.875-0.84,1.875-1.875
    C26.375,23.731,25.912,23.073,25.25,22.783z M23.75,22.783c-0.432,0.189-0.777,0.535-0.967,0.967H8.25V8.25h15.5V22.783z"/>
</svg>
`,"remove-annotations.svg":`${U(32)}
<g>
    <rect x="5" y="23.7" fill="${K}" width="3" height="1.5"/>

        <rect x="7.69" y="26.011" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -5.046 52.9314)" fill="${K}" width="1.5" height="3"/>
    <path fill="${K}" d="M16.311,23.7l10.625-10.625l-7.159-7.158c-1.001-1.002-2.019-0.786-2.806,0.003L6.72,16.17
        c-0.614,0.613-0.952,1.423-0.952,2.28s0.338,1.667,0.952,2.28l4.47,4.47H27v-1.5H16.311z M18.716,6.978l6.099,6.098l-0.648,0.647
        l-6.438-6.438l0.304-0.304C18.228,6.783,18.521,6.784,18.716,6.978z M11.811,23.7l-4.03-4.03c-0.331-0.33-0.513-0.764-0.513-1.22
        s0.182-0.89,0.513-1.22l1.72-1.72l5.47,5.47l1.061-1.061l-5.47-5.47l6.106-6.105l6.438,6.438L14.189,23.7H11.811z"/>
</g>
</svg>
`,"save-chart.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="8.749,21.25 12.75,21.25 12.75,26 14.25,26 14.25,19.75 12.37,19.75 15.999,16.12 19.629,19.75
        17.75,19.75 17.75,26 19.25,26 19.25,21.25 23.25,21.25 16,14"/>
    <polygon fill="${K}" points="15.34,6.75 12.84,3.75 5.75,3.75 5.75,21.138 7.25,19.638 7.25,5.25 12.16,5.25 14.66,8.25
        24.75,8.25 24.75,19.555 26.25,21.055 26.25,6.75"/>
</g>
</svg>
`,"segment.svg":`${U(32)}
<path fill="${K}" d="M24.5,5.625c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682L8.182,22.758
    c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875
    c0-0.241-0.05-0.47-0.133-0.682L23.818,9.242c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875
    S25.535,5.625,24.5,5.625z"/>
</svg>
`,"separator.svg":`${U(32)}
<g>
    <path fill="#CDCDCC" d="M32,16.251h-3.52v-1.5H32V16.251z M24.92,16.251h-3.56v-1.5h3.56V16.251z M17.8,16.251h-3.56v-1.5h3.56
        V16.251z M10.68,16.251H7.12v-1.5h3.56V16.251z M3.56,16.251H0v-1.5h3.56V16.251z"/>
</g>
</svg>
`,"series-candlestick.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="7,26 8,26 8,23 9,23 9,18 8,18 8,14 7,14 7,18 6,18 6,23 7,23"/>
    <polygon fill="${K}" points="13,20 14,20 14,17 15,17 15,11 14,11 14,6 13,6 13,11 12,11 12,17 13,17"/>
    <polygon fill="${K}" points="19,25 20,25 20,22 21,22 21,18 20,18 20,14 19,14 19,18 18,18 18,22 19,22"/>
    <polygon fill="${K}" points="24,17 25,17 25,14 26,14 26,10 25,10 25,6 24,6 24,10 23,10 23,14 24,14"/>
</g>
</svg>
`,"series-heikin-ashi.svg":`${U(32)}<g data-name="Layer 2"><g><g data-name="heikin-ashi-series"><rect fill="${K}" x="10.77" y="7.42" width="3.11" height="16.29"/><rect fill="${K}" x="11.76" y="12.19" width="1.06" height="14.01"/><rect fill="${K}" x="4.83" y="5.24" width="3.11" height="5.05"/><rect fill="${K}" x="5.83" y="7.96" width="1.06" height="4.68"/><rect fill="${K}" x="17.71" y="13.5" width="3.11" height="5.05"/><rect fill="${K}" x="18.7" y="16.21" width="1.06" height="6.74"/><polygon fill="${K}" points="24.68 16.6 25.7 16.6 25.7 13.51 26.73 13.51 26.73 9.39 25.7 9.39 25.7 5.27 24.68 5.27 24.68 9.39 23.64 9.39 23.64 13.51 24.68 13.51 24.68 16.6"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,"series-hlc.svg":`${U(32)}<g data-name="Layer 2"><g><g data-name="hlc-series"><polyline fill="${K}" points="5.11 12.22 5.11 24.97 6.71 24.97 6.71 20.22 9.65 20.22 9.65 18.72 6.71 18.72 6.71 6.97 5.11 6.97 5.11 10.72"/><polyline fill="${K}" points="14.2 18.14 14.2 19.89 15.8 19.89 15.8 14.14 18.75 14.14 18.75 12.64 15.8 12.64 15.8 9.89 14.2 9.89 14.2 16.64"/><polyline fill="${K}" points="22.2 22.77 22.2 5.02 23.8 5.02 23.8 6.77 26.75 6.77 26.75 8.27 23.8 8.27 23.8 27.02 22.2 27.02 22.2 24.27"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,"series-hollow-candlestick.svg":`${U(32)}<g data-name="Layer 2"><g><g data-name="hollow-candlestick-series"><rect fill="${K}" x="11.07" y="14.05" width="3.25" height="8.37"/><rect fill="${K}" x="12.11" y="6.89" width="1.11" height="10.88"/><rect fill="${K}" x="12.11" y="21.4" width="1.11" height="5.38"/><path fill="${K}" d="M19.77,10.19v9.58H18.68V10.19h1.09m1.08-1.07H17.6V20.84h3.25V9.12Z"/><rect fill="${K}" x="18.64" y="20.55" width="1.11" height="2.88"/><rect fill="${K}" x="18.64" y="5.25" width="1.11" height="3.93"/><path fill="${K}" d="M6.66,17.23v5.14H5.57V17.23H6.66m1.08-1.08H4.49v7.3H7.74v-7.3Z"/><rect fill="${K}" x="5.53" y="12.35" width="1.11" height="4.31"/><rect fill="${K}" x="5.53" y="22.43" width="1.11" height="4.43"/><rect fill="${K}" x="24.01" y="12.33" width="3.25" height="8.37"/><rect fill="${K}" x="25.05" y="20.68" width="1.11" height="5.53"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,"series-line.svg":`${U(32)}
<g>
    <path fill="${K}" d="M4.125,28.95c-0.079,0-0.16-0.012-0.239-0.035c-0.436-0.132-0.683-0.593-0.551-1.028L8.844,9.664
        l5.229,11.505l4.674-8.413l3.879,3.031l4.602-12.081c0.163-0.426,0.641-0.64,1.064-0.477c0.426,0.162,0.641,0.639,0.479,1.064
        l-5.398,14.169l-4.121-3.219l-5.326,9.587L9.156,14.336L4.915,28.363C4.807,28.721,4.479,28.95,4.125,28.95z"/>
</g>
</svg>
`,"series-ohlc.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="8.3,6.001 6.7,6.001 6.7,9.75 3.75,9.75 3.75,11.25 6.7,11.25 6.7,24 8.3,24 8.3,19.25
        11.25,19.25 11.25,17.75 8.3,17.75"/>
    <polygon fill="${K}" points="17.3,13 15.7,13 15.7,24.75 12.75,24.75 12.75,26.25 15.7,26.25 15.7,28 17.3,28 17.3,22.25
        20.25,22.25 20.25,20.75 17.3,20.75"/>
    <polygon fill="${K}" points="28.25,21.75 25.3,21.75 25.3,4 23.7,4 23.7,5.75 20.75,5.75 20.75,7.25 23.7,7.25 23.7,26 25.3,26
        25.3,23.25 28.25,23.25"/>
</g>
</svg>
`,"text.svg":`${U(60)}
<g>
    <line fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" x1="31" y1="12" x2="31" y2="48"/>
    <line fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" x1="24" y1="48" x2="37" y2="48"/>
    <polyline fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" points="45,19 45,12 17,12 17,19"/>
</g>
</svg>
`,"time-cycles.svg":`${U(32)}
<path fill="${K}" d="M12.1,27c0-2.2-1.8-4-4-4s-4,1.8-4,4 M5.5,27c-0.1-1.4,1-2.7,2.4-2.7c1.4-0.1,2.7,1,2.7,2.4c0,0.1,0,0.2,0,0.3"
    />
<path fill="${K}" d="M20.1,27c0-2.2-1.8-4-4-4s-4,1.8-4,4 M13.5,27c-0.1-1.4,1-2.7,2.4-2.7c1.4-0.1,2.7,1,2.7,2.4c0,0.1,0,0.2,0,0.3"/>
<path fill="${K}" d="M28,27c0-2.2-1.8-4-4-4s-4,1.8-4,4 M21.4,27c-0.1-1.4,1-2.7,2.4-2.7c1.4-0.1,2.7,1,2.7,2.4c0,0.1,0,0.2,0,0.3"
    />
<rect x="4.1" y="27" fill="${K}" width="23.9" height="1.4"/>
<rect x="23.3" y="20.4" fill="${K}" width="1.4" height="1.4"/>
<rect x="23.3" y="17.1" fill="${K}" width="1.4" height="1.4"/>
<rect x="23.3" y="13.7" fill="${K}" width="1.4" height="1.4"/>
<rect x="23.3" y="10.4" fill="${K}" width="1.4" height="1.4"/>
<rect x="23.3" y="7" fill="${K}" width="1.4" height="1.4"/>
<rect x="23.3" y="3.6" fill="${K}" width="1.4" height="1.4"/>
<rect x="15.5" y="20.4" fill="${K}" width="1.4" height="1.4"/>
<rect x="15.5" y="17.1" fill="${K}" width="1.4" height="1.4"/>
<rect x="15.5" y="13.7" fill="${K}" width="1.4" height="1.4"/>
<rect x="15.5" y="10.4" fill="${K}" width="1.4" height="1.4"/>
<rect x="15.5" y="7" fill="${K}" width="1.4" height="1.4"/>
<rect x="15.5" y="3.6" fill="${K}" width="1.4" height="1.4"/>
<rect x="7.5" y="20.4" fill="${K}" width="1.4" height="1.4"/>
<rect x="7.5" y="17.1" fill="${K}" width="1.4" height="1.4"/>
<rect x="7.5" y="13.7" fill="${K}" width="1.4" height="1.4"/>
<rect x="7.5" y="10.4" fill="${K}" width="1.4" height="1.4"/>
<rect x="7.5" y="7" fill="${K}" width="1.4" height="1.4"/>
<rect x="7.5" y="3.6" fill="${K}" width="1.4" height="1.4"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,"vertical-arrow.svg":`${U(32)}
<polygon fill="${K}" points="16.251,23.243 16.251,4.001 14.751,4.001 14.751,23.244 13,23.244 15.5,28 18,23.243"/>
</svg>
`,"vertical-counter.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="16.251,11 14.751,11 14.751,23.244 13,23.244 15.5,28 18,23.243 16.251,23.243"/>
    <polygon fill="${K}" points="9.085,5.241 9.693,6.074 10.618,5.36 10.618,9 11.794,9 11.794,4.044 10.716,4.044"/>
    <path fill="${K}" d="M14.778,5.118c0.126-0.138,0.285-0.206,0.477-0.206c0.187,0,0.336,0.055,0.448,0.164
        c0.111,0.11,0.168,0.254,0.168,0.431c0,0.252-0.136,0.507-0.406,0.763l-1.933,1.75V9h3.584V7.978h-2.022l1.147-1.021
        c0.285-0.252,0.501-0.49,0.647-0.714c0.147-0.225,0.221-0.495,0.221-0.812c0-0.489-0.175-0.865-0.524-1.127
        c-0.351-0.261-0.772-0.392-1.268-0.392c-0.494,0-0.919,0.144-1.273,0.431c-0.355,0.287-0.561,0.675-0.616,1.165l1.127,0.154
        C14.578,5.437,14.652,5.256,14.778,5.118z"/>
    <path fill="${K}" d="M21.656,6.826C21.479,6.614,21.25,6.476,20.97,6.41V6.389c0.247-0.065,0.448-0.194,0.603-0.388
        c0.153-0.194,0.23-0.424,0.23-0.69c0-0.447-0.172-0.793-0.515-1.035c-0.343-0.243-0.752-0.364-1.229-0.364
        c-0.434,0-0.821,0.109-1.162,0.329c-0.341,0.219-0.569,0.529-0.686,0.931l1.092,0.252c0.037-0.168,0.118-0.302,0.241-0.402
        c0.124-0.101,0.27-0.15,0.438-0.15c0.173,0,0.32,0.049,0.441,0.146c0.121,0.099,0.182,0.231,0.182,0.399
        c0,0.392-0.289,0.588-0.867,0.588h-0.344v0.861h0.315c0.284,0,0.523,0.05,0.718,0.15c0.193,0.101,0.29,0.267,0.29,0.5
        c0,0.215-0.072,0.374-0.217,0.477s-0.312,0.154-0.504,0.154c-0.215,0-0.396-0.06-0.546-0.179s-0.248-0.265-0.294-0.438
        l-1.093,0.287c0.126,0.438,0.369,0.768,0.729,0.986c0.359,0.22,0.779,0.329,1.26,0.329c0.317,0,0.613-0.054,0.889-0.161
        s0.508-0.283,0.697-0.528c0.188-0.245,0.283-0.54,0.283-0.886C21.922,7.282,21.833,7.039,21.656,6.826z"/>
</g>
</svg>
`,"vertical-double-arrow.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="18,10.243 16.251,10.243 16.251,4.001 14.751,4.001 14.751,10.244 13,10.244 15.5,15"/>
    <polygon fill="${K}" points="13,21.757 14.749,21.757 14.749,27.999 16.249,27.999 16.249,21.756 18,21.756 15.5,17"/>
</g>
</svg>
`,"vertical-label.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="16.251,11 14.751,11 14.751,23.244 13,23.244 15.5,28 18,23.243 16.251,23.243"/>
    <polygon fill="${K}" points="8.5,5.066 9.899,5.066 9.899,9 11.097,9 11.097,5.066 12.497,5.066 12.497,4.044 8.5,4.044"/>
    <polygon fill="${K}" points="17.813,4.044 16.421,4.044 15.511,5.584 14.587,4.044 13.145,4.044 14.74,6.382 13.005,9 14.433,9
        15.476,7.25 16.561,9 18.037,9 16.245,6.382"/>
    <polygon fill="${K}" points="18.504,4.044 18.504,5.066 19.903,5.066 19.903,9 21.101,9 21.101,5.066 22.501,5.066
        22.501,4.044"/>
</g>
</svg>
`,"vertical-line.svg":`${U(32)}
<path fill="${K}" d="M17.375,18.574c0-0.769-0.463-1.427-1.124-1.716V5h-1.5v11.856c-0.663,0.29-1.126,0.949-1.126,1.718
    c0,0.771,0.463,1.429,1.126,1.718V27h1.5v-6.709C16.912,20.001,17.375,19.344,17.375,18.574z"/>
</svg>
`,"zoom-x.svg":`${U(32)}
<g>
    <polygon fill="${K}" points="16.25,18 16.25,15.25 19,15.25 19,13.75 16.25,13.75 16.25,11 14.75,11 14.75,13.75 12,13.75
        12,15.25 14.75,15.25 14.75,18"/>
    <path fill="${K}" d="M15.5,8.251c2.359,0,4.416,1.314,5.479,3.249h1.665C21.47,8.713,18.71,6.751,15.5,6.751
        S9.53,8.713,8.355,11.5h1.665C11.084,9.565,13.141,8.251,15.5,8.251z"/>
    <path fill="${K}" d="M22.646,17.5H20.98c-1.062,1.936-3.121,3.251-5.48,3.251s-4.418-1.315-5.48-3.251H8.354
        c1.175,2.788,3.935,4.751,7.146,4.751c1.84,0,3.52-0.659,4.85-1.734l5.567,5.566l1.166-1.166l-5.558-5.557
        C21.98,18.799,22.361,18.175,22.646,17.5z"/>
    <polygon fill="${K}" points="10,13.754 6.012,13.754 6.012,12.26 2.125,14.504 6.012,16.747 6.012,15.247 10,15.247"/>
    <polygon fill="${K}" points="21,15.253 24.988,15.253 24.988,16.747 28.875,14.504 24.988,12.261 24.988,13.761 21,13.761"/>
</g>
</svg>
`,"zoom-xy.svg":`${U(32)}
<g>
    <path fill="${K}" d="M26.083,24.917l-5.556-5.555c1.075-1.331,1.723-3.021,1.723-4.861c0-4.273-3.477-7.75-7.75-7.75
        s-7.75,3.477-7.75,7.75s3.477,7.75,7.75,7.75c1.84,0,3.53-0.647,4.861-1.723l5.556,5.555L26.083,24.917z M8.25,14.501
        c0-3.446,2.804-6.25,6.25-6.25s6.25,2.804,6.25,6.25s-2.804,6.25-6.25,6.25S8.25,17.947,8.25,14.501z"/>
    <polygon fill="${K}" points="15.25,11 13.75,11 13.75,13.75 11,13.75 11,15.25 13.75,15.25 13.75,18 15.25,18 15.25,15.25
        18,15.25 18,13.75 15.25,13.75"/>
</g>
</svg>
`,"zoom-y.svg":`${U(32)}
<g>
    <path fill="${K}" d="M27.083,24.917l-5.567-5.566c1.075-1.331,1.734-3.01,1.734-4.85c0-3.21-1.962-5.97-4.75-7.146v1.665
        c1.936,1.063,3.25,3.121,3.25,5.48s-1.314,4.417-3.25,5.48v1.665c0.675-0.284,1.298-0.666,1.859-1.12l5.558,5.557L27.083,24.917z"
        />
    <polygon fill="${K}" points="16.25,18 16.25,15.25 19,15.25 19,13.75 16.25,13.75 16.25,11 14.75,11 14.75,13.75 12,13.75
        12,15.25 14.75,15.25 14.75,18"/>
    <path fill="${K}" d="M9.25,14.501c0-2.359,1.314-4.417,3.25-5.48V7.355c-2.788,1.176-4.75,3.936-4.75,7.146
        s1.962,5.97,4.75,7.146v-1.665C10.564,18.918,9.25,16.86,9.25,14.501z"/>
    <polygon fill="${K}" points="14.753,9 16.246,9 16.246,5.01 17.74,5.01 15.496,1.125 13.253,5.01 14.753,5.01"/>
    <polygon fill="${K}" points="16.239,20 14.746,20 14.746,23.986 13.252,23.986 15.496,27.874 17.739,23.986 16.239,23.986"/>
</g>
</svg>
`},{addFlagFromForm:Z,attractToPoint:j,isNotNavigatorYAxis:_,isPriceIndicatorEnabled:G,manageIndicators:J,updateHeight:Q,updateNthPoint:tt,updateRectSize:ti}=F,te={segment:{className:"highcharts-segment",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"segment",type:"crookedLine",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value},{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.segment.annotationsOptions);return this.chart.addAnnotation(n)},steps:[tt(1)]},arrowSegment:{className:"highcharts-arrow-segment",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"arrowSegment",type:"crookedLine",typeOptions:{line:{markerEnd:"arrow"},xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value},{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.arrowSegment.annotationsOptions);return this.chart.addAnnotation(n)},steps:[tt(1)]},ray:{className:"highcharts-ray",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"ray",type:"infinityLine",typeOptions:{type:"ray",xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value},{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.ray.annotationsOptions);return this.chart.addAnnotation(n)},steps:[tt(1)]},arrowRay:{className:"highcharts-arrow-ray",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"arrowRay",type:"infinityLine",typeOptions:{type:"ray",line:{markerEnd:"arrow"},xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value},{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.arrowRay.annotationsOptions);return this.chart.addAnnotation(n)},steps:[tt(1)]},infinityLine:{className:"highcharts-infinity-line",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"infinityLine",type:"infinityLine",typeOptions:{type:"line",xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value},{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.infinityLine.annotationsOptions);return this.chart.addAnnotation(n)},steps:[tt(1)]},arrowInfinityLine:{className:"highcharts-arrow-infinity-line",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"arrowInfinityLine",type:"infinityLine",typeOptions:{type:"line",line:{markerEnd:"arrow"},xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value},{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.arrowInfinityLine.annotationsOptions);return this.chart.addAnnotation(n)},steps:[tt(1)]},horizontalLine:{className:"highcharts-horizontal-line",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"horizontalLine",type:"infinityLine",draggable:"y",typeOptions:{type:"horizontalLine",xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.horizontalLine.annotationsOptions);this.chart.addAnnotation(n)}},verticalLine:{className:"highcharts-vertical-line",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({langKey:"verticalLine",type:"infinityLine",draggable:"x",typeOptions:{type:"verticalLine",xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value}]}},s.annotationsOptions,s.bindings?.verticalLine.annotationsOptions);this.chart.addAnnotation(n)}},crooked3:{className:"highcharts-crooked3",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"crooked3",type:"crookedLine",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:s,y:n},{x:s,y:n},{x:s,y:n}]}},o.annotationsOptions,o.bindings?.crooked3.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),tt(2)]},crooked5:{className:"highcharts-crooked5",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"crooked5",type:"crookedLine",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:s,y:n},{x:s,y:n},{x:s,y:n},{x:s,y:n},{x:s,y:n}]}},o.annotationsOptions,o.bindings?.crooked5.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),tt(2),tt(3),tt(4)]},elliott3:{className:"highcharts-elliott3",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"elliott3",type:"elliottWave",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:s,y:n},{x:s,y:n},{x:s,y:n},{x:s,y:n}]},labelOptions:{style:{color:"var(--highcharts-neutral-color-60)"}}},o.annotationsOptions,o.bindings?.elliott3.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),tt(2),tt(3)]},elliott5:{className:"highcharts-elliott5",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"elliott5",type:"elliottWave",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:s,y:n},{x:s,y:n},{x:s,y:n},{x:s,y:n},{x:s,y:n},{x:s,y:n}]}},o.annotationsOptions,o.bindings?.elliott5.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),tt(2),tt(3),tt(4),tt(5)]},measureX:{className:"highcharts-measure-x",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"measure",type:"measure",typeOptions:{selectType:"x",xAxis:i.axis.index,yAxis:e.axis.index,point:{x:s,y:n},crosshairX:{strokeWidth:1},crosshairY:{enabled:!1,strokeWidth:0},background:{width:0,height:0}}},o.annotationsOptions,o.bindings?.measureX.annotationsOptions);return this.chart.addAnnotation(a)},steps:[ti]},measureY:{className:"highcharts-measure-y",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"measure",type:"measure",typeOptions:{selectType:"y",xAxis:i.axis.index,yAxis:e.axis.index,point:{x:s,y:n},crosshairX:{enabled:!1,strokeWidth:0},crosshairY:{strokeWidth:1},background:{width:0,height:0,strokeWidth:0}}},o.annotationsOptions,o.bindings?.measureY.annotationsOptions);return this.chart.addAnnotation(a)},steps:[ti]},measureXY:{className:"highcharts-measure-xy",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"measure",type:"measure",typeOptions:{selectType:"xy",xAxis:i.axis.index,yAxis:e.axis.index,point:{x:s,y:n},background:{width:0,height:0,strokeWidth:0},crosshairX:{strokeWidth:1},crosshairY:{strokeWidth:1}}},o.annotationsOptions,o.bindings?.measureXY.annotationsOptions);return this.chart.addAnnotation(a)},steps:[ti]},fibonacci:{className:"highcharts-fibonacci",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"fibonacci",type:"fibonacci",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:s,y:n},{x:s,y:n}]}},o.annotationsOptions,o.bindings?.fibonacci.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),Q]},parallelChannel:{className:"highcharts-parallel-channel",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"parallelChannel",type:"tunnel",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:s,y:n},{x:s,y:n}]}},o.annotationsOptions,o.bindings?.parallelChannel.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),Q]},pitchfork:{className:"highcharts-pitchfork",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=i.value,n=e.value,o=this.chart.options.navigation,a=(0,c.merge)({langKey:"pitchfork",type:"pitchfork",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value,y:e.value,controlPoint:{style:{fill:"var(--highcharts-negative-color)"}}},{x:s,y:n},{x:s,y:n}]}},o.annotationsOptions,o.bindings?.pitchfork.annotationsOptions);return this.chart.addAnnotation(a)},steps:[tt(1),tt(2)]},verticalCounter:{className:"highcharts-vertical-counter",start:function(t){let i=j(t,this.chart);if(!i)return;this.verticalCounter=this.verticalCounter||0;let e=this.chart.options.navigation,s=(0,c.merge)({langKey:"verticalCounter",type:"verticalLine",typeOptions:{point:{x:i.x,y:i.y,xAxis:i.xAxis,yAxis:i.yAxis},label:{offset:i.below?40:-40,text:this.verticalCounter.toString()}}},e.annotationsOptions,e.bindings?.verticalCounter.annotationsOptions),n=this.chart.addAnnotation(s);this.verticalCounter++,(n.options.events?.click).call(n,{})}},timeCycles:{className:"highcharts-time-cycles",start:function(t){let i=j(t,this.chart);if(!i)return;let e=this.chart.options.navigation,s=(0,c.merge)({langKey:"timeCycles",type:"timeCycles",typeOptions:{xAxis:i.xAxis,yAxis:i.yAxis,points:[{x:i.x},{x:i.x}]}},e.annotationsOptions,e.bindings?.timeCycles.annotationsOptions),n=this.chart.addAnnotation(s);return(n.options.events?.click).call(n,{}),n},steps:[tt(1)]},verticalLabel:{className:"highcharts-vertical-label",start:function(t){let i=j(t,this.chart);if(!i)return;let e=this.chart.options.navigation,s=(0,c.merge)({langKey:"verticalLabel",type:"verticalLine",typeOptions:{point:{x:i.x,y:i.y,xAxis:i.xAxis,yAxis:i.yAxis},label:{offset:i.below?40:-40}}},e.annotationsOptions,e.bindings?.verticalLabel.annotationsOptions),n=this.chart.addAnnotation(s);(n.options.events?.click).call(n,{})}},verticalArrow:{className:"highcharts-vertical-arrow",start:function(t){let i=j(t,this.chart);if(!i)return;let e=this.chart.options.navigation,s=(0,c.merge)({langKey:"verticalArrow",type:"verticalLine",typeOptions:{point:{x:i.x,y:i.y,xAxis:i.xAxis,yAxis:i.yAxis},label:{offset:i.below?40:-40,format:" "},connector:{fill:"none",stroke:i.below?"var(--highcharts-negative-color)":"var(--highcharts-positive-color)"}}},e.annotationsOptions,e.bindings?.verticalArrow.annotationsOptions),n=this.chart.addAnnotation(s);(n.options.events?.click).call(n,{})}},fibonacciTimeZones:{className:"highcharts-fibonacci-time-zones",start:function(t){let[i,e]=this.getCoords(t);if(!i||!e)return;let s=this.chart.options.navigation,n=(0,c.merge)({type:"fibonacciTimeZones",langKey:"fibonacciTimeZones",typeOptions:{xAxis:i.axis.index,yAxis:e.axis.index,points:[{x:i.value}]}},s.annotationsOptions,s.bindings?.fibonacciTimeZones.annotationsOptions);return this.chart.addAnnotation(n)},steps:[function(t,i){let e=i.options.typeOptions?.points,s=(e?.[0]).x,[n,o]=this.getCoords(t);n&&o&&i.update({typeOptions:{xAxis:n.axis.index,yAxis:o.axis.index,points:[{x:s},{x:n.value}]}})}]},flagCirclepin:{className:"highcharts-flag-circlepin",start:Z("circlepin")},flagDiamondpin:{className:"highcharts-flag-diamondpin",start:Z("flag")},flagSquarepin:{className:"highcharts-flag-squarepin",start:Z("squarepin")},flagSimplepin:{className:"highcharts-flag-simplepin",start:Z("nopin")},zoomX:{className:"highcharts-zoom-x",init:function(t){this.chart.update({chart:{zooming:{type:"x"}}}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},zoomY:{className:"highcharts-zoom-y",init:function(t){this.chart.update({chart:{zooming:{type:"y"}}}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},zoomXY:{className:"highcharts-zoom-xy",init:function(t){this.chart.update({chart:{zooming:{type:"xy"}}}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},seriesTypeLine:{className:"highcharts-series-type-line",init:function(t){this.chart.series[0].update({type:"line",useOhlcData:!0}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},seriesTypeOhlc:{className:"highcharts-series-type-ohlc",init:function(t){this.chart.series[0].update({type:"ohlc"}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},seriesTypeCandlestick:{className:"highcharts-series-type-candlestick",init:function(t){this.chart.series[0].update({type:"candlestick"}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},seriesTypeHeikinAshi:{className:"highcharts-series-type-heikinashi",init:function(t){this.chart.series[0].update({type:"heikinashi"}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},seriesTypeHLC:{className:"highcharts-series-type-hlc",init:function(t){this.chart.series[0].update({type:"hlc",useOhlcData:!0}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},seriesTypeHollowCandlestick:{className:"highcharts-series-type-hollowcandlestick",init:function(t){this.chart.series[0].update({type:"hollowcandlestick"}),(0,c.fireEvent)(this,"deselectButton",{button:t})}},fullScreen:{className:"highcharts-full-screen",noDataState:"normal",init:function(t){this.chart.fullscreen&&this.chart.fullscreen.toggle(),(0,c.fireEvent)(this,"deselectButton",{button:t})}},currentPriceIndicator:{className:"highcharts-current-price-indicator",init:function(t){let i=this.chart,e=i.series,s=i.stockTools,n=G(i.series);s&&s.guiEnabled&&(e.forEach(function(t){t.update({lastPrice:{enabled:!n},lastVisiblePrice:{enabled:!n,label:{enabled:!0}}},!1)}),i.redraw()),(0,c.fireEvent)(this,"deselectButton",{button:t})}},indicators:{className:"highcharts-indicators",init:function(){let t=this;(0,c.fireEvent)(t,"showPopup",{formType:"indicators",options:{},onSubmit:function(i){J.call(t,i)}})}},toggleAnnotations:{className:"highcharts-toggle-annotations",init:function(t){let i=this.chart,e=i.stockTools;this.toggledAnnotations=!this.toggledAnnotations,(i.annotations||[]).forEach(function(t){t.setVisibility(!this.toggledAnnotations)},this),e&&e.guiEnabled&&(this.toggledAnnotations?t.firstChild.style["background-image"]=D("annotations-hidden.svg",e.iconsURL,q):t.firstChild.style["background-image"]=D("annotations-visible.svg",e.iconsURL,q)),(0,c.fireEvent)(this,"deselectButton",{button:t})}},saveChart:{className:"highcharts-save-chart",noDataState:"normal",init:function(t){let i=this.chart,e=[],s=[],n=[],o=[];i.annotations.forEach(function(t,i){e[i]=t.userOptions}),i.series.forEach(function(t){t.is("sma")?s.push(t.userOptions):"flags"===t.type&&n.push(t.userOptions)}),i.yAxis.forEach(function(t){_(t)&&o.push(t.options)}),h().win.localStorage.setItem("highcharts-chart",JSON.stringify({annotations:e,indicators:s,flags:n,yAxes:o})),(0,c.fireEvent)(this,"deselectButton",{button:t})}}},ts={lang:{stockTools:{gui:{simpleShapes:"Simple shapes",lines:"Lines",crookedLines:"Crooked lines",measure:"Measure",advanced:"Advanced",toggleAnnotations:"Toggle annotations",verticalLabels:"Vertical labels",flags:"Flags",zoomChange:"Zoom change",typeChange:"Type change",saveChart:"Save chart",indicators:"Indicators",currentPriceIndicator:"Current Price Indicators",zoomX:"Zoom X",zoomY:"Zoom Y",zoomXY:"Zooom XY",fullScreen:"Fullscreen",typeOHLC:"OHLC",typeLine:"Line",typeCandlestick:"Candlestick",typeHLC:"HLC",typeHollowCandlestick:"Hollow Candlestick",typeHeikinAshi:"Heikin Ashi",circle:"Circle",ellipse:"Ellipse",label:"Label",rectangle:"Rectangle",flagCirclepin:"Flag circle",flagDiamondpin:"Flag diamond",flagSquarepin:"Flag square",flagSimplepin:"Flag simple",measureXY:"Measure XY",measureX:"Measure X",measureY:"Measure Y",segment:"Segment",arrowSegment:"Arrow segment",ray:"Ray",arrowRay:"Arrow ray",line:"Line",arrowInfinityLine:"Arrow line",horizontalLine:"Horizontal line",verticalLine:"Vertical line",infinityLine:"Infinity line",crooked3:"Crooked 3 line",crooked5:"Crooked 5 line",elliott3:"Elliott 3 line",elliott5:"Elliott 5 line",verticalCounter:"Vertical counter",verticalLabel:"Vertical label",verticalArrow:"Vertical arrow",fibonacci:"Fibonacci",fibonacciTimeZones:"Fibonacci Time Zones",pitchfork:"Pitchfork",parallelChannel:"Parallel channel",timeCycles:"Time Cycles"}},navigation:{popup:{circle:"Circle",ellipse:"Ellipse",rectangle:"Rectangle",label:"Label",segment:"Segment",arrowSegment:"Arrow segment",ray:"Ray",arrowRay:"Arrow ray",line:"Line",arrowInfinityLine:"Arrow line",horizontalLine:"Horizontal line",verticalLine:"Vertical line",crooked3:"Crooked 3 line",crooked5:"Crooked 5 line",elliott3:"Elliott 3 line",elliott5:"Elliott 5 line",verticalCounter:"Vertical counter",verticalLabel:"Vertical label",verticalArrow:"Vertical arrow",fibonacci:"Fibonacci",fibonacciTimeZones:"Fibonacci Time Zones",pitchfork:"Pitchfork",parallelChannel:"Parallel channel",infinityLine:"Infinity line",measure:"Measure",measureXY:"Measure XY",measureX:"Measure X",measureY:"Measure Y",timeCycles:"Time Cycles",flags:"Flags",addButton:"Add",saveButton:"Save",editButton:"Edit",removeButton:"Remove",series:"Series",volume:"Volume",connector:"Connector",innerBackground:"Inner background",outerBackground:"Outer background",crosshairX:"Crosshair X",crosshairY:"Crosshair Y",tunnel:"Tunnel",background:"Background",noFilterMatch:"No match",searchIndicators:"Search Indicators",clearFilter:"✕ clear filter",index:"Index",period:"Period",periods:"Periods",standardDeviation:"Standard deviation",periodTenkan:"Tenkan period",periodSenkouSpanB:"Senkou Span B period",periodATR:"ATR period",multiplierATR:"ATR multiplier",shortPeriod:"Short period",longPeriod:"Long period",signalPeriod:"Signal period",decimals:"Decimals",algorithm:"Algorithm",topBand:"Top band",bottomBand:"Bottom band",initialAccelerationFactor:"Initial acceleration factor",maxAccelerationFactor:"Max acceleration factor",increment:"Increment",multiplier:"Multiplier",ranges:"Ranges",highIndex:"High index",lowIndex:"Low index",deviation:"Deviation",xAxisUnit:"x-axis unit",factor:"Factor",fastAvgPeriod:"Fast average period",slowAvgPeriod:"Slow average period",average:"Average",indicatorAliases:{abands:["Acceleration Bands"],bb:["Bollinger Bands"],dema:["Double Exponential Moving Average"],ema:["Exponential Moving Average"],ikh:["Ichimoku Kinko Hyo"],keltnerchannels:["Keltner Channels"],linearRegression:["Linear Regression"],pivotpoints:["Pivot Points"],pc:["Price Channel"],priceenvelopes:["Price Envelopes"],psar:["Parabolic SAR"],sma:["Simple Moving Average"],supertrend:["Super Trend"],tema:["Triple Exponential Moving Average"],vbp:["Volume by Price"],vwap:["Volume Weighted Moving Average"],wma:["Weighted Moving Average"],zigzag:["Zig Zag"],apo:["Absolute price indicator"],ad:["Accumulation/Distribution"],aroon:["Aroon"],aroonoscillator:["Aroon oscillator"],atr:["Average True Range"],ao:["Awesome oscillator"],cci:["Commodity Channel Index"],chaikin:["Chaikin"],cmf:["Chaikin Money Flow"],cmo:["Chande Momentum Oscillator"],disparityindex:["Disparity Index"],dmi:["Directional Movement Index"],dpo:["Detrended price oscillator"],klinger:["Klinger Oscillator"],linearRegressionAngle:["Linear Regression Angle"],linearRegressionIntercept:["Linear Regression Intercept"],linearRegressionSlope:["Linear Regression Slope"],macd:["Moving Average Convergence Divergence"],mfi:["Money Flow Index"],momentum:["Momentum"],natr:["Normalized Average True Range"],obv:["On-Balance Volume"],ppo:["Percentage Price oscillator"],roc:["Rate of Change"],rsi:["Relative Strength Index"],slowstochastic:["Slow Stochastic"],stochastic:["Stochastic"],trix:["TRIX"],williamsr:["Williams %R"]}}}},stockTools:{gui:{enabled:!0,className:"highcharts-bindings-wrapper",toolbarClassName:"stocktools-toolbar",buttons:["indicators","separator","simpleShapes","lines","crookedLines","measure","advanced","toggleAnnotations","separator","verticalLabels","flags","separator","zoomChange","fullScreen","typeChange","separator","currentPriceIndicator","saveChart"],definitions:{separator:{elementType:"span",symbol:"separator.svg"},simpleShapes:{items:["label","circle","ellipse","rectangle"],circle:{symbol:"circle.svg"},ellipse:{symbol:"ellipse.svg"},rectangle:{symbol:"rectangle.svg"},label:{symbol:"label.svg"}},flags:{items:["flagCirclepin","flagDiamondpin","flagSquarepin","flagSimplepin"],flagSimplepin:{symbol:"flag-basic.svg"},flagDiamondpin:{symbol:"flag-diamond.svg"},flagSquarepin:{symbol:"flag-trapeze.svg"},flagCirclepin:{symbol:"flag-elipse.svg"}},lines:{items:["segment","arrowSegment","ray","arrowRay","line","arrowInfinityLine","horizontalLine","verticalLine"],segment:{symbol:"segment.svg"},arrowSegment:{symbol:"arrow-segment.svg"},ray:{symbol:"ray.svg"},arrowRay:{symbol:"arrow-ray.svg"},line:{symbol:"line.svg"},arrowInfinityLine:{symbol:"arrow-line.svg"},verticalLine:{symbol:"vertical-line.svg"},horizontalLine:{symbol:"horizontal-line.svg"}},crookedLines:{items:["elliott3","elliott5","crooked3","crooked5"],crooked3:{symbol:"crooked-3.svg"},crooked5:{symbol:"crooked-5.svg"},elliott3:{symbol:"elliott-3.svg"},elliott5:{symbol:"elliott-5.svg"}},verticalLabels:{items:["verticalCounter","verticalLabel","verticalArrow"],verticalCounter:{symbol:"vertical-counter.svg"},verticalLabel:{symbol:"vertical-label.svg"},verticalArrow:{symbol:"vertical-arrow.svg"}},advanced:{items:["fibonacci","fibonacciTimeZones","pitchfork","parallelChannel","timeCycles"],pitchfork:{symbol:"pitchfork.svg"},fibonacci:{symbol:"fibonacci.svg"},fibonacciTimeZones:{symbol:"fibonacci-timezone.svg"},parallelChannel:{symbol:"parallel-channel.svg"},timeCycles:{symbol:"time-cycles.svg"}},measure:{items:["measureXY","measureX","measureY"],measureX:{symbol:"measure-x.svg"},measureY:{symbol:"measure-y.svg"},measureXY:{symbol:"measure-xy.svg"}},toggleAnnotations:{symbol:"annotations-visible.svg"},currentPriceIndicator:{symbol:"current-price-show.svg"},indicators:{symbol:"indicators.svg"},zoomChange:{items:["zoomX","zoomY","zoomXY"],zoomX:{symbol:"zoom-x.svg"},zoomY:{symbol:"zoom-y.svg"},zoomXY:{symbol:"zoom-xy.svg"}},typeChange:{items:["typeOHLC","typeLine","typeCandlestick","typeHollowCandlestick","typeHLC","typeHeikinAshi"],typeOHLC:{symbol:"series-ohlc.svg"},typeLine:{symbol:"series-line.svg"},typeCandlestick:{symbol:"series-candlestick.svg"},typeHLC:{symbol:"series-hlc.svg"},typeHeikinAshi:{symbol:"series-heikin-ashi.svg"},typeHollowCandlestick:{symbol:"series-hollow-candlestick.svg"}},fullScreen:{symbol:"fullscreen.svg"},saveChart:{symbol:"save-chart.svg"}},visible:!0}}},{setOptions:tn}=h(),{isNotNavigatorYAxis:to,isPriceIndicatorEnabled:ta}=F;function tl(t,i,e,s){let n=0,o,a,l;function r(t){return(0,c.defined)(t)&&!(0,c.isNumber)(t)&&t.match("%")}return s&&(l=(0,c.correctFloat)(parseFloat(s.top)/100),a=(0,c.correctFloat)(parseFloat(s.height)/100)),{positions:t.map((s,h)=>{let g=(0,c.correctFloat)(r(s.options.height)?parseFloat(String(s.options.height))/100:s.height/i),p=(0,c.correctFloat)(r(s.options.top)?parseFloat(String(s.options.top))/100:(s.top-s.chart.plotTop)/i);return a?(p>l&&(p-=a),n=Math.max(n,(p||0)+(g||0))):((0,c.isNumber)(g)||(g=t[h-1].series.every(t=>t.is("sma"))?o:e/100),(0,c.isNumber)(p)||(p=n),o=g,n=(0,c.correctFloat)(Math.max(n,(p||0)+(g||0)))),{height:100*g,top:100*p}}),allAxesHeight:n}}function tr(t){let i=[];return t.forEach(function(e,s){let n=t[s+1];n?i[s]={enabled:!0,controlledAxis:{next:[(0,c.pick)(n.options.id,n.index)]}}:i[s]={enabled:!1}}),i}function tc(t,i,e,s){return t.forEach(function(n,o){let a=t[o-1];n.top=a?(0,c.correctFloat)(a.height+a.top):0,e&&(n.height=(0,c.correctFloat)(n.height+s*i))}),t}function th(t){let i=this.chart,e=i.yAxis.filter(to),s=i.plotHeight,{positions:n,allAxesHeight:o}=this.getYAxisPositions(e,s,20,t),a=this.getYAxisResizers(e);!t&&o<=(0,c.correctFloat)(1)?n[n.length-1]={height:20,top:(0,c.correctFloat)(100*o-20)}:n.forEach(function(t){t.height=t.height/(100*o)*100,t.top=t.top/(100*o)*100}),n.forEach(function(t,i){e[i].update({height:t.height+"%",top:t.top+"%",resize:a[i],offset:0},!1)})}var tg=l(660),tp=l.n(tg);let{shallowArraysEqual:td}=F;class tu{constructor(t,i,e){this.width=0,this.isDirty=!1,this.chart=e,this.options=t,this.iconsURL=this.getIconsURL(),this.lang=i,this.guiEnabled=t.enabled,this.visible=(0,c.pick)(t.visible,!0),this.guiClassName=t.className,this.toolbarClassName=t.toolbarClassName,this.eventsToUnbind=[],this.guiEnabled&&(this.createContainer(),this.createButtons(),this.showHideNavigation()),(0,c.fireEvent)(this,"afterInit")}createButtons(){let t=this.lang,i=this.options,e=this.toolbar,s=i.buttons,n=i.definitions,o=e.childNodes;this.buttonList=s,s.forEach(i=>{let s=this.addButton(e,n,i,t);this.eventsToUnbind.push((0,c.addEvent)(s.buttonWrapper,"click",()=>this.eraseActiveButtons(o,s.buttonWrapper))),(0,c.isArray)(n[i].items)&&this.addSubmenu(s,n[i])})}addSubmenu(t,i){let e=t.submenuArrow,s=t.buttonWrapper,n=(0,c.getStyle)(s,"width"),o=this.wrapper,a=this.listWrapper,l=this.toolbar.childNodes,r=s.title,h=this.submenu=(0,c.createElement)("ul",{className:"highcharts-submenu-wrapper",id:"highcharts-submenu-wrapper-"+r.toLowerCase().replace(/\s+/g,"-")},void 0,s);this.addSubmenuItems(s,i),e.setAttribute("aria-controls",h.id),this.eventsToUnbind.push((0,c.addEvent)(e,"click",t=>{if(t.stopPropagation(),this.eraseActiveButtons(l,s),s.className.indexOf("highcharts-current")>=0)e.setAttribute("aria-expanded",!1),a.style.width=a.startWidth+"px",s.classList.remove("highcharts-current"),h.style.display="none";else{e.setAttribute("aria-expanded",!0),h.style.display="block";let t=h.offsetHeight-s.offsetHeight-3;h.offsetHeight+s.offsetTop>o.offsetHeight&&s.offsetTop>t||(t=0),(0,c.css)(h,{top:-t+"px",left:n+3+"px"}),s.className+=" highcharts-current",a.startWidth=o.offsetWidth,a.style.width=a.startWidth+(0,c.getStyle)(a,"padding-left")+h.offsetWidth+3+"px"}}))}addSubmenuItems(t,i){let e,s=this,n=this.submenu,o=this.lang,a=this.listWrapper;i.items.forEach(l=>{e=this.addButton(n,i,l,o),this.eventsToUnbind.push((0,c.addEvent)(e.mainButton,"click",function(){s.switchSymbol(this,t,!0),a.style.width=a.startWidth+"px",n.style.display="none"}))});let l=n.querySelectorAll("li > .highcharts-menu-item-btn")[0];this.switchSymbol(l,!1)}eraseActiveButtons(t,i,e){[].forEach.call(t,t=>{t!==i&&(t.classList.remove("highcharts-current"),t.classList.remove("highcharts-active"),(e=t.querySelectorAll(".highcharts-submenu-wrapper")).length>0&&(e[0].style.display="none"))})}addButton(t,i,e,s={}){let n=i[e],o=s[e]||e,a=this.chart.options.lang.accessibility?.stockTools.arrowLabel,l=n.items,r=tu.prototype.classMapping,h=n.className||"",g=(0,c.createElement)("li",{className:(0,c.pick)(r[e],"")+" "+h},void 0,t),p=n.elementType||"button",d=(0,c.createElement)(p,{className:"highcharts-menu-item-btn",title:o,ariaLabel:o},void 0,g);if(l&&l.length){let t=(0,c.createElement)("button",{className:"highcharts-submenu-item-arrow highcharts-arrow-right",ariaLabel:a,ariaExpanded:!1},void 0,g);return t.style.backgroundImage=D("arrow-bottom.svg",this.iconsURL,q),{buttonWrapper:g,mainButton:d,submenuArrow:t}}return d.style.backgroundImage=D(n.symbol,this.iconsURL,q),{buttonWrapper:g,mainButton:d}}addNavigation(){let t=this.wrapper;this.arrowWrapper=(0,c.createElement)("div",{className:"highcharts-arrow-wrapper"}),this.arrowUp=(0,c.createElement)("div",{className:"highcharts-arrow-up"},void 0,this.arrowWrapper),this.arrowUp.style.backgroundImage=D("arrow-right.svg",this.iconsURL,q),this.arrowDown=(0,c.createElement)("div",{className:"highcharts-arrow-down"},void 0,this.arrowWrapper),this.arrowDown.style.backgroundImage=D("arrow-right.svg",this.iconsURL,q),t.insertBefore(this.arrowWrapper,t.childNodes[0]),this.scrollButtons()}scrollButtons(){let t=this.wrapper,i=this.toolbar,e=.1*t.offsetHeight,s=0;this.eventsToUnbind.push((0,c.addEvent)(this.arrowUp,"click",()=>{s>0&&(s-=e,i.style.marginTop=-s+"px")})),this.eventsToUnbind.push((0,c.addEvent)(this.arrowDown,"click",()=>{t.offsetHeight+s<=i.offsetHeight+e&&(s+=e,i.style.marginTop=-s+"px")}))}createContainer(){let t,i,e=this.chart,s=e.options.lang.accessibility?.stockTools.groupLabel,n=this.options,o=e.container,a=e.options.navigation,l=a?.bindingsClassName,r=this,h=this.wrapper=(0,c.createElement)("div",{className:"highcharts-stocktools-wrapper "+n.className+" "+l,ariaHidden:!1});o.appendChild(h),this.showHideBtn=(0,c.createElement)("div",{className:"highcharts-toggle-toolbar highcharts-arrow-left"},void 0,h),this.eventsToUnbind.push((0,c.addEvent)(this.showHideBtn,"click",()=>{this.update({gui:{visible:!r.visible}})})),["mousedown","mousemove","click","touchstart"].forEach(t=>{(0,c.addEvent)(h,t,t=>t.stopPropagation())}),(0,c.addEvent)(h,"mouseover",t=>e.pointer?.onContainerMouseLeave(t)),this.toolbar=i=(0,c.createElement)("ul",{className:"highcharts-stocktools-toolbar "+n.toolbarClassName,ariaLabel:s}),this.listWrapper=t=(0,c.createElement)("div",{className:"highcharts-menu-wrapper"}),h.insertBefore(t,h.childNodes[0]),t.insertBefore(i,t.childNodes[0]),this.showHideToolbar(),this.addNavigation()}showHideNavigation(){this.visible&&this.toolbar.offsetHeight>this.wrapper.offsetHeight-50?this.arrowWrapper.style.display="block":(this.toolbar.style.marginTop="0px",this.arrowWrapper.style.display="none")}showHideToolbar(){let t=this.wrapper,i=this.listWrapper,e=this.submenu,s=this.showHideBtn,n=this.visible;s.style.backgroundImage=D("arrow-right.svg",this.iconsURL,q),n?(t.style.height="100%",i.classList.remove("highcharts-hide"),s.classList.remove("highcharts-arrow-right"),s.style.top=(0,c.getStyle)(i,"padding-top")+"px",s.style.left=t.offsetWidth+(0,c.getStyle)(i,"padding-left")+"px"):(e&&(e.style.display="none"),s.style.left="0px",n=this.visible=!1,i.classList.add("highcharts-hide"),s.classList.add("highcharts-arrow-right"),t.style.height=s.offsetHeight+"px")}switchSymbol(t,i){let e=t.parentNode,s=e.className,n=e.parentNode.parentNode;!(s.indexOf("highcharts-disabled-btn")>-1)&&(n.className="",s&&n.classList.add(s.trim()),n.querySelectorAll(".highcharts-menu-item-btn")[0].style.backgroundImage=t.style.backgroundImage,i&&this.toggleButtonActiveClass(n))}toggleButtonActiveClass(t){let i=t.classList;i.contains("highcharts-active")?i.remove("highcharts-active"):i.add("highcharts-active")}unselectAllButtons(t){let i=t.parentNode.querySelectorAll(".highcharts-active");[].forEach.call(i,i=>{i!==t&&i.classList.remove("highcharts-active")})}update(t,i){this.isDirty=!!t.gui.definitions,(0,c.merge)(!0,this.chart.options.stockTools,t),(0,c.merge)(!0,this.options,t.gui),this.visible=(0,c.pick)(this.options.visible&&this.options.enabled,!0),this.chart.navigationBindings&&this.chart.navigationBindings.update(),this.chart.isDirtyBox=!0,(0,c.pick)(i,!0)&&this.chart.redraw()}destroy(){let t=this.wrapper,i=t&&t.parentNode;this.eventsToUnbind.forEach(t=>t()),i&&i.removeChild(t)}redraw(){if(this.options.enabled!==this.guiEnabled)this.handleGuiEnabledChange();else{if(!this.guiEnabled)return;this.updateClassNames(),this.updateButtons(),this.updateVisibility(),this.showHideNavigation(),this.showHideToolbar()}}handleGuiEnabledChange(){!1===this.options.enabled&&(this.destroy(),this.visible=!1),!0===this.options.enabled&&(this.createContainer(),this.createButtons()),this.guiEnabled=this.options.enabled}updateClassNames(){this.options.className!==this.guiClassName&&(this.guiClassName&&this.wrapper.classList.remove(this.guiClassName),this.options.className&&this.wrapper.classList.add(this.options.className),this.guiClassName=this.options.className),this.options.toolbarClassName!==this.toolbarClassName&&(this.toolbarClassName&&this.toolbar.classList.remove(this.toolbarClassName),this.options.toolbarClassName&&this.toolbar.classList.add(this.options.toolbarClassName),this.toolbarClassName=this.options.toolbarClassName)}updateButtons(){(!td(this.options.buttons,this.buttonList)||this.isDirty)&&(this.toolbar.innerHTML=tp().emptyHTML,this.createButtons())}updateVisibility(){(0,c.defined)(this.options.visible)&&(this.visible=this.options.visible)}getIconsURL(){return this.chart.options.navigation?.iconsURL||this.options.iconsURL||"renderer"}}tu.prototype.classMapping={circle:"highcharts-circle-annotation",ellipse:"highcharts-ellipse-annotation",rectangle:"highcharts-rectangle-annotation",label:"highcharts-label-annotation",segment:"highcharts-segment",arrowSegment:"highcharts-arrow-segment",ray:"highcharts-ray",arrowRay:"highcharts-arrow-ray",line:"highcharts-infinity-line",arrowInfinityLine:"highcharts-arrow-infinity-line",verticalLine:"highcharts-vertical-line",horizontalLine:"highcharts-horizontal-line",crooked3:"highcharts-crooked3",crooked5:"highcharts-crooked5",elliott3:"highcharts-elliott3",elliott5:"highcharts-elliott5",pitchfork:"highcharts-pitchfork",fibonacci:"highcharts-fibonacci",fibonacciTimeZones:"highcharts-fibonacci-time-zones",parallelChannel:"highcharts-parallel-channel",measureX:"highcharts-measure-x",measureY:"highcharts-measure-y",measureXY:"highcharts-measure-xy",timeCycles:"highcharts-time-cycles",verticalCounter:"highcharts-vertical-counter",verticalLabel:"highcharts-vertical-label",verticalArrow:"highcharts-vertical-arrow",currentPriceIndicator:"highcharts-current-price-indicator",indicators:"highcharts-indicators",flagCirclepin:"highcharts-flag-circlepin",flagDiamondpin:"highcharts-flag-diamondpin",flagSquarepin:"highcharts-flag-squarepin",flagSimplepin:"highcharts-flag-simplepin",zoomX:"highcharts-zoom-x",zoomY:"highcharts-zoom-y",zoomXY:"highcharts-zoom-xy",typeLine:"highcharts-series-type-line",typeOHLC:"highcharts-series-type-ohlc",typeHLC:"highcharts-series-type-hlc",typeCandlestick:"highcharts-series-type-candlestick",typeHollowCandlestick:"highcharts-series-type-hollowcandlestick",typeHeikinAshi:"highcharts-series-type-heikinashi",fullScreen:"highcharts-full-screen",toggleAnnotations:"highcharts-toggle-annotations",saveChart:"highcharts-save-chart",separator:"highcharts-separator"};let{setOptions:tf}=h();function tv(t){let i=this.options,e=i.lang,s=(0,c.merge)(i.stockTools&&i.stockTools.gui,t&&t.gui),n=e&&e.stockTools&&e.stockTools.gui;this.stockTools=new tu(s,n,this),this.stockTools.guiEnabled&&(this.isDirtyBox=!0)}function ty(){this.setStockTools()}function tm(){this.stockTools&&(this.stockTools.redraw(),function(t){if(t.stockTools?.guiEnabled){let i=t.options.chart,e=t.stockTools.listWrapper,s=e&&(e.startWidth+(0,c.getStyle)(e,"padding-left")+(0,c.getStyle)(e,"padding-right")||e.offsetWidth);t.stockTools.width=s;let n=!1;if(s<t.plotWidth){let e=(0,c.pick)(i.spacingLeft,i.spacing&&i.spacing[3],0)+s,o=e-t.spacingBox.x;t.spacingBox.x=e,t.spacingBox.width-=o,n=!0}else 0===s&&(n=!0);s!==t.stockTools.prevOffsetWidth&&(t.stockTools.prevOffsetWidth=s,n&&(t.isDirtyLegend=!0))}}(this))}function tx(){this.stockTools&&this.stockTools.destroy()}function tb(){let t=this.stockTools?.visible&&this.stockTools.guiEnabled?this.stockTools.width:0;t&&t<this.plotWidth&&(this.plotLeft+=t,this.spacing[3]+=t)}function tw(){let t=this.stockTools,i=t&&t.toolbar&&t.toolbar.querySelector(".highcharts-current-price-indicator");if(t&&this.navigationBindings&&this.options.series&&i){let{iconsURL:e}=t;this.navigationBindings.utils?.isPriceIndicatorEnabled?.(this.series)?i.firstChild.style["background-image"]=D("current-price-hide.svg",e,q):i.firstChild.style["background-image"]=D("current-price-show.svg",e,q)}}function tA(t){let i=this.chart.stockTools;if(i&&i.guiEnabled){let i=t.button;i.parentNode.className.indexOf("highcharts-submenu-wrapper")>=0&&(i=i.parentNode.parentNode),i.classList.remove("highcharts-active")}}function t$(t){let i=this.chart.stockTools;if(i&&i.guiEnabled){let e=t.button;i.unselectAllButtons(t.button),e.parentNode.className.indexOf("highcharts-submenu-wrapper")>=0&&(e=e.parentNode.parentNode),i.toggleButtonActiveClass(e)}}let tC=h();tC.NavigationBindings=tC.NavigationBindings||B,tC.Toolbar=tu,({compose:function(t){let i=t.prototype;i.utils?.manageIndicators||(i.getYAxisPositions=tl,i.getYAxisResizers=tr,i.recalculateYAxisPositions=tc,i.resizeYAxes=th,i.utils=i.utils||{},i.utils.indicatorsWithAxes=F.indicatorsWithAxes,i.utils.indicatorsWithVolume=F.indicatorsWithVolume,i.utils.getAssignedAxis=F.getAssignedAxis,i.utils.isPriceIndicatorEnabled=ta,i.utils.manageIndicators=F.manageIndicators,tn(ts),tn({navigation:{bindings:te}}))}}).compose(tC.NavigationBindings),({compose:function(t,i){let e=t.prototype;e.setStockTools||((0,c.addEvent)(t,"afterGetContainer",ty),(0,c.addEvent)(t,"beforeRedraw",tm),(0,c.addEvent)(t,"beforeRender",tm),(0,c.addEvent)(t,"destroy",tx),(0,c.addEvent)(t,"getMargins",tb,{order:0}),(0,c.addEvent)(t,"render",tw),e.setStockTools=tv,(0,c.addEvent)(i,"deselectButton",tA),(0,c.addEvent)(i,"selectButton",t$),tf(ts))}}).compose(tC.Chart,tC.NavigationBindings);let tk=h();return r.default})());