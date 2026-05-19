/* *
 *
 *  Projection registry
 *
 *  (c) 2021-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *  Authors:
 *  - Torstein Hønsi
 *
 * */
'use strict';
/* *
 *
 *  Imports
 *
 * */
import LambertConformalConic from './LambertConformalConic.js';
import EqualEarth from './EqualEarth.js';
import Miller from './Miller.js';
import Orthographic from './Orthographic.js';
import WebMercator from './WebMercator.js';
/* *
 *
 *  Constants
 *
 * */
var projectionRegistry = {
    EqualEarth: EqualEarth,
    LambertConformalConic: LambertConformalConic,
    Miller: Miller,
    Orthographic: Orthographic,
    WebMercator: WebMercator
};
/* *
 *
 *  Default Export
 *
 * */
export default projectionRegistry;
