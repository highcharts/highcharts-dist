/**
 * Highmaps JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/contour
 * @requires highcharts
 * @requires highcharts/modules/coloraxis
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */import*as e from"../highcharts.js";import"./coloraxis.js";var t,r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o=e.default;var i=r.n(o);let s=e.default.Color;var n=r.n(s);let a=e.default.SeriesRegistry;var u=r.n(a);let{scatter:{prototype:{pointClass:f}}}=u().seriesTypes,l=`

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

`,{composed:h}=i();function d(e,t,r,o){return[["M",e,t],["L",e+r,t+o],["M",e+r,t],["L",e,t+o],["Z"]]}(t||(t={})).compose=function(e){(0,o.pushUnique)(h,"Series.CrossSymbol")&&(e.prototype.symbols.cross=d)};let m=t,c=class{constructor(e){this.points=e;let t=e.length>>>1;this.epsilon=4*Number.EPSILON;let r=1/0,o=-1/0,i=1/0,s=-1/0;for(let n=0;n<t;n++){let t=e[n<<1],a=e[(n<<1)+1];t<r&&(r=t),t>o&&(o=t),a<i&&(i=a),a>s&&(s=a)}let n=o-r||1,a=s-i||1;this.minX=r,this.minY=i,this.invScaleX=1/n,this.invScaleY=1/a;let u=new Uint32Array(t),f=t=>(e[t<<1]-r)*this.invScaleX,l=t=>(e[(t<<1)+1]-i)*this.invScaleY;for(let e=0;e<t;e++)u[e]=e;u.sort((e,t)=>f(e)-f(t)||l(e)-l(t));let h=+!!t,d,m;for(let e=1;e<t;++e)d=u[h-1],m=u[e],(f(d)!==f(m)||l(d)!==l(m))&&(u[h++]=m);this.ids=u.subarray(0,h),this.triangles=this.triangulate()}triangulate(){let e,t,r=this.ids.length;if(r<3)return new Uint32Array(0);let o=this.points,{minX:i,minY:s,invScaleX:n,invScaleY:a}=this,u=e=>(o[e<<1]-i)*n,f=e=>(o[(e<<1)+1]-s)*a,l=(e,t,r)=>{let o=u(e),i=f(e),s=u(t)-o,n=f(t)-i,a=u(r)-o,l=f(r)-i,h=(Math.abs(s*l)+Math.abs(n*a))*this.epsilon;return s*l-n*a>h},h=(e,t,r,o)=>{if(e===o||t===o||r===o)return!1;let i=u(e)-u(o),s=f(e)-f(o),n=u(t)-u(o),a=f(t)-f(o),l=u(r)-u(o),h=f(r)-f(o),d=i*i+s*s,m=n*n+a*a,c=l*l+h*h,g=a*c-m*h,p=n*c-m*l,v=n*h-a*l,U=(Math.abs(i*g)+Math.abs(s*p)+Math.abs(d*v))*this.epsilon;return i*g-s*p+d*v>U},d=Math.max(32,8*r+7&-4),m=new Int32Array(d),c=new Int32Array(d),g=new Uint32Array(d),p=new Uint8Array(d),v=0,U=e=>c[c[e]],x=e=>U(c[e]),C=e=>g[U(e)],b=e=>c[m[x(e)]],y=e=>c[m[c[e]]],B=e=>m[U(e)],O=(e,t)=>l(e,g[t],C(t)),w=(e,t)=>l(e,C(t),g[t]),I=(e,t)=>w(C(e),t),S=(e,t)=>{(e=>{if(e<=d)return;let t=d<<1;for(;t<e;)t<<=1;let r=new Int32Array(t),o=new Int32Array(t),i=new Uint32Array(t),s=new Uint8Array(t);r.set(m),o.set(c),i.set(g),s.set(p),m=r,c=o,g=i,p=s,d=t})(v+4);let r=v,o=v+1,i=v+2,s=v+3;return v+=4,c[r]=o,c[o]=i,c[i]=s,c[s]=r,m[r]=r,m[i]=i,m[o]=s,m[s]=o,g[r]=e,g[i]=t,g[o]=0xffffffff,g[s]=0xffffffff,r},A=(e,t)=>{let r=c[m[e]],o=c[m[t]],i=m[e],s=m[o],n=m[r];m[e]=m[t],m[t]=i,m[r]=s,m[o]=n},P=(e,t)=>{let r=S(C(e),g[t]);return A(r,b(e)),A(U(r),t),r},M=e=>{A(e,y(e));let t=U(e);A(t,y(t))},E=this.ids,F=(e,t)=>{let r=t-e;if(2===r){let t=S(E[e],E[e+1]);return[t,U(t)]}if(3===r){let t=S(E[e],E[e+1]),r=S(E[e+1],E[e+2]);A(U(t),r);let o=E[e],i=E[e+1],s=E[e+2];if(l(o,i,s))return P(r,t),[t,U(r)];if(l(o,s,i)){let e=P(r,t);return[U(e),e]}return[t,U(r)]}let o=e+(r+1>>>1),i=F(e,o),s=F(o,t),n=i[0],a=i[1],u=s[0],f=s[1];for(;;)if(O(g[u],a))a=b(a);else if(w(g[a],u))u=B(u);else break;let d=P(U(u),a);for(g[a]===g[n]&&(n=U(d)),g[u]===g[f]&&(f=d);;){let e=m[U(d)];if(I(e,d))for(;h(C(d),g[d],C(e),C(m[e]));){let t=m[e];M(e),e=t}let t=y(d);if(I(t,d))for(;h(C(d),g[d],C(t),C(y(t)));){let e=y(t);M(t),t=e}if(!I(e,d)&&!I(t,d))break;d=!I(e,d)||I(t,d)&&h(C(e),g[e],g[t],C(t))?P(t,U(d)):P(U(d),U(e))}return[n,f]},N=F(0,r)[0];for(;O(C(m[N]),N);)N=m[N];let G=[N],L=0;{let e=N;do G.push(U(e)),p[e]=1,e=b(e);while(e!==N)}let T=[];for(;L<G.length;){let r=G[L++];if(!p[r]){e=r;do T.push(g[e]),p[t=U(e)]||G.push(t),p[e]=1,e=b(e);while(e!==r)}}return new Uint32Array(T)}},{seriesTypes:{scatter:g}}=u();class p extends g{static compose(e){m.compose(e)}getContourData(){let e=this.points,t=e.length,r=new Float32Array(3*t),o=new Float64Array(2*t);for(let i=0;i<t;i++){let{x:t,y:s=0,value:n}=e[i],a=2*i,u=3*i;o[a]=t,o[a+1]=s,r[u]=t,r[u+1]=s,r[u+2]=n??0}return[new c(o).triangles,r]}update(e,t){e=(0,o.diffObjects)(e,this.userOptions);let r=["smoothColoring","contourInterval","contourOffset","lineColor","lineWidth"],i=Object.keys(e).some(e=>!r.includes(e)),s=i?void 0:this.setOptions((0,o.merge)(this.userOptions,e)),n=!!s&&Object.keys((0,o.diffObjects)(s,this.options)).some(e=>!r.includes(e));i||n?super.update(e,t):(this.options=s,this.setUniforms())}drawPoints(){let{group:e}=this;if(!e)return;this.canvas||(this.foreignObject=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),e.element.appendChild(this.foreignObject),this.canvas=document.createElement("canvas"),this.foreignObject.appendChild(this.canvas));let{canvas:t,xAxis:r,yAxis:o}=this,i=this.foreignObject,s=i.width.baseVal.value,n=i.height.baseVal.value,{devicePixelRatio:a}=window,u=r.len,f=o.len;this.chart.inverted&&([u,f]=[f,u]),s!==u&&(i.setAttribute("width",u),t.width=u*a,t.style.width=u+"px"),n!==f&&(i.setAttribute("height",f),t.height=f*a,t.style.height=f+"px"),this.renderFrame?this.renderFrame():this.run()}async run(){let e=this.chart,t=e.renderer,r=this.canvas,i=navigator.gpu,s=this.context=r.getContext("webgpu");if(!i||!s)return void(0,o.error)(37,!1,e);if(t.asyncCounter+=1,s){let e=this.device;this.adapter||(this.adapter=await i.requestAdapter()),!e&&this.adapter&&(e=this.device=await this.adapter.requestDevice());let t=i.getPreferredCanvasFormat();if(e){s.configure({device:e,format:t,colorSpace:"display-p3",alphaMode:"premultiplied",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let[r,o]=this.getContourData(),{vertex:i,index:n,extremesUniform:a,valueExtremesUniform:u,contourIntervalUniform:f,contourOffsetUniform:h,smoothColoringUniform:d,lineWidthUniform:m,contourLineColor:c,colorAxisStopsCountUniform:g,colorAxisStopsUniform:p,isInvertedUniform:v}=this.buffers={vertex:e.createBuffer({size:o.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),index:e.createBuffer({size:r.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),extremesUniform:e.createBuffer({size:4*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),valueExtremesUniform:e.createBuffer({size:2*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourIntervalUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourOffsetUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),smoothColoringUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),lineWidthUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourLineColor:e.createBuffer({size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsCountUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsUniform:e.createBuffer({size:64*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),isInvertedUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})};e.queue.writeBuffer(i,0,o),e.queue.writeBuffer(n,0,r);let U=e.createShaderModule({code:l}),x=e.createRenderPipeline({layout:"auto",vertex:{module:U,entryPoint:"vertexMain",buffers:[{arrayStride:12,attributes:[{format:"float32x3",offset:0,shaderLocation:0}]}]},fragment:{module:U,entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),C=e.createBindGroup({layout:x.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a,label:"extremesUniformBuffer"}},{binding:1,resource:{buffer:u,label:"valueExtremesUniformBuffer"}},{binding:2,resource:{buffer:p,label:"colorAxisStopsBuffer"}},{binding:3,resource:{buffer:g,label:"colorAxisStopsCountBuffer"}},{binding:4,resource:{buffer:f,label:"contourIntervalUniformBuffer"}},{binding:5,resource:{buffer:h,label:"contourOffsetUniformBuffer"}},{binding:6,resource:{buffer:d,label:"smoothColoringUniformBuffer"}},{binding:7,resource:{buffer:m,label:"lineWidthUniformBuffer"}},{binding:8,resource:{buffer:c,label:"contourLineColorBuffer"}},{binding:9,resource:{buffer:v,label:"isInvertedUniformBuffer"}}]});this.renderFrame=function(){this.setUniforms(!1);let t=e.createCommandEncoder(),o=s.getCurrentTexture(),a=t.beginRenderPass({colorAttachments:[{view:o.createView(),loadOp:"clear",clearValue:[0,0,0,0],storeOp:"store"}]});a.setPipeline(x),a.setVertexBuffer(0,i),a.setIndexBuffer(n,"uint32"),a.setBindGroup(0,C),a.drawIndexed(r.length),a.end(),e.queue.submit([t.finish()])},this.renderFrame()}}t.asyncCounter--,t.asyncCounter||!e||e.hasLoaded||e.onload()}destroy(){this.canvas?.parentElement?.remove(),super.destroy()}drawGraph(){}setUniforms(e=!0){this.setFrameExtremesUniform(!1),this.setValueExtremesUniform(!1),this.setColorAxisStopsUniforms(!1),this.setContourIntervalUniform(!1),this.setContourOffsetUniform(!1),this.setSmoothColoringUniform(!1),this.setLineWidthUniform(!1),this.setContourLineColorUniform(!1),this.setIsInvertedUniform(e)}setContourIntervalUniform(e=!0){this.device&&this.buffers?.contourIntervalUniform&&(this.device.queue.writeBuffer(this.buffers.contourIntervalUniform,0,new Float32Array([this.getContourInterval()])),e&&this.renderFrame?.())}setContourOffsetUniform(e=!0){this.device&&this.buffers?.contourOffsetUniform&&(this.device.queue.writeBuffer(this.buffers.contourOffsetUniform,0,new Float32Array([this.getContourOffset()])),e&&this.renderFrame?.())}setSmoothColoringUniform(e=!0){this.device&&this.buffers?.smoothColoringUniform&&(this.device.queue.writeBuffer(this.buffers.smoothColoringUniform,0,new Float32Array([this.getSmoothColoring()])),e&&this.renderFrame?.())}setLineWidthUniform(e=!0){this.device&&this.buffers?.lineWidthUniform&&(this.device.queue.writeBuffer(this.buffers.lineWidthUniform,0,new Float32Array([this.getLineWidth()])),e&&this.renderFrame?.())}setContourLineColorUniform(e=!0){this.device&&this.buffers?.contourLineColor&&(this.device.queue.writeBuffer(this.buffers.contourLineColor,0,new Float32Array(this.getContourLineColor())),e&&this.renderFrame?.())}setFrameExtremesUniform(e=!0){this.device&&this.buffers?.extremesUniform&&(this.device.queue.writeBuffer(this.buffers.extremesUniform,0,new Float32Array(this.getFrameExtremes())),e&&this.renderFrame?.())}setValueExtremesUniform(e=!0){this.device&&this.buffers?.valueExtremesUniform&&(this.device.queue.writeBuffer(this.buffers.valueExtremesUniform,0,new Float32Array(this.getValueAxisExtremes())),e&&this.renderFrame?.())}setColorAxisStopsUniforms(e=!0){let t=this.buffers?.colorAxisStopsUniform,r=this.buffers?.colorAxisStopsCountUniform;if(this.device&&t&&r){let{array:o,length:i}=this.getColorAxisStopsData();this.device.queue.writeBuffer(t,0,o),this.device.queue.writeBuffer(r,0,new Uint32Array([i])),e&&this.renderFrame?.()}}setIsInvertedUniform(e=!0){this.device&&this.buffers?.isInvertedUniform&&(this.device.queue.writeBuffer(this.buffers.isInvertedUniform,0,new Uint32Array([+!!this.chart.inverted])),e&&this.renderFrame?.())}getContourInterval(){let e=this.options.contourInterval??(()=>{let[e,t]=this.getValueAxisExtremes();return(0,o.normalizeTickInterval)((t-e)/10)})();return isNaN(e)||e<=0?-1:e}getContourOffset(){let e=this.options.contourOffset??0;return isNaN(e)||e<=0?0:e}getSmoothColoring(){return+!!this.options.smoothColoring}getLineWidth(){return this.userOptions.lineWidth??1}getContourLineColor(){let{lineColor:e="#000000"}=this.options;return p.rgbaAsFrac(new(n())(e).rgba)}getFrameExtremes(){let{xAxis:e,yAxis:t}=this;return[e.toValue(0,!0),e.toValue(e.len,!0),t.toValue(t.len,!0),t.toValue(0,!0)]}getValueAxisExtremes(){let e=this.valueMin;isNaN(e||NaN)&&isNaN((e=this.colorAxis?.min)||NaN)&&(e=Math.min(...this.points.map(e=>e.value||0)));let t=this.valueMax;return isNaN(t||NaN)&&isNaN((t=this.colorAxis?.max)||NaN)&&(t=Math.max(...this.points.map(e=>e.value||0))),[e||0,t||0]}getColorAxisStopsData(){let e,t=this.colorAxis?.stops;if(t)for(let r of(e=[],t)){let t=r?.color?.rgba;t&&e.push(r[0],...p.rgbaAsFrac(t))}return{array:new Float32Array(e??[0,0,0,0,1,1,1,1]),length:t?.length||2}}static rgbaAsFrac(e){return[e[0],e[1],e[2]].map(e=>e/255)}}p.defaultOptions=(0,o.merge)(g.defaultOptions,{colorKey:"value",clip:!1,marker:{symbol:"cross",states:{hover:{lineColor:"black"}}},states:{hover:{halo:void 0}},zIndex:0}),(0,o.extend)(p.prototype,{pointClass:class extends f{},pointArrayMap:["y","value"],keysAffectYAxis:["y"],invertible:!1}),u().registerSeriesType("contour",p);let v=i();p.compose(v.Renderer);let U=i();export{U as default};