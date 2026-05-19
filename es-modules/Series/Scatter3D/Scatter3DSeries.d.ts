import type Scatter3DSeriesOptions from './Scatter3DSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import Scatter3DPoint from './Scatter3DPoint.js';
import ScatterSeries from '../Scatter/ScatterSeries.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.scatter3d
 *
 * @augments Highcharts.Series
 */
declare class Scatter3DSeries extends ScatterSeries {
    static defaultOptions: Scatter3DSeriesOptions;
    data: Array<Scatter3DPoint>;
    options: Scatter3DSeriesOptions;
    points: Array<Scatter3DPoint>;
    pointAttribs(point: Scatter3DPoint): SVGAttributes;
}
interface Scatter3DSeries {
    pointClass: typeof Scatter3DPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        scatter3d: typeof Scatter3DSeries;
    }
}
export default Scatter3DSeries;
