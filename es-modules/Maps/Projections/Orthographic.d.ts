import type { LonLatArray, ProjectedXYArray } from '../MapViewOptions';
import type ProjectionDefinition from '../ProjectionDefinition';
/**
 * The orthographic projection is an azimuthal perspective projection,
 * projecting the Earth's surface from an infinite distance to a plane.
 * It gives the illusion of a three-dimensional globe.
 *
 * Its disadvantage is that it fails to render the whole world in one view.
 * However, since the distortion is small at the center of the view, it is great
 * at rendering limited areas of the globe, or at showing the positions of areas
 * on the globe.
 *
 * @class
 * @name Highcharts.Orthographic
 */
declare class Orthographic implements ProjectionDefinition {
    forward(lonLat: LonLatArray): ProjectedXYArray;
    inverse(xy: ProjectedXYArray): LonLatArray;
}
export default Orthographic;
