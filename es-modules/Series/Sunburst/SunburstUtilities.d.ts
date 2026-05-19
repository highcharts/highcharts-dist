import type { SunburstSeriesLevelOptions } from './SunburstSeriesOptions';
import type SunburstNode from './SunburstNode.js';
/**
 * @private
 * @function calculateLevelSizes
 *
 * @param {Object} levelOptions
 * Map of level to its options.
 *
 * @param {Highcharts.Dictionary<number>} params
 * Object containing number parameters `innerRadius` and `outerRadius`.
 *
 * @return {Highcharts.SunburstSeriesLevelsOptions|undefined}
 * Returns the modified options, or undefined.
 */
declare function calculateLevelSizes(levelOptions: SunburstSeriesLevelOptions, params: Record<string, number>): (SunburstSeriesLevelOptions | undefined);
/**
 * @private
 */
declare function getLevelFromAndTo({ level, height }: SunburstNode): {
    from: number;
    to: number;
};
/**
 * TODO introduce step, which should default to 1.
 * @private
 */
declare function range(from: unknown, to: unknown): Array<number>;
declare const SunburstUtilities: {
    calculateLevelSizes: typeof calculateLevelSizes;
    getLevelFromAndTo: typeof getLevelFromAndTo;
    range: typeof range;
    recursive: typeof import("../Treemap/TreemapUtilities").default.recursive;
};
export default SunburstUtilities;
