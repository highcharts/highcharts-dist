import Axis from '../Core/Axis/Axis.js';
import Point from '../Core/Series/Point.js';
import Series from '../Core/Series/Series.js';
declare module '../Core/Axis/AxisBase' {
    interface AxisBase {
        setCompare(compare?: 'percent' | 'value' | null, redraw?: boolean): void;
        setCumulative(cumulative?: boolean | null, redraw?: boolean): void;
        setModifier(mode: 'compare' | 'cumulative', modeState?: boolean | null | 'percent' | 'value', redraw?: boolean): void;
    }
}
declare module '../Core/Series/PointBase' {
    interface PointBase {
        change?: number;
        cumulativeSum?: number;
    }
}
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        dataModify?: DataModifyComposition.Additions;
        setCompare(compare?: 'percent' | 'value' | null, redraw?: boolean): void;
        setCumulative(cumulative?: boolean | null, redraw?: boolean): void;
    }
}
declare module '../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        compare?: 'percent' | 'value' | null;
        compareBase?: (0 | 100);
        compareStart?: boolean;
        cumulative?: boolean;
        cumulativeStart?: boolean;
    }
}
declare namespace DataModifyComposition {
    class AxisComposition extends Axis {
        setCompare(this: Axis, compare?: 'percent' | 'value' | null, redraw?: boolean): void;
        setCumulative(this: Axis, cumulative?: boolean | null, redraw?: boolean): void;
        setModifier(this: Axis, mode: 'compare' | 'cumulative', modeState?: boolean | null | 'percent' | 'value', redraw?: boolean): void;
    }
    class PointComposition extends Point {
        tooltipFormatter(pointFormat: string): string;
    }
    class SeriesComposition extends Series {
        dataModify: Additions;
        setCompare(this: Series, compare?: 'percent' | 'value' | null, redraw?: boolean): void;
        setCumulative(this: Series, cumulative?: boolean | null, redraw?: boolean): void;
    }
    /**
     * Extends the series, axis and point classes with
     * compare and cumulative support.
     *
     * @private
     */
    function compose<T extends typeof Series>(SeriesClass: T, AxisClass: typeof Axis, PointClass: typeof Point): (typeof SeriesComposition & T);
    /**
     * @private
     */
    class Additions {
        /**
         * @private
         */
        constructor(series: SeriesComposition);
        series: SeriesComposition;
        compare?: 'percent' | 'value' | null;
        compareValue?: number;
        modifyValue(value?: number | null, index?: number): number;
        /**
         * @ignore
         * @function Highcharts.Series#getCumulativeExtremes
         *
         * @param {Array} [activeYData]
         *        An array containing all the points' y values
         *        in a visible range.
         */
        static getCumulativeExtremes(activeYData: Array<number>): [number, number];
        /**
         * @ignore
         * @function Highcharts.Series#initCompare
         *
         * @param {string} [compare]
         *        Can be one of `"percent"` or `"value"`.
         */
        initCompare(compare: 'percent' | 'value'): void;
        /**
         * @ignore
         * @function Highcharts.Series#initCumulative
         */
        initCumulative(): void;
    }
}
export default DataModifyComposition;
