import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
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
declare function AVERAGE(args: Arguments, table?: DataTable): number;
export default AVERAGE;
