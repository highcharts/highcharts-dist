import type Pyramid3DPoint from './Pyramid3DPoint';
import type Pyramid3DSeriesOptions from './Pyramid3DSeriesOptions';
declare const Funnel3DSeries: typeof import("../Funnel3D/Funnel3DSeries").default;
/**
 * The pyramid3d series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pyramid3d
 * @augments seriesTypes.funnel3d
 * @requires highcharts-3d
 * @requires modules/cylinder
 * @requires modules/funnel3d
 * @requires modules/pyramid3d
 */
declare class Pyramid3DSeries extends Funnel3DSeries {
    static defaultOptions: Pyramid3DSeriesOptions;
    data: Array<Pyramid3DPoint>;
    options: Pyramid3DSeriesOptions;
    points: Array<Pyramid3DPoint>;
}
interface Pyramid3DSeries {
    pointClass: typeof Pyramid3DPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pyramid3d: typeof Pyramid3DSeries;
    }
}
export default Pyramid3DSeries;
