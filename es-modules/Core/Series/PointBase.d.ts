import type PointOptions from './PointOptions';
import type SeriesBase from './SeriesBase';
/**
 * Helper interface for point types to add optional members to all point
 * instances.
 *
 * Use the `declare module './PointBase'` pattern to overload the interface in
 * this definition file.
 */
export interface PointBase {
    options: PointOptions;
    series: SeriesBase;
}
export default PointBase;
