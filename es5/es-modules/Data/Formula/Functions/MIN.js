/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */
'use strict';
import FormulaProcessor from '../FormulaProcessor.js';
var getArgumentsValues = FormulaProcessor.getArgumentsValues;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MIN(...values)` implementation. Calculates the lowest
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.MIN
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MIN(args, table) {
    var values = getArgumentsValues(args, table);
    var result = Number.POSITIVE_INFINITY;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (value < result) {
                    result = value;
                }
                break;
            case 'object':
                value = MIN(value);
                if (value < result) {
                    result = value;
                }
                break;
        }
    }
    return isFinite(result) ? result : 0;
}
/* *
 *
 *  Registry
 *
 * */
FormulaProcessor.registerProcessorFunction('MIN', MIN);
/* *
 *
 *  Default Export
 *
 * */
export default MIN;
