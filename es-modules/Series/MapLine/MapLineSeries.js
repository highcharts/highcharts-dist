/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import MapLineSeriesDefaults from './MapLineSeriesDefaults.js';
import MapSeries from '../Map/MapSeries.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import U from '../../Core/Utilities.js';
const { extend, merge } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.mapline
 *
 * @augments Highcharts.Series
 */
class MapLineSeries extends MapSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Get presentational attributes
     * @private
     * @function Highcharts.seriesTypes.mapline#pointAttribs
     */
    pointAttribs(point, state) {
        const attr = super.pointAttribs(point, state);
        // The difference from a map series is that the stroke takes the
        // point color
        attr.fill = this.options.fillColor;
        return attr;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
MapLineSeries.defaultOptions = merge(MapSeries.defaultOptions, MapLineSeriesDefaults);
extend(MapLineSeries.prototype, {
    type: 'mapline',
    colorProp: 'stroke',
    pointAttrToOptions: {
        'stroke': 'color',
        'stroke-width': 'lineWidth'
    }
});
SeriesRegistry.registerSeriesType('mapline', MapLineSeries);
/* *
 *
 *  Default Export
 *
 * */
export default MapLineSeries;
