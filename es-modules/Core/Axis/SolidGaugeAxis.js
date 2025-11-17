/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
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
/**
 * @private
 */
function init(axis) {
    extend(axis, ColorAxisBase);
}
/* *
 *
 *  Default export
 *
 * */
const SolidGaugeAxis = {
    init
};
export default SolidGaugeAxis;
