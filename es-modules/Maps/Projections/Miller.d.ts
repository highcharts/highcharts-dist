import type { LonLatArray, ProjectedXYArray } from '../MapViewOptions';
import type ProjectionDefinition from '../ProjectionDefinition';
/**
 * The Miller cylindrical projection is a modified Mercator projection, proposed
 * by Osborn Maitland Miller in 1942. Compared to Mercator, the vertical
 * exaggeration of polar areas is smaller, so the relative size of areas is
 * more correct.
 *
 * Highcharts used this as the default map projection for world maps until the
 * Map Collection v2.0 and Highcharts v10.0, when projection math was moved to
 * the client side and EqualEarth chosen as the default world map projection.
 *
 * @class
 * @name Highcharts.Miller
 */
declare class Miller implements ProjectionDefinition {
    forward(lonLat: LonLatArray): ProjectedXYArray;
    inverse(xy: ProjectedXYArray): LonLatArray;
}
export default Miller;
