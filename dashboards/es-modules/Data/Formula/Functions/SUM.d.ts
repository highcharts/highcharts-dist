import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
/**
 * Processor for the `SUM(...values)` implementation. Calculates the sum of the
 * given values.
 *
 * @private
 * @function Formula.processorFunctions.SUM
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
declare function SUM(args: Arguments, table?: DataTable): number;
export default SUM;
