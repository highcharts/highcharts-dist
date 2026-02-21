!/**
 * Highmaps JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/contour
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.Axis,e._Highcharts.Color,e._Highcharts.LegendSymbol,e._Highcharts.SeriesRegistry,e._Highcharts.SVGRenderer):"function"==typeof define&&define.amd?define("highcharts/modules/contour",["highcharts/highcharts"],function(e){return t(e,e.Axis,e.Color,e.LegendSymbol,e.SeriesRegistry,e.SVGRenderer)}):"object"==typeof exports?exports["highcharts/modules/contour"]=t(e._Highcharts,e._Highcharts.Axis,e._Highcharts.Color,e._Highcharts.LegendSymbol,e._Highcharts.SeriesRegistry,e._Highcharts.SVGRenderer):e.Highcharts=t(e.Highcharts,e.Highcharts.Axis,e.Highcharts.Color,e.Highcharts.LegendSymbol,e.Highcharts.SeriesRegistry,e.Highcharts.SVGRenderer)}("u"<typeof window?this:window,(e,t,r,i,o,s)=>(()=>{"use strict";var n,a,l,h={500:e=>{e.exports=i},512:e=>{e.exports=o},532:e=>{e.exports=t},540:e=>{e.exports=s},620:e=>{e.exports=r},944:t=>{t.exports=e}},u={};function f(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return h[e](r,r.exports,f),r.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var d={};f.d(d,{default:()=>ei});var c=f(944),g=f.n(c),p=f(532),m=f.n(p),x=f(620),v=f.n(x);let{parse:C}=v(),{merge:b}=g();(n=a||(a={})).initDataClasses=function(e){let t=this.chart,r=this.legendItem=this.legendItem||{},i=this.options,o=e.dataClasses||[],s,n,a=t.options.chart.colorCount,l=0,h;this.dataClasses=n=[],r.labels=[];for(let e=0,r=o.length;e<r;++e)s=b(s=o[e]),n.push(s),(t.styledMode||!s.color)&&("category"===i.dataClassColor?(t.styledMode||(a=(h=t.options.colors||[]).length,s.color=h[l]),s.colorIndex=l,++l===a&&(l=0)):s.color=C(i.minColor).tweenTo(C(i.maxColor),r<2?.5:e/(r-1)))},n.initStops=function(){let e=this.options,t=this.stops=e.stops||[[0,e.minColor||""],[1,e.maxColor||""]];for(let e=0,r=t.length;e<r;++e)t[e].color=C(t[e][1])},n.normalizedValue=function(e){let t=this.max||0,r=this.min||0;return this.logarithmic&&(e=this.logarithmic.log2lin(e)),1-(t-e)/(t-r||1)},n.toColor=function(e,t){let r,i,o,s,n,a,l=this.dataClasses,h=this.stops;if(l){for(a=l.length;a--;)if(i=(n=l[a]).from,o=n.to,(void 0===i||e>=i)&&(void 0===o||e<=o)){s=n.color,t&&(t.dataClass=a,t.colorIndex=n.colorIndex);break}}else{for(r=this.normalizedValue(e),a=h.length;a--&&!(r>h[a][0]););i=h[a]||h[a+1],r=1-((o=h[a+1]||i)[0]-r)/(o[0]-i[0]||1),s=i.color.tweenTo(o.color,r)}return s};let y=a,{parse:U}=v(),{addEvent:A,extend:I,merge:w,pick:S,splat:P}=g();!function(e){let t;function r(){let{userOptions:e}=this;this.colorAxis=[],e.colorAxis&&(e.colorAxis=P(e.colorAxis),e.colorAxis.map(e=>new t(this,e)))}function i(e){let t=this.chart.colorAxis||[],r=t=>{let r=e.allItems.indexOf(t);-1!==r&&(this.destroyItem(e.allItems[r]),e.allItems.splice(r,1))},i=[],o,s;for(t.forEach(function(e){o=e.options,o?.showInLegend&&(o.dataClasses&&o.visible?i=i.concat(e.getDataClassLegendSymbols()):o.visible&&i.push(e),e.series.forEach(function(e){(!e.options.showInLegend||o.dataClasses)&&("point"===e.options.legendType?e.points.forEach(function(e){r(e)}):r(e))}))}),s=i.length;s--;)e.allItems.unshift(i[s])}function o(e){e.visible&&e.item.legendColor&&e.item.legendItem.symbol.attr({fill:e.item.legendColor})}function s(e){this.chart.colorAxis?.forEach(t=>{t.update({},e.redraw)})}function n(){(this.chart.colorAxis?.length||this.colorAttribs)&&this.translateColors()}function a(){let e=this.axisTypes;e?-1===e.indexOf("colorAxis")&&e.push("colorAxis"):this.axisTypes=["colorAxis"]}function l(e){let t=this,r=e?"show":"hide";t.visible=t.options.visible=!!e,["graphic","dataLabel"].forEach(function(e){t[e]&&t[e][r]()}),this.series.buildKDTree()}function h(){let e=this,t=this.getPointsCollection(),r=this.options.nullColor,i=this.colorAxis,o=this.colorKey;t.forEach(t=>{let s=t.getNestedProperty(o),n=t.options.color||(t.isNull||null===t.value?r:i&&void 0!==s?i.toColor(s,t):t.color||e.color);n&&t.color!==n&&(t.color=n,"point"===e.options.legendType&&t.legendItem&&t.legendItem.label&&e.chart.legend.colorizeItem(t,t.visible))})}function u(){this.elem.attr("fill",U(this.start).tweenTo(U(this.end),this.pos),void 0,!0)}function f(){this.elem.attr("stroke",U(this.start).tweenTo(U(this.end),this.pos),void 0,!0)}e.compose=function(e,d,c,g,p){var m;let x,v=d.prototype,C=c.prototype,b=p.prototype;v.collectionsWithUpdate.includes("colorAxis")||(t=e,v.collectionsWithUpdate.push("colorAxis"),v.collectionsWithInit.colorAxis=[v.addColorAxis],A(d,"afterCreateAxes",r),x=(m=d).prototype.createAxis,m.prototype.createAxis=function(e,r){if("colorAxis"!==e)return x.apply(this,arguments);let i=new t(this,w(r.axis,{index:this[e].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach(e=>{e.series=[]}),this.series.forEach(e=>{e.bindAxes(),e.isDirtyData=!0}),S(r.redraw,!0)&&this.redraw(r.animation),i},C.fillSetter=u,C.strokeSetter=f,A(g,"afterGetAllItems",i),A(g,"afterColorizeItem",o),A(g,"afterUpdate",s),I(b,{optionalAxis:"colorAxis",translateColors:h}),I(b.pointClass.prototype,{setVisible:l}),A(p,"afterTranslate",n,{order:1}),A(p,"bindAxes",a))},e.pointSetVisible=l}(l||(l={}));let M=l;var O=f(500),L=f.n(O),E=f(512),B=f.n(E);let{defaultOptions:V}=g(),{series:F}=B(),{defined:T,extend:N,fireEvent:D,isArray:z,isNumber:_,merge:G,pick:H,relativeLength:R}=g();V.colorAxis=G(V.xAxis,{lineWidth:0,minPadding:0,maxPadding:0,gridLineColor:"#ffffff",gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{distance:8,overflow:"justify",rotation:0},minColor:"#e6e9ff",maxColor:"#0022ff",tickLength:5,showInLegend:!0});class k extends m(){static compose(e,t,r,i){M.compose(k,e,t,r,i)}constructor(e,t){super(e,t),this.coll="colorAxis",this.visible=!0,this.init(e,t)}init(e,t){let r=e.options.legend||{},i=t.layout?"vertical"!==t.layout:"vertical"!==r.layout;this.side=t.side||i?2:1,this.reversed=t.reversed,this.opposite=!i,super.init(e,t,"colorAxis"),this.userOptions=t,z(e.userOptions.colorAxis)&&(e.userOptions.colorAxis[this.index]=t),t.dataClasses&&this.initDataClasses(t),this.initStops(),this.horiz=i,this.zoomEnabled=!1}hasData(){return!!(this.tickPositions||[]).length}setTickPositions(){if(!this.dataClasses)return super.setTickPositions()}setOptions(e){let t=G(V.colorAxis,e,{showEmpty:!1,title:null,visible:this.chart.options.legend.enabled&&!1!==e.visible});super.setOptions(t),this.options.crosshair=this.options.marker}setAxisSize(){let e=this.chart,t=this.legendItem?.symbol,{width:r,height:i}=this.getSize();t&&(this.left=+t.attr("x"),this.top=+t.attr("y"),this.width=r=+t.attr("width"),this.height=i=+t.attr("height"),this.right=e.chartWidth-this.left-r,this.bottom=e.chartHeight-this.top-i,this.pos=this.horiz?this.left:this.top),this.len=(this.horiz?r:i)||k.defaultLegendLength}getOffset(){let e=this.legendItem?.group,t=this.chart.axisOffset[this.side];if(e){this.axisParent=e,super.getOffset();let r=this.chart.legend;r.allItems.forEach(function(e){e instanceof k&&e.drawLegendSymbol(r,e)}),r.render(),this.chart.getMargins(!0),this.added||(this.added=!0),this.labelLeft=0,this.labelRight=this.width,this.chart.axisOffset[this.side]=t}}setLegendColor(){let e=this.horiz,t=this.reversed,r=+!!t,i=+!t,o=e?[r,0,i,0]:[0,i,0,r];this.legendColor={linearGradient:{x1:o[0],y1:o[1],x2:o[2],y2:o[3]},stops:this.stops}}drawLegendSymbol(e,t){let r=t.legendItem||{},i=e.padding,o=e.options,s=this.options.labels,n=H(o.itemDistance,10),a=this.horiz,{width:l,height:h}=this.getSize(),u=H(o.labelPadding,a?16:30);this.setLegendColor(),r.symbol||(r.symbol=this.chart.renderer.symbol("roundedRect").attr({r:o.symbolRadius??3,zIndex:1}).add(r.group)),r.symbol.attr({x:0,y:(e.baseline||0)-11,width:l,height:h}),r.labelWidth=l+i+(a?n:H(s.x,s.distance)+(this.maxLabelLength||0)),r.labelHeight=h+i+(a?u:0)}setState(e){this.series.forEach(function(t){t.setState(e)})}setVisible(){}getSeriesExtremes(){let e=this.series,t,r,i,o,s=e.length;for(this.dataMin=1/0,this.dataMax=-1/0;s--;){for(let n of(r=(o=e[s]).colorKey=H(o.options.colorKey,o.colorKey,o.pointValKey,o.zoneAxis,"y"),i=o[r+"Min"]&&o[r+"Max"],[r,"value","y"]))if((t=o.getColumn(n)).length)break;if(i)o.minColorValue=o[r+"Min"],o.maxColorValue=o[r+"Max"];else{let e=F.prototype.getExtremes.call(o,t);o.minColorValue=e.dataMin,o.maxColorValue=e.dataMax}T(o.minColorValue)&&T(o.maxColorValue)&&(this.dataMin=Math.min(this.dataMin,o.minColorValue),this.dataMax=Math.max(this.dataMax,o.maxColorValue)),i||F.prototype.applyExtremes.call(o)}}drawCrosshair(e,t){let r,i=this.legendItem||{},o=t?.plotX,s=t?.plotY,n=this.pos,a=this.len;t&&((r=this.toPixels(t.getNestedProperty(t.series.colorKey)))<n?r=n-2:r>n+a&&(r=n+a+2),t.plotX=r,t.plotY=this.len-r,super.drawCrosshair(e,t),t.plotX=o,t.plotY=s,this.cross&&!this.cross.addedToColorAxis&&i.group&&(this.cross.addClass("highcharts-coloraxis-marker").add(i.group),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color})))}getPlotLinePath(e){let t=this.left,r=e.translatedValue,i=this.top;return _(r)?this.horiz?[["M",r-4,i-6],["L",r+4,i-6],["L",r,i],["Z"]]:[["M",t,r],["L",t-6,r+6],["L",t-6,r-6],["Z"]]:super.getPlotLinePath(e)}update(e,t){let r=this.chart.legend;this.series.forEach(e=>{e.isDirtyData=!0}),(e.dataClasses&&r.allItems||this.dataClasses)&&this.destroyItems(),super.update(e,t),this.legendItem?.label&&(this.setLegendColor(),r.colorizeItem(this,!0))}destroyItems(){let e=this.chart,t=this.legendItem||{};if(t.label)e.legend.destroyItem(this);else if(t.labels)for(let r of t.labels)e.legend.destroyItem(r);e.isDirtyLegend=!0}destroy(){this.chart.isDirtyLegend=!0,this.destroyItems(),super.destroy(...[].slice.call(arguments))}remove(e){this.destroyItems(),super.remove(e)}getDataClassLegendSymbols(){let e,t=this,r=t.chart,i=t.legendItem&&t.legendItem.labels||[],o=r.options.legend,s=H(o.valueDecimals,-1),n=H(o.valueSuffix,""),a=e=>t.series.reduce((t,r)=>(t.push(...r.points.filter(t=>t.dataClass===e)),t),[]);return i.length||t.dataClasses.forEach((o,l)=>{let h=o.from,u=o.to,{numberFormatter:f}=r,d=!0;e="",void 0===h?e="< ":void 0===u&&(e="> "),void 0!==h&&(e+=f(h,s)+n),void 0!==h&&void 0!==u&&(e+=" - "),void 0!==u&&(e+=f(u,s)+n),i.push(N({chart:r,name:e,options:{},drawLegendSymbol:L().rectangle,visible:!0,isDataClass:!0,setState:e=>{for(let t of a(l))t.setState(e)},setVisible:function(){this.visible=d=t.visible=!d;let e=[];for(let t of a(l))t.setVisible(d),t.hiddenInDataClass=!d,-1===e.indexOf(t.series)&&e.push(t.series);r.legend.colorizeItem(this,d),e.forEach(e=>{D(e,"afterDataClassLegendClick")})}},o))}),i}getSize(){let{chart:e,horiz:t}=this,{height:r,width:i}=this.options,{legend:o}=e.options;return{width:H(T(i)?R(i,e.chartWidth):void 0,o?.symbolWidth,t?k.defaultLegendLength:12),height:H(T(r)?R(r,e.chartHeight):void 0,o?.symbolHeight,t?12:k.defaultLegendLength)}}}k.defaultLegendLength=200,k.keepProps=["legendItem"],N(k.prototype,y),Array.prototype.push.apply(m().keepProps,k.keepProps);/**
 * @license Highcharts JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/color-axis
 * @requires highcharts
 *
 * ColorAxis module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Pawel Potaczek
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */let W=g();W.ColorAxis=W.ColorAxis||k,W.ColorAxis.compose(W.Chart,W.Fx,W.Legend,W.Series);let{scatter:{prototype:{pointClass:Y}}}=B().seriesTypes,j=`

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

`,q=class{constructor(e){this.points=e;const t=e.length>>>1;this.epsilon=4*Number.EPSILON;let r=1/0,i=-1/0,o=1/0,s=-1/0;for(let n=0;n<t;n++){const t=e[n<<1],a=e[(n<<1)+1];t<r&&(r=t),t>i&&(i=t),a<o&&(o=a),a>s&&(s=a)}const n=i-r||1,a=s-o||1;this.minX=r,this.minY=o,this.invScaleX=1/n,this.invScaleY=1/a;const l=new Uint32Array(t),h=t=>(e[t<<1]-r)*this.invScaleX,u=t=>(e[(t<<1)+1]-o)*this.invScaleY;for(let e=0;e<t;e++)l[e]=e;l.sort((e,t)=>h(e)-h(t)||u(e)-u(t));let f=+!!t,d,c;for(let e=1;e<t;++e)d=l[f-1],c=l[e],(h(d)!==h(c)||u(d)!==u(c))&&(l[f++]=c);this.ids=l.subarray(0,f),this.triangles=this.triangulate()}triangulate(){let e,t,r=this.ids.length;if(r<3)return new Uint32Array(0);let i=this.points,{minX:o,minY:s,invScaleX:n,invScaleY:a}=this,l=e=>(i[e<<1]-o)*n,h=e=>(i[(e<<1)+1]-s)*a,u=(e,t,r)=>{let i=l(e),o=h(e),s=l(t)-i,n=h(t)-o,a=l(r)-i,u=h(r)-o,f=(Math.abs(s*u)+Math.abs(n*a))*this.epsilon;return s*u-n*a>f},f=(e,t,r,i)=>{if(e===i||t===i||r===i)return!1;let o=l(e)-l(i),s=h(e)-h(i),n=l(t)-l(i),a=h(t)-h(i),u=l(r)-l(i),f=h(r)-h(i),d=o*o+s*s,c=n*n+a*a,g=u*u+f*f,p=a*g-c*f,m=n*g-c*u,x=n*f-a*u,v=(Math.abs(o*p)+Math.abs(s*m)+Math.abs(d*x))*this.epsilon;return o*p-s*m+d*x>v},d=Math.max(32,8*r+7&-4),c=new Int32Array(d),g=new Int32Array(d),p=new Uint32Array(d),m=new Uint8Array(d),x=0,v=e=>g[g[e]],C=e=>v(g[e]),b=e=>p[v(e)],y=e=>g[c[C(e)]],U=e=>g[c[g[e]]],A=e=>c[v(e)],I=(e,t)=>u(e,p[t],b(t)),w=(e,t)=>u(e,b(t),p[t]),S=(e,t)=>w(b(e),t),P=(e,t)=>{(e=>{if(e<=d)return;let t=d<<1;for(;t<e;)t<<=1;let r=new Int32Array(t),i=new Int32Array(t),o=new Uint32Array(t),s=new Uint8Array(t);r.set(c),i.set(g),o.set(p),s.set(m),c=r,g=i,p=o,m=s,d=t})(x+4);let r=x,i=x+1,o=x+2,s=x+3;return x+=4,g[r]=i,g[i]=o,g[o]=s,g[s]=r,c[r]=r,c[o]=o,c[i]=s,c[s]=i,p[r]=e,p[o]=t,p[i]=0xffffffff,p[s]=0xffffffff,r},M=(e,t)=>{let r=g[c[e]],i=g[c[t]],o=c[e],s=c[i],n=c[r];c[e]=c[t],c[t]=o,c[r]=s,c[i]=n},O=(e,t)=>{let r=P(b(e),p[t]);return M(r,y(e)),M(v(r),t),r},L=e=>{M(e,U(e));let t=v(e);M(t,U(t))},E=this.ids,B=(e,t)=>{let r=t-e;if(2===r){let t=P(E[e],E[e+1]);return[t,v(t)]}if(3===r){let t=P(E[e],E[e+1]),r=P(E[e+1],E[e+2]);M(v(t),r);let i=E[e],o=E[e+1],s=E[e+2];if(u(i,o,s))return O(r,t),[t,v(r)];if(u(i,s,o)){let e=O(r,t);return[v(e),e]}return[t,v(r)]}let i=e+(r+1>>>1),o=B(e,i),s=B(i,t),n=o[0],a=o[1],l=s[0],h=s[1];for(;;)if(I(p[l],a))a=y(a);else if(w(p[a],l))l=A(l);else break;let d=O(v(l),a);for(p[a]===p[n]&&(n=v(d)),p[l]===p[h]&&(h=d);;){let e=c[v(d)];if(S(e,d))for(;f(b(d),p[d],b(e),b(c[e]));){let t=c[e];L(e),e=t}let t=U(d);if(S(t,d))for(;f(b(d),p[d],b(t),b(U(t)));){let e=U(t);L(t),t=e}if(!S(e,d)&&!S(t,d))break;d=!S(e,d)||S(t,d)&&f(b(e),p[e],p[t],b(t))?O(t,v(d)):O(v(d),v(e))}return[n,h]},V=B(0,r)[0];for(;I(b(c[V]),V);)V=c[V];let F=[V],T=0;{let e=V;do F.push(v(e)),m[e]=1,e=y(e);while(e!==V)}let N=[];for(;T<F.length;){let r=F[T++];if(!m[r]){e=r;do N.push(p[e]),m[t=v(e)]||F.push(t),m[e]=1,e=y(e);while(e!==r)}}return new Uint32Array(N)}};var X=f(540),K=f.n(X);let{seriesTypes:{scatter:Z}}=B(),{diffObjects:J,error:Q,extend:$,merge:ee,normalizeTickInterval:et}=g();class er extends Z{getContourData(){let e=this.points,t=e.length,r=new Float32Array(3*t),i=new Float64Array(2*t);for(let o=0;o<t;o++){let{x:t,y:s=0,value:n}=e[o],a=2*o,l=3*o;i[a]=t,i[a+1]=s,r[l]=t,r[l+1]=s,r[l+2]=n??0}return[new q(i).triangles,r]}update(e,t){e=J(e,this.userOptions);let r=["smoothColoring","contourInterval","contourOffset","lineColor","lineWidth"],i=Object.keys(e).some(e=>!r.includes(e)),o=i?void 0:this.setOptions(ee(this.userOptions,e)),s=!!o&&Object.keys(J(o,this.options)).some(e=>!r.includes(e));i||s?super.update(e,t):(this.options=o,this.setUniforms())}drawPoints(){let{group:e}=this;if(!e)return;this.canvas||(this.foreignObject=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),e.element.appendChild(this.foreignObject),this.canvas=document.createElement("canvas"),this.foreignObject.appendChild(this.canvas));let{canvas:t,xAxis:r,yAxis:i}=this,o=this.foreignObject,s=o.width.baseVal.value,n=o.height.baseVal.value,{devicePixelRatio:a}=window,l=r.len,h=i.len;this.chart.inverted&&([l,h]=[h,l]),s!==l&&(o.setAttribute("width",l),t.width=l*a,t.style.width=l+"px"),n!==h&&(o.setAttribute("height",h),t.height=h*a,t.style.height=h+"px"),this.renderFrame?this.renderFrame():this.run()}async run(){let e=this.chart,t=e.renderer,r=this.canvas,i=navigator.gpu,o=this.context=r.getContext("webgpu");if(t.asyncCounter+=1,!i||!o)return void Q(36,!1);if(o){let e=this.device;this.adapter||(this.adapter=await i.requestAdapter()),!e&&this.adapter&&(e=this.device=await this.adapter.requestDevice());let t=i.getPreferredCanvasFormat();if(e){o.configure({device:e,format:t,colorSpace:"display-p3",alphaMode:"premultiplied",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let[r,i]=this.getContourData(),{vertex:s,index:n,extremesUniform:a,valueExtremesUniform:l,contourIntervalUniform:h,contourOffsetUniform:u,smoothColoringUniform:f,lineWidthUniform:d,contourLineColor:c,colorAxisStopsCountUniform:g,colorAxisStopsUniform:p,isInvertedUniform:m}=this.buffers={vertex:e.createBuffer({size:i.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),index:e.createBuffer({size:r.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),extremesUniform:e.createBuffer({size:4*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),valueExtremesUniform:e.createBuffer({size:2*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourIntervalUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourOffsetUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),smoothColoringUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),lineWidthUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourLineColor:e.createBuffer({size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsCountUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsUniform:e.createBuffer({size:64*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),isInvertedUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})};e.queue.writeBuffer(s,0,i),e.queue.writeBuffer(n,0,r);let x=e.createShaderModule({code:j}),v=e.createRenderPipeline({layout:"auto",vertex:{module:x,entryPoint:"vertexMain",buffers:[{arrayStride:12,attributes:[{format:"float32x3",offset:0,shaderLocation:0}]}]},fragment:{module:x,entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),C=e.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a,label:"extremesUniformBuffer"}},{binding:1,resource:{buffer:l,label:"valueExtremesUniformBuffer"}},{binding:2,resource:{buffer:p,label:"colorAxisStopsBuffer"}},{binding:3,resource:{buffer:g,label:"colorAxisStopsCountBuffer"}},{binding:4,resource:{buffer:h,label:"contourIntervalUniformBuffer"}},{binding:5,resource:{buffer:u,label:"contourOffsetUniformBuffer"}},{binding:6,resource:{buffer:f,label:"smoothColoringUniformBuffer"}},{binding:7,resource:{buffer:d,label:"lineWidthUniformBuffer"}},{binding:8,resource:{buffer:c,label:"contourLineColorBuffer"}},{binding:9,resource:{buffer:m,label:"isInvertedUniformBuffer"}}]});this.renderFrame=function(){this.setUniforms(!1);let t=e.createCommandEncoder(),i=o.getCurrentTexture(),a=t.beginRenderPass({colorAttachments:[{view:i.createView(),loadOp:"clear",clearValue:[0,0,0,0],storeOp:"store"}]});a.setPipeline(v),a.setVertexBuffer(0,s),a.setIndexBuffer(n,"uint32"),a.setBindGroup(0,C),a.drawIndexed(r.length),a.end(),e.queue.submit([t.finish()])},this.renderFrame()}}t.asyncCounter--,t.asyncCounter||!e||e.hasLoaded||e.onload()}destroy(){this.canvas?.parentElement?.remove(),super.destroy()}drawGraph(){}setUniforms(e=!0){this.setFrameExtremesUniform(!1),this.setValueExtremesUniform(!1),this.setColorAxisStopsUniforms(!1),this.setContourIntervalUniform(!1),this.setContourOffsetUniform(!1),this.setSmoothColoringUniform(!1),this.setLineWidthUniform(!1),this.setContourLineColorUniform(!1),this.setIsInvertedUniform(e)}setContourIntervalUniform(e=!0){this.device&&this.buffers?.contourIntervalUniform&&(this.device.queue.writeBuffer(this.buffers.contourIntervalUniform,0,new Float32Array([this.getContourInterval()])),e&&this.renderFrame?.())}setContourOffsetUniform(e=!0){this.device&&this.buffers?.contourOffsetUniform&&(this.device.queue.writeBuffer(this.buffers.contourOffsetUniform,0,new Float32Array([this.getContourOffset()])),e&&this.renderFrame?.())}setSmoothColoringUniform(e=!0){this.device&&this.buffers?.smoothColoringUniform&&(this.device.queue.writeBuffer(this.buffers.smoothColoringUniform,0,new Float32Array([this.getSmoothColoring()])),e&&this.renderFrame?.())}setLineWidthUniform(e=!0){this.device&&this.buffers?.lineWidthUniform&&(this.device.queue.writeBuffer(this.buffers.lineWidthUniform,0,new Float32Array([this.getLineWidth()])),e&&this.renderFrame?.())}setContourLineColorUniform(e=!0){this.device&&this.buffers?.contourLineColor&&(this.device.queue.writeBuffer(this.buffers.contourLineColor,0,new Float32Array(this.getContourLineColor())),e&&this.renderFrame?.())}setFrameExtremesUniform(e=!0){this.device&&this.buffers?.extremesUniform&&(this.device.queue.writeBuffer(this.buffers.extremesUniform,0,new Float32Array(this.getFrameExtremes())),e&&this.renderFrame?.())}setValueExtremesUniform(e=!0){this.device&&this.buffers?.valueExtremesUniform&&(this.device.queue.writeBuffer(this.buffers.valueExtremesUniform,0,new Float32Array(this.getValueAxisExtremes())),e&&this.renderFrame?.())}setColorAxisStopsUniforms(e=!0){let t=this.buffers?.colorAxisStopsUniform,r=this.buffers?.colorAxisStopsCountUniform;if(this.device&&t&&r){let{array:i,length:o}=this.getColorAxisStopsData();this.device.queue.writeBuffer(t,0,i),this.device.queue.writeBuffer(r,0,new Uint32Array([o])),e&&this.renderFrame?.()}}setIsInvertedUniform(e=!0){this.device&&this.buffers?.isInvertedUniform&&(this.device.queue.writeBuffer(this.buffers.isInvertedUniform,0,new Uint32Array([+!!this.chart.inverted])),e&&this.renderFrame?.())}getContourInterval(){let e=this.options.contourInterval??(()=>{let[e,t]=this.getValueAxisExtremes();return et((t-e)/10)})();return isNaN(e)||e<=0?-1:e}getContourOffset(){let e=this.options.contourOffset??0;return isNaN(e)||e<=0?0:e}getSmoothColoring(){return+!!this.options.smoothColoring}getLineWidth(){return this.userOptions.lineWidth??1}getContourLineColor(){let{lineColor:e="#000000"}=this.options;return er.rgbaAsFrac(new(v())(e).rgba)}getFrameExtremes(){let{xAxis:e,yAxis:t}=this;return[e.toValue(0,!0),e.toValue(e.len,!0),t.toValue(t.len,!0),t.toValue(0,!0)]}getValueAxisExtremes(){let e=this.valueMin;isNaN(e||NaN)&&isNaN((e=this.colorAxis?.min)||NaN)&&(e=Math.min(...this.points.map(e=>e.value||0)));let t=this.valueMax;return isNaN(t||NaN)&&isNaN((t=this.colorAxis?.max)||NaN)&&(t=Math.max(...this.points.map(e=>e.value||0))),[e||0,t||0]}getColorAxisStopsData(){let e,t=this.colorAxis?.stops;if(t)for(let r of(e=[],t)){let t=r?.color?.rgba;t&&e.push(r[0],...er.rgbaAsFrac(t))}return{array:new Float32Array(e??[0,0,0,0,1,1,1,1]),length:t?.length||2}}static rgbaAsFrac(e){return[e[0],e[1],e[2]].map(e=>e/255)}}er.defaultOptions=ee(Z.defaultOptions,{colorKey:"value",clip:!1,marker:{symbol:"cross",states:{hover:{lineColor:"black"}}},states:{hover:{halo:void 0}},zIndex:0}),K().prototype.symbols.cross=function(e,t,r,i){return[["M",e,t],["L",e+r,t+i],["M",e+r,t],["L",e,t+i],["z"]]},$(er.prototype,{pointClass:class extends Y{},pointArrayMap:["y","value"],keysAffectYAxis:["y"],invertible:!1}),B().registerSeriesType("contour",er);let ei=g();return d.default})());