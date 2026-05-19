import type ColorAxis from '../../Core/Axis/Color/ColorAxis';
import type DataExtremesObject from '../../Core/Series/DataExtremesObject';
import type HeatmapSeriesOptions from './HeatmapSeriesOptions';
import type Point from '../../Core/Series/Point.js';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import ColorMapComposition from '../ColorMapComposition.js';
import HeatmapPoint from './HeatmapPoint.js';
declare const Series: typeof import("../../Core/Series/Series").default, ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Series/Heatmap/HeatmapSeries */
        ellipse: SymbolTypeRegistry['circle'];
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        valueMax?: number;
        valueMin?: number;
    }
}
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.heatmap
 *
 * @augments Highcharts.Series
 */
declare class HeatmapSeries extends ScatterSeries {
    static defaultOptions: HeatmapSeriesOptions;
    canvas?: HTMLCanvasElement;
    colorAxis: ColorAxis;
    context?: CanvasRenderingContext2D;
    data: Array<HeatmapPoint>;
    options: HeatmapSeriesOptions;
    points: Array<HeatmapPoint>;
    valueData?: Array<number>;
    valueMax: number;
    valueMin: number;
    isDirtyCanvas: boolean;
    /**
     * @private
     */
    drawPoints(): void;
    /**
     * Override to use rectangle by default
     * @private
     */
    getSymbol(): void;
    /**
     * @private
     */
    getExtremes(): DataExtremesObject;
    /**
     * Override to also allow null points, used when building the k-d-tree for
     * tooltips in boost mode.
     * @private
     */
    getValidPoints(points?: Array<HeatmapPoint>, insideOnly?: boolean): Array<Point>;
    /**
     * Define hasData function for non-cartesian series. Returns true if the
     * series has points at all.
     * @private
     */
    hasData(): boolean;
    /**
     * Override the init method to add point ranges on both axes.
     * @private
     */
    init(): void;
    /**
     * @private
     */
    markerAttribs(point: HeatmapPoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * @private
     */
    pointAttribs(point?: HeatmapPoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * @private
     */
    translate(): void;
}
interface HeatmapSeries extends ColorMapComposition.SeriesComposition {
    pointArrayMap: Array<string>;
    pointClass: typeof HeatmapPoint;
    trackerGroups: ColorMapComposition.SeriesComposition['trackerGroups'];
    getSymbol: typeof Series.prototype.getSymbol;
    image?: SVGElement;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        heatmap: typeof HeatmapSeries;
    }
}
export default HeatmapSeries;
