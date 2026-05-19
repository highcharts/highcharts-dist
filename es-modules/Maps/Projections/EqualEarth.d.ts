import type { LonLatArray, ProjectedXYArray } from '../MapViewOptions';
import type ProjectionDefinition from '../ProjectionDefinition';
/**
 * The Equal Earth map projection is an equal-area pseudocylindrical projection
 * for world maps, invented by Bojan Šavrič, Bernhard Jenny, and Tom Patterson
 * in 2018. It is inspired by the widely used Robinson projection, but unlike
 * the Robinson projection, retains the relative size of areas. The projection
 * equations are simple to implement and fast to evaluate.
 *
 * We chose this as the default world map projection for Highcharts because it
 * is visually pleasing like Robinson, but avoids the political problem of
 * rendering high-latitude regions like Europe and North America larger than
 * tropical regions.
 *
 * @class
 * @name Highcharts.EqualEarth
 */
declare class EqualEarth implements ProjectionDefinition {
    forward(lonLat: LonLatArray): ProjectedXYArray;
    inverse(xy: ProjectedXYArray): LonLatArray;
}
export default EqualEarth;
