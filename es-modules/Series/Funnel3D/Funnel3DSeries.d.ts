import type DataLabelOptions from '../../Core/Series/DataLabelOptions';
import type Funnel3DSeriesOptions from './Funnel3DSeriesOptions';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
import Funnel3DPoint from './Funnel3DPoint.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
/**
 * The funnel3d series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.funnel3d
 * @augments seriesTypes.column
 * @requires highcharts-3d
 * @requires modules/cylinder
 * @requires modules/funnel3d
 */
declare class Funnel3DSeries extends ColumnSeries {
    static compose: (SVGRendererClass: typeof import("../../Core/Renderer/SVG/SVGRenderer").default) => void;
    static defaultOptions: Funnel3DSeriesOptions;
    center: Array<number>;
    centerX?: number;
    data: Array<Funnel3DPoint>;
    options: Funnel3DSeriesOptions;
    points: Array<Funnel3DPoint>;
    /**
     * @private
     */
    alignDataLabel(point: Funnel3DPoint, _dataLabel: SVGLabel, options: DataLabelOptions): void;
    /**
     * Override default axis options with series required options for axes.
     * @private
     */
    bindAxes(): void;
    /**
     * @private
     */
    translate(): void;
}
interface Funnel3DSeries {
    getWidthAt(y: number): number;
    pointClass: typeof Funnel3DPoint;
    translate3dShapes(): void;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        funnel3d: typeof Funnel3DSeries;
    }
}
export default Funnel3DSeries;
