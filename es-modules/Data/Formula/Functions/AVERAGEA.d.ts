import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
/**
 * Processor for the `AVERAGEA(...values)` implementation. Calculates the
 * average of the given values. Strings and FALSE are calculated as 0.
 *
 * @private
 * @function Formula.processorFunctions.AVERAGEA
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
declare function AVERAGEA(args: Arguments, table?: DataTable): number;
export default AVERAGEA;
