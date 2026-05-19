import type { LonLatArray, ProjectedXYArray } from '../MapViewOptions';
import type ProjectionDefinition from '../ProjectionDefinition';
import type ProjectionOptions from '../ProjectionOptions';
/**
 * The Lambert conformal conic projection (LCC) is a conic map projection used
 * for many national and regional mapping systems.
 *
 * Its advantage lies in mapping smaller areas like countries or continents.
 * Two standard parallels are given, and between these, the distortion is
 * minimal.
 *
 * In Highcharts, LCC is the default projection when loading a map smaller than
 * 180 degrees width and 90 degrees height.
 *
 * For custom use, `rotation` should be set to adjust the reference longitude,
 * in addition to the `parallels` option.
 *
 * @class
 * @name Highcharts.LambertConformalConic
 *
 * @param {Highcharts.MapViewProjectionOptions} options
 * The projection options, with support for `parallels`.
 */
declare class LambertConformalConic implements ProjectionDefinition {
    constructor(options: ProjectionOptions);
    forward(lonLat: LonLatArray): ProjectedXYArray;
    inverse(xy: ProjectedXYArray): LonLatArray;
}
export default LambertConformalConic;
