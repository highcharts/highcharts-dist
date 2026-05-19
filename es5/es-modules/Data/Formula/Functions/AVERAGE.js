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
 * Processor for the `AVERAGE(...values)` implementation. Calculates the average
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.AVERAGE
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
function AVERAGE(args, table) {
    var values = getArgumentsValues(args, table);
    var count = 0, result = 0;
    for (var i = 0, iEnd = values.length, value = void 0; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                    result += value;
                }
                break;
            case 'object':
                for (var j = 0, jEnd = value.length, value2 = void 0; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        ++count;
                        result += value2;
                    }
                }
                break;
        }
    }
    return (count ? (result / count) : 0);
}
/* *
 *
 *  Registry
 *
 * */
FormulaProcessor.registerProcessorFunction('AVERAGE', AVERAGE);
/* *
 *
 *  Default Export
 *
 * */
export default AVERAGE;
