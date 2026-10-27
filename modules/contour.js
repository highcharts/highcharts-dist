!/**
 * Highmaps JS v13.1.1-modified (2026-10-27)
 * @module highcharts/modules/contour
 * @requires highcharts
 * @requires highcharts/modules/coloraxis
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Axis,e._Highcharts.Color,e._Highcharts.Series.types.scatter,e._Highcharts.Series,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/contour",["highcharts/highcharts"],function(e){return t(e.Axis,e.Color,e.Series.types.scatter,e.Series,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/modules/contour"]=t(e._Highcharts.Axis,e._Highcharts.Color,e._Highcharts.Series.types.scatter,e._Highcharts.Series,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Axis,e.Highcharts.Color,e.Highcharts.Series.types.scatter,e.Highcharts.Series,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,i,r,s,o)=>(()=>{"use strict";var n,a,l,h,u={532(t){t.exports=e},620(e){e.exports=t},632(e){e.exports=i},820(e){e.exports=r},512(e){e.exports=s},944(e){e.exports=o}};let f={};function d(e){let t=f[e];if(void 0!==t)return t.exports;let i=f[e]={exports:{}};return u[e](i,i.exports,d),i.exports}d.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var i in t)d.o(t,i)&&!d.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let c={};d.d(c,{default:()=>H});var g=d(944),p=d.n(g),m=d(532),x=d.n(m),v=d(620),C=d.n(v);let{parse:b}=C();(n=a||(a={})).initDataClasses=function(e){let t=this.chart,i=this.legendItem=this.legendItem||{},r=this.options,s=e.dataClasses||[],o,n,a=t.options.chart.colorCount,l=0,h;this.dataClasses=n=[],i.labels=[];for(let e=0,i=s.length;e<i;++e)o=s[e],o=(0,g.merge)(o),n.push(o),(t.styledMode||!o.color)&&("category"===r.dataClassColor?(t.styledMode||(a=(h=t.options.colors||[]).length,o.color=h[l]),o.colorIndex=l,++l===a&&(l=0)):o.color=b(r.minColor).tweenTo(b(r.maxColor),i<2?.5:e/(i-1)))},n.initStops=function(){let e=this.options,t=this.stops=e.stops||[[0,e.minColor||""],[1,e.maxColor||""]];for(let e=0,i=t.length;e<i;++e)t[e].color=b(t[e][1])},n.normalizedValue=function(e){let t=this.max||0,i=this.min||0;return this.logarithmic&&(e=this.logarithmic.log2lin(e)),1-(t-e)/(t-i||1)},n.toColor=function(e,t){let i,r,s,o,n,a,l=this.dataClasses,h=this.stops;if(l){for(a=l.length;a--;)if(r=(n=l[a]).from,s=n.to,(void 0===r||e>=r)&&(void 0===s||e<=s)){o=n.color,t&&(t.dataClass=a,t.colorIndex=n.colorIndex);break}}else{for(i=this.normalizedValue(e),a=h.length;a--&&!(i>h[a][0]););r=h[a]||h[a+1],i=1-((s=h[a+1]||r)[0]-i)/(s[0]-r[0]||1),o=r.color.tweenTo(s.color,i)}return o};let y=a,{parse:U}=C();!function(e){let t;function i(){let{userOptions:e}=this;this.colorAxis=[],e.colorAxis&&(e.colorAxis=(0,g.splat)(e.colorAxis),e.colorAxis.map(e=>new t(this,e)))}function r(e){let t=this.chart.colorAxis||[],i=t=>{let i=e.allItems.indexOf(t);-1!==i&&(this.destroyItem(e.allItems[i]),e.allItems.splice(i,1))},r=[],s,o;for(t.forEach(function(e){s=e.options,s?.showInLegend?(s.dataClasses&&s.visible?r=r.concat(e.getDataClassLegendSymbols()):s.visible&&r.push(e),e.series.forEach(function(e){(!e.options.showInLegend||s.dataClasses)&&("point"===e.options.legendType?e.points.forEach(function(e){i(e)}):i(e))})):e.destroyItems()}),o=r.length;o--;)e.allItems.unshift(r[o])}function s(e){e.visible&&e.item.legendColor&&e.item.legendItem.symbol.attr({fill:e.item.legendColor})}function o(e){this.chart.colorAxis?.forEach(t=>{t.update({},e.redraw)})}function n(){(this.chart.colorAxis?.length||this.colorAttribs)&&this.translateColors()}function a(){let e=this.axisTypes;e?-1===e.indexOf("colorAxis")&&e.push("colorAxis"):this.axisTypes=["colorAxis"]}function l(e){let t=this,i=e?"show":"hide";t.visible=t.options.visible=!!e,["graphic","dataLabel"].forEach(function(e){t[e]&&t[e][i]()}),this.series.buildKDTree()}function h(){let e=this,t=this.getPointsCollection(),i=this.options.nullColor,r=this.colorAxis,s=this.colorKey;t.forEach(t=>{let o=t.getNestedProperty(s),n=t.options.color||(t.isNull||null===t.value?i:r&&void 0!==o?r.toColor(o,t):t.color||e.color);n&&t.color!==n&&(t.color=n,"point"===e.options.legendType&&t.legendItem&&t.legendItem.label&&e.chart.legend.colorizeItem(t,t.visible))})}function u(){this.elem.attr("fill",U(this.start).tweenTo(U(this.end),this.pos),void 0,!0)}function f(){this.elem.attr("stroke",U(this.start).tweenTo(U(this.end),this.pos),void 0,!0)}e.compose=function(e,d,c,p,m){var x;let v,C=d.prototype,b=c.prototype,y=m.prototype;C.collectionsWithUpdate.includes("colorAxis")||(t=e,C.collectionsWithUpdate.push("colorAxis"),C.collectionsWithInit.colorAxis=[C.addColorAxis],(0,g.addEvent)(d,"afterCreateAxes",i),v=(x=d).prototype.createAxis,x.prototype.createAxis=function(e,i){if("colorAxis"!==e)return v.apply(this,arguments);let r=new t(this,(0,g.merge)(i.axis,{index:this[e].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach(e=>{e.series=[]}),this.series.forEach(e=>{e.bindAxes(),e.isDirtyData=!0}),(i.redraw??!0)&&this.redraw(i.animation),r},b.fillSetter=u,b.strokeSetter=f,(0,g.addEvent)(p,"afterGetAllItems",r),(0,g.addEvent)(p,"afterColorizeItem",s),(0,g.addEvent)(p,"afterUpdate",o),(0,g.extend)(y,{optionalAxis:"colorAxis",translateColors:h}),(0,g.extend)(y.pointClass.prototype,{setVisible:l}),(0,g.addEvent)(m,"afterTranslate",n,{order:1}),(0,g.addEvent)(m,"bindAxes",a))},e.pointSetVisible=l}(l||(l={}));let A=l;var I=d(820),w=d.n(I);let{defaultOptions:S}=p();S.colorAxis=(0,g.merge)(S.xAxis,{lineWidth:0,minPadding:0,maxPadding:0,gridLineColor:"var(--highcharts-background-color)",gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},clip:!1,lineColor:"var(--highcharts-neutral-color-40)",lineWidth:0,color:"var(--highcharts-neutral-color-40)",width:.01},labels:{distance:8,overflow:"justify",rotation:0},minColor:"var(--highcharts-highlight-color-10)",maxColor:"var(--highcharts-highlight-color-100)",tickLength:5,title:{margin:5},showInLegend:!0});class B extends x(){static compose(e,t,i,r){A.compose(B,e,t,i,r)}constructor(e,t){super(e,t),this.clippable=!1,this.coll="colorAxis",this.visible=!0,this.init(e,t)}init(e,t){let i=e.options.legend||{},r=t.layout?"vertical"!==t.layout:"vertical"!==i.layout;this.reversed=t.reversed,this.opposite=!r,super.init(e,t,"colorAxis"),this.side=t.side||r?2:1,this.userOptions=t,(0,g.isArray)(e.userOptions.colorAxis)&&(e.userOptions.colorAxis[this.index]=t),t.dataClasses?this.initDataClasses(t):delete this.dataClasses,this.initStops(),this.horiz=r,this.zoomEnabled=!1}hasData(){return!!(this.tickPositions||[]).length}setTickPositions(){if(!this.dataClasses)return super.setTickPositions()}setOptions(e){let t=this.chart.options.legend||{},i=S.colorAxis,r=e.layout||t.layout||i.layout,s=(0,g.merge)("vertical"!==r?{title:{rotation:0}}:{title:{rotation:90,margin:10}},i,e,{showEmpty:!1,visible:this.chart.options.legend.enabled&&!1!==e.visible}),o=s.marker||{};super.setOptions(s),this.options.crosshair=(0,g.merge)(o,{color:o.lineColor,width:o.lineWidth})}setAxisSize(){let e=this.chart,t=this.legendItem?.symbolBBox,{width:i,height:r}=this.getSize();t&&(this.left=t.x,this.top=t.y),this.width=i=t?.width??i,this.height=r=t?.height??r,this.right=e.chartWidth-this.left-i,this.bottom=e.chartHeight-this.top-r,this.pos=this.horiz?this.left:this.top,this.len=(this.horiz?i:r)||B.defaultLegendLength}getOffset(){let e=this.chart,t=this.legendItem?.group,i=e.axisOffset[this.side],{clipOffset:r,legend:s}=e;t&&(this.axisParent=t,super.getOffset(),s.allItems.forEach(function(e){e instanceof B&&e.drawLegendSymbol(s,e)}),s.render(),e.getMargins(!0),this.added||(this.added=!0),this.labelLeft=0,this.labelRight=this.width,e.axisOffset[this.side]=i,e.clipOffset=r)}createGroups(){let e=this.axisParent;super.createGroups(),this.axisGroup?.parentGroup!==e&&(this.gridGroup?.add(e),this.axisGroup?.add(e),this.labelGroup?.add(e))}setLegendColor(){let e=this.horiz,t=this.reversed,i=+!!t,r=+!t,s=e?[i,0,r,0]:[0,r,0,i];this.legendColor={linearGradient:{x1:s[0],y1:s[1],x2:s[2],y2:s[3]},stops:this.stops}}drawLegendSymbol(e,t){let i=t.legendItem||{},r=e.padding,s=e.options,o=this.options.labels,n=s.itemDistance??10,a=this.horiz,{width:l,height:h}=this.getSize(),u=s.labelPadding??(a?16:30);this.setLegendColor();let f=0,d=0;if(this.options.title?.text&&!this.axisTitle){this.axisGroup||(this.axisParent=i.group,this.createGroups());let e=this.len,t=this.top,r=this.left,s=this.width;this.len=a?l:h,this.top=0,this.left=0,this.width=l,this.addTitle(!0),this.len=e,this.top=t,this.left=r,this.width=s}if(this.axisTitle){let e=this.axisTitle.getBBox();f=e.height,d=e.width}let c=this.options.title||{},g=this.axisTitle?c.margin??0:0,p=a?f+g:0,m=i.symbol?"animate":"attr";i.symbol||(i.symbol=this.chart.renderer.symbol("roundedRect").attr({r:s.symbolRadius??3,zIndex:1}).add(i.group)),i.symbolBBox={x:0,y:(e.baseline||0)-11+p,width:l,height:h},i.symbol[m](i.symbolBBox),a?(i.labelWidth=Math.max(l+r+n,d||0),i.labelHeight=h+r+u+f+g):(i.labelWidth=l+r+(o.x??o.distance??15)+(this.maxLabelLength||0)+(d||0)+g,i.labelHeight=Math.max(h+r,f||0))}getTitlePosition(e){let t=super.getTitlePosition(e),i=this.options.title?.margin??0;if(this.horiz&&e)t.y=this.top-i;else if(!this.horiz&&e){let e=this.options.labels||{},r=e.x??e.distance??0;t.x=this.left+this.width+r+(this.maxLabelLength||0)+i}return t}setState(e){this.series.forEach(function(t){t.setState(e)})}setVisible(){}getSeriesExtremes(){let e=this.series,t,i,r,s,o=e.length;for(this.dataMin=1/0,this.dataMax=-1/0;o--;){for(let n of(i=(s=e[o]).colorKey=s.options.colorKey??s.colorKey??s.pointValKey??s.zoneAxis??"y",r=s[i+"Min"]&&s[i+"Max"],[i,"value","y"]))if((t=s.getColumn(n)).length)break;if(r)s.minColorValue=s[i+"Min"],s.maxColorValue=s[i+"Max"];else{let e=w().prototype.getExtremes.call(s,t);s.minColorValue=e.dataMin,s.maxColorValue=e.dataMax}(0,g.defined)(s.minColorValue)&&(0,g.defined)(s.maxColorValue)&&(this.dataMin=Math.min(this.dataMin,s.minColorValue),this.dataMax=Math.max(this.dataMax,s.maxColorValue)),r||w().prototype.applyExtremes.call(s)}}drawCrosshair(e,t){let i,r=this.legendItem||{},s=t?.plotX,o=t?.plotY,n=this.pos,a=this.len;t&&((i=this.toPixels(t.getNestedProperty(t.series.colorKey)))<n?i=n-2:i>n+a&&(i=n+a+2),t.plotX=i,t.plotY=this.len-i,super.drawCrosshair(e,t),t.plotX=s,t.plotY=o,this.cross&&"object"==typeof this.crosshair&&(!this.cross.addedToColorAxis&&r.group&&(this.cross.addClass("highcharts-coloraxis-marker").add(r.group),this.cross.addedToColorAxis=!0),this.chart.styledMode||this.cross.attr({fill:this.options.marker?.color})))}getPlotLinePath(e){let t=this.left,i=e.translatedValue,{symbol:r}=this.options.marker||{},s=this.top;if((0,g.isNumber)(i)){if(r){let e=this.height,o=i-e/2,n=s;return this.horiz||(e=this.width,o=t,n=i-e/2),this.chart.renderer.symbols[r](o,n,e,e)}return this.horiz?[["M",i-4,s-6],["L",i+4,s-6],["L",i,s],["Z"]]:[["M",t,i],["L",t-6,i+6],["L",t-6,i-6],["Z"]]}return super.getPlotLinePath(e)}update(e,t){let i=this.chart.legend;this.series.forEach(e=>{e.isDirtyData=!0}),(e.dataClasses&&i.allItems||this.dataClasses)&&this.destroyItems(),delete this.legendItem?.symbolBBox,super.update(e,t),this.legendItem?.label&&(this.setLegendColor(),i.colorizeItem(this,!0))}destroyItems(){let{chart:e,legendItem:t={}}=this;if(e){if(t.label)e.legend.destroyItem(this);else if(t.labels)for(let i of t.labels)e.legend.destroyItem(i);e.isDirtyLegend=!0}}destroy(){this.chart.isDirtyLegend=!0,this.destroyItems(),super.destroy()}remove(e){this.destroyItems(),super.remove(e)}getDataClassLegendSymbols(){let e,t=this,i=t.chart,r=t.legendItem&&t.legendItem.labels||[],s=i.options.legend,o=s.valueDecimals??-1,n=s.valueSuffix??"",a=e=>t.series.reduce((t,i)=>(t.push(...i.points.filter(t=>t.dataClass===e)),t),[]);return r.length||t.dataClasses?.forEach((s,l)=>{let h=s.from,u=s.to,{numberFormatter:f}=i,d=!0;e="",void 0===h?e="< ":void 0===u&&(e="> "),void 0!==h&&(e+=f(h,o)+n),void 0!==h&&void 0!==u&&(e+=" - "),void 0!==u&&(e+=f(u,o)+n),r.push((0,g.extend)({chart:i,name:e,options:{},drawLegendSymbol:w().prototype.drawLegendSymbol,visible:!0,isDataClass:!0,setState:e=>{for(let t of a(l))t.setState(e)},setVisible:function(){this.visible=d=t.visible=!d;let e=[];for(let t of a(l))t.setVisible(d),t.hiddenInDataClass=!d,-1===e.indexOf(t.series)&&e.push(t.series);i.legend.colorizeItem(this,d),e.forEach(e=>{(0,g.fireEvent)(e,"afterDataClassLegendClick")})}},s))}),r}getSize(){let{chart:e,horiz:t}=this,{height:i,width:r}=this.options,{legend:s}=e.options;return{width:(0,g.defined)(r)?(0,g.relativeLength)(r,e.chartWidth):s?.symbolWidth??(t?B.defaultLegendLength:12),height:(0,g.defined)(i)?(0,g.relativeLength)(i,e.chartHeight):s?.symbolHeight??(t?12:B.defaultLegendLength)}}}B.defaultLegendLength=200,(0,g.extend)(B.prototype,y);/**
 * @license Highcharts JS v13.1.1-modified (2026-10-27)
 * @module highcharts/modules/color-axis
 * @requires highcharts
 *
 * ColorAxis module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Paweł Potaczek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */let E=p();E.ColorAxis=E.ColorAxis||B,E.ColorAxis.compose(E.Chart,E.Fx,E.Legend,E.Series);var M=d(632),O=d.n(M);let P=O().prototype.pointClass,L=`

struct VertexInput {
    @location(0) pos: vec3f
}

struct VertexOutput {
    @builtin(position) pos: vec4f,
    @location(0) originalPos: vec3f,
    @location(1) valExtremes: vec2f,
}

@group(0) @binding(0) var<uniform> uExtremes: vec4f;
@group(0) @binding(1) var<uniform> uValueExtremes: vec2f;
@group(0) @binding(9) var<uniform> uIsInverted: u32;

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let pos = input.pos;

    let xMin = uExtremes[0];
    let xMax = uExtremes[1];
    let yMin = uExtremes[2];
    let yMax = uExtremes[3];

    var posX: f32;
    var posY: f32;
    if (uIsInverted > 0u) {
        posX = (1.0 - (pos.y - yMin) / (yMax - yMin)) * 2.0 - 1.0;
        posY = (1.0 - (pos.x - xMin) / (xMax - xMin)) * 2.0 - 1.0;
    } else {
        posX = (pos.x - xMin) / (xMax - xMin) * 2.0 - 1.0;
        posY = (pos.y - yMin) / (yMax - yMin) * 2.0 - 1.0;
    }

    output.valExtremes = uValueExtremes;
    output.originalPos = pos.xyz;
    output.pos = vec4f(posX, posY, 0, 1);

    return output;
}

// ------------------------------------------------

struct FragmentInput {
    @location(0) originalPos: vec3f,
    @location(1) valExtremes: vec2f
}

@group(0) @binding(2) var<storage> uColorStops: array<vec4<f32>>;
@group(0) @binding(3) var<uniform> uColorStopsCount: u32;
@group(0) @binding(4) var<uniform> uContourInterval: f32;
@group(0) @binding(5) var<uniform> uContourOffset: f32;
@group(0) @binding(6) var<uniform> uSmoothColoring: u32;
@group(0) @binding(7) var<uniform> uContourLineWidth: f32;
@group(0) @binding(8) var<uniform> uContourLineColor: vec3f;

fn getColor(value: f32) -> vec3<f32> {
    let stopCount = uColorStopsCount;

    if (stopCount == 0u) {
        return vec3<f32>(1.0, 1.0, 1.0);
    }

    for (var i: u32 = 0u; i < stopCount - 1u; i = i + 1u) {
        if (value < uColorStops[i + 1u].x) {
            let t = (value - uColorStops[i].x) /
                (uColorStops[i + 1u].x - uColorStops[i].x);

            return mix(uColorStops[i].yzw, uColorStops[i + 1u].yzw, t);
        }
    }

    return uColorStops[stopCount - 1u].yzw;
}

@fragment
fn fragmentMain(input: FragmentInput) -> @location(0) vec4f {
    let val = input.originalPos.z;

    // Contour lines
    let lineWidth: f32 = uContourLineWidth;

    let val_dx: f32 = dpdx(val);
    let val_dy: f32 = dpdy(val);
    let gradient: f32 = length(vec2f(val_dx, val_dy));

    let epsilon: f32 = max(uContourInterval * 1.0e-6, 1.0e-12);
    let adjustedLineWidth: f32 = lineWidth * gradient + epsilon;

    let adjustedVal: f32 = val - uContourOffset;
    let valDiv: f32 = adjustedVal / uContourInterval;
    let valMod: f32 = adjustedVal - uContourInterval * floor(valDiv);

    let lineMask: f32 = smoothstep(0.0, adjustedLineWidth, valMod) * (
        1.0 - smoothstep(
            uContourInterval - adjustedLineWidth,
            uContourInterval,
            valMod
        )
    );

    // Background color
    let minHeight: f32 = input.valExtremes.x;
    let maxHeight: f32 = input.valExtremes.y;

    var bgColor: vec3f;
    if (uSmoothColoring > 0u) {
        bgColor = getColor((val - minHeight) / (maxHeight - minHeight));
    } else {
        let adjustedVal: f32 = val - uContourOffset;
        let averageValInBand: f32 = floor(
            adjustedVal / uContourInterval
        ) * uContourInterval + uContourOffset + uContourInterval / 2.0;

        bgColor = getColor(
            (averageValInBand - minHeight) /
            (maxHeight - minHeight)
        );
    }

    // Mix
    var pixelColor = bgColor;
    if (lineWidth > 0.0) {
        pixelColor = mix(uContourLineColor, pixelColor, lineMask);
    }

    return vec4(pixelColor, 1.0);
}

`,{composed:T}=p();function F(e,t,i,r){return[["M",e,t],["L",e+i,t+r],["M",e+i,t],["L",e,t+r],["Z"]]}(h||(h={})).compose=function(e){(0,g.pushUnique)(T,"Series.CrossSymbol")&&(e.prototype.symbols.cross=F)};let V=h,G=class{constructor(e){this.points=e;let t=e.length>>>1;this.epsilon=4*Number.EPSILON;let i=1/0,r=-1/0,s=1/0,o=-1/0;for(let n=0;n<t;n++){let t=e[n<<1],a=e[(n<<1)+1];t<i&&(i=t),t>r&&(r=t),a<s&&(s=a),a>o&&(o=a)}let n=r-i||1,a=o-s||1;this.minX=i,this.minY=s,this.invScaleX=1/n,this.invScaleY=1/a;let l=new Uint32Array(t),h=t=>(e[t<<1]-i)*this.invScaleX,u=t=>(e[(t<<1)+1]-s)*this.invScaleY;for(let e=0;e<t;e++)l[e]=e;l.sort((e,t)=>h(e)-h(t)||u(e)-u(t));let f=+!!t,d,c;for(let e=1;e<t;++e)d=l[f-1],c=l[e],(h(d)!==h(c)||u(d)!==u(c))&&(l[f++]=c);this.ids=l.subarray(0,f),this.triangles=this.triangulate()}triangulate(){let e,t,i=this.ids.length;if(i<3)return new Uint32Array(0);let r=this.points,{minX:s,minY:o,invScaleX:n,invScaleY:a}=this,l=e=>(r[e<<1]-s)*n,h=e=>(r[(e<<1)+1]-o)*a,u=(e,t,i)=>{let r=l(e),s=h(e),o=l(t)-r,n=h(t)-s,a=l(i)-r,u=h(i)-s,f=(Math.abs(o*u)+Math.abs(n*a))*this.epsilon;return o*u-n*a>f},f=(e,t,i,r)=>{if(e===r||t===r||i===r)return!1;let s=l(e)-l(r),o=h(e)-h(r),n=l(t)-l(r),a=h(t)-h(r),u=l(i)-l(r),f=h(i)-h(r),d=s*s+o*o,c=n*n+a*a,g=u*u+f*f,p=a*g-c*f,m=n*g-c*u,x=n*f-a*u,v=(Math.abs(s*p)+Math.abs(o*m)+Math.abs(d*x))*this.epsilon;return s*p-o*m+d*x>v},d=Math.max(32,8*i+7&-4),c=new Int32Array(d),g=new Int32Array(d),p=new Uint32Array(d),m=new Uint8Array(d),x=0,v=e=>g[g[e]],C=e=>v(g[e]),b=e=>p[v(e)],y=e=>g[c[C(e)]],U=e=>g[c[g[e]]],A=e=>c[v(e)],I=(e,t)=>u(e,p[t],b(t)),w=(e,t)=>u(e,b(t),p[t]),S=(e,t)=>w(b(e),t),B=(e,t)=>{(e=>{if(e<=d)return;let t=d<<1;for(;t<e;)t<<=1;let i=new Int32Array(t),r=new Int32Array(t),s=new Uint32Array(t),o=new Uint8Array(t);i.set(c),r.set(g),s.set(p),o.set(m),c=i,g=r,p=s,m=o,d=t})(x+4);let i=x,r=x+1,s=x+2,o=x+3;return x+=4,g[i]=r,g[r]=s,g[s]=o,g[o]=i,c[i]=i,c[s]=s,c[r]=o,c[o]=r,p[i]=e,p[s]=t,p[r]=0xffffffff,p[o]=0xffffffff,i},E=(e,t)=>{let i=g[c[e]],r=g[c[t]],s=c[e],o=c[r],n=c[i];c[e]=c[t],c[t]=s,c[i]=o,c[r]=n},M=(e,t)=>{let i=B(b(e),p[t]);return E(i,y(e)),E(v(i),t),i},O=e=>{E(e,U(e));let t=v(e);E(t,U(t))},P=this.ids,L=(e,t)=>{let i=t-e;if(2===i){let t=B(P[e],P[e+1]);return[t,v(t)]}if(3===i){let t=B(P[e],P[e+1]),i=B(P[e+1],P[e+2]);E(v(t),i);let r=P[e],s=P[e+1],o=P[e+2];if(u(r,s,o))return M(i,t),[t,v(i)];if(u(r,o,s)){let e=M(i,t);return[v(e),e]}return[t,v(i)]}let r=e+(i+1>>>1),s=L(e,r),o=L(r,t),n=s[0],a=s[1],l=o[0],h=o[1];for(;;)if(I(p[l],a))a=y(a);else if(w(p[a],l))l=A(l);else break;let d=M(v(l),a);for(p[a]===p[n]&&(n=v(d)),p[l]===p[h]&&(h=d);;){let e=c[v(d)];if(S(e,d))for(;f(b(d),p[d],b(e),b(c[e]));){let t=c[e];O(e),e=t}let t=U(d);if(S(t,d))for(;f(b(d),p[d],b(t),b(U(t)));){let e=U(t);O(t),t=e}if(!S(e,d)&&!S(t,d))break;d=!S(e,d)||S(t,d)&&f(b(e),p[e],p[t],b(t))?M(t,v(d)):M(v(d),v(e))}return[n,h]},T=L(0,i)[0];for(;I(b(c[T]),T);)T=c[T];let F=[T],V=0;{let e=T;do F.push(v(e)),m[e]=1,e=y(e);while(e!==T)}let G=[];for(;V<F.length;){let i=F[V++];if(!m[i]){e=i;do G.push(p[e]),m[t=v(e)]||F.push(t),m[e]=1,e=y(e);while(e!==i)}}return new Uint32Array(G)}};var z=d(512),D=d.n(z);class _ extends O(){static compose(e){V.compose(e)}getContourData(){let e=this.points,t=e.length,i=new Float32Array(3*t),r=new Float64Array(2*t);for(let s=0;s<t;s++){let{x:t,y:o=0,value:n}=e[s],a=2*s,l=3*s;r[a]=t,r[a+1]=o,i[l]=t,i[l+1]=o,i[l+2]=n??0}return[new G(r).triangles,i]}update(e,t){e=(0,g.diffObjects)(e,this.userOptions);let i=["smoothColoring","contourInterval","contourOffset","lineColor","lineWidth"],r=Object.keys(e).some(e=>!i.includes(e)),s=r?void 0:this.setOptions((0,g.merge)(this.userOptions,e)),o=!!s&&Object.keys((0,g.diffObjects)(s,this.options)).some(e=>!i.includes(e));r||o?super.update(e,t):(this.options=s,this.setUniforms())}drawPoints(){let{group:e}=this;if(!e)return;this.canvas||(this.foreignObject=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),e.element.appendChild(this.foreignObject),this.canvas=document.createElement("canvas"),this.foreignObject.appendChild(this.canvas));let{canvas:t,xAxis:i,yAxis:r}=this,s=this.foreignObject,o=s.width.baseVal.value,n=s.height.baseVal.value,{devicePixelRatio:a}=window,l=i.len,h=r.len;this.chart.inverted&&([l,h]=[h,l]),o!==l&&(s.setAttribute("width",l),t.width=l*a,t.style.width=l+"px"),n!==h&&(s.setAttribute("height",h),t.height=h*a,t.style.height=h+"px"),this.renderFrame?this.renderFrame():this.run()}async run(){let e=this.chart,t=e.renderer,i=this.canvas,r=navigator.gpu,s=this.context=i.getContext("webgpu");if(!r||!s)return void(0,g.error)(37,!1,e);if(t.asyncCounter+=1,s){let e=this.device;this.adapter||(this.adapter=await r.requestAdapter()),!e&&this.adapter&&(e=this.device=await this.adapter.requestDevice());let t=r.getPreferredCanvasFormat();if(e){s.configure({device:e,format:t,colorSpace:"display-p3",alphaMode:"premultiplied",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let[i,r]=this.getContourData(),{vertex:o,index:n,extremesUniform:a,valueExtremesUniform:l,contourIntervalUniform:h,contourOffsetUniform:u,smoothColoringUniform:f,lineWidthUniform:d,contourLineColor:c,colorAxisStopsCountUniform:g,colorAxisStopsUniform:p,isInvertedUniform:m}=this.buffers={vertex:e.createBuffer({size:r.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),index:e.createBuffer({size:i.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),extremesUniform:e.createBuffer({size:4*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),valueExtremesUniform:e.createBuffer({size:2*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourIntervalUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourOffsetUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),smoothColoringUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),lineWidthUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourLineColor:e.createBuffer({size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsCountUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsUniform:e.createBuffer({size:64*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),isInvertedUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})};e.queue.writeBuffer(o,0,r),e.queue.writeBuffer(n,0,i);let x=e.createShaderModule({code:L}),v=e.createRenderPipeline({layout:"auto",vertex:{module:x,entryPoint:"vertexMain",buffers:[{arrayStride:12,attributes:[{format:"float32x3",offset:0,shaderLocation:0}]}]},fragment:{module:x,entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),C=e.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a,label:"extremesUniformBuffer"}},{binding:1,resource:{buffer:l,label:"valueExtremesUniformBuffer"}},{binding:2,resource:{buffer:p,label:"colorAxisStopsBuffer"}},{binding:3,resource:{buffer:g,label:"colorAxisStopsCountBuffer"}},{binding:4,resource:{buffer:h,label:"contourIntervalUniformBuffer"}},{binding:5,resource:{buffer:u,label:"contourOffsetUniformBuffer"}},{binding:6,resource:{buffer:f,label:"smoothColoringUniformBuffer"}},{binding:7,resource:{buffer:d,label:"lineWidthUniformBuffer"}},{binding:8,resource:{buffer:c,label:"contourLineColorBuffer"}},{binding:9,resource:{buffer:m,label:"isInvertedUniformBuffer"}}]});this.renderFrame=function(){this.setUniforms(!1);let t=e.createCommandEncoder(),r=s.getCurrentTexture(),a=t.beginRenderPass({colorAttachments:[{view:r.createView(),loadOp:"clear",clearValue:[0,0,0,0],storeOp:"store"}]});a.setPipeline(v),a.setVertexBuffer(0,o),a.setIndexBuffer(n,"uint32"),a.setBindGroup(0,C),a.drawIndexed(i.length),a.end(),e.queue.submit([t.finish()])},this.renderFrame()}}t.asyncCounter--,t.asyncCounter||!e||e.hasLoaded||e.onload()}destroy(){this.canvas?.parentElement?.remove(),super.destroy()}drawGraph(){}setUniforms(e=!0){this.setFrameExtremesUniform(!1),this.setValueExtremesUniform(!1),this.setColorAxisStopsUniforms(!1),this.setContourIntervalUniform(!1),this.setContourOffsetUniform(!1),this.setSmoothColoringUniform(!1),this.setLineWidthUniform(!1),this.setContourLineColorUniform(!1),this.setIsInvertedUniform(e)}setContourIntervalUniform(e=!0){this.device&&this.buffers?.contourIntervalUniform&&(this.device.queue.writeBuffer(this.buffers.contourIntervalUniform,0,new Float32Array([this.getContourInterval()])),e&&this.renderFrame?.())}setContourOffsetUniform(e=!0){this.device&&this.buffers?.contourOffsetUniform&&(this.device.queue.writeBuffer(this.buffers.contourOffsetUniform,0,new Float32Array([this.getContourOffset()])),e&&this.renderFrame?.())}setSmoothColoringUniform(e=!0){this.device&&this.buffers?.smoothColoringUniform&&(this.device.queue.writeBuffer(this.buffers.smoothColoringUniform,0,new Float32Array([this.getSmoothColoring()])),e&&this.renderFrame?.())}setLineWidthUniform(e=!0){this.device&&this.buffers?.lineWidthUniform&&(this.device.queue.writeBuffer(this.buffers.lineWidthUniform,0,new Float32Array([this.getLineWidth()])),e&&this.renderFrame?.())}setContourLineColorUniform(e=!0){this.device&&this.buffers?.contourLineColor&&(this.device.queue.writeBuffer(this.buffers.contourLineColor,0,new Float32Array(this.getContourLineColor())),e&&this.renderFrame?.())}setFrameExtremesUniform(e=!0){this.device&&this.buffers?.extremesUniform&&(this.device.queue.writeBuffer(this.buffers.extremesUniform,0,new Float32Array(this.getFrameExtremes())),e&&this.renderFrame?.())}setValueExtremesUniform(e=!0){this.device&&this.buffers?.valueExtremesUniform&&(this.device.queue.writeBuffer(this.buffers.valueExtremesUniform,0,new Float32Array(this.getValueAxisExtremes())),e&&this.renderFrame?.())}setColorAxisStopsUniforms(e=!0){let t=this.buffers?.colorAxisStopsUniform,i=this.buffers?.colorAxisStopsCountUniform;if(this.device&&t&&i){let{array:r,length:s}=this.getColorAxisStopsData();this.device.queue.writeBuffer(t,0,r),this.device.queue.writeBuffer(i,0,new Uint32Array([s])),e&&this.renderFrame?.()}}setIsInvertedUniform(e=!0){this.device&&this.buffers?.isInvertedUniform&&(this.device.queue.writeBuffer(this.buffers.isInvertedUniform,0,new Uint32Array([+!!this.chart.inverted])),e&&this.renderFrame?.())}getContourInterval(){let e=this.options.contourInterval??(()=>{let[e,t]=this.getValueAxisExtremes();return(0,g.normalizeTickInterval)((t-e)/10)})();return isNaN(e)||e<=0?-1:e}getContourOffset(){let e=this.options.contourOffset??0;return isNaN(e)||e<=0?0:e}getSmoothColoring(){return+!!this.options.smoothColoring}getLineWidth(){return this.userOptions.lineWidth??1}getContourLineColor(){let{lineColor:e="#000000"}=this.options;return _.rgbaAsFrac(new(C())(e).rgba)}getFrameExtremes(){let{xAxis:e,yAxis:t}=this;return[e.toValue(0,!0),e.toValue(e.len,!0),t.toValue(t.len,!0),t.toValue(0,!0)]}getValueAxisExtremes(){let e=this.valueMin;isNaN(e||0/0)&&isNaN((e=this.colorAxis?.min)||0/0)&&(e=Math.min(...this.points.map(e=>e.value||0)));let t=this.valueMax;return isNaN(t||0/0)&&isNaN((t=this.colorAxis?.max)||0/0)&&(t=Math.max(...this.points.map(e=>e.value||0))),[e||0,t||0]}getColorAxisStopsData(){let e,t=this.colorAxis?.stops;if(t)for(let i of(e=[],t)){let t=i?.color?.rgba;t&&e.push(i[0],..._.rgbaAsFrac(t))}return{array:new Float32Array(e??[0,0,0,0,1,1,1,1]),length:t?.length||2}}static rgbaAsFrac(e){return[e[0],e[1],e[2]].map(e=>e/255)}}_.defaultOptions=(0,g.merge)(O().defaultOptions,{colorKey:"value",clip:!1,marker:{symbol:"cross",states:{hover:{lineColor:"black"}}},states:{hover:{halo:void 0}},zIndex:0}),(0,g.extend)(_.prototype,{pointClass:class extends P{},pointArrayMap:["y","value"],keysAffectYAxis:["y"],invertible:!1}),D().registerSeriesType("contour",_);let N=p();_.compose(N.Renderer);let H=p();return c.default})());