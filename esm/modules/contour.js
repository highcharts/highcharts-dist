/**
 * Highmaps JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/contour
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */import*as e from"../highcharts.js";import"./coloraxis.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var i=t.n(r);let o=e.default.Color;var s=t.n(o);let n=e.default.SeriesRegistry;var a=t.n(n);let{scatter:{prototype:{pointClass:u}}}=a().seriesTypes,f=`

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

`,l=class{constructor(e){this.points=e;let t=e.length>>>1;this.epsilon=4*Number.EPSILON;let r=1/0,i=-1/0,o=1/0,s=-1/0;for(let n=0;n<t;n++){let t=e[n<<1],a=e[(n<<1)+1];t<r&&(r=t),t>i&&(i=t),a<o&&(o=a),a>s&&(s=a)}let n=i-r||1,a=s-o||1;this.minX=r,this.minY=o,this.invScaleX=1/n,this.invScaleY=1/a;let u=new Uint32Array(t),f=t=>(e[t<<1]-r)*this.invScaleX,l=t=>(e[(t<<1)+1]-o)*this.invScaleY;for(let e=0;e<t;e++)u[e]=e;u.sort((e,t)=>f(e)-f(t)||l(e)-l(t));let h=+!!t,d,m;for(let e=1;e<t;++e)d=u[h-1],m=u[e],(f(d)!==f(m)||l(d)!==l(m))&&(u[h++]=m);this.ids=u.subarray(0,h),this.triangles=this.triangulate()}triangulate(){let e,t,r=this.ids.length;if(r<3)return new Uint32Array(0);let i=this.points,{minX:o,minY:s,invScaleX:n,invScaleY:a}=this,u=e=>(i[e<<1]-o)*n,f=e=>(i[(e<<1)+1]-s)*a,l=(e,t,r)=>{let i=u(e),o=f(e),s=u(t)-i,n=f(t)-o,a=u(r)-i,l=f(r)-o,h=(Math.abs(s*l)+Math.abs(n*a))*this.epsilon;return s*l-n*a>h},h=(e,t,r,i)=>{if(e===i||t===i||r===i)return!1;let o=u(e)-u(i),s=f(e)-f(i),n=u(t)-u(i),a=f(t)-f(i),l=u(r)-u(i),h=f(r)-f(i),d=o*o+s*s,m=n*n+a*a,c=l*l+h*h,g=a*c-m*h,p=n*c-m*l,v=n*h-a*l,U=(Math.abs(o*g)+Math.abs(s*p)+Math.abs(d*v))*this.epsilon;return o*g-s*p+d*v>U},d=Math.max(32,8*r+7&-4),m=new Int32Array(d),c=new Int32Array(d),g=new Uint32Array(d),p=new Uint8Array(d),v=0,U=e=>c[c[e]],x=e=>U(c[e]),C=e=>g[U(e)],b=e=>c[m[x(e)]],y=e=>c[m[c[e]]],B=e=>m[U(e)],w=(e,t)=>l(e,g[t],C(t)),O=(e,t)=>l(e,C(t),g[t]),A=(e,t)=>O(C(e),t),I=(e,t)=>{(e=>{if(e<=d)return;let t=d<<1;for(;t<e;)t<<=1;let r=new Int32Array(t),i=new Int32Array(t),o=new Uint32Array(t),s=new Uint8Array(t);r.set(m),i.set(c),o.set(g),s.set(p),m=r,c=i,g=o,p=s,d=t})(v+4);let r=v,i=v+1,o=v+2,s=v+3;return v+=4,c[r]=i,c[i]=o,c[o]=s,c[s]=r,m[r]=r,m[o]=o,m[i]=s,m[s]=i,g[r]=e,g[o]=t,g[i]=0xffffffff,g[s]=0xffffffff,r},P=(e,t)=>{let r=c[m[e]],i=c[m[t]],o=m[e],s=m[i],n=m[r];m[e]=m[t],m[t]=o,m[r]=s,m[i]=n},S=(e,t)=>{let r=I(C(e),g[t]);return P(r,b(e)),P(U(r),t),r},M=e=>{P(e,y(e));let t=U(e);P(t,y(t))},E=this.ids,F=(e,t)=>{let r=t-e;if(2===r){let t=I(E[e],E[e+1]);return[t,U(t)]}if(3===r){let t=I(E[e],E[e+1]),r=I(E[e+1],E[e+2]);P(U(t),r);let i=E[e],o=E[e+1],s=E[e+2];if(l(i,o,s))return S(r,t),[t,U(r)];if(l(i,s,o)){let e=S(r,t);return[U(e),e]}return[t,U(r)]}let i=e+(r+1>>>1),o=F(e,i),s=F(i,t),n=o[0],a=o[1],u=s[0],f=s[1];for(;;)if(w(g[u],a))a=b(a);else if(O(g[a],u))u=B(u);else break;let d=S(U(u),a);for(g[a]===g[n]&&(n=U(d)),g[u]===g[f]&&(f=d);;){let e=m[U(d)];if(A(e,d))for(;h(C(d),g[d],C(e),C(m[e]));){let t=m[e];M(e),e=t}let t=y(d);if(A(t,d))for(;h(C(d),g[d],C(t),C(y(t)));){let e=y(t);M(t),t=e}if(!A(e,d)&&!A(t,d))break;d=!A(e,d)||A(t,d)&&h(C(e),g[e],g[t],C(t))?S(t,U(d)):S(U(d),U(e))}return[n,f]},N=F(0,r)[0];for(;w(C(m[N]),N);)N=m[N];let G=[N],L=0;{let e=N;do G.push(U(e)),p[e]=1,e=b(e);while(e!==N)}let V=[];for(;L<G.length;){let r=G[L++];if(!p[r]){e=r;do V.push(g[e]),p[t=U(e)]||G.push(t),p[e]=1,e=b(e);while(e!==r)}}return new Uint32Array(V)}},h=e.default.SVGRenderer;var d=t.n(h);let{seriesTypes:{scatter:m}}=a(),{diffObjects:c,error:g,extend:p,merge:v,normalizeTickInterval:U}=i();class x extends m{getContourData(){let e=this.points,t=e.length,r=new Float32Array(3*t),i=new Float64Array(2*t);for(let o=0;o<t;o++){let{x:t,y:s=0,value:n}=e[o],a=2*o,u=3*o;i[a]=t,i[a+1]=s,r[u]=t,r[u+1]=s,r[u+2]=n??0}return[new l(i).triangles,r]}update(e,t){e=c(e,this.userOptions);let r=["smoothColoring","contourInterval","contourOffset","lineColor","lineWidth"],i=Object.keys(e).some(e=>!r.includes(e)),o=i?void 0:this.setOptions(v(this.userOptions,e)),s=!!o&&Object.keys(c(o,this.options)).some(e=>!r.includes(e));i||s?super.update(e,t):(this.options=o,this.setUniforms())}drawPoints(){let{group:e}=this;if(!e)return;this.canvas||(this.foreignObject=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),e.element.appendChild(this.foreignObject),this.canvas=document.createElement("canvas"),this.foreignObject.appendChild(this.canvas));let{canvas:t,xAxis:r,yAxis:i}=this,o=this.foreignObject,s=o.width.baseVal.value,n=o.height.baseVal.value,{devicePixelRatio:a}=window,u=r.len,f=i.len;this.chart.inverted&&([u,f]=[f,u]),s!==u&&(o.setAttribute("width",u),t.width=u*a,t.style.width=u+"px"),n!==f&&(o.setAttribute("height",f),t.height=f*a,t.style.height=f+"px"),this.renderFrame?this.renderFrame():this.run()}async run(){let e=this.chart,t=e.renderer,r=this.canvas,i=navigator.gpu,o=this.context=r.getContext("webgpu");if(t.asyncCounter+=1,!i||!o)return void g(36,!1);if(o){let e=this.device;this.adapter||(this.adapter=await i.requestAdapter()),!e&&this.adapter&&(e=this.device=await this.adapter.requestDevice());let t=i.getPreferredCanvasFormat();if(e){o.configure({device:e,format:t,colorSpace:"display-p3",alphaMode:"premultiplied",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let[r,i]=this.getContourData(),{vertex:s,index:n,extremesUniform:a,valueExtremesUniform:u,contourIntervalUniform:l,contourOffsetUniform:h,smoothColoringUniform:d,lineWidthUniform:m,contourLineColor:c,colorAxisStopsCountUniform:g,colorAxisStopsUniform:p,isInvertedUniform:v}=this.buffers={vertex:e.createBuffer({size:i.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),index:e.createBuffer({size:r.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),extremesUniform:e.createBuffer({size:4*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),valueExtremesUniform:e.createBuffer({size:2*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourIntervalUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourOffsetUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),smoothColoringUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),lineWidthUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),contourLineColor:e.createBuffer({size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsCountUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),colorAxisStopsUniform:e.createBuffer({size:64*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),isInvertedUniform:e.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})};e.queue.writeBuffer(s,0,i),e.queue.writeBuffer(n,0,r);let U=e.createShaderModule({code:f}),x=e.createRenderPipeline({layout:"auto",vertex:{module:U,entryPoint:"vertexMain",buffers:[{arrayStride:12,attributes:[{format:"float32x3",offset:0,shaderLocation:0}]}]},fragment:{module:U,entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),C=e.createBindGroup({layout:x.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a,label:"extremesUniformBuffer"}},{binding:1,resource:{buffer:u,label:"valueExtremesUniformBuffer"}},{binding:2,resource:{buffer:p,label:"colorAxisStopsBuffer"}},{binding:3,resource:{buffer:g,label:"colorAxisStopsCountBuffer"}},{binding:4,resource:{buffer:l,label:"contourIntervalUniformBuffer"}},{binding:5,resource:{buffer:h,label:"contourOffsetUniformBuffer"}},{binding:6,resource:{buffer:d,label:"smoothColoringUniformBuffer"}},{binding:7,resource:{buffer:m,label:"lineWidthUniformBuffer"}},{binding:8,resource:{buffer:c,label:"contourLineColorBuffer"}},{binding:9,resource:{buffer:v,label:"isInvertedUniformBuffer"}}]});this.renderFrame=function(){this.setUniforms(!1);let t=e.createCommandEncoder(),i=o.getCurrentTexture(),a=t.beginRenderPass({colorAttachments:[{view:i.createView(),loadOp:"clear",clearValue:[0,0,0,0],storeOp:"store"}]});a.setPipeline(x),a.setVertexBuffer(0,s),a.setIndexBuffer(n,"uint32"),a.setBindGroup(0,C),a.drawIndexed(r.length),a.end(),e.queue.submit([t.finish()])},this.renderFrame()}}t.asyncCounter--,t.asyncCounter||!e||e.hasLoaded||e.onload()}destroy(){this.canvas?.parentElement?.remove(),super.destroy()}drawGraph(){}setUniforms(e=!0){this.setFrameExtremesUniform(!1),this.setValueExtremesUniform(!1),this.setColorAxisStopsUniforms(!1),this.setContourIntervalUniform(!1),this.setContourOffsetUniform(!1),this.setSmoothColoringUniform(!1),this.setLineWidthUniform(!1),this.setContourLineColorUniform(!1),this.setIsInvertedUniform(e)}setContourIntervalUniform(e=!0){this.device&&this.buffers?.contourIntervalUniform&&(this.device.queue.writeBuffer(this.buffers.contourIntervalUniform,0,new Float32Array([this.getContourInterval()])),e&&this.renderFrame?.())}setContourOffsetUniform(e=!0){this.device&&this.buffers?.contourOffsetUniform&&(this.device.queue.writeBuffer(this.buffers.contourOffsetUniform,0,new Float32Array([this.getContourOffset()])),e&&this.renderFrame?.())}setSmoothColoringUniform(e=!0){this.device&&this.buffers?.smoothColoringUniform&&(this.device.queue.writeBuffer(this.buffers.smoothColoringUniform,0,new Float32Array([this.getSmoothColoring()])),e&&this.renderFrame?.())}setLineWidthUniform(e=!0){this.device&&this.buffers?.lineWidthUniform&&(this.device.queue.writeBuffer(this.buffers.lineWidthUniform,0,new Float32Array([this.getLineWidth()])),e&&this.renderFrame?.())}setContourLineColorUniform(e=!0){this.device&&this.buffers?.contourLineColor&&(this.device.queue.writeBuffer(this.buffers.contourLineColor,0,new Float32Array(this.getContourLineColor())),e&&this.renderFrame?.())}setFrameExtremesUniform(e=!0){this.device&&this.buffers?.extremesUniform&&(this.device.queue.writeBuffer(this.buffers.extremesUniform,0,new Float32Array(this.getFrameExtremes())),e&&this.renderFrame?.())}setValueExtremesUniform(e=!0){this.device&&this.buffers?.valueExtremesUniform&&(this.device.queue.writeBuffer(this.buffers.valueExtremesUniform,0,new Float32Array(this.getValueAxisExtremes())),e&&this.renderFrame?.())}setColorAxisStopsUniforms(e=!0){let t=this.buffers?.colorAxisStopsUniform,r=this.buffers?.colorAxisStopsCountUniform;if(this.device&&t&&r){let{array:i,length:o}=this.getColorAxisStopsData();this.device.queue.writeBuffer(t,0,i),this.device.queue.writeBuffer(r,0,new Uint32Array([o])),e&&this.renderFrame?.()}}setIsInvertedUniform(e=!0){this.device&&this.buffers?.isInvertedUniform&&(this.device.queue.writeBuffer(this.buffers.isInvertedUniform,0,new Uint32Array([+!!this.chart.inverted])),e&&this.renderFrame?.())}getContourInterval(){let e=this.options.contourInterval??(()=>{let[e,t]=this.getValueAxisExtremes();return U((t-e)/10)})();return isNaN(e)||e<=0?-1:e}getContourOffset(){let e=this.options.contourOffset??0;return isNaN(e)||e<=0?0:e}getSmoothColoring(){return+!!this.options.smoothColoring}getLineWidth(){return this.userOptions.lineWidth??1}getContourLineColor(){let{lineColor:e="#000000"}=this.options;return x.rgbaAsFrac(new(s())(e).rgba)}getFrameExtremes(){let{xAxis:e,yAxis:t}=this;return[e.toValue(0,!0),e.toValue(e.len,!0),t.toValue(t.len,!0),t.toValue(0,!0)]}getValueAxisExtremes(){let e=this.valueMin;isNaN(e||NaN)&&isNaN((e=this.colorAxis?.min)||NaN)&&(e=Math.min(...this.points.map(e=>e.value||0)));let t=this.valueMax;return isNaN(t||NaN)&&isNaN((t=this.colorAxis?.max)||NaN)&&(t=Math.max(...this.points.map(e=>e.value||0))),[e||0,t||0]}getColorAxisStopsData(){let e,t=this.colorAxis?.stops;if(t)for(let r of(e=[],t)){let t=r?.color?.rgba;t&&e.push(r[0],...x.rgbaAsFrac(t))}return{array:new Float32Array(e??[0,0,0,0,1,1,1,1]),length:t?.length||2}}static rgbaAsFrac(e){return[e[0],e[1],e[2]].map(e=>e/255)}}x.defaultOptions=v(m.defaultOptions,{colorKey:"value",clip:!1,marker:{symbol:"cross",states:{hover:{lineColor:"black"}}},states:{hover:{halo:void 0}},zIndex:0}),d().prototype.symbols.cross=function(e,t,r,i){return[["M",e,t],["L",e+r,t+i],["M",e+r,t],["L",e,t+i],["z"]]},p(x.prototype,{pointClass:class extends u{},pointArrayMap:["y","value"],keysAffectYAxis:["y"],invertible:!1}),a().registerSeriesType("contour",x);let C=i();export{C as default};