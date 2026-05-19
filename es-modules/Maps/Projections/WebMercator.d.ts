import type { LonLatArray, ProjectedXYArray } from '../MapViewOptions';
import type ProjectionDefinition from '../ProjectionDefinition';
/**
 * Web Mercator is a variant of the Mercator map projection and is the de facto
 * standard for Web mapping applications.
 *
 * Web Mercator is primarily created for tiled map services, as when zooming in
 * to smaller scales, the angle between lines on the surface is approximately
 * retained.
 *
 * The great disadvantage of Web Mercator is that areas inflate with distance
 * from the equator. For example, in the world map, Greenland appears roughly
 * the same size as Africa. In reality Africa is 14 times larger, as is apparent
 * from the Equal Earth or Orthographic projections.
 *
 * @class
 * @name Highcharts.WebMercator
 */
declare class WebMercator implements ProjectionDefinition {
    forward(lonLat: LonLatArray): ProjectedXYArray;
    inverse(xy: ProjectedXYArray): LonLatArray;
}
export default WebMercator;
