import type PolygonBoxObject from '../../Core/Renderer/PolygonBoxObject';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type SizeObject from '../../Core/Renderer/SizeObject';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type { WordcloudSeriesOptions, WordcloudSeriesRotationOptions } from './WordcloudSeriesOptions';
import Series from '../../Core/Series/Series.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import WordcloudPoint from './WordcloudPoint.js';
import WU from './WordcloudUtils.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.wordcloud
 *
 * @augments Highcharts.Series
 */
declare class WordcloudSeries extends ColumnSeries {
    static defaultOptions: WordcloudSeriesOptions;
    data: Array<WordcloudPoint>;
    defaultScale?: number;
    field?: WordcloudSeries.WordcloudFieldObject;
    options: WordcloudSeriesOptions;
    points: Array<WordcloudPoint>;
    /**
     *
     * Functions
     *
     */
    pointAttribs(point: WordcloudPoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Calculates the fontSize of a word based on its weight.
     *
     * @private
     * @function Highcharts.Series#deriveFontSize
     *
     * @param {number} [relativeWeight=0]
     * The weight of the word, on a scale 0-1.
     *
     * @param {number} [maxFontSize=1]
     * The maximum font size of a word.
     *
     * @param {number} [minFontSize=1]
     * The minimum font size of a word.
     *
     * @return {number}
     * Returns the resulting fontSize of a word. If minFontSize is larger then
     * maxFontSize the result will equal minFontSize.
     */
    deriveFontSize(relativeWeight?: number, maxFontSize?: number, minFontSize?: number): number;
    drawPoints(): void;
    hasData(): boolean;
    getPlotBox(name?: string): Series.PlotBoxTransform;
}
interface WordcloudSeries {
    placementStrategy: Record<string, WordcloudSeries.WordcloudPlacementFunction>;
    pointArrayMap: Array<string>;
    pointClass: typeof WordcloudPoint;
    spirals: Record<string, WordcloudSeries.WordcloudSpiralFunction>;
    utils: typeof WU;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        wordcloud: typeof WordcloudSeries;
    }
}
declare namespace WordcloudSeries {
    interface WordcloudFieldObject extends PolygonBoxObject, SizeObject {
        ratioX: number;
        ratioY: number;
    }
    interface WordcloudPlacementFunction {
        (point: WordcloudPoint, options: WordcloudPlacementOptionsObject): WordcloudPlacementObject;
    }
    interface WordcloudPlacementObject extends PositionObject {
        rotation: (boolean | number);
    }
    interface WordcloudPlacementOptionsObject {
        data: WordcloudSeries['data'];
        field: WordcloudFieldObject;
        placed: Array<WordcloudPoint>;
        rotation: WordcloudSeriesRotationOptions;
    }
    interface WordcloudSpiralFunction {
        (attempt: number, params?: WordcloudSpiralParamsObject): (boolean | PositionObject);
    }
    interface WordcloudSpiralParamsObject {
        field: WordcloudFieldObject;
    }
    interface WordcloudTestOptionsObject {
        field: WordcloudFieldObject;
        placed: Array<WordcloudPoint>;
        polygon: WU.PolygonObject;
        rectangle: PolygonBoxObject;
        rotation: (boolean | number);
        spiral: WordcloudSpiralFunction;
    }
}
export default WordcloudSeries;
