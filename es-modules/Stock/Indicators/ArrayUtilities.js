/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Fus & Daniel Studencki
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 * */
'use strict';
/* *
 *
 *  Functions
 *
 * */
/**
 * Get extremes of array filled by OHLC data.
 *
 * @internal
 *
 * @param {Array<Array<number>>} arr
 * Array of OHLC points (arrays).
 *
 * @param {number} minIndex
 * Index of "low" value in point array.
 *
 * @param {number} maxIndex
 * Index of "high" value in point array.
 *
 * @return {Array<number,number>}
 * Returns array with min and max value.
 */
function getArrayExtremes(arr, minIndex, maxIndex) {
    return arr.reduce((prev, target) => [
        Math.min(prev[0], target[minIndex]),
        Math.max(prev[1], target[maxIndex])
    ], [Number.MAX_VALUE, -Number.MAX_VALUE]);
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const ArrayUtilities = {
    getArrayExtremes
};
/** @internal */
export default ArrayUtilities;
