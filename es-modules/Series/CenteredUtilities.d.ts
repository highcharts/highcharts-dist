import type SeriesOptions from '../Core/Series/SeriesOptions';
import Series from '../Core/Series/Series.js';
/**
 * @private
 */
declare namespace CenteredUtilities {
    interface CenteredSeries extends Series {
        options: CenteredSeriesOptions;
    }
    interface CenteredSeriesOptions extends SeriesOptions {
        center?: Array<(number | string | null)>;
        innerSize?: (number | string);
        size?: (number | string);
        slicedOffset?: number;
        thickness?: number;
    }
    interface RadianAngles {
        end: number;
        start: number;
    }
    /**
     * Get the center of the pie based on the size and center options relative
     * to the plot area. Borrowed by the polar and gauge series types.
     *
     * @private
     * @function Highcharts.CenteredSeriesMixin.getCenter
     */
    function getCenter(this: CenteredSeries): Array<number>;
    /**
     * GetStartAndEndRadians - Calculates start and end angles in radians.
     * Used in series types such as pie and sunburst.
     *
     * @private
     * @function Highcharts.CenteredSeriesMixin.getStartAndEndRadians
     *
     * @param {number} [start]
     *        Start angle in degrees.
     *
     * @param {number} [end]
     *        Start angle in degrees.
     *
     * @return {Highcharts.RadianAngles}
     *         Returns an object containing start and end angles as radians.
     */
    function getStartAndEndRadians(start?: number, end?: number): RadianAngles;
}
export default CenteredUtilities;
