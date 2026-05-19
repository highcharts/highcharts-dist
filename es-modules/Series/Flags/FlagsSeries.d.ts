import type ColorType from '../../Core/Color/ColorType';
import type { FlagsShapeValue } from './FlagsPointOptions';
import type FlagsSeriesOptions from './FlagsSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import FlagsPoint from './FlagsPoint.js';
import FlagsSymbols from './FlagsSymbols.js';
import OnSeriesComposition from '../OnSeriesComposition.js';
declare const Series: typeof import("../../Core/Series/Series").default, ColumnSeries: typeof import("../Column/ColumnSeries").default;
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        allowDG?: boolean;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {
        fillColor?: ColorType;
        lineColor?: ColorType;
        shape?: FlagsShapeValue;
    }
}
/**
 * The Flags series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.flags
 *
 * @augments Highcharts.Series
 */
declare class FlagsSeries extends ColumnSeries {
    static compose: typeof FlagsSymbols.compose;
    static defaultOptions: FlagsSeriesOptions;
    data: Array<FlagsPoint>;
    onSeries?: typeof Series.prototype;
    options: FlagsSeriesOptions;
    points: Array<FlagsPoint>;
    /**
     * Disable animation, but keep clipping (#8546).
     * @private
     */
    animate(init?: boolean): void;
    /**
     * Draw the markers.
     * @private
     */
    drawPoints(): void;
    /**
     * Extend the column trackers with listeners to expand and contract
     * stacks.
     * @private
     */
    drawTracker(): void;
    /**
     * Get presentational attributes
     * @private
     */
    pointAttribs(point: FlagsPoint, state?: string): SVGAttributes;
    /**
     * @private
     */
    setClip(): void;
}
interface FlagsSeries extends OnSeriesComposition.SeriesComposition {
    allowDG: boolean;
    group: typeof ColumnSeries.prototype.group;
    pointClass: typeof FlagsPoint;
    takeOrdinalPosition: boolean;
    init: typeof Series.prototype['init'];
    remove: typeof ColumnSeries.prototype.remove;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypesDictionary {
        flags: typeof FlagsSeries;
    }
}
export default FlagsSeries;
