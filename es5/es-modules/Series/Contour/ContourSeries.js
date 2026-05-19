/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
/// <reference types="@webgpu/types" />
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Color from '../../Core/Color/Color.js';
import ContourPoint from './ContourPoint.js';
import contourShader from './ContourShader.js';
import ContourSeriesDefaults from './ContourSeriesDefaults.js';
import CrossSymbol from '../CrossSymbol.js';
import Delaunay from '../../Core/Delaunay.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { diffObjects, extend, merge, normalizeTickInterval } from '../../Shared/Utilities.js';
import { error } from '../../Core/Utilities.js';
var ScatterSeries = SeriesRegistry.seriesTypes.scatter;
/* *
 *
 *  Class
 *
 * */
var ContourSeries = /** @class */ (function (_super) {
    __extends(ContourSeries, _super);
    function ContourSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContourSeries.compose = function (SVGRendererClass) {
        CrossSymbol.compose(SVGRendererClass);
    };
    /* Uniforms:
     * - extremesUniform,
     * - valueExtremesUniform,
     * - contourInterval,
     * - contourOffset,
     * - smoothColoring,
     * - lineWidth,
     * - contourLineColor
     * - colorAxisStops
     * - colorAxisStopsCount
     * - isInverted
     */
    /* *
     *
     * Methods
     *
     * */
    ContourSeries.prototype.getContourData = function () {
        var points = this.points, len = points.length, points3d = new Float32Array(len * 3), points2d = new Float64Array(len * 2);
        for (var i = 0; i < len; i++) {
            var _a = points[i], x = _a.x, _b = _a.y, y = _b === void 0 ? 0 : _b, value = _a.value, index2d = i * 2, index3d = i * 3;
            points2d[index2d] = x;
            points2d[index2d + 1] = y;
            points3d[index3d] = x;
            points3d[index3d + 1] = y;
            points3d[index3d + 2] = value !== null && value !== void 0 ? value : 0;
        }
        return [new Delaunay(points2d).triangles, points3d];
    };
    ContourSeries.prototype.update = function (options, redraw) {
        options = diffObjects(options, this.userOptions);
        var uniformOptions = [
            'smoothColoring',
            'contourInterval',
            'contourOffset',
            'lineColor',
            'lineWidth'
        ];
        var isUniformOption = function (key) { return (uniformOptions.includes(key)); };
        var hasNonUniformOptions = Object.keys(options).some(function (key) { return !isUniformOption(key); });
        // Only fetch plotOptions if all options are uniform related.
        var allOptions = (hasNonUniformOptions ?
            void 0 :
            this.setOptions(merge(this.userOptions, options))), hasNonUniformPlotOptions = allOptions ?
            Object.keys(diffObjects(allOptions, this.options)).some(function (key) { return !isUniformOption(key); }) :
            false;
        if (hasNonUniformOptions || hasNonUniformPlotOptions) {
            _super.prototype.update.call(this, options, redraw);
        }
        else {
            this.options = allOptions;
            // If only uniform-related options changed, avoid full series
            // reconstruction and update uniforms only.
            this.setUniforms();
        }
    };
    ContourSeries.prototype.drawPoints = function () {
        var _a;
        var group = this.group;
        if (!group) {
            return;
        }
        if (!this.canvas) {
            this.foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            group.element.appendChild(this.foreignObject);
            this.canvas = document.createElement('canvas');
            this.foreignObject.appendChild(this.canvas);
        }
        var _b = this, canvas = _b.canvas, xAxis = _b.xAxis, yAxis = _b.yAxis, foreignObject = this.foreignObject, oldWidth = foreignObject.width.baseVal.value, oldHeight = foreignObject.height.baseVal.value, dpr = window.devicePixelRatio;
        var width = xAxis.len, height = yAxis.len;
        if (this.chart.inverted) {
            _a = [height, width], width = _a[0], height = _a[1];
        }
        if (oldWidth !== width) {
            foreignObject.setAttribute('width', width);
            canvas.width = width * dpr;
            canvas.style.width = width + 'px';
        }
        if (oldHeight !== height) {
            foreignObject.setAttribute('height', height);
            canvas.height = height * dpr;
            canvas.style.height = height + 'px';
        }
        if (this.renderFrame) {
            this.renderFrame();
        }
        else {
            /* eslint-disable @typescript-eslint/no-floating-promises */
            this.run();
        }
    };
    ContourSeries.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var series, chart, renderer, canvas, gpu, context, device_1, _a, _b, canvasFormat, _c, indices_1, vertices, buffers, vertexBuffer_1, indexBuffer_1, extremesUniformBuffer, valueExtremesUniformBuffer, contourIntervalUniformBuffer, contourOffsetUniformBuffer, smoothColoringUniformBuffer, lineWidthUniformBuffer, contourLineColorBuffer, colAxisStopsCountUniformBuffer, colorAxisStopsUniformBuffer, isInvertedUniformBuffer, vertexBufferLayout, shaderModule, pipeline_1, bindGroup_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        series = this, chart = series.chart, renderer = chart.renderer, canvas = series.canvas, gpu = navigator.gpu, context = series.context = canvas.getContext('webgpu');
                        if (!gpu || !context) {
                            error(37, false, chart);
                            return [2 /*return*/];
                        }
                        renderer.asyncCounter += 1;
                        if (!context) return [3 /*break*/, 5];
                        device_1 = this.device;
                        if (!!this.adapter) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, gpu.requestAdapter()];
                    case 1:
                        _a.adapter = _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!(!device_1 && this.adapter)) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.adapter.requestDevice()];
                    case 3:
                        device_1 = _b.device = _d.sent();
                        _d.label = 4;
                    case 4:
                        canvasFormat = gpu.getPreferredCanvasFormat();
                        if (device_1) {
                            context.configure({
                                device: device_1,
                                format: canvasFormat,
                                colorSpace: 'display-p3',
                                alphaMode: 'premultiplied',
                                usage: (GPUTextureUsage.RENDER_ATTACHMENT |
                                    GPUTextureUsage.COPY_SRC)
                            });
                            _c = this.getContourData(), indices_1 = _c[0], vertices = _c[1];
                            buffers = this.buffers = {
                                vertex: device_1.createBuffer({
                                    size: vertices.byteLength,
                                    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
                                }),
                                index: device_1.createBuffer({
                                    size: indices_1.byteLength,
                                    usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
                                }),
                                extremesUniform: device_1.createBuffer({
                                    size: Float32Array.BYTES_PER_ELEMENT * 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                valueExtremesUniform: device_1.createBuffer({
                                    size: Float32Array.BYTES_PER_ELEMENT * 2,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                contourIntervalUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                contourOffsetUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                smoothColoringUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                lineWidthUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                contourLineColor: device_1.createBuffer({
                                    size: 12,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                colorAxisStopsCountUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                }),
                                colorAxisStopsUniform: device_1.createBuffer({
                                    size: Float32Array.BYTES_PER_ELEMENT * 64,
                                    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
                                }),
                                isInvertedUniform: device_1.createBuffer({
                                    size: 4,
                                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                                })
                            };
                            vertexBuffer_1 = buffers.vertex, indexBuffer_1 = buffers.index, extremesUniformBuffer = buffers.extremesUniform, valueExtremesUniformBuffer = buffers.valueExtremesUniform, contourIntervalUniformBuffer = buffers.contourIntervalUniform, contourOffsetUniformBuffer = buffers.contourOffsetUniform, smoothColoringUniformBuffer = buffers.smoothColoringUniform, lineWidthUniformBuffer = buffers.lineWidthUniform, contourLineColorBuffer = buffers.contourLineColor, colAxisStopsCountUniformBuffer = buffers.colorAxisStopsCountUniform, colorAxisStopsUniformBuffer = buffers.colorAxisStopsUniform, isInvertedUniformBuffer = buffers.isInvertedUniform;
                            device_1.queue.writeBuffer(vertexBuffer_1, 0, vertices);
                            device_1.queue.writeBuffer(indexBuffer_1, 0, indices_1);
                            vertexBufferLayout = {
                                arrayStride: 12,
                                attributes: [{
                                        format: 'float32x3',
                                        offset: 0,
                                        shaderLocation: 0
                                    }]
                            };
                            shaderModule = device_1.createShaderModule({
                                code: contourShader
                            });
                            pipeline_1 = device_1.createRenderPipeline({
                                layout: 'auto',
                                vertex: {
                                    module: shaderModule,
                                    entryPoint: 'vertexMain',
                                    buffers: [vertexBufferLayout]
                                },
                                fragment: {
                                    module: shaderModule,
                                    entryPoint: 'fragmentMain',
                                    targets: [{
                                            format: canvasFormat
                                        }]
                                },
                                primitive: {
                                    topology: 'triangle-list'
                                }
                            });
                            bindGroup_1 = device_1.createBindGroup({
                                layout: pipeline_1.getBindGroupLayout(0),
                                entries: [{
                                        binding: 0,
                                        resource: {
                                            buffer: extremesUniformBuffer,
                                            label: 'extremesUniformBuffer'
                                        }
                                    }, {
                                        binding: 1,
                                        resource: {
                                            buffer: valueExtremesUniformBuffer,
                                            label: 'valueExtremesUniformBuffer'
                                        }
                                    }, {
                                        binding: 2,
                                        resource: {
                                            buffer: colorAxisStopsUniformBuffer,
                                            label: 'colorAxisStopsBuffer'
                                        }
                                    }, {
                                        binding: 3,
                                        resource: {
                                            buffer: colAxisStopsCountUniformBuffer,
                                            label: 'colorAxisStopsCountBuffer'
                                        }
                                    }, {
                                        binding: 4,
                                        resource: {
                                            buffer: contourIntervalUniformBuffer,
                                            label: 'contourIntervalUniformBuffer'
                                        }
                                    }, {
                                        binding: 5,
                                        resource: {
                                            buffer: contourOffsetUniformBuffer,
                                            label: 'contourOffsetUniformBuffer'
                                        }
                                    }, {
                                        binding: 6,
                                        resource: {
                                            buffer: smoothColoringUniformBuffer,
                                            label: 'smoothColoringUniformBuffer'
                                        }
                                    }, {
                                        binding: 7,
                                        resource: {
                                            buffer: lineWidthUniformBuffer,
                                            label: 'lineWidthUniformBuffer'
                                        }
                                    }, {
                                        binding: 8,
                                        resource: {
                                            buffer: contourLineColorBuffer,
                                            label: 'contourLineColorBuffer'
                                        }
                                    }, {
                                        binding: 9,
                                        resource: {
                                            buffer: isInvertedUniformBuffer,
                                            label: 'isInvertedUniformBuffer'
                                        }
                                    }]
                            });
                            this.renderFrame = function () {
                                this.setUniforms(false);
                                var encoder = device_1.createCommandEncoder(), currentTexture = context.getCurrentTexture(), pass = encoder.beginRenderPass({
                                    colorAttachments: [{
                                            view: currentTexture.createView(),
                                            loadOp: 'clear',
                                            clearValue: [0, 0, 0, 0],
                                            storeOp: 'store'
                                        }]
                                });
                                pass.setPipeline(pipeline_1);
                                pass.setVertexBuffer(0, vertexBuffer_1);
                                pass.setIndexBuffer(indexBuffer_1, 'uint32');
                                pass.setBindGroup(0, bindGroup_1);
                                pass.drawIndexed(indices_1.length);
                                pass.end();
                                device_1.queue.submit([encoder.finish()]);
                            };
                            this.renderFrame();
                        }
                        _d.label = 5;
                    case 5:
                        renderer.asyncCounter--;
                        if (!renderer.asyncCounter && chart && !chart.hasLoaded) {
                            chart.onload();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContourSeries.prototype.destroy = function () {
        var _a, _b;
        // Remove the foreign object. The canvas will be removed with it.
        // For some reason, `series.update` calls `series.destroy` even if
        // update does not trigger a rerender. This causes the canvas to be
        // removed here (unnecessarily) and that causes the flickering effect
        // when updating.
        (_b = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        _super.prototype.destroy.call(this);
    };
    ContourSeries.prototype.drawGraph = function () {
        // Do nothing
    };
    /**
     * Set all the updateable uniforms.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniforms.
     * Defaults to `true`.
     */
    ContourSeries.prototype.setUniforms = function (renderFrame) {
        if (renderFrame === void 0) { renderFrame = true; }
        this.setFrameExtremesUniform(false);
        this.setValueExtremesUniform(false);
        this.setColorAxisStopsUniforms(false);
        this.setContourIntervalUniform(false);
        this.setContourOffsetUniform(false);
        this.setSmoothColoringUniform(false);
        this.setLineWidthUniform(false);
        this.setContourLineColorUniform(false);
        this.setIsInvertedUniform(renderFrame);
    };
    /**
     * Set the contour interval uniform according to the series options.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniform.
     * Defaults to `true`.
     */
    ContourSeries.prototype.setContourIntervalUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.contourIntervalUniform)) {
            this.device.queue.writeBuffer(this.buffers.contourIntervalUniform, 0, new Float32Array([this.getContourInterval()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the contour offset uniform according to the series options.
     */
    ContourSeries.prototype.setContourOffsetUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.contourOffsetUniform)) {
            this.device.queue.writeBuffer(this.buffers.contourOffsetUniform, 0, new Float32Array([this.getContourOffset()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the smooth coloring uniform according to the series options.
     */
    ContourSeries.prototype.setSmoothColoringUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.smoothColoringUniform)) {
            this.device.queue.writeBuffer(this.buffers.smoothColoringUniform, 0, new Float32Array([this.getSmoothColoring()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the line width uniform according to the series options.
     */
    ContourSeries.prototype.setLineWidthUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.lineWidthUniform)) {
            this.device.queue.writeBuffer(this.buffers.lineWidthUniform, 0, new Float32Array([this.getLineWidth()]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the contour line color uniform according to the series options.
     */
    ContourSeries.prototype.setContourLineColorUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.contourLineColor)) {
            this.device.queue.writeBuffer(this.buffers.contourLineColor, 0, new Float32Array(this.getContourLineColor()));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the frame extremes uniform according to the series options.
     */
    ContourSeries.prototype.setFrameExtremesUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.extremesUniform)) {
            this.device.queue.writeBuffer(this.buffers.extremesUniform, 0, new Float32Array(this.getFrameExtremes()));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the value extremes uniform according to the series data.
     */
    ContourSeries.prototype.setValueExtremesUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.valueExtremesUniform)) {
            this.device.queue.writeBuffer(this.buffers.valueExtremesUniform, 0, new Float32Array(this.getValueAxisExtremes()));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Set the color axis stops uniforms according to the color axis options.
     */
    ContourSeries.prototype.setColorAxisStopsUniforms = function (renderFrame) {
        var _a, _b, _c;
        if (renderFrame === void 0) { renderFrame = true; }
        var stopsBuffer = (_a = this.buffers) === null || _a === void 0 ? void 0 : _a.colorAxisStopsUniform;
        var countBuffer = (_b = this.buffers) === null || _b === void 0 ? void 0 : _b.colorAxisStopsCountUniform;
        if (this.device && stopsBuffer && countBuffer) {
            var _d = this.getColorAxisStopsData(), array = _d.array, length_1 = _d.length;
            // Write the stops to the buffer
            this.device.queue.writeBuffer(stopsBuffer, 0, array);
            // Write the count to the buffer
            this.device.queue.writeBuffer(countBuffer, 0, new Uint32Array([length_1]));
            if (renderFrame) {
                (_c = this.renderFrame) === null || _c === void 0 ? void 0 : _c.call(this);
            }
        }
    };
    /**
     * Set the is inverted uniform according to the series options.
     */
    ContourSeries.prototype.setIsInvertedUniform = function (renderFrame) {
        var _a, _b;
        if (renderFrame === void 0) { renderFrame = true; }
        if (this.device && ((_a = this.buffers) === null || _a === void 0 ? void 0 : _a.isInvertedUniform)) {
            this.device.queue.writeBuffer(this.buffers.isInvertedUniform, 0, new Uint32Array([this.chart.inverted ? 1 : 0]));
            if (renderFrame) {
                (_b = this.renderFrame) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    };
    /**
     * Returns the contour interval from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getContourInterval = function () {
        var _this = this;
        var _a;
        var interval = (_a = this.options.contourInterval) !== null && _a !== void 0 ? _a : (function () {
            var _a = _this.getValueAxisExtremes(), min = _a[0], max = _a[1], range = max - min;
            return normalizeTickInterval(range / 10);
        })();
        if (isNaN(interval) || interval <= 0) {
            return -1;
        }
        return interval;
    };
    /**
     * Returns the contour offset from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getContourOffset = function () {
        var _a;
        var offset = (_a = this.options.contourOffset) !== null && _a !== void 0 ? _a : 0;
        if (isNaN(offset) || offset <= 0) {
            return 0;
        }
        return offset;
    };
    /**
     * Returns the smooth coloring from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getSmoothColoring = function () {
        return this.options.smoothColoring ? 1 : 0;
    };
    /**
     * Returns the lineWidth from the series options, which controls the
     * visibility of contour lines, in format of the WebGPU uniform.
     */
    ContourSeries.prototype.getLineWidth = function () {
        var _a;
        return (_a = this.userOptions.lineWidth) !== null && _a !== void 0 ? _a : 1;
    };
    /**
     * Returns the contour line color from the series options in format of the
     * WebGPU uniform.
     */
    ContourSeries.prototype.getContourLineColor = function () {
        var _a = this.options.lineColor, lineColor = _a === void 0 ? '#000000' : _a;
        return ContourSeries.rgbaAsFrac(new Color(lineColor).rgba);
    };
    /**
     * Returns the extremes of the x and y axes in format of the WebGPU uniform.
     */
    ContourSeries.prototype.getFrameExtremes = function () {
        var _a = this, xAxis = _a.xAxis, yAxis = _a.yAxis;
        return [
            xAxis.toValue(0, true),
            xAxis.toValue(xAxis.len, true),
            yAxis.toValue(yAxis.len, true),
            yAxis.toValue(0, true)
        ];
    };
    /**
     * Returns the extremes of the data in format of the WebGPU uniform.
     */
    ContourSeries.prototype.getValueAxisExtremes = function () {
        var _a, _b;
        var series = this;
        var min = series.valueMin;
        if (isNaN(min || NaN)) {
            min = (_a = series.colorAxis) === null || _a === void 0 ? void 0 : _a.min;
            if (isNaN(min || NaN)) {
                min = Math.min.apply(Math, series.points.map(function (point) { return point.value || 0; }));
            }
        }
        var max = series.valueMax;
        if (isNaN(max || NaN)) {
            max = (_b = series.colorAxis) === null || _b === void 0 ? void 0 : _b.max;
            if (isNaN(max || NaN)) {
                max = Math.max.apply(Math, series.points.map(function (point) { return point.value || 0; }));
            }
        }
        return [min || 0, max || 0];
    };
    ContourSeries.prototype.getColorAxisStopsData = function () {
        var _a, _b;
        var colorAxisStops = (_a = this.colorAxis) === null || _a === void 0 ? void 0 : _a.stops;
        var flattenedData;
        if (colorAxisStops) {
            flattenedData = [];
            for (var _i = 0, colorAxisStops_1 = colorAxisStops; _i < colorAxisStops_1.length; _i++) {
                var stop_1 = colorAxisStops_1[_i];
                var rgba = (_b = stop_1 === null || stop_1 === void 0 ? void 0 : stop_1.color) === null || _b === void 0 ? void 0 : _b.rgba;
                if (rgba) {
                    flattenedData.push.apply(flattenedData, __spreadArray([stop_1[0]], ContourSeries.rgbaAsFrac(rgba), false));
                }
            }
        }
        return {
            array: new Float32Array(flattenedData !== null && flattenedData !== void 0 ? flattenedData : [
                0, 0, 0, 0,
                1, 1, 1, 1
            ]),
            length: (colorAxisStops === null || colorAxisStops === void 0 ? void 0 : colorAxisStops.length) || 2
        };
    };
    /* *
     *
     * Static Methods
     *
     * */
    /**
     * Returns the RGBA color as a fraction of the 255 range.
     */
    ContourSeries.rgbaAsFrac = function (rgba) {
        return [
            rgba[0],
            rgba[1],
            rgba[2]
        ].map(function (val) { return val / 255; });
    };
    /* *
     *
     * Static Properties
     *
     * */
    ContourSeries.defaultOptions = merge(ScatterSeries.defaultOptions, ContourSeriesDefaults);
    return ContourSeries;
}(ScatterSeries));
export default ContourSeries;
extend(ContourSeries.prototype, {
    pointClass: ContourPoint,
    pointArrayMap: ['y', 'value'],
    keysAffectYAxis: ['y'],
    invertible: false
});
SeriesRegistry.registerSeriesType('contour', ContourSeries);
