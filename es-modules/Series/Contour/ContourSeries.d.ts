import type ContourSeriesOptions from './ContourSeriesOptions';
import type { DeepPartial } from '../../Shared/Types';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
import Color from '../../Core/Color/Color.js';
import ContourPoint from './ContourPoint.js';
import SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer.js';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
export default class ContourSeries extends ScatterSeries {
    static defaultOptions: import("../Line/LineSeriesOptions").LineSeriesOptions & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Scatter/ScatterSeries").default> & ContourSeriesOptions;
    static compose(SVGRendererClass: typeof SVGRenderer): void;
    data: Array<ContourPoint>;
    points: Array<ContourPoint>;
    options: ContourSeriesOptions;
    context?: GPUCanvasContext | null;
    renderFrame?: () => void;
    private foreignObject?;
    private canvas?;
    private adapter?;
    private device?;
    private buffers?;
    renderPromise?: Promise<void>;
    getContourData(): [Uint32Array, Float32Array];
    update(options: DeepPartial<ContourSeriesOptions>, redraw?: boolean): void;
    drawPoints(): void;
    run(): Promise<void>;
    destroy(): void;
    drawGraph(): void;
    /**
     * Set all the updateable uniforms.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniforms.
     * Defaults to `true`.
     */
    setUniforms(renderFrame?: boolean): void;
    /**
     * Set the contour interval uniform according to the series options.
     *
     * @param {boolean} renderFrame
     * Whether to rerender the series' context after setting the uniform.
     * Defaults to `true`.
     */
    setContourIntervalUniform(renderFrame?: boolean): void;
    /**
     * Set the contour offset uniform according to the series options.
     */
    setContourOffsetUniform(renderFrame?: boolean): void;
    /**
     * Set the smooth coloring uniform according to the series options.
     */
    setSmoothColoringUniform(renderFrame?: boolean): void;
    /**
     * Set the line width uniform according to the series options.
     */
    setLineWidthUniform(renderFrame?: boolean): void;
    /**
     * Set the contour line color uniform according to the series options.
     */
    setContourLineColorUniform(renderFrame?: boolean): void;
    /**
     * Set the frame extremes uniform according to the series options.
     */
    setFrameExtremesUniform(renderFrame?: boolean): void;
    /**
     * Set the value extremes uniform according to the series data.
     */
    setValueExtremesUniform(renderFrame?: boolean): void;
    /**
     * Set the color axis stops uniforms according to the color axis options.
     */
    setColorAxisStopsUniforms(renderFrame?: boolean): void;
    /**
     * Set the is inverted uniform according to the series options.
     */
    setIsInvertedUniform(renderFrame?: boolean): void;
    /**
     * Returns the contour interval from the series options in format of the
     * WebGPU uniform.
     */
    private getContourInterval;
    /**
     * Returns the contour offset from the series options in format of the
     * WebGPU uniform.
     */
    private getContourOffset;
    /**
     * Returns the smooth coloring from the series options in format of the
     * WebGPU uniform.
     */
    private getSmoothColoring;
    /**
     * Returns the lineWidth from the series options, which controls the
     * visibility of contour lines, in format of the WebGPU uniform.
     */
    private getLineWidth;
    /**
     * Returns the contour line color from the series options in format of the
     * WebGPU uniform.
     */
    private getContourLineColor;
    /**
     * Returns the extremes of the x and y axes in format of the WebGPU uniform.
     */
    private getFrameExtremes;
    /**
     * Returns the extremes of the data in format of the WebGPU uniform.
     */
    private getValueAxisExtremes;
    private getColorAxisStopsData;
    /**
     * Returns the RGBA color as a fraction of the 255 range.
     */
    static rgbaAsFrac(rgba: Color.RGBA): number[];
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        contour: typeof ContourSeries;
    }
}
declare module '../../Core/Chart/Chart' {
    export default interface Chart {
        backgroundSeriesGroup?: SVGElement;
    }
}
export {};
