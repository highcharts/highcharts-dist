import type Chart from '../Core/Chart/Chart';
import type CoreSeriesOptions from '../Core/Series/SeriesOptions';
import type { DeepPartial } from '../Shared/Types';
import Series from '../Core/Series/Series.js';
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        hasDerivedData?: DerivedComposition.SeriesComposition['hasDerivedData'];
    }
}
/**
 * Provides methods for auto setting/updating series data based on the based
 * series data.
 * @private
 */
declare namespace DerivedComposition {
    class SeriesComposition extends Series {
        baseSeries?: Series;
        eventRemovers: Array<Function>;
        hasDerivedData?: boolean;
        initialised?: boolean;
        options: SeriesOptions;
        addBaseSeriesEvents(): void;
        addEvents(): void;
        destroy(keepEventsForUpdate?: boolean): void;
        init(chart: Chart, userOptions: DeepPartial<CoreSeriesOptions>): void;
        setBaseSeries(): void;
        setDerivedData(): void;
    }
    interface SeriesOptions extends CoreSeriesOptions {
        baseSeries?: (number | string);
    }
    const hasDerivedData = true;
    /**
     * Method to be implemented - inside the method the series has already
     * access to the base series via m `this.baseSeries` and the bases data is
     * initialised. It should return data in the format accepted by
     * `Series.setData()` method
     * @private
     */
    const setDerivedData: (this: any, ...args: Array<any>) => any;
    /**
     * @private
     */
    function compose<T extends typeof Series>(SeriesClass: T): (T & typeof SeriesComposition);
    /**
     * Initialise series
     * @private
     */
    function init(this: SeriesComposition): void;
    /**
     * Sets base series for the series
     * @private
     */
    function setBaseSeries(this: SeriesComposition): void;
    /**
     * Adds events for the series
     * @private
     */
    function addEvents(this: SeriesComposition): void;
    /**
     * Adds events to the base series - it required for recalculating the data
     * in the series if the base series is updated / removed / etc.
     * @private
     */
    function addBaseSeriesEvents(this: SeriesComposition): void;
    /**
     * Destroys the series
     * @private
     */
    function destroy(this: SeriesComposition): void;
}
export default DerivedComposition;
