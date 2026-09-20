/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import { extend } from '../../Shared/Utilities.js';
import ColorAxisBase from './Color/ColorAxisBase.js';
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function init(axis) {
    extend(axis, ColorAxisBase);
}
/* *
 *
 *  Default export
 *
 * */
/** @internal */
const SolidGaugeAxis = {
    init
};
/** @internal */
export default SolidGaugeAxis;
