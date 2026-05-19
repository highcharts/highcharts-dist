/* *
 *
 *  (c) 2019-2026 Highsoft AS
 *
 *  Boost module: stripped-down renderer for higher performance
 *
 *  License: highcharts.com/license
 *
 *
 * */
'use strict';
/* *
 *
 *  Imports
 *
 * */
import Boostables from './Boostables.js';
/* *
 *
 *  Constants
 *
 * */
/**
 * These are the series we allow boosting for.
 * @internal
 */
var BoostableMap = {};
Boostables.forEach(function (item) {
    BoostableMap[item] = true;
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default BoostableMap;
