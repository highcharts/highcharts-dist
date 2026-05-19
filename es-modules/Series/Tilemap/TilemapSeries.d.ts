import type Axis from '../../Core/Axis/Axis';
import type TilemapSeriesOptions from './TilemapSeriesOptions';
declare const HeatmapSeries: typeof import("../Heatmap/HeatmapSeries").default;
import TilemapPoint from './TilemapPoint.js';
import TilemapShapes from './TilemapShapes.js';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        recomputingForTilemap?: boolean;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        getSeriesPixelPadding?(axis: Axis): Record<string, number>;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverHaloOptions {
        enabled?: boolean;
    }
}
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.tilemap
 *
 * @augments Highcharts.Series
 */
declare class TilemapSeries extends HeatmapSeries {
    static defaultOptions: TilemapSeriesOptions;
    static compose(AxisClass: typeof Axis): void;
    data: Array<TilemapPoint>;
    options: TilemapSeriesOptions;
    points: Array<TilemapPoint>;
    tileShape: TilemapShapes.DefinitionObject;
    /**
     * Use the shape's defined data label alignment function.
     * @private
     */
    alignDataLabel(): void;
    drawPoints(): void;
    /**
     * Get metrics for padding of axis for this series.
     * @private
     */
    getSeriesPixelPadding(axis: Axis): Record<string, number>;
    /**
     * Set tile shape object on series.
     * @private
     */
    setOptions(): TilemapSeriesOptions;
    /**
     * Use translate from tileShape.
     * @private
     */
    translate(): void;
}
interface TilemapSeries {
    pointClass: typeof TilemapPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        tilemap: typeof TilemapSeries;
    }
}
export default TilemapSeries;
