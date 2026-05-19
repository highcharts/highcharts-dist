import LambertConformalConic from './LambertConformalConic.js';
import EqualEarth from './EqualEarth.js';
import Miller from './Miller.js';
import Orthographic from './Orthographic.js';
import WebMercator from './WebMercator.js';
/**
 * @interface Highcharts.ProjectionRegistry
 */
export interface ProjectionRegistry {
    EqualEarth: typeof EqualEarth;
    LambertConformalConic: typeof LambertConformalConic;
    Miller: typeof Miller;
    Orthographic: typeof Orthographic;
    WebMercator: typeof WebMercator;
}
/**
 * @typedef {keyof Highcharts.ProjectionRegistry} Highcharts.ProjectionRegistryName
 */
export type ProjectionRegistryName = keyof ProjectionRegistry;
declare const projectionRegistry: ProjectionRegistry;
export default projectionRegistry;
