import '../Column/ColumnSeries.js';
import type ColorType from '../../Core/Color/ColorType.js';
import type ColumnSeriesType from '../Column/ColumnSeries';
import type DataExtremesObject from '../../Core/Series/DataExtremesObject';
import type PictorialSeriesOptions from './PictorialSeriesOptions';
import PictorialPoint from './PictorialPoint.js';
import SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes.js';
import { PictorialPathOptions } from './PictorialSeriesOptions';
declare const ColumnSeries: typeof ColumnSeriesType;
export interface StackShadowOptions {
    borderColor?: ColorType;
    borderWidth?: number;
    color?: ColorType;
    enabled?: boolean;
}
declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions {
        stackShadow?: StackShadowOptions;
    }
}
/**
 * The pictorial series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pictorial
 *
 * @augments Highcharts.Series
 */
declare class PictorialSeries extends ColumnSeries {
    static defaultOptions: PictorialSeriesOptions;
    paths: Array<PictorialPathOptions>;
    data: Array<PictorialPoint>;
    options: PictorialSeriesOptions;
    points: Array<PictorialPoint>;
    /**
     * Animate in the series. Called internally twice. First with the `init`
     * parameter set to true, which sets up the initial state of the
     * animation. Then when ready, it is called with the `init` parameter
     * undefined, in order to perform the actual animation.
     *
     * @function Highcharts.Series#animate
     *
     * @param {boolean} [init]
     * Initialize the animation.
     */
    animate(init?: boolean): void;
    animateDrilldown(): void;
    animateDrillupFrom(): void;
    pointAttribs(point?: PictorialPoint): SVGAttributes;
    /**
     * Make sure that path.max is also considered when calculating dataMax.
     */
    getExtremes(): DataExtremesObject;
}
interface PictorialSeries {
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof PictorialPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pictorial: typeof PictorialSeries;
    }
}
export default PictorialSeries;
