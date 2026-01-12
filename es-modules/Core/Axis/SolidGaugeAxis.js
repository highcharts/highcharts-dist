/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import ColorAxisBase from './Color/ColorAxisBase';
import U from '../Utilities.js';
const { extend } = U;
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
