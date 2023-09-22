import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
/**
 * Processor for the `OR(...tests)` implementation. Returns `TRUE`, if one test
 * result is not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
declare function OR(args: Arguments, table?: DataTable): boolean;
export default OR;
