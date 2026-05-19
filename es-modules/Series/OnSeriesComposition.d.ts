import type CoreSeriesOptions from '../Core/Series/SeriesOptions';
import type Point from '../Core/Series/Point';
import Series from '../Core/Series/Series.js';
declare namespace OnSeriesComposition {
    class PointComposition extends Point {
        stackIndex?: number;
    }
    class SeriesComposition extends Series {
        options: SeriesOptions;
        onSeries?: SeriesComposition;
        points: Array<PointComposition>;
    }
    interface SeriesOptions extends CoreSeriesOptions {
        onSeries?: (string | null);
    }
    /**
     * @private
     */
    function compose<T extends typeof Series>(SeriesClass: T): (T & SeriesComposition);
    /**
     * Override getPlotBox. If the onSeries option is valid, return the plot box
     * of the onSeries, otherwise proceed as usual.
     *
     * @private
     */
    function getPlotBox(this: SeriesComposition, name?: string): Series.PlotBoxTransform;
    /**
     * Extend the translate method by placing the point on the related series
     *
     * @private
     */
    function translate(this: SeriesComposition): void;
}
export default OnSeriesComposition;
